(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],p=0,m=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/RioMare/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"06ed":function(t,e,a){},"20e3":function(t,e,a){"use strict";a("6ab3")},"36ee":function(t,e,a){"use strict";a("6fe6")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},r=[],i={name:"App",data:function(){return{}}},s=i,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),p=a("7496"),m=a("f6c4"),d=Object(c["a"])(s,n,r,!1,null,null,null),v=d.exports;u()(d,{VApp:p["a"],VMain:m["a"]});var f=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("home-component")},h=[],_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("section",{staticClass:"d-flex justify-center mt-5"},[o("img",{attrs:{height:"80",src:a("9d8b")}})]),o("section",{staticClass:"d-flex flex-column mt-2 pa-5"},[o("h1",{staticClass:"text-center"},[t._v("Filiera Tracciata")]),o("p",{staticClass:"mt-3 ma-0"},[t._v("orem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus dictum porttitor. Praesent quis diam commodo, euismod mi id, ullamcorper neque. Pellentesque vel suscipit turpis, ut consectetur diam.")])]),o("section",{staticClass:"pa-5"},[o("label",{attrs:{for:""}},[t._v(" Seleziona il prodotto che stai scansionando: ")]),o("v-select",{staticClass:"mt-2",attrs:{items:t.items,label:"Seleziona prodotto",solo:""}})],1),o("section",{staticClass:"pl-5 pr-5",staticStyle:{position:"absolute",bottom:"10px",width:"100%",left:"0"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("router-link",{attrs:{to:"/scan_code"}},[o("v-btn",{attrs:{block:"",color:"primary",elevation:"5",large:""}},[t._v(" Scansiona Codice ")])],1)],1),o("v-col",{staticStyle:{padding:"0"},attrs:{cols:"12"}},[o("p",{staticClass:"text-center ma-0"},[t._v(" O ")])]),o("v-col",{attrs:{cols:"12"}},[o("router-link",{attrs:{to:"/insert_code"}},[o("v-btn",{attrs:{block:"",color:"primary",elevation:"5",large:""}},[t._v(" Inserisci manualmente ")])],1)],1)],1)],1)])},g=[],C={name:"HomeComponent",computed:{items:function(){return["Tonno Olio D'Oliva","Tonno pinne gialle"]}}},x=C,y=(a("b5f3"),a("8336")),w=a("62ad"),O=a("a523"),S=a("0fd9"),V=a("b974"),k=Object(c["a"])(x,_,g,!1,null,"5cc49f3f",null),j=k.exports;u()(k,{VBtn:y["a"],VCol:w["a"],VContainer:O["a"],VRow:S["a"],VSelect:V["a"]});var E={name:"Home",components:{HomeComponent:j}},I=E,z=Object(c["a"])(I,b,h,!1,null,null,null),P=z.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],A={},B=Object(c["a"])(A,$,T,!1,null,null,null),F=B.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("take-picture")},L=[],M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"container"},[o("section",[o("v-app-bar",{attrs:{elevation:"4",color:"#FABFAD"}},[o("img",{attrs:{height:"30",src:a("9d8b")}}),o("v-spacer"),o("router-link",{attrs:{to:"/"}},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-home")])],1)],1)],1)],1),o("section",{staticClass:"d-flex flex-column mt-2 pa-5"},[t.img?o("div",[o("section",{staticClass:"d-flex justify-center",staticStyle:{position:"relative"}},[o("img",{staticClass:"img-preview",attrs:{src:t.img}}),o("section",{staticStyle:{top:"-3%",right:"-5%",position:"absolute"}},[o("a",{attrs:{href:t.img,download:""}},[t._v(" --\x3e "),o("v-btn",{attrs:{fab:"",dark:"",small:"",color:"primary"}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-download ")])],1)],1),o("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:t.clear}},[o("v-icon",{attrs:{dark:""}},[t._v(" mdi-close ")])],1)],1)])]):o("vue-web-cam",{ref:"webcam",attrs:{"device-id":t.deviceId,"screenshot-format":"image/png"},on:{started:t.onStarted,stopped:t.onStopped,error:t.onError,cameras:t.onCameras,"camera-change":t.onCameraChange}})],1),o("section",{staticClass:"pl-5 pr-5",staticStyle:{position:"absolute",bottom:"80px",width:"100%",left:"0"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[t.img?o("router-link",{attrs:{to:"/customize_picture"}},[o("v-btn",{attrs:{block:"",color:"primary",elevation:"5",large:""}},[t._v(" Continua ")])],1):o("v-btn",{attrs:{block:"",color:"primary",elevation:"5",large:""},on:{click:t.onCapture}},[t._v(" Cattura ")])],1)],1)],1)])},D=[],H=a("4f96"),q=(a("7db0"),a("d3b7"),a("fb6a"),a("b3cb")),J={name:"TakePictureComponent",components:{"vue-web-cam":q["WebCam"]},data:function(){return{img:null,camera:null,deviceId:null,devices:[]}},computed:{device:function(){var t=this;return this.devices.find((function(e){return e.deviceId===t.deviceId}))}},watch:{camera:function(t){this.deviceId=t},devices:function(){var t=Object(H["a"])(this.devices),e=t[0],a=t.slice(1);if(console.log("tail"+a),e){var o=this.devices.length;o>1?(this.camere=this.devices[o-1].deviceId,this.deviceId=this.devices[o-1].deviceId):(this.camera=e.deviceId,this.deviceId=e.deviceId)}}},methods:{clear:function(){this.img=null,sessionStorage.clear(),location.reload()},onCapture:function(){this.img=this.$refs.webcam.capture(),sessionStorage.setItem("code",this.img)},onStarted:function(t){console.log("On Started Event",t)},onStopped:function(t){console.log("On Stopped Event",t)},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(t){console.log("On Error Event",t)},onCameras:function(t){this.devices=t,console.log(this.devices),console.log("On Cameras Event",t)},onCameraChange:function(t){this.deviceId=t,this.camera=t,console.log("On Camera Change Event",t)}}},N=J,W=(a("20e3"),a("40dc")),G=a("132d"),K=a("2fa4"),Q=Object(c["a"])(N,M,D,!1,null,"fe22ee04",null),U=Q.exports;u()(Q,{VAppBar:W["a"],VBtn:y["a"],VCol:w["a"],VContainer:O["a"],VIcon:G["a"],VRow:S["a"],VSpacer:K["a"]});var X={components:{TakePicture:U}},Y=X,Z=(a("6821"),Object(c["a"])(Y,R,L,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("insert-code")},at=[],ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("section",{staticClass:"d-flex justify-center mt-5"},[o("img",{attrs:{height:"80",src:a("9d8b")}})]),o("section",{staticClass:"pr-5 pl-5 mt-10"},[o("p",[t._v(" Inserisci di seguito le informazioni che leggi sulla confezione ")])]),o("section",{staticClass:"pl-5 pr-5"},[o("label",{attrs:{for:""}},[o("b",[t._v("Codice Lotto")])]),o("v-text-field",{attrs:{label:"L12345",solo:""}}),o("label",{attrs:{for:""}},[o("b",[t._v("Linea Produzione")])]),o("v-text-field",{attrs:{label:"1111",solo:""}}),o("label",{attrs:{for:""}},[o("b",[t._v("Ora Produzione")])]),o("v-text-field",{attrs:{label:"15:00",solo:""}})],1),o("section",{staticClass:"pl-5 pr-5",staticStyle:{position:"absolute",bottom:"10px",width:"100%",left:"0"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("router-link",{attrs:{to:"/customize_picture"}},[o("v-btn",{attrs:{block:"",color:"primary",elevation:"5",large:""}},[t._v(" Scopri la tracciabilità ")])],1)],1)],1)],1)])},nt=[],rt={name:"InsertCodeComponent"},it=rt,st=(a("36ee"),a("8654")),ct=Object(c["a"])(it,ot,nt,!1,null,"8ac5cf26",null),lt=ct.exports;u()(ct,{VBtn:y["a"],VCol:w["a"],VContainer:O["a"],VRow:S["a"],VTextField:st["a"]});var ut={components:{InsertCode:lt}},pt=ut,mt=Object(c["a"])(pt,et,at,!1,null,null,null),dt=mt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("customize-pic")},ft=[],bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("section",[o("v-app-bar",{attrs:{elevation:"4",color:"#FABFAD"}},[o("img",{attrs:{height:"30",src:a("9d8b")}}),o("v-spacer"),o("router-link",{attrs:{to:"/"}},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-home")])],1)],1)],1)],1),o("section",{staticClass:"d-flex flex-column mt-2 pa-5"}),o("section",{staticClass:"pl-5 pr-5",staticStyle:{position:"absolute",bottom:"30px",width:"100%",left:"0"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("router-link",{attrs:{to:"/traceability_result"}},[o("v-btn",{attrs:{block:"",color:"primary",elevation:"5",large:""}},[t._v(" Continua ")])],1)],1)],1)],1)])},ht=[],_t={name:"CustomizePic"},gt=_t,Ct=(a("b016"),Object(c["a"])(gt,bt,ht,!1,null,"38d299ef",null)),xt=Ct.exports;u()(Ct,{VAppBar:W["a"],VBtn:y["a"],VCol:w["a"],VContainer:O["a"],VIcon:G["a"],VRow:S["a"],VSpacer:K["a"]});var yt={components:{CustomizePic:xt}},wt=yt,Ot=Object(c["a"])(wt,vt,ft,!1,null,null,null),St=Ot.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("traceability-component")},kt=[],jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("section",[o("v-app-bar",{attrs:{elevation:"4",color:"#FABFAD"}},[o("img",{attrs:{height:"30",src:a("9d8b")}})])],1),o("section",{staticClass:"pr-5 pl-5 mt-5"},[o("p",[t._v(" Di seguito trovi il risultato della lettura da parte del nostro servizio intelligente. ")]),o("p",{staticClass:"mt-2"},[t._v(" Confidenza dell'elaborazione: ")]),o("h1",{staticClass:"text-center"},[o("b",[t._v(" 70% ")])]),o("p",[t._v(" Ti chiediamo di confermare la lettura fatta, e modificarla se necessario. ")])]),o("section",{staticClass:"pl-5 pr-5"},[o("label",{attrs:{for:""}},[o("b",[t._v("Codice Lotto")])]),o("v-text-field",{attrs:{label:"L12345",solo:""}}),o("label",{attrs:{for:""}},[o("b",[t._v("Linea Produzione")])]),o("v-text-field",{attrs:{label:"1111",solo:""}}),o("label",{attrs:{for:""}},[o("b",[t._v("Ora Produzione")])]),o("v-text-field",{attrs:{label:"15:00",solo:""}})],1),o("section",{staticClass:"pl-5 pr-5",staticStyle:{position:"absolute",bottom:"10px",width:"100%",left:"0"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("router-link",{attrs:{to:"/customize_picture"}},[o("v-btn",{attrs:{block:"",color:"primary",elevation:"5",large:""}},[t._v(" Scopri la tracciabilità ")])],1)],1)],1)],1)])},Et=[],It={name:"TraceabilityComponent"},zt=It,Pt=(a("d61e"),Object(c["a"])(zt,jt,Et,!1,null,"3e1e1725",null)),$t=Pt.exports;u()(Pt,{VAppBar:W["a"],VBtn:y["a"],VCol:w["a"],VContainer:O["a"],VRow:S["a"],VTextField:st["a"]});var Tt={components:{TraceabilityComponent:$t}},At=Tt,Bt=Object(c["a"])(At,Vt,kt,!1,null,null,null),Ft=Bt.exports;o["a"].use(f["a"]);var Rt=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:F},{path:"/scan_code",name:"ScanCode",component:tt},{path:"/insert_code",name:"InsertCode",component:dt},{path:"/customize_picture",name:"CustomizePicture",component:St},{path:"/traceability_result",name:"TraceabilityResult",component:Ft}],Lt=new f["a"]({routes:Rt}),Mt=Lt,Dt=a("2f62");o["a"].use(Dt["a"]);var Ht=new Dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),qt=a("f309");o["a"].use(qt["a"]);var Jt=new qt["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:Mt,store:Ht,vuetify:Jt,render:function(t){return t(v)}}).$mount("#app")},6821:function(t,e,a){"use strict";a("ab2b")},"6ab3":function(t,e,a){},"6fe6":function(t,e,a){},"85ec":function(t,e,a){},"8da9":function(t,e,a){},"9d8b":function(t,e,a){t.exports=a.p+"img/rio-mare-logo.a069bfae.png"},ab2b:function(t,e,a){},b016:function(t,e,a){"use strict";a("06ed")},b5f3:function(t,e,a){"use strict";a("8da9")},d61e:function(t,e,a){"use strict";a("e689")},e689:function(t,e,a){}});
//# sourceMappingURL=app.5497f62f.js.map