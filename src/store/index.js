import Vue from 'vue';
import Vuex from 'vuex';
import EmployeeService from '../services/EmployeeServices';
import TeamDetailService from '../services/TeamDetailServices';

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
    employeesList: [],
    TeamsList:[]
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
    destoryChartData(context){
      context.commit('resetChartData');
    },
    getEmpById(context, id) {
      EmployeeService.getEmployeeById(id).then((response) => {
        context.commit('setSelectedEmployeeData', response.data);
        // context.commit('setEmpChartData', response.data);
      }).catch((error) => {
        console.log(error);
      });
    },
    // getEmpChartDataById(context) {
    //     context.commit('setEmpChartData');
    // },
    getTeamDetails(context) {
      TeamDetailService.getTeamDetails().then((response) => {
        context.commit('setTeamDetails', response.data);
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
    setEmployees(state, data) {
      state.employeesList = data;
      // console.log(state.employeesList);
      // console.log(data)
      // data.forEach(element => {
      //   state.categoryNames.push(element.Name);
      // });
    },
    resetChartData(state){
      state.chartData = {
        testCoverage: [],
        codeSmellPercent: [],
        codeQualityPercent: [],
        throughput: [],
        kloc: [],
        dates: [],
      }
    },
    setSelectedEmployeeData(state, data) {
      state.NewEmployeeObj = data;
      data.developerKpiDto.forEach(function (key) {
        state.chartData.testCoverage.push(key.testCoverage);
        state.chartData.codeSmellPercent.push(key.codeSmellPercent);
        state.chartData.codeQualityPercent.push(key.codeQualityPercent);
        state.chartData.throughput.push(key.throughput);
        state.chartData.kloc.push(key.kloc);
        state.chartData.dates.push(key.date.substring(0, 10));
      })
      console.log("Store new empoyee object", state.NewEmployeeObj);
    },
    setTeamDetails(state, data) {
      state.TeamsList = data;
      console.log("Store Team list", state.TeamsList);
    },
    setEmpChartData(state, data) {
      // console.log(data);
      data.developerKpiDto.forEach(function (key) {
        state.chartData.testCoverage.push(key.testCoverage);
        state.chartData.codeSmellPercent.push(key.codeSmellPercent);
        state.chartData.codeQualityPercent.push(key.codeQualityPercent);
        state.chartData.throughput.push(key.throughput);
        state.chartData.kloc.push(key.kloc);
        state.chartData.dates.push(key.date.substring(0, 10));
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
