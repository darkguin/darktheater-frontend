import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from '@core/services';
import { catchError, Observable, Subject, takeUntil, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationType } from '@features/auth/values/confirmation-type.enum';
import { ConfirmationService } from '@features/pages/confirm/services/confirmation.service';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { ToastService } from '@shared/components/dialog';
import { ConfirmMessages } from '@features/pages/confirm/values/confirm-messages.enum';

@Component({
  selector: 'confirm-page',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  private token = '';
  private confirmationType!: ConfirmationType;

  get isLoading$(): Observable<boolean> {
    return this.loadingService.isLoading$;
  }

  constructor(
    private router: Router,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit() {
    this.loadingService.isLoading = true;

    const queryParams = this.activatedRoute.snapshot.queryParamMap;
    this.token = queryParams.get('token') as string;
    this.confirmationType = queryParams.get('type') as ConfirmationType;

    // @NOTE: Сброс пароля требует дополнительного ввода пароля
    if (this.confirmationType === ConfirmationType.PASSWORD_CHANGE) {
      this.loadingService.isLoading = false;
      return;
    }

    this.confirmAction(this.confirmationType, this.token).subscribe(() => {
      this.loadingService.isLoading = false;
      this.toastService.success(ConfirmMessages.SUCCESS, 8000);
      this.navigateTo(NavigationPath.SIGN_IN);
    });
  }

  ngOnDestroy() {
    this.destroy.next(this);
  }

  private confirmAction(action: ConfirmationType, token: string, payload?: string) {
    return this.confirmationService.confirmAction(action, token, payload).pipe(
      takeUntil(this.destroy),
      catchError((err) => {
        this.loadingService.isLoading = false;

        this.toastService.error(ConfirmMessages.ERROR, 8000);
        this.navigateTo(NavigationPath.SIGN_IN);

        return throwError(err);
      }),
    );
  }

  private navigateTo(path: NavigationPath) {
    const signInPath = NavigationFullPath[path];
    this.router.navigate([signInPath]);
  }

  onPasswordFormSubmit(password: string) {
    this.loadingService.isLoading = true;
    this.confirmAction(ConfirmationType.PASSWORD_CHANGE, this.token, password).subscribe(() => {
      this.loadingService.isLoading = false;
      this.toastService.success(ConfirmMessages.RESET_PASSWORD_SUCCESS, 8000);
      this.navigateTo(NavigationPath.SIGN_IN);
    });
  }
}
