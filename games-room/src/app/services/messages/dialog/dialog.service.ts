import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCustom } from '../../../models/dialog-custom';
import { DialogComponent } from '../../../components/layout/messages/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  showDialogMessage(data: DialogCustom): void {
    this.matDialog.open(DialogComponent, { data });
  }
}
