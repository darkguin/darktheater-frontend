import { DialogService } from '@shared/components/dialog/services/dialog.service';
import { Subject } from 'rxjs';

export abstract class DialogContainer {
  protected destroy = new Subject();

  protected constructor(private dialogService: DialogService) {}

  protected destroyContainer() {
    this.dialogService.setDialogContainerRef(undefined);
    this.destroy.next(true);
  }
}
