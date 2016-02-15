montageDefine("3d3086e","bind",{dependencies:["./parse","./algebra","./stringify","./compile-observer","./compile-binder","./compile-assigner","./observers","./binders","./scope"],factory:function(e,t,n){function i(e,t,n){n.target=e,n.targetPath=t;var i=n.source=n.source||e,c=n["<-"]||n["<->"]||"",u=n.twoWay="<->"in n;n.sourcePath=c,n.value;var h=n.parameters=n.parameters||i,d=n.document,p=n.components,f=n.trace,m=n.sourceScope=new g(i);m.parameters=h,m.document=d,m.components=p;var v=n.targetScope=new g(e);if(v.parameters=h,v.document=d,v.components=p,n.converter){var _=n.converter;_.convert&&(n.convert=_.convert.bind(_)),_.revert&&(n.revert=_.revert.bind(_))}else if(n.reverter){var y=n.reverter;y.convert&&(n.revert=y.convert.bind(y)),y.revert&&(n.convert=y.revert.bind(y))}var b=n.convert,L=n.revert,C=n.sourceSyntax=s(c),w=n.targetSyntax=s(t),M=o(w,C);if(w=M[0],C=M[1],u&&"rangeContent"===w.type)return a(v,w.args[0],m,C,b,L,n,f?{sourcePath:l(C),targetPath:l(w.args[0])}:null);f&&console.log("DEFINE BINDING",t,"<-",c,e);var x=r(v,w,m,C,b,n,f),M=o(C,w);C=M[0],w=M[1];var z=Function.noop;return u&&(f&&console.log("DEFINE BINDING",t,"->",c,i),z=r(m,C,v,w,L,n,f)),function(){x(),z()}}function r(e,t,n,i,r,a,s){var o=c(i);r&&(o=d.makeConverterObserver(o,r,n));var h=u(t);return h(o,n,e,a,s?{sourcePath:l(i),targetPath:l(t)}:null)}function a(e,t,n,i,r,a,s,o){function l(e,t,n){m||(m=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"<-",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),g.swap(n,t.length,e),m=!1)}function u(e,t,n){m||(m=!0,o&&console.log("RANGE CONTENT PROPAGATED",o.targetPath,"->",o.sourcePath,"PLUS",e,"MINUS",t,"AT",n),f.swap(n,t.length,e),m=!1)}function d(){if(f!==g){o&&console.log("RANGE CONTENT BOUND",o.targetPath,"<->",o.sourcePath),m=!0;var t=p(f,l,n),i=p(g,u,e);return m=!1,function(){o&&console.log("RANGE CONTENT UNBOUND",o.targetPath,"<->",o.sourcePath),t(),i()}}}var g,f,m,v=c(i),_=c(t),y=h(i),b=h(t),L=Function.noop;m=!0;var C=_(function(e){L(),L=Function.noop,o&&console.log("RANGE CONTENT TARGET",o.targetPath,"SET TO",e),e&&e.addRangeChangeListener&&(g=e,f&&g?(o&&console.log("RANGE CONTENT TARGET REPLACES SOURCE",o.targetPath,"->",o.sourcePath,"WITH",g),m=!0,f.swap(0,f.length,g),m=!1,L=d()):f||m||(o&&console.log("RANGE CONTENT TARGET INITIALIZED TO COPY OF SOURCE",o.targetPath,"<-",tarce.sourcePath,"WITH",f),y(g.clone(),n)))},e);m=!1;var w=v(function(t){L(),L=Function.noop,o&&console.log("RANGE CONTENT SOURCE",o.sourcePath,"SET TO",t),t&&t.addRangeChangeListener&&(f=t,g&&f?(o&&console.log("RANGE CONTENT SOURCE REPLACES TARGET",o.targetPath,"<-",o.sourcePath,"WITH",f),m=!0,g.swap(0,g.length,f),m=!1,L=d()):g||b(f.clone(),e))},n);return g||f||y([],n),function(){L(),C(),w()}}var s=e("./parse"),o=e("./algebra"),l=e("./stringify"),c=e("./compile-observer"),u=e("./compile-binder"),h=e("./compile-assigner"),d=e("./observers"),p=d.observeRangeChange;e("./binders");var g=e("./scope");n.exports=i}});