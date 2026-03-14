var A8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,Z)=>(typeof require<"u"?require:$)[Z]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var c2,G_,H3,y2,L3,X3,M8,u2={},F3=[],b8=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function t0(_,$){for(var Z in $)_[Z]=$[Z];return _}function E3(_){var $=_.parentNode;$&&$.removeChild(_)}function D3(_,$,Z){var J,X,Y,K={};for(Y in $)Y=="key"?J=$[Y]:Y=="ref"?X=$[Y]:K[Y]=$[Y];if(arguments.length>2&&(K.children=arguments.length>3?c2.call(arguments,2):Z),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)K[Y]===void 0&&(K[Y]=_.defaultProps[Y]);return R2(_,K,J,X,null)}function R2(_,$,Z,J,X){var Y={type:_,props:$,key:Z,ref:J,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:X==null?++H3:X};return G_.vnode!=null&&G_.vnode(Y),Y}function h2(_){return _.children}function v2(_,$){this.props=_,this.context=$}function z2(_,$){if($==null)return _.__?z2(_.__,_.__.__k.indexOf(_)+1):null;for(var Z;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null)return Z.__e;return typeof _.type=="function"?z2(_):null}function C3(_){var $,Z;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,$=0;$<_.__k.length;$++)if((Z=_.__k[$])!=null&&Z.__e!=null){_.__e=_.__c.base=Z.__e;break}return C3(_)}}function j3(_){(!_.__d&&(_.__d=!0)&&y2.push(_)&&!m2.__r++||X3!==G_.debounceRendering)&&((X3=G_.debounceRendering)||L3)(m2)}function m2(){for(var _;m2.__r=y2.length;)_=y2.sort(function($,Z){return $.__v.__b-Z.__v.__b}),y2=[],_.some(function($){var Z,J,X,Y,K,N;$.__d&&(K=(Y=(Z=$).__v).__e,(N=Z.__P)&&(J=[],(X=t0({},Y)).__v=Y.__v+1,U1(N,Y,X,Z.__n,N.ownerSVGElement!==void 0,Y.__h!=null?[K]:null,J,K==null?z2(Y):K,Y.__h),M3(J,Y),Y.__e!=K&&C3(Y)))})}function k3(_,$,Z,J,X,Y,K,N,V,O){var j,U,E,D,A,M,v,S=J&&J.__k||F3,H=S.length;for(Z.__k=[],j=0;j<$.length;j++)if((D=Z.__k[j]=(D=$[j])==null||typeof D=="boolean"?null:typeof D=="string"||typeof D=="number"||typeof D=="bigint"?R2(null,D,null,null,D):Array.isArray(D)?R2(h2,{children:D},null,null,null):D.__b>0?R2(D.type,D.props,D.key,null,D.__v):D)!=null){if(D.__=Z,D.__b=Z.__b+1,(E=S[j])===null||E&&D.key==E.key&&D.type===E.type)S[j]=void 0;else for(U=0;U<H;U++){if((E=S[U])&&D.key==E.key&&D.type===E.type){S[U]=void 0;break}E=null}U1(_,D,E=E||u2,X,Y,K,N,V,O),A=D.__e,(U=D.ref)&&E.ref!=U&&(v||(v=[]),E.ref&&v.push(E.ref,null,D),v.push(U,D.__c||A,D)),A!=null?(M==null&&(M=A),typeof D.type=="function"&&D.__k!=null&&D.__k===E.__k?D.__d=V=y3(D,V,_):V=A3(_,D,E,S,A,V),O||Z.type!=="option"?typeof Z.type=="function"&&(Z.__d=V):_.value=""):V&&E.__e==V&&V.parentNode!=_&&(V=z2(E))}for(Z.__e=M,j=H;j--;)S[j]!=null&&(typeof Z.type=="function"&&S[j].__e!=null&&S[j].__e==Z.__d&&(Z.__d=z2(J,j+1)),P3(S[j],S[j]));if(v)for(j=0;j<v.length;j++)b3(v[j],v[++j],v[++j])}function y3(_,$,Z){var J,X;for(J=0;J<_.__k.length;J++)(X=_.__k[J])&&(X.__=_,$=typeof X.type=="function"?y3(X,$,Z):A3(Z,X,X,_.__k,X.__e,$));return $}function A3(_,$,Z,J,X,Y){var K,N,V;if($.__d!==void 0)K=$.__d,$.__d=void 0;else if(Z==null||X!=Y||X.parentNode==null)_:if(Y==null||Y.parentNode!==_)_.appendChild(X),K=null;else{for(N=Y,V=0;(N=N.nextSibling)&&V<J.length;V+=2)if(N==X)break _;_.insertBefore(X,Y),K=Y}return K!==void 0?K:X.nextSibling}function K3(_,$,Z){$[0]==="-"?_.setProperty($,Z):_[$]=Z==null?"":typeof Z!="number"||b8.test($)?Z:Z+"px"}function f2(_,$,Z,J,X){var Y;_:if($==="style")if(typeof Z=="string")_.style.cssText=Z;else{if(typeof J=="string"&&(_.style.cssText=J=""),J)for($ in J)Z&&$ in Z||K3(_.style,$,"");if(Z)for($ in Z)J&&Z[$]===J[$]||K3(_.style,$,Z[$])}else if($[0]==="o"&&$[1]==="n")Y=$!==($=$.replace(/Capture$/,"")),$=$.toLowerCase()in _?$.toLowerCase().slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=Z,Z?J||_.addEventListener($,Y?G3:W3,Y):_.removeEventListener($,Y?G3:W3,Y);else if($!=="dangerouslySetInnerHTML"){if(X)$=$.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if($!=="href"&&$!=="list"&&$!=="form"&&$!=="tabIndex"&&$!=="download"&&$ in _)try{_[$]=Z==null?"":Z;break _}catch(K){}typeof Z=="function"||(Z!=null&&(Z!==!1||$[0]==="a"&&$[1]==="r")?_.setAttribute($,Z):_.removeAttribute($))}}function W3(_){this.l[_.type+!1](G_.event?G_.event(_):_)}function G3(_){this.l[_.type+!0](G_.event?G_.event(_):_)}function U1(_,$,Z,J,X,Y,K,N,V){var O,j,U,E,D,A,M,v,S,H,w,k=$.type;if($.constructor!==void 0)return null;Z.__h!=null&&(V=Z.__h,N=$.__e=Z.__e,$.__h=null,Y=[N]),(O=G_.__b)&&O($);try{_:if(typeof k=="function"){if(v=$.props,S=(O=k.contextType)&&J[O.__c],H=O?S?S.props.value:O.__:J,Z.__c?M=(j=$.__c=Z.__c).__=j.__E:(("prototype"in k)&&k.prototype.render?$.__c=j=new k(v,H):($.__c=j=new v2(v,H),j.constructor=k,j.render=S8),S&&S.sub(j),j.props=v,j.state||(j.state={}),j.context=H,j.__n=J,U=j.__d=!0,j.__h=[]),j.__s==null&&(j.__s=j.state),k.getDerivedStateFromProps!=null&&(j.__s==j.state&&(j.__s=t0({},j.__s)),t0(j.__s,k.getDerivedStateFromProps(v,j.__s))),E=j.props,D=j.state,U)k.getDerivedStateFromProps==null&&j.componentWillMount!=null&&j.componentWillMount(),j.componentDidMount!=null&&j.__h.push(j.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==E&&j.componentWillReceiveProps!=null&&j.componentWillReceiveProps(v,H),!j.__e&&j.shouldComponentUpdate!=null&&j.shouldComponentUpdate(v,j.__s,H)===!1||$.__v===Z.__v){j.props=v,j.state=j.__s,$.__v!==Z.__v&&(j.__d=!1),j.__v=$,$.__e=Z.__e,$.__k=Z.__k,$.__k.forEach(function(R){R&&(R.__=$)}),j.__h.length&&K.push(j);break _}j.componentWillUpdate!=null&&j.componentWillUpdate(v,j.__s,H),j.componentDidUpdate!=null&&j.__h.push(function(){j.componentDidUpdate(E,D,A)})}j.context=H,j.props=v,j.state=j.__s,(O=G_.__r)&&O($),j.__d=!1,j.__v=$,j.__P=_,O=j.render(j.props,j.state,j.context),j.state=j.__s,j.getChildContext!=null&&(J=t0(t0({},J),j.getChildContext())),U||j.getSnapshotBeforeUpdate==null||(A=j.getSnapshotBeforeUpdate(E,D)),w=O!=null&&O.type===h2&&O.key==null?O.props.children:O,k3(_,Array.isArray(w)?w:[w],$,Z,J,X,Y,K,N,V),j.base=$.__e,$.__h=null,j.__h.length&&K.push(j),M&&(j.__E=j.__=null),j.__e=!1}else Y==null&&$.__v===Z.__v?($.__k=Z.__k,$.__e=Z.__e):$.__e=P8(Z.__e,$,Z,J,X,Y,K,V);(O=G_.diffed)&&O($)}catch(R){$.__v=null,(V||Y!=null)&&($.__e=N,$.__h=!!V,Y[Y.indexOf(N)]=null),G_.__e(R,$,Z)}}function M3(_,$){G_.__c&&G_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(J){J.call(Z)})}catch(J){G_.__e(J,Z.__v)}})}function P8(_,$,Z,J,X,Y,K,N){var V,O,j,U=Z.props,E=$.props,D=$.type,A=0;if(D==="svg"&&(X=!0),Y!=null){for(;A<Y.length;A++)if((V=Y[A])&&(V===_||(D?V.localName==D:V.nodeType==3))){_=V,Y[A]=null;break}}if(_==null){if(D===null)return document.createTextNode(E);_=X?document.createElementNS("http://www.w3.org/2000/svg",D):document.createElement(D,E.is&&E),Y=null,N=!1}if(D===null)U===E||N&&_.data===E||(_.data=E);else{if(Y=Y&&c2.call(_.childNodes),O=(U=Z.props||u2).dangerouslySetInnerHTML,j=E.dangerouslySetInnerHTML,!N){if(Y!=null)for(U={},A=0;A<_.attributes.length;A++)U[_.attributes[A].name]=_.attributes[A].value;(j||O)&&(j&&(O&&j.__html==O.__html||j.__html===_.innerHTML)||(_.innerHTML=j&&j.__html||""))}if(function(M,v,S,H,w){var k;for(k in S)k==="children"||k==="key"||k in v||f2(M,k,null,S[k],H);for(k in v)w&&typeof v[k]!="function"||k==="children"||k==="key"||k==="value"||k==="checked"||S[k]===v[k]||f2(M,k,v[k],S[k],H)}(_,E,U,X,N),j)$.__k=[];else if(A=$.props.children,k3(_,Array.isArray(A)?A:[A],$,Z,J,X&&D!=="foreignObject",Y,K,Y?Y[0]:Z.__k&&z2(Z,0),N),Y!=null)for(A=Y.length;A--;)Y[A]!=null&&E3(Y[A]);N||(("value"in E)&&(A=E.value)!==void 0&&(A!==_.value||D==="progress"&&!A)&&f2(_,"value",A,U.value,!1),("checked"in E)&&(A=E.checked)!==void 0&&A!==_.checked&&f2(_,"checked",A,U.checked,!1))}return _}function b3(_,$,Z){try{typeof _=="function"?_($):_.current=$}catch(J){G_.__e(J,Z)}}function P3(_,$,Z){var J,X;if(G_.unmount&&G_.unmount(_),(J=_.ref)&&(J.current&&J.current!==_.__e||b3(J,null,$)),(J=_.__c)!=null){if(J.componentWillUnmount)try{J.componentWillUnmount()}catch(Y){G_.__e(Y,$)}J.base=J.__P=null}if(J=_.__k)for(X=0;X<J.length;X++)J[X]&&P3(J[X],$,typeof _.type!="function");Z||_.__e==null||E3(_.__e),_.__e=_.__d=void 0}function S8(_,$,Z){return this.constructor(_,Z)}function S3(_,$,Z){var J,X,Y;G_.__&&G_.__(_,$),X=(J=typeof Z=="function")?null:Z&&Z.__k||$.__k,Y=[],U1($,_=(!J&&Z||$).__k=D3(h2,null,[_]),X||u2,u2,$.ownerSVGElement!==void 0,!J&&Z?[Z]:X?null:$.firstChild?c2.call($.childNodes):null,Y,!J&&Z?Z:X?X.__e:$.firstChild,J),M3(Y,_)}c2=F3.slice,G_={__e:function(_,$){for(var Z,J,X;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((J=Z.constructor)&&J.getDerivedStateFromError!=null&&(Z.setState(J.getDerivedStateFromError(_)),X=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_),X=Z.__d),X)return Z.__E=Z}catch(Y){_=Y}throw _}},H3=0,v2.prototype.setState=function(_,$){var Z;Z=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=t0({},this.state),typeof _=="function"&&(_=_(t0({},Z),this.props)),_&&t0(Z,_),_!=null&&this.__v&&($&&this.__h.push($),j3(this))},v2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),j3(this))},v2.prototype.render=h2,y2=[],L3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m2.__r=0,M8=0;var p2,H0,N3,A2=0,z1=[],V3=G_.__b,O3=G_.__r,B3=G_.diffed,q3=G_.__c,z3=G_.unmount;function H1(_,$){G_.__h&&G_.__h(H0,_,A2||$),A2=0;var Z=H0.__H||(H0.__H={__:[],__h:[]});return _>=Z.__.length&&Z.__.push({}),Z.__[_]}function u(_){return A2=1,w8(I3,_)}function w8(_,$,Z){var J=H1(p2++,2);return J.t=_,J.__c||(J.__=[Z?Z($):I3(void 0,$),function(X){var Y=J.t(J.__[0],X);J.__[0]!==Y&&(J.__=[Y,J.__[1]],J.__c.setState({}))}],J.__c=H0),J.__}function c(_,$){var Z=H1(p2++,3);!G_.__s&&w3(Z.__H,$)&&(Z.__=_,Z.__H=$,H0.__H.__h.push(Z))}function L(_){return A2=5,L0(function(){return{current:_}},[])}function L0(_,$){var Z=H1(p2++,7);return w3(Z.__H,$)&&(Z.__=_(),Z.__H=$,Z.__h=_),Z.__}function P(_,$){return A2=8,L0(function(){return _},$)}function I8(){z1.forEach(function(_){if(_.__P)try{_.__H.__h.forEach(g2),_.__H.__h.forEach(Q1),_.__H.__h=[]}catch($){_.__H.__h=[],G_.__e($,_.__v)}}),z1=[]}G_.__b=function(_){H0=null,V3&&V3(_)},G_.__r=function(_){O3&&O3(_),p2=0;var $=(H0=_.__c).__H;$&&($.__h.forEach(g2),$.__h.forEach(Q1),$.__h=[])},G_.diffed=function(_){B3&&B3(_);var $=_.__c;$&&$.__H&&$.__H.__h.length&&(z1.push($)!==1&&N3===G_.requestAnimationFrame||((N3=G_.requestAnimationFrame)||function(Z){var J,X=function(){clearTimeout(Y),Q3&&cancelAnimationFrame(J),setTimeout(Z)},Y=setTimeout(X,100);Q3&&(J=requestAnimationFrame(X))})(I8)),H0=void 0},G_.__c=function(_,$){$.some(function(Z){try{Z.__h.forEach(g2),Z.__h=Z.__h.filter(function(J){return!J.__||Q1(J)})}catch(J){$.some(function(X){X.__h&&(X.__h=[])}),$=[],G_.__e(J,Z.__v)}}),q3&&q3(_,$)},G_.unmount=function(_){z3&&z3(_);var $=_.__c;if($&&$.__H)try{$.__H.__.forEach(g2)}catch(Z){G_.__e(Z,$.__v)}};var Q3=typeof requestAnimationFrame=="function";function g2(_){var $=H0;typeof _.__c=="function"&&_.__c(),H0=$}function Q1(_){var $=H0;_.__c=_.__(),H0=$}function w3(_,$){return!_||_.length!==$.length||$.some(function(Z,J){return Z!==_[J]})}function I3(_,$){return typeof $=="function"?$(_):$}var x3=function(_,$,Z,J){var X;$[0]=0;for(var Y=1;Y<$.length;Y++){var K=$[Y++],N=$[Y]?($[0]|=K?1:2,Z[$[Y++]]):$[++Y];K===3?J[0]=N:K===4?J[1]=Object.assign(J[1]||{},N):K===5?(J[1]=J[1]||{})[$[++Y]]=N:K===6?J[1][$[++Y]]+=N+"":K?(X=_.apply(N,x3(_,N,Z,["",null])),J.push(X),N[0]?$[0]|=2:($[Y-2]=0,$[Y]=X)):J.push(N)}return J},U3=new Map,Q=function(_){var $=U3.get(this);return $||($=new Map,U3.set(this,$)),($=x3(this,$.get(_)||($.set(_,$=function(Z){for(var J,X,Y=1,K="",N="",V=[0],O=function(E){Y===1&&(E||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,E,K):Y===3&&(E||K)?(V.push(3,E,K),Y=2):Y===2&&K==="..."&&E?V.push(4,E,0):Y===2&&K&&!E?V.push(5,0,!0,K):Y>=5&&((K||!E&&Y===5)&&(V.push(Y,0,K,X),Y=6),E&&(V.push(Y,E,0,X),Y=6)),K=""},j=0;j<Z.length;j++){j&&(Y===1&&O(),O(j));for(var U=0;U<Z[j].length;U++)J=Z[j][U],Y===1?J==="<"?(O(),V=[V],Y=3):K+=J:Y===4?K==="--"&&J===">"?(Y=1,K=""):K=J+K[0]:N?J===N?N="":K+=J:J==='"'||J==="'"?N=J:J===">"?(O(),Y=1):Y&&(J==="="?(Y=5,X=K,K=""):J==="/"&&(Y<5||Z[j][U+1]===">")?(O(),Y===3&&(V=V[0]),Y=V,(V=V[0]).push(2,0,Y),Y=0):J===" "||J==="\t"||J===`
`||J==="\r"?(O(),Y=2):K+=J),Y===3&&K==="!--"&&(Y=4,V=V[0])}return O(),V}(_)),$),arguments,[])).length>1?$:$[0]}.bind(D3);async function o_(_,$={}){let Z=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Unknown error"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function i2(_=10,$=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;return o_(Z)}async function T3(_,$=50,Z=0){return o_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${Z}`)}async function f3(_,$=50,Z=0){return o_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${Z}`)}async function R3(_){return o_(`/thread/${_}`)}async function v3(_,$=!1){let Z=`/post/${_}?cascade=${$?"true":"false"}`;return o_(Z,{method:"DELETE"})}async function L1(_,$,Z=null,J=[],X=null){return o_(`/agent/${_}/message`,{method:"POST",body:JSON.stringify({content:$,thread_id:Z,media_ids:J,mode:X})})}async function g3(){return o_("/agents")}async function u3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/status${$}`)}async function F1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/context${$}`)}async function E1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/queue-state${$}`)}async function D1(_,$=null){let Z=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function C1(_,$=null){let Z=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function j2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return o_(`/agent/models${$}`)}async function m3(_){let $=new FormData;$.append("file",_);let Z=await fetch("/media/upload",{method:"POST",body:$});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Upload failed"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function k1(_,$){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function c3(_,$){let Z=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(J.error||`HTTP ${Z.status}`)}return Z.json()}async function h3(_,$="thought"){let Z=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return o_(Z)}async function p3(_,$,Z){return o_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(Z)})})}function Q2(_){return`/media/${_}`}function i3(_){return`/media/${_}/thumbnail`}async function l2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function o2(_="",$=2,Z=!1){let J=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${Z?"1":"0"}`;return o_(J)}async function l3(_,$=20000,Z=null){let J=Z?`&mode=${encodeURIComponent(Z)}`:"",X=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${J}`;return o_(X)}async function o3(_){return o_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function y1(_,$="",Z={}){let J=new FormData;J.append("file",_);let X=new URLSearchParams;if($)X.set("path",$);if(Z.overwrite)X.set("overwrite","1");let Y=X.toString(),K=Y?`/workspace/upload?${Y}`:"/workspace/upload",N=await fetch(""+K,{method:"POST",body:J});if(!N.ok){let V=await N.json().catch(()=>({error:"Upload failed"})),O=Error(V.error||`HTTP ${N.status}`);throw O.status=N.status,O.code=V.code,O}return N.json()}async function n3(_,$,Z=""){let J=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:Z})});if(!J.ok){let X=await J.json().catch(()=>({error:"Create failed"})),Y=Error(X.error||`HTTP ${J.status}`);throw Y.status=J.status,Y.code=X.code,Y}return J.json()}async function d3(_,$){let Z=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Rename failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function r3(_,$){let Z=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!Z.ok){let J=await Z.json().catch(()=>({error:"Move failed"})),X=Error(J.error||`HTTP ${Z.status}`);throw X.status=Z.status,X.code=J.code,X}return Z.json()}async function s3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return o_($,{method:"DELETE"})}async function n2(_,$=!1){return o_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function A1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function a3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class M1{constructor(_,$){this.onEvent=_,this.onStatusChange=$,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.eventSource=new EventSource("/sse/stream"),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",(_)=>{this.onEvent("new_post",JSON.parse(_.data))}),this.eventSource.addEventListener("new_reply",(_)=>{this.onEvent("new_reply",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_response",(_)=>{this.onEvent("agent_response",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_updated",(_)=>{this.onEvent("interaction_updated",JSON.parse(_.data))}),this.eventSource.addEventListener("interaction_deleted",(_)=>{this.onEvent("interaction_deleted",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_status",(_)=>{this.onEvent("agent_status",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_steer_queued",(_)=>{this.onEvent("agent_steer_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_queued",(_)=>{this.onEvent("agent_followup_queued",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_consumed",(_)=>{this.onEvent("agent_followup_consumed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_followup_removed",(_)=>{this.onEvent("agent_followup_removed",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request",(_)=>{this.onEvent("agent_request",JSON.parse(_.data))}),this.eventSource.addEventListener("workspace_update",(_)=>{this.onEvent("workspace_update",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_request_timeout",(_)=>{this.onEvent("agent_request_timeout",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft",(_)=>{this.onEvent("agent_draft",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_draft_delta",(_)=>{this.onEvent("agent_draft_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought",(_)=>{this.onEvent("agent_thought",JSON.parse(_.data))}),this.eventSource.addEventListener("agent_thought_delta",(_)=>{this.onEvent("agent_thought_delta",JSON.parse(_.data))}),this.eventSource.addEventListener("model_changed",(_)=>{this.onEvent("model_changed",JSON.parse(_.data))}),this.eventSource.addEventListener("ui_theme",(_)=>{this.onEvent("ui_theme",JSON.parse(_.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,Z=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,Z+$),this.reconnectAttempts=0;let J=Math.max(this.cooldownUntil-Z,0),X=Math.max(this.reconnectDelay,J);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},X),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function f0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function f_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function U2(_,$=!1){let Z=f0(_);if(Z===null)return $;return Z==="true"}function H2(_,$=null){let Z=f0(_);if(Z===null)return $;let J=parseInt(Z,10);return Number.isFinite(J)?J:$}function e0({prefix:_="file",label:$,title:Z,onRemove:J,onClick:X,removeTitle:Y="Remove",icon:K="file"}){let N=`${_}-file-pill`,V=`${_}-file-name`,O=`${_}-file-remove`,j=K==="message"?Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Q`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return Q`
    <span class=${N} title=${Z||$} onClick=${X}>
      ${j}
      <span class=${V}>${$}</span>
      ${J&&Q`
        <button
          class=${O}
          onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),J()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var T8=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function f8({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,J=_.contextWindow,X=Z!=null?`Context: ${t3(Z)} / ${t3(J)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,Y=7,K=2*Math.PI*7,N=$/100*K,V=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return Q`
        <span class="compose-context-pie icon-btn" title=${X}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${N} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function t3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function e3({onPost:_,onFocus:$,searchMode:Z,onSearch:J,onEnterSearch:X,onExitSearch:Y,fileRefs:K=[],onRemoveFileRef:N,onClearFileRefs:V,messageRefs:O=[],onRemoveMessageRef:j,onClearMessageRefs:U,activeModel:E=null,modelUsage:D=null,thinkingLevel:A=null,supportsThinking:M=!1,contextUsage:v=null,notificationsEnabled:S=!1,notificationPermission:H="default",onToggleNotifications:w,onModelChange:k,onModelStateChange:R,activeEditorPath:p=null,onAttachEditorFile:l,onOpenFilePill:Y_,followupQueueItems:O_=[],onInjectQueuedFollowup:$_,onRemoveQueuedFollowup:N_,onMessageResponse:b_,isAgentActive:r=!1}){let[e,d]=u(""),[i,Z_]=u(""),[K_,J_]=u([]),[R_,X_]=u(!1),[B_,z_]=u([]),[L_,A_]=u(0),[F_,U_]=u(!1),[k_,u_]=u(!1),[M_,P_]=u(!1),[y_,h_]=u([]),[p_,S_]=u(!1),W_=L(null),B0=L(null),a_=L(null),M0=L(null),W0=L(0),b0=200,Q_=(z)=>{let T=new Set,o=[];for(let V_ of z||[]){if(typeof V_!=="string")continue;let D_=V_.trim();if(!D_||T.has(D_))continue;T.add(D_),o.push(D_)}return o},G0=()=>{let z=f0("piclaw_compose_history");if(!z)return[];try{let T=JSON.parse(z);if(!Array.isArray(T))return[];return Q_(T)}catch{return[]}},F0=(z)=>{f_("piclaw_compose_history",JSON.stringify(z))},I=L(G0()),__=L(-1),E_=L(""),N0=e.trim()||K_.length>0||K.length>0||O.length>0,O0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),d_=typeof window<"u"&&typeof Notification<"u",v0=typeof window<"u"?Boolean(window.isSecureContext):!1,m_=d_&&v0&&H!=="denied",E0=H==="granted"&&S,c_=E0?"Disable notifications":"Enable notifications",t_=E||"",I_=M&&A?` (${A})`:"",o0=I_.trim()?`${A}`:"",$2=typeof D?.hint_short==="string"?D.hint_short.trim():"",g0=[o0||null,$2||null].filter(Boolean).join(" • "),K2=[t_?`Current model: ${t_}${I_}`:null,D?.plan?`Plan: ${D.plan}`:null,$2||null,D?.primary?.reset_description||null,D?.secondary?.reset_description||null].filter(Boolean),D0=k_?"Switching model…":K2.join(" • ")||`Current model: ${t_}${I_} (tap to open model picker)`,C0=(z)=>{if(!z||typeof z!=="object")return;let T=z.model??z.current;if(typeof R==="function")R({model:T??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(T&&typeof k==="function")k(T)},J0=(z)=>{let T=z||W_.current;if(!T)return;T.style.height="auto",T.style.height=`${T.scrollHeight}px`,T.style.overflowY="hidden"},u0=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){U_(!1),z_([]);return}let T=z.toLowerCase().split(" ")[0];if(T.length<1){U_(!1),z_([]);return}let o=T8.filter((V_)=>V_.name.startsWith(T)||V_.name.replace(/-/g,"").startsWith(T.replace(/-/g,"")));if(o.length>0&&!(o.length===1&&o[0].name===T))z_(o),A_(0),U_(!0);else U_(!1),z_([])},k0=(z)=>{let T=e,o=T.indexOf(" "),V_=o>=0?T.slice(o):"",D_=z.name+V_;d(D_),U_(!1),z_([]),requestAnimationFrame(()=>{let i_=W_.current;if(!i_)return;let q_=D_.length;i_.selectionStart=q_,i_.selectionEnd=q_,i_.focus()})},v_=(z)=>{if(Z)Z_(z);else d(z),u0(z);requestAnimationFrame(()=>J0())},n0=(z)=>{let T=Z?i:e,o=T&&!T.endsWith(`
`)?`
`:"",V_=`${T}${o}${z}`.trimStart();v_(V_)},W2=(z)=>{let T=z?.command?.model_label;if(T)return T;let o=z?.command?.message;if(typeof o==="string"){let V_=o.match(/•\s+([^\n]+?)\s+\(current\)/);if(V_?.[1])return V_[1].trim()}return null},Z2=async(z)=>{if(Z||k_)return;u_(!0);try{let T=await L1("default",z,null,[]),o=W2(T);C0({model:o??E??null,thinking_level:T?.command?.thinking_level,supports_thinking:T?.command?.supports_thinking});try{let V_=await j2();if(V_)C0(V_)}catch{}return _?.(),!0}catch(T){return console.error("Failed to switch model:",T),alert("Failed to switch model: "+T.message),!1}finally{u_(!1)}},d0=async()=>{await Z2("/cycle-model")},r_=async(z)=>{if(!z||k_)return;if(await Z2(`/model ${z}`))P_(!1)},z0=(z)=>{z.preventDefault(),z.stopPropagation(),P_((T)=>!T)},Q0=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return r?"queue":null},x_=async(z,T,o={})=>{let{includeMedia:V_=!0,includeFileRefs:D_=!0,includeMessageRefs:i_=!0,clearAfterSubmit:q_=!0,recordHistory:X0=!0}=o||{},p0=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:e,w0=typeof p0==="string"?p0:"";if(!w0.trim()&&(V_?K_.length===0:!0)&&(D_?K.length===0:!0)&&(i_?O.length===0:!0))return;U_(!1),z_([]);let i0=V_?[...K_]:[],G2=D_?[...K]:[],N2=i_?[...O]:[],s_=w0.trim();if(X0&&s_){let w_=I.current,j0=Q_(w_.filter((s0)=>s0!==s_));if(j0.push(s_),j0.length>200)j0.splice(0,j0.length-200);I.current=j0,F0(j0),__.current=-1,E_.current=""}if(q_)d(""),J_([]),V?.(),U?.();(async()=>{try{let w_=[];for(let V0 of i0){let y0=await m3(V0);w_.push(y0.id)}let j0=G2.length?`Files:
${G2.map((V0)=>`- ${V0}`).join(`
`)}`:"",s0=N2.length?`Referenced messages:
${N2.map((V0)=>`- message:${V0}`).join(`
`)}`:"",l_=w_.length?`Images:
${w_.map((V0,y0)=>{let D2=i0[y0]?.name||`image-${y0+1}`;return`- attachment:${V0} (${D2})`}).join(`
`)}`:"",$0=[s_,j0,s0,l_].filter(Boolean).join(`

`),I0=await L1("default",$0,null,w_,Q0(T));if(b_?.(I0),I0?.command){C0({model:I0.command.model_label??E??null,thinking_level:I0.command.thinking_level,supports_thinking:I0.command.supports_thinking});try{let V0=await j2();if(V0)C0(V0)}catch{}}_?.()}catch(w_){console.error("Failed to post:",w_)}})()},e_=(z)=>{$_?.(z)},g_=(z)=>{if(z.isComposing)return;if(Z&&z.key==="Escape"){z.preventDefault(),Z_(""),Y?.();return}if(F_&&B_.length>0){let T=W_.current?.value??(Z?i:e);if(!String(T||"").startsWith("/"))U_(!1),z_([]);else{if(z.key==="ArrowDown"){z.preventDefault(),A_((o)=>(o+1)%B_.length);return}if(z.key==="ArrowUp"){z.preventDefault(),A_((o)=>(o-1+B_.length)%B_.length);return}if(z.key==="Tab"){z.preventDefault(),k0(B_[L_]);return}if(z.key==="Enter"&&!z.shiftKey){if(!(W_.current?.value??(Z?i:e)).includes(" ")){z.preventDefault();let D_=B_[L_];U_(!1),z_([]),x_(D_.name);return}}if(z.key==="Escape"){z.preventDefault(),U_(!1),z_([]);return}}}if(!Z&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let T=W_.current;if(!T)return;let o=T.value||"",V_=T.selectionStart===0&&T.selectionEnd===0,D_=T.selectionStart===o.length&&T.selectionEnd===o.length;if(z.key==="ArrowUp"&&V_||z.key==="ArrowDown"&&D_){let i_=I.current;if(!i_.length)return;z.preventDefault();let q_=__.current;if(z.key==="ArrowUp"){if(q_===-1)E_.current=o,q_=i_.length-1;else if(q_>0)q_-=1;__.current=q_,v_(i_[q_]||"")}else{if(q_===-1)return;if(q_<i_.length-1)q_+=1,__.current=q_,v_(i_[q_]||"");else __.current=-1,v_(E_.current||""),E_.current=""}requestAnimationFrame(()=>{let X0=W_.current;if(!X0)return;let p0=X0.value.length;X0.selectionStart=p0,X0.selectionEnd=p0});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){z.preventDefault();let T=W_.current?.value??(Z?i:e);if(Z){if(T.trim())J?.(T.trim())}else x_(T,"steer");return}if(z.key==="Enter"&&!z.shiftKey){z.preventDefault();let T=W_.current?.value??(Z?i:e);if(Z){if(T.trim())J?.(T.trim())}else x_(T)}},_0=(z)=>{let T=Array.from(z||[]).filter((o)=>o&&o.type&&o.type.startsWith("image/"));if(!T.length)return;J_((o)=>[...o,...T])},U0=(z)=>{_0(z.target.files),z.target.value=""},P0=(z)=>{if(Z)return;z.preventDefault(),z.stopPropagation(),W0.current+=1,X_(!0)},m0=(z)=>{if(Z)return;if(z.preventDefault(),z.stopPropagation(),W0.current=Math.max(0,W0.current-1),W0.current===0)X_(!1)},Y0=(z)=>{if(Z)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";X_(!0)},J2=(z)=>{if(Z)return;z.preventDefault(),z.stopPropagation(),W0.current=0,X_(!1),_0(z.dataTransfer?.files||[])},S0=(z)=>{if(Z)return;let T=z.clipboardData?.items;if(!T||!T.length)return;let o=[];for(let V_ of T){if(V_.kind!=="file")continue;let D_=V_.getAsFile?.();if(D_)o.push(D_)}if(o.length>0)z.preventDefault(),_0(o)},c0=(z)=>{J_((T)=>T.filter((o,V_)=>V_!==z))},r0=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:T,longitude:o,accuracy:V_}=z.coords,D_=`${T.toFixed(5)}, ${o.toFixed(5)}`,i_=Number.isFinite(V_)?` ±${Math.round(V_)}m`:"",q_=`https://maps.google.com/?q=${T},${o}`,X0=`Location: ${D_}${i_} ${q_}`;n0(X0)},(z)=>{let T=z?.message||"Unable to retrieve location.";alert(`Location error: ${T}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};c(()=>{if(!M_)return;S_(!0),j2().then((z)=>{let T=Array.isArray(z?.models)?z.models.filter((o)=>typeof o==="string"&&o.trim().length>0):[];h_(T),C0(z)}).catch((z)=>{console.warn("Failed to load model list:",z),h_([])}).finally(()=>{S_(!1)})},[M_,E]),c(()=>{if(Z)P_(!1)},[Z]),c(()=>{if(!M_)return;let z=(T)=>{let o=a_.current,V_=M0.current,D_=T.target;if(o&&o.contains(D_))return;if(V_&&V_.contains(D_))return;P_(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[M_]);let h0=(z)=>{let T=z.target.value;J0(z.target),v_(T)};return c(()=>{requestAnimationFrame(()=>J0())},[e,i,Z]),Q`
        <div class="compose-box">
            ${!Z&&O_.length>0&&Q`
                <div class="compose-queue-stack">
                    ${O_.map((z)=>{let T=typeof z?.content==="string"?z.content:"";if(!T.trim())return null;return Q`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${T}>
                                    ${T}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>e_(z)}
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
                                    onClick=${()=>N_?.(z)}
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
                class=${`compose-input-wrapper${R_?" drag-active":""}`}
                onDragEnter=${P0}
                onDragOver=${Y0}
                onDragLeave=${m0}
                onDrop=${J2}
            >
                <div class="compose-input-main">
                    ${(K.length>0||K_.length>0||O.length>0)&&Q`
                        <div class="compose-file-refs">
                            ${O.map((z)=>{return Q`
                                    <${e0}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>j?.(z)}
                                    />
                                `})}
                            ${K.map((z)=>{let T=z.split("/").pop()||z;return Q`
                                    <${e0}
                                        prefix="compose"
                                        label=${T}
                                        title=${z}
                                        onClick=${()=>Y_?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>N?.(z)}
                                    />
                                `})}
                            ${K_.map((z,T)=>{let o=z?.name||`image-${T+1}`;return Q`
                                    <${e0}
                                        key=${o+T}
                                        prefix="compose"
                                        label=${o}
                                        title=${o}
                                        removeTitle="Remove image"
                                        onRemove=${()=>c0(T)}
                                    />
                                `})}
                        </div>
                    `}
                    <textarea
                        ref=${W_}
                        placeholder=${Z?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${Z?i:e}
                        onInput=${h0}
                        onKeyDown=${g_}
                        onPaste=${S0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${F_&&B_.length>0&&Q`
                        <div class="slash-autocomplete" ref=${B0}>
                            ${B_.map((z,T)=>Q`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${T===L_?" active":""}`}
                                    onMouseDown=${(o)=>{o.preventDefault(),k0(z)}}
                                    onMouseEnter=${()=>A_(T)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${M_&&!Z&&Q`
                        <div class="compose-model-popup" ref=${a_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${p_&&Q`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!p_&&y_.length===0&&Q`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!p_&&y_.map((z)=>Q`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${E===z?" active":""}`}
                                        onClick=${()=>{r_(z)}}
                                        disabled=${k_}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{d0()}}
                                    disabled=${k_}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer">
                    ${!Z&&E&&Q`
                    <div class="compose-meta-row">
                        ${!Z&&E&&Q`
                            <div class="compose-model-meta">
                                <button
                                    ref=${M0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${D0}
                                    aria-label="Open model picker"
                                    onClick=${z0}
                                    disabled=${k_}
                                >
                                    ${k_?"Switching…":t_}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k_&&g0&&Q`
                                        <span class="compose-model-usage-hint" title=${D0}>
                                            ${g0}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${Z?"search-mode":""}">
                    ${!Z&&v&&v.percent!=null&&Q`
                        <${f8} usage=${v} />
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${Z?Y:X}
                        title=${Z?"Close search":"Search"}
                    >
                        ${Z?Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:Q`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${O0&&!Z&&Q`
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
                    ${m_&&!Z&&Q`
                        <button
                            class=${`icon-btn notification-btn${E0?" active":""}`}
                            onClick=${w}
                            title=${c_}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!Z&&Q`
                        ${p&&l&&Q`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${l}
                                title=${`Attach open file: ${p}`}
                                type="button"
                                disabled=${K.includes(p)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${U0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{x_()}}
                            disabled=${!N0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var $4="piclaw_theme",S1="piclaw_tint",s2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},R8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},_4={default:{label:"Default",mode:"auto",light:s2,dark:R8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},v8=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],a2={theme:"default",tint:null},Z4="light",b1=!1;function J4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function L2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let Z=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(Z)&&!/^[0-9a-fA-F]{6}$/.test(Z))return null;let J=Z.length===3?Z.split("").map((Y)=>Y+Y).join(""):Z,X=parseInt(J,16);return{r:X>>16&255,g:X>>8&255,b:X&255,hex:`#${J.toLowerCase()}`}}function g8(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let Z=document.createElement("div");if(Z.style.color="",Z.style.color=$,!Z.style.color)return null;let J=Z.style.color;try{if(document.body)Z.style.display="none",document.body.appendChild(Z),J=getComputedStyle(Z).color||Z.style.color,document.body.removeChild(Z)}catch{}let X=J.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!X)return null;let Y=parseInt(X[1],10),K=parseInt(X[2],10),N=parseInt(X[3],10);if(![Y,K,N].every((O)=>Number.isFinite(O)))return null;let V=`#${[Y,K,N].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:K,b:N,hex:V}}function Y4(_){return L2(_)||g8(_)}function M2(_,$,Z){let J=Math.round(_.r+($.r-_.r)*Z),X=Math.round(_.g+($.g-_.g)*Z),Y=Math.round(_.b+($.b-_.b)*Z);return`rgb(${J} ${X} ${Y})`}function P1(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function X4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function w1(_){return _4[_]||_4.default}function u8(_){return _.mode==="auto"?X4():_.mode}function m8(_,$){let Z=w1(_);if($==="dark"&&Z.dark)return Z.dark;if($==="light"&&Z.light)return Z.light;return Z.dark||Z.light||s2}function c8(_,$,Z){let J=Y4($);if(!J)return _;let X=L2(_.bgPrimary),Y=L2(_.bgSecondary),K=L2(_.bgHover),N=L2(_.borderColor);if(!X||!Y||!K||!N)return _;let O=L2(Z==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:M2(X,J,0.08),bgSecondary:M2(Y,J,0.12),bgHover:M2(K,J,0.16),borderColor:M2(N,J,0.08),accent:J.hex,accentHover:O?M2(J,O,0.18):J.hex}}function h8(_,$){if(typeof document>"u")return;let Z=document.documentElement,J=_.accent,X=Y4(J),Y=X?P1(X,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=X?P1(X,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",N=X?P1(X,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":J,"--accent-hover":_.accentHover||J,"--accent-soft":K,"--accent-soft-strong":N,"--danger-color":_.danger||s2.danger,"--success-color":_.success||s2.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([O,j])=>{if(j)Z.style.setProperty(O,j)})}function p8(){if(typeof document>"u")return;let _=document.documentElement;v8.forEach(($)=>_.style.removeProperty($))}function d2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function i8(_,$){if(typeof document>"u")return;let Z=d2("theme-color");if(Z&&_)Z.setAttribute("content",_);let J=d2("msapplication-TileColor");if(J&&_)J.setAttribute("content",_);let X=d2("msapplication-navbutton-color");if(X&&_)X.setAttribute("content",_);let Y=d2("apple-mobile-web-app-status-bar-style");if(Y)Y.setAttribute("content",$==="dark"?"black-translucent":"default")}function l8(){if(typeof window>"u")return;let _={...a2,mode:Z4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function I1(_,$={}){if(typeof window>"u"||typeof document>"u")return;let Z=J4(_?.theme||"default"),J=_?.tint?String(_.tint).trim():null,X=w1(Z),Y=u8(X),K=m8(Z,Y);a2={theme:Z,tint:J},Z4=Y;let N=document.documentElement;N.dataset.theme=Y,N.dataset.colorTheme=Z,N.dataset.tint=J?String(J):"",N.style.colorScheme=Y;let V=K;if(Z==="default"&&J)V=c8(K,J,Y);if(Z==="default"&&!J)p8();else h8(V,Y);if(i8(V.bgPrimary,Y),l8(),$.persist!==!1)if(f_($4,Z),J)f_(S1,J);else f_(S1,"")}function r2(){if(w1(a2.theme).mode!=="auto")return;I1(a2,{persist:!1})}function j4(){if(typeof window>"u")return()=>{};let _=J4(f0($4)||"default"),$=f0(S1),Z=$?$.trim():null;if(I1({theme:_,tint:Z},{persist:!1}),window.matchMedia&&!b1){let J=window.matchMedia("(prefers-color-scheme: dark)");if(J.addEventListener)J.addEventListener("change",r2);else if(J.addListener)J.addListener(r2);return b1=!0,()=>{if(J.removeEventListener)J.removeEventListener("change",r2);else if(J.removeListener)J.removeListener(r2);b1=!1}}return()=>{}}function K4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let Z=_.theme??_.name??_.colorTheme,J=_.tint??null;I1({theme:Z||"default",tint:J},{persist:!0})}function W4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return X4()}var t2=/#(\w+)/g,o8=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),n8=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),d8=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),r8={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},s8=new Set(["http:","https:","mailto:",""]);function G4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function F2(_,$={}){if(!_)return null;let Z=String(_).trim();if(!Z)return null;if(Z.startsWith("#")||Z.startsWith("/"))return Z;if(Z.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(Z))return Z;return null}if(Z.startsWith("blob:"))return Z;try{let J=new URL(Z,typeof window<"u"?window.location.origin:"http://localhost");if(!s8.has(J.protocol))return null;return J.href}catch{return null}}function N4(_,$={}){if(!_)return"";let Z=new DOMParser().parseFromString(_,"text/html"),J=[],X=Z.createTreeWalker(Z.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=X.nextNode())J.push(Y);for(let K of J){let N=K.tagName.toLowerCase();if(!n8.has(N)){let O=K.parentNode;if(!O)continue;while(K.firstChild)O.insertBefore(K.firstChild,K);O.removeChild(K);continue}let V=r8[N]||new Set;for(let O of Array.from(K.attributes)){let j=O.name.toLowerCase(),U=O.value;if(j.startsWith("on")){K.removeAttribute(O.name);continue}if(j.startsWith("data-")||j.startsWith("aria-"))continue;if(V.has(j)||d8.has(j)){if(j==="href"){let E=F2(U);if(!E)K.removeAttribute(O.name);else if(K.setAttribute(O.name,E),N==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(j==="src"){let E=N==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(U):U,D=F2(E,{allowDataImage:N==="img"});if(!D)K.removeAttribute(O.name);else K.setAttribute(O.name,D)}continue}K.removeAttribute(O.name)}}return Z.body.innerHTML}function V4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function e2(_,$=2){if(!_)return _;let Z=_;for(let J=0;J<$;J+=1){let X=V4(Z);if(X===Z)break;Z=X}return Z}function a8(_){if(!_)return{text:"",blocks:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=[],Y=!1,K=[];for(let N of Z){if(!Y&&N.trim().match(/^```mermaid\s*$/i)){Y=!0,K=[];continue}if(Y&&N.trim().match(/^```\s*$/)){let V=J.length;J.push(K.join(`
`)),X.push(`@@MERMAID_BLOCK_${V}@@`),Y=!1,K=[];continue}if(Y)K.push(N);else X.push(N)}if(Y)X.push("```mermaid"),X.push(...K);return{text:X.join(`
`),blocks:J}}function t8(_){if(!_)return _;return e2(_,5)}function e8(_){let $=new TextEncoder().encode(String(_||"")),Z="";for(let J of $)Z+=String.fromCharCode(J);return btoa(Z)}function _6(_){let $=atob(String(_||"")),Z=new Uint8Array($.length);for(let J=0;J<$.length;J+=1)Z[J]=$.charCodeAt(J);return new TextDecoder().decode(Z)}function $6(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(Z,J)=>{let X=Number(J),Y=$[X]??"",K=t8(Y);return`<div class="mermaid-container" data-mermaid="${e8(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function O4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,Z)=>{if(Z.includes(`
`))return`
\`\`\`
${Z}
\`\`\`
`;return`\`${Z}\``})}function B4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,Z)=>{let J=Z.trim(),X=J.startsWith("/"),Y=X?J.slice(1).trim():J,V=(Y.endsWith("/")?Y.slice(0,-1).trim():Y).split(/\s+/)[0]?.toLowerCase();if(!V||!o8.has(V))return $;if(V==="br")return X?"":"<br>";if(X)return`</${V}>`;return`<${V}>`})}function q4(_){if(!_)return _;let $=(Z)=>Z.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(Z,J)=>`<pre><code>${$(J)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(Z,J)=>`<code>${$(J)}</code>`)}function z4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),X;while(X=Z.nextNode()){if(!X.nodeValue)continue;let Y=J(X.nodeValue);if(Y!==X.nodeValue)X.nodeValue=Y}return $.body.innerHTML}function Z6(_){if(!window.katex)return _;let $=(K)=>V4(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),Z=(K)=>{let N=[],V=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let j=N.length;return N.push(O),`@@CODE_BLOCK_${j}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let j=N.length;return N.push(O),`@@CODE_INLINE_${j}@@`}),{html:V,blocks:N}},J=(K,N)=>{if(!N.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,O)=>{let j=Number(O);return N[j]??""})},X=Z(_),Y=X.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,N,V)=>{try{let O=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${N}${O}`}catch(O){return`<span class="math-error" title="${G4(O.message)}">${K}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,N,V)=>{if(/\s$/.test(V))return K;try{let O=katex.renderToString($(V),{displayMode:!1,throwOnError:!1});return`${N}${O}`}catch(O){return`${N}<span class="math-error" title="${G4(O.message)}">$${V}$</span>`}}),J(Y,X.blocks)}function J6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),Z=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),J=[],X;while(X=Z.nextNode())J.push(X);for(let Y of J){let K=Y.nodeValue;if(!K)continue;if(t2.lastIndex=0,!t2.test(K))continue;t2.lastIndex=0;let N=Y.parentElement;if(N&&(N.closest("a")||N.closest("code")||N.closest("pre")))continue;let V=K.split(t2);if(V.length<=1)continue;let O=$.createDocumentFragment();V.forEach((j,U)=>{if(U%2===1){let E=$.createElement("a");E.setAttribute("href","#"),E.className="hashtag",E.setAttribute("data-hashtag",j),E.textContent=`#${j}`,O.appendChild(E)}else O.appendChild($.createTextNode(j))}),Y.parentNode?.replaceChild(O,Y)}return $.body.innerHTML}function Y6(_){if(!_)return _;let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=[],X=!1;for(let Y of Z){if(!X&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){X=!0,J.push("$$");continue}if(X&&Y.trim().match(/^```\s*$/)){X=!1,J.push("$$");continue}J.push(Y)}return J.join(`
`)}function E2(_,$,Z={}){if(!_)return"";let J=Y6(_),{text:X,blocks:Y}=a8(J),K=e2(X,2),V=O4(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=B4(V),j=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return j=q4(j),j=z4(j),j=Z6(j),j=J6(j),j=$6(j,Y),j=N4(j,Z),j}function Q4(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),Z=e2($,2),X=O4(Z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=B4(X),K=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return K=q4(K),K=z4(K),K=N4(K),K}async function _1(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:Z}=window.beautifulMermaid,X=W4()==="dark"?Z["tokyo-night"]:Z["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of Y)try{let N=K.dataset.mermaid,V=_6(N||""),O=e2(V,2),j=await $(O,{...X,transparent:!0});K.innerHTML=j,K.removeAttribute("data-mermaid")}catch(N){console.error("Mermaid render error:",N);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${N.message}`,K.innerHTML="",K.appendChild(V),K.removeAttribute("data-mermaid")}}var U4="PiClaw";function x1(_,$){let Z=_||"PiClaw",J=Z.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=J.charCodeAt(0)%X.length,K=X[Y],N=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",j=(V?V:null)||(N==="PiClaw".toLowerCase()||N==="pi"?"/static/icon-192.png":null);return{letter:J,color:K,image:j}}function H4(_,$){if(!_)return"PiClaw";let Z=$[_]?.name||_;return Z?Z.charAt(0).toUpperCase()+Z.slice(1):"PiClaw"}function L4(_,$){if(!_)return null;let Z=$[_]||{};return Z.avatar_url||Z.avatarUrl||Z.avatar||null}function F4(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,K=Y?.dataset?.colorTheme||"",N=Y?.dataset?.tint||"",V=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(V&&(N||K&&K!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],Z=String(_),J=0;for(let Y=0;Y<Z.length;Y+=1)J=(J*31+Z.charCodeAt(Y))%2147483647;let X=Math.abs(J)%$.length;return $[X]}function E4({status:_,draft:$,plan:Z,thought:J,pendingRequest:X,intent:Y,turnId:K,steerQueued:N,onPanelToggle:V}){let U=(X_)=>{if(!X_)return{text:"",totalLines:0,fullText:""};if(typeof X_==="string"){let A_=X_,F_=A_?A_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:F_,fullText:A_}}let B_=X_.text||"",z_=X_.fullText||X_.full_text||B_,L_=Number.isFinite(X_.totalLines)?X_.totalLines:z_?z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:B_,totalLines:L_,fullText:z_}},E=160,D=(X_)=>{if(!X_)return 1;return Math.max(1,Math.ceil(X_.length/160))},A=(X_,B_,z_)=>{let L_=(X_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!L_)return{text:"",omitted:0,totalLines:Number.isFinite(z_)?z_:0,visibleLines:0};let A_=L_.split(`
`),F_=A_.length>B_?A_.slice(0,B_).join(`
`):L_,U_=Number.isFinite(z_)?z_:A_.reduce((M_,P_)=>M_+D(P_),0),k_=F_?F_.split(`
`).reduce((M_,P_)=>M_+D(P_),0):0,u_=Math.max(U_-k_,0);return{text:F_,omitted:u_,totalLines:U_,visibleLines:k_}},M=U(Z),v=U(J),S=U($),H=Boolean(M.text)||M.totalLines>0,w=Boolean(v.text)||v.totalLines>0,k=Boolean(S.fullText?.trim()||S.text?.trim());if(!_&&!k&&!H&&!w&&!X&&!Y)return null;let[R,p]=u(new Set),l=(X_)=>p((B_)=>{let z_=new Set(B_),L_=!z_.has(X_);if(L_)z_.add(X_);else z_.delete(X_);if(typeof V==="function")V(X_,L_);return z_});c(()=>{p(new Set)},[K]);let Y_=_?.turn_id||K,O_=F4(Y_),$_=N?"turn-dot turn-dot-queued":"turn-dot",N_=(X_)=>X_,b_=Boolean(_?.last_activity||_?.lastActivity),r=Y?.kind||"info",e=r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":O_,d="",i=_?.title,Z_=_?.status;if(_?.type==="plan")d=i?`Planning: ${i}`:"Planning...";else if(_?.type==="tool_call")d=i?`Running: ${i}`:"Running tool...";else if(_?.type==="tool_status")d=i?`${i}: ${Z_||"Working..."}`:Z_||"Working...";else if(_?.type==="error")d=i||"Agent error";else d=i||Z_||"Working...";if(b_)d="Last activity just now";let K_=({panelTitle:X_,text:B_,fullText:z_,totalLines:L_,maxLines:A_,titleClass:F_,panelKey:U_})=>{let k_=R.has(U_),u_=z_||B_||"",M_=typeof A_==="number",P_=k_&&M_,y_=M_?A(u_,A_,L_):{text:u_||"",omitted:0,totalLines:Number.isFinite(L_)?L_:0};if(!u_&&!(Number.isFinite(y_.totalLines)&&y_.totalLines>0))return null;let h_=`agent-thinking-body${M_?" agent-thinking-body-collapsible":""}`,p_=M_?`--agent-thinking-collapsed-lines: ${A_};`:"";return Q`
            <div
                class="agent-thinking"
                data-expanded=${k_?"true":"false"}
                data-collapsible=${M_?"true":"false"}
                style=${O_?`--turn-color: ${O_};`:""}
            >
                <div class="agent-thinking-title ${F_||""}">
                    ${O_&&Q`<span class=${$_} aria-hidden="true"></span>`}
                    ${X_}
                    ${P_&&Q`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${X_} panel`}
                            onClick=${()=>l(U_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${h_}
                    style=${p_}
                    dangerouslySetInnerHTML=${{__html:Q4(u_)}}
                />
                ${!k_&&y_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▸ ${y_.omitted} more lines
                    </button>
                `}
                ${k_&&y_.omitted>0&&Q`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},J_=X?.tool_call?.title,R_=J_?`Awaiting approval: ${J_}`:"Awaiting approval";return Q`
        <div class="agent-status-panel">
            ${Y&&Q`
                <div
                    class="agent-thinking agent-thinking-intent"
                    aria-live="polite"
                    style=${e?`--turn-color: ${e};`:""}
                    title=${Y?.detail||""}
                >
                    <div class="agent-thinking-title intent">
                        ${e&&Q`<span class=${$_} aria-hidden="true"></span>`}
                        ${Y.title}
                    </div>
                    ${Y.detail&&Q`<div class="agent-thinking-body">${Y.detail}</div>`}
                </div>
            `}
            ${X&&Q`
                <div class="agent-status agent-status-request" aria-live="polite" style=${O_?`--turn-color: ${O_};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${R_}</span>
                </div>
            `}
            ${H&&K_({panelTitle:N_("Planning"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,panelKey:"plan"})}
            ${w&&K_({panelTitle:N_("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${k&&K_({panelTitle:N_("Draft"),text:S.text,fullText:S.fullText,totalLines:S.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&Q`
                <div class=${`agent-status${b_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${O_?`--turn-color: ${O_};`:""}>
                    ${O_&&Q`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?Q`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!b_&&Q`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${d}</span>
                </div>
            `}
        </div>
    `}function D4({request:_,onRespond:$}){if(!_)return null;let{request_id:Z,tool_call:J,options:X}=_,Y=J?.title||"Agent Request",K=J?.kind||"other",N=J?.rawInput||{},V=N.command||N.commands&&N.commands[0]||null,O=N.diff||null,j=N.fileName||N.path||null,U=J?.description||N.description||N.explanation||null,D=(Array.isArray(J?.locations)?J.locations:[]).map((H)=>H?.path).filter((H)=>Boolean(H)),A=Array.from(new Set([j,...D].filter(Boolean)));console.log("AgentRequestModal:",{request_id:Z,tool_call:J,options:X});let M=async(H)=>{try{await k1(Z,H),$()}catch(w){console.error("Failed to respond to agent request:",w)}},v=async()=>{try{await c3(Y,`Auto-approved: ${Y}`),await k1(Z,"approved"),$()}catch(H){console.error("Failed to add to whitelist:",H)}},S=X&&X.length>0;return Q`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(U||V||O||A.length>0)&&Q`
                    <div class="agent-request-body">
                        ${U&&Q`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${A.length>0&&Q`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((H,w)=>Q`<li key=${w}>${H}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&Q`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${O&&Q`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${S?X.map((H)=>Q`
                            <button 
                                key=${H.optionId||H.id||String(H)}
                                class="agent-request-btn ${H.kind==="allow_once"||H.kind==="allow_always"?"primary":""}"
                                onClick=${()=>M(H.optionId||H.id||H)}
                            >
                                ${H.name||H.label||H.optionId||H.id||String(H)}
                            </button>
                        `):Q`
                        <button class="agent-request-btn primary" onClick=${()=>M("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>M("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${v}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function C4({status:_}){if(_==="connected")return null;return Q`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function k4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let J=new Date-$,X=J/1000,Y=86400000;if(J<Y){if(X<60)return"just now";if(X<3600)return`${Math.floor(X/60)}m`;return`${Math.floor(X/3600)}h`}if(J<5*Y){let V=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${O}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),N=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${N}`}function b2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function R0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function $1(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function y4({src:_,onClose:$}){return c(()=>{let Z=(J)=>{if(J.key==="Escape")$()};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[$]),Q`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function X6({mediaId:_}){let[$,Z]=u(null);if(c(()=>{l2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size,Y=X?R0(X):"";return Q`
        <a href=${Q2(_)} download=${J} class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${Y&&Q`<span class="file-size">${Y}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function Z1({annotations:_}){if(!_)return null;let{audience:$,priority:Z,lastModified:J}=_,X=J?$1(J):null;return Q`
        <div class="content-annotations">
            ${$&&$.length>0&&Q`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof Z==="number"&&Q`
                <span class="content-annotation">Priority: ${Z}</span>
            `}
            ${X&&Q`
                <span class="content-annotation">Updated: ${X}</span>
            `}
        </div>
    `}function j6({block:_}){let $=_.title||_.name||_.uri,Z=_.description,J=_.size?R0(_.size):"",X=_.mime_type||"",Y=W6(X),K=F2(_.uri);return Q`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(N)=>N.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${Z&&Q`<div class="resource-link-description">${Z}</div>`}
                <div class="resource-link-meta">
                    ${X&&Q`<span>${X}</span>`}
                    ${J&&Q`<span>${J}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function K6({block:_}){let[$,Z]=u(!1),J=_.uri||"Embedded resource",X=_.text||"",Y=Boolean(_.data),K=_.mime_type||"";return Q`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(N)=>{N.preventDefault(),N.stopPropagation(),Z(!$)}}>
                ${$?"▼":"▶"} ${J}
            </button>
            ${$&&Q`
                ${X&&Q`<pre class="resource-embed-content">${X}</pre>`}
                ${Y&&Q`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&Q`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(N)=>{N.preventDefault(),N.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(U)=>U.charCodeAt(0))],{type:K||"application/octet-stream"}),O=URL.createObjectURL(V),j=document.createElement("a");j.href=O,j.download=J.split("/").pop()||"resource",j.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function W6(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function G6({preview:_}){let $=F2(_.url),Z=F2(_.image,{allowDataImage:!0}),J=Z?`background-image: url('${Z}')`:"",X=_.site_name;if(!X&&$)try{X=new URL($).hostname}catch{X=$}return Q`
        <a
            href=${$||"#"}
            class="link-preview ${Z?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${J}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${X||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&Q`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function N6(_,$){return typeof _==="string"?_:""}var V6=1800,O6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,B6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,q6=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function z6(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let Z=document.createElement("textarea");Z.value=$,Z.setAttribute("readonly",""),Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none",document.body.appendChild(Z),Z.select(),Z.setSelectionRange(0,Z.value.length);let J=document.execCommand("copy");return document.body.removeChild(Z),J}catch{return!1}}function Q6(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let Z=new Map,J=[],X=(Y,K)=>{let N=K||"idle";if(Y.dataset.copyState=N,N==="success")Y.innerHTML=B6,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(N==="error")Y.innerHTML=q6,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=O6,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let K=document.createElement("div");K.className="post-code-block",Y.parentNode?.insertBefore(K,Y),K.appendChild(Y);let N=document.createElement("button");N.type="button",N.className="post-code-copy-btn",X(N,"idle"),K.appendChild(N);let V=async(O)=>{O.preventDefault(),O.stopPropagation();let U=Y.querySelector("code")?.textContent||"",E=await z6(U);X(N,E?"success":"error");let D=Z.get(N);if(D)clearTimeout(D);let A=setTimeout(()=>{X(N,"idle"),Z.delete(N)},V6);Z.set(N,A)};N.addEventListener("click",V),J.push(()=>{N.removeEventListener("click",V);let O=Z.get(N);if(O)clearTimeout(O);if(K.parentNode)K.parentNode.insertBefore(Y,K),K.remove()})}),()=>{J.forEach((Y)=>Y())}}function U6(_){if(!_)return{content:_,fileRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Files:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,fileRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O))X.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(X.length===0)return{content:_,fileRefs:[]};let K=Z.slice(0,J),N=Z.slice(Y),V=[...K,...N].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:X}}function H6(_){if(!_)return{content:_,messageRefs:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Referenced messages:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,messageRefs:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let U=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(U)X.push(U[1])}else if(!O.trim())break;else break}if(X.length===0)return{content:_,messageRefs:[]};let K=Z.slice(0,J),N=Z.slice(Y),V=[...K,...N].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:X}}function L6(_){if(!_)return{content:_,attachments:[]};let Z=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),J=-1;for(let O=0;O<Z.length;O+=1)if(Z[O].trim()==="Images:"&&Z[O+1]&&/^\s*-\s+/.test(Z[O+1])){J=O;break}if(J===-1)return{content:_,attachments:[]};let X=[],Y=J+1;for(;Y<Z.length;Y+=1){let O=Z[Y];if(/^\s*-\s+/.test(O)){let j=O.replace(/^\s*-\s+/,"").trim(),U=j.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||j.match(/^attachment:([^\s]+)\s+(.+)$/i);if(U){let E=U[1],D=(U[2]||"").trim()||E;X.push({id:E,label:D,raw:j})}else X.push({id:null,label:j,raw:j})}else if(!O.trim())break;else break}if(X.length===0)return{content:_,attachments:[]};let K=Z.slice(0,J),N=Z.slice(Y),V=[...K,...N].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:X}}function F6(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E6(_,$){if(!_||!$)return _;let Z=String($).trim().split(/\s+/).filter(Boolean);if(Z.length===0)return _;let J=Z.map(F6).sort((j,U)=>U.length-j.length),X=new RegExp(`(${J.join("|")})`,"gi"),Y=new RegExp(`^(${J.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),N=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),V=[],O;while(O=N.nextNode())V.push(O);for(let j of V){let U=j.nodeValue;if(!U||!X.test(U)){X.lastIndex=0;continue}X.lastIndex=0;let E=j.parentElement;if(E&&E.closest("code, pre, script, style"))continue;let D=U.split(X).filter((M)=>M!=="");if(D.length===0)continue;let A=K.createDocumentFragment();for(let M of D)if(Y.test(M)){let v=K.createElement("mark");v.className="search-highlight-term",v.textContent=M,A.appendChild(v)}else A.appendChild(K.createTextNode(M));j.parentNode.replaceChild(A,j)}return K.body.innerHTML}function A4({post:_,onClick:$,onHashtagClick:Z,onMessageRef:J,onScrollToMessage:X,agentName:Y,agentAvatarUrl:K,userName:N,userAvatarUrl:V,userAvatarBackground:O,onDelete:j,isThreadReply:U,isThreadPrev:E,isThreadNext:D,isRemoving:A,highlightQuery:M,onFileRef:v}){let[S,H]=u(null),w=L(null),k=_.data,R=k.type==="agent_response",p=N||"You",l=R?Y||U4:p,Y_=R?x1(Y,K):x1(p,V),O_=typeof O==="string"?O.trim().toLowerCase():"",$_=!R&&Y_.image&&(O_==="clear"||O_==="transparent"),N_=R&&Boolean(Y_.image),b_=`background-color: ${$_||N_?"transparent":Y_.color}`,r=k.content_meta,e=Boolean(r?.truncated),d=Boolean(r?.preview),i=e&&!d,Z_=e?{originalLength:Number.isFinite(r?.original_length)?r.original_length:k.content?k.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,K_=N6(k.content,k.link_previews),{content:J_,fileRefs:R_}=U6(K_),{content:X_,messageRefs:B_}=H6(J_),{content:z_,attachments:L_}=L6(X_);K_=z_;let A_=Boolean(K_)&&!i,F_=typeof M==="string"?M.trim():"",U_=L0(()=>{if(!K_)return"";let I=E2(K_,Z);return F_?E6(I,F_):I},[K_,F_]),k_=(I,__)=>{I.stopPropagation(),H(Q2(__))},u_=(I)=>{I.stopPropagation(),j?.(_)},M_=(I,__)=>{let E_=new Set;if(!I||__.length===0)return{content:I,usedIds:E_};return{content:I.replace(/attachment:([^\s)"']+)/g,(O0,d_,v0,q0)=>{let m_=d_.replace(/^\/+/,""),c_=__.find((I_)=>I_.name&&I_.name.toLowerCase()===m_.toLowerCase()&&!E_.has(I_.id))||__.find((I_)=>!E_.has(I_.id));if(!c_)return O0;if(E_.add(c_.id),q0.slice(Math.max(0,v0-2),v0)==="](")return`/media/${c_.id}`;return c_.name||"attachment"}),usedIds:E_}},P_=[],y_=[],h_=[],p_=[],S_=[],W_=[],B0=k.content_blocks||[],a_=k.media_ids||[],M0=0;if(B0.length>0)B0.forEach((I)=>{if(I?.type==="text"&&I.annotations)W_.push(I.annotations);if(I?.type==="resource_link")p_.push(I);else if(I?.type==="resource")S_.push(I);else if(I?.type==="file"){let __=a_[M0++];if(__)y_.push(__),h_.push({id:__,name:I?.name||I?.filename||I?.title})}else if(I?.type==="image"||!I?.type){let __=a_[M0++];if(__){let E_=typeof I?.mime_type==="string"?I.mime_type:void 0;P_.push({id:__,annotations:I?.annotations,mimeType:E_}),h_.push({id:__,name:I?.name||I?.filename||I?.title})}}});else if(a_.length>0)a_.forEach((I)=>{P_.push({id:I,annotations:null}),h_.push({id:I,name:null})});if(L_.length>0)L_.forEach((I)=>{if(!I?.id)return;let __=h_.find((E_)=>String(E_.id)===String(I.id));if(__&&!__.name)__.name=I.label});let{content:W0,usedIds:b0}=M_(K_,h_);K_=W0;let Q_=P_.filter(({id:I})=>!b0.has(I)),G0=y_.filter((I)=>!b0.has(I)),F0=L_.length>0?L_.map((I,__)=>({id:I.id||`attachment-${__+1}`,label:I.label||`attachment-${__+1}`})):h_.map((I,__)=>({id:I.id,label:I.name||`attachment-${__+1}`}));return c(()=>{if(!w.current)return;return _1(w.current),Q6(w.current)},[U_]),Q`
        <div id=${`post-${_.id}`} class="post ${R?"agent-post":""} ${U?"thread-reply":""} ${E?"thread-prev":""} ${D?"thread-next":""} ${A?"removing":""}" onClick=${$}>
            <div class="post-avatar ${R?"agent-avatar":""} ${Y_.image?"has-image":""}" style=${b_}>
                ${Y_.image?Q`<img src=${Y_.image} alt=${l} />`:Y_.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${u_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${l}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(I)=>{if(I.preventDefault(),I.stopPropagation(),J)J(_.id)}}>${k4(_.timestamp)}</a>
                </div>
                ${i&&Z_&&Q`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${b2(Z_.originalLength)} chars
                            ${Z_.maxLength?Q` • Display limit: ${b2(Z_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${d&&Z_&&Q`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${b2(Z_.maxLength)} of ${b2(Z_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(R_.length>0||B_.length>0||F0.length>0)&&Q`
                    <div class="post-file-refs">
                        ${B_.map((I)=>{let __=(E_)=>{if(E_.preventDefault(),E_.stopPropagation(),X)X(I);else{let N0=document.getElementById("post-"+I);if(N0)N0.scrollIntoView({behavior:"smooth",block:"center"}),N0.classList.add("post-highlight"),setTimeout(()=>N0.classList.remove("post-highlight"),2000)}};return Q`
                                <a href=${`#msg-${I}`} class="post-msg-pill-link" onClick=${__}>
                                    <${e0}
                                        prefix="post"
                                        label=${"msg:"+I}
                                        title=${"Message "+I}
                                        icon="message"
                                        onClick=${__}
                                    />
                                </a>
                            `})}
                        ${R_.map((I)=>{let __=I.split("/").pop()||I;return Q`
                                <${e0}
                                    prefix="post"
                                    label=${__}
                                    title=${I}
                                    onClick=${()=>v?.(I)}
                                />
                            `})}
                        ${F0.map((I)=>Q`
                            <${e0}
                                prefix="post"
                                label=${I.label}
                                title=${I.label}
                            />
                        `)}
                    </div>
                `}
                ${A_&&Q`
                    <div 
                        ref=${w}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:U_}}
                        onClick=${(I)=>{if(I.target.classList.contains("hashtag")){I.preventDefault(),I.stopPropagation();let __=I.target.dataset.hashtag;if(__)Z?.(__)}else if(I.target.tagName==="IMG")I.preventDefault(),I.stopPropagation(),H(I.target.src)}}
                    />
                `}
                ${W_.length>0&&Q`
                    ${W_.map((I,__)=>Q`
                        <${Z1} key=${__} annotations=${I} />
                    `)}
                `}
                ${Q_.length>0&&Q`
                    <div class="media-preview">
                        ${Q_.map(({id:I,mimeType:__})=>{let N0=typeof __==="string"&&__.toLowerCase().startsWith("image/svg")?Q2(I):i3(I);return Q`
                                <img 
                                    key=${I} 
                                    src=${N0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(O0)=>k_(O0,I)}
                                />
                            `})}
                    </div>
                `}
                ${Q_.length>0&&Q`
                    ${Q_.map(({annotations:I},__)=>Q`
                        ${I&&Q`<${Z1} key=${__} annotations=${I} />`}
                    `)}
                `}
                ${G0.length>0&&Q`
                    <div class="file-attachments">
                        ${G0.map((I)=>Q`
                            <${X6} key=${I} mediaId=${I} />
                        `)}
                    </div>
                `}
                ${p_.length>0&&Q`
                    <div class="resource-links">
                        ${p_.map((I,__)=>Q`
                            <div key=${__}>
                                <${j6} block=${I} />
                                <${Z1} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${S_.length>0&&Q`
                    <div class="resource-embeds">
                        ${S_.map((I,__)=>Q`
                            <div key=${__}>
                                <${K6} block=${I} />
                                <${Z1} annotations=${I.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${k.link_previews?.length>0&&Q`
                    <div class="link-previews">
                        ${k.link_previews.map((I,__)=>Q`
                            <${G6} key=${__} preview=${I} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${S&&Q`<${y4} src=${S} onClose=${()=>H(null)} />`}
    `}function M4({posts:_,hasMore:$,onLoadMore:Z,onPostClick:J,onHashtagClick:X,onMessageRef:Y,onScrollToMessage:K,onFileRef:N,emptyMessage:V,timelineRef:O,agents:j,user:U,onDeletePost:E,reverse:D=!0,removingPostIds:A,searchQuery:M}){let[v,S]=u(!1),H=L(null),w=typeof IntersectionObserver<"u",k=P(async()=>{if(!Z||!$||v)return;S(!0);try{await Z({preserveScroll:!0,preserveMode:"top"})}finally{S(!1)}},[$,v,Z]),R=P((r)=>{let{scrollTop:e,scrollHeight:d,clientHeight:i}=r.target,Z_=D?d-i-e:e,K_=Math.max(300,i);if(Z_<K_)k()},[D,k]);c(()=>{if(!w)return;let r=H.current,e=O?.current;if(!r||!e)return;let d=300,i=new IntersectionObserver((Z_)=>{for(let K_ of Z_){if(!K_.isIntersecting)continue;k()}},{root:e,rootMargin:`${d}px 0px ${d}px 0px`,threshold:0});return i.observe(r),()=>i.disconnect()},[w,$,Z,O,k]);let p=L(k);if(p.current=k,c(()=>{if(w)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:e,clientHeight:d}=O.current,i=D?e-d-r:r,Z_=Math.max(300,d);if(i<Z_)p.current?.()},[w,_,$,D,O]),c(()=>{if(!O?.current)return;if(!$||v)return;let{scrollTop:r,scrollHeight:e,clientHeight:d}=O.current,i=D?e-d-r:r,Z_=Math.max(300,d);if(e<=d+1||i<Z_)p.current?.()},[_,$,v,D,O]),!_)return Q`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return Q`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${V||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let l=_.slice().sort((r,e)=>r.id-e.id),Y_=(r)=>{let e=r?.data?.thread_id;if(e===null||e===void 0||e==="")return null;let d=Number(e);return Number.isFinite(d)?d:null},O_=new Map;for(let r=0;r<l.length;r+=1){let e=l[r],d=Number(e?.id),i=Y_(e);if(i!==null){let Z_=O_.get(i)||{anchorIndex:-1,replyIndexes:[]};Z_.replyIndexes.push(r),O_.set(i,Z_)}else if(Number.isFinite(d)){let Z_=O_.get(d)||{anchorIndex:-1,replyIndexes:[]};Z_.anchorIndex=r,O_.set(d,Z_)}}let $_=new Map;for(let[r,e]of O_.entries()){let d=new Set;if(e.anchorIndex>=0)d.add(e.anchorIndex);for(let i of e.replyIndexes)d.add(i);$_.set(r,Array.from(d).sort((i,Z_)=>i-Z_))}let N_=l.map((r,e)=>{let d=Y_(r);if(d===null)return{hasThreadPrev:!1,hasThreadNext:!1};let i=$_.get(d);if(!i||i.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=i.indexOf(e);if(Z_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Z_>0,hasThreadNext:Z_<i.length-1}}),b_=Q`<div class="timeline-sentinel" ref=${H}></div>`;return Q`
        <div class="timeline ${D?"reverse":"normal"}" ref=${O} onScroll=${R}>
            <div class="timeline-content">
                ${D?b_:null}
                ${l.map((r,e)=>{let d=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),i=A?.has?.(r.id),Z_=N_[e]||{};return Q`
                    <${A4}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${d}
                        isThreadPrev=${Z_.hasThreadPrev}
                        isThreadNext=${Z_.hasThreadNext}
                        isRemoving=${i}
                        highlightQuery=${M}
                        agentName=${H4(r.data?.agent_id,j||{})}
                        agentAvatarUrl=${L4(r.data?.agent_id,j||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>J?.(r)}
                        onHashtagClick=${X}
                        onMessageRef=${Y}
                        onScrollToMessage=${K}
                        onFileRef=${N}
                        onDelete=${E}
                    />
                `})}
                ${D?null:b_}
            </div>
        </div>
    `}class b4{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,Z=-1/0;for(let J of this.extensions.values()){if(J.placement!=="tabs")continue;if(!J.canHandle)continue;try{let X=J.canHandle(_);if(X===!1||X===0)continue;let Y=X===!0?0:typeof X==="number"?X:0;if(Y>Z)Z=Y,$=J}catch(X){console.warn(`[PaneRegistry] canHandle() error for "${J.id}":`,X)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n_=new b4;var J1=null,T1=null;function P4(){if(T1)return Promise.resolve(T1);if(!J1)J1=import("/static/dist/editor.bundle.js").then((_)=>{return T1=_,_}).catch((_)=>{throw J1=null,_});return J1}class S4{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await P4();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var f1={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new S4(_,$)}};function R1(){P4().catch(()=>{})}class w4{container;disposed=!1;termEl;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0");let Z=document.createElement("div");Z.className="terminal-pane-header";let J=document.createElement("span");J.className="terminal-pane-title",J.textContent="Terminal";let X=document.createElement("span");X.className="terminal-pane-status",X.textContent="Not connected",Z.append(J,X);let Y=document.createElement("div");Y.className="terminal-pane-body",Y.innerHTML='<div class="terminal-placeholder">Terminal integration pending — xterm.js + WebSocket</div>',this.termEl.append(Z,Y),_.appendChild(this.termEl)}getContent(){return}isDirty(){return!1}focus(){this.termEl?.focus()}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.termEl?.remove()}}var v1={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new w4(_,$)}};function _2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function D6(_,$){let Z=String(_||"").trim();if(!Z)return Z;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(Z)||Z.startsWith("#")||Z.startsWith("data:")||Z.startsWith("blob:"))return Z;let J=Z.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),X=J?.[1]||Z,Y=J?.[2]||"",K=J?.[3]||"",N=String($||"").split("/").slice(0,-1).join("/"),O=X.startsWith("/")?X:`${N?`${N}/`:""}${X}`,j=[];for(let E of O.split("/")){if(!E||E===".")continue;if(E===".."){if(j.length>0)j.pop();continue}j.push(E)}let U=j.join("/");return`${A1(U)}${Y}${K}`}function P2(_){return _?.preview||null}function C6(_){let $=String(_||""),Z=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),J=Z>=0?$.slice(Z+1):$,X=J.lastIndexOf(".");if(X<=0||X===J.length-1)return"none";return J.slice(X+1)}function k6(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function y6(_,$){let Z=$?.path||_?.path||"",J=[];if($?.content_type)J.push(`<span><strong>type:</strong> ${_2($.content_type)}</span>`);if(typeof $?.size==="number")J.push(`<span><strong>size:</strong> ${_2(R0($.size))}</span>`);if($?.mtime)J.push(`<span><strong>modified:</strong> ${_2($1($.mtime))}</span>`);if(J.push(`<span><strong>kind:</strong> ${_2(k6($))}</span>`),J.push(`<span><strong>extension:</strong> ${_2(C6(Z))}</span>`),Z)J.push(`<span><strong>path:</strong> ${_2(Z)}</span>`);if($?.truncated)J.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${J.join("")}</div>`}function A6(_){let $=P2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let Z=y6(_,$);if($.kind==="image"){let J=$.url||($.path?A1($.path):"");return`${Z}
            <div class="workspace-preview-image">
                <img src="${_2(J)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let J=E2($.text||"",null,{rewriteImageSrc:(X)=>D6(X,$.path||_?.path)});return`${Z}<div class="workspace-preview-text">${J}</div>`}return`${Z}<pre class="workspace-preview-text"><code>${_2($.text||"")}</code></pre>`}if($.kind==="binary")return`${Z}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${Z}<div class="workspace-preview-text">No preview available.</div>`}class g1{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=A6(this.context)}getContent(){let _=P2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let Z=P2(this.context);if(Z&&Z.kind==="text"){if(Z.text=_,$!==void 0)Z.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var u1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=P2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new g1(_,$)}},m1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return P2(_)||_?.path?1:!1},mount(_,$){return new g1(_,$)}};class I4{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let Z of this.listeners)try{Z(_,$)}catch{}}open(_,$){let Z=this.tabs.get(_);if(!Z)Z={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,Z);return this.activate(_),Z}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,Z]of this.tabs)if($!==_&&!Z.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((J)=>J!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((Z)=>Z!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let Z=this.tabs.get(_);if(!Z||Z.dirty===$)return;Z.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let Z=this.tabs.get(_);if(Z)Z.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,Z){let J=this.tabs.get(_);if(!J)return;if(this.tabs.delete(_),J.id=$,J.path=$,J.label=Z||$.split("/").pop()||$,this.tabs.set($,J),this.mruOrder=this.mruOrder.map((X)=>X===_?$:X),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($+1)%_.length];this.activate(Z.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((J)=>J.id===this.activeId),Z=_[($-1+_.length)%_.length];this.activate(Z.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var C_=new I4;var Y1="workspaceExplorerScale",M6=["compact","default","comfortable"],b6=new Set(M6),P6={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function x4(_,$="default"){if(typeof _!=="string")return $;let Z=_.trim().toLowerCase();return b6.has(Z)?Z:$}function c1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),Z=Boolean(window.matchMedia?.("(hover: none)")?.matches),J=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||J&&Z}}function S6(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function w6(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function h1(_={}){let $=S6(_),Z=_.stored?x4(_.stored,$):$;return w6(Z,_)}function T4(_){return P6[x4(_)]}var I6=60000,g4=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function u4(_,$,Z,J=0,X=[]){if(!Z&&g4(_))return X;if(!_)return X;if(X.push({node:_,depth:J}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)u4(Y,$,Z,J+1,X);return X}function f4(_,$,Z){if(!_)return"";let J=[],X=(Y)=>{if(!Z&&g4(Y))return;if(J.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let K of Y.children)X(K)};return X(_),J.join("|")}function o1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let Z=Array.isArray(_.children)?_.children:null,J=Array.isArray($.children)?$.children:null;if(!J)return _;let X=Z?new Map(Z.map((N)=>[N?.path,N])):new Map,Y=!Z||Z.length!==J.length,K=J.map((N)=>{let V=o1(X.get(N.path),N);if(V!==X.get(N.path))Y=!0;return V});return Y?{...$,children:K}:_}function i1(_,$,Z){if(!_)return _;if(_.path===$)return o1(_,Z);if(!Array.isArray(_.children))return _;let J=!1,X=_.children.map((Y)=>{let K=i1(Y,$,Z);if(K!==Y)J=!0;return K});return J?{..._,children:X}:_}var m4=4,p1=14,x6=8,T6=16;function c4(_){if(!_)return 0;if(_.type==="file"){let J=Math.max(0,Number(_.size)||0);return _.__bytes=J,J}let $=Array.isArray(_.children)?_.children:[],Z=0;for(let J of $)Z+=c4(J);return _.__bytes=Z,Z}function h4(_,$=0){let Z=Math.max(0,Number(_?.__bytes??_?.size??0)),J={name:_?.name||_?.path||".",path:_?.path||".",size:Z,children:[]};if(!_||_.type!=="dir"||$>=m4)return J;let X=Array.isArray(_.children)?_.children:[],Y=[];for(let N of X){let V=Math.max(0,Number(N?.__bytes??N?.size??0));if(V<=0)continue;if(N.type==="dir")Y.push({kind:"dir",node:N,size:V});else Y.push({kind:"file",name:N.name,path:N.path,size:V})}Y.sort((N,V)=>V.size-N.size);let K=Y;if(Y.length>p1){let N=Y.slice(0,p1-1),V=Y.slice(p1-1),O=V.reduce((j,U)=>j+U.size,0);N.push({kind:"other",name:`+${V.length} more`,path:`${J.path}/[other]`,size:O}),K=N}return J.children=K.map((N)=>{if(N.kind==="dir")return h4(N.node,$+1);return{name:N.name,path:N.path,size:N.size,children:[]}}),J}function R4(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,Z=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function p4(_,$,Z){let J=((_+Math.PI/2)*180/Math.PI+360)%360,X=Z?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=Z?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${J.toFixed(1)} ${X}% ${Y}%)`}function X1(_,$,Z,J){return{x:_+Z*Math.cos(J),y:$+Z*Math.sin(J)}}function n1(_,$,Z,J,X,Y){let K=Math.PI*2-0.0001,N=Y-X>K?X+K:Y,V=X1(_,$,J,X),O=X1(_,$,J,N),j=X1(_,$,Z,N),U=X1(_,$,Z,X),E=N-X>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${J} ${J} 0 ${E} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${j.x.toFixed(3)} ${j.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${E} 0 ${U.x.toFixed(3)} ${U.y.toFixed(3)}`,"Z"].join(" ")}var i4={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function l4(_,$,Z){let J=[],X=[],Y=Math.max(0,Number($)||0),K=(N,V,O,j)=>{let U=Array.isArray(N?.children)?N.children:[];if(!U.length)return;let E=Math.max(0,Number(N.size)||0);if(E<=0)return;let D=O-V,A=V;U.forEach((M,v)=>{let S=Math.max(0,Number(M.size)||0);if(S<=0)return;let H=S/E,w=A,k=v===U.length-1?O:A+D*H;if(A=k,k-w<0.003)return;let R=i4[j];if(R){let p=p4(w,j,Z);if(J.push({key:M.path,path:M.path,label:M.name,size:S,color:p,depth:j,startAngle:w,endAngle:k,innerRadius:R[0],outerRadius:R[1],d:n1(120,120,R[0],R[1],w,k)}),j===1)X.push({key:M.path,name:M.name,size:S,pct:Y>0?S/Y*100:0,color:p})}if(j<m4)K(M,w,k,j+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:J,legend:X}}function l1(_,$){if(!_||!$)return null;if(_.path===$)return _;let Z=Array.isArray(_.children)?_.children:[];for(let J of Z){let X=l1(J,$);if(X)return X}return null}function o4(_,$,Z,J){if(!Z||Z<=0)return{segments:[],legend:[]};let X=i4[1];if(!X)return{segments:[],legend:[]};let Y=-Math.PI/2,K=Math.PI*3/2,N=p4(Y,1,J),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:Z,color:N,depth:1,startAngle:Y,endAngle:K,innerRadius:X[0],outerRadius:X[1],d:n1(120,120,X[0],X[1],Y,K)}],legend:[{key:O,name:_,size:Z,pct:100,color:N}]}}function v4(_,$=!1,Z=!1){if(!_)return null;let J=c4(_),X=h4(_,0),Y=X.size||J,{segments:K,legend:N}=l4(X,Y,Z);if(!K.length&&Y>0){let V=o4("[files]",X.path,Y,Z);K=V.segments,N=V.legend}return{root:X,totalSize:Y,segments:K,legend:N,truncated:$,isDarkTheme:Z}}function f6({payload:_}){if(!_)return null;let[$,Z]=u(null),[J,X]=u(_?.root?.path||"."),[Y,K]=u(()=>[_?.root?.path||"."]),[N,V]=u(!1);c(()=>{let $_=_?.root?.path||".";X($_),K([$_]),Z(null)},[_?.root?.path,_?.totalSize]),c(()=>{if(!J)return;V(!0);let $_=setTimeout(()=>V(!1),180);return()=>clearTimeout($_)},[J]);let O=L0(()=>{return l1(_.root,J)||_.root},[_?.root,J]),j=O?.size||_.totalSize||0,{segments:U,legend:E}=L0(()=>{let $_=l4(O,j,_.isDarkTheme);if($_.segments.length>0)return $_;if(j<=0)return $_;let N_=O?.children?.length?"Total":"[files]";return o4(N_,O?.path||_?.root?.path||".",j,_.isDarkTheme)},[O,j,_.isDarkTheme,_?.root?.path]),[D,A]=u(U),M=L(new Map),v=L(0);c(()=>{let $_=M.current,N_=new Map(U.map((d)=>[d.key,d])),b_=performance.now(),r=220,e=(d)=>{let i=Math.min(1,(d-b_)/220),Z_=i*(2-i),K_=U.map((J_)=>{let X_=$_.get(J_.key)||{startAngle:J_.startAngle,endAngle:J_.startAngle,innerRadius:J_.innerRadius,outerRadius:J_.innerRadius},B_=(U_,k_)=>U_+(k_-U_)*Z_,z_=B_(X_.startAngle,J_.startAngle),L_=B_(X_.endAngle,J_.endAngle),A_=B_(X_.innerRadius,J_.innerRadius),F_=B_(X_.outerRadius,J_.outerRadius);return{...J_,d:n1(120,120,A_,F_,z_,L_)}});if(A(K_),i<1)v.current=requestAnimationFrame(e)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(e),M.current=N_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[U]);let S=D.length?D:U,H=j>0?R0(j):"0 B",w=O?.name||"",R=(w&&w!=="."?w:"Total")||"Total",p=H,l=Y.length>1,Y_=($_)=>{if(!$_?.path)return;let N_=l1(_.root,$_.path);if(!N_||!Array.isArray(N_.children)||N_.children.length===0)return;K((b_)=>[...b_,N_.path]),X(N_.path),Z(null)},O_=()=>{if(!l)return;K(($_)=>{let N_=$_.slice(0,-1);return X(N_[N_.length-1]||_?.root?.path||"."),N_}),Z(null)};return Q`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${N?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${S.length}
                data-base-size=${j}>
                ${S.map(($_)=>Q`
                    <path
                        key=${$_.key}
                        d=${$_.d}
                        fill=${$_.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===$_.key?" is-hovered":""}`}
                        onMouseEnter=${()=>Z($_)}
                        onMouseLeave=${()=>Z(null)}
                        onTouchStart=${()=>Z($_)}
                        onTouchEnd=${()=>Z(null)}
                        onClick=${()=>Y_($_)}
                    >
                        <title>${$_.label} — ${R0($_.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${l?" is-drill":""}`}
                    onClick=${O_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${R}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${p}</text>
                </g>
            </svg>
            ${E.length>0&&Q`
                <div class="workspace-folder-starburst-legend">
                    ${E.slice(0,8).map(($_)=>Q`
                        <div key=${$_.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${$_.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${$_.name}>${$_.name}</span>
                            <span class="workspace-folder-starburst-size">${R0($_.size)}</span>
                            <span class="workspace-folder-starburst-pct">${$_.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&Q`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function R6({mediaId:_}){let[$,Z]=u(null);if(c(()=>{if(!_)return;l2(_).then(Z).catch(()=>{})},[_]),!$)return null;let J=$.filename||"file",X=$.metadata?.size?R0($.metadata.size):"";return Q`
        <a href=${Q2(_)} download=${J} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${J}</span>
                ${X&&Q`<span class="file-size">${X}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function n4({onFileSelect:_,visible:$=!0,active:Z=void 0,onOpenEditor:J}){let[X,Y]=u(null),[K,N]=u(new Set(["."])),[V,O]=u(null),[j,U]=u(null),[E,D]=u(""),[A,M]=u(null),[v,S]=u(null),[H,w]=u(!0),[k,R]=u(!1),[p,l]=u(null),[Y_,O_]=u(()=>U2("workspaceShowHidden",!1)),[$_,N_]=u(!1),[b_,r]=u(null),[e,d]=u(null),[i,Z_]=u(null),[K_,J_]=u(!1),[R_,X_]=u(null),[B_,z_]=u(()=>R4()),[L_,A_]=u(()=>h1({stored:f0(Y1),...c1()})),F_=L(K),U_=L(""),k_=L(null),u_=L(0),M_=L(new Set),P_=L(null),y_=L(new Map),h_=L(_),p_=L(J),S_=L(null),W_=L(null),B0=L(null),a_=L(null),M0=L(null),W0=L(null),b0=L("."),Q_=L(null),G0=L({path:null,dragging:!1,startX:0,startY:0}),F0=L({path:null,dragging:!1,startX:0,startY:0}),I=L({path:null,timer:0}),__=L(!1),E_=L(0),N0=L(new Map),O0=L(null),d_=L(null),v0=L(null),q0=L(null),m_=L(Y_),E0=L($),c_=L(Z??$),t_=L(0),I_=L(i),o0=L($_),$2=L(b_),g0=L(null),K2=L({x:0,y:0}),D0=L(0),C0=L(null),J0=L(V),u0=L(j),k0=L(null),v_=L(null),n0=L(A);h_.current=_,p_.current=J,c(()=>{F_.current=K},[K]),c(()=>{m_.current=Y_},[Y_]),c(()=>{E0.current=$},[$]),c(()=>{c_.current=Z??$},[Z,$]),c(()=>{I_.current=i},[i]),c(()=>{if(typeof window>"u")return;let W=()=>{A_(h1({stored:f0(Y1),...c1()}))};W();let q=()=>W(),F=()=>W(),C=(f)=>{if(!f||f.key===null||f.key===Y1)W()};window.addEventListener("resize",q),window.addEventListener("focus",F),window.addEventListener("storage",C);let m=window.matchMedia?.("(pointer: coarse)"),n=window.matchMedia?.("(hover: none)"),a=(f,j_)=>{if(!f)return;if(f.addEventListener)f.addEventListener("change",j_);else if(f.addListener)f.addListener(j_)},s=(f,j_)=>{if(!f)return;if(f.removeEventListener)f.removeEventListener("change",j_);else if(f.removeListener)f.removeListener(j_)};return a(m,q),a(n,q),()=>{window.removeEventListener("resize",q),window.removeEventListener("focus",F),window.removeEventListener("storage",C),s(m,q),s(n,q)}},[]),c(()=>{let W=(q)=>{let F=q?.detail?.path;if(!F)return;let C=F.split("/"),m=[];for(let n=1;n<C.length;n++)m.push(C.slice(0,n).join("/"));if(m.length)N((n)=>{let a=new Set(n);a.add(".");for(let s of m)a.add(s);return a});O(F),requestAnimationFrame(()=>{let n=document.querySelector(`[data-path="${CSS.escape(F)}"]`);if(n)n.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",W),()=>window.removeEventListener("workspace-reveal-path",W)},[]),c(()=>{o0.current=$_},[$_]),c(()=>{$2.current=b_},[b_]),c(()=>{J0.current=V},[V]),c(()=>{u0.current=j},[j]),c(()=>{n0.current=A},[A]),c(()=>{if(typeof window>"u"||typeof document>"u")return;let W=()=>z_(R4());W();let q=window.matchMedia?.("(prefers-color-scheme: dark)"),F=()=>W();if(q?.addEventListener)q.addEventListener("change",F);else if(q?.addListener)q.addListener(F);let C=typeof MutationObserver<"u"?new MutationObserver(()=>W()):null;if(C?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)C?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(q?.removeEventListener)q.removeEventListener("change",F);else if(q?.removeListener)q.removeListener(F);C?.disconnect()}},[]),c(()=>{if(!j)return;let W=M0.current;if(!W)return;let q=requestAnimationFrame(()=>{try{W.focus(),W.select()}catch{}});return()=>cancelAnimationFrame(q)},[j]);let W2=async(W)=>{R(!0),M(null),S(null);try{let q=await l3(W,20000);M(q)}catch(q){M({error:q.message||"Failed to load preview"})}finally{R(!1)}};S_.current=W2;let Z2=async()=>{if(!E0.current)return;try{let W=await o2("",1,m_.current),q=f4(W.root,F_.current,m_.current);if(q===U_.current){w(!1);return}if(U_.current=q,k_.current=W.root,!u_.current)u_.current=requestAnimationFrame(()=>{u_.current=0,Y((F)=>o1(F,k_.current)),w(!1)})}catch(W){l(W.message||"Failed to load workspace"),w(!1)}},d0=async(W)=>{if(!W)return;if(M_.current.has(W))return;M_.current.add(W);try{let q=await o2(W,1,m_.current);Y((F)=>i1(F,W,q.root))}catch(q){l(q.message||"Failed to load workspace")}finally{M_.current.delete(W)}};W_.current=d0;let r_=P(()=>{let W=V;if(!W)return".";let q=y_.current?.get(W);if(q&&q.type==="dir")return q.path;if(W==="."||!W.includes("/"))return".";let F=W.split("/");return F.pop(),F.join("/")||"."},[V]),z0=P((W)=>{let q=W?.closest?.(".workspace-row");if(!q)return null;let F=q.dataset.path,C=q.dataset.type;if(!F)return null;if(C==="dir")return F;if(F.includes("/")){let m=F.split("/");return m.pop(),m.join("/")||"."}return"."},[]),Q0=P((W)=>{return z0(W?.target||null)},[z0]),x_=P((W)=>{I_.current=W,Z_(W)},[]),e_=P(()=>{let W=I.current;if(W?.timer)clearTimeout(W.timer);I.current={path:null,timer:0}},[]),g_=P((W)=>{if(!W||W==="."){e_();return}let q=y_.current?.get(W);if(!q||q.type!=="dir"){e_();return}if(F_.current?.has(W)){e_();return}if(I.current?.path===W)return;e_();let F=setTimeout(()=>{I.current={path:null,timer:0},W_.current?.(W),N((C)=>{let m=new Set(C);return m.add(W),m})},600);I.current={path:W,timer:F}},[e_]),_0=P((W,q)=>{if(K2.current={x:W,y:q},D0.current)return;D0.current=requestAnimationFrame(()=>{D0.current=0;let F=g0.current;if(!F)return;let C=K2.current;F.style.transform=`translate(${C.x+12}px, ${C.y+12}px)`})},[]),U0=P((W)=>{if(!W)return;let F=(y_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!F)return;d({path:W,label:F})},[]),P0=P(()=>{if(d(null),D0.current)cancelAnimationFrame(D0.current),D0.current=0;if(g0.current)g0.current.style.transform="translate(-9999px, -9999px)"},[]),m0=P((W)=>{if(!W)return".";let q=y_.current?.get(W);if(q&&q.type==="dir")return q.path;if(W==="."||!W.includes("/"))return".";let F=W.split("/");return F.pop(),F.join("/")||"."},[]),Y0=P(()=>{U(null),D("")},[]),J2=P((W)=>{if(!W)return;let F=(y_.current?.get(W)?.name||W.split("/").pop()||W).trim();if(!F||W===".")return;U(W),D(F)},[]),S0=P(async()=>{let W=u0.current;if(!W)return;let q=(E||"").trim();if(!q){Y0();return}let F=y_.current?.get(W),C=(F?.name||W.split("/").pop()||W).trim();if(q===C){Y0();return}try{let n=(await d3(W,q))?.path||W,a=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(Y0(),l(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:W,newPath:n,type:F?.type||"file"}})),F?.type==="dir")N((s)=>{let f=new Set;for(let j_ of s)if(j_===W)f.add(n);else if(j_.startsWith(`${W}/`))f.add(`${n}${j_.slice(W.length)}`);else f.add(j_);return f});if(O(n),F?.type==="dir")M(null),R(!1),S(null);else S_.current?.(n);W_.current?.(a)}catch(m){l(m?.message||"Failed to rename file")}},[Y0,E]),c0=P(async(W)=>{let C=W||".";for(let m=0;m<50;m+=1){let a=`untitled${m===0?"":`-${m}`}.md`;try{let f=(await n3(C,a,""))?.path||(C==="."?a:`${C}/${a}`);if(C&&C!==".")N((j_)=>new Set([...j_,C]));O(f),l(null),W_.current?.(C),S_.current?.(f);return}catch(s){if(s?.status===409||s?.code==="file_exists")continue;l(s?.message||"Failed to create file");return}}l("Failed to create file (untitled name already in use).")},[]),r0=P((W)=>{if(W?.stopPropagation?.(),K_)return;let q=m0(J0.current);c0(q)},[K_,m0,c0]);c(()=>{if(typeof window>"u")return;let W=(q)=>{let F=q?.detail?.updates||[];if(!Array.isArray(F)||F.length===0)return;Y((s)=>{let f=s;for(let j_ of F){if(!j_?.root)continue;if(!f||j_.path==="."||!j_.path)f=j_.root;else f=i1(f,j_.path,j_.root)}if(f)U_.current=f4(f,F_.current,m_.current);return w(!1),f});let C=J0.current;if(Boolean(C)&&F.some((s)=>{let f=s?.path||"";if(!f||f===".")return!0;return C===f||C.startsWith(`${f}/`)||f.startsWith(`${C}/`)}))N0.current.clear();if(!C||!n0.current)return;let n=y_.current?.get(C);if(n&&n.type==="dir")return;if(F.some((s)=>{let f=s?.path||"";if(!f||f===".")return!0;return C===f||C.startsWith(`${f}/`)}))S_.current?.(C)};return window.addEventListener("workspace-update",W),()=>window.removeEventListener("workspace-update",W)},[]),P_.current=Z2;let h0=L(()=>{if(typeof window>"u")return;let W=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),q=c_.current??E0.current,F=document.visibilityState!=="hidden"&&(q||W.matches&&E0.current);n2(F,m_.current).catch(()=>{})}).current,z=L(0),T=L(()=>{if(z.current)clearTimeout(z.current);z.current=setTimeout(()=>{z.current=0,h0()},250)}).current;c(()=>{if(E0.current)P_.current?.();T()},[$,Z]),c(()=>{P_.current(),h0();let W=setInterval(()=>P_.current(),I6),q=H2("previewHeight",null),F=Number.isFinite(q)?Math.min(Math.max(q,80),600):280;if(E_.current=F,B0.current)B0.current.style.setProperty("--preview-height",`${F}px`);let C=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>T();if(C.addEventListener)C.addEventListener("change",m);else if(C.addListener)C.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(W),u_.current)cancelAnimationFrame(u_.current),u_.current=0;if(C.removeEventListener)C.removeEventListener("change",m);else if(C.removeListener)C.removeListener(m);if(document.removeEventListener("visibilitychange",m),z.current)clearTimeout(z.current),z.current=0;if(Q_.current)clearTimeout(Q_.current),Q_.current=null;n2(!1,m_.current).catch(()=>{})}},[]);let o=L0(()=>u4(X,K,Y_),[X,K,Y_]),V_=L0(()=>new Map(o.map((W)=>[W.node.path,W.node])),[o]),D_=L0(()=>T4(L_),[L_]);y_.current=V_;let q_=(V?y_.current.get(V):null)?.type==="dir";c(()=>{if(!V||!q_){X_(null),O0.current=null,d_.current=null;return}let W=V,q=`${Y_?"hidden":"visible"}:${V}`,F=N0.current,C=F.get(q);if(C?.root){F.delete(q),F.set(q,C);let a=v4(C.root,Boolean(C.truncated),B_);if(a)O0.current=a,d_.current=V,X_({loading:!1,error:null,payload:a});return}let m=O0.current,n=d_.current;X_({loading:!0,error:null,payload:n===V?m:null}),o2(V,x6,Y_).then((a)=>{if(J0.current!==W)return;let s={root:a?.root,truncated:Boolean(a?.truncated)};F.delete(q),F.set(q,s);while(F.size>T6){let j_=F.keys().next().value;if(!j_)break;F.delete(j_)}let f=v4(s.root,s.truncated,B_);O0.current=f,d_.current=V,X_({loading:!1,error:null,payload:f})}).catch((a)=>{if(J0.current!==W)return;X_({loading:!1,error:a?.message||"Failed to load folder size chart",payload:n===V?m:null})})},[V,q_,Y_,B_]);let X0=Boolean(A&&A.kind==="text"&&!q_&&(!A.size||A.size<=262144)),p0=X0?"Open in editor":A?.size>262144?"File too large to edit":"File is not editable";c(()=>{let W=v0.current;if(q0.current)q0.current.dispose(),q0.current=null;if(!W)return;if(W.innerHTML="",!V||q_||!A||A.error)return;let q={path:V,content:typeof A.text==="string"?A.text:void 0,mtime:A.mtime,size:A.size,preview:A,mode:"view"},F=n_.resolve(q)||n_.get("workspace-preview-default");if(!F)return;let C=F.mount(W,q);return q0.current=C,()=>{if(q0.current===C)C.dispose(),q0.current=null;W.innerHTML=""}},[V,q_,A]);let w0=(W)=>{let q=W?.target;if(q instanceof Element)return q;return q?.parentElement||null},i0=(W)=>{return Boolean(W?.closest?.(".workspace-node-icon, .workspace-label-text"))},G2=L((W)=>{if(v_.current)clearTimeout(v_.current),v_.current=null;let F=w0(W)?.closest?.("[data-path]");if(!F)return;let C=F.dataset.path;if(F.dataset.type==="dir"||!C)return;if(u0.current===C)Y0();p_.current?.(C)}).current,N2=L((W)=>{if(__.current){__.current=!1;return}let q=w0(W),F=q?.closest?.("[data-path]");if(a_.current?.focus?.(),!F)return;let C=F.dataset.path,m=F.dataset.type,n=Boolean(q?.closest?.(".workspace-caret")),a=Boolean(q?.closest?.("button"))||Boolean(q?.closest?.("a"))||Boolean(q?.closest?.("input")),s=J0.current===C,f=u0.current;if(f){if(f===C)return;Y0()}let j_=m==="file"&&k0.current===C&&!n&&!a;if(s&&!n&&!a&&C!=="."&&!j_){if(v_.current)clearTimeout(v_.current);v_.current=setTimeout(()=>{v_.current=null,J2(C)},350);return}if(m==="dir"){if(k0.current=null,O(C),M(null),S(null),R(!1),!F_.current.has(C))W_.current?.(C);if(s&&!n)return;N((A0)=>{let T0=new Set(A0);if(T0.has(C))T0.delete(C);else T0.add(C);return T0})}else{k0.current=null,O(C);let T_=y_.current.get(C);if(T_)h_.current?.(T_.path,T_);S_.current?.(C)}}).current,s_=L(()=>{U_.current="",P_.current(),Array.from(F_.current||[]).filter((q)=>q&&q!==".").forEach((q)=>W_.current?.(q))}).current,w_=L(()=>{k0.current=null,O(null),M(null),S(null),R(!1)}).current,j0=L(()=>{O_((W)=>{let q=!W;if(typeof window<"u")f_("workspaceShowHidden",String(q));return m_.current=q,n2(!0,q).catch(()=>{}),U_.current="",P_.current?.(),Array.from(F_.current||[]).filter((C)=>C&&C!==".").forEach((C)=>W_.current?.(C)),q})}).current,s0=L((W)=>{if(w0(W)?.closest?.("[data-path]"))return;w_()}).current,l_=P(async(W)=>{if(!W)return;let q=W.split("/").pop()||W;if(!window.confirm(`Delete "${q}"? This cannot be undone.`))return;try{await s3(W);let C=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(J0.current===W)w_();W_.current?.(C),l(null)}catch(C){M((m)=>({...m||{},error:C.message||"Failed to delete file"}))}},[w_]),$0=P((W)=>{let q=a_.current;if(!q||!W||typeof CSS>"u"||typeof CSS.escape!=="function")return;q.querySelector(`[data-path="${CSS.escape(W)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),I0=P((W)=>{let q=o;if(!q||q.length===0)return;let F=V?q.findIndex((C)=>C.node.path===V):-1;if(W.key==="ArrowDown"){W.preventDefault();let C=Math.min(F+1,q.length-1),m=q[C];if(!m)return;if(O(m.node.path),m.node.type!=="dir")h_.current?.(m.node.path,m.node),S_.current?.(m.node.path);else M(null),R(!1),S(null);$0(m.node.path);return}if(W.key==="ArrowUp"){W.preventDefault();let C=F<=0?0:F-1,m=q[C];if(!m)return;if(O(m.node.path),m.node.type!=="dir")h_.current?.(m.node.path,m.node),S_.current?.(m.node.path);else M(null),R(!1),S(null);$0(m.node.path);return}if(W.key==="ArrowRight"&&F>=0){let C=q[F];if(C?.node?.type==="dir"&&!K.has(C.node.path))W.preventDefault(),W_.current?.(C.node.path),N((m)=>new Set([...m,C.node.path]));return}if(W.key==="ArrowLeft"&&F>=0){let C=q[F];if(C?.node?.type==="dir"&&K.has(C.node.path))W.preventDefault(),N((m)=>{let n=new Set(m);return n.delete(C.node.path),n});return}if(W.key==="Enter"&&F>=0){W.preventDefault();let C=q[F];if(!C)return;let m=C.node.path;if(C.node.type==="dir"){if(!F_.current.has(m))W_.current?.(m);N((a)=>{let s=new Set(a);if(s.has(m))s.delete(m);else s.add(m);return s}),M(null),S(null),R(!1)}else h_.current?.(m,C.node),S_.current?.(m);return}if((W.key==="Delete"||W.key==="Backspace")&&F>=0){let C=q[F];if(!C||C.node.type==="dir")return;W.preventDefault(),l_(C.node.path);return}if(W.key==="Escape")W.preventDefault(),w_()},[w_,l_,K,o,$0,V]),V0=P((W)=>{let q=w0(W),F=q?.closest?.(".workspace-row");if(!F)return;let C=F.dataset.type,m=F.dataset.path;if(!m||m===".")return;if(u0.current===m)return;let n=W?.touches?.[0];if(!n)return;if(G0.current={path:i0(q)?m:null,dragging:!1,startX:n.clientX,startY:n.clientY},C!=="file")return;if(Q_.current)clearTimeout(Q_.current);Q_.current=setTimeout(()=>{if(Q_.current=null,G0.current?.dragging)return;l_(m)},600)},[l_]),y0=P(()=>{if(Q_.current)clearTimeout(Q_.current),Q_.current=null;let W=G0.current;if(W?.dragging&&W.path){let q=I_.current||r_(),F=C0.current;if(typeof F==="function")F(W.path,q)}G0.current={path:null,dragging:!1,startX:0,startY:0},t_.current=0,N_(!1),r(null),x_(null),e_(),P0()},[r_,P0,x_,e_]),V2=P((W)=>{let q=G0.current,F=W?.touches?.[0];if(!F||!q?.path){if(Q_.current)clearTimeout(Q_.current),Q_.current=null;return}let C=Math.abs(F.clientX-q.startX),m=Math.abs(F.clientY-q.startY),n=C>8||m>8;if(n&&Q_.current)clearTimeout(Q_.current),Q_.current=null;if(!q.dragging&&n)q.dragging=!0,N_(!0),r("move"),U0(q.path);if(q.dragging){W.preventDefault(),_0(F.clientX,F.clientY);let a=document.elementFromPoint(F.clientX,F.clientY),s=z0(a)||r_();if(I_.current!==s)x_(s);g_(s)}},[z0,r_,U0,_0,x_,g_]),D2=L((W)=>{W.preventDefault();let q=B0.current;if(!q)return;let F=W.clientY,C=E_.current||280,m=W.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let n=F,a=(f)=>{n=f.clientY;let j_=q.clientHeight-80,T_=Math.min(Math.max(C-(f.clientY-F),80),j_);q.style.setProperty("--preview-height",`${T_}px`),E_.current=T_},s=()=>{let f=q.clientHeight-80,j_=Math.min(Math.max(C-(n-F),80),f);E_.current=j_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("previewHeight",String(Math.round(j_))),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",s)}).current,Y2=L((W)=>{W.preventDefault();let q=B0.current;if(!q)return;let F=W.touches[0];if(!F)return;let C=F.clientY,m=E_.current||280,n=W.currentTarget;n.classList.add("dragging"),document.body.style.userSelect="none";let a=(f)=>{let j_=f.touches[0];if(!j_)return;f.preventDefault();let T_=q.clientHeight-80,A0=Math.min(Math.max(m-(j_.clientY-C),80),T_);q.style.setProperty("--preview-height",`${A0}px`),E_.current=A0},s=()=>{n.classList.remove("dragging"),document.body.style.userSelect="",f_("previewHeight",String(Math.round(E_.current||m))),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",s),document.removeEventListener("touchcancel",s)};document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",s),document.addEventListener("touchcancel",s)}).current,j1=async()=>{if(!V)return;try{let W=await o3(V);if(W.media_id)S(W.media_id)}catch(W){M((q)=>({...q||{},error:W.message||"Failed to attach"}))}},K1=async()=>{if(!V||q_)return;await l_(V)},X2=(W)=>{return Array.from(W?.dataTransfer?.types||[]).includes("Files")},I2=P((W)=>{if(!X2(W))return;if(W.preventDefault(),t_.current+=1,!o0.current)N_(!0);r("upload");let q=Q0(W)||r_();x_(q),g_(q)},[r_,Q0,x_,g_]),Z0=P((W)=>{if(!X2(W))return;if(W.preventDefault(),W.dataTransfer)W.dataTransfer.dropEffect="copy";if(!o0.current)N_(!0);if($2.current!=="upload")r("upload");let q=Q0(W)||r_();if(I_.current!==q)x_(q);g_(q)},[r_,Q0,x_,g_]),W1=P((W)=>{if(!X2(W))return;if(W.preventDefault(),t_.current=Math.max(0,t_.current-1),t_.current===0)N_(!1),r(null),x_(null),e_()},[x_,e_]),O2=P(async(W,q=".")=>{let F=Array.from(W||[]);if(F.length===0)return;let C=q&&q!==""?q:".",m=C!=="."?C:"workspace root";J_(!0);try{let n=null;for(let a of F)try{n=await y1(a,C)}catch(s){let f=s?.status,j_=s?.code;if(f===409||j_==="file_exists"){let T_=a?.name||"file";if(!window.confirm(`"${T_}" already exists in ${m}. Overwrite?`))continue;n=await y1(a,C,{overwrite:!0})}else throw s}if(n?.path)k0.current=n.path,O(n.path),S_.current?.(n.path);W_.current?.(C)}catch(n){l(n.message||"Failed to upload file")}finally{J_(!1)}},[]),x2=P(async(W,q)=>{if(!W)return;let F=y_.current?.get(W);if(!F)return;let C=q&&q!==""?q:".",m=W.includes("/")?W.split("/").slice(0,-1).join("/")||".":".";if(C===m)return;try{let a=(await r3(W,C))?.path||W;if(F.type==="dir")N((s)=>{let f=new Set;for(let j_ of s)if(j_===W)f.add(a);else if(j_.startsWith(`${W}/`))f.add(`${a}${j_.slice(W.length)}`);else f.add(j_);return f});if(O(a),F.type==="dir")M(null),R(!1),S(null);else S_.current?.(a);W_.current?.(m),W_.current?.(C)}catch(n){l(n?.message||"Failed to move entry")}},[]);C0.current=x2;let x0=P(async(W)=>{if(!X2(W))return;W.preventDefault(),t_.current=0,N_(!1),r(null),Z_(null),e_();let q=Array.from(W?.dataTransfer?.files||[]);if(q.length===0)return;let F=I_.current||Q0(W)||r_();await O2(q,F)},[r_,Q0,O2]),K0=P((W)=>{if(W?.stopPropagation?.(),K_)return;let q=W?.currentTarget?.dataset?.uploadTarget||".";b0.current=q,W0.current?.click()},[K_]),G1=P(()=>{if(K_)return;let W=J0.current,q=W?y_.current?.get(W):null;b0.current=q?.type==="dir"?q.path:".",W0.current?.click()},[K_]),C2=P((W)=>{if(!W||W.button!==0)return;let q=W.currentTarget;if(!q||!q.dataset)return;let F=q.dataset.path;if(!F||F===".")return;if(u0.current===F)return;let C=w0(W);if(C?.closest?.("button, a, input, .workspace-caret"))return;if(!i0(C))return;W.preventDefault(),F0.current={path:F,dragging:!1,startX:W.clientX,startY:W.clientY};let m=(a)=>{let s=F0.current;if(!s?.path)return;let f=Math.abs(a.clientX-s.startX),j_=Math.abs(a.clientY-s.startY),T_=f>4||j_>4;if(!s.dragging&&T_)s.dragging=!0,__.current=!0,N_(!0),r("move"),U0(s.path),_0(a.clientX,a.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(s.dragging){a.preventDefault(),_0(a.clientX,a.clientY);let A0=document.elementFromPoint(a.clientX,a.clientY),T0=z0(A0)||r_();if(I_.current!==T0)x_(T0);g_(T0)}},n=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",n);let a=F0.current;if(a?.dragging&&a.path){let s=I_.current||r_(),f=C0.current;if(typeof f==="function")f(a.path,s)}F0.current={path:null,dragging:!1,startX:0,startY:0},t_.current=0,N_(!1),r(null),x_(null),e_(),P0(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{__.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",n)},[z0,r_,U0,_0,P0,x_,g_,e_]),a0=P(async(W)=>{let q=Array.from(W?.target?.files||[]);if(q.length===0)return;let F=b0.current||".";if(await O2(q,F),b0.current=".",W?.target)W.target.value=""},[O2]);return Q`
        <aside
            class=${`workspace-sidebar${$_?" workspace-drop-active":""}`}
            data-workspace-scale=${L_}
            ref=${B0}
            onDragEnter=${I2}
            onDragOver=${Z0}
            onDragLeave=${W1}
            onDrop=${x0}
        >
            <input type="file" multiple style="display:none" ref=${W0} onChange=${a0} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${r0} title="New file" disabled=${K_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${s_} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${Y_?" active":""}`}
                        onClick=${j0}
                        title=${Y_?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!Y_&&Q`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${s0}>
                ${K_&&Q`<div class="workspace-drop-hint">Uploading…</div>`}
                ${H&&Q`<div class="workspace-loading">Loading…</div>`}
                ${p&&Q`<div class="workspace-error">${p}</div>`}
                ${X&&Q`
                    <div
                        class="workspace-tree-list"
                        ref=${a_}
                        tabIndex="0"
                        onClick=${N2}
                        onDblClick=${G2}
                        onKeyDown=${I0}
                        onTouchStart=${V0}
                        onTouchEnd=${y0}
                        onTouchMove=${V2}
                        onTouchCancel=${y0}
                    >
                        ${o.map(({node:W,depth:q})=>{let F=W.type==="dir",C=W.path===V,m=W.path===j,n=F&&K.has(W.path),a=i&&W.path===i,s=Array.isArray(W.children)&&W.children.length>0?W.children.length:Number(W.child_count)||0;return Q`
                                <div
                                    key=${W.path}
                                    class=${`workspace-row${C?" selected":""}${a?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+q*D_.indentPx}px`}}
                                    data-path=${W.path}
                                    data-type=${W.type}
                                    onMouseDown=${C2}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${F?n?Q`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:Q`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${F?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${F?Q`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:Q`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?Q`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${M0}
                                                value=${E}
                                                onInput=${(f)=>D(f?.target?.value||"")}
                                                onKeyDown=${(f)=>{if(f.key==="Enter")f.preventDefault(),S0();else if(f.key==="Escape")f.preventDefault(),Y0()}}
                                                onBlur=${Y0}
                                                onClick=${(f)=>f.stopPropagation()}
                                            />
                                        `:Q`<span class="workspace-label"><span class="workspace-label-text">${W.name}</span></span>`}
                                    ${F&&!n&&s>0&&Q`
                                        <span class="workspace-count">${s}</span>
                                    `}
                                    ${F&&Q`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${W.path}
                                            title="Upload files to this folder"
                                            onClick=${K0}
                                            disabled=${K_}
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
            ${V&&Q`
                <div class="workspace-preview-splitter-h" onMouseDown=${D2} onTouchStart=${Y2}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${r0} title="New file" disabled=${K_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!q_&&Q`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>X0&&p_.current?.(V,A)}
                                    title=${p0}
                                    disabled=${!X0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${K1}
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
                            ${q_?Q`
                                    <button class="workspace-download" onClick=${G1}
                                        title="Upload files to this folder" disabled=${K_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${a3(V,Y_)}
                                        title="Download folder as zip" onClick=${(W)=>W.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:Q`<button class="workspace-download" onClick=${j1} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${k&&Q`<div class="workspace-loading">Loading preview…</div>`}
                    ${A?.error&&Q`<div class="workspace-error">${A.error}</div>`}
                    ${q_&&Q`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${R_?.loading&&Q`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${R_?.error&&Q`<div class="workspace-error">${R_.error}</div>`}
                        ${R_?.payload&&R_.payload.segments?.length>0&&Q`
                            <${f6} payload=${R_.payload} />
                        `}
                        ${R_?.payload&&(!R_.payload.segments||R_.payload.segments.length===0)&&Q`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${A&&!A.error&&!q_&&Q`
                        <div class="workspace-preview-body" ref=${v0}></div>
                    `}
                    ${v&&Q`
                        <div class="workspace-download-card">
                            <${R6} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${e&&Q`
                <div class="workspace-drag-ghost" ref=${g0}>${e.label}</div>
            `}
        </aside>
    `}function d4({tabs:_,activeId:$,onActivate:Z,onClose:J,onCloseOthers:X,onCloseAll:Y,onTogglePin:K,onTogglePreview:N,previewTabs:V,onToggleDock:O,dockVisible:j}){let[U,E]=u(null),D=L(null);c(()=>{if(!U)return;let H=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;E(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[U]),c(()=>{let H=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let k=_.findIndex((R)=>R.id===$);if(w.shiftKey){let R=_[(k-1+_.length)%_.length];Z?.(R.id)}else{let R=_[(k+1)%_.length];Z?.(R.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let k=document.querySelector(".editor-pane");if(k&&k.contains(document.activeElement)){if(w.preventDefault(),$)J?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,Z,J]);let A=P((H,w)=>{if(H.button===1){H.preventDefault(),J?.(w);return}if(H.button===0)Z?.(w)},[Z,J]),M=P((H,w)=>{H.preventDefault(),E({id:w,x:H.clientX,y:H.clientY})},[]),v=P((H)=>{H.preventDefault(),H.stopPropagation()},[]),S=P((H,w)=>{H.preventDefault(),H.stopPropagation(),J?.(w)},[J]);if(c(()=>{if(!$||!D.current)return;let H=D.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return Q`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((H)=>Q`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(w)=>A(w,H.id)}
                    onContextMenu=${(w)=>M(w,H.id)}
                >
                    ${H.pinned&&Q`
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
                        onClick=${(w)=>S(w,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?Q`<span class="tab-dirty-dot" aria-hidden="true"></span>`:Q`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                <line x1="4" y1="4" x2="12" y2="12"/>
                                <line x1="12" y1="4" x2="4" y2="12"/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${O&&Q`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${j?" active":""}`}
                    onClick=${O}
                    title=${`${j?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${j?"Hide":"Show"} terminal`}
                    aria-pressed=${j?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 12 4 10 8 6 12 10 12 12"/>
                        <line x1="2" y1="14" x2="14" y2="14"/>
                    </svg>
                </button>
            `}
        </div>
        ${U&&Q`
            <div class="tab-context-menu" style=${{left:U.x+"px",top:U.y+"px"}}>
                <button onClick=${()=>{J?.(U.id),E(null)}}>Close</button>
                <button onClick=${()=>{X?.(U.id),E(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),E(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(U.id),E(null)}}>
                    ${_.find((H)=>H.id===U.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${N&&/\.(md|mdx|markdown)$/i.test(U.id)&&Q`
                    <hr />
                    <button onClick=${()=>{N(U.id),E(null)}}>
                        ${V?.has(U.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var v6=400,d1=60,r4=220,r1="mdPreviewHeight";function g6(){try{let _=localStorage.getItem(r1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=d1?$:r4}catch{return r4}}function s4({getContent:_,path:$,onClose:Z}){let[J,X]=u(""),[Y,K]=u(g6),N=L(null),V=L(null),O=L(""),j=L(_);return j.current=_,c(()=>{let D=()=>{let M=j.current?.()||"";if(M===O.current)return;O.current=M;try{let v=E2(M,null,{sanitize:!1});X(v)}catch{X('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};D();let A=setInterval(D,v6);return()=>clearInterval(A)},[]),c(()=>{if(N.current&&J)_1(N.current).catch(()=>{})},[J]),Q`
        <div
            class="md-preview-splitter"
            onMouseDown=${(D)=>{D.preventDefault();let A=D.clientY,M=V.current?.offsetHeight||Y,v=V.current?.parentElement,S=v?v.offsetHeight*0.7:500,H=D.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=(R)=>{let p=Math.min(Math.max(M-(R.clientY-A),d1),S);K(p)},k=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(r1,String(Math.round(V.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",k)}}
            onTouchStart=${(D)=>{D.preventDefault();let A=D.touches[0];if(!A)return;let M=A.clientY,v=V.current?.offsetHeight||Y,S=V.current?.parentElement,H=S?S.offsetHeight*0.7:500,w=D.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let k=(p)=>{let l=p.touches[0];if(!l)return;p.preventDefault();let Y_=Math.min(Math.max(v-(l.clientY-M),d1),H);K(Y_)},R=()=>{w.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(r1,String(Math.round(V.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",k),document.removeEventListener("touchend",R),document.removeEventListener("touchcancel",R)};document.addEventListener("touchmove",k,{passive:!1}),document.addEventListener("touchend",R),document.addEventListener("touchcancel",R)}}
        ></div>
        <div class="md-preview-panel" ref=${V} style=${{height:Y+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${Z} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${N}
                dangerouslySetInnerHTML=${{__html:J}}
            />
        </div>
    `}function a4({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:Z}){let J=L(_);J.current=_;let X=L($);X.current=$;let Y=L(Z);Y.current=Z,c(()=>{Y.current();let K=new M1((V,O)=>J.current(V,O),(V)=>X.current(V));K.connect();let N=()=>{K.reconnectIfNeeded()};return window.addEventListener("focus",N),document.addEventListener("visibilitychange",N),()=>{window.removeEventListener("focus",N),document.removeEventListener("visibilitychange",N),K.disconnect()}},[])}function t4(){let[_,$]=u(!1),[Z,J]=u("default"),X=L(!1);c(()=>{let V=U2("notificationsEnabled",!1);if(X.current=V,$(V),typeof Notification<"u")J(Notification.permission)},[]),c(()=>{X.current=_},[_]);let Y=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let V=Notification.requestPermission();if(V&&typeof V.then==="function")return V;return Promise.resolve(V)}catch{return Promise.resolve("default")}},[]),K=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){J("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await Y();if(J(O||"default"),O!=="granted"){X.current=!1,$(!1),f_("notificationsEnabled","false");return}}let V=!X.current;X.current=V,$(V),f_("notificationsEnabled",String(V))},[Y]),N=P((V,O)=>{if(!X.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let j=new Notification(V,{body:O});return j.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:Z,toggleNotifications:K,notify:N}}var S2=(_)=>{let $=new Set;return(_||[]).filter((Z)=>{if(!Z||$.has(Z.id))return!1;return $.add(Z.id),!0})};function e4({preserveTimelineScroll:_,preserveTimelineScrollTop:$}){let[Z,J]=u(null),[X,Y]=u(!1),K=L(!1),N=L(null),V=L(!1),O=L(null),j=L(null);c(()=>{K.current=X},[X]),c(()=>{j.current=Z},[Z]);let U=P(async(A=null)=>{try{if(A){let M=await T3(A);J(M.posts),Y(!1)}else{let M=await i2(10);J(M.posts),Y(M.has_more)}}catch(M){console.error("Failed to load posts:",M)}},[]),E=P(async()=>{try{let A=await i2(10);J((M)=>{if(!M||M.length===0)return A.posts;return S2([...A.posts,...M])}),Y((M)=>M||A.has_more)}catch(A){console.error("Failed to refresh timeline:",A)}},[]),D=P(async(A={})=>{let M=j.current;if(!M||M.length===0)return;if(V.current)return;let{preserveScroll:v=!0,preserveMode:S="top",allowRepeat:H=!1}=A,w=(p)=>{if(!v){p();return}if(S==="top")$(p);else _(p)},R=M.slice().sort((p,l)=>p.id-l.id)[0]?.id;if(!Number.isFinite(R))return;if(!H&&O.current===R)return;V.current=!0,O.current=R;try{let p=await i2(10,R);if(p.posts.length>0)w(()=>{J((l)=>S2([...p.posts,...l||[]])),Y(p.has_more)});else Y(!1)}catch(p){console.error("Failed to load more posts:",p)}finally{V.current=!1}},[_,$]);return c(()=>{N.current=D},[D]),{posts:Z,setPosts:J,hasMore:X,setHasMore:Y,hasMoreRef:K,loadPosts:U,refreshTimeline:E,loadMore:D,loadMoreRef:N,loadingMoreRef:V,lastBeforeIdRef:O}}function _8(){let[_,$]=u(null),[Z,J]=u({text:"",totalLines:0}),[X,Y]=u(""),[K,N]=u({text:"",totalLines:0}),[V,O]=u(null),[j,U]=u(null),[E,D]=u(null),A=L(null),M=L(0),v=L(!1),S=L(""),H=L(""),w=L(null),k=L(null),R=L(null),p=L(null),l=L(!1),Y_=L(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:Z,setAgentDraft:J,agentPlan:X,setAgentPlan:Y,agentThought:K,setAgentThought:N,pendingRequest:V,setPendingRequest:O,currentTurnId:j,setCurrentTurnId:U,steerQueuedTurnId:E,setSteerQueuedTurnId:D,lastAgentEventRef:A,lastSilenceNoticeRef:M,isAgentRunningRef:v,draftBufferRef:S,thoughtBufferRef:H,pendingRequestRef:w,stalledPostIdRef:k,currentTurnIdRef:R,steerQueuedTurnIdRef:p,thoughtExpandedRef:l,draftExpandedRef:Y_}}function $8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:Z,dockHeightRef:J}){let X=L((j)=>{j.preventDefault();let U=_.current;if(!U)return;let E=j.clientX,D=$.current||280,A=j.currentTarget;A.classList.add("dragging"),U.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=E,v=(H)=>{M=H.clientX;let w=Math.min(Math.max(D+(H.clientX-E),160),600);U.style.setProperty("--sidebar-width",`${w}px`),$.current=w},S=()=>{let H=Math.min(Math.max(D+(M-E),160),600);$.current=H,A.classList.remove("dragging"),U.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",f_("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,Y=L((j)=>{j.preventDefault();let U=_.current;if(!U)return;let E=j.touches[0];if(!E)return;let D=E.clientX,A=$.current||280,M=j.currentTarget;M.classList.add("dragging"),U.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(H)=>{let w=H.touches[0];if(!w)return;H.preventDefault();let k=Math.min(Math.max(A+(w.clientX-D),160),600);U.style.setProperty("--sidebar-width",`${k}px`),$.current=k},S=()=>{M.classList.remove("dragging"),U.classList.remove("sidebar-resizing"),document.body.style.userSelect="",f_("sidebarWidth",String(Math.round($.current||A))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,K=L((j)=>{j.preventDefault();let U=_.current;if(!U)return;let E=j.clientX,D=Z.current||$.current||280,A=j.currentTarget;A.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let M=E,v=(H)=>{M=H.clientX;let w=Math.min(Math.max(D+(H.clientX-E),200),800);U.style.setProperty("--editor-width",`${w}px`),Z.current=w},S=()=>{let H=Math.min(Math.max(D+(M-E),200),800);Z.current=H,A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,N=L((j)=>{j.preventDefault();let U=_.current;if(!U)return;let E=j.touches[0];if(!E)return;let D=E.clientX,A=Z.current||$.current||280,M=j.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let v=(H)=>{let w=H.touches[0];if(!w)return;H.preventDefault();let k=Math.min(Math.max(A+(w.clientX-D),200),800);U.style.setProperty("--editor-width",`${k}px`),Z.current=k},S=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",f_("editorWidth",String(Math.round(Z.current||A))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,V=L((j)=>{j.preventDefault();let U=_.current;if(!U)return;let E=j.clientY,D=J?.current||200,A=j.currentTarget;A.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let M=E,v=(H)=>{M=H.clientY;let w=Math.min(Math.max(D-(H.clientY-E),100),window.innerHeight*0.5);if(U.style.setProperty("--dock-height",`${w}px`),J)J.current=w},S=()=>{let H=Math.min(Math.max(D-(M-E),100),window.innerHeight*0.5);if(J)J.current=H;A.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",f_("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,O=L((j)=>{j.preventDefault();let U=_.current;if(!U)return;let E=j.touches[0];if(!E)return;let D=E.clientY,A=J?.current||200,M=j.currentTarget;M.classList.add("dragging"),document.body.style.userSelect="none";let v=(H)=>{let w=H.touches[0];if(!w)return;H.preventDefault();let k=Math.min(Math.max(A-(w.clientY-D),100),window.innerHeight*0.5);if(U.style.setProperty("--dock-height",`${k}px`),J)J.current=k},S=()=>{M.classList.remove("dragging"),document.body.style.userSelect="",f_("dockHeight",String(Math.round(J?.current||A))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current;return{handleSplitterMouseDown:X,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:N,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:O}}function Z8({onTabClosed:_}={}){let $=L(_);$.current=_;let[Z,J]=u(()=>C_.getTabs()),[X,Y]=u(()=>C_.getActiveId()),[K,N]=u(()=>C_.getTabs().length>0);c(()=>{return C_.onChange((k,R)=>{J(k),Y(R),N(k.length>0)})},[]);let[V,O]=u(()=>new Set),j=P((k)=>{O((R)=>{let p=new Set(R);if(p.has(k))p.delete(k);else p.add(k);return p})},[]),U=P((k)=>{O((R)=>{if(!R.has(k))return R;let p=new Set(R);return p.delete(k),p})},[]),E=P((k)=>{if(!k)return;let R={path:k,mode:"edit"};try{if(!n_.resolve(R)){if(!n_.get("editor")){console.warn(`[openEditor] No pane handler for: ${k}`);return}}}catch(p){console.warn(`[openEditor] paneRegistry.resolve() error for "${k}":`,p)}C_.open(k)},[]),D=P(()=>{let k=C_.getActiveId();if(k){let R=C_.get(k);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}C_.close(k),U(k),$.current?.(k)}},[U]),A=P((k)=>{let R=C_.get(k);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}C_.close(k),U(k),$.current?.(k)},[U]),M=P((k)=>{C_.activate(k)},[]),v=P((k)=>{let R=C_.getTabs().filter((Y_)=>Y_.id!==k&&!Y_.pinned),p=R.filter((Y_)=>Y_.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let l=R.map((Y_)=>Y_.id);C_.closeOthers(k),l.forEach((Y_)=>{U(Y_),$.current?.(Y_)})},[U]),S=P(()=>{let k=C_.getTabs().filter((l)=>!l.pinned),R=k.filter((l)=>l.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let p=k.map((l)=>l.id);C_.closeAll(),p.forEach((l)=>{U(l),$.current?.(l)})},[U]),H=P((k)=>{C_.togglePin(k)},[]),w=P(()=>{let k=C_.getActiveId();if(k)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:k}}))},[]);return c(()=>{let k=(R)=>{let{oldPath:p,newPath:l,type:Y_}=R.detail||{};if(!p||!l)return;if(Y_==="dir"){for(let O_ of C_.getTabs())if(O_.path===p||O_.path.startsWith(`${p}/`)){let $_=`${l}${O_.path.slice(p.length)}`;C_.rename(O_.id,$_)}}else C_.rename(p,l)};return window.addEventListener("workspace-file-renamed",k),()=>window.removeEventListener("workspace-file-renamed",k)},[]),c(()=>{let k=(R)=>{if(C_.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",k),()=>window.removeEventListener("beforeunload",k)},[]),{editorOpen:K,tabStripTabs:Z,tabStripActiveId:X,previewTabs:V,openEditor:E,closeEditor:D,handleTabClose:A,handleTabActivate:M,handleTabCloseOthers:v,handleTabCloseAll:S,handleTabTogglePin:H,handleTabTogglePreview:j,revealInExplorer:w}}function s1(_,$){try{if(typeof window>"u")return $;let Z=window.__PICLAW_SILENCE||{},J=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,X=Z[_]??window[J],Y=Number(X);return Number.isFinite(Y)?Y:$}catch{return $}}var a1=s1("warning",30000),J8=s1("finalize",120000),t1=s1("refresh",30000),Y8=30000;function X8(_){let $={};return(_?.agents||[]).forEach((Z)=>{$[Z.id]=Z}),$}function j8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function K8(_=30000){let[,$]=u(0);c(()=>{let Z=setInterval(()=>$((J)=>J+1),_);return()=>clearInterval(Z)},[_])}function e1(_,$=160){let Z=String(_||"").replace(/\r\n/g,`
`);if(!Z)return 0;return Z.split(`
`).reduce((J,X)=>J+Math.max(1,Math.ceil(X.length/$)),0)}function W8(_,$){if(typeof _!=="string")return{kind:"ignore"};let Z=_.trim();if(!Z)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(Z))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:Z,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${Z}`,level:"warning"}}return{kind:"open",path:Z}}function w2(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}var u6=f3,G8=v3,m6=g3,N8=h3,V8=p3,O8=u3,_3=typeof F1==="function"?F1:w2("getAgentContext",null),c6=typeof j2==="function"?j2:w2("getAgentModels",{current:null,models:[]}),h6=typeof E1==="function"?E1:w2("getAgentQueueState",{count:0}),p6=typeof C1==="function"?C1:w2("steerAgentQueueItem",{removed:!1,queued:"steer"}),i6=typeof D1==="function"?D1:w2("removeAgentQueueItem",{removed:!1});if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n_.register(f1);n_.register(m1);n_.register(u1);R1();var l6=typeof localStorage<"u"&&localStorage.getItem("experimentalPanes")==="true";if(l6)n_.register(v1);function o6(){let[_,$]=u("disconnected"),[Z,J]=u(null),[X,Y]=u(null),[K,N]=u(!1),[V,O]=u([]),[j,U]=u([]),[E,D]=u(null),{agentStatus:A,setAgentStatus:M,agentDraft:v,setAgentDraft:S,agentPlan:H,setAgentPlan:w,agentThought:k,setAgentThought:R,pendingRequest:p,setPendingRequest:l,currentTurnId:Y_,setCurrentTurnId:O_,steerQueuedTurnId:$_,setSteerQueuedTurnId:N_,lastAgentEventRef:b_,lastSilenceNoticeRef:r,isAgentRunningRef:e,draftBufferRef:d,thoughtBufferRef:i,pendingRequestRef:Z_,stalledPostIdRef:K_,currentTurnIdRef:J_,steerQueuedTurnIdRef:R_,thoughtExpandedRef:X_,draftExpandedRef:B_}=_8(),[z_,L_]=u({}),[A_,F_]=u(null),[U_,k_]=u(null),[u_,M_]=u(!1),[P_,y_]=u(null),[h_,p_]=u(null),[S_,W_]=u([]),[B0,a_]=u(!1),M0=S_.length,W0=L(new Set),b0=L([]),Q_=L(new Set),G0=L({inFlight:!1,lastAttemptAt:0,turnId:null});W0.current=new Set(S_.map((G)=>G.row_id)),b0.current=S_;let{notificationsEnabled:F0,notificationPermission:I,toggleNotifications:__,notify:E_}=t4(),[N0,O0]=u(()=>new Set),[d_,v0]=u(()=>U2("workspaceOpen",!0)),q0=L(null),{editorOpen:m_,tabStripTabs:E0,tabStripActiveId:c_,previewTabs:t_,openEditor:I_,closeEditor:o0,handleTabClose:$2,handleTabActivate:g0,handleTabCloseOthers:K2,handleTabCloseAll:D0,handleTabTogglePin:C0,handleTabTogglePreview:J0,revealInExplorer:u0}=Z8({onTabClosed:(G)=>q0.current?.(G)}),k0=L(null),v_=L(null);c(()=>{let G=k0.current;if(!G)return;if(v_.current)v_.current.dispose(),v_.current=null;let B=c_;if(!B)return;let y={path:B,mode:"edit"},b=n_.resolve(y)||n_.get("editor");if(!b){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let g=b.mount(G,y);v_.current=g,g.onDirtyChange?.((h)=>{C_.setDirty(B,h)}),g.onSaveRequest?.(()=>{}),g.onClose?.(()=>{o0()});let x=C_.getViewState(B);if(x&&typeof g.restoreViewState==="function")requestAnimationFrame(()=>g.restoreViewState(x));if(typeof g.onViewStateChange==="function")g.onViewStateChange((h)=>{C_.saveViewState(B,h)});return requestAnimationFrame(()=>g.focus()),()=>{if(v_.current===g)g.dispose(),v_.current=null}},[c_,o0]);let[n0,W2]=u({name:"You",avatar_url:null,avatar_background:null}),Z2=L(!1),d0=L(!1),r_=L(null),z0=L(0),Q0=L(0),x_=L({}),e_=L({name:null,avatar_url:null}),g_=L({currentHashtag:null,searchQuery:null}),_0=L(null),U0=L(null),P0=L(0),m0=L(0),Y0=L(0),J2=L(null),S0=L(null),c0=L(null),r0=L(0),h0=L({title:null,avatarBase:null}),z=L(null),T=P(()=>{if(z.current)clearTimeout(z.current),z.current=null;D(null)},[]);K8(30000),c(()=>{return j4()},[]),c(()=>{f_("workspaceOpen",String(d_))},[d_]),c(()=>{return()=>{T()}},[T]),c(()=>{x_.current=z_||{}},[z_]),c(()=>{e_.current=n0||{name:"You",avatar_url:null,avatar_background:null}},[n0]);let o=P((G,B,y=null)=>{if(typeof document>"u")return;let b=(G||"").trim()||"PiClaw";if(h0.current.title!==b){document.title=b;let H_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(H_&&H_.getAttribute("content")!==b)H_.setAttribute("content",b);h0.current.title=b}let g=document.getElementById("dynamic-favicon");if(!g)return;let x=g.getAttribute("data-default")||g.getAttribute("href")||"/favicon.ico",h=B||x,t=B?`${h}|${y||""}`:h;if(h0.current.avatarBase!==t){let H_=B?`${h}${h.includes("?")?"&":"?"}v=${y||Date.now()}`:h;g.setAttribute("href",H_),h0.current.avatarBase=t}},[]),V_=P((G)=>{if(!G)return;O((B)=>B.includes(G)?B:[...B,G])},[]),D_=P((G)=>{O((B)=>B.filter((y)=>y!==G))},[]);q0.current=D_;let i_=P(()=>{O([])},[]),q_=P((G,B=null,y="info",b=3000)=>{T(),D({title:G,detail:B||null,kind:y||"info"}),z.current=setTimeout(()=>{D((g)=>g?.title===G?null:g)},b)},[T]),X0=P((G)=>{let B=W8(G,{editorOpen:m_,resolvePane:(y)=>n_.resolve(y)});if(B.kind==="open"){I_(B.path);return}if(B.kind==="toast")q_(B.title,B.detail,B.level)},[m_,I_,q_]),p0=P(()=>{let G=c_;if(G)V_(G)},[c_,V_]),w0=P((G)=>{if(!G)return;U((B)=>B.includes(G)?B:[...B,G])},[]),i0=P(async(G)=>{let B=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},y=document.getElementById("post-"+G);if(y){B(y);return}try{let g=(await R3(G))?.thread?.[0];if(!g)return;Z0((x)=>{if(!x)return[g];if(x.some((h)=>h.id===g.id))return x;return[...x,g]}),requestAnimationFrame(()=>{setTimeout(()=>{let x=document.getElementById("post-"+G);if(x)B(x)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",G,b)}},[]),G2=P((G)=>{U((B)=>B.filter((y)=>y!==G))},[]),N2=P(()=>{U([])},[]),s_=P((G={})=>{let B=Date.now();if(b_.current=B,G.running)e.current=!0,a_((y)=>y?y:!0);if(G.clearSilence)r.current=0},[a_]),w_=P(()=>{if(c0.current)clearTimeout(c0.current),c0.current=null;r0.current=0},[]);c(()=>()=>{w_()},[w_]);let j0=P(()=>{w_(),M((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:B,lastActivity:y,...b}=G;return b})},[w_]),s0=P((G)=>{if(!G)return;w_();let B=Date.now();r0.current=B,M({type:G.type||"active",last_activity:!0}),c0.current=setTimeout(()=>{if(r0.current!==B)return;M((y)=>{if(!y||!(y.last_activity||y.lastActivity))return y;return null})},Y8)},[w_]),l_=P(()=>{e.current=!1,a_(!1),b_.current=null,r.current=0,d.current="",i.current="",Z_.current=null,S0.current=null,J_.current=null,R_.current=null,G0.current={inFlight:!1,lastAttemptAt:0,turnId:null},w_(),O_(null),N_(null),X_.current=!1,B_.current=!1},[w_,O_,N_,a_]),$0=P((G)=>{if(!G)return;if(J_.current===G)return;J_.current=G,G0.current={inFlight:!1,lastAttemptAt:0,turnId:G},O_(G),R_.current=null,N_(null),d.current="",i.current="",S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0}),l(null),Z_.current=null,S0.current=null,X_.current=!1,B_.current=!1},[O_,N_]),I0=P((G)=>{if(typeof document<"u"){let H_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&H_)return}let B=S0.current;if(!B||!B.post)return;if(G&&B.turnId&&B.turnId!==G)return;let y=B.post;if(y.id&&J2.current===y.id)return;let b=String(y?.data?.content||"").trim();if(!b)return;J2.current=y.id||J2.current,S0.current=null;let g=b.replace(/\s+/g," ").slice(0,200),x=x_.current||{},t=(y?.data?.agent_id?x[y.data.agent_id]:null)?.name||"Pi";E_(t,g)},[E_]),V0=P(async(G,B)=>{if(G!=="thought"&&G!=="draft")return;let y=J_.current;if(G==="thought"){if(X_.current=B,y)try{await V8(y,"thought",B)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!B)return;try{let b=y?await N8(y,"thought"):null;if(b?.text)i.current=b.text;R((g)=>({...g||{text:"",totalLines:0},fullText:i.current||g?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:g?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(B_.current=B,y)try{await V8(y,"draft",B)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!B)return;try{let b=y?await N8(y,"draft"):null;if(b?.text)d.current=b.text;S((g)=>({...g||{text:"",totalLines:0},fullText:d.current||g?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:g?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),y0=L(null),V2=P(()=>{let G=_0.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);y0.current=V2;let D2=P((G)=>{let B=_0.current;if(!B||typeof G!=="function"){G?.();return}let{currentHashtag:y,searchQuery:b}=g_.current||{},g=!(b&&!y),x=g?B.scrollHeight-B.scrollTop:B.scrollTop;G(),requestAnimationFrame(()=>{let h=_0.current;if(!h)return;if(g){let t=Math.max(h.scrollHeight-x,0);h.scrollTop=t}else{let t=Math.max(h.scrollHeight-h.clientHeight,0),H_=Math.min(x,t);h.scrollTop=H_}})},[]),Y2=P((G)=>{let B=_0.current;if(!B||typeof G!=="function"){G?.();return}let y=B.scrollTop;G(),requestAnimationFrame(()=>{let b=_0.current;if(!b)return;let g=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(y,g)})},[]),j1="Queued as a follow-up (one-at-a-time).",K1="⁣",X2=P((G)=>{if(!G||!Array.isArray(G))return G;let B=W0.current,y=new Set(B),b=G.filter((g)=>{if(y.has(g?.id))return!1;if(g?.data?.is_bot_message){let x=g?.data?.content;if(x===j1||x===K1)return!1}return!0});return b.length===G.length?G:b},[]),{posts:I2,setPosts:Z0,hasMore:W1,setHasMore:O2,hasMoreRef:x2,loadPosts:x0,refreshTimeline:K0,loadMore:G1,loadMoreRef:C2}=e4({preserveTimelineScroll:D2,preserveTimelineScrollTop:Y2}),a0=L0(()=>X2(I2),[I2,S_,X2]),W=P(()=>{let G=K_.current;if(!G)return;Z0((B)=>B?B.filter((y)=>y.id!==G):B),K_.current=null},[Z0]),{handleSplitterMouseDown:q,handleSplitterTouchStart:F,handleEditorSplitterMouseDown:C,handleEditorSplitterTouchStart:m,handleDockSplitterMouseDown:n,handleDockSplitterTouchStart:a}=$8({appShellRef:U0,sidebarWidthRef:P0,editorWidthRef:m0,dockHeightRef:Y0}),s=P(()=>{if(!e.current)return;e.current=!1,r.current=0,b_.current=null,J_.current=null,O_(null),X_.current=!1,B_.current=!1;let G=(d.current||"").trim();if(d.current="",i.current="",S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0}),l(null),Z_.current=null,S0.current=null,!G){M({type:"error",title:"Response stalled - No content received"});return}let y=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),g=new Date().toISOString(),x={id:b,timestamp:g,data:{type:"agent_response",content:y,agent_id:"default",is_local_stall:!0}};K_.current=b,Z0((h)=>h?S2([...h,x]):[x]),y0.current?.(),M(null)},[O_]);c(()=>{g_.current={currentHashtag:Z,searchQuery:X}},[Z,X]);let f=P(()=>{h6().then((G)=>{let B=Q_.current,y=Array.isArray(G?.items)?G.items.map((b)=>({...b})).filter((b)=>!B.has(b.row_id)):[];if(y.length){W_((b)=>{if(b.length===y.length&&b.every((g,x)=>g.row_id===y[x].row_id))return b;return y});return}B.clear(),W_((b)=>b.length===0?b:[])}).catch(()=>{W_((G)=>G.length===0?G:[])})},[W_]),j_=P(async()=>{try{let G=await _3();if(G)p_(G)}catch(G){console.warn("Failed to fetch agent context:",G)}},[]),T_=P(async()=>{try{let G=await O8("web:default");if(!G||G.status!=="active"||!G.data){if(d0.current){let{currentHashtag:b,searchQuery:g}=g_.current||{};if(!b&&!g)K0()}return d0.current=!1,l_(),M(null),S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0}),l(null),Z_.current=null,G??null}d0.current=!0;let B=G.data,y=B.turn_id||B.turnId;if(y)$0(y);if(s_({running:!0,clearSilence:!0}),j0(),M(B),G.thought&&G.thought.text)R((b)=>{if(b&&b.text&&b.text.length>=G.thought.text.length)return b;return i.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)S((b)=>{if(b&&b.text&&b.text.length>=G.draft.text.length)return b;return d.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[l_,j0,s_,K0,$0]),A0=P(async()=>{if(!e.current)return null;if(Z_.current)return null;let G=J_.current||null,B=G0.current,y=Date.now();if(B.inFlight)return null;if(B.turnId===G&&y-B.lastAttemptAt<t1)return null;B.inFlight=!0,B.lastAttemptAt=y,B.turnId=G;try{let{currentHashtag:b,searchQuery:g}=g_.current||{};if(!b&&!g)await K0();return await f(),await T_()}finally{B.inFlight=!1}},[T_,f,K0]);c(()=>{let G=Math.min(1000,Math.max(100,Math.floor(a1/2))),B=setInterval(()=>{if(!e.current)return;if(Z_.current)return;let y=b_.current;if(!y)return;let b=Date.now(),g=b-y;if(g>=J8){M({type:"waiting",title:"Re-syncing after a quiet period…"}),A0();return}if(g>=a1){if(b-r.current>=t1){let x=Math.floor(g/1000);M({type:"waiting",title:`Waiting for model… No events for ${x}s`}),r.current=b,A0()}}},G);return()=>clearInterval(B)},[A0]);let T0=P((G)=>{if($(G),G!=="connected"){M(null),S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0}),l(null),Z_.current=null,l_();return}if(!Z2.current){Z2.current=!0,T_();return}let{currentHashtag:B,searchQuery:y}=g_.current;if(!B&&!y)K0();T_()},[l_,K0,T_]),B8=P(async(G)=>{J(G),Z0(null),await x0(G)},[x0]),q8=P(async()=>{J(null),Y(null),Z0(null),await x0()},[x0]),z8=P(async(G)=>{if(!G||!G.trim())return;Y(G.trim()),J(null),Z0(null);try{let B=await u6(G.trim());Z0(B.results),O2(!1)}catch(B){console.error("Failed to search:",B),Z0([])}},[]),Q8=P(()=>{N(!0),Y(null),J(null),Z0([])},[]),U8=P(()=>{N(!1),Y(null),x0()},[x0]),n6=P(()=>{},[]),H8=P(async(G)=>{if(!G)return;let B=G.id,y=a0?.filter((g)=>g?.data?.thread_id===B&&g?.id!==B).length||0;if(y>0){if(!window.confirm(`Delete this message and its ${y} replies?`))return}let b=(g)=>{if(!g.length)return;O0((h)=>{let t=new Set(h);return g.forEach((H_)=>t.add(H_)),t}),setTimeout(()=>{if(Y2(()=>{Z0((h)=>h?h.filter((t)=>!g.includes(t.id)):h)}),O0((h)=>{let t=new Set(h);return g.forEach((H_)=>t.delete(H_)),t}),x2.current)C2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await G8(B,y>0);if(g?.ids?.length)b(g.ids)}catch(g){let x=g?.message||"";if(y===0&&x.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let t=await G8(B,!0);if(t?.ids?.length)b(t.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${x}`)}},[a0,Y2]),$3=P(async()=>{try{let G=await m6();L_(X8(G));let B=G?.user||{};W2((b)=>{let g=typeof B.name==="string"&&B.name.trim()?B.name.trim():"You",x=typeof B.avatar_url==="string"?B.avatar_url.trim():null,h=typeof B.avatar_background==="string"&&B.avatar_background.trim()?B.avatar_background.trim():null;if(b.name===g&&b.avatar_url===x&&b.avatar_background===h)return b;return{name:g,avatar_url:x,avatar_background:h}});let y=(G?.agents||[]).find((b)=>b.id==="default");if(y?.model)F_(y.model);o(y?.name,y?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=await _3();if(G)p_(G)}catch{}},[o]);c(()=>{$3();let G=H2("sidebarWidth",null),B=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(P0.current=B,U0.current)U0.current.style.setProperty("--sidebar-width",`${B}px`)},[$3]);let L8=B0||A!==null,Z3=P((G)=>{if(!G||typeof G!=="object")return;let B=G.agent_id;if(!B)return;let{agent_name:y,agent_avatar:b}=G;if(!y&&b===void 0)return;let g=x_.current?.[B]||{id:B},x=g.name||null,h=g.avatar_url??g.avatarUrl??g.avatar??null,t=!1,H_=!1;if(y&&y!==g.name)x=y,H_=!0;if(b!==void 0){let l0=typeof b==="string"?b.trim():null,Y3=typeof h==="string"?h.trim():null,q2=l0||null;if(q2!==(Y3||null))h=q2,t=!0}if(!H_&&!t)return;if(L_((l0)=>{let q2={...l0[B]||{id:B}};if(H_)q2.name=x;if(t)q2.avatar_url=h;return{...l0,[B]:q2}}),B==="default")o(x,h,t?Date.now():null)},[o]),J3=P((G)=>{if(!G||typeof G!=="object")return;let B=G.user_name??G.userName,y=G.user_avatar??G.userAvatar,b=G.user_avatar_background??G.userAvatarBackground;if(B===void 0&&y===void 0&&b===void 0)return;W2((g)=>{let x=typeof B==="string"&&B.trim()?B.trim():g.name||"You",h=y===void 0?g.avatar_url:typeof y==="string"&&y.trim()?y.trim():null,t=b===void 0?g.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(g.name===x&&g.avatar_url===h&&g.avatar_background===t)return g;return{name:x,avatar_url:h,avatar_background:t}})},[]),N1=P((G)=>{if(!G||typeof G!=="object")return;let B=G.model??G.current;if(B!==void 0)F_(B);if(G.thinking_level!==void 0)k_(G.thinking_level??null);if(G.supports_thinking!==void 0)M_(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)y_(G.provider_usage??null)},[]),k2=P(()=>{c6().then((G)=>{if(G)N1(G)}).catch(()=>{})},[N1]),F8=P((G)=>{let B=G?.row_id;if(B==null)return;Q_.current.add(B),W_((y)=>y.filter((b)=>b?.row_id!==B)),p6(B).then(()=>{f()}).catch((y)=>{console.warn("[queue] Failed to steer queued item:",y),q_("Failed to steer message","The queued message could not be sent as steering.","warning"),Q_.current.delete(B),f()})},[f,W_,q_]),E8=P((G)=>{let B=G?.row_id;if(B==null)return;Q_.current.add(B),W_((y)=>y.filter((b)=>b?.row_id!==B)),i6(B).then(()=>{f()}).catch((y)=>{console.warn("[queue] Failed to remove queued item:",y),q_("Failed to remove message","The queued message could not be removed.","warning"),Q_.current.delete(B),f()})},[f,W_,q_]),D8=P((G)=>{if(!G||typeof G!=="object")return;if(G?.queued==="followup"||G?.queued==="steer"){f();return}let B=G?.command;if(B&&typeof B==="object"&&(B?.queued_followup||B?.queued_steer))f()},[f]),V1=P(()=>{k2(),f()},[k2,f]);c(()=>{V1();let G=setInterval(()=>{k2(),f()},60000);return()=>clearInterval(G)},[V1,k2,f]);let O1=P((G,B)=>{let y=B?.turn_id;if(Z3(B),J3(B),G==="ui_theme"){K4(B);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))j0()}if(G==="connected"){M(null),S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0}),l(null),Z_.current=null,l_(),O8("web:default").then((t)=>{if(!t||t.status!=="active"||!t.data)return;let H_=t.data,l0=H_.turn_id||H_.turnId;if(l0)$0(l0);if(s_({clearSilence:!0}),s0(H_),t.thought&&t.thought.text)i.current=t.thought.text,R({text:t.thought.text,totalLines:t.thought.totalLines||0});if(t.draft&&t.draft.text)d.current=t.draft.text,S({text:t.draft.text,totalLines:t.draft.totalLines||0})}).catch((t)=>{console.warn("Failed to fetch agent status:",t)});let{currentHashtag:x,searchQuery:h}=g_.current||{};if(!x&&!h)K0();V1();return}if(G==="agent_status"){if(B.type==="done"||B.type==="error"){if(y&&J_.current&&y!==J_.current)return;if(B.type==="done"){I0(y||J_.current);let{currentHashtag:x,searchQuery:h}=g_.current||{};if(!x&&!h)K0();if(B.context_usage)p_(B.context_usage)}if(d0.current=!1,l_(),Q_.current.clear(),f(),S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0}),l(null),B.type==="error")M({type:"error",title:B.title||"Agent error"}),setTimeout(()=>M(null),8000);else M(null)}else{if(y)$0(y);if(s_({running:!0,clearSilence:!0}),B.type==="thinking")d.current="",i.current="",S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0});r_.current=B,M((x)=>{if(x&&x.type===B.type&&x.title===B.title)return x;return B})}return}if(G==="agent_steer_queued"){if(y&&J_.current&&y!==J_.current)return;let x=y||J_.current;if(!x)return;R_.current=x,N_(x);return}if(G==="agent_followup_queued"){let x=B?.row_id,h=B?.content;if(x!=null&&typeof h==="string"&&h.trim())W_((t)=>{if(t.some((H_)=>H_?.row_id===x))return t;return[...t,{row_id:x,content:h,timestamp:B?.timestamp||null,thread_id:B?.thread_id??null}]});f();return}if(G==="agent_followup_consumed"){let x=B?.row_id;if(x!=null)W_((h)=>h.filter((t)=>t.row_id!==x));f(),K0();return}if(G==="agent_followup_removed"){let x=B?.row_id;if(x!=null)Q_.current.add(x),W_((h)=>h.filter((t)=>t.row_id!==x));f();return}if(G==="agent_draft_delta"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)$0(y);if(s_({running:!0,clearSilence:!0}),B?.reset)d.current="";if(B?.delta)d.current+=B.delta;let x=Date.now();if(!z0.current||x-z0.current>=100){z0.current=x;let h=d.current,t=e1(h);if(B_.current)S((H_)=>({text:H_?.text||"",totalLines:t,fullText:h}));else S({text:h,totalLines:t})}return}if(G==="agent_draft"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)$0(y);s_({running:!0,clearSilence:!0});let x=B.text||"",h=B.mode||(B.kind==="plan"?"replace":"append"),t=Number.isFinite(B.total_lines)?B.total_lines:x?x.replace(/\r\n/g,`
`).split(`
`).length:0;if(B.kind==="plan")if(h==="replace")w(x);else w((H_)=>(H_||"")+x);else if(!B_.current)d.current=x,S({text:x,totalLines:t});return}if(G==="agent_thought_delta"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)$0(y);if(s_({running:!0,clearSilence:!0}),B?.reset)i.current="";if(typeof B?.delta==="string")i.current+=B.delta;let x=Date.now();if(X_.current&&(!Q0.current||x-Q0.current>=100)){Q0.current=x;let h=i.current;R((t)=>({text:t?.text||"",totalLines:e1(h),fullText:h}))}return}if(G==="agent_thought"){if(y&&J_.current&&y!==J_.current)return;if(y&&!J_.current)$0(y);s_({running:!0,clearSilence:!0});let x=B.text||"",h=Number.isFinite(B.total_lines)?B.total_lines:x?x.replace(/\r\n/g,`
`).split(`
`).length:0;if(!X_.current)i.current=x,R({text:x,totalLines:h});return}if(G==="agent_request"){if(console.log("Agent request:",B),y&&J_.current&&y!==J_.current)return;if(y)$0(y);s_({running:!0,clearSilence:!0}),l(B),Z_.current=B;return}if(G==="agent_request_timeout"){if(console.log("Agent request timeout:",B),y&&J_.current&&y!==J_.current)return;l(null),Z_.current=null,l_(),M({type:"error",title:"Permission request timed out"});return}if(G==="model_changed"){if(B?.model!==void 0)F_(B.model);if(B?.thinking_level!==void 0)k_(B.thinking_level??null);if(B?.supports_thinking!==void 0)M_(Boolean(B.supports_thinking));_3().then((x)=>{if(x)p_(x)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:B}));return}let{currentHashtag:b,searchQuery:g}=g_.current;if(G==="agent_response")W(),S0.current={post:B,turnId:J_.current};if(!b&&!g&&(G==="new_post"||G==="agent_response"))Z0((x)=>{if(!x)return[B];if(x.some((h)=>h.id===B.id))return x;return[...x,B]}),y0.current?.();if(G==="interaction_updated")Z0((x)=>{if(!x)return x;if(!x.some((h)=>h.id===B.id))return x;return x.map((h)=>h.id===B.id?B:h)});if(G==="interaction_deleted"){let x=B?.ids||[];if(x.length){Y2(()=>{Z0((H_)=>H_?H_.filter((l0)=>!x.includes(l0.id)):H_)});let{currentHashtag:h,searchQuery:t}=g_.current;if(x2.current&&!h&&!t)C2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[l_,j0,C2,s_,I0,Y2,K0,W,$0,s0,Z3,J3,k2,f,W_]);c(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=O1,G.reset=()=>{W(),l_(),M(null),S({text:"",totalLines:0}),w(""),R({text:"",totalLines:0}),l(null)},G.finalize=()=>s(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[l_,s,O1,W]),a4({handleSseEvent:O1,handleConnectionStatusChange:T0,loadPosts:x0}),c(()=>{if(!a0||a0.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let B=G.slice(5);i0(B),history.replaceState(null,"",location.pathname+location.search)},[a0,i0]);let B1=A!==null;c(()=>{if(_!=="connected")return;let B=setInterval(()=>{let{currentHashtag:y,searchQuery:b}=g_.current||{},g=!y&&!b;if(B1){if(g)K0();f(),T_(),j_()}else{if(g)K0();T_(),j_()}},B1?15000:60000);return()=>clearInterval(B)},[_,B1,T_,j_,f,K0]);let C8=P(()=>{v0((G)=>!G)},[]);c(()=>{if(!m_)return;if(typeof window>"u")return;let G=U0.current;if(!G)return;if(!m0.current){let B=H2("editorWidth",null),y=P0.current||280;m0.current=Number.isFinite(B)?B:y}if(G.style.setProperty("--editor-width",`${m0.current}px`),!Y0.current){let B=H2("dockHeight",null);Y0.current=Number.isFinite(B)?B:200}G.style.setProperty("--dock-height",`${Y0.current}px`)},[m_]);let B2=n_.getDockPanes().length>0,[q1,k8]=u(!1),T2=P(()=>k8((G)=>!G),[]);c(()=>{if(!B2)return;let G=(B)=>{if(B.ctrlKey&&B.key==="`")B.preventDefault(),T2()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[T2,B2]);let y8=Boolean($_&&$_===(A?.turn_id||Y_));return Q`
        <div class=${`app-shell${d_?"":" workspace-collapsed"}${m_?" editor-open":""}`} ref=${U0}>
            <${n4}
                onFileSelect=${V_}
                visible=${d_}
                active=${d_||m_}
                onOpenEditor=${I_}
            />
            <button
                class=${`workspace-toggle-tab${d_?" open":" closed"}`}
                onClick=${C8}
                title=${d_?"Hide workspace":"Show workspace"}
                aria-label=${d_?"Hide workspace":"Show workspace"}
            >
                <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="6 3 11 8 6 13" />
                </svg>
            </button>
            <div class="workspace-splitter" onMouseDown=${q} onTouchStart=${F}></div>
            ${m_&&Q`
                <div class="editor-pane-container">
                    <${d4}
                        tabs=${E0}
                        activeId=${c_}
                        onActivate=${g0}
                        onClose=${$2}
                        onCloseOthers=${K2}
                        onCloseAll=${D0}
                        onTogglePin=${C0}
                        onTogglePreview=${J0}
                        previewTabs=${t_}
                        onToggleDock=${B2?T2:void 0}
                        dockVisible=${B2&&q1}
                    />
                    <div class="editor-pane-host" ref=${k0}></div>
                    ${c_&&t_.has(c_)&&Q`
                        <${s4}
                            getContent=${()=>v_.current?.getContent?.()}
                            path=${c_}
                            onClose=${()=>J0(c_)}
                        />
                    `}
                    ${B2&&q1&&Q`<div class="dock-splitter" onMouseDown=${n} onTouchStart=${a}></div>`}
                    ${B2&&Q`<div class=${`dock-panel${q1?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${T2} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="12" x2="12" y2="4"/>
                                    <polyline points="4 4 12 4 12 12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body">
                            <div class="terminal-placeholder">Terminal integration pending - xterm.js + WebSocket</div>
                        </div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${C} onTouchStart=${m}></div>
            `}
            <div class="container">
                ${X&&j8()&&Q`<div class="search-results-spacer"></div>`}
                ${(Z||X)&&Q`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${q8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${Z?`#${Z}`:`Search: ${X}`}</span>
                    </div>
                `}
                <${M4}
                    posts=${a0}
                    hasMore=${W1}
                    onLoadMore=${G1}
                    timelineRef=${_0}
                    onHashtagClick=${B8}
                    onMessageRef=${w0}
                    onScrollToMessage=${i0}
                    onFileRef=${X0}
                    onPostClick=${void 0}
                    onDeletePost=${H8}
                    emptyMessage=${Z?`No posts with #${Z}`:X?`No results for "${X}"`:void 0}
                    agents=${z_}
                    user=${n0}
                    reverse=${!(X&&!Z)}
                    removingPostIds=${N0}
                    searchQuery=${X}
                />
                <${E4}
                    status=${A}
                    draft=${v}
                    plan=${H}
                    thought=${k}
                    pendingRequest=${p}
                    intent=${E}
                    turnId=${Y_}
                    steerQueued=${y8}
                    onPanelToggle=${V0}
                />
                <${e3}
                    onPost=${()=>{x0(),V2()}}
                    onFocus=${V2}
                    searchMode=${K}
                    onSearch=${z8}
                    onEnterSearch=${Q8}
                    onExitSearch=${U8}
                    fileRefs=${V}
                    onRemoveFileRef=${D_}
                    onClearFileRefs=${i_}
                    messageRefs=${j}
                    onRemoveMessageRef=${G2}
                    onClearMessageRefs=${N2}
                    activeEditorPath=${c_}
                    onAttachEditorFile=${p0}
                    onOpenFilePill=${X0}
                    followupQueueCount=${M0}
                    followupQueueItems=${S_}
                    onInjectQueuedFollowup=${F8}
                    onRemoveQueuedFollowup=${E8}
                    onMessageResponse=${D8}
                    isAgentActive=${L8}
                    activeModel=${A_}
                    modelUsage=${P_}
                    thinkingLevel=${U_}
                    supportsThinking=${u_}
                    contextUsage=${h_}
                    notificationsEnabled=${F0}
                    notificationPermission=${I}
                    onToggleNotifications=${__}
                    onModelChange=${F_}
                    onModelStateChange=${N1}
                />
                <${C4} status=${_} />
                <${D4}
                    request=${p}
                    onRespond=${()=>{l(null),Z_.current=null}}
                />
            </div>
        </div>
    `}S3(Q`<${o6} />`,document.getElementById("app"));

//# debugId=F29F4EDF52065F0C64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
