(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{40:function(e,t,n){e.exports=n.p+"static/media/polind.111ed7c5.jpg"},41:function(e,t,n){e.exports=n.p+"static/media/cinema.83bcd4bd.jpg"},42:function(e,t,n){e.exports=n.p+"static/media/six-cities.bed653cf.jpg"},43:function(e,t,n){e.exports=n.p+"static/media/sedona.2d9d9ac9.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/gllacy.456a86bb.jpg"},45:function(e,t,n){e.exports=n.p+"static/media/facebook.6bb68eec.svg"},46:function(e,t,n){e.exports=n.p+"static/media/twitter.48250d93.svg"},47:function(e,t,n){e.exports=n.p+"static/media/linkedin.25d9550d.svg"},48:function(e,t,n){e.exports=n.p+"static/media/facebook-white.a8193003.svg"},49:function(e,t,n){e.exports=n.p+"static/media/twitter-white.fb34984f.svg"},50:function(e,t,n){e.exports=n.p+"static/media/linkedin-white.38bb03ea.svg"},51:function(e,t,n){e.exports=n(80)},60:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),l=n(6),c=n(25),s=n(30),m="SET_LIGHT_MODE",u={lightMode:JSON.parse(localStorage.getItem("LIGHT_MODE"))||!1},d=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(s.a)(Object(s.a)({},e),{},{lightMode:t.payload});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),p=n(11),h=n(3),g=(n(60),function(){return r.a.createElement("div",{className:"background-text"},"W",r.a.createElement("span",null,"E"),"B D",r.a.createElement("span",null,"e"),"v",r.a.createElement("span",null,"e"),"l",r.a.createElement("span",null,"o"),"p",r.a.createElement("span",null,"e"),"r")}),b=n(12),f=n(13),E=n(16),v=n(15),y=n(4),x=n(5),w=function(e){return{type:m,payload:e}};function _(){var e=Object(y.a)(["\n  position: absolute;\n  top: 3px;\n  left: ",";\n  width: 25px;\n  height: 25px;\n  background-color: #fff;\n  border-radius: 50%;\n  transition: left 0.1s ease-in;\n\n  &:focus {\n    box-shadow: 0 0 2px 3px rgba(199, 47, 47, 0.8);\n    outline: none;\n  }\n"]);return _=function(){return e},e}function M(){var e=Object(y.a)(["\n  z-index: 0;\n  padding: 4px 3px 0px;\n  position: absolute;\n  left: 200px;\n  top: 10px;\n  cursor: pointer;\n  transition: all 0.1s ease-in;\n  width: 57px;\n  border-radius: 20px;\n  background-color: ",";\n\n  @media (max-width: 900px) {\n    left: 40px;\n    transform: scale(1.3);\n  }\n"]);return M=function(){return e},e}var k=x.a.div(M(),(function(e){return e.lightMode?"#999":"#555"})),j=x.a.div(_(),(function(e){return e.lightMode?"3px":"35px"})),N=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(b.a)(this,n),a=t.call(this,e),!0===JSON.parse(localStorage.getItem("LIGHT_MODE"))&&document.body.classList.add("light-mode"),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.toggleLightMode;window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addListener((function(t){var n=!t.matches;e(n)}))}},{key:"componentDidUpdate",value:function(e){e.lightMode!==this.props.lightMode&&(this.props.lightMode?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode"),localStorage.setItem("LIGHT_MODE",this.props.lightMode))}},{key:"render",value:function(){var e=this,t=this.props,n=t.lightMode,a=t.toggleLightMode;return r.a.createElement(k,{role:"img",lightMode:n,"aria-label":"light mode",onClick:function(){a(!n),e.toggle.focus()},onKeyPress:function(t){t.preventDefault(),t.key,a(!n),e.toggle.focus()}},r.a.createElement("span",{role:"img","aria-label":"dark mode"},"\ud83c\udf1d \ud83c\udf1a"),r.a.createElement(j,{tabIndex:"0",lightMode:n,ref:function(t){return e.toggle=t}}))}}]),n}(a.Component),O=Object(l.b)((function(e){return{lightMode:e.lightMode}}),(function(e){return{toggleLightMode:function(t){e(w(t))}}}))(N),S=function(e){var t=e.item;return r.a.createElement("li",{className:"social__item"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"social__link link-".concat(t.name.toLowerCase())},t.name))},L=[{name:"GitHUB",url:"https://github.com/maximkatut"},{name:"Email",url:"mailto:maxbaravy@gmail.com?subject=Hello!"},{name:"LinkedIn",url:"https://www.linkedin.com/in/maksim-baravy-b34b21139/"},{name:"Facebook",url:"https://www.facebook.com/maxbaravy"}],W=function(){return r.a.createElement("ul",{className:"header__social social"},L.map((function(e){return r.a.createElement(S,{key:e.name,item:e})})))},D=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(p.b,{to:"/",className:"header__logo-link",alt:"logo"},"M",r.a.createElement("span",null,"a"),"x Baravy"),r.a.createElement("p",{className:"header__job-title"},"Front-End Developer"),r.a.createElement(O,null)),r.a.createElement(W,null))},B=n(14),C=function(){return r.a.createElement("aside",{className:"aside"},r.a.createElement("h2",{className:"visually-hidden"},"Share"),r.a.createElement(p.b,{to:"/share",className:"aside__share-link"},"Share"))},I=Object(h.g)((function(e){return r.a.createElement("section",{className:"greeting"},r.a.createElement("h2",{className:"visually-hidden"},"Hello there"),r.a.createElement("p",{className:"greeting__hello"},"Hello",r.a.createElement("span",null,".")),r.a.createElement("p",{className:"greeting__name"},"I",r.a.createElement("span",null,"'"),"m Max"),r.a.createElement("div",{className:"greeting__buttons buttons-wrapper"},r.a.createElement("button",{className:"button",onClick:function(){e.history.push("/projects"),window.scrollTo(0,0)}},"Portfolio"),r.a.createElement("button",{className:"button",onClick:function(){window.open("mailto:maxbaravy@gmail.com")}},"Contact Me")))})),T=function(){return r.a.createElement("section",{className:"about"},r.a.createElement("h2",{className:"about__title"},"About me"),r.a.createElement("div",{className:"about__description"},"Hi!"," ",r.a.createElement("span",{role:"img","aria-label":"hi emoji"},"\ud83d\ude4b\u200d\u2642\ufe0f")," ","My name is Max. I'm from Belarus \ud83c\udde7\ud83c\uddfe Currently living in the United States \ud83c\uddfa\ud83c\uddf8. I am Front-end developer with a strong passion of React. Each day I learn something new and create web products using best practices and modern techhologies.",r.a.createElement("div",{className:"about__stack"},r.a.createElement("span",{role:"img","aria-label":"hi emoji"},"\ud83d\udee0")," ","My tech stack:",r.a.createElement("ul",{className:"about__list"},r.a.createElement("li",{className:"about__item"},"Responsive web-development: HTML5, CSS/SCSS"),r.a.createElement("li",{className:"about__item"},"Frontend: JavaScript (ES5/ES6)"),r.a.createElement("li",{className:"about__item"},"JavaScript libraries: React, Redux, TypeScript"),r.a.createElement("li",{className:"about__item"},"Testing libraries: Jest, Enzyme"),r.a.createElement("li",{className:"about__item"},"Code bundlers: Gulp, Webpack"),r.a.createElement("li",{className:"about__item"},"UX/UI: Adobe Photoshop, Figma"),r.a.createElement("li",{className:"about__item"},"Version-control system: Git"),r.a.createElement("li",{className:"about__item"},"Package manager: npm"),r.a.createElement("li",{className:"about__item"},"Other: styled-components")))))},F=n(20),H=n(39),z=n.n(H);function G(){var e=Object(y.a)(['\n  cursor: pointer;\n  border-radius: 5px;\n  background-image: url("','");\n  background-repeat: none;\n  background-size: cover;\n  background-position: top;\n  height: 300px;\n  padding: 40px 20px;\n  text-align: center;\n  color: #eee;\n  transition: background-image 1s ease-in, transform 0.3s ease-out;\n\n  h1,\n  p {\n    display: none;\n    margin: 20px auto;\n  }\n\n  &:hover {\n    transform: scale(0.98);\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n      url("','");\n\n    h1,\n    p {\n      display: block;\n    }\n  }\n']);return G=function(){return e},e}var R=x.a.div(G(),(function(e){return e.img}),(function(e){return e.img})),U=Object(l.b)((function(e){return{lightMode:e.lightMode}}))((function(e){var t=e.img,n=e.title,a=e.description,i=e.url,o=e.lightMode;return r.a.createElement(R,{img:t,lightMode:o,onClick:function(){window.open(i,"_top")}},r.a.createElement("h1",null,n),r.a.createElement("p",null,a))})),J=(n(78),n(79),n(40)),A=n.n(J),P=n(41),X=n.n(P),V=n(42),q=n.n(V),K=n(43),Y=n.n(K),Q=n(44),Z=n.n(Q),$=[{title:"six-cities",url:"https://nostalgic-hugle-51bf8d.netlify.app/",img:q.a,description:"SPA written in React with Redux, React Router, leaflet - open source map library"},{title:"cinemaddict",url:"https://master--thirsty-curie-0ebdd9.netlify.app/",img:X.a,description:"Single page application on Vanila JS (ES6)."},{title:"sedona",url:"https://maxbaravy.com/sedona/build",img:Y.a,description:"Beatiful and light adaptive web site. SASS/Gulp"},{title:"polind",url:"https://maxbaravy.com/polind",img:A.a,description:"Simple responsive landing page. CSS/HTML"},{title:"GllacyShop",url:"https://maxbaravy.com/gllacy",img:Z.a,description:"Landing page. CSS/HTML"}],ee=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={arrows:!0},a.getWidth=a.getWidth.bind(Object(F.a)(a)),a}return Object(f.a)(n,[{key:"getWidth",value:function(){this.setState({arrows:document.body.clientWidth>700})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.getWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.getWidth)}},{key:"render",value:function(){var e={dots:!0,dotsClass:"dots",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:this.state.arrows};return r.a.createElement(z.a,e,$.slice(0,3).map((function(e){var t=e.title,n=e.img,a=e.description,i=e.url;return r.a.createElement(U,{key:t,title:t,img:n,description:a,url:i})})))}}]),n}(a.Component),te=Object(h.g)((function(e){return r.a.createElement("section",{className:"projects"},r.a.createElement("h2",{className:"projects__title"},"Some projects"),r.a.createElement("div",{className:"projects__description"},r.a.createElement(ee,null),r.a.createElement("div",{className:"projects__more"},r.a.createElement("button",{className:"button",onClick:function(){e.history.push("/projects"),window.scrollTo(0,0)}},"Show more"))))})),ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:"Max Baravy - react web developer"}),r.a.createElement("title",null,"Max Baravy - Front End Developer")),r.a.createElement("main",{className:"page-main"},r.a.createElement("h1",{className:"visually-hidden"},"Max Baravy - Front End Developer"),r.a.createElement(C,null),r.a.createElement(I,null),r.a.createElement(te,null),r.a.createElement(T,null)))},ae=function(){return r.a.createElement("footer",null,r.a.createElement("h2",{className:"visually-hidden"},"Footer"),r.a.createElement("div",{className:"header__logo"},r.a.createElement(p.b,{to:"/",className:"header__logo-link"},"M",r.a.createElement("span",null,"a"),"x Baravy"),r.a.createElement("p",{className:"header__job-title"},"Front-End Developer"),r.a.createElement("p",null,"\xa9 ",String((new Date).getFullYear()))))},re=function(e,t){return Math.floor(Math.random()*(t-e))+e},ie=function(e,t){return Math.floor(Math.sqrt(e*e+t*t))};function oe(){var e=Object(y.a)(["\n  z-index: -2;\n  position: absolute;\n  outline: 1px solid ",";\n  opacity: 0.1;\n  transform-origin: 0 0;\n  width: ","px;\n  left: ","px;\n  transform: rotate(","deg);\n"]);return oe=function(){return e},e}var le=x.a.div(oe(),(function(e){return e.lightMode?"black":"white"}),(function(e){return e.length}),(function(e){return re(0,e.width)}),(function(e){return e.angle})),ce=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={angle:re(45,155),length:ie(document.body.clientWidth+1500,document.body.clientHeight+1500),width:document.body.clientWidth},a.getLine=a.getLine.bind(Object(F.a)(a)),a}return Object(f.a)(n,[{key:"getLine",value:function(){this.setState({length:ie(document.body.clientWidth,document.body.clientHeight),angle:re(45,155),width:document.body.clientWidth})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.getLine)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.getLine)}},{key:"render",value:function(){var e=this.state,t=e.length,n=e.width,a=e.angle,i=this.props.lightMode;return r.a.createElement(le,{length:t,width:n,angle:a,lightMode:i})}}]),n}(a.Component),se=Object(l.b)((function(e){return{lightMode:e.lightMode}}))(ce),me=function(){var e=new Array(15).fill("");return r.a.createElement("div",{className:"background-lines"},e.map((function(e,t){return r.a.createElement(se,{key:t})})))},ue=n(45),de=n.n(ue),pe=n(46),he=n.n(pe),ge=n(47),be=n.n(ge),fe=n(48),Ee=n.n(fe),ve=n(49),ye=n.n(ve),xe=n(50),we=n.n(xe);function _e(){var e=Object(y.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 31%;\n  outline: 1px solid ",';\n  background-color: rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  overflow: hidden;\n\n  &:before {\n    position: absolute;\n    content: "";\n    width: 100%;\n    height: 100%;\n    background-image: url(',");\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: all 0.3s ease-in-out;\n    opacity: 0.2;\n    transform: scale(0);\n  }\n\n  &:hover {\n    outline: 1px solid #c72f2f;\n\n    &:before {\n      transform: scale(3);\n    }\n  }\n\n  @media (max-width: 900px) {\n    width: 100%;\n    height: 200px;\n    margin-bottom: 20px;\n  }\n"]);return _e=function(){return e},e}function Me(){var e=Object(y.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 40vh;\n  padding: 0 50px;\n  margin: 60px 0 180px 0;\n\n  @media (max-width: 900px) {\n    flex-wrap: wrap;\n    height: 100%;\n    margin-bottom: 60px;\n  }\n"]);return Me=function(){return e},e}var ke=x.a.div(Me()),je=x.a.div(_e(),(function(e){return e.lightMode?"#222":"#eee"}),(function(e){return e.backgroundImg})),Ne=[{title:"Facebook",url:"https://www.facebook.com/sharer/sharer.php?u=https://maxbaravy.com&t=MaxBaravy.com",img:de.a,imgWhite:Ee.a},{title:"Twitter",url:"http://twitter.com/share?text=Max Baravy - Web Developer&url=https://maxbaravy.com/&hashtags=webdeveloper,dev,react,frontend",img:he.a,imgWhite:ye.a},{title:"LinkedIn",url:"https://www.linkedin.com/shareArticle?mini=true&url=https://maxbaravy.com&title=Max Baravy - Web Developer&summary=Max Baravy - Web Developer&source=maxbaravy.com",img:be.a,imgWhite:we.a}],Oe=Object(l.b)((function(e){return{lightMode:e.lightMode}}))((function(e){var t=e.lightMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:"Max Baravy - react web developer"}),r.a.createElement("title",null,"Max Baravy - Share my website")),r.a.createElement(ke,null,Ne.map((function(e){return r.a.createElement(je,{key:e.title,onClick:function(){var t;t=e.url,window.open(t,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")},title:"Share on ".concat(e.title),lightMode:t,backgroundImg:t?e.img:e.imgWhite},e.title)}))))}));function Se(){var e=Object(y.a)(["\n  padding: 20px 0;\n"]);return Se=function(){return e},e}var Le=x.a.div(Se());function We(){return $.map((function(e){var t=e.title,n=e.img,a=e.description,i=e.url;return r.a.createElement(Le,{key:t},r.a.createElement(U,{title:t,img:n,description:a,url:i}))}))}function De(){var e=Object(y.a)(["\n  text-align: center;\n  padding: 0 50px;\n\n  a {\n    color: ",";\n  }\n"]);return De=function(){return e},e}var Be=x.a.div(De(),(function(e){return e.lightMode?"#222":"#eee"})),Ce=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.props.lightMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:"Max Baravy - react web developer"}),r.a.createElement("title",null,"Max Baravy - My portfolio")),r.a.createElement("section",null,r.a.createElement(Be,{lightMode:t},r.a.createElement("button",{className:"button",onClick:function(){e.props.history.goBack(),window.scrollTo(0,0)}},"Go back"),r.a.createElement(We,null))))}}]),n}(a.Component),Ie=Object(h.g)(Object(l.b)((function(e){return{lightMode:e.lightMode}}))(Ce));function Te(){var e=Object(y.a)(["\n  text-align: center;\n  margin: 0 0 120px 0;\n"]);return Te=function(){return e},e}var Fe=x.a.div(Te()),He=Object(l.b)((function(e){return{lightMode:e.lightMode}}))((function(e){e.lightMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:"Max Baravy - react web developer"}),r.a.createElement("title",null,"Max Baravy - 404")),r.a.createElement(Fe,null,r.a.createElement("p",{style:{fontSize:"220px"}},"404"),r.a.createElement("h1",null,"Whoops!!!"),r.a.createElement("p",null,"We lost this page"," ",r.a.createElement("span",{role:"img","aria-label":"sad emoji"},"\ud83d\ude22"))))})),ze=function(){return r.a.createElement(p.a,{basename:"/"},r.a.createElement("div",{className:"body-wrapper"},r.a.createElement(me,null),r.a.createElement(g,null),r.a.createElement(D,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:ne}),r.a.createElement(h.b,{exact:!0,path:"/share",component:Oe}),r.a.createElement(h.b,{exact:!0,path:"/projects",component:Ie}),r.a.createElement(h.b,{path:"/404",component:He}),r.a.createElement(h.a,{to:"/404"})),r.a.createElement(ae,null)))};o.a.render(r.a.createElement(l.a,{store:d},r.a.createElement(ze,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.7d67f35f.chunk.js.map