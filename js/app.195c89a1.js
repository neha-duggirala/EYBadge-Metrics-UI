(function(e){function t(t){for(var o,l,c=t[0],i=t[1],s=t[2],p=0,d=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},n={app:0},r=[];function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/EYBadge-Metrics-UI/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=(a("d3b7"),a("bc3a")),r=a.n(n),l={},c=r.a.create(l);c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=c,window.axios=c,Object.defineProperties(e.prototype,{axios:{get:function(){return c}},$axios:{get:function(){return c}}})},o["a"].use(Plugin);Plugin;var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-btn",{attrs:{to:"/"}},[a("v-icon",[e._v("mdi-home")])],1),a("div",[a("v-toolbar-title",[e._v("EY Employee Performance Metrics")])],1)],1),a("v-spacer")],1),a("v-content",{staticClass:"ats-container"},[a("router-view")],1),a("v-main")],1)},s=[],u={name:"App",data:function(){return{}}},p=u,d=a("2877"),m=a("6544"),h=a.n(m),f=a("7496"),v=a("40dc"),y=a("8336"),g=a("a75b"),b=a("132d"),T=a("f6c4"),P=a("2fa4"),x=a("2a7f"),C=Object(d["a"])(p,i,s,!1,null,null,null),E=C.exports;h()(C,{VApp:f["a"],VAppBar:v["a"],VBtn:y["a"],VContent:g["a"],VIcon:b["a"],VMain:T["a"],VSpacer:P["a"],VToolbarTitle:x["a"]});var j=a("f309");o["a"].use(j["a"]);var w=new j["a"]({}),O=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1500"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},e._l(e.cards,(function(t){return a("v-col",{key:t.title,attrs:{cols:t.flex}},[a("v-card",[a("v-text-field",{attrs:{label:"Enter your ID",filled:""},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),a("v-radio-group",[a("v-radio",{attrs:{label:"Employee",value:"employee"}}),a("v-radio",{attrs:{label:"Manager",value:"manager"}})],1),a("v-btn",{attrs:{to:{name:"Employee",params:{id:e.id}},"x-large":"",color:"success",dark:""}},[e._v("Login")])],1)],1)})),1)],1)],1)},k=[],_={name:"Home",data:function(){return{id:"1",cards:[{title:"Home",flex:4}]}}},D=_,V=a("b0af"),M=a("62ad"),F=a("a523"),$=a("67b6"),I=a("43a6"),Q=a("0fd9"),A=a("8654"),B=Object(d["a"])(D,S,k,!1,null,null,null),N=B.exports;h()(B,{VBtn:y["a"],VCard:V["a"],VCol:M["a"],VContainer:F["a"],VRadio:$["a"],VRadioGroup:I["a"],VRow:Q["a"],VTextField:A["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Chart")},U=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"example"},[a("h1",[e._v("Developer KPI Metrics")]),a("apexcharts",{attrs:{width:"1000",height:"550",options:e.chartOptions,series:e.series}}),a("h1",[e._v("Innovation Timeline")]),a("vue-horizontal-timeline",{attrs:{"min-width":"200px","timeline-background":"#FFFFFF",items:e.items}})],1)},R=[],K=a("1321"),H=a.n(K),q={name:"Chart",components:{apexcharts:H.a},data:function(){return{items:[{title:"January",content:"Idea to Enhance the company: Follow a performance management tool"},{title:"Febuary"},{title:"March",content:""},{title:"April",content:""},{title:"May",content:""},{title:"June",content:""},{title:"July",content:""},{title:"August",content:"Idea to enhance the project: Use tool like Resharper"},{title:"September",content:""},{title:"November",content:""},{title:"December",content:""}],chartOptions:{chart:{id:"basic-bar"},fill:{type:"solid"},annotations:{xaxis:[{x:"May",x2:"August",fillColor:"#B3F7CA",label:{orientation:"vertical",text:this.$store.state.badgeData}}]},xaxis:{categories:this.$store.state.chartData.months}},series:[{name:"Test Coverage",type:"line",data:this.$store.state.chartData.testCoverage},{name:"Code Quality",type:"line",data:this.$store.state.chartData.codeQualityPercent},{name:"Code Smell",type:"line",data:this.$store.state.chartData.codeSmellPercent},{name:"Throughput",type:"line",data:this.$store.state.chartData.throughput}]}}},z=q,G=Object(d["a"])(z,Y,R,!1,null,null,null),L=G.exports,W={name:"Employee",components:{Chart:L}},X=W,Z=Object(d["a"])(X,J,U,!1,null,null,null),ee=Z.exports;o["a"].use(O["a"]);var te=[{path:"/",name:"Home",component:N},{path:"/Employee/:id",name:"Employee",component:ee},{path:"/apex",name:"Vue Chart",component:L}],ae=new O["a"]({routes:te,mode:"history",base:"/EYBadge-Metrics-UI/"}),oe=ae,ne=a("2f62");o["a"].use(ne["a"]);var re=new ne["a"].Store({state:{count:0,chartData:{testCoverage:[56,58,60,64,55,78,80,75,87,77,89,91,91],codeSmellPercent:[60,54,50,45,67,90,85,87,75,87,88,89],codeQualityPercent:[67,29,68,70,89,90,90,89,90,89,74,67],throughput:[6,8,7,0,9,9,4,6,7,9,5,7],kloc:[300,299,655,334,455,888,678,985,234,656,758,565],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},EmployeeObj:[{employeeId:1,employeeName:"Neha",teamName:"EY Team1",developerKpiDto:[{date:"2020-08-24T01:20:12.2",testCoverage:90,codeSmellPercent:90,codeQualityPercent:90,kloc:1250,throughput:95},{date:"2019-02-20T00:00:00",testCoverage:45,codeSmellPercent:65,codeQualityPercent:20,kloc:950,throughput:75},{date:"2020-08-10T00:00:00",testCoverage:89,codeSmellPercent:82,codeQualityPercent:76,kloc:1e3,throughput:92},{date:"2019-02-06T00:00:00",testCoverage:56,codeSmellPercent:45,codeQualityPercent:62,kloc:670,throughput:60}],outOfBoxDto:[{date:"2020-08-24T01:01:38.503",ideasToEnhanceTheCompany:"Follow a performance management tool",ideasToEnhanceTheProject:"Use tool like Resharperq"},{date:"2019-02-20T00:00:00",ideasToEnhanceTheCompany:"Use recommendation systems for EY badging",ideasToEnhanceTheProject:null}]},{employeeId:2,employeeName:"Sindhu",teamName:"EY Team1",developerKpiDto:[{date:"2020-08-24T01:20:42.22",testCoverage:100,codeSmellPercent:100,codeQualityPercent:65,kloc:4e3,throughput:97},{date:"2019-02-20T00:00:00",testCoverage:50,codeSmellPercent:78,codeQualityPercent:68,kloc:1200,throughput:74},{date:"2020-08-10T00:00:00",testCoverage:97,codeSmellPercent:98,codeQualityPercent:95,kloc:1300,throughput:98},{date:"2019-02-06T00:00:00",testCoverage:45,codeSmellPercent:65,codeQualityPercent:32,kloc:450,throughput:49}],outOfBoxDto:[{date:"2020-08-24T01:02:21.903",ideasToEnhanceTheCompany:null,ideasToEnhanceTheProject:"Use Story boards and graphs to the fullest"},{date:"2019-06-20T00:00:00",ideasToEnhanceTheCompany:"Conduct more fun activities for increasing employee interaction",ideasToEnhanceTheProject:"Usage of Static analysis tools for more productive code"}]},{employeeId:3,employeeName:"Ankitha",teamName:"EY Team2",developerKpiDto:null,outOfBoxDto:[{date:"2020-05-15T00:00:00",ideasToEnhanceTheCompany:null,ideasToEnhanceTheProject:"Perform more vulnerability tests"}]}]},mutations:{setSelectedEmployee:function(e,t){e.EmployeeObj=t},increment:function(e){e.count++}}}),le=a("b7d6");o["a"].use(le["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(E)},router:oe,vuetify:w,store:re}).$mount("#app")}});
//# sourceMappingURL=app.195c89a1.js.map