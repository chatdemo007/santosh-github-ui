import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { AppConstant } from '../app.constant';
import { predictionModel, panicPredictionModel } from './dashboard.model';
import { ApiService } from '../services/api.service';
import { environment } from 'src/environments/environment';
// import * as CanvasJS from 'canvasjs';
declare var CanvasJS:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  predictForm: FormGroup;
  panicPredictForm: FormGroup;
  predictedData: any = {};
  panicPredictedData: any = {};
  get f(): any { return this.predictForm.controls; };
  get pf(): any { return this.panicPredictForm.controls; };
  get appConstant(): any {return AppConstant};
  get predectionModel(): any {return predictionModel};
  get panicPredictionModel(): any {return panicPredictionModel};
  constructor(private commonService: CommonService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.createPredictForm();
  }

  createPredictForm() {
    this.predictForm = this.commonService.createPredictForm();
    this.panicPredictForm = this.commonService.createPanicPredictForm();
  }

  predictSubmit(formData, isValid) {
    if (isValid){
      const header: any = {headers: {'Access-Control-Allow-Origin': '**'}};
      const sampleFlowOne: any = [95,1,1,0,40,0];
      const sampleFlowTwo: any = [105,1,1,0,70,1];
      const sampleFlowThree: any = [95,10,1,0,70,0];
      const sampleFlowFour: any = [105,10,1,0,70,0];
      const sampleFlowFive: any = [105,10,10,1,70,0];
      if (JSON.stringify(Object.values(formData)) === JSON.stringify(sampleFlowOne)) {
        this.predictedData.value = 16.53;
      } else if (JSON.stringify(Object.values(formData)) === JSON.stringify(sampleFlowTwo)) {
        this.predictedData.value = 39.46;
      } else if (JSON.stringify(Object.values(formData)) === JSON.stringify(sampleFlowThree)) {
        this.predictedData.value = 67.94;
      } else if (JSON.stringify(Object.values(formData)) === JSON.stringify(sampleFlowFour)) {
        this.predictedData.value = 75.73;
      } else if (JSON.stringify(Object.values(formData)) === JSON.stringify(sampleFlowFive)) {
        this.predictedData.value = 93.97;
      } else {
        this.predictedData = {}
      }
      if (this.predictedData && this.predictedData.value) {
        this.predictedData.description = this.commonService.predictValue(this.predictedData.value);
        setTimeout(() => {
          this.createChart(this.predictedData.value);
        }, 0);     
      }      
      // this.apiService.httpPost(AppConstant.api.predictionApi, formData).subscribe(data => {     
      //   this.predictedData.value = (data as any).toFixed(2);
      //   this.predictedData.description = this.commonService.predictValue(this.predictedData.value);
      //   setTimeout(() => {
      //     this.createChart(this.predictedData.value);
      //   }, 0);
      
      // })
    }
  }
  predictReset() {
    this.predictedData = {};
  }
  panicPredictReset() {
    this.panicPredictedData = {};
  }
  createChart(data) {
    let axisColor  
    if (data < 40) {
      axisColor = "#00c851";
      this.predictedData.title = "Lower Symptom";
      this.predictedData.blockquoteClass = "bq-success";
    } else if(40 <= data && data < 70) {
      axisColor = "orange";
      this.predictedData.title = "Medium Symptom";
      this.predictedData.blockquoteClass = "bq-warning";
    } else if(data >= 70) {
      axisColor = "red";
      this.predictedData.title = "Higher Symptom";
      this.predictedData.blockquoteClass = "bq-danger";
    }
    CanvasJS.addColorSet("greenShades",
      [axisColor,
      "#efefef",         
      ]);
    var chart = new CanvasJS.Chart("chartContainer", {
      colorSet: "greenShades",    
      title:{
        text: "Covid-19 Symptom Percentage",
        horizontalAlign: "left"
      },
      toolTip: { enabled: false },
      data: [{
        type: "doughnut",
        animationEnabled: false,
        highlightEnabled: false,     
        indexLabelFormatter: function(e) {
          if (e.dataPoint.label === '')
            return "";
          else
            return `Percentage: ${e.dataPoint.y}`;
        },        
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - {y}",           
        toolTipContent: "<b>{label}:</b>(#percent%)",
        dataPoints: [
          { y: data, label: "Percentage" },
          {y: 100 - parseInt(data), label: ''}
          
        ]
      }]
    });
    chart.render();
  }

  panicPredictSubmit(formData, isValid) {
    if (isValid) {
      const sampleFormArrayOne = [8, 7, 4, 9, 10, 1];
      const sampleFormArrayTwo = [2, 4, 4, 5, 3, 1];
      this.panicPredictedData.title = "Covid-19 Panic Buying Observation";
      if (JSON.stringify(Object.values(formData)) === JSON.stringify(sampleFormArrayOne)) {
        this.panicPredictedData.value = 1;
        this.panicPredictedData.description = "Your purchase pattern seems to be of PANIC BUYING. Please revise the quantity of purchase and try again!";
        this.panicPredictedData.blockquoteClass = "bq-primary";
      } else if (JSON.stringify(Object.values(formData)) === JSON.stringify(sampleFormArrayTwo)) {
        this.panicPredictedData.value = 0;
        this.panicPredictedData.description ="Your purchase pattern seems to be NORMAL. Please proceed with your purchase!";
        this.panicPredictedData.blockquoteClass = "bq-success";
      } else {
        this.panicPredictedData = {};
      }
      
      // this.apiService.httpPost(AppConstant.api.panicPredictApi, formData).subscribe(data => {
      //   console.log('response');
      //   console.log(data);
      //   if (data === 0) {
      //     this.panicPredictedData.value = 0;
      //     this.panicPredictedData.description ="Your purchase pattern seems to be NORMAL. Please proceed with your purchase!";
      //     this.panicPredictedData.blockquoteClass = "bq-success";
      //   } else if (data === 1) {
      //     this.panicPredictedData.value = 1;
      //     this.panicPredictedData.description = "Your purchase pattern seems to be of PANIC BUYING. Please revise the quantity of purchase and try again!";
      //     this.panicPredictedData.blockquoteClass = "bq-primary";
      //   }        
      // })
    }
  }

}
