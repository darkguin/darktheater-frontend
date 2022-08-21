import { Component, OnDestroy, TemplateRef, ViewChild } from '@angular/core';
import { TextFieldType } from '@shared/components/text-field/values/text-field-type.enum';
import { NavigationFullPath, NavigationPath } from '@core/values';
import { AuthService } from '@features/auth/services/auth.service';
import { Credentials } from '@core/models';
import { catchError, Subject, take, takeUntil, throwError } from 'rxjs';
import { LoadingService } from '@core/services';
import { ModalOptions } from '@shared/components/dialog/models/modal-options.model';
import { ModalService } from '@shared/components/dialog';
import { ModalViewComponent } from '@shared/components/dialog/components/modal-view/modal-view.component';
import { Router } from '@angular/router';
import { AuthFormType } from '@features/auth/values/auth-form-type.enum';
import { AuthFormService } from '@features/auth/services/auth-form.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnDestroy {
  private destroy = new Subject();

  textFieldType = TextFieldType;
  authFormType = AuthFormType;
  credentials: Credentials = {};

  @ViewChild('successModal')
  public successModalRef!: TemplateRef<any>;

  get forgotPasswordPath() {
    return NavigationFullPath[NavigationPath.RESET_PASSWORD];
  }

  get signInPath() {
    return NavigationFullPath[NavigationPath.SIGN_IN];
  }

  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: ModalService,
    private loadingService: LoadingService,
    private authFormService: AuthFormService,
  ) {}

  ngOnDestroy() {
    this.destroy.next(true);
  }

  initModalOptions(): ModalOptions {
    const options = new ModalOptions();
    options.maxWidth = '600px';
    options.payload.bodyViewRef = this.successModalRef;
    return options;
  }

  onCloseModal() {
    this.router.navigate([this.signInPath]);
  }

  onSubmit(credentials: Credentials) {
    this.credentials = credentials;
    this.loadingService.isLoading = true;

    const modalOptions = this.initModalOptions();

    this.authService
      .signUp(credentials)
      .pipe(
        takeUntil(this.destroy),
        catchError((err) => {
          this.loadingService.isLoading = false;
          return throwError(err);
        }),
      )
      .subscribe((_: boolean) => {
        this.authFormService.resetForm();
        this.loadingService.isLoading = false;

        this.modalService.show(ModalViewComponent, modalOptions);
        this.modalService.buttonEvent$?.pipe(take(1)).subscribe(() => this.onCloseModal());
      });
  }
}
