import Vue from 'vue';
import Vuex from 'vuex';
import EmployeeService from '../services/EmployeeServices';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    message: "",
    color: "",
    display: false,
    count: 0,
    mini: true,
    chartData: {
      testCoverage: [],
      codeSmellPercent: [],
      codeQualityPercent: [],
      throughput: [],
      kloc: [],
      dates: [],
    },

    // EmployeeObj: [
    //   { "employeeId": 1, "employeeName": "Neha", "teamName": "EY Team1", "developerKpiDto": [{ "date": "2020-08-24T01:20:12.2", "testCoverage": 90, "codeSmellPercent": 90, "codeQualityPercent": 90, "kloc": 1250, "throughput": 95 }, { "date": "2019-02-20T00:00:00", "testCoverage": 45, "codeSmellPercent": 65, "codeQualityPercent": 20, "kloc": 950, "throughput": 75 }, { "date": "2020-08-10T00:00:00", "testCoverage": 89, "codeSmellPercent": 82, "codeQualityPercent": 76, "kloc": 1000, "throughput": 92 }, { "date": "2019-02-06T00:00:00", "testCoverage": 56, "codeSmellPercent": 45, "codeQualityPercent": 62, "kloc": 670, "throughput": 60 }], "outOfBoxDto": [{ "date": "2020-08-24T01:01:38.503", "ideasToEnhanceTheCompany": "Follow a performance management tool", "ideasToEnhanceTheProject": "Use tool like Resharperq" }, { "date": "2019-02-20T00:00:00", "ideasToEnhanceTheCompany": "Use recommendation systems for EY badging", "ideasToEnhanceTheProject": null }] },
    //   { "employeeId": 2, "employeeName": "Sindhu", "teamName": "EY Team1", "developerKpiDto": [{ "date": "2020-08-24T01:20:42.22", "testCoverage": 100, "codeSmellPercent": 100, "codeQualityPercent": 65, "kloc": 4000, "throughput": 97 }, { "date": "2019-02-20T00:00:00", "testCoverage": 50, "codeSmellPercent": 78, "codeQualityPercent": 68, "kloc": 1200, "throughput": 74 }, { "date": "2020-08-10T00:00:00", "testCoverage": 97, "codeSmellPercent": 98, "codeQualityPercent": 95, "kloc": 1300, "throughput": 98 }, { "date": "2019-02-06T00:00:00", "testCoverage": 45, "codeSmellPercent": 65, "codeQualityPercent": 32, "kloc": 450, "throughput": 49 }], "outOfBoxDto": [{ "date": "2020-08-24T01:02:21.903", "ideasToEnhanceTheCompany": null, "ideasToEnhanceTheProject": "Use Story boards and graphs to the fullest" }, { "date": "2019-06-20T00:00:00", "ideasToEnhanceTheCompany": "Conduct more fun activities for increasing employee interaction", "ideasToEnhanceTheProject": "Usage of Static analysis tools for more productive code" }] },
    //   { "employeeId": 3, "employeeName": "Ankitha", "teamName": "EY Team2", "developerKpiDto": null, "outOfBoxDto": [{ "date": "2020-05-15T00:00:00", "ideasToEnhanceTheCompany": null, "ideasToEnhanceTheProject": "Perform more vulnerability tests" }] }
    // ],
    NewEmployeeObj: {
      developerKpiDto: [],
      employeeId: "",
      employeeName: "",
      outOfBoxDto: [],
      teamName: ""
    },
    EmployeeObj: {
      developerKpiDto: [],
      employeeId: "",
      employeeName: "",
      outOfBoxDto: [],
      teamName: ""
    },
    employeesList: []
  },
  actions: {
    // AXIOS call
    getEmp(context) {
      EmployeeService.getEmployees().then((response) => {
        context.commit('setEmployees', response.data);
      }).catch((error) => {
        console.log(error);
      });
    },
    getEmpById(context, id) {
      EmployeeService.getEmployeeById(id).then((response) => {
        context.commit('setSelectedEmployee', response.data);
      }).catch((error) => {
        console.log(error);
      });
    },
    getEmpChartDataById(context,id) {
      EmployeeService.getEmployeeById(id).then((response) => {
        context.commit('setEmpChartData', response.data);
      }).catch((error) => {
        console.log(error);
      });
      // context.commit('setEmpChartData',context)
    },
        //Nav bar
      navExtendCollapse: (context) => {
      context.commit('navExtendCollapse')
    },

  },
  mutations: {
    setEmployees(state, data) {
      state.employeesList = data;
      // console.log(data)
      // data.forEach(element => {
      //   state.categoryNames.push(element.Name);
      // });
    },
    setSelectedEmployee(state, data) {
      state.NewEmployeeObj = data;

      console.log("Store", state.NewEmployeeObj);
    },
    setEmpChartData(state, data){
      state.NewEmployeeObj = data;
      state.NewEmployeeObj.developerKpiDto.forEach(function(key){
      state.chartData.testCoverage.push(key.testCoverage);
      state.chartData.codeSmellPercent.push(key.codeSmellPercent);
      state.chartData.codeQualityPercent.push(key.codeQualityPercent);
      state.chartData.throughput.push(key.throughput);
      state.chartData.kloc.push(key.kloc);
      state.chartData.dates.push(key.date.substring(0 , 10));
        })
    },
    increment(state) {
      state.count++
    },
    navExtendCollapse(state) {
      state.mini = !(state.mini)
    },
    //SNACKBAR
    setSnackbar(state, obj) {
      state.message = obj.message;
      state.color = obj.color;
      state.display = true;
    },
    resetSnackbar(state) {
      state.display = false;
    }
  }
});
