import Vue from 'vue';
import Vuex from 'vuex';
import EmployeeService from '../services/EmployeeServices';

Vue.use(Vuex);

export default new Vuex.Store({
     state: {
      count: 0,
      badgeData: "Badge Earned: Data Visualization(Gold), Grade: 'A'",
      chartData: {
        "testCoverage": [56, 73, 54, 64, 89, 78, 90, 75, 87, 67, 89, 91, 91],
        "codeSmellPercent": [90, 89, 90, 45, 67, 90, 45, 67, 45, 67, 78, 89],
        "codeQualityPercent":[67, 89, 78, 90, 89, 90, 90, 89, 90, 89, 54, 67],
        "throughput": [6, 8, 7, 0, 9, 9, 4, 6, 7, 9, 5, 7],
        "kloc": [300, 299, 655, 334, 455, 888, 678, 985, 234, 656, 758, 565],
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]    
    },
        
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
  