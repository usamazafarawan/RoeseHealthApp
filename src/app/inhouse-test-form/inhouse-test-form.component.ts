import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-inhouse-test-form',
  templateUrl: './inhouse-test-form.component.html',
  styleUrls: ['./inhouse-test-form.component.scss']
})

export class InHouseTestFormComponent implements OnInit {
  //#region view childs and global declarations/assignments
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  selctedFile: string = '';
  baseString: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  isPositive: boolean = false;
  southwestForm: FormGroup = this.fb.group({
    patientName: "",
    date: "",
    DOB: "",
    prividers: "",
    a1c_value: "",
    fbs: "",
    streep: "",
    FLU: "",
    PYLORI: "",
    PREGNENCY: "",
    BLOOD: "",
    FECAL: "",
    prividers_signature: "",
    prividers_Date: "",
    COVID: "",
    image64String: "",
    flu_positive: ""
  });

  //#endregion

  //#region constructor and ngOnInit hooks
  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.southwestForm.get('FLU')?.valueChanges.subscribe((selectedOption: string) => {
      if((selectedOption === 'positive')){
        this.isPositive = true;
      }else{
        this.isPositive = false;
        this.southwestForm.patchValue({flu_positive: ''});
      }
    });
  }

  //#endregion

  //#region onFileSelection, readAndShowImage and convertToBase64 methods

  /**
   * on file selection
   * @param event event
   */
  onFileSelection(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      this.convertToBase64(file);
    }

    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.readAndShowImage(file);
    }
  }

  /**
   * read and show image
   * @param file file
   */
  readAndShowImage(file: File) {
    console.log('file: ', file);
    this.selctedFile = file.name
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  /**
   * convert to base64 format
   * @param file file
   */
  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      this.baseString = base64String
      console.log('base64String: ', base64String);
      // Now you have the Base64 string, you can use it as needed
      console.log(base64String);
    };
    reader.readAsDataURL(file);
  }

  //#endregion

  //#region exportToPDF() and submit() methods

  /**
   * export to pdf
   */
  exportToPDF() {
    const inputs = document.getElementsByTagName("input");
    for(let i = 0; i < inputs.length; i++) {
        const inputType = inputs[i].getAttribute("type");
        if (inputType === "date" || inputType === "text") {
          inputs[i].style.marginTop = '5px'
        }
      }

    const content = this.pdfContent.nativeElement;
    const options = {
      margin: 10,
      filename: 'inHouse-form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a2', orientation: 'portrait' }
    };

    html2pdf()
      .from(content)
      .set(options)
      .save();

      setTimeout(() => {
        for (let i = 0; i < inputs.length; i++) {
          const inputType = inputs[i].getAttribute("type");
          if (inputType === "date" || inputType === "text") {
            console.log(inputs[i]);
            inputs[i].style.marginTop = '0px'
          }
        }
      },0)
  }

  /**
   * submit
   */
  submit() {
    this.southwestForm.patchValue({ image64String: this.baseString });
    console.log("Submit", this.southwestForm.value)
  }

  //#endregion

}