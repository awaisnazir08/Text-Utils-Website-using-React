(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(17)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(14),a(15);function s(e){var t=function(t){e.settingMode(t)};return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},e.aboutText))),l.a.createElement("div",{className:"btn-group"},l.a.createElement("a",{id:"button1",href:"#",className:"btn btn-primary active","aria-current":"page",onClick:function(){return t("purple")}},"Purple"),l.a.createElement("a",{id:"button2",className:"btn btn-primary",onClick:function(){return t("blue")}},"Blue"),l.a.createElement("a",{id:"button3",className:"btn btn-primary",onClick:function(){return t("green")}},"Green"),l.a.createElement("a",{id:"lastbutton",className:"btn btn-primary",onClick:function(){return t("grey")}},"Grey")),l.a.createElement("div",{className:"form-check form-switch"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),l.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))}s.defaultProps={title:"Set Title Here",aboutText:"About text here"};a(16);function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"myBox",value:r,onChange:function(e){console.log("On change"),c(e.target.value)},rows:"10",placeholder:e.placeholder,style:{backgroundColor:"".concat("light"===e.mode?"white":e.formColor),color:"".concat("light"===e.mode?"black":"white")}})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){console.log("On click "+r);var t=r.toUpperCase();c(t),e.showAlert("Converted to Upper Case","success")}},"Convert to UpperCase"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to Lower Case","success")}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e=r.split(" ").join("").length;alert("".concat(e," characters present without any spaces!"))}},"Characters without Spaces"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied text to ClipBoard","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){c(""),e.showAlert("Cleared text","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=r.replace(/\s+/g," ").trim();c(t),e.showAlert("Extra Spaces removed","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-4 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h2",null,e.summary),"The text has ",l.a.createElement("b",null,r.length>0?r.trim().split(/\s+/).length:0)," words and ",l.a.createElement("b",null,r.length)," characters",l.a.createElement("br",null),"Estimated time to read: ",l.a.createElement("b",null,r.length>0?.008*r.trim().split(/\s+/).length:0)," minutes",l.a.createElement("br",null),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter text in the above box to preview it here..!!")))}m.defaultProps={heading:"This is the heading",placeholder:"Write Here",summary:"Text Summary"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t[0].toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.message)};var u=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("light"),u=Object(o.a)(c,2),d=u[0],b=u[1],g=Object(n.useState)("white"),h=Object(o.a)(g,2),p=h[0],v=h[1],E=function(e,t){r({message:e,type:t}),setTimeout(function(){r(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Text Utils",aboutText:"About",mode:d,toggleMode:function(){"light"===d?(b("dark"),document.body.style.backgroundColor="#042743",E("The dark mode has been enabled","success"),v("#042743"),document.title="TextUtils - Dark Mode"):(b("light"),document.body.style.backgroundColor="white",E("The light mode has been enabled","success"),document.title="TextUtils - Light Mode")},settingMode:function(e){console.log("hello"),"purple"===e?(document.getElementById("button1").classList.add("active"),document.getElementById("button2").classList.remove("active"),document.getElementById("lastbutton").classList.remove("active"),document.body.style.backgroundColor="#9966ff",E("The purple mode has been enabled","success"),v("#9966ff"),b("dark")):"blue"===e?(document.getElementById("button1").classList.remove("active"),document.getElementById("button2").classList.add("active"),document.getElementById("lastbutton").classList.remove("active"),document.body.style.backgroundColor="#00bfff",E("The blue mode has been enabled","success"),v("#00bfff"),b("dark")):"grey"===e?(document.getElementById("button1").classList.remove("active"),document.getElementById("button2").classList.remove("active"),document.getElementById("lastbutton").classList.add("active"),document.body.style.backgroundColor="grey",E("The grey mode has been enabled","success"),v("grey"),b("dark")):"green"===e&&(document.getElementById("button1").classList.remove("active"),document.getElementById("button2").classList.remove("active"),document.getElementById("button3").classList.add("active"),document.body.style.backgroundColor="#003300",E("The green mode has been enabled","success"),v("#003300"),b("dark"))}}),l.a.createElement(i,{alert:a}),l.a.createElement(m,{heading:"Enter the text to Analyze",placeholder:"Enter here",mode:d,showAlert:E,formColor:p}))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()}],[[4,1,2]]]);
//# sourceMappingURL=main.f77d5914.chunk.js.map