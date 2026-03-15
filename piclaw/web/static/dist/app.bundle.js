var I6=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var H$,p_,P1,T6,D2,U1,M1,C1,S1,Z3,e$,_3,u6,U$={},B$=[],m6=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,F$=Array.isArray;function U2(_,$){for(var j in $)_[j]=$[j];return _}function N3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function x1(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?H$.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return V$(_,z,Z,N,null)}function V$(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++P1:N,__i:-1,__u:0};return N==null&&p_.vnode!=null&&p_.vnode(K),K}function y$(_){return _.children}function W$(_,$){this.props=_,this.context=$}function R2(_,$){if($==null)return _.__?R2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?R2(_):null}function v6(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=U2({},$);K.__v=$.__v+1,p_.vnode&&p_.vnode(K),K3(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?R2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,u1(Z,K,N),$.__e=$.__=null,K.__e!=j&&f1(K)}}function f1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),f1(_)}function B1(_){(!_.__d&&(_.__d=!0)&&D2.push(_)&&!Q$.__r++||U1!=p_.debounceRendering)&&((U1=p_.debounceRendering)||M1)(Q$)}function Q$(){try{for(var _,$=1;D2.length;)D2.length>$&&D2.sort(C1),_=D2.shift(),$=D2.length,v6(_)}finally{D2.length=Q$.__r=0}}function I1(_,$,j,Z,N,K,z,L,X,O,q){var W,y,w,f,I,v,S,H=Z&&Z.__k||B$,A=$.length;for(X=R6(j,$,H,X,A),W=0;W<A;W++)(w=j.__k[W])!=null&&(y=w.__i!=-1&&H[w.__i]||U$,w.__i=W,v=K3(_,w,y,N,K,z,L,X,O,q),f=w.__e,w.ref&&y.ref!=w.ref&&(y.ref&&z3(y.ref,null,w),q.push(w.ref,w.__c||f,w)),I==null&&f!=null&&(I=f),(S=!!(4&w.__u))||y.__k===w.__k?X=T1(w,X,_,S):typeof w.type=="function"&&v!==void 0?X=v:f&&(X=f.nextSibling),w.__u&=-7);return j.__e=I,X}function R6(_,$,j,Z,N){var K,z,L,X,O,q=j.length,W=q,y=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=V$(null,z,null,null,null):F$(z)?z=_.__k[K]=V$(y$,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=V$(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,X=K+y,z.__=_,z.__b=_.__b+1,L=null,(O=z.__i=g6(z,j,X,W))!=-1&&(W--,(L=j[O])&&(L.__u|=2)),L==null||L.__v==null?(O==-1&&(N>q?y--:N<q&&y++),typeof z.type!="function"&&(z.__u|=4)):O!=X&&(O==X-1?y--:O==X+1?y++:(O>X?y--:y++,z.__u|=4))):_.__k[K]=null;if(W)for(K=0;K<q;K++)(L=j[K])!=null&&(2&L.__u)==0&&(L.__e==Z&&(Z=R2(L)),v1(L,L));return Z}function T1(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=T1(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=R2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function g6(_,$,j,Z){var N,K,z,L=_.key,X=_.type,O=$[j],q=O!=null&&(2&O.__u)==0;if(O===null&&L==null||q&&L==O.key&&X==O.type)return j;if(Z>(q?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((O=$[z=N>=0?N--:K++])!=null&&(2&O.__u)==0&&L==O.key&&X==O.type)return z}return-1}function Q1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||m6.test($)?j:j+"px"}function X$(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||Q1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||Q1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(S1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=Z3,_.addEventListener($,K?_3:e$,K)):_.removeEventListener($,K?_3:e$,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(L){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function H1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=Z3++;else if($.t<j.u)return;return j(p_.event?p_.event($):$)}}}function K3(_,$,j,Z,N,K,z,L,X,O){var q,W,y,w,f,I,v,S,H,A,C,c,a,t,l,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(X=!!(32&j.__u),K=[L=$.__e=j.__e]),(q=p_.__b)&&q($);_:if(typeof N_=="function")try{if(S=$.props,H=N_.prototype&&N_.prototype.render,A=(q=N_.contextType)&&Z[q.__c],C=q?A?A.props.value:q.__:Z,j.__c?v=(W=$.__c=j.__c).__=W.__E:(H?$.__c=W=new N_(S,C):($.__c=W=new W$(S,C),W.constructor=N_,W.render=p6),A&&A.sub(W),W.state||(W.state={}),W.__n=Z,y=W.__d=!0,W.__h=[],W._sb=[]),H&&W.__s==null&&(W.__s=W.state),H&&N_.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=U2({},W.__s)),U2(W.__s,N_.getDerivedStateFromProps(S,W.__s))),w=W.props,f=W.state,W.__v=$,y)H&&N_.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),H&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(H&&N_.getDerivedStateFromProps==null&&S!==w&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(S,C),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(S,W.__s,C)===!1){$.__v!=j.__v&&(W.props=S,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),B$.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&z.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(S,W.__s,C),H&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(w,f,I)})}if(W.context=C,W.props=S,W.__P=_,W.__e=!1,c=p_.__r,a=0,H)W.state=W.__s,W.__d=!1,c&&c($),q=W.render(W.props,W.state,W.context),B$.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,c&&c($),q=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++a<25);W.state=W.__s,W.getChildContext!=null&&(Z=U2(U2({},Z),W.getChildContext())),H&&!y&&W.getSnapshotBeforeUpdate!=null&&(I=W.getSnapshotBeforeUpdate(w,f)),t=q!=null&&q.type===y$&&q.key==null?m1(q.props.children):q,L=I1(_,F$(t)?t:[t],$,j,Z,N,K,z,L,X,O),W.base=$.__e,$.__u&=-161,W.__h.length&&z.push(W),v&&(W.__E=W.__=null)}catch(i){if($.__v=null,X||K!=null)if(i.then){for($.__u|=X?160:128;L&&L.nodeType==8&&L.nextSibling;)L=L.nextSibling;K[K.indexOf(L)]=null,$.__e=L}else{for(l=K.length;l--;)N3(K[l]);$3($)}else $.__e=j.__e,$.__k=j.__k,i.then||$3($);p_.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):L=$.__e=c6(j.__e,$,j,Z,N,K,z,X,O);return(q=p_.diffed)&&q($),128&$.__u?void 0:L}function $3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some($3))}function u1(_,$,j){for(var Z=0;Z<j.length;Z++)z3(j[Z],j[++Z],j[++Z]);p_.__c&&p_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){p_.__e(K,N.__v)}})}function m1(_){return typeof _!="object"||_==null||_.__b>0?_:F$(_)?_.map(m1):U2({},_)}function c6(_,$,j,Z,N,K,z,L,X){var O,q,W,y,w,f,I,v=j.props||U$,S=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(O=0;O<K.length;O++)if((w=K[O])&&"setAttribute"in w==!!H&&(H?w.localName==H:w.nodeType==3)){_=w,K[O]=null;break}}if(_==null){if(H==null)return document.createTextNode(S);_=document.createElementNS(N,H,S.is&&S),L&&(p_.__m&&p_.__m($,K),L=!1),K=null}if(H==null)v===S||L&&_.data==S||(_.data=S);else{if(K=K&&H$.call(_.childNodes),!L&&K!=null)for(v={},O=0;O<_.attributes.length;O++)v[(w=_.attributes[O]).name]=w.value;for(O in v)w=v[O],O=="dangerouslySetInnerHTML"?W=w:O=="children"||(O in S)||O=="value"&&("defaultValue"in S)||O=="checked"&&("defaultChecked"in S)||X$(_,O,null,w,N);for(O in S)w=S[O],O=="children"?y=w:O=="dangerouslySetInnerHTML"?q=w:O=="value"?f=w:O=="checked"?I=w:L&&typeof w!="function"||v[O]===w||X$(_,O,w,v[O],N);if(q)L||W&&(q.__html==W.__html||q.__html==_.innerHTML)||(_.innerHTML=q.__html),$.__k=[];else if(W&&(_.innerHTML=""),I1($.type=="template"?_.content:_,F$(y)?y:[y],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&R2(j,0),L,X),K!=null)for(O=K.length;O--;)N3(K[O]);L||(O="value",H=="progress"&&f==null?_.removeAttribute("value"):f!=null&&(f!==_[O]||H=="progress"&&!f||H=="option"&&f!=v[O])&&X$(_,O,f,v[O],N),O="checked",I!=null&&I!=_[O]&&X$(_,O,I,v[O],N))}return _}function z3(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){p_.__e(N,j)}}function v1(_,$,j){var Z,N;if(p_.unmount&&p_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||z3(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){p_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&v1(Z[N],$,j||typeof _.type!="function");j||N3(_.__e),_.__c=_.__=_.__e=void 0}function p6(_,$,j){return this.constructor(_,j)}function R1(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),p_.__&&p_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],K3($,_=(!Z&&j||$).__k=x1(y$,null,[_]),N||U$,U$,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?H$.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),u1(K,_,z)}H$=B$.slice,p_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(L){_=L}throw _}},P1=0,T6=function(_){return _!=null&&_.constructor===void 0},W$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=U2({},this.state),typeof _=="function"&&(_=_(U2({},j),this.props)),_&&U2(j,_),_!=null&&this.__v&&($&&this._sb.push($),B1(this))},W$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),B1(this))},W$.prototype.render=y$,D2=[],M1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,C1=function(_,$){return _.__v.__b-$.__v.__b},Q$.__r=0,S1=/(PointerCapture)$|Capture$/i,Z3=0,e$=H1(!1),_3=H1(!0),u6=0;var s2,z0,t$,F1,a2=0,g1=[],K0=p_,y1=K0.__b,J1=K0.__r,D1=K0.diffed,E1=K0.__c,k1=K0.unmount,w1=K0.__;function Y3(_,$){K0.__h&&K0.__h(z0,_,a2||$),a2=0;var j=z0.__H||(z0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return a2=1,h6(p1,_)}function h6(_,$,j){var Z=Y3(s2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):p1(void 0,$),function(L){var X=Z.__N?Z.__N[0]:Z.__[0],O=Z.t(X,L);X!==O&&(Z.__N=[O,Z.__[1]],Z.__c.setState({}))}],Z.__c=z0,!z0.__f)){var N=function(L,X,O){if(!Z.__c.__H)return!0;var q=Z.__c.__H.__.filter(function(y){return y.__c});if(q.every(function(y){return!y.__N}))return!K||K.call(this,L,X,O);var W=Z.__c.props!==L;return q.some(function(y){if(y.__N){var w=y.__[0];y.__=y.__N,y.__N=void 0,w!==y.__[0]&&(W=!0)}}),K&&K.call(this,L,X,O)||W};z0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=z0;z0.componentWillUpdate=function(L,X,O){if(this.__e){var q=K;K=void 0,N(L,X,O),K=q}z&&z.call(this,L,X,O)},z0.shouldComponentUpdate=N}return Z.__N||Z.__}function m(_,$){var j=Y3(s2++,3);!K0.__s&&c1(j.__H,$)&&(j.__=_,j.u=$,z0.__H.__h.push(j))}function J(_){return a2=5,h_(function(){return{current:_}},[])}function h_(_,$){var j=Y3(s2++,7);return c1(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return a2=8,h_(function(){return _},$)}function i6(){for(var _;_=g1.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(q$),$.__h.some(j3),$.__h=[]}catch(j){$.__h=[],K0.__e(j,_.__v)}}}K0.__b=function(_){z0=null,y1&&y1(_)},K0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),w1&&w1(_,$)},K0.__r=function(_){J1&&J1(_),s2=0;var $=(z0=_.__c).__H;$&&(t$===z0?($.__h=[],z0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(q$),$.__h.some(j3),$.__h=[],s2=0)),t$=z0},K0.diffed=function(_){D1&&D1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(g1.push($)!==1&&F1===K0.requestAnimationFrame||((F1=K0.requestAnimationFrame)||l6)(i6)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),t$=z0=null},K0.__c=function(_,$){$.some(function(j){try{j.__h.some(q$),j.__h=j.__h.filter(function(Z){return!Z.__||j3(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],K0.__e(Z,j.__v)}}),E1&&E1(_,$)},K0.unmount=function(_){k1&&k1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{q$(Z)}catch(N){$=N}}),j.__H=void 0,$&&K0.__e($,j.__v))};var b1=typeof requestAnimationFrame=="function";function l6(_){var $,j=function(){clearTimeout(Z),b1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);b1&&($=requestAnimationFrame(j))}function q$(_){var $=z0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),z0=$}function j3(_){var $=z0;_.__c=_.__(),z0=$}function c1(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function p1(_,$){return typeof $=="function"?$(_):$}var h1=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],L=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=L:z===4?Z[1]=Object.assign(Z[1]||{},L):z===5?(Z[1]=Z[1]||{})[$[++K]]=L:z===6?Z[1][$[++K]]+=L+"":z?(N=_.apply(L,h1(_,L,j,["",null])),Z.push(N),L[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(L)}return Z},A1=new Map;function n6(_){var $=A1.get(this);return $||($=new Map,A1.set(this,$)),($=h1(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",L="",X=[0],O=function(y){K===1&&(y||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?X.push(0,y,z):K===3&&(y||z)?(X.push(3,y,z),K=2):K===2&&z==="..."&&y?X.push(4,y,0):K===2&&z&&!y?X.push(5,0,!0,z):K>=5&&((z||!y&&K===5)&&(X.push(K,0,z,N),K=6),y&&(X.push(K,y,0,N),K=6)),z=""},q=0;q<j.length;q++){q&&(K===1&&O(),O(q));for(var W=0;W<j[q].length;W++)Z=j[q][W],K===1?Z==="<"?(O(),X=[X],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:L?Z===L?L="":z+=Z:Z==='"'||Z==="'"?L=Z:Z===">"?(O(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[q][W+1]===">")?(O(),K===3&&(X=X[0]),K=X,(X=X[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(O(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,X=X[0])}return O(),X}(_)),$),arguments,[])).length>1?$:$[0]}var U=n6.bind(x1);async function r_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function i1(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function o6(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:L}=await j.read();if(L)break;N+=Z.decode(z,{stream:!0});let X=N.split(`

`);N=X.pop()||"";for(let O of X){let q=i1(O);if(q)$(q.event,q.data)}}N+=Z.decode();let K=i1(N);if(K)$(K.event,K.data)}async function J$(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return r_(Z)}async function l1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return r_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function n1(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",L=N?`&scope=${encodeURIComponent(N)}`:"",X=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return r_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${L}${X}`)}async function o1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r_(`/thread/${_}${j}`)}async function d1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return r_(N,{method:"DELETE"})}async function t2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return r_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function D$(){return r_("/agent/active-chats")}async function G3(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/branches${$}`)}async function O3(_,$={}){return r_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function L3(_,$={}){return r_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function X3(_){return r_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function r1(){return r_("/agents")}async function s1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/status${$}`)}async function V3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/context${$}`)}async function W3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/queue-state${$}`)}async function q3(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function U3(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function f2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r_(`/agent/models${$}`)}async function a1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function B3(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function t1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function Q3(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await o6(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function e1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function _4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r_(j)}async function $4(_,$,j){return r_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function X2(_){return`/media/${_}`}function j4(_){return`/media/${_}/thumbnail`}async function e2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function Z4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function N4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function E$(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r_(Z)}async function K4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return r_(N)}async function z4(_){return r_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function H3(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",L=await fetch(""+z,{method:"POST",body:Z});if(!L.ok){let X=await L.json().catch(()=>({error:"Upload failed"})),O=Error(X.error||`HTTP ${L.status}`);throw O.status=L.status,O.code=X.code,O}return L.json()}async function Y4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function G4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function O4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function L4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r_($,{method:"DELETE"})}async function k$(_,$=!1){return r_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function F3(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function X4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class y3{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_request",($)=>{this.onEvent("agent_request",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),this.eventSource.addEventListener("agent_request_timeout",($)=>{this.onEvent("agent_request_timeout",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function d0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function d_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function g2(_,$=!1){let j=d0(_);if(j===null)return $;return j==="true"}function c2(_,$=null){let j=d0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function w$(_){return String(_||"").trim().toLowerCase()}function J3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return w$($[1]||"")}function V4(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=w$(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function W4(_,$,j={}){let Z=J3($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return V4(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return w$(K?.agent_name).startsWith(Z)})}function D3(_){let $=w$(_);return $?`@${$} `:""}function q4(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return V4(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function U4({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function B2({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let L=`${_}-file-pill`,X=`${_}-file-name`,O=`${_}-file-remove`,q=z==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${L} title=${j||$} onClick=${N}>
      ${q}
      <span class=${X}>${$}</span>
      ${Z&&U`
        <button
          class=${O}
          onClick=${(W)=>{W.preventDefault(),W.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var r6=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function s6({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${B4(j)} / ${B4(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,L=$/100*z,X=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${L} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function B4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function Q4({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:L,fileRefs:X=[],onRemoveFileRef:O,onClearFileRefs:q,messageRefs:W=[],onRemoveMessageRef:y,onClearMessageRefs:w,activeModel:f=null,modelUsage:I=null,thinkingLevel:v=null,supportsThinking:S=!1,contextUsage:H=null,notificationsEnabled:A=!1,notificationPermission:C="default",onToggleNotifications:c,onModelChange:a,onModelStateChange:t,activeEditorPath:l=null,onAttachEditorFile:N_,onOpenFilePill:i,followupQueueItems:Q_=[],onInjectQueuedFollowup:U_,onRemoveQueuedFollowup:r,onSubmitIntercept:__,onMessageResponse:K_,onPopOutChat:j_,isAgentActive:G_=!1,activeChatAgents:X_=[],currentChatJid:y_="web:default"}){let[Z_,D_]=T(""),[k_,s_]=T(""),[E_,u_]=T([]),[w_,i_]=T(!1),[p,L_]=T([]),[V_,W_]=T(0),[J_,b_]=T(!1),[m_,H_]=T([]),[C_,x_]=T(0),[Y0,l_]=T(!1),[e_,B0]=T(!1),[S_,_0]=T(!1),[Q0,D0]=T([]),[H0,G0]=T(!1),[E0,n_]=T(0),f_=J(null),M0=J(null),g_=J(null),o_=J(null),k0=J(null),B_=J(null),M=J(0),e=200,A_=(B)=>{let x=new Set,n=[];for(let Y_ of B||[]){if(typeof Y_!=="string")continue;let P_=Y_.trim();if(!P_||x.has(P_))continue;x.add(P_),n.push(P_)}return n},v_=()=>{let B=d0("piclaw_compose_history");if(!B)return[];try{let x=JSON.parse(B);if(!Array.isArray(x))return[];return A_(x)}catch{return[]}},w0=(B)=>{d_("piclaw_compose_history",JSON.stringify(B))},s0=J(v_()),$0=J(-1),O0=J(""),V0=Z_.trim()||E_.length>0||X.length>0||W.length>0,a0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),C0=typeof window<"u"&&typeof Notification<"u",R0=typeof window<"u"?Boolean(window.isSecureContext):!1,i2=C0&&R0&&C!=="denied",k2=C==="granted"&&A,c0=k2?"Disable notifications":"Enable notifications",j0=q4(X_,{currentChatJid:y_,limit:4}),j2=j0.length>0,L0=!j&&U4({footerWidth:E0,visibleAgentCount:j0.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),Z0=f||"",I_=S&&v?` (${v})`:"",T0=I_.trim()?`${v}`:"",p0=typeof I?.hint_short==="string"?I.hint_short.trim():"",Z2=[T0||null,p0||null].filter(Boolean).join(" • "),F2=[Z0?`Current model: ${Z0}${I_}`:null,I?.plan?`Plan: ${I.plan}`:null,p0||null,I?.primary?.reset_description||null,I?.secondary?.reset_description||null].filter(Boolean),w2=e_?"Switching model…":F2.join(" • ")||`Current model: ${Z0}${I_} (tap to open model picker)`,F0=(B)=>{if(!B||typeof B!=="object")return;let x=B.model??B.current;if(typeof t==="function")t({model:x??null,thinking_level:B.thinking_level??null,supports_thinking:B.supports_thinking,provider_usage:B.provider_usage??null});if(x&&typeof a==="function")a(x)},b2=(B)=>{let x=B||f_.current;if(!x)return;x.style.height="auto",x.style.height=`${x.scrollHeight}px`,x.style.overflowY="hidden"},l2=(B)=>{if(!B.startsWith("/")||B.includes(`
`)){b_(!1),L_([]);return}let x=B.toLowerCase().split(" ")[0];if(x.length<1){b_(!1),L_([]);return}let n=r6.filter((Y_)=>Y_.name.startsWith(x)||Y_.name.replace(/-/g,"").startsWith(x.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===x))l_(!1),H_([]),L_(n),W_(0),b_(!0);else b_(!1),L_([])},y2=(B)=>{let x=Z_,n=x.indexOf(" "),Y_=n>=0?x.slice(n):"",P_=B.name+Y_;D_(P_),b_(!1),L_([]),requestAnimationFrame(()=>{let t_=f_.current;if(!t_)return;let M_=P_.length;t_.selectionStart=M_,t_.selectionEnd=M_,t_.focus()})},u2=(B)=>{if(J3(B)==null){l_(!1),H_([]);return}let x=W4(X_,B,{currentChatJid:y_});if(x.length>0&&!(x.length===1&&D3(x[0].agent_name).trim().toLowerCase()===String(B||"").trim().toLowerCase()))b_(!1),L_([]),H_(x),x_(0),l_(!0);else l_(!1),H_([])},W2=(B)=>{let x=D3(B?.agent_name);if(!x)return;D_(x),l_(!1),H_([]),requestAnimationFrame(()=>{let n=f_.current;if(!n)return;let Y_=x.length;n.selectionStart=Y_,n.selectionEnd=Y_,n.focus()})},a_=(B)=>{if(j)s_(B);else D_(B),l2(B),u2(B);requestAnimationFrame(()=>b2())},A2=(B)=>{let x=j?k_:Z_,n=x&&!x.endsWith(`
`)?`
`:"",Y_=`${x}${n}${B}`.trimStart();a_(Y_)},S0=(B)=>{let x=B?.command?.model_label;if(x)return x;let n=B?.command?.message;if(typeof n==="string"){let Y_=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(Y_?.[1])return Y_[1].trim()}return null},x0=async(B)=>{if(j||e_)return;B0(!0);try{let x=await t2("default",B,null,[],null,y_),n=S0(x);F0({model:n??f??null,thinking_level:x?.command?.thinking_level,supports_thinking:x?.command?.supports_thinking});try{let Y_=await f2(y_);if(Y_)F0(Y_)}catch{}return _?.(),!0}catch(x){return console.error("Failed to switch model:",x),alert("Failed to switch model: "+x.message),!1}finally{B0(!1)}},N2=async()=>{await x0("/cycle-model")},z$=async(B)=>{if(!B||e_)return;if(await x0(`/model ${B}`))_0(!1)},U0=(B)=>{B.preventDefault(),B.stopPropagation(),_0((x)=>!x)},P2=(B)=>{if(B==="queue"||B==="steer"||B==="auto")return B;return G_?"queue":null},K2=async(B,x,n={})=>{let{includeMedia:Y_=!0,includeFileRefs:P_=!0,includeMessageRefs:t_=!0,clearAfterSubmit:M_=!0,recordHistory:N0=!0}=n||{},i0=typeof B==="string"?B:B&&typeof B?.target?.value==="string"?B.target.value:Z_,J2=typeof i0==="string"?i0:"";if(!J2.trim()&&(Y_?E_.length===0:!0)&&(P_?X.length===0:!0)&&(t_?W.length===0:!0))return;b_(!1),L_([]),l_(!1),H_([]);let u0=Y_?[...E_]:[],Y2=P_?[...X]:[],G2=t_?[...W]:[],l0=J2.trim();if(N0&&l0){let O2=s0.current,y0=A_(O2.filter((x2)=>x2!==l0));if(y0.push(l0),y0.length>200)y0.splice(0,y0.length-200);s0.current=y0,w0(y0),$0.current=-1,O0.current=""}if(M_)D_(""),u_([]),q?.(),w?.();(async()=>{try{if(await __?.({content:l0,submitMode:x,fileRefs:Y2,messageRefs:G2,mediaFiles:u0})){_?.();return}let y0=[];for(let u of u0){let d=await a1(u);y0.push(d.id)}let x2=Y2.length?`Files:
${Y2.map((u)=>`- ${u}`).join(`
`)}`:"",V=G2.length?`Referenced messages:
${G2.map((u)=>`- message:${u}`).join(`
`)}`:"",Q=y0.length?`Images:
${y0.map((u,d)=>{let o=u0[d]?.name||`image-${d+1}`;return`- attachment:${u} (${o})`}).join(`
`)}`:"",k=[l0,x2,V,Q].filter(Boolean).join(`

`),E=await t2("default",k,null,y0,P2(x),y_);if(K_?.(E),E?.command){F0({model:E.command.model_label??f??null,thinking_level:E.command.thinking_level,supports_thinking:E.command.supports_thinking});try{let u=await f2(y_);if(u)F0(u)}catch{}}_?.()}catch(O2){console.error("Failed to post:",O2)}})()},z2=(B)=>{U_?.(B)},M2=(B)=>{if(B.isComposing)return;if(j&&B.key==="Escape"){B.preventDefault(),s_(""),L?.();return}if(Y0&&m_.length>0){let x=f_.current?.value??(j?k_:Z_);if(!String(x||"").match(/^@([a-zA-Z0-9_-]*)$/))l_(!1),H_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),x_((n)=>(n+1)%m_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),x_((n)=>(n-1+m_.length)%m_.length);return}if(B.key==="Tab"||B.key==="Enter"){B.preventDefault(),W2(m_[C_]);return}if(B.key==="Escape"){B.preventDefault(),l_(!1),H_([]);return}}}if(J_&&p.length>0){let x=f_.current?.value??(j?k_:Z_);if(!String(x||"").startsWith("/"))b_(!1),L_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),W_((n)=>(n+1)%p.length);return}if(B.key==="ArrowUp"){B.preventDefault(),W_((n)=>(n-1+p.length)%p.length);return}if(B.key==="Tab"){B.preventDefault(),y2(p[V_]);return}if(B.key==="Enter"&&!B.shiftKey){if(!(f_.current?.value??(j?k_:Z_)).includes(" ")){B.preventDefault();let P_=p[V_];b_(!1),L_([]),K2(P_.name);return}}if(B.key==="Escape"){B.preventDefault(),b_(!1),L_([]);return}}}if(!j&&(B.key==="ArrowUp"||B.key==="ArrowDown")&&!B.metaKey&&!B.ctrlKey&&!B.altKey&&!B.shiftKey){let x=f_.current;if(!x)return;let n=x.value||"",Y_=x.selectionStart===0&&x.selectionEnd===0,P_=x.selectionStart===n.length&&x.selectionEnd===n.length;if(B.key==="ArrowUp"&&Y_||B.key==="ArrowDown"&&P_){let t_=s0.current;if(!t_.length)return;B.preventDefault();let M_=$0.current;if(B.key==="ArrowUp"){if(M_===-1)O0.current=n,M_=t_.length-1;else if(M_>0)M_-=1;$0.current=M_,a_(t_[M_]||"")}else{if(M_===-1)return;if(M_<t_.length-1)M_+=1,$0.current=M_,a_(t_[M_]||"");else $0.current=-1,a_(O0.current||""),O0.current=""}requestAnimationFrame(()=>{let N0=f_.current;if(!N0)return;let i0=N0.value.length;N0.selectionStart=i0,N0.selectionEnd=i0});return}}if(B.key==="Enter"&&!B.shiftKey&&(B.ctrlKey||B.metaKey)){B.preventDefault();let x=f_.current?.value??(j?k_:Z_);if(j){if(x.trim())N?.(x.trim(),Z)}else K2(x,"steer");return}if(B.key==="Enter"&&!B.shiftKey){B.preventDefault();let x=f_.current?.value??(j?k_:Z_);if(j){if(x.trim())N?.(x.trim(),Z)}else K2(x)}},h0=(B)=>{let x=Array.from(B||[]).filter((n)=>n&&n.type&&n.type.startsWith("image/"));if(!x.length)return;u_((n)=>[...n,...x])},t0=(B)=>{h0(B.target.files),B.target.value=""},f0=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),M.current+=1,i_(!0)},e0=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),M.current=Math.max(0,M.current-1),M.current===0)i_(!1)},C2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),B.dataTransfer)B.dataTransfer.dropEffect="copy";i_(!0)},S2=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),M.current=0,i_(!1),h0(B.dataTransfer?.files||[])},_2=(B)=>{if(j)return;let x=B.clipboardData?.items;if(!x||!x.length)return;let n=[];for(let Y_ of x){if(Y_.kind!=="file")continue;let P_=Y_.getAsFile?.();if(P_)n.push(P_)}if(n.length>0)B.preventDefault(),h0(n)},q2=(B)=>{u_((x)=>x.filter((n,Y_)=>Y_!==B))},n2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((B)=>{let{latitude:x,longitude:n,accuracy:Y_}=B.coords,P_=`${x.toFixed(5)}, ${n.toFixed(5)}`,t_=Number.isFinite(Y_)?` ±${Math.round(Y_)}m`:"",M_=`https://maps.google.com/?q=${x},${n}`,N0=`Location: ${P_}${t_} ${M_}`;A2(N0)},(B)=>{let x=B?.message||"Unable to retrieve location.";alert(`Location error: ${x}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};m(()=>{if(!S_)return;G0(!0),f2(y_).then((B)=>{let x=Array.isArray(B?.models)?B.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];D0(x),F0(B)}).catch((B)=>{console.warn("Failed to load model list:",B),D0([])}).finally(()=>{G0(!1)})},[S_,f]),m(()=>{if(j)_0(!1),b_(!1),L_([]),l_(!1),H_([])},[j]),m(()=>{if(!S_)return;let B=(x)=>{let n=o_.current,Y_=k0.current,P_=x.target;if(n&&n.contains(P_))return;if(Y_&&Y_.contains(P_))return;_0(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[S_]),m(()=>{let B=()=>{let Y_=B_.current?.clientWidth||0;n_((P_)=>P_===Y_?P_:Y_)};B();let x=B_.current,n=null;if(x&&typeof ResizeObserver<"u")n=new ResizeObserver(()=>B()),n.observe(x);if(typeof window<"u")window.addEventListener("resize",B);return()=>{if(n?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",B)}},[j,f,j0.length,H?.percent]);let b0=(B)=>{let x=B.target.value;b2(B.target),a_(x)};return m(()=>{requestAnimationFrame(()=>b2())},[Z_,k_,j]),m(()=>{if(j)return;u2(Z_)},[X_,y_,Z_,j]),U`
        <div class="compose-box">
            ${!j&&Q_.length>0&&U`
                <div class="compose-queue-stack">
                    ${Q_.map((B)=>{let x=typeof B?.content==="string"?B.content:"";if(!x.trim())return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${x}>
                                    ${x}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>z2(B)}
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
                                    onClick=${()=>r?.(B)}
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
                class=${`compose-input-wrapper${w_?" drag-active":""}`}
                onDragEnter=${f0}
                onDragOver=${C2}
                onDragLeave=${e0}
                onDrop=${S2}
            >
                <div class="compose-input-main">
                    ${(X.length>0||E_.length>0||W.length>0)&&U`
                        <div class="compose-file-refs">
                            ${W.map((B)=>{return U`
                                    <${B2}
                                        key=${"msg-"+B}
                                        prefix="compose"
                                        label=${"msg:"+B}
                                        title=${"Message reference: "+B}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>y?.(B)}
                                    />
                                `})}
                            ${X.map((B)=>{let x=B.split("/").pop()||B;return U`
                                    <${B2}
                                        prefix="compose"
                                        label=${x}
                                        title=${B}
                                        onClick=${()=>i?.(B)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>O?.(B)}
                                    />
                                `})}
                            ${E_.map((B,x)=>{let n=B?.name||`image-${x+1}`;return U`
                                    <${B2}
                                        key=${n+x}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove image"
                                        onRemove=${()=>q2(x)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof j_==="function"&&U`
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
                        ref=${f_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?k_:Z_}
                        onInput=${b0}
                        onKeyDown=${M2}
                        onPaste=${_2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Y0&&m_.length>0&&U`
                        <div class="slash-autocomplete" ref=${g_}>
                            ${m_.map((B,x)=>U`
                                <div
                                    key=${B.chat_jid||B.agent_name}
                                    class=${`slash-item${x===C_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),W2(B)}}
                                    onMouseEnter=${()=>x_(x)}
                                >
                                    <span class="slash-name">@${B.agent_name}</span>
                                    <span class="slash-desc">${B.display_name||B.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${J_&&p.length>0&&U`
                        <div class="slash-autocomplete" ref=${M0}>
                            ${p.map((B,x)=>U`
                                <div
                                    key=${B.name}
                                    class=${`slash-item${x===V_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),y2(B)}}
                                    onMouseEnter=${()=>W_(x)}
                                >
                                    <span class="slash-name">${B.name}</span>
                                    <span class="slash-desc">${B.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${S_&&!j&&U`
                        <div class="compose-model-popup" ref=${o_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${H0&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!H0&&Q0.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!H0&&Q0.map((B)=>U`
                                    <button
                                        key=${B}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${f===B?" active":""}`}
                                        onClick=${()=>{z$(B)}}
                                        disabled=${e_}
                                    >
                                        ${B}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{N2()}}
                                    disabled=${e_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${B_}>
                    ${!j&&f&&U`
                    <div class="compose-meta-row">
                        ${!j&&f&&U`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${w2}
                                    aria-label="Open model picker"
                                    onClick=${U0}
                                    disabled=${e_}
                                >
                                    ${e_?"Switching…":Z0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!e_&&Z2&&U`
                                        <span class="compose-model-usage-hint" title=${w2}>
                                            ${Z2}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${L0&&U`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${j0.map((B)=>U`
                                <button
                                    key=${B.chat_jid||B.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${B.is_active?" active":""}`}
                                    onClick=${()=>W2(B)}
                                    title=${`${B.display_name||B.chat_jid||"Active agent"} — insert @${B.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${B.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&U`
                        <${s6} usage=${H} />
                    `}
                    ${j&&U`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(B)=>K?.(B.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?L:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:U`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${a0&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${n2}
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
                    ${i2&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${k2?" active":""}`}
                            onClick=${c}
                            title=${c0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&U`
                        ${l&&N_&&U`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${l}`}
                                type="button"
                                disabled=${X.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${t0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{K2()}}
                            disabled=${!V0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var F4="piclaw_theme",w3="piclaw_tint",P$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},a6={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},H4={default:{label:"Default",mode:"auto",light:P$,dark:a6},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},t6=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],M$={theme:"default",tint:null},y4="light",E3=!1;function J4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function p2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function e6(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),L=parseInt(N[3],10);if(![K,z,L].every((O)=>Number.isFinite(O)))return null;let X=`#${[K,z,L].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:L,hex:X}}function D4(_){return p2(_)||e6(_)}function _$(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function k3(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function E4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function b3(_){return H4[_]||H4.default}function _5(_){return _.mode==="auto"?E4():_.mode}function $5(_,$){let j=b3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||P$}function j5(_,$,j){let Z=D4($);if(!Z)return _;let N=p2(_.bgPrimary),K=p2(_.bgSecondary),z=p2(_.bgHover),L=p2(_.borderColor);if(!N||!K||!z||!L)return _;let O=p2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:_$(N,Z,0.08),bgSecondary:_$(K,Z,0.12),bgHover:_$(z,Z,0.16),borderColor:_$(L,Z,0.08),accent:Z.hex,accentHover:O?_$(Z,O,0.18):Z.hex}}function Z5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=D4(Z),K=N?k3(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?k3(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",L=N?k3(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":L,"--danger-color":_.danger||P$.danger,"--success-color":_.success||P$.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([O,q])=>{if(q)j.style.setProperty(O,q)})}function N5(){if(typeof document>"u")return;let _=document.documentElement;t6.forEach(($)=>_.style.removeProperty($))}function b$(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function K5(_,$){if(typeof document>"u")return;let j=b$("theme-color");if(j&&_)j.setAttribute("content",_);let Z=b$("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=b$("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let K=b$("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function z5(){if(typeof window>"u")return;let _={...M$,mode:y4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function A3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=J4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=b3(j),K=_5(N),z=$5(j,K);M$={theme:j,tint:Z},y4=K;let L=document.documentElement;L.dataset.theme=K,L.dataset.colorTheme=j,L.dataset.tint=Z?String(Z):"",L.style.colorScheme=K;let X=z;if(j==="default"&&Z)X=j5(z,Z,K);if(j==="default"&&!Z)N5();else Z5(X,K);if(K5(X.bgPrimary,K),z5(),$.persist!==!1)if(d_(F4,j),Z)d_(w3,Z);else d_(w3,"")}function A$(){if(b3(M$.theme).mode!=="auto")return;A3(M$,{persist:!1})}function k4(){if(typeof window>"u")return()=>{};let _=J4(d0(F4)||"default"),$=d0(w3),j=$?$.trim():null;if(A3({theme:_,tint:j},{persist:!1}),window.matchMedia&&!E3){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",A$);else if(Z.addListener)Z.addListener(A$);return E3=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",A$);else if(Z.removeListener)Z.removeListener(A$);E3=!1}}return()=>{}}function w4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;A3({theme:j||"default",tint:Z},{persist:!0})}function b4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return E4()}var C$=/#(\w+)/g,Y5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),G5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),O5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),L5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},X5=new Set(["http:","https:","mailto:",""]);function A4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function I2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!X5.has(Z.protocol))return null;return Z.href}catch{return null}}function P4(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let L=z.tagName.toLowerCase();if(!G5.has(L)){let O=z.parentNode;if(!O)continue;while(z.firstChild)O.insertBefore(z.firstChild,z);O.removeChild(z);continue}let X=L5[L]||new Set;for(let O of Array.from(z.attributes)){let q=O.name.toLowerCase(),W=O.value;if(q.startsWith("on")){z.removeAttribute(O.name);continue}if(q.startsWith("data-")||q.startsWith("aria-"))continue;if(X.has(q)||O5.has(q)){if(q==="href"){let y=I2(W);if(!y)z.removeAttribute(O.name);else if(z.setAttribute(O.name,y),L==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(q==="src"){let y=L==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,w=I2(y,{allowDataImage:L==="img"});if(!w)z.removeAttribute(O.name);else z.setAttribute(O.name,w)}continue}z.removeAttribute(O.name)}}return j.body.innerHTML}function M4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function S$(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=M4(j);if(N===j)break;j=N}return j}function V5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let L of j){if(!K&&L.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&L.trim().match(/^```\s*$/)){let X=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${X}@@`),K=!1,z=[];continue}if(K)z.push(L);else N.push(L)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function W5(_){if(!_)return _;return S$(_,5)}function q5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function U5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function B5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=W5(K);return`<div class="mermaid-container" data-mermaid="${q5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function C4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function S4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!X||!Y5.has(X))return $;if(X==="br")return N?"":"<br>";if(N)return`</${X}>`;return`<${X}>`})}function x4(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function f4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function Q5(_){if(!window.katex)return _;let $=(z)=>M4(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let L=[],X=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let q=L.length;return L.push(O),`@@CODE_BLOCK_${q}@@`});return X=X.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let q=L.length;return L.push(O),`@@CODE_INLINE_${q}@@`}),{html:X,blocks:L}},Z=(z,L)=>{if(!L.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(X,O)=>{let q=Number(O);return L[q]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,L,X)=>{try{let O=katex.renderToString($(X.trim()),{displayMode:!0,throwOnError:!1});return`${L}${O}`}catch(O){return`<span class="math-error" title="${A4(O.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,L,X)=>{if(/\s$/.test(X))return z;try{let O=katex.renderToString($(X),{displayMode:!1,throwOnError:!1});return`${L}${O}`}catch(O){return`${L}<span class="math-error" title="${A4(O.message)}">$${X}$</span>`}}),Z(K,N.blocks)}function H5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(C$.lastIndex=0,!C$.test(z))continue;C$.lastIndex=0;let L=K.parentElement;if(L&&(L.closest("a")||L.closest("code")||L.closest("pre")))continue;let X=z.split(C$);if(X.length<=1)continue;let O=$.createDocumentFragment();X.forEach((q,W)=>{if(W%2===1){let y=$.createElement("a");y.setAttribute("href","#"),y.className="hashtag",y.setAttribute("data-hashtag",q),y.textContent=`#${q}`,O.appendChild(y)}else O.appendChild($.createTextNode(q))}),K.parentNode?.replaceChild(O,K)}return $.body.innerHTML}function F5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function v0(_,$,j={}){if(!_)return"";let Z=F5(_),{text:N,blocks:K}=V5(Z),z=S$(N,2),X=C4(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=S4(X),q=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return q=x4(q),q=f4(q),q=Q5(q),q=H5(q),q=B5(q,K),q=P4(q,j),q}function x$(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=S$($,2),N=C4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=S4(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=x4(z),z=f4(z),z=P4(z),z}async function Q2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=b4()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let L=z.dataset.mermaid,X=U5(L||""),O=S$(X,2),q=await $(O,{...N,transparent:!0});z.innerHTML=q,z.removeAttribute("data-mermaid")}catch(L){console.error("Mermaid render error:",L);let X=document.createElement("pre");X.className="mermaid-error",X.textContent=`Diagram error: ${L.message}`,z.innerHTML="",z.appendChild(X),z.removeAttribute("data-mermaid")}}function I4(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function T4(_){return String(_||"").trim()||"web:default"}function u4(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function m4(_){if(!_)return!1;return _.status!=="running"}function v4(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function R4({session:_,onClose:$,onInject:j,onRetry:Z}){let N=J(null),K=J(null),z=_?.thinking?x$(_.thinking):"",L=_?.answer?v0(_.answer,null,{sanitize:!1}):"";if(m(()=>{if(N.current&&z)Q2(N.current).catch(()=>{})},[z]),m(()=>{if(K.current&&L)Q2(K.current).catch(()=>{})},[L]),!_)return null;let X=_.status==="running",O=Boolean(String(_.answer||"").trim()),q=Boolean(String(_.thinking||"").trim()),W=u4(_),y=m4(_),w=!X&&O,f=X?"Thinking…":_.status==="error"?"Error":"Done";return U`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${f}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&U`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&U`<div class="btw-block btw-error">${_.error}</div>`}
            ${q&&U`
                <details class="btw-block btw-thinking" open=${X?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${W&&U`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:L}}
                    ></div>
                </div>
            `}

            ${y&&U`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&U`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!w}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var g4="PiClaw";function P3(_,$){let j=_||"PiClaw",Z=j.charAt(0).toUpperCase(),N=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=Z.charCodeAt(0)%N.length,z=N[K],L=j.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",q=(X?X:null)||(L==="PiClaw".toLowerCase()||L==="pi"?"/static/icon-192.png":null);return{letter:Z,color:z,image:q}}function c4(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function p4(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function h4(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",L=K?.dataset?.tint||"",X=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(X&&(L||z&&z!=="default"))return X}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function y5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function f$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function J5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function i4(_,$=Date.now()){let j=y5(_);if(j===null)return null;return J5(Math.max(0,$-j))}function l4({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:L,onPanelToggle:X}){let W=(p)=>{if(!p)return{text:"",totalLines:0,fullText:""};if(typeof p==="string"){let J_=p,b_=J_?J_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:J_,totalLines:b_,fullText:J_}}let L_=p.text||"",V_=p.fullText||p.full_text||L_,W_=Number.isFinite(p.totalLines)?p.totalLines:V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:L_,totalLines:W_,fullText:V_}},y=160,w=(p)=>{if(!p)return 1;return Math.max(1,Math.ceil(p.length/160))},f=(p,L_,V_)=>{let W_=(p||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!W_)return{text:"",omitted:0,totalLines:Number.isFinite(V_)?V_:0,visibleLines:0};let J_=W_.split(`
`),b_=J_.length>L_?J_.slice(0,L_).join(`
`):W_,m_=Number.isFinite(V_)?V_:J_.reduce((x_,Y0)=>x_+w(Y0),0),H_=b_?b_.split(`
`).reduce((x_,Y0)=>x_+w(Y0),0):0,C_=Math.max(m_-H_,0);return{text:b_,omitted:C_,totalLines:m_,visibleLines:H_}},I=W(j),v=W(Z),S=W($),H=Boolean(I.text)||I.totalLines>0,A=Boolean(v.text)||v.totalLines>0,C=Boolean(S.fullText?.trim()||S.text?.trim());if(!_&&!C&&!H&&!A&&!N&&!K)return null;let[c,a]=T(new Set),[t,l]=T(()=>Date.now()),N_=(p)=>a((L_)=>{let V_=new Set(L_),W_=!V_.has(p);if(W_)V_.add(p);else V_.delete(p);if(typeof X==="function")X(p,W_);return V_});m(()=>{a(new Set)},[z]);let i=f$(_);m(()=>{if(!i)return;l(Date.now());let p=setInterval(()=>l(Date.now()),1000);return()=>clearInterval(p)},[i,_?.started_at,_?.startedAt]);let Q_=_?.turn_id||z,U_=h4(Q_),r=L?"turn-dot turn-dot-queued":"turn-dot",__=(p)=>p,K_=Boolean(_?.last_activity||_?.lastActivity),j_=(p)=>p==="warning"?"#f59e0b":p==="error"?"var(--danger-color)":p==="success"?"var(--success-color)":U_,G_=K?.kind||"info",X_=j_(G_),y_=j_(_?.kind||(i?"warning":"info")),Z_="",D_=_?.title,k_=_?.status;if(_?.type==="plan")Z_=D_?`Planning: ${D_}`:"Planning...";else if(_?.type==="tool_call")Z_=D_?`Running: ${D_}`:"Running tool...";else if(_?.type==="tool_status")Z_=D_?`${D_}: ${k_||"Working..."}`:k_||"Working...";else if(_?.type==="error")Z_=D_||"Agent error";else Z_=D_||k_||"Working...";if(K_)Z_="Last activity just now";let s_=({panelTitle:p,text:L_,fullText:V_,totalLines:W_,maxLines:J_,titleClass:b_,panelKey:m_})=>{let H_=c.has(m_),C_=V_||L_||"",x_=typeof J_==="number",Y0=H_&&x_,l_=x_?f(C_,J_,W_):{text:C_||"",omitted:0,totalLines:Number.isFinite(W_)?W_:0};if(!C_&&!(Number.isFinite(l_.totalLines)&&l_.totalLines>0))return null;let e_=`agent-thinking-body${x_?" agent-thinking-body-collapsible":""}`,B0=x_?`--agent-thinking-collapsed-lines: ${J_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${H_?"true":"false"}
                data-collapsible=${x_?"true":"false"}
                style=${U_?`--turn-color: ${U_};`:""}
            >
                <div class="agent-thinking-title ${b_||""}">
                    ${U_&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${p}
                    ${Y0&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${p} panel`}
                            onClick=${()=>N_(m_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${e_}
                    style=${B0}
                    dangerouslySetInnerHTML=${{__html:x$(C_)}}
                />
                ${!H_&&l_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>N_(m_)}>
                        ▸ ${l_.omitted} more lines
                    </button>
                `}
                ${H_&&l_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>N_(m_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},E_=N?.tool_call?.title,u_=E_?`Awaiting approval: ${E_}`:"Awaiting approval",w_=i?i4(_,t):null,i_=(p,L_,V_=null)=>U`
        <div
            class="agent-thinking agent-thinking-intent"
            aria-live="polite"
            style=${L_?`--turn-color: ${L_};`:""}
            title=${p?.detail||""}
        >
            <div class="agent-thinking-title intent">
                ${L_&&U`<span class=${r} aria-hidden="true"></span>`}
                <span class="agent-thinking-title-text">${p.title}</span>
                ${V_&&U`<span class="agent-status-elapsed">${V_}</span>`}
            </div>
            ${p.detail&&U`<div class="agent-thinking-body">${p.detail}</div>`}
        </div>
    `;return U`
        <div class="agent-status-panel">
            ${K&&i_(K,X_)}
            ${_?.type==="intent"&&i_(_,y_,w_)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${U_?`--turn-color: ${U_};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${u_}</span>
                </div>
            `}
            ${H&&s_({panelTitle:__("Planning"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,panelKey:"plan"})}
            ${A&&s_({panelTitle:__("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&s_({panelTitle:__("Draft"),text:S.text,fullText:S.fullText,totalLines:S.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${K_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${U_?`--turn-color: ${U_};`:""}>
                    ${U_&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!K_&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Z_}</span>
                </div>
            `}
        </div>
    `}function n4({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",L=Z?.kind||"other",X=Z?.rawInput||{},O=X.command||X.commands&&X.commands[0]||null,q=X.diff||null,W=X.fileName||X.path||null,y=Z?.description||X.description||X.explanation||null,f=(Array.isArray(Z?.locations)?Z.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),I=Array.from(new Set([W,...f].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(A)=>{try{await B3(j,A,K||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},S=async()=>{try{await e1(z,`Auto-approved: ${z}`),await B3(j,"approved",K||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},H=N&&N.length>0;return U`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${z}</div>
                </div>
                ${(y||O||q||I.length>0)&&U`
                    <div class="agent-request-body">
                        ${y&&U`
                            <div class="agent-request-description">${y}</div>
                        `}
                        ${I.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${I.map((A,C)=>U`<li key=${C}>${A}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${O&&U`
                            <pre class="agent-request-command">${O}</pre>
                        `}
                        ${q&&U`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((A)=>U`
                            <button 
                                key=${A.optionId||A.id||String(A)}
                                class="agent-request-btn ${A.kind==="allow_once"||A.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(A.optionId||A.id||A)}
                            >
                                ${A.name||A.label||A.optionId||A.id||String(A)}
                            </button>
                        `):U`
                        <button class="agent-request-btn primary" onClick=${()=>v("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>v("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${S}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function o4({status:_}){if(_==="connected")return null;return U`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function d4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let X=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${X} ${O}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${L}`}function $$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function r0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function T2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var D5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),E5=new Set(["text/markdown"]);function j$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(D5.has($)||$.startsWith("text/"))return"text";return"unsupported"}function r4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return E5.has($)}function s4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function k5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function w5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function a4(_){return k5(_)||w5(_)}function I$(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function b5(_,$){let j=Math.max(I$(_),I$($)),Z=Math.min(I$(_),I$($));return(j+0.05)/(Z+0.05)}function A5(_,$,j="#ffffff"){let Z=a4(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let L=a4(z);if(!L)continue;let X=b5(Z,L);if(X>K)N=z,K=X}return N}function M3(){let _=getComputedStyle(document.documentElement),$=(f,I)=>{for(let v of f){let S=_.getPropertyValue(v).trim();if(S)return S}return I},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),L=$(["--accent-color","--color-accent"],"#1d9bf0"),X=$(["--success-color","--color-success"],"#00ba7c"),O=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),q=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),y=$(["--font-family"],"system-ui, sans-serif"),w=A5(L,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:L,good:X,warning:O,attention:q,border:W,fontFamily:y,buttonTextColor:w}}function t4(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:L,border:X,fontFamily:O}=M3();return{fontFamily:O,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:L,subtle:L}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:L,subtle:L}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:X},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var P5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),e4=!1,T$=null,_8=!1;function C3(_){_.querySelector(".adaptive-card-notice")?.remove()}function M5(_,$,j="error"){C3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function C5(_,$=(j)=>v0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function S5(_=($)=>v0($,null)){return($,j)=>{try{let Z=C5($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function x5(_){if(_8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=S5(),_8=!0}async function f5(){if(e4)return;if(T$)return T$;return T$=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{e4=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),T$}function I5(){return globalThis.AdaptiveCards}function T5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function u5(_){return P5.has(_)}function x3(_){if(!Array.isArray(_))return[];return _.filter(T5)}function m5(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function S3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>S3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${S3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function v5(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return S3($);return typeof $==="string"?$:String($)}function R5(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((L)=>Z(L));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=v5(z.type,j[z.id],z);for(let[L,X]of Object.entries(z))if(Array.isArray(X)||X&&typeof X==="object")z[L]=Z(X);return z};return Z(_)}function g5(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function c5(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function p5(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=c5(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function $8(_,$,j){if(!u5($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await f5()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=I5();x5(Z);let N=new Z.AdaptiveCard,K=M3();N.hostConfig=new Z.HostConfig(t4());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,L=$.state==="active"?$.payload:R5($.payload,z);N.parse(L),N.onExecuteAction=(q)=>{let W=m5(q);if(j?.onAction)C3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((y)=>{console.error("[adaptive-card] Action failed:",y);let w=y instanceof Error?y.message:String(y||"Action failed.");M5(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let X=N.render();if(!X)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let O=p5($);if(O){_.classList.add("adaptive-card-finished");let q=document.createElement("div");q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=O.label,q.appendChild(W),O.detail){let y=document.createElement("span");y.className="adaptive-card-status-detail",y.textContent=O.detail,q.appendChild(y)}_.appendChild(q)}if(C3(_),_.appendChild(X),O)g5(X);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function h2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>h2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${h2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function h5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function f3(_){if(!Array.isArray(_))return[];return _.filter(h5)}function j8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=h2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:h2(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function Z8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:h2(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):h2(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function i5(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?r0($):null},{label:"Added",value:_?.created_at?T2(_.created_at):null}].filter((Z)=>Z.value)}function N8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=h_(()=>j$($?.content_type),[$?.content_type]),K=s4(N),z=h_(()=>r4($?.content_type),[$?.content_type]),[L,X]=T(N==="text"||N==="pdf"),[O,q]=T(""),[W,y]=T(null),[w,f]=T(null),I=J(null),v=h_(()=>i5($),[$]),S=h_(()=>{if(!z||!O)return"";return v0(O)},[z,O]);return m(()=>{let H=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[j]),m(()=>{if(!I.current||!S)return;Q2(I.current);return},[S]),m(()=>{let H=!1,A=null;async function C(){if(N==="text"){X(!0),f(null);try{let c=await Z4(_);if(!H)q(c)}catch{if(!H)f("Failed to load text preview.")}finally{if(!H)X(!1)}return}if(N==="pdf"){X(!0),f(null);try{let c=await N4(_);if(A=URL.createObjectURL(c),!H)y(A)}catch{if(!H)f("Failed to load PDF preview.")}finally{if(!H)X(!1)}return}X(!1)}return C(),()=>{if(H=!0,A)URL.revokeObjectURL(A)}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(H)=>{H.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${X2(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(H)=>H.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${L&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!L&&w&&U`<div class="attachment-preview-state">${w}</div>`}
                    ${!L&&!w&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${X2(_)} alt=${Z} />
                    `}
                    ${!L&&!w&&N==="pdf"&&W&&U`
                        <iframe class="attachment-preview-frame" src=${W} title=${Z}></iframe>
                    `}
                    ${!L&&!w&&N==="text"&&z&&U`
                        <div
                            ref=${I}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:S}}
                        />
                    `}
                    ${!L&&!w&&N==="text"&&!z&&U`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!L&&!w&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((H)=>U`
                        <div class="attachment-preview-meta-item" key=${H.label}>
                            <span class="attachment-preview-meta-label">${H.label}</span>
                            <span class="attachment-preview-meta-value">${H.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function K8({src:_,onClose:$}){return m(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function l5({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(m(()=>{e2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?r0(K):"",X=j$(j.content_type)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${X2(_)} download=${N} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${N}</span>
                    <span class="file-meta-row">
                        ${z&&U`<span class="file-size">${z}</span>`}
                        ${j.content_type&&U`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${X}
            </button>
        </div>
    `}function n5({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);m(()=>{if(!Number.isFinite(j))return;e2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?X2(j):null,X=j$(Z?.content_type)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${K}>
            ${z?U`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${B2}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:U`
                    <${B2}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${X}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function u$({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?T2(Z):null;return U`
        <div class="content-annotations">
            ${$&&$.length>0&&U`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&U`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&U`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function o5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?r0(_.size):"",N=_.mime_type||"",K=r5(N),z=I2(_.uri);return U`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(L)=>L.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&U`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&U`<span>${N}</span>`}
                    ${Z&&U`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function d5({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&U`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(L)=>{L.preventDefault(),L.stopPropagation();let X=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:z||"application/octet-stream"}),O=URL.createObjectURL(X),q=document.createElement("a");q.href=O,q.download=Z.split("/").pop()||"resource",q.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function r5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function s5({preview:_}){let $=I2(_.url),j=I2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&U`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function a5(_,$){return typeof _==="string"?_:""}var t5=1800,e5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,_9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,$9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function j9(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function Z9(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let L=z||"idle";if(K.dataset.copyState=L,L==="success")K.innerHTML=_9,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(L==="error")K.innerHTML=$9,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=e5,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let L=document.createElement("button");L.type="button",L.className="post-code-copy-btn",N(L,"idle"),z.appendChild(L);let X=async(O)=>{O.preventDefault(),O.stopPropagation();let W=K.querySelector("code")?.textContent||"",y=await j9(W);N(L,y?"success":"error");let w=j.get(L);if(w)clearTimeout(w);let f=setTimeout(()=>{N(L,"idle"),j.delete(L)},t5);j.set(L,f)};L.addEventListener("click",X),Z.push(()=>{L.removeEventListener("click",X);let O=j.get(L);if(O)clearTimeout(O);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function N9(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Files:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O))N.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),L=j.slice(K),X=[...z,...L].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,fileRefs:N}}function K9(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Referenced messages:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O)){let W=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)N.push(W[1])}else if(!O.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),L=j.slice(K),X=[...z,...L].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,messageRefs:N}}function z9(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Images:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O)){let q=O.replace(/^\s*-\s+/,"").trim(),W=q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let y=W[1],w=(W[2]||"").trim()||y;N.push({id:y,label:w,raw:q})}else N.push({id:null,label:q,raw:q})}else if(!O.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),L=j.slice(K),X=[...z,...L].join(`
`);return X=X.replace(/\n{3,}/g,`

`).trim(),{content:X,attachments:N}}function Y9(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function G9(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(Y9).sort((q,W)=>W.length-q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),L=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),X=[],O;while(O=L.nextNode())X.push(O);for(let q of X){let W=q.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let y=q.parentElement;if(y&&y.closest("code, pre, script, style"))continue;let w=W.split(N).filter((I)=>I!=="");if(w.length===0)continue;let f=z.createDocumentFragment();for(let I of w)if(K.test(I)){let v=z.createElement("mark");v.className="search-highlight-term",v.textContent=I,f.appendChild(v)}else f.appendChild(z.createTextNode(I));q.parentNode.replaceChild(f,q)}return z.body.innerHTML}function z8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:L,userAvatarUrl:X,userAvatarBackground:O,onDelete:q,isThreadReply:W,isThreadPrev:y,isThreadNext:w,isRemoving:f,highlightQuery:I,onFileRef:v}){let[S,H]=T(null),A=J(null),C=_.data,c=C.type==="agent_response",a=L||"You",t=c?K||g4:a,l=c?P3(K,z):P3(a,X),N_=typeof O==="string"?O.trim().toLowerCase():"",i=!c&&l.image&&(N_==="clear"||N_==="transparent"),Q_=c&&Boolean(l.image),U_=`background-color: ${i||Q_?"transparent":l.color}`,r=C.content_meta,__=Boolean(r?.truncated),K_=Boolean(r?.preview),j_=__&&!K_,G_=__?{originalLength:Number.isFinite(r?.original_length)?r.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,X_=C.content_blocks||[],y_=C.media_ids||[],Z_=a5(C.content,C.link_previews),{content:D_,fileRefs:k_}=N9(Z_),{content:s_,messageRefs:E_}=K9(D_),{content:u_,attachments:w_}=z9(s_);Z_=u_;let i_=x3(X_),p=f3(X_),L_=i_.length===1&&typeof i_[0]?.fallback_text==="string"?i_[0].fallback_text.trim():"",V_=p.length===1?j8(p[0]).trim():"",W_=Boolean(L_)&&Z_?.trim()===L_||Boolean(V_)&&Z_?.trim()===V_,J_=Boolean(Z_)&&!j_&&!W_,b_=typeof I==="string"?I.trim():"",m_=h_(()=>{if(!Z_||W_)return"";let M=v0(Z_,j);return b_?G9(M,b_):M},[Z_,W_,b_]),H_=(M,e)=>{M.stopPropagation(),H(X2(e))},[C_,x_]=T(null),Y0=(M)=>{x_(M)},l_=(M)=>{M.stopPropagation(),q?.(_)},e_=(M,e)=>{let A_=new Set;if(!M||e.length===0)return{content:M,usedIds:A_};return{content:M.replace(/attachment:([^\s)"']+)/g,(w0,s0,$0,O0)=>{let V0=s0.replace(/^\/+/,""),C0=e.find((g0)=>g0.name&&g0.name.toLowerCase()===V0.toLowerCase()&&!A_.has(g0.id))||e.find((g0)=>!A_.has(g0.id));if(!C0)return w0;if(A_.add(C0.id),O0.slice(Math.max(0,$0-2),$0)==="](")return`/media/${C0.id}`;return C0.name||"attachment"}),usedIds:A_}},B0=[],S_=[],_0=[],Q0=[],D0=[],H0=[],G0=0;if(X_.length>0)X_.forEach((M)=>{if(M?.type==="text"&&M.annotations)H0.push(M.annotations);if(M?.type==="resource_link")Q0.push(M);else if(M?.type==="resource")D0.push(M);else if(M?.type==="file"){let e=y_[G0++];if(e)S_.push(e),_0.push({id:e,name:M?.name||M?.filename||M?.title})}else if(M?.type==="image"||!M?.type){let e=y_[G0++];if(e){let A_=typeof M?.mime_type==="string"?M.mime_type:void 0;B0.push({id:e,annotations:M?.annotations,mimeType:A_}),_0.push({id:e,name:M?.name||M?.filename||M?.title})}}});else if(y_.length>0)y_.forEach((M)=>{B0.push({id:M,annotations:null}),_0.push({id:M,name:null})});if(w_.length>0)w_.forEach((M)=>{if(!M?.id)return;let e=_0.find((A_)=>String(A_.id)===String(M.id));if(e&&!e.name)e.name=M.label});let{content:E0,usedIds:n_}=e_(Z_,_0);Z_=E0;let f_=B0.filter(({id:M})=>!n_.has(M)),M0=S_.filter((M)=>!n_.has(M)),g_=w_.length>0?w_.map((M,e)=>({id:M.id||`attachment-${e+1}`,label:M.label||`attachment-${e+1}`})):_0.map((M,e)=>({id:M.id,label:M.name||`attachment-${e+1}`})),o_=h_(()=>x3(X_),[X_]),k0=h_(()=>f3(X_),[X_]);m(()=>{if(!A.current)return;return Q2(A.current),Z9(A.current)},[m_]);let B_=J(null);return m(()=>{if(!B_.current||o_.length===0)return;let M=B_.current;M.innerHTML="";for(let e of o_){let A_=document.createElement("div");M.appendChild(A_),$8(A_,e,{onAction:async(v_)=>{if(v_.type==="Action.OpenUrl"){let w0=I2(v_.url||"");if(!w0)throw Error("Invalid URL");window.open(w0,"_blank","noopener,noreferrer");return}if(v_.type==="Action.Submit"){await t1({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:v_.type,title:v_.title||"",data:v_.data}});return}console.warn("[post] unsupported adaptive card action:",v_.type,v_)}}).catch((v_)=>{console.error("[post] adaptive card render error:",v_),A_.textContent=e.fallback_text||"Card failed to render."})}},[o_,C.thread_id,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${W?"thread-reply":""} ${y?"thread-prev":""} ${w?"thread-next":""} ${f?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${l.image?"has-image":""}" style=${U_}>
                ${l.image?U`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${l_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(M)=>{if(M.preventDefault(),M.stopPropagation(),Z)Z(_.id)}}>${d4(_.timestamp)}</a>
                </div>
                ${j_&&G_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${$$(G_.originalLength)} chars
                            ${G_.maxLength?U` • Display limit: ${$$(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&G_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${$$(G_.maxLength)} of ${$$(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(k_.length>0||E_.length>0||g_.length>0)&&U`
                    <div class="post-file-refs">
                        ${E_.map((M)=>{let e=(A_)=>{if(A_.preventDefault(),A_.stopPropagation(),N)N(M,_.chat_jid||null);else{let v_=document.getElementById("post-"+M);if(v_)v_.scrollIntoView({behavior:"smooth",block:"center"}),v_.classList.add("post-highlight"),setTimeout(()=>v_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${M}`} class="post-msg-pill-link" onClick=${e}>
                                    <${B2}
                                        prefix="post"
                                        label=${"msg:"+M}
                                        title=${"Message "+M}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${k_.map((M)=>{let e=M.split("/").pop()||M;return U`
                                <${B2}
                                    prefix="post"
                                    label=${e}
                                    title=${M}
                                    onClick=${()=>v?.(M)}
                                />
                            `})}
                        ${g_.map((M)=>U`
                            <${n5}
                                key=${M.id}
                                attachment=${M}
                                onPreview=${Y0}
                            />
                        `)}
                    </div>
                `}
                ${J_&&U`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:m_}}
                        onClick=${(M)=>{if(M.target.classList.contains("hashtag")){M.preventDefault(),M.stopPropagation();let e=M.target.dataset.hashtag;if(e)j?.(e)}else if(M.target.tagName==="IMG")M.preventDefault(),M.stopPropagation(),H(M.target.src)}}
                    />
                `}
                ${o_.length>0&&U`
                    <div ref=${B_} class="post-adaptive-cards" />
                `}
                ${k0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${k0.map((M,e)=>{let A_=Z8(M);return U`
                                <div key=${`${M.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${A_.title}</span>
                                    </div>
                                    ${A_.summary&&U`
                                        <div class="adaptive-card-submission-summary">${A_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${T2(A_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${H0.length>0&&U`
                    ${H0.map((M,e)=>U`
                        <${u$} key=${e} annotations=${M} />
                    `)}
                `}
                ${f_.length>0&&U`
                    <div class="media-preview">
                        ${f_.map(({id:M,mimeType:e})=>{let v_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?X2(M):j4(M);return U`
                                <img 
                                    key=${M} 
                                    src=${v_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(w0)=>H_(w0,M)}
                                />
                            `})}
                    </div>
                `}
                ${f_.length>0&&U`
                    ${f_.map(({annotations:M},e)=>U`
                        ${M&&U`<${u$} key=${e} annotations=${M} />`}
                    `)}
                `}
                ${M0.length>0&&U`
                    <div class="file-attachments">
                        ${M0.map((M)=>U`
                            <${l5} key=${M} mediaId=${M} onPreview=${Y0} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&U`
                    <div class="resource-links">
                        ${Q0.map((M,e)=>U`
                            <div key=${e}>
                                <${o5} block=${M} />
                                <${u$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D0.length>0&&U`
                    <div class="resource-embeds">
                        ${D0.map((M,e)=>U`
                            <div key=${e}>
                                <${d5} block=${M} />
                                <${u$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${C.link_previews.map((M,e)=>U`
                            <${s5} key=${e} preview=${M} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${S&&U`<${K8} src=${S} onClose=${()=>H(null)} />`}
        ${C_&&U`
            <${N8}
                mediaId=${C_.mediaId}
                info=${C_.info}
                onClose=${()=>x_(null)}
            />
        `}
    `}function Y8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:L,emptyMessage:X,timelineRef:O,agents:q,user:W,onDeletePost:y,reverse:w=!0,removingPostIds:f,searchQuery:I}){let[v,S]=T(!1),H=J(null),A=typeof IntersectionObserver<"u",C=P(async()=>{if(!j||!$||v)return;S(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{S(!1)}},[$,v,j]),c=P((r)=>{let{scrollTop:__,scrollHeight:K_,clientHeight:j_}=r.target,G_=w?K_-j_-__:__,X_=Math.max(300,j_);if(G_<X_)C()},[w,C]);m(()=>{if(!A)return;let r=H.current,__=O?.current;if(!r||!__)return;let K_=300,j_=new IntersectionObserver((G_)=>{for(let X_ of G_){if(!X_.isIntersecting)continue;C()}},{root:__,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return j_.observe(r),()=>j_.disconnect()},[A,$,j,O,C]);let a=J(C);if(a.current=C,m(()=>{if(A)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,j_=w?__-K_-r:r,G_=Math.max(300,K_);if(j_<G_)a.current?.()},[A,_,$,w,O]),m(()=>{if(!O?.current)return;if(!$||v)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,j_=w?__-K_-r:r,G_=Math.max(300,K_);if(__<=K_+1||j_<G_)a.current?.()},[_,$,v,w,O]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${X||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((r,__)=>r.id-__.id),l=(r)=>{let __=r?.data?.thread_id;if(__===null||__===void 0||__==="")return null;let K_=Number(__);return Number.isFinite(K_)?K_:null},N_=new Map;for(let r=0;r<t.length;r+=1){let __=t[r],K_=Number(__?.id),j_=l(__);if(j_!==null){let G_=N_.get(j_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(r),N_.set(j_,G_)}else if(Number.isFinite(K_)){let G_=N_.get(K_)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=r,N_.set(K_,G_)}}let i=new Map;for(let[r,__]of N_.entries()){let K_=new Set;if(__.anchorIndex>=0)K_.add(__.anchorIndex);for(let j_ of __.replyIndexes)K_.add(j_);i.set(r,Array.from(K_).sort((j_,G_)=>j_-G_))}let Q_=t.map((r,__)=>{let K_=l(r);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let j_=i.get(K_);if(!j_||j_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=j_.indexOf(__);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<j_.length-1}}),U_=U`<div class="timeline-sentinel" ref=${H}></div>`;return U`
        <div class="timeline ${w?"reverse":"normal"}" ref=${O} onScroll=${c}>
            <div class="timeline-content">
                ${w?U_:null}
                ${t.map((r,__)=>{let K_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),j_=f?.has?.(r.id),G_=Q_[__]||{};return U`
                    <${z8}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${K_}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${j_}
                        highlightQuery=${I}
                        agentName=${c4(r.data?.agent_id,q||{})}
                        agentAvatarUrl=${p4(r.data?.agent_id,q||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${L}
                        onDelete=${y}
                    />
                `})}
                ${w?null:U_}
            </div>
        </div>
    `}class G8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var X0=new G8;var m$=null,I3=null;function O8(){if(I3)return Promise.resolve(I3);if(!m$)m$=import("/static/dist/editor.bundle.js").then((_)=>{return I3=_,_}).catch((_)=>{throw m$=null,_});return m$}class L8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await O8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var T3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new L8(_,$)}};function u3(){O8().catch(()=>{})}var O9={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},L9={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},v$=null,m3=null;function X9(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function V9(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!X9(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function W9(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!v$)v$=V9(()=>Promise.resolve($.init?.())).catch((j)=>{throw v$=null,j});return await v$,$}async function q9(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!m3)m3=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await m3}async function U9(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function B9(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Q9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function H9(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function X8(){let _=Q9(),$=_?L9:O9,j=H2("--bg-primary",_?"#000000":"#ffffff"),Z=H2("--text-primary",_?"#e7e9ea":"#0f1419"),N=H2("--text-secondary",_?"#71767b":"#536471"),K=H2("--accent-color","#1d9bf0"),z=H2("--danger-color",_?"#ff7b72":"#cf222e"),L=H2("--success-color",_?"#7ee787":"#1a7f37"),X=H2("--bg-hover",_?"#1d1f23":"#e8ebed"),O=H2("--border-color",_?"#2f3336":"#eff3f4"),q=H2("--accent-soft-strong",H9(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:q,selectionForeground:Z,black:X,red:z,green:L,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:O}}class V8{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.resize()})}async bootstrapGhostty(){try{let _=await W9();if(await q9(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:X8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=X8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>this.scheduleResize());j.observe(this.container),j.observe(this.bodyEl),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await U9();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(B9($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var v3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new V8(_,$)}};function E2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function F9(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",L=String($||"").split("/").slice(0,-1).join("/"),O=N.startsWith("/")?N:`${L?`${L}/`:""}${N}`,q=[];for(let y of O.split("/")){if(!y||y===".")continue;if(y===".."){if(q.length>0)q.pop();continue}q.push(y)}let W=q.join("/");return`${F3(W)}${K}${z}`}function Z$(_){return _?.preview||null}function y9(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function J9(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function D9(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${E2($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${E2(r0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${E2(T2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${E2(J9($))}</span>`),Z.push(`<span><strong>extension:</strong> ${E2(y9(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${E2(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function E9(_){let $=Z$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=D9(_,$);if($.kind==="image"){let Z=$.url||($.path?F3($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${E2(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=v0($.text||"",null,{rewriteImageSrc:(N)=>F9(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${E2($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class R3{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=E9(this.context)}getContent(){let _=Z$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Z$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var g3={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Z$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new R3(_,$)}},c3={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Z$(_)||_?.path?1:!1},mount(_,$){return new R3(_,$)}};class W8{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var T_=new W8;var R$="workspaceExplorerScale",k9=["compact","default","comfortable"],w9=new Set(k9),b9={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function q8(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return w9.has(j)?j:$}function p3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function A9(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function P9(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function h3(_={}){let $=A9(_),j=_.stored?q8(_.stored,$):$;return P9(j,_)}function U8(_){return b9[q8(_)]}var M9=60000,F8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function y8(_,$,j,Z=0,N=[]){if(!j&&F8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)y8(K,$,j,Z+1,N);return N}function B8(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&F8(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function o3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((L)=>[L?.path,L])):new Map,K=!j||j.length!==Z.length,z=Z.map((L)=>{let X=o3(N.get(L.path),L);if(X!==N.get(L.path))K=!0;return X});return K?{...$,children:z}:_}function l3(_,$,j){if(!_)return _;if(_.path===$)return o3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=l3(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var J8=4,i3=14,C9=8,S9=16;function D8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=D8(Z);return _.__bytes=j,j}function E8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=J8)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let L of N){let X=Math.max(0,Number(L?.__bytes??L?.size??0));if(X<=0)continue;if(L.type==="dir")K.push({kind:"dir",node:L,size:X});else K.push({kind:"file",name:L.name,path:L.path,size:X})}K.sort((L,X)=>X.size-L.size);let z=K;if(K.length>i3){let L=K.slice(0,i3-1),X=K.slice(i3-1),O=X.reduce((q,W)=>q+W.size,0);L.push({kind:"other",name:`+${X.length} more`,path:`${Z.path}/[other]`,size:O}),z=L}return Z.children=z.map((L)=>{if(L.kind==="dir")return E8(L.node,$+1);return{name:L.name,path:L.path,size:L.size,children:[]}}),Z}function Q8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function k8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function g$(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function d3(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,L=K-N>z?N+z:K,X=g$(_,$,Z,N),O=g$(_,$,Z,L),q=g$(_,$,j,L),W=g$(_,$,j,N),y=L-N>Math.PI?1:0;return[`M ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${y} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${j} ${j} 0 ${y} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var w8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function b8(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(L,X,O,q)=>{let W=Array.isArray(L?.children)?L.children:[];if(!W.length)return;let y=Math.max(0,Number(L.size)||0);if(y<=0)return;let w=O-X,f=X;W.forEach((I,v)=>{let S=Math.max(0,Number(I.size)||0);if(S<=0)return;let H=S/y,A=f,C=v===W.length-1?O:f+w*H;if(f=C,C-A<0.003)return;let c=w8[q];if(c){let a=k8(A,q,j);if(Z.push({key:I.path,path:I.path,label:I.name,size:S,color:a,depth:q,startAngle:A,endAngle:C,innerRadius:c[0],outerRadius:c[1],d:d3(120,120,c[0],c[1],A,C)}),q===1)N.push({key:I.path,name:I.name,size:S,pct:K>0?S/K*100:0,color:a})}if(q<J8)z(I,A,C,q+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function n3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=n3(Z,$);if(N)return N}return null}function A8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=w8[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,L=k8(K,1,Z),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:j,color:L,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:d3(120,120,N[0],N[1],K,z)}],legend:[{key:O,name:_,size:j,pct:100,color:L}]}}function H8(_,$=!1,j=!1){if(!_)return null;let Z=D8(_),N=E8(_,0),K=N.size||Z,{segments:z,legend:L}=b8(N,K,j);if(!z.length&&K>0){let X=A8("[files]",N.path,K,j);z=X.segments,L=X.legend}return{root:N,totalSize:K,segments:z,legend:L,truncated:$,isDarkTheme:j}}function x9({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[L,X]=T(!1);m(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),m(()=>{if(!Z)return;X(!0);let i=setTimeout(()=>X(!1),180);return()=>clearTimeout(i)},[Z]);let O=h_(()=>{return n3(_.root,Z)||_.root},[_?.root,Z]),q=O?.size||_.totalSize||0,{segments:W,legend:y}=h_(()=>{let i=b8(O,q,_.isDarkTheme);if(i.segments.length>0)return i;if(q<=0)return i;let Q_=O?.children?.length?"Total":"[files]";return A8(Q_,O?.path||_?.root?.path||".",q,_.isDarkTheme)},[O,q,_.isDarkTheme,_?.root?.path]),[w,f]=T(W),I=J(new Map),v=J(0);m(()=>{let i=I.current,Q_=new Map(W.map((K_)=>[K_.key,K_])),U_=performance.now(),r=220,__=(K_)=>{let j_=Math.min(1,(K_-U_)/220),G_=j_*(2-j_),X_=W.map((y_)=>{let D_=i.get(y_.key)||{startAngle:y_.startAngle,endAngle:y_.startAngle,innerRadius:y_.innerRadius,outerRadius:y_.innerRadius},k_=(i_,p)=>i_+(p-i_)*G_,s_=k_(D_.startAngle,y_.startAngle),E_=k_(D_.endAngle,y_.endAngle),u_=k_(D_.innerRadius,y_.innerRadius),w_=k_(D_.outerRadius,y_.outerRadius);return{...y_,d:d3(120,120,u_,w_,s_,E_)}});if(f(X_),j_<1)v.current=requestAnimationFrame(__)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(__),I.current=Q_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[W]);let S=w.length?w:W,H=q>0?r0(q):"0 B",A=O?.name||"",c=(A&&A!=="."?A:"Total")||"Total",a=H,t=K.length>1,l=(i)=>{if(!i?.path)return;let Q_=n3(_.root,i.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((U_)=>[...U_,Q_.path]),N(Q_.path),j(null)},N_=()=>{if(!t)return;z((i)=>{let Q_=i.slice(0,-1);return N(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${L?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${S.length}
                data-base-size=${q}>
                ${S.map((i)=>U`
                    <path
                        key=${i.key}
                        d=${i.d}
                        fill=${i.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===i.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(i)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(i)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>l(i)}
                    >
                        <title>${i.label} — ${r0(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${N_}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${a}</text>
                </g>
            </svg>
            ${y.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${y.slice(0,8).map((i)=>U`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${r0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function f9({mediaId:_}){let[$,j]=T(null);if(m(()=>{if(!_)return;e2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?r0($.metadata.size):"";return U`
        <a href=${X2(_)} download=${Z} class="file-attachment"
            onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&U`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function P8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,K]=T(null),[z,L]=T(new Set(["."])),[X,O]=T(null),[q,W]=T(null),[y,w]=T(""),[f,I]=T(null),[v,S]=T(null),[H,A]=T(!0),[C,c]=T(!1),[a,t]=T(null),[l,N_]=T(()=>g2("workspaceShowHidden",!1)),[i,Q_]=T(!1),[U_,r]=T(null),[__,K_]=T(null),[j_,G_]=T(null),[X_,y_]=T(!1),[Z_,D_]=T(null),[k_,s_]=T(()=>Q8()),[E_,u_]=T(()=>h3({stored:d0(R$),...p3()})),w_=J(z),i_=J(""),p=J(null),L_=J(0),V_=J(new Set),W_=J(null),J_=J(new Map),b_=J(_),m_=J(Z),H_=J(null),C_=J(null),x_=J(null),Y0=J(null),l_=J(null),e_=J(null),B0=J("."),S_=J(null),_0=J({path:null,dragging:!1,startX:0,startY:0}),Q0=J({path:null,dragging:!1,startX:0,startY:0}),D0=J({path:null,timer:0}),H0=J(!1),G0=J(0),E0=J(new Map),n_=J(null),f_=J(null),M0=J(null),g_=J(null),o_=J(l),k0=J($),B_=J(j??$),M=J(0),e=J(j_),A_=J(i),v_=J(U_),w0=J(null),s0=J({x:0,y:0}),$0=J(0),O0=J(null),V0=J(X),a0=J(q),C0=J(null),R0=J(null),g0=J(f);b_.current=_,m_.current=Z,m(()=>{w_.current=z},[z]),m(()=>{o_.current=l},[l]),m(()=>{k0.current=$},[$]),m(()=>{B_.current=j??$},[j,$]),m(()=>{e.current=j_},[j_]),m(()=>{if(typeof window>"u")return;let V=()=>{u_(h3({stored:d0(R$),...p3()}))};V();let Q=()=>V(),k=()=>V(),E=(g)=>{if(!g||g.key===null||g.key===R$)V()};window.addEventListener("resize",Q),window.addEventListener("focus",k),window.addEventListener("storage",E);let u=window.matchMedia?.("(pointer: coarse)"),d=window.matchMedia?.("(hover: none)"),s=(g,z_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",z_);else if(g.addListener)g.addListener(z_)},o=(g,z_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",z_);else if(g.removeListener)g.removeListener(z_)};return s(u,Q),s(d,Q),()=>{window.removeEventListener("resize",Q),window.removeEventListener("focus",k),window.removeEventListener("storage",E),o(u,Q),o(d,Q)}},[]),m(()=>{let V=(Q)=>{let k=Q?.detail?.path;if(!k)return;let E=k.split("/"),u=[];for(let d=1;d<E.length;d++)u.push(E.slice(0,d).join("/"));if(u.length)L((d)=>{let s=new Set(d);s.add(".");for(let o of u)s.add(o);return s});O(k),requestAnimationFrame(()=>{let d=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(d)d.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",V),()=>window.removeEventListener("workspace-reveal-path",V)},[]),m(()=>{A_.current=i},[i]),m(()=>{v_.current=U_},[U_]),m(()=>{V0.current=X},[X]),m(()=>{a0.current=q},[q]),m(()=>{g0.current=f},[f]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let V=()=>s_(Q8());V();let Q=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>V();if(Q?.addEventListener)Q.addEventListener("change",k);else if(Q?.addListener)Q.addListener(k);let E=typeof MutationObserver<"u"?new MutationObserver(()=>V()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(Q?.removeEventListener)Q.removeEventListener("change",k);else if(Q?.removeListener)Q.removeListener(k);E?.disconnect()}},[]),m(()=>{if(!q)return;let V=l_.current;if(!V)return;let Q=requestAnimationFrame(()=>{try{V.focus(),V.select()}catch{}});return()=>cancelAnimationFrame(Q)},[q]);let i2=async(V)=>{c(!0),I(null),S(null);try{let Q=await K4(V,20000);I(Q)}catch(Q){I({error:Q.message||"Failed to load preview"})}finally{c(!1)}};H_.current=i2;let k2=async()=>{if(!k0.current)return;try{let V=await E$("",1,o_.current),Q=B8(V.root,w_.current,o_.current);if(Q===i_.current){A(!1);return}if(i_.current=Q,p.current=V.root,!L_.current)L_.current=requestAnimationFrame(()=>{L_.current=0,K((k)=>o3(k,p.current)),A(!1)})}catch(V){t(V.message||"Failed to load workspace"),A(!1)}},c0=async(V)=>{if(!V)return;if(V_.current.has(V))return;V_.current.add(V);try{let Q=await E$(V,1,o_.current);K((k)=>l3(k,V,Q.root))}catch(Q){t(Q.message||"Failed to load workspace")}finally{V_.current.delete(V)}};C_.current=c0;let j0=P(()=>{let V=X;if(!V)return".";let Q=J_.current?.get(V);if(Q&&Q.type==="dir")return Q.path;if(V==="."||!V.includes("/"))return".";let k=V.split("/");return k.pop(),k.join("/")||"."},[X]),j2=P((V)=>{let Q=V?.closest?.(".workspace-row");if(!Q)return null;let k=Q.dataset.path,E=Q.dataset.type;if(!k)return null;if(E==="dir")return k;if(k.includes("/")){let u=k.split("/");return u.pop(),u.join("/")||"."}return"."},[]),L0=P((V)=>{return j2(V?.target||null)},[j2]),Z0=P((V)=>{e.current=V,G_(V)},[]),I_=P(()=>{let V=D0.current;if(V?.timer)clearTimeout(V.timer);D0.current={path:null,timer:0}},[]),T0=P((V)=>{if(!V||V==="."){I_();return}let Q=J_.current?.get(V);if(!Q||Q.type!=="dir"){I_();return}if(w_.current?.has(V)){I_();return}if(D0.current?.path===V)return;I_();let k=setTimeout(()=>{D0.current={path:null,timer:0},C_.current?.(V),L((E)=>{let u=new Set(E);return u.add(V),u})},600);D0.current={path:V,timer:k}},[I_]),p0=P((V,Q)=>{if(s0.current={x:V,y:Q},$0.current)return;$0.current=requestAnimationFrame(()=>{$0.current=0;let k=w0.current;if(!k)return;let E=s0.current;k.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),Z2=P((V)=>{if(!V)return;let k=(J_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!k)return;K_({path:V,label:k})},[]),F2=P(()=>{if(K_(null),$0.current)cancelAnimationFrame($0.current),$0.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),w2=P((V)=>{if(!V)return".";let Q=J_.current?.get(V);if(Q&&Q.type==="dir")return Q.path;if(V==="."||!V.includes("/"))return".";let k=V.split("/");return k.pop(),k.join("/")||"."},[]),F0=P(()=>{W(null),w("")},[]),b2=P((V)=>{if(!V)return;let k=(J_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!k||V===".")return;W(V),w(k)},[]),l2=P(async()=>{let V=a0.current;if(!V)return;let Q=(y||"").trim();if(!Q){F0();return}let k=J_.current?.get(V),E=(k?.name||V.split("/").pop()||V).trim();if(Q===E){F0();return}try{let d=(await G4(V,Q))?.path||V,s=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(F0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:V,newPath:d,type:k?.type||"file"}})),k?.type==="dir")L((o)=>{let g=new Set;for(let z_ of o)if(z_===V)g.add(d);else if(z_.startsWith(`${V}/`))g.add(`${d}${z_.slice(V.length)}`);else g.add(z_);return g});if(O(d),k?.type==="dir")I(null),c(!1),S(null);else H_.current?.(d);C_.current?.(s)}catch(u){t(u?.message||"Failed to rename file")}},[F0,y]),y2=P(async(V)=>{let E=V||".";for(let u=0;u<50;u+=1){let s=`untitled${u===0?"":`-${u}`}.md`;try{let g=(await Y4(E,s,""))?.path||(E==="."?s:`${E}/${s}`);if(E&&E!==".")L((z_)=>new Set([...z_,E]));O(g),t(null),C_.current?.(E),H_.current?.(g);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;t(o?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),u2=P((V)=>{if(V?.stopPropagation?.(),X_)return;let Q=w2(V0.current);y2(Q)},[X_,w2,y2]);m(()=>{if(typeof window>"u")return;let V=(Q)=>{let k=Q?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;K((o)=>{let g=o;for(let z_ of k){if(!z_?.root)continue;if(!g||z_.path==="."||!z_.path)g=z_.root;else g=l3(g,z_.path,z_.root)}if(g)i_.current=B8(g,w_.current,o_.current);return A(!1),g});let E=V0.current;if(Boolean(E)&&k.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return E===g||E.startsWith(`${g}/`)||g.startsWith(`${E}/`)}))E0.current.clear();if(!E||!g0.current)return;let d=J_.current?.get(E);if(d&&d.type==="dir")return;if(k.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return E===g||E.startsWith(`${g}/`)}))H_.current?.(E)};return window.addEventListener("workspace-update",V),()=>window.removeEventListener("workspace-update",V)},[]),W_.current=k2;let W2=J(()=>{if(typeof window>"u")return;let V=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),Q=B_.current??k0.current,k=document.visibilityState!=="hidden"&&(Q||V.matches&&k0.current);k$(k,o_.current).catch(()=>{})}).current,a_=J(0),A2=J(()=>{if(a_.current)clearTimeout(a_.current);a_.current=setTimeout(()=>{a_.current=0,W2()},250)}).current;m(()=>{if(k0.current)W_.current?.();A2()},[$,j]),m(()=>{W_.current(),W2();let V=setInterval(()=>W_.current(),M9),Q=c2("previewHeight",null),k=Number.isFinite(Q)?Math.min(Math.max(Q,80),600):280;if(G0.current=k,x_.current)x_.current.style.setProperty("--preview-height",`${k}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),u=()=>A2();if(E.addEventListener)E.addEventListener("change",u);else if(E.addListener)E.addListener(u);return document.addEventListener("visibilitychange",u),()=>{if(clearInterval(V),L_.current)cancelAnimationFrame(L_.current),L_.current=0;if(E.removeEventListener)E.removeEventListener("change",u);else if(E.removeListener)E.removeListener(u);if(document.removeEventListener("visibilitychange",u),a_.current)clearTimeout(a_.current),a_.current=0;if(S_.current)clearTimeout(S_.current),S_.current=null;k$(!1,o_.current).catch(()=>{})}},[]);let S0=h_(()=>y8(N,z,l),[N,z,l]),x0=h_(()=>new Map(S0.map((V)=>[V.node.path,V.node])),[S0]),N2=h_(()=>U8(E_),[E_]);J_.current=x0;let U0=(X?J_.current.get(X):null)?.type==="dir";m(()=>{if(!X||!U0){D_(null),n_.current=null,f_.current=null;return}let V=X,Q=`${l?"hidden":"visible"}:${X}`,k=E0.current,E=k.get(Q);if(E?.root){k.delete(Q),k.set(Q,E);let s=H8(E.root,Boolean(E.truncated),k_);if(s)n_.current=s,f_.current=X,D_({loading:!1,error:null,payload:s});return}let u=n_.current,d=f_.current;D_({loading:!0,error:null,payload:d===X?u:null}),E$(X,C9,l).then((s)=>{if(V0.current!==V)return;let o={root:s?.root,truncated:Boolean(s?.truncated)};k.delete(Q),k.set(Q,o);while(k.size>S9){let z_=k.keys().next().value;if(!z_)break;k.delete(z_)}let g=H8(o.root,o.truncated,k_);n_.current=g,f_.current=X,D_({loading:!1,error:null,payload:g})}).catch((s)=>{if(V0.current!==V)return;D_({loading:!1,error:s?.message||"Failed to load folder size chart",payload:d===X?u:null})})},[X,U0,l,k_]);let P2=Boolean(f&&f.kind==="text"&&!U0&&(!f.size||f.size<=262144)),K2=P2?"Open in editor":f?.size>262144?"File too large to edit":"File is not editable";m(()=>{let V=M0.current;if(g_.current)g_.current.dispose(),g_.current=null;if(!V)return;if(V.innerHTML="",!X||U0||!f||f.error)return;let Q={path:X,content:typeof f.text==="string"?f.text:void 0,mtime:f.mtime,size:f.size,preview:f,mode:"view"},k=X0.resolve(Q)||X0.get("workspace-preview-default");if(!k)return;let E=k.mount(V,Q);return g_.current=E,()=>{if(g_.current===E)E.dispose(),g_.current=null;V.innerHTML=""}},[X,U0,f]);let z2=(V)=>{let Q=V?.target;if(Q instanceof Element)return Q;return Q?.parentElement||null},M2=(V)=>{return Boolean(V?.closest?.(".workspace-node-icon, .workspace-label-text"))},h0=J((V)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let k=z2(V)?.closest?.("[data-path]");if(!k)return;let E=k.dataset.path;if(k.dataset.type==="dir"||!E)return;if(a0.current===E)F0();m_.current?.(E)}).current,t0=J((V)=>{if(H0.current){H0.current=!1;return}let Q=z2(V),k=Q?.closest?.("[data-path]");if(Y0.current?.focus?.(),!k)return;let E=k.dataset.path,u=k.dataset.type,d=Boolean(Q?.closest?.(".workspace-caret")),s=Boolean(Q?.closest?.("button"))||Boolean(Q?.closest?.("a"))||Boolean(Q?.closest?.("input")),o=V0.current===E,g=a0.current;if(g){if(g===E)return;F0()}let z_=u==="file"&&C0.current===E&&!d&&!s;if(o&&!d&&!s&&E!=="."&&!z_){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,b2(E)},350);return}if(u==="dir"){if(C0.current=null,O(E),I(null),S(null),c(!1),!w_.current.has(E))C_.current?.(E);if(o&&!d)return;L((W0)=>{let A0=new Set(W0);if(A0.has(E))A0.delete(E);else A0.add(E);return A0})}else{C0.current=null,O(E);let J0=J_.current.get(E);if(J0)b_.current?.(J0.path,J0);H_.current?.(E)}}).current,f0=J(()=>{i_.current="",W_.current(),Array.from(w_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>C_.current?.(Q))}).current,e0=J(()=>{C0.current=null,O(null),I(null),S(null),c(!1)}).current,C2=J(()=>{N_((V)=>{let Q=!V;if(typeof window<"u")d_("workspaceShowHidden",String(Q));return o_.current=Q,k$(!0,Q).catch(()=>{}),i_.current="",W_.current?.(),Array.from(w_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>C_.current?.(E)),Q})}).current,S2=J((V)=>{if(z2(V)?.closest?.("[data-path]"))return;e0()}).current,_2=P(async(V)=>{if(!V)return;let Q=V.split("/").pop()||V;if(!window.confirm(`Delete "${Q}"? This cannot be undone.`))return;try{await L4(V);let E=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(V0.current===V)e0();C_.current?.(E),t(null)}catch(E){I((u)=>({...u||{},error:E.message||"Failed to delete file"}))}},[e0]),q2=P((V)=>{let Q=Y0.current;if(!Q||!V||typeof CSS>"u"||typeof CSS.escape!=="function")return;Q.querySelector(`[data-path="${CSS.escape(V)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),n2=P((V)=>{let Q=S0;if(!Q||Q.length===0)return;let k=X?Q.findIndex((E)=>E.node.path===X):-1;if(V.key==="ArrowDown"){V.preventDefault();let E=Math.min(k+1,Q.length-1),u=Q[E];if(!u)return;if(O(u.node.path),u.node.type!=="dir")b_.current?.(u.node.path,u.node),H_.current?.(u.node.path);else I(null),c(!1),S(null);q2(u.node.path);return}if(V.key==="ArrowUp"){V.preventDefault();let E=k<=0?0:k-1,u=Q[E];if(!u)return;if(O(u.node.path),u.node.type!=="dir")b_.current?.(u.node.path,u.node),H_.current?.(u.node.path);else I(null),c(!1),S(null);q2(u.node.path);return}if(V.key==="ArrowRight"&&k>=0){let E=Q[k];if(E?.node?.type==="dir"&&!z.has(E.node.path))V.preventDefault(),C_.current?.(E.node.path),L((u)=>new Set([...u,E.node.path]));return}if(V.key==="ArrowLeft"&&k>=0){let E=Q[k];if(E?.node?.type==="dir"&&z.has(E.node.path))V.preventDefault(),L((u)=>{let d=new Set(u);return d.delete(E.node.path),d});return}if(V.key==="Enter"&&k>=0){V.preventDefault();let E=Q[k];if(!E)return;let u=E.node.path;if(E.node.type==="dir"){if(!w_.current.has(u))C_.current?.(u);L((s)=>{let o=new Set(s);if(o.has(u))o.delete(u);else o.add(u);return o}),I(null),S(null),c(!1)}else b_.current?.(u,E.node),H_.current?.(u);return}if((V.key==="Delete"||V.key==="Backspace")&&k>=0){let E=Q[k];if(!E||E.node.type==="dir")return;V.preventDefault(),_2(E.node.path);return}if(V.key==="Escape")V.preventDefault(),e0()},[e0,_2,z,S0,q2,X]),b0=P((V)=>{let Q=z2(V),k=Q?.closest?.(".workspace-row");if(!k)return;let E=k.dataset.type,u=k.dataset.path;if(!u||u===".")return;if(a0.current===u)return;let d=V?.touches?.[0];if(!d)return;if(_0.current={path:M2(Q)?u:null,dragging:!1,startX:d.clientX,startY:d.clientY},E!=="file")return;if(S_.current)clearTimeout(S_.current);S_.current=setTimeout(()=>{if(S_.current=null,_0.current?.dragging)return;_2(u)},600)},[_2]),B=P(()=>{if(S_.current)clearTimeout(S_.current),S_.current=null;let V=_0.current;if(V?.dragging&&V.path){let Q=e.current||j0(),k=O0.current;if(typeof k==="function")k(V.path,Q)}_0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),Z0(null),I_(),F2()},[j0,F2,Z0,I_]),x=P((V)=>{let Q=_0.current,k=V?.touches?.[0];if(!k||!Q?.path){if(S_.current)clearTimeout(S_.current),S_.current=null;return}let E=Math.abs(k.clientX-Q.startX),u=Math.abs(k.clientY-Q.startY),d=E>8||u>8;if(d&&S_.current)clearTimeout(S_.current),S_.current=null;if(!Q.dragging&&d)Q.dragging=!0,Q_(!0),r("move"),Z2(Q.path);if(Q.dragging){V.preventDefault(),p0(k.clientX,k.clientY);let s=document.elementFromPoint(k.clientX,k.clientY),o=j2(s)||j0();if(e.current!==o)Z0(o);T0(o)}},[j2,j0,Z2,p0,Z0,T0]),n=J((V)=>{V.preventDefault();let Q=x_.current;if(!Q)return;let k=V.clientY,E=G0.current||280,u=V.currentTarget;u.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let d=k,s=(g)=>{d=g.clientY;let z_=Q.clientHeight-80,J0=Math.min(Math.max(E-(g.clientY-k),80),z_);Q.style.setProperty("--preview-height",`${J0}px`),G0.current=J0},o=()=>{let g=Q.clientHeight-80,z_=Math.min(Math.max(E-(d-k),80),g);G0.current=z_,u.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",d_("previewHeight",String(Math.round(z_))),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}).current,Y_=J((V)=>{V.preventDefault();let Q=x_.current;if(!Q)return;let k=V.touches[0];if(!k)return;let E=k.clientY,u=G0.current||280,d=V.currentTarget;d.classList.add("dragging"),document.body.style.userSelect="none";let s=(g)=>{let z_=g.touches[0];if(!z_)return;g.preventDefault();let J0=Q.clientHeight-80,W0=Math.min(Math.max(u-(z_.clientY-E),80),J0);Q.style.setProperty("--preview-height",`${W0}px`),G0.current=W0},o=()=>{d.classList.remove("dragging"),document.body.style.userSelect="",d_("previewHeight",String(Math.round(G0.current||u))),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,P_=async()=>{if(!X)return;try{let V=await z4(X);if(V.media_id)S(V.media_id)}catch(V){I((Q)=>({...Q||{},error:V.message||"Failed to attach"}))}},t_=async()=>{if(!X||U0)return;await _2(X)},M_=(V)=>{return Array.from(V?.dataTransfer?.types||[]).includes("Files")},N0=P((V)=>{if(!M_(V))return;if(V.preventDefault(),M.current+=1,!A_.current)Q_(!0);r("upload");let Q=L0(V)||j0();Z0(Q),T0(Q)},[j0,L0,Z0,T0]),i0=P((V)=>{if(!M_(V))return;if(V.preventDefault(),V.dataTransfer)V.dataTransfer.dropEffect="copy";if(!A_.current)Q_(!0);if(v_.current!=="upload")r("upload");let Q=L0(V)||j0();if(e.current!==Q)Z0(Q);T0(Q)},[j0,L0,Z0,T0]),J2=P((V)=>{if(!M_(V))return;if(V.preventDefault(),M.current=Math.max(0,M.current-1),M.current===0)Q_(!1),r(null),Z0(null),I_()},[Z0,I_]),u0=P(async(V,Q=".")=>{let k=Array.from(V||[]);if(k.length===0)return;let E=Q&&Q!==""?Q:".",u=E!=="."?E:"workspace root";y_(!0);try{let d=null;for(let s of k)try{d=await H3(s,E)}catch(o){let g=o?.status,z_=o?.code;if(g===409||z_==="file_exists"){let J0=s?.name||"file";if(!window.confirm(`"${J0}" already exists in ${u}. Overwrite?`))continue;d=await H3(s,E,{overwrite:!0})}else throw o}if(d?.path)C0.current=d.path,O(d.path),H_.current?.(d.path);C_.current?.(E)}catch(d){t(d.message||"Failed to upload file")}finally{y_(!1)}},[]),Y2=P(async(V,Q)=>{if(!V)return;let k=J_.current?.get(V);if(!k)return;let E=Q&&Q!==""?Q:".",u=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(E===u)return;try{let s=(await O4(V,E))?.path||V;if(k.type==="dir")L((o)=>{let g=new Set;for(let z_ of o)if(z_===V)g.add(s);else if(z_.startsWith(`${V}/`))g.add(`${s}${z_.slice(V.length)}`);else g.add(z_);return g});if(O(s),k.type==="dir")I(null),c(!1),S(null);else H_.current?.(s);C_.current?.(u),C_.current?.(E)}catch(d){t(d?.message||"Failed to move entry")}},[]);O0.current=Y2;let G2=P(async(V)=>{if(!M_(V))return;V.preventDefault(),M.current=0,Q_(!1),r(null),G_(null),I_();let Q=Array.from(V?.dataTransfer?.files||[]);if(Q.length===0)return;let k=e.current||L0(V)||j0();await u0(Q,k)},[j0,L0,u0]),l0=P((V)=>{if(V?.stopPropagation?.(),X_)return;let Q=V?.currentTarget?.dataset?.uploadTarget||".";B0.current=Q,e_.current?.click()},[X_]),O2=P(()=>{if(X_)return;let V=V0.current,Q=V?J_.current?.get(V):null;B0.current=Q?.type==="dir"?Q.path:".",e_.current?.click()},[X_]),y0=P((V)=>{if(!V||V.button!==0)return;let Q=V.currentTarget;if(!Q||!Q.dataset)return;let k=Q.dataset.path;if(!k||k===".")return;if(a0.current===k)return;let E=z2(V);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!M2(E))return;V.preventDefault(),Q0.current={path:k,dragging:!1,startX:V.clientX,startY:V.clientY};let u=(s)=>{let o=Q0.current;if(!o?.path)return;let g=Math.abs(s.clientX-o.startX),z_=Math.abs(s.clientY-o.startY),J0=g>4||z_>4;if(!o.dragging&&J0)o.dragging=!0,H0.current=!0,Q_(!0),r("move"),Z2(o.path),p0(s.clientX,s.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){s.preventDefault(),p0(s.clientX,s.clientY);let W0=document.elementFromPoint(s.clientX,s.clientY),A0=j2(W0)||j0();if(e.current!==A0)Z0(A0);T0(A0)}},d=()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",d);let s=Q0.current;if(s?.dragging&&s.path){let o=e.current||j0(),g=O0.current;if(typeof g==="function")g(s.path,o)}Q0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),Z0(null),I_(),F2(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{H0.current=!1},0)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",d)},[j2,j0,Z2,p0,F2,Z0,T0,I_]),x2=P(async(V)=>{let Q=Array.from(V?.target?.files||[]);if(Q.length===0)return;let k=B0.current||".";if(await u0(Q,k),B0.current=".",V?.target)V.target.value=""},[u0]);return U`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${E_}
            ref=${x_}
            onDragEnter=${N0}
            onDragOver=${i0}
            onDragLeave=${J2}
            onDrop=${G2}
        >
            <input type="file" multiple style="display:none" ref=${e_} onChange=${x2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${u2} title="New file" disabled=${X_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${f0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${l?" active":""}`}
                        onClick=${C2}
                        title=${l?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!l&&U`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${S2}>
                ${X_&&U`<div class="workspace-drop-hint">Uploading…</div>`}
                ${H&&U`<div class="workspace-loading">Loading…</div>`}
                ${a&&U`<div class="workspace-error">${a}</div>`}
                ${N&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${Y0}
                        tabIndex="0"
                        onClick=${t0}
                        onDblClick=${h0}
                        onKeyDown=${n2}
                        onTouchStart=${b0}
                        onTouchEnd=${B}
                        onTouchMove=${x}
                        onTouchCancel=${B}
                    >
                        ${S0.map(({node:V,depth:Q})=>{let k=V.type==="dir",E=V.path===X,u=V.path===q,d=k&&z.has(V.path),s=j_&&V.path===j_,o=Array.isArray(V.children)&&V.children.length>0?V.children.length:Number(V.child_count)||0;return U`
                                <div
                                    key=${V.path}
                                    class=${`workspace-row${E?" selected":""}${s?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+Q*N2.indentPx}px`}}
                                    data-path=${V.path}
                                    data-type=${V.type}
                                    onMouseDown=${y0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${k?d?U`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:U`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${k?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${k?U`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:U`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${u?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${l_}
                                                value=${y}
                                                onInput=${(g)=>w(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),l2();else if(g.key==="Escape")g.preventDefault(),F0()}}
                                                onBlur=${F0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:U`<span class="workspace-label"><span class="workspace-label-text">${V.name}</span></span>`}
                                    ${k&&!d&&o>0&&U`
                                        <span class="workspace-count">${o}</span>
                                    `}
                                    ${k&&U`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${V.path}
                                            title="Upload files to this folder"
                                            onClick=${l0}
                                            disabled=${X_}
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
            ${X&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${n} onTouchStart=${Y_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${X}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${u2} title="New file" disabled=${X_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!U0&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P2&&m_.current?.(X,f)}
                                    title=${K2}
                                    disabled=${!P2}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${t_}
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
                            ${U0?U`
                                    <button class="workspace-download" onClick=${O2}
                                        title="Upload files to this folder" disabled=${X_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${X4(X,l)}
                                        title="Download folder as zip" onClick=${(V)=>V.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:U`<button class="workspace-download" onClick=${P_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&U`<div class="workspace-loading">Loading preview…</div>`}
                    ${f?.error&&U`<div class="workspace-error">${f.error}</div>`}
                    ${U0&&U`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${Z_?.loading&&U`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${Z_?.error&&U`<div class="workspace-error">${Z_.error}</div>`}
                        ${Z_?.payload&&Z_.payload.segments?.length>0&&U`
                            <${x9} payload=${Z_.payload} />
                        `}
                        ${Z_?.payload&&(!Z_.payload.segments||Z_.payload.segments.length===0)&&U`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${f&&!f.error&&!U0&&U`
                        <div class="workspace-preview-body" ref=${M0}></div>
                    `}
                    ${v&&U`
                        <div class="workspace-download-card">
                            <${f9} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${__&&U`
                <div class="workspace-drag-ghost" ref=${w0}>${__.label}</div>
            `}
        </aside>
    `}function M8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:L,previewTabs:X,onToggleDock:O,dockVisible:q}){let[W,y]=T(null),w=J(null);m(()=>{if(!W)return;let H=(A)=>{if(A.type==="keydown"&&A.key!=="Escape")return;y(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[W]),m(()=>{let H=(A)=>{if(A.ctrlKey&&A.key==="Tab"){if(A.preventDefault(),!_.length)return;let C=_.findIndex((c)=>c.id===$);if(A.shiftKey){let c=_[(C-1+_.length)%_.length];j?.(c.id)}else{let c=_[(C+1)%_.length];j?.(c.id)}return}if((A.ctrlKey||A.metaKey)&&A.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(A.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let f=P((H,A)=>{if(H.button===1){H.preventDefault(),Z?.(A);return}if(H.button===0)j?.(A)},[j,Z]),I=P((H,A)=>{H.preventDefault(),y({id:A,x:H.clientX,y:H.clientY})},[]),v=P((H)=>{H.preventDefault(),H.stopPropagation()},[]),S=P((H,A)=>{H.preventDefault(),H.stopPropagation(),Z?.(A)},[Z]);if(m(()=>{if(!$||!w.current)return;let H=w.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${w} role="tablist">
            ${_.map((H)=>U`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(A)=>f(A,H.id)}
                    onContextMenu=${(A)=>I(A,H.id)}
                >
                    ${H.pinned&&U`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${H.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${v}
                        onClick=${(A)=>S(A,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&U`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${q?" active":""}`}
                    onClick=${O}
                    title=${`${q?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${q?"Hide":"Show"} terminal`}
                    aria-pressed=${q?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${W&&U`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{Z?.(W.id),y(null)}}>Close</button>
                <button onClick=${()=>{N?.(W.id),y(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),y(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(W.id),y(null)}}>
                    ${_.find((H)=>H.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${L&&/\.(md|mdx|markdown)$/i.test(W.id)&&U`
                    <hr />
                    <button onClick=${()=>{L(W.id),y(null)}}>
                        ${X?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var I9=400,r3=60,C8=220,s3="mdPreviewHeight";function T9(){try{let _=localStorage.getItem(s3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=r3?$:C8}catch{return C8}}function S8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,z]=T(T9),L=J(null),X=J(null),O=J(""),q=J(_);return q.current=_,m(()=>{let w=()=>{let I=q.current?.()||"";if(I===O.current)return;O.current=I;try{let v=v0(I,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let f=setInterval(w,I9);return()=>clearInterval(f)},[]),m(()=>{if(L.current&&Z)Q2(L.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let f=w.clientY,I=X.current?.offsetHeight||K,v=X.current?.parentElement,S=v?v.offsetHeight*0.7:500,H=w.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(c)=>{let a=Math.min(Math.max(I-(c.clientY-f),r3),S);z(a)},C=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(s3,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",C)}}
            onTouchStart=${(w)=>{w.preventDefault();let f=w.touches[0];if(!f)return;let I=f.clientY,v=X.current?.offsetHeight||K,S=X.current?.parentElement,H=S?S.offsetHeight*0.7:500,A=w.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let C=(a)=>{let t=a.touches[0];if(!t)return;a.preventDefault();let l=Math.min(Math.max(v-(t.clientY-I),r3),H);z(l)},c=()=>{A.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(s3,String(Math.round(X.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${X} style=${{height:K+"px"}}>
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
                ref=${L}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function x8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=J(_);K.current=_;let z=J($);z.current=$;let L=J(j);L.current=j;let X=J(Z);X.current=Z,m(()=>{L.current();let O=new y3((W,y)=>K.current(W,y),(W)=>z.current(W),{chatJid:N});O.connect();let q=()=>{O.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")X.current?.()};return window.addEventListener("focus",q),document.addEventListener("visibilitychange",q),()=>{window.removeEventListener("focus",q),document.removeEventListener("visibilitychange",q),O.disconnect()}},[N])}function f8(){let[_,$]=T(!1),[j,Z]=T("default"),N=J(!1);m(()=>{let X=g2("notificationsEnabled",!1);if(N.current=X,$(X),typeof Notification<"u")Z(Notification.permission)},[]),m(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let X=Notification.requestPermission();if(X&&typeof X.then==="function")return X;return Promise.resolve(X)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await K();if(Z(O||"default"),O!=="granted"){N.current=!1,$(!1),d_("notificationsEnabled","false");return}}let X=!N.current;N.current=X,$(X),d_("notificationsEnabled",String(X))},[K]),L=P((X,O)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let q=new Notification(X,{body:O});return q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:L}}var N$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function I8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,z]=T(!1),L=J(!1),X=J(null),O=J(!1),q=J(null),W=J(null),y=J(0);m(()=>{L.current=K},[K]),m(()=>{W.current=Z},[Z]),m(()=>{y.current+=1,W.current=null,q.current=null,O.current=!1,L.current=!1,N(null),z(!1)},[j]);let w=P(async(v=null)=>{let S=y.current;try{if(v){let H=await l1(v,50,0,j);if(S!==y.current)return;N(H.posts),z(!1)}else{let H=await J$(10,null,j);if(S!==y.current)return;N(H.posts),z(H.has_more)}}catch(H){if(S!==y.current)return;console.error("Failed to load posts:",H)}},[j]),f=P(async()=>{let v=y.current;try{let S=await J$(10,null,j);if(v!==y.current)return;N((H)=>{if(!H||H.length===0)return S.posts;return N$([...S.posts,...H])}),z((H)=>H||S.has_more)}catch(S){if(v!==y.current)return;console.error("Failed to refresh timeline:",S)}},[j]),I=P(async(v={})=>{let S=y.current,H=W.current;if(!H||H.length===0)return;if(O.current)return;let{preserveScroll:A=!0,preserveMode:C="top",allowRepeat:c=!1}=v,a=(N_)=>{if(!A){N_();return}if(C==="top")$(N_);else _(N_)},l=H.slice().sort((N_,i)=>N_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!c&&q.current===l)return;O.current=!0,q.current=l;try{let N_=await J$(10,l,j);if(S!==y.current)return;if(N_.posts.length>0)a(()=>{N((i)=>N$([...N_.posts,...i||[]])),z(N_.has_more)});else z(!1)}catch(N_){if(S!==y.current)return;console.error("Failed to load more posts:",N_)}finally{if(S===y.current)O.current=!1}},[j,_,$]);return m(()=>{X.current=I},[I]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:L,loadPosts:w,refreshTimeline:f,loadMore:I,loadMoreRef:X,loadingMoreRef:O,lastBeforeIdRef:q}}function T8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[z,L]=T({text:"",totalLines:0}),[X,O]=T(null),[q,W]=T(null),[y,w]=T(null),f=J(null),I=J(0),v=J(!1),S=J(""),H=J(""),A=J(null),C=J(null),c=J(null),a=J(null),t=J(!1),l=J(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:L,pendingRequest:X,setPendingRequest:O,currentTurnId:q,setCurrentTurnId:W,steerQueuedTurnId:y,setSteerQueuedTurnId:w,lastAgentEventRef:f,lastSilenceNoticeRef:I,isAgentRunningRef:v,draftBufferRef:S,thoughtBufferRef:H,pendingRequestRef:A,stalledPostIdRef:C,currentTurnIdRef:c,steerQueuedTurnIdRef:a,thoughtExpandedRef:t,draftExpandedRef:l}}function u8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.clientX,w=$.current||280,f=q.currentTarget;f.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=y,v=(H)=>{I=H.clientX;let A=Math.min(Math.max(w+(H.clientX-y),160),600);W.style.setProperty("--sidebar-width",`${A}px`),$.current=A},S=()=>{let H=Math.min(Math.max(w+(I-y),160),600);$.current=H,f.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",d_("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,K=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.touches[0];if(!y)return;let w=y.clientX,f=$.current||280,I=q.currentTarget;I.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(H)=>{let A=H.touches[0];if(!A)return;H.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),160),600);W.style.setProperty("--sidebar-width",`${C}px`),$.current=C},S=()=>{I.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",d_("sidebarWidth",String(Math.round($.current||f))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,z=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.clientX,w=j.current||$.current||280,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let I=y,v=(H)=>{I=H.clientX;let A=Math.min(Math.max(w+(H.clientX-y),200),800);W.style.setProperty("--editor-width",`${A}px`),j.current=A},S=()=>{let H=Math.min(Math.max(w+(I-y),200),800);j.current=H,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",d_("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,L=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.touches[0];if(!y)return;let w=y.clientX,f=j.current||$.current||280,I=q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let v=(H)=>{let A=H.touches[0];if(!A)return;H.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),200),800);W.style.setProperty("--editor-width",`${C}px`),j.current=C},S=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",d_("editorWidth",String(Math.round(j.current||f))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,X=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.clientY,w=Z?.current||200,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=y,v=(H)=>{I=H.clientY;let A=Math.min(Math.max(w-(H.clientY-y),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${A}px`),Z)Z.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},S=()=>{let H=Math.min(Math.max(w-(I-y),100),window.innerHeight*0.5);if(Z)Z.current=H;f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",d_("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,O=J((q)=>{q.preventDefault();let W=_.current;if(!W)return;let y=q.touches[0];if(!y)return;let w=y.clientY,f=Z?.current||200,I=q.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let v=(H)=>{let A=H.touches[0];if(!A)return;H.preventDefault();let C=Math.min(Math.max(f-(A.clientY-w),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},S=()=>{I.classList.remove("dragging"),document.body.style.userSelect="",d_("dockHeight",String(Math.round(Z?.current||f))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:L,handleDockSplitterMouseDown:X,handleDockSplitterTouchStart:O}}function m8({onTabClosed:_}={}){let $=J(_);$.current=_;let[j,Z]=T(()=>T_.getTabs()),[N,K]=T(()=>T_.getActiveId()),[z,L]=T(()=>T_.getTabs().length>0);m(()=>{return T_.onChange((C,c)=>{Z(C),K(c),L(C.length>0)})},[]);let[X,O]=T(()=>new Set),q=P((C)=>{O((c)=>{let a=new Set(c);if(a.has(C))a.delete(C);else a.add(C);return a})},[]),W=P((C)=>{O((c)=>{if(!c.has(C))return c;let a=new Set(c);return a.delete(C),a})},[]),y=P((C)=>{if(!C)return;let c={path:C,mode:"edit"};try{if(!X0.resolve(c)){if(!X0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(a){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,a)}T_.open(C)},[]),w=P(()=>{let C=T_.getActiveId();if(C){let c=T_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}T_.close(C),W(C),$.current?.(C)}},[W]),f=P((C)=>{let c=T_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}T_.close(C),W(C),$.current?.(C)},[W]),I=P((C)=>{T_.activate(C)},[]),v=P((C)=>{let c=T_.getTabs().filter((l)=>l.id!==C&&!l.pinned),a=c.filter((l)=>l.dirty).length;if(a>0){if(!window.confirm(`${a} unsaved tab${a>1?"s":""} will be closed. Continue?`))return}let t=c.map((l)=>l.id);T_.closeOthers(C),t.forEach((l)=>{W(l),$.current?.(l)})},[W]),S=P(()=>{let C=T_.getTabs().filter((t)=>!t.pinned),c=C.filter((t)=>t.dirty).length;if(c>0){if(!window.confirm(`${c} unsaved tab${c>1?"s":""} will be closed. Continue?`))return}let a=C.map((t)=>t.id);T_.closeAll(),a.forEach((t)=>{W(t),$.current?.(t)})},[W]),H=P((C)=>{T_.togglePin(C)},[]),A=P(()=>{let C=T_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return m(()=>{let C=(c)=>{let{oldPath:a,newPath:t,type:l}=c.detail||{};if(!a||!t)return;if(l==="dir"){for(let N_ of T_.getTabs())if(N_.path===a||N_.path.startsWith(`${a}/`)){let i=`${t}${N_.path.slice(a.length)}`;T_.rename(N_.id,i)}}else T_.rename(a,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),m(()=>{let C=(c)=>{if(T_.hasUnsaved())c.preventDefault(),c.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:X,openEditor:y,closeEditor:w,handleTabClose:f,handleTabActivate:I,handleTabCloseOthers:v,handleTabCloseAll:S,handleTabTogglePin:H,handleTabTogglePreview:q,revealInExplorer:A}}function a3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var t3=a3("warning",30000),v8=a3("finalize",120000),e3=a3("refresh",30000),R8=30000;function g8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function c8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function p8(_=30000){let[,$]=T(0);m(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function _1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function h8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function c$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function u9(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function i8(_,$={}){if(c$($))return null;if(u9($))return{target:"_blank",features:void 0,mode:"tab"};return{target:m9(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function l8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function n8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function o8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function d8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function K$(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function r8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function m9(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function $1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function s8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function V2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var Z1="piclaw_btw_session";function v9(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function R9(){let _=d0(Z1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var a8=n1,t8=d1,g9=r1,e8=_4,_6=$4,$6=s1,j1=typeof V3==="function"?V3:V2("getAgentContext",null),c9=typeof f2==="function"?f2:V2("getAgentModels",{current:null,models:[]}),p9=typeof D$==="function"?D$:V2("getActiveChatAgents",{chats:[]}),j6=typeof G3==="function"?G3:V2("getChatBranches",{chats:[]}),h9=typeof L3==="function"?L3:V2("renameChatBranch",null),i9=typeof X3==="function"?X3:V2("pruneChatBranch",null),l9=typeof W3==="function"?W3:V2("getAgentQueueState",{count:0}),n9=typeof U3==="function"?U3:V2("steerAgentQueueItem",{removed:!1,queued:"steer"}),o9=typeof q3==="function"?q3:V2("removeAgentQueueItem",{removed:!1}),d9=typeof Q3==="function"?Q3:V2("streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});X0.register(T3);X0.register(c3);X0.register(g3);u3();X0.register(v3);function r9({locationParams:_}){let $=h_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=h_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=h_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=h_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,z]=T("disconnected"),[L,X]=T(()=>c$()),[O,q]=T(null),[W,y]=T(null),[w,f]=T(!1),[I,v]=T("current"),[S,H]=T([]),[A,C]=T([]),[c,a]=T(null),{agentStatus:t,setAgentStatus:l,agentDraft:N_,setAgentDraft:i,agentPlan:Q_,setAgentPlan:U_,agentThought:r,setAgentThought:__,pendingRequest:K_,setPendingRequest:j_,currentTurnId:G_,setCurrentTurnId:X_,steerQueuedTurnId:y_,setSteerQueuedTurnId:Z_,lastAgentEventRef:D_,lastSilenceNoticeRef:k_,isAgentRunningRef:s_,draftBufferRef:E_,thoughtBufferRef:u_,pendingRequestRef:w_,stalledPostIdRef:i_,currentTurnIdRef:p,steerQueuedTurnIdRef:L_,thoughtExpandedRef:V_,draftExpandedRef:W_}=T8(),[J_,b_]=T({}),[m_,H_]=T(null),[C_,x_]=T(null),[Y0,l_]=T(!1),[e_,B0]=T(null),[S_,_0]=T([]),[Q0,D0]=T([]),[H0,G0]=T(null),[E0,n_]=T([]),[f_,M0]=T(!1),[g_,o_]=T(()=>R9()),k0=h_(()=>S_.find((G)=>G?.chat_jid===$)||null,[S_,$]),B_=h_(()=>Q0.find((G)=>G?.chat_jid===$)||k0||null,[k0,Q0,$]),M=B_?.root_chat_jid||k0?.root_chat_jid||$,e=v9(I),[A_,v_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),w0=E0.length,s0=J(new Set),$0=J([]),O0=J(new Set),V0=J({inFlight:!1,lastAttemptAt:0,turnId:null});s0.current=new Set(E0.map((G)=>G.row_id)),$0.current=E0;let{notificationsEnabled:a0,notificationPermission:C0,toggleNotifications:R0,notify:g0}=f8(),[i2,k2]=T(()=>new Set),[c0,j0]=T(()=>g2("workspaceOpen",!0)),j2=J(null),{editorOpen:L0,tabStripTabs:Z0,tabStripActiveId:I_,previewTabs:T0,openEditor:p0,closeEditor:Z2,handleTabClose:F2,handleTabActivate:w2,handleTabCloseOthers:F0,handleTabCloseAll:b2,handleTabTogglePin:l2,handleTabTogglePreview:y2,revealInExplorer:u2}=m8({onTabClosed:(G)=>j2.current?.(G)}),W2=J(null),a_=J(null),A2=J(null),S0=J(null),x0=X0.getDockPanes().length>0,[N2,z$]=T(!1),U0=P(()=>z$((G)=>!G),[]),P2=!j&&(L0||x0&&N2);m(()=>{let G=W2.current;if(!G)return;if(a_.current)a_.current.dispose(),a_.current=null;let Y=I_;if(!Y)return;let F={path:Y,mode:"edit"},b=X0.resolve(F)||X0.get("editor");if(!b){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let D=b.mount(G,F);a_.current=D,D.onDirtyChange?.(($_)=>{T_.setDirty(Y,$_)}),D.onSaveRequest?.(()=>{}),D.onClose?.(()=>{Z2()});let h=T_.getViewState(Y);if(h&&typeof D.restoreViewState==="function")requestAnimationFrame(()=>D.restoreViewState(h));if(typeof D.onViewStateChange==="function")D.onViewStateChange(($_)=>{T_.saveViewState(Y,$_)});return requestAnimationFrame(()=>D.focus()),()=>{if(a_.current===D)D.dispose(),a_.current=null}},[I_,Z2]),m(()=>{let G=A2.current;if(S0.current)S0.current.dispose(),S0.current=null;if(!G||!x0||!N2)return;let Y=X0.getDockPanes()[0];if(!Y){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=Y.mount(G,{mode:"view"});return S0.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(S0.current===F)F.dispose(),S0.current=null}},[x0,N2]);let[K2,z2]=T({name:"You",avatar_url:null,avatar_background:null}),M2=J(!1),h0=J(!1),t0=J(null),f0=J($),e0=J(new Map),C2=J($),S2=J(0),_2=J(0),q2=J({}),n2=J({name:null,avatar_url:null}),b0=J({currentHashtag:null,searchQuery:null}),B=J(null),x=J(null),n=J(0),Y_=J(0),P_=J(0),t_=J(null),M_=J(null),N0=J(null),i0=J(null),J2=J(0),u0=J({title:null,avatarBase:null}),Y2=J(null),G2=P(()=>{if(Y2.current)clearTimeout(Y2.current),Y2.current=null;a(null)},[]);p8(30000),m(()=>{return k4()},[]),m(()=>{if(typeof window>"u")return;let G=()=>{X(c$())};G();let b=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].map((D)=>{try{return window.matchMedia(D)}catch{return null}}).filter(Boolean).map((D)=>{if(typeof D.addEventListener==="function")return D.addEventListener("change",G),()=>D.removeEventListener("change",G);if(typeof D.addListener==="function")return D.addListener(G),()=>D.removeListener(G);return()=>{}});return window.addEventListener("focus",G),window.addEventListener("pageshow",G),()=>{for(let D of b)D();window.removeEventListener("focus",G),window.removeEventListener("pageshow",G)}},[]),m(()=>{d_("workspaceOpen",String(c0))},[c0]),m(()=>{return()=>{G2()}},[G2]),m(()=>{if(!g_){d_(Z1,"");return}d_(Z1,JSON.stringify({question:g_.question||"",answer:g_.answer||"",thinking:g_.thinking||"",error:g_.error||null,status:g_.status||"success"}))},[g_]),m(()=>{q2.current=J_||{}},[J_]),m(()=>{f0.current=$},[$]),m(()=>{n2.current=K2||{name:"You",avatar_url:null,avatar_background:null}},[K2]);let l0=P((G,Y,F=null)=>{if(typeof document>"u")return;let b=(G||"").trim()||"PiClaw";if(u0.current.title!==b){document.title=b;let R=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(R&&R.getAttribute("content")!==b)R.setAttribute("content",b);u0.current.title=b}let D=document.getElementById("dynamic-favicon");if(!D)return;let h=D.getAttribute("data-default")||D.getAttribute("href")||"/favicon.ico",$_=Y||h,F_=Y?`${$_}|${F||""}`:$_;if(u0.current.avatarBase!==F_){let R=Y?`${$_}${$_.includes("?")?"&":"?"}v=${F||Date.now()}`:$_;D.setAttribute("href",R),u0.current.avatarBase=F_}},[]),O2=P((G)=>{if(!G)return;H((Y)=>Y.includes(G)?Y:[...Y,G])},[]),y0=P((G)=>{H((Y)=>Y.filter((F)=>F!==G))},[]);j2.current=y0;let x2=P(()=>{H([])},[]),V=P((G,Y=null,F="info",b=3000)=>{G2(),a({title:G,detail:Y||null,kind:F||"info"}),Y2.current=setTimeout(()=>{a((D)=>D?.title===G?null:D)},b)},[G2]),Q=P((G)=>{let Y=h8(G,{editorOpen:L0,resolvePane:(F)=>X0.resolve(F)});if(Y.kind==="open"){p0(Y.path);return}if(Y.kind==="toast")V(Y.title,Y.detail,Y.level)},[L0,p0,V]),k=P(()=>{let G=I_;if(G)O2(G)},[I_,O2]),E=P((G)=>{if(!G)return;C((Y)=>Y.includes(G)?Y:[...Y,G])},[]),u=P(async(G,Y=null)=>{let F=(D)=>{D.scrollIntoView({behavior:"smooth",block:"center"}),D.classList.add("post-highlight"),setTimeout(()=>D.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+G);if(b){F(b);return}try{let D=typeof Y==="string"&&Y.trim()?Y.trim():$,$_=(await o1(G,D))?.thread?.[0];if(!$_)return;q0((F_)=>{if(!F_)return[$_];if(F_.some((R)=>R.id===$_.id))return F_;return[...F_,$_]}),requestAnimationFrame(()=>{setTimeout(()=>{let F_=document.getElementById("post-"+G);if(F_)F(F_)},50)})}catch(D){console.error("[scrollToMessage] Failed to fetch message",G,D)}},[$]),d=P((G)=>{C((Y)=>Y.filter((F)=>F!==G))},[]),s=P(()=>{C([])},[]),o=P((G={})=>{let Y=Date.now();if(D_.current=Y,G.running)s_.current=!0,M0((F)=>F?F:!0);if(G.clearSilence)k_.current=0},[M0]),g=P(()=>{if(i0.current)clearTimeout(i0.current),i0.current=null;J2.current=0},[]);m(()=>()=>{g()},[g]);let z_=P(()=>{g(),l((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:Y,lastActivity:F,...b}=G;return b})},[g]),J0=P((G)=>{if(!G)return;g();let Y=Date.now();J2.current=Y,l({type:G.type||"active",last_activity:!0}),i0.current=setTimeout(()=>{if(J2.current!==Y)return;l((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},R8)},[g]),W0=P(()=>{s_.current=!1,M0(!1),D_.current=null,k_.current=0,E_.current="",u_.current="",w_.current=null,M_.current=null,p.current=null,L_.current=null,t0.current=null,V0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),X_(null),Z_(null),V_.current=!1,W_.current=!1},[g,X_,Z_,M0]),A0=P((G)=>{if(!s8({remainingQueueCount:G,currentTurnId:p.current,isAgentTurnActive:f_}))return;L_.current=null,Z_(null)},[f_,Z_]),N1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),Y$=P(()=>({agentStatus:t,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:Q_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:G_,steerQueuedTurnId:y_,isAgentTurnActive:Boolean(f_),followupQueueItems:Array.isArray(E0)?E0.map((G)=>({...G})):[],activeModel:m_,activeThinkingLevel:C_,supportsThinking:Boolean(Y0),activeModelUsage:e_,contextUsage:H0,isAgentRunning:Boolean(s_.current),wasAgentActive:Boolean(h0.current),draftBuffer:E_.current||"",thoughtBuffer:u_.current||"",lastAgentEvent:D_.current||null,lastSilenceNotice:k_.current||0,lastAgentResponse:M_.current||null,currentTurnIdRef:p.current||null,steerQueuedTurnIdRef:L_.current||null,thoughtExpanded:Boolean(V_.current),draftExpanded:Boolean(W_.current),agentStatusRef:t0.current||null,silentRecovery:{...V0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[m_,e_,C_,N_,Q_,t,r,H0,G_,E0,f_,K_,y_,Y0]),K1=P((G)=>{let Y=G||N1();g(),s_.current=Boolean(Y.isAgentRunning),h0.current=Boolean(Y.wasAgentActive),M0(Boolean(Y.isAgentTurnActive)),D_.current=Y.lastAgentEvent||null,k_.current=Number(Y.lastSilenceNotice||0),E_.current=Y.draftBuffer||"",u_.current=Y.thoughtBuffer||"",w_.current=Y.pendingRequest||null,M_.current=Y.lastAgentResponse||null,p.current=Y.currentTurnIdRef||null,L_.current=Y.steerQueuedTurnIdRef||null,t0.current=Y.agentStatusRef||null,V0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},V_.current=Boolean(Y.thoughtExpanded),W_.current=Boolean(Y.draftExpanded),l(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),U_(Y.agentPlan||""),__(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),j_(Y.pendingRequest||null),X_(Y.currentTurnId||null),Z_(Y.steerQueuedTurnId||null),n_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((F)=>({...F})):[]),H_(Y.activeModel||null),x_(Y.activeThinkingLevel||null),l_(Boolean(Y.supportsThinking)),B0(Y.activeModelUsage??null),G0(Y.contextUsage??null)},[g,N1,X_,n_,M0,Z_]),L2=P((G)=>{if(!G)return;if(p.current===G)return;p.current=G,V0.current={inFlight:!1,lastAttemptAt:0,turnId:G},X_(G),L_.current=null,Z_(null),E_.current="",u_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,M_.current=null,V_.current=!1,W_.current=!1},[X_,Z_]),z1=P((G)=>{if(typeof document<"u"){let R=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&R)return}let Y=M_.current;if(!Y||!Y.post)return;if(G&&Y.turnId&&Y.turnId!==G)return;let F=Y.post;if(F.id&&t_.current===F.id)return;let b=String(F?.data?.content||"").trim();if(!b)return;t_.current=F.id||t_.current,M_.current=null;let D=b.replace(/\s+/g," ").slice(0,200),h=q2.current||{},F_=(F?.data?.agent_id?h[F.data.agent_id]:null)?.name||"Pi";g0(F_,D)},[g0]),Z6=P(async(G,Y)=>{if(G!=="thought"&&G!=="draft")return;let F=p.current;if(G==="thought"){if(V_.current=Y,F)try{await _6(F,"thought",Y)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!Y)return;try{let b=F?await e8(F,"thought"):null;if(b?.text)u_.current=b.text;__((D)=>({...D||{text:"",totalLines:0},fullText:u_.current||D?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:D?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(W_.current=Y,F)try{await _6(F,"draft",Y)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!Y)return;try{let b=F?await e8(F,"draft"):null;if(b?.text)E_.current=b.text;i((D)=>({...D||{text:"",totalLines:0},fullText:E_.current||D?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:D?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),p$=J(null),h$=P(()=>{let G=B.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);p$.current=h$;let N6=P((G)=>{let Y=B.current;if(!Y||typeof G!=="function"){G?.();return}let{currentHashtag:F,searchQuery:b}=b0.current||{},D=!(b&&!F),h=D?Y.scrollHeight-Y.scrollTop:Y.scrollTop;G(),requestAnimationFrame(()=>{let $_=B.current;if(!$_)return;if(D){let F_=Math.max($_.scrollHeight-h,0);$_.scrollTop=F_}else{let F_=Math.max($_.scrollHeight-$_.clientHeight,0),R=Math.min(h,F_);$_.scrollTop=R}})},[]),o2=P((G)=>{let Y=B.current;if(!Y||typeof G!=="function"){G?.();return}let F=Y.scrollTop;G(),requestAnimationFrame(()=>{let b=B.current;if(!b)return;let D=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(F,D)})},[]),K6="Queued as a follow-up (one-at-a-time).",z6="⁣",Y1=P((G)=>{if(!G||!Array.isArray(G))return G;let Y=s0.current,F=new Set(Y),b=G.filter((D)=>{if(F.has(D?.id))return!1;if(D?.data?.is_bot_message){let h=D?.data?.content;if(h===K6||h===z6)return!1}return!0});return b.length===G.length?G:b},[]),{posts:G1,setPosts:q0,hasMore:Y6,setHasMore:G$,hasMoreRef:O1,loadPosts:$2,refreshTimeline:P0,loadMore:G6,loadMoreRef:i$}=I8({preserveTimelineScroll:N6,preserveTimelineScrollTop:o2,chatJid:$}),m2=h_(()=>Y1(G1),[G1,E0,Y1]),O$=P(()=>{let G=i_.current;if(!G)return;q0((Y)=>Y?Y.filter((F)=>F.id!==G):Y),i_.current=null},[q0]),{handleSplitterMouseDown:O6,handleSplitterTouchStart:L6,handleEditorSplitterMouseDown:X6,handleEditorSplitterTouchStart:V6,handleDockSplitterMouseDown:W6,handleDockSplitterTouchStart:q6}=u8({appShellRef:x,sidebarWidthRef:n,editorWidthRef:Y_,dockHeightRef:P_}),L1=P(()=>{if(!s_.current)return;s_.current=!1,k_.current=0,D_.current=null,p.current=null,X_(null),V_.current=!1,W_.current=!1;let G=(E_.current||"").trim();if(E_.current="",u_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,M_.current=null,!G){l({type:"error",title:"Response stalled - No content received"});return}let F=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),D=new Date().toISOString(),h={id:b,timestamp:D,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};i_.current=b,q0(($_)=>$_?N$([...$_,h]):[h]),p$.current?.(),l(null)},[X_]);m(()=>{b0.current={currentHashtag:O,searchQuery:W}},[O,W]);let R_=P(()=>{let G=$;l9(G).then((Y)=>{if(f0.current!==G)return;let F=O0.current,b=Array.isArray(Y?.items)?Y.items.map((D)=>({...D})).filter((D)=>!F.has(D.row_id)):[];if(b.length){n_((D)=>{if(D.length===b.length&&D.every((h,$_)=>h.row_id===b[$_].row_id))return D;return b});return}F.clear(),A0(0),n_((D)=>D.length===0?D:[])}).catch(()=>{if(f0.current!==G)return;n_((Y)=>Y.length===0?Y:[])})},[A0,$,n_]),n0=P(async()=>{let G=$;try{let Y=await j1(G);if(f0.current!==G)return;if(Y)G0(Y)}catch(Y){if(f0.current!==G)return;console.warn("Failed to fetch agent context:",Y)}},[$]),o0=P(async()=>{let G=$;try{let Y=await $6(G);if(f0.current!==G)return null;if(!Y||Y.status!=="active"||!Y.data){if(h0.current){let{currentHashtag:D,searchQuery:h}=b0.current||{};if(!D&&!h)P0()}return h0.current=!1,W0(),t0.current=null,l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,Y??null}h0.current=!0;let F=Y.data;t0.current=F;let b=F.turn_id||F.turnId;if(b)L2(b);if(o({running:!0,clearSilence:!0}),z_(),l(F),Y.thought&&Y.thought.text)__((D)=>{if(D&&D.text&&D.text.length>=Y.thought.text.length)return D;return u_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((D)=>{if(D&&D.text&&D.text.length>=Y.draft.text.length)return D;return E_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[W0,z_,o,P0,L2]),l$=P(async()=>{if(!s_.current)return null;if(w_.current)return null;let G=p.current||null,Y=V0.current,F=Date.now();if(Y.inFlight)return null;if(Y.turnId===G&&F-Y.lastAttemptAt<e3)return null;Y.inFlight=!0,Y.lastAttemptAt=F,Y.turnId=G;try{let{currentHashtag:b,searchQuery:D}=b0.current||{};if(!b&&!D)await P0();return await R_(),await o0()}finally{Y.inFlight=!1}},[o0,R_,P0]);m(()=>{let G=Math.min(1000,Math.max(100,Math.floor(t3/2))),Y=setInterval(()=>{if(!s_.current)return;if(w_.current)return;let F=D_.current;if(!F)return;let b=Date.now(),D=b-F,h=f$(t0.current);if(D>=v8){if(!h)l({type:"waiting",title:"Re-syncing after a quiet period…"});l$();return}if(D>=t3){if(b-k_.current>=e3){if(!h){let $_=Math.floor(D/1000);l({type:"waiting",title:`Waiting for model… No events for ${$_}s`})}k_.current=b,l$()}}},G);return()=>clearInterval(Y)},[l$]);let U6=P((G)=>{if(z(G),G!=="connected"){l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,W0();return}if(!M2.current){M2.current=!0,o0(),n0();return}let{currentHashtag:Y,searchQuery:F}=b0.current;if(!Y&&!F)P0();o0(),n0()},[W0,P0,o0,n0]),B6=P(async(G)=>{q(G),q0(null),await $2(G)},[$2]),Q6=P(async()=>{q(null),y(null),q0(null),await $2()},[$2]),H6=P(async(G,Y=I)=>{if(!G||!G.trim())return;let F=Y==="root"||Y==="all"?Y:"current";v(F),y(G.trim()),q(null),q0(null);try{let b=await a8(G.trim(),50,0,$,F,M);q0(b.results),G$(!1)}catch(b){console.error("Failed to search:",b),q0([])}},[$,M,I]),F6=P(()=>{f(!0),y(null),q(null),v("current"),q0([])},[]),y6=P(()=>{f(!1),y(null),$2()},[$2]),a9=P(()=>{},[]),J6=P(async(G)=>{if(!G)return;let Y=G.id,F=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,b=m2?.filter((h)=>h?.data?.thread_id===Y&&h?.id!==Y).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let D=(h)=>{if(!h.length)return;k2((F_)=>{let R=new Set(F_);return h.forEach((O_)=>R.add(O_)),R}),setTimeout(()=>{if(o2(()=>{q0((F_)=>F_?F_.filter((R)=>!h.includes(R.id)):F_)}),k2((F_)=>{let R=new Set(F_);return h.forEach((O_)=>R.delete(O_)),R}),O1.current)i$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await t8(Y,b>0,F);if(h?.ids?.length)D(h.ids)}catch(h){let $_=h?.message||"";if(b===0&&$_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let R=await t8(Y,!0,F);if(R?.ids?.length)D(R.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${$_}`)}},[$,m2,o2]),X1=P(async()=>{try{let G=await g9();b_(g8(G));let Y=G?.user||{};z2((b)=>{let D=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",h=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,$_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(b.name===D&&b.avatar_url===h&&b.avatar_background===$_)return b;return{name:D,avatar_url:h,avatar_background:$_}});let F=(G?.agents||[]).find((b)=>b.id==="default");l0(F?.name,F?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,Y=await j1(G);if(f0.current!==G)return;if(Y)G0(Y)}catch{}},[l0,$]);m(()=>{X1();let G=c2("sidebarWidth",null),Y=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(n.current=Y,x.current)x.current.style.setProperty("--sidebar-width",`${Y}px`)},[X1]);let n$=f_||t!==null,V1=P((G)=>{if(!G||typeof G!=="object")return;let Y=G.agent_id;if(!Y)return;let{agent_name:F,agent_avatar:b}=G;if(!F&&b===void 0)return;let D=q2.current?.[Y]||{id:Y},h=D.name||null,$_=D.avatar_url??D.avatarUrl??D.avatar??null,F_=!1,R=!1;if(F&&F!==D.name)h=F,R=!0;if(b!==void 0){let O_=typeof b==="string"?b.trim():null,c_=typeof $_==="string"?$_.trim():null,q_=O_||null;if(q_!==(c_||null))$_=q_,F_=!0}if(!R&&!F_)return;if(b_((O_)=>{let q_={...O_[Y]||{id:Y}};if(R)q_.name=h;if(F_)q_.avatar_url=$_;return{...O_,[Y]:q_}}),Y==="default")l0(h,$_,F_?Date.now():null)},[l0]),W1=P((G)=>{if(!G||typeof G!=="object")return;let Y=G.user_name??G.userName,F=G.user_avatar??G.userAvatar,b=G.user_avatar_background??G.userAvatarBackground;if(Y===void 0&&F===void 0&&b===void 0)return;z2((D)=>{let h=typeof Y==="string"&&Y.trim()?Y.trim():D.name||"You",$_=F===void 0?D.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,F_=b===void 0?D.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(D.name===h&&D.avatar_url===$_&&D.avatar_background===F_)return D;return{name:h,avatar_url:$_,avatar_background:F_}})},[]),o$=P((G)=>{if(!G||typeof G!=="object")return;let Y=G.model??G.current;if(Y!==void 0)H_(Y);if(G.thinking_level!==void 0)x_(G.thinking_level??null);if(G.supports_thinking!==void 0)l_(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)B0(G.provider_usage??null)},[]),d2=P(()=>{let G=$;c9(G).then((Y)=>{if(f0.current!==G)return;if(Y)o$(Y)}).catch(()=>{})},[o$,$]),m0=P(()=>{p9().then((G)=>{let Y=Array.isArray(G?.chats)?G.chats.filter((F)=>F&&typeof F.agent_name==="string"&&F.agent_name.trim()):[];_0(Y)}).catch(()=>{})},[]),I0=P(()=>{j6(M).then((G)=>{let Y=Array.isArray(G?.chats)?G.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];D0(Y)}).catch(()=>{})},[M]),D6=P((G)=>{let Y=G?.row_id;if(Y==null)return;O0.current.add(Y),n_((F)=>F.filter((b)=>b?.row_id!==Y)),n9(Y,resolveQueueActionChatJid($)).then(()=>{R_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),V("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(Y),R_()})},[$,R_,n_,V]),E6=P((G)=>{let Y=G?.row_id;if(Y==null)return;let F=$0.current.filter((b)=>b?.row_id!==Y).length;O0.current.add(Y),A0(F),n_((b)=>b.filter((D)=>D?.row_id!==Y)),o9(Y,resolveQueueActionChatJid($)).then(()=>{R_()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),V("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(Y),R_()})},[A0,$,R_,n_,V]),d$=P((G)=>{if(!G||typeof G!=="object")return;if(m0(),I0(),G?.queued==="followup"||G?.queued==="steer"){R_();return}let Y=G?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))R_()},[m0,I0,R_]),r$=P(()=>{if(N0.current)N0.current.abort(),N0.current=null;o_(null)},[]),L$=P(async(G)=>{let Y=String(G||"").trim();if(!Y)return V("BTW needs a question","Usage: /btw <question>","warning"),!0;if(N0.current)N0.current.abort();let F=new AbortController;N0.current=F,o_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await d9(Y,{signal:F.signal,chatJid:T4($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(D,h)=>{if(D==="side_prompt_start")o_(($_)=>$_?{...$_,status:"running"}:$_)},onThinkingDelta:(D)=>{o_((h)=>h?{...h,thinking:`${h.thinking||""}${D||""}`}:h)},onTextDelta:(D)=>{o_((h)=>h?{...h,answer:`${h.answer||""}${D||""}`}:h)}});if(N0.current!==F)return!0;o_((D)=>D?{...D,answer:b?.result||D.answer||"",thinking:b?.thinking||D.thinking||"",model:b?.model||null,status:"success",error:null}:D)}catch(b){if(F.signal.aborted)return!0;o_((D)=>D?{...D,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:D)}finally{if(N0.current===F)N0.current=null}return!0},[$,V]),k6=P(async({content:G})=>{let Y=I4(G);if(!Y)return!1;if(Y.type==="help")return V("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return r$(),V("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await L$(Y.question),!0;return!1},[r$,L$,V]),w6=P(()=>{if(g_?.question)L$(g_.question)},[g_,L$]),b6=P(async()=>{let G=v4(g_);if(!G)return;try{let Y=await t2("default",G,null,[],n$?"queue":null,$);d$(Y),V(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){V("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[g_,d$,n$,V]),r2=P(()=>{d2(),m0(),I0(),R_(),n0()},[d2,m0,I0,R_,n0]);m(()=>{r2();let G=setInterval(()=>{d2(),m0(),I0(),R_()},60000);return()=>clearInterval(G)},[r2,d2,m0,I0,R_]),m(()=>{I0()},[I0]),m(()=>{let G=!1;if(q0(null),O)return $2(O),()=>{G=!0};if(W)return a8(W,50,0,$,I,M).then((Y)=>{if(G)return;q0(Y.results),G$(!1)}).catch((Y)=>{if(G)return;console.error("Failed to search:",Y),q0([]),G$(!1)}),()=>{G=!0};return $2(),()=>{G=!0}},[$,O,W,I,M,$2,G$,q0]),m(()=>{let G=C2.current||$;e0.current.set(G,Y$())},[$,Y$]),m(()=>{let G=C2.current||$;if(G===$)return;e0.current.set(G,Y$()),C2.current=$,O0.current.clear(),K1(e0.current.get($)||null),R_(),o0(),n0()},[$,o0,n0,R_,K1,Y$]);let A6=P(()=>{let{currentHashtag:G,searchQuery:Y}=b0.current||{};if(!G&&!Y)P0();r2()},[r2,P0]),s$=P((G,Y)=>{let F=Y?.turn_id,b=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,h=b?b===$:G==="connected"||G==="workspace_update";if(h)V1(Y),W1(Y);if(G==="ui_theme"){w4(Y);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))z_()}if(G==="connected"){l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,W0();let R=$;$6(R).then((q_)=>{if(f0.current!==R)return;if(!q_||q_.status!=="active"||!q_.data)return;let v2=q_.data,q1=v2.turn_id||v2.turnId;if(q1)L2(q1);if(o({clearSilence:!0}),J0(v2),q_.thought&&q_.thought.text)u_.current=q_.thought.text,__({text:q_.thought.text,totalLines:q_.thought.totalLines||0});if(q_.draft&&q_.draft.text)E_.current=q_.draft.text,i({text:q_.draft.text,totalLines:q_.draft.totalLines||0})}).catch((q_)=>{console.warn("Failed to fetch agent status:",q_)});let{currentHashtag:O_,searchQuery:c_}=b0.current||{};if(!O_&&!c_)P0();r2();return}if(G==="agent_status"){if(!h){if(Y?.type==="done"||Y?.type==="error")m0(),I0();return}if(Y.type==="done"||Y.type==="error"){if(F&&p.current&&F!==p.current)return;if(Y.type==="done"){z1(F||p.current);let{currentHashtag:R,searchQuery:O_}=b0.current||{};if(!R&&!O_)P0();if(Y.context_usage)G0(Y.context_usage)}if(h0.current=!1,W0(),O0.current.clear(),m0(),R_(),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),Y.type==="error")l({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(F)L2(F);if(o({running:!0,clearSilence:!0}),Y.type==="thinking")E_.current="",u_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0});t0.current=Y,l((R)=>{if(R&&R.type===Y.type&&R.title===Y.title)return R;return Y})}return}if(G==="agent_steer_queued"){if(!h)return;if(F&&p.current&&F!==p.current)return;let R=F||p.current;if(!R)return;L_.current=R,Z_(R);return}if(G==="agent_followup_queued"){if(!h)return;let R=Y?.row_id,O_=Y?.content;if(R!=null&&typeof O_==="string"&&O_.trim())n_((c_)=>{if(c_.some((q_)=>q_?.row_id===R))return c_;return[...c_,{row_id:R,content:O_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});R_();return}if(G==="agent_followup_consumed"){if(!h)return;let R=Y?.row_id;if(R!=null){let O_=$0.current.filter((c_)=>c_.row_id!==R).length;A0(O_),n_((c_)=>c_.filter((q_)=>q_.row_id!==R))}R_(),P0();return}if(G==="agent_followup_removed"){if(!h)return;let R=Y?.row_id;if(R!=null){let O_=$0.current.filter((c_)=>c_.row_id!==R).length;O0.current.add(R),A0(O_),n_((c_)=>c_.filter((q_)=>q_.row_id!==R))}R_();return}if(G==="agent_draft_delta"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);if(o({running:!0,clearSilence:!0}),Y?.reset)E_.current="";if(Y?.delta)E_.current+=Y.delta;let R=Date.now();if(!S2.current||R-S2.current>=100){S2.current=R;let O_=E_.current,c_=_1(O_);if(W_.current)i((q_)=>({text:q_?.text||"",totalLines:c_,fullText:O_}));else i({text:O_,totalLines:c_})}return}if(G==="agent_draft"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);o({running:!0,clearSilence:!0});let R=Y.text||"",O_=Y.mode||(Y.kind==="plan"?"replace":"append"),c_=Number.isFinite(Y.total_lines)?Y.total_lines:R?R.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(O_==="replace")U_(R);else U_((q_)=>(q_||"")+R);else if(!W_.current)E_.current=R,i({text:R,totalLines:c_});return}if(G==="agent_thought_delta"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);if(o({running:!0,clearSilence:!0}),Y?.reset)u_.current="";if(typeof Y?.delta==="string")u_.current+=Y.delta;let R=Date.now();if(V_.current&&(!_2.current||R-_2.current>=100)){_2.current=R;let O_=u_.current;__((c_)=>({text:c_?.text||"",totalLines:_1(O_),fullText:O_}))}return}if(G==="agent_thought"){if(!h)return;if(F&&p.current&&F!==p.current)return;if(F&&!p.current)L2(F);o({running:!0,clearSilence:!0});let R=Y.text||"",O_=Number.isFinite(Y.total_lines)?Y.total_lines:R?R.replace(/\r\n/g,`
`).split(`
`).length:0;if(!V_.current)u_.current=R,__({text:R,totalLines:O_});return}if(G==="agent_request"){if(!h)return;if(console.log("Agent request:",Y),F&&p.current&&F!==p.current)return;if(F)L2(F);o({running:!0,clearSilence:!0}),j_(Y),w_.current=Y;return}if(G==="agent_request_timeout"){if(!h)return;if(console.log("Agent request timeout:",Y),F&&p.current&&F!==p.current)return;j_(null),w_.current=null,W0(),l({type:"error",title:"Permission request timed out"});return}if(G==="model_changed"){if(!h)return;if(Y?.model!==void 0)H_(Y.model);if(Y?.thinking_level!==void 0)x_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)l_(Boolean(Y.supports_thinking));let R=$;j1(R).then((O_)=>{if(f0.current!==R)return;if(O_)G0(O_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}let{currentHashtag:$_,searchQuery:F_}=b0.current;if(G==="agent_response"){if(!h)return;O$(),M_.current={post:Y,turnId:p.current}}if(!$_&&!F_&&h&&(G==="new_post"||G==="new_reply"||G==="agent_response"))q0((R)=>{if(!R)return[Y];if(R.some((O_)=>O_.id===Y.id))return R;return[...R,Y]}),p$.current?.();if(G==="interaction_updated"){if(!h)return;q0((R)=>{if(!R)return R;if(!R.some((O_)=>O_.id===Y.id))return R;return R.map((O_)=>O_.id===Y.id?Y:O_)})}if(G==="interaction_deleted"){if(!h)return;let R=Y?.ids||[];if(R.length){o2(()=>{q0((q_)=>q_?q_.filter((v2)=>!R.includes(v2.id)):q_)});let{currentHashtag:O_,searchQuery:c_}=b0.current;if(O1.current&&!O_&&!c_)i$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[W0,z_,$,i$,o,z1,o2,m0,I0,P0,O$,L2,J0,V1,W1,d2,R_,n_]);m(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=s$,G.reset=()=>{O$(),W0(),l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null)},G.finalize=()=>L1(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[W0,L1,s$,O$]),x8({handleSseEvent:s$,handleConnectionStatusChange:U6,loadPosts:$2,onWake:A6,chatJid:$}),m(()=>{if(!m2||m2.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let Y=G.slice(5);u(Y),history.replaceState(null,"",location.pathname+location.search)},[m2,u]);let a$=t!==null;m(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:F,searchQuery:b}=b0.current||{},D=!F&&!b;if(a$){if(D)P0();R_(),o0(),n0()}else{if(D)P0();o0(),n0()}},a$?15000:60000);return()=>clearInterval(Y)},[K,a$,o0,n0,R_,P0]),m(()=>{if(typeof window>"u"||typeof document>"u")return;let G=()=>{if(document.visibilityState&&document.visibilityState!=="visible")return;o0(),n0(),R_()};return window.addEventListener("focus",G),window.addEventListener("pageshow",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),window.removeEventListener("pageshow",G),document.removeEventListener("visibilitychange",G)}},[o0,n0,R_]);let P6=P(()=>{j0((G)=>!G)},[]),M6=P((G)=>{if(typeof window>"u")return;let Y=String(G||"").trim();if(!Y||Y===$)return;let F=K$(window.location.href,Y,{chatOnly:j});window.location.assign(F)},[j,$]),C6=P(async()=>{if(typeof window>"u"||!B_?.chat_jid)return;let G=B_.agent_name||"",Y=B_.display_name||"",F=window.prompt("Branch display name",Y);if(F===null)return;let b=window.prompt("Agent handle (without @)",G);if(b===null)return;try{let D=await h9(B_.chat_jid,{displayName:F,agentName:b});await Promise.allSettled([m0(),I0()]);let h=D?.branch?.agent_name||String(b||"").trim()||G;V("Branch renamed",`This chat is now @${h}.`,"info",3500)}catch(D){let h=D instanceof Error?D.message:String(D||"Could not rename branch.");V("Could not rename branch",h||"Could not rename branch.","warning",5000)}},[B_,m0,I0,V]),S6=P(async()=>{if(typeof window>"u"||!B_?.chat_jid)return;if(B_.chat_jid===(B_.root_chat_jid||B_.chat_jid)){V("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=B_.display_name||`@${B_.agent_name||B_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await i9(B_.chat_jid),await Promise.allSettled([m0(),I0()]);let b=B_.root_chat_jid||"web:default";V("Branch pruned",`${Y} has been archived.`,"info",3000);let D=K$(window.location.href,b,{chatOnly:j});window.location.assign(D)}catch(b){let D=b instanceof Error?b.message:String(b||"Could not prune branch.");V("Could not prune branch",D||"Could not prune branch.","warning",5000)}},[j,B_,m0,I0,V]);m(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{v_({status:"running",message:"Preparing a new chat branch…"});let Y=await O3(N);if(G)return;let F=Y?.branch,b=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");let D=K$(window.location.href,b,{chatOnly:!0});window.location.replace(D)}catch(Y){if(G)return;v_({status:"error",message:$1(Y)})}})(),()=>{G=!0}},[Z,N]);let x6=P(async()=>{if(typeof window>"u"||L)return;let G=i8($);if(!G){V("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let F=r8(window.location.href,$,{chatOnly:!0});if(!window.open(F,G.target))V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=l8(G);if(!Y){V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}n8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let b=(await O3($))?.branch,D=typeof b?.chat_jid==="string"&&b.chat_jid.trim()?b.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");try{let $_=await D$();_0(Array.isArray($_?.chats)?$_.chats:[])}catch{}try{let $_=await j6(M);D0(Array.isArray($_?.chats)?$_.chats:[])}catch{}let h=K$(window.location.href,D,{chatOnly:!0});o8(Y,h)}catch(F){d8(Y),V("Could not open branch window",$1(F),"error",5000)}},[$,M,L,V]);m(()=>{if(!L0)return;if(typeof window>"u")return;let G=x.current;if(!G)return;if(!Y_.current){let Y=c2("editorWidth",null),F=n.current||280;Y_.current=Number.isFinite(Y)?Y:F}if(G.style.setProperty("--editor-width",`${Y_.current}px`),!P_.current){let Y=c2("dockHeight",null);P_.current=Number.isFinite(Y)?Y:200}G.style.setProperty("--dock-height",`${P_.current}px`)},[L0]),m(()=>{if(!x0||j)return;let G=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),U0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[U0,x0,j]);let f6=Boolean(y_&&y_===(t?.turn_id||G_));if(Z)return U`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${A_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${A_.message}</p>
                    </div>
                </div>
            </div>
        `;return U`
        <div class=${`app-shell${c0?"":" workspace-collapsed"}${L0?" editor-open":""}${j?" chat-only":""}`} ref=${x}>
            ${!j&&U`
                <${P8}
                    onFileSelect=${O2}
                    visible=${c0}
                    active=${c0||L0}
                    onOpenEditor=${p0}
                />
                <button
                    class=${`workspace-toggle-tab${c0?" open":" closed"}`}
                    onClick=${P6}
                    title=${c0?"Hide workspace":"Show workspace"}
                    aria-label=${c0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${O6} onTouchStart=${L6}></div>
            `}
            ${P2&&U`
                <div class="editor-pane-container">
                    ${L0&&U`
                        <${M8}
                            tabs=${Z0}
                            activeId=${I_}
                            onActivate=${w2}
                            onClose=${F2}
                            onCloseOthers=${F0}
                            onCloseAll=${b2}
                            onTogglePin=${l2}
                            onTogglePreview=${y2}
                            previewTabs=${T0}
                            onToggleDock=${x0?U0:void 0}
                            dockVisible=${x0&&N2}
                        />
                    `}
                    ${L0&&U`<div class="editor-pane-host" ref=${W2}></div>`}
                    ${L0&&I_&&T0.has(I_)&&U`
                        <${S8}
                            getContent=${()=>a_.current?.getContent?.()}
                            path=${I_}
                            onClose=${()=>y2(I_)}
                        />
                    `}
                    ${x0&&N2&&U`<div class="dock-splitter" onMouseDown=${W6} onTouchStart=${q6}></div>`}
                    ${x0&&U`<div class=${`dock-panel${N2?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${U0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${A2}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${X6} onTouchStart=${V6}></div>
            `}
            <div class="container">
                ${W&&c8()&&U`<div class="search-results-spacer"></div>`}
                ${j&&U`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${B_?.display_name||B_?.agent_name?`@${B_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${B_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${Q0.length>1&&U`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(G)=>M6(G.currentTarget.value)}
                                    >
                                        ${Q0.map((G)=>U`
                                            <option key=${G.chat_jid} value=${G.chat_jid}>
                                                ${`@${G.agent_name}${G.display_name?` — ${G.display_name}`:""}${G.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${B_?.chat_jid&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${C6}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${B_?.chat_jid&&B_.chat_jid!==(B_.root_chat_jid||B_.chat_jid)&&U`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${S6}
                                    title="Prune this branch agent"
                                    aria-label="Prune this branch agent"
                                >
                                    Prune
                                </button>
                            `}
                            <span class="chat-window-header-badge">Chat only</span>
                        </div>
                    </div>
                `}
                ${(O||W)&&U`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${Q6}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${W} · ${e}`}</span>
                    </div>
                `}
                <${Y8}
                    posts=${m2}
                    hasMore=${Y6}
                    onLoadMore=${G6}
                    timelineRef=${B}
                    onHashtagClick=${B6}
                    onMessageRef=${E}
                    onScrollToMessage=${u}
                    onFileRef=${Q}
                    onPostClick=${void 0}
                    onDeletePost=${J6}
                    emptyMessage=${O?`No posts with #${O}`:W?`No results for "${W}"`:void 0}
                    agents=${J_}
                    user=${K2}
                    reverse=${!(W&&!O)}
                    removingPostIds=${i2}
                    searchQuery=${W}
                />
                <${l4}
                    status=${t}
                    draft=${N_}
                    plan=${Q_}
                    thought=${r}
                    pendingRequest=${K_}
                    intent=${c}
                    turnId=${G_}
                    steerQueued=${f6}
                    onPanelToggle=${Z6}
                />
                <${R4}
                    session=${g_}
                    onClose=${r$}
                    onRetry=${w6}
                    onInject=${b6}
                />
                <${Q4}
                    onPost=${()=>{$2(),h$()}}
                    onFocus=${h$}
                    searchMode=${w}
                    searchScope=${I}
                    onSearch=${H6}
                    onSearchScopeChange=${v}
                    onEnterSearch=${F6}
                    onExitSearch=${y6}
                    fileRefs=${S}
                    onRemoveFileRef=${y0}
                    onClearFileRefs=${x2}
                    messageRefs=${A}
                    onRemoveMessageRef=${d}
                    onClearMessageRefs=${s}
                    activeEditorPath=${j?null:I_}
                    onAttachEditorFile=${j?void 0:k}
                    onOpenFilePill=${Q}
                    followupQueueCount=${w0}
                    followupQueueItems=${E0}
                    onInjectQueuedFollowup=${D6}
                    onRemoveQueuedFollowup=${E6}
                    onSubmitIntercept=${k6}
                    onMessageResponse=${d$}
                    onPopOutChat=${L?void 0:x6}
                    isAgentActive=${n$}
                    activeChatAgents=${S_}
                    currentChatJid=${$}
                    activeModel=${m_}
                    modelUsage=${e_}
                    thinkingLevel=${C_}
                    supportsThinking=${Y0}
                    contextUsage=${H0}
                    notificationsEnabled=${a0}
                    notificationPermission=${C0}
                    onToggleNotifications=${R0}
                    onModelChange=${H_}
                    onModelStateChange=${o$}
                />
                <${o4} status=${K} />
                <${n4}
                    request=${K_}
                    onRespond=${()=>{j_(null),w_.current=null}}
                />
            </div>
        </div>
    `}function s9(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${r9} locationParams=${_} />`}R1(U`<${s9} />`,document.getElementById("app"));

//# debugId=BC9534287C07587B64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
