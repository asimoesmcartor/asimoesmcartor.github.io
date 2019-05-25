(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),c=(a(59),a(60),a(61),a(62),a(8)),o=a(9),i=a(11),s=a(10),m=a(12),u=a(125),h=a(53),g=a(4),p=a(15),d=a(36),y=(a(42),function(){return r.a.createElement("section",{className:"text-center my-5"},r.a.createElement("h2",{className:"h1-responsive font-weight-bold my-5"},"Things I am working on"),r.a.createElement("p",{className:"grey-text w-responsive mx-auto mb-5"},"I built this website using React components to become more familiar with breaking out my projects into components. The Gallery section holds my photos that I have taken around the world. The Projects section holds my web projects that I have been working on over the past few years."),r.a.createElement(g.g,{className:"text-center"},r.a.createElement(g.c,{lg:"6",md:"12",className:"mb-lg-0 mb-6"},r.a.createElement(g.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement(p.LazyLoadImage,{placeholderSrc:"/images/preload-images/gallery-9.jpg",src:"/images/gallery-9.jpg",alt:"",effect:"opacity",className:"img-fluid"}),r.a.createElement(d.a,{to:"/gallery"}),r.a.createElement(g.f,{overlay:"white-slight"})),r.a.createElement(g.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Photography"),r.a.createElement("p",{className:"grey-text"},"Examples of a few photos I have taken around the world."),r.a.createElement(g.a,{gradient:"blue",size:"sm",className:"white-text"},r.a.createElement(g.e,{fas:!0,icon:"camera-retro",className:"left"})," Gallery"))),r.a.createElement(g.c,{lg:"6",md:"12",className:"mb-lg-0 mb-6"},r.a.createElement(g.h,{className:"overlay rounded z-depth-1",waves:!0},r.a.createElement(p.LazyLoadImage,{placeholderSrc:"/images/generativelines.jpg",src:"/images/generativelines.jpg",alt:"",effect:"opacity",className:"img-fluid"}),r.a.createElement(d.a,{to:"/projects"}),r.a.createElement(g.f,{overlay:"white-slight"})),r.a.createElement(g.b,{className:"pb-0"},r.a.createElement("h4",{className:"font-weight-bold my-3"},"Generative Lines"),r.a.createElement("p",{className:"grey-text"},"This project I ported a JavaScript based random generated squiggly lines based off of the learnings from p5."),r.a.createElement(g.a,{gradient:"blue",size:"sm",className:"white-text"},r.a.createElement(g.e,{fas:!0,icon:"pencil-alt",className:"left"})," Generative Lines")))))}),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.d,{fluid:!0},r.a.createElement(g.g,null,r.a.createElement(p.LazyLoadComponent,null,r.a.createElement(y,null))))}}]),t}(r.a.Component),f=a(49),v=(a(117),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={photoIndex:0,isOpen:!1,images:["gallery-1.jpg","gallery-2.jpg","gallery-4.jpg","gallery-5.jpg","gallery-6.jpg","gallery-7.jpg","gallery-8.jpg","gallery-9.jpg"]},a.renderImages=function(){var e=-1;return a.state.images.map(function(t){var n=++e;return r.a.createElement(g.c,{md:"4",key:e},r.a.createElement("figure",null,r.a.createElement(p.LazyLoadImage,{effect:"opacity",placeholderSrc:"/images/preload-images/"+t,src:"/images/"+t,alt:"Gallery",className:"img-fluid",onClick:function(){return a.setState({photoIndex:n,isOpen:!0})}})))})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,l=t.images;return r.a.createElement(g.d,{className:"mt-5"},r.a.createElement("div",{className:"mdb-lightbox no-margin"},r.a.createElement(g.g,{className:""},this.renderImages())),n&&r.a.createElement(f.a,{mainSrc:l[a],nextSrc:l[(a+1)%l.length],prevSrc:l[(a+l.length-1)%l.length],imageTitle:a+1+"/"+l.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+l.length-1)%l.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%l.length})}}))}}]),t}(r.a.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e="#"+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16);setInterval(function(){var t=document.querySelector("canvas"),a=t.getContext("2d"),n=window.innerWidth,r=window.devicePixelRatio/6;t.width=n*r,t.height=n*r,a.scale(r,r),a.lineWidth=2;for(var l=[],c=45;c<=n-45;c+=45){for(var o=[],i=45;i<=n-45;i+=45){var s=Math.abs(i-n/2),m=Math.max(n/2-50-s,0),u={x:i,y:c+Math.random()*m/2*-1};o.push(u)}l.push(o)}for(c=0;c<l.length;c++){for(a.beginPath(),a.moveTo(l[c][0].x,l[c][0].y),i=0;i<l[c].length-2;i++){var h=(l[c][i].x+l[c][i+1].x)/2,g=(l[c][i].y+l[c][i+1].y)/2;a.quadraticCurveTo(l[c][i].x,l[c][i].y,h,g)}a.quadraticCurveTo(l[c][i].x,l[c][i].y,l[c][i+1].x,l[c][i+1].y),a.save(),a.globalCompositeOperation="destination-out",a.fill(),a.restore(),a.strokeStyle=e,a.stroke()}var p="0px 0px 400px -15px "+e;document.getElementById("circle-crop").style.boxShadow=p},100)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"border"},r.a.createElement("div",{id:"frame"},r.a.createElement("div",{id:"circle-crop"},r.a.createElement("canvas",{id:"lines-circle",ref:"canvas",width:500,height:300})))))}}]),t}(r.a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Generative Lines"),r.a.createElement(b,null))}}]),t}(r.a.Component),x=a(124),w=function(){return r.a.createElement(x.a,{className:"justify-content-end",activeKey:"/"},r.a.createElement(x.a.Item,null,r.a.createElement(x.a.Link,{href:"/"},r.a.createElement(d.a,{to:"/"},"Home"))),r.a.createElement(x.a.Item,null,r.a.createElement(x.a.Link,{eventKey:"/gallery"},r.a.createElement(d.a,{to:"/gallery/"},"Gallery"))),r.a.createElement(x.a.Item,null,r.a.createElement(x.a.Link,{eventKey:"/projects"},r.a.createElement(d.a,{to:"/projects/"},"Projects"))))},O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(g.d,null,r.a.createElement(g.g,null,r.a.createElement(g.c,null),r.a.createElement(g.c,{size:"10"},r.a.createElement(h.a,{exact:!0,path:"/",component:E}),r.a.createElement(h.a,{path:"/gallery/",component:v}),r.a.createElement(h.a,{path:"/projects/",component:j})),r.a.createElement(g.c,null)))))}}]),t}(n.Component),N=document.getElementById("root");N.hasChildNodes()?Object(l.hydrate)(r.a.createElement(O,null),N):Object(l.render)(r.a.createElement(O,null),N)},54:function(e,t,a){e.exports=a(121)},60:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.598bf77a.chunk.js.map