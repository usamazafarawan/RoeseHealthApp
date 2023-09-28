import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
// @ts-ignore
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: "app-clia-waived-form",
  templateUrl: "./clia-waived-form.component.html",
  styleUrls: ["./clia-waived-form.component.scss"],
})

export class CliaWaivedFormComponent implements OnInit {
  //#region view childs and global declarations/assignments

  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  @ViewChild('setPages', { static: false }) setPages!: ElementRef;

  reasonTest: string[] = [
    "reason_Follow_Up",
    "others_check",
    "reason_Return_Duty",
    "reason_Post_Accident",
    "reason_Pre_Employement",
    "reason_Reasonable_Cause",
    "reason_Random",
  ]; // Add more checkboxes if needed
  idVerified: string[] = ["photo_Id", "employee_Rep"];
  specimenTemperature: string[] = [
    "speimen_temperature_yes",
    "speimen_temperature_No",
  ];
  Oxident: string[] = ["oxident_Normal", "oxident_AbNormal"];
  specificGravity: string[] = [
    "specific_Gravity_Normal",
    "specific_Gravity_AbNormal",
  ];
  Ph: string[] = ["pH_Normal", "pH_AbNormal"];
  Nitrite: string[] = ["nitrite_Normal", "nitrite_AbNormal"];
  gl: string[] = ["GL_Normal", "GL_AbNormal"];
  Createinine: string[] = ["createinine_Normal", "createinine_AbNormal"];
  Amphetamine: string[] = ['amphetamine_Neg',
    'amphetamine_Presumptive',
    'amphetamine_NotTested'];
  benzodiazepines: string[] = ['benzodiazepines_Neg', 'benzodiazepines_Presumptive', 'benzodiazepines_NotTested']
  buprenorphine: string[] = ['buprenorphine_Neg', 'buprenorphine_Presumptive', 'buprenorphine_NotTested']
  cocaine: string[] = ['cocaine_Neg', 'cocaine_Presumptive', 'cocaine_NotTested']
  marijuana: string[] = ['marijuana_Neg', 'marijuana_Presumptive', 'marijuana_NotTested']
  methadone: string[] = ['methadone_Neg', 'methadone_Presumptive', 'methadone_NotTested']
  methamphetamine: string[] = ['methamphetamine_Neg', 'methamphetamine_Presumptive', 'methamphetamine_NotTested']
  Ecstasy: string[] = ['Ecstasy_Neg', 'Ecstasy_Presumptive', 'Ecstasy_NotTested']
  opiate: string[] = ['opiate_Neg', 'opiate_Presumptive', 'opiate_NotTested']
  oxycodone: string[] = ['oxycodone_Neg', 'oxycodone_Presumptive', 'oxycodone_NotTested']
  phencyclidine: string[] = ['phencyclidine_Neg', 'phencyclidine_Presumptive', 'phencyclidine_NotTested']
  propoxyphene: string[] = ['propoxyphene_Neg', 'propoxyphene_Presumptive', 'propoxyphene_NotTested']
  antidepressants: string[] = ['antidepressants_Neg', 'antidepressants_Presumptive', 'antidepressants_NotTested']
  others: string[] = ['others_Neg', 'others_Presumptive', 'others_NotTested']
  results: string[] = ['results_Neg', 'results_Presumptive', 'results_NotTested']
  cliaWavied: FormGroup = this.fb.group({
    specimen_id: '',
    company_Name: "",
    Name: "",
    Address: "",
    Suite: "",
    City: "",
    State: "",
    postal_Code: "",
    Phone: "",
    Fax: "",
    employee_id_No: "",
    photo_Id: false,
    employee_Rep: false,
    donor_Name_Last: "",
    donor_Name_First: "",
    reason_Pre_Employement: false,
    reason_Random: false,
    reason_Reasonable_Cause: false,
    reason_Post_Accident: false,
    reason_Return_Duty: false,
    reason_Follow_Up: false,
    others_check: false,
    others_input: "",
    collector_Name: "",
    collector_Phone: "",
    collector_Fax: "",
    speimen_temperature_yes: false,
    speimen_temperature_No: false,
    speimen_temperature_input: '',
    signature_Donor: "",
    donor_Docter_Name: "",
    donor_Docter_Date: "",
    donor_Docter_DayPhone: "",
    donor_Docter_EvePhone: "",
    donor_DOB: "",
    // ON-SITE SCREENING
    primilary_Result: false,
    results_Lot: "",
    results_ExpDate: "",
    screen_Performed_By: "",
    screen_Performed_Date: "",
    screen_Remarks: "",
    screen_Remarks1: "",
    screen_Remarks2: "",
    Remarks_combinedValue: "",
    // SPECIMAN VALIDITY TEST RESULT
    oxident_Normal: false,
    oxident_AbNormal: false,
    specific_Gravity_Normal: false,
    specific_Gravity_AbNormal: false,
    pH_Normal: false,
    pH_AbNormal: false,
    nitrite_Normal: false,
    nitrite_AbNormal: false,
    GL_Normal: false,
    GL_AbNormal: false,
    createinine_Normal: false,
    createinine_AbNormal: false,
    // DRUD NAMES
    amphetamine_Neg: false,
    amphetamine_Presumptive: false,
    amphetamine_NotTested: false,
    benzodiazepines_Neg: false,
    benzodiazepines_Presumptive: false,
    benzodiazepines_NotTested: false,
    buprenorphine_Neg: false,
    buprenorphine_Presumptive: false,
    buprenorphine_NotTested: false,
    cocaine_Neg: false,
    cocaine_Presumptive: false,
    cocaine_NotTested: false,
    marijuana_Neg: false,
    marijuana_Presumptive: false,
    marijuana_NotTested: false,
    methadone_Neg: false,
    methadone_Presumptive: false,
    methadone_NotTested: false,
    methamphetamine_Neg: false,
    methamphetamine_Presumptive: false,
    methamphetamine_NotTested: false,
    Ecstasy_Neg: false,
    Ecstasy_Presumptive: false,
    Ecstasy_NotTested: false,
    opiate_Neg: false,
    opiate_Presumptive: false,
    opiate_NotTested: false,
    oxycodone_Neg: false,
    oxycodone_Presumptive: false,
    oxycodone_NotTested: false,
    phencyclidine_Neg: false,
    phencyclidine_Presumptive: false,
    phencyclidine_NotTested: false,
    propoxyphene_Neg: false,
    propoxyphene_Presumptive: false,
    propoxyphene_NotTested: false,
    antidepressants_Neg: false,
    antidepressants_Presumptive: false,
    antidepressants_NotTested: false,
    others_Neg: false,
    others_Presumptive: false,
    others_NotTested: false,
    drug_Others: "",
    results_Neg: false,
    results_Presumptive: false,
    results_NotTested: false,
    checked_all_normal: false,
    signature_Collecter: "",
    collecter_Name: ""
  });

