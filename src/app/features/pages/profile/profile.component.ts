import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from '@services/account.service';
import { Subject, takeUntil } from 'rxjs';
import { User } from '@core/models';
import { UserRoles } from '@core/values';
import { Icon } from '@shared/components/icon';
import { LoadingService } from '@core/services';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  UserRoles = UserRoles;
  Icons = Icon;

  user = this.accountService.currentUser;

  constructor(private accountService: AccountService, private loadingService: LoadingService) {}

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
}
