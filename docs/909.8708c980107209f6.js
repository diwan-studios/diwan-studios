"use strict";(self.webpackChunkamr_diwan_web=self.webpackChunkamr_diwan_web||[]).push([[909],{1909:(S,C,r)=>{r.r(C),r.d(C,{InnerContainerModule:()=>I});var p=r(6814),M=r(95),c=r(9310),n=r(4946),m=r(794),a=r(7130);const P=["NavbarCollapse"],h=function(){return["home"]};let O=(()=>{class t{constructor(o,i){this.Router=o,this.Animation=i,this.RoutePaths=a.s,this.ArtCategories=[{Title:"KSA Projects",ImgAlt:"",ImgSrc:"assets/Images/girl-wall.jpg",Links:[{Title:"Project 1",Link:`${a.s.ArtWorks}`},{Title:"Project 2",Link:`${a.s.ArtWorks}`},{Title:"Project 3",Link:`${a.s.ArtWorks}`}]},{Title:"Qatar Projects",ImgAlt:"",ImgSrc:"assets/Images/girl-wall.jpg",Links:[{Title:"Project 1",Link:`${a.s.ArtWorks}`},{Title:"Project 2",Link:`${a.s.ArtWorks}`},{Title:"Project 3",Link:`${a.s.ArtWorks}`}]},{Title:"EGYPT Projects",ImgAlt:"",ImgSrc:"assets/Images/girl-wall.jpg",Links:[{Title:"Project 1",Link:`${a.s.ArtWorks}`},{Title:"Project 2",Link:`${a.s.ArtWorks}`},{Title:"Project 3",Link:`${a.s.ArtWorks}`},{Title:"Project 4",Link:`${a.s.ArtWorks}`},{Title:"Project 5",Link:`${a.s.ArtWorks}`},{Title:"Project 6",Link:`${a.s.ArtWorks}`}]},{Title:"France Projects",ImgAlt:"",ImgSrc:"assets/Images/girl-wall.jpg",Links:[{Title:"Project 1",Link:`${a.s.ArtWorks}`},{Title:"Project 2",Link:`${a.s.ArtWorks}`},{Title:"Project 3",Link:`${a.s.ArtWorks}`}]}]}ngOnInit(){this.ScrollChanges()}goToProfile(){}goToSettings(){}ScrollChanges(){document.querySelector(".main-app").addEventListener("scroll",()=>{this.toggleNavbarScrolled(!1),this.toggleBackgroundScrolled()})}toggleNavbarScrolled(o){const i=document.querySelector(".navbar");document.querySelector(".main-app").scrollTop>1||o?i?.classList.add("navbar-scrolled"):i?.classList.remove("navbar-scrolled")}toggleBackgroundScrolled(){document.querySelector("body").style.backgroundColor=window.scrollY>1?"var(--primary-color1)":""}OpenMenu(){this.Animation.animationflag=!0,this.Animation.transform()}ScrollUp(){const o=document.querySelector(".main-app");null!=o&&(o.scrollTop=0),this.Animation.animationflag=!1,this.Animation.transform()}static#n=this.\u0275fac=function(i){return new(i||t)(n.Y36(c.F0),n.Y36(m.c))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-header"]],viewQuery:function(i,e){if(1&i&&n.Gf(P,5),2&i){let s;n.iGM(s=n.CRH())&&(e.NavbarCollapse=s.first)}},decls:15,vars:2,consts:[[1,"navbar","navbar-expand-sm","navbar-dark","fixed-top"],[1,"container-fluid","align-items-start"],[1,"logo",3,"routerLink","click"],["src","assets/Images/diwan-handbook/logo-gold.png","alt","logo-img",1,"logo-img"],[1,"button",3,"click"],[1,"lines-div"],[1,"line-div","line-1"],[1,"line"],[1,"line-div","line-2"],[1,"line-div","line-3"]],template:function(i,e){1&i&&(n.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),n.NdJ("click",function(){return e.ScrollUp()}),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"div",4),n.NdJ("click",function(){return e.OpenMenu()}),n.TgZ(5,"div",5)(6,"div",6),n._UZ(7,"div",7)(8,"div",7),n.qZA(),n.TgZ(9,"div",8),n._UZ(10,"div",7)(11,"div",7),n.qZA(),n.TgZ(12,"div",9),n._UZ(13,"div",7)(14,"div",7),n.qZA()()()()()),2&i&&(n.xp6(2),n.Q6J("routerLink",n.DdM(1,h)))},dependencies:[c.rH],styles:[".navbar[_ngcontent-%COMP%]{transition:transform .3s ease-out;margin-inline-end:5px}.navbar[_ngcontent-%COMP%]:has(.show), .navbar[_ngcontent-%COMP%]:has(.collapsing){box-shadow:0 0 15px 10px #04000966;background-color:var(--primary-bg-color)!important}.navbar[_ngcontent-%COMP%]:has(.show)   .container-fluid[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]:has(.collapsing)   .container-fluid[_ngcontent-%COMP%]{background-color:var(--primary-bg-color)}.navbar[_ngcontent-%COMP%]:has(.show)   .container-fluid[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]:has(.collapsing)   .container-fluid[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]{padding-top:10px}.navbar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]{height:40px}.navbar[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(166, 130, 58, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")}.navbar.nav-animation[_ngcontent-%COMP%]{transform:scale(.8) translate(-300px,206%)!important;transition:transform .3s ease-out!important}.navbar.nav-normal[_ngcontent-%COMP%]{transform:none;transform:transform .3s ease-out!important}.navbar.navbar-scrolled[_ngcontent-%COMP%]{background-color:var(--primary-bg-color)!important;box-shadow:0 0 15px 10px #0006}.button[_ngcontent-%COMP%]{width:45px;height:40px;background-color:#000;display:flex;align-items:center;justify-content:space-between;flex-direction:column;border:1px solid transparent;padding:7px;border-radius:5px;cursor:pointer;position:relative;overflow:hidden}.button[_ngcontent-%COMP%]   .lines-div[_ngcontent-%COMP%]{height:25px;width:60px;position:absolute;right:9px;display:flex;align-items:center;justify-content:space-between;flex-direction:column}.button[_ngcontent-%COMP%]   .lines-div[_ngcontent-%COMP%]   .line-div[_ngcontent-%COMP%]{height:3px;width:100%;display:flex;flex-wrap:nowrap;transition:all .2s ease-in-out}.button[_ngcontent-%COMP%]   .lines-div[_ngcontent-%COMP%]   .line-div[_ngcontent-%COMP%]:nth-child(1){transition-delay:0}.button[_ngcontent-%COMP%]   .lines-div[_ngcontent-%COMP%]   .line-div[_ngcontent-%COMP%]:nth-child(2){transition-delay:.05s}.button[_ngcontent-%COMP%]   .lines-div[_ngcontent-%COMP%]   .line-div[_ngcontent-%COMP%]:nth-child(3){transition-delay:.1s}.button[_ngcontent-%COMP%]   .lines-div[_ngcontent-%COMP%]   .line-div[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{height:3px;width:100%;background-color:var(--gold2)}.button[_ngcontent-%COMP%]   .lines-div[_ngcontent-%COMP%]   .line-div[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(2){margin-inline-start:10px}.button[_ngcontent-%COMP%]:hover   .lines-div[_ngcontent-%COMP%]   .line-div[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{background-color:var(--gold1)}.button[_ngcontent-%COMP%]:hover   .line-1[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:hover   .line-2[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:hover   .line-3[_ngcontent-%COMP%]{transform:translate(35px)}@media (max-width: 576px){.navbar.nav-animation[_ngcontent-%COMP%]{transform:scale(.8) translate(-350px,206%)!important}}"]})}return t})();var f=r(649);const _=["dropdownMenu"],v=["dropdownMenuDeft"];function k(t,d){if(1&t){const o=n.EpF();n.TgZ(0,"a",26),n.NdJ("click",function(){n.CHM(o);const e=n.oxw(3);return n.KtG(e.closemenu())}),n._uU(1),n.qZA()}if(2&t){const o=n.oxw().$implicit;n.Q6J("routerLink",o.Link),n.xp6(1),n.hij(" ",o.Title,"")}}function w(t,d){if(1&t&&(n.ynx(0),n.YNc(1,k,2,2,"a",25),n.BQk()),2&t){const o=d.index;n.xp6(1),n.Q6J("ngIf",o<4)}}const l=function(t){return[t]};function A(t,d){if(1&t){const o=n.EpF();n.TgZ(0,"div",19)(1,"div",8),n._UZ(2,"img",20),n.TgZ(3,"a",21),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.closemenu())}),n._uU(4),n.qZA(),n.TgZ(5,"div",22),n.YNc(6,w,2,1,"ng-container",23),n.qZA()(),n.TgZ(7,"span",24),n._UZ(8,"i",13)(9,"i",14),n.qZA()()}if(2&t){const o=d.$implicit,i=d.index,e=n.oxw();n.xp6(2),n.Q6J("src",o.ImgSrc,n.LSH)("alt",o.ImgAlt),n.xp6(1),n.Q6J("routerLink",n.VKq(7,l,e.RoutePaths.ArtWorks)+"/"+o.Title.replace("&","and").replace(e.regex,"").trim()),n.xp6(1),n.hij(" ",o.Title," "),n.xp6(1),n.Q2q("aria-labelledby","dropdownMenu",i,""),n.xp6(1),n.Q6J("ngForOf",o.Links),n.xp6(1),n.MGl("id","dropdownMenu",i,"")}}function x(t,d){if(1&t){const o=n.EpF();n.TgZ(0,"div",19)(1,"div",27),n._UZ(2,"img",20),n.qZA(),n.TgZ(3,"span",8)(4,"a",21),n.NdJ("click",function(){n.CHM(o);const e=n.oxw();return n.KtG(e.closemenu())}),n._uU(5),n.qZA()()()}if(2&t){const o=d.$implicit,i=n.oxw();n.xp6(2),n.Q6J("src",o.ImgSrc,n.LSH)("alt",o.ImgAlt),n.xp6(2),n.Q6J("routerLink",n.VKq(4,l,i.RoutePaths.Deft)+"/"+o.Title),n.xp6(1),n.hij(" ",o.Title," ")}}let y=(()=>{class t{constructor(o,i){this.Animation=o,this.AppConfig=i,this.RoutePaths=a.s,this.regex=/\s/g,this.ArtCategories=[{Title:"Offices & Factories",ImgAlt:"",ImgSrc:"assets/Images/Projects/mondelez/mondelez3.webp",Links:[{Title:"ORANGE",Link:`${a.s.ArtWorks}/OfficesandFactories/orange`},{Title:"MONDELEZ",Link:`${a.s.ArtWorks}/OfficesandFactories/mondelez`},{Title:"CAREEM",Link:`${a.s.ArtWorks}/OfficesandFactories/careem`},{Title:"MONEY FELLOWS",Link:`${a.s.ArtWorks}/OfficesandFactories/moneyfellows`},{Title:"VIRTUAL QUEST",Link:`${a.s.ArtWorks}/OfficesandFactories/virtualquest`},{Title:"GTE",Link:`${a.s.ArtWorks}/OfficesandFactories/gte`}]},{Title:"Restaurants",ImgAlt:"",ImgSrc:"assets/Images/Projects/taiyaki/taiyaki2.webp",Links:[{Title:"BONITA",Link:`${a.s.ArtWorks}/Restaurants/bonita`},{Title:"TAIYAKI",Link:`${a.s.ArtWorks}/Restaurants/taiyaki`},{Title:"BUTCHER'S BURGER",Link:`${a.s.ArtWorks}/Restaurants/butchersburger`},{Title:"KANSES",Link:`${a.s.ArtWorks}/Restaurants/kanses`},{Title:"MORI SUSHI",Link:`${a.s.ArtWorks}/Restaurants/morisushi`}]},{Title:"Malls",ImgAlt:"",ImgSrc:"assets/Images/Projects/rubix-park/rubix2.webp",Links:[{Title:"RUBIX PARK",Link:`${a.s.ArtWorks}/Malls/rubixpark`},{Title:"GLEEM BAY",Link:`${a.s.ArtWorks}/Malls/gleembay`},{Title:"TIO COMPLEX",Link:`${a.s.ArtWorks}/Malls/tiocomplex`}]},{Title:"Showrooms",ImgAlt:"",ImgSrc:"assets/Images/Projects/Pro-guys/pro3.webp",Links:[{Title:"PRO GUYS",Link:`${a.s.ArtWorks}/Showrooms/proguys`},{Title:"SEATS",Link:`${a.s.ArtWorks}/Showrooms/seats`}]},{Title:"Entertainments",ImgAlt:"",ImgSrc:"assets/Images/Projects/lane9/lane8.webp",Links:[{Title:"LANE 9",Link:`${a.s.ArtWorks}/Entertainments/lane9`}]}],this.DeftCategories=[{Title:"Painting",ImgAlt:"",ImgSrc:"assets/Images/Deft/Painting/painting1.webp",Links:[]},{Title:"Sculptures",ImgAlt:"Sculptures alt",ImgSrc:"",Links:[]}]}ngOnInit(){this.PortfolioLink=this.AppConfig.env.PortfolioLink}toggleDropdown(o,i){if("dropdownMenu"==i){const e=this.dropdownMenu.nativeElement,s=this.dropdownMenuDeft.nativeElement;"block"===e.style.display?(e.style.display="none",document.getElementById("dropdownMenuLink")?.classList.remove("show")):(e.style.display="block",s.style.display="none",document.getElementById("dropdownMenuLinkDeft")?.classList.remove("show"),document.getElementById("dropdownMenuLink")?.classList.add("show"))}else{const e=this.dropdownMenuDeft.nativeElement,s=this.dropdownMenu.nativeElement;"block"===e.style.display?(e.style.display="none",document.getElementById("dropdownMenuLinkDeft")?.classList.remove("show")):(e.style.display="block",s.style.display="none",document.getElementById("dropdownMenuLink")?.classList.remove("show"),document.getElementById("dropdownMenuLinkDeft")?.classList.add("show"))}o.stopPropagation()}closemenu(){this.Animation.ScrollUp(),this.Animation.animationflag=!1,this.Animation.transform()}back(){this.Animation.animationflag=!1,this.Animation.transform()}static#n=this.\u0275fac=function(i){return new(i||t)(n.Y36(m.c),n.Y36(f.X))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-side-header"]],viewQuery:function(i,e){if(1&i&&(n.Gf(_,5),n.Gf(v,5)),2&i){let s;n.iGM(s=n.CRH())&&(e.dropdownMenu=s.first),n.iGM(s=n.CRH())&&(e.dropdownMenuDeft=s.first)}},decls:40,vars:21,consts:[[1,"side-menu"],["id","menu-icon",3,"click"],[1,"fa","fa-times"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLinkActive","active","data-bs-toggle","collapse","data-bs-target",".navbar-collapse.show",1,"nav-link","main-links",3,"routerLink","click"],["routerLinkActive","active","data-bs-toggle","collapse","data-bs-target",".navbar-collapse.show",1,"nav-link","main-links",3,"routerLink","click"],["routerLinkActive","active","data-bs-toggle","collapse",1,"nav-link","main-links",3,"routerLink","click"],[1,"dropdown"],["aria-labelledby","dropdownMenuLink",1,"art-categories","dropdown-menu"],["dropdownMenu",""],["class","art-inner-categories dropdown-item",4,"ngFor","ngForOf"],["href","#","role","button","id","dropdownMenuLink","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","parent-dropdown",3,"click"],[1,"fa","fa-chevron-down"],[1,"fa","fa-chevron-up"],["aria-labelledby","dropdownMenuLinkDeft",1,"art-categories","dropdown-menu"],["dropdownMenuDeft",""],["href","#","role","button","id","dropdownMenuLinkDeft","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","parent-dropdown",3,"click"],["target","_blank",1,"nav-link","main-links",3,"href","click"],[1,"art-inner-categories","dropdown-item"],[3,"src","alt"],["data-bs-toggle","collapse",1,"nav-link","d-inline",3,"routerLink","click"],[1,"art-categories","dropdown-menu","child-menu"],[4,"ngFor","ngForOf"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","child-dropdown",3,"id"],["class","nav-link",3,"routerLink","click",4,"ngIf"],[1,"nav-link",3,"routerLink","click"],[1,"image-container","d-inline"]],template:function(i,e){1&i&&(n.TgZ(0,"div",0)(1,"div",1),n.NdJ("click",function(){return e.back()}),n._UZ(2,"i",2),n.qZA(),n.TgZ(3,"nav")(4,"ul",3)(5,"li",4)(6,"a",5),n.NdJ("click",function(){return e.closemenu()}),n._uU(7," Home "),n.qZA()(),n.TgZ(8,"li",4)(9,"a",6),n.NdJ("click",function(){return e.closemenu()}),n._uU(10," About "),n.qZA()(),n.TgZ(11,"li",4)(12,"a",7),n.NdJ("click",function(){return e.closemenu()}),n._uU(13," Art Works "),n.qZA(),n.TgZ(14,"span",8)(15,"div",9,10),n.YNc(17,A,10,9,"div",11),n.qZA()(),n.TgZ(18,"span",12),n.NdJ("click",function(u){return e.toggleDropdown(u,"dropdownMenu")}),n._UZ(19,"i",13)(20,"i",14),n.qZA()(),n.TgZ(21,"li",4)(22,"a",7),n.NdJ("click",function(){return e.closemenu()}),n._uU(23," Deft "),n.qZA(),n.TgZ(24,"span",8)(25,"div",15,16),n.YNc(27,x,6,6,"div",11),n.qZA()(),n.TgZ(28,"span",17),n.NdJ("click",function(u){return e.toggleDropdown(u,"dropdownMenuDeft")}),n._UZ(29,"i",13)(30,"i",14),n.qZA()(),n.TgZ(31,"li",4)(32,"a",6),n.NdJ("click",function(){return e.closemenu()}),n._uU(33," Careers "),n.qZA()(),n.TgZ(34,"li",4)(35,"a",6),n.NdJ("click",function(){return e.closemenu()}),n._uU(36," Contact "),n.qZA()(),n.TgZ(37,"li",4)(38,"a",18),n.NdJ("click",function(){return e.closemenu()}),n._uU(39," Portfolio "),n.qZA()()()()()),2&i&&(n.xp6(6),n.Q6J("routerLink",n.VKq(9,l,e.RoutePaths.Home)),n.xp6(3),n.Q6J("routerLink",n.VKq(11,l,e.RoutePaths.About)),n.xp6(3),n.Q6J("routerLink",n.VKq(13,l,e.RoutePaths.ArtWorks)),n.xp6(5),n.Q6J("ngForOf",e.ArtCategories),n.xp6(5),n.Q6J("routerLink",n.VKq(15,l,e.RoutePaths.Deft)),n.xp6(5),n.Q6J("ngForOf",e.DeftCategories),n.xp6(5),n.Q6J("routerLink",n.VKq(17,l,e.RoutePaths.Careers)),n.xp6(3),n.Q6J("routerLink",n.VKq(19,l,e.RoutePaths.Contact)),n.xp6(3),n.Q6J("href",e.PortfolioLink,n.LSH))},dependencies:[p.sg,p.O5,c.rH,c.Od],styles:['.side-menu[_ngcontent-%COMP%]{position:fixed;top:10%;right:-300px;height:80%;width:300px;color:var(--primary-font-color);padding:1% 0 0 2%;transform:translate(100%);z-index:1000}.side-menu[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%]{font-size:50px;color:var(--primary-color1);z-index:10000;position:absolute;left:-70px;display:none;top:290px;background-color:var(--gold2);border-radius:50%;width:80px;height:80px;text-align:center}.side-menu[_ngcontent-%COMP%]   #menu-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{position:relative}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.main-links[_ngcontent-%COMP%]{position:relative;text-decoration:none;color:var(--primary-font-color);font-size:26px;line-height:34px;font-weight:400;opacity:1;width:-moz-fit-content;width:fit-content}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.main-links[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-2px;left:0;width:0;height:2px;transition:width .3s ease-in-out,transform .3s ease-in-out;transform-origin:left}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.main-links[_ngcontent-%COMP%]:hover:after{width:100%}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.main-links.active[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-2px;left:0;width:0;height:2px;transition:width .3s ease-in-out,transform .3s ease-in-out;width:100%}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{padding:10px;border-radius:50%;position:absolute;top:5px;right:0;width:50%;text-align:right;color:var(--gold2)}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .parent-dropdown[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:block}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .parent-dropdown[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:none}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .parent-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:block}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .parent-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:none}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]{max-height:59vh;overflow-y:auto;padding-left:20px;background-color:transparent!important;position:relative!important;transform:translate3d(-5%,0,0)!important;overflow-x:hidden}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]{position:relative;background:transparent;border-bottom:1px solid var(--primary-font-color);padding:15px 5px!important}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]:hover{cursor:pointer}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:5px;font-size:14px;color:var(--primary-font-color)}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]:hover.nav-link, .side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item.active.nav-link[_ngcontent-%COMP%]{color:var(--gold1)!important}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:80px;max-height:50px}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   .child-dropdown[_ngcontent-%COMP%]{top:20px;right:0;width:auto}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   .child-dropdown[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:block}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   .child-dropdown[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:none}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   .child-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:block}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   .child-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:none}.side-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .art-categories.dropdown-menu[_ngcontent-%COMP%]   .art-inner-categories.dropdown-item[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]{padding-left:10px;transform:translate3d(100%,-.8px,0)}']})}return t})(),b=(()=>{class t{static#n=this.PasswordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z=!@#$%^&*_+)(-]{8,}$/;static#t=this.EmailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;static#e=this.PhonePattern=/^(?:(?:\+|00)([1-9]\d{0,2}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/;static#o=this.NumericPattern=/^[0-9]\d*$/;static#i=this.DateFormat="mediumDate";static#r=this.DateTimeFormat="MMM d, y h:mm a";static#a=this.WeekDateFormat="EEEE, MMM d, y";static#s=this.TimeFormat="h:mm a";static#c=this.Genders=[{Id:"M",Name:"Male"},{Id:"F",Name:"Female"}];static#l=this.Months=[{Id:0,Name:"January"},{Id:1,Name:"February"},{Id:2,Name:"March"},{Id:3,Name:"April"},{Id:4,Name:"May"},{Id:5,Name:"June"},{Id:6,Name:"July"},{Id:7,Name:"August"},{Id:8,Name:"September"},{Id:9,Name:"October"},{Id:10,Name:"November"},{Id:11,Name:"December"}];static#d=this.Years=function(){let o=[],i=(new Date).getFullYear();for(let e=i;e>=i-100;e--)o.push({Id:e,Name:e});return o};static#g=this.Days=function(){let o=[];for(let i=1;i<=31;i++)o.push({Id:i,Name:i});return o};static GetInitialName(o,i){let e="";return o&&(e=o.charAt(0).toUpperCase(),e+=i?i.charAt(0).toUpperCase():o.charAt(1).toLowerCase()),e}static GetYear(){return(new Date).getFullYear()}}return t})();const g=function(t){return["/",t]};let T=(()=>{class t{constructor(){this.Year=b.GetYear(),this.RoutePaths=a.s,this.version="1.0.0"}ngOnInit(){}static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-footer"]],decls:40,vars:16,consts:[[1,"intro"],["src","assets/Images/diwan-handbook/logo-gold.png","alt","logo-img",1,"white-logo-img"],[1,"line"],[1,"main"],[1,"phrase","gold-text"],[1,"roww"],[1,"list-inline"],[1,"list-inline-item"],[3,"routerLink"],[1,"social"],["target","_blank","href","https://www.facebook.com/amr.diwan/"],[1,"fa","fa-facebook-square"],["target","_blank","href","https://www.instagram.com/amrdiwan1/"],[1,"fa","fa-instagram"],["target","_blank","href","https://www.linkedin.com/in/amr-diwan-414191161"],[1,"fa","fa-linkedin"],[1,"copyright","gold-text"],["href","mailto:info@diwanstudio.com"],[1,"powered-by"],["href","mailto:techwizzjoes@gmail.com"]],template:function(i,e){1&i&&(n.TgZ(0,"footer")(1,"div",0),n._UZ(2,"img",1)(3,"div",2),n.qZA(),n.TgZ(4,"div",3)(5,"div",4),n._uU(6,"Amr diwan is all about breaking the rules of standard to send a message that people can feel and remember"),n.qZA(),n.TgZ(7,"div",5)(8,"ul",6)(9,"li",7)(10,"a",8),n._uU(11,"Home"),n.qZA()(),n.TgZ(12,"li",7)(13,"a",8),n._uU(14,"About"),n.qZA()(),n.TgZ(15,"li",7)(16,"a",8),n._uU(17,"Contact Us"),n.qZA()(),n.TgZ(18,"li",7)(19,"a",8),n._uU(20,"Art Works"),n.qZA()()(),n.TgZ(21,"div",9)(22,"a",10),n._UZ(23,"i",11),n.qZA(),n.TgZ(24,"a",12),n._UZ(25,"i",13),n.qZA(),n.TgZ(26,"a",14),n._UZ(27,"i",15),n.qZA()()()(),n.TgZ(28,"div",16)(29,"div"),n._uU(30),n.TgZ(31,"a",17),n._uU(32),n.qZA(),n._uU(33,". All Rights Reserved."),n.qZA(),n.TgZ(34,"div",18)(35,"small"),n._uU(36),n.TgZ(37,"a",19),n._uU(38),n.qZA(),n._uU(39,". "),n.qZA()()()()),2&i&&(n.xp6(10),n.Q6J("routerLink",n.VKq(8,g,e.RoutePaths.Home)),n.xp6(3),n.Q6J("routerLink",n.VKq(10,g,e.RoutePaths.About)),n.xp6(3),n.Q6J("routerLink",n.VKq(12,g,e.RoutePaths.Contact)),n.xp6(3),n.Q6J("routerLink",n.VKq(14,g,e.RoutePaths.ArtWorks)),n.xp6(11),n.hij("\xa9 ",e.Year," Diwan Studios, "),n.xp6(2),n.Oqu("info@diwanstudio.com"),n.xp6(4),n.hij("Version ",e.version," Powered By: "),n.xp6(2),n.Oqu("techwizzjoes"))},dependencies:[c.rH],styles:["footer[_ngcontent-%COMP%]{padding:20px 0;background-color:var(--primary-color1);color:var(--primary-font-color)}footer[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 10%}footer[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60px}footer[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:2px;background:var(--gold-gradient);margin-inline-start:20px}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .phrase[_ngcontent-%COMP%]{font-size:14px;text-align:center}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-around;margin:10px 0}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;text-align:center;font-size:18px;line-height:1.6;margin-bottom:0}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--gold2)}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gold1)}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{text-align:center}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 10px;color:var(--gold2)}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gold1)}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;justify-content:center;font-size:14px;text-transform:uppercase}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:none;-webkit-text-fill-color:initial;color:var(--gold2)}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gold1)}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{color:var(--gold1);-webkit-text-fill-color:initial;text-transform:none}@media (max-width: 576px){footer[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:40px}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{flex-direction:column;padding:0 5%}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]{flex-wrap:wrap}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{flex-direction:column;padding:0 5%}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{font-size:12px}}"]})}return t})();const L=[{path:"",component:(()=>{class t{constructor(o){this.Animation=o}ngOnInit(){}static#n=this.\u0275fac=function(i){return new(i||t)(n.Y36(m.c))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["inner-container"]],decls:7,vars:0,consts:[[1,"min-vh-100","inner-container"],[1,"page-master"],[1,"main-app"]],template:function(i,e){1&i&&(n.TgZ(0,"main",0)(1,"div",1),n._UZ(2,"app-side-header")(3,"app-header"),n.TgZ(4,"div",2),n._UZ(5,"router-outlet")(6,"app-footer"),n.qZA()()())},dependencies:[c.lC,O,y,T],encapsulation:2})}return t})(),children:[{path:"home",loadComponent:()=>r.e(934).then(r.bind(r,2934)).then(t=>t.HomeComponent)},{path:"about",loadComponent:()=>r.e(312).then(r.bind(r,4312)).then(t=>t.AboutComponent)},{path:"contactus",loadComponent:()=>r.e(949).then(r.bind(r,5949)).then(t=>t.ContactComponent)},{path:"artworks",loadComponent:()=>r.e(732).then(r.bind(r,2732)).then(t=>t.ArtComponent)},{path:"artworks/:category/:project",loadComponent:()=>r.e(732).then(r.bind(r,2732)).then(t=>t.ArtComponent)},{path:"artworks/:category",loadComponent:()=>r.e(732).then(r.bind(r,2732)).then(t=>t.ArtComponent)},{path:"deft",loadComponent:()=>r.e(784).then(r.bind(r,9784)).then(t=>t.DeftComponent)},{path:"deft/:category/:project",loadComponent:()=>r.e(784).then(r.bind(r,9784)).then(t=>t.DeftComponent)},{path:"deft/:category",loadComponent:()=>r.e(784).then(r.bind(r,9784)).then(t=>t.DeftComponent)},{path:"careers",loadComponent:()=>r.e(679).then(r.bind(r,4679)).then(t=>t.CareersComponent)},{path:"careers/update",loadComponent:()=>r.e(346).then(r.bind(r,346)).then(t=>t.CareerUpdateComponent)},{path:"**",redirectTo:a.s.Default}]}];let Z=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[c.Bz.forChild(L),c.Bz]})}return t})(),I=(()=>{class t{static#n=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[p.ez,M.u5,Z,c.Bz]})}return t})()}}]);