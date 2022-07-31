import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { DialogView } from '@shared/components/dialog/models/dialog-view.model';
import { DialogOptions } from '@shared/components/dialog/models/dialog-options.model';
import { Observable, Subject } from 'rxjs';
import { DialogService } from '@shared/components/dialog/services/dialog.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService extends DialogService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
