export const AppConstant: any = {
    errorMessageResources: {
        general: {
          required: 'This field is required',
          email: 'Please give proper email id',
          emailExist: 'This email id already exist',
          emailNotExist: 'Email id does not exist',
          unauthorized: 'You are unauthorized'
        }
      },
      signupForm: {
        firstname: 'firstname',
        lastname: 'lastname',
        email: 'username',
        password: 'password',
        firstnameLabel: 'First Name',
        lastnameLabel: 'Last Name',
        emailLabel: 'Email',
        passwordLabel: 'Password',
      },     
      signinForm: {
        email: 'username',
        password: 'password',
        emailLabel: 'Email',
        passwordLabel: 'Password',
      },
      predictForm: {
        bodytemperature: 'current_body_temp',
        feverdays: 'fever_days',
        coughdays: 'cough_days',
        travelhistory: 'travel_history',
        age: 'age',
        medicalailment: 'medical_ailment',
        bodytemperatureLabel: 'Current Body Temperature',
        feverdaysLabel: 'No. of days having Fever',
        coughdaysLabel: 'No. of days having Cough',
        travelhistoryLabel: 'Travelled Out of Country in past 30 days',
        ageLabel: 'Age',
        medicalailmentLabel: 'Having any medical ailments (BP, Sugar etc)'
      },
      panicPredictForm: {
        onionquantity: 'onion_quantity',
        tomatoquantity: 'tomato_quantity',
        breadquantity: 'bread_quantity',
        ricequantity: 'rice_quantity',
        dhalquantity: 'dhal_quantity',
        personcount: 'person_count',
        onionquantityLabel: 'Onion Quantity',
        tomatoquantityLabel: 'Tomato Quantity',
        breadquantityLabel: 'Bread Quantity',
        ricequantityLabel: 'Rice Quantity',
        dhalquantityLabel: 'Dhal Quantity',
        personcountLabel: 'Family Head Count'
      },
      api: {
        predictionApi: 'predict_api',
        panicPredictApi: 'panic_predict_api'
      }
};