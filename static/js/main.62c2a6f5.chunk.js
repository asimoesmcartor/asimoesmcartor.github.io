(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),c=(a(64),a(65),a(66),a(67),a(68),a(8)),o=a(9),i=a(11),s=a(10),m=a(12),u=a(133),g=a(58),h=a(57),p=a.n(h),d=a(4),f=a(15),y=a(39),E=(a(45),function(){return r.a.createElement("section",{className:"text-center my-5"},r.a.createElement("h2",{className:"h1-responsive font-weight-bold my-5"},"Things I am working on"),r.a.createElement("p",{className:"grey-text text-left w-responsive mx-auto mb-5"},"I built this website using React components to become more familiar with breaking out my projects into components. The Gallery section holds my photos that I have taken around the world. The Projects section holds my web projects that I have been working on over the past few years."),r.a.createElement(d.g,{className:"text-center"},r.a.createElement(d.c,{lg:"6",md:"12",className:"mb-lg-0 mb-6"},r.a.createElement(y.a,{to:"/gallery"},r.a.createElement(d.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement(f.LazyLoadImage,{placeholderSrc:"/images/preload-images/gallery-9.jpg",src:"/images/gallery-9.jpg",alt:"",effect:"opacity",className:"img-fluid"}),r.a.createElement(d.f,{overlay:"white-slight"}))),r.a.createElement(d.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Photography"),r.a.createElement("p",{className:"grey-text"},"Examples of a few photos I have taken around the world."),r.a.createElement(y.a,{to:"/gallery"},r.a.createElement(d.a,{gradient:"blue",size:"sm",className:"white-text"},r.a.createElement(d.e,{fas:!0,icon:"camera-retro",className:"left"}),"Gallery")))),r.a.createElement(d.c,{lg:"6",md:"12",className:"mb-lg-0 mb-6"},r.a.createElement(y.a,{to:"/projects"},r.a.createElement(d.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement(f.LazyLoadImage,{placeholderSrc:"/images/generativelines.jpg",src:"/images/generativelines.jpg",alt:"",effect:"opacity",className:"img-fluid"}),r.a.createElement(d.f,{overlay:"white-slight"}))),r.a.createElement(d.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Generative Lines"),r.a.createElement("p",{className:"grey-text"},"This project I ported a JavaScript based random generated squiggly lines based off of the learnings from p5."),r.a.createElement(y.a,{to:"/projects"},r.a.createElement(d.a,{gradient:"blue",size:"sm",className:"white-text"},r.a.createElement(d.e,{fas:!0,icon:"pencil-alt",className:"left"}),"Generative Lines"))))))}),v=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.d,{fluid:!0},r.a.createElement(d.g,null,r.a.createElement(f.LazyLoadComponent,null,r.a.createElement(E,null))))}}]),t}(r.a.Component),b=a(53),j=(a(123),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={photoIndex:0,isOpen:!1,images:["/images/gallery-1.jpg","/images/gallery-2.jpg","/images/gallery-4.jpg","/images/gallery-5.jpg","/images/gallery-6.jpg","/images/gallery-7.jpg","/images/gallery-8.jpg","/images/gallery-9.jpg"]},a.renderImages=function(){var e=-1;return a.state.images.map(function(t){var n=++e;return r.a.createElement(d.c,{md:"4",key:e},r.a.createElement("figure",{classname:"",onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(f.LazyLoadImage,{effect:"opacity",src:t,alt:"Gallery",className:"img-fluid gallery-images",onClick:function(){return a.setState({photoIndex:n,isOpen:!0})}})))})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,l=t.images;return r.a.createElement(d.d,{className:"mt-5"},r.a.createElement("div",{className:"mdb-lightbox no-margin"},r.a.createElement(d.g,{className:""},this.renderImages())),n&&r.a.createElement("div",{onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(b.a,{mainSrc:l[a],nextSrc:l[(a+1)%l.length],prevSrc:l[(a+l.length-1)%l.length],imageTitle:a+1+"/"+l.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+l.length-1)%l.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%l.length})}})))}}]),t}(r.a.Component)),x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e="#"+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16);setInterval(function(){var t=document.querySelector("canvas"),a=t.getContext("2d"),n=window.innerWidth,r=window.devicePixelRatio/6;t.width=n*r,t.height=n*r,a.scale(r,r),a.lineWidth=2;for(var l=[],c=45;c<=n-45;c+=45){for(var o=[],i=45;i<=n-45;i+=45){var s=Math.abs(i-n/2),m=Math.max(n/2-50-s,0),u={x:i,y:c+Math.random()*m/2*-1};o.push(u)}l.push(o)}for(c=0;c<l.length;c++){for(a.beginPath(),a.moveTo(l[c][0].x,l[c][0].y),i=0;i<l[c].length-2;i++){var g=(l[c][i].x+l[c][i+1].x)/2,h=(l[c][i].y+l[c][i+1].y)/2;a.quadraticCurveTo(l[c][i].x,l[c][i].y,g,h)}a.quadraticCurveTo(l[c][i].x,l[c][i].y,l[c][i+1].x,l[c][i+1].y),a.save(),a.globalCompositeOperation="destination-out",a.fill(),a.restore(),a.strokeStyle=e,a.stroke()}var p="0px 0px 400px -15px "+e;document.getElementById("circle-crop").style.boxShadow=p},100)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"border"},r.a.createElement("div",{id:"frame"},r.a.createElement("div",{id:"circle-crop"},r.a.createElement("canvas",{id:"lines-circle",ref:"canvas",width:500,height:300})))))}}]),t}(r.a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Generative Lines"),r.a.createElement(x,null))}}]),t}(r.a.Component),O=a(132),N=function(){return r.a.createElement(O.a,{className:"justify-content-end",activeKey:"/"},r.a.createElement(O.a.Item,null,r.a.createElement(O.a.Link,{href:"/"},r.a.createElement(y.a,{to:"/"},"Home"))),r.a.createElement(O.a.Item,null,r.a.createElement(O.a.Link,{eventKey:"/gallery"},r.a.createElement(y.a,{to:"/gallery/"},"Gallery"))),r.a.createElement(O.a.Item,null,r.a.createElement(O.a.Link,{eventKey:"/projects"},r.a.createElement(y.a,{to:"/projects/"},"Projects"))))},I=p()({forceRefresh:!0,basename:""}),k=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{history:I},r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(d.d,null,r.a.createElement(d.g,null,r.a.createElement(d.c,null),r.a.createElement(d.c,{size:"10"},r.a.createElement(g.a,{exact:!0,path:"/",component:v}),r.a.createElement(g.a,{path:"/gallery/",component:j}),r.a.createElement(g.a,{path:"/projects/",component:w})),r.a.createElement(d.c,null)))))}}]),t}(n.Component),S=document.getElementById("root");S.hasChildNodes()?Object(l.hydrate)(r.a.createElement(k,null),S):Object(l.render)(r.a.createElement(k,null),S)},59:function(e,t,a){e.exports=a(130)},65:function(e,t,a){},66:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.62c2a6f5.chunk.js.map