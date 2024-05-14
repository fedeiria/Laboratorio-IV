import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DialogCustom } from '../../../../models/dialog-custom';
import { MatDialogActions, MatDialogClose, MatDialogContent, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogContent, MatDialogClose, MatDialogTitle],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public message: DialogCustom) { }
}
