(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){e.exports=a.p+"static/media/NS_logo_Vertical.fe44c068.svg"},15:function(e,t,a){e.exports={main:"Welcome_main__2zHeh",container:"Welcome_container__19W5p",links:"Welcome_links__1J9D2",side:"Welcome_side__281Vq",plane:"Welcome_plane__1ghlQ",fields:"Welcome_fields__fYQm2",innerBox:"Welcome_innerBox__3ZdFd",innerBox2:"Welcome_innerBox2__1zANZ",img:"Welcome_img__2ti7X",heading:"Welcome_heading__1HQnh",heading1:"Welcome_heading1__1nlIp",liks:"Welcome_liks__3fngb",buts:"Welcome_buts__2l-CL"}},151:function(e,t,a){e.exports={buts:"Floatbutton_buts__3pGl3"}},152:function(e,t,a){e.exports={container:"LoginFormError_container__1F-rQ",title:"LoginFormError_title__1kWcD",usermessage:"LoginFormError_usermessage__uX4mi",usermessageerror:"LoginFormError_usermessageerror__2guxi"}},16:function(e,t,a){e.exports={main:"Addidea_main__3az7x",img:"Addidea_img__2QC1R",idea:"Addidea_idea__3M60H",head:"Addidea_head__f5GEx",para:"Addidea_para__17Giv",lab:"Addidea_lab__16SIG",side:"Addidea_side__1X-Mz",plane:"Addidea_plane__URapZ",fields:"Addidea_fields__1vHwo",containers:"Addidea_containers__kUqw2",links:"Addidea_links__2oqel",form:"Addidea_form__2LyFF",innerBox:"Addidea_innerBox__3t07u",innerBox2:"Addidea_innerBox2__oscXE",img23:"Addidea_img23__42i4u",heading:"Addidea_heading__2Re6V",heading1:"Addidea_heading1__1yUUp"}},207:function(e,t,a){e.exports=a.p+"static/media/NS_logo_BGWhite_Vertical.fe44c068.svg"},208:function(e,t,a){e.exports={Logo:"vertLogo_Logo__1fKxb"}},209:function(e,t,a){e.exports=a.p+"static/media/mobile_logo.f2ea609e.svg"},229:function(e,t,a){e.exports=a(424)},237:function(e,t,a){},246:function(e,t){},248:function(e,t){},286:function(e,t){},287:function(e,t){},32:function(e,t,a){e.exports={mobile:"Menu_mobile__Lx0cT",Menustyle:"Menu_Menustyle__32Q7Y",links:"Menu_links__xGl-V",addidea:"Menu_addidea__2b5Jp",logs:"Menu_logs__2utJm",nots:"Menu_nots__1nPr6",moblogo:"Menu_moblogo__2Vmtk",mrauto:"Menu_mrauto__1iuYz",innerbox:"Menu_innerbox__2lnq6"}},421:function(e,t,a){},422:function(e,t,a){e.exports={Modal:"Addcomment_Modal__2uEWx",img:"Addcomment_img__2tYxo"}},424:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(22),r=a.n(l),i=(a(234),a(235),a(236),a(237),a(206),a(23)),s=a(24),c=a(26),m=a(25),d=a(70),u=a(27),p=a(15),h=a.n(p),g=a(59),_=a(43),f=a.n(_),E=function(e){return e.children},b=a(447),v=a(446),N=function(e){return o.a.createElement(E,null,o.a.createElement("div",{className:f.a.righttoolbar},o.a.createElement("div",{className:f.a.parent},o.a.createElement("div",null,o.a.createElement("img",{className:f.a.img,src:e.pic,alt:"image",width:70,height:70})),o.a.createElement(v.a,{maxWidth:"lg"},o.a.createElement("div",{className:f.a.container},o.a.createElement(b.a,{elevation:0},o.a.createElement("p",{className:f.a.head},"@",e.name," "),o.a.createElement("p",{className:f.a.title},e.problem)))),o.a.createElement("div",{className:f.a.comments},o.a.createElement("a",{className:f.a.comment,onClick:e.onComment,class:"fa fa-comment"},o.a.createElement("b",null," Comment"))),o.a.createElement("div",{className:f.a.buttn},o.a.createElement("button",{className:f.a.btn,onClick:e.onUpvote,style:{background:e.upvotecolor}},e.upvote,"   Upvote")))))},k=a(30),y=a.n(k),C=a(32),w=a.n(C),S=a(84),j=a.n(S),L=a(10),O=a(450),x=a(448),A=a(207),D=a.n(A),I=a(208),M=a.n(I),W=function(e){return o.a.createElement("div",{className:M.a.Logo},o.a.createElement("img",{src:D.a,alt:"NS_Logo"}))},T=a(214),B=a.n(T),H=a(215),P=a.n(H),G=a(210),R=a.n(G),U=a(209),F=a.n(U),z=function(e){return o.a.createElement("div",{className:j.a.logs},o.a.createElement("img",{className:j.a.Logo,src:F.a,alt:"NS_Logo"}))},q=(a(55),a(68),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={loglink:"/login",logstatus:"Login",token:void 0,homeredirect:!1,addidearedirect:!1,logredirect:!1},a.menulogo=function(){if(a.props.user)return o.a.createElement("img",{className:j.a.img,src:a.props.user.user.profile_image_url,alt:"image",width:50,height:60})},a.renderRedirect=function(){if(a.state.logredirect)return o.a.createElement(g.a,{to:"/"})},a.logout=function(){"Logout"===a.state.logstatus&&a.state.token&&(y.a.remove("jwttoken"),a.setState({loglink:"/login",logstatus:"Login",logredirect:!0,token:void 0}),a.props.updatestate(void 0))},a.addideabut=function(){if(console.log(a.props.user),a.props.user)return o.a.createElement(L.b,{to:"/addidea",className:w.a.links},o.a.createElement("button",{className:w.a.addidea},o.a.createElement(R.a,{style:{fontSize:50}}),"ADD-IDEA"))},a.addideabutmobile=function(){if(console.log(a.props.user),a.props.user)return o.a.createElement(O.a.Link,{href:"/addidea"},"ADD-IDEA")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.user),this.props.user&&this.setState({loglink:"/",logstatus:"Logout",token:this.props.user,logredirect:!1})}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:w.a.mobile},this.renderRedirect(),o.a.createElement(x.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark"},o.a.createElement(x.a.Brand,{href:"/"},this.menulogo(),o.a.createElement(z,{className:w.a.moblogo})),o.a.createElement(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(x.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(O.a,{className:"mr-auto"},o.a.createElement(O.a.Link,{href:"/"},"HOME"),o.a.createElement(O.a.Link,{href:this.state.loglink,onClick:this.logout},this.state.logstatus),this.addideabutmobile())))),o.a.createElement("div",{className:w.a.Menustyle},o.a.createElement(W,{className:w.a.logs}),this.renderRedirect(),o.a.createElement("ul",{className:w.a.ul},o.a.createElement(L.b,{className:w.a.links,to:"/"},o.a.createElement("button",{className:w.a.nots},o.a.createElement("li",{className:w.a.li}," ",o.a.createElement(B.a,{style:{fontSize:50}}),"  HOME  ")," ")),o.a.createElement(L.b,{className:w.a.links,to:this.state.loglink}," ",o.a.createElement("button",{onClick:this.logout,className:w.a.nots}," ",o.a.createElement("li",{className:w.a.li}," ",o.a.createElement(P.a,{style:{fontSize:50}})," ",this.state.logstatus," ")," "))),this.addideabut()))}}]),t}(n.Component)),V=a(14),J=a(449),Q=a(106),X=a.n(Q),K=(a(151),a(55),a(68)),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={collapseID:"",records:[],link:"",redirect:!1,id:"",loggedin:!1,showupvotemodel:!1,addideamodel:!1,addidearedirect:!1},a.getallideas=function(){fetch(K+"/").then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({records:e.ideas})}).catch(function(e){console.log(e)}),a.props.user?a.setState({loggedin:!0}):a.setState({loggedin:!1})},a.renderRedirect=function(){if(a.state.redirect)return o.a.createElement(g.a,{to:"/comments/"+a.state.id})},a.upvotebuttonHandler=function(e){if(a.props.user)a.props.user.user;if(a.props.user){var t=new FormData;t.append("userid",a.props.user.record_id),fetch(K+"/idea/upvote/"+e,{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){a.setState({records:e.ideas})}).catch(function(e){console.log(e)})}else a.setState({showupvotemodel:!a.state.showupvotemodel})},a.addidearedirecthandler=function(){if(a.state.addidearedirect)return o.a.createElement(g.a,{to:"/addidea"})},a.onComment=function(e){a.setState({id:e,redirect:!0})},a.userprofile=function(){if(a.props.user)return o.a.createElement("div",{className:h.a.innerBox2},o.a.createElement("h5",{className:h.a.heading},"Profile"),o.a.createElement("div",null,o.a.createElement("img",{className:h.a.img,src:a.props.user.user.profile_image_url,alt:"image",width:30,height:30})),o.a.createElement("p",{className:h.a.heading1},a.props.user.user.screen_name,": loggedin"))},a.toggleCollapse=function(e){return function(){return a.setState(function(t){return{collapseID:t.collapseID!==e?e:""}})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=window.location.href.split("ideas/")[1];e?this.getfilteredideas(e):this.getallideas()}},{key:"getfilteredideas",value:function(e){var t=this;console.log(e),"ALL"===e?this.getallideas():fetch(K+"/idea/filterideas/"+e).then(function(e){return e.json()}).then(function(e){t.setState({records:e.ideas})}).catch(function(e){console.log(e)})}},{key:"orderideas",value:function(e){var t=this;fetch(K+"/idea/orderideas/"+e).then(function(e){return e.json()}).then(function(e){t.setState({records:e.ideas}),console.log(e)}).catch(function(e){console.log(e)})}},{key:"addideahandler",value:function(){this.props.user?this.setState({addidearedirect:!0}):this.setState({addideamodel:!this.state.addideamodel})}},{key:"render",value:function(){var e=this,t=(o.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"transparent"},onClick:this.toggleCollapse("navbarCollapse")}),this.state.records.map(function(t,a){return o.a.createElement(N,{name:t.user.name,problem:t.problem,upvote:t.upvote,onUpvote:e.upvotebuttonHandler.bind(e,t.id),onComment:e.onComment.bind(e,t.id),pic:t.user.profilePicture})}));return o.a.createElement(E,null,o.a.createElement("div",{className:h.a.main},this.renderRedirect(),o.a.createElement(V.c,{open:this.state.showupvotemodel,toggle:this.upvotebuttonHandler.bind(this)},o.a.createElement(V.e,null,"Login Error"),o.a.createElement(V.d,null,"\ud83d\udc4b Hello there, looks like your not logged in"),o.a.createElement(V.d,null,o.a.createElement(L.b,{className:h.a.liks,to:"/login"},o.a.createElement("b",null,"login"))," to upvote")),o.a.createElement(V.c,{open:this.state.addideamodel,toggle:this.addideahandler.bind(this)},o.a.createElement(V.e,null,"Login Error"),o.a.createElement(V.d,null,"\ud83d\udc4b Hello there, looks like your not logged in"),o.a.createElement(V.d,null,o.a.createElement(L.b,{className:h.a.liks,to:"/login"},o.a.createElement("b",null,"login"))," to addIdea")),o.a.createElement("div",{className:h.a.container},o.a.createElement("ul",{className:h.a.ul},o.a.createElement("li",{className:h.a.li},o.a.createElement("a",{className:h.a.links,onClick:this.orderideas.bind(this,"NEWEST")}," #NEWEST ")),o.a.createElement("li",{className:h.a.li},o.a.createElement("a",{className:h.a.links,onClick:this.orderideas.bind(this,"TRENDING")}," #TRENDING ")),o.a.createElement("li",{className:h.a.li},o.a.createElement("a",{className:h.a.links,onClick:this.orderideas.bind(this,"TOP")}," #TOP ")),o.a.createElement("div",{className:h.a.fabu}))),o.a.createElement("div",{className:h.a.buts},o.a.createElement(J.a,{color:"primary","aria-label":"add",onClick:this.addideahandler.bind(this)},o.a.createElement(X.a,null)),this.addidearedirecthandler()),t,o.a.createElement("div",{className:h.a.side},o.a.createElement("div",{className:h.a.plane},o.a.createElement("div",{className:h.a.innerBox},o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"ALL")},"#ALL")," ",o.a.createElement("br",null),o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"Web-Mobile Development")},"#Web/mobile Dev")," ",o.a.createElement("br",null),o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"Blockchain-Crypto")},"#blockchain/crypto"),"  ",o.a.createElement("br",null),o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"Hardware-Elctronics")},"#Elctronics"),"  ",o.a.createElement("br",null),o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"Social")},"#Social"),o.a.createElement("br",null),o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"Gaame Development")},"#Game-Dev")," ",o.a.createElement("br",null),o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"AI-ML")},"#AI/ML"),o.a.createElement("a",{className:h.a.fields,onClick:this.getfilteredideas.bind(this,"IOT")},"#IOT")),o.a.createElement("div",null),this.userprofile()))))}}]),t}(n.Component),Z=a(87),$=a.n(Z),ee=a(13),te=a(143),ae=a.n(te),ne=a(222),oe=a(152),le=a.n(oe),re=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",Object(ne.a)({className:le.a.usermessage},"className",le.a.usermessageerror),this.props.error)}}]),t}(n.Component),ie=a(68),se=(n.Component,a(64)),ce=a.n(se),me=(a(419),a(55)),de=a.n(me),ue=a(420),pe=a(68),he=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={isAuthenticated:!1,user:null,token:"",redirect:!1},a.renderRedirect=function(){if(a.state.redirect)return o.a.createElement(g.a,{to:"/"})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=window.location.pathname.split("/")[2];try{e=de.a.verify(t,"heyphil123")}catch(a){console.log(a)}e?(this.setState({redirect:!0}),y.a.set("jwttoken",t)):this.setState({redirect:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:ce.a.loginstuff},this.renderRedirect(),o.a.createElement("h2",{className:ce.a.head},"Want to see your startup idea become a reality?"),o.a.createElement("h3",{className:ce.a.head2},"then rub a genie lamp"),o.a.createElement("h4",{className:ce.a.head3},"Incase of lack in genie lamps you can Login and add your idea here"),o.a.createElement("div",{className:ce.a.button},o.a.createElement("a",{href:pe+"/auth/twitter/reverse"},o.a.createElement(ue.a,{variant:"danger",className:ce.a.buts},"LOGIN WITH TWITTER"))))}}]),t}(n.Component),ge=a(107),_e=a.n(ge),fe=a(16),Ee=a.n(fe),be=a(55),ve=a(68),Ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={token:""},a.userprofile=function(){var e,t=y.a.get("jwttoken");try{e=be.verify(t,"heyphil123")}catch(a){console.log(a)}if(e)return o.a.createElement("div",{className:Ee.a.innerBox2},o.a.createElement("h5",{className:Ee.a.heading},"Profile"),o.a.createElement("div",null,o.a.createElement("img",{className:Ee.a.img,src:e.user.profile_image_url,alt:"image",width:30,height:30})),o.a.createElement("p",{className:Ee.a.heading1},e.user.screen_name,": loggedin"))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=y.a.get("jwttoken");console.log(e),this.setState({token:e})}},{key:"render",value:function(){return o.a.createElement(E,null,o.a.createElement("div",{className:Ee.a.containers},o.a.createElement("ul",{className:Ee.a.ul},o.a.createElement("li",{className:Ee.a.li},o.a.createElement(L.b,{to:"/",className:Ee.a.links},o.a.createElement(_e.a,{style:{fontSize:40}}),"  BACK ")))),o.a.createElement("div",{className:Ee.a.main},o.a.createElement("div",{className:Ee.a.form},o.a.createElement(ee.e,null,o.a.createElement(ee.j,null,o.a.createElement(ee.d,{md:"12"},o.a.createElement("form",{action:ve+"/addidea",method:"POST"},o.a.createElement("h3",{className:Ee.a.head},"Startup Idea"),o.a.createElement("h5",{className:Ee.a.para},"Tell us about your idea"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",{className:Ee.a.lab},"Select the domain of your startup"),o.a.createElement("select",{class:"browser-default custom-select mb-4",name:"domain",required:!0},o.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Select domain"),o.a.createElement("option",{value:"AI-ML"},"AI/ML"),o.a.createElement("option",{value:"IOT"},"IOT"),o.a.createElement("option",{value:"Web-Mobile Development"},"Web/Mobile Development"),o.a.createElement("option",{value:"Blockchain-Crypto"},"Blockchain/Crypto"),o.a.createElement("option",{value:"Hardware-Electronics"},"Hardware/Electronics"),o.a.createElement("option",{value:"Social"},"Social"),o.a.createElement("option",{value:"Game Development"},"Game Development")),o.a.createElement("label",{className:Ee.a.lab},"Add your problem statement here!"),o.a.createElement("div",{class:"form-group"},o.a.createElement("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"6",placeholder:"Problem",name:"problem"})),o.a.createElement("input",{type:"hidden",value:this.state.token,name:"jwttoken"}),o.a.createElement("div",{className:"text-center mt-4"},o.a.createElement(ue.a,{variant:"primary",outline:!0,type:"submit"},"Submit"))))))),o.a.createElement("div",{className:Ee.a.side},o.a.createElement("div",{className:Ee.a.innerBox},o.a.createElement("div",{className:Ee.a.plane},o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/ALL"},"#ALL"))," ",o.a.createElement("br",null),o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/Web-Mobile Development"},"#Web/mobile Dev"))," ",o.a.createElement("br",null),o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/Blockchain-Crypto"},"#Blockchain/crypto")),"  ",o.a.createElement("br",null),o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/Hardware-Elctronics"},"#Hardware/Elctronics")),"  ",o.a.createElement("br",null),o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/Social"},"#Social")),o.a.createElement("br",null),o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/Gaame Development"},"#Game-Dev")),o.a.createElement("br",null),o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/AI-ML"},"#AI-ML")),o.a.createElement("a",{className:Ee.a.fields},o.a.createElement(L.b,{to:"/ideas/IOT"},"#IOT")))),o.a.createElement("div",null,this.userprofile()))))}}]),t}(n.Component),ke=(a(421),a(55)),ye=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={collapseID:"",records:[],link:"",email:"",Redirect:!1,comRedirect:!1,comid:""},a.onComment=function(e){a.setState({comid:e,comredirect:!0})},a.rendercomRedirect=function(){if(a.state.comredirect)return o.a.createElement(g.a,{to:"/comments/"+a.state.comid})},a.toggleCollapse=function(e){return function(){return a.setState(function(t){return{collapseID:t.collapseID!==e?e:""}})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=y.a.get("jwttoken");try{e=ke.verify(a,"heyphil123")}catch(o){console.log(o)}e.loggedin&&this.setState({email:e.email});var n="https://gentle-retreat-77560.herokuapp.com/idea/getmyideas/"+e.email;console.log(n),fetch(n).then(function(e){return e.json()}).then(function(e){e.ideaidlist.forEach(function(e){fetch("https://gentle-retreat-77560.herokuapp.com/idea/getidea/"+e).then(function(e){return e.json()}).then(function(e){console.log(e),t.state.records.push(e),t.setState({Redirect:!0})})})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=(o.a.createElement("div",{id:"sidenav-overlay",style:{backgroundColor:"transparent"},onClick:this.toggleCollapse("navbarCollapse")}),this.state.records.map(function(t,a){return o.a.createElement(N,{email:e.state.email,problem:t.idea.Problem,upvote:t.idea.upvote,onComment:e.onComment.bind(e,t.id)})}));return o.a.createElement("div",null,this.rendercomRedirect(),t)}}]),t}(n.Component),Ce=a(8),we=a.n(Ce),Se=a(223),je=a.n(Se),Le=(a(422),n.Component,function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:we.a.parentc},o.a.createElement("img",{className:we.a.imgc,src:e.userimage,alt:"image",width:50,height:50}),o.a.createElement("div",{className:we.a.containerc},o.a.createElement("p",{className:we.a.head},"@",e.username),o.a.createElement("p",{className:we.a.title},e.usercomment))))}),Oe=a(55),xe=a(68),Ae="rgba(3, 3, 3, 0.3)",De=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={collapseID:"",records:[],comments:[],users:[],ideaid:void 0,commentbox:"",email:"",Problem:void 0,userlu:void 0,addcomment:!1,open:!1,commmentmodel:!1,showupvotemodel:!1},a.postHandler=function(){a.setState({addcomment:!0})},a.getcomments=function(){var e=window.location.href;e=e.split("/comments/")[1],a.setState({ideaid:e}),fetch(xe+"/comments/"+e).then(function(e){return e.json()}).then(function(e){a.setState({comments:e.comments||[],problem:e.idea.problem,username:e.user.name,upvote:e.idea.upvote,profilePicture:e.user.profilePicture}),console.log(e)}).catch(function(e){console.log(e)})},a.handelchange=function(e){a.setState({commentbox:e.target.value})},a.clickmodel=function(){var e,t=y.a.get("jwttoken");try{e=Oe.verify(t,"heyphil123")}catch(n){console.log(n)}e?a.setState({open:!a.state.open}):a.togcommentmodel()},a.togcommentmodel=function(){a.setState({commmentmodel:!a.state.commmentmodel})},a.postComment=function(){if(a.clickmodel(),a.props.user){var e=a.props.user.user;a.state.name=e.screen_name;var t=a.state.ideaid,n=new FormData;n.append("comment",a.state.commentbox),n.append("userid",a.props.user.record_id),fetch(xe+"/comments/"+t,{method:"POST",body:n}).then(function(e){return e.json()}).then(function(e){fetch(xe+"/comments/"+a.state.ideaid).then(function(e){return e.json()}).then(function(e){a.getcomments()}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}},a.upvotebuttonHandler=function(){if(a.props.user){a.props.user.user;var e=new FormData;e.append("userid",a.props.user.record_id);var t=xe+"/comments/upvote/"+a.state.ideaid;fetch(t,{method:"POST",body:e}).then(function(e){return e.json()}).then(function(e){a.setState({upvote:e.idea.upvote})}).catch(function(e){console.log(e)})}else a.setState({showupvotemodel:!a.state.showupvotemodel})},a.checkifupvote=function(){a.state.loggedin&&a.state.whoupvotelu.includes(a.state.decodedtoken.user_id)&&(Ae="rgba(244, 3, 3, 0.3)")},a.userprofile=function(){if(a.props.user)return o.a.createElement("div",{className:we.a.innerBox2},o.a.createElement("h5",{className:we.a.heading},"Profile"),o.a.createElement("div",null,o.a.createElement("img",{className:we.a.img23,src:a.props.user.user.profile_image_url,alt:"image",width:30,height:30})),o.a.createElement("p",{className:we.a.heading1},a.props.user.user.screen_name,": loggedin"))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getcomments()}},{key:"render",value:function(){this.checkifupvote();var e=this.state.comments.map(function(e,t){return o.a.createElement(Le,{userimage:e.Commenters.profilePicture,username:e.Commenters.name,usercomment:e.commentText})});return o.a.createElement(E,null,o.a.createElement("div",{className:we.a.main},o.a.createElement("div",{className:we.a.containers},o.a.createElement("ul",{className:we.a.ul},o.a.createElement("li",{className:we.a.li},o.a.createElement(L.b,{to:"/",className:we.a.links},o.a.createElement(_e.a,{style:{fontSize:40}}),"  BACK ")))),o.a.createElement("div",{className:we.a.righttoolbar},o.a.createElement("div",{className:we.a.parent},o.a.createElement("div",null,o.a.createElement("img",{className:we.a.img,src:this.state.profilePicture,alt:"image",width:70,height:70})),o.a.createElement(v.a,{maxWidth:"lg"},o.a.createElement("div",{className:we.a.container},o.a.createElement(b.a,{elevation:.5},o.a.createElement("p",{className:we.a.head},"@",this.state.username),o.a.createElement("p",{className:we.a.title},this.state.problem)))),o.a.createElement("div",{className:we.a.ThumbsUp},o.a.createElement("div",{className:we.a.buttn},o.a.createElement("button",{className:we.a.btn,onClick:this.upvotebuttonHandler.bind(this),style:{background:Ae}},this.state.upvote,"   Upvote")),o.a.createElement(L.b,{onClick:this.clickmodel,className:we.a.titles},o.a.createElement(je.a,{style:{fontSize:40}}))),o.a.createElement("div",null,o.a.createElement(V.c,{open:this.state.open,toggle:this.clickmodel},o.a.createElement(V.e,null,"Post your comment"),o.a.createElement(V.d,null,o.a.createElement(V.b,{size:"lg",onChange:this.handelchange.bind(this)}),o.a.createElement(V.a,{onClick:this.postComment},"Post")))),o.a.createElement("div",null,o.a.createElement(V.c,{open:this.state.commmentmodel,toggle:this.togcommentmodel},o.a.createElement(V.e,null,"Login Error"),o.a.createElement(V.d,null,"\ud83d\udc4b Hello there, looks like your not logged in"),o.a.createElement(V.d,null,o.a.createElement(L.b,{to:"/login"},"login")," to comment"))),o.a.createElement(V.c,{open:this.state.showupvotemodel,toggle:this.upvotebuttonHandler.bind(this)},o.a.createElement(V.e,null,"Login Error"),o.a.createElement(V.d,null,"\ud83d\udc4b Hello there, looks like your not logged in"),o.a.createElement(V.d,null,o.a.createElement(L.b,{to:"/login"},"login")," to upvote"))),e,o.a.createElement("div",{className:we.a.side},o.a.createElement("div",{className:we.a.plane},o.a.createElement("div",{className:we.a.innerBox},o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/ALL"},"#ALL"))," ",o.a.createElement("br",null),o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/Web-Mobile Development"},"#Web/mobile Dev"))," ",o.a.createElement("br",null),o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/Blockchain-Crypto"},"#Blockchain/crypto")),"  ",o.a.createElement("br",null),o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/Hardware-Elctronics"},"#Hardware/Elctronics")),"  ",o.a.createElement("br",null),o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/Social"},"#Social")),o.a.createElement("br",null),o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/Gaame Development"},"#Game-Dev")),o.a.createElement("br",null),o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/AI-ML"},"#AI-ML")),o.a.createElement("a",{className:we.a.fields},o.a.createElement(L.b,{className:we.a.fields,to:"/ideas/IOT"},"#IOT"))),this.userprofile())))))}}]),t}(n.Component),Ie=(a(88),a(55)),Me=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={loggedin:!1,user:void 0,menuOpen:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{menuOpen:!e.menuOpen}})},a.updatestate=a.updatestate.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=y.a.get("jwttoken");try{e=Ie.verify(t,"heyphil123")}catch(a){console.log(a)}e?this.setState({user:e}):this.setState({user:void 0}),this.updatestate(e)}},{key:"updatestate",value:function(e){this.setState({user:e})}},{key:"render",value:function(){var e=this,t=function(){return o.a.createElement(q,{user:e.state.user,updatestate:e.updatestate})},a=function(){return o.a.createElement(Y,{user:e.state.user})};return o.a.createElement(n.Fragment,null,o.a.createElement(L.a,null,o.a.createElement(g.b,{component:t,drawerClickedHandler:this.drawerToggleClickHandler}),o.a.createElement(g.b,{path:"/",exact:!0,component:a}),o.a.createElement(g.b,{path:"/ideas",component:a}),o.a.createElement(g.b,{path:"/login",component:function(){return o.a.createElement(he,{updatestate:e.updatestate})}}),o.a.createElement(g.b,{path:"/addidea",component:Ne}),o.a.createElement(g.b,{path:"/logout",component:a}),o.a.createElement(g.b,{path:"/myideas",component:ye}),o.a.createElement(g.b,{path:"/comments/:id",component:function(){return o.a.createElement(De,{user:e.state.user})}})))}}]),t}(n.Component),We=(a(423),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Te(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(Me,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");We?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Te(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):Te(e)})}}()},43:function(e,t,a){e.exports={righttoolbar:"Ideaforms_righttoolbar__14Jxi",parent:"Ideaforms_parent__21Bes",container:"Ideaforms_container__1bEwi",title:"Ideaforms_title__TT5L3",head:"Ideaforms_head__37lAs",btn:"Ideaforms_btn__1Wwwd",comments:"Ideaforms_comments__3Cr3x",comment:"Ideaforms_comment__L7YDD",buttn:"Ideaforms_buttn__2W2N8",aside:"Ideaforms_aside__3FMqA",img:"Ideaforms_img__L-sZN"}},64:function(e,t,a){e.exports={loginstuff:"Login_loginstuff__2M2w5",head:"Login_head__2mkgC",head2:"Login_head2__3wooL",head3:"Login_head3__1pgft",head4:"Login_head4__1NQTu",button:"Login_button__1kXMg",buts:"Login_buts__2f23L"}},68:function(e,t){e.exports="https://gentle-retreat-77560.herokuapp.com"},8:function(e,t,a){e.exports={img:"Comment_img__1XIGL",mod:"Comment_mod__NdHnU",righttoolbar:"Comment_righttoolbar__VuAqk",parent:"Comment_parent__2SGPc",container:"Comment_container__1uvs-",btn:"Comment_btn__hEn1e",lab:"Comment_lab__2yAkK",head:"Comment_head__1ioJA",title:"Comment_title__EWjfJ",section:"Comment_section__8wq1V","form-group":"Comment_form-group__2iiFU",ThumbsUp:"Comment_ThumbsUp__2Qy58",votes:"Comment_votes__3aSNA",containers:"Comment_containers__3ON0-",links:"Comment_links__21l7H",titles:"Comment_titles__Wjh7Z",parentc:"Comment_parentc__qwS05",containerc:"Comment_containerc__25DwG",imgc:"Comment_imgc__Vf4Nn",side:"Comment_side__7EUsr",plane:"Comment_plane__8imtd",fields:"Comment_fields__SN-cK",innerBox:"Comment_innerBox__EKmiW",innerBox2:"Comment_innerBox2__2LdNk",buttn:"Comment_buttn__aURXT",img23:"Comment_img23__2srG7",heading:"Comment_heading__2KWEu",heading1:"Comment_heading1__3Sws7"}},84:function(e,t,a){e.exports={logs:"mobilelogo_logs__3PP36",Logo:"mobilelogo_Logo__1FjBA",img:"mobilelogo_img__27pGD"}},87:function(e,t,a){e.exports={Signupstyle:"SignUp_Signupstyle__38a0A",area:"SignUp_area__2x2nz",header2:"SignUp_header2__MSXqb",images:"SignUp_images__3m9cg"}},88:function(e,t,a){e.exports={togglebutton:"DrawerToggleButton_togglebutton__1uRNH",toggle_button_line:"DrawerToggleButton_toggle_button_line__2jy4s"}}},[[229,1,2]]]);
//# sourceMappingURL=main.0bca46e4.chunk.js.map