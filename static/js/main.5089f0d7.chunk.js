(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(14),c=(a(60),a(61),a(62),a(63),a(9)),i=a(10),s=a(12),m=a(11),o=a(13),u=a(124),h=a(125),g=a(53),d=a(4),p=function(){return r.a.createElement("section",{className:"text-center my-5"},r.a.createElement("h2",{className:"h1-responsive font-weight-bold my-5"},"Things I am working on"),r.a.createElement("p",{className:"grey-text w-responsive mx-auto mb-5"},"I built this website using React components to become more familiar with breaking out my projects into components. The Gallery section holds my photos that I have taken around the world. The Projects section holds my web projects that I have been working on over the past few years."),r.a.createElement(d.g,{className:"text-center"},r.a.createElement(d.c,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},r.a.createElement(d.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement("img",{src:"./images/gallery-9.jpg",alt:"",className:"img-fluid"}),r.a.createElement("a",{href:"#!"},r.a.createElement(d.f,{overlay:"white-slight"}))),r.a.createElement(d.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Title of the news"),r.a.createElement("p",{className:"grey-text"},"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."),r.a.createElement(d.a,{color:"indigo",size:"sm"},r.a.createElement(d.e,{far:!0,icon:"clone",className:"left"})," MDBView project"))),r.a.createElement(d.c,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},r.a.createElement(d.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement("img",{src:"./images/gallery-8.jpg",alt:"",className:"img-fluid"}),r.a.createElement("a",{href:"#!"},r.a.createElement(d.f,{overlay:"white-slight"}))),r.a.createElement(d.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Title of the news"),r.a.createElement("p",{className:"grey-text"},"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."),r.a.createElement(d.a,{color:"indigo",size:"sm"},r.a.createElement(d.e,{far:!0,icon:"clone",className:"left"})," MDBView project"))),r.a.createElement(d.c,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},r.a.createElement(d.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement("img",{src:"./images/gallery-4.jpg",alt:"",className:"img-fluid"}),r.a.createElement("a",{href:"#!"},r.a.createElement(d.f,{overlay:"white-slight"}))),r.a.createElement(d.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Title of the news"),r.a.createElement("p",{className:"grey-text"},"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."),r.a.createElement(d.a,{color:"indigo",size:"sm"},r.a.createElement(d.e,{far:!0,icon:"clone",className:"left"})," MDBView project")))))},E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.d,{fluid:!0},r.a.createElement(d.g,null,r.a.createElement(p,null)))}}]),t}(r.a.Component),f=a(49),b=(a(118),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={photoIndex:0,isOpen:!1,images:["/images/gallery-1.jpg","/images/gallery-2.jpg","/images/gallery-3.jpg","/images/gallery-4.jpg","/images/gallery-5.jpg","/images/gallery-6.jpg","/images/gallery-7.jpg","/images/gallery-8.jpg","/images/gallery-9.jpg"]},a.renderImages=function(){var e=-1;return a.state.images.map(function(t){var n=++e;return r.a.createElement(d.c,{md:"4",key:e},r.a.createElement("figure",null,r.a.createElement("img",{src:t,alt:"Gallery",className:"img-fluid",onClick:function(){return a.setState({photoIndex:n,isOpen:!0})}})))})},a}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,l=t.images;return r.a.createElement(d.d,{className:"mt-5"},r.a.createElement("div",{className:"mdb-lightbox no-margin"},r.a.createElement(d.g,null,this.renderImages())),n&&r.a.createElement(f.a,{mainSrc:l[a],nextSrc:l[(a+1)%l.length],prevSrc:l[(a+l.length-1)%l.length],imageTitle:a+1+"/"+l.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+l.length-1)%l.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%l.length})}}))}}]),t}(r.a.Component)),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e="#"+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16);setInterval(function(){var t=document.querySelector("canvas"),a=t.getContext("2d"),n=window.innerWidth,r=window.devicePixelRatio/6;t.width=n*r,t.height=n*r,a.scale(r,r),a.lineWidth=2;for(var l=[],c=45;c<=n-45;c+=45){for(var i=[],s=45;s<=n-45;s+=45){var m=Math.abs(s-n/2),o=Math.max(n/2-50-m,0),u={x:s,y:c+Math.random()*o/2*-1};i.push(u)}l.push(i)}for(c=0;c<l.length;c++){for(a.beginPath(),a.moveTo(l[c][0].x,l[c][0].y),s=0;s<l[c].length-2;s++){var h=(l[c][s].x+l[c][s+1].x)/2,g=(l[c][s].y+l[c][s+1].y)/2;a.quadraticCurveTo(l[c][s].x,l[c][s].y,h,g)}a.quadraticCurveTo(l[c][s].x,l[c][s].y,l[c][s+1].x,l[c][s+1].y),a.save(),a.globalCompositeOperation="destination-out",a.fill(),a.restore(),a.strokeStyle=e,a.stroke()}var d="0px 0px 400px -15px "+e;document.getElementById("circle-crop").style.boxShadow=d},100)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"border"},r.a.createElement("div",{id:"frame"},r.a.createElement("div",{id:"circle-crop"},r.a.createElement("canvas",{id:"lines-circle",ref:"canvas",width:640,height:425})))),r.a.createElement("h3",null,"Generative Lines"))}}]),t}(r.a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Generative Lines"),r.a.createElement(y,null))}}]),t}(r.a.Component),j=a(123),w=a(36),x=function(){return r.a.createElement(j.a,{className:"justify-content-end",activeKey:"/"},r.a.createElement(j.a.Item,null,r.a.createElement(j.a.Link,{href:"/"},r.a.createElement(w.a,{to:"/"},"Home"))),r.a.createElement(j.a.Item,null,r.a.createElement(j.a.Link,{eventKey:"/gallery"},r.a.createElement(w.a,{to:"/gallery/"},"Gallery"))),r.a.createElement(j.a.Item,null,r.a.createElement(j.a.Link,{eventKey:"/projects"},r.a.createElement(w.a,{to:"/projects/"},"Projects"))))},N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(d.d,null,r.a.createElement(d.g,null,r.a.createElement(d.c,null),r.a.createElement(d.c,{size:"10"},r.a.createElement(h.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:E}),r.a.createElement(g.a,{exact:!0,path:"/gallery/",component:b}),r.a.createElement(g.a,{path:"/projects/",component:v}))),r.a.createElement(d.c,null)))))}}]),t}(n.Component),O=document.getElementById("root");O.hasChildNodes()?Object(l.hydrate)(r.a.createElement(N,null),O):Object(l.render)(r.a.createElement(N,null),O)},55:function(e,t,a){e.exports=a(122)},61:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.5089f0d7.chunk.js.map