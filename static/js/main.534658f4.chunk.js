(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=(a(58),a(59),a(60),a(61),a(8)),i=a(9),s=a(11),o=a(10),m=a(12),u=a(124),h=a(125),d=a(52),p=a(4),g=function(){return r.a.createElement("section",{className:"text-center my-5"},r.a.createElement("h2",{className:"h1-responsive font-weight-bold my-5"},"Things I am working on"),r.a.createElement("p",{className:"grey-text w-responsive mx-auto mb-5"},"I built this website using React components to become more familiar with breaking out my projects into components. The Gallery section holds my photos that I have taken around the world. The Projects section holds my web projects that I have been working on over the past few years."),r.a.createElement(p.g,{className:"text-center"},r.a.createElement(p.c,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},r.a.createElement(p.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement("img",{src:"/images/gallery-9.jpg",alt:"",className:"img-fluid"}),r.a.createElement("a",{href:"#!"},r.a.createElement(p.f,{overlay:"white-slight"}))),r.a.createElement(p.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Title of the news"),r.a.createElement("p",{className:"grey-text"},"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."),r.a.createElement(p.a,{color:"indigo",size:"sm"},r.a.createElement(p.e,{far:!0,icon:"clone",className:"left"})," MDBView project"))),r.a.createElement(p.c,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},r.a.createElement(p.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement("img",{src:"/images/gallery-8.jpg",alt:"",className:"img-fluid"}),r.a.createElement("a",{href:"#!"},r.a.createElement(p.f,{overlay:"white-slight"}))),r.a.createElement(p.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Title of the news"),r.a.createElement("p",{className:"grey-text"},"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."),r.a.createElement(p.a,{color:"indigo",size:"sm"},r.a.createElement(p.e,{far:!0,icon:"clone",className:"left"})," MDBView project"))),r.a.createElement(p.c,{lg:"4",md:"12",className:"mb-lg-0 mb-4"},r.a.createElement(p.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement("img",{src:"/images/gallery-4.jpg",alt:"",className:"img-fluid"}),r.a.createElement("a",{href:"#!"},r.a.createElement(p.f,{overlay:"white-s light"}))),r.a.createElement(p.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Title of the news"),r.a.createElement("p",{className:"grey-text"},"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."),r.a.createElement(p.a,{color:"indigo",size:"sm"},r.a.createElement(p.e,{far:!0,icon:"clone",className:"left"})," MDBView project")))))},E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.d,{fluid:!0},r.a.createElement(p.g,null,r.a.createElement(g,null)))}}]),t}(r.a.Component),b=a(48),f=(a(116),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={photoIndex:0,isOpen:!1,images:["/images/gallery-1.jpg","/images/gallery-2.jpg","/images/gallery-3.jpg"]},a.renderImages=function(){var e=-1;return a.state.images.map(function(t){var n=++e;return r.a.createElement(p.c,{md:"4",key:e},r.a.createElement("figure",null,r.a.createElement("img",{src:""+t,alt:"Gallery",className:"img-fluid",onClick:function(){return a.setState({photoIndex:n,isOpen:!0})}})))})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,l=t.images;return r.a.createElement(p.d,{className:"mt-5"},r.a.createElement("div",{className:"mdb-lightbox no-margin"},r.a.createElement(p.g,null,this.renderImages())),n&&r.a.createElement(b.a,{mainSrc:l[a],nextSrc:l[(a+1)%l.length],prevSrc:l[(a+l.length-1)%l.length],imageTitle:a+1+"/"+l.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+l.length-1)%l.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%l.length})}}))}}]),t}(r.a.Component)),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e="#"+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16);setInterval(function(){var t=document.querySelector("canvas"),a=t.getContext("2d"),n=window.innerWidth,r=window.devicePixelRatio/6;t.width=n*r,t.height=n*r,a.scale(r,r),a.lineWidth=2;for(var l=[],c=45;c<=n-45;c+=45){for(var i=[],s=45;s<=n-45;s+=45){var o=Math.abs(s-n/2),m=Math.max(n/2-50-o,0),u={x:s,y:c+Math.random()*m/2*-1};i.push(u)}l.push(i)}for(c=0;c<l.length;c++){for(a.beginPath(),a.moveTo(l[c][0].x,l[c][0].y),s=0;s<l[c].length-2;s++){var h=(l[c][s].x+l[c][s+1].x)/2,d=(l[c][s].y+l[c][s+1].y)/2;a.quadraticCurveTo(l[c][s].x,l[c][s].y,h,d)}a.quadraticCurveTo(l[c][s].x,l[c][s].y,l[c][s+1].x,l[c][s+1].y),a.save(),a.globalCompositeOperation="destination-out",a.fill(),a.restore(),a.strokeStyle=e,a.stroke()}var p="0px 0px 400px -15px "+e;document.getElementById("circle-crop").style.boxShadow=p},100)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"border"},r.a.createElement("div",{id:"frame"},r.a.createElement("div",{id:"circle-crop"},r.a.createElement("canvas",{id:"lines-circle",ref:"canvas",width:640,height:425})))),r.a.createElement("h3",null,"Generative Lines"))}}]),t}(r.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Generative Lines"),r.a.createElement(v,null))}}]),t}(r.a.Component),j=a(17),w=a(123),x=a(35),O=function(){return r.a.createElement(w.a,{className:"justify-content-end",activeKey:"/"},r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{href:"/"},r.a.createElement(x.a,{to:"/"},"Home"))),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{eventKey:"/gallery"},r.a.createElement(x.a,{to:"/gallery/"},"Gallery"))),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{eventKey:"/projects"},r.a.createElement(x.a,{to:"/projects/"},"Projects"))))},N=(Object(j.a)(),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(p.d,null,r.a.createElement(p.g,null,r.a.createElement(p.c,null),r.a.createElement(p.c,{size:"10"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:E}),r.a.createElement(d.a,{exact:!0,path:"/gallery/",component:f}),r.a.createElement(d.a,{path:"/projects/",component:y}))),r.a.createElement(p.c,null)))))}}]),t}(n.Component)),k=document.getElementById("root");k.hasChildNodes()?Object(l.hydrate)(r.a.createElement(N,null),k):Object(l.render)(r.a.createElement(N,null),k)},53:function(e,t,a){e.exports=a(120)},59:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.534658f4.chunk.js.map