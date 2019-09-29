(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(8),c=(a(61),a(62),a(63),a(64),a(65),a(128)),o=a(9),i=a(10),s=a(12),m=a(11),u=a(13),d=a(129),h=a(55),p=a(5),g=a(25),E=(a(43),function(){return r.a.createElement("section",{className:"my-5 gradient-border"},r.a.createElement(p.a,{lg:"12",md:"12",className:"mb-lg-0 mb-6"},r.a.createElement("div",{className:"my-5"},r.a.createElement("center",null,r.a.createElement("div",{className:"profile-box"},r.a.createElement("div",{className:"profile-container"},r.a.createElement("div",{className:"profile-image"},r.a.createElement("div",{className:"profile"})))))),r.a.createElement("h2",{className:"force-center h1-responsive font-weight-bold"},"Things I am working on"),r.a.createElement("p",{className:"grey-text text-left w-responsive mx-auto mb-5"},"I built this website using React components to become more familiar with breaking out my projects into smaller bits that I can easily swap in and out. The Gallery section holds my photos that I have taken around the world. The Projects section holds my web projects that I have been working on over the past few years. Explore and enjoy. ",r.a.createElement("i",{class:"fas fa-user-astronaut"}))))}),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.b,{fluid:!0},r.a.createElement(p.c,null,r.a.createElement(g.LazyLoadComponent,null,r.a.createElement(E,null))))}}]),t}(r.a.Component),v=a(50),y=(a(120),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={photoIndex:0,isOpen:!1,images:["/images/gallery-1.jpg","/images/gallery-2.jpg","/images/gallery-4.jpg","/images/gallery-5.jpg","/images/gallery-6.jpg","/images/gallery-7.jpg","/images/gallery-8.jpg","/images/gallery-9.jpg"]},a.renderImages=function(){var e=-1;return a.state.images.map(function(t){var n=++e;return r.a.createElement(p.a,{md:"4",key:e},r.a.createElement("figure",{classname:"",onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(g.LazyLoadImage,{effect:"opacity",src:t,alt:"Gallery",className:"img-fluid gallery-images",onClick:function(){return a.setState({photoIndex:n,isOpen:!0})}})))})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,l=t.images;return r.a.createElement(p.b,{className:"mt-5"},r.a.createElement("div",{className:"mdb-lightbox no-margin"},r.a.createElement(p.c,{className:""},this.renderImages())),n&&r.a.createElement("div",{onContextMenu:function(e){return e.preventDefault()}},r.a.createElement(v.a,{mainSrc:l[a],nextSrc:l[(a+1)%l.length],prevSrc:l[(a+l.length-1)%l.length],imageTitle:a+1+"/"+l.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+l.length-1)%l.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%l.length})}})))}}]),t}(r.a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e="#"+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16)+(Math.round(127*Math.random())+127).toString(16);setInterval(function(){var t=document.querySelector("canvas"),a=t.getContext("2d"),n=window.innerWidth,r=window.devicePixelRatio/6;t.width=n*r,t.height=n*r,a.scale(r,r),a.lineWidth=2;for(var l=[],c=45;c<=n-45;c+=45){for(var o=[],i=45;i<=n-45;i+=45){var s=Math.abs(i-n/2),m=Math.max(n/2-50-s,0),u={x:i,y:c+Math.random()*m/2*-1};o.push(u)}l.push(o)}for(c=0;c<l.length;c++){for(a.beginPath(),a.moveTo(l[c][0].x,l[c][0].y),i=0;i<l[c].length-2;i++){var d=(l[c][i].x+l[c][i+1].x)/2,h=(l[c][i].y+l[c][i+1].y)/2;a.quadraticCurveTo(l[c][i].x,l[c][i].y,d,h)}a.quadraticCurveTo(l[c][i].x,l[c][i].y,l[c][i+1].x,l[c][i+1].y),a.save(),a.globalCompositeOperation="destination-out",a.fill(),a.restore(),a.strokeStyle=e,a.stroke()}var p="0px 0px 400px -15px "+e;document.getElementById("circle-crop").style.boxShadow=p},100)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"border"},r.a.createElement("div",{id:"frame"},r.a.createElement("div",{id:"circle-crop"},r.a.createElement("canvas",{id:"lines-circle",ref:"canvas",width:500,height:300})))))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"h1-responsive"},"Generative Lines"),r.a.createElement(b,null))}}]),t}(r.a.Component),x=a(52),O=a.n(x),w=a(127),N=a(37),k=function(){return r.a.createElement(w.a,{className:"justify-content-end",activeKey:"/"},r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{href:"/"},r.a.createElement(N.a,{to:"/"},"Home"))),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{eventKey:"/gallery"},r.a.createElement(N.a,{to:"/gallery/"},"Gallery"))),r.a.createElement(w.a.Item,null,r.a.createElement(w.a.Link,{eventKey:"/projects"},r.a.createElement(N.a,{to:"/projects/"},"Projects"))))};var I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;new Promise(function(e){return setTimeout(function(){return e()},2500)}).then(function(){return e.setState({loading:!1})});var t=O()(".loading");t.set({speed:300,characters:"\u2592\u2591\u2588 >\u2593//\u2591 \u2588>\u2588\u2591/ \u2588\u2588\u2592 \u2593\u2593/\u2591/ <\u2592\u2593\u2593 <\u2591\u2588 \u2591\u2591\u2588\u2592 \u2592<\u2591\u2591"}),t.reveal(2500)}},{key:"render",value:function(){return this.state.loading?r.a.createElement(p.b,{className:"loading-container"},r.a.createElement(p.c,{className:"pt-3 pb-3"},r.a.createElement(p.a,null),r.a.createElement(p.a,null,r.a.createElement("h3",{className:"loading text-center"},"Loading...")),r.a.createElement(p.a,null))):r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(p.b,null,r.a.createElement(p.c,null,r.a.createElement(p.a,null),r.a.createElement(p.a,{size:"10"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:f}),r.a.createElement(h.a,{path:"/gallery/",component:y}),r.a.createElement(h.a,{path:"/projects/",component:j}),r.a.createElement(h.a,{component:r.a.createElement("div",null,"404 pages not found")}))),r.a.createElement(p.a,null))))}}]),t}(n.Component),C=document.getElementById("root");C.hasChildNodes()?Object(l.hydrate)(r.a.createElement(c.a,{basename:""},r.a.createElement(I,null)),C):Object(l.render)(r.a.createElement(c.a,{basename:""},r.a.createElement(I,null)),C)},56:function(e,t,a){e.exports=a(124)},62:function(e,t,a){},63:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.3092c763.chunk.js.map