  //#endregion

  //#region constructor and ngOnInit hooks
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void { }

  //#endregion

  //#region updateCheckbox, normalChecked and checkedAllNormal methods

  /**
   * update checkbox state
   * @param checkboxName checkbox name
   * @param groupName group name
   */
  updateCheckbox(checkboxName: string, groupName: string[]) {
    console.log("groupName: ", groupName);
    console.log("checkboxName: ", checkboxName);
    groupName.forEach((name: any) => {
      if (name != checkboxName) {
        console.log('name: ', name);
        this.cliaWavied.get(name)?.setValue(false);
      }
    });
  }

    /**
   * normal checked case (solo)
   */
  normalChecked() {
    if (this.cliaWavied.value.nitrite_Normal && this.cliaWavied.value.specific_Gravity_Normal && this.cliaWavied.value.pH_Normal && this.cliaWavied.value.GL_Normal && this.cliaWavied.value.createinine_Normal && this.cliaWavied.value.oxident_Normal) {
      this.cliaWavied.controls["checked_all_normal"].setValue(true);
    } else {
      this.cliaWavied.controls["checked_all_normal"].setValue(false);
    }
  }

  /**
   * checked all handiling (all)
   * @param checked checked status
   */
  checkedAllNormal(checked: boolean) {
    if (checked) {
      this.cliaWavied.patchValue({
        oxident_Normal: true,
        specific_Gravity_Normal: true,
        pH_Normal: true,
        nitrite_Normal: true,
        GL_Normal: true,
        createinine_Normal: true
      })
      this.cliaWavied.patchValue({
        oxident_AbNormal: false,
        specific_Gravity_AbNormal: false,
        pH_AbNormal: false,
        nitrite_AbNormal: false,
        GL_AbNormal: false,
        createinine_AbNormal: false
      })

    } else {
      this.cliaWavied.patchValue({
        oxident_Normal: false,
        specific_Gravity_Normal: false,
        pH_Normal: false,
        nitrite_Normal: false,
        GL_Normal: false,
        createinine_Normal: false
      })
    }
  }

  //#endregion

  //#region exportToPDF() and submit() methods

  /**
 * submit
 */
  submit() {
    const { screen_Remarks, screen_Remarks1, screen_Remarks2 } = this.cliaWavied.value;
    this.cliaWavied.patchValue({ Remarks_combinedValue: `${screen_Remarks}${screen_Remarks1}${screen_Remarks2}` });
    console.log("cliaData", this.cliaWavied.value)
  }

  /**
   * export to pdf
   */
  exportToPDF() {
    const content = this.pdfContent.nativeElement;
    const inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
      const inputType = inputs[i].getAttribute("type");
      if (inputType === "date" || inputType === "text") {
        inputs[i].style.marginTop = '3px'
      }
    }

    // const content = this.pdfContent.nativeElement;
    const options = {
      margin: 10,
      filename: 'clia-form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a1', orientation: 'portrait' }
    };

    html2pdf().from(content).set(options).save();

    setTimeout(() => {
      for (let i = 0; i < inputs.length; i++) {
        const inputType = inputs[i].getAttribute("type");
        if (inputType === "date" || inputType === "text") {
          console.log(inputs[i]);
          inputs[i].style.marginTop = '0px'
        }
      }
    },0);

  }

  //#endregion

}