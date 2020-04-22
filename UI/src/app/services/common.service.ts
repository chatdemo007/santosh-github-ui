import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppConstant } from '.././app.constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private formBuilder: FormBuilder) { }

  createPredictForm() {
    return this.formBuilder.group({      
      [AppConstant.predictForm.bodytemperature]: [null, Validators.required],
      [AppConstant.predictForm.feverdays]: [null, Validators.required],
      [AppConstant.predictForm.coughdays]: [null, Validators.required],
      [AppConstant.predictForm.travelhistory]: [null, Validators.required],
      [AppConstant.predictForm.age]: [null, Validators.required],
      [AppConstant.predictForm.medicalailment]: [null, Validators.required],
    });
  }
  createPanicPredictForm() {
    return this.formBuilder.group({
      [AppConstant.panicPredictForm.onionquantity]: [null, Validators.required],
      [AppConstant.panicPredictForm.tomatoquantity]: [null, Validators.required],
      [AppConstant.panicPredictForm.breadquantity]: [null, Validators.required],
      [AppConstant.panicPredictForm.ricequantity]: [null, Validators.required],
      [AppConstant.panicPredictForm.dhalquantity]: [null, Validators.required],
      [AppConstant.panicPredictForm.personcount]: [null, Validators.required],
    });
  }

  predictValue(value) {
    if (value < 24) {
      return 'Please self isolate, as a precautionary measure and visit a doctor if symptoms persist!';         
    } else if (25<= value && value < 50) {
      return 'Please talk to a doctor on these symptoms!';
    } else if (50<= value && value < 70) {
      return 'Please visit nearby hospital for checkup!';
    } else if (70<= value && value < 90) {
      return 'Please get tested on high priority!';
    } else if (value >= 90) {
      return 'Please inform your local health authorities immediately!';
    }
  }

}
