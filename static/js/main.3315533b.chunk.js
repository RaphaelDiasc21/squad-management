(this["webpackJsonpsquad-management"]=this["webpackJsonpsquad-management"]||[]).push([[0],Array(25).concat([function(e,a,t){e.exports=t(52)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),m=t(10),i=t(2),o=t(3),s=t(1),u=t(22),d=Object(u.a)((function(e,a){switch(a.type){case"ADD_TEAM":e.teams.push(a.payload);break;case"DELETE_TEAM":console.log(e.teams),e.teams.splice(a.payload,1),e.teams=e.teams;break;case"EDIT_TEAM":e.teams[a.payload.teamIndex]=a.payload.teamData}return e}),{teams:[]}),f=(t(31),t(5)),p=(t(32),t(33),function(e){return r.a.createElement("div",{className:"tag mr-2 ml-2 d-flex justify-content-around"},r.a.createElement("span",null,e.name),r.a.createElement("div",{onClick:function(a){a.stopPropagation(),e.deleteTag(e.name)}},"X"))}),E=function(e){var a=Object(n.useState)({purpose:"ADD_TEAM"}),t=Object(s.a)(a,2),l=t[0],c=t[1],m=Object(n.useState)({nameInputError:"",websiteInputError:"",descriptionInputError:"",typeInputError:"",tagsInputError:""}),i=Object(s.a)(m,2),u=i[0],d=i[1],E=Object(n.useState)({name:"",description:"",website:"",type:"",tags:[]}),v=Object(s.a)(E,2),_=v[0],b=v[1],g=Object(n.useState)([]),h=Object(s.a)(g,2),y=h[0],N=h[1],O=Object(n.useState)({name:""}),j=Object(s.a)(O,2),w=j[0],T=j[1];Object(n.useEffect)((function(){console.log(e.team),b(Object(o.a)({},e.team)),N(Object(f.a)(e.team.tags)),c(Object(o.a)({},e.purpose))}),[e]);var I=function(e){var a=y.map((function(e){return e.name})).indexOf(e);y.splice(a,1),N(Object(f.a)(y)),b(Object(o.a)(Object(o.a)({},_),{},{tags:Object(f.a)(y)}))},x=function(e){b(Object(o.a)(Object(o.a)({},_),{},{type:e.target.value}))};return r.a.createElement("div",{className:"create-team"},r.a.createElement("h4",{className:"create-team__title"},"TEAM INFORMATION"),r.a.createElement("form",null,r.a.createElement("div",{className:"create-team__form-wrapper"},r.a.createElement("div",{className:"create-team__form--input-div"},r.a.createElement("div",{className:"create-team__form---input-div-layout mr-md-3 "+(u.nameInputError?"create-team__form--error-highlights":"")},r.a.createElement("label",null,"Team name"),r.a.createElement("input",{value:_.name,onChange:function(e){return function(e){b(Object(o.a)(Object(o.a)({},_),{},{name:e.target.value}))}(e)},type:"text"})),r.a.createElement("div",{className:"create-team__form---input-div-layout "+(u.websiteInputError?"create-team__form--error-highlights":"")},r.a.createElement("label",null,"Team website"),r.a.createElement("input",{value:_.website,onChange:function(e){return function(e){b(Object(o.a)(Object(o.a)({},_),{},{website:e.target.value}))}(e)},type:"text"}))),r.a.createElement("div",{className:"create-team__form--input-div"},r.a.createElement("div",{className:"create-team__form---input-div-layout mr-md-3 "+(u.descriptionInputError?"create-team__form--error-highlights":"")},r.a.createElement("label",null,"Description"),r.a.createElement("textarea",{rows:"10",cols:"12",value:_.description,onChange:function(e){return function(e){b(Object(o.a)(Object(o.a)({},_),{},{description:e.target.value}))}(e)}})),r.a.createElement("div",{className:"create-team__form--input-div-together"},r.a.createElement("div",null,r.a.createElement("div",{className:"create-team__form---input-div-layout "+(u.typeInputError?"create-team__form--error-highlights":"")},r.a.createElement("label",null,"Team type"),r.a.createElement("div",{class:"create-team__form--input-radio"},r.a.createElement("input",{type:"radio",id:"Real-radio-input",name:"type",value:"Real",onChange:function(e){return x(e)}}),r.a.createElement("label",null,"Real"),r.a.createElement("input",{type:"radio",id:"Fantasy-radio-input",name:"type",value:"Fantasy",onChange:function(e){return x(e)}}),r.a.createElement("label",null,"Fantasy")))),r.a.createElement("div",{className:"create-team__form---input-div-layout w-100 "+(u.tagsInputError?"create-team__form--error-highlights":"")},r.a.createElement("label",null,"Tags"),r.a.createElement("div",{className:"create-team__form--tag-container d-flex align-items-center"},y.map((function(e){return r.a.createElement(p,{name:e.name,deleteTag:I})})),r.a.createElement("input",{onKeyDown:function(e){if(e.preventDefault(),console.log("dsaf"),13===e.keyCode||191===e.keyCode)return N([].concat(Object(f.a)(y),[{name:w.name}])),b(Object(o.a)(Object(o.a)({},_),{},{tags:[].concat(Object(f.a)(_.tags),[{name:w.name}])})),e.preventDefault();if(8===e.keyCode){var a=w.name.split("");a.pop();var t=a.join("");return T({name:t}),e.preventDefault()}T({name:w.name+e.key})},value:w.name})))))),r.a.createElement("div",{className:"w-100 d-flex justify-content-center mt-2"},r.a.createElement("button",{className:"btn save-team__button--div",onClick:function(a){if(a.preventDefault(),function(){var e=!1,a=!1,t=!1,n=!1,r=!1,l=!0;return console.log(_.website),console.log(_.website.indexOf("@")),""==_.name&&(e=!0,l=!1),""!==_.website&&-1!=_.website.indexOf("@")||(a=!0,l=!1),""===_.description&&(t=!0,l=!1),""===_.type&&(n=!0,l=!1),0==y.length&&(r=!0,l=!1),d({nameInputError:e,websiteInputError:a,descriptionInputError:t,typeInputError:n,tagsInputError:r}),l}()){if("undefined"!=typeof e.teamIndex)return e.saveTeamInfo(_,l.purpose,e.teamIndex);e.saveTeamInfo(_,l.purpose)}}},"Save team information"))))},v=(t(34),t(35),function(e){return r.a.createElement("div",{className:"d-flex flex-row justify-content-start align-items-center"},r.a.createElement("label",null,"Formation"),r.a.createElement("select",{className:"form-control formation__input",onChange:function(a){return function(a){e.formationHandler(a.target.value)}(a)}},r.a.createElement("option",null,e.formation.formation),[{formation:"3-4-3"},{formation:"4-3-3"}].map((function(e){return r.a.createElement("option",{value:e.formation},e.formation)}))))}),_=(t(36),t(37),function(e){return r.a.createElement("div",{className:"position__player",id:e.id,onDragOver:function(e){e.stopPropagation(),e.preventDefault()},onDrop:function(e){console.log(e),console.log(e.dataTransfer.getData("player_id")),console.log(e.dataTransfer.getData("player_name"))}})}),b=function(e){var a=Object(n.useState)({attack:0,middle:0,defense:0}),t=Object(s.a)(a,2),l=t[0],c=t[1],m=function(e,a){return Array.from(Array(e),(function(e,t){return r.a.createElement(_,{id:a+" "+t})}))};return Object(n.useEffect)((function(){c(Object(o.a)({},e.formation))}),[e.formation]),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field__area"},m(l.attack,"attack")),r.a.createElement("div",{className:"field__area"},m(l.middle,"middle")),r.a.createElement("div",{className:"field__area"},m(l.defense,"defense")),r.a.createElement("div",{className:"field__area"},r.a.createElement(_,null)))},g=function(e){var a=Object(n.useState)({}),t=Object(s.a)(a,2),l=t[0],c=t[1],m=Object(n.useState)({formation:""}),i=Object(s.a)(m,2),o=i[0],u=i[1];Object(n.useEffect)((function(){d(e.formation.formation)}),[e.formation]);var d=function(e){var a=e.split("-");c({attack:Number(a[2]),middle:Number(a[1]),defense:Number(a[0])}),u({formation:e})},f=function(){e.saveTeamFormation(o.formation)};return r.a.createElement("div",{className:"configure-squad__wrapper"},r.a.createElement("div",{className:"configure-squad__wrapper-div"},r.a.createElement("div",{className:"configure-squad__layout"},r.a.createElement(v,{formation:e.formation,formationHandler:function(e){d(e)},saveTeamFormation:f}),r.a.createElement(b,{formation:l}),r.a.createElement("button",{onClick:f},"Save"))))},h=(t(38),function(e){return r.a.createElement("div",{className:"player__card d-flex flex-sm-colum flex-md-row p-3",onDragStart:function(a){setTimeout((function(){a.preventDefault()}),0),a.dataTransfer.setData("player_id",a.target.id),a.dataTransfer.setData("player_name",e.name)},draggable:"true",id:"1"},r.a.createElement("div",{className:"row w-100"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("p",null,r.a.createElement("span",{className:"player__card--info-label"},"Name:"),r.a.createElement("span",{className:"player__card--info",id:"name "+e.name},e.name))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("p",null,r.a.createElement("span",{className:"player__card--info-label"},"Age:"),r.a.createElement("span",{className:"player__card--info"},e.age))),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("p",null,r.a.createElement("span",{className:"player__card--info-label"},"Nacionality:"),r.a.createElement("span",{className:"player__card--info"},e.nacionality)))))}),y=function(){return r.a.createElement("div",{className:"configure-squad__wrapper"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Search Players"),r.a.createElement("input",{type:"text",className:"form-control"})),r.a.createElement("div",null,r.a.createElement(h,{name:"Ronaldo",age:"22",nacionality:"Brazil"})))},N=(t(39),function(e){var a=Object(n.useState)({purpose:"ADD_TEAM"}),t=Object(s.a)(a,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement("h4",{className:"configure-squad__title"},"CONFIGURE SQUAD"),r.a.createElement("div",{className:"team-configuration__wrapper row"},r.a.createElement("div",{className:"col-sm-12 col-md-6 mt-sm-2 mt-md-1"},r.a.createElement(g,{formation:e.formation,saveTeamFormation:function(a){e.saveTeamFormation(a)}})),r.a.createElement("div",{className:"col-sm-12 col-md-6 mt-sm-2 mt-md-1"},r.a.createElement(y,null))))}),O=function(){var e=Object(i.f)(),a=Object(n.useState)({purpose:"ADD_TEAM"}),t=Object(s.a)(a,2),l=t[0],c=t[1],m=Object(n.useState)({index:"undefined"}),u=Object(s.a)(m,2),f=u[0],p=u[1],v=Object(n.useState)({name:"",description:"",website:"",type:"",tags:[],formation:{formation:"3-4-3"}}),_=Object(s.a)(v,2),b=_[0],g=_[1];Object(n.useEffect)((function(){"undefined"!=typeof e.location.state&&(g(Object(o.a)({},e.location.state.team[0])),c({purpose:"EDIT_TEAM"}),p({index:e.location.state.teamStoreIndex}))}),[]);var h=function(a,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;"ADD_TEAM"==t?(a.id=d.getState().teams.length,a.formation={formation:"3-4-3"},g(Object(o.a)({},a)),d.dispatch({type:t,payload:a}),e.push("/")):(d.dispatch({type:t,payload:{teamData:a,teamIndex:n}}),e.push("/"))};return r.a.createElement("div",{className:"createTeams__wrapper"},r.a.createElement("h1",{className:"createTeams__wrapper--title"},"Create your team"),r.a.createElement(E,{saveTeamInfo:h,team:b,purpose:l,teamIndex:f.index}),r.a.createElement(N,{formation:b.formation,teamStateRouter:e.location.state,saveTeamFormation:function(e){var a=b;a.formation={formation:e},"undefined"!=f.index?h(a,l.purpose,f.index):h(h(a,l.purpose))}}))},j=(t(44),t(45),t(46),function(e){console.log(e);var a=function(a){var t=a.target.id.split("-")[1];"undefined"!=typeof t&&e.deleteTeam(t)},t=function(a){console.log(a.target);var t=a.target.id.split("-")[1];console.log(t),"undefined"!=typeof t&&e.editTeam(t)};return r.a.createElement("div",{className:"icons__wrapper"},r.a.createElement("div",{className:"icons__icon--div tip","data-toggle":"tooltip","data-placement":"top",title:"delete team",id:"delete-"+e.teamId,onClick:a},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-trash-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",id:"delete-"+e.teamId,onClick:a},r.a.createElement("path",{id:"delete-"+e.teamId,onClick:a,"fill-rule":"evenodd",d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"}))),r.a.createElement("div",{className:"icons__icon--div","data-toggle":"tooltip","data-placement":"top",title:"share team"},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-share-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M12.024 3.797L4.499 7.56l-.448-.895 7.525-3.762.448.894zm-.448 9.3L4.051 9.335 4.5 8.44l7.525 3.763-.448.894z"}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M13.5 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-5.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}))),r.a.createElement("div",{className:"icons__icon--div","data-toggle":"tooltip","data-placement":"top",title:"Edit",id:"edit-"+e.teamId,onClick:t},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-pencil",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",id:"edit-"+e.teamId,onClick:t},r.a.createElement("path",{"fill-rule":"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z",id:"edit-"+e.teamId,onClick:t}),r.a.createElement("path",{"fill-rule":"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z",id:"edit-"+e.teamId,onClick:t}))))}),w=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",{className:"teamtabledata__desc-with-icons"},e.description,r.a.createElement(j,{teamId:e.teamId,deleteTeam:function(a){e.deleteTeam(a)},editTeam:function(a){e.editTeam(a)}})))},T=(t(47),function(e){var a=Object(i.f)(),t=Object(n.useState)([]),l=Object(s.a)(t,2),c=l[0],m=l[1];Object(n.useEffect)((function(){m(Object(f.a)(e.teams))}),[e.teams]);var o=function(e){var a="name"==e.target.id?c.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):c.sort((function(e,a){return e.description>a.description?1:e.description<a.description?-1:0}));console.log(a),m(Object(f.a)(a))},u=function(a){e.deleteTeam(a)},d=function(a){e.editTeam(a)};return r.a.createElement("div",{className:"teamsboard__wrapper"},r.a.createElement("div",{className:"myteams__header d-flex justify-content-between"},r.a.createElement("div",{className:"myteams__header--title-div"},r.a.createElement("p",{className:"myteams__header--title"},"My teams")),r.a.createElement("div",{className:"myteams__header--icon",onClick:function(){a.push("/create-team")}},r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-file-plus-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M12 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"})))),r.a.createElement("div",{className:"myteams__infos"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"myteams__table--head myteams__table--head-name",id:"name",onClick:o},"Name"),r.a.createElement("th",{className:"myteams__table--head myteams__table--head-desc",id:"description",onClick:o},"Description"))),r.a.createElement("tbody",null,function(){if(console.log(c.length),c.length>0)return c.map((function(e){return r.a.createElement(w,{name:e.name,description:e.description,teamId:e.id,deleteTeam:u,editTeam:d})}))}()))))}),I=(t(48),function(e){return r.a.createElement("div",{className:"d-flex justify-content-around w-100 topteam__wrapper w-100"},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.avg))}),x=(t(49),function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){var e=d.getState().teams;l(Object(f.a)(e))}),[d.getState().teams]);var c=function(){return t.map((function(e){return r.a.createElement(I,{name:e.name,avg:"21.1"})}))};return r.a.createElement("div",{className:"topteams"},r.a.createElement("div",{className:"teamsboard__wrapper"},r.a.createElement("div",{className:"topteams__header"},r.a.createElement("p",null,"Top 5")),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("p",{style:{fontWeight:"700"}},"Highest avg age"),r.a.createElement("div",{className:"topteams__infos"},c())),r.a.createElement("div",{className:"col-sm-12 col-md-6"},r.a.createElement("p",{style:{fontWeight:"700"}},"Lowest avg age"),r.a.createElement("div",{className:"topteams__infos"},c()))))))}),D=function(){var e=Object(i.f)(),a=Object(n.useState)(d.getState().teams),t=Object(s.a)(a,2),l=t[0],c=t[1],m=l;return r.a.createElement("div",null,r.a.createElement("div",{className:"teamboard__wrapper"},r.a.createElement("div",{className:"row w-100 m-0"},r.a.createElement("div",{className:"col-sm-12 col-md-6 mt-4"},r.a.createElement(T,{teams:m,deleteTeam:function(e){var a=l.map((function(e){return e.id})).indexOf(Number(e),0);d.dispatch({type:"DELETE_TEAM",payload:a}),c(Object(f.a)(d.getState().teams)),m=l,console.log(l)},editTeam:function(a){var t,n=l.filter((function(e,n){if(e.id==a)return t=n,e}));e.push("/create-team",{team:n,teamStoreIndex:t})}})),r.a.createElement("div",{className:"col-sm-12 col-md-6 mt-4"},r.a.createElement(x,null)))))},C=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(D,null)),r.a.createElement(i.a,{path:"/create-team"},r.a.createElement(O,null)))},S=function(){return r.a.createElement(m.a,null,r.a.createElement(C,null))},k=(t(50),t(51),function(){return r.a.createElement(S,null)});c.a.render(r.a.createElement(k,null),document.getElementById("root"))}]),[[25,1,2]]]);
//# sourceMappingURL=main.3315533b.chunk.js.map