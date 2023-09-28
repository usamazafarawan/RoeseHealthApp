import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import { AddMarginService } from "../main.service";

@Component({
  selector: "app-elite-form",
  templateUrl: "./elite-form.component.html",
  styleUrls: ["./elite-form.component.scss"],
})

export class EliteFormComponent implements OnInit {
  //#region view childs and global declarations/assignments
  @ViewChild('eliteFormSection', { static: false }) eliteFormSection!: ElementRef;
  @ViewChild('tabelContainer', { static: false }) tabelContainer!: ElementRef;
  @ViewChild('footerContainer', { static: false }) footerContainer!: ElementRef;
  // form group
  eliteForm: FormGroup = this.fb.group({
    sugarLand: false,
    medicalCenter: false,
    westHuston: false,
    firstName: "",
    lastName: "",
    Male: false,
    Female: false,
    Dob: "",
    S_s: "",
    homePhone: "",
    cellPhone: "",
    insurrance: "",
    dateInjury: "",
    ID: "",
    Group: "",
    orderPhysician: "",
    Phone: "",
    Fax: "",
    cdCopy: false,
    copyFilm: false,
    verbalPhone: false,
    statFax: false,
    clinicalFinding: "",
    physicianSignature: "",
    physicianSignatureDate: "",
    cericval: "",
    lumber: "",
    thoracic: "",
    chest: "",
    BrainW_Ocontrast: false,
    BrainW_W_Ocontrast: false,
    BrainW_IACorPituitaryW_W_Ocontrast: false,
    OrbitsW_W_O: false,
    AbdomenW_Ocontrast: false,
    AbdomenW_W_Ocontrast: false,
    PelvisW_O: false,
    ShoulderW_Ocontrast: false,
    WristW_Ocontrast: false,
    KneeW_Ocontrast: false,
    AnkleW_Ocontrast: false,
    FootW_Ocontrast: false,
    CervicalSpineW_Ocontrast: false,
    CervicalSpineW_W_O: false,
    ThoracicSpineW_Ocontrast: false,
    ThoracicSpineW_W_O: false,
    LumbarSpineW_Ocontrast: false,
    LumbarSpineW_W_O: false,
    others_MRI: false,
    BrainW_OcontrastCt: false,
    BrainW_W_OcontrastCt: false,
    Sinus_specifyprotocol: false,
    TemporalBones: false,
    OrbitW_W_Ocontrast: false,
    SoftTissueNeckW_W_Ocontrast: false,
    ChestW_contrast: false,
    ChestW_W_Ocontrast: false,
    AbdomenW_OcontrastCt: false,
    AbdomenW_W_OcontrastCt: false,
    PelvisW_Ocontrast: false,
    PelvisW_W_Ocontrast: false,
    AbdomenPelvisW_Ocontrast: false,
    AbdomenPelvisW_W_Ocontrast: false,
    RenaiStoneProtocol: false,
    CervicalSpine: false,
    ThoracicSpine: false,
    LumbarSpine: false,
    CtOthers: false,
    Abdomen: false,
    Gallbladder: false,
    Liver: false,
    PelvicTransabdominal: false,
    PelvicWTransvaginal: false,
    RUQAbdominal: false,
    TesticularScrotum: false,
    Thyroid: false,
    RenalRenalDoppler: false,
    CarotidDoppler: false,
    ArterialDoppler: false,
    VenousDoppler: false,
    FNABiopsyThyroid: false,
    others_Ultrasound: false,
  });

  //#endregion

  //#region constructor and ngOnInit hooks
  constructor(private readonly fb: FormBuilder,private readonly addMarginService: AddMarginService) { }

  ngOnInit(): void { }
  //#endregion

  //#region exportToPDF() and submit() methods

  /**
   * export to pdf
   */
  exportToPDF() {
    const content = this.eliteFormSection.nativeElement;
    this.addMarginService.inputMargin('5px')

    const options = {
      margin: 10,
      filename: 'elite-Form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a2', orientation: 'portrait' }
    };

    html2pdf()
      .from(content)
      .set(options)
      .save();
      setTimeout(() => {
    this.addMarginService.inputMargin('0px')
        
      }, 0);
  }

  /**
   * submit
   */
  submit() {
    console.log("onSubmit", this.eliteForm.value);
  }

  //#endregion

}