import { Component, Inject } from "@angular/core";
import { SeguridadService } from "./service/seguridad.service";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { MessageService } from "./service/message.service";

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { DialogOverviewExampleDialogComponent } from "./dialog-overview-example-dialog/dialog-overview-example-dialog.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: "250px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  constructor(
    public dialog: MatDialog
  ) {}
}
