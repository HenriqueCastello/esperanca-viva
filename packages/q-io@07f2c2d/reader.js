function Reader(e,t){function n(){var e;return e=t?o.join(""):r.constructor.join(o),o.splice(0,o.length),e}var r=Object.create(Reader.prototype);t&&e.setEncoding&&e.setEncoding(t);var i=Q.defer(),a=Q.defer();e.on("error",function(e){i.reject(e)});var s,o=[];return e.on("end",function(){i.resolve(r),a.resolve()}),e.on("data",function(e){i.resolve(r),s?s(e):o.push(e)}),r.read=function(){s=void 0;var e=Q.defer();return Q.done(a.promise,function(){e.resolve(n())}),e.promise},r.forEach=function(e){return o&&o.length&&e(n()),s=e,Q.when(a.promise,function(){s=void 0})},r.close=function(){e.destroy()},r.node=e,i.promise}function read(e,t){var n=[];return e.forEach(function(e){n.push(e)}),t?n.join(""):join(n)}function join(e){var t,n,r,i,a=0,s=e.length;for(n=0;s>n;n++)r=e[n],a+=r.length;for(i=new Buffer(a),t=0,n=0;s>n;n++)r=e[n],r.copy(i,t,0),t+=r.length;return e.splice(0,s,i),i}var Q=require("q");module.exports=Reader,Reader.read=read,Reader.join=join;