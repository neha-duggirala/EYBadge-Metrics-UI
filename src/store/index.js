import Vue from 'vue';
import Vuex from 'vuex';
import EmployeeService from '../services/EmployeeServices';

Vue.use(Vuex);

export default new Vuex.Store({
     state: {
      count: 0,
      EmployeeObj:
        [{
          "employeeId": 1,
          "employeeName": "Neha",
          "teamName": "EY Team1",
          "developerKpiDto": [{
            "date": "2019-02-06T00:00:00",
            "testCoverage": 56,
            "codeSmellPercent": 45,
            "codeQualityPercent": 62,
            "kloc": 670,
            "throughput": 60
          }, {
            "date": "2019-02-06T00:00:00",
            "testCoverage": 56,
            "codeSmellPercent": 45,
            "codeQualityPercent": 62,
            "kloc": 670,
            "throughput": 60
          }, {
            "date": "2019-02-06T00:00:00",
            "testCoverage": 56,
            "codeSmellPercent": 45,
            "codeQualityPercent": 62,
            "kloc": 670,
            "throughput": 60
          }, {
            "date": "2019-02-06T00:00:00",
            "testCoverage": 56,
            "codeSmellPercent": 45,
            "codeQualityPercent": 62,
            "kloc": 670,
            "throughput": 60
          }],
          "outOfBoxDto": [{
            "date": "2020-08-24T01:01:38.503",
            "ideasToEnhanceTheCompany": "Follow a performance management tool",
            "ideasToEnhanceTheProject": "Use tool like Resharperq"
          }, {
            "date": "2019-02-20T00:00:00",
            "ideasToEnhanceTheCompany": "Use recommendation systems for EY badging",
            "ideasToEnhanceTheProject": null
          }]
        },
        {
          "employeeId": 2,
          "employeeName": "Sindhu",
          "teamName": "EY Team1",
          "developerKpiDto": [{
            "date": "2019-02-06T00:00:00",
            "testCoverage": 45,
            "codeSmellPercent": 65,
            "codeQualityPercent": 32,
            "kloc": 450,
            "throughput": 49
          }, {
            "date": "2019-02-06T00:00:00",
            "testCoverage": 45,
            "codeSmellPercent": 65,
            "codeQualityPercent": 32,
            "kloc": 450,
            "throughput": 49
          }, {
            "date": "2019-02-06T00:00:00",
            "testCoverage": 45,
            "codeSmellPercent": 65,
            "codeQualityPercent": 32,
            "kloc": 450,
            "throughput": 49
          }, {
            "date": "2019-02-06T00:00:00",
            "testCoverage": 45,
            "codeSmellPercent": 65,
            "codeQualityPercent": 32,
            "kloc": 450,
            "throughput": 49
          }],
          "outOfBoxDto": [{
            "date": "2020-08-24T01:02:21.903",
            "ideasToEnhanceTheCompany": null,
            "ideasToEnhanceTheProject": "Use Story boards and graphs to the fullest"
          }, {
            "date": "2019-06-20T00:00:00",
            "ideasToEnhanceTheCompany": "Conduct more fun activities for increasing employee interaction",
            "ideasToEnhanceTheProject": "Usage of Static analysis tools for more productive code"
          }]
        },
        {
          "employeeId": 3,
          "employeeName": "Ankitha",
          "teamName": "EY Team2",
          "developerKpiDto": null,
          "outOfBoxDto": [{
            "date": "2020-05-15T00:00:00",
            "ideasToEnhanceTheCompany": null,
            "ideasToEnhanceTheProject": "Perform more vulnerability tests"
          }]
        }
      ]
      },
    actions:{
      getEmpById(context, id) {
        EmployeeService.getEmployeeById(id).then((response) => {
          context.commit('setSelectedEmployee', response.data);
        }).catch((error) => {
          console.log(error);
        });
      }

    },
    mutations: {
      setSelectedEmployee(state, data) {
        state.EmployeeObj = data;
      },
      increment (state) {
        state.count++
      }
    }
  })
  