import Vue from 'vue';
import Vuex from 'vuex';
import EmployeeService from '../services/EmployeeServices';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message:"",
    color:"",
    display:false,
    count: 0,
    mini: true,
    chartData: {
      "testCoverage": [56, 58, 60, 64, 55, 78, 80, 75, 87, 77, 89, 91, 91],
      "codeSmellPercent": [60, 54, 50, 45, 67, 90, 85, 87, 75, 87, 88, 89],
      "codeQualityPercent": [67, 29, 68, 70, 89, 90, 90, 89, 90, 89, 74, 67],
      "throughput": [6, 8, 7, 0, 9, 9, 4, 6, 7, 9, 5, 7],
      "kloc": [300, 299, 655, 334, 455, 888, 678, 985, 234, 656, 758, 565],
      "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },

    EmployeeObj: [
      { "employeeId": 1, "employeeName": "Neha", "teamName": "EY Team1", "developerKpiDto": [{ "date": "2020-08-24T01:20:12.2", "testCoverage": 90, "codeSmellPercent": 90, "codeQualityPercent": 90, "kloc": 1250, "throughput": 95 }, { "date": "2019-02-20T00:00:00", "testCoverage": 45, "codeSmellPercent": 65, "codeQualityPercent": 20, "kloc": 950, "throughput": 75 }, { "date": "2020-08-10T00:00:00", "testCoverage": 89, "codeSmellPercent": 82, "codeQualityPercent": 76, "kloc": 1000, "throughput": 92 }, { "date": "2019-02-06T00:00:00", "testCoverage": 56, "codeSmellPercent": 45, "codeQualityPercent": 62, "kloc": 670, "throughput": 60 }], "outOfBoxDto": [{ "date": "2020-08-24T01:01:38.503", "ideasToEnhanceTheCompany": "Follow a performance management tool", "ideasToEnhanceTheProject": "Use tool like Resharperq" }, { "date": "2019-02-20T00:00:00", "ideasToEnhanceTheCompany": "Use recommendation systems for EY badging", "ideasToEnhanceTheProject": null }] },
      { "employeeId": 2, "employeeName": "Sindhu", "teamName": "EY Team1", "developerKpiDto": [{ "date": "2020-08-24T01:20:42.22", "testCoverage": 100, "codeSmellPercent": 100, "codeQualityPercent": 65, "kloc": 4000, "throughput": 97 }, { "date": "2019-02-20T00:00:00", "testCoverage": 50, "codeSmellPercent": 78, "codeQualityPercent": 68, "kloc": 1200, "throughput": 74 }, { "date": "2020-08-10T00:00:00", "testCoverage": 97, "codeSmellPercent": 98, "codeQualityPercent": 95, "kloc": 1300, "throughput": 98 }, { "date": "2019-02-06T00:00:00", "testCoverage": 45, "codeSmellPercent": 65, "codeQualityPercent": 32, "kloc": 450, "throughput": 49 }], "outOfBoxDto": [{ "date": "2020-08-24T01:02:21.903", "ideasToEnhanceTheCompany": null, "ideasToEnhanceTheProject": "Use Story boards and graphs to the fullest" }, { "date": "2019-06-20T00:00:00", "ideasToEnhanceTheCompany": "Conduct more fun activities for increasing employee interaction", "ideasToEnhanceTheProject": "Usage of Static analysis tools for more productive code" }] },
      { "employeeId": 3, "employeeName": "Ankitha", "teamName": "EY Team2", "developerKpiDto": null, "outOfBoxDto": [{ "date": "2020-05-15T00:00:00", "ideasToEnhanceTheCompany": null, "ideasToEnhanceTheProject": "Perform more vulnerability tests" }] }
    ],
    NewEmployeeObj:{}
  },
    actions: {
      // AXIOS call
        getEmpById(context, id) {
          EmployeeService.getEmployeeById(id).then((response) => {
            
            context.commit('setSelectedEmployee', response.data);
          }).catch((error) => {
            console.log(error);
          });
        },
        //Nav bar
      navExtendCollapse: (context) => {
        context.commit('navExtendCollapse')
    },
    
    },
    mutations: {
      setSelectedEmployee(state, data) {

        state.EmployeeObj = data;
        console.log("Store",state.EmployeeObj);

      },
      increment(state) {
        state.count++
      },
      navExtendCollapse(state) {
        state.mini = !(state.mini)
    },
    //SNACKBAR
    setSnackbar(state,obj){
      state.message = obj.message;
      state.color = obj.color;
      state.display = true;
  },
  resetSnackbar(state){
      state.display = false;
  }
    }
  });
