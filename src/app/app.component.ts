import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { PhysicianOrderFormComponent } from "./physician-order-form/physician-order-form.component";
import { EliteFormComponent } from "./elite-form/elite-form.component";
import { ChildShelterExamComponent } from "./child-shelter-exam/child-shelter-exam.component";
import { CliaWaivedFormComponent } from "./clia-waived-form/clia-waived-form.component";
import { InHouseTestFormComponent } from "./inhouse-test-form/inhouse-test-form.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "demo-prject";
  constructor(private readonly router: Router, public dialog: MatDialog) {}

  physicianDialog() {
    const dialogRef = this.dialog.open(PhysicianOrderFormComponent, {
      height: "95%",
      minWidth: "95%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  eliteDialog() {
    const dialogRef = this.dialog.open(EliteFormComponent, {
      height: "95%",

      minWidth: "95%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  shelterDialog() {
    const dialogRef = this.dialog.open(ChildShelterExamComponent, {
      minWidth: "95%",
      height: "95%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  cliaDialog() {
    const dialogRef = this.dialog.open(CliaWaivedFormComponent, {
      minWidth: "95%",
      height: "95%",
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  inhouseDialog() {
    const dialogRef = this.dialog.open(InHouseTestFormComponent, {
      minWidth: "95%",
      height: "95%",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
