var x6=Object.defineProperty;var S6=(_)=>_;function f6(_,$){this[_]=S6.bind(null,$)}var T6=(_,$)=>{for(var j in $)x6(_,j,{get:$[j],enumerable:!0,configurable:!0,set:f6.bind($,j)})};var I6=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var E$,h_,i1,m6,E2,x1,l1,n1,o1,G3,N3,K3,u6,J$={},y$=[],v6=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,k$=Array.isArray;function B2(_,$){for(var j in $)_[j]=$[j];return _}function O3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function d1(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?E$.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return Q$(_,z,Z,N,null)}function Q$(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++i1:N,__i:-1,__u:0};return N==null&&h_.vnode!=null&&h_.vnode(K),K}function w$(_){return _.children}function F$(_,$){this.props=_,this.context=$}function R2(_,$){if($==null)return _.__?R2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?R2(_):null}function R6(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=B2({},$);K.__v=$.__v+1,h_.vnode&&h_.vnode(K),L3(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?R2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,t1(Z,K,N),$.__e=$.__=null,K.__e!=j&&r1(K)}}function r1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),r1(_)}function S1(_){(!_.__d&&(_.__d=!0)&&E2.push(_)&&!D$.__r++||x1!=h_.debounceRendering)&&((x1=h_.debounceRendering)||l1)(D$)}function D$(){try{for(var _,$=1;E2.length;)E2.length>$&&E2.sort(n1),_=E2.shift(),$=E2.length,R6(_)}finally{E2.length=D$.__r=0}}function s1(_,$,j,Z,N,K,z,X,L,O,q){var W,H,w,f,T,v,x,F=Z&&Z.__k||y$,A=$.length;for(L=g6(j,$,F,L,A),W=0;W<A;W++)(w=j.__k[W])!=null&&(H=w.__i!=-1&&F[w.__i]||J$,w.__i=W,v=L3(_,w,H,N,K,z,X,L,O,q),f=w.__e,w.ref&&H.ref!=w.ref&&(H.ref&&X3(H.ref,null,w),q.push(w.ref,w.__c||f,w)),T==null&&f!=null&&(T=f),(x=!!(4&w.__u))||H.__k===w.__k?L=a1(w,L,_,x):typeof w.type=="function"&&v!==void 0?L=v:f&&(L=f.nextSibling),w.__u&=-7);return j.__e=T,L}function g6(_,$,j,Z,N){var K,z,X,L,O,q=j.length,W=q,H=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=Q$(null,z,null,null,null):k$(z)?z=_.__k[K]=Q$(w$,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=Q$(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,L=K+H,z.__=_,z.__b=_.__b+1,X=null,(O=z.__i=c6(z,j,L,W))!=-1&&(W--,(X=j[O])&&(X.__u|=2)),X==null||X.__v==null?(O==-1&&(N>q?H--:N<q&&H++),typeof z.type!="function"&&(z.__u|=4)):O!=L&&(O==L-1?H--:O==L+1?H++:(O>L?H--:H++,z.__u|=4))):_.__k[K]=null;if(W)for(K=0;K<q;K++)(X=j[K])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=R2(X)),_4(X,X));return Z}function a1(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=a1(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=R2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function c6(_,$,j,Z){var N,K,z,X=_.key,L=_.type,O=$[j],q=O!=null&&(2&O.__u)==0;if(O===null&&X==null||q&&X==O.key&&L==O.type)return j;if(Z>(q?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((O=$[z=N>=0?N--:K++])!=null&&(2&O.__u)==0&&X==O.key&&L==O.type)return z}return-1}function f1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||v6.test($)?j:j+"px"}function B$(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||f1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||f1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(o1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=G3,_.addEventListener($,K?K3:N3,K)):_.removeEventListener($,K?K3:N3,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function T1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=G3++;else if($.t<j.u)return;return j(h_.event?h_.event($):$)}}}function L3(_,$,j,Z,N,K,z,X,L,O){var q,W,H,w,f,T,v,x,F,A,C,c,a,t,l,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),K=[X=$.__e=j.__e]),(q=h_.__b)&&q($);_:if(typeof N_=="function")try{if(x=$.props,F=N_.prototype&&N_.prototype.render,A=(q=N_.contextType)&&Z[q.__c],C=q?A?A.props.value:q.__:Z,j.__c?v=(W=$.__c=j.__c).__=W.__E:(F?$.__c=W=new N_(x,C):($.__c=W=new F$(x,C),W.constructor=N_,W.render=h6),A&&A.sub(W),W.state||(W.state={}),W.__n=Z,H=W.__d=!0,W.__h=[],W._sb=[]),F&&W.__s==null&&(W.__s=W.state),F&&N_.getDerivedStateFromProps!=null&&(W.__s==W.state&&(W.__s=B2({},W.__s)),B2(W.__s,N_.getDerivedStateFromProps(x,W.__s))),w=W.props,f=W.state,W.__v=$,H)F&&N_.getDerivedStateFromProps==null&&W.componentWillMount!=null&&W.componentWillMount(),F&&W.componentDidMount!=null&&W.__h.push(W.componentDidMount);else{if(F&&N_.getDerivedStateFromProps==null&&x!==w&&W.componentWillReceiveProps!=null&&W.componentWillReceiveProps(x,C),$.__v==j.__v||!W.__e&&W.shouldComponentUpdate!=null&&W.shouldComponentUpdate(x,W.__s,C)===!1){$.__v!=j.__v&&(W.props=x,W.state=W.__s,W.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),y$.push.apply(W.__h,W._sb),W._sb=[],W.__h.length&&z.push(W);break _}W.componentWillUpdate!=null&&W.componentWillUpdate(x,W.__s,C),F&&W.componentDidUpdate!=null&&W.__h.push(function(){W.componentDidUpdate(w,f,T)})}if(W.context=C,W.props=x,W.__P=_,W.__e=!1,c=h_.__r,a=0,F)W.state=W.__s,W.__d=!1,c&&c($),q=W.render(W.props,W.state,W.context),y$.push.apply(W.__h,W._sb),W._sb=[];else do W.__d=!1,c&&c($),q=W.render(W.props,W.state,W.context),W.state=W.__s;while(W.__d&&++a<25);W.state=W.__s,W.getChildContext!=null&&(Z=B2(B2({},Z),W.getChildContext())),F&&!H&&W.getSnapshotBeforeUpdate!=null&&(T=W.getSnapshotBeforeUpdate(w,f)),t=q!=null&&q.type===w$&&q.key==null?e1(q.props.children):q,X=s1(_,k$(t)?t:[t],$,j,Z,N,K,z,X,L,O),W.base=$.__e,$.__u&=-161,W.__h.length&&z.push(W),v&&(W.__E=W.__=null)}catch(i){if($.__v=null,L||K!=null)if(i.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;K[K.indexOf(X)]=null,$.__e=X}else{for(l=K.length;l--;)O3(K[l]);z3($)}else $.__e=j.__e,$.__k=j.__k,i.then||z3($);h_.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=p6(j.__e,$,j,Z,N,K,z,L,O);return(q=h_.diffed)&&q($),128&$.__u?void 0:X}function z3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(z3))}function t1(_,$,j){for(var Z=0;Z<j.length;Z++)X3(j[Z],j[++Z],j[++Z]);h_.__c&&h_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){h_.__e(K,N.__v)}})}function e1(_){return typeof _!="object"||_==null||_.__b>0?_:k$(_)?_.map(e1):B2({},_)}function p6(_,$,j,Z,N,K,z,X,L){var O,q,W,H,w,f,T,v=j.props||J$,x=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(O=0;O<K.length;O++)if((w=K[O])&&"setAttribute"in w==!!F&&(F?w.localName==F:w.nodeType==3)){_=w,K[O]=null;break}}if(_==null){if(F==null)return document.createTextNode(x);_=document.createElementNS(N,F,x.is&&x),X&&(h_.__m&&h_.__m($,K),X=!1),K=null}if(F==null)v===x||X&&_.data==x||(_.data=x);else{if(K=K&&E$.call(_.childNodes),!X&&K!=null)for(v={},O=0;O<_.attributes.length;O++)v[(w=_.attributes[O]).name]=w.value;for(O in v)w=v[O],O=="dangerouslySetInnerHTML"?W=w:O=="children"||(O in x)||O=="value"&&("defaultValue"in x)||O=="checked"&&("defaultChecked"in x)||B$(_,O,null,w,N);for(O in x)w=x[O],O=="children"?H=w:O=="dangerouslySetInnerHTML"?q=w:O=="value"?f=w:O=="checked"?T=w:X&&typeof w!="function"||v[O]===w||B$(_,O,w,v[O],N);if(q)X||W&&(q.__html==W.__html||q.__html==_.innerHTML)||(_.innerHTML=q.__html),$.__k=[];else if(W&&(_.innerHTML=""),s1($.type=="template"?_.content:_,k$(H)?H:[H],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&R2(j,0),X,L),K!=null)for(O=K.length;O--;)O3(K[O]);X||(O="value",F=="progress"&&f==null?_.removeAttribute("value"):f!=null&&(f!==_[O]||F=="progress"&&!f||F=="option"&&f!=v[O])&&B$(_,O,f,v[O],N),O="checked",T!=null&&T!=_[O]&&B$(_,O,T,v[O],N))}return _}function X3(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){h_.__e(N,j)}}function _4(_,$,j){var Z,N;if(h_.unmount&&h_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||X3(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){h_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&_4(Z[N],$,j||typeof _.type!="function");j||O3(_.__e),_.__c=_.__=_.__e=void 0}function h6(_,$,j){return this.constructor(_,j)}function $4(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),h_.__&&h_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],L3($,_=(!Z&&j||$).__k=d1(w$,null,[_]),N||J$,J$,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?E$.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),t1(K,_,z)}E$=y$.slice,h_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(X){_=X}throw _}},i1=0,m6=function(_){return _!=null&&_.constructor===void 0},F$.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=B2({},this.state),typeof _=="function"&&(_=_(B2({},j),this.props)),_&&B2(j,_),_!=null&&this.__v&&($&&this._sb.push($),S1(this))},F$.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),S1(this))},F$.prototype.render=w$,E2=[],l1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,n1=function(_,$){return _.__v.__b-$.__v.__b},D$.__r=0,o1=/(PointerCapture)$|Capture$/i,G3=0,N3=T1(!1),K3=T1(!0),u6=0;var e2,z0,Z3,I1,_$=0,j4=[],K0=h_,m1=K0.__b,u1=K0.__r,v1=K0.diffed,R1=K0.__c,g1=K0.unmount,c1=K0.__;function V3(_,$){K0.__h&&K0.__h(z0,_,_$||$),_$=0;var j=z0.__H||(z0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function I(_){return _$=1,i6(N4,_)}function i6(_,$,j){var Z=V3(e2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):N4(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],O=Z.t(L,X);L!==O&&(Z.__N=[O,Z.__[1]],Z.__c.setState({}))}],Z.__c=z0,!z0.__f)){var N=function(X,L,O){if(!Z.__c.__H)return!0;var q=Z.__c.__H.__.filter(function(H){return H.__c});if(q.every(function(H){return!H.__N}))return!K||K.call(this,X,L,O);var W=Z.__c.props!==X;return q.some(function(H){if(H.__N){var w=H.__[0];H.__=H.__N,H.__N=void 0,w!==H.__[0]&&(W=!0)}}),K&&K.call(this,X,L,O)||W};z0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=z0;z0.componentWillUpdate=function(X,L,O){if(this.__e){var q=K;K=void 0,N(X,L,O),K=q}z&&z.call(this,X,L,O)},z0.shouldComponentUpdate=N}return Z.__N||Z.__}function u(_,$){var j=V3(e2++,3);!K0.__s&&Z4(j.__H,$)&&(j.__=_,j.u=$,z0.__H.__h.push(j))}function y(_){return _$=5,i_(function(){return{current:_}},[])}function i_(_,$){var j=V3(e2++,7);return Z4(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return _$=8,i_(function(){return _},$)}function l6(){for(var _;_=j4.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(H$),$.__h.some(Y3),$.__h=[]}catch(j){$.__h=[],K0.__e(j,_.__v)}}}K0.__b=function(_){z0=null,m1&&m1(_)},K0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),c1&&c1(_,$)},K0.__r=function(_){u1&&u1(_),e2=0;var $=(z0=_.__c).__H;$&&(Z3===z0?($.__h=[],z0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(H$),$.__h.some(Y3),$.__h=[],e2=0)),Z3=z0},K0.diffed=function(_){v1&&v1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(j4.push($)!==1&&I1===K0.requestAnimationFrame||((I1=K0.requestAnimationFrame)||n6)(l6)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z3=z0=null},K0.__c=function(_,$){$.some(function(j){try{j.__h.some(H$),j.__h=j.__h.filter(function(Z){return!Z.__||Y3(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],K0.__e(Z,j.__v)}}),R1&&R1(_,$)},K0.unmount=function(_){g1&&g1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{H$(Z)}catch(N){$=N}}),j.__H=void 0,$&&K0.__e($,j.__v))};var p1=typeof requestAnimationFrame=="function";function n6(_){var $,j=function(){clearTimeout(Z),p1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);p1&&($=requestAnimationFrame(j))}function H$(_){var $=z0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),z0=$}function Y3(_){var $=z0;_.__c=_.__(),z0=$}function Z4(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function N4(_,$){return typeof $=="function"?$(_):$}var K4=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],X=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=X:z===4?Z[1]=Object.assign(Z[1]||{},X):z===5?(Z[1]=Z[1]||{})[$[++K]]=X:z===6?Z[1][$[++K]]+=X+"":z?(N=_.apply(X,K4(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(X)}return Z},h1=new Map;function o6(_){var $=h1.get(this);return $||($=new Map,h1.set(this,$)),($=K4(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",X="",L=[0],O=function(H){K===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,z):K===3&&(H||z)?(L.push(3,H,z),K=2):K===2&&z==="..."&&H?L.push(4,H,0):K===2&&z&&!H?L.push(5,0,!0,z):K>=5&&((z||!H&&K===5)&&(L.push(K,0,z,N),K=6),H&&(L.push(K,H,0,N),K=6)),z=""},q=0;q<j.length;q++){q&&(K===1&&O(),O(q));for(var W=0;W<j[q].length;W++)Z=j[q][W],K===1?Z==="<"?(O(),L=[L],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:X?Z===X?X="":z+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(O(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[q][W+1]===">")?(O(),K===3&&(L=L[0]),K=L,(L=L[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(O(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,L=L[0])}return O(),L}(_)),$),arguments,[])).length>1?$:$[0]}var U=o6.bind(d1);var d0={};T6(d0,{uploadWorkspaceFile:()=>P$,uploadMedia:()=>J3,updateWorkspaceFile:()=>Y5,submitAdaptiveCardAction:()=>y3,streamSidePrompt:()=>K5,steerAgentQueueItem:()=>N5,setWorkspaceVisibility:()=>N$,setAgentThoughtVisibility:()=>k3,sendPeerAgentMessage:()=>_5,sendAgentMessage:()=>g2,searchPosts:()=>q3,respondToAgentRequest:()=>A$,renameWorkspaceFile:()=>x3,renameChatBranch:()=>t6,removeAgentQueueItem:()=>Z5,pruneChatBranch:()=>e6,moveWorkspaceEntry:()=>S3,getWorkspaceTree:()=>Z$,getWorkspaceRawUrl:()=>M$,getWorkspaceFile:()=>P3,getWorkspaceDownloadUrl:()=>T3,getWorkspaceBranch:()=>z5,getTimeline:()=>$$,getThumbnailUrl:()=>w3,getThread:()=>U3,getPostsByHashtag:()=>W3,getMediaUrl:()=>Z2,getMediaText:()=>b3,getMediaInfo:()=>c2,getMediaBlob:()=>A3,getChatBranches:()=>a6,getAgents:()=>F3,getAgentThought:()=>E3,getAgentStatus:()=>H3,getAgentQueueState:()=>j5,getAgentModels:()=>j$,getAgentContext:()=>$5,getActiveChatAgents:()=>Q3,forkChatBranch:()=>b$,deleteWorkspaceFile:()=>f3,deletePost:()=>B3,createWorkspaceFile:()=>C3,createReply:()=>s6,createPost:()=>r6,attachWorkspaceFile:()=>M3,addToWhitelist:()=>D3,SSEClient:()=>C$});async function f_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function z4(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function d6(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:X}=await j.read();if(X)break;N+=Z.decode(z,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let O of L){let q=z4(O);if(q)$(q.event,q.data)}}N+=Z.decode();let K=z4(N);if(K)$(K.event,K.data)}async function $$(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return f_(Z)}async function W3(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function q3(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${X}${L}`)}async function U3(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${j}`)}async function r6(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function s6(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function B3(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return f_(N,{method:"DELETE"})}async function g2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return f_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function Q3(){return f_("/agent/active-chats")}async function a6(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/branches${$}`)}async function b$(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function t6(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function e6(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function _5(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function F3(){return f_("/agents")}async function H3(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function $5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function j5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function Z5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function N5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function j$(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function J3(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function A$(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function y3(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function K5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await d6(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function D3(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function E3(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(j)}async function k3(_,$,j){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function Z2(_){return`/media/${_}`}function w3(_){return`/media/${_}/thumbnail`}async function c2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function b3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function A3(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function Z$(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return f_(Z)}async function z5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function P3(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return f_(N)}async function Y5(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function M3(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function P$(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",X=await fetch(""+z,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),O=Error(L.error||`HTTP ${X.status}`);throw O.status=X.status,O.code=L.code,O}return X.json()}async function C3(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function x3(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function S3(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function f3(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function N$(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function M$(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function T3(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class C${constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_request",($)=>{this.onEvent("agent_request",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),this.eventSource.addEventListener("agent_request_timeout",($)=>{this.onEvent("agent_request_timeout",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function r0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function r_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function p2(_,$=!1){let j=r0(_);if(j===null)return $;return j==="true"}function h2(_,$=null){let j=r0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function x$(_){return String(_||"").trim().toLowerCase()}function I3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return x$($[1]||"")}function Y4(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=x$(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function G4(_,$,j={}){let Z=I3($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return Y4(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return x$(K?.agent_name).startsWith(Z)})}function m3(_){let $=x$(_);return $?`@${$} `:""}function O4(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return Y4(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function L4({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function Q2({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,O=`${_}-file-remove`,q=z==="message"?U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:U`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return U`
    <span class=${X} title=${j||$} onClick=${N}>
      ${q}
      <span class=${L}>${$}</span>
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
  `}var G5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function O5({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${X4(j)} / ${X4(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,X=$/100*z,L=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return U`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${L}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function X4(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function V4({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:O,onClearFileRefs:q,messageRefs:W=[],onRemoveMessageRef:H,onClearMessageRefs:w,activeModel:f=null,modelUsage:T=null,thinkingLevel:v=null,supportsThinking:x=!1,contextUsage:F=null,notificationsEnabled:A=!1,notificationPermission:C="default",onToggleNotifications:c,onModelChange:a,onModelStateChange:t,activeEditorPath:l=null,onAttachEditorFile:N_,onOpenFilePill:i,followupQueueItems:Q_=[],onInjectQueuedFollowup:U_,onRemoveQueuedFollowup:r,onSubmitIntercept:__,onMessageResponse:K_,onPopOutChat:j_,isAgentActive:G_=!1,activeChatAgents:X_=[],currentChatJid:J_="web:default"}){let[Z_,D_]=I(""),[k_,s_]=I(""),[E_,u_]=I([]),[w_,l_]=I(!1),[p,L_]=I([]),[V_,W_]=I(0),[y_,b_]=I(!1),[v_,F_]=I([]),[C_,S_]=I(0),[Y0,n_]=I(!1),[e_,B0]=I(!1),[x_,_0]=I(!1),[Q0,D0]=I([]),[F0,G0]=I(!1),[E0,o_]=I(0),T_=y(null),M0=y(null),c_=y(null),d_=y(null),k0=y(null),B_=y(null),M=y(0),e=200,A_=(B)=>{let S=new Set,n=[];for(let Y_ of B||[]){if(typeof Y_!=="string")continue;let P_=Y_.trim();if(!P_||S.has(P_))continue;S.add(P_),n.push(P_)}return n},R_=()=>{let B=r0("piclaw_compose_history");if(!B)return[];try{let S=JSON.parse(B);if(!Array.isArray(S))return[];return A_(S)}catch{return[]}},w0=(B)=>{r_("piclaw_compose_history",JSON.stringify(B))},a0=y(R_()),$0=y(-1),O0=y(""),V0=Z_.trim()||E_.length>0||L.length>0||W.length>0,t0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),C0=typeof window<"u"&&typeof Notification<"u",R0=typeof window<"u"?Boolean(window.isSecureContext):!1,o2=C0&&R0&&C!=="denied",w2=C==="granted"&&A,c0=w2?"Disable notifications":"Enable notifications",j0=O4(X_,{currentChatJid:J_,limit:4}),K2=j0.length>0,L0=!j&&L4({footerWidth:E0,visibleAgentCount:j0.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),Z0=f||"",I_=x&&v?` (${v})`:"",I0=I_.trim()?`${v}`:"",p0=typeof T?.hint_short==="string"?T.hint_short.trim():"",z2=[I0||null,p0||null].filter(Boolean).join(" • "),J2=[Z0?`Current model: ${Z0}${I_}`:null,T?.plan?`Plan: ${T.plan}`:null,p0||null,T?.primary?.reset_description||null,T?.secondary?.reset_description||null].filter(Boolean),b2=e_?"Switching model…":J2.join(" • ")||`Current model: ${Z0}${I_} (tap to open model picker)`,H0=(B)=>{if(!B||typeof B!=="object")return;let S=B.model??B.current;if(typeof t==="function")t({model:S??null,thinking_level:B.thinking_level??null,supports_thinking:B.supports_thinking,provider_usage:B.provider_usage??null});if(S&&typeof a==="function")a(S)},A2=(B)=>{let S=B||T_.current;if(!S)return;S.style.height="auto",S.style.height=`${S.scrollHeight}px`,S.style.overflowY="hidden"},d2=(B)=>{if(!B.startsWith("/")||B.includes(`
`)){b_(!1),L_([]);return}let S=B.toLowerCase().split(" ")[0];if(S.length<1){b_(!1),L_([]);return}let n=G5.filter((Y_)=>Y_.name.startsWith(S)||Y_.name.replace(/-/g,"").startsWith(S.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===S))n_(!1),F_([]),L_(n),W_(0),b_(!0);else b_(!1),L_([])},y2=(B)=>{let S=Z_,n=S.indexOf(" "),Y_=n>=0?S.slice(n):"",P_=B.name+Y_;D_(P_),b_(!1),L_([]),requestAnimationFrame(()=>{let t_=T_.current;if(!t_)return;let M_=P_.length;t_.selectionStart=M_,t_.selectionEnd=M_,t_.focus()})},m2=(B)=>{if(I3(B)==null){n_(!1),F_([]);return}let S=G4(X_,B,{currentChatJid:J_});if(S.length>0&&!(S.length===1&&m3(S[0].agent_name).trim().toLowerCase()===String(B||"").trim().toLowerCase()))b_(!1),L_([]),F_(S),S_(0),n_(!0);else n_(!1),F_([])},q2=(B)=>{let S=m3(B?.agent_name);if(!S)return;D_(S),n_(!1),F_([]),requestAnimationFrame(()=>{let n=T_.current;if(!n)return;let Y_=S.length;n.selectionStart=Y_,n.selectionEnd=Y_,n.focus()})},a_=(B)=>{if(j)s_(B);else D_(B),d2(B),m2(B);requestAnimationFrame(()=>A2())},P2=(B)=>{let S=j?k_:Z_,n=S&&!S.endsWith(`
`)?`
`:"",Y_=`${S}${n}${B}`.trimStart();a_(Y_)},x0=(B)=>{let S=B?.command?.model_label;if(S)return S;let n=B?.command?.message;if(typeof n==="string"){let Y_=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(Y_?.[1])return Y_[1].trim()}return null},S0=async(B)=>{if(j||e_)return;B0(!0);try{let S=await g2("default",B,null,[],null,J_),n=x0(S);H0({model:n??f??null,thinking_level:S?.command?.thinking_level,supports_thinking:S?.command?.supports_thinking});try{let Y_=await j$(J_);if(Y_)H0(Y_)}catch{}return _?.(),!0}catch(S){return console.error("Failed to switch model:",S),alert("Failed to switch model: "+S.message),!1}finally{B0(!1)}},Y2=async()=>{await S0("/cycle-model")},X$=async(B)=>{if(!B||e_)return;if(await S0(`/model ${B}`))_0(!1)},U0=(B)=>{B.preventDefault(),B.stopPropagation(),_0((S)=>!S)},M2=(B)=>{if(B==="queue"||B==="steer"||B==="auto")return B;return G_?"queue":null},G2=async(B,S,n={})=>{let{includeMedia:Y_=!0,includeFileRefs:P_=!0,includeMessageRefs:t_=!0,clearAfterSubmit:M_=!0,recordHistory:N0=!0}=n||{},i0=typeof B==="string"?B:B&&typeof B?.target?.value==="string"?B.target.value:Z_,D2=typeof i0==="string"?i0:"";if(!D2.trim()&&(Y_?E_.length===0:!0)&&(P_?L.length===0:!0)&&(t_?W.length===0:!0))return;b_(!1),L_([]),n_(!1),F_([]);let m0=Y_?[...E_]:[],L2=P_?[...L]:[],X2=t_?[...W]:[],l0=D2.trim();if(N0&&l0){let V2=a0.current,J0=A_(V2.filter((f2)=>f2!==l0));if(J0.push(l0),J0.length>200)J0.splice(0,J0.length-200);a0.current=J0,w0(J0),$0.current=-1,O0.current=""}if(M_)D_(""),u_([]),q?.(),w?.();(async()=>{try{if(await __?.({content:l0,submitMode:S,fileRefs:L2,messageRefs:X2,mediaFiles:m0})){_?.();return}let J0=[];for(let m of m0){let d=await J3(m);J0.push(d.id)}let f2=L2.length?`Files:
${L2.map((m)=>`- ${m}`).join(`
`)}`:"",V=X2.length?`Referenced messages:
${X2.map((m)=>`- message:${m}`).join(`
`)}`:"",Q=J0.length?`Images:
${J0.map((m,d)=>{let o=m0[d]?.name||`image-${d+1}`;return`- attachment:${m} (${o})`}).join(`
`)}`:"",k=[l0,f2,V,Q].filter(Boolean).join(`

`),E=await g2("default",k,null,J0,M2(S),J_);if(K_?.(E),E?.command){H0({model:E.command.model_label??f??null,thinking_level:E.command.thinking_level,supports_thinking:E.command.supports_thinking});try{let m=await j$(J_);if(m)H0(m)}catch{}}_?.()}catch(V2){console.error("Failed to post:",V2)}})()},O2=(B)=>{U_?.(B)},C2=(B)=>{if(B.isComposing)return;if(j&&B.key==="Escape"){B.preventDefault(),s_(""),X?.();return}if(Y0&&v_.length>0){let S=T_.current?.value??(j?k_:Z_);if(!String(S||"").match(/^@([a-zA-Z0-9_-]*)$/))n_(!1),F_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),S_((n)=>(n+1)%v_.length);return}if(B.key==="ArrowUp"){B.preventDefault(),S_((n)=>(n-1+v_.length)%v_.length);return}if(B.key==="Tab"||B.key==="Enter"){B.preventDefault(),q2(v_[C_]);return}if(B.key==="Escape"){B.preventDefault(),n_(!1),F_([]);return}}}if(y_&&p.length>0){let S=T_.current?.value??(j?k_:Z_);if(!String(S||"").startsWith("/"))b_(!1),L_([]);else{if(B.key==="ArrowDown"){B.preventDefault(),W_((n)=>(n+1)%p.length);return}if(B.key==="ArrowUp"){B.preventDefault(),W_((n)=>(n-1+p.length)%p.length);return}if(B.key==="Tab"){B.preventDefault(),y2(p[V_]);return}if(B.key==="Enter"&&!B.shiftKey){if(!(T_.current?.value??(j?k_:Z_)).includes(" ")){B.preventDefault();let P_=p[V_];b_(!1),L_([]),G2(P_.name);return}}if(B.key==="Escape"){B.preventDefault(),b_(!1),L_([]);return}}}if(!j&&(B.key==="ArrowUp"||B.key==="ArrowDown")&&!B.metaKey&&!B.ctrlKey&&!B.altKey&&!B.shiftKey){let S=T_.current;if(!S)return;let n=S.value||"",Y_=S.selectionStart===0&&S.selectionEnd===0,P_=S.selectionStart===n.length&&S.selectionEnd===n.length;if(B.key==="ArrowUp"&&Y_||B.key==="ArrowDown"&&P_){let t_=a0.current;if(!t_.length)return;B.preventDefault();let M_=$0.current;if(B.key==="ArrowUp"){if(M_===-1)O0.current=n,M_=t_.length-1;else if(M_>0)M_-=1;$0.current=M_,a_(t_[M_]||"")}else{if(M_===-1)return;if(M_<t_.length-1)M_+=1,$0.current=M_,a_(t_[M_]||"");else $0.current=-1,a_(O0.current||""),O0.current=""}requestAnimationFrame(()=>{let N0=T_.current;if(!N0)return;let i0=N0.value.length;N0.selectionStart=i0,N0.selectionEnd=i0});return}}if(B.key==="Enter"&&!B.shiftKey&&(B.ctrlKey||B.metaKey)){B.preventDefault();let S=T_.current?.value??(j?k_:Z_);if(j){if(S.trim())N?.(S.trim(),Z)}else G2(S,"steer");return}if(B.key==="Enter"&&!B.shiftKey){B.preventDefault();let S=T_.current?.value??(j?k_:Z_);if(j){if(S.trim())N?.(S.trim(),Z)}else G2(S)}},h0=(B)=>{let S=Array.from(B||[]).filter((n)=>n&&n.type&&n.type.startsWith("image/"));if(!S.length)return;u_((n)=>[...n,...S])},e0=(B)=>{h0(B.target.files),B.target.value=""},f0=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),M.current+=1,l_(!0)},_2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),M.current=Math.max(0,M.current-1),M.current===0)l_(!1)},x2=(B)=>{if(j)return;if(B.preventDefault(),B.stopPropagation(),B.dataTransfer)B.dataTransfer.dropEffect="copy";l_(!0)},S2=(B)=>{if(j)return;B.preventDefault(),B.stopPropagation(),M.current=0,l_(!1),h0(B.dataTransfer?.files||[])},$2=(B)=>{if(j)return;let S=B.clipboardData?.items;if(!S||!S.length)return;let n=[];for(let Y_ of S){if(Y_.kind!=="file")continue;let P_=Y_.getAsFile?.();if(P_)n.push(P_)}if(n.length>0)B.preventDefault(),h0(n)},U2=(B)=>{u_((S)=>S.filter((n,Y_)=>Y_!==B))},r2=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((B)=>{let{latitude:S,longitude:n,accuracy:Y_}=B.coords,P_=`${S.toFixed(5)}, ${n.toFixed(5)}`,t_=Number.isFinite(Y_)?` ±${Math.round(Y_)}m`:"",M_=`https://maps.google.com/?q=${S},${n}`,N0=`Location: ${P_}${t_} ${M_}`;P2(N0)},(B)=>{let S=B?.message||"Unable to retrieve location.";alert(`Location error: ${S}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!x_)return;G0(!0),j$(J_).then((B)=>{let S=Array.isArray(B?.models)?B.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];D0(S),H0(B)}).catch((B)=>{console.warn("Failed to load model list:",B),D0([])}).finally(()=>{G0(!1)})},[x_,f]),u(()=>{if(j)_0(!1),b_(!1),L_([]),n_(!1),F_([])},[j]),u(()=>{if(!x_)return;let B=(S)=>{let n=d_.current,Y_=k0.current,P_=S.target;if(n&&n.contains(P_))return;if(Y_&&Y_.contains(P_))return;_0(!1)};return document.addEventListener("pointerdown",B),()=>document.removeEventListener("pointerdown",B)},[x_]),u(()=>{let B=()=>{let Y_=B_.current?.clientWidth||0;o_((P_)=>P_===Y_?P_:Y_)};B();let S=B_.current,n=null;if(S&&typeof ResizeObserver<"u")n=new ResizeObserver(()=>B()),n.observe(S);if(typeof window<"u")window.addEventListener("resize",B);return()=>{if(n?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",B)}},[j,f,j0.length,F?.percent]);let b0=(B)=>{let S=B.target.value;A2(B.target),a_(S)};return u(()=>{requestAnimationFrame(()=>A2())},[Z_,k_,j]),u(()=>{if(j)return;m2(Z_)},[X_,J_,Z_,j]),U`
        <div class="compose-box">
            ${!j&&Q_.length>0&&U`
                <div class="compose-queue-stack">
                    ${Q_.map((B)=>{let S=typeof B?.content==="string"?B.content:"";if(!S.trim())return null;return U`
                            <div class="compose-queue-stack-item" role="listitem">
                                <span class="compose-queue-stack-content" title=${S}>
                                    ${S}
                                </span>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>O2(B)}
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
                onDragOver=${x2}
                onDragLeave=${_2}
                onDrop=${S2}
            >
                <div class="compose-input-main">
                    ${(L.length>0||E_.length>0||W.length>0)&&U`
                        <div class="compose-file-refs">
                            ${W.map((B)=>{return U`
                                    <${Q2}
                                        key=${"msg-"+B}
                                        prefix="compose"
                                        label=${"msg:"+B}
                                        title=${"Message reference: "+B}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(B)}
                                    />
                                `})}
                            ${L.map((B)=>{let S=B.split("/").pop()||B;return U`
                                    <${Q2}
                                        prefix="compose"
                                        label=${S}
                                        title=${B}
                                        onClick=${()=>i?.(B)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>O?.(B)}
                                    />
                                `})}
                            ${E_.map((B,S)=>{let n=B?.name||`image-${S+1}`;return U`
                                    <${Q2}
                                        key=${n+S}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove image"
                                        onRemove=${()=>U2(S)}
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
                        ref=${T_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?k_:Z_}
                        onInput=${b0}
                        onKeyDown=${C2}
                        onPaste=${$2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Y0&&v_.length>0&&U`
                        <div class="slash-autocomplete" ref=${c_}>
                            ${v_.map((B,S)=>U`
                                <div
                                    key=${B.chat_jid||B.agent_name}
                                    class=${`slash-item${S===C_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),q2(B)}}
                                    onMouseEnter=${()=>S_(S)}
                                >
                                    <span class="slash-name">@${B.agent_name}</span>
                                    <span class="slash-desc">${B.display_name||B.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${y_&&p.length>0&&U`
                        <div class="slash-autocomplete" ref=${M0}>
                            ${p.map((B,S)=>U`
                                <div
                                    key=${B.name}
                                    class=${`slash-item${S===V_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),y2(B)}}
                                    onMouseEnter=${()=>W_(S)}
                                >
                                    <span class="slash-name">${B.name}</span>
                                    <span class="slash-desc">${B.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${x_&&!j&&U`
                        <div class="compose-model-popup" ref=${d_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${F0&&U`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!F0&&Q0.length===0&&U`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!F0&&Q0.map((B)=>U`
                                    <button
                                        key=${B}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${f===B?" active":""}`}
                                        onClick=${()=>{X$(B)}}
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
                                    onClick=${()=>{Y2()}}
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
                                    title=${b2}
                                    aria-label="Open model picker"
                                    onClick=${U0}
                                    disabled=${e_}
                                >
                                    ${e_?"Switching…":Z0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!e_&&z2&&U`
                                        <span class="compose-model-usage-hint" title=${b2}>
                                            ${z2}
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
                                    onClick=${()=>q2(B)}
                                    title=${`${B.display_name||B.chat_jid||"Active agent"} — insert @${B.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${B.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&U`
                        <${O5} usage=${F} />
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
                        onClick=${j?X:z}
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
                    ${t0&&!j&&U`
                        <button
                            class="icon-btn location-btn"
                            onClick=${r2}
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
                    ${o2&&!j&&U`
                        <button
                            class=${`icon-btn notification-btn${w2?" active":""}`}
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
                                disabled=${L.includes(l)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${e0} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{G2()}}
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
    `}var q4="piclaw_theme",R3="piclaw_tint",T$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},L5={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},W4={default:{label:"Default",mode:"auto",light:T$,dark:L5},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},X5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],I$={theme:"default",tint:null},U4="light",u3=!1;function B4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function i2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function V5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),X=parseInt(N[3],10);if(![K,z,X].every((O)=>Number.isFinite(O)))return null;let L=`#${[K,z,X].map((O)=>O.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:X,hex:L}}function Q4(_){return i2(_)||V5(_)}function K$(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function v3(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function F4(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g3(_){return W4[_]||W4.default}function W5(_){return _.mode==="auto"?F4():_.mode}function q5(_,$){let j=g3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||T$}function U5(_,$,j){let Z=Q4($);if(!Z)return _;let N=i2(_.bgPrimary),K=i2(_.bgSecondary),z=i2(_.bgHover),X=i2(_.borderColor);if(!N||!K||!z||!X)return _;let O=i2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:K$(N,Z,0.08),bgSecondary:K$(K,Z,0.12),bgHover:K$(z,Z,0.16),borderColor:K$(X,Z,0.08),accent:Z.hex,accentHover:O?K$(Z,O,0.18):Z.hex}}function B5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=Q4(Z),K=N?v3(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?v3(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?v3(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":X,"--danger-color":_.danger||T$.danger,"--success-color":_.success||T$.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(L).forEach(([O,q])=>{if(q)j.style.setProperty(O,q)})}function Q5(){if(typeof document>"u")return;let _=document.documentElement;X5.forEach(($)=>_.style.removeProperty($))}function S$(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function F5(_,$){if(typeof document>"u")return;let j=S$("theme-color");if(j&&_)j.setAttribute("content",_);let Z=S$("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=S$("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let K=S$("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function H5(){if(typeof window>"u")return;let _={...I$,mode:U4};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=B4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=g3(j),K=W5(N),z=q5(j,K);I$={theme:j,tint:Z},U4=K;let X=document.documentElement;X.dataset.theme=K,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=K;let L=z;if(j==="default"&&Z)L=U5(z,Z,K);if(j==="default"&&!Z)Q5();else B5(L,K);if(F5(L.bgPrimary,K),H5(),$.persist!==!1)if(r_(q4,j),Z)r_(R3,Z);else r_(R3,"")}function f$(){if(g3(I$.theme).mode!=="auto")return;c3(I$,{persist:!1})}function H4(){if(typeof window>"u")return()=>{};let _=B4(r0(q4)||"default"),$=r0(R3),j=$?$.trim():null;if(c3({theme:_,tint:j},{persist:!1}),window.matchMedia&&!u3){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",f$);else if(Z.addListener)Z.addListener(f$);return u3=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",f$);else if(Z.removeListener)Z.removeListener(f$);u3=!1}}return()=>{}}function J4(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;c3({theme:j||"default",tint:Z},{persist:!0})}function y4(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return F4()}var m$=/#(\w+)/g,J5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),y5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),D5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),E5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},k5=new Set(["http:","https:","mailto:",""]);function D4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function T2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!k5.has(Z.protocol))return null;return Z.href}catch{return null}}function E4(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let X=z.tagName.toLowerCase();if(!y5.has(X)){let O=z.parentNode;if(!O)continue;while(z.firstChild)O.insertBefore(z.firstChild,z);O.removeChild(z);continue}let L=E5[X]||new Set;for(let O of Array.from(z.attributes)){let q=O.name.toLowerCase(),W=O.value;if(q.startsWith("on")){z.removeAttribute(O.name);continue}if(q.startsWith("data-")||q.startsWith("aria-"))continue;if(L.has(q)||D5.has(q)){if(q==="href"){let H=T2(W);if(!H)z.removeAttribute(O.name);else if(z.setAttribute(O.name,H),X==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(q==="src"){let H=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(W):W,w=T2(H,{allowDataImage:X==="img"});if(!w)z.removeAttribute(O.name);else z.setAttribute(O.name,w)}continue}z.removeAttribute(O.name)}}return j.body.innerHTML}function k4(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function u$(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=k4(j);if(N===j)break;j=N}return j}function w5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let X of j){if(!K&&X.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),K=!1,z=[];continue}if(K)z.push(X);else N.push(X)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function b5(_){if(!_)return _;return u$(_,5)}function A5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function P5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function M5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=b5(K);return`<div class="mermaid-container" data-mermaid="${A5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function w4(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function b4(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,L=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!L||!J5.has(L))return $;if(L==="br")return N?"":"<br>";if(N)return`</${L}>`;return`<${L}>`})}function A4(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function P4(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function C5(_){if(!window.katex)return _;let $=(z)=>k4(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let X=[],L=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(O)=>{let q=X.length;return X.push(O),`@@CODE_BLOCK_${q}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(O)=>{let q=X.length;return X.push(O),`@@CODE_INLINE_${q}@@`}),{html:L,blocks:X}},Z=(z,X)=>{if(!X.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,O)=>{let q=Number(O);return X[q]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,X,L)=>{try{let O=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${O}`}catch(O){return`<span class="math-error" title="${D4(O.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,X,L)=>{if(/\s$/.test(L))return z;try{let O=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${O}`}catch(O){return`${X}<span class="math-error" title="${D4(O.message)}">$${L}$</span>`}}),Z(K,N.blocks)}function x5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(m$.lastIndex=0,!m$.test(z))continue;m$.lastIndex=0;let X=K.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=z.split(m$);if(L.length<=1)continue;let O=$.createDocumentFragment();L.forEach((q,W)=>{if(W%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",q),H.textContent=`#${q}`,O.appendChild(H)}else O.appendChild($.createTextNode(q))}),K.parentNode?.replaceChild(O,K)}return $.body.innerHTML}function S5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function v0(_,$,j={}){if(!_)return"";let Z=S5(_),{text:N,blocks:K}=w5(Z),z=u$(N,2),L=w4(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),O=b4(L),q=window.marked?marked.parse(O,{headerIds:!1,mangle:!1}):O.replace(/\n/g,"<br>");return q=A4(q),q=P4(q),q=C5(q),q=x5(q),q=M5(q,K),q=E4(q,j),q}function v$(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=u$($,2),N=w4(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=b4(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=A4(z),z=P4(z),z=E4(z),z}async function F2(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=y4()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let X=z.dataset.mermaid,L=P5(X||""),O=u$(L,2),q=await $(O,{...N,transparent:!0});z.innerHTML=q,z.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,z.innerHTML="",z.appendChild(L),z.removeAttribute("data-mermaid")}}function M4(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function C4(_){return String(_||"").trim()||"web:default"}function x4(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function S4(_){if(!_)return!1;return _.status!=="running"}function f4(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function T4({session:_,onClose:$,onInject:j,onRetry:Z}){let N=y(null),K=y(null),z=_?.thinking?v$(_.thinking):"",X=_?.answer?v0(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(N.current&&z)F2(N.current).catch(()=>{})},[z]),u(()=>{if(K.current&&X)F2(K.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",O=Boolean(String(_.answer||"").trim()),q=Boolean(String(_.thinking||"").trim()),W=x4(_),H=S4(_),w=!L&&O,f=L?"Thinking…":_.status==="error"?"Error":"Done";return U`
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
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
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
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${H&&U`
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
    `}var I4="PiClaw";function p3(_,$){let j=_||"PiClaw",Z=j.charAt(0).toUpperCase(),N=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=Z.charCodeAt(0)%N.length,z=N[K],X=j.trim().toLowerCase(),L=typeof $==="string"?$.trim():"",q=(L?L:null)||(X==="PiClaw".toLowerCase()||X==="pi"?"/static/icon-192.png":null);return{letter:Z,color:z,image:q}}function m4(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function u4(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function v4(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",X=K?.dataset?.tint||"",L=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(L&&(X||z&&z!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function f5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function R$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function T5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function R4(_,$=Date.now()){let j=f5(_);if(j===null)return null;return T5(Math.max(0,$-j))}function g4({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:X,onPanelToggle:L}){let W=(p)=>{if(!p)return{text:"",totalLines:0,fullText:""};if(typeof p==="string"){let y_=p,b_=y_?y_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:y_,totalLines:b_,fullText:y_}}let L_=p.text||"",V_=p.fullText||p.full_text||L_,W_=Number.isFinite(p.totalLines)?p.totalLines:V_?V_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:L_,totalLines:W_,fullText:V_}},H=160,w=(p)=>{if(!p)return 1;return Math.max(1,Math.ceil(p.length/160))},f=(p,L_,V_)=>{let W_=(p||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!W_)return{text:"",omitted:0,totalLines:Number.isFinite(V_)?V_:0,visibleLines:0};let y_=W_.split(`
`),b_=y_.length>L_?y_.slice(0,L_).join(`
`):W_,v_=Number.isFinite(V_)?V_:y_.reduce((S_,Y0)=>S_+w(Y0),0),F_=b_?b_.split(`
`).reduce((S_,Y0)=>S_+w(Y0),0):0,C_=Math.max(v_-F_,0);return{text:b_,omitted:C_,totalLines:v_,visibleLines:F_}},T=W(j),v=W(Z),x=W($),F=Boolean(T.text)||T.totalLines>0,A=Boolean(v.text)||v.totalLines>0,C=Boolean(x.fullText?.trim()||x.text?.trim());if(!_&&!C&&!F&&!A&&!N&&!K)return null;let[c,a]=I(new Set),[t,l]=I(()=>Date.now()),N_=(p)=>a((L_)=>{let V_=new Set(L_),W_=!V_.has(p);if(W_)V_.add(p);else V_.delete(p);if(typeof L==="function")L(p,W_);return V_});u(()=>{a(new Set)},[z]);let i=R$(_);u(()=>{if(!i)return;l(Date.now());let p=setInterval(()=>l(Date.now()),1000);return()=>clearInterval(p)},[i,_?.started_at,_?.startedAt]);let Q_=_?.turn_id||z,U_=v4(Q_),r=X?"turn-dot turn-dot-queued":"turn-dot",__=(p)=>p,K_=Boolean(_?.last_activity||_?.lastActivity),j_=(p)=>p==="warning"?"#f59e0b":p==="error"?"var(--danger-color)":p==="success"?"var(--success-color)":U_,G_=K?.kind||"info",X_=j_(G_),J_=j_(_?.kind||(i?"warning":"info")),Z_="",D_=_?.title,k_=_?.status;if(_?.type==="plan")Z_=D_?`Planning: ${D_}`:"Planning...";else if(_?.type==="tool_call")Z_=D_?`Running: ${D_}`:"Running tool...";else if(_?.type==="tool_status")Z_=D_?`${D_}: ${k_||"Working..."}`:k_||"Working...";else if(_?.type==="error")Z_=D_||"Agent error";else Z_=D_||k_||"Working...";if(K_)Z_="Last activity just now";let s_=({panelTitle:p,text:L_,fullText:V_,totalLines:W_,maxLines:y_,titleClass:b_,panelKey:v_})=>{let F_=c.has(v_),C_=V_||L_||"",S_=typeof y_==="number",Y0=F_&&S_,n_=S_?f(C_,y_,W_):{text:C_||"",omitted:0,totalLines:Number.isFinite(W_)?W_:0};if(!C_&&!(Number.isFinite(n_.totalLines)&&n_.totalLines>0))return null;let e_=`agent-thinking-body${S_?" agent-thinking-body-collapsible":""}`,B0=S_?`--agent-thinking-collapsed-lines: ${y_};`:"";return U`
            <div
                class="agent-thinking"
                data-expanded=${F_?"true":"false"}
                data-collapsible=${S_?"true":"false"}
                style=${U_?`--turn-color: ${U_};`:""}
            >
                <div class="agent-thinking-title ${b_||""}">
                    ${U_&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${p}
                    ${Y0&&U`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${p} panel`}
                            onClick=${()=>N_(v_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${e_}
                    style=${B0}
                    dangerouslySetInnerHTML=${{__html:v$(C_)}}
                />
                ${!F_&&n_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>N_(v_)}>
                        ▸ ${n_.omitted} more lines
                    </button>
                `}
                ${F_&&n_.omitted>0&&U`
                    <button class="agent-thinking-truncation" onClick=${()=>N_(v_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},E_=N?.tool_call?.title,u_=E_?`Awaiting approval: ${E_}`:"Awaiting approval",w_=i?R4(_,t):null,l_=(p,L_,V_=null)=>U`
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
            ${K&&l_(K,X_)}
            ${_?.type==="intent"&&l_(_,J_,w_)}
            ${N&&U`
                <div class="agent-status agent-status-request" aria-live="polite" style=${U_?`--turn-color: ${U_};`:""}>
                    <span class=${r} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${u_}</span>
                </div>
            `}
            ${F&&s_({panelTitle:__("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${A&&s_({panelTitle:__("Thoughts"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${C&&s_({panelTitle:__("Draft"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&U`
                <div class=${`agent-status${K_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${U_?`--turn-color: ${U_};`:""}>
                    ${U_&&U`<span class=${r} aria-hidden="true"></span>`}
                    ${_?.type==="error"?U`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!K_&&U`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${Z_}</span>
                </div>
            `}
        </div>
    `}function c4({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},O=L.command||L.commands&&L.commands[0]||null,q=L.diff||null,W=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,f=(Array.isArray(Z?.locations)?Z.locations:[]).map((A)=>A?.path).filter((A)=>Boolean(A)),T=Array.from(new Set([W,...f].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(A)=>{try{await A$(j,A,K||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},x=async()=>{try{await D3(z,`Auto-approved: ${z}`),await A$(j,"approved",K||null),$()}catch(A){console.error("Failed to add to whitelist:",A)}},F=N&&N.length>0;return U`
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
                ${(H||O||q||T.length>0)&&U`
                    <div class="agent-request-body">
                        ${H&&U`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${T.length>0&&U`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${T.map((A,C)=>U`<li key=${C}>${A}</li>`)}
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
                    ${F?N.map((A)=>U`
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
                        <button class="agent-request-btn always-allow" onClick=${x}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function p4({status:_}){if(_==="connected")return null;return U`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function h4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let L=$.toLocaleDateString(void 0,{weekday:"short"}),O=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${O}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${X}`}function z$(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function s0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function I2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var I5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),m5=new Set(["text/markdown"]);function Y$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(I5.has($)||$.startsWith("text/"))return"text";return"unsupported"}function i4(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return m5.has($)}function l4(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function u5(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function v5(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function n4(_){return u5(_)||v5(_)}function g$(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function R5(_,$){let j=Math.max(g$(_),g$($)),Z=Math.min(g$(_),g$($));return(j+0.05)/(Z+0.05)}function g5(_,$,j="#ffffff"){let Z=n4(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let X=n4(z);if(!X)continue;let L=R5(Z,X);if(L>K)N=z,K=L}return N}function h3(){let _=getComputedStyle(document.documentElement),$=(f,T)=>{for(let v of f){let x=_.getPropertyValue(v).trim();if(x)return x}return T},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),O=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),q=$(["--danger-color","--color-error"],"#f4212e"),W=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),w=g5(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:X,good:L,warning:O,attention:q,border:W,fontFamily:H,buttonTextColor:w}}function o4(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:X,border:L,fontFamily:O}=h3();return{fontFamily:O,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var c5=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),d4=!1,c$=null,r4=!1;function i3(_){_.querySelector(".adaptive-card-notice")?.remove()}function p5(_,$,j="error"){i3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function h5(_,$=(j)=>v0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function i5(_=($)=>v0($,null)){return($,j)=>{try{let Z=h5($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function l5(_){if(r4||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=i5(),r4=!0}async function n5(){if(d4)return;if(c$)return c$;return c$=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{d4=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),c$}function o5(){return globalThis.AdaptiveCards}function d5(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function r5(_){return c5.has(_)}function n3(_){if(!Array.isArray(_))return[];return _.filter(d5)}function s5(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function l3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${l3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function a5(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l3($);return typeof $==="string"?$:String($)}function t5(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=a5(z.type,j[z.id],z);for(let[X,L]of Object.entries(z))if(Array.isArray(L)||L&&typeof L==="object")z[X]=Z(L);return z};return Z(_)}function e5(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function _9(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function $9(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=_9(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function s4(_,$,j){if(!r5($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await n5()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=o5();l5(Z);let N=new Z.AdaptiveCard,K=h3();N.hostConfig=new Z.HostConfig(o4());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:t5($.payload,z);N.parse(X),N.onExecuteAction=(q)=>{let W=s5(q);if(j?.onAction)i3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(W)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let w=H instanceof Error?H.message:String(H||"Action failed.");p5(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",W)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let O=$9($);if(O){_.classList.add("adaptive-card-finished");let q=document.createElement("div");q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let W=document.createElement("span");if(W.className="adaptive-card-status-label",W.textContent=O.label,q.appendChild(W),O.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=O.detail,q.appendChild(H)}_.appendChild(q)}if(i3(_),_.appendChild(L),O)e5(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function j9(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function o3(_){if(!Array.isArray(_))return[];return _.filter(j9)}function a4(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:l2(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function t4(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:l2(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):l2(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function Z9(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?s0($):null},{label:"Added",value:_?.created_at?I2(_.created_at):null}].filter((Z)=>Z.value)}function e4({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=i_(()=>Y$($?.content_type),[$?.content_type]),K=l4(N),z=i_(()=>i4($?.content_type),[$?.content_type]),[X,L]=I(N==="text"||N==="pdf"),[O,q]=I(""),[W,H]=I(null),[w,f]=I(null),T=y(null),v=i_(()=>Z9($),[$]),x=i_(()=>{if(!z||!O)return"";return v0(O)},[z,O]);return u(()=>{let F=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[j]),u(()=>{if(!T.current||!x)return;F2(T.current);return},[x]),u(()=>{let F=!1,A=null;async function C(){if(N==="text"){L(!0),f(null);try{let c=await b3(_);if(!F)q(c)}catch{if(!F)f("Failed to load text preview.")}finally{if(!F)L(!1)}return}if(N==="pdf"){L(!0),f(null);try{let c=await A3(_);if(A=URL.createObjectURL(c),!F)H(A)}catch{if(!F)f("Failed to load PDF preview.")}finally{if(!F)L(!1)}return}L(!1)}return C(),()=>{if(F=!0,A)URL.revokeObjectURL(A)}},[_,N]),U`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${Z2(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(F)=>F.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&U`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&w&&U`<div class="attachment-preview-state">${w}</div>`}
                    ${!X&&!w&&N==="image"&&U`
                        <img class="attachment-preview-image" src=${Z2(_)} alt=${Z} />
                    `}
                    ${!X&&!w&&N==="pdf"&&W&&U`
                        <iframe class="attachment-preview-frame" src=${W} title=${Z}></iframe>
                    `}
                    ${!X&&!w&&N==="text"&&z&&U`
                        <div
                            ref=${T}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:x}}
                        />
                    `}
                    ${!X&&!w&&N==="text"&&!z&&U`
                        <pre class="attachment-preview-text">${O}</pre>
                    `}
                    ${!X&&!w&&N==="unsupported"&&U`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((F)=>U`
                        <div class="attachment-preview-meta-item" key=${F.label}>
                            <span class="attachment-preview-meta-label">${F.label}</span>
                            <span class="attachment-preview-meta-value">${F.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function _8({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),U`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function N9({mediaId:_,onPreview:$}){let[j,Z]=I(null);if(u(()=>{c2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?s0(K):"",L=Y$(j.content_type)==="unsupported"?"Details":"Preview";return U`
        <div class="file-attachment" onClick=${(O)=>O.stopPropagation()}>
            <a href=${Z2(_)} download=${N} class="file-attachment-main">
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
                ${L}
            </button>
        </div>
    `}function K9({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=I(null);u(()=>{if(!Number.isFinite(j))return;c2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?Z2(j):null,L=Y$(Z?.content_type)==="unsupported"?"Details":"Preview";return U`
        <span class="attachment-pill" title=${K}>
            ${z?U`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(O)=>O.stopPropagation()}>
                        <${Q2}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:U`
                    <${Q2}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&U`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(O)=>{O.preventDefault(),O.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function p$({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?I2(Z):null;return U`
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
    `}function z9({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?s0(_.size):"",N=_.mime_type||"",K=G9(N),z=T2(_.uri);return U`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(X)=>X.stopPropagation()}>
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
    `}function Y9({block:_}){let[$,j]=I(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return U`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&U`
                ${N&&U`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&U`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&U`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(W)=>W.charCodeAt(0))],{type:z||"application/octet-stream"}),O=URL.createObjectURL(L),q=document.createElement("a");q.href=O,q.download=Z.split("/").pop()||"resource",q.click(),URL.revokeObjectURL(O)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function G9(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function O9({preview:_}){let $=T2(_.url),j=T2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return U`
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
    `}function L9(_,$){return typeof _==="string"?_:""}var X9=1800,V9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,W9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,q9=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function U9(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function B9(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let X=z||"idle";if(K.dataset.copyState=X,X==="success")K.innerHTML=W9,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(X==="error")K.innerHTML=q9,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=V9,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),z.appendChild(X);let L=async(O)=>{O.preventDefault(),O.stopPropagation();let W=K.querySelector("code")?.textContent||"",H=await U9(W);N(X,H?"success":"error");let w=j.get(X);if(w)clearTimeout(w);let f=setTimeout(()=>{N(X,"idle"),j.delete(X)},X9);j.set(X,f)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let O=j.get(X);if(O)clearTimeout(O);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function Q9(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Files:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O))N.push(O.replace(/^\s*-\s+/,"").trim());else if(!O.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function F9(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Referenced messages:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O)){let W=O.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(W)N.push(W[1])}else if(!O.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function H9(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let O=0;O<j.length;O+=1)if(j[O].trim()==="Images:"&&j[O+1]&&/^\s*-\s+/.test(j[O+1])){Z=O;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let O=j[K];if(/^\s*-\s+/.test(O)){let q=O.replace(/^\s*-\s+/,"").trim(),W=q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(W){let H=W[1],w=(W[2]||"").trim()||H;N.push({id:H,label:w,raw:q})}else N.push({id:null,label:q,raw:q})}else if(!O.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function J9(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function y9(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(J9).sort((q,W)=>W.length-q.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),X=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),L=[],O;while(O=X.nextNode())L.push(O);for(let q of L){let W=q.nodeValue;if(!W||!N.test(W)){N.lastIndex=0;continue}N.lastIndex=0;let H=q.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let w=W.split(N).filter((T)=>T!=="");if(w.length===0)continue;let f=z.createDocumentFragment();for(let T of w)if(K.test(T)){let v=z.createElement("mark");v.className="search-highlight-term",v.textContent=T,f.appendChild(v)}else f.appendChild(z.createTextNode(T));q.parentNode.replaceChild(f,q)}return z.body.innerHTML}function $8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:X,userAvatarUrl:L,userAvatarBackground:O,onDelete:q,isThreadReply:W,isThreadPrev:H,isThreadNext:w,isRemoving:f,highlightQuery:T,onFileRef:v}){let[x,F]=I(null),A=y(null),C=_.data,c=C.type==="agent_response",a=X||"You",t=c?K||I4:a,l=c?p3(K,z):p3(a,L),N_=typeof O==="string"?O.trim().toLowerCase():"",i=!c&&l.image&&(N_==="clear"||N_==="transparent"),Q_=c&&Boolean(l.image),U_=`background-color: ${i||Q_?"transparent":l.color}`,r=C.content_meta,__=Boolean(r?.truncated),K_=Boolean(r?.preview),j_=__&&!K_,G_=__?{originalLength:Number.isFinite(r?.original_length)?r.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,X_=C.content_blocks||[],J_=C.media_ids||[],Z_=L9(C.content,C.link_previews),{content:D_,fileRefs:k_}=Q9(Z_),{content:s_,messageRefs:E_}=F9(D_),{content:u_,attachments:w_}=H9(s_);Z_=u_;let l_=n3(X_),p=o3(X_),L_=l_.length===1&&typeof l_[0]?.fallback_text==="string"?l_[0].fallback_text.trim():"",V_=p.length===1?a4(p[0]).trim():"",W_=Boolean(L_)&&Z_?.trim()===L_||Boolean(V_)&&Z_?.trim()===V_,y_=Boolean(Z_)&&!j_&&!W_,b_=typeof T==="string"?T.trim():"",v_=i_(()=>{if(!Z_||W_)return"";let M=v0(Z_,j);return b_?y9(M,b_):M},[Z_,W_,b_]),F_=(M,e)=>{M.stopPropagation(),F(Z2(e))},[C_,S_]=I(null),Y0=(M)=>{S_(M)},n_=(M)=>{M.stopPropagation(),q?.(_)},e_=(M,e)=>{let A_=new Set;if(!M||e.length===0)return{content:M,usedIds:A_};return{content:M.replace(/attachment:([^\s)"']+)/g,(w0,a0,$0,O0)=>{let V0=a0.replace(/^\/+/,""),C0=e.find((g0)=>g0.name&&g0.name.toLowerCase()===V0.toLowerCase()&&!A_.has(g0.id))||e.find((g0)=>!A_.has(g0.id));if(!C0)return w0;if(A_.add(C0.id),O0.slice(Math.max(0,$0-2),$0)==="](")return`/media/${C0.id}`;return C0.name||"attachment"}),usedIds:A_}},B0=[],x_=[],_0=[],Q0=[],D0=[],F0=[],G0=0;if(X_.length>0)X_.forEach((M)=>{if(M?.type==="text"&&M.annotations)F0.push(M.annotations);if(M?.type==="resource_link")Q0.push(M);else if(M?.type==="resource")D0.push(M);else if(M?.type==="file"){let e=J_[G0++];if(e)x_.push(e),_0.push({id:e,name:M?.name||M?.filename||M?.title})}else if(M?.type==="image"||!M?.type){let e=J_[G0++];if(e){let A_=typeof M?.mime_type==="string"?M.mime_type:void 0;B0.push({id:e,annotations:M?.annotations,mimeType:A_}),_0.push({id:e,name:M?.name||M?.filename||M?.title})}}});else if(J_.length>0)J_.forEach((M)=>{B0.push({id:M,annotations:null}),_0.push({id:M,name:null})});if(w_.length>0)w_.forEach((M)=>{if(!M?.id)return;let e=_0.find((A_)=>String(A_.id)===String(M.id));if(e&&!e.name)e.name=M.label});let{content:E0,usedIds:o_}=e_(Z_,_0);Z_=E0;let T_=B0.filter(({id:M})=>!o_.has(M)),M0=x_.filter((M)=>!o_.has(M)),c_=w_.length>0?w_.map((M,e)=>({id:M.id||`attachment-${e+1}`,label:M.label||`attachment-${e+1}`})):_0.map((M,e)=>({id:M.id,label:M.name||`attachment-${e+1}`})),d_=i_(()=>n3(X_),[X_]),k0=i_(()=>o3(X_),[X_]);u(()=>{if(!A.current)return;return F2(A.current),B9(A.current)},[v_]);let B_=y(null);return u(()=>{if(!B_.current||d_.length===0)return;let M=B_.current;M.innerHTML="";for(let e of d_){let A_=document.createElement("div");M.appendChild(A_),s4(A_,e,{onAction:async(R_)=>{if(R_.type==="Action.OpenUrl"){let w0=T2(R_.url||"");if(!w0)throw Error("Invalid URL");window.open(w0,"_blank","noopener,noreferrer");return}if(R_.type==="Action.Submit"){await y3({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:R_.type,title:R_.title||"",data:R_.data}});return}console.warn("[post] unsupported adaptive card action:",R_.type,R_)}}).catch((R_)=>{console.error("[post] adaptive card render error:",R_),A_.textContent=e.fallback_text||"Card failed to render."})}},[d_,C.thread_id,_.id]),U`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${W?"thread-reply":""} ${H?"thread-prev":""} ${w?"thread-next":""} ${f?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${l.image?"has-image":""}" style=${U_}>
                ${l.image?U`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${n_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(M)=>{if(M.preventDefault(),M.stopPropagation(),Z)Z(_.id)}}>${h4(_.timestamp)}</a>
                </div>
                ${j_&&G_&&U`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${z$(G_.originalLength)} chars
                            ${G_.maxLength?U` • Display limit: ${z$(G_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&G_&&U`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${z$(G_.maxLength)} of ${z$(G_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(k_.length>0||E_.length>0||c_.length>0)&&U`
                    <div class="post-file-refs">
                        ${E_.map((M)=>{let e=(A_)=>{if(A_.preventDefault(),A_.stopPropagation(),N)N(M,_.chat_jid||null);else{let R_=document.getElementById("post-"+M);if(R_)R_.scrollIntoView({behavior:"smooth",block:"center"}),R_.classList.add("post-highlight"),setTimeout(()=>R_.classList.remove("post-highlight"),2000)}};return U`
                                <a href=${`#msg-${M}`} class="post-msg-pill-link" onClick=${e}>
                                    <${Q2}
                                        prefix="post"
                                        label=${"msg:"+M}
                                        title=${"Message "+M}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${k_.map((M)=>{let e=M.split("/").pop()||M;return U`
                                <${Q2}
                                    prefix="post"
                                    label=${e}
                                    title=${M}
                                    onClick=${()=>v?.(M)}
                                />
                            `})}
                        ${c_.map((M)=>U`
                            <${K9}
                                key=${M.id}
                                attachment=${M}
                                onPreview=${Y0}
                            />
                        `)}
                    </div>
                `}
                ${y_&&U`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:v_}}
                        onClick=${(M)=>{if(M.target.classList.contains("hashtag")){M.preventDefault(),M.stopPropagation();let e=M.target.dataset.hashtag;if(e)j?.(e)}else if(M.target.tagName==="IMG")M.preventDefault(),M.stopPropagation(),F(M.target.src)}}
                    />
                `}
                ${d_.length>0&&U`
                    <div ref=${B_} class="post-adaptive-cards" />
                `}
                ${k0.length>0&&U`
                    <div class="post-adaptive-card-submissions">
                        ${k0.map((M,e)=>{let A_=t4(M);return U`
                                <div key=${`${M.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${A_.title}</span>
                                    </div>
                                    ${A_.summary&&U`
                                        <div class="adaptive-card-submission-summary">${A_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${I2(A_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${F0.length>0&&U`
                    ${F0.map((M,e)=>U`
                        <${p$} key=${e} annotations=${M} />
                    `)}
                `}
                ${T_.length>0&&U`
                    <div class="media-preview">
                        ${T_.map(({id:M,mimeType:e})=>{let R_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?Z2(M):w3(M);return U`
                                <img 
                                    key=${M} 
                                    src=${R_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(w0)=>F_(w0,M)}
                                />
                            `})}
                    </div>
                `}
                ${T_.length>0&&U`
                    ${T_.map(({annotations:M},e)=>U`
                        ${M&&U`<${p$} key=${e} annotations=${M} />`}
                    `)}
                `}
                ${M0.length>0&&U`
                    <div class="file-attachments">
                        ${M0.map((M)=>U`
                            <${N9} key=${M} mediaId=${M} onPreview=${Y0} />
                        `)}
                    </div>
                `}
                ${Q0.length>0&&U`
                    <div class="resource-links">
                        ${Q0.map((M,e)=>U`
                            <div key=${e}>
                                <${z9} block=${M} />
                                <${p$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${D0.length>0&&U`
                    <div class="resource-embeds">
                        ${D0.map((M,e)=>U`
                            <div key=${e}>
                                <${Y9} block=${M} />
                                <${p$} annotations=${M.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&U`
                    <div class="link-previews">
                        ${C.link_previews.map((M,e)=>U`
                            <${O9} key=${e} preview=${M} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${x&&U`<${_8} src=${x} onClose=${()=>F(null)} />`}
        ${C_&&U`
            <${e4}
                mediaId=${C_.mediaId}
                info=${C_.info}
                onClose=${()=>S_(null)}
            />
        `}
    `}function j8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:X,emptyMessage:L,timelineRef:O,agents:q,user:W,onDeletePost:H,reverse:w=!0,removingPostIds:f,searchQuery:T}){let[v,x]=I(!1),F=y(null),A=typeof IntersectionObserver<"u",C=P(async()=>{if(!j||!$||v)return;x(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{x(!1)}},[$,v,j]),c=P((r)=>{let{scrollTop:__,scrollHeight:K_,clientHeight:j_}=r.target,G_=w?K_-j_-__:__,X_=Math.max(300,j_);if(G_<X_)C()},[w,C]);u(()=>{if(!A)return;let r=F.current,__=O?.current;if(!r||!__)return;let K_=300,j_=new IntersectionObserver((G_)=>{for(let X_ of G_){if(!X_.isIntersecting)continue;C()}},{root:__,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return j_.observe(r),()=>j_.disconnect()},[A,$,j,O,C]);let a=y(C);if(a.current=C,u(()=>{if(A)return;if(!O?.current)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,j_=w?__-K_-r:r,G_=Math.max(300,K_);if(j_<G_)a.current?.()},[A,_,$,w,O]),u(()=>{if(!O?.current)return;if(!$||v)return;let{scrollTop:r,scrollHeight:__,clientHeight:K_}=O.current,j_=w?__-K_-r:r,G_=Math.max(300,K_);if(__<=K_+1||j_<G_)a.current?.()},[_,$,v,w,O]),!_)return U`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return U`
            <div class="timeline" ref=${O}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((r,__)=>r.id-__.id),l=(r)=>{let __=r?.data?.thread_id;if(__===null||__===void 0||__==="")return null;let K_=Number(__);return Number.isFinite(K_)?K_:null},N_=new Map;for(let r=0;r<t.length;r+=1){let __=t[r],K_=Number(__?.id),j_=l(__);if(j_!==null){let G_=N_.get(j_)||{anchorIndex:-1,replyIndexes:[]};G_.replyIndexes.push(r),N_.set(j_,G_)}else if(Number.isFinite(K_)){let G_=N_.get(K_)||{anchorIndex:-1,replyIndexes:[]};G_.anchorIndex=r,N_.set(K_,G_)}}let i=new Map;for(let[r,__]of N_.entries()){let K_=new Set;if(__.anchorIndex>=0)K_.add(__.anchorIndex);for(let j_ of __.replyIndexes)K_.add(j_);i.set(r,Array.from(K_).sort((j_,G_)=>j_-G_))}let Q_=t.map((r,__)=>{let K_=l(r);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let j_=i.get(K_);if(!j_||j_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let G_=j_.indexOf(__);if(G_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:G_>0,hasThreadNext:G_<j_.length-1}}),U_=U`<div class="timeline-sentinel" ref=${F}></div>`;return U`
        <div class="timeline ${w?"reverse":"normal"}" ref=${O} onScroll=${c}>
            <div class="timeline-content">
                ${w?U_:null}
                ${t.map((r,__)=>{let K_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),j_=f?.has?.(r.id),G_=Q_[__]||{};return U`
                    <${$8}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${K_}
                        isThreadPrev=${G_.hasThreadPrev}
                        isThreadNext=${G_.hasThreadNext}
                        isRemoving=${j_}
                        highlightQuery=${T}
                        agentName=${m4(r.data?.agent_id,q||{})}
                        agentAvatarUrl=${u4(r.data?.agent_id,q||{})}
                        userName=${W?.name||W?.user_name}
                        userAvatarUrl=${W?.avatar_url||W?.avatarUrl||W?.avatar}
                        userAvatarBackground=${W?.avatar_background||W?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${X}
                        onDelete=${H}
                    />
                `})}
                ${w?null:U_}
            </div>
        </div>
    `}class Z8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var X0=new Z8;var h$=null,d3=null;function N8(){if(d3)return Promise.resolve(d3);if(!h$)h$=import("/static/dist/editor.bundle.js").then((_)=>{return d3=_,_}).catch((_)=>{throw h$=null,_});return h$}class K8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await N8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var r3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new K8(_,$)}};function s3(){N8().catch(()=>{})}var D9={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},E9={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i$=null,a3=null;function k9(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function w9(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!k9(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function b9(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!i$)i$=w9(()=>Promise.resolve($.init?.())).catch((j)=>{throw i$=null,j});return await i$,$}async function A9(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!a3)a3=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await a3}async function P9(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function M9(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function C9(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H2(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function x9(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function z8(){let _=C9(),$=_?E9:D9,j=H2("--bg-primary",_?"#000000":"#ffffff"),Z=H2("--text-primary",_?"#e7e9ea":"#0f1419"),N=H2("--text-secondary",_?"#71767b":"#536471"),K=H2("--accent-color","#1d9bf0"),z=H2("--danger-color",_?"#ff7b72":"#cf222e"),X=H2("--success-color",_?"#7ee787":"#1a7f37"),L=H2("--bg-hover",_?"#1d1f23":"#e8ebed"),O=H2("--border-color",_?"#2f3336":"#eff3f4"),q=H2("--accent-soft-strong",x9(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:q,selectionForeground:Z,black:L,red:z,green:X,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:O}}class Y8{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.resize()})}async bootstrapGhostty(){try{let _=await b9();if(await A9(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:z8()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=z8(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>this.scheduleResize());j.observe(this.container),j.observe(this.bodyEl),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await P9();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(M9($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new Y8(_,$)}};function k2(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function S9(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),O=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,q=[];for(let H of O.split("/")){if(!H||H===".")continue;if(H===".."){if(q.length>0)q.pop();continue}q.push(H)}let W=q.join("/");return`${M$(W)}${K}${z}`}function G$(_){return _?.preview||null}function f9(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function T9(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function I9(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${k2($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${k2(s0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${k2(I2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${k2(T9($))}</span>`),Z.push(`<span><strong>extension:</strong> ${k2(f9(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${k2(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function m9(_){let $=G$(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=I9(_,$);if($.kind==="image"){let Z=$.url||($.path?M$($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${k2(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=v0($.text||"",null,{rewriteImageSrc:(N)=>S9(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${k2($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class e3{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=m9(this.context)}getContent(){let _=G$(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=G$(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=G$(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e3(_,$)}},$1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return G$(_)||_?.path?1:!1},mount(_,$){return new e3(_,$)}};class G8{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var m_=new G8;var l$="workspaceExplorerScale",u9=["compact","default","comfortable"],v9=new Set(u9),R9={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function O8(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return v9.has(j)?j:$}function j1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function g9(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function c9(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function Z1(_={}){let $=g9(_),j=_.stored?O8(_.stored,$):$;return c9(j,_)}function L8(_){return R9[O8(_)]}var p9=60000,q8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function U8(_,$,j,Z=0,N=[]){if(!j&&q8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)U8(K,$,j,Z+1,N);return N}function X8(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&q8(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function Y1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,K=!j||j.length!==Z.length,z=Z.map((X)=>{let L=Y1(N.get(X.path),X);if(L!==N.get(X.path))K=!0;return L});return K?{...$,children:z}:_}function K1(_,$,j){if(!_)return _;if(_.path===$)return Y1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=K1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var B8=4,N1=14,h9=8,i9=16;function Q8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=Q8(Z);return _.__bytes=j,j}function F8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=B8)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")K.push({kind:"dir",node:X,size:L});else K.push({kind:"file",name:X.name,path:X.path,size:L})}K.sort((X,L)=>L.size-X.size);let z=K;if(K.length>N1){let X=K.slice(0,N1-1),L=K.slice(N1-1),O=L.reduce((q,W)=>q+W.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:O}),z=X}return Z.children=z.map((X)=>{if(X.kind==="dir")return F8(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function V8(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function H8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function n$(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function G1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,X=K-N>z?N+z:K,L=n$(_,$,Z,N),O=n$(_,$,Z,X),q=n$(_,$,j,X),W=n$(_,$,j,N),H=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`L ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,"Z"].join(" ")}var J8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function y8(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(X,L,O,q)=>{let W=Array.isArray(X?.children)?X.children:[];if(!W.length)return;let H=Math.max(0,Number(X.size)||0);if(H<=0)return;let w=O-L,f=L;W.forEach((T,v)=>{let x=Math.max(0,Number(T.size)||0);if(x<=0)return;let F=x/H,A=f,C=v===W.length-1?O:f+w*F;if(f=C,C-A<0.003)return;let c=J8[q];if(c){let a=H8(A,q,j);if(Z.push({key:T.path,path:T.path,label:T.name,size:x,color:a,depth:q,startAngle:A,endAngle:C,innerRadius:c[0],outerRadius:c[1],d:G1(120,120,c[0],c[1],A,C)}),q===1)N.push({key:T.path,name:T.name,size:x,pct:K>0?x/K*100:0,color:a})}if(q<B8)z(T,A,C,q+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function z1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=z1(Z,$);if(N)return N}return null}function D8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=J8[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,X=H8(K,1,Z),O=`${$||"."}/[files]`;return{segments:[{key:O,path:O,label:_,size:j,color:X,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:G1(120,120,N[0],N[1],K,z)}],legend:[{key:O,name:_,size:j,pct:100,color:X}]}}function W8(_,$=!1,j=!1){if(!_)return null;let Z=Q8(_),N=F8(_,0),K=N.size||Z,{segments:z,legend:X}=y8(N,K,j);if(!z.length&&K>0){let L=D8("[files]",N.path,K,j);z=L.segments,X=L.legend}return{root:N,totalSize:K,segments:z,legend:X,truncated:$,isDarkTheme:j}}function l9({payload:_}){if(!_)return null;let[$,j]=I(null),[Z,N]=I(_?.root?.path||"."),[K,z]=I(()=>[_?.root?.path||"."]),[X,L]=I(!1);u(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let O=i_(()=>{return z1(_.root,Z)||_.root},[_?.root,Z]),q=O?.size||_.totalSize||0,{segments:W,legend:H}=i_(()=>{let i=y8(O,q,_.isDarkTheme);if(i.segments.length>0)return i;if(q<=0)return i;let Q_=O?.children?.length?"Total":"[files]";return D8(Q_,O?.path||_?.root?.path||".",q,_.isDarkTheme)},[O,q,_.isDarkTheme,_?.root?.path]),[w,f]=I(W),T=y(new Map),v=y(0);u(()=>{let i=T.current,Q_=new Map(W.map((K_)=>[K_.key,K_])),U_=performance.now(),r=220,__=(K_)=>{let j_=Math.min(1,(K_-U_)/220),G_=j_*(2-j_),X_=W.map((J_)=>{let D_=i.get(J_.key)||{startAngle:J_.startAngle,endAngle:J_.startAngle,innerRadius:J_.innerRadius,outerRadius:J_.innerRadius},k_=(l_,p)=>l_+(p-l_)*G_,s_=k_(D_.startAngle,J_.startAngle),E_=k_(D_.endAngle,J_.endAngle),u_=k_(D_.innerRadius,J_.innerRadius),w_=k_(D_.outerRadius,J_.outerRadius);return{...J_,d:G1(120,120,u_,w_,s_,E_)}});if(f(X_),j_<1)v.current=requestAnimationFrame(__)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame(__),T.current=Q_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[W]);let x=w.length?w:W,F=q>0?s0(q):"0 B",A=O?.name||"",c=(A&&A!=="."?A:"Total")||"Total",a=F,t=K.length>1,l=(i)=>{if(!i?.path)return;let Q_=z1(_.root,i.path);if(!Q_||!Array.isArray(Q_.children)||Q_.children.length===0)return;z((U_)=>[...U_,Q_.path]),N(Q_.path),j(null)},N_=()=>{if(!t)return;z((i)=>{let Q_=i.slice(0,-1);return N(Q_[Q_.length-1]||_?.root?.path||"."),Q_}),j(null)};return U`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${O?.path||_?.root?.path||"."}`}
                data-segments=${x.length}
                data-base-size=${q}>
                ${x.map((i)=>U`
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
                        <title>${i.label} — ${s0(i.size)}</title>
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
            ${H.length>0&&U`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>U`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${s0(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&U`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function n9({mediaId:_}){let[$,j]=I(null);if(u(()=>{if(!_)return;c2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?s0($.metadata.size):"";return U`
        <a href=${Z2(_)} download=${Z} class="file-attachment"
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
    `}function E8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,K]=I(null),[z,X]=I(new Set(["."])),[L,O]=I(null),[q,W]=I(null),[H,w]=I(""),[f,T]=I(null),[v,x]=I(null),[F,A]=I(!0),[C,c]=I(!1),[a,t]=I(null),[l,N_]=I(()=>p2("workspaceShowHidden",!1)),[i,Q_]=I(!1),[U_,r]=I(null),[__,K_]=I(null),[j_,G_]=I(null),[X_,J_]=I(!1),[Z_,D_]=I(null),[k_,s_]=I(()=>V8()),[E_,u_]=I(()=>Z1({stored:r0(l$),...j1()})),w_=y(z),l_=y(""),p=y(null),L_=y(0),V_=y(new Set),W_=y(null),y_=y(new Map),b_=y(_),v_=y(Z),F_=y(null),C_=y(null),S_=y(null),Y0=y(null),n_=y(null),e_=y(null),B0=y("."),x_=y(null),_0=y({path:null,dragging:!1,startX:0,startY:0}),Q0=y({path:null,dragging:!1,startX:0,startY:0}),D0=y({path:null,timer:0}),F0=y(!1),G0=y(0),E0=y(new Map),o_=y(null),T_=y(null),M0=y(null),c_=y(null),d_=y(l),k0=y($),B_=y(j??$),M=y(0),e=y(j_),A_=y(i),R_=y(U_),w0=y(null),a0=y({x:0,y:0}),$0=y(0),O0=y(null),V0=y(L),t0=y(q),C0=y(null),R0=y(null),g0=y(f);b_.current=_,v_.current=Z,u(()=>{w_.current=z},[z]),u(()=>{d_.current=l},[l]),u(()=>{k0.current=$},[$]),u(()=>{B_.current=j??$},[j,$]),u(()=>{e.current=j_},[j_]),u(()=>{if(typeof window>"u")return;let V=()=>{u_(Z1({stored:r0(l$),...j1()}))};V();let Q=()=>V(),k=()=>V(),E=(g)=>{if(!g||g.key===null||g.key===l$)V()};window.addEventListener("resize",Q),window.addEventListener("focus",k),window.addEventListener("storage",E);let m=window.matchMedia?.("(pointer: coarse)"),d=window.matchMedia?.("(hover: none)"),s=(g,z_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",z_);else if(g.addListener)g.addListener(z_)},o=(g,z_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",z_);else if(g.removeListener)g.removeListener(z_)};return s(m,Q),s(d,Q),()=>{window.removeEventListener("resize",Q),window.removeEventListener("focus",k),window.removeEventListener("storage",E),o(m,Q),o(d,Q)}},[]),u(()=>{let V=(Q)=>{let k=Q?.detail?.path;if(!k)return;let E=k.split("/"),m=[];for(let d=1;d<E.length;d++)m.push(E.slice(0,d).join("/"));if(m.length)X((d)=>{let s=new Set(d);s.add(".");for(let o of m)s.add(o);return s});O(k),requestAnimationFrame(()=>{let d=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(d)d.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",V),()=>window.removeEventListener("workspace-reveal-path",V)},[]),u(()=>{A_.current=i},[i]),u(()=>{R_.current=U_},[U_]),u(()=>{V0.current=L},[L]),u(()=>{t0.current=q},[q]),u(()=>{g0.current=f},[f]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let V=()=>s_(V8());V();let Q=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>V();if(Q?.addEventListener)Q.addEventListener("change",k);else if(Q?.addListener)Q.addListener(k);let E=typeof MutationObserver<"u"?new MutationObserver(()=>V()):null;if(E?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)E?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(Q?.removeEventListener)Q.removeEventListener("change",k);else if(Q?.removeListener)Q.removeListener(k);E?.disconnect()}},[]),u(()=>{if(!q)return;let V=n_.current;if(!V)return;let Q=requestAnimationFrame(()=>{try{V.focus(),V.select()}catch{}});return()=>cancelAnimationFrame(Q)},[q]);let o2=async(V)=>{c(!0),T(null),x(null);try{let Q=await P3(V,20000);T(Q)}catch(Q){T({error:Q.message||"Failed to load preview"})}finally{c(!1)}};F_.current=o2;let w2=async()=>{if(!k0.current)return;try{let V=await Z$("",1,d_.current),Q=X8(V.root,w_.current,d_.current);if(Q===l_.current){A(!1);return}if(l_.current=Q,p.current=V.root,!L_.current)L_.current=requestAnimationFrame(()=>{L_.current=0,K((k)=>Y1(k,p.current)),A(!1)})}catch(V){t(V.message||"Failed to load workspace"),A(!1)}},c0=async(V)=>{if(!V)return;if(V_.current.has(V))return;V_.current.add(V);try{let Q=await Z$(V,1,d_.current);K((k)=>K1(k,V,Q.root))}catch(Q){t(Q.message||"Failed to load workspace")}finally{V_.current.delete(V)}};C_.current=c0;let j0=P(()=>{let V=L;if(!V)return".";let Q=y_.current?.get(V);if(Q&&Q.type==="dir")return Q.path;if(V==="."||!V.includes("/"))return".";let k=V.split("/");return k.pop(),k.join("/")||"."},[L]),K2=P((V)=>{let Q=V?.closest?.(".workspace-row");if(!Q)return null;let k=Q.dataset.path,E=Q.dataset.type;if(!k)return null;if(E==="dir")return k;if(k.includes("/")){let m=k.split("/");return m.pop(),m.join("/")||"."}return"."},[]),L0=P((V)=>{return K2(V?.target||null)},[K2]),Z0=P((V)=>{e.current=V,G_(V)},[]),I_=P(()=>{let V=D0.current;if(V?.timer)clearTimeout(V.timer);D0.current={path:null,timer:0}},[]),I0=P((V)=>{if(!V||V==="."){I_();return}let Q=y_.current?.get(V);if(!Q||Q.type!=="dir"){I_();return}if(w_.current?.has(V)){I_();return}if(D0.current?.path===V)return;I_();let k=setTimeout(()=>{D0.current={path:null,timer:0},C_.current?.(V),X((E)=>{let m=new Set(E);return m.add(V),m})},600);D0.current={path:V,timer:k}},[I_]),p0=P((V,Q)=>{if(a0.current={x:V,y:Q},$0.current)return;$0.current=requestAnimationFrame(()=>{$0.current=0;let k=w0.current;if(!k)return;let E=a0.current;k.style.transform=`translate(${E.x+12}px, ${E.y+12}px)`})},[]),z2=P((V)=>{if(!V)return;let k=(y_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!k)return;K_({path:V,label:k})},[]),J2=P(()=>{if(K_(null),$0.current)cancelAnimationFrame($0.current),$0.current=0;if(w0.current)w0.current.style.transform="translate(-9999px, -9999px)"},[]),b2=P((V)=>{if(!V)return".";let Q=y_.current?.get(V);if(Q&&Q.type==="dir")return Q.path;if(V==="."||!V.includes("/"))return".";let k=V.split("/");return k.pop(),k.join("/")||"."},[]),H0=P(()=>{W(null),w("")},[]),A2=P((V)=>{if(!V)return;let k=(y_.current?.get(V)?.name||V.split("/").pop()||V).trim();if(!k||V===".")return;W(V),w(k)},[]),d2=P(async()=>{let V=t0.current;if(!V)return;let Q=(H||"").trim();if(!Q){H0();return}let k=y_.current?.get(V),E=(k?.name||V.split("/").pop()||V).trim();if(Q===E){H0();return}try{let d=(await x3(V,Q))?.path||V,s=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(H0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:V,newPath:d,type:k?.type||"file"}})),k?.type==="dir")X((o)=>{let g=new Set;for(let z_ of o)if(z_===V)g.add(d);else if(z_.startsWith(`${V}/`))g.add(`${d}${z_.slice(V.length)}`);else g.add(z_);return g});if(O(d),k?.type==="dir")T(null),c(!1),x(null);else F_.current?.(d);C_.current?.(s)}catch(m){t(m?.message||"Failed to rename file")}},[H0,H]),y2=P(async(V)=>{let E=V||".";for(let m=0;m<50;m+=1){let s=`untitled${m===0?"":`-${m}`}.md`;try{let g=(await C3(E,s,""))?.path||(E==="."?s:`${E}/${s}`);if(E&&E!==".")X((z_)=>new Set([...z_,E]));O(g),t(null),C_.current?.(E),F_.current?.(g);return}catch(o){if(o?.status===409||o?.code==="file_exists")continue;t(o?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),m2=P((V)=>{if(V?.stopPropagation?.(),X_)return;let Q=b2(V0.current);y2(Q)},[X_,b2,y2]);u(()=>{if(typeof window>"u")return;let V=(Q)=>{let k=Q?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;K((o)=>{let g=o;for(let z_ of k){if(!z_?.root)continue;if(!g||z_.path==="."||!z_.path)g=z_.root;else g=K1(g,z_.path,z_.root)}if(g)l_.current=X8(g,w_.current,d_.current);return A(!1),g});let E=V0.current;if(Boolean(E)&&k.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return E===g||E.startsWith(`${g}/`)||g.startsWith(`${E}/`)}))E0.current.clear();if(!E||!g0.current)return;let d=y_.current?.get(E);if(d&&d.type==="dir")return;if(k.some((o)=>{let g=o?.path||"";if(!g||g===".")return!0;return E===g||E.startsWith(`${g}/`)}))F_.current?.(E)};return window.addEventListener("workspace-update",V),()=>window.removeEventListener("workspace-update",V)},[]),W_.current=w2;let q2=y(()=>{if(typeof window>"u")return;let V=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),Q=B_.current??k0.current,k=document.visibilityState!=="hidden"&&(Q||V.matches&&k0.current);N$(k,d_.current).catch(()=>{})}).current,a_=y(0),P2=y(()=>{if(a_.current)clearTimeout(a_.current);a_.current=setTimeout(()=>{a_.current=0,q2()},250)}).current;u(()=>{if(k0.current)W_.current?.();P2()},[$,j]),u(()=>{W_.current(),q2();let V=setInterval(()=>W_.current(),p9),Q=h2("previewHeight",null),k=Number.isFinite(Q)?Math.min(Math.max(Q,80),600):280;if(G0.current=k,S_.current)S_.current.style.setProperty("--preview-height",`${k}px`);let E=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>P2();if(E.addEventListener)E.addEventListener("change",m);else if(E.addListener)E.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(V),L_.current)cancelAnimationFrame(L_.current),L_.current=0;if(E.removeEventListener)E.removeEventListener("change",m);else if(E.removeListener)E.removeListener(m);if(document.removeEventListener("visibilitychange",m),a_.current)clearTimeout(a_.current),a_.current=0;if(x_.current)clearTimeout(x_.current),x_.current=null;N$(!1,d_.current).catch(()=>{})}},[]);let x0=i_(()=>U8(N,z,l),[N,z,l]),S0=i_(()=>new Map(x0.map((V)=>[V.node.path,V.node])),[x0]),Y2=i_(()=>L8(E_),[E_]);y_.current=S0;let U0=(L?y_.current.get(L):null)?.type==="dir";u(()=>{if(!L||!U0){D_(null),o_.current=null,T_.current=null;return}let V=L,Q=`${l?"hidden":"visible"}:${L}`,k=E0.current,E=k.get(Q);if(E?.root){k.delete(Q),k.set(Q,E);let s=W8(E.root,Boolean(E.truncated),k_);if(s)o_.current=s,T_.current=L,D_({loading:!1,error:null,payload:s});return}let m=o_.current,d=T_.current;D_({loading:!0,error:null,payload:d===L?m:null}),Z$(L,h9,l).then((s)=>{if(V0.current!==V)return;let o={root:s?.root,truncated:Boolean(s?.truncated)};k.delete(Q),k.set(Q,o);while(k.size>i9){let z_=k.keys().next().value;if(!z_)break;k.delete(z_)}let g=W8(o.root,o.truncated,k_);o_.current=g,T_.current=L,D_({loading:!1,error:null,payload:g})}).catch((s)=>{if(V0.current!==V)return;D_({loading:!1,error:s?.message||"Failed to load folder size chart",payload:d===L?m:null})})},[L,U0,l,k_]);let M2=Boolean(f&&f.kind==="text"&&!U0&&(!f.size||f.size<=262144)),G2=M2?"Open in editor":f?.size>262144?"File too large to edit":"File is not editable";u(()=>{let V=M0.current;if(c_.current)c_.current.dispose(),c_.current=null;if(!V)return;if(V.innerHTML="",!L||U0||!f||f.error)return;let Q={path:L,content:typeof f.text==="string"?f.text:void 0,mtime:f.mtime,size:f.size,preview:f,mode:"view"},k=X0.resolve(Q)||X0.get("workspace-preview-default");if(!k)return;let E=k.mount(V,Q);return c_.current=E,()=>{if(c_.current===E)E.dispose(),c_.current=null;V.innerHTML=""}},[L,U0,f]);let O2=(V)=>{let Q=V?.target;if(Q instanceof Element)return Q;return Q?.parentElement||null},C2=(V)=>{return Boolean(V?.closest?.(".workspace-node-icon, .workspace-label-text"))},h0=y((V)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let k=O2(V)?.closest?.("[data-path]");if(!k)return;let E=k.dataset.path;if(k.dataset.type==="dir"||!E)return;if(t0.current===E)H0();v_.current?.(E)}).current,e0=y((V)=>{if(F0.current){F0.current=!1;return}let Q=O2(V),k=Q?.closest?.("[data-path]");if(Y0.current?.focus?.(),!k)return;let E=k.dataset.path,m=k.dataset.type,d=Boolean(Q?.closest?.(".workspace-caret")),s=Boolean(Q?.closest?.("button"))||Boolean(Q?.closest?.("a"))||Boolean(Q?.closest?.("input")),o=V0.current===E,g=t0.current;if(g){if(g===E)return;H0()}let z_=m==="file"&&C0.current===E&&!d&&!s;if(o&&!d&&!s&&E!=="."&&!z_){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,A2(E)},350);return}if(m==="dir"){if(C0.current=null,O(E),T(null),x(null),c(!1),!w_.current.has(E))C_.current?.(E);if(o&&!d)return;X((W0)=>{let A0=new Set(W0);if(A0.has(E))A0.delete(E);else A0.add(E);return A0})}else{C0.current=null,O(E);let y0=y_.current.get(E);if(y0)b_.current?.(y0.path,y0);F_.current?.(E)}}).current,f0=y(()=>{l_.current="",W_.current(),Array.from(w_.current||[]).filter((Q)=>Q&&Q!==".").forEach((Q)=>C_.current?.(Q))}).current,_2=y(()=>{C0.current=null,O(null),T(null),x(null),c(!1)}).current,x2=y(()=>{N_((V)=>{let Q=!V;if(typeof window<"u")r_("workspaceShowHidden",String(Q));return d_.current=Q,N$(!0,Q).catch(()=>{}),l_.current="",W_.current?.(),Array.from(w_.current||[]).filter((E)=>E&&E!==".").forEach((E)=>C_.current?.(E)),Q})}).current,S2=y((V)=>{if(O2(V)?.closest?.("[data-path]"))return;_2()}).current,$2=P(async(V)=>{if(!V)return;let Q=V.split("/").pop()||V;if(!window.confirm(`Delete "${Q}"? This cannot be undone.`))return;try{await f3(V);let E=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(V0.current===V)_2();C_.current?.(E),t(null)}catch(E){T((m)=>({...m||{},error:E.message||"Failed to delete file"}))}},[_2]),U2=P((V)=>{let Q=Y0.current;if(!Q||!V||typeof CSS>"u"||typeof CSS.escape!=="function")return;Q.querySelector(`[data-path="${CSS.escape(V)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),r2=P((V)=>{let Q=x0;if(!Q||Q.length===0)return;let k=L?Q.findIndex((E)=>E.node.path===L):-1;if(V.key==="ArrowDown"){V.preventDefault();let E=Math.min(k+1,Q.length-1),m=Q[E];if(!m)return;if(O(m.node.path),m.node.type!=="dir")b_.current?.(m.node.path,m.node),F_.current?.(m.node.path);else T(null),c(!1),x(null);U2(m.node.path);return}if(V.key==="ArrowUp"){V.preventDefault();let E=k<=0?0:k-1,m=Q[E];if(!m)return;if(O(m.node.path),m.node.type!=="dir")b_.current?.(m.node.path,m.node),F_.current?.(m.node.path);else T(null),c(!1),x(null);U2(m.node.path);return}if(V.key==="ArrowRight"&&k>=0){let E=Q[k];if(E?.node?.type==="dir"&&!z.has(E.node.path))V.preventDefault(),C_.current?.(E.node.path),X((m)=>new Set([...m,E.node.path]));return}if(V.key==="ArrowLeft"&&k>=0){let E=Q[k];if(E?.node?.type==="dir"&&z.has(E.node.path))V.preventDefault(),X((m)=>{let d=new Set(m);return d.delete(E.node.path),d});return}if(V.key==="Enter"&&k>=0){V.preventDefault();let E=Q[k];if(!E)return;let m=E.node.path;if(E.node.type==="dir"){if(!w_.current.has(m))C_.current?.(m);X((s)=>{let o=new Set(s);if(o.has(m))o.delete(m);else o.add(m);return o}),T(null),x(null),c(!1)}else b_.current?.(m,E.node),F_.current?.(m);return}if((V.key==="Delete"||V.key==="Backspace")&&k>=0){let E=Q[k];if(!E||E.node.type==="dir")return;V.preventDefault(),$2(E.node.path);return}if(V.key==="Escape")V.preventDefault(),_2()},[_2,$2,z,x0,U2,L]),b0=P((V)=>{let Q=O2(V),k=Q?.closest?.(".workspace-row");if(!k)return;let E=k.dataset.type,m=k.dataset.path;if(!m||m===".")return;if(t0.current===m)return;let d=V?.touches?.[0];if(!d)return;if(_0.current={path:C2(Q)?m:null,dragging:!1,startX:d.clientX,startY:d.clientY},E!=="file")return;if(x_.current)clearTimeout(x_.current);x_.current=setTimeout(()=>{if(x_.current=null,_0.current?.dragging)return;$2(m)},600)},[$2]),B=P(()=>{if(x_.current)clearTimeout(x_.current),x_.current=null;let V=_0.current;if(V?.dragging&&V.path){let Q=e.current||j0(),k=O0.current;if(typeof k==="function")k(V.path,Q)}_0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),Z0(null),I_(),J2()},[j0,J2,Z0,I_]),S=P((V)=>{let Q=_0.current,k=V?.touches?.[0];if(!k||!Q?.path){if(x_.current)clearTimeout(x_.current),x_.current=null;return}let E=Math.abs(k.clientX-Q.startX),m=Math.abs(k.clientY-Q.startY),d=E>8||m>8;if(d&&x_.current)clearTimeout(x_.current),x_.current=null;if(!Q.dragging&&d)Q.dragging=!0,Q_(!0),r("move"),z2(Q.path);if(Q.dragging){V.preventDefault(),p0(k.clientX,k.clientY);let s=document.elementFromPoint(k.clientX,k.clientY),o=K2(s)||j0();if(e.current!==o)Z0(o);I0(o)}},[K2,j0,z2,p0,Z0,I0]),n=y((V)=>{V.preventDefault();let Q=S_.current;if(!Q)return;let k=V.clientY,E=G0.current||280,m=V.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let d=k,s=(g)=>{d=g.clientY;let z_=Q.clientHeight-80,y0=Math.min(Math.max(E-(g.clientY-k),80),z_);Q.style.setProperty("--preview-height",`${y0}px`),G0.current=y0},o=()=>{let g=Q.clientHeight-80,z_=Math.min(Math.max(E-(d-k),80),g);G0.current=z_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("previewHeight",String(Math.round(z_))),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}).current,Y_=y((V)=>{V.preventDefault();let Q=S_.current;if(!Q)return;let k=V.touches[0];if(!k)return;let E=k.clientY,m=G0.current||280,d=V.currentTarget;d.classList.add("dragging"),document.body.style.userSelect="none";let s=(g)=>{let z_=g.touches[0];if(!z_)return;g.preventDefault();let y0=Q.clientHeight-80,W0=Math.min(Math.max(m-(z_.clientY-E),80),y0);Q.style.setProperty("--preview-height",`${W0}px`),G0.current=W0},o=()=>{d.classList.remove("dragging"),document.body.style.userSelect="",r_("previewHeight",String(Math.round(G0.current||m))),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",o),document.removeEventListener("touchcancel",o)};document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",o),document.addEventListener("touchcancel",o)}).current,P_=async()=>{if(!L)return;try{let V=await M3(L);if(V.media_id)x(V.media_id)}catch(V){T((Q)=>({...Q||{},error:V.message||"Failed to attach"}))}},t_=async()=>{if(!L||U0)return;await $2(L)},M_=(V)=>{return Array.from(V?.dataTransfer?.types||[]).includes("Files")},N0=P((V)=>{if(!M_(V))return;if(V.preventDefault(),M.current+=1,!A_.current)Q_(!0);r("upload");let Q=L0(V)||j0();Z0(Q),I0(Q)},[j0,L0,Z0,I0]),i0=P((V)=>{if(!M_(V))return;if(V.preventDefault(),V.dataTransfer)V.dataTransfer.dropEffect="copy";if(!A_.current)Q_(!0);if(R_.current!=="upload")r("upload");let Q=L0(V)||j0();if(e.current!==Q)Z0(Q);I0(Q)},[j0,L0,Z0,I0]),D2=P((V)=>{if(!M_(V))return;if(V.preventDefault(),M.current=Math.max(0,M.current-1),M.current===0)Q_(!1),r(null),Z0(null),I_()},[Z0,I_]),m0=P(async(V,Q=".")=>{let k=Array.from(V||[]);if(k.length===0)return;let E=Q&&Q!==""?Q:".",m=E!=="."?E:"workspace root";J_(!0);try{let d=null;for(let s of k)try{d=await P$(s,E)}catch(o){let g=o?.status,z_=o?.code;if(g===409||z_==="file_exists"){let y0=s?.name||"file";if(!window.confirm(`"${y0}" already exists in ${m}. Overwrite?`))continue;d=await P$(s,E,{overwrite:!0})}else throw o}if(d?.path)C0.current=d.path,O(d.path),F_.current?.(d.path);C_.current?.(E)}catch(d){t(d.message||"Failed to upload file")}finally{J_(!1)}},[]),L2=P(async(V,Q)=>{if(!V)return;let k=y_.current?.get(V);if(!k)return;let E=Q&&Q!==""?Q:".",m=V.includes("/")?V.split("/").slice(0,-1).join("/")||".":".";if(E===m)return;try{let s=(await S3(V,E))?.path||V;if(k.type==="dir")X((o)=>{let g=new Set;for(let z_ of o)if(z_===V)g.add(s);else if(z_.startsWith(`${V}/`))g.add(`${s}${z_.slice(V.length)}`);else g.add(z_);return g});if(O(s),k.type==="dir")T(null),c(!1),x(null);else F_.current?.(s);C_.current?.(m),C_.current?.(E)}catch(d){t(d?.message||"Failed to move entry")}},[]);O0.current=L2;let X2=P(async(V)=>{if(!M_(V))return;V.preventDefault(),M.current=0,Q_(!1),r(null),G_(null),I_();let Q=Array.from(V?.dataTransfer?.files||[]);if(Q.length===0)return;let k=e.current||L0(V)||j0();await m0(Q,k)},[j0,L0,m0]),l0=P((V)=>{if(V?.stopPropagation?.(),X_)return;let Q=V?.currentTarget?.dataset?.uploadTarget||".";B0.current=Q,e_.current?.click()},[X_]),V2=P(()=>{if(X_)return;let V=V0.current,Q=V?y_.current?.get(V):null;B0.current=Q?.type==="dir"?Q.path:".",e_.current?.click()},[X_]),J0=P((V)=>{if(!V||V.button!==0)return;let Q=V.currentTarget;if(!Q||!Q.dataset)return;let k=Q.dataset.path;if(!k||k===".")return;if(t0.current===k)return;let E=O2(V);if(E?.closest?.("button, a, input, .workspace-caret"))return;if(!C2(E))return;V.preventDefault(),Q0.current={path:k,dragging:!1,startX:V.clientX,startY:V.clientY};let m=(s)=>{let o=Q0.current;if(!o?.path)return;let g=Math.abs(s.clientX-o.startX),z_=Math.abs(s.clientY-o.startY),y0=g>4||z_>4;if(!o.dragging&&y0)o.dragging=!0,F0.current=!0,Q_(!0),r("move"),z2(o.path),p0(s.clientX,s.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(o.dragging){s.preventDefault(),p0(s.clientX,s.clientY);let W0=document.elementFromPoint(s.clientX,s.clientY),A0=K2(W0)||j0();if(e.current!==A0)Z0(A0);I0(A0)}},d=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",d);let s=Q0.current;if(s?.dragging&&s.path){let o=e.current||j0(),g=O0.current;if(typeof g==="function")g(s.path,o)}Q0.current={path:null,dragging:!1,startX:0,startY:0},M.current=0,Q_(!1),r(null),Z0(null),I_(),J2(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",d)},[K2,j0,z2,p0,J2,Z0,I0,I_]),f2=P(async(V)=>{let Q=Array.from(V?.target?.files||[]);if(Q.length===0)return;let k=B0.current||".";if(await m0(Q,k),B0.current=".",V?.target)V.target.value=""},[m0]);return U`
        <aside
            class=${`workspace-sidebar${i?" workspace-drop-active":""}`}
            data-workspace-scale=${E_}
            ref=${S_}
            onDragEnter=${N0}
            onDragOver=${i0}
            onDragLeave=${D2}
            onDrop=${X2}
        >
            <input type="file" multiple style="display:none" ref=${e_} onChange=${f2} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${m2} title="New file" disabled=${X_}>
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
                        onClick=${x2}
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
                ${F&&U`<div class="workspace-loading">Loading…</div>`}
                ${a&&U`<div class="workspace-error">${a}</div>`}
                ${N&&U`
                    <div
                        class="workspace-tree-list"
                        ref=${Y0}
                        tabIndex="0"
                        onClick=${e0}
                        onDblClick=${h0}
                        onKeyDown=${r2}
                        onTouchStart=${b0}
                        onTouchEnd=${B}
                        onTouchMove=${S}
                        onTouchCancel=${B}
                    >
                        ${x0.map(({node:V,depth:Q})=>{let k=V.type==="dir",E=V.path===L,m=V.path===q,d=k&&z.has(V.path),s=j_&&V.path===j_,o=Array.isArray(V.children)&&V.children.length>0?V.children.length:Number(V.child_count)||0;return U`
                                <div
                                    key=${V.path}
                                    class=${`workspace-row${E?" selected":""}${s?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+Q*Y2.indentPx}px`}}
                                    data-path=${V.path}
                                    data-type=${V.type}
                                    onMouseDown=${J0}
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
                                    ${m?U`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${n_}
                                                value=${H}
                                                onInput=${(g)=>w(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),d2();else if(g.key==="Escape")g.preventDefault(),H0()}}
                                                onBlur=${H0}
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
            ${L&&U`
                <div class="workspace-preview-splitter-h" onMouseDown=${n} onTouchStart=${Y_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${L}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${m2} title="New file" disabled=${X_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!U0&&U`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>M2&&v_.current?.(L,f)}
                                    title=${G2}
                                    disabled=${!M2}
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
                                    <button class="workspace-download" onClick=${V2}
                                        title="Upload files to this folder" disabled=${X_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${T3(L,l)}
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
                            <${l9} payload=${Z_.payload} />
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
                            <${n9} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${__&&U`
                <div class="workspace-drag-ghost" ref=${w0}>${__.label}</div>
            `}
        </aside>
    `}function k8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:X,previewTabs:L,onToggleDock:O,dockVisible:q}){let[W,H]=I(null),w=y(null);u(()=>{if(!W)return;let F=(A)=>{if(A.type==="keydown"&&A.key!=="Escape")return;H(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[W]),u(()=>{let F=(A)=>{if(A.ctrlKey&&A.key==="Tab"){if(A.preventDefault(),!_.length)return;let C=_.findIndex((c)=>c.id===$);if(A.shiftKey){let c=_[(C-1+_.length)%_.length];j?.(c.id)}else{let c=_[(C+1)%_.length];j?.(c.id)}return}if((A.ctrlKey||A.metaKey)&&A.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(A.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let f=P((F,A)=>{if(F.button===1){F.preventDefault(),Z?.(A);return}if(F.button===0)j?.(A)},[j,Z]),T=P((F,A)=>{F.preventDefault(),H({id:A,x:F.clientX,y:F.clientY})},[]),v=P((F)=>{F.preventDefault(),F.stopPropagation()},[]),x=P((F,A)=>{F.preventDefault(),F.stopPropagation(),Z?.(A)},[Z]);if(u(()=>{if(!$||!w.current)return;let F=w.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return U`
        <div class="tab-strip" ref=${w} role="tablist">
            ${_.map((F)=>U`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(A)=>f(A,F.id)}
                    onContextMenu=${(A)=>T(A,F.id)}
                >
                    ${F.pinned&&U`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${F.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${v}
                        onClick=${(A)=>x(A,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?U`<span class="tab-dirty-dot" aria-hidden="true"></span>`:U`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
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
                <button onClick=${()=>{Z?.(W.id),H(null)}}>Close</button>
                <button onClick=${()=>{N?.(W.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(W.id),H(null)}}>
                    ${_.find((F)=>F.id===W.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(W.id)&&U`
                    <hr />
                    <button onClick=${()=>{X(W.id),H(null)}}>
                        ${L?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
            </div>
        `}
    `}var o9=400,O1=60,w8=220,L1="mdPreviewHeight";function d9(){try{let _=localStorage.getItem(L1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=O1?$:w8}catch{return w8}}function b8({getContent:_,path:$,onClose:j}){let[Z,N]=I(""),[K,z]=I(d9),X=y(null),L=y(null),O=y(""),q=y(_);return q.current=_,u(()=>{let w=()=>{let T=q.current?.()||"";if(T===O.current)return;O.current=T;try{let v=v0(T,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let f=setInterval(w,o9);return()=>clearInterval(f)},[]),u(()=>{if(X.current&&Z)F2(X.current).catch(()=>{})},[Z]),U`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let f=w.clientY,T=L.current?.offsetHeight||K,v=L.current?.parentElement,x=v?v.offsetHeight*0.7:500,F=w.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=(c)=>{let a=Math.min(Math.max(T-(c.clientY-f),O1),x);z(a)},C=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(L1,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",C)}}
            onTouchStart=${(w)=>{w.preventDefault();let f=w.touches[0];if(!f)return;let T=f.clientY,v=L.current?.offsetHeight||K,x=L.current?.parentElement,F=x?x.offsetHeight*0.7:500,A=w.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let C=(a)=>{let t=a.touches[0];if(!t)return;a.preventDefault();let l=Math.min(Math.max(v-(t.clientY-T),O1),F);z(l)},c=()=>{A.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(L1,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",c),document.addEventListener("touchcancel",c)}}
        ></div>
        <div class="md-preview-panel" ref=${L} style=${{height:K+"px"}}>
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
                ref=${X}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function A8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=y(_);K.current=_;let z=y($);z.current=$;let X=y(j);X.current=j;let L=y(Z);L.current=Z,u(()=>{X.current();let O=new C$((W,H)=>K.current(W,H),(W)=>z.current(W),{chatJid:N});O.connect();let q=()=>{O.reconnectIfNeeded();let W=typeof document<"u"?document:null;if(!W||W.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",q),document.addEventListener("visibilitychange",q),()=>{window.removeEventListener("focus",q),document.removeEventListener("visibilitychange",q),O.disconnect()}},[N])}function P8(){let[_,$]=I(!1),[j,Z]=I("default"),N=y(!1);u(()=>{let L=p2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let O=await K();if(Z(O||"default"),O!=="granted"){N.current=!1,$(!1),r_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),r_("notificationsEnabled",String(L))},[K]),X=P((L,O)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let q=new Notification(L,{body:O});return q.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:X}}var O$=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function M8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=I(null),[K,z]=I(!1),X=y(!1),L=y(null),O=y(!1),q=y(null),W=y(null),H=y(0);u(()=>{X.current=K},[K]),u(()=>{W.current=Z},[Z]),u(()=>{H.current+=1,W.current=null,q.current=null,O.current=!1,X.current=!1,N(null),z(!1)},[j]);let w=P(async(v=null)=>{let x=H.current;try{if(v){let F=await W3(v,50,0,j);if(x!==H.current)return;N(F.posts),z(!1)}else{let F=await $$(10,null,j);if(x!==H.current)return;N(F.posts),z(F.has_more)}}catch(F){if(x!==H.current)return;console.error("Failed to load posts:",F)}},[j]),f=P(async()=>{let v=H.current;try{let x=await $$(10,null,j);if(v!==H.current)return;N((F)=>{if(!F||F.length===0)return x.posts;return O$([...x.posts,...F])}),z((F)=>F||x.has_more)}catch(x){if(v!==H.current)return;console.error("Failed to refresh timeline:",x)}},[j]),T=P(async(v={})=>{let x=H.current,F=W.current;if(!F||F.length===0)return;if(O.current)return;let{preserveScroll:A=!0,preserveMode:C="top",allowRepeat:c=!1}=v,a=(N_)=>{if(!A){N_();return}if(C==="top")$(N_);else _(N_)},l=F.slice().sort((N_,i)=>N_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!c&&q.current===l)return;O.current=!0,q.current=l;try{let N_=await $$(10,l,j);if(x!==H.current)return;if(N_.posts.length>0)a(()=>{N((i)=>O$([...N_.posts,...i||[]])),z(N_.has_more)});else z(!1)}catch(N_){if(x!==H.current)return;console.error("Failed to load more posts:",N_)}finally{if(x===H.current)O.current=!1}},[j,_,$]);return u(()=>{L.current=T},[T]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:X,loadPosts:w,refreshTimeline:f,loadMore:T,loadMoreRef:L,loadingMoreRef:O,lastBeforeIdRef:q}}function C8(){let[_,$]=I(null),[j,Z]=I({text:"",totalLines:0}),[N,K]=I(""),[z,X]=I({text:"",totalLines:0}),[L,O]=I(null),[q,W]=I(null),[H,w]=I(null),f=y(null),T=y(0),v=y(!1),x=y(""),F=y(""),A=y(null),C=y(null),c=y(null),a=y(null),t=y(!1),l=y(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:X,pendingRequest:L,setPendingRequest:O,currentTurnId:q,setCurrentTurnId:W,steerQueuedTurnId:H,setSteerQueuedTurnId:w,lastAgentEventRef:f,lastSilenceNoticeRef:T,isAgentRunningRef:v,draftBufferRef:x,thoughtBufferRef:F,pendingRequestRef:A,stalledPostIdRef:C,currentTurnIdRef:c,steerQueuedTurnIdRef:a,thoughtExpandedRef:t,draftExpandedRef:l}}function x8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=y((q)=>{q.preventDefault();let W=_.current;if(!W)return;let H=q.clientX,w=$.current||280,f=q.currentTarget;f.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=H,v=(F)=>{T=F.clientX;let A=Math.min(Math.max(w+(F.clientX-H),160),600);W.style.setProperty("--sidebar-width",`${A}px`),$.current=A},x=()=>{let F=Math.min(Math.max(w+(T-H),160),600);$.current=F,f.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",r_("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,K=y((q)=>{q.preventDefault();let W=_.current;if(!W)return;let H=q.touches[0];if(!H)return;let w=H.clientX,f=$.current||280,T=q.currentTarget;T.classList.add("dragging"),W.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),160),600);W.style.setProperty("--sidebar-width",`${C}px`),$.current=C},x=()=>{T.classList.remove("dragging"),W.classList.remove("sidebar-resizing"),document.body.style.userSelect="",r_("sidebarWidth",String(Math.round($.current||f))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,z=y((q)=>{q.preventDefault();let W=_.current;if(!W)return;let H=q.clientX,w=j.current||$.current||280,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let T=H,v=(F)=>{T=F.clientX;let A=Math.min(Math.max(w+(F.clientX-H),200),800);W.style.setProperty("--editor-width",`${A}px`),j.current=A},x=()=>{let F=Math.min(Math.max(w+(T-H),200),800);j.current=F,f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,X=y((q)=>{q.preventDefault();let W=_.current;if(!W)return;let H=q.touches[0];if(!H)return;let w=H.clientX,f=j.current||$.current||280,T=q.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(f+(A.clientX-w),200),800);W.style.setProperty("--editor-width",`${C}px`),j.current=C},x=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",r_("editorWidth",String(Math.round(j.current||f))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current,L=y((q)=>{q.preventDefault();let W=_.current;if(!W)return;let H=q.clientY,w=Z?.current||200,f=q.currentTarget;f.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let T=H,v=(F)=>{T=F.clientY;let A=Math.min(Math.max(w-(F.clientY-H),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${A}px`),Z)Z.current=A;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{let F=Math.min(Math.max(w-(T-H),100),window.innerHeight*0.5);if(Z)Z.current=F;f.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",r_("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}).current,O=y((q)=>{q.preventDefault();let W=_.current;if(!W)return;let H=q.touches[0];if(!H)return;let w=H.clientY,f=Z?.current||200,T=q.currentTarget;T.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let A=F.touches[0];if(!A)return;F.preventDefault();let C=Math.min(Math.max(f-(A.clientY-w),100),window.innerHeight*0.5);if(W.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},x=()=>{T.classList.remove("dragging"),document.body.style.userSelect="",r_("dockHeight",String(Math.round(Z?.current||f))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:O}}function S8({onTabClosed:_}={}){let $=y(_);$.current=_;let[j,Z]=I(()=>m_.getTabs()),[N,K]=I(()=>m_.getActiveId()),[z,X]=I(()=>m_.getTabs().length>0);u(()=>{return m_.onChange((C,c)=>{Z(C),K(c),X(C.length>0)})},[]);let[L,O]=I(()=>new Set),q=P((C)=>{O((c)=>{let a=new Set(c);if(a.has(C))a.delete(C);else a.add(C);return a})},[]),W=P((C)=>{O((c)=>{if(!c.has(C))return c;let a=new Set(c);return a.delete(C),a})},[]),H=P((C)=>{if(!C)return;let c={path:C,mode:"edit"};try{if(!X0.resolve(c)){if(!X0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(a){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,a)}m_.open(C)},[]),w=P(()=>{let C=m_.getActiveId();if(C){let c=m_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}m_.close(C),W(C),$.current?.(C)}},[W]),f=P((C)=>{let c=m_.get(C);if(c?.dirty){if(!window.confirm(`"${c.label}" has unsaved changes. Close anyway?`))return}m_.close(C),W(C),$.current?.(C)},[W]),T=P((C)=>{m_.activate(C)},[]),v=P((C)=>{let c=m_.getTabs().filter((l)=>l.id!==C&&!l.pinned),a=c.filter((l)=>l.dirty).length;if(a>0){if(!window.confirm(`${a} unsaved tab${a>1?"s":""} will be closed. Continue?`))return}let t=c.map((l)=>l.id);m_.closeOthers(C),t.forEach((l)=>{W(l),$.current?.(l)})},[W]),x=P(()=>{let C=m_.getTabs().filter((t)=>!t.pinned),c=C.filter((t)=>t.dirty).length;if(c>0){if(!window.confirm(`${c} unsaved tab${c>1?"s":""} will be closed. Continue?`))return}let a=C.map((t)=>t.id);m_.closeAll(),a.forEach((t)=>{W(t),$.current?.(t)})},[W]),F=P((C)=>{m_.togglePin(C)},[]),A=P(()=>{let C=m_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return u(()=>{let C=(c)=>{let{oldPath:a,newPath:t,type:l}=c.detail||{};if(!a||!t)return;if(l==="dir"){for(let N_ of m_.getTabs())if(N_.path===a||N_.path.startsWith(`${a}/`)){let i=`${t}${N_.path.slice(a.length)}`;m_.rename(N_.id,i)}}else m_.rename(a,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),u(()=>{let C=(c)=>{if(m_.hasUnsaved())c.preventDefault(),c.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:w,handleTabClose:f,handleTabActivate:T,handleTabCloseOthers:v,handleTabCloseAll:x,handleTabTogglePin:F,handleTabTogglePreview:q,revealInExplorer:A}}function X1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var V1=X1("warning",30000),f8=X1("finalize",120000),W1=X1("refresh",30000),T8=30000;function I8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function m8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function u8(_=30000){let[,$]=I(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function q1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function v8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function n2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function U1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function R8(_,$={}){if(n2($))return null;if(U1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:r9(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function g8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function c8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function p8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function h8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function L$(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function i8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function r9(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function B1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Q1(_){return String(_||"").trim()||"web:default"}function l8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function n8(_={}){return n2(_)&&U1(_)}function s9(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function a9(_={}){if(!n8(_))return null;let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j?.documentElement)return null;let Z=s9({window:$});if(Z&&Z>0)j.documentElement.style.setProperty("--app-height",`${Z}px`);try{if(typeof $.scrollTo==="function")$.scrollTo(0,0)}catch{}try{if(j.scrollingElement)j.scrollingElement.scrollTop=0,j.scrollingElement.scrollLeft=0;if(j.documentElement)j.documentElement.scrollTop=0,j.documentElement.scrollLeft=0;if(j.body)j.body.scrollTop=0,j.body.scrollLeft=0}catch{}return Z}function o8(_={}){if(!n8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let W of N)$.clearTimeout?.(W);N.clear()},z=()=>{Z=0,a9({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},L=()=>{X();for(let W of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),X()},W);if(H!=null)N.add(H)}},O=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},q=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",O),j.addEventListener("focusin",L,!0),q?.addEventListener?.("resize",L),q?.addEventListener?.("scroll",L),()=>{K(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",O),j.removeEventListener("focusin",L,!0),q?.removeEventListener?.("resize",L),q?.removeEventListener?.("scroll",L)}}function t9(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function N2(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:t9($,j)}var H1="piclaw_btw_session";function e9(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function _7(){let _=r0(H1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var d8=q3,r8=B3,$7=F3,s8=E3,a8=k3,t8=H3,F1=N2(d0,"getAgentContext",null),j7=N2(d0,"getAgentModels",{current:null,models:[]}),Z7=N2(d0,"getActiveChatAgents",{chats:[]}),e8=N2(d0,"getChatBranches",{chats:[]}),N7=N2(d0,"renameChatBranch",null),K7=N2(d0,"pruneChatBranch",null),z7=N2(d0,"getAgentQueueState",{count:0}),Y7=N2(d0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),G7=N2(d0,"removeAgentQueueItem",{removed:!1}),O7=N2(d0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});X0.register(r3);X0.register($1);X0.register(_1);s3();X0.register(t3);function L7({locationParams:_}){let $=i_(()=>{let G=_.get("chat_jid");return G&&G.trim()?G.trim():"web:default"},[_]),j=i_(()=>{let G=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),Z=i_(()=>{let G=(_.get("branch_loader")||"").trim().toLowerCase();return G==="1"||G==="true"||G==="yes"},[_]),N=i_(()=>{let G=_.get("branch_source_chat_jid");return G&&G.trim()?G.trim():$},[$,_]),[K,z]=I("disconnected"),[X,L]=I(()=>n2()),[O,q]=I(null),[W,H]=I(null),[w,f]=I(!1),[T,v]=I("current"),[x,F]=I([]),[A,C]=I([]),[c,a]=I(null),{agentStatus:t,setAgentStatus:l,agentDraft:N_,setAgentDraft:i,agentPlan:Q_,setAgentPlan:U_,agentThought:r,setAgentThought:__,pendingRequest:K_,setPendingRequest:j_,currentTurnId:G_,setCurrentTurnId:X_,steerQueuedTurnId:J_,setSteerQueuedTurnId:Z_,lastAgentEventRef:D_,lastSilenceNoticeRef:k_,isAgentRunningRef:s_,draftBufferRef:E_,thoughtBufferRef:u_,pendingRequestRef:w_,stalledPostIdRef:l_,currentTurnIdRef:p,steerQueuedTurnIdRef:L_,thoughtExpandedRef:V_,draftExpandedRef:W_}=C8(),[y_,b_]=I({}),[v_,F_]=I(null),[C_,S_]=I(null),[Y0,n_]=I(!1),[e_,B0]=I(null),[x_,_0]=I([]),[Q0,D0]=I([]),[F0,G0]=I(null),[E0,o_]=I([]),[T_,M0]=I(!1),[c_,d_]=I(()=>_7()),k0=i_(()=>x_.find((G)=>G?.chat_jid===$)||null,[x_,$]),B_=i_(()=>Q0.find((G)=>G?.chat_jid===$)||k0||null,[k0,Q0,$]),M=B_?.root_chat_jid||k0?.root_chat_jid||$,e=e9(T),[A_,R_]=I(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),w0=E0.length,a0=y(new Set),$0=y([]),O0=y(new Set),V0=y({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(E0.map((G)=>G.row_id)),$0.current=E0;let{notificationsEnabled:t0,notificationPermission:C0,toggleNotifications:R0,notify:g0}=P8(),[o2,w2]=I(()=>new Set),[c0,j0]=I(()=>p2("workspaceOpen",!0)),K2=y(null),{editorOpen:L0,tabStripTabs:Z0,tabStripActiveId:I_,previewTabs:I0,openEditor:p0,closeEditor:z2,handleTabClose:J2,handleTabActivate:b2,handleTabCloseOthers:H0,handleTabCloseAll:A2,handleTabTogglePin:d2,handleTabTogglePreview:y2,revealInExplorer:m2}=S8({onTabClosed:(G)=>K2.current?.(G)}),q2=y(null),a_=y(null),P2=y(null),x0=y(null),S0=X0.getDockPanes().length>0,[Y2,X$]=I(!1),U0=P(()=>X$((G)=>!G),[]),M2=!j&&(L0||S0&&Y2);u(()=>{let G=q2.current;if(!G)return;if(a_.current)a_.current.dispose(),a_.current=null;let Y=I_;if(!Y)return;let J={path:Y,mode:"edit"},b=X0.resolve(J)||X0.get("editor");if(!b){G.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let D=b.mount(G,J);a_.current=D,D.onDirtyChange?.(($_)=>{m_.setDirty(Y,$_)}),D.onSaveRequest?.(()=>{}),D.onClose?.(()=>{z2()});let h=m_.getViewState(Y);if(h&&typeof D.restoreViewState==="function")requestAnimationFrame(()=>D.restoreViewState(h));if(typeof D.onViewStateChange==="function")D.onViewStateChange(($_)=>{m_.saveViewState(Y,$_)});return requestAnimationFrame(()=>D.focus()),()=>{if(a_.current===D)D.dispose(),a_.current=null}},[I_,z2]),u(()=>{let G=P2.current;if(x0.current)x0.current.dispose(),x0.current=null;if(!G||!S0||!Y2)return;let Y=X0.getDockPanes()[0];if(!Y){G.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(G,{mode:"view"});return x0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(x0.current===J)J.dispose(),x0.current=null}},[S0,Y2]);let[G2,O2]=I({name:"You",avatar_url:null,avatar_background:null}),C2=y(!1),h0=y(!1),e0=y(null),f0=y($),_2=y(new Map),x2=y($),S2=y(0),$2=y(0),U2=y({}),r2=y({name:null,avatar_url:null}),b0=y({currentHashtag:null,searchQuery:null}),B=y(null),S=y(null),n=y(0),Y_=y(0),P_=y(0),t_=y(null),M_=y(null),N0=y(null),i0=y(null),D2=y(0),m0=y({title:null,avatarBase:null}),L2=y(null),X2=P(()=>{if(L2.current)clearTimeout(L2.current),L2.current=null;a(null)},[]);u8(30000),u(()=>{return H4()},[]),u(()=>{if(typeof window>"u")return;let G=()=>{L(n2())};G();let b=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].map((D)=>{try{return window.matchMedia(D)}catch{return null}}).filter(Boolean).map((D)=>{if(typeof D.addEventListener==="function")return D.addEventListener("change",G),()=>D.removeEventListener("change",G);if(typeof D.addListener==="function")return D.addListener(G),()=>D.removeListener(G);return()=>{}});return window.addEventListener("focus",G),window.addEventListener("pageshow",G),()=>{for(let D of b)D();window.removeEventListener("focus",G),window.removeEventListener("pageshow",G)}},[]),u(()=>{r_("workspaceOpen",String(c0))},[c0]),u(()=>{return o8()},[]),u(()=>{return()=>{X2()}},[X2]),u(()=>{if(!c_){r_(H1,"");return}r_(H1,JSON.stringify({question:c_.question||"",answer:c_.answer||"",thinking:c_.thinking||"",error:c_.error||null,status:c_.status||"success"}))},[c_]),u(()=>{U2.current=y_||{}},[y_]),u(()=>{f0.current=$},[$]),u(()=>{r2.current=G2||{name:"You",avatar_url:null,avatar_background:null}},[G2]);let l0=P((G,Y,J=null)=>{if(typeof document>"u")return;let b=(G||"").trim()||"PiClaw";if(m0.current.title!==b){document.title=b;let R=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(R&&R.getAttribute("content")!==b)R.setAttribute("content",b);m0.current.title=b}let D=document.getElementById("dynamic-favicon");if(!D)return;let h=D.getAttribute("data-default")||D.getAttribute("href")||"/favicon.ico",$_=Y||h,H_=Y?`${$_}|${J||""}`:$_;if(m0.current.avatarBase!==H_){let R=Y?`${$_}${$_.includes("?")?"&":"?"}v=${J||Date.now()}`:$_;D.setAttribute("href",R),m0.current.avatarBase=H_}},[]),V2=P((G)=>{if(!G)return;F((Y)=>Y.includes(G)?Y:[...Y,G])},[]),J0=P((G)=>{F((Y)=>Y.filter((J)=>J!==G))},[]);K2.current=J0;let f2=P(()=>{F([])},[]),V=P((G,Y=null,J="info",b=3000)=>{X2(),a({title:G,detail:Y||null,kind:J||"info"}),L2.current=setTimeout(()=>{a((D)=>D?.title===G?null:D)},b)},[X2]),Q=P((G)=>{let Y=v8(G,{editorOpen:L0,resolvePane:(J)=>X0.resolve(J)});if(Y.kind==="open"){p0(Y.path);return}if(Y.kind==="toast")V(Y.title,Y.detail,Y.level)},[L0,p0,V]),k=P(()=>{let G=I_;if(G)V2(G)},[I_,V2]),E=P((G)=>{if(!G)return;C((Y)=>Y.includes(G)?Y:[...Y,G])},[]),m=P(async(G,Y=null)=>{let J=(D)=>{D.scrollIntoView({behavior:"smooth",block:"center"}),D.classList.add("post-highlight"),setTimeout(()=>D.classList.remove("post-highlight"),2000)},b=document.getElementById("post-"+G);if(b){J(b);return}try{let D=typeof Y==="string"&&Y.trim()?Y.trim():$,$_=(await U3(G,D))?.thread?.[0];if(!$_)return;q0((H_)=>{if(!H_)return[$_];if(H_.some((R)=>R.id===$_.id))return H_;return[...H_,$_]}),requestAnimationFrame(()=>{setTimeout(()=>{let H_=document.getElementById("post-"+G);if(H_)J(H_)},50)})}catch(D){console.error("[scrollToMessage] Failed to fetch message",G,D)}},[$]),d=P((G)=>{C((Y)=>Y.filter((J)=>J!==G))},[]),s=P(()=>{C([])},[]),o=P((G={})=>{let Y=Date.now();if(D_.current=Y,G.running)s_.current=!0,M0((J)=>J?J:!0);if(G.clearSilence)k_.current=0},[M0]),g=P(()=>{if(i0.current)clearTimeout(i0.current),i0.current=null;D2.current=0},[]);u(()=>()=>{g()},[g]);let z_=P(()=>{g(),l((G)=>{if(!G)return G;if(!(G.last_activity||G.lastActivity))return G;let{last_activity:Y,lastActivity:J,...b}=G;return b})},[g]),y0=P((G)=>{if(!G)return;g();let Y=Date.now();D2.current=Y,l({type:G.type||"active",last_activity:!0}),i0.current=setTimeout(()=>{if(D2.current!==Y)return;l((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},T8)},[g]),W0=P(()=>{s_.current=!1,M0(!1),D_.current=null,k_.current=0,E_.current="",u_.current="",w_.current=null,M_.current=null,p.current=null,L_.current=null,e0.current=null,V0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),X_(null),Z_(null),V_.current=!1,W_.current=!1},[g,X_,Z_,M0]),A0=P((G)=>{if(!l8({remainingQueueCount:G,currentTurnId:p.current,isAgentTurnActive:T_}))return;L_.current=null,Z_(null)},[T_,Z_]),J1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),V$=P(()=>({agentStatus:t,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:Q_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:G_,steerQueuedTurnId:J_,isAgentTurnActive:Boolean(T_),followupQueueItems:Array.isArray(E0)?E0.map((G)=>({...G})):[],activeModel:v_,activeThinkingLevel:C_,supportsThinking:Boolean(Y0),activeModelUsage:e_,contextUsage:F0,isAgentRunning:Boolean(s_.current),wasAgentActive:Boolean(h0.current),draftBuffer:E_.current||"",thoughtBuffer:u_.current||"",lastAgentEvent:D_.current||null,lastSilenceNotice:k_.current||0,lastAgentResponse:M_.current||null,currentTurnIdRef:p.current||null,steerQueuedTurnIdRef:L_.current||null,thoughtExpanded:Boolean(V_.current),draftExpanded:Boolean(W_.current),agentStatusRef:e0.current||null,silentRecovery:{...V0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[v_,e_,C_,N_,Q_,t,r,F0,G_,E0,T_,K_,J_,Y0]),y1=P((G)=>{let Y=G||J1();g(),s_.current=Boolean(Y.isAgentRunning),h0.current=Boolean(Y.wasAgentActive),M0(Boolean(Y.isAgentTurnActive)),D_.current=Y.lastAgentEvent||null,k_.current=Number(Y.lastSilenceNotice||0),E_.current=Y.draftBuffer||"",u_.current=Y.thoughtBuffer||"",w_.current=Y.pendingRequest||null,M_.current=Y.lastAgentResponse||null,p.current=Y.currentTurnIdRef||null,L_.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,V0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},V_.current=Boolean(Y.thoughtExpanded),W_.current=Boolean(Y.draftExpanded),l(Y.agentStatus||null),i(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),U_(Y.agentPlan||""),__(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),j_(Y.pendingRequest||null),X_(Y.currentTurnId||null),Z_(Y.steerQueuedTurnId||null),o_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),F_(Y.activeModel||null),S_(Y.activeThinkingLevel||null),n_(Boolean(Y.supportsThinking)),B0(Y.activeModelUsage??null),G0(Y.contextUsage??null)},[g,J1,X_,o_,M0,Z_]),W2=P((G)=>{if(!G)return;if(p.current===G)return;p.current=G,V0.current={inFlight:!1,lastAttemptAt:0,turnId:G},X_(G),L_.current=null,Z_(null),E_.current="",u_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,M_.current=null,V_.current=!1,W_.current=!1},[X_,Z_]),D1=P((G)=>{if(typeof document<"u"){let R=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&R)return}let Y=M_.current;if(!Y||!Y.post)return;if(G&&Y.turnId&&Y.turnId!==G)return;let J=Y.post;if(J.id&&t_.current===J.id)return;let b=String(J?.data?.content||"").trim();if(!b)return;t_.current=J.id||t_.current,M_.current=null;let D=b.replace(/\s+/g," ").slice(0,200),h=U2.current||{},H_=(J?.data?.agent_id?h[J.data.agent_id]:null)?.name||"Pi";g0(H_,D)},[g0]),_6=P(async(G,Y)=>{if(G!=="thought"&&G!=="draft")return;let J=p.current;if(G==="thought"){if(V_.current=Y,J)try{await a8(J,"thought",Y)}catch(b){console.warn("Failed to update thought visibility:",b)}if(!Y)return;try{let b=J?await s8(J,"thought"):null;if(b?.text)u_.current=b.text;__((D)=>({...D||{text:"",totalLines:0},fullText:u_.current||D?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:D?.totalLines||0}))}catch(b){console.warn("Failed to fetch full thought:",b)}return}if(W_.current=Y,J)try{await a8(J,"draft",Y)}catch(b){console.warn("Failed to update draft visibility:",b)}if(!Y)return;try{let b=J?await s8(J,"draft"):null;if(b?.text)E_.current=b.text;i((D)=>({...D||{text:"",totalLines:0},fullText:E_.current||D?.fullText||"",totalLines:Number.isFinite(b?.total_lines)?b.total_lines:D?.totalLines||0}))}catch(b){console.warn("Failed to fetch full draft:",b)}},[]),o$=y(null),d$=P(()=>{let G=B.current;if(!G)return;if(!(Math.abs(G.scrollTop)>150))G.scrollTop=0},[]);o$.current=d$;let $6=P((G)=>{let Y=B.current;if(!Y||typeof G!=="function"){G?.();return}let{currentHashtag:J,searchQuery:b}=b0.current||{},D=!(b&&!J),h=D?Y.scrollHeight-Y.scrollTop:Y.scrollTop;G(),requestAnimationFrame(()=>{let $_=B.current;if(!$_)return;if(D){let H_=Math.max($_.scrollHeight-h,0);$_.scrollTop=H_}else{let H_=Math.max($_.scrollHeight-$_.clientHeight,0),R=Math.min(h,H_);$_.scrollTop=R}})},[]),s2=P((G)=>{let Y=B.current;if(!Y||typeof G!=="function"){G?.();return}let J=Y.scrollTop;G(),requestAnimationFrame(()=>{let b=B.current;if(!b)return;let D=Math.max(b.scrollHeight-b.clientHeight,0);b.scrollTop=Math.min(J,D)})},[]),j6="Queued as a follow-up (one-at-a-time).",Z6="⁣",E1=P((G)=>{if(!G||!Array.isArray(G))return G;let Y=a0.current,J=new Set(Y),b=G.filter((D)=>{if(J.has(D?.id))return!1;if(D?.data?.is_bot_message){let h=D?.data?.content;if(h===j6||h===Z6)return!1}return!0});return b.length===G.length?G:b},[]),{posts:k1,setPosts:q0,hasMore:N6,setHasMore:W$,hasMoreRef:w1,loadPosts:j2,refreshTimeline:P0,loadMore:K6,loadMoreRef:r$}=M8({preserveTimelineScroll:$6,preserveTimelineScrollTop:s2,chatJid:$}),u2=i_(()=>E1(k1),[k1,E0,E1]),q$=P(()=>{let G=l_.current;if(!G)return;q0((Y)=>Y?Y.filter((J)=>J.id!==G):Y),l_.current=null},[q0]),{handleSplitterMouseDown:z6,handleSplitterTouchStart:Y6,handleEditorSplitterMouseDown:G6,handleEditorSplitterTouchStart:O6,handleDockSplitterMouseDown:L6,handleDockSplitterTouchStart:X6}=x8({appShellRef:S,sidebarWidthRef:n,editorWidthRef:Y_,dockHeightRef:P_}),b1=P(()=>{if(!s_.current)return;s_.current=!1,k_.current=0,D_.current=null,p.current=null,X_(null),V_.current=!1,W_.current=!1;let G=(E_.current||"").trim();if(E_.current="",u_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,M_.current=null,!G){l({type:"error",title:"Response stalled - No content received"});return}let J=`${G}${`

⚠️ Response may be incomplete - the model stopped responding`}`,b=Date.now(),D=new Date().toISOString(),h={id:b,timestamp:D,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};l_.current=b,q0(($_)=>$_?O$([...$_,h]):[h]),o$.current?.(),l(null)},[X_]);u(()=>{b0.current={currentHashtag:O,searchQuery:W}},[O,W]);let g_=P(()=>{let G=$;z7(G).then((Y)=>{if(f0.current!==G)return;let J=O0.current,b=Array.isArray(Y?.items)?Y.items.map((D)=>({...D})).filter((D)=>!J.has(D.row_id)):[];if(b.length){o_((D)=>{if(D.length===b.length&&D.every((h,$_)=>h.row_id===b[$_].row_id))return D;return b});return}J.clear(),A0(0),o_((D)=>D.length===0?D:[])}).catch(()=>{if(f0.current!==G)return;o_((Y)=>Y.length===0?Y:[])})},[A0,$,o_]),n0=P(async()=>{let G=$;try{let Y=await F1(G);if(f0.current!==G)return;if(Y)G0(Y)}catch(Y){if(f0.current!==G)return;console.warn("Failed to fetch agent context:",Y)}},[$]),o0=P(async()=>{let G=$;try{let Y=await t8(G);if(f0.current!==G)return null;if(!Y||Y.status!=="active"||!Y.data){if(h0.current){let{currentHashtag:D,searchQuery:h}=b0.current||{};if(!D&&!h)P0()}return h0.current=!1,W0(),e0.current=null,l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,Y??null}h0.current=!0;let J=Y.data;e0.current=J;let b=J.turn_id||J.turnId;if(b)W2(b);if(o({running:!0,clearSilence:!0}),z_(),l(J),Y.thought&&Y.thought.text)__((D)=>{if(D&&D.text&&D.text.length>=Y.thought.text.length)return D;return u_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)i((D)=>{if(D&&D.text&&D.text.length>=Y.draft.text.length)return D;return E_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[W0,z_,o,P0,W2]),s$=P(async()=>{if(!s_.current)return null;if(w_.current)return null;let G=p.current||null,Y=V0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===G&&J-Y.lastAttemptAt<W1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=G;try{let{currentHashtag:b,searchQuery:D}=b0.current||{};if(!b&&!D)await P0();return await g_(),await o0()}finally{Y.inFlight=!1}},[o0,g_,P0]);u(()=>{let G=Math.min(1000,Math.max(100,Math.floor(V1/2))),Y=setInterval(()=>{if(!s_.current)return;if(w_.current)return;let J=D_.current;if(!J)return;let b=Date.now(),D=b-J,h=R$(e0.current);if(D>=f8){if(!h)l({type:"waiting",title:"Re-syncing after a quiet period…"});s$();return}if(D>=V1){if(b-k_.current>=W1){if(!h){let $_=Math.floor(D/1000);l({type:"waiting",title:`Waiting for model… No events for ${$_}s`})}k_.current=b,s$()}}},G);return()=>clearInterval(Y)},[s$]);let V6=P((G)=>{if(z(G),G!=="connected"){l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,W0();return}if(!C2.current){C2.current=!0,o0(),n0();return}let{currentHashtag:Y,searchQuery:J}=b0.current;if(!Y&&!J)P0();o0(),n0()},[W0,P0,o0,n0]),W6=P(async(G)=>{q(G),q0(null),await j2(G)},[j2]),q6=P(async()=>{q(null),H(null),q0(null),await j2()},[j2]),U6=P(async(G,Y=T)=>{if(!G||!G.trim())return;let J=Y==="root"||Y==="all"?Y:"current";v(J),H(G.trim()),q(null),q0(null);try{let b=await d8(G.trim(),50,0,$,J,M);q0(b.results),W$(!1)}catch(b){console.error("Failed to search:",b),q0([])}},[$,M,T]),B6=P(()=>{f(!0),H(null),q(null),v("current"),q0([])},[]),Q6=P(()=>{f(!1),H(null),j2()},[j2]),V7=P(()=>{},[]),F6=P(async(G)=>{if(!G)return;let Y=G.id,J=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():$,b=u2?.filter((h)=>h?.data?.thread_id===Y&&h?.id!==Y).length||0;if(b>0){if(!window.confirm(`Delete this message and its ${b} replies?`))return}let D=(h)=>{if(!h.length)return;w2((H_)=>{let R=new Set(H_);return h.forEach((O_)=>R.add(O_)),R}),setTimeout(()=>{if(s2(()=>{q0((H_)=>H_?H_.filter((R)=>!h.includes(R.id)):H_)}),w2((H_)=>{let R=new Set(H_);return h.forEach((O_)=>R.delete(O_)),R}),w1.current)r$.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await r8(Y,b>0,J);if(h?.ids?.length)D(h.ids)}catch(h){let $_=h?.message||"";if(b===0&&$_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let R=await r8(Y,!0,J);if(R?.ids?.length)D(R.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${$_}`)}},[$,u2,s2]),A1=P(async()=>{try{let G=await $7();b_(I8(G));let Y=G?.user||{};O2((b)=>{let D=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",h=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,$_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(b.name===D&&b.avatar_url===h&&b.avatar_background===$_)return b;return{name:D,avatar_url:h,avatar_background:$_}});let J=(G?.agents||[]).find((b)=>b.id==="default");l0(J?.name,J?.avatar_url)}catch(G){console.warn("Failed to load agents:",G)}try{let G=$,Y=await F1(G);if(f0.current!==G)return;if(Y)G0(Y)}catch{}},[l0,$]);u(()=>{A1();let G=h2("sidebarWidth",null),Y=Number.isFinite(G)?Math.min(Math.max(G,160),600):280;if(n.current=Y,S.current)S.current.style.setProperty("--sidebar-width",`${Y}px`)},[A1]);let a$=T_||t!==null,P1=P((G)=>{if(!G||typeof G!=="object")return;let Y=G.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:b}=G;if(!J&&b===void 0)return;let D=U2.current?.[Y]||{id:Y},h=D.name||null,$_=D.avatar_url??D.avatarUrl??D.avatar??null,H_=!1,R=!1;if(J&&J!==D.name)h=J,R=!0;if(b!==void 0){let O_=typeof b==="string"?b.trim():null,p_=typeof $_==="string"?$_.trim():null,q_=O_||null;if(q_!==(p_||null))$_=q_,H_=!0}if(!R&&!H_)return;if(b_((O_)=>{let q_={...O_[Y]||{id:Y}};if(R)q_.name=h;if(H_)q_.avatar_url=$_;return{...O_,[Y]:q_}}),Y==="default")l0(h,$_,H_?Date.now():null)},[l0]),M1=P((G)=>{if(!G||typeof G!=="object")return;let Y=G.user_name??G.userName,J=G.user_avatar??G.userAvatar,b=G.user_avatar_background??G.userAvatarBackground;if(Y===void 0&&J===void 0&&b===void 0)return;O2((D)=>{let h=typeof Y==="string"&&Y.trim()?Y.trim():D.name||"You",$_=J===void 0?D.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,H_=b===void 0?D.avatar_background:typeof b==="string"&&b.trim()?b.trim():null;if(D.name===h&&D.avatar_url===$_&&D.avatar_background===H_)return D;return{name:h,avatar_url:$_,avatar_background:H_}})},[]),t$=P((G)=>{if(!G||typeof G!=="object")return;let Y=G.model??G.current;if(Y!==void 0)F_(Y);if(G.thinking_level!==void 0)S_(G.thinking_level??null);if(G.supports_thinking!==void 0)n_(Boolean(G.supports_thinking));if(G.provider_usage!==void 0)B0(G.provider_usage??null)},[]),a2=P(()=>{let G=$;j7(G).then((Y)=>{if(f0.current!==G)return;if(Y)t$(Y)}).catch(()=>{})},[t$,$]),u0=P(()=>{Z7().then((G)=>{let Y=Array.isArray(G?.chats)?G.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];_0(Y)}).catch(()=>{})},[]),T0=P(()=>{e8(M).then((G)=>{let Y=Array.isArray(G?.chats)?G.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];D0(Y)}).catch(()=>{})},[M]),H6=P((G)=>{let Y=G?.row_id;if(Y==null)return;O0.current.add(Y),o_((J)=>J.filter((b)=>b?.row_id!==Y)),Y7(Y,Q1($)).then(()=>{g_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),V("Failed to steer message","The queued message could not be sent as steering.","warning"),O0.current.delete(Y),g_()})},[$,g_,o_,V]),J6=P((G)=>{let Y=G?.row_id;if(Y==null)return;let J=$0.current.filter((b)=>b?.row_id!==Y).length;O0.current.add(Y),A0(J),o_((b)=>b.filter((D)=>D?.row_id!==Y)),G7(Y,Q1($)).then(()=>{g_()}).catch((b)=>{console.warn("[queue] Failed to remove queued item:",b),V("Failed to remove message","The queued message could not be removed.","warning"),O0.current.delete(Y),g_()})},[A0,$,g_,o_,V]),e$=P((G)=>{if(!G||typeof G!=="object")return;if(u0(),T0(),G?.queued==="followup"||G?.queued==="steer"){g_();return}let Y=G?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))g_()},[u0,T0,g_]),_3=P(()=>{if(N0.current)N0.current.abort(),N0.current=null;d_(null)},[]),U$=P(async(G)=>{let Y=String(G||"").trim();if(!Y)return V("BTW needs a question","Usage: /btw <question>","warning"),!0;if(N0.current)N0.current.abort();let J=new AbortController;N0.current=J,d_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let b=await O7(Y,{signal:J.signal,chatJid:C4($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(D,h)=>{if(D==="side_prompt_start")d_(($_)=>$_?{...$_,status:"running"}:$_)},onThinkingDelta:(D)=>{d_((h)=>h?{...h,thinking:`${h.thinking||""}${D||""}`}:h)},onTextDelta:(D)=>{d_((h)=>h?{...h,answer:`${h.answer||""}${D||""}`}:h)}});if(N0.current!==J)return!0;d_((D)=>D?{...D,answer:b?.result||D.answer||"",thinking:b?.thinking||D.thinking||"",model:b?.model||null,status:"success",error:null}:D)}catch(b){if(J.signal.aborted)return!0;d_((D)=>D?{...D,status:"error",error:b?.payload?.error||b?.message||"BTW request failed."}:D)}finally{if(N0.current===J)N0.current=null}return!0},[$,V]),y6=P(async({content:G})=>{let Y=M4(G);if(!Y)return!1;if(Y.type==="help")return V("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return _3(),V("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await U$(Y.question),!0;return!1},[_3,U$,V]),D6=P(()=>{if(c_?.question)U$(c_.question)},[c_,U$]),E6=P(async()=>{let G=f4(c_);if(!G)return;try{let Y=await g2("default",G,null,[],a$?"queue":null,$);e$(Y),V(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){V("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[c_,e$,a$,V]),t2=P(()=>{a2(),u0(),T0(),g_(),n0()},[a2,u0,T0,g_,n0]);u(()=>{t2();let G=setInterval(()=>{a2(),u0(),T0(),g_()},60000);return()=>clearInterval(G)},[t2,a2,u0,T0,g_]),u(()=>{T0()},[T0]),u(()=>{let G=!1;if(q0(null),O)return j2(O),()=>{G=!0};if(W)return d8(W,50,0,$,T,M).then((Y)=>{if(G)return;q0(Y.results),W$(!1)}).catch((Y)=>{if(G)return;console.error("Failed to search:",Y),q0([]),W$(!1)}),()=>{G=!0};return j2(),()=>{G=!0}},[$,O,W,T,M,j2,W$,q0]),u(()=>{let G=x2.current||$;_2.current.set(G,V$())},[$,V$]),u(()=>{let G=x2.current||$;if(G===$)return;_2.current.set(G,V$()),x2.current=$,O0.current.clear(),y1(_2.current.get($)||null),g_(),o0(),n0()},[$,o0,n0,g_,y1,V$]);let k6=P(()=>{let{currentHashtag:G,searchQuery:Y}=b0.current||{};if(!G&&!Y)P0();t2()},[t2,P0]),$3=P((G,Y)=>{let J=Y?.turn_id,b=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,h=b?b===$:G==="connected"||G==="workspace_update";if(h)P1(Y),M1(Y);if(G==="ui_theme"){J4(Y);return}if(G?.startsWith("agent_")){if(!(G==="agent_draft_delta"||G==="agent_thought_delta"||G==="agent_draft"||G==="agent_thought"))z_()}if(G==="connected"){l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),w_.current=null,W0();let R=$;t8(R).then((q_)=>{if(f0.current!==R)return;if(!q_||q_.status!=="active"||!q_.data)return;let v2=q_.data,C1=v2.turn_id||v2.turnId;if(C1)W2(C1);if(o({clearSilence:!0}),y0(v2),q_.thought&&q_.thought.text)u_.current=q_.thought.text,__({text:q_.thought.text,totalLines:q_.thought.totalLines||0});if(q_.draft&&q_.draft.text)E_.current=q_.draft.text,i({text:q_.draft.text,totalLines:q_.draft.totalLines||0})}).catch((q_)=>{console.warn("Failed to fetch agent status:",q_)});let{currentHashtag:O_,searchQuery:p_}=b0.current||{};if(!O_&&!p_)P0();t2();return}if(G==="agent_status"){if(!h){if(Y?.type==="done"||Y?.type==="error")u0(),T0();return}if(Y.type==="done"||Y.type==="error"){if(J&&p.current&&J!==p.current)return;if(Y.type==="done"){D1(J||p.current);let{currentHashtag:R,searchQuery:O_}=b0.current||{};if(!R&&!O_)P0();if(Y.context_usage)G0(Y.context_usage)}if(h0.current=!1,W0(),O0.current.clear(),u0(),g_(),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null),Y.type==="error")l({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(J)W2(J);if(o({running:!0,clearSilence:!0}),Y.type==="thinking")E_.current="",u_.current="",i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0});e0.current=Y,l((R)=>{if(R&&R.type===Y.type&&R.title===Y.title)return R;return Y})}return}if(G==="agent_steer_queued"){if(!h)return;if(J&&p.current&&J!==p.current)return;let R=J||p.current;if(!R)return;L_.current=R,Z_(R);return}if(G==="agent_followup_queued"){if(!h)return;let R=Y?.row_id,O_=Y?.content;if(R!=null&&typeof O_==="string"&&O_.trim())o_((p_)=>{if(p_.some((q_)=>q_?.row_id===R))return p_;return[...p_,{row_id:R,content:O_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});g_();return}if(G==="agent_followup_consumed"){if(!h)return;let R=Y?.row_id;if(R!=null){let O_=$0.current.filter((p_)=>p_.row_id!==R).length;A0(O_),o_((p_)=>p_.filter((q_)=>q_.row_id!==R))}g_(),P0();return}if(G==="agent_followup_removed"){if(!h)return;let R=Y?.row_id;if(R!=null){let O_=$0.current.filter((p_)=>p_.row_id!==R).length;O0.current.add(R),A0(O_),o_((p_)=>p_.filter((q_)=>q_.row_id!==R))}g_();return}if(G==="agent_draft_delta"){if(!h)return;if(J&&p.current&&J!==p.current)return;if(J&&!p.current)W2(J);if(o({running:!0,clearSilence:!0}),Y?.reset)E_.current="";if(Y?.delta)E_.current+=Y.delta;let R=Date.now();if(!S2.current||R-S2.current>=100){S2.current=R;let O_=E_.current,p_=q1(O_);if(W_.current)i((q_)=>({text:q_?.text||"",totalLines:p_,fullText:O_}));else i({text:O_,totalLines:p_})}return}if(G==="agent_draft"){if(!h)return;if(J&&p.current&&J!==p.current)return;if(J&&!p.current)W2(J);o({running:!0,clearSilence:!0});let R=Y.text||"",O_=Y.mode||(Y.kind==="plan"?"replace":"append"),p_=Number.isFinite(Y.total_lines)?Y.total_lines:R?R.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(O_==="replace")U_(R);else U_((q_)=>(q_||"")+R);else if(!W_.current)E_.current=R,i({text:R,totalLines:p_});return}if(G==="agent_thought_delta"){if(!h)return;if(J&&p.current&&J!==p.current)return;if(J&&!p.current)W2(J);if(o({running:!0,clearSilence:!0}),Y?.reset)u_.current="";if(typeof Y?.delta==="string")u_.current+=Y.delta;let R=Date.now();if(V_.current&&(!$2.current||R-$2.current>=100)){$2.current=R;let O_=u_.current;__((p_)=>({text:p_?.text||"",totalLines:q1(O_),fullText:O_}))}return}if(G==="agent_thought"){if(!h)return;if(J&&p.current&&J!==p.current)return;if(J&&!p.current)W2(J);o({running:!0,clearSilence:!0});let R=Y.text||"",O_=Number.isFinite(Y.total_lines)?Y.total_lines:R?R.replace(/\r\n/g,`
`).split(`
`).length:0;if(!V_.current)u_.current=R,__({text:R,totalLines:O_});return}if(G==="agent_request"){if(!h)return;if(console.log("Agent request:",Y),J&&p.current&&J!==p.current)return;if(J)W2(J);o({running:!0,clearSilence:!0}),j_(Y),w_.current=Y;return}if(G==="agent_request_timeout"){if(!h)return;if(console.log("Agent request timeout:",Y),J&&p.current&&J!==p.current)return;j_(null),w_.current=null,W0(),l({type:"error",title:"Permission request timed out"});return}if(G==="model_changed"){if(!h)return;if(Y?.model!==void 0)F_(Y.model);if(Y?.thinking_level!==void 0)S_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)n_(Boolean(Y.supports_thinking));let R=$;F1(R).then((O_)=>{if(f0.current!==R)return;if(O_)G0(O_)}).catch(()=>{});return}if(G==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}let{currentHashtag:$_,searchQuery:H_}=b0.current;if(G==="agent_response"){if(!h)return;q$(),M_.current={post:Y,turnId:p.current}}if(!$_&&!H_&&h&&(G==="new_post"||G==="new_reply"||G==="agent_response"))q0((R)=>{if(!R)return[Y];if(R.some((O_)=>O_.id===Y.id))return R;return[...R,Y]}),o$.current?.();if(G==="interaction_updated"){if(!h)return;q0((R)=>{if(!R)return R;if(!R.some((O_)=>O_.id===Y.id))return R;return R.map((O_)=>O_.id===Y.id?Y:O_)})}if(G==="interaction_deleted"){if(!h)return;let R=Y?.ids||[];if(R.length){s2(()=>{q0((q_)=>q_?q_.filter((v2)=>!R.includes(v2.id)):q_)});let{currentHashtag:O_,searchQuery:p_}=b0.current;if(w1.current&&!O_&&!p_)r$.current?.({preserveScroll:!0,preserveMode:"top"})}}},[W0,z_,$,r$,o,D1,s2,u0,T0,P0,q$,W2,y0,P1,M1,a2,g_,o_]);u(()=>{if(typeof window>"u")return;let G=window.__PICLAW_TEST_API||{};return G.emit=$3,G.reset=()=>{q$(),W0(),l(null),i({text:"",totalLines:0}),U_(""),__({text:"",totalLines:0}),j_(null)},G.finalize=()=>b1(),window.__PICLAW_TEST_API=G,()=>{if(window.__PICLAW_TEST_API===G)window.__PICLAW_TEST_API=void 0}},[W0,b1,$3,q$]),A8({handleSseEvent:$3,handleConnectionStatusChange:V6,loadPosts:j2,onWake:k6,chatJid:$}),u(()=>{if(!u2||u2.length===0)return;let G=location.hash;if(!G||!G.startsWith("#msg-"))return;let Y=G.slice(5);m(Y),history.replaceState(null,"",location.pathname+location.search)},[u2,m]);let j3=t!==null;u(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:b}=b0.current||{},D=!J&&!b;if(j3){if(D)P0();g_(),o0(),n0()}else{if(D)P0();o0(),n0()}},j3?15000:60000);return()=>clearInterval(Y)},[K,j3,o0,n0,g_,P0]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let G=()=>{if(document.visibilityState&&document.visibilityState!=="visible")return;o0(),n0(),g_()};return window.addEventListener("focus",G),window.addEventListener("pageshow",G),document.addEventListener("visibilitychange",G),()=>{window.removeEventListener("focus",G),window.removeEventListener("pageshow",G),document.removeEventListener("visibilitychange",G)}},[o0,n0,g_]);let w6=P(()=>{j0((G)=>!G)},[]),b6=P((G)=>{if(typeof window>"u")return;let Y=String(G||"").trim();if(!Y||Y===$)return;let J=L$(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),A6=P(async()=>{if(typeof window>"u"||!B_?.chat_jid)return;let G=B_.agent_name||"",Y=B_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let b=window.prompt("Agent handle (without @)",G);if(b===null)return;try{let D=await N7(B_.chat_jid,{displayName:J,agentName:b});await Promise.allSettled([u0(),T0()]);let h=D?.branch?.agent_name||String(b||"").trim()||G;V("Branch renamed",`This chat is now @${h}.`,"info",3500)}catch(D){let h=D instanceof Error?D.message:String(D||"Could not rename branch.");V("Could not rename branch",h||"Could not rename branch.","warning",5000)}},[B_,u0,T0,V]),P6=P(async()=>{if(typeof window>"u"||!B_?.chat_jid)return;if(B_.chat_jid===(B_.root_chat_jid||B_.chat_jid)){V("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=B_.display_name||`@${B_.agent_name||B_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await K7(B_.chat_jid),await Promise.allSettled([u0(),T0()]);let b=B_.root_chat_jid||"web:default";V("Branch pruned",`${Y} has been archived.`,"info",3000);let D=L$(window.location.href,b,{chatOnly:j});window.location.assign(D)}catch(b){let D=b instanceof Error?b.message:String(b||"Could not prune branch.");V("Could not prune branch",D||"Could not prune branch.","warning",5000)}},[j,B_,u0,T0,V]);u(()=>{if(!Z||typeof window>"u")return;let G=!1;return(async()=>{try{R_({status:"running",message:"Preparing a new chat branch…"});let Y=await b$(N);if(G)return;let J=Y?.branch,b=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");let D=L$(window.location.href,b,{chatOnly:!0});window.location.replace(D)}catch(Y){if(G)return;R_({status:"error",message:B1(Y)})}})(),()=>{G=!0}},[Z,N]);let M6=P(async()=>{if(typeof window>"u"||X)return;let G=R8($);if(!G){V("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(G.mode==="tab"){let J=i8(window.location.href,$,{chatOnly:!0});if(!window.open(J,G.target))V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=g8(G);if(!Y){V("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}c8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let b=(await b$($))?.branch,D=typeof b?.chat_jid==="string"&&b.chat_jid.trim()?b.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");try{let $_=await Q3();_0(Array.isArray($_?.chats)?$_.chats:[])}catch{}try{let $_=await e8(M);D0(Array.isArray($_?.chats)?$_.chats:[])}catch{}let h=L$(window.location.href,D,{chatOnly:!0});p8(Y,h)}catch(J){h8(Y),V("Could not open branch window",B1(J),"error",5000)}},[$,M,X,V]);u(()=>{if(!L0)return;if(typeof window>"u")return;let G=S.current;if(!G)return;if(!Y_.current){let Y=h2("editorWidth",null),J=n.current||280;Y_.current=Number.isFinite(Y)?Y:J}if(G.style.setProperty("--editor-width",`${Y_.current}px`),!P_.current){let Y=h2("dockHeight",null);P_.current=Number.isFinite(Y)?Y:200}G.style.setProperty("--dock-height",`${P_.current}px`)},[L0]),u(()=>{if(!S0||j)return;let G=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),U0()};return document.addEventListener("keydown",G),()=>document.removeEventListener("keydown",G)},[U0,S0,j]);let C6=Boolean(J_&&J_===(t?.turn_id||G_));if(Z)return U`
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
        <div class=${`app-shell${c0?"":" workspace-collapsed"}${L0?" editor-open":""}${j?" chat-only":""}`} ref=${S}>
            ${!j&&U`
                <${E8}
                    onFileSelect=${V2}
                    visible=${c0}
                    active=${c0||L0}
                    onOpenEditor=${p0}
                />
                <button
                    class=${`workspace-toggle-tab${c0?" open":" closed"}`}
                    onClick=${w6}
                    title=${c0?"Hide workspace":"Show workspace"}
                    aria-label=${c0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${z6} onTouchStart=${Y6}></div>
            `}
            ${M2&&U`
                <div class="editor-pane-container">
                    ${L0&&U`
                        <${k8}
                            tabs=${Z0}
                            activeId=${I_}
                            onActivate=${b2}
                            onClose=${J2}
                            onCloseOthers=${H0}
                            onCloseAll=${A2}
                            onTogglePin=${d2}
                            onTogglePreview=${y2}
                            previewTabs=${I0}
                            onToggleDock=${S0?U0:void 0}
                            dockVisible=${S0&&Y2}
                        />
                    `}
                    ${L0&&U`<div class="editor-pane-host" ref=${q2}></div>`}
                    ${L0&&I_&&I0.has(I_)&&U`
                        <${b8}
                            getContent=${()=>a_.current?.getContent?.()}
                            path=${I_}
                            onClose=${()=>y2(I_)}
                        />
                    `}
                    ${S0&&Y2&&U`<div class="dock-splitter" onMouseDown=${L6} onTouchStart=${X6}></div>`}
                    ${S0&&U`<div class=${`dock-panel${Y2?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${U0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${P2}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${G6} onTouchStart=${O6}></div>
            `}
            <div class="container">
                ${W&&m8()&&U`<div class="search-results-spacer"></div>`}
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
                                        onChange=${(G)=>b6(G.currentTarget.value)}
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
                                    onClick=${A6}
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
                                    onClick=${P6}
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
                        <button class="back-btn" onClick=${q6}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${O?`#${O}`:`Search: ${W} · ${e}`}</span>
                    </div>
                `}
                <${j8}
                    posts=${u2}
                    hasMore=${N6}
                    onLoadMore=${K6}
                    timelineRef=${B}
                    onHashtagClick=${W6}
                    onMessageRef=${E}
                    onScrollToMessage=${m}
                    onFileRef=${Q}
                    onPostClick=${void 0}
                    onDeletePost=${F6}
                    emptyMessage=${O?`No posts with #${O}`:W?`No results for "${W}"`:void 0}
                    agents=${y_}
                    user=${G2}
                    reverse=${!(W&&!O)}
                    removingPostIds=${o2}
                    searchQuery=${W}
                />
                <${g4}
                    status=${t}
                    draft=${N_}
                    plan=${Q_}
                    thought=${r}
                    pendingRequest=${K_}
                    intent=${c}
                    turnId=${G_}
                    steerQueued=${C6}
                    onPanelToggle=${_6}
                />
                <${T4}
                    session=${c_}
                    onClose=${_3}
                    onRetry=${D6}
                    onInject=${E6}
                />
                <${V4}
                    onPost=${()=>{j2(),d$()}}
                    onFocus=${d$}
                    searchMode=${w}
                    searchScope=${T}
                    onSearch=${U6}
                    onSearchScopeChange=${v}
                    onEnterSearch=${B6}
                    onExitSearch=${Q6}
                    fileRefs=${x}
                    onRemoveFileRef=${J0}
                    onClearFileRefs=${f2}
                    messageRefs=${A}
                    onRemoveMessageRef=${d}
                    onClearMessageRefs=${s}
                    activeEditorPath=${j?null:I_}
                    onAttachEditorFile=${j?void 0:k}
                    onOpenFilePill=${Q}
                    followupQueueCount=${w0}
                    followupQueueItems=${E0}
                    onInjectQueuedFollowup=${H6}
                    onRemoveQueuedFollowup=${J6}
                    onSubmitIntercept=${y6}
                    onMessageResponse=${e$}
                    onPopOutChat=${X?void 0:M6}
                    isAgentActive=${a$}
                    activeChatAgents=${x_}
                    currentChatJid=${$}
                    activeModel=${v_}
                    modelUsage=${e_}
                    thinkingLevel=${C_}
                    supportsThinking=${Y0}
                    contextUsage=${F0}
                    notificationsEnabled=${t0}
                    notificationPermission=${C0}
                    onToggleNotifications=${R0}
                    onModelChange=${F_}
                    onModelStateChange=${t$}
                />
                <${p4} status=${K} />
                <${c4}
                    request=${K_}
                    onRespond=${()=>{j_(null),w_.current=null}}
                />
            </div>
        </div>
    `}function X7(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return U`<${L7} locationParams=${_} />`}$4(U`<${X7} />`,document.getElementById("app"));

//# debugId=3AA512DBEBC9717364756E2164756E21
//# sourceMappingURL=app.bundle.js.map
