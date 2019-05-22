import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from './utilitarios/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {name: "prueba"}
    });
  }
}
