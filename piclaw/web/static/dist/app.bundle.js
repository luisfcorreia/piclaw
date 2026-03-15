var d8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var G3,u_,z1,s8,U2,o$,Y1,G1,B1,l3,h3,p3,a8,K3={},z3=[],t8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B3=Array.isArray;function z2(_,$){for(var j in $)_[j]=$[j];return _}function o3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function O1(_,$,j){var N,Z,K,z={};for(K in $)K=="key"?N=$[K]:K=="ref"?Z=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?G3.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return j3(_,z,N,Z,null)}function j3(_,$,j,N,Z){var K={type:_,props:$,key:j,ref:N,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++z1:Z,__i:-1,__u:0};return Z==null&&u_.vnode!=null&&u_.vnode(K),K}function O3(_){return _.children}function N3(_,$){this.props=_,this.context=$}function u2(_,$){if($==null)return _.__?u2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?u2(_):null}function e8(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,N=[],Z=[],K=z2({},$);K.__v=$.__v+1,u_.vnode&&u_.vnode(K),r3(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,N,j==null?u2($):j,!!(32&$.__u),Z),K.__v=$.__v,K.__.__k[K.__i]=K,V1(N,K,Z),$.__e=$.__=null,K.__e!=j&&L1(K)}}function L1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),L1(_)}function r$(_){(!_.__d&&(_.__d=!0)&&U2.push(_)&&!Y3.__r++||o$!=u_.debounceRendering)&&((o$=u_.debounceRendering)||Y1)(Y3)}function Y3(){try{for(var _,$=1;U2.length;)U2.length>$&&U2.sort(G1),_=U2.shift(),$=U2.length,e8(_)}finally{U2.length=Y3.__r=0}}function W1(_,$,j,N,Z,K,z,Y,O,G,V){var X,F,D,M,x,I,u,Q=N&&N.__k||z3,T=$.length;for(O=_6(j,$,Q,O,T),X=0;X<T;X++)(D=j.__k[X])!=null&&(F=D.__i!=-1&&Q[D.__i]||K3,D.__i=X,I=r3(_,D,F,Z,K,z,Y,O,G,V),M=D.__e,D.ref&&F.ref!=D.ref&&(F.ref&&d3(F.ref,null,D),V.push(D.ref,D.__c||M,D)),x==null&&M!=null&&(x=M),(u=!!(4&D.__u))||F.__k===D.__k?O=X1(D,O,_,u):typeof D.type=="function"&&I!==void 0?O=I:M&&(O=M.nextSibling),D.__u&=-7);return j.__e=x,O}function _6(_,$,j,N,Z){var K,z,Y,O,G,V=j.length,X=V,F=0;for(_.__k=Array(Z),K=0;K<Z;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=j3(null,z,null,null,null):B3(z)?z=_.__k[K]=j3(O3,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=j3(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,O=K+F,z.__=_,z.__b=_.__b+1,Y=null,(G=z.__i=$6(z,j,O,X))!=-1&&(X--,(Y=j[G])&&(Y.__u|=2)),Y==null||Y.__v==null?(G==-1&&(Z>V?F--:Z<V&&F++),typeof z.type!="function"&&(z.__u|=4)):G!=O&&(G==O-1?F--:G==O+1?F++:(G>O?F--:F++,z.__u|=4))):_.__k[K]=null;if(X)for(K=0;K<V;K++)(Y=j[K])!=null&&(2&Y.__u)==0&&(Y.__e==N&&(N=u2(Y)),J1(Y,Y));return N}function X1(_,$,j,N){var Z,K;if(typeof _.type=="function"){for(Z=_.__k,K=0;Z&&K<Z.length;K++)Z[K]&&(Z[K].__=_,$=X1(Z[K],$,j,N));return $}_.__e!=$&&(N&&($&&_.type&&!$.parentNode&&($=u2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function $6(_,$,j,N){var Z,K,z,Y=_.key,O=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&Y==null||V&&Y==G.key&&O==G.type)return j;if(N>(V?1:0)){for(Z=j-1,K=j+1;Z>=0||K<$.length;)if((G=$[z=Z>=0?Z--:K++])!=null&&(2&G.__u)==0&&Y==G.key&&O==G.type)return z}return-1}function d$(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||t8.test($)?j:j+"px"}function $3(_,$,j,N,Z){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof N=="string"&&(_.style.cssText=N=""),N)for($ in N)j&&$ in j||d$(_.style,$,"");if(j)for($ in j)N&&j[$]==N[$]||d$(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(B1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?N?j.u=N.u:(j.u=l3,_.addEventListener($,K?p3:h3,K)):_.removeEventListener($,K?p3:h3,K);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(Y){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function s$(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=l3++;else if($.t<j.u)return;return j(u_.event?u_.event($):$)}}}function r3(_,$,j,N,Z,K,z,Y,O,G){var V,X,F,D,M,x,I,u,Q,T,C,c,p,l,r,L_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(O=!!(32&j.__u),K=[Y=$.__e=j.__e]),(V=u_.__b)&&V($);_:if(typeof L_=="function")try{if(u=$.props,Q=L_.prototype&&L_.prototype.render,T=(V=L_.contextType)&&N[V.__c],C=V?T?T.props.value:V.__:N,j.__c?I=(X=$.__c=j.__c).__=X.__E:(Q?$.__c=X=new L_(u,C):($.__c=X=new N3(u,C),X.constructor=L_,X.render=N6),T&&T.sub(X),X.state||(X.state={}),X.__n=N,F=X.__d=!0,X.__h=[],X._sb=[]),Q&&X.__s==null&&(X.__s=X.state),Q&&L_.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=z2({},X.__s)),z2(X.__s,L_.getDerivedStateFromProps(u,X.__s))),D=X.props,M=X.state,X.__v=$,F)Q&&L_.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),Q&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(Q&&L_.getDerivedStateFromProps==null&&u!==D&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(u,C),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(u,X.__s,C)===!1){$.__v!=j.__v&&(X.props=u,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(n){n&&(n.__=$)}),z3.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&z.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(u,X.__s,C),Q&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(D,M,x)})}if(X.context=C,X.props=u,X.__P=_,X.__e=!1,c=u_.__r,p=0,Q)X.state=X.__s,X.__d=!1,c&&c($),V=X.render(X.props,X.state,X.context),z3.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,c&&c($),V=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++p<25);X.state=X.__s,X.getChildContext!=null&&(N=z2(z2({},N),X.getChildContext())),Q&&!F&&X.getSnapshotBeforeUpdate!=null&&(x=X.getSnapshotBeforeUpdate(D,M)),l=V!=null&&V.type===O3&&V.key==null?q1(V.props.children):V,Y=W1(_,B3(l)?l:[l],$,j,N,Z,K,z,Y,O,G),X.base=$.__e,$.__u&=-161,X.__h.length&&z.push(X),I&&(X.__E=X.__=null)}catch(n){if($.__v=null,O||K!=null)if(n.then){for($.__u|=O?160:128;Y&&Y.nodeType==8&&Y.nextSibling;)Y=Y.nextSibling;K[K.indexOf(Y)]=null,$.__e=Y}else{for(r=K.length;r--;)o3(K[r]);i3($)}else $.__e=j.__e,$.__k=j.__k,n.then||i3($);u_.__e(n,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):Y=$.__e=j6(j.__e,$,j,N,Z,K,z,O,G);return(V=u_.diffed)&&V($),128&$.__u?void 0:Y}function i3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(i3))}function V1(_,$,j){for(var N=0;N<j.length;N++)d3(j[N],j[++N],j[++N]);u_.__c&&u_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(K){K.call(Z)})}catch(K){u_.__e(K,Z.__v)}})}function q1(_){return typeof _!="object"||_==null||_.__b>0?_:B3(_)?_.map(q1):z2({},_)}function j6(_,$,j,N,Z,K,z,Y,O){var G,V,X,F,D,M,x,I=j.props||K3,u=$.props,Q=$.type;if(Q=="svg"?Z="http://www.w3.org/2000/svg":Q=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),K!=null){for(G=0;G<K.length;G++)if((D=K[G])&&"setAttribute"in D==!!Q&&(Q?D.localName==Q:D.nodeType==3)){_=D,K[G]=null;break}}if(_==null){if(Q==null)return document.createTextNode(u);_=document.createElementNS(Z,Q,u.is&&u),Y&&(u_.__m&&u_.__m($,K),Y=!1),K=null}if(Q==null)I===u||Y&&_.data==u||(_.data=u);else{if(K=K&&G3.call(_.childNodes),!Y&&K!=null)for(I={},G=0;G<_.attributes.length;G++)I[(D=_.attributes[G]).name]=D.value;for(G in I)D=I[G],G=="dangerouslySetInnerHTML"?X=D:G=="children"||(G in u)||G=="value"&&("defaultValue"in u)||G=="checked"&&("defaultChecked"in u)||$3(_,G,null,D,Z);for(G in u)D=u[G],G=="children"?F=D:G=="dangerouslySetInnerHTML"?V=D:G=="value"?M=D:G=="checked"?x=D:Y&&typeof D!="function"||I[G]===D||$3(_,G,D,I[G],Z);if(V)Y||X&&(V.__html==X.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(X&&(_.innerHTML=""),W1($.type=="template"?_.content:_,B3(F)?F:[F],$,j,N,Q=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,K,z,K?K[0]:j.__k&&u2(j,0),Y,O),K!=null)for(G=K.length;G--;)o3(K[G]);Y||(G="value",Q=="progress"&&M==null?_.removeAttribute("value"):M!=null&&(M!==_[G]||Q=="progress"&&!M||Q=="option"&&M!=I[G])&&$3(_,G,M,I[G],Z),G="checked",x!=null&&x!=_[G]&&$3(_,G,x,I[G],Z))}return _}function d3(_,$,j){try{if(typeof _=="function"){var N=typeof _.__u=="function";N&&_.__u(),N&&$==null||(_.__u=_($))}else _.current=$}catch(Z){u_.__e(Z,j)}}function J1(_,$,j){var N,Z;if(u_.unmount&&u_.unmount(_),(N=_.ref)&&(N.current&&N.current!=_.__e||d3(N,null,$)),(N=_.__c)!=null){if(N.componentWillUnmount)try{N.componentWillUnmount()}catch(K){u_.__e(K,$)}N.base=N.__P=null}if(N=_.__k)for(Z=0;Z<N.length;Z++)N[Z]&&J1(N[Z],$,j||typeof _.type!="function");j||o3(_.__e),_.__c=_.__=_.__e=void 0}function N6(_,$,j){return this.constructor(_,j)}function Q1(_,$,j){var N,Z,K,z;$==document&&($=document.documentElement),u_.__&&u_.__(_,$),Z=(N=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],r3($,_=(!N&&j||$).__k=O1(O3,null,[_]),Z||K3,K3,$.namespaceURI,!N&&j?[j]:Z?null:$.firstChild?G3.call($.childNodes):null,K,!N&&j?j:Z?Z.__e:$.firstChild,N,z),V1(K,_,z)}G3=z3.slice,u_={__e:function(_,$,j,N){for(var Z,K,z;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((K=Z.constructor)&&K.getDerivedStateFromError!=null&&(Z.setState(K.getDerivedStateFromError(_)),z=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,N||{}),z=Z.__d),z)return Z.__E=Z}catch(Y){_=Y}throw _}},z1=0,s8=function(_){return _!=null&&_.constructor===void 0},N3.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=z2({},this.state),typeof _=="function"&&(_=_(z2({},j),this.props)),_&&z2(j,_),_!=null&&this.__v&&($&&this._sb.push($),r$(this))},N3.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),r$(this))},N3.prototype.render=O3,U2=[],Y1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,G1=function(_,$){return _.__v.__b-$.__v.__b},Y3.__r=0,B1=/(PointerCapture)$|Capture$/i,l3=0,h3=s$(!1),p3=s$(!0),a8=0;var i2,t_,g3,a$,n2=0,U1=[],a_=u_,t$=a_.__b,e$=a_.__r,_1=a_.diffed,$1=a_.__c,j1=a_.unmount,N1=a_.__;function s3(_,$){a_.__h&&a_.__h(t_,_,n2||$),n2=0;var j=t_.__H||(t_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function m(_){return n2=1,Z6(F1,_)}function Z6(_,$,j){var N=s3(i2++,2);if(N.t=_,!N.__c&&(N.__=[j?j($):F1(void 0,$),function(Y){var O=N.__N?N.__N[0]:N.__[0],G=N.t(O,Y);O!==G&&(N.__N=[G,N.__[1]],N.__c.setState({}))}],N.__c=t_,!t_.__f)){var Z=function(Y,O,G){if(!N.__c.__H)return!0;var V=N.__c.__H.__.filter(function(F){return F.__c});if(V.every(function(F){return!F.__N}))return!K||K.call(this,Y,O,G);var X=N.__c.props!==Y;return V.some(function(F){if(F.__N){var D=F.__[0];F.__=F.__N,F.__N=void 0,D!==F.__[0]&&(X=!0)}}),K&&K.call(this,Y,O,G)||X};t_.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=t_;t_.componentWillUpdate=function(Y,O,G){if(this.__e){var V=K;K=void 0,Z(Y,O,G),K=V}z&&z.call(this,Y,O,G)},t_.shouldComponentUpdate=Z}return N.__N||N.__}function v(_,$){var j=s3(i2++,3);!a_.__s&&H1(j.__H,$)&&(j.__=_,j.u=$,t_.__H.__h.push(j))}function y(_){return n2=5,g_(function(){return{current:_}},[])}function g_(_,$){var j=s3(i2++,7);return H1(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function b(_,$){return n2=8,g_(function(){return _},$)}function K6(){for(var _;_=U1.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(Z3),$.__h.some(n3),$.__h=[]}catch(j){$.__h=[],a_.__e(j,_.__v)}}}a_.__b=function(_){t_=null,t$&&t$(_)},a_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),N1&&N1(_,$)},a_.__r=function(_){e$&&e$(_),i2=0;var $=(t_=_.__c).__H;$&&(g3===t_?($.__h=[],t_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(Z3),$.__h.some(n3),$.__h=[],i2=0)),g3=t_},a_.diffed=function(_){_1&&_1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(U1.push($)!==1&&a$===a_.requestAnimationFrame||((a$=a_.requestAnimationFrame)||z6)(K6)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),g3=t_=null},a_.__c=function(_,$){$.some(function(j){try{j.__h.some(Z3),j.__h=j.__h.filter(function(N){return!N.__||n3(N)})}catch(N){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],a_.__e(N,j.__v)}}),$1&&$1(_,$)},a_.unmount=function(_){j1&&j1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(N){try{Z3(N)}catch(Z){$=Z}}),j.__H=void 0,$&&a_.__e($,j.__v))};var Z1=typeof requestAnimationFrame=="function";function z6(_){var $,j=function(){clearTimeout(N),Z1&&cancelAnimationFrame($),setTimeout(_)},N=setTimeout(j,35);Z1&&($=requestAnimationFrame(j))}function Z3(_){var $=t_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),t_=$}function n3(_){var $=t_;_.__c=_.__(),t_=$}function H1(_,$){return!_||_.length!==$.length||$.some(function(j,N){return j!==_[N]})}function F1(_,$){return typeof $=="function"?$(_):$}var y1=function(_,$,j,N){var Z;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],Y=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?N[0]=Y:z===4?N[1]=Object.assign(N[1]||{},Y):z===5?(N[1]=N[1]||{})[$[++K]]=Y:z===6?N[1][$[++K]]+=Y+"":z?(Z=_.apply(Y,y1(_,Y,j,["",null])),N.push(Z),Y[0]?$[0]|=2:($[K-2]=0,$[K]=Z)):N.push(Y)}return N},K1=new Map;function Y6(_){var $=K1.get(this);return $||($=new Map,K1.set(this,$)),($=y1(this,$.get(_)||($.set(_,$=function(j){for(var N,Z,K=1,z="",Y="",O=[0],G=function(F){K===1&&(F||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?O.push(0,F,z):K===3&&(F||z)?(O.push(3,F,z),K=2):K===2&&z==="..."&&F?O.push(4,F,0):K===2&&z&&!F?O.push(5,0,!0,z):K>=5&&((z||!F&&K===5)&&(O.push(K,0,z,Z),K=6),F&&(O.push(K,F,0,Z),K=6)),z=""},V=0;V<j.length;V++){V&&(K===1&&G(),G(V));for(var X=0;X<j[V].length;X++)N=j[V][X],K===1?N==="<"?(G(),O=[O],K=3):z+=N:K===4?z==="--"&&N===">"?(K=1,z=""):z=N+z[0]:Y?N===Y?Y="":z+=N:N==='"'||N==="'"?Y=N:N===">"?(G(),K=1):K&&(N==="="?(K=5,Z=z,z=""):N==="/"&&(K<5||j[V][X+1]===">")?(G(),K===3&&(O=O[0]),K=O,(O=O[0]).push(2,0,K),K=0):N===" "||N==="\t"||N===`
`||N==="\r"?(G(),K=2):z+=N),K===3&&z==="!--"&&(K=4,O=O[0])}return G(),O}(_)),$),arguments,[])).length>1?$:$[0]}var q=Y6.bind(O1);async function e_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let N=await j.json().catch(()=>({error:"Unknown error"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}function D1(_){let $=String(_||"").split(`
`),j="message",N=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))N.push(K.slice(5).trim());let Z=N.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function G6(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),N=new TextDecoder,Z="";while(!0){let{value:z,done:Y}=await j.read();if(Y)break;Z+=N.decode(z,{stream:!0});let O=Z.split(`

`);Z=O.pop()||"";for(let G of O){let V=D1(G);if(V)$(V.event,V.data)}}Z+=N.decode();let K=D1(Z);if(K)$(K.event,K.data)}async function L3(_=10,$=null,j=null){let N=`/timeline?limit=${_}`;if($)N+=`&before=${$}`;if(j)N+=`&chat_jid=${encodeURIComponent(j)}`;return e_(N)}async function E1(_,$=50,j=0,N=null){let Z=N?`&chat_jid=${encodeURIComponent(N)}`:"";return e_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function k1(_,$=50,j=0,N=null){let Z=N?`&chat_jid=${encodeURIComponent(N)}`:"";return e_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${Z}`)}async function C1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return e_(`/thread/${_}${j}`)}async function w1(_,$=!1){let j=`/post/${_}?cascade=${$?"true":"false"}`;return e_(j,{method:"DELETE"})}async function l2(_,$,j=null,N=[],Z=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return e_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:N,mode:Z})})}async function W3(){return e_("/agent/active-chats")}async function A1(_,$={}){return e_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function b1(){return e_("/agents")}async function P1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e_(`/agent/status${$}`)}async function a3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e_(`/agent/context${$}`)}async function t3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e_(`/agent/queue-state${$}`)}async function e3(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function _$(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function b2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return e_(`/agent/models${$}`)}async function S1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let N=await j.json().catch(()=>({error:"Upload failed"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function $$(_,$){let j=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function M1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function j$(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let N=null,Z=null;if(await G6(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")N=z;else if(K==="side_prompt_error")Z=z}),Z){let K=Error(Z?.error||"Side prompt failed");throw K.payload=Z,K}return N}async function f1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(N.error||`HTTP ${j.status}`)}return j.json()}async function x1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return e_(j)}async function T1(_,$,j){return e_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function t0(_){return`/media/${_}`}function I1(_){return`/media/${_}/thumbnail`}async function o2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function u1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function m1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function X3(_="",$=2,j=!1){let N=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return e_(N)}async function R1(_,$=20000,j=null){let N=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${N}`;return e_(Z)}async function v1(_){return e_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function N$(_,$="",j={}){let N=new FormData;N.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let K=Z.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",Y=await fetch(""+z,{method:"POST",body:N});if(!Y.ok){let O=await Y.json().catch(()=>({error:"Upload failed"})),G=Error(O.error||`HTTP ${Y.status}`);throw G.status=Y.status,G.code=O.code,G}return Y.json()}async function c1(_,$,j=""){let N=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!N.ok){let Z=await N.json().catch(()=>({error:"Create failed"})),K=Error(Z.error||`HTTP ${N.status}`);throw K.status=N.status,K.code=Z.code,K}return N.json()}async function g1(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function h1(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let N=await j.json().catch(()=>({error:"Move failed"})),Z=Error(N.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=N.code,Z}return j.json()}async function p1(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return e_($,{method:"DELETE"})}async function V3(_,$=!1){return e_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function Z$(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function i1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class K${constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let N=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,N);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function m0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function R_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function m2(_,$=!1){let j=m0(_);if(j===null)return $;return j==="true"}function R2(_,$=null){let j=m0(_);if(j===null)return $;let N=parseInt(j,10);return Number.isFinite(N)?N:$}function q3(_){return String(_||"").trim().toLowerCase()}function z$(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return q3($[1]||"")}function n1(_){let $=new Set,j=[];for(let N of Array.isArray(_)?_:[]){let Z=q3(N?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(N)}return j}function l1(_,$,j={}){let N=z$($);if(N==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return n1(_).filter((K)=>{if(Z&&K?.chat_jid===Z)return!1;return q3(K?.agent_name).startsWith(N)})}function Y$(_){let $=q3(_);return $?`@${$} `:""}function o1(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,N=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return n1(_).filter((Z)=>!(j&&Z?.chat_jid===j)).slice(0,N)}function Y2({prefix:_="file",label:$,title:j,onRemove:N,onClick:Z,removeTitle:K="Remove",icon:z="file"}){let Y=`${_}-file-pill`,O=`${_}-file-name`,G=`${_}-file-remove`,V=z==="message"?q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return q`
    <span class=${Y} title=${j||$} onClick=${Z}>
      ${V}
      <span class=${O}>${$}</span>
      ${N&&q`
        <button
          class=${G}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),N()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var O6=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function L6({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,N=_.contextWindow,Z=j!=null?`Context: ${r1(j)} / ${r1(N)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,Y=$/100*z,O=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return q`
        <span class="compose-context-pie icon-btn" title=${Z}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${O}
                    stroke-width="2.5"
                    stroke-dasharray=${`${Y} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function r1(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function d1({onPost:_,onFocus:$,searchMode:j,onSearch:N,onEnterSearch:Z,onExitSearch:K,fileRefs:z=[],onRemoveFileRef:Y,onClearFileRefs:O,messageRefs:G=[],onRemoveMessageRef:V,onClearMessageRefs:X,activeModel:F=null,modelUsage:D=null,thinkingLevel:M=null,supportsThinking:x=!1,contextUsage:I=null,notificationsEnabled:u=!1,notificationPermission:Q="default",onToggleNotifications:T,onModelChange:C,onModelStateChange:c,activeEditorPath:p=null,onAttachEditorFile:l,onOpenFilePill:r,followupQueueItems:L_=[],onInjectQueuedFollowup:n,onRemoveQueuedFollowup:Q_,onSubmitIntercept:V_,onMessageResponse:t,onPopOutChat:j_,isAgentActive:Y_=!1,activeChatAgents:Z_=[],currentChatJid:N_="web:default"}){let[z_,y_]=m(""),[$_,W_]=m(""),[U_,z0]=m([]),[B_,W0]=m(!1),[H_,q_]=m([]),[K_,D_]=m(0),[C_,O_]=m(!1),[X_,w_]=m([]),[_0,P_]=m(0),[A_,E_]=m(!1),[T_,X0]=m(!1),[q0,o_]=m(!1),[S_,M_]=m([]),[y0,Y0]=m(!1),J_=y(null),r_=y(null),v0=y(null),x0=y(null),J0=y(null),A0=y(0),N0=200,d_=(J)=>{let f=new Set,i=[];for(let G_ of J||[]){if(typeof G_!=="string")continue;let b_=G_.trim();if(!b_||f.has(b_))continue;f.add(b_),i.push(b_)}return i},T0=()=>{let J=m0("piclaw_compose_history");if(!J)return[];try{let f=JSON.parse(J);if(!Array.isArray(f))return[];return d_(f)}catch{return[]}},n0=(J)=>{R_("piclaw_compose_history",JSON.stringify(J))},P=y(T0()),o=y(-1),F_=y(""),x_=z_.trim()||U_.length>0||z.length>0||G.length>0,h_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),O2=typeof window<"u"&&typeof Notification<"u",D0=typeof window<"u"?Boolean(window.isSecureContext):!1,E0=O2&&D0&&Q!=="denied",i_=Q==="granted"&&u,Q0=i_?"Disable notifications":"Enable notifications",U0=o1(Z_,{currentChatJid:N_,limit:4}),b0=U0.length>0,L2=F||"",F2=x&&M?` (${M})`:"",g2=F2.trim()?`${M}`:"",Z0=typeof D?.hint_short==="string"?D.hint_short.trim():"",c0=[g2||null,Z0||null].filter(Boolean).join(" • "),g0=[L2?`Current model: ${L2}${F2}`:null,D?.plan?`Plan: ${D.plan}`:null,Z0||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),B0=T_?"Switching model…":g0.join(" • ")||`Current model: ${L2}${F2} (tap to open model picker)`,n_=(J)=>{if(!J||typeof J!=="object")return;let f=J.model??J.current;if(typeof c==="function")c({model:f??null,thinking_level:J.thinking_level??null,supports_thinking:J.supports_thinking,provider_usage:J.provider_usage??null});if(f&&typeof C==="function")C(f)},s_=(J)=>{let f=J||J_.current;if(!f)return;f.style.height="auto",f.style.height=`${f.scrollHeight}px`,f.style.overflowY="hidden"},l0=(J)=>{if(!J.startsWith("/")||J.includes(`
`)){O_(!1),q_([]);return}let f=J.toLowerCase().split(" ")[0];if(f.length<1){O_(!1),q_([]);return}let i=O6.filter((G_)=>G_.name.startsWith(f)||G_.name.replace(/-/g,"").startsWith(f.replace(/-/g,"")));if(i.length>0&&!(i.length===1&&i[0].name===f))E_(!1),w_([]),q_(i),D_(0),O_(!0);else O_(!1),q_([])},k0=(J)=>{let f=z_,i=f.indexOf(" "),G_=i>=0?f.slice(i):"",b_=J.name+G_;y_(b_),O_(!1),q_([]),requestAnimationFrame(()=>{let p_=J_.current;if(!p_)return;let I_=b_.length;p_.selectionStart=I_,p_.selectionEnd=I_,p_.focus()})},O0=(J)=>{if(z$(J)==null){E_(!1),w_([]);return}let f=l1(Z_,J,{currentChatJid:N_});if(f.length>0&&!(f.length===1&&Y$(f[0].agent_name).trim().toLowerCase()===String(J||"").trim().toLowerCase()))O_(!1),q_([]),w_(f),P_(0),E_(!0);else E_(!1),w_([])},P0=(J)=>{let f=Y$(J?.agent_name);if(!f)return;y_(f),E_(!1),w_([]),requestAnimationFrame(()=>{let i=J_.current;if(!i)return;let G_=f.length;i.selectionStart=G_,i.selectionEnd=G_,i.focus()})},V0=(J)=>{if(j)W_(J);else y_(J),l0(J),O0(J);requestAnimationFrame(()=>s_())},W2=(J)=>{let f=j?$_:z_,i=f&&!f.endsWith(`
`)?`
`:"",G_=`${f}${i}${J}`.trimStart();V0(G_)},h2=(J)=>{let f=J?.command?.model_label;if(f)return f;let i=J?.command?.message;if(typeof i==="string"){let G_=i.match(/•\s+([^\n]+?)\s+\(current\)/);if(G_?.[1])return G_[1].trim()}return null},e0=async(J)=>{if(j||T_)return;X0(!0);try{let f=await l2("default",J,null,[],null,N_),i=h2(f);n_({model:i??F??null,thinking_level:f?.command?.thinking_level,supports_thinking:f?.command?.supports_thinking});try{let G_=await b2(N_);if(G_)n_(G_)}catch{}return _?.(),!0}catch(f){return console.error("Failed to switch model:",f),alert("Failed to switch model: "+f.message),!1}finally{X0(!1)}},y2=async()=>{await e0("/cycle-model")},D2=async(J)=>{if(!J||T_)return;if(await e0(`/model ${J}`))o_(!1)},C0=(J)=>{J.preventDefault(),J.stopPropagation(),o_((f)=>!f)},o0=(J)=>{if(J==="queue"||J==="steer"||J==="auto")return J;return Y_?"queue":null},w0=async(J,f,i={})=>{let{includeMedia:G_=!0,includeFileRefs:b_=!0,includeMessageRefs:p_=!0,clearAfterSubmit:I_=!0,recordHistory:S0=!0}=i||{},j2=typeof J==="string"?J:J&&typeof J?.target?.value==="string"?J.target.value:z_,l_=typeof j2==="string"?j2:"";if(!l_.trim()&&(G_?U_.length===0:!0)&&(b_?z.length===0:!0)&&(p_?G.length===0:!0))return;O_(!1),q_([]),E_(!1),w_([]);let V2=G_?[...U_]:[],w2=b_?[...z]:[],d0=p_?[...G]:[],p0=l_.trim();if(S0&&p0){let q2=P.current,H0=d_(q2.filter(($0)=>$0!==p0));if(H0.push(p0),H0.length>200)H0.splice(0,H0.length-200);P.current=H0,n0(H0),o.current=-1,F_.current=""}if(I_)y_(""),z0([]),O?.(),X?.();(async()=>{try{if(await V_?.({content:p0,submitMode:f,fileRefs:w2,messageRefs:d0,mediaFiles:V2})){_?.();return}let H0=[];for(let c_ of V2){let N2=await S1(c_);H0.push(N2.id)}let $0=w2.length?`Files:
${w2.map((c_)=>`- ${c_}`).join(`
`)}`:"",u0=d0.length?`Referenced messages:
${d0.map((c_)=>`- message:${c_}`).join(`
`)}`:"",J2=H0.length?`Images:
${H0.map((c_,N2)=>{let U=V2[N2]?.name||`image-${N2+1}`;return`- attachment:${c_} (${U})`}).join(`
`)}`:"",x2=[p0,$0,u0,J2].filter(Boolean).join(`

`),K0=await l2("default",x2,null,H0,o0(f),N_);if(t?.(K0),K0?.command){n_({model:K0.command.model_label??F??null,thinking_level:K0.command.thinking_level,supports_thinking:K0.command.supports_thinking});try{let c_=await b2(N_);if(c_)n_(c_)}catch{}}_?.()}catch(q2){console.error("Failed to post:",q2)}})()},E2=(J)=>{n?.(J)},k2=(J)=>{if(J.isComposing)return;if(j&&J.key==="Escape"){J.preventDefault(),W_(""),K?.();return}if(A_&&X_.length>0){let f=J_.current?.value??(j?$_:z_);if(!String(f||"").match(/^@([a-zA-Z0-9_-]*)$/))E_(!1),w_([]);else{if(J.key==="ArrowDown"){J.preventDefault(),P_((i)=>(i+1)%X_.length);return}if(J.key==="ArrowUp"){J.preventDefault(),P_((i)=>(i-1+X_.length)%X_.length);return}if(J.key==="Tab"||J.key==="Enter"){J.preventDefault(),P0(X_[_0]);return}if(J.key==="Escape"){J.preventDefault(),E_(!1),w_([]);return}}}if(C_&&H_.length>0){let f=J_.current?.value??(j?$_:z_);if(!String(f||"").startsWith("/"))O_(!1),q_([]);else{if(J.key==="ArrowDown"){J.preventDefault(),D_((i)=>(i+1)%H_.length);return}if(J.key==="ArrowUp"){J.preventDefault(),D_((i)=>(i-1+H_.length)%H_.length);return}if(J.key==="Tab"){J.preventDefault(),k0(H_[K_]);return}if(J.key==="Enter"&&!J.shiftKey){if(!(J_.current?.value??(j?$_:z_)).includes(" ")){J.preventDefault();let b_=H_[K_];O_(!1),q_([]),w0(b_.name);return}}if(J.key==="Escape"){J.preventDefault(),O_(!1),q_([]);return}}}if(!j&&(J.key==="ArrowUp"||J.key==="ArrowDown")&&!J.metaKey&&!J.ctrlKey&&!J.altKey&&!J.shiftKey){let f=J_.current;if(!f)return;let i=f.value||"",G_=f.selectionStart===0&&f.selectionEnd===0,b_=f.selectionStart===i.length&&f.selectionEnd===i.length;if(J.key==="ArrowUp"&&G_||J.key==="ArrowDown"&&b_){let p_=P.current;if(!p_.length)return;J.preventDefault();let I_=o.current;if(J.key==="ArrowUp"){if(I_===-1)F_.current=i,I_=p_.length-1;else if(I_>0)I_-=1;o.current=I_,V0(p_[I_]||"")}else{if(I_===-1)return;if(I_<p_.length-1)I_+=1,o.current=I_,V0(p_[I_]||"");else o.current=-1,V0(F_.current||""),F_.current=""}requestAnimationFrame(()=>{let S0=J_.current;if(!S0)return;let j2=S0.value.length;S0.selectionStart=j2,S0.selectionEnd=j2});return}}if(J.key==="Enter"&&!J.shiftKey&&(J.ctrlKey||J.metaKey)){J.preventDefault();let f=J_.current?.value??(j?$_:z_);if(j){if(f.trim())N?.(f.trim())}else w0(f,"steer");return}if(J.key==="Enter"&&!J.shiftKey){J.preventDefault();let f=J_.current?.value??(j?$_:z_);if(j){if(f.trim())N?.(f.trim())}else w0(f)}},f2=(J)=>{let f=Array.from(J||[]).filter((i)=>i&&i.type&&i.type.startsWith("image/"));if(!f.length)return;z0((i)=>[...i,...f])},v_=(J)=>{f2(J.target.files),J.target.value=""},I0=(J)=>{if(j)return;J.preventDefault(),J.stopPropagation(),A0.current+=1,W0(!0)},_2=(J)=>{if(j)return;if(J.preventDefault(),J.stopPropagation(),A0.current=Math.max(0,A0.current-1),A0.current===0)W0(!1)},h0=(J)=>{if(j)return;if(J.preventDefault(),J.stopPropagation(),J.dataTransfer)J.dataTransfer.dropEffect="copy";W0(!0)},$2=(J)=>{if(j)return;J.preventDefault(),J.stopPropagation(),A0.current=0,W0(!1),f2(J.dataTransfer?.files||[])},X2=(J)=>{if(j)return;let f=J.clipboardData?.items;if(!f||!f.length)return;let i=[];for(let G_ of f){if(G_.kind!=="file")continue;let b_=G_.getAsFile?.();if(b_)i.push(b_)}if(i.length>0)J.preventDefault(),f2(i)},C2=(J)=>{z0((f)=>f.filter((i,G_)=>G_!==J))},r0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((J)=>{let{latitude:f,longitude:i,accuracy:G_}=J.coords,b_=`${f.toFixed(5)}, ${i.toFixed(5)}`,p_=Number.isFinite(G_)?` ±${Math.round(G_)}m`:"",I_=`https://maps.google.com/?q=${f},${i}`,S0=`Location: ${b_}${p_} ${I_}`;W2(S0)},(J)=>{let f=J?.message||"Unable to retrieve location.";alert(`Location error: ${f}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!q0)return;Y0(!0),b2(N_).then((J)=>{let f=Array.isArray(J?.models)?J.models.filter((i)=>typeof i==="string"&&i.trim().length>0):[];M_(f),n_(J)}).catch((J)=>{console.warn("Failed to load model list:",J),M_([])}).finally(()=>{Y0(!1)})},[q0,F]),v(()=>{if(j)o_(!1),O_(!1),q_([]),E_(!1),w_([])},[j]),v(()=>{if(!q0)return;let J=(f)=>{let i=x0.current,G_=J0.current,b_=f.target;if(i&&i.contains(b_))return;if(G_&&G_.contains(b_))return;o_(!1)};return document.addEventListener("pointerdown",J),()=>document.removeEventListener("pointerdown",J)},[q0]);let L0=(J)=>{let f=J.target.value;s_(J.target),V0(f)};return v(()=>{requestAnimationFrame(()=>s_())},[z_,$_,j]),v(()=>{if(j)return;O0(z_)},[Z_,N_,z_,j]),q`
        <div class="compose-box">
            ${!j&&L_.length>0&&q`
                <div class="compose-queue-stack">
                    ${L_.map((J)=>{let f=typeof J?.content==="string"?J.content:"";if(!f.trim())return null;return q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${f}>
                                    ${f}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>E2(J)}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                        <polyline points="14 12 18 8 22 12" />
                                    </svg>
                                    <span>Steer</span>
                                </button>
                                <button
                                    class="compose-queue-stack-close-btn"
                                    type="button"
                                    title="Cancel queued message"
                                    onClick=${()=>Q_?.(J)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${B_?" drag-active":""}`}
                onDragEnter=${I0}
                onDragOver=${h0}
                onDragLeave=${_2}
                onDrop=${$2}
            >
                <div class="compose-input-main">
                    ${(z.length>0||U_.length>0||G.length>0)&&q`
                        <div class="compose-file-refs">
                            ${G.map((J)=>{return q`
                                    <${Y2}
                                        key=${"msg-"+J}
                                        prefix="compose"
                                        label=${"msg:"+J}
                                        title=${"Message reference: "+J}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>V?.(J)}
                                    />
                                `})}
                            ${z.map((J)=>{let f=J.split("/").pop()||J;return q`
                                    <${Y2}
                                        prefix="compose"
                                        label=${f}
                                        title=${J}
                                        onClick=${()=>r?.(J)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>Y?.(J)}
                                    />
                                `})}
                            ${U_.map((J,f)=>{let i=J?.name||`image-${f+1}`;return q`
                                    <${Y2}
                                        key=${i+f}
                                        prefix="compose"
                                        label=${i}
                                        title=${i}
                                        removeTitle="Remove image"
                                        onRemove=${()=>C2(f)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof j_==="function"&&q`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>j_?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${J_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?$_:z_}
                        onInput=${L0}
                        onKeyDown=${k2}
                        onPaste=${X2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${A_&&X_.length>0&&q`
                        <div class="slash-autocomplete" ref=${v0}>
                            ${X_.map((J,f)=>q`
                                <div
                                    key=${J.chat_jid||J.agent_name}
                                    class=${`slash-item${f===_0?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),P0(J)}}
                                    onMouseEnter=${()=>P_(f)}
                                >
                                    <span class="slash-name">@${J.agent_name}</span>
                                    <span class="slash-desc">${J.display_name||J.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C_&&H_.length>0&&q`
                        <div class="slash-autocomplete" ref=${r_}>
                            ${H_.map((J,f)=>q`
                                <div
                                    key=${J.name}
                                    class=${`slash-item${f===K_?" active":""}`}
                                    onMouseDown=${(i)=>{i.preventDefault(),k0(J)}}
                                    onMouseEnter=${()=>D_(f)}
                                >
                                    <span class="slash-name">${J.name}</span>
                                    <span class="slash-desc">${J.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${q0&&!j&&q`
                        <div class="compose-model-popup" ref=${x0}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${y0&&q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!y0&&S_.length===0&&q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!y0&&S_.map((J)=>q`
                                    <button
                                        key=${J}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${F===J?" active":""}`}
                                        onClick=${()=>{D2(J)}}
                                        disabled=${T_}
                                    >
                                        ${J}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{y2()}}
                                    disabled=${T_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!j&&F&&q`
                    <div class="compose-meta-row">
                        ${!j&&F&&q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${J0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${B0}
                                    aria-label="Open model picker"
                                    onClick=${C0}
                                    disabled=${T_}
                                >
                                    ${T_?"Switching…":L2}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!T_&&c0&&q`
                                        <span class="compose-model-usage-hint" title=${B0}>
                                            ${c0}
                                        </span>
                                    `}
                                    ${!j&&b0&&q`
                                        <div class="compose-agent-hints" title="Active chat agents you can mention with @name">
                                            <span class="compose-agent-hints-label">Agents</span>
                                            ${U0.map((J)=>q`
                                                <button
                                                    key=${J.chat_jid||J.agent_name}
                                                    type="button"
                                                    class=${`compose-agent-chip${J.is_active?" active":""}`}
                                                    onClick=${()=>P0(J)}
                                                    title=${`${J.display_name||J.chat_jid||"Active agent"} — insert @${J.agent_name}`}
                                                >
                                                    <span class="compose-agent-chip-handle">@${J.agent_name}</span>
                                                </button>
                                            `)}
                                        </div>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${!j&&I&&I.percent!=null&&q`
                        <${L6} usage=${I} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:Z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${h_&&!j&&q`
                        <button
                            class="icon-btn location-btn"
                            onClick=${r0}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${E0&&!j&&q`
                        <button
                            class=${`icon-btn notification-btn${i_?" active":""}`}
                            onClick=${T}
                            title=${Q0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&q`
                        ${p&&l&&q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${l}
                                title=${`Attach open file: ${p}`}
                                type="button"
                                disabled=${z.includes(p)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${v_} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{w0()}}
                            disabled=${!x_}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var a1="piclaw_theme",O$="piclaw_tint",U3={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},W6={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},s1={default:{label:"Default",mode:"auto",light:U3,dark:W6},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},X6=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],H3={theme:"default",tint:null},t1="light",G$=!1;function e1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function v2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let N=j.length===3?j.split("").map((K)=>K+K).join(""):j,Z=parseInt(N,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${N.toLowerCase()}`}}function V6(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let N=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),N=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=N.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let K=parseInt(Z[1],10),z=parseInt(Z[2],10),Y=parseInt(Z[3],10);if(![K,z,Y].every((G)=>Number.isFinite(G)))return null;let O=`#${[K,z,Y].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:Y,hex:O}}function _4(_){return v2(_)||V6(_)}function r2(_,$,j){let N=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${N} ${Z} ${K})`}function B$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function $4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function L$(_){return s1[_]||s1.default}function q6(_){return _.mode==="auto"?$4():_.mode}function J6(_,$){let j=L$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||U3}function Q6(_,$,j){let N=_4($);if(!N)return _;let Z=v2(_.bgPrimary),K=v2(_.bgSecondary),z=v2(_.bgHover),Y=v2(_.borderColor);if(!Z||!K||!z||!Y)return _;let G=v2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:r2(Z,N,0.08),bgSecondary:r2(K,N,0.12),bgHover:r2(z,N,0.16),borderColor:r2(Y,N,0.08),accent:N.hex,accentHover:G?r2(N,G,0.18):N.hex}}function U6(_,$){if(typeof document>"u")return;let j=document.documentElement,N=_.accent,Z=_4(N),K=Z?B$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=Z?B$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",Y=Z?B$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",O={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":N,"--accent-hover":_.accentHover||N,"--accent-soft":z,"--accent-soft-strong":Y,"--danger-color":_.danger||U3.danger,"--success-color":_.success||U3.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(O).forEach(([G,V])=>{if(V)j.style.setProperty(G,V)})}function H6(){if(typeof document>"u")return;let _=document.documentElement;X6.forEach(($)=>_.style.removeProperty($))}function J3(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function F6(_,$){if(typeof document>"u")return;let j=J3("theme-color");if(j&&_)j.setAttribute("content",_);let N=J3("msapplication-TileColor");if(N&&_)N.setAttribute("content",_);let Z=J3("msapplication-navbutton-color");if(Z&&_)Z.setAttribute("content",_);let K=J3("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function y6(){if(typeof window>"u")return;let _={...H3,mode:t1};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function W$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=e1(_?.theme||"default"),N=_?.tint?String(_.tint).trim():null,Z=L$(j),K=q6(Z),z=J6(j,K);H3={theme:j,tint:N},t1=K;let Y=document.documentElement;Y.dataset.theme=K,Y.dataset.colorTheme=j,Y.dataset.tint=N?String(N):"",Y.style.colorScheme=K;let O=z;if(j==="default"&&N)O=Q6(z,N,K);if(j==="default"&&!N)H6();else U6(O,K);if(F6(O.bgPrimary,K),y6(),$.persist!==!1)if(R_(a1,j),N)R_(O$,N);else R_(O$,"")}function Q3(){if(L$(H3.theme).mode!=="auto")return;W$(H3,{persist:!1})}function j4(){if(typeof window>"u")return()=>{};let _=e1(m0(a1)||"default"),$=m0(O$),j=$?$.trim():null;if(W$({theme:_,tint:j},{persist:!1}),window.matchMedia&&!G$){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",Q3);else if(N.addListener)N.addListener(Q3);return G$=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",Q3);else if(N.removeListener)N.removeListener(Q3);G$=!1}}return()=>{}}function N4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,N=_.tint??null;W$({theme:j||"default",tint:N},{persist:!0})}function Z4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return $4()}var F3=/#(\w+)/g,D6=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),E6=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),k6=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),C6={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},w6=new Set(["http:","https:","mailto:",""]);function K4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function P2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let N=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!w6.has(N.protocol))return null;return N.href}catch{return null}}function z4(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),N=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=Z.nextNode())N.push(K);for(let z of N){let Y=z.tagName.toLowerCase();if(!E6.has(Y)){let G=z.parentNode;if(!G)continue;while(z.firstChild)G.insertBefore(z.firstChild,z);G.removeChild(z);continue}let O=C6[Y]||new Set;for(let G of Array.from(z.attributes)){let V=G.name.toLowerCase(),X=G.value;if(V.startsWith("on")){z.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(O.has(V)||k6.has(V)){if(V==="href"){let F=P2(X);if(!F)z.removeAttribute(G.name);else if(z.setAttribute(G.name,F),Y==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let F=Y==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,D=P2(F,{allowDataImage:Y==="img"});if(!D)z.removeAttribute(G.name);else z.setAttribute(G.name,D)}continue}z.removeAttribute(G.name)}}return j.body.innerHTML}function Y4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function y3(_,$=2){if(!_)return _;let j=_;for(let N=0;N<$;N+=1){let Z=Y4(j);if(Z===j)break;j=Z}return j}function A6(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=[],K=!1,z=[];for(let Y of j){if(!K&&Y.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&Y.trim().match(/^```\s*$/)){let O=N.length;N.push(z.join(`
`)),Z.push(`@@MERMAID_BLOCK_${O}@@`),K=!1,z=[];continue}if(K)z.push(Y);else Z.push(Y)}if(K)Z.push("```mermaid"),Z.push(...z);return{text:Z.join(`
`),blocks:N}}function b6(_){if(!_)return _;return y3(_,5)}function P6(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let N of $)j+=String.fromCharCode(N);return btoa(j)}function S6(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let N=0;N<$.length;N+=1)j[N]=$.charCodeAt(N);return new TextDecoder().decode(j)}function M6(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,N)=>{let Z=Number(N),K=$[Z]??"",z=b6(K);return`<div class="mermaid-container" data-mermaid="${P6(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function G4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function B4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let N=j.trim(),Z=N.startsWith("/"),K=Z?N.slice(1).trim():N,O=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!O||!D6.has(O))return $;if(O==="br")return Z?"":"<br>";if(Z)return`</${O}>`;return`<${O}>`})}function O4(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,N)=>`<pre><code>${$(N)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,N)=>`<code>${$(N)}</code>`)}function L4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let K=N(Z.nodeValue);if(K!==Z.nodeValue)Z.nodeValue=K}return $.body.innerHTML}function f6(_){if(!window.katex)return _;let $=(z)=>Y4(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let Y=[],O=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=Y.length;return Y.push(G),`@@CODE_BLOCK_${V}@@`});return O=O.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=Y.length;return Y.push(G),`@@CODE_INLINE_${V}@@`}),{html:O,blocks:Y}},N=(z,Y)=>{if(!Y.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(O,G)=>{let V=Number(G);return Y[V]??""})},Z=j(_),K=Z.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,Y,O)=>{try{let G=katex.renderToString($(O.trim()),{displayMode:!0,throwOnError:!1});return`${Y}${G}`}catch(G){return`<span class="math-error" title="${K4(G.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,Y,O)=>{if(/\s$/.test(O))return z;try{let G=katex.renderToString($(O),{displayMode:!1,throwOnError:!1});return`${Y}${G}`}catch(G){return`${Y}<span class="math-error" title="${K4(G.message)}">$${O}$</span>`}}),N(K,Z.blocks)}function x6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),N=[],Z;while(Z=j.nextNode())N.push(Z);for(let K of N){let z=K.nodeValue;if(!z)continue;if(F3.lastIndex=0,!F3.test(z))continue;F3.lastIndex=0;let Y=K.parentElement;if(Y&&(Y.closest("a")||Y.closest("code")||Y.closest("pre")))continue;let O=z.split(F3);if(O.length<=1)continue;let G=$.createDocumentFragment();O.forEach((V,X)=>{if(X%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",V),F.textContent=`#${V}`,G.appendChild(F)}else G.appendChild($.createTextNode(V))}),K.parentNode?.replaceChild(G,K)}return $.body.innerHTML}function T6(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=[],Z=!1;for(let K of j){if(!Z&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,N.push("$$");continue}if(Z&&K.trim().match(/^```\s*$/)){Z=!1,N.push("$$");continue}N.push(K)}return N.join(`
`)}function f0(_,$,j={}){if(!_)return"";let N=T6(_),{text:Z,blocks:K}=A6(N),z=y3(Z,2),O=G4(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),G=B4(O),V=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return V=O4(V),V=L4(V),V=f6(V),V=x6(V),V=M6(V,K),V=z4(V,j),V}function D3(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=y3($,2),Z=G4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=B4(Z),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=O4(z),z=L4(z),z=z4(z),z}async function G2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=Z4()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let Y=z.dataset.mermaid,O=S6(Y||""),G=y3(O,2),V=await $(G,{...Z,transparent:!0});z.innerHTML=V,z.removeAttribute("data-mermaid")}catch(Y){console.error("Mermaid render error:",Y);let O=document.createElement("pre");O.className="mermaid-error",O.textContent=`Diagram error: ${Y.message}`,z.innerHTML="",z.appendChild(O),z.removeAttribute("data-mermaid")}}function W4(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function X4(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function V4(_){if(!_)return!1;return _.status!=="running"}function q4(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function J4({session:_,onClose:$,onInject:j,onRetry:N}){let Z=y(null),K=y(null),z=_?.thinking?D3(_.thinking):"",Y=_?.answer?f0(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Z.current&&z)G2(Z.current).catch(()=>{})},[z]),v(()=>{if(K.current&&Y)G2(K.current).catch(()=>{})},[Y]),!_)return null;let O=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),X=X4(_),F=V4(_),D=!O&&G,M=O?"Thinking…":_.status==="error"?"Error":"Done";return q`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">BTW</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${M}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&q`<div class="btw-block btw-question"><strong>Question:</strong> ${_.question}</div>`}
            ${_.error&&q`<div class="btw-block btw-error">${_.error}</div>`}
            ${V&&q`
                <details class="btw-block btw-thinking" open=${O?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${X&&q`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </div>
            `}

            ${F&&q`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&q`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>N?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!D}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var Q4="PiClaw";function X$(_,$){let j=_||"PiClaw",N=j.charAt(0).toUpperCase(),Z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%Z.length,z=Z[K],Y=j.trim().toLowerCase(),O=typeof $==="string"?$.trim():"",V=(O?O:null)||(Y==="PiClaw".toLowerCase()||Y==="pi"?"/static/icon-192.png":null);return{letter:N,color:z,image:V}}function U4(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function H4(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function F4(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",Y=K?.dataset?.tint||"",O=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(O&&(Y||z&&z!=="default"))return O}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),N=0;for(let K=0;K<j.length;K+=1)N=(N*31+j.charCodeAt(K))%2147483647;let Z=Math.abs(N)%$.length;return $[Z]}function I6(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function E3(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function u6(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,N=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(N).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${N}:${String(j).padStart(2,"0")}`}function y4(_,$=Date.now()){let j=I6(_);if(j===null)return null;return u6(Math.max(0,$-j))}function D4({status:_,draft:$,plan:j,thought:N,pendingRequest:Z,intent:K,turnId:z,steerQueued:Y,onPanelToggle:O}){let X=(K_)=>{if(!K_)return{text:"",totalLines:0,fullText:""};if(typeof K_==="string"){let X_=K_,w_=X_?X_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:X_,totalLines:w_,fullText:X_}}let D_=K_.text||"",C_=K_.fullText||K_.full_text||D_,O_=Number.isFinite(K_.totalLines)?K_.totalLines:C_?C_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:D_,totalLines:O_,fullText:C_}},F=160,D=(K_)=>{if(!K_)return 1;return Math.max(1,Math.ceil(K_.length/160))},M=(K_,D_,C_)=>{let O_=(K_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!O_)return{text:"",omitted:0,totalLines:Number.isFinite(C_)?C_:0,visibleLines:0};let X_=O_.split(`
`),w_=X_.length>D_?X_.slice(0,D_).join(`
`):O_,_0=Number.isFinite(C_)?C_:X_.reduce((E_,T_)=>E_+D(T_),0),P_=w_?w_.split(`
`).reduce((E_,T_)=>E_+D(T_),0):0,A_=Math.max(_0-P_,0);return{text:w_,omitted:A_,totalLines:_0,visibleLines:P_}},x=X(j),I=X(N),u=X($),Q=Boolean(x.text)||x.totalLines>0,T=Boolean(I.text)||I.totalLines>0,C=Boolean(u.fullText?.trim()||u.text?.trim());if(!_&&!C&&!Q&&!T&&!Z&&!K)return null;let[c,p]=m(new Set),[l,r]=m(()=>Date.now()),L_=(K_)=>p((D_)=>{let C_=new Set(D_),O_=!C_.has(K_);if(O_)C_.add(K_);else C_.delete(K_);if(typeof O==="function")O(K_,O_);return C_});v(()=>{p(new Set)},[z]);let n=E3(_);v(()=>{if(!n)return;r(Date.now());let K_=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(K_)},[n,_?.started_at,_?.startedAt]);let Q_=_?.turn_id||z,V_=F4(Q_),t=Y?"turn-dot turn-dot-queued":"turn-dot",j_=(K_)=>K_,Y_=Boolean(_?.last_activity||_?.lastActivity),Z_=(K_)=>K_==="warning"?"#f59e0b":K_==="error"?"var(--danger-color)":K_==="success"?"var(--success-color)":V_,N_=K?.kind||"info",z_=Z_(N_),y_=Z_(_?.kind||(n?"warning":"info")),$_="",W_=_?.title,U_=_?.status;if(_?.type==="plan")$_=W_?`Planning: ${W_}`:"Planning...";else if(_?.type==="tool_call")$_=W_?`Running: ${W_}`:"Running tool...";else if(_?.type==="tool_status")$_=W_?`${W_}: ${U_||"Working..."}`:U_||"Working...";else if(_?.type==="error")$_=W_||"Agent error";else $_=W_||U_||"Working...";if(Y_)$_="Last activity just now";let z0=({panelTitle:K_,text:D_,fullText:C_,totalLines:O_,maxLines:X_,titleClass:w_,panelKey:_0})=>{let P_=c.has(_0),A_=C_||D_||"",E_=typeof X_==="number",T_=P_&&E_,X0=E_?M(A_,X_,O_):{text:A_||"",omitted:0,totalLines:Number.isFinite(O_)?O_:0};if(!A_&&!(Number.isFinite(X0.totalLines)&&X0.totalLines>0))return null;let q0=`agent-thinking-body${E_?" agent-thinking-body-collapsible":""}`,o_=E_?`--agent-thinking-collapsed-lines: ${X_};`:"";return q`
            <div
                class="agent-thinking"
                data-expanded=${P_?"true":"false"}
                data-collapsible=${E_?"true":"false"}
                style=${V_?`--turn-color: ${V_};`:""}
            >
                <div class="agent-thinking-title ${w_||""}">
                    ${V_&&q`<span class=${t} aria-hidden="true"></span>`}
                    ${K_}
                    ${T_&&q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${K_} panel`}
                            onClick=${()=>L_(_0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${q0}
                    style=${o_}
                    dangerouslySetInnerHTML=${{__html:D3(A_)}}
                />
                ${!P_&&X0.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>L_(_0)}>
                        ▸ ${X0.omitted} more lines
                    </button>
                `}
                ${P_&&X0.omitted>0&&q`
                    <button class="agent-thinking-truncation" onClick=${()=>L_(_0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},B_=Z?.tool_call?.title,W0=B_?`Awaiting approval: ${B_}`:"Awaiting approval",H_=n?y4(_,l):null,q_=(K_,D_,C_=null)=>q`
        <div
            class="agent-thinking agent-thinking-intent"
            aria-live="polite"
            style=${D_?`--turn-color: ${D_};`:""}
            title=${K_?.detail||""}
        >
            <div class="agent-thinking-title intent">
                ${D_&&q`<span class=${t} aria-hidden="true"></span>`}
                <span class="agent-thinking-title-text">${K_.title}</span>
                ${C_&&q`<span class="agent-status-elapsed">${C_}</span>`}
            </div>
            ${K_.detail&&q`<div class="agent-thinking-body">${K_.detail}</div>`}
        </div>
    `;return q`
        <div class="agent-status-panel">
            ${K&&q_(K,z_)}
            ${_?.type==="intent"&&q_(_,y_,H_)}
            ${Z&&q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${V_?`--turn-color: ${V_};`:""}>
                    <span class=${t} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${W0}</span>
                </div>
            `}
            ${Q&&z0({panelTitle:j_("Planning"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,panelKey:"plan"})}
            ${T&&z0({panelTitle:j_("Thoughts"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&z0({panelTitle:j_("Draft"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&q`
                <div class=${`agent-status${Y_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${V_?`--turn-color: ${V_};`:""}>
                    ${V_&&q`<span class=${t} aria-hidden="true"></span>`}
                    ${_?.type==="error"?q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Y_&&q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${$_}</span>
                </div>
            `}
        </div>
    `}function E4({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:N,options:Z}=_,K=N?.title||"Agent Request",z=N?.kind||"other",Y=N?.rawInput||{},O=Y.command||Y.commands&&Y.commands[0]||null,G=Y.diff||null,V=Y.fileName||Y.path||null,X=N?.description||Y.description||Y.explanation||null,D=(Array.isArray(N?.locations)?N.locations:[]).map((Q)=>Q?.path).filter((Q)=>Boolean(Q)),M=Array.from(new Set([V,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:N,options:Z});let x=async(Q)=>{try{await $$(j,Q),$()}catch(T){console.error("Failed to respond to agent request:",T)}},I=async()=>{try{await f1(K,`Auto-approved: ${K}`),await $$(j,"approved"),$()}catch(Q){console.error("Failed to add to whitelist:",Q)}},u=Z&&Z.length>0;return q`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${K}</div>
                </div>
                ${(X||O||G||M.length>0)&&q`
                    <div class="agent-request-body">
                        ${X&&q`
                            <div class="agent-request-description">${X}</div>
                        `}
                        ${M.length>0&&q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${M.map((Q,T)=>q`<li key=${T}>${Q}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${O&&q`
                            <pre class="agent-request-command">${O}</pre>
                        `}
                        ${G&&q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${G}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${u?Z.map((Q)=>q`
                            <button 
                                key=${Q.optionId||Q.id||String(Q)}
                                class="agent-request-btn ${Q.kind==="allow_once"||Q.kind==="allow_always"?"primary":""}"
                                onClick=${()=>x(Q.optionId||Q.id||Q)}
                            >
                                ${Q.name||Q.label||Q.optionId||Q.id||String(Q)}
                            </button>
                        `):q`
                        <button class="agent-request-btn primary" onClick=${()=>x("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>x("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${I}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function k4({status:_}){if(_==="connected")return null;return q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function C4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let N=new Date-$,Z=N/1000,K=86400000;if(N<K){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(N<5*K){let O=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${O} ${G}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),Y=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${Y}`}function d2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function R0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function S2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var m6=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),R6=new Set(["text/markdown"]);function s2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(m6.has($)||$.startsWith("text/"))return"text";return"unsupported"}function w4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return R6.has($)}function A4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function v6(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let N=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(N.slice(0,2),16),g:parseInt(N.slice(2,4),16),b:parseInt(N.slice(4,6),16)}}function c6(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let N=Number(j[1]),Z=Number(j[2]),K=Number(j[3]);if(![N,Z,K].every((z)=>Number.isFinite(z)))return null;return{r:N,g:Z,b:K}}function b4(_){return v6(_)||c6(_)}function k3(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),N=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*N+0.0722*Z}function g6(_,$){let j=Math.max(k3(_),k3($)),N=Math.min(k3(_),k3($));return(j+0.05)/(N+0.05)}function h6(_,$,j="#ffffff"){let N=b4(_);if(!N)return j;let Z=j,K=-1;for(let z of $){let Y=b4(z);if(!Y)continue;let O=g6(N,Y);if(O>K)Z=z,K=O}return Z}function V$(){let _=getComputedStyle(document.documentElement),$=(M,x)=>{for(let I of M){let u=_.getPropertyValue(I).trim();if(u)return u}return x},j=$(["--text-primary","--color-text"],"#0f1419"),N=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),Y=$(["--accent-color","--color-accent"],"#1d9bf0"),O=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),D=h6(Y,[j,Z],j);return{fg:j,fgMuted:N,bgPrimary:Z,bg:K,bgEmphasis:z,accent:Y,good:O,warning:G,attention:V,border:X,fontFamily:F,buttonTextColor:D}}function P4(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:N,accent:Z,good:K,warning:z,attention:Y,border:O,fontFamily:G}=V$();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:Y,subtle:Y}}},emphasis:{backgroundColor:N,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:Y,subtle:Y}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:O},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var p6=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),S4=!1,C3=null,M4=!1;function q$(_){_.querySelector(".adaptive-card-notice")?.remove()}function i6(_,$,j="error"){q$(_);let N=document.createElement("div");N.className=`adaptive-card-notice adaptive-card-notice-${j}`,N.textContent=$,_.appendChild(N)}function n6(_,$=(j)=>f0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function l6(_=($)=>f0($,null)){return($,j)=>{try{let N=n6($,_);j.outputHtml=N.outputHtml,j.didProcess=N.didProcess}catch(N){console.error("[adaptive-card] Failed to process markdown:",N),j.outputHtml=String($??""),j.didProcess=!1}}}function o6(_){if(M4||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=l6(),M4=!0}async function r6(){if(S4)return;if(C3)return C3;return C3=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{S4=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),C3}function d6(){return globalThis.AdaptiveCards}function s6(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function a6(_){return p6.has(_)}function Q$(_){if(!Array.isArray(_))return[];return _.filter(s6)}function t6(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",N=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:N,data:K,url:Z,raw:_}}function J$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>J$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,N])=>`${j}: ${J$(N)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function e6(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return J$($);return typeof $==="string"?$:String($)}function _5(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,N=(Z)=>{if(Array.isArray(Z))return Z.map((Y)=>N(Y));if(!Z||typeof Z!=="object")return Z;let z={...Z};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=e6(z.type,j[z.id],z);for(let[Y,O]of Object.entries(z))if(Array.isArray(O)||O&&typeof O==="object")z[Y]=N(O);return z};return N(_)}function $5(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function j5(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function N5(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,N=j&&typeof j.title==="string"?j.title.trim():"",Z=j5(_.completed_at||j?.submitted_at),K=[N||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function f4(_,$,j){if(!a6($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await r6()}catch(N){return console.error("[adaptive-card] Failed to load SDK:",N),!1}try{let N=d6();o6(N);let Z=new N.AdaptiveCard,K=V$();Z.hostConfig=new N.HostConfig(P4());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,Y=$.state==="active"?$.payload:_5($.payload,z);Z.parse(Y),Z.onExecuteAction=(V)=>{let X=t6(V);if(j?.onAction)q$(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let D=F instanceof Error?F.message:String(F||"Action failed.");i6(_,D||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let O=Z.render();if(!O)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let G=N5($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=G.label,V.appendChild(X),G.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=G.detail,V.appendChild(F)}_.appendChild(V)}if(q$(_),_.appendChild(O),G)$5(O);return!0}catch(N){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,N),!1}}function c2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>c2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${c2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function Z5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function U$(_){if(!Array.isArray(_))return[];return _.filter(Z5)}function x4(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let N=c2(j);return N?`Card submission: ${$} — ${N}`:`Card submission: ${$}`}if(typeof j==="object"){let N=Object.entries(j).filter(([Z])=>!Z.startsWith("__")).map(([Z,K])=>({key:Z,value:c2(K)})).filter((Z)=>Z.value).slice(0,4).map(({key:Z,value:K})=>`${Z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function T4(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([Z])=>!Z.startsWith("__")).map(([Z,K])=>({key:Z,value:c2(K)})).filter((Z)=>Z.value).slice(0,4):[],N=j.length>0?j.map(({key:Z,value:K})=>`${Z}: ${K}`).join(", "):c2(_.data)||null;return{title:$,summary:N,fields:j,submittedAt:_.submitted_at}}function K5(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?R0($):null},{label:"Added",value:_?.created_at?S2(_.created_at):null}].filter((N)=>N.value)}function I4({mediaId:_,info:$,onClose:j}){let N=$?.filename||`attachment-${_}`,Z=g_(()=>s2($?.content_type),[$?.content_type]),K=A4(Z),z=g_(()=>w4($?.content_type),[$?.content_type]),[Y,O]=m(Z==="text"||Z==="pdf"),[G,V]=m(""),[X,F]=m(null),[D,M]=m(null),x=y(null),I=g_(()=>K5($),[$]),u=g_(()=>{if(!z||!G)return"";return f0(G)},[z,G]);return v(()=>{let Q=(T)=>{if(T.key==="Escape")j()};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[j]),v(()=>{if(!x.current||!u)return;G2(x.current);return},[u]),v(()=>{let Q=!1,T=null;async function C(){if(Z==="text"){O(!0),M(null);try{let c=await u1(_);if(!Q)V(c)}catch{if(!Q)M("Failed to load text preview.")}finally{if(!Q)O(!1)}return}if(Z==="pdf"){O(!0),M(null);try{let c=await m1(_);if(T=URL.createObjectURL(c),!Q)F(T)}catch{if(!Q)M("Failed to load PDF preview.")}finally{if(!Q)O(!1)}return}O(!1)}return C(),()=>{if(Q=!0,T)URL.revokeObjectURL(T)}},[_,Z]),q`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(Q)=>{Q.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${N}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${t0(_)}
                            download=${N}
                            class="attachment-preview-download"
                            onClick=${(Q)=>Q.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${Y&&q`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!Y&&D&&q`<div class="attachment-preview-state">${D}</div>`}
                    ${!Y&&!D&&Z==="image"&&q`
                        <img class="attachment-preview-image" src=${t0(_)} alt=${N} />
                    `}
                    ${!Y&&!D&&Z==="pdf"&&X&&q`
                        <iframe class="attachment-preview-frame" src=${X} title=${N}></iframe>
                    `}
                    ${!Y&&!D&&Z==="text"&&z&&q`
                        <div
                            ref=${x}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:u}}
                        />
                    `}
                    ${!Y&&!D&&Z==="text"&&!z&&q`
                        <pre class="attachment-preview-text">${G}</pre>
                    `}
                    ${!Y&&!D&&Z==="unsupported"&&q`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${I.map((Q)=>q`
                        <div class="attachment-preview-meta-item" key=${Q.label}>
                            <span class="attachment-preview-meta-label">${Q.label}</span>
                            <span class="attachment-preview-meta-value">${Q.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function u4({src:_,onClose:$}){return v(()=>{let j=(N)=>{if(N.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function z5({mediaId:_,onPreview:$}){let[j,N]=m(null);if(v(()=>{o2(_).then(N).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",K=j.metadata?.size,z=K?R0(K):"",O=s2(j.content_type)==="unsupported"?"Details":"Preview";return q`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${t0(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${z&&q`<span class="file-size">${z}</span>`}
                        ${j.content_type&&q`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${O}
            </button>
        </div>
    `}function Y5({attachment:_,onPreview:$}){let j=Number(_?.id),[N,Z]=m(null);v(()=>{if(!Number.isFinite(j))return;o2(j).then(Z).catch(()=>{});return},[j]);let K=N?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?t0(j):null,O=s2(N?.content_type)==="unsupported"?"Details":"Preview";return q`
        <span class="attachment-pill" title=${K}>
            ${z?q`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${Y2}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:q`
                    <${Y2}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&N&&q`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${O}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:N})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function w3({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:N}=_,Z=N?S2(N):null;return q`
        <div class="content-annotations">
            ${$&&$.length>0&&q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&q`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&q`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function G5({block:_}){let $=_.title||_.name||_.uri,j=_.description,N=_.size?R0(_.size):"",Z=_.mime_type||"",K=O5(Z),z=P2(_.uri);return q`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&q`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&q`<span>${Z}</span>`}
                    ${N&&q`<span>${N}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function B5({block:_}){let[$,j]=m(!1),N=_.uri||"Embedded resource",Z=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${N}
            </button>
            ${$&&q`
                ${Z&&q`<pre class="resource-embed-content">${Z}</pre>`}
                ${K&&q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&q`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation();let O=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:z||"application/octet-stream"}),G=URL.createObjectURL(O),V=document.createElement("a");V.href=G,V.download=N.split("/").pop()||"resource",V.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function O5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function L5({preview:_}){let $=P2(_.url),j=P2(_.image,{allowDataImage:!0}),N=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return q`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${N}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function W5(_,$){return typeof _==="string"?_:""}var X5=1800,V5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,q5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,J5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function Q5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let N=document.execCommand("copy");return document.body.removeChild(j),N}catch{return!1}}function U5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,N=[],Z=(K,z)=>{let Y=z||"idle";if(K.dataset.copyState=Y,Y==="success")K.innerHTML=q5,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(Y==="error")K.innerHTML=J5,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=V5,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let Y=document.createElement("button");Y.type="button",Y.className="post-code-copy-btn",Z(Y,"idle"),z.appendChild(Y);let O=async(G)=>{G.preventDefault(),G.stopPropagation();let X=K.querySelector("code")?.textContent||"",F=await Q5(X);Z(Y,F?"success":"error");let D=j.get(Y);if(D)clearTimeout(D);let M=setTimeout(()=>{Z(Y,"idle"),j.delete(Y)},X5);j.set(Y,M)};Y.addEventListener("click",O),N.push(()=>{Y.removeEventListener("click",O);let G=j.get(Y);if(G)clearTimeout(G);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{N.forEach((K)=>K())}}function H5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){N=G;break}if(N===-1)return{content:_,fileRefs:[]};let Z=[],K=N+1;for(;K<j.length;K+=1){let G=j[K];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,N),Y=j.slice(K),O=[...z,...Y].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,fileRefs:Z}}function F5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){N=G;break}if(N===-1)return{content:_,messageRefs:[]};let Z=[],K=N+1;for(;K<j.length;K+=1){let G=j[K];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,N),Y=j.slice(K),O=[...z,...Y].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,messageRefs:Z}}function y5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),N=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Images:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){N=G;break}if(N===-1)return{content:_,attachments:[]};let Z=[],K=N+1;for(;K<j.length;K+=1){let G=j[K];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),X=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let F=X[1],D=(X[2]||"").trim()||F;Z.push({id:F,label:D,raw:V})}else Z.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let z=j.slice(0,N),Y=j.slice(K),O=[...z,...Y].join(`
`);return O=O.replace(/\n{3,}/g,`

`).trim(),{content:O,attachments:Z}}function D5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let N=j.map(D5).sort((V,X)=>X.length-V.length),Z=new RegExp(`(${N.join("|")})`,"gi"),K=new RegExp(`^(${N.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),Y=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),O=[],G;while(G=Y.nextNode())O.push(G);for(let V of O){let X=V.nodeValue;if(!X||!Z.test(X)){Z.lastIndex=0;continue}Z.lastIndex=0;let F=V.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let D=X.split(Z).filter((x)=>x!=="");if(D.length===0)continue;let M=z.createDocumentFragment();for(let x of D)if(K.test(x)){let I=z.createElement("mark");I.className="search-highlight-term",I.textContent=x,M.appendChild(I)}else M.appendChild(z.createTextNode(x));V.parentNode.replaceChild(M,V)}return z.body.innerHTML}function m4({post:_,onClick:$,onHashtagClick:j,onMessageRef:N,onScrollToMessage:Z,agentName:K,agentAvatarUrl:z,userName:Y,userAvatarUrl:O,userAvatarBackground:G,onDelete:V,isThreadReply:X,isThreadPrev:F,isThreadNext:D,isRemoving:M,highlightQuery:x,onFileRef:I}){let[u,Q]=m(null),T=y(null),C=_.data,c=C.type==="agent_response",p=Y||"You",l=c?K||Q4:p,r=c?X$(K,z):X$(p,O),L_=typeof G==="string"?G.trim().toLowerCase():"",n=!c&&r.image&&(L_==="clear"||L_==="transparent"),Q_=c&&Boolean(r.image),V_=`background-color: ${n||Q_?"transparent":r.color}`,t=C.content_meta,j_=Boolean(t?.truncated),Y_=Boolean(t?.preview),Z_=j_&&!Y_,N_=j_?{originalLength:Number.isFinite(t?.original_length)?t.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(t?.max_length)?t.max_length:0}:null,z_=C.content_blocks||[],y_=C.media_ids||[],$_=W5(C.content,C.link_previews),{content:W_,fileRefs:U_}=H5($_),{content:z0,messageRefs:B_}=F5(W_),{content:W0,attachments:H_}=y5(z0);$_=W0;let q_=Q$(z_),K_=U$(z_),D_=q_.length===1&&typeof q_[0]?.fallback_text==="string"?q_[0].fallback_text.trim():"",C_=K_.length===1?x4(K_[0]).trim():"",O_=Boolean(D_)&&$_?.trim()===D_||Boolean(C_)&&$_?.trim()===C_,X_=Boolean($_)&&!Z_&&!O_,w_=typeof x==="string"?x.trim():"",_0=g_(()=>{if(!$_||O_)return"";let P=f0($_,j);return w_?E5(P,w_):P},[$_,O_,w_]),P_=(P,o)=>{P.stopPropagation(),Q(t0(o))},[A_,E_]=m(null),T_=(P)=>{E_(P)},X0=(P)=>{P.stopPropagation(),V?.(_)},q0=(P,o)=>{let F_=new Set;if(!P||o.length===0)return{content:P,usedIds:F_};return{content:P.replace(/attachment:([^\s)"']+)/g,(h_,O2,D0,G0)=>{let E0=O2.replace(/^\/+/,""),Q0=o.find((b0)=>b0.name&&b0.name.toLowerCase()===E0.toLowerCase()&&!F_.has(b0.id))||o.find((b0)=>!F_.has(b0.id));if(!Q0)return h_;if(F_.add(Q0.id),G0.slice(Math.max(0,D0-2),D0)==="](")return`/media/${Q0.id}`;return Q0.name||"attachment"}),usedIds:F_}},o_=[],S_=[],M_=[],y0=[],Y0=[],J_=[],r_=0;if(z_.length>0)z_.forEach((P)=>{if(P?.type==="text"&&P.annotations)J_.push(P.annotations);if(P?.type==="resource_link")y0.push(P);else if(P?.type==="resource")Y0.push(P);else if(P?.type==="file"){let o=y_[r_++];if(o)S_.push(o),M_.push({id:o,name:P?.name||P?.filename||P?.title})}else if(P?.type==="image"||!P?.type){let o=y_[r_++];if(o){let F_=typeof P?.mime_type==="string"?P.mime_type:void 0;o_.push({id:o,annotations:P?.annotations,mimeType:F_}),M_.push({id:o,name:P?.name||P?.filename||P?.title})}}});else if(y_.length>0)y_.forEach((P)=>{o_.push({id:P,annotations:null}),M_.push({id:P,name:null})});if(H_.length>0)H_.forEach((P)=>{if(!P?.id)return;let o=M_.find((F_)=>String(F_.id)===String(P.id));if(o&&!o.name)o.name=P.label});let{content:v0,usedIds:x0}=q0($_,M_);$_=v0;let J0=o_.filter(({id:P})=>!x0.has(P)),A0=S_.filter((P)=>!x0.has(P)),N0=H_.length>0?H_.map((P,o)=>({id:P.id||`attachment-${o+1}`,label:P.label||`attachment-${o+1}`})):M_.map((P,o)=>({id:P.id,label:P.name||`attachment-${o+1}`})),d_=g_(()=>Q$(z_),[z_]),T0=g_(()=>U$(z_),[z_]);v(()=>{if(!T.current)return;return G2(T.current),U5(T.current)},[_0]);let n0=y(null);return v(()=>{if(!n0.current||d_.length===0)return;let P=n0.current;P.innerHTML="";for(let o of d_){let F_=document.createElement("div");P.appendChild(F_),f4(F_,o,{onAction:async(x_)=>{if(x_.type==="Action.OpenUrl"){let h_=P2(x_.url||"");if(!h_)throw Error("Invalid URL");window.open(h_,"_blank","noopener,noreferrer");return}if(x_.type==="Action.Submit"){await M1({post_id:_.id,thread_id:C.thread_id||_.id,card_id:o.card_id,action:{type:x_.type,title:x_.title||"",data:x_.data}});return}console.warn("[post] unsupported adaptive card action:",x_.type,x_)}}).catch((x_)=>{console.error("[post] adaptive card render error:",x_),F_.textContent=o.fallback_text||"Card failed to render."})}},[d_,C.thread_id,_.id]),q`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${X?"thread-reply":""} ${F?"thread-prev":""} ${D?"thread-next":""} ${M?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${r.image?"has-image":""}" style=${V_}>
                ${r.image?q`<img src=${r.image} alt=${l} />`:r.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${X0}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${l}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(P)=>{if(P.preventDefault(),P.stopPropagation(),N)N(_.id)}}>${C4(_.timestamp)}</a>
                </div>
                ${Z_&&N_&&q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${d2(N_.originalLength)} chars
                            ${N_.maxLength?q` • Display limit: ${d2(N_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${Y_&&N_&&q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${d2(N_.maxLength)} of ${d2(N_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(U_.length>0||B_.length>0||N0.length>0)&&q`
                    <div class="post-file-refs">
                        ${B_.map((P)=>{let o=(F_)=>{if(F_.preventDefault(),F_.stopPropagation(),Z)Z(P);else{let x_=document.getElementById("post-"+P);if(x_)x_.scrollIntoView({behavior:"smooth",block:"center"}),x_.classList.add("post-highlight"),setTimeout(()=>x_.classList.remove("post-highlight"),2000)}};return q`
                                <a href=${`#msg-${P}`} class="post-msg-pill-link" onClick=${o}>
                                    <${Y2}
                                        prefix="post"
                                        label=${"msg:"+P}
                                        title=${"Message "+P}
                                        icon="message"
                                        onClick=${o}
                                    />
                                </a>
                            `})}
                        ${U_.map((P)=>{let o=P.split("/").pop()||P;return q`
                                <${Y2}
                                    prefix="post"
                                    label=${o}
                                    title=${P}
                                    onClick=${()=>I?.(P)}
                                />
                            `})}
                        ${N0.map((P)=>q`
                            <${Y5}
                                key=${P.id}
                                attachment=${P}
                                onPreview=${T_}
                            />
                        `)}
                    </div>
                `}
                ${X_&&q`
                    <div 
                        ref=${T}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:_0}}
                        onClick=${(P)=>{if(P.target.classList.contains("hashtag")){P.preventDefault(),P.stopPropagation();let o=P.target.dataset.hashtag;if(o)j?.(o)}else if(P.target.tagName==="IMG")P.preventDefault(),P.stopPropagation(),Q(P.target.src)}}
                    />
                `}
                ${d_.length>0&&q`
                    <div ref=${n0} class="post-adaptive-cards" />
                `}
                ${T0.length>0&&q`
                    <div class="post-adaptive-card-submissions">
                        ${T0.map((P,o)=>{let F_=T4(P);return q`
                                <div key=${`${P.card_id}-${o}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${F_.title}</span>
                                    </div>
                                    ${F_.summary&&q`
                                        <div class="adaptive-card-submission-summary">${F_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${S2(F_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${J_.length>0&&q`
                    ${J_.map((P,o)=>q`
                        <${w3} key=${o} annotations=${P} />
                    `)}
                `}
                ${J0.length>0&&q`
                    <div class="media-preview">
                        ${J0.map(({id:P,mimeType:o})=>{let x_=typeof o==="string"&&o.toLowerCase().startsWith("image/svg")?t0(P):I1(P);return q`
                                <img 
                                    key=${P} 
                                    src=${x_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(h_)=>P_(h_,P)}
                                />
                            `})}
                    </div>
                `}
                ${J0.length>0&&q`
                    ${J0.map(({annotations:P},o)=>q`
                        ${P&&q`<${w3} key=${o} annotations=${P} />`}
                    `)}
                `}
                ${A0.length>0&&q`
                    <div class="file-attachments">
                        ${A0.map((P)=>q`
                            <${z5} key=${P} mediaId=${P} onPreview=${T_} />
                        `)}
                    </div>
                `}
                ${y0.length>0&&q`
                    <div class="resource-links">
                        ${y0.map((P,o)=>q`
                            <div key=${o}>
                                <${G5} block=${P} />
                                <${w3} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&q`
                    <div class="resource-embeds">
                        ${Y0.map((P,o)=>q`
                            <div key=${o}>
                                <${B5} block=${P} />
                                <${w3} annotations=${P.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&q`
                    <div class="link-previews">
                        ${C.link_previews.map((P,o)=>q`
                            <${L5} key=${o} preview=${P} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${u&&q`<${u4} src=${u} onClose=${()=>Q(null)} />`}
        ${A_&&q`
            <${I4}
                mediaId=${A_.mediaId}
                info=${A_.info}
                onClose=${()=>E_(null)}
            />
        `}
    `}function R4({posts:_,hasMore:$,onLoadMore:j,onPostClick:N,onHashtagClick:Z,onMessageRef:K,onScrollToMessage:z,onFileRef:Y,emptyMessage:O,timelineRef:G,agents:V,user:X,onDeletePost:F,reverse:D=!0,removingPostIds:M,searchQuery:x}){let[I,u]=m(!1),Q=y(null),T=typeof IntersectionObserver<"u",C=b(async()=>{if(!j||!$||I)return;u(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{u(!1)}},[$,I,j]),c=b((t)=>{let{scrollTop:j_,scrollHeight:Y_,clientHeight:Z_}=t.target,N_=D?Y_-Z_-j_:j_,z_=Math.max(300,Z_);if(N_<z_)C()},[D,C]);v(()=>{if(!T)return;let t=Q.current,j_=G?.current;if(!t||!j_)return;let Y_=300,Z_=new IntersectionObserver((N_)=>{for(let z_ of N_){if(!z_.isIntersecting)continue;C()}},{root:j_,rootMargin:`${Y_}px 0px ${Y_}px 0px`,threshold:0});return Z_.observe(t),()=>Z_.disconnect()},[T,$,j,G,C]);let p=y(C);if(p.current=C,v(()=>{if(T)return;if(!G?.current)return;let{scrollTop:t,scrollHeight:j_,clientHeight:Y_}=G.current,Z_=D?j_-Y_-t:t,N_=Math.max(300,Y_);if(Z_<N_)p.current?.()},[T,_,$,D,G]),v(()=>{if(!G?.current)return;if(!$||I)return;let{scrollTop:t,scrollHeight:j_,clientHeight:Y_}=G.current,Z_=D?j_-Y_-t:t,N_=Math.max(300,Y_);if(j_<=Y_+1||Z_<N_)p.current?.()},[_,$,I,D,G]),!_)return q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return q`
            <div class="timeline" ref=${G}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${O||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let l=_.slice().sort((t,j_)=>t.id-j_.id),r=(t)=>{let j_=t?.data?.thread_id;if(j_===null||j_===void 0||j_==="")return null;let Y_=Number(j_);return Number.isFinite(Y_)?Y_:null},L_=new Map;for(let t=0;t<l.length;t+=1){let j_=l[t],Y_=Number(j_?.id),Z_=r(j_);if(Z_!==null){let N_=L_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};N_.replyIndexes.push(t),L_.set(Z_,N_)}else if(Number.isFinite(Y_)){let N_=L_.get(Y_)||{anchorIndex:-1,replyIndexes:[]};N_.anchorIndex=t,L_.set(Y_,N_)}}let n=new Map;for(let[t,j_]of L_.entries()){let Y_=new Set;if(j_.anchorIndex>=0)Y_.add(j_.anchorIndex);for(let Z_ of j_.replyIndexes)Y_.add(Z_);n.set(t,Array.from(Y_).sort((Z_,N_)=>Z_-N_))}let Q_=l.map((t,j_)=>{let Y_=r(t);if(Y_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=n.get(Y_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let N_=Z_.indexOf(j_);if(N_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:N_>0,hasThreadNext:N_<Z_.length-1}}),V_=q`<div class="timeline-sentinel" ref=${Q}></div>`;return q`
        <div class="timeline ${D?"reverse":"normal"}" ref=${G} onScroll=${c}>
            <div class="timeline-content">
                ${D?V_:null}
                ${l.map((t,j_)=>{let Y_=Boolean(t.data?.thread_id&&t.data.thread_id!==t.id),Z_=M?.has?.(t.id),N_=Q_[j_]||{};return q`
                    <${m4}
                        key=${t.id}
                        post=${t}
                        isThreadReply=${Y_}
                        isThreadPrev=${N_.hasThreadPrev}
                        isThreadNext=${N_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${x}
                        agentName=${U4(t.data?.agent_id,V||{})}
                        agentAvatarUrl=${H4(t.data?.agent_id,V||{})}
                        userName=${X?.name||X?.user_name}
                        userAvatarUrl=${X?.avatar_url||X?.avatarUrl||X?.avatar}
                        userAvatarBackground=${X?.avatar_background||X?.avatarBackground}
                        onClick=${()=>N?.(t)}
                        onHashtagClick=${Z}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${Y}
                        onDelete=${F}
                    />
                `})}
                ${D?null:V_}
            </div>
        </div>
    `}class v4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let N of this.extensions.values()){if(N.placement!=="tabs")continue;if(!N.canHandle)continue;try{let Z=N.canHandle(_);if(Z===!1||Z===0)continue;let K=Z===!0?0:typeof Z==="number"?Z:0;if(K>j)j=K,$=N}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${N.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var j0=new v4;var A3=null,H$=null;function c4(){if(H$)return Promise.resolve(H$);if(!A3)A3=import("/static/dist/editor.bundle.js").then((_)=>{return H$=_,_}).catch((_)=>{throw A3=null,_});return A3}class g4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await c4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var F$={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new g4(_,$)}};function y$(){c4().catch(()=>{})}var k5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},C5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},b3=null,D$=null;function w5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function A5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,N=(Z,K)=>{let z=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!w5(z))return $(Z,K);if(Z instanceof Request)return $(new Request(j,Z));return $(j,K)};globalThis.fetch=N;try{return await _()}finally{globalThis.fetch=$}}async function b5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!b3)b3=A5(()=>Promise.resolve($.init?.())).catch((j)=>{throw b3=null,j});return await b3,$}async function P5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!D$)D$=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await D$}async function S5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function M5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function f5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function B2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function x5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function h4(){let _=f5(),$=_?C5:k5,j=B2("--bg-primary",_?"#000000":"#ffffff"),N=B2("--text-primary",_?"#e7e9ea":"#0f1419"),Z=B2("--text-secondary",_?"#71767b":"#536471"),K=B2("--accent-color","#1d9bf0"),z=B2("--danger-color",_?"#ff7b72":"#cf222e"),Y=B2("--success-color",_?"#7ee787":"#1a7f37"),O=B2("--bg-hover",_?"#1d1f23":"#e8ebed"),G=B2("--border-color",_?"#2f3336":"#eff3f4"),V=B2("--accent-soft-strong",x5(K,_?"47":"33"));return{background:j,foreground:N,cursor:K,cursorAccent:j,selectionBackground:V,selectionForeground:N,black:O,red:z,green:Y,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:N,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class p4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.resize()})}async bootstrapGhostty(){try{let _=await b5();if(await P5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:h4()}),N=null;if(typeof _.FitAddon==="function")N=new _.FitAddon,j.loadAddon?.(N);await j.open($),this.syncHostLayout(),j.loadFonts?.(),N?.observeResize?.(),this.terminal=j,this.fitAddon=N,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=h4(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let N=this.bodyEl.querySelector(".terminal-live-host");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),N=()=>_();if(j?.addEventListener)j.addEventListener("change",N);else if(j?.addListener)j.addListener(N);this.mediaQuery=j,this.mediaQueryListener=N;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>this.scheduleResize());j.observe(this.container),j.observe(this.bodyEl),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await S5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(M5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((N)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:N}))}),_.onResize?.(({cols:N,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:N,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(N)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(N.data))}catch{Z={type:"output",data:String(N.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var E$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new p4(_,$)}};function H2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function T5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let N=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=N?.[1]||j,K=N?.[2]||"",z=N?.[3]||"",Y=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${Y?`${Y}/`:""}${Z}`,V=[];for(let F of G.split("/")){if(!F||F===".")continue;if(F===".."){if(V.length>0)V.pop();continue}V.push(F)}let X=V.join("/");return`${Z$(X)}${K}${z}`}function a2(_){return _?.preview||null}function I5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),N=j>=0?$.slice(j+1):$,Z=N.lastIndexOf(".");if(Z<=0||Z===N.length-1)return"none";return N.slice(Z+1)}function u5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function m5(_,$){let j=$?.path||_?.path||"",N=[];if($?.content_type)N.push(`<span><strong>type:</strong> ${H2($.content_type)}</span>`);if(typeof $?.size==="number")N.push(`<span><strong>size:</strong> ${H2(R0($.size))}</span>`);if($?.mtime)N.push(`<span><strong>modified:</strong> ${H2(S2($.mtime))}</span>`);if(N.push(`<span><strong>kind:</strong> ${H2(u5($))}</span>`),N.push(`<span><strong>extension:</strong> ${H2(I5(j))}</span>`),j)N.push(`<span><strong>path:</strong> ${H2(j)}</span>`);if($?.truncated)N.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${N.join("")}</div>`}function R5(_){let $=a2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=m5(_,$);if($.kind==="image"){let N=$.url||($.path?Z$($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${H2(N)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let N=f0($.text||"",null,{rewriteImageSrc:(Z)=>T5(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${N}</div>`}return`${j}<pre class="workspace-preview-text"><code>${H2($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class k${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=R5(this.context)}getContent(){let _=a2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=a2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var C$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=a2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new k$(_,$)}},w$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return a2(_)||_?.path?1:!1},mount(_,$){return new k$(_,$)}};class i4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((N)=>N!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let N=this.tabs.get(_);if(!N)return;if(this.tabs.delete(_),N.id=$,N.path=$,N.label=j||$.split("/").pop()||$,this.tabs.set($,N),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((N)=>N.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var f_=new i4;var P3="workspaceExplorerScale",v5=["compact","default","comfortable"],c5=new Set(v5),g5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function n4(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return c5.has(j)?j:$}function A$(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),N=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||N&&j}}function h5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function p5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function b$(_={}){let $=h5(_),j=_.stored?n4(_.stored,$):$;return p5(j,_)}function l4(_){return g5[n4(_)]}var i5=60000,s4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function a4(_,$,j,N=0,Z=[]){if(!j&&s4(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:N}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)a4(K,$,j,N+1,Z);return Z}function o4(_,$,j){if(!_)return"";let N=[],Z=(K)=>{if(!j&&s4(K))return;if(N.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)Z(z)};return Z(_),N.join("|")}function f$(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,N=Array.isArray($.children)?$.children:null;if(!N)return _;let Z=j?new Map(j.map((Y)=>[Y?.path,Y])):new Map,K=!j||j.length!==N.length,z=N.map((Y)=>{let O=f$(Z.get(Y.path),Y);if(O!==Z.get(Y.path))K=!0;return O});return K?{...$,children:z}:_}function S$(_,$,j){if(!_)return _;if(_.path===$)return f$(_,j);if(!Array.isArray(_.children))return _;let N=!1,Z=_.children.map((K)=>{let z=S$(K,$,j);if(z!==K)N=!0;return z});return N?{..._,children:Z}:_}var t4=4,P$=14,n5=8,l5=16;function e4(_){if(!_)return 0;if(_.type==="file"){let N=Math.max(0,Number(_.size)||0);return _.__bytes=N,N}let $=Array.isArray(_.children)?_.children:[],j=0;for(let N of $)j+=e4(N);return _.__bytes=j,j}function _8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),N={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=t4)return N;let Z=Array.isArray(_.children)?_.children:[],K=[];for(let Y of Z){let O=Math.max(0,Number(Y?.__bytes??Y?.size??0));if(O<=0)continue;if(Y.type==="dir")K.push({kind:"dir",node:Y,size:O});else K.push({kind:"file",name:Y.name,path:Y.path,size:O})}K.sort((Y,O)=>O.size-Y.size);let z=K;if(K.length>P$){let Y=K.slice(0,P$-1),O=K.slice(P$-1),G=O.reduce((V,X)=>V+X.size,0);Y.push({kind:"other",name:`+${O.length} more`,path:`${N.path}/[other]`,size:G}),z=Y}return N.children=z.map((Y)=>{if(Y.kind==="dir")return _8(Y.node,$+1);return{name:Y.name,path:Y.path,size:Y.size,children:[]}}),N}function r4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function $8(_,$,j){let N=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${N.toFixed(1)} ${Z}% ${K}%)`}function S3(_,$,j,N){return{x:_+j*Math.cos(N),y:$+j*Math.sin(N)}}function x$(_,$,j,N,Z,K){let z=Math.PI*2-0.0001,Y=K-Z>z?Z+z:K,O=S3(_,$,N,Z),G=S3(_,$,N,Y),V=S3(_,$,j,Y),X=S3(_,$,j,Z),F=Y-Z>Math.PI?1:0;return[`M ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${N} ${N} 0 ${F} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var j8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function N8(_,$,j){let N=[],Z=[],K=Math.max(0,Number($)||0),z=(Y,O,G,V)=>{let X=Array.isArray(Y?.children)?Y.children:[];if(!X.length)return;let F=Math.max(0,Number(Y.size)||0);if(F<=0)return;let D=G-O,M=O;X.forEach((x,I)=>{let u=Math.max(0,Number(x.size)||0);if(u<=0)return;let Q=u/F,T=M,C=I===X.length-1?G:M+D*Q;if(M=C,C-T<0.003)return;let c=j8[V];if(c){let p=$8(T,V,j);if(N.push({key:x.path,path:x.path,label:x.name,size:u,color:p,depth:V,startAngle:T,endAngle:C,innerRadius:c[0],outerRadius:c[1],d:x$(120,120,c[0],c[1],T,C)}),V===1)Z.push({key:x.path,name:x.name,size:u,pct:K>0?u/K*100:0,color:p})}if(V<t4)z(x,T,C,V+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:N,legend:Z}}function M$(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let N of j){let Z=M$(N,$);if(Z)return Z}return null}function Z8(_,$,j,N){if(!j||j<=0)return{segments:[],legend:[]};let Z=j8[1];if(!Z)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,Y=$8(K,1,N),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:Y,depth:1,startAngle:K,endAngle:z,innerRadius:Z[0],outerRadius:Z[1],d:x$(120,120,Z[0],Z[1],K,z)}],legend:[{key:G,name:_,size:j,pct:100,color:Y}]}}function d4(_,$=!1,j=!1){if(!_)return null;let N=e4(_),Z=_8(_,0),K=Z.size||N,{segments:z,legend:Y}=N8(Z,K,j);if(!z.length&&K>0){let O=Z8("[files]",Z.path,K,j);z=O.segments,Y=O.legend}return{root:Z,totalSize:K,segments:z,legend:Y,truncated:$,isDarkTheme:j}}function o5({payload:_}){if(!_)return null;let[$,j]=m(null),[N,Z]=m(_?.root?.path||"."),[K,z]=m(()=>[_?.root?.path||"."]),[Y,O]=m(!1);v(()=>{let n=_?.root?.path||".";Z(n),z([n]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!N)return;O(!0);let n=setTimeout(()=>O(!1),180);return()=>clearTimeout(n)},[N]);let G=g_(()=>{return M$(_.root,N)||_.root},[_?.root,N]),V=G?.size||_.totalSize||0,{segments:X,legend:F}=g_(()=>{let n=N8(G,V,_.isDarkTheme);if(n.segments.length>0)return n;if(V<=0)return n;let Q_=G?.children?.length?"Total":"[files]";return Z8(Q_,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[D,M]=m(X),x=y(new Map),I=y(0);v(()=>{let n=x.current,Q_=new Map(X.map((Y_)=>[Y_.key,Y_])),V_=performance.now(),t=220,j_=(Y_)=>{let Z_=Math.min(1,(Y_-V_)/220),N_=Z_*(2-Z_),z_=X.map((y_)=>{let W_=n.get(y_.key)||{startAngle:y_.startAngle,endAngle:y_.startAngle,innerRadius:y_.innerRadius,outerRadius:y_.innerRadius},U_=(q_,K_)=>q_+(K_-q_)*N_,z0=U_(W_.startAngle,y_.startAngle),B_=U_(W_.endAngle,y_.endAngle),W0=U_(W_.innerRadius,y_.innerRadius),H_=U_(W_.outerRadius,y_.outerRadius);return{...y_,d:x$(120,120,W0,H_,z0,B_)}});if(M(z_),Z_<1)I.current=requestAnimationFrame(j_)};if(I.current)cancelAnimationFrame(I.current);return I.current=requestAnimationFrame(j_),x.current=Q_,()=>{if(I.current)cancelAnimationFrame(I.current)}},[X]);let u=D.length?D:X,Q=V>0?R0(V):"0 B",T=G?.name||"",c=(T&&T!=="."?T:"Total")||"Total",p=Q,l=K.length>1,r=(n)=>{if(!n?.path)return;let Q_=M$(_.root,n.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((V_)=>[...V_,Q_.path]),Z(Q_.path),j(null)},L_=()=>{if(!l)return;z((n)=>{let Q_=n.slice(0,-1);return Z(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),j(null)};return q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${Y?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${u.length}
                data-base-size=${V}>
                ${u.map((n)=>q`
                    <path
                        key=${n.key}
                        d=${n.d}
                        fill=${n.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===n.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(n)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(n)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>r(n)}
                    >
                        <title>${n.label} — ${R0(n.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${l?" is-drill":""}`}
                    onClick=${L_}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${c}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${p}</text>
                </g>
            </svg>
            ${F.length>0&&q`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((n)=>q`
                        <div key=${n.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${n.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${n.name}>${n.name}</span>
                            <span class="workspace-folder-starburst-size">${R0(n.size)}</span>
                            <span class="workspace-folder-starburst-pct">${n.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function r5({mediaId:_}){let[$,j]=m(null);if(v(()=>{if(!_)return;o2(_).then(j).catch(()=>{})},[_]),!$)return null;let N=$.filename||"file",Z=$.metadata?.size?R0($.metadata.size):"";return q`
        <a href=${t0(_)} download=${N} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${N}</span>
                ${Z&&q`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function K8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:N}){let[Z,K]=m(null),[z,Y]=m(new Set(["."])),[O,G]=m(null),[V,X]=m(null),[F,D]=m(""),[M,x]=m(null),[I,u]=m(null),[Q,T]=m(!0),[C,c]=m(!1),[p,l]=m(null),[r,L_]=m(()=>m2("workspaceShowHidden",!1)),[n,Q_]=m(!1),[V_,t]=m(null),[j_,Y_]=m(null),[Z_,N_]=m(null),[z_,y_]=m(!1),[$_,W_]=m(null),[U_,z0]=m(()=>r4()),[B_,W0]=m(()=>b$({stored:m0(P3),...A$()})),H_=y(z),q_=y(""),K_=y(null),D_=y(0),C_=y(new Set),O_=y(null),X_=y(new Map),w_=y(_),_0=y(N),P_=y(null),A_=y(null),E_=y(null),T_=y(null),X0=y(null),q0=y(null),o_=y("."),S_=y(null),M_=y({path:null,dragging:!1,startX:0,startY:0}),y0=y({path:null,dragging:!1,startX:0,startY:0}),Y0=y({path:null,timer:0}),J_=y(!1),r_=y(0),v0=y(new Map),x0=y(null),J0=y(null),A0=y(null),N0=y(null),d_=y(r),T0=y($),n0=y(j??$),P=y(0),o=y(Z_),F_=y(n),x_=y(V_),h_=y(null),O2=y({x:0,y:0}),D0=y(0),G0=y(null),E0=y(O),i_=y(V),Q0=y(null),U0=y(null),b0=y(M);w_.current=_,_0.current=N,v(()=>{H_.current=z},[z]),v(()=>{d_.current=r},[r]),v(()=>{T0.current=$},[$]),v(()=>{n0.current=j??$},[j,$]),v(()=>{o.current=Z_},[Z_]),v(()=>{if(typeof window>"u")return;let L=()=>{W0(b$({stored:m0(P3),...A$()}))};L();let U=()=>L(),E=()=>L(),k=(h)=>{if(!h||h.key===null||h.key===P3)L()};window.addEventListener("resize",U),window.addEventListener("focus",E),window.addEventListener("storage",k);let R=window.matchMedia?.("(pointer: coarse)"),d=window.matchMedia?.("(hover: none)"),a=(h,__)=>{if(!h)return;if(h.addEventListener)h.addEventListener("change",__);else if(h.addListener)h.addListener(__)},s=(h,__)=>{if(!h)return;if(h.removeEventListener)h.removeEventListener("change",__);else if(h.removeListener)h.removeListener(__)};return a(R,U),a(d,U),()=>{window.removeEventListener("resize",U),window.removeEventListener("focus",E),window.removeEventListener("storage",k),s(R,U),s(d,U)}},[]),v(()=>{let L=(U)=>{let E=U?.detail?.path;if(!E)return;let k=E.split("/"),R=[];for(let d=1;d<k.length;d++)R.push(k.slice(0,d).join("/"));if(R.length)Y((d)=>{let a=new Set(d);a.add(".");for(let s of R)a.add(s);return a});G(E),requestAnimationFrame(()=>{let d=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(d)d.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),v(()=>{F_.current=n},[n]),v(()=>{x_.current=V_},[V_]),v(()=>{E0.current=O},[O]),v(()=>{i_.current=V},[V]),v(()=>{b0.current=M},[M]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>z0(r4());L();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>L();if(U?.addEventListener)U.addEventListener("change",E);else if(U?.addListener)U.addListener(E);let k=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",E);else if(U?.removeListener)U.removeListener(E);k?.disconnect()}},[]),v(()=>{if(!V)return;let L=X0.current;if(!L)return;let U=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(U)},[V]);let L2=async(L)=>{c(!0),x(null),u(null);try{let U=await R1(L,20000);x(U)}catch(U){x({error:U.message||"Failed to load preview"})}finally{c(!1)}};P_.current=L2;let F2=async()=>{if(!T0.current)return;try{let L=await X3("",1,d_.current),U=o4(L.root,H_.current,d_.current);if(U===q_.current){T(!1);return}if(q_.current=U,K_.current=L.root,!D_.current)D_.current=requestAnimationFrame(()=>{D_.current=0,K((E)=>f$(E,K_.current)),T(!1)})}catch(L){l(L.message||"Failed to load workspace"),T(!1)}},g2=async(L)=>{if(!L)return;if(C_.current.has(L))return;C_.current.add(L);try{let U=await X3(L,1,d_.current);K((E)=>S$(E,L,U.root))}catch(U){l(U.message||"Failed to load workspace")}finally{C_.current.delete(L)}};A_.current=g2;let Z0=b(()=>{let L=O;if(!L)return".";let U=X_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let E=L.split("/");return E.pop(),E.join("/")||"."},[O]),c0=b((L)=>{let U=L?.closest?.(".workspace-row");if(!U)return null;let E=U.dataset.path,k=U.dataset.type;if(!E)return null;if(k==="dir")return E;if(E.includes("/")){let R=E.split("/");return R.pop(),R.join("/")||"."}return"."},[]),g0=b((L)=>{return c0(L?.target||null)},[c0]),B0=b((L)=>{o.current=L,N_(L)},[]),n_=b(()=>{let L=Y0.current;if(L?.timer)clearTimeout(L.timer);Y0.current={path:null,timer:0}},[]),s_=b((L)=>{if(!L||L==="."){n_();return}let U=X_.current?.get(L);if(!U||U.type!=="dir"){n_();return}if(H_.current?.has(L)){n_();return}if(Y0.current?.path===L)return;n_();let E=setTimeout(()=>{Y0.current={path:null,timer:0},A_.current?.(L),Y((k)=>{let R=new Set(k);return R.add(L),R})},600);Y0.current={path:L,timer:E}},[n_]),l0=b((L,U)=>{if(O2.current={x:L,y:U},D0.current)return;D0.current=requestAnimationFrame(()=>{D0.current=0;let E=h_.current;if(!E)return;let k=O2.current;E.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),k0=b((L)=>{if(!L)return;let E=(X_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!E)return;Y_({path:L,label:E})},[]),O0=b(()=>{if(Y_(null),D0.current)cancelAnimationFrame(D0.current),D0.current=0;if(h_.current)h_.current.style.transform="translate(-9999px, -9999px)"},[]),P0=b((L)=>{if(!L)return".";let U=X_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let E=L.split("/");return E.pop(),E.join("/")||"."},[]),V0=b(()=>{X(null),D("")},[]),W2=b((L)=>{if(!L)return;let E=(X_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!E||L===".")return;X(L),D(E)},[]),h2=b(async()=>{let L=i_.current;if(!L)return;let U=(F||"").trim();if(!U){V0();return}let E=X_.current?.get(L),k=(E?.name||L.split("/").pop()||L).trim();if(U===k){V0();return}try{let d=(await g1(L,U))?.path||L,a=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(V0(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:d,type:E?.type||"file"}})),E?.type==="dir")Y((s)=>{let h=new Set;for(let __ of s)if(__===L)h.add(d);else if(__.startsWith(`${L}/`))h.add(`${d}${__.slice(L.length)}`);else h.add(__);return h});if(G(d),E?.type==="dir")x(null),c(!1),u(null);else P_.current?.(d);A_.current?.(a)}catch(R){l(R?.message||"Failed to rename file")}},[V0,F]),e0=b(async(L)=>{let k=L||".";for(let R=0;R<50;R+=1){let a=`untitled${R===0?"":`-${R}`}.md`;try{let h=(await c1(k,a,""))?.path||(k==="."?a:`${k}/${a}`);if(k&&k!==".")Y((__)=>new Set([...__,k]));G(h),l(null),A_.current?.(k),P_.current?.(h);return}catch(s){if(s?.status===409||s?.code==="file_exists")continue;l(s?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),y2=b((L)=>{if(L?.stopPropagation?.(),z_)return;let U=P0(E0.current);e0(U)},[z_,P0,e0]);v(()=>{if(typeof window>"u")return;let L=(U)=>{let E=U?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;K((s)=>{let h=s;for(let __ of E){if(!__?.root)continue;if(!h||__.path==="."||!__.path)h=__.root;else h=S$(h,__.path,__.root)}if(h)q_.current=o4(h,H_.current,d_.current);return T(!1),h});let k=E0.current;if(Boolean(k)&&E.some((s)=>{let h=s?.path||"";if(!h||h===".")return!0;return k===h||k.startsWith(`${h}/`)||h.startsWith(`${k}/`)}))v0.current.clear();if(!k||!b0.current)return;let d=X_.current?.get(k);if(d&&d.type==="dir")return;if(E.some((s)=>{let h=s?.path||"";if(!h||h===".")return!0;return k===h||k.startsWith(`${h}/`)}))P_.current?.(k)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),O_.current=F2;let D2=y(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=n0.current??T0.current,E=document.visibilityState!=="hidden"&&(U||L.matches&&T0.current);V3(E,d_.current).catch(()=>{})}).current,C0=y(0),o0=y(()=>{if(C0.current)clearTimeout(C0.current);C0.current=setTimeout(()=>{C0.current=0,D2()},250)}).current;v(()=>{if(T0.current)O_.current?.();o0()},[$,j]),v(()=>{O_.current(),D2();let L=setInterval(()=>O_.current(),i5),U=R2("previewHeight",null),E=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(r_.current=E,E_.current)E_.current.style.setProperty("--preview-height",`${E}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),R=()=>o0();if(k.addEventListener)k.addEventListener("change",R);else if(k.addListener)k.addListener(R);return document.addEventListener("visibilitychange",R),()=>{if(clearInterval(L),D_.current)cancelAnimationFrame(D_.current),D_.current=0;if(k.removeEventListener)k.removeEventListener("change",R);else if(k.removeListener)k.removeListener(R);if(document.removeEventListener("visibilitychange",R),C0.current)clearTimeout(C0.current),C0.current=0;if(S_.current)clearTimeout(S_.current),S_.current=null;V3(!1,d_.current).catch(()=>{})}},[]);let w0=g_(()=>a4(Z,z,r),[Z,z,r]),E2=g_(()=>new Map(w0.map((L)=>[L.node.path,L.node])),[w0]),k2=g_(()=>l4(B_),[B_]);X_.current=E2;let v_=(O?X_.current.get(O):null)?.type==="dir";v(()=>{if(!O||!v_){W_(null),x0.current=null,J0.current=null;return}let L=O,U=`${r?"hidden":"visible"}:${O}`,E=v0.current,k=E.get(U);if(k?.root){E.delete(U),E.set(U,k);let a=d4(k.root,Boolean(k.truncated),U_);if(a)x0.current=a,J0.current=O,W_({loading:!1,error:null,payload:a});return}let R=x0.current,d=J0.current;W_({loading:!0,error:null,payload:d===O?R:null}),X3(O,n5,r).then((a)=>{if(E0.current!==L)return;let s={root:a?.root,truncated:Boolean(a?.truncated)};E.delete(U),E.set(U,s);while(E.size>l5){let __=E.keys().next().value;if(!__)break;E.delete(__)}let h=d4(s.root,s.truncated,U_);x0.current=h,J0.current=O,W_({loading:!1,error:null,payload:h})}).catch((a)=>{if(E0.current!==L)return;W_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:d===O?R:null})})},[O,v_,r,U_]);let I0=Boolean(M&&M.kind==="text"&&!v_&&(!M.size||M.size<=262144)),_2=I0?"Open in editor":M?.size>262144?"File too large to edit":"File is not editable";v(()=>{let L=A0.current;if(N0.current)N0.current.dispose(),N0.current=null;if(!L)return;if(L.innerHTML="",!O||v_||!M||M.error)return;let U={path:O,content:typeof M.text==="string"?M.text:void 0,mtime:M.mtime,size:M.size,preview:M,mode:"view"},E=j0.resolve(U)||j0.get("workspace-preview-default");if(!E)return;let k=E.mount(L,U);return N0.current=k,()=>{if(N0.current===k)k.dispose(),N0.current=null;L.innerHTML=""}},[O,v_,M]);let h0=(L)=>{let U=L?.target;if(U instanceof Element)return U;return U?.parentElement||null},$2=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},X2=y((L)=>{if(U0.current)clearTimeout(U0.current),U0.current=null;let E=h0(L)?.closest?.("[data-path]");if(!E)return;let k=E.dataset.path;if(E.dataset.type==="dir"||!k)return;if(i_.current===k)V0();_0.current?.(k)}).current,C2=y((L)=>{if(J_.current){J_.current=!1;return}let U=h0(L),E=U?.closest?.("[data-path]");if(T_.current?.focus?.(),!E)return;let k=E.dataset.path,R=E.dataset.type,d=Boolean(U?.closest?.(".workspace-caret")),a=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),s=E0.current===k,h=i_.current;if(h){if(h===k)return;V0()}let __=R==="file"&&Q0.current===k&&!d&&!a;if(s&&!d&&!a&&k!=="."&&!__){if(U0.current)clearTimeout(U0.current);U0.current=setTimeout(()=>{U0.current=null,W2(k)},350);return}if(R==="dir"){if(Q0.current=null,G(k),x(null),u(null),c(!1),!H_.current.has(k))A_.current?.(k);if(s&&!d)return;Y((Z2)=>{let i0=new Set(Z2);if(i0.has(k))i0.delete(k);else i0.add(k);return i0})}else{Q0.current=null,G(k);let F0=X_.current.get(k);if(F0)w_.current?.(F0.path,F0);P_.current?.(k)}}).current,r0=y(()=>{q_.current="",O_.current(),Array.from(H_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>A_.current?.(U))}).current,L0=y(()=>{Q0.current=null,G(null),x(null),u(null),c(!1)}).current,J=y(()=>{L_((L)=>{let U=!L;if(typeof window<"u")R_("workspaceShowHidden",String(U));return d_.current=U,V3(!0,U).catch(()=>{}),q_.current="",O_.current?.(),Array.from(H_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>A_.current?.(k)),U})}).current,f=y((L)=>{if(h0(L)?.closest?.("[data-path]"))return;L0()}).current,i=b(async(L)=>{if(!L)return;let U=L.split("/").pop()||L;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await p1(L);let k=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(E0.current===L)L0();A_.current?.(k),l(null)}catch(k){x((R)=>({...R||{},error:k.message||"Failed to delete file"}))}},[L0]),G_=b((L)=>{let U=T_.current;if(!U||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),b_=b((L)=>{let U=w0;if(!U||U.length===0)return;let E=O?U.findIndex((k)=>k.node.path===O):-1;if(L.key==="ArrowDown"){L.preventDefault();let k=Math.min(E+1,U.length-1),R=U[k];if(!R)return;if(G(R.node.path),R.node.type!=="dir")w_.current?.(R.node.path,R.node),P_.current?.(R.node.path);else x(null),c(!1),u(null);G_(R.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let k=E<=0?0:E-1,R=U[k];if(!R)return;if(G(R.node.path),R.node.type!=="dir")w_.current?.(R.node.path,R.node),P_.current?.(R.node.path);else x(null),c(!1),u(null);G_(R.node.path);return}if(L.key==="ArrowRight"&&E>=0){let k=U[E];if(k?.node?.type==="dir"&&!z.has(k.node.path))L.preventDefault(),A_.current?.(k.node.path),Y((R)=>new Set([...R,k.node.path]));return}if(L.key==="ArrowLeft"&&E>=0){let k=U[E];if(k?.node?.type==="dir"&&z.has(k.node.path))L.preventDefault(),Y((R)=>{let d=new Set(R);return d.delete(k.node.path),d});return}if(L.key==="Enter"&&E>=0){L.preventDefault();let k=U[E];if(!k)return;let R=k.node.path;if(k.node.type==="dir"){if(!H_.current.has(R))A_.current?.(R);Y((a)=>{let s=new Set(a);if(s.has(R))s.delete(R);else s.add(R);return s}),x(null),u(null),c(!1)}else w_.current?.(R,k.node),P_.current?.(R);return}if((L.key==="Delete"||L.key==="Backspace")&&E>=0){let k=U[E];if(!k||k.node.type==="dir")return;L.preventDefault(),i(k.node.path);return}if(L.key==="Escape")L.preventDefault(),L0()},[L0,i,z,w0,G_,O]),p_=b((L)=>{let U=h0(L),E=U?.closest?.(".workspace-row");if(!E)return;let k=E.dataset.type,R=E.dataset.path;if(!R||R===".")return;if(i_.current===R)return;let d=L?.touches?.[0];if(!d)return;if(M_.current={path:$2(U)?R:null,dragging:!1,startX:d.clientX,startY:d.clientY},k!=="file")return;if(S_.current)clearTimeout(S_.current);S_.current=setTimeout(()=>{if(S_.current=null,M_.current?.dragging)return;i(R)},600)},[i]),I_=b(()=>{if(S_.current)clearTimeout(S_.current),S_.current=null;let L=M_.current;if(L?.dragging&&L.path){let U=o.current||Z0(),E=G0.current;if(typeof E==="function")E(L.path,U)}M_.current={path:null,dragging:!1,startX:0,startY:0},P.current=0,Q_(!1),t(null),B0(null),n_(),O0()},[Z0,O0,B0,n_]),S0=b((L)=>{let U=M_.current,E=L?.touches?.[0];if(!E||!U?.path){if(S_.current)clearTimeout(S_.current),S_.current=null;return}let k=Math.abs(E.clientX-U.startX),R=Math.abs(E.clientY-U.startY),d=k>8||R>8;if(d&&S_.current)clearTimeout(S_.current),S_.current=null;if(!U.dragging&&d)U.dragging=!0,Q_(!0),t("move"),k0(U.path);if(U.dragging){L.preventDefault(),l0(E.clientX,E.clientY);let a=document.elementFromPoint(E.clientX,E.clientY),s=c0(a)||Z0();if(o.current!==s)B0(s);s_(s)}},[c0,Z0,k0,l0,B0,s_]),j2=y((L)=>{L.preventDefault();let U=E_.current;if(!U)return;let E=L.clientY,k=r_.current||280,R=L.currentTarget;R.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let d=E,a=(h)=>{d=h.clientY;let __=U.clientHeight-80,F0=Math.min(Math.max(k-(h.clientY-E),80),__);U.style.setProperty("--preview-height",`${F0}px`),r_.current=F0},s=()=>{let h=U.clientHeight-80,__=Math.min(Math.max(k-(d-E),80),h);r_.current=__,R.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",R_("previewHeight",String(Math.round(__))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",s)}).current,l_=y((L)=>{L.preventDefault();let U=E_.current;if(!U)return;let E=L.touches[0];if(!E)return;let k=E.clientY,R=r_.current||280,d=L.currentTarget;d.classList.add("dragging"),document.body.style.userSelect="none";let a=(h)=>{let __=h.touches[0];if(!__)return;h.preventDefault();let F0=U.clientHeight-80,Z2=Math.min(Math.max(R-(__.clientY-k),80),F0);U.style.setProperty("--preview-height",`${Z2}px`),r_.current=Z2},s=()=>{d.classList.remove("dragging"),document.body.style.userSelect="",R_("previewHeight",String(Math.round(r_.current||R))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",s),document.removeEventListener("touchcancel",s)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",s),document.addEventListener("touchcancel",s)}).current,V2=async()=>{if(!O)return;try{let L=await v1(O);if(L.media_id)u(L.media_id)}catch(L){x((U)=>({...U||{},error:L.message||"Failed to attach"}))}},w2=async()=>{if(!O||v_)return;await i(O)},d0=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},p0=b((L)=>{if(!d0(L))return;if(L.preventDefault(),P.current+=1,!F_.current)Q_(!0);t("upload");let U=g0(L)||Z0();B0(U),s_(U)},[Z0,g0,B0,s_]),q2=b((L)=>{if(!d0(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!F_.current)Q_(!0);if(x_.current!=="upload")t("upload");let U=g0(L)||Z0();if(o.current!==U)B0(U);s_(U)},[Z0,g0,B0,s_]),H0=b((L)=>{if(!d0(L))return;if(L.preventDefault(),P.current=Math.max(0,P.current-1),P.current===0)Q_(!1),t(null),B0(null),n_()},[B0,n_]),$0=b(async(L,U=".")=>{let E=Array.from(L||[]);if(E.length===0)return;let k=U&&U!==""?U:".",R=k!=="."?k:"workspace root";y_(!0);try{let d=null;for(let a of E)try{d=await N$(a,k)}catch(s){let h=s?.status,__=s?.code;if(h===409||__==="file_exists"){let F0=a?.name||"file";if(!window.confirm(`"${F0}" already exists in ${R}. Overwrite?`))continue;d=await N$(a,k,{overwrite:!0})}else throw s}if(d?.path)Q0.current=d.path,G(d.path),P_.current?.(d.path);A_.current?.(k)}catch(d){l(d.message||"Failed to upload file")}finally{y_(!1)}},[]),u0=b(async(L,U)=>{if(!L)return;let E=X_.current?.get(L);if(!E)return;let k=U&&U!==""?U:".",R=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(k===R)return;try{let a=(await h1(L,k))?.path||L;if(E.type==="dir")Y((s)=>{let h=new Set;for(let __ of s)if(__===L)h.add(a);else if(__.startsWith(`${L}/`))h.add(`${a}${__.slice(L.length)}`);else h.add(__);return h});if(G(a),E.type==="dir")x(null),c(!1),u(null);else P_.current?.(a);A_.current?.(R),A_.current?.(k)}catch(d){l(d?.message||"Failed to move entry")}},[]);G0.current=u0;let J2=b(async(L)=>{if(!d0(L))return;L.preventDefault(),P.current=0,Q_(!1),t(null),N_(null),n_();let U=Array.from(L?.dataTransfer?.files||[]);if(U.length===0)return;let E=o.current||g0(L)||Z0();await $0(U,E)},[Z0,g0,$0]),x2=b((L)=>{if(L?.stopPropagation?.(),z_)return;let U=L?.currentTarget?.dataset?.uploadTarget||".";o_.current=U,q0.current?.click()},[z_]),K0=b(()=>{if(z_)return;let L=E0.current,U=L?X_.current?.get(L):null;o_.current=U?.type==="dir"?U.path:".",q0.current?.click()},[z_]),c_=b((L)=>{if(!L||L.button!==0)return;let U=L.currentTarget;if(!U||!U.dataset)return;let E=U.dataset.path;if(!E||E===".")return;if(i_.current===E)return;let k=h0(L);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!$2(k))return;L.preventDefault(),y0.current={path:E,dragging:!1,startX:L.clientX,startY:L.clientY};let R=(a)=>{let s=y0.current;if(!s?.path)return;let h=Math.abs(a.clientX-s.startX),__=Math.abs(a.clientY-s.startY),F0=h>4||__>4;if(!s.dragging&&F0)s.dragging=!0,J_.current=!0,Q_(!0),t("move"),k0(s.path),l0(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(s.dragging){a.preventDefault(),l0(a.clientX,a.clientY);let Z2=document.elementFromPoint(a.clientX,a.clientY),i0=c0(Z2)||Z0();if(o.current!==i0)B0(i0);s_(i0)}},d=()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",d);let a=y0.current;if(a?.dragging&&a.path){let s=o.current||Z0(),h=G0.current;if(typeof h==="function")h(a.path,s)}y0.current={path:null,dragging:!1,startX:0,startY:0},P.current=0,Q_(!1),t(null),B0(null),n_(),O0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{J_.current=!1},0)};document.addEventListener("mousemove",R),document.addEventListener("mouseup",d)},[c0,Z0,k0,l0,O0,B0,s_,n_]),N2=b(async(L)=>{let U=Array.from(L?.target?.files||[]);if(U.length===0)return;let E=o_.current||".";if(await $0(U,E),o_.current=".",L?.target)L.target.value=""},[$0]);return q`
        <aside
            class=${`workspace-sidebar${n?" workspace-drop-active":""}`}
            data-workspace-scale=${B_}
            ref=${E_}
            onDragEnter=${p0}
            onDragOver=${q2}
            onDragLeave=${H0}
            onDrop=${J2}
        >
            <input type="file" multiple style="display:none" ref=${q0} onChange=${N2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${y2} title="New file" disabled=${z_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${r0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${r?" active":""}`}
                        onClick=${J}
                        title=${r?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!r&&q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${f}>
                ${z_&&q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${Q&&q`<div class="workspace-loading">Loading…</div>`}
                ${p&&q`<div class="workspace-error">${p}</div>`}
                ${Z&&q`
                    <div
                        class="workspace-tree-list"
                        ref=${T_}
                        tabIndex="0"
                        onClick=${C2}
                        onDblClick=${X2}
                        onKeyDown=${b_}
                        onTouchStart=${p_}
                        onTouchEnd=${I_}
                        onTouchMove=${S0}
                        onTouchCancel=${I_}
                    >
                        ${w0.map(({node:L,depth:U})=>{let E=L.type==="dir",k=L.path===O,R=L.path===V,d=E&&z.has(L.path),a=Z_&&L.path===Z_,s=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return q`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${k?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*k2.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${c_}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?d?q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${R?q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${X0}
                                                value=${F}
                                                onInput=${(h)=>D(h?.target?.value||"")}
                                                onKeyDown=${(h)=>{if(h.key==="Enter")h.preventDefault(),h2();else if(h.key==="Escape")h.preventDefault(),V0()}}
                                                onBlur=${V0}
                                                onClick=${(h)=>h.stopPropagation()}
                                            />
                                        `:q`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${E&&!d&&s>0&&q`
                                        <span class="workspace-count">${s}</span>
                                    `}
                                    ${E&&q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${x2}
                                            disabled=${z_}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${O&&q`
                <div class="workspace-preview-splitter-h" onMouseDown=${j2} onTouchStart=${l_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${O}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${y2} title="New file" disabled=${z_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!v_&&q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>I0&&_0.current?.(O,M)}
                                    title=${_2}
                                    disabled=${!I0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${w2}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${v_?q`
                                    <button class="workspace-download" onClick=${K0}
                                        title="Upload files to this folder" disabled=${z_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${i1(O,r)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:q`<button class="workspace-download" onClick=${V2} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&q`<div class="workspace-loading">Loading preview…</div>`}
                    ${M?.error&&q`<div class="workspace-error">${M.error}</div>`}
                    ${v_&&q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${$_?.loading&&q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${$_?.error&&q`<div class="workspace-error">${$_.error}</div>`}
                        ${$_?.payload&&$_.payload.segments?.length>0&&q`
                            <${o5} payload=${$_.payload} />
                        `}
                        ${$_?.payload&&(!$_.payload.segments||$_.payload.segments.length===0)&&q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${M&&!M.error&&!v_&&q`
                        <div class="workspace-preview-body" ref=${A0}></div>
                    `}
                    ${I&&q`
                        <div class="workspace-download-card">
                            <${r5} mediaId=${I} />
                        </div>
                    `}
                </div>
            `}
            ${j_&&q`
                <div class="workspace-drag-ghost" ref=${h_}>${j_.label}</div>
            `}
        </aside>
    `}function z8({tabs:_,activeId:$,onActivate:j,onClose:N,onCloseOthers:Z,onCloseAll:K,onTogglePin:z,onTogglePreview:Y,previewTabs:O,onToggleDock:G,dockVisible:V}){let[X,F]=m(null),D=y(null);v(()=>{if(!X)return;let Q=(T)=>{if(T.type==="keydown"&&T.key!=="Escape")return;F(null)};return document.addEventListener("click",Q),document.addEventListener("keydown",Q),()=>{document.removeEventListener("click",Q),document.removeEventListener("keydown",Q)}},[X]),v(()=>{let Q=(T)=>{if(T.ctrlKey&&T.key==="Tab"){if(T.preventDefault(),!_.length)return;let C=_.findIndex((c)=>c.id===$);if(T.shiftKey){let c=_[(C-1+_.length)%_.length];j?.(c.id)}else{let c=_[(C+1)%_.length];j?.(c.id)}return}if((T.ctrlKey||T.metaKey)&&T.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(T.preventDefault(),$)N?.($)}}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[_,$,j,N]);let M=b((Q,T)=>{if(Q.button===1){Q.preventDefault(),N?.(T);return}if(Q.button===0)j?.(T)},[j,N]),x=b((Q,T)=>{Q.preventDefault(),F({id:T,x:Q.clientX,y:Q.clientY})},[]),I=b((Q)=>{Q.preventDefault(),Q.stopPropagation()},[]),u=b((Q,T)=>{Q.preventDefault(),Q.stopPropagation(),N?.(T)},[N]);if(v(()=>{if(!$||!D.current)return;let Q=D.current.querySelector(".tab-item.active");if(Q)Q.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return q`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((Q)=>q`
                <div
                    key=${Q.id}
                    class=${`tab-item${Q.id===$?" active":""}${Q.dirty?" dirty":""}${Q.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${Q.id===$}
                    title=${Q.path}
                    onMouseDown=${(T)=>M(T,Q.id)}
                    onContextMenu=${(T)=>x(T,Q.id)}
                >
                    ${Q.pinned&&q`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${Q.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${I}
                        onClick=${(T)=>u(T,Q.id)}
                        title=${Q.dirty?"Unsaved changes":"Close"}
                        aria-label=${Q.dirty?"Unsaved changes":`Close ${Q.label}`}
                    >
                        ${Q.dirty?q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${G&&q`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${V?" active":""}`}
                    onClick=${G}
                    title=${`${V?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${V?"Hide":"Show"} terminal`}
                    aria-pressed=${V?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${X&&q`
            <div class="tab-context-menu" style=${{left:X.x+"px",top:X.y+"px"}}>
                <button onClick=${()=>{N?.(X.id),F(null)}}>Close</button>
                <button onClick=${()=>{Z?.(X.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(X.id),F(null)}}>
                    ${_.find((Q)=>Q.id===X.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${Y&&/\.(md|mdx|markdown)$/i.test(X.id)&&q`
                    <hr />
                    <button onClick=${()=>{Y(X.id),F(null)}}>
                        ${O?.has(X.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var d5=400,T$=60,Y8=220,I$="mdPreviewHeight";function s5(){try{let _=localStorage.getItem(I$),$=_?Number(_):NaN;return Number.isFinite($)&&$>=T$?$:Y8}catch{return Y8}}function G8({getContent:_,path:$,onClose:j}){let[N,Z]=m(""),[K,z]=m(s5),Y=y(null),O=y(null),G=y(""),V=y(_);return V.current=_,v(()=>{let D=()=>{let x=V.current?.()||"";if(x===G.current)return;G.current=x;try{let I=f0(x,null,{sanitize:!1});Z(I)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};D();let M=setInterval(D,d5);return()=>clearInterval(M)},[]),v(()=>{if(Y.current&&N)G2(Y.current).catch(()=>{})},[N]),q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let M=D.clientY,x=O.current?.offsetHeight||K,I=O.current?.parentElement,u=I?I.offsetHeight*0.7:500,Q=D.currentTarget;Q.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=(c)=>{let p=Math.min(Math.max(x-(c.clientY-M),T$),u);z(p)},C=()=>{Q.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(I$,String(Math.round(O.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",C)}}
            onTouchStart=${(D)=>{D.preventDefault();let M=D.touches[0];if(!M)return;let x=M.clientY,I=O.current?.offsetHeight||K,u=O.current?.parentElement,Q=u?u.offsetHeight*0.7:500,T=D.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let C=(p)=>{let l=p.touches[0];if(!l)return;p.preventDefault();let r=Math.min(Math.max(I-(l.clientY-x),T$),Q);z(r)},c=()=>{T.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(I$,String(Math.round(O.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${O} style=${{height:K+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${Y}
                dangerouslySetInnerHTML=${{__html:N}}
            />
        </div>
    `}function B8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j}){let N=y(_);N.current=_;let Z=y($);Z.current=$;let K=y(j);K.current=j,v(()=>{K.current();let z=new K$((O,G)=>N.current(O,G),(O)=>Z.current(O));z.connect();let Y=()=>{z.reconnectIfNeeded()};return window.addEventListener("focus",Y),document.addEventListener("visibilitychange",Y),()=>{window.removeEventListener("focus",Y),document.removeEventListener("visibilitychange",Y),z.disconnect()}},[])}function O8(){let[_,$]=m(!1),[j,N]=m("default"),Z=y(!1);v(()=>{let O=m2("notificationsEnabled",!1);if(Z.current=O,$(O),typeof Notification<"u")N(Notification.permission)},[]),v(()=>{Z.current=_},[_]);let K=b(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let O=Notification.requestPermission();if(O&&typeof O.then==="function")return O;return Promise.resolve(O)}catch{return Promise.resolve("default")}},[]),z=b(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){N("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await K();if(N(G||"default"),G!=="granted"){Z.current=!1,$(!1),R_("notificationsEnabled","false");return}}let O=!Z.current;Z.current=O,$(O),R_("notificationsEnabled",String(O))},[K]),Y=b((O,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(O,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:Y}}var t2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function L8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[N,Z]=m(null),[K,z]=m(!1),Y=y(!1),O=y(null),G=y(!1),V=y(null),X=y(null);v(()=>{Y.current=K},[K]),v(()=>{X.current=N},[N]);let F=b(async(x=null)=>{try{if(x){let I=await E1(x,50,0,j);Z(I.posts),z(!1)}else{let I=await L3(10,null,j);Z(I.posts),z(I.has_more)}}catch(I){console.error("Failed to load posts:",I)}},[j]),D=b(async()=>{try{let x=await L3(10,null,j);Z((I)=>{if(!I||I.length===0)return x.posts;return t2([...x.posts,...I])}),z((I)=>I||x.has_more)}catch(x){console.error("Failed to refresh timeline:",x)}},[j]),M=b(async(x={})=>{let I=X.current;if(!I||I.length===0)return;if(G.current)return;let{preserveScroll:u=!0,preserveMode:Q="top",allowRepeat:T=!1}=x,C=(l)=>{if(!u){l();return}if(Q==="top")$(l);else _(l)},p=I.slice().sort((l,r)=>l.id-r.id)[0]?.id;if(!Number.isFinite(p))return;if(!T&&V.current===p)return;G.current=!0,V.current=p;try{let l=await L3(10,p,j);if(l.posts.length>0)C(()=>{Z((r)=>t2([...l.posts,...r||[]])),z(l.has_more)});else z(!1)}catch(l){console.error("Failed to load more posts:",l)}finally{G.current=!1}},[j,_,$]);return v(()=>{O.current=M},[M]),{posts:N,setPosts:Z,hasMore:K,setHasMore:z,hasMoreRef:Y,loadPosts:F,refreshTimeline:D,loadMore:M,loadMoreRef:O,loadingMoreRef:G,lastBeforeIdRef:V}}function W8(){let[_,$]=m(null),[j,N]=m({text:"",totalLines:0}),[Z,K]=m(""),[z,Y]=m({text:"",totalLines:0}),[O,G]=m(null),[V,X]=m(null),[F,D]=m(null),M=y(null),x=y(0),I=y(!1),u=y(""),Q=y(""),T=y(null),C=y(null),c=y(null),p=y(null),l=y(!1),r=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:N,agentPlan:Z,setAgentPlan:K,agentThought:z,setAgentThought:Y,pendingRequest:O,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:X,steerQueuedTurnId:F,setSteerQueuedTurnId:D,lastAgentEventRef:M,lastSilenceNoticeRef:x,isAgentRunningRef:I,draftBufferRef:u,thoughtBufferRef:Q,pendingRequestRef:T,stalledPostIdRef:C,currentTurnIdRef:c,steerQueuedTurnIdRef:p,thoughtExpandedRef:l,draftExpandedRef:r}}function X8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:N}){let Z=y((V)=>{V.preventDefault();let X=_.current;if(!X)return;let F=V.clientX,D=$.current||280,M=V.currentTarget;M.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let x=F,I=(Q)=>{x=Q.clientX;let T=Math.min(Math.max(D+(Q.clientX-F),160),600);X.style.setProperty("--sidebar-width",`${T}px`),$.current=T},u=()=>{let Q=Math.min(Math.max(D+(x-F),160),600);$.current=Q,M.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",R_("sidebarWidth",String(Math.round(Q))),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",u)}).current,K=y((V)=>{V.preventDefault();let X=_.current;if(!X)return;let F=V.touches[0];if(!F)return;let D=F.clientX,M=$.current||280,x=V.currentTarget;x.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let I=(Q)=>{let T=Q.touches[0];if(!T)return;Q.preventDefault();let C=Math.min(Math.max(M+(T.clientX-D),160),600);X.style.setProperty("--sidebar-width",`${C}px`),$.current=C},u=()=>{x.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",R_("sidebarWidth",String(Math.round($.current||M))),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}).current,z=y((V)=>{V.preventDefault();let X=_.current;if(!X)return;let F=V.clientX,D=j.current||$.current||280,M=V.currentTarget;M.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let x=F,I=(Q)=>{x=Q.clientX;let T=Math.min(Math.max(D+(Q.clientX-F),200),800);X.style.setProperty("--editor-width",`${T}px`),j.current=T},u=()=>{let Q=Math.min(Math.max(D+(x-F),200),800);j.current=Q,M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",R_("editorWidth",String(Math.round(Q))),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",u)}).current,Y=y((V)=>{V.preventDefault();let X=_.current;if(!X)return;let F=V.touches[0];if(!F)return;let D=F.clientX,M=j.current||$.current||280,x=V.currentTarget;x.classList.add("dragging"),document.body.style.userSelect="none";let I=(Q)=>{let T=Q.touches[0];if(!T)return;Q.preventDefault();let C=Math.min(Math.max(M+(T.clientX-D),200),800);X.style.setProperty("--editor-width",`${C}px`),j.current=C},u=()=>{x.classList.remove("dragging"),document.body.style.userSelect="",R_("editorWidth",String(Math.round(j.current||M))),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}).current,O=y((V)=>{V.preventDefault();let X=_.current;if(!X)return;let F=V.clientY,D=N?.current||200,M=V.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let x=F,I=(Q)=>{x=Q.clientY;let T=Math.min(Math.max(D-(Q.clientY-F),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${T}px`),N)N.current=T;window.dispatchEvent(new CustomEvent("dock-resize"))},u=()=>{let Q=Math.min(Math.max(D-(x-F),100),window.innerHeight*0.5);if(N)N.current=Q;M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",R_("dockHeight",String(Math.round(Q))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",u)}).current,G=y((V)=>{V.preventDefault();let X=_.current;if(!X)return;let F=V.touches[0];if(!F)return;let D=F.clientY,M=N?.current||200,x=V.currentTarget;x.classList.add("dragging"),document.body.style.userSelect="none";let I=(Q)=>{let T=Q.touches[0];if(!T)return;Q.preventDefault();let C=Math.min(Math.max(M-(T.clientY-D),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${C}px`),N)N.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},u=()=>{x.classList.remove("dragging"),document.body.style.userSelect="",R_("dockHeight",String(Math.round(N?.current||M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:Y,handleDockSplitterMouseDown:O,handleDockSplitterTouchStart:G}}function V8({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,N]=m(()=>f_.getTabs()),[Z,K]=m(()=>f_.getActiveId()),[z,Y]=m(()=>f_.getTabs().length>0);v(()=>{return f_.onChange((C,c)=>{N(C),K(c),Y(C.length>0)})},[]);let[O,G]=m(()=>new Set),V=b((C)=>{G((c)=>{let p=new Set(c);if(p.has(C))p.delete(C);else p.add(C);return p})},[]),X=b((C)=>{G((c)=>{if(!c.has(C))return c;let p=new Set(c);return p.delete(C),p})},[]),F=b((C)=>{if(!C)return;let c={path:C,mode:"edit"};try{if(!j0.resolve(c)){if(!j0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(p){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,p)}f_.open(C)},[]),D=b(()=>{let C=f_.getActiveId();if(C){let c=f_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}f_.close(C),X(C),$.current?.(C)}},[X]),M=b((C)=>{let c=f_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}f_.close(C),X(C),$.current?.(C)},[X]),x=b((C)=>{f_.activate(C)},[]),I=b((C)=>{let c=f_.getTabs().filter((r)=>r.id!==C&&!r.pinned),p=c.filter((r)=>r.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let l=c.map((r)=>r.id);f_.closeOthers(C),l.forEach((r)=>{X(r),$.current?.(r)})},[X]),u=b(()=>{let C=f_.getTabs().filter((l)=>!l.pinned),c=C.filter((l)=>l.dirty).length;if(c>0){if(!window.confirm(`${c} unsaved tab${c>1?"s":""} will be closed. Continue?`))return}let p=C.map((l)=>l.id);f_.closeAll(),p.forEach((l)=>{X(l),$.current?.(l)})},[X]),Q=b((C)=>{f_.togglePin(C)},[]),T=b(()=>{let C=f_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return v(()=>{let C=(c)=>{let{oldPath:p,newPath:l,type:r}=c.detail||{};if(!p||!l)return;if(r==="dir"){for(let L_ of f_.getTabs())if(L_.path===p||L_.path.startsWith(`${p}/`)){let n=`${l}${L_.path.slice(p.length)}`;f_.rename(L_.id,n)}}else f_.rename(p,l)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),v(()=>{let C=(c)=>{if(f_.hasUnsaved())c.preventDefault(),c.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:Z,previewTabs:O,openEditor:F,closeEditor:D,handleTabClose:M,handleTabActivate:x,handleTabCloseOthers:I,handleTabCloseAll:u,handleTabTogglePin:Q,handleTabTogglePreview:V,revealInExplorer:T}}function u$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},N=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[N],K=Number(Z);return Number.isFinite(K)?K:$}catch{return $}}var m$=u$("warning",30000),q8=u$("finalize",120000),R$=u$("refresh",30000),J8=30000;function Q8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function U8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function H8(_=30000){let[,$]=m(0);v(()=>{let j=setInterval(()=>$((N)=>N+1),_);return()=>clearInterval(j)},[_])}function v$(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((N,Z)=>N+Math.max(1,Math.ceil(Z.length/$)),0)}function F8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function M3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function a5(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let N=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(N),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||Z>1||z)}function y8(_,$={}){if(M3($))return null;if(a5($))return{target:"_blank",features:void 0,mode:"tab"};return{target:t5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function D8(_,$,j={}){let N=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(N.searchParams.set("chat_jid",Z),j.chatOnly!==!1)N.searchParams.set("chat_only","1");return N.toString()}function t5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function M2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var g$="piclaw_btw_session";function e5(){let _=m0(g$);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",N=typeof $.answer==="string"?$.answer:"",Z=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:N,thinking:Z,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var _9=k1,E8=w1,$9=b1,k8=x1,C8=T1,w8=P1,c$=typeof a3==="function"?a3:M2("getAgentContext",null),j9=typeof b2==="function"?b2:M2("getAgentModels",{current:null,models:[]}),N9=typeof W3==="function"?W3:M2("getActiveChatAgents",{chats:[]}),Z9=typeof t3==="function"?t3:M2("getAgentQueueState",{count:0}),K9=typeof _$==="function"?_$:M2("steerAgentQueueItem",{removed:!1,queued:"steer"}),z9=typeof e3==="function"?e3:M2("removeAgentQueueItem",{removed:!1}),Y9=typeof j$==="function"?j$:M2("streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});j0.register(F$);j0.register(w$);j0.register(C$);y$();j0.register(E$);function G9(){let _=g_(()=>{if(typeof window>"u")return new URLSearchParams;return new URL(window.location.href).searchParams},[]),$=g_(()=>{let B=_.get("chat_jid");return B&&B.trim()?B.trim():"web:default"},[_]),j=g_(()=>{let B=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return B==="1"||B==="true"||B==="yes"},[_]),[N,Z]=m("disconnected"),[K,z]=m(()=>M3()),[Y,O]=m(null),[G,V]=m(null),[X,F]=m(!1),[D,M]=m([]),[x,I]=m([]),[u,Q]=m(null),{agentStatus:T,setAgentStatus:C,agentDraft:c,setAgentDraft:p,agentPlan:l,setAgentPlan:r,agentThought:L_,setAgentThought:n,pendingRequest:Q_,setPendingRequest:V_,currentTurnId:t,setCurrentTurnId:j_,steerQueuedTurnId:Y_,setSteerQueuedTurnId:Z_,lastAgentEventRef:N_,lastSilenceNoticeRef:z_,isAgentRunningRef:y_,draftBufferRef:$_,thoughtBufferRef:W_,pendingRequestRef:U_,stalledPostIdRef:z0,currentTurnIdRef:B_,steerQueuedTurnIdRef:W0,thoughtExpandedRef:H_,draftExpandedRef:q_}=W8(),[K_,D_]=m({}),[C_,O_]=m(null),[X_,w_]=m(null),[_0,P_]=m(!1),[A_,E_]=m(null),[T_,X0]=m([]),[q0,o_]=m(null),[S_,M_]=m([]),[y0,Y0]=m(!1),[J_,r_]=m(()=>e5()),v0=g_(()=>T_.find((B)=>B?.chat_jid===$)||null,[T_,$]),x0=S_.length,J0=y(new Set),A0=y([]),N0=y(new Set),d_=y({inFlight:!1,lastAttemptAt:0,turnId:null});J0.current=new Set(S_.map((B)=>B.row_id)),A0.current=S_;let{notificationsEnabled:T0,notificationPermission:n0,toggleNotifications:P,notify:o}=O8(),[F_,x_]=m(()=>new Set),[h_,O2]=m(()=>m2("workspaceOpen",!0)),D0=y(null),{editorOpen:G0,tabStripTabs:E0,tabStripActiveId:i_,previewTabs:Q0,openEditor:U0,closeEditor:b0,handleTabClose:L2,handleTabActivate:F2,handleTabCloseOthers:g2,handleTabCloseAll:Z0,handleTabTogglePin:c0,handleTabTogglePreview:g0,revealInExplorer:B0}=V8({onTabClosed:(B)=>D0.current?.(B)}),n_=y(null),s_=y(null),l0=y(null),k0=y(null),O0=j0.getDockPanes().length>0,[P0,V0]=m(!1),W2=b(()=>V0((B)=>!B),[]),h2=!j&&(G0||O0&&P0);v(()=>{let B=n_.current;if(!B)return;if(s_.current)s_.current.dispose(),s_.current=null;let W=i_;if(!W)return;let H={path:W,mode:"edit"},A=j0.resolve(H)||j0.get("editor");if(!A){B.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let w=A.mount(B,H);s_.current=w,w.onDirtyChange?.((g)=>{f_.setDirty(W,g)}),w.onSaveRequest?.(()=>{}),w.onClose?.(()=>{b0()});let S=f_.getViewState(W);if(S&&typeof w.restoreViewState==="function")requestAnimationFrame(()=>w.restoreViewState(S));if(typeof w.onViewStateChange==="function")w.onViewStateChange((g)=>{f_.saveViewState(W,g)});return requestAnimationFrame(()=>w.focus()),()=>{if(s_.current===w)w.dispose(),s_.current=null}},[i_,b0]),v(()=>{let B=l0.current;if(k0.current)k0.current.dispose(),k0.current=null;if(!B||!O0||!P0)return;let W=j0.getDockPanes()[0];if(!W){B.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let H=W.mount(B,{mode:"view"});return k0.current=H,requestAnimationFrame(()=>H.focus?.()),()=>{if(k0.current===H)H.dispose(),k0.current=null}},[O0,P0]);let[e0,y2]=m({name:"You",avatar_url:null,avatar_background:null}),D2=y(!1),C0=y(!1),o0=y(null),w0=y(0),E2=y(0),k2=y({}),f2=y({name:null,avatar_url:null}),v_=y({currentHashtag:null,searchQuery:null}),I0=y(null),_2=y(null),h0=y(0),$2=y(0),X2=y(0),C2=y(null),r0=y(null),L0=y(null),J=y(null),f=y(0),i=y({title:null,avatarBase:null}),G_=y(null),b_=b(()=>{if(G_.current)clearTimeout(G_.current),G_.current=null;Q(null)},[]);H8(30000),v(()=>{return j4()},[]),v(()=>{if(typeof window>"u")return;let B=()=>{z(M3())};B();let A=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].map((w)=>{try{return window.matchMedia(w)}catch{return null}}).filter(Boolean).map((w)=>{if(typeof w.addEventListener==="function")return w.addEventListener("change",B),()=>w.removeEventListener("change",B);if(typeof w.addListener==="function")return w.addListener(B),()=>w.removeListener(B);return()=>{}});return window.addEventListener("focus",B),window.addEventListener("pageshow",B),()=>{for(let w of A)w();window.removeEventListener("focus",B),window.removeEventListener("pageshow",B)}},[]),v(()=>{R_("workspaceOpen",String(h_))},[h_]),v(()=>{return()=>{b_()}},[b_]),v(()=>{if(!J_){R_(g$,"");return}R_(g$,JSON.stringify({question:J_.question||"",answer:J_.answer||"",thinking:J_.thinking||"",error:J_.error||null,status:J_.status||"success"}))},[J_]),v(()=>{k2.current=K_||{}},[K_]),v(()=>{f2.current=e0||{name:"You",avatar_url:null,avatar_background:null}},[e0]);let p_=b((B,W,H=null)=>{if(typeof document>"u")return;let A=(B||"").trim()||"PiClaw";if(i.current.title!==A){document.title=A;let k_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(k_&&k_.getAttribute("content")!==A)k_.setAttribute("content",A);i.current.title=A}let w=document.getElementById("dynamic-favicon");if(!w)return;let S=w.getAttribute("data-default")||w.getAttribute("href")||"/favicon.ico",g=W||S,e=W?`${g}|${H||""}`:g;if(i.current.avatarBase!==e){let k_=W?`${g}${g.includes("?")?"&":"?"}v=${H||Date.now()}`:g;w.setAttribute("href",k_),i.current.avatarBase=e}},[]),I_=b((B)=>{if(!B)return;M((W)=>W.includes(B)?W:[...W,B])},[]),S0=b((B)=>{M((W)=>W.filter((H)=>H!==B))},[]);D0.current=S0;let j2=b(()=>{M([])},[]),l_=b((B,W=null,H="info",A=3000)=>{b_(),Q({title:B,detail:W||null,kind:H||"info"}),G_.current=setTimeout(()=>{Q((w)=>w?.title===B?null:w)},A)},[b_]),V2=b((B)=>{let W=F8(B,{editorOpen:G0,resolvePane:(H)=>j0.resolve(H)});if(W.kind==="open"){U0(W.path);return}if(W.kind==="toast")l_(W.title,W.detail,W.level)},[G0,U0,l_]),w2=b(()=>{let B=i_;if(B)I_(B)},[i_,I_]),d0=b((B)=>{if(!B)return;I((W)=>W.includes(B)?W:[...W,B])},[]),p0=b(async(B)=>{let W=(A)=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.classList.add("post-highlight"),setTimeout(()=>A.classList.remove("post-highlight"),2000)},H=document.getElementById("post-"+B);if(H){W(H);return}try{let w=(await C1(B,$))?.thread?.[0];if(!w)return;__((S)=>{if(!S)return[w];if(S.some((g)=>g.id===w.id))return S;return[...S,w]}),requestAnimationFrame(()=>{setTimeout(()=>{let S=document.getElementById("post-"+B);if(S)W(S)},50)})}catch(A){console.error("[scrollToMessage] Failed to fetch message",B,A)}},[]),q2=b((B)=>{I((W)=>W.filter((H)=>H!==B))},[]),H0=b(()=>{I([])},[]),$0=b((B={})=>{let W=Date.now();if(N_.current=W,B.running)y_.current=!0,Y0((H)=>H?H:!0);if(B.clearSilence)z_.current=0},[Y0]),u0=b(()=>{if(J.current)clearTimeout(J.current),J.current=null;f.current=0},[]);v(()=>()=>{u0()},[u0]);let J2=b(()=>{u0(),C((B)=>{if(!B)return B;if(!(B.last_activity||B.lastActivity))return B;let{last_activity:W,lastActivity:H,...A}=B;return A})},[u0]),x2=b((B)=>{if(!B)return;u0();let W=Date.now();f.current=W,C({type:B.type||"active",last_activity:!0}),J.current=setTimeout(()=>{if(f.current!==W)return;C((H)=>{if(!H||!(H.last_activity||H.lastActivity))return H;return null})},J8)},[u0]),K0=b(()=>{y_.current=!1,Y0(!1),N_.current=null,z_.current=0,$_.current="",W_.current="",U_.current=null,r0.current=null,B_.current=null,W0.current=null,o0.current=null,d_.current={inFlight:!1,lastAttemptAt:0,turnId:null},u0(),j_(null),Z_(null),H_.current=!1,q_.current=!1},[u0,j_,Z_,Y0]),c_=b((B)=>{if(!B)return;if(B_.current===B)return;B_.current=B,d_.current={inFlight:!1,lastAttemptAt:0,turnId:B},j_(B),W0.current=null,Z_(null),$_.current="",W_.current="",p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0}),V_(null),U_.current=null,r0.current=null,H_.current=!1,q_.current=!1},[j_,Z_]),N2=b((B)=>{if(typeof document<"u"){let k_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&k_)return}let W=r0.current;if(!W||!W.post)return;if(B&&W.turnId&&W.turnId!==B)return;let H=W.post;if(H.id&&C2.current===H.id)return;let A=String(H?.data?.content||"").trim();if(!A)return;C2.current=H.id||C2.current,r0.current=null;let w=A.replace(/\s+/g," ").slice(0,200),S=k2.current||{},e=(H?.data?.agent_id?S[H.data.agent_id]:null)?.name||"Pi";o(e,w)},[o]),L=b(async(B,W)=>{if(B!=="thought"&&B!=="draft")return;let H=B_.current;if(B==="thought"){if(H_.current=W,H)try{await C8(H,"thought",W)}catch(A){console.warn("Failed to update thought visibility:",A)}if(!W)return;try{let A=H?await k8(H,"thought"):null;if(A?.text)W_.current=A.text;n((w)=>({...w||{text:"",totalLines:0},fullText:W_.current||w?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:w?.totalLines||0}))}catch(A){console.warn("Failed to fetch full thought:",A)}return}if(q_.current=W,H)try{await C8(H,"draft",W)}catch(A){console.warn("Failed to update draft visibility:",A)}if(!W)return;try{let A=H?await k8(H,"draft"):null;if(A?.text)$_.current=A.text;p((w)=>({...w||{text:"",totalLines:0},fullText:$_.current||w?.fullText||"",totalLines:Number.isFinite(A?.total_lines)?A.total_lines:w?.totalLines||0}))}catch(A){console.warn("Failed to fetch full draft:",A)}},[]),U=y(null),E=b(()=>{let B=I0.current;if(!B)return;if(!(Math.abs(B.scrollTop)>150))B.scrollTop=0},[]);U.current=E;let k=b((B)=>{let W=I0.current;if(!W||typeof B!=="function"){B?.();return}let{currentHashtag:H,searchQuery:A}=v_.current||{},w=!(A&&!H),S=w?W.scrollHeight-W.scrollTop:W.scrollTop;B(),requestAnimationFrame(()=>{let g=I0.current;if(!g)return;if(w){let e=Math.max(g.scrollHeight-S,0);g.scrollTop=e}else{let e=Math.max(g.scrollHeight-g.clientHeight,0),k_=Math.min(S,e);g.scrollTop=k_}})},[]),R=b((B)=>{let W=I0.current;if(!W||typeof B!=="function"){B?.();return}let H=W.scrollTop;B(),requestAnimationFrame(()=>{let A=I0.current;if(!A)return;let w=Math.max(A.scrollHeight-A.clientHeight,0);A.scrollTop=Math.min(H,w)})},[]),d="Queued as a follow-up (one-at-a-time).",a="⁣",s=b((B)=>{if(!B||!Array.isArray(B))return B;let W=J0.current,H=new Set(W),A=B.filter((w)=>{if(H.has(w?.id))return!1;if(w?.data?.is_bot_message){let S=w?.data?.content;if(S===d||S===a)return!1}return!0});return A.length===B.length?B:A},[]),{posts:h,setPosts:__,hasMore:F0,setHasMore:Z2,hasMoreRef:i0,loadPosts:Q2,refreshTimeline:M0,loadMore:A8,loadMoreRef:f3}=L8({preserveTimelineScroll:k,preserveTimelineScrollTop:R,chatJid:$}),T2=g_(()=>s(h),[h,S_,s]),e2=b(()=>{let B=z0.current;if(!B)return;__((W)=>W?W.filter((H)=>H.id!==B):W),z0.current=null},[__]),{handleSplitterMouseDown:b8,handleSplitterTouchStart:P8,handleEditorSplitterMouseDown:S8,handleEditorSplitterTouchStart:M8,handleDockSplitterMouseDown:f8,handleDockSplitterTouchStart:x8}=X8({appShellRef:_2,sidebarWidthRef:h0,editorWidthRef:$2,dockHeightRef:X2}),h$=b(()=>{if(!y_.current)return;y_.current=!1,z_.current=0,N_.current=null,B_.current=null,j_(null),H_.current=!1,q_.current=!1;let B=($_.current||"").trim();if($_.current="",W_.current="",p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0}),V_(null),U_.current=null,r0.current=null,!B){C({type:"error",title:"Response stalled - No content received"});return}let H=`${B}${`

⚠️ Response may be incomplete - the model stopped responding`}`,A=Date.now(),w=new Date().toISOString(),S={id:A,timestamp:w,data:{type:"agent_response",content:H,agent_id:"default",is_local_stall:!0}};z0.current=A,__((g)=>g?t2([...g,S]):[S]),U.current?.(),C(null)},[j_]);v(()=>{v_.current={currentHashtag:Y,searchQuery:G}},[Y,G]);let m_=b(()=>{Z9($).then((B)=>{let W=N0.current,H=Array.isArray(B?.items)?B.items.map((A)=>({...A})).filter((A)=>!W.has(A.row_id)):[];if(H.length){M_((A)=>{if(A.length===H.length&&A.every((w,S)=>w.row_id===H[S].row_id))return A;return H});return}W.clear(),M_((A)=>A.length===0?A:[])}).catch(()=>{M_((B)=>B.length===0?B:[])})},[M_]),s0=b(async()=>{try{let B=await c$($);if(B)o_(B)}catch(B){console.warn("Failed to fetch agent context:",B)}},[$]),a0=b(async()=>{try{let B=await w8($);if(!B||B.status!=="active"||!B.data){if(C0.current){let{currentHashtag:A,searchQuery:w}=v_.current||{};if(!A&&!w)M0()}return C0.current=!1,K0(),o0.current=null,C(null),p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0}),V_(null),U_.current=null,B??null}C0.current=!0;let W=B.data;o0.current=W;let H=W.turn_id||W.turnId;if(H)c_(H);if($0({running:!0,clearSilence:!0}),J2(),C(W),B.thought&&B.thought.text)n((A)=>{if(A&&A.text&&A.text.length>=B.thought.text.length)return A;return W_.current=B.thought.text,{text:B.thought.text,totalLines:B.thought.totalLines||0}});if(B.draft&&B.draft.text)p((A)=>{if(A&&A.text&&A.text.length>=B.draft.text.length)return A;return $_.current=B.draft.text,{text:B.draft.text,totalLines:B.draft.totalLines||0}});return B}catch(B){return console.warn("Failed to fetch agent status:",B),null}},[K0,J2,$0,M0,c_]),x3=b(async()=>{if(!y_.current)return null;if(U_.current)return null;let B=B_.current||null,W=d_.current,H=Date.now();if(W.inFlight)return null;if(W.turnId===B&&H-W.lastAttemptAt<R$)return null;W.inFlight=!0,W.lastAttemptAt=H,W.turnId=B;try{let{currentHashtag:A,searchQuery:w}=v_.current||{};if(!A&&!w)await M0();return await m_(),await a0()}finally{W.inFlight=!1}},[a0,m_,M0]);v(()=>{let B=Math.min(1000,Math.max(100,Math.floor(m$/2))),W=setInterval(()=>{if(!y_.current)return;if(U_.current)return;let H=N_.current;if(!H)return;let A=Date.now(),w=A-H,S=E3(o0.current);if(w>=q8){if(!S)C({type:"waiting",title:"Re-syncing after a quiet period…"});x3();return}if(w>=m$){if(A-z_.current>=R$){if(!S){let g=Math.floor(w/1000);C({type:"waiting",title:`Waiting for model… No events for ${g}s`})}z_.current=A,x3()}}},B);return()=>clearInterval(W)},[x3]);let T8=b((B)=>{if(Z(B),B!=="connected"){C(null),p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0}),V_(null),U_.current=null,K0();return}if(!D2.current){D2.current=!0,a0(),s0();return}let{currentHashtag:W,searchQuery:H}=v_.current;if(!W&&!H)M0();a0(),s0()},[K0,M0,a0,s0]),I8=b(async(B)=>{O(B),__(null),await Q2(B)},[Q2]),u8=b(async()=>{O(null),V(null),__(null),await Q2()},[Q2]),m8=b(async(B)=>{if(!B||!B.trim())return;V(B.trim()),O(null),__(null);try{let W=await _9(B.trim(),50,0,$);__(W.results),Z2(!1)}catch(W){console.error("Failed to search:",W),__([])}},[$]),R8=b(()=>{F(!0),V(null),O(null),__([])},[]),v8=b(()=>{F(!1),V(null),Q2()},[Q2]),B9=b(()=>{},[]),c8=b(async(B)=>{if(!B)return;let W=B.id,H=T2?.filter((w)=>w?.data?.thread_id===W&&w?.id!==W).length||0;if(H>0){if(!window.confirm(`Delete this message and its ${H} replies?`))return}let A=(w)=>{if(!w.length)return;x_((g)=>{let e=new Set(g);return w.forEach((k_)=>e.add(k_)),e}),setTimeout(()=>{if(R(()=>{__((g)=>g?g.filter((e)=>!w.includes(e.id)):g)}),x_((g)=>{let e=new Set(g);return w.forEach((k_)=>e.delete(k_)),e}),i0.current)f3.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let w=await E8(W,H>0);if(w?.ids?.length)A(w.ids)}catch(w){let S=w?.message||"";if(H===0&&S.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await E8(W,!0);if(e?.ids?.length)A(e.ids);return}console.error("Failed to delete post:",w),alert(`Failed to delete message: ${S}`)}},[T2,R]),p$=b(async()=>{try{let B=await $9();D_(Q8(B));let W=B?.user||{};y2((A)=>{let w=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",S=typeof W.avatar_url==="string"?W.avatar_url.trim():null,g=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(A.name===w&&A.avatar_url===S&&A.avatar_background===g)return A;return{name:w,avatar_url:S,avatar_background:g}});let H=(B?.agents||[]).find((A)=>A.id==="default");if(H?.model)O_(H.model);p_(H?.name,H?.avatar_url)}catch(B){console.warn("Failed to load agents:",B)}try{let B=await c$($);if(B)o_(B)}catch{}},[p_,$]);v(()=>{p$();let B=R2("sidebarWidth",null),W=Number.isFinite(B)?Math.min(Math.max(B,160),600):280;if(h0.current=W,_2.current)_2.current.style.setProperty("--sidebar-width",`${W}px`)},[p$]);let T3=y0||T!==null,i$=b((B)=>{if(!B||typeof B!=="object")return;let W=B.agent_id;if(!W)return;let{agent_name:H,agent_avatar:A}=B;if(!H&&A===void 0)return;let w=k2.current?.[W]||{id:W},S=w.name||null,g=w.avatar_url??w.avatarUrl??w.avatar??null,e=!1,k_=!1;if(H&&H!==w.name)S=H,k_=!0;if(A!==void 0){let K2=typeof A==="string"?A.trim():null,l$=typeof g==="string"?g.trim():null,I2=K2||null;if(I2!==(l$||null))g=I2,e=!0}if(!k_&&!e)return;if(D_((K2)=>{let I2={...K2[W]||{id:W}};if(k_)I2.name=S;if(e)I2.avatar_url=g;return{...K2,[W]:I2}}),W==="default")p_(S,g,e?Date.now():null)},[p_]),n$=b((B)=>{if(!B||typeof B!=="object")return;let W=B.user_name??B.userName,H=B.user_avatar??B.userAvatar,A=B.user_avatar_background??B.userAvatarBackground;if(W===void 0&&H===void 0&&A===void 0)return;y2((w)=>{let S=typeof W==="string"&&W.trim()?W.trim():w.name||"You",g=H===void 0?w.avatar_url:typeof H==="string"&&H.trim()?H.trim():null,e=A===void 0?w.avatar_background:typeof A==="string"&&A.trim()?A.trim():null;if(w.name===S&&w.avatar_url===g&&w.avatar_background===e)return w;return{name:S,avatar_url:g,avatar_background:e}})},[]),I3=b((B)=>{if(!B||typeof B!=="object")return;let W=B.model??B.current;if(W!==void 0)O_(W);if(B.thinking_level!==void 0)w_(B.thinking_level??null);if(B.supports_thinking!==void 0)P_(Boolean(B.supports_thinking));if(B.provider_usage!==void 0)E_(B.provider_usage??null)},[]),p2=b(()=>{j9().then((B)=>{if(B)I3(B)}).catch(()=>{})},[I3]),A2=b(()=>{N9().then((B)=>{let W=Array.isArray(B?.chats)?B.chats.filter((H)=>H&&typeof H.agent_name==="string"&&H.agent_name.trim()):[];X0(W)}).catch(()=>{})},[]),g8=b((B)=>{let W=B?.row_id;if(W==null)return;N0.current.add(W),M_((H)=>H.filter((A)=>A?.row_id!==W)),K9(W).then(()=>{m_()}).catch((H)=>{console.warn("[queue] Failed to steer queued item:",H),l_("Failed to steer message","The queued message could not be sent as steering.","warning"),N0.current.delete(W),m_()})},[m_,M_,l_]),h8=b((B)=>{let W=B?.row_id;if(W==null)return;N0.current.add(W),M_((H)=>H.filter((A)=>A?.row_id!==W)),z9(W).then(()=>{m_()}).catch((H)=>{console.warn("[queue] Failed to remove queued item:",H),l_("Failed to remove message","The queued message could not be removed.","warning"),N0.current.delete(W),m_()})},[m_,M_,l_]),u3=b((B)=>{if(!B||typeof B!=="object")return;if(A2(),B?.queued==="followup"||B?.queued==="steer"){m_();return}let W=B?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))m_()},[A2,m_]),m3=b(()=>{if(L0.current)L0.current.abort(),L0.current=null;r_(null)},[]),_3=b(async(B)=>{let W=String(B||"").trim();if(!W)return l_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(L0.current)L0.current.abort();let H=new AbortController;L0.current=H,r_({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let A=await Y9(W,{signal:H.signal,systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(w,S)=>{if(w==="side_prompt_start")r_((g)=>g?{...g,status:"running"}:g)},onThinkingDelta:(w)=>{r_((S)=>S?{...S,thinking:`${S.thinking||""}${w||""}`}:S)},onTextDelta:(w)=>{r_((S)=>S?{...S,answer:`${S.answer||""}${w||""}`}:S)}});if(L0.current!==H)return!0;r_((w)=>w?{...w,answer:A?.result||w.answer||"",thinking:A?.thinking||w.thinking||"",model:A?.model||null,status:"success",error:null}:w)}catch(A){if(H.signal.aborted)return!0;r_((w)=>w?{...w,status:"error",error:A?.payload?.error||A?.message||"BTW request failed."}:w)}finally{if(L0.current===H)L0.current=null}return!0},[l_]),p8=b(async({content:B})=>{let W=W4(B);if(!W)return!1;if(W.type==="help")return l_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return m3(),l_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await _3(W.question),!0;return!1},[m3,_3,l_]),i8=b(()=>{if(J_?.question)_3(J_.question)},[J_,_3]),n8=b(async()=>{let B=q4(J_);if(!B)return;try{let W=await l2("default",B,null,[],T3?"queue":null,$);u3(W),l_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){l_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[J_,u3,T3,l_]),R3=b(()=>{p2(),A2(),m_(),s0()},[p2,A2,m_,s0]);v(()=>{R3();let B=setInterval(()=>{p2(),A2(),m_()},60000);return()=>clearInterval(B)},[R3,p2,A2,m_]);let v3=b((B,W)=>{let H=W?.turn_id;if(i$(W),n$(W),B==="ui_theme"){N4(W);return}if(B?.startsWith("agent_")){if(!(B==="agent_draft_delta"||B==="agent_thought_delta"||B==="agent_draft"||B==="agent_thought"))J2()}if(B==="connected"){C(null),p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0}),V_(null),U_.current=null,K0(),w8($).then((e)=>{if(!e||e.status!=="active"||!e.data)return;let k_=e.data,K2=k_.turn_id||k_.turnId;if(K2)c_(K2);if($0({clearSilence:!0}),x2(k_),e.thought&&e.thought.text)W_.current=e.thought.text,n({text:e.thought.text,totalLines:e.thought.totalLines||0});if(e.draft&&e.draft.text)$_.current=e.draft.text,p({text:e.draft.text,totalLines:e.draft.totalLines||0})}).catch((e)=>{console.warn("Failed to fetch agent status:",e)});let{currentHashtag:S,searchQuery:g}=v_.current||{};if(!S&&!g)M0();R3();return}if(B==="agent_status"){if(W.type==="done"||W.type==="error"){if(H&&B_.current&&H!==B_.current)return;if(W.type==="done"){N2(H||B_.current);let{currentHashtag:S,searchQuery:g}=v_.current||{};if(!S&&!g)M0();if(W.context_usage)o_(W.context_usage)}if(C0.current=!1,K0(),N0.current.clear(),A2(),m_(),p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0}),V_(null),W.type==="error")C({type:"error",title:W.title||"Agent error"}),setTimeout(()=>C(null),8000);else C(null)}else{if(H)c_(H);if($0({running:!0,clearSilence:!0}),W.type==="thinking")$_.current="",W_.current="",p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0});o0.current=W,C((S)=>{if(S&&S.type===W.type&&S.title===W.title)return S;return W})}return}if(B==="agent_steer_queued"){if(H&&B_.current&&H!==B_.current)return;let S=H||B_.current;if(!S)return;W0.current=S,Z_(S);return}if(B==="agent_followup_queued"){let S=W?.row_id,g=W?.content;if(S!=null&&typeof g==="string"&&g.trim())M_((e)=>{if(e.some((k_)=>k_?.row_id===S))return e;return[...e,{row_id:S,content:g,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});m_();return}if(B==="agent_followup_consumed"){let S=W?.row_id;if(S!=null)M_((g)=>g.filter((e)=>e.row_id!==S));m_(),M0();return}if(B==="agent_followup_removed"){let S=W?.row_id;if(S!=null)N0.current.add(S),M_((g)=>g.filter((e)=>e.row_id!==S));m_();return}if(B==="agent_draft_delta"){if(H&&B_.current&&H!==B_.current)return;if(H&&!B_.current)c_(H);if($0({running:!0,clearSilence:!0}),W?.reset)$_.current="";if(W?.delta)$_.current+=W.delta;let S=Date.now();if(!w0.current||S-w0.current>=100){w0.current=S;let g=$_.current,e=v$(g);if(q_.current)p((k_)=>({text:k_?.text||"",totalLines:e,fullText:g}));else p({text:g,totalLines:e})}return}if(B==="agent_draft"){if(H&&B_.current&&H!==B_.current)return;if(H&&!B_.current)c_(H);$0({running:!0,clearSilence:!0});let S=W.text||"",g=W.mode||(W.kind==="plan"?"replace":"append"),e=Number.isFinite(W.total_lines)?W.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(g==="replace")r(S);else r((k_)=>(k_||"")+S);else if(!q_.current)$_.current=S,p({text:S,totalLines:e});return}if(B==="agent_thought_delta"){if(H&&B_.current&&H!==B_.current)return;if(H&&!B_.current)c_(H);if($0({running:!0,clearSilence:!0}),W?.reset)W_.current="";if(typeof W?.delta==="string")W_.current+=W.delta;let S=Date.now();if(H_.current&&(!E2.current||S-E2.current>=100)){E2.current=S;let g=W_.current;n((e)=>({text:e?.text||"",totalLines:v$(g),fullText:g}))}return}if(B==="agent_thought"){if(H&&B_.current&&H!==B_.current)return;if(H&&!B_.current)c_(H);$0({running:!0,clearSilence:!0});let S=W.text||"",g=Number.isFinite(W.total_lines)?W.total_lines:S?S.replace(/\r\n/g,`
`).split(`
`).length:0;if(!H_.current)W_.current=S,n({text:S,totalLines:g});return}if(B==="agent_request"){if(console.log("Agent request:",W),H&&B_.current&&H!==B_.current)return;if(H)c_(H);$0({running:!0,clearSilence:!0}),V_(W),U_.current=W;return}if(B==="agent_request_timeout"){if(console.log("Agent request timeout:",W),H&&B_.current&&H!==B_.current)return;V_(null),U_.current=null,K0(),C({type:"error",title:"Permission request timed out"});return}if(B==="model_changed"){if(W?.model!==void 0)O_(W.model);if(W?.thinking_level!==void 0)w_(W.thinking_level??null);if(W?.supports_thinking!==void 0)P_(Boolean(W.supports_thinking));c$($).then((S)=>{if(S)o_(S)}).catch(()=>{});return}if(B==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}let{currentHashtag:A,searchQuery:w}=v_.current;if(B==="agent_response")e2(),r0.current={post:W,turnId:B_.current};if(!A&&!w&&(B==="new_post"||B==="agent_response"))__((S)=>{if(!S)return[W];if(S.some((g)=>g.id===W.id))return S;return[...S,W]}),U.current?.();if(B==="interaction_updated")__((S)=>{if(!S)return S;if(!S.some((g)=>g.id===W.id))return S;return S.map((g)=>g.id===W.id?W:g)});if(B==="interaction_deleted"){let S=W?.ids||[];if(S.length){R(()=>{__((k_)=>k_?k_.filter((K2)=>!S.includes(K2.id)):k_)});let{currentHashtag:g,searchQuery:e}=v_.current;if(i0.current&&!g&&!e)f3.current?.({preserveScroll:!0,preserveMode:"top"})}}},[K0,J2,f3,$0,N2,R,M0,e2,c_,x2,i$,n$,p2,m_,M_]);v(()=>{if(typeof window>"u")return;let B=window.__PICLAW_TEST_API||{};return B.emit=v3,B.reset=()=>{e2(),K0(),C(null),p({text:"",totalLines:0}),r(""),n({text:"",totalLines:0}),V_(null)},B.finalize=()=>h$(),window.__PICLAW_TEST_API=B,()=>{if(window.__PICLAW_TEST_API===B)window.__PICLAW_TEST_API=void 0}},[K0,h$,v3,e2]),B8({handleSseEvent:v3,handleConnectionStatusChange:T8,loadPosts:Q2}),v(()=>{if(!T2||T2.length===0)return;let B=location.hash;if(!B||!B.startsWith("#msg-"))return;let W=B.slice(5);p0(W),history.replaceState(null,"",location.pathname+location.search)},[T2,p0]);let c3=T!==null;v(()=>{if(N!=="connected")return;let W=setInterval(()=>{let{currentHashtag:H,searchQuery:A}=v_.current||{},w=!H&&!A;if(c3){if(w)M0();m_(),a0(),s0()}else{if(w)M0();a0(),s0()}},c3?15000:60000);return()=>clearInterval(W)},[N,c3,a0,s0,m_,M0]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let B=()=>{if(document.visibilityState&&document.visibilityState!=="visible")return;a0(),s0(),m_()};return window.addEventListener("focus",B),window.addEventListener("pageshow",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),window.removeEventListener("pageshow",B),document.removeEventListener("visibilitychange",B)}},[a0,s0,m_]);let l8=b(()=>{O2((B)=>!B)},[]),o8=b(async()=>{if(typeof window>"u"||K)return;try{let W=(await A1($))?.branch,H=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null;if(!H)throw Error("Branch fork did not return a chat id.");try{let S=await W3();X0(Array.isArray(S?.chats)?S.chats:[])}catch{}let A=D8(window.location.href,H,{chatOnly:!0}),w=y8(W?.agent_name||H);if(!w)throw Error("Opening branch windows is unavailable in standalone webapp mode.");if(w.features)window.open(A,w.target,w.features);else window.open(A,w.target)}catch(B){let W=B instanceof Error?B.message:String(B||"Failed to fork chat branch.");l_("Could not open branch window",W||"Failed to fork chat branch.","error",5000)}},[$,K,l_]);v(()=>{if(!G0)return;if(typeof window>"u")return;let B=_2.current;if(!B)return;if(!$2.current){let W=R2("editorWidth",null),H=h0.current||280;$2.current=Number.isFinite(W)?W:H}if(B.style.setProperty("--editor-width",`${$2.current}px`),!X2.current){let W=R2("dockHeight",null);X2.current=Number.isFinite(W)?W:200}B.style.setProperty("--dock-height",`${X2.current}px`)},[G0]),v(()=>{if(!O0||j)return;let B=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),W2()};return document.addEventListener("keydown",B),()=>document.removeEventListener("keydown",B)},[W2,O0,j]);let r8=Boolean(Y_&&Y_===(T?.turn_id||t));return q`
        <div class=${`app-shell${h_?"":" workspace-collapsed"}${G0?" editor-open":""}${j?" chat-only":""}`} ref=${_2}>
            ${!j&&q`
                <${K8}
                    onFileSelect=${I_}
                    visible=${h_}
                    active=${h_||G0}
                    onOpenEditor=${U0}
                />
                <button
                    class=${`workspace-toggle-tab${h_?" open":" closed"}`}
                    onClick=${l8}
                    title=${h_?"Hide workspace":"Show workspace"}
                    aria-label=${h_?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${b8} onTouchStart=${P8}></div>
            `}
            ${h2&&q`
                <div class="editor-pane-container">
                    ${G0&&q`
                        <${z8}
                            tabs=${E0}
                            activeId=${i_}
                            onActivate=${F2}
                            onClose=${L2}
                            onCloseOthers=${g2}
                            onCloseAll=${Z0}
                            onTogglePin=${c0}
                            onTogglePreview=${g0}
                            previewTabs=${Q0}
                            onToggleDock=${O0?W2:void 0}
                            dockVisible=${O0&&P0}
                        />
                    `}
                    ${G0&&q`<div class="editor-pane-host" ref=${n_}></div>`}
                    ${G0&&i_&&Q0.has(i_)&&q`
                        <${G8}
                            getContent=${()=>s_.current?.getContent?.()}
                            path=${i_}
                            onClose=${()=>g0(i_)}
                        />
                    `}
                    ${O0&&P0&&q`<div class="dock-splitter" onMouseDown=${f8} onTouchStart=${x8}></div>`}
                    ${O0&&q`<div class=${`dock-panel${P0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${W2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${l0}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${S8} onTouchStart=${M8}></div>
            `}
            <div class="container">
                ${G&&U8()&&q`<div class="search-results-spacer"></div>`}
                ${j&&q`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${v0?.display_name||v0?.agent_name?`@${v0?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${v0?.display_name||$}</span>
                        </div>
                        <span class="chat-window-header-badge">Chat only</span>
                    </div>
                `}
                ${(Y||G)&&q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${u8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Y?`#${Y}`:`Search: ${G}`}</span>
                    </div>
                `}
                <${R4}
                    posts=${T2}
                    hasMore=${F0}
                    onLoadMore=${A8}
                    timelineRef=${I0}
                    onHashtagClick=${I8}
                    onMessageRef=${d0}
                    onScrollToMessage=${p0}
                    onFileRef=${V2}
                    onPostClick=${void 0}
                    onDeletePost=${c8}
                    emptyMessage=${Y?`No posts with #${Y}`:G?`No results for "${G}"`:void 0}
                    agents=${K_}
                    user=${e0}
                    reverse=${!(G&&!Y)}
                    removingPostIds=${F_}
                    searchQuery=${G}
                />
                <${D4}
                    status=${T}
                    draft=${c}
                    plan=${l}
                    thought=${L_}
                    pendingRequest=${Q_}
                    intent=${u}
                    turnId=${t}
                    steerQueued=${r8}
                    onPanelToggle=${L}
                />
                <${J4}
                    session=${J_}
                    onClose=${m3}
                    onRetry=${i8}
                    onInject=${n8}
                />
                <${d1}
                    onPost=${()=>{Q2(),E()}}
                    onFocus=${E}
                    searchMode=${X}
                    onSearch=${m8}
                    onEnterSearch=${R8}
                    onExitSearch=${v8}
                    fileRefs=${D}
                    onRemoveFileRef=${S0}
                    onClearFileRefs=${j2}
                    messageRefs=${x}
                    onRemoveMessageRef=${q2}
                    onClearMessageRefs=${H0}
                    activeEditorPath=${j?null:i_}
                    onAttachEditorFile=${j?void 0:w2}
                    onOpenFilePill=${V2}
                    followupQueueCount=${x0}
                    followupQueueItems=${S_}
                    onInjectQueuedFollowup=${g8}
                    onRemoveQueuedFollowup=${h8}
                    onSubmitIntercept=${p8}
                    onMessageResponse=${u3}
                    onPopOutChat=${K?void 0:o8}
                    isAgentActive=${T3}
                    activeChatAgents=${T_}
                    currentChatJid=${$}
                    activeModel=${C_}
                    modelUsage=${A_}
                    thinkingLevel=${X_}
                    supportsThinking=${_0}
                    contextUsage=${q0}
                    notificationsEnabled=${T0}
                    notificationPermission=${n0}
                    onToggleNotifications=${P}
                    onModelChange=${O_}
                    onModelStateChange=${I3}
                />
                <${k4} status=${N} />
                <${E4}
                    request=${Q_}
                    onRespond=${()=>{V_(null),U_.current=null}}
                />
            </div>
        </div>
    `}Q1(q`<${G9} />`,document.getElementById("app"));

//# debugId=16F2CD93223D6BB364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
