
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements',
  standalone: true,
  imports: [MatDialogActions, MatButtonModule, MatDialogClose, MatDialogContent, MatDialogTitle],
  templateUrl: './dialog-elements.component.html',
  styleUrl: './dialog-elements.component.css'
})
export class DialogElementsComponent {

}
