import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import { AddMarginService } from "../main.service";

@Component({
  selector: "app-child-shelter-exam",
  templateUrl: "./child-shelter-exam.component.html",
  styleUrls: ["./child-shelter-exam.component.scss"],
})

export class ChildShelterExamComponent implements OnInit {
  //#region view childs and global declarations/assignments
  @ViewChild('childShelter', { static: false }) childShelter!: ElementRef;
  childShelterForm: FormGroup = this.fb.group({
    primaryCare: false,
    psyChaitry: false,
    vision: false,
    dental: false,
    neurologist: false,
    cardialogist: false,
    ENT: false,
    podiatory: false,
    othersSpecilist: false,
    specify: "",
    date: "",
    time: "",
    physicianName: "",
    physicianAddress1: "",
    physicianAddress2: "",
    phone: "",
    fax: "",
    allergies: "",
    Current_Medications: "",
    attached_MAR: "",
    Reason_for_visit1: "",
    Reason_for_visit2: "",
    Reason_for_visit3: "",
    Reason_for_visit4: "",
    Recommandation1: "",
    Recommandation2: "",
    Recommandation3: "",
    Recommandation4: "",
    Recommandation5: "",
    Name: "",
    DOB: "",
    Medicaide: "",
    Medicare: "",
    Recommandation_combinedValue: "",
    PhysicianAddress_combinedValue: "",
    Reason_for_visit_combinedValue: "",
    Next_Appointment_Date: "",
    appoinmentType_Time: "",
    printed_Physician_Name: "",
    printed_Physician_Date: "",
    physician_Specialist_signature: "",
    home_living_nurse: "",
    physician_date_time: "",
  });

  //#endregion

  //#region constructor and ngOnInit hooks
  constructor(private readonly fb: FormBuilder,private readonly addMarginService: AddMarginService) {}

  ngOnInit(): void {}

  //#endregion

  //#region exportToPDF() and submit methods

  /**
   * export to pdf
   */
  exportToPDF() {
    const content = this.childShelter.nativeElement;
    this.addMarginService.inputMargin('5px')
    const options = {
      margin: 10,
      filename: 'child-shelter-form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a2', orientation: 'Portrait' }
    };


    html2pdf()
      .from(content)
      .set(options)
      .save();
      setTimeout(()=>{
        this.addMarginService.inputMargin('0px')
    
        },0)
  }

    /**
   * submit
   */
  submit() {
    const {
      Reason_for_visit1,
      Reason_for_visit2,
      Reason_for_visit3,
      Reason_for_visit4,
    } = this.childShelterForm.value;
    const {
      Recommandation1,
      Recommandation2,
      Recommandation3,
      Recommandation4,
      Recommandation5,
    } = this.childShelterForm.value;
    const { physicianAddress1, physicianAddress2 } =
      this.childShelterForm.value;
    this.childShelterForm.patchValue({
      Recommandation_combinedValue: `${Recommandation1}${Recommandation2}${Recommandation3}${Recommandation4} ${Recommandation5}`,
      Reason_for_visit_combinedValue: `${Reason_for_visit1}${Reason_for_visit2}${Reason_for_visit3}${Reason_for_visit4} `,
      PhysicianAddress_combinedValue: `${physicianAddress1}${physicianAddress2}  `,
    });
    console.log("submit", this.childShelterForm.value);
  }

  //#endregion

}
