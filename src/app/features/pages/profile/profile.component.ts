import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '@services/account.service';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { User } from '@core/models';
import { NavigationFullPath, RoutePath, UserRoles } from '@core/values';
import { Icon } from '@shared/components/icon';
import { LoadingService } from '@core/services';
import { ModalService } from '@shared/components/dialog';
import { ModalOptions } from '@shared/components/dialog/models/modal-options.model';
import { ModalViewComponent } from '@shared/components/dialog/components/modal-view/modal-view.component';
import { AuthService } from '@features/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit, OnDestroy {
  UserRoles = UserRoles;
  Icons = Icon;
  user = this.accountService.currentUser;
  private destroy = new Subject();

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private modalService: ModalService,
    private loadingService: LoadingService,
    private router: Router,
  ) {}

  get isLoading$() {
    return this.loadingService.isLoading$;
  }

  ngOnInit() {
    this.loadingService.isLoading = true;

    this.accountService
      .getCurrentUser()
      .pipe(takeUntil(this.destroy))
      .subscribe((user: User) => {
        this.user = user;
        this.loadingService.isLoading = false;
      });
  }

  ngOnDestroy() {
    this.destroy.next(true);
  }

  onSignOutBtnClick() {
    const options = new ModalOptions();
    options.payload.title = 'Sign Out';
    options.payload.bodyText = 'Do you really want to sign out of your account?';

    this.modalService.show(ModalViewComponent, options);
    this.modalService.buttonEvent$?.pipe(take(1)).subscribe((result) => {
      if (result) {
        this.signOut().subscribe(() => {
          this.router.navigate([NavigationFullPath[RoutePath.SIGN_IN]]);
        });
      }
    });
  }

  private signOut(): Observable<boolean> {
    return this.authService.signOut().pipe(take(1));
  }
}
