import { AppConstant } from '../app.constant';

const numberDays: any = [0,1,2,3,4,5,6,7,8,9,10];
const yesNoList: any = [{viewValue: 'Yes', value: 1},{viewValue: 'No', value: 0}];
export const predictionModel: any = {
    [AppConstant.predictForm.bodytemperature] : [{viewValue: 'Below 95 degree Fahrenheit', value: 94}, {viewValue: 'Between 95 to 100 degree Fahrenheit', value: 95}, {viewValue: 'Between 100 to 103 degree Fahrenheit', value: 101}, {viewValue: 'Between 103 to 106 degree Fahrenheit', value: 105}, {viewValue: 'Above 106 degree Fahrenheit', value: 107}],
    [AppConstant.predictForm.feverdays]: numberDays,
    [AppConstant.predictForm.coughdays]: numberDays,
    [AppConstant.predictForm.travelhistory]: yesNoList,
    [AppConstant.predictForm.age]: [{viewValue: 'Below 10 Years', value: 9}, {viewValue: 'Between 10 to 30 Years', value: 11}, {viewValue: 'Between 30 to 50 Years', value: 40}, {viewValue: 'Between 50 to 70 Years',value: 51}, {viewValue: 'Above 70 Years', value: 70}],
    [AppConstant.predictForm.medicalailment]: yesNoList,
}
export const panicPredictionModel: any = {
    [AppConstant.panicPredictForm.onionquantity] : numberDays,
    [AppConstant.panicPredictForm.tomatoquantity]: numberDays,
    [AppConstant.panicPredictForm.breadquantity]: numberDays,
    [AppConstant.panicPredictForm.ricequantity]: numberDays,
    [AppConstant.panicPredictForm.dhalquantity]: numberDays,
    [AppConstant.panicPredictForm.personcount]: numberDays,
}