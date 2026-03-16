var s8=Object.defineProperty;var o8=(_)=>_;function r8(_,$){this[_]=o8.bind(null,$)}var a8=(_,$)=>{for(var j in $)s8(_,j,{get:$[j],enumerable:!0,configurable:!0,set:r8.bind($,j)})};var t8=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var y2,l_,d1,e8,D$,T1,s1,o1,r1,G4,N4,K4,_9,D2={},E2=[],$9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A2=Array.isArray;function L$(_,$){for(var j in $)_[j]=$[j];return _}function X4(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function a1(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?y2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return F2(_,z,Z,N,null)}function F2(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++d1:N,__i:-1,__u:0};return N==null&&l_.vnode!=null&&l_.vnode(K),K}function w2(_){return _.children}function H2(_,$){this.props=_,this.context=$}function m$(_,$){if($==null)return _.__?m$(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?m$(_):null}function j9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=L$({},$);K.__v=$.__v+1,l_.vnode&&l_.vnode(K),W4(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?m$($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,$3(Z,K,N),$.__e=$.__=null,K.__e!=j&&t1(K)}}function t1(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),t1(_)}function f1(_){(!_.__d&&(_.__d=!0)&&D$.push(_)&&!k2.__r++||T1!=l_.debounceRendering)&&((T1=l_.debounceRendering)||s1)(k2)}function k2(){try{for(var _,$=1;D$.length;)D$.length>$&&D$.sort(o1),_=D$.shift(),$=D$.length,j9(_)}finally{D$.length=k2.__r=0}}function e1(_,$,j,Z,N,K,z,G,W,X,B){var V,H,A,x,R,v,S,F=Z&&Z.__k||E2,w=$.length;for(W=Z9(j,$,F,W,w),V=0;V<w;V++)(A=j.__k[V])!=null&&(H=A.__i!=-1&&F[A.__i]||D2,A.__i=V,v=W4(_,A,H,N,K,z,G,W,X,B),x=A.__e,A.ref&&H.ref!=A.ref&&(H.ref&&q4(H.ref,null,A),B.push(A.ref,A.__c||x,A)),R==null&&x!=null&&(R=x),(S=!!(4&A.__u))||H.__k===A.__k?W=_3(A,W,_,S):typeof A.type=="function"&&v!==void 0?W=v:x&&(W=x.nextSibling),A.__u&=-7);return j.__e=R,W}function Z9(_,$,j,Z,N){var K,z,G,W,X,B=j.length,V=B,H=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=F2(null,z,null,null,null):A2(z)?z=_.__k[K]=F2(w2,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=F2(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,W=K+H,z.__=_,z.__b=_.__b+1,G=null,(X=z.__i=N9(z,j,W,V))!=-1&&(V--,(G=j[X])&&(G.__u|=2)),G==null||G.__v==null?(X==-1&&(N>B?H--:N<B&&H++),typeof z.type!="function"&&(z.__u|=4)):X!=W&&(X==W-1?H--:X==W+1?H++:(X>W?H--:H++,z.__u|=4))):_.__k[K]=null;if(V)for(K=0;K<B;K++)(G=j[K])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=m$(G)),Z3(G,G));return Z}function _3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=_3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=m$(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function N9(_,$,j,Z){var N,K,z,G=_.key,W=_.type,X=$[j],B=X!=null&&(2&X.__u)==0;if(X===null&&G==null||B&&G==X.key&&W==X.type)return j;if(Z>(B?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((X=$[z=N>=0?N--:K++])!=null&&(2&X.__u)==0&&G==X.key&&W==X.type)return z}return-1}function R1(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||$9.test($)?j:j+"px"}function U2(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||R1(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||R1(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(r1,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=G4,_.addEventListener($,K?K4:N4,K)):_.removeEventListener($,K?K4:N4,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function u1(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=G4++;else if($.t<j.u)return;return j(l_.event?l_.event($):$)}}}function W4(_,$,j,Z,N,K,z,G,W,X){var B,V,H,A,x,R,v,S,F,w,C,p,__,t,n,N_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(W=!!(32&j.__u),K=[G=$.__e=j.__e]),(B=l_.__b)&&B($);_:if(typeof N_=="function")try{if(S=$.props,F=N_.prototype&&N_.prototype.render,w=(B=N_.contextType)&&Z[B.__c],C=B?w?w.props.value:B.__:Z,j.__c?v=(V=$.__c=j.__c).__=V.__E:(F?$.__c=V=new N_(S,C):($.__c=V=new H2(S,C),V.constructor=N_,V.render=z9),w&&w.sub(V),V.state||(V.state={}),V.__n=Z,H=V.__d=!0,V.__h=[],V._sb=[]),F&&V.__s==null&&(V.__s=V.state),F&&N_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=L$({},V.__s)),L$(V.__s,N_.getDerivedStateFromProps(S,V.__s))),A=V.props,x=V.state,V.__v=$,H)F&&N_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),F&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(F&&N_.getDerivedStateFromProps==null&&S!==A&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(S,C),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(S,V.__s,C)===!1){$.__v!=j.__v&&(V.props=S,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(l){l&&(l.__=$)}),E2.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&z.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(S,V.__s,C),F&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(A,x,R)})}if(V.context=C,V.props=S,V.__P=_,V.__e=!1,p=l_.__r,__=0,F)V.state=V.__s,V.__d=!1,p&&p($),B=V.render(V.props,V.state,V.context),E2.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,p&&p($),B=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++__<25);V.state=V.__s,V.getChildContext!=null&&(Z=L$(L$({},Z),V.getChildContext())),F&&!H&&V.getSnapshotBeforeUpdate!=null&&(R=V.getSnapshotBeforeUpdate(A,x)),t=B!=null&&B.type===w2&&B.key==null?j3(B.props.children):B,G=e1(_,A2(t)?t:[t],$,j,Z,N,K,z,G,W,X),V.base=$.__e,$.__u&=-161,V.__h.length&&z.push(V),v&&(V.__E=V.__=null)}catch(l){if($.__v=null,W||K!=null)if(l.then){for($.__u|=W?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;K[K.indexOf(G)]=null,$.__e=G}else{for(n=K.length;n--;)X4(K[n]);z4($)}else $.__e=j.__e,$.__k=j.__k,l.then||z4($);l_.__e(l,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=K9(j.__e,$,j,Z,N,K,z,W,X);return(B=l_.diffed)&&B($),128&$.__u?void 0:G}function z4(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(z4))}function $3(_,$,j){for(var Z=0;Z<j.length;Z++)q4(j[Z],j[++Z],j[++Z]);l_.__c&&l_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){l_.__e(K,N.__v)}})}function j3(_){return typeof _!="object"||_==null||_.__b>0?_:A2(_)?_.map(j3):L$({},_)}function K9(_,$,j,Z,N,K,z,G,W){var X,B,V,H,A,x,R,v=j.props||D2,S=$.props,F=$.type;if(F=="svg"?N="http://www.w3.org/2000/svg":F=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(X=0;X<K.length;X++)if((A=K[X])&&"setAttribute"in A==!!F&&(F?A.localName==F:A.nodeType==3)){_=A,K[X]=null;break}}if(_==null){if(F==null)return document.createTextNode(S);_=document.createElementNS(N,F,S.is&&S),G&&(l_.__m&&l_.__m($,K),G=!1),K=null}if(F==null)v===S||G&&_.data==S||(_.data=S);else{if(K=K&&y2.call(_.childNodes),!G&&K!=null)for(v={},X=0;X<_.attributes.length;X++)v[(A=_.attributes[X]).name]=A.value;for(X in v)A=v[X],X=="dangerouslySetInnerHTML"?V=A:X=="children"||(X in S)||X=="value"&&("defaultValue"in S)||X=="checked"&&("defaultChecked"in S)||U2(_,X,null,A,N);for(X in S)A=S[X],X=="children"?H=A:X=="dangerouslySetInnerHTML"?B=A:X=="value"?x=A:X=="checked"?R=A:G&&typeof A!="function"||v[X]===A||U2(_,X,A,v[X],N);if(B)G||V&&(B.__html==V.__html||B.__html==_.innerHTML)||(_.innerHTML=B.__html),$.__k=[];else if(V&&(_.innerHTML=""),e1($.type=="template"?_.content:_,A2(H)?H:[H],$,j,Z,F=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&m$(j,0),G,W),K!=null)for(X=K.length;X--;)X4(K[X]);G||(X="value",F=="progress"&&x==null?_.removeAttribute("value"):x!=null&&(x!==_[X]||F=="progress"&&!x||F=="option"&&x!=v[X])&&U2(_,X,x,v[X],N),X="checked",R!=null&&R!=_[X]&&U2(_,X,R,v[X],N))}return _}function q4(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){l_.__e(N,j)}}function Z3(_,$,j){var Z,N;if(l_.unmount&&l_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||q4(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){l_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&Z3(Z[N],$,j||typeof _.type!="function");j||X4(_.__e),_.__c=_.__=_.__e=void 0}function z9(_,$,j){return this.constructor(_,j)}function N3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),l_.__&&l_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],W4($,_=(!Z&&j||$).__k=a1(w2,null,[_]),N||D2,D2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?y2.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),$3(K,_,z)}y2=E2.slice,l_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(G){_=G}throw _}},d1=0,e8=function(_){return _!=null&&_.constructor===void 0},H2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=L$({},this.state),typeof _=="function"&&(_=_(L$({},j),this.props)),_&&L$(j,_),_!=null&&this.__v&&($&&this._sb.push($),f1(this))},H2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),f1(this))},H2.prototype.render=w2,D$=[],s1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o1=function(_,$){return _.__v.__b-$.__v.__b},k2.__r=0,r1=/(PointerCapture)$|Capture$/i,G4=0,N4=u1(!1),K4=u1(!0),_9=0;var e$,X0,Z4,v1,_2=0,K3=[],G0=l_,m1=G0.__b,g1=G0.__r,c1=G0.diffed,p1=G0.__c,h1=G0.unmount,i1=G0.__;function V4(_,$){G0.__h&&G0.__h(X0,_,_2||$),_2=0;var j=X0.__H||(X0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return _2=1,Y9(Y3,_)}function Y9(_,$,j){var Z=V4(e$++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):Y3(void 0,$),function(G){var W=Z.__N?Z.__N[0]:Z.__[0],X=Z.t(W,G);W!==X&&(Z.__N=[X,Z.__[1]],Z.__c.setState({}))}],Z.__c=X0,!X0.__f)){var N=function(G,W,X){if(!Z.__c.__H)return!0;var B=Z.__c.__H.__.filter(function(H){return H.__c});if(B.every(function(H){return!H.__N}))return!K||K.call(this,G,W,X);var V=Z.__c.props!==G;return B.some(function(H){if(H.__N){var A=H.__[0];H.__=H.__N,H.__N=void 0,A!==H.__[0]&&(V=!0)}}),K&&K.call(this,G,W,X)||V};X0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=X0;X0.componentWillUpdate=function(G,W,X){if(this.__e){var B=K;K=void 0,N(G,W,X),K=B}z&&z.call(this,G,W,X)},X0.shouldComponentUpdate=N}return Z.__N||Z.__}function u(_,$){var j=V4(e$++,3);!G0.__s&&z3(j.__H,$)&&(j.__=_,j.u=$,X0.__H.__h.push(j))}function D(_){return _2=5,n_(function(){return{current:_}},[])}function n_(_,$){var j=V4(e$++,7);return z3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return _2=8,n_(function(){return _},$)}function G9(){for(var _;_=K3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(J2),$.__h.some(Y4),$.__h=[]}catch(j){$.__h=[],G0.__e(j,_.__v)}}}G0.__b=function(_){X0=null,m1&&m1(_)},G0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),i1&&i1(_,$)},G0.__r=function(_){g1&&g1(_),e$=0;var $=(X0=_.__c).__H;$&&(Z4===X0?($.__h=[],X0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(J2),$.__h.some(Y4),$.__h=[],e$=0)),Z4=X0},G0.diffed=function(_){c1&&c1(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(K3.push($)!==1&&v1===G0.requestAnimationFrame||((v1=G0.requestAnimationFrame)||X9)(G9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z4=X0=null},G0.__c=function(_,$){$.some(function(j){try{j.__h.some(J2),j.__h=j.__h.filter(function(Z){return!Z.__||Y4(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],G0.__e(Z,j.__v)}}),p1&&p1(_,$)},G0.unmount=function(_){h1&&h1(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{J2(Z)}catch(N){$=N}}),j.__H=void 0,$&&G0.__e($,j.__v))};var l1=typeof requestAnimationFrame=="function";function X9(_){var $,j=function(){clearTimeout(Z),l1&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);l1&&($=requestAnimationFrame(j))}function J2(_){var $=X0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X0=$}function Y4(_){var $=X0;_.__c=_.__(),X0=$}function z3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function Y3(_,$){return typeof $=="function"?$(_):$}var G3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],G=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=G:z===4?Z[1]=Object.assign(Z[1]||{},G):z===5?(Z[1]=Z[1]||{})[$[++K]]=G:z===6?Z[1][$[++K]]+=G+"":z?(N=_.apply(G,G3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(G)}return Z},n1=new Map;function W9(_){var $=n1.get(this);return $||($=new Map,n1.set(this,$)),($=G3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",G="",W=[0],X=function(H){K===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?W.push(0,H,z):K===3&&(H||z)?(W.push(3,H,z),K=2):K===2&&z==="..."&&H?W.push(4,H,0):K===2&&z&&!H?W.push(5,0,!0,z):K>=5&&((z||!H&&K===5)&&(W.push(K,0,z,N),K=6),H&&(W.push(K,H,0,N),K=6)),z=""},B=0;B<j.length;B++){B&&(K===1&&X(),X(B));for(var V=0;V<j[B].length;V++)Z=j[B][V],K===1?Z==="<"?(X(),W=[W],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:G?Z===G?G="":z+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(X(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[B][V+1]===">")?(X(),K===3&&(W=W[0]),K=W,(W=W[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(X(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,W=W[0])}return X(),W}(_)),$),arguments,[])).length>1?$:$[0]}var L=W9.bind(a1);var s0={};a8(s0,{uploadWorkspaceFile:()=>C2,uploadMedia:()=>J4,updateWorkspaceFile:()=>y9,submitAdaptiveCardAction:()=>D4,streamSidePrompt:()=>E9,steerAgentQueueItem:()=>D9,setWorkspaceVisibility:()=>N2,setAgentThoughtVisibility:()=>y4,sendPeerAgentMessage:()=>U9,sendAgentMessage:()=>g$,searchPosts:()=>B4,respondToAgentRequest:()=>P2,renameWorkspaceFile:()=>I4,renameChatBranch:()=>L9,removeAgentQueueItem:()=>J9,pruneChatBranch:()=>Q9,moveWorkspaceEntry:()=>S4,getWorkspaceTree:()=>Z2,getWorkspaceRawUrl:()=>b2,getWorkspaceFile:()=>P4,getWorkspaceDownloadUrl:()=>T4,getWorkspaceBranch:()=>k9,getTimeline:()=>$2,getThumbnailUrl:()=>A4,getThread:()=>L4,getPostsByHashtag:()=>O4,getMediaUrl:()=>Z$,getMediaText:()=>w4,getMediaInfo:()=>c$,getMediaBlob:()=>M4,getChatBranches:()=>B9,getAgents:()=>F4,getAgentThought:()=>k4,getAgentStatus:()=>H4,getAgentQueueState:()=>H9,getAgentModels:()=>j2,getAgentContext:()=>F9,getActiveChatAgents:()=>U4,forkChatBranch:()=>M2,deleteWorkspaceFile:()=>x4,deletePost:()=>Q4,createWorkspaceFile:()=>b4,createReply:()=>O9,createPost:()=>V9,attachWorkspaceFile:()=>C4,addToWhitelist:()=>E4,SSEClient:()=>I2});async function f_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function X3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function q9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:G}=await j.read();if(G)break;N+=Z.decode(z,{stream:!0});let W=N.split(`

`);N=W.pop()||"";for(let X of W){let B=X3(X);if(B)$(B.event,B.data)}}N+=Z.decode();let K=X3(N);if(K)$(K.event,K.data)}async function $2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return f_(Z)}async function O4(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function B4(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",W=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return f_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${G}${W}`)}async function L4(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return f_(`/thread/${_}${j}`)}async function V9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return f_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function O9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return f_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function Q4(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return f_(N,{method:"DELETE"})}async function g$(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return f_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function U4(){return f_("/agent/active-chats")}async function B9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/branches${$}`)}async function M2(_,$={}){return f_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function L9(_,$={}){return f_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function Q9(_){return f_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function U9(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return f_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function F4(){return f_("/agent/roster")}async function H4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/status${$}`)}async function F9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/context${$}`)}async function H9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/queue-state${$}`)}async function J9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function D9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function j2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return f_(`/agent/models${$}`)}async function J4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function P2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function D4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function E9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await q9(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function E4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function k4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return f_(j)}async function y4(_,$,j){return f_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function Z$(_){return`/media/${_}`}function A4(_){return`/media/${_}/thumbnail`}async function c$(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function w4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function M4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function Z2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return f_(Z)}async function k9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return f_($)}async function P4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return f_(N)}async function y9(_,$){return f_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function C4(_){return f_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function C2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",G=await fetch(""+z,{method:"POST",body:Z});if(!G.ok){let W=await G.json().catch(()=>({error:"Upload failed"})),X=Error(W.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=W.code,X}return G.json()}async function b4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function I4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function S4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function x4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return f_($,{method:"DELETE"})}async function N2(_,$=!1){return f_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function b2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function T4(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function o0(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function o_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function p$(_,$=!1){let j=o0(_);if(j===null)return $;return j==="true"}function h$(_,$=null){let j=o0(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function S2(_){return String(_||"").trim().toLowerCase()}function f4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return S2($[1]||"")}function W3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=S2(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function q3(_,$,j={}){let Z=f4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return W3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return S2(K?.agent_name).startsWith(Z)})}function R4(_){let $=S2(_);return $?`@${$} `:""}function V3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return W3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function O3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function N$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let G=`${_}-file-pill`,W=`${_}-file-name`,X=`${_}-file-remove`,B=z==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${G} title=${j||$} onClick=${N}>
      ${B}
      <span class=${W}>${$}</span>
      ${Z&&L`
        <button
          class=${X}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Z()}}
          title=${K}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var A9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/test-card",description:"Emit a built-in Adaptive Card test message (/test-card list for variants)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function w9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${B3(j)} / ${B3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,K=7,z=2*Math.PI*7,G=$/100*z,W=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${W}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${z}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function B3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function L3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:G,fileRefs:W=[],onRemoveFileRef:X,onClearFileRefs:B,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:A,activeModel:x=null,modelUsage:R=null,thinkingLevel:v=null,supportsThinking:S=!1,contextUsage:F=null,notificationsEnabled:w=!1,notificationPermission:C="default",onToggleNotifications:p,onModelChange:__,onModelStateChange:t,activeEditorPath:n=null,onAttachEditorFile:N_,onOpenFilePill:l,followupQueueItems:B_=[],onInjectQueuedFollowup:x_,onRemoveQueuedFollowup:s,onSubmitIntercept:$_,onMessageResponse:K_,onPopOutChat:Z_,isAgentActive:W_=!1,activeChatAgents:O_=[],currentChatJid:k_="web:default"}){let[G_,w_]=T(""),[L_,$0]=T(""),[y_,R_]=T([]),[S_,r_]=T(!1),[z_,a]=T([]),[A_,q_]=T(0),[H_,Q_]=T(!1),[g_,U_]=T([]),[M_,t_]=T(0),[a_,T_]=T(!1),[Z0,N0]=T(!1),[C_,e_]=T(!1),[J0,y0]=T([]),[D0,W0]=T(!1),[A0,d_]=T(0),u_=D(null),I0=D(null),h_=D(null),s_=D(null),w0=D(null),J_=D(null),b=D(0),e=200,P_=(Q)=>{let I=new Set,f=[];for(let d of Q||[]){if(typeof d!=="string")continue;let Y_=d.trim();if(!Y_||I.has(Y_))continue;I.add(Y_),f.push(Y_)}return f},c_=()=>{let Q=o0("piclaw_compose_history");if(!Q)return[];try{let I=JSON.parse(Q);if(!Array.isArray(I))return[];return P_(I)}catch{return[]}},M0=(Q)=>{o_("piclaw_compose_history",JSON.stringify(Q))},a0=D(c_()),K0=D(-1),q0=D(""),O0=G_.trim()||y_.length>0||W.length>0||V.length>0,t0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),S0=typeof window<"u"&&typeof Notification<"u",h0=typeof window<"u"?Boolean(window.isSecureContext):!1,n$=S0&&h0&&C!=="denied",k$=C==="granted"&&w,l0=k$?"Disable notifications":"Enable notifications",z0=V3(O_,{currentChatJid:k_,limit:4}),z$=z0.length>0,V0=!j&&O3({footerWidth:A0,visibleAgentCount:z0.length,hasContextIndicator:Boolean(F&&F.percent!=null)}),Y0=x||"",v_=S&&v?` (${v})`:"",u0=v_.trim()?`${v}`:"",x0=typeof R?.hint_short==="string"?R.hint_short.trim():"",Y$=[u0||null,x0||null].filter(Boolean).join(" • "),F$=[Y0?`Current model: ${Y0}${v_}`:null,R?.plan?`Plan: ${R.plan}`:null,x0||null,R?.primary?.reset_description||null,R?.secondary?.reset_description||null].filter(Boolean),y$=Z0?"Switching model…":F$.join(" • ")||`Current model: ${Y0}${v_} (tap to open model picker)`,E0=(Q)=>{if(!Q||typeof Q!=="object")return;let I=Q.model??Q.current;if(typeof t==="function")t({model:I??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(I&&typeof __==="function")__(I)},A$=(Q)=>{let I=Q||u_.current;if(!I)return;I.style.height="auto",I.style.height=`${I.scrollHeight}px`,I.style.overflowY="hidden"},d$=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let f=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<f.length;I_+=1)if(f[I_].trim()==="Files:"&&f[I_+1]&&/^\s*-\s+/.test(f[I_+1])){d=I_;break}if(d===-1)return{content:Q,fileRefs:[]};let Y_=[],D_=d+1;for(;D_<f.length;D_+=1){let I_=f[D_];if(/^\s*-\s+/.test(I_))Y_.push(I_.replace(/^\s*-\s+/,"").trim());else if(!I_.trim())break;else break}if(Y_.length===0)return{content:Q,fileRefs:[]};let b_=f.slice(0,d),_0=f.slice(D_);return{content:[...b_,..._0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Y_}},w$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let f=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),d=-1;for(let I_=0;I_<f.length;I_+=1)if(f[I_].trim()==="Referenced messages:"&&f[I_+1]&&/^\s*-\s+/.test(f[I_+1])){d=I_;break}if(d===-1)return{content:Q,messageRefs:[]};let Y_=[],D_=d+1;for(;D_<f.length;D_+=1){let I_=f[D_];if(/^\s*-\s+/.test(I_)){let g0=I_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(g0)Y_.push(g0[1])}else if(!I_.trim())break;else break}if(Y_.length===0)return{content:Q,messageRefs:[]};let b_=f.slice(0,d),_0=f.slice(D_);return{content:[...b_,..._0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Y_}},s$=(Q)=>{let I=d$(Q||""),f=w$(I.content||"");return{text:f.content||"",fileRefs:I.fileRefs,messageRefs:f.messageRefs}},M$=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){Q_(!1),a([]);return}let I=Q.toLowerCase().split(" ")[0];if(I.length<1){Q_(!1),a([]);return}let f=A9.filter((d)=>d.name.startsWith(I)||d.name.replace(/-/g,"").startsWith(I.replace(/-/g,"")));if(f.length>0&&!(f.length===1&&f[0].name===I))T_(!1),U_([]),a(f),q_(0),Q_(!0);else Q_(!1),a([])},B0=(Q)=>{let I=G_,f=I.indexOf(" "),d=f>=0?I.slice(f):"",Y_=Q.name+d;w_(Y_),Q_(!1),a([]),requestAnimationFrame(()=>{let D_=u_.current;if(!D_)return;let b_=Y_.length;D_.selectionStart=b_,D_.selectionEnd=b_,D_.focus()})},H$=(Q)=>{if(f4(Q)==null){T_(!1),U_([]);return}let I=q3(O_,Q,{currentChatJid:k_});if(I.length>0&&!(I.length===1&&R4(I[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))Q_(!1),a([]),U_(I),t_(0),T_(!0);else T_(!1),U_([])},k0=(Q)=>{let I=R4(Q?.agent_name);if(!I)return;w_(I),T_(!1),U_([]),requestAnimationFrame(()=>{let f=u_.current;if(!f)return;let d=I.length;f.selectionStart=d,f.selectionEnd=d,f.focus()})},F0=(Q)=>{if(j)$0(Q);else w_(Q),M$(Q),H$(Q);requestAnimationFrame(()=>A$())},G$=(Q)=>{let I=j?L_:G_,f=I&&!I.endsWith(`
`)?`
`:"",d=`${I}${f}${Q}`.trimStart();F0(d)},V2=(Q)=>{let I=Q?.command?.model_label;if(I)return I;let f=Q?.command?.message;if(typeof f==="string"){let d=f.match(/•\s+([^\n]+?)\s+\(current\)/);if(d?.[1])return d[1].trim()}return null},L0=async(Q)=>{if(j||Z0)return;N0(!0);try{let I=await g$("default",Q,null,[],null,k_),f=V2(I);E0({model:f??x??null,thinking_level:I?.command?.thinking_level,supports_thinking:I?.command?.supports_thinking});try{let d=await j2(k_);if(d)E0(d)}catch{}return _?.(),!0}catch(I){return console.error("Failed to switch model:",I),alert("Failed to switch model: "+I.message),!1}finally{N0(!1)}},P$=async()=>{await L0("/cycle-model")},C$=async(Q)=>{if(!Q||Z0)return;if(await L0(`/model ${Q}`))e_(!1)},X$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),e_((I)=>!I)},b$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return W_?"queue":null},v0=async(Q,I,f={})=>{let{includeMedia:d=!0,includeFileRefs:Y_=!0,includeMessageRefs:D_=!0,clearAfterSubmit:b_=!0,recordHistory:_0=!0}=f||{},f0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:G_,I_=typeof f0==="string"?f0:"";if(!I_.trim()&&(d?y_.length===0:!0)&&(Y_?W.length===0:!0)&&(D_?V.length===0:!0))return;Q_(!1),a([]),T_(!1),U_([]);let g0=d?[...y_]:[],V$=Y_?[...W]:[],J$=D_?[...V]:[],O$=I_.trim();if(_0&&O$){let O=a0.current,U=P_(O.filter((E)=>E!==O$));if(U.push(O$),U.length>200)U.splice(0,U.length-200);a0.current=U,M0(U),K0.current=-1,q0.current=""}if(b_)w_(""),R_([]),B?.(),A?.();(async()=>{try{if(await $_?.({content:O$,submitMode:I,fileRefs:V$,messageRefs:J$,mediaFiles:g0})){_?.();return}let U=[];for(let i of g0){let g=await J4(i);U.push(g.id)}let E=V$.length?`Files:
${V$.map((i)=>`- ${i}`).join(`
`)}`:"",k=J$.length?`Referenced messages:
${J$.map((i)=>`- message:${i}`).join(`
`)}`:"",m=U.length?`Images:
${U.map((i,g)=>{let Q0=g0[g]?.name||`image-${g+1}`;return`- attachment:${i} (${Q0})`}).join(`
`)}`:"",r=[O$,E,k,m].filter(Boolean).join(`

`),o=await g$("default",r,null,U,b$(I),k_);if(K_?.(o),o?.command){E0({model:o.command.model_label??x??null,thinking_level:o.command.thinking_level,supports_thinking:o.command.supports_thinking});try{let i=await j2(k_);if(i)E0(i)}catch{}}_?.()}catch(O){console.error("Failed to post:",O)}})()},e0=(Q)=>{x_?.(Q)},T0=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),$0(""),G?.();return}if(a_&&g_.length>0){let I=u_.current?.value??(j?L_:G_);if(!String(I||"").match(/^@([a-zA-Z0-9_-]*)$/))T_(!1),U_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),t_((f)=>(f+1)%g_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),t_((f)=>(f-1+g_.length)%g_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),k0(g_[M_]);return}if(Q.key==="Escape"){Q.preventDefault(),T_(!1),U_([]);return}}}if(H_&&z_.length>0){let I=u_.current?.value??(j?L_:G_);if(!String(I||"").startsWith("/"))Q_(!1),a([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),q_((f)=>(f+1)%z_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),q_((f)=>(f-1+z_.length)%z_.length);return}if(Q.key==="Tab"){Q.preventDefault(),B0(z_[A_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(u_.current?.value??(j?L_:G_)).includes(" ")){Q.preventDefault();let Y_=z_[A_];Q_(!1),a([]),v0(Y_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),Q_(!1),a([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let I=u_.current;if(!I)return;let f=I.value||"",d=I.selectionStart===0&&I.selectionEnd===0,Y_=I.selectionStart===f.length&&I.selectionEnd===f.length;if(Q.key==="ArrowUp"&&d||Q.key==="ArrowDown"&&Y_){let D_=a0.current;if(!D_.length)return;Q.preventDefault();let b_=K0.current;if(Q.key==="ArrowUp"){if(b_===-1)q0.current=f,b_=D_.length-1;else if(b_>0)b_-=1;K0.current=b_,F0(D_[b_]||"")}else{if(b_===-1)return;if(b_<D_.length-1)b_+=1,K0.current=b_,F0(D_[b_]||"");else K0.current=-1,F0(q0.current||""),q0.current=""}requestAnimationFrame(()=>{let _0=u_.current;if(!_0)return;let f0=_0.value.length;_0.selectionStart=f0,_0.selectionEnd=f0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let I=u_.current?.value??(j?L_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else v0(I,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let I=u_.current?.value??(j?L_:G_);if(j){if(I.trim())N?.(I.trim(),Z)}else v0(I)}},m0=(Q)=>{let I=Array.from(Q||[]).filter((f)=>f&&f.type&&f.type.startsWith("image/"));if(!I.length)return;R_((f)=>[...f,...I])},I$=(Q)=>{m0(Q.target.files),Q.target.value=""},S$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),b.current+=1,r_(!0)},_$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),b.current=Math.max(0,b.current-1),b.current===0)r_(!1)},W$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";r_(!0)},o$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),b.current=0,r_(!1),m0(Q.dataTransfer?.files||[])},P0=(Q)=>{if(j)return;let I=Q.clipboardData?.items;if(!I||!I.length)return;let f=[];for(let d of I){if(d.kind!=="file")continue;let Y_=d.getAsFile?.();if(Y_)f.push(Y_)}if(f.length>0)Q.preventDefault(),m0(f)},$$=(Q)=>{R_((I)=>I.filter((f,d)=>d!==Q))},q$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:I,longitude:f,accuracy:d}=Q.coords,Y_=`${I.toFixed(5)}, ${f.toFixed(5)}`,D_=Number.isFinite(d)?` ±${Math.round(d)}m`:"",b_=`https://maps.google.com/?q=${I},${f}`,_0=`Location: ${Y_}${D_} ${b_}`;G$(_0)},(Q)=>{let I=Q?.message||"Unable to retrieve location.";alert(`Location error: ${I}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!C_)return;W0(!0),j2(k_).then((Q)=>{let I=Array.isArray(Q?.models)?Q.models.filter((f)=>typeof f==="string"&&f.trim().length>0):[];y0(I),E0(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),y0([])}).finally(()=>{W0(!1)})},[C_,x]),u(()=>{if(j)e_(!1),Q_(!1),a([]),T_(!1),U_([])},[j]),u(()=>{if(!C_)return;let Q=(I)=>{let f=s_.current,d=w0.current,Y_=I.target;if(f&&f.contains(Y_))return;if(d&&d.contains(Y_))return;e_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[C_]),u(()=>{let Q=()=>{let D_=J_.current?.clientWidth||0;d_((b_)=>b_===D_?b_:D_)};Q();let I=J_.current,f=0,d=()=>{if(f)cancelAnimationFrame(f);f=requestAnimationFrame(()=>{f=0,Q()})},Y_=null;if(I&&typeof ResizeObserver<"u")Y_=new ResizeObserver(()=>d()),Y_.observe(I);if(typeof window<"u")window.addEventListener("resize",d);return()=>{if(f)cancelAnimationFrame(f);if(Y_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",d)}},[j,x,z0.length,F?.percent]);let x$=(Q)=>{let I=Q.target.value;A$(Q.target),F0(I)};return u(()=>{requestAnimationFrame(()=>A$())},[G_,L_,j]),u(()=>{if(j)return;H$(G_)},[O_,k_,G_,j]),L`
        <div class="compose-box">
            ${!j&&B_.length>0&&L`
                <div class="compose-queue-stack">
                    ${B_.map((Q)=>{let I=typeof Q?.content==="string"?Q.content:"",f=s$(I);if(!f.text.trim()&&f.fileRefs.length===0&&f.messageRefs.length===0)return null;return L`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${I}>
                                    ${f.text.trim()&&L`
                                        <div class="compose-queue-stack-text">${f.text}</div>
                                    `}
                                    ${(f.messageRefs.length>0||f.fileRefs.length>0)&&L`
                                        <div class="compose-queue-stack-refs">
                                            ${f.messageRefs.map((d)=>L`
                                                <${N$}
                                                    key=${"queue-msg-"+d}
                                                    prefix="compose"
                                                    label=${"msg:"+d}
                                                    title=${"Message reference: "+d}
                                                    icon="message"
                                                />
                                            `)}
                                            ${f.fileRefs.map((d)=>{let Y_=d.split("/").pop()||d;return L`
                                                    <${N$}
                                                        key=${"queue-file-"+d}
                                                        prefix="compose"
                                                        label=${Y_}
                                                        title=${d}
                                                        onClick=${()=>l?.(d)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <button
                                    class="compose-queue-stack-steer-btn"
                                    type="button"
                                    title="Inject queued follow-up as steer"
                                    onClick=${()=>e0(Q)}
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
                                    onClick=${()=>s?.(Q)}
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
                class=${`compose-input-wrapper${S_?" drag-active":""}`}
                onDragEnter=${S$}
                onDragOver=${W$}
                onDragLeave=${_$}
                onDrop=${o$}
            >
                <div class="compose-input-main">
                    ${(W.length>0||y_.length>0||V.length>0)&&L`
                        <div class="compose-file-refs">
                            ${V.map((Q)=>{return L`
                                    <${N$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(Q)}
                                    />
                                `})}
                            ${W.map((Q)=>{let I=Q.split("/").pop()||Q;return L`
                                    <${N$}
                                        prefix="compose"
                                        label=${I}
                                        title=${Q}
                                        onClick=${()=>l?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>X?.(Q)}
                                    />
                                `})}
                            ${y_.map((Q,I)=>{let f=Q?.name||`image-${I+1}`;return L`
                                    <${N$}
                                        key=${f+I}
                                        prefix="compose"
                                        label=${f}
                                        title=${f}
                                        removeTitle="Remove image"
                                        onRemove=${()=>$$(I)}
                                    />
                                `})}
                        </div>
                    `}
                    ${!j&&typeof Z_==="function"&&L`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Z_?.()}
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
                        ref=${u_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?L_:G_}
                        onInput=${x$}
                        onKeyDown=${T0}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${a_&&g_.length>0&&L`
                        <div class="slash-autocomplete" ref=${h_}>
                            ${g_.map((Q,I)=>L`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${I===M_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),k0(Q)}}
                                    onMouseEnter=${()=>t_(I)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${H_&&z_.length>0&&L`
                        <div class="slash-autocomplete" ref=${I0}>
                            ${z_.map((Q,I)=>L`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${I===A_?" active":""}`}
                                    onMouseDown=${(f)=>{f.preventDefault(),B0(Q)}}
                                    onMouseEnter=${()=>q_(I)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${C_&&!j&&L`
                        <div class="compose-model-popup" ref=${s_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${D0&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!D0&&J0.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!D0&&J0.map((Q)=>L`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${x===Q?" active":""}`}
                                        onClick=${()=>{C$(Q)}}
                                        disabled=${Z0}
                                    >
                                        ${Q}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{P$()}}
                                    disabled=${Z0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${J_}>
                    ${!j&&x&&L`
                    <div class="compose-meta-row">
                        ${!j&&x&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${w0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${y$}
                                    aria-label="Open model picker"
                                    onClick=${X$}
                                    disabled=${Z0}
                                >
                                    ${Z0?"Switching…":Y0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!Z0&&Y$&&L`
                                        <span class="compose-model-usage-hint" title=${y$}>
                                            ${Y$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${V0&&L`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${z0.map((Q)=>L`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>k0(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&F&&F.percent!=null&&L`
                        <${w9} usage=${F} />
                    `}
                    ${j&&L`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>K?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:z}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${t0&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${q$}
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
                    ${n$&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${k$?" active":""}`}
                            onClick=${p}
                            title=${l0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${n&&N_&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${N_}
                                title=${`Attach open file: ${n}`}
                                type="button"
                                disabled=${W.includes(n)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${I$} />
                        </label>
                        <button 
                            class="icon-btn send-btn" 
                            type="button"
                            onClick=${()=>{v0()}}
                            disabled=${!O0}
                            title="Send (Enter)"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                        </button>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var U3="piclaw_theme",m4="piclaw_tint",f2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},M9={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},Q3={default:{label:"Default",mode:"auto",light:f2,dark:M9},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},P9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],R2={theme:"default",tint:null},F3="light",u4=!1;function H3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function i$(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function C9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),G=parseInt(N[3],10);if(![K,z,G].every((X)=>Number.isFinite(X)))return null;let W=`#${[K,z,G].map((X)=>X.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:G,hex:W}}function J3(_){return i$(_)||C9(_)}function K2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function v4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function b9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function I9(_){return b9(_)>0.4?"#000000":"#ffffff"}function D3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function g4(_){return Q3[_]||Q3.default}function S9(_){return _.mode==="auto"?D3():_.mode}function x9(_,$){let j=g4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||f2}function T9(_,$,j){let Z=J3($);if(!Z)return _;let N=i$(_.bgPrimary),K=i$(_.bgSecondary),z=i$(_.bgHover),G=i$(_.borderColor);if(!N||!K||!z||!G)return _;let X=i$(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:K2(N,Z,0.08),bgSecondary:K2(K,Z,0.12),bgHover:K2(z,Z,0.16),borderColor:K2(G,Z,0.08),accent:Z.hex,accentHover:X?K2(Z,X,0.18):Z.hex}}function f9(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=J3(Z),K=N?v4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?v4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?v4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",W=N?I9(N):$==="dark"?"#000000":"#ffffff",X={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":G,"--accent-contrast-text":W,"--danger-color":_.danger||f2.danger,"--success-color":_.success||f2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(X).forEach(([B,V])=>{if(V)j.style.setProperty(B,V)})}function R9(){if(typeof document>"u")return;let _=document.documentElement;P9.forEach(($)=>_.style.removeProperty($))}function x2(_){if(typeof document>"u")return null;let $=document.querySelector(`meta[name="${_}"]`);if(!$)$=document.createElement("meta"),$.setAttribute("name",_),document.head.appendChild($);return $}function u9(_,$){if(typeof document>"u")return;let j=x2("theme-color");if(j&&_)j.setAttribute("content",_);let Z=x2("msapplication-TileColor");if(Z&&_)Z.setAttribute("content",_);let N=x2("msapplication-navbutton-color");if(N&&_)N.setAttribute("content",_);let K=x2("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function v9(){if(typeof window>"u")return;let _={...R2,mode:F3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function c4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=H3(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=g4(j),K=S9(N),z=x9(j,K);R2={theme:j,tint:Z},F3=K;let G=document.documentElement;G.dataset.theme=K,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=K;let W=z;if(j==="default"&&Z)W=T9(z,Z,K);if(j==="default"&&!Z)R9();else f9(W,K);if(u9(W.bgPrimary,K),v9(),$.persist!==!1)if(o_(U3,j),Z)o_(m4,Z);else o_(m4,"")}function T2(){if(g4(R2.theme).mode!=="auto")return;c4(R2,{persist:!1})}function E3(){if(typeof window>"u")return()=>{};let _=H3(o0(U3)||"default"),$=o0(m4),j=$?$.trim():null;if(c4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!u4){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",T2);else if(Z.addListener)Z.addListener(T2);return u4=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",T2);else if(Z.removeListener)Z.removeListener(T2);u4=!1}}return()=>{}}function k3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;c4({theme:j||"default",tint:Z},{persist:!0})}function y3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return D3()}var u2=/#(\w+)/g,m9=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp"]),g9=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),c9=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),p9={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},h9=new Set(["http:","https:","mailto:",""]);function A3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function T$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!h9.has(Z.protocol))return null;return Z.href}catch{return null}}function w3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let G=z.tagName.toLowerCase();if(!g9.has(G)){let X=z.parentNode;if(!X)continue;while(z.firstChild)X.insertBefore(z.firstChild,z);X.removeChild(z);continue}let W=p9[G]||new Set;for(let X of Array.from(z.attributes)){let B=X.name.toLowerCase(),V=X.value;if(B.startsWith("on")){z.removeAttribute(X.name);continue}if(B.startsWith("data-")||B.startsWith("aria-"))continue;if(W.has(B)||c9.has(B)){if(B==="href"){let H=T$(V);if(!H)z.removeAttribute(X.name);else if(z.setAttribute(X.name,H),G==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(B==="src"){let H=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,A=T$(H,{allowDataImage:G==="img"});if(!A)z.removeAttribute(X.name);else z.setAttribute(X.name,A)}continue}z.removeAttribute(X.name)}}return j.body.innerHTML}function M3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function v2(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=M3(j);if(N===j)break;j=N}return j}function i9(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let G of j){if(!K&&G.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&G.trim().match(/^```\s*$/)){let W=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${W}@@`),K=!1,z=[];continue}if(K)z.push(G);else N.push(G)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function l9(_){if(!_)return _;return v2(_,5)}function n9(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function d9(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function s9(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=l9(K);return`<div class="mermaid-container" data-mermaid="${n9(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function P3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function C3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,W=(K.endsWith("/")?K.slice(0,-1).trim():K).split(/\s+/)[0]?.toLowerCase();if(!W||!m9.has(W))return $;if(W==="br")return N?"":"<br>";if(N)return`</${W}>`;return`<${W}>`})}function b3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function I3(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function o9(_){if(!window.katex)return _;let $=(z)=>M3(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let G=[],W=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(X)=>{let B=G.length;return G.push(X),`@@CODE_BLOCK_${B}@@`});return W=W.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(X)=>{let B=G.length;return G.push(X),`@@CODE_INLINE_${B}@@`}),{html:W,blocks:G}},Z=(z,G)=>{if(!G.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(W,X)=>{let B=Number(X);return G[B]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,G,W)=>{try{let X=katex.renderToString($(W.trim()),{displayMode:!0,throwOnError:!1});return`${G}${X}`}catch(X){return`<span class="math-error" title="${A3(X.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,G,W)=>{if(/\s$/.test(W))return z;try{let X=katex.renderToString($(W),{displayMode:!1,throwOnError:!1});return`${G}${X}`}catch(X){return`${G}<span class="math-error" title="${A3(X.message)}">$${W}$</span>`}}),Z(K,N.blocks)}function r9(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(u2.lastIndex=0,!u2.test(z))continue;u2.lastIndex=0;let G=K.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let W=z.split(u2);if(W.length<=1)continue;let X=$.createDocumentFragment();W.forEach((B,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",B),H.textContent=`#${B}`,X.appendChild(H)}else X.appendChild($.createTextNode(B))}),K.parentNode?.replaceChild(X,K)}return $.body.innerHTML}function a9(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function p0(_,$,j={}){if(!_)return"";let Z=a9(_),{text:N,blocks:K}=i9(Z),z=v2(N,2),W=P3(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=C3(W),B=window.marked?marked.parse(X,{headerIds:!1,mangle:!1}):X.replace(/\n/g,"<br>");return B=b3(B),B=I3(B),B=o9(B),B=r9(B),B=s9(B,K),B=w3(B,j),B}function m2(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=v2($,2),N=P3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=C3(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=b3(z),z=I3(z),z=w3(z),z}async function Q$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=y3()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let G=z.dataset.mermaid,W=d9(G||""),X=v2(W,2),B=await $(X,{...N,transparent:!0});z.innerHTML=B,z.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let W=document.createElement("pre");W.className="mermaid-error",W.textContent=`Diagram error: ${G.message}`,z.innerHTML="",z.appendChild(W),z.removeAttribute("data-mermaid")}}function S3(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function x3(_){return String(_||"").trim()||"web:default"}function T3(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function f3(_){if(!_)return!1;return _.status!=="running"}function R3(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function u3({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),K=D(null),z=_?.thinking?m2(_.thinking):"",G=_?.answer?p0(_.answer,null,{sanitize:!1}):"";if(u(()=>{if(N.current&&z)Q$(N.current).catch(()=>{})},[z]),u(()=>{if(K.current&&G)Q$(K.current).catch(()=>{})},[G]),!_)return null;let W=_.status==="running",X=Boolean(String(_.answer||"").trim()),B=Boolean(String(_.thinking||"").trim()),V=T3(_),H=f3(_),A=!W&&X,x=W?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${x}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&L`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&L`<div class="btw-block btw-error">${_.error}</div>`}
            ${B&&L`
                <details class="btw-block btw-thinking" open=${W?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${V&&L`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${H&&L`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&L`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!A}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}var v3="PiClaw";function p4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,G=K[z],W=Z.trim().toLowerCase(),X=typeof $==="string"?$.trim():"",B=X?X:null,V=j||W==="PiClaw".toLowerCase()||W==="pi";return{letter:N,color:G,image:B||(V?"/static/icon-192.png":null)}}function m3(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function g3(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function c3(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",G=K?.dataset?.tint||"",W=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(W&&(G||z&&z!=="default"))return W}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function t9(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function z2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function p3(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return z2(_)?"Compacting context":"Working..."}function e9(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function h3(_,$=Date.now()){let j=t9(_);if(j===null)return null;return e9(Math.max(0,$-j))}function i3({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:G,onPanelToggle:W}){let V=(a)=>{if(!a)return{text:"",totalLines:0,fullText:""};if(typeof a==="string"){let Q_=a,g_=Q_?Q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Q_,totalLines:g_,fullText:Q_}}let A_=a.text||"",q_=a.fullText||a.full_text||A_,H_=Number.isFinite(a.totalLines)?a.totalLines:q_?q_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A_,totalLines:H_,fullText:q_}},H=160,A=(a)=>String(a||"").replace(/<\/?internal>/gi,""),x=(a)=>{if(!a)return 1;return Math.max(1,Math.ceil(a.length/160))},R=(a,A_,q_)=>{let H_=(a||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!H_)return{text:"",omitted:0,totalLines:Number.isFinite(q_)?q_:0,visibleLines:0};let Q_=H_.split(`
`),g_=Q_.length>A_?Q_.slice(0,A_).join(`
`):H_,U_=Number.isFinite(q_)?q_:Q_.reduce((a_,T_)=>a_+x(T_),0),M_=g_?g_.split(`
`).reduce((a_,T_)=>a_+x(T_),0):0,t_=Math.max(U_-M_,0);return{text:g_,omitted:t_,totalLines:U_,visibleLines:M_}},v=V(j),S=V(Z),F=V($),w=Boolean(v.text)||v.totalLines>0,C=Boolean(S.text)||S.totalLines>0,p=Boolean(F.fullText?.trim()||F.text?.trim());if(!_&&!p&&!w&&!C&&!N&&!K)return null;let[__,t]=T(new Set),[n,N_]=T(()=>Date.now()),l=(a)=>t((A_)=>{let q_=new Set(A_),H_=!q_.has(a);if(H_)q_.add(a);else q_.delete(a);if(typeof W==="function")W(a,H_);return q_});u(()=>{t(new Set)},[z]);let B_=z2(_);u(()=>{if(!B_)return;N_(Date.now());let a=setInterval(()=>N_(Date.now()),1000);return()=>clearInterval(a)},[B_,_?.started_at,_?.startedAt]);let x_=_?.turn_id||z,s=c3(x_),$_=G?"turn-dot turn-dot-queued":"turn-dot",K_=(a)=>a,Z_=Boolean(_?.last_activity||_?.lastActivity),W_=(a)=>a==="warning"?"#f59e0b":a==="error"?"var(--danger-color)":a==="success"?"var(--success-color)":s,O_=K?.kind||"info",k_=W_(O_),G_=W_(_?.kind||(B_?"warning":"info")),w_="",L_=_?.title,$0=_?.status;if(_?.type==="plan")w_=L_?`Planning: ${L_}`:"Planning...";else if(_?.type==="tool_call")w_=L_?`Running: ${L_}`:"Running tool...";else if(_?.type==="tool_status")w_=L_?`${L_}: ${$0||"Working..."}`:$0||"Working...";else if(_?.type==="error")w_=L_||"Agent error";else w_=L_||$0||"Working...";if(Z_)w_="Last activity just now";let y_=({panelTitle:a,text:A_,fullText:q_,totalLines:H_,maxLines:Q_,titleClass:g_,panelKey:U_})=>{let M_=__.has(U_),t_=q_||A_||"",a_=U_==="thought"||U_==="draft"?A(t_):t_,T_=typeof Q_==="number",Z0=M_&&T_,N0=T_?R(a_,Q_,H_):{text:a_||"",omitted:0,totalLines:Number.isFinite(H_)?H_:0};if(!a_&&!(Number.isFinite(N0.totalLines)&&N0.totalLines>0))return null;let C_=`agent-thinking-body${T_?" agent-thinking-body-collapsible":""}`,e_=T_?`--agent-thinking-collapsed-lines: ${Q_};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${M_?"true":"false"}
                data-collapsible=${T_?"true":"false"}
                style=${s?`--turn-color: ${s};`:""}
            >
                <div class="agent-thinking-title ${g_||""}">
                    ${s&&L`<span class=${$_} aria-hidden="true"></span>`}
                    ${a}
                    ${Z0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${a} panel`}
                            onClick=${()=>l(U_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${C_}
                    style=${e_}
                    dangerouslySetInnerHTML=${{__html:m2(a_)}}
                />
                ${!M_&&N0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▸ ${N0.omitted} more lines
                    </button>
                `}
                ${M_&&N0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>l(U_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},R_=N?.tool_call?.title,S_=R_?`Awaiting approval: ${R_}`:"Awaiting approval",r_=B_?h3(_,n):null,z_=(a,A_,q_=null)=>{let H_=p3(a);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${A_?`--turn-color: ${A_};`:""}
                title=${a?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${A_&&L`<span class=${$_} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${H_}</span>
                    ${q_&&L`<span class="agent-status-elapsed">${q_}</span>`}
                </div>
                ${a.detail&&L`<div class="agent-thinking-body">${a.detail}</div>`}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${K&&z_(K,k_)}
            ${_?.type==="intent"&&z_(_,G_,r_)}
            ${N&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${s?`--turn-color: ${s};`:""}>
                    <span class=${$_} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${S_}</span>
                </div>
            `}
            ${w&&y_({panelTitle:K_("Planning"),text:v.text,fullText:v.fullText,totalLines:v.totalLines,panelKey:"plan"})}
            ${C&&y_({panelTitle:K_("Thoughts"),text:S.text,fullText:S.fullText,totalLines:S.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${p&&y_({panelTitle:K_("Draft"),text:F.text,fullText:F.fullText,totalLines:F.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${Z_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${s?`--turn-color: ${s};`:""}>
                    ${s&&L`<span class=${$_} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!Z_&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${w_}</span>
                </div>
            `}
        </div>
    `}function l3({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",G=Z?.kind||"other",W=Z?.rawInput||{},X=W.command||W.commands&&W.commands[0]||null,B=W.diff||null,V=W.fileName||W.path||null,H=Z?.description||W.description||W.explanation||null,x=(Array.isArray(Z?.locations)?Z.locations:[]).map((w)=>w?.path).filter((w)=>Boolean(w)),R=Array.from(new Set([V,...x].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let v=async(w)=>{try{await P2(j,w,K||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},S=async()=>{try{await E4(z,`Auto-approved: ${z}`),await P2(j,"approved",K||null),$()}catch(w){console.error("Failed to add to whitelist:",w)}},F=N&&N.length>0;return L`
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
                ${(H||X||B||R.length>0)&&L`
                    <div class="agent-request-body">
                        ${H&&L`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${R.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${R.map((w,C)=>L`<li key=${C}>${w}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${X&&L`
                            <pre class="agent-request-command">${X}</pre>
                        `}
                        ${B&&L`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${B}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${F?N.map((w)=>L`
                            <button 
                                key=${w.optionId||w.id||String(w)}
                                class="agent-request-btn ${w.kind==="allow_once"||w.kind==="allow_always"?"primary":""}"
                                onClick=${()=>v(w.optionId||w.id||w)}
                            >
                                ${w.name||w.label||w.optionId||w.id||String(w)}
                            </button>
                        `):L`
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
    `}function n3({status:_}){if(_==="connected")return null;return L`
        <div class="connection-status ${_}">
            ${_==="disconnected"?"Reconnecting...":_}
        </div>
    `}function d3(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let W=$.toLocaleDateString(void 0,{weekday:"short"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${W} ${X}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${G}`}function Y2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function r0(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function f$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var _7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),$7=new Set(["text/markdown"]);function G2(_){let $=typeof _==="string"?_.trim().toLowerCase():"";if(!$)return"unsupported";if($.startsWith("image/"))return"image";if($==="application/pdf")return"pdf";if(_7.has($)||$.startsWith("text/"))return"text";return"unsupported"}function s3(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $7.has($)}function o3(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"text":return"Text preview";default:return"Preview unavailable"}}function j7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function Z7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function r3(_){return j7(_)||Z7(_)}function g2(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function N7(_,$){let j=Math.max(g2(_),g2($)),Z=Math.min(g2(_),g2($));return(j+0.05)/(Z+0.05)}function K7(_,$,j="#ffffff"){let Z=r3(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let G=r3(z);if(!G)continue;let W=N7(Z,G);if(W>K)N=z,K=W}return N}function h4(){let _=getComputedStyle(document.documentElement),$=(x,R)=>{for(let v of x){let S=_.getPropertyValue(v).trim();if(S)return S}return R},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),W=$(["--success-color","--color-success"],"#00ba7c"),X=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),B=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),A=K7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:G,good:W,warning:X,attention:B,border:V,fontFamily:H,buttonTextColor:A}}function a3(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:G,border:W,fontFamily:X}=h4();return{fontFamily:X,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:W},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var z7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),t3=!1,c2=null,e3=!1;function i4(_){_.querySelector(".adaptive-card-notice")?.remove()}function Y7(_,$,j="error"){i4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function G7(_,$=(j)=>p0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function X7(_=($)=>p0($,null)){return($,j)=>{try{let Z=G7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function W7(_){if(e3||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=X7(),e3=!0}async function q7(){if(t3)return;if(c2)return c2;return c2=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{t3=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),c2}function V7(){return globalThis.AdaptiveCards}function O7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function B7(_){return z7.has(_)}function n4(_){if(!Array.isArray(_))return[];return _.filter(O7)}function L7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,K=_?.data??$?.data;return{type:j,title:Z,data:K,url:N,raw:_}}function l4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${l4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function Q7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l4($);return typeof $==="string"?$:String($)}function U7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=Q7(z.type,j[z.id],z);for(let[G,W]of Object.entries(z))if(Array.isArray(W)||W&&typeof W==="object")z[G]=Z(W);return z};return Z(_)}function F7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function H7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function J7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=H7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function _6(_,$,j){if(!B7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await q7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=V7();W7(Z);let N=new Z.AdaptiveCard,K=h4();N.hostConfig=new Z.HostConfig(a3());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:U7($.payload,z);N.parse(G),N.onExecuteAction=(B)=>{let V=L7(B);if(j?.onAction)i4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let A=H instanceof Error?H.message:String(H||"Action failed.");Y7(_,A||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let W=N.render();if(!W)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let X=J7($);if(X){_.classList.add("adaptive-card-finished");let B=document.createElement("div");B.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=X.label,B.appendChild(V),X.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=X.detail,B.appendChild(H)}_.appendChild(B)}if(i4(_),_.appendChild(W),X)F7(W);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function l$(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l$($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${l$(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function D7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function d4(_){if(!Array.isArray(_))return[];return _.filter(D7)}function $6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=l$(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=Object.entries(j).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:l$(K)})).filter((N)=>N.value).slice(0,4).map(({key:N,value:K})=>`${N}: ${K}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function j6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=typeof _.data==="object"&&_.data&&!Array.isArray(_.data)?Object.entries(_.data).filter(([N])=>!N.startsWith("__")).map(([N,K])=>({key:N,value:l$(K)})).filter((N)=>N.value).slice(0,4):[],Z=j.length>0?j.map(({key:N,value:K})=>`${N}: ${K}`).join(", "):l$(_.data)||null;return{title:$,summary:Z,fields:j,submittedAt:_.submitted_at}}function E7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?r0($):null},{label:"Added",value:_?.created_at?f$(_.created_at):null}].filter((Z)=>Z.value)}function Z6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=n_(()=>G2($?.content_type),[$?.content_type]),K=o3(N),z=n_(()=>s3($?.content_type),[$?.content_type]),[G,W]=T(N==="text"||N==="pdf"),[X,B]=T(""),[V,H]=T(null),[A,x]=T(null),R=D(null),v=n_(()=>E7($),[$]),S=n_(()=>{if(!z||!X)return"";return p0(X)},[z,X]);return u(()=>{let F=(w)=>{if(w.key==="Escape")j()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[j]),u(()=>{if(!R.current||!S)return;Q$(R.current);return},[S]),u(()=>{let F=!1,w=null;async function C(){if(N==="text"){W(!0),x(null);try{let p=await w4(_);if(!F)B(p)}catch{if(!F)x("Failed to load text preview.")}finally{if(!F)W(!1)}return}if(N==="pdf"){W(!0),x(null);try{let p=await M4(_);if(w=URL.createObjectURL(p),!F)H(w)}catch{if(!F)x("Failed to load PDF preview.")}finally{if(!F)W(!1)}return}W(!1)}return C(),()=>{if(F=!0,w)URL.revokeObjectURL(w)}},[_,N]),L`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        <a
                            href=${Z$(_)}
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
                    ${G&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&A&&L`<div class="attachment-preview-state">${A}</div>`}
                    ${!G&&!A&&N==="image"&&L`
                        <img class="attachment-preview-image" src=${Z$(_)} alt=${Z} />
                    `}
                    ${!G&&!A&&N==="pdf"&&V&&L`
                        <iframe class="attachment-preview-frame" src=${V} title=${Z}></iframe>
                    `}
                    ${!G&&!A&&N==="text"&&z&&L`
                        <div
                            ref=${R}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:S}}
                        />
                    `}
                    ${!G&&!A&&N==="text"&&!z&&L`
                        <pre class="attachment-preview-text">${X}</pre>
                    `}
                    ${!G&&!A&&N==="unsupported"&&L`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${v.map((F)=>L`
                        <div class="attachment-preview-meta-item" key=${F.label}>
                            <span class="attachment-preview-meta-label">${F.label}</span>
                            <span class="attachment-preview-meta-value">${F.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function N6({src:_,onClose:$}){return u(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function k7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(u(()=>{c$(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?r0(K):"",W=G2(j.content_type)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(X)=>X.stopPropagation()}>
            <a href=${Z$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&L`<span class="file-size">${z}</span>`}
                        ${j.content_type&&L`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${W}
            </button>
        </div>
    `}function y7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);u(()=>{if(!Number.isFinite(j))return;c$(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?Z$(j):null,W=G2(Z?.content_type)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${K}>
            ${z?L`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(X)=>X.stopPropagation()}>
                        <${N$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:L`
                    <${N$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${W}
                    onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function p2({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?f$(Z):null;return L`
        <div class="content-annotations">
            ${$&&$.length>0&&L`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&L`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&L`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function A7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?r0(_.size):"",N=_.mime_type||"",K=M7(N),z=T$(_.uri);return L`
        <a
            href=${z||"#"}
            class="resource-link"
            target=${z?"_blank":void 0}
            rel=${z?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${K}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&L`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&L`<span>${N}</span>`}
                    ${Z&&L`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function w7({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&L`
                ${N&&L`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&L`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let W=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:z||"application/octet-stream"}),X=URL.createObjectURL(W),B=document.createElement("a");B.href=X,B.download=Z.split("/").pop()||"resource",B.click(),URL.revokeObjectURL(X)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function M7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function P7({preview:_}){let $=T$(_.url),j=T$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return L`
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
                ${_.description&&L`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function C7(_,$){return typeof _==="string"?_:""}var b7=1800,I7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,S7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,x7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function T7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function f7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let G=z||"idle";if(K.dataset.copyState=G,G==="success")K.innerHTML=S7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(G==="error")K.innerHTML=x7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=I7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),z.appendChild(G);let W=async(X)=>{X.preventDefault(),X.stopPropagation();let V=K.querySelector("code")?.textContent||"",H=await T7(V);N(G,H?"success":"error");let A=j.get(G);if(A)clearTimeout(A);let x=setTimeout(()=>{N(G,"idle"),j.delete(G)},b7);j.set(G,x)};G.addEventListener("click",W),Z.push(()=>{G.removeEventListener("click",W);let X=j.get(G);if(X)clearTimeout(X);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function R7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Files:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let X=j[K];if(/^\s*-\s+/.test(X))N.push(X.replace(/^\s*-\s+/,"").trim());else if(!X.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),G=j.slice(K),W=[...z,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,fileRefs:N}}function u7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Referenced messages:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let X=j[K];if(/^\s*-\s+/.test(X)){let V=X.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!X.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),G=j.slice(K),W=[...z,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,messageRefs:N}}function v7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let X=0;X<j.length;X+=1)if(j[X].trim()==="Images:"&&j[X+1]&&/^\s*-\s+/.test(j[X+1])){Z=X;break}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let X=j[K];if(/^\s*-\s+/.test(X)){let B=X.replace(/^\s*-\s+/,"").trim(),V=B.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||B.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],A=(V[2]||"").trim()||H;N.push({id:H,label:A,raw:B})}else N.push({id:null,label:B,raw:B})}else if(!X.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),G=j.slice(K),W=[...z,...G].join(`
`);return W=W.replace(/\n{3,}/g,`

`).trim(),{content:W,attachments:N}}function m7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(m7).sort((B,V)=>V.length-B.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),G=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),W=[],X;while(X=G.nextNode())W.push(X);for(let B of W){let V=B.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let H=B.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let A=V.split(N).filter((R)=>R!=="");if(A.length===0)continue;let x=z.createDocumentFragment();for(let R of A)if(K.test(R)){let v=z.createElement("mark");v.className="search-highlight-term",v.textContent=R,x.appendChild(v)}else x.appendChild(z.createTextNode(R));B.parentNode.replaceChild(x,B)}return z.body.innerHTML}function K6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:G,userAvatarUrl:W,userAvatarBackground:X,onDelete:B,isThreadReply:V,isThreadPrev:H,isThreadNext:A,isRemoving:x,highlightQuery:R,onFileRef:v}){let[S,F]=T(null),w=D(null),C=_.data,p=C.type==="agent_response",__=G||"You",t=p?K||v3:__,n=p?p4(K,z,!0):p4(__,W),N_=typeof X==="string"?X.trim().toLowerCase():"",l=!p&&n.image&&(N_==="clear"||N_==="transparent"),B_=p&&Boolean(n.image),x_=`background-color: ${l||B_?"transparent":n.color}`,s=C.content_meta,$_=Boolean(s?.truncated),K_=Boolean(s?.preview),Z_=$_&&!K_,W_=$_?{originalLength:Number.isFinite(s?.original_length)?s.original_length:C.content?C.content.length:0,maxLength:Number.isFinite(s?.max_length)?s.max_length:0}:null,O_=C.content_blocks||[],k_=C.media_ids||[],G_=C7(C.content,C.link_previews),{content:w_,fileRefs:L_}=R7(G_),{content:$0,messageRefs:y_}=u7(w_),{content:R_,attachments:S_}=v7($0);G_=R_;let r_=n4(O_),z_=d4(O_),a=r_.length===1&&typeof r_[0]?.fallback_text==="string"?r_[0].fallback_text.trim():"",A_=z_.length===1?$6(z_[0]).trim():"",q_=Boolean(a)&&G_?.trim()===a||Boolean(A_)&&G_?.trim()===A_,H_=Boolean(G_)&&!Z_&&!q_,Q_=typeof R==="string"?R.trim():"",g_=n_(()=>{if(!G_||q_)return"";let b=p0(G_,j);return Q_?g7(b,Q_):b},[G_,q_,Q_]),U_=(b,e)=>{b.stopPropagation(),F(Z$(e))},[M_,t_]=T(null),a_=(b)=>{t_(b)},T_=(b)=>{b.stopPropagation(),B?.(_)},Z0=(b,e)=>{let P_=new Set;if(!b||e.length===0)return{content:b,usedIds:P_};return{content:b.replace(/attachment:([^\s)"']+)/g,(M0,a0,K0,q0)=>{let O0=a0.replace(/^\/+/,""),S0=e.find((i0)=>i0.name&&i0.name.toLowerCase()===O0.toLowerCase()&&!P_.has(i0.id))||e.find((i0)=>!P_.has(i0.id));if(!S0)return M0;if(P_.add(S0.id),q0.slice(Math.max(0,K0-2),K0)==="](")return`/media/${S0.id}`;return S0.name||"attachment"}),usedIds:P_}},N0=[],C_=[],e_=[],J0=[],y0=[],D0=[],W0=0;if(O_.length>0)O_.forEach((b)=>{if(b?.type==="text"&&b.annotations)D0.push(b.annotations);if(b?.type==="resource_link")J0.push(b);else if(b?.type==="resource")y0.push(b);else if(b?.type==="file"){let e=k_[W0++];if(e)C_.push(e),e_.push({id:e,name:b?.name||b?.filename||b?.title})}else if(b?.type==="image"||!b?.type){let e=k_[W0++];if(e){let P_=typeof b?.mime_type==="string"?b.mime_type:void 0;N0.push({id:e,annotations:b?.annotations,mimeType:P_}),e_.push({id:e,name:b?.name||b?.filename||b?.title})}}});else if(k_.length>0)k_.forEach((b)=>{N0.push({id:b,annotations:null}),e_.push({id:b,name:null})});if(S_.length>0)S_.forEach((b)=>{if(!b?.id)return;let e=e_.find((P_)=>String(P_.id)===String(b.id));if(e&&!e.name)e.name=b.label});let{content:A0,usedIds:d_}=Z0(G_,e_);G_=A0;let u_=N0.filter(({id:b})=>!d_.has(b)),I0=C_.filter((b)=>!d_.has(b)),h_=S_.length>0?S_.map((b,e)=>({id:b.id||`attachment-${e+1}`,label:b.label||`attachment-${e+1}`})):e_.map((b,e)=>({id:b.id,label:b.name||`attachment-${e+1}`})),s_=n_(()=>n4(O_),[O_]),w0=n_(()=>d4(O_),[O_]);u(()=>{if(!w.current)return;return Q$(w.current),f7(w.current)},[g_]);let J_=D(null);return u(()=>{if(!J_.current||s_.length===0)return;let b=J_.current;b.innerHTML="";for(let e of s_){let P_=document.createElement("div");b.appendChild(P_),_6(P_,e,{onAction:async(c_)=>{if(c_.type==="Action.OpenUrl"){let M0=T$(c_.url||"");if(!M0)throw Error("Invalid URL");window.open(M0,"_blank","noopener,noreferrer");return}if(c_.type==="Action.Submit"){await D4({post_id:_.id,thread_id:C.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:e.card_id,action:{type:c_.type,title:c_.title||"",data:c_.data}});return}console.warn("[post] unsupported adaptive card action:",c_.type,c_)}}).catch((c_)=>{console.error("[post] adaptive card render error:",c_),P_.textContent=e.fallback_text||"Card failed to render."})}},[s_,C.thread_id,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${p?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${A?"thread-next":""} ${x?"removing":""}" onClick=${$}>
            <div class="post-avatar ${p?"agent-avatar":""} ${n.image?"has-image":""}" style=${x_}>
                ${n.image?L`<img src=${n.image} alt=${t} />`:n.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${T_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(b)=>{if(b.preventDefault(),b.stopPropagation(),Z)Z(_.id)}}>${d3(_.timestamp)}</a>
                </div>
                ${Z_&&W_&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${Y2(W_.originalLength)} chars
                            ${W_.maxLength?L` • Display limit: ${Y2(W_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${K_&&W_&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${Y2(W_.maxLength)} of ${Y2(W_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(L_.length>0||y_.length>0||h_.length>0)&&L`
                    <div class="post-file-refs">
                        ${y_.map((b)=>{let e=(P_)=>{if(P_.preventDefault(),P_.stopPropagation(),N)N(b,_.chat_jid||null);else{let c_=document.getElementById("post-"+b);if(c_)c_.scrollIntoView({behavior:"smooth",block:"center"}),c_.classList.add("post-highlight"),setTimeout(()=>c_.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${b}`} class="post-msg-pill-link" onClick=${e}>
                                    <${N$}
                                        prefix="post"
                                        label=${"msg:"+b}
                                        title=${"Message "+b}
                                        icon="message"
                                        onClick=${e}
                                    />
                                </a>
                            `})}
                        ${L_.map((b)=>{let e=b.split("/").pop()||b;return L`
                                <${N$}
                                    prefix="post"
                                    label=${e}
                                    title=${b}
                                    onClick=${()=>v?.(b)}
                                />
                            `})}
                        ${h_.map((b)=>L`
                            <${y7}
                                key=${b.id}
                                attachment=${b}
                                onPreview=${a_}
                            />
                        `)}
                    </div>
                `}
                ${H_&&L`
                    <div 
                        ref=${w}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:g_}}
                        onClick=${(b)=>{if(b.target.classList.contains("hashtag")){b.preventDefault(),b.stopPropagation();let e=b.target.dataset.hashtag;if(e)j?.(e)}else if(b.target.tagName==="IMG")b.preventDefault(),b.stopPropagation(),F(b.target.src)}}
                    />
                `}
                ${s_.length>0&&L`
                    <div ref=${J_} class="post-adaptive-cards" />
                `}
                ${w0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${w0.map((b,e)=>{let P_=j6(b);return L`
                                <div key=${`${b.card_id}-${e}`} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <span class="adaptive-card-submission-title">${P_.title}</span>
                                    </div>
                                    ${P_.summary&&L`
                                        <div class="adaptive-card-submission-summary">${P_.summary}</div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${f$(P_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${D0.length>0&&L`
                    ${D0.map((b,e)=>L`
                        <${p2} key=${e} annotations=${b} />
                    `)}
                `}
                ${u_.length>0&&L`
                    <div class="media-preview">
                        ${u_.map(({id:b,mimeType:e})=>{let c_=typeof e==="string"&&e.toLowerCase().startsWith("image/svg")?Z$(b):A4(b);return L`
                                <img 
                                    key=${b} 
                                    src=${c_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(M0)=>U_(M0,b)}
                                />
                            `})}
                    </div>
                `}
                ${u_.length>0&&L`
                    ${u_.map(({annotations:b},e)=>L`
                        ${b&&L`<${p2} key=${e} annotations=${b} />`}
                    `)}
                `}
                ${I0.length>0&&L`
                    <div class="file-attachments">
                        ${I0.map((b)=>L`
                            <${k7} key=${b} mediaId=${b} onPreview=${a_} />
                        `)}
                    </div>
                `}
                ${J0.length>0&&L`
                    <div class="resource-links">
                        ${J0.map((b,e)=>L`
                            <div key=${e}>
                                <${A7} block=${b} />
                                <${p2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y0.length>0&&L`
                    <div class="resource-embeds">
                        ${y0.map((b,e)=>L`
                            <div key=${e}>
                                <${w7} block=${b} />
                                <${p2} annotations=${b.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${C.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${C.link_previews.map((b,e)=>L`
                            <${P7} key=${e} preview=${b} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${S&&L`<${N6} src=${S} onClose=${()=>F(null)} />`}
        ${M_&&L`
            <${Z6}
                mediaId=${M_.mediaId}
                info=${M_.info}
                onClose=${()=>t_(null)}
            />
        `}
    `}function z6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:G,emptyMessage:W,timelineRef:X,agents:B,user:V,onDeletePost:H,reverse:A=!0,removingPostIds:x,searchQuery:R}){let[v,S]=T(!1),F=D(null),w=typeof IntersectionObserver<"u",C=P(async()=>{if(!j||!$||v)return;S(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{S(!1)}},[$,v,j]),p=P((s)=>{let{scrollTop:$_,scrollHeight:K_,clientHeight:Z_}=s.target,W_=A?K_-Z_-$_:$_,O_=Math.max(300,Z_);if(W_<O_)C()},[A,C]);u(()=>{if(!w)return;let s=F.current,$_=X?.current;if(!s||!$_)return;let K_=300,Z_=new IntersectionObserver((W_)=>{for(let O_ of W_){if(!O_.isIntersecting)continue;C()}},{root:$_,rootMargin:`${K_}px 0px ${K_}px 0px`,threshold:0});return Z_.observe(s),()=>Z_.disconnect()},[w,$,j,X,C]);let __=D(C);if(__.current=C,u(()=>{if(w)return;if(!X?.current)return;let{scrollTop:s,scrollHeight:$_,clientHeight:K_}=X.current,Z_=A?$_-K_-s:s,W_=Math.max(300,K_);if(Z_<W_)__.current?.()},[w,_,$,A,X]),u(()=>{if(!X?.current)return;if(!$||v)return;let{scrollTop:s,scrollHeight:$_,clientHeight:K_}=X.current,Z_=A?$_-K_-s:s,W_=Math.max(300,K_);if($_<=K_+1||Z_<W_)__.current?.()},[_,$,v,A,X]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${W||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((s,$_)=>s.id-$_.id),n=(s)=>{let $_=s?.data?.thread_id;if($_===null||$_===void 0||$_==="")return null;let K_=Number($_);return Number.isFinite(K_)?K_:null},N_=new Map;for(let s=0;s<t.length;s+=1){let $_=t[s],K_=Number($_?.id),Z_=n($_);if(Z_!==null){let W_=N_.get(Z_)||{anchorIndex:-1,replyIndexes:[]};W_.replyIndexes.push(s),N_.set(Z_,W_)}else if(Number.isFinite(K_)){let W_=N_.get(K_)||{anchorIndex:-1,replyIndexes:[]};W_.anchorIndex=s,N_.set(K_,W_)}}let l=new Map;for(let[s,$_]of N_.entries()){let K_=new Set;if($_.anchorIndex>=0)K_.add($_.anchorIndex);for(let Z_ of $_.replyIndexes)K_.add(Z_);l.set(s,Array.from(K_).sort((Z_,W_)=>Z_-W_))}let B_=t.map((s,$_)=>{let K_=n(s);if(K_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let Z_=l.get(K_);if(!Z_||Z_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let W_=Z_.indexOf($_);if(W_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:W_>0,hasThreadNext:W_<Z_.length-1}}),x_=L`<div class="timeline-sentinel" ref=${F}></div>`;return L`
        <div class="timeline ${A?"reverse":"normal"}" ref=${X} onScroll=${p}>
            <div class="timeline-content">
                ${A?x_:null}
                ${t.map((s,$_)=>{let K_=Boolean(s.data?.thread_id&&s.data.thread_id!==s.id),Z_=x?.has?.(s.id),W_=B_[$_]||{};return L`
                    <${K6}
                        key=${s.id}
                        post=${s}
                        isThreadReply=${K_}
                        isThreadPrev=${W_.hasThreadPrev}
                        isThreadNext=${W_.hasThreadNext}
                        isRemoving=${Z_}
                        highlightQuery=${R}
                        agentName=${m3(s.data?.agent_id,B||{})}
                        agentAvatarUrl=${g3(s.data?.agent_id,B||{})}
                        userName=${V?.name||V?.user_name}
                        userAvatarUrl=${V?.avatar_url||V?.avatarUrl||V?.avatar}
                        userAvatarBackground=${V?.avatar_background||V?.avatarBackground}
                        onClick=${()=>Z?.(s)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${G}
                        onDelete=${H}
                    />
                `})}
                ${A?null:x_}
            </div>
        </div>
    `}class Y6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var j0=new Y6;var h2=null,s4=null;function G6(){if(s4)return Promise.resolve(s4);if(!h2)h2=import("/static/dist/editor.bundle.js").then((_)=>{return s4=_,_}).catch((_)=>{throw h2=null,_});return h2}class X6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await G6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var o4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new X6(_,$)}};function r4(){G6().catch(()=>{})}var c7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},p7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},i2=null,a4=null;function h7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function i7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!h7(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function l7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!i2)i2=i7(()=>Promise.resolve($.init?.())).catch((j)=>{throw i2=null,j});return await i2,$}async function n7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!a4)a4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await a4}async function d7(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function s7(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function o7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function U$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function r7(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function W6(){let _=o7(),$=_?p7:c7,j=U$("--bg-primary",_?"#000000":"#ffffff"),Z=U$("--text-primary",_?"#e7e9ea":"#0f1419"),N=U$("--text-secondary",_?"#71767b":"#536471"),K=U$("--accent-color","#1d9bf0"),z=U$("--danger-color",_?"#ff7b72":"#cf222e"),G=U$("--success-color",_?"#7ee787":"#1a7f37"),W=U$("--bg-hover",_?"#1d1f23":"#e8ebed"),X=U$("--border-color",_?"#2f3336":"#eff3f4"),B=U$("--accent-soft-strong",r7(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:B,selectionForeground:Z,black:W,red:z,green:G,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:X}}class q6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await l7();if(await n7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:W6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=W6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await d7();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(s7($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new q6(_,$)}};function E$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function a7(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),X=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,B=[];for(let H of X.split("/")){if(!H||H===".")continue;if(H===".."){if(B.length>0)B.pop();continue}B.push(H)}let V=B.join("/");return`${b2(V)}${K}${z}`}function X2(_){return _?.preview||null}function t7(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function e7(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function _5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${E$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${E$(r0($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${E$(f$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${E$(e7($))}</span>`),Z.push(`<span><strong>extension:</strong> ${E$(t7(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${E$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function $5(_){let $=X2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=_5(_,$);if($.kind==="image"){let Z=$.url||($.path?b2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${E$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=p0($.text||"",null,{rewriteImageSrc:(N)=>a7(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${E$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class e4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=$5(this.context)}getContent(){let _=X2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=X2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var _1={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=X2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new e4(_,$)}},$1={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return X2(_)||_?.path?1:!1},mount(_,$){return new e4(_,$)}};var j5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Z5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},N5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function O6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function V6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function B6(){return!!(self.crossOriginIsolated&&typeof SharedArrayBuffer<"u")}class L6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=O6(j),K=N5[N]||"\uD83D\uDCC4",z=Z5[N]||"Office Document",G=B6(),W=document.createElement("div");if(W.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",W.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${V6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${V6(z)}</div>
                ${G?`
                    <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Open in Tab
                    </button>
                `:`
                    <div style="padding:10px 16px;background:rgba(234,179,8,0.1);border:1px solid rgba(234,179,8,0.3);
                        border-radius:6px;font-size:12px;color:#eab308;line-height:1.5;">
                        ⚠️ Requires HTTPS for SharedArrayBuffer.<br>
                        <span style="color:var(--text-secondary,#888);font-size:11px;">
                            Connect via HTTPS to use the Office viewer.
                        </span>
                    </div>
                `}
            </div>
        `,_.appendChild(W),G){let X=W.querySelector("#ov-open-tab");if(X)X.addEventListener("click",()=>{let B=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(B)})}}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class Q6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document";if(!B6()){let G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1e1e1e;",G.innerHTML=`
                <div style="text-align:center;max-width:420px;padding:32px;">
                    <div style="font-size:48px;margin-bottom:16px;">\uD83D\uDD12</div>
                    <div style="font-size:15px;font-weight:600;color:#e0e0e0;margin-bottom:8px;">
                        Secure Context Required
                    </div>
                    <div style="font-size:13px;color:#999;line-height:1.6;">
                        The Office viewer requires <code style="background:#333;padding:1px 5px;border-radius:3px;font-size:12px;">SharedArrayBuffer</code>
                        which is only available over HTTPS.<br><br>
                        Connect via <strong style="color:#4fc1ff;">https://</strong> to use this feature.
                    </div>
                </div>
            `,_.appendChild(G);return}let K=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(K)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var j1={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=O6(_?.path);if(!$||!j5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new L6(_,$);return new Q6(_,$)}};function K5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function z5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var Z1='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function U6(_){let $=String(_||"").trim();return $?$:Z1}function Y5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function G5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function X5(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,G,W,X,B,V){try{if(z&&W!=null&&j({filename:z,format:G,data:W,mimeType:X,base64Encoded:Boolean(B),defaultMode:V}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,G,W,X,B,V){try{if(G&&j({filename:G,data:z,mimeType:W,base64Encoded:Boolean(X),mode:B,folderId:V}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function F6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${G5(j)}`}class H6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${z5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class J6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Y5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(X5(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=Z1,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await F6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await F6(_,"image/png");else this.xmlData=U6(await _.text());else if(_.status===404)this.xmlData=Z1;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?U6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var N1={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!K5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new H6(_,$);return new J6(_,$)}};class D6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var m_=new D6;var l2="workspaceExplorerScale",W5=["compact","default","comfortable"],q5=new Set(W5),V5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function E6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return q5.has(j)?j:$}function K1(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function O5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function B5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function z1(_={}){let $=O5(_),j=_.stored?E6(_.stored,$):$;return B5(j,_)}function k6(_){return V5[E6(_)]}var L5=60000,M6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function P6(_,$,j,Z=0,N=[]){if(!j&&M6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)P6(K,$,j,Z+1,N);return N}function y6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&M6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function W1(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,K=!j||j.length!==Z.length,z=Z.map((G)=>{let W=W1(N.get(G.path),G);if(W!==N.get(G.path))K=!0;return W});return K?{...$,children:z}:_}function G1(_,$,j){if(!_)return _;if(_.path===$)return W1(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=G1(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var C6=4,Y1=14,Q5=8,U5=16;function b6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=b6(Z);return _.__bytes=j,j}function I6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=C6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let G of N){let W=Math.max(0,Number(G?.__bytes??G?.size??0));if(W<=0)continue;if(G.type==="dir")K.push({kind:"dir",node:G,size:W});else K.push({kind:"file",name:G.name,path:G.path,size:W})}K.sort((G,W)=>W.size-G.size);let z=K;if(K.length>Y1){let G=K.slice(0,Y1-1),W=K.slice(Y1-1),X=W.reduce((B,V)=>B+V.size,0);G.push({kind:"other",name:`+${W.length} more`,path:`${Z.path}/[other]`,size:X}),z=G}return Z.children=z.map((G)=>{if(G.kind==="dir")return I6(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function A6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function S6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function n2(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function q1(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,G=K-N>z?N+z:K,W=n2(_,$,Z,N),X=n2(_,$,Z,G),B=n2(_,$,j,G),V=n2(_,$,j,N),H=G-N>Math.PI?1:0;return[`M ${W.x.toFixed(3)} ${W.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`L ${B.x.toFixed(3)} ${B.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var x6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function T6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(G,W,X,B)=>{let V=Array.isArray(G?.children)?G.children:[];if(!V.length)return;let H=Math.max(0,Number(G.size)||0);if(H<=0)return;let A=X-W,x=W;V.forEach((R,v)=>{let S=Math.max(0,Number(R.size)||0);if(S<=0)return;let F=S/H,w=x,C=v===V.length-1?X:x+A*F;if(x=C,C-w<0.003)return;let p=x6[B];if(p){let __=S6(w,B,j);if(Z.push({key:R.path,path:R.path,label:R.name,size:S,color:__,depth:B,startAngle:w,endAngle:C,innerRadius:p[0],outerRadius:p[1],d:q1(120,120,p[0],p[1],w,C)}),B===1)N.push({key:R.path,name:R.name,size:S,pct:K>0?S/K*100:0,color:__})}if(B<C6)z(R,w,C,B+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function X1(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=X1(Z,$);if(N)return N}return null}function f6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=x6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,G=S6(K,1,Z),X=`${$||"."}/[files]`;return{segments:[{key:X,path:X,label:_,size:j,color:G,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:q1(120,120,N[0],N[1],K,z)}],legend:[{key:X,name:_,size:j,pct:100,color:G}]}}function w6(_,$=!1,j=!1){if(!_)return null;let Z=b6(_),N=I6(_,0),K=N.size||Z,{segments:z,legend:G}=T6(N,K,j);if(!z.length&&K>0){let W=f6("[files]",N.path,K,j);z=W.segments,G=W.legend}return{root:N,totalSize:K,segments:z,legend:G,truncated:$,isDarkTheme:j}}function F5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[K,z]=T(()=>[_?.root?.path||"."]),[G,W]=T(!1);u(()=>{let l=_?.root?.path||".";N(l),z([l]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!Z)return;W(!0);let l=setTimeout(()=>W(!1),180);return()=>clearTimeout(l)},[Z]);let X=n_(()=>{return X1(_.root,Z)||_.root},[_?.root,Z]),B=X?.size||_.totalSize||0,{segments:V,legend:H}=n_(()=>{let l=T6(X,B,_.isDarkTheme);if(l.segments.length>0)return l;if(B<=0)return l;let B_=X?.children?.length?"Total":"[files]";return f6(B_,X?.path||_?.root?.path||".",B,_.isDarkTheme)},[X,B,_.isDarkTheme,_?.root?.path]),[A,x]=T(V),R=D(new Map),v=D(0);u(()=>{let l=R.current,B_=new Map(V.map((K_)=>[K_.key,K_])),x_=performance.now(),s=220,$_=(K_)=>{let Z_=Math.min(1,(K_-x_)/220),W_=Z_*(2-Z_),O_=V.map((k_)=>{let w_=l.get(k_.key)||{startAngle:k_.startAngle,endAngle:k_.startAngle,innerRadius:k_.innerRadius,outerRadius:k_.innerRadius},L_=(r_,z_)=>r_+(z_-r_)*W_,$0=L_(w_.startAngle,k_.startAngle),y_=L_(w_.endAngle,k_.endAngle),R_=L_(w_.innerRadius,k_.innerRadius),S_=L_(w_.outerRadius,k_.outerRadius);return{...k_,d:q1(120,120,R_,S_,$0,y_)}});if(x(O_),Z_<1)v.current=requestAnimationFrame($_)};if(v.current)cancelAnimationFrame(v.current);return v.current=requestAnimationFrame($_),R.current=B_,()=>{if(v.current)cancelAnimationFrame(v.current)}},[V]);let S=A.length?A:V,F=B>0?r0(B):"0 B",w=X?.name||"",p=(w&&w!=="."?w:"Total")||"Total",__=F,t=K.length>1,n=(l)=>{if(!l?.path)return;let B_=X1(_.root,l.path);if(!B_||!Array.isArray(B_.children)||B_.children.length===0)return;z((x_)=>[...x_,B_.path]),N(B_.path),j(null)},N_=()=>{if(!t)return;z((l)=>{let B_=l.slice(0,-1);return N(B_[B_.length-1]||_?.root?.path||"."),B_}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${X?.path||_?.root?.path||"."}`}
                data-segments=${S.length}
                data-base-size=${B}>
                ${S.map((l)=>L`
                    <path
                        key=${l.key}
                        d=${l.d}
                        fill=${l.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===l.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(l)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(l)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>n(l)}
                    >
                        <title>${l.label} — ${r0(l.size)}</title>
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${p}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${__}</text>
                </g>
            </svg>
            ${H.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((l)=>L`
                        <div key=${l.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${l.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${l.name}>${l.name}</span>
                            <span class="workspace-folder-starburst-size">${r0(l.size)}</span>
                            <span class="workspace-folder-starburst-pct">${l.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function H5({mediaId:_}){let[$,j]=T(null);if(u(()=>{if(!_)return;c$(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?r0($.metadata.size):"";return L`
        <a href=${Z$(_)} download=${Z} class="file-attachment"
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
                ${N&&L`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function R6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z}){let[N,K]=T(null),[z,G]=T(new Set(["."])),[W,X]=T(null),[B,V]=T(null),[H,A]=T(""),[x,R]=T(null),[v,S]=T(null),[F,w]=T(!0),[C,p]=T(!1),[__,t]=T(null),[n,N_]=T(()=>p$("workspaceShowHidden",!1)),[l,B_]=T(!1),[x_,s]=T(null),[$_,K_]=T(null),[Z_,W_]=T(null),[O_,k_]=T(!1),[G_,w_]=T(null),[L_,$0]=T(()=>A6()),[y_,R_]=T(()=>z1({stored:o0(l2),...K1()})),S_=D(z),r_=D(""),z_=D(null),a=D(0),A_=D(new Set),q_=D(null),H_=D(new Map),Q_=D(_),g_=D(Z),U_=D(null),M_=D(null),t_=D(null),a_=D(null),T_=D(null),Z0=D(null),N0=D("."),C_=D(null),e_=D({path:null,dragging:!1,startX:0,startY:0}),J0=D({path:null,dragging:!1,startX:0,startY:0}),y0=D({path:null,timer:0}),D0=D(!1),W0=D(0),A0=D(new Map),d_=D(null),u_=D(null),I0=D(null),h_=D(null),s_=D(n),w0=D($),J_=D(j??$),b=D(0),e=D(Z_),P_=D(l),c_=D(x_),M0=D(null),a0=D({x:0,y:0}),K0=D(0),q0=D(null),O0=D(W),t0=D(B),S0=D(null),h0=D(null),i0=D(x);Q_.current=_,g_.current=Z,u(()=>{S_.current=z},[z]),u(()=>{s_.current=n},[n]),u(()=>{w0.current=$},[$]),u(()=>{J_.current=j??$},[j,$]),u(()=>{e.current=Z_},[Z_]),u(()=>{if(typeof window>"u")return;let O=()=>{R_(z1({stored:o0(l2),...K1()}))};O();let U=()=>O(),E=()=>O(),k=(g)=>{if(!g||g.key===null||g.key===l2)O()};window.addEventListener("resize",U),window.addEventListener("focus",E),window.addEventListener("storage",k);let m=window.matchMedia?.("(pointer: coarse)"),r=window.matchMedia?.("(hover: none)"),o=(g,X_)=>{if(!g)return;if(g.addEventListener)g.addEventListener("change",X_);else if(g.addListener)g.addListener(X_)},i=(g,X_)=>{if(!g)return;if(g.removeEventListener)g.removeEventListener("change",X_);else if(g.removeListener)g.removeListener(X_)};return o(m,U),o(r,U),()=>{window.removeEventListener("resize",U),window.removeEventListener("focus",E),window.removeEventListener("storage",k),i(m,U),i(r,U)}},[]),u(()=>{let O=(U)=>{let E=U?.detail?.path;if(!E)return;let k=E.split("/"),m=[];for(let r=1;r<k.length;r++)m.push(k.slice(0,r).join("/"));if(m.length)G((r)=>{let o=new Set(r);o.add(".");for(let i of m)o.add(i);return o});X(E),requestAnimationFrame(()=>{let r=document.querySelector(`[data-path="${CSS.escape(E)}"]`);if(r)r.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),u(()=>{P_.current=l},[l]),u(()=>{c_.current=x_},[x_]),u(()=>{O0.current=W},[W]),u(()=>{t0.current=B},[B]),u(()=>{i0.current=x},[x]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>$0(A6());O();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),E=()=>O();if(U?.addEventListener)U.addEventListener("change",E);else if(U?.addListener)U.addListener(E);let k=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(k?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)k?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",E);else if(U?.removeListener)U.removeListener(E);k?.disconnect()}},[]),u(()=>{if(!B)return;let O=T_.current;if(!O)return;let U=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(U)},[B]);let n$=async(O)=>{p(!0),R(null),S(null);try{let U=await P4(O,20000);R(U)}catch(U){R({error:U.message||"Failed to load preview"})}finally{p(!1)}};U_.current=n$;let k$=async()=>{if(!w0.current)return;try{let O=await Z2("",1,s_.current),U=y6(O.root,S_.current,s_.current);if(U===r_.current){w(!1);return}if(r_.current=U,z_.current=O.root,!a.current)a.current=requestAnimationFrame(()=>{a.current=0,K((E)=>W1(E,z_.current)),w(!1)})}catch(O){t(O.message||"Failed to load workspace"),w(!1)}},l0=async(O)=>{if(!O)return;if(A_.current.has(O))return;A_.current.add(O);try{let U=await Z2(O,1,s_.current);K((E)=>G1(E,O,U.root))}catch(U){t(U.message||"Failed to load workspace")}finally{A_.current.delete(O)}};M_.current=l0;let z0=P(()=>{let O=W;if(!O)return".";let U=H_.current?.get(O);if(U&&U.type==="dir")return U.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[W]),z$=P((O)=>{let U=O?.closest?.(".workspace-row");if(!U)return null;let E=U.dataset.path,k=U.dataset.type;if(!E)return null;if(k==="dir")return E;if(E.includes("/")){let m=E.split("/");return m.pop(),m.join("/")||"."}return"."},[]),V0=P((O)=>{return z$(O?.target||null)},[z$]),Y0=P((O)=>{e.current=O,W_(O)},[]),v_=P(()=>{let O=y0.current;if(O?.timer)clearTimeout(O.timer);y0.current={path:null,timer:0}},[]),u0=P((O)=>{if(!O||O==="."){v_();return}let U=H_.current?.get(O);if(!U||U.type!=="dir"){v_();return}if(S_.current?.has(O)){v_();return}if(y0.current?.path===O)return;v_();let E=setTimeout(()=>{y0.current={path:null,timer:0},M_.current?.(O),G((k)=>{let m=new Set(k);return m.add(O),m})},600);y0.current={path:O,timer:E}},[v_]),x0=P((O,U)=>{if(a0.current={x:O,y:U},K0.current)return;K0.current=requestAnimationFrame(()=>{K0.current=0;let E=M0.current;if(!E)return;let k=a0.current;E.style.transform=`translate(${k.x+12}px, ${k.y+12}px)`})},[]),Y$=P((O)=>{if(!O)return;let E=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E)return;K_({path:O,label:E})},[]),F$=P(()=>{if(K_(null),K0.current)cancelAnimationFrame(K0.current),K0.current=0;if(M0.current)M0.current.style.transform="translate(-9999px, -9999px)"},[]),y$=P((O)=>{if(!O)return".";let U=H_.current?.get(O);if(U&&U.type==="dir")return U.path;if(O==="."||!O.includes("/"))return".";let E=O.split("/");return E.pop(),E.join("/")||"."},[]),E0=P(()=>{V(null),A("")},[]),A$=P((O)=>{if(!O)return;let E=(H_.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!E||O===".")return;V(O),A(E)},[]),d$=P(async()=>{let O=t0.current;if(!O)return;let U=(H||"").trim();if(!U){E0();return}let E=H_.current?.get(O),k=(E?.name||O.split("/").pop()||O).trim();if(U===k){E0();return}try{let r=(await I4(O,U))?.path||O,o=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(E0(),t(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:r,type:E?.type||"file"}})),E?.type==="dir")G((i)=>{let g=new Set;for(let X_ of i)if(X_===O)g.add(r);else if(X_.startsWith(`${O}/`))g.add(`${r}${X_.slice(O.length)}`);else g.add(X_);return g});if(X(r),E?.type==="dir")R(null),p(!1),S(null);else U_.current?.(r);M_.current?.(o)}catch(m){t(m?.message||"Failed to rename file")}},[E0,H]),w$=P(async(O)=>{let k=O||".";for(let m=0;m<50;m+=1){let o=`untitled${m===0?"":`-${m}`}.md`;try{let g=(await b4(k,o,""))?.path||(k==="."?o:`${k}/${o}`);if(k&&k!==".")G((X_)=>new Set([...X_,k]));X(g),t(null),M_.current?.(k),U_.current?.(g);return}catch(i){if(i?.status===409||i?.code==="file_exists")continue;t(i?.message||"Failed to create file");return}}t("Failed to create file (untitled name already in use).")},[]),s$=P((O)=>{if(O?.stopPropagation?.(),O_)return;let U=y$(O0.current);w$(U)},[O_,y$,w$]);u(()=>{if(typeof window>"u")return;let O=(U)=>{let E=U?.detail?.updates||[];if(!Array.isArray(E)||E.length===0)return;K((i)=>{let g=i;for(let X_ of E){if(!X_?.root)continue;if(!g||X_.path==="."||!X_.path)g=X_.root;else g=G1(g,X_.path,X_.root)}if(g)r_.current=y6(g,S_.current,s_.current);return w(!1),g});let k=O0.current;if(Boolean(k)&&E.some((i)=>{let g=i?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)||g.startsWith(`${k}/`)}))A0.current.clear();if(!k||!i0.current)return;let r=H_.current?.get(k);if(r&&r.type==="dir")return;if(E.some((i)=>{let g=i?.path||"";if(!g||g===".")return!0;return k===g||k.startsWith(`${g}/`)}))U_.current?.(k)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),q_.current=k$;let M$=D(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=J_.current??w0.current,E=document.visibilityState!=="hidden"&&(U||O.matches&&w0.current);N2(E,s_.current).catch(()=>{})}).current,B0=D(0),H$=D(()=>{if(B0.current)clearTimeout(B0.current);B0.current=setTimeout(()=>{B0.current=0,M$()},250)}).current;u(()=>{if(w0.current)q_.current?.();H$()},[$,j]),u(()=>{q_.current(),M$();let O=setInterval(()=>q_.current(),L5),U=h$("previewHeight",null),E=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(W0.current=E,t_.current)t_.current.style.setProperty("--preview-height",`${E}px`);let k=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),m=()=>H$();if(k.addEventListener)k.addEventListener("change",m);else if(k.addListener)k.addListener(m);return document.addEventListener("visibilitychange",m),()=>{if(clearInterval(O),a.current)cancelAnimationFrame(a.current),a.current=0;if(k.removeEventListener)k.removeEventListener("change",m);else if(k.removeListener)k.removeListener(m);if(document.removeEventListener("visibilitychange",m),B0.current)clearTimeout(B0.current),B0.current=0;if(C_.current)clearTimeout(C_.current),C_.current=null;N2(!1,s_.current).catch(()=>{})}},[]);let k0=n_(()=>P6(N,z,n),[N,z,n]),F0=n_(()=>new Map(k0.map((O)=>[O.node.path,O.node])),[k0]),G$=n_(()=>k6(y_),[y_]);H_.current=F0;let L0=(W?H_.current.get(W):null)?.type==="dir";u(()=>{if(!W||!L0){w_(null),d_.current=null,u_.current=null;return}let O=W,U=`${n?"hidden":"visible"}:${W}`,E=A0.current,k=E.get(U);if(k?.root){E.delete(U),E.set(U,k);let o=w6(k.root,Boolean(k.truncated),L_);if(o)d_.current=o,u_.current=W,w_({loading:!1,error:null,payload:o});return}let m=d_.current,r=u_.current;w_({loading:!0,error:null,payload:r===W?m:null}),Z2(W,Q5,n).then((o)=>{if(O0.current!==O)return;let i={root:o?.root,truncated:Boolean(o?.truncated)};E.delete(U),E.set(U,i);while(E.size>U5){let X_=E.keys().next().value;if(!X_)break;E.delete(X_)}let g=w6(i.root,i.truncated,L_);d_.current=g,u_.current=W,w_({loading:!1,error:null,payload:g})}).catch((o)=>{if(O0.current!==O)return;w_({loading:!1,error:o?.message||"Failed to load folder size chart",payload:r===W?m:null})})},[W,L0,n,L_]);let P$=Boolean(x&&x.kind==="text"&&!L0&&(!x.size||x.size<=262144)),C$=P$?"Open in editor":x?.size>262144?"File too large to edit":"File is not editable";u(()=>{let O=I0.current;if(h_.current)h_.current.dispose(),h_.current=null;if(!O)return;if(O.innerHTML="",!W||L0||!x||x.error)return;let U={path:W,content:typeof x.text==="string"?x.text:void 0,mtime:x.mtime,size:x.size,preview:x,mode:"view"},E=j0.resolve(U)||j0.get("workspace-preview-default");if(!E)return;let k=E.mount(O,U);return h_.current=k,()=>{if(h_.current===k)k.dispose(),h_.current=null;O.innerHTML=""}},[W,L0,x]);let X$=(O)=>{let U=O?.target;if(U instanceof Element)return U;return U?.parentElement||null},b$=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},v0=D((O)=>{if(h0.current)clearTimeout(h0.current),h0.current=null;let E=X$(O)?.closest?.("[data-path]");if(!E)return;let k=E.dataset.path;if(E.dataset.type==="dir"||!k)return;if(t0.current===k)E0();g_.current?.(k)}).current,e0=D((O)=>{if(D0.current){D0.current=!1;return}let U=X$(O),E=U?.closest?.("[data-path]");if(a_.current?.focus?.(),!E)return;let k=E.dataset.path,m=E.dataset.type,r=Boolean(U?.closest?.(".workspace-caret")),o=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),i=O0.current===k,g=t0.current;if(g){if(g===k)return;E0()}let X_=m==="file"&&S0.current===k&&!r&&!o;if(i&&!r&&!o&&k!=="."&&!X_){if(h0.current)clearTimeout(h0.current);h0.current=setTimeout(()=>{h0.current=null,A$(k)},350);return}if(m==="dir"){if(S0.current=null,X(k),R(null),S(null),p(!1),!S_.current.has(k))M_.current?.(k);if(i&&!r)return;G((H0)=>{let C0=new Set(H0);if(C0.has(k))C0.delete(k);else C0.add(k);return C0})}else{S0.current=null,X(k);let Q0=H_.current.get(k);if(Q0)Q_.current?.(Q0.path,Q0);U_.current?.(k)}}).current,T0=D(()=>{r_.current="",q_.current(),Array.from(S_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>M_.current?.(U))}).current,m0=D(()=>{S0.current=null,X(null),R(null),S(null),p(!1)}).current,I$=D(()=>{N_((O)=>{let U=!O;if(typeof window<"u")o_("workspaceShowHidden",String(U));return s_.current=U,N2(!0,U).catch(()=>{}),r_.current="",q_.current?.(),Array.from(S_.current||[]).filter((k)=>k&&k!==".").forEach((k)=>M_.current?.(k)),U})}).current,S$=D((O)=>{if(X$(O)?.closest?.("[data-path]"))return;m0()}).current,_$=P(async(O)=>{if(!O)return;let U=O.split("/").pop()||O;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await x4(O);let k=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(O0.current===O)m0();M_.current?.(k),t(null)}catch(k){R((m)=>({...m||{},error:k.message||"Failed to delete file"}))}},[m0]),W$=P((O)=>{let U=a_.current;if(!U||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),o$=P((O)=>{let U=k0;if(!U||U.length===0)return;let E=W?U.findIndex((k)=>k.node.path===W):-1;if(O.key==="ArrowDown"){O.preventDefault();let k=Math.min(E+1,U.length-1),m=U[k];if(!m)return;if(X(m.node.path),m.node.type!=="dir")Q_.current?.(m.node.path,m.node),U_.current?.(m.node.path);else R(null),p(!1),S(null);W$(m.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let k=E<=0?0:E-1,m=U[k];if(!m)return;if(X(m.node.path),m.node.type!=="dir")Q_.current?.(m.node.path,m.node),U_.current?.(m.node.path);else R(null),p(!1),S(null);W$(m.node.path);return}if(O.key==="ArrowRight"&&E>=0){let k=U[E];if(k?.node?.type==="dir"&&!z.has(k.node.path))O.preventDefault(),M_.current?.(k.node.path),G((m)=>new Set([...m,k.node.path]));return}if(O.key==="ArrowLeft"&&E>=0){let k=U[E];if(k?.node?.type==="dir"&&z.has(k.node.path))O.preventDefault(),G((m)=>{let r=new Set(m);return r.delete(k.node.path),r});return}if(O.key==="Enter"&&E>=0){O.preventDefault();let k=U[E];if(!k)return;let m=k.node.path;if(k.node.type==="dir"){if(!S_.current.has(m))M_.current?.(m);G((o)=>{let i=new Set(o);if(i.has(m))i.delete(m);else i.add(m);return i}),R(null),S(null),p(!1)}else Q_.current?.(m,k.node),U_.current?.(m);return}if((O.key==="Delete"||O.key==="Backspace")&&E>=0){let k=U[E];if(!k||k.node.type==="dir")return;O.preventDefault(),_$(k.node.path);return}if(O.key==="Escape")O.preventDefault(),m0()},[m0,_$,z,k0,W$,W]),P0=P((O)=>{let U=X$(O),E=U?.closest?.(".workspace-row");if(!E)return;let k=E.dataset.type,m=E.dataset.path;if(!m||m===".")return;if(t0.current===m)return;let r=O?.touches?.[0];if(!r)return;if(e_.current={path:b$(U)?m:null,dragging:!1,startX:r.clientX,startY:r.clientY},k!=="file")return;if(C_.current)clearTimeout(C_.current);C_.current=setTimeout(()=>{if(C_.current=null,e_.current?.dragging)return;_$(m)},600)},[_$]),$$=P(()=>{if(C_.current)clearTimeout(C_.current),C_.current=null;let O=e_.current;if(O?.dragging&&O.path){let U=e.current||z0(),E=q0.current;if(typeof E==="function")E(O.path,U)}e_.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,B_(!1),s(null),Y0(null),v_(),F$()},[z0,F$,Y0,v_]),q$=P((O)=>{let U=e_.current,E=O?.touches?.[0];if(!E||!U?.path){if(C_.current)clearTimeout(C_.current),C_.current=null;return}let k=Math.abs(E.clientX-U.startX),m=Math.abs(E.clientY-U.startY),r=k>8||m>8;if(r&&C_.current)clearTimeout(C_.current),C_.current=null;if(!U.dragging&&r)U.dragging=!0,B_(!0),s("move"),Y$(U.path);if(U.dragging){O.preventDefault(),x0(E.clientX,E.clientY);let o=document.elementFromPoint(E.clientX,E.clientY),i=z$(o)||z0();if(e.current!==i)Y0(i);u0(i)}},[z$,z0,Y$,x0,Y0,u0]),x$=D((O)=>{O.preventDefault();let U=t_.current;if(!U)return;let E=O.clientY,k=W0.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let r=E,o=(g)=>{r=g.clientY;let X_=U.clientHeight-80,Q0=Math.min(Math.max(k-(g.clientY-E),80),X_);U.style.setProperty("--preview-height",`${Q0}px`),W0.current=Q0},i=()=>{let g=U.clientHeight-80,X_=Math.min(Math.max(k-(r-E),80),g);W0.current=X_,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("previewHeight",String(Math.round(X_))),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",i)}).current,Q=D((O)=>{O.preventDefault();let U=t_.current;if(!U)return;let E=O.touches[0];if(!E)return;let k=E.clientY,m=W0.current||280,r=O.currentTarget;r.classList.add("dragging"),document.body.style.userSelect="none";let o=(g)=>{let X_=g.touches[0];if(!X_)return;g.preventDefault();let Q0=U.clientHeight-80,H0=Math.min(Math.max(m-(X_.clientY-k),80),Q0);U.style.setProperty("--preview-height",`${H0}px`),W0.current=H0},i=()=>{r.classList.remove("dragging"),document.body.style.userSelect="",o_("previewHeight",String(Math.round(W0.current||m))),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",i),document.removeEventListener("touchcancel",i)};document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",i),document.addEventListener("touchcancel",i)}).current,I=async()=>{if(!W)return;try{let O=await C4(W);if(O.media_id)S(O.media_id)}catch(O){R((U)=>({...U||{},error:O.message||"Failed to attach"}))}},f=async()=>{if(!W||L0)return;await _$(W)},d=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},Y_=P((O)=>{if(!d(O))return;if(O.preventDefault(),b.current+=1,!P_.current)B_(!0);s("upload");let U=V0(O)||z0();Y0(U),u0(U)},[z0,V0,Y0,u0]),D_=P((O)=>{if(!d(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!P_.current)B_(!0);if(c_.current!=="upload")s("upload");let U=V0(O)||z0();if(e.current!==U)Y0(U);u0(U)},[z0,V0,Y0,u0]),b_=P((O)=>{if(!d(O))return;if(O.preventDefault(),b.current=Math.max(0,b.current-1),b.current===0)B_(!1),s(null),Y0(null),v_()},[Y0,v_]),_0=P(async(O,U=".")=>{let E=Array.from(O||[]);if(E.length===0)return;let k=U&&U!==""?U:".",m=k!=="."?k:"workspace root";k_(!0);try{let r=null;for(let o of E)try{r=await C2(o,k)}catch(i){let g=i?.status,X_=i?.code;if(g===409||X_==="file_exists"){let Q0=o?.name||"file";if(!window.confirm(`"${Q0}" already exists in ${m}. Overwrite?`))continue;r=await C2(o,k,{overwrite:!0})}else throw i}if(r?.path)S0.current=r.path,X(r.path),U_.current?.(r.path);M_.current?.(k)}catch(r){t(r.message||"Failed to upload file")}finally{k_(!1)}},[]),f0=P(async(O,U)=>{if(!O)return;let E=H_.current?.get(O);if(!E)return;let k=U&&U!==""?U:".",m=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(k===m)return;try{let o=(await S4(O,k))?.path||O;if(E.type==="dir")G((i)=>{let g=new Set;for(let X_ of i)if(X_===O)g.add(o);else if(X_.startsWith(`${O}/`))g.add(`${o}${X_.slice(O.length)}`);else g.add(X_);return g});if(X(o),E.type==="dir")R(null),p(!1),S(null);else U_.current?.(o);M_.current?.(m),M_.current?.(k)}catch(r){t(r?.message||"Failed to move entry")}},[]);q0.current=f0;let I_=P(async(O)=>{if(!d(O))return;O.preventDefault(),b.current=0,B_(!1),s(null),W_(null),v_();let U=Array.from(O?.dataTransfer?.files||[]);if(U.length===0)return;let E=e.current||V0(O)||z0();await _0(U,E)},[z0,V0,_0]),g0=P((O)=>{if(O?.stopPropagation?.(),O_)return;let U=O?.currentTarget?.dataset?.uploadTarget||".";N0.current=U,Z0.current?.click()},[O_]),V$=P(()=>{if(O_)return;let O=O0.current,U=O?H_.current?.get(O):null;N0.current=U?.type==="dir"?U.path:".",Z0.current?.click()},[O_]),J$=P((O)=>{if(!O||O.button!==0)return;let U=O.currentTarget;if(!U||!U.dataset)return;let E=U.dataset.path;if(!E||E===".")return;if(t0.current===E)return;let k=X$(O);if(k?.closest?.("button, a, input, .workspace-caret"))return;if(!b$(k))return;O.preventDefault(),J0.current={path:E,dragging:!1,startX:O.clientX,startY:O.clientY};let m=(o)=>{let i=J0.current;if(!i?.path)return;let g=Math.abs(o.clientX-i.startX),X_=Math.abs(o.clientY-i.startY),Q0=g>4||X_>4;if(!i.dragging&&Q0)i.dragging=!0,D0.current=!0,B_(!0),s("move"),Y$(i.path),x0(o.clientX,o.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(i.dragging){o.preventDefault(),x0(o.clientX,o.clientY);let H0=document.elementFromPoint(o.clientX,o.clientY),C0=z$(H0)||z0();if(e.current!==C0)Y0(C0);u0(C0)}},r=()=>{document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",r);let o=J0.current;if(o?.dragging&&o.path){let i=e.current||z0(),g=q0.current;if(typeof g==="function")g(o.path,i)}J0.current={path:null,dragging:!1,startX:0,startY:0},b.current=0,B_(!1),s(null),Y0(null),v_(),F$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{D0.current=!1},0)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",r)},[z$,z0,Y$,x0,F$,Y0,u0,v_]),O$=P(async(O)=>{let U=Array.from(O?.target?.files||[]);if(U.length===0)return;let E=N0.current||".";if(await _0(U,E),N0.current=".",O?.target)O.target.value=""},[_0]);return L`
        <aside
            class=${`workspace-sidebar${l?" workspace-drop-active":""}`}
            data-workspace-scale=${y_}
            ref=${t_}
            onDragEnter=${Y_}
            onDragOver=${D_}
            onDragLeave=${b_}
            onDrop=${I_}
        >
            <input type="file" multiple style="display:none" ref=${Z0} onChange=${O$} />
            <div class="workspace-header">
                <span>Workspace</span>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${s$} title="New file" disabled=${O_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${T0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                    <button
                        class=${`workspace-toggle-hidden${n?" active":""}`}
                        onClick=${I$}
                        title=${n?"Hide hidden files":"Show hidden files"}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                            <circle cx="12" cy="12" r="3" />
                            ${!n&&L`<line x1="3" y1="3" x2="21" y2="21" />`}
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${S$}>
                ${O_&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${F&&L`<div class="workspace-loading">Loading…</div>`}
                ${__&&L`<div class="workspace-error">${__}</div>`}
                ${N&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${a_}
                        tabIndex="0"
                        onClick=${e0}
                        onDblClick=${v0}
                        onKeyDown=${o$}
                        onTouchStart=${P0}
                        onTouchEnd=${$$}
                        onTouchMove=${q$}
                        onTouchCancel=${$$}
                    >
                        ${k0.map(({node:O,depth:U})=>{let E=O.type==="dir",k=O.path===W,m=O.path===B,r=E&&z.has(O.path),o=Z_&&O.path===Z_,i=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return L`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${k?" selected":""}${o?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*G$.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${J$}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${E?r?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${E?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${E?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${m?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${T_}
                                                value=${H}
                                                onInput=${(g)=>A(g?.target?.value||"")}
                                                onKeyDown=${(g)=>{if(g.key==="Enter")g.preventDefault(),d$();else if(g.key==="Escape")g.preventDefault(),E0()}}
                                                onBlur=${E0}
                                                onClick=${(g)=>g.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${E&&!r&&i>0&&L`
                                        <span class="workspace-count">${i}</span>
                                    `}
                                    ${E&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${g0}
                                            disabled=${O_}
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
            ${W&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${x$} onTouchStart=${Q}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${W}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${s$} title="New file" disabled=${O_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!L0&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>P$&&g_.current?.(W,x)}
                                    title=${C$}
                                    disabled=${!P$}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${f}
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
                            ${L0?L`
                                    <button class="workspace-download" onClick=${V$}
                                        title="Upload files to this folder" disabled=${O_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${T4(W,n)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${I} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${C&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${x?.error&&L`<div class="workspace-error">${x.error}</div>`}
                    ${L0&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${G_?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${G_?.error&&L`<div class="workspace-error">${G_.error}</div>`}
                        ${G_?.payload&&G_.payload.segments?.length>0&&L`
                            <${F5} payload=${G_.payload} />
                        `}
                        ${G_?.payload&&(!G_.payload.segments||G_.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${x&&!x.error&&!L0&&L`
                        <div class="workspace-preview-body" ref=${I0}></div>
                    `}
                    ${v&&L`
                        <div class="workspace-download-card">
                            <${H5} mediaId=${v} />
                        </div>
                    `}
                </div>
            `}
            ${$_&&L`
                <div class="workspace-drag-ghost" ref=${M0}>${$_.label}</div>
            `}
        </aside>
    `}var J5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf|csv)$/i,D5=/\.drawio(\.xml|\.svg|\.png)?$/i;function u6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:G,previewTabs:W,onToggleDock:X,dockVisible:B}){let[V,H]=T(null),A=D(null);u(()=>{if(!V)return;let F=(w)=>{if(w.type==="keydown"&&w.key!=="Escape")return;H(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[V]),u(()=>{let F=(w)=>{if(w.ctrlKey&&w.key==="Tab"){if(w.preventDefault(),!_.length)return;let C=_.findIndex((p)=>p.id===$);if(w.shiftKey){let p=_[(C-1+_.length)%_.length];j?.(p.id)}else{let p=_[(C+1)%_.length];j?.(p.id)}return}if((w.ctrlKey||w.metaKey)&&w.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(w.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let x=P((F,w)=>{if(F.button===1){F.preventDefault(),Z?.(w);return}if(F.button===0)j?.(w)},[j,Z]),R=P((F,w)=>{F.preventDefault(),H({id:w,x:F.clientX,y:F.clientY})},[]),v=P((F)=>{F.preventDefault(),F.stopPropagation()},[]),S=P((F,w)=>{F.preventDefault(),F.stopPropagation(),Z?.(w)},[Z]);if(u(()=>{if(!$||!A.current)return;let F=A.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return L`
        <div class="tab-strip" ref=${A} role="tablist">
            ${_.map((F)=>L`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(w)=>x(w,F.id)}
                    onContextMenu=${(w)=>R(w,F.id)}
                >
                    ${F.pinned&&L`
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
                        onClick=${(w)=>S(w,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?L`<span class="tab-dirty-dot" aria-hidden="true"></span>`:L`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&L`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${B?" active":""}`}
                    onClick=${X}
                    title=${`${B?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${B?"Hide":"Show"} terminal`}
                    aria-pressed=${B?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${V&&L`
            <div class="tab-context-menu" style=${{left:V.x+"px",top:V.y+"px"}}>
                <button onClick=${()=>{Z?.(V.id),H(null)}}>Close</button>
                <button onClick=${()=>{N?.(V.id),H(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),H(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(V.id),H(null)}}>
                    ${_.find((F)=>F.id===V.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(V.id)&&L`
                    <hr />
                    <button onClick=${()=>{G(V.id),H(null)}}>
                        ${W?.has(V.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${J5.test(V.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(V.id),w=V.id.split("/").pop()||"document",C="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(w);window.open(C,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
                ${D5.test(V.id)&&L`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(V.id);window.open(F,"_blank","noopener"),H(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var E5=400,V1=60,v6=220,O1="mdPreviewHeight";function k5(){try{let _=localStorage.getItem(O1),$=_?Number(_):NaN;return Number.isFinite($)&&$>=V1?$:v6}catch{return v6}}function m6({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[K,z]=T(k5),G=D(null),W=D(null),X=D(""),B=D(_);return B.current=_,u(()=>{let A=()=>{let R=B.current?.()||"";if(R===X.current)return;X.current=R;try{let v=p0(R,null,{sanitize:!1});N(v)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};A();let x=setInterval(A,E5);return()=>clearInterval(x)},[]),u(()=>{if(G.current&&Z)Q$(G.current).catch(()=>{})},[Z]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(A)=>{A.preventDefault();let x=A.clientY,R=W.current?.offsetHeight||K,v=W.current?.parentElement,S=v?v.offsetHeight*0.7:500,F=A.currentTarget;F.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let w=(p)=>{let __=Math.min(Math.max(R-(p.clientY-x),V1),S);z(__)},C=()=>{F.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(O1,String(Math.round(W.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",C)}}
            onTouchStart=${(A)=>{A.preventDefault();let x=A.touches[0];if(!x)return;let R=x.clientY,v=W.current?.offsetHeight||K,S=W.current?.parentElement,F=S?S.offsetHeight*0.7:500,w=A.currentTarget;w.classList.add("dragging"),document.body.style.userSelect="none";let C=(__)=>{let t=__.touches[0];if(!t)return;__.preventDefault();let n=Math.min(Math.max(v-(t.clientY-R),V1),F);z(n)},p=()=>{w.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(O1,String(Math.round(W.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}}
        ></div>
        <div class="md-preview-panel" ref=${W} style=${{height:K+"px"}}>
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
                ref=${G}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function g6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=D(_);K.current=_;let z=D($);z.current=$;let G=D(j);G.current=j;let W=D(Z);W.current=Z,u(()=>{G.current();let X=new I2((V,H)=>K.current(V,H),(V)=>z.current(V),{chatJid:N});X.connect();let B=()=>{X.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")W.current?.()};return window.addEventListener("focus",B),document.addEventListener("visibilitychange",B),()=>{window.removeEventListener("focus",B),document.removeEventListener("visibilitychange",B),X.disconnect()}},[N])}function c6(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);u(()=>{let W=p$("notificationsEnabled",!1);if(N.current=W,$(W),typeof Notification<"u")Z(Notification.permission)},[]),u(()=>{N.current=_},[_]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let W=Notification.requestPermission();if(W&&typeof W.then==="function")return W;return Promise.resolve(W)}catch{return Promise.resolve("default")}},[]),z=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let X=await K();if(Z(X||"default"),X!=="granted"){N.current=!1,$(!1),o_("notificationsEnabled","false");return}}let W=!N.current;N.current=W,$(W),o_("notificationsEnabled",String(W))},[K]),G=P((W,X)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let B=new Notification(W,{body:X});return B.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:G}}var W2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function p6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[K,z]=T(!1),G=D(!1),W=D(null),X=D(!1),B=D(null),V=D(null),H=D(0);u(()=>{G.current=K},[K]),u(()=>{V.current=Z},[Z]),u(()=>{H.current+=1,V.current=null,B.current=null,X.current=!1,G.current=!1,N(null),z(!1)},[j]);let A=P(async(v=null)=>{let S=H.current;try{if(v){let F=await O4(v,50,0,j);if(S!==H.current)return;N(F.posts),z(!1)}else{let F=await $2(10,null,j);if(S!==H.current)return;N(F.posts),z(F.has_more)}}catch(F){if(S!==H.current)return;console.error("Failed to load posts:",F)}},[j]),x=P(async()=>{let v=H.current;try{let S=await $2(10,null,j);if(v!==H.current)return;N((F)=>{if(!F||F.length===0)return S.posts;return W2([...S.posts,...F])}),z((F)=>F||S.has_more)}catch(S){if(v!==H.current)return;console.error("Failed to refresh timeline:",S)}},[j]),R=P(async(v={})=>{let S=H.current,F=V.current;if(!F||F.length===0)return;if(X.current)return;let{preserveScroll:w=!0,preserveMode:C="top",allowRepeat:p=!1}=v,__=(N_)=>{if(!w){N_();return}if(C==="top")$(N_);else _(N_)},n=F.slice().sort((N_,l)=>N_.id-l.id)[0]?.id;if(!Number.isFinite(n))return;if(!p&&B.current===n)return;X.current=!0,B.current=n;try{let N_=await $2(10,n,j);if(S!==H.current)return;if(N_.posts.length>0)__(()=>{N((l)=>W2([...N_.posts,...l||[]])),z(N_.has_more)});else z(!1)}catch(N_){if(S!==H.current)return;console.error("Failed to load more posts:",N_)}finally{if(S===H.current)X.current=!1}},[j,_,$]);return u(()=>{W.current=R},[R]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:G,loadPosts:A,refreshTimeline:x,loadMore:R,loadMoreRef:W,loadingMoreRef:X,lastBeforeIdRef:B}}function h6(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,K]=T(""),[z,G]=T({text:"",totalLines:0}),[W,X]=T(null),[B,V]=T(null),[H,A]=T(null),x=D(null),R=D(0),v=D(!1),S=D(""),F=D(""),w=D(null),C=D(null),p=D(null),__=D(null),t=D(!1),n=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:G,pendingRequest:W,setPendingRequest:X,currentTurnId:B,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:A,lastAgentEventRef:x,lastSilenceNoticeRef:R,isAgentRunningRef:v,draftBufferRef:S,thoughtBufferRef:F,pendingRequestRef:w,stalledPostIdRef:C,currentTurnIdRef:p,steerQueuedTurnIdRef:__,thoughtExpandedRef:t,draftExpandedRef:n}}function i6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((B)=>{B.preventDefault();let V=_.current;if(!V)return;let H=B.clientX,A=$.current||280,x=B.currentTarget;x.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientX;let w=Math.min(Math.max(A+(F.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${w}px`),$.current=w},S=()=>{let F=Math.min(Math.max(A+(R-H),160),600);$.current=F,x.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",o_("sidebarWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,K=D((B)=>{B.preventDefault();let V=_.current;if(!V)return;let H=B.touches[0];if(!H)return;let A=H.clientX,x=$.current||280,R=B.currentTarget;R.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let C=Math.min(Math.max(x+(w.clientX-A),160),600);V.style.setProperty("--sidebar-width",`${C}px`),$.current=C},S=()=>{R.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",o_("sidebarWidth",String(Math.round($.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,z=D((B)=>{B.preventDefault();let V=_.current;if(!V)return;let H=B.clientX,A=j.current||$.current||280,x=B.currentTarget;x.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientX;let w=Math.min(Math.max(A+(F.clientX-H),200),800);V.style.setProperty("--editor-width",`${w}px`),j.current=w},S=()=>{let F=Math.min(Math.max(A+(R-H),200),800);j.current=F,x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("editorWidth",String(Math.round(F))),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,G=D((B)=>{B.preventDefault();let V=_.current;if(!V)return;let H=B.touches[0];if(!H)return;let A=H.clientX,x=j.current||$.current||280,R=B.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let C=Math.min(Math.max(x+(w.clientX-A),200),800);V.style.setProperty("--editor-width",`${C}px`),j.current=C},S=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",o_("editorWidth",String(Math.round(j.current||x))),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current,W=D((B)=>{B.preventDefault();let V=_.current;if(!V)return;let H=B.clientY,A=Z?.current||200,x=B.currentTarget;x.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let R=H,v=(F)=>{R=F.clientY;let w=Math.min(Math.max(A-(F.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${w}px`),Z)Z.current=w;window.dispatchEvent(new CustomEvent("dock-resize"))},S=()=>{let F=Math.min(Math.max(A-(R-H),100),window.innerHeight*0.5);if(Z)Z.current=F;x.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",o_("dockHeight",String(Math.round(F))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",S)}).current,X=D((B)=>{B.preventDefault();let V=_.current;if(!V)return;let H=B.touches[0];if(!H)return;let A=H.clientY,x=Z?.current||200,R=B.currentTarget;R.classList.add("dragging"),document.body.style.userSelect="none";let v=(F)=>{let w=F.touches[0];if(!w)return;F.preventDefault();let C=Math.min(Math.max(x-(w.clientY-A),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},S=()=>{R.classList.remove("dragging"),document.body.style.userSelect="",o_("dockHeight",String(Math.round(Z?.current||x))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",S),document.removeEventListener("touchcancel",S)};document.addEventListener("touchmove",v,{passive:!1}),document.addEventListener("touchend",S),document.addEventListener("touchcancel",S)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:W,handleDockSplitterTouchStart:X}}function l6({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>m_.getTabs()),[N,K]=T(()=>m_.getActiveId()),[z,G]=T(()=>m_.getTabs().length>0);u(()=>{return m_.onChange((C,p)=>{Z(C),K(p),G(C.length>0)})},[]);let[W,X]=T(()=>new Set),B=P((C)=>{X((p)=>{let __=new Set(p);if(__.has(C))__.delete(C);else __.add(C);return __})},[]),V=P((C)=>{X((p)=>{if(!p.has(C))return p;let __=new Set(p);return __.delete(C),__})},[]),H=P((C)=>{if(!C)return;let p={path:C,mode:"edit"};try{if(!j0.resolve(p)){if(!j0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(__){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,__)}m_.open(C)},[]),A=P(()=>{let C=m_.getActiveId();if(C){let p=m_.get(C);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}m_.close(C),V(C),$.current?.(C)}},[V]),x=P((C)=>{let p=m_.get(C);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}m_.close(C),V(C),$.current?.(C)},[V]),R=P((C)=>{m_.activate(C)},[]),v=P((C)=>{let p=m_.getTabs().filter((n)=>n.id!==C&&!n.pinned),__=p.filter((n)=>n.dirty).length;if(__>0){if(!window.confirm(`${__} unsaved tab${__>1?"s":""} will be closed. Continue?`))return}let t=p.map((n)=>n.id);m_.closeOthers(C),t.forEach((n)=>{V(n),$.current?.(n)})},[V]),S=P(()=>{let C=m_.getTabs().filter((t)=>!t.pinned),p=C.filter((t)=>t.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let __=C.map((t)=>t.id);m_.closeAll(),__.forEach((t)=>{V(t),$.current?.(t)})},[V]),F=P((C)=>{m_.togglePin(C)},[]),w=P(()=>{let C=m_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return u(()=>{let C=(p)=>{let{oldPath:__,newPath:t,type:n}=p.detail||{};if(!__||!t)return;if(n==="dir"){for(let N_ of m_.getTabs())if(N_.path===__||N_.path.startsWith(`${__}/`)){let l=`${t}${N_.path.slice(__.length)}`;m_.rename(N_.id,l)}}else m_.rename(__,t)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),u(()=>{let C=(p)=>{if(m_.hasUnsaved())p.preventDefault(),p.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:W,openEditor:H,closeEditor:A,handleTabClose:x,handleTabActivate:R,handleTabCloseOthers:v,handleTabCloseAll:S,handleTabTogglePin:F,handleTabTogglePreview:B,revealInExplorer:w}}function B1(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var L1=B1("warning",30000),n6=B1("finalize",120000),Q1=B1("refresh",30000),d6=30000;function s6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function o6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function r6(_=30000){let[,$]=T(0);u(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function U1(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function a6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function R$(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function F1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function t6(_,$={}){if(R$($))return null;if(F1($))return{target:"_blank",features:void 0,mode:"tab"};return{target:y5(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function e6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function _8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function $8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function j8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function q2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Z8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function y5(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function H1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function J1(_){return String(_||"").trim()||"web:default"}function N8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function K8(_={}){return R$(_)&&F1(_)}function A5(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function w5(_={},$={}){if(!K8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=A5({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function z8(_={}){if(!K8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},z=()=>{Z=0,w5({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},W=()=>{G();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),G()},V);if(H!=null)N.add(H)}},X=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;W()},B=$.visualViewport;return W(),$.addEventListener("focus",W),$.addEventListener("pageshow",W),$.addEventListener("resize",W),$.addEventListener("orientationchange",W),j.addEventListener("visibilitychange",X),j.addEventListener("focusin",W,!0),B?.addEventListener?.("resize",W),B?.addEventListener?.("scroll",W),()=>{K(),$.removeEventListener("focus",W),$.removeEventListener("pageshow",W),$.removeEventListener("resize",W),$.removeEventListener("orientationchange",W),j.removeEventListener("visibilitychange",X),j.removeEventListener("focusin",W,!0),B?.removeEventListener?.("resize",W),B?.removeEventListener?.("scroll",W)}}function M5(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function K$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:M5($,j)}var P5=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function Y8(_){return P5.has(String(_||"").trim())}function C5(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function G8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(C5(_),{detail:Z})),!0}var b5=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function X8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(R$({window:j,navigator:Z}))};N();let z=b5.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of z)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function W8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var E1="piclaw_btw_session";function I5(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function S5(){let _=o0(E1);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var q8=B4,V8=Q4,x5=F4,O8=k4,B8=y4,L8=H4,D1=K$(s0,"getAgentContext",null),T5=K$(s0,"getAgentModels",{current:null,models:[]}),f5=K$(s0,"getActiveChatAgents",{chats:[]}),Q8=K$(s0,"getChatBranches",{chats:[]}),R5=K$(s0,"renameChatBranch",null),u5=K$(s0,"pruneChatBranch",null),v5=K$(s0,"getAgentQueueState",{count:0}),m5=K$(s0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),g5=K$(s0,"removeAgentQueueItem",{removed:!1}),c5=K$(s0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});j0.register(o4);j0.register($1);j0.register(_1);j0.register(j1);j0.register(N1);r4();j0.register(t4);function p5({locationParams:_}){let $=n_(()=>{let q=_.get("chat_jid");return q&&q.trim()?q.trim():"web:default"},[_]),j=n_(()=>{let q=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),Z=n_(()=>{let q=(_.get("branch_loader")||"").trim().toLowerCase();return q==="1"||q==="true"||q==="yes"},[_]),N=n_(()=>{let q=_.get("branch_source_chat_jid");return q&&q.trim()?q.trim():$},[$,_]),[K,z]=T("disconnected"),[G,W]=T(()=>R$()),[X,B]=T(null),[V,H]=T(null),[A,x]=T(!1),[R,v]=T("current"),[S,F]=T([]),[w,C]=T([]),[p,__]=T(null),{agentStatus:t,setAgentStatus:n,agentDraft:N_,setAgentDraft:l,agentPlan:B_,setAgentPlan:x_,agentThought:s,setAgentThought:$_,pendingRequest:K_,setPendingRequest:Z_,currentTurnId:W_,setCurrentTurnId:O_,steerQueuedTurnId:k_,setSteerQueuedTurnId:G_,lastAgentEventRef:w_,lastSilenceNoticeRef:L_,isAgentRunningRef:$0,draftBufferRef:y_,thoughtBufferRef:R_,pendingRequestRef:S_,stalledPostIdRef:r_,currentTurnIdRef:z_,steerQueuedTurnIdRef:a,thoughtExpandedRef:A_,draftExpandedRef:q_}=h6(),[H_,Q_]=T({}),[g_,U_]=T(null),[M_,t_]=T(null),[a_,T_]=T(!1),[Z0,N0]=T(null),[C_,e_]=T([]),[J0,y0]=T([]),[D0,W0]=T(null),[A0,d_]=T([]),[u_,I0]=T(!1),[h_,s_]=T(()=>S5()),w0=n_(()=>C_.find((q)=>q?.chat_jid===$)||null,[C_,$]),J_=n_(()=>J0.find((q)=>q?.chat_jid===$)||w0||null,[w0,J0,$]),b=J_?.root_chat_jid||w0?.root_chat_jid||$,e=I5(R),[P_,c_]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),M0=A0.length,a0=D(new Set),K0=D([]),q0=D(new Set),O0=D({inFlight:!1,lastAttemptAt:0,turnId:null});a0.current=new Set(A0.map((q)=>q.row_id)),K0.current=A0;let{notificationsEnabled:t0,notificationPermission:S0,toggleNotifications:h0,notify:i0}=c6(),[n$,k$]=T(()=>new Set),[l0,z0]=T(()=>p$("workspaceOpen",!0)),z$=D(null),{editorOpen:V0,tabStripTabs:Y0,tabStripActiveId:v_,previewTabs:u0,openEditor:x0,closeEditor:Y$,handleTabClose:F$,handleTabActivate:y$,handleTabCloseOthers:E0,handleTabCloseAll:A$,handleTabTogglePin:d$,handleTabTogglePreview:w$,revealInExplorer:s$}=l6({onTabClosed:(q)=>z$.current?.(q)}),M$=D(null),B0=D(null),H$=D(null),k0=D(null),F0=j0.getDockPanes().length>0,[G$,V2]=T(!1),L0=P(()=>V2((q)=>!q),[]),P$=!j&&(V0||F0&&G$);u(()=>{let q=M$.current;if(!q)return;if(B0.current)B0.current.dispose(),B0.current=null;let Y=v_;if(!Y)return;let J={path:Y,mode:"edit"},M=j0.resolve(J)||j0.get("editor");if(!M){q.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let y=M.mount(q,J);B0.current=y,y.onDirtyChange?.((j_)=>{m_.setDirty(Y,j_)}),y.onSaveRequest?.(()=>{}),y.onClose?.(()=>{Y$()});let h=m_.getViewState(Y);if(h&&typeof y.restoreViewState==="function")requestAnimationFrame(()=>y.restoreViewState(h));if(typeof y.onViewStateChange==="function")y.onViewStateChange((j_)=>{m_.saveViewState(Y,j_)});return requestAnimationFrame(()=>y.focus()),()=>{if(B0.current===y)y.dispose(),B0.current=null}},[v_,Y$]),u(()=>{let q=(Y)=>{let J=Y.detail?.path;if(J)x0(J)};return document.addEventListener("office-viewer:open-tab",q),()=>document.removeEventListener("office-viewer:open-tab",q)},[x0]),u(()=>{let q=H$.current;if(k0.current)k0.current.dispose(),k0.current=null;if(!q||!F0||!G$)return;let Y=j0.getDockPanes()[0];if(!Y){q.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=Y.mount(q,{mode:"view"});return k0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(k0.current===J)J.dispose(),k0.current=null}},[F0,G$]);let[C$,X$]=T({name:"You",avatar_url:null,avatar_background:null}),b$=D(!1),v0=D(!1),e0=D(null),T0=D($),m0=D(new Map),I$=D($),S$=D(0),_$=D(0),W$=D({}),o$=D({name:null,avatar_url:null}),P0=D({currentHashtag:null,searchQuery:null}),$$=D(null),q$=D(null),x$=D(0),Q=D(0),I=D(0),f=D(null),d=D(null),Y_=D(null),D_=D(null),b_=D(0),_0=D({title:null,avatarBase:null}),f0=D(null),I_=P(()=>{if(f0.current)clearTimeout(f0.current),f0.current=null;__(null)},[]);r6(30000),u(()=>{return E3()},[]),u(()=>{return X8(W)},[]),u(()=>{o_("workspaceOpen",String(l0))},[l0]),u(()=>{return z8()},[]),u(()=>{return()=>{I_()}},[I_]),u(()=>{if(!h_){o_(E1,"");return}o_(E1,JSON.stringify({question:h_.question||"",answer:h_.answer||"",thinking:h_.thinking||"",error:h_.error||null,status:h_.status||"success"}))},[h_]),u(()=>{W$.current=H_||{}},[H_]),u(()=>{T0.current=$},[$]),u(()=>{o$.current=C$||{name:"You",avatar_url:null,avatar_background:null}},[C$]);let g0=P((q,Y,J=null)=>{if(typeof document>"u")return;let M=(q||"").trim()||"PiClaw";if(_0.current.title!==M){document.title=M;let c=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(c&&c.getAttribute("content")!==M)c.setAttribute("content",M);_0.current.title=M}let y=document.getElementById("dynamic-favicon");if(!y)return;let h=y.getAttribute("data-default")||y.getAttribute("href")||"/favicon.ico",j_=Y||h,E_=Y?`${j_}|${J||""}`:j_;if(_0.current.avatarBase!==E_){let c=Y?`${j_}${j_.includes("?")?"&":"?"}v=${J||Date.now()}`:j_;y.setAttribute("href",c),_0.current.avatarBase=E_}},[]),V$=P((q)=>{if(!q)return;F((Y)=>Y.includes(q)?Y:[...Y,q])},[]),J$=P((q)=>{F((Y)=>Y.filter((J)=>J!==q))},[]);z$.current=J$;let O$=P(()=>{F([])},[]),O=P((q,Y=null,J="info",M=3000)=>{I_(),__({title:q,detail:Y||null,kind:J||"info"}),f0.current=setTimeout(()=>{__((y)=>y?.title===q?null:y)},M)},[I_]),U=P((q)=>{let Y=a6(q,{editorOpen:V0,resolvePane:(J)=>j0.resolve(J)});if(Y.kind==="open"){x0(Y.path);return}if(Y.kind==="toast")O(Y.title,Y.detail,Y.level)},[V0,x0,O]),E=P(()=>{let q=v_;if(q)V$(q)},[v_,V$]),k=P((q)=>{if(!q)return;C((Y)=>Y.includes(q)?Y:[...Y,q])},[]),m=P(async(q,Y=null)=>{let J=(y)=>{y.scrollIntoView({behavior:"smooth",block:"center"}),y.classList.add("post-highlight"),setTimeout(()=>y.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+q);if(M){J(M);return}try{let y=typeof Y==="string"&&Y.trim()?Y.trim():$,j_=(await L4(q,y))?.thread?.[0];if(!j_)return;U0((E_)=>{if(!E_)return[j_];if(E_.some((c)=>c.id===j_.id))return E_;return[...E_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let E_=document.getElementById("post-"+q);if(E_)J(E_)},50)})}catch(y){console.error("[scrollToMessage] Failed to fetch message",q,y)}},[$]),r=P((q)=>{C((Y)=>Y.filter((J)=>J!==q))},[]),o=P(()=>{C([])},[]),i=P((q={})=>{let Y=Date.now();if(w_.current=Y,q.running)$0.current=!0,I0((J)=>J?J:!0);if(q.clearSilence)L_.current=0},[I0]),g=P(()=>{if(D_.current)clearTimeout(D_.current),D_.current=null;b_.current=0},[]);u(()=>()=>{g()},[g]);let X_=P(()=>{g(),n((q)=>{if(!q)return q;if(!(q.last_activity||q.lastActivity))return q;let{last_activity:Y,lastActivity:J,...M}=q;return M})},[g]),Q0=P((q)=>{if(!q)return;g();let Y=Date.now();b_.current=Y,n({type:q.type||"active",last_activity:!0}),D_.current=setTimeout(()=>{if(b_.current!==Y)return;n((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},d6)},[g]),H0=P(()=>{$0.current=!1,I0(!1),w_.current=null,L_.current=0,y_.current="",R_.current="",S_.current=null,d.current=null,z_.current=null,a.current=null,e0.current=null,O0.current={inFlight:!1,lastAttemptAt:0,turnId:null},g(),O_(null),G_(null),A_.current=!1,q_.current=!1},[g,O_,G_,I0]),C0=P((q)=>{if(!N8({remainingQueueCount:q,currentTurnId:z_.current,isAgentTurnActive:u_}))return;a.current=null,G_(null)},[u_,G_]),k1=P(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),O2=P(()=>({agentStatus:t,agentDraft:N_?{...N_}:{text:"",totalLines:0},agentPlan:B_||"",agentThought:s?{...s}:{text:"",totalLines:0},pendingRequest:K_,currentTurnId:W_,steerQueuedTurnId:k_,isAgentTurnActive:Boolean(u_),followupQueueItems:Array.isArray(A0)?A0.map((q)=>({...q})):[],activeModel:g_,activeThinkingLevel:M_,supportsThinking:Boolean(a_),activeModelUsage:Z0,contextUsage:D0,isAgentRunning:Boolean($0.current),wasAgentActive:Boolean(v0.current),draftBuffer:y_.current||"",thoughtBuffer:R_.current||"",lastAgentEvent:w_.current||null,lastSilenceNotice:L_.current||0,lastAgentResponse:d.current||null,currentTurnIdRef:z_.current||null,steerQueuedTurnIdRef:a.current||null,thoughtExpanded:Boolean(A_.current),draftExpanded:Boolean(q_.current),agentStatusRef:e0.current||null,silentRecovery:{...O0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[g_,Z0,M_,N_,B_,t,s,D0,W_,A0,u_,K_,k_,a_]),y1=P((q)=>{let Y=q||k1();g(),$0.current=Boolean(Y.isAgentRunning),v0.current=Boolean(Y.wasAgentActive),I0(Boolean(Y.isAgentTurnActive)),w_.current=Y.lastAgentEvent||null,L_.current=Number(Y.lastSilenceNotice||0),y_.current=Y.draftBuffer||"",R_.current=Y.thoughtBuffer||"",S_.current=Y.pendingRequest||null,d.current=Y.lastAgentResponse||null,z_.current=Y.currentTurnIdRef||null,a.current=Y.steerQueuedTurnIdRef||null,e0.current=Y.agentStatusRef||null,O0.current=Y.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},A_.current=Boolean(Y.thoughtExpanded),q_.current=Boolean(Y.draftExpanded),n(Y.agentStatus||null),l(Y.agentDraft?{...Y.agentDraft}:{text:"",totalLines:0}),x_(Y.agentPlan||""),$_(Y.agentThought?{...Y.agentThought}:{text:"",totalLines:0}),Z_(Y.pendingRequest||null),O_(Y.currentTurnId||null),G_(Y.steerQueuedTurnId||null),d_(Array.isArray(Y.followupQueueItems)?Y.followupQueueItems.map((J)=>({...J})):[]),U_(Y.activeModel||null),t_(Y.activeThinkingLevel||null),T_(Boolean(Y.supportsThinking)),N0(Y.activeModelUsage??null),W0(Y.contextUsage??null)},[g,k1,O_,d_,I0,G_]),B$=P((q)=>{if(!q)return;if(z_.current===q)return;z_.current=q,O0.current={inFlight:!1,lastAttemptAt:0,turnId:q},O_(q),a.current=null,G_(null),y_.current="",R_.current="",l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,d.current=null,A_.current=!1,q_.current=!1},[O_,G_]),A1=P((q)=>{if(typeof document<"u"){let c=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&c)return}let Y=d.current;if(!Y||!Y.post)return;if(q&&Y.turnId&&Y.turnId!==q)return;let J=Y.post;if(J.id&&f.current===J.id)return;let M=String(J?.data?.content||"").trim();if(!M)return;f.current=J.id||f.current,d.current=null;let y=M.replace(/\s+/g," ").slice(0,200),h=W$.current||{},E_=(J?.data?.agent_id?h[J.data.agent_id]:null)?.name||"Pi";i0(E_,y)},[i0]),U8=P(async(q,Y)=>{if(q!=="thought"&&q!=="draft")return;let J=z_.current;if(q==="thought"){if(A_.current=Y,J)try{await B8(J,"thought",Y)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!Y)return;try{let M=J?await O8(J,"thought"):null;if(M?.text)R_.current=M.text;$_((y)=>({...y||{text:"",totalLines:0},fullText:R_.current||y?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:y?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(q_.current=Y,J)try{await B8(J,"draft",Y)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!Y)return;try{let M=J?await O8(J,"draft"):null;if(M?.text)y_.current=M.text;l((y)=>({...y||{text:"",totalLines:0},fullText:y_.current||y?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:y?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),d2=D(null),s2=P(()=>{let q=$$.current;if(!q)return;if(!(Math.abs(q.scrollTop)>150))q.scrollTop=0},[]);d2.current=s2;let F8=P((q)=>{let Y=$$.current;if(!Y||typeof q!=="function"){q?.();return}let{currentHashtag:J,searchQuery:M}=P0.current||{},y=!(M&&!J),h=y?Y.scrollHeight-Y.scrollTop:Y.scrollTop;q(),requestAnimationFrame(()=>{let j_=$$.current;if(!j_)return;if(y){let E_=Math.max(j_.scrollHeight-h,0);j_.scrollTop=E_}else{let E_=Math.max(j_.scrollHeight-j_.clientHeight,0),c=Math.min(h,E_);j_.scrollTop=c}})},[]),r$=P((q)=>{let Y=$$.current;if(!Y||typeof q!=="function"){q?.();return}let J=Y.scrollTop;q(),requestAnimationFrame(()=>{let M=$$.current;if(!M)return;let y=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(J,y)})},[]),H8="Queued as a follow-up (one-at-a-time).",J8="⁣",w1=P((q)=>{if(!q||!Array.isArray(q))return q;let Y=a0.current,J=new Set(Y),M=q.filter((y)=>{if(J.has(y?.id))return!1;if(y?.data?.is_bot_message){let h=y?.data?.content;if(h===H8||h===J8)return!1}return!0});return M.length===q.length?q:M},[]),{posts:M1,setPosts:U0,hasMore:D8,setHasMore:B2,hasMoreRef:P1,loadPosts:j$,refreshTimeline:b0,loadMore:E8,loadMoreRef:o2}=p6({preserveTimelineScroll:F8,preserveTimelineScrollTop:r$,chatJid:$}),u$=n_(()=>w1(M1),[M1,A0,w1]),L2=P(()=>{let q=r_.current;if(!q)return;U0((Y)=>Y?Y.filter((J)=>J.id!==q):Y),r_.current=null},[U0]),{handleSplitterMouseDown:k8,handleSplitterTouchStart:y8,handleEditorSplitterMouseDown:A8,handleEditorSplitterTouchStart:w8,handleDockSplitterMouseDown:M8,handleDockSplitterTouchStart:P8}=i6({appShellRef:q$,sidebarWidthRef:x$,editorWidthRef:Q,dockHeightRef:I}),C1=P(()=>{if(!$0.current)return;$0.current=!1,L_.current=0,w_.current=null,z_.current=null,O_(null),A_.current=!1,q_.current=!1;let q=(y_.current||"").trim();if(y_.current="",R_.current="",l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,d.current=null,!q){n({type:"error",title:"Response stalled - No content received"});return}let J=`${q}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),y=new Date().toISOString(),h={id:M,timestamp:y,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};r_.current=M,U0((j_)=>j_?W2([...j_,h]):[h]),d2.current?.(),n(null)},[O_]);u(()=>{P0.current={currentHashtag:X,searchQuery:V}},[X,V]);let p_=P(()=>{let q=$;v5(q).then((Y)=>{if(T0.current!==q)return;let J=q0.current,M=Array.isArray(Y?.items)?Y.items.map((y)=>({...y})).filter((y)=>!J.has(y.row_id)):[];if(M.length){d_((y)=>{if(y.length===M.length&&y.every((h,j_)=>h.row_id===M[j_].row_id))return y;return M});return}J.clear(),C0(0),d_((y)=>y.length===0?y:[])}).catch(()=>{if(T0.current!==q)return;d_((Y)=>Y.length===0?Y:[])})},[C0,$,d_]),n0=P(async()=>{let q=$;try{let Y=await D1(q);if(T0.current!==q)return;if(Y)W0(Y)}catch(Y){if(T0.current!==q)return;console.warn("Failed to fetch agent context:",Y)}},[$]),d0=P(async()=>{let q=$;try{let Y=await L8(q);if(T0.current!==q)return null;if(!Y||Y.status!=="active"||!Y.data){if(v0.current){let{currentHashtag:y,searchQuery:h}=P0.current||{};if(!y&&!h)b0()}return v0.current=!1,H0(),e0.current=null,n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,Y??null}v0.current=!0;let J=Y.data;e0.current=J;let M=J.turn_id||J.turnId;if(M)B$(M);if(i({running:!0,clearSilence:!0}),X_(),n(J),Y.thought&&Y.thought.text)$_((y)=>{if(y&&y.text&&y.text.length>=Y.thought.text.length)return y;return R_.current=Y.thought.text,{text:Y.thought.text,totalLines:Y.thought.totalLines||0}});if(Y.draft&&Y.draft.text)l((y)=>{if(y&&y.text&&y.text.length>=Y.draft.text.length)return y;return y_.current=Y.draft.text,{text:Y.draft.text,totalLines:Y.draft.totalLines||0}});return Y}catch(Y){return console.warn("Failed to fetch agent status:",Y),null}},[H0,X_,i,b0,B$]),r2=P(async()=>{if(!$0.current)return null;if(S_.current)return null;let q=z_.current||null,Y=O0.current,J=Date.now();if(Y.inFlight)return null;if(Y.turnId===q&&J-Y.lastAttemptAt<Q1)return null;Y.inFlight=!0,Y.lastAttemptAt=J,Y.turnId=q;try{let{currentHashtag:M,searchQuery:y}=P0.current||{};if(!M&&!y)await b0();return await p_(),await d0()}finally{Y.inFlight=!1}},[d0,p_,b0]);u(()=>{let q=Math.min(1000,Math.max(100,Math.floor(L1/2))),Y=setInterval(()=>{if(!$0.current)return;if(S_.current)return;let J=w_.current;if(!J)return;let M=Date.now(),y=M-J,h=z2(e0.current);if(y>=n6){if(!h)n({type:"waiting",title:"Re-syncing after a quiet period…"});r2();return}if(y>=L1){if(M-L_.current>=Q1){if(!h){let j_=Math.floor(y/1000);n({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}L_.current=M,r2()}}},q);return()=>clearInterval(Y)},[r2]);let C8=P((q)=>{if(z(q),q!=="connected"){n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,H0();return}if(!b$.current){b$.current=!0,d0(),n0();return}let{currentHashtag:Y,searchQuery:J}=P0.current;if(!Y&&!J)b0();d0(),n0()},[H0,b0,d0,n0]),b8=P(async(q)=>{B(q),U0(null),await j$(q)},[j$]),I8=P(async()=>{B(null),H(null),U0(null),await j$()},[j$]),S8=P(async(q,Y=R)=>{if(!q||!q.trim())return;let J=Y==="root"||Y==="all"?Y:"current";v(J),H(q.trim()),B(null),U0(null);try{let M=await q8(q.trim(),50,0,$,J,b);U0(M.results),B2(!1)}catch(M){console.error("Failed to search:",M),U0([])}},[$,b,R]),x8=P(()=>{x(!0),H(null),B(null),v("current"),U0([])},[]),T8=P(()=>{x(!1),H(null),j$()},[j$]),i5=P(()=>{},[]),f8=P(async(q)=>{if(!q)return;let Y=q.id,J=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():$,M=u$?.filter((h)=>h?.data?.thread_id===Y&&h?.id!==Y).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let y=(h)=>{if(!h.length)return;k$((E_)=>{let c=new Set(E_);return h.forEach((V_)=>c.add(V_)),c}),setTimeout(()=>{if(r$(()=>{U0((E_)=>E_?E_.filter((c)=>!h.includes(c.id)):E_)}),k$((E_)=>{let c=new Set(E_);return h.forEach((V_)=>c.delete(V_)),c}),P1.current)o2.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let h=await V8(Y,M>0,J);if(h?.ids?.length)y(h.ids)}catch(h){let j_=h?.message||"";if(M===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let c=await V8(Y,!0,J);if(c?.ids?.length)y(c.ids);return}console.error("Failed to delete post:",h),alert(`Failed to delete message: ${j_}`)}},[$,u$,r$]),b1=P(async()=>{try{let q=await x5();Q_(s6(q));let Y=q?.user||{};X$((M)=>{let y=typeof Y.name==="string"&&Y.name.trim()?Y.name.trim():"You",h=typeof Y.avatar_url==="string"?Y.avatar_url.trim():null,j_=typeof Y.avatar_background==="string"&&Y.avatar_background.trim()?Y.avatar_background.trim():null;if(M.name===y&&M.avatar_url===h&&M.avatar_background===j_)return M;return{name:y,avatar_url:h,avatar_background:j_}});let J=(q?.agents||[]).find((M)=>M.id==="default");g0(J?.name,J?.avatar_url)}catch(q){console.warn("Failed to load agents:",q)}try{let q=$,Y=await D1(q);if(T0.current!==q)return;if(Y)W0(Y)}catch{}},[g0,$]);u(()=>{b1();let q=h$("sidebarWidth",null),Y=Number.isFinite(q)?Math.min(Math.max(q,160),600):280;if(x$.current=Y,q$.current)q$.current.style.setProperty("--sidebar-width",`${Y}px`)},[b1]);let a2=u_||t!==null,I1=P((q)=>{if(!q||typeof q!=="object")return;let Y=q.agent_id;if(!Y)return;let{agent_name:J,agent_avatar:M}=q;if(!J&&M===void 0)return;let y=W$.current?.[Y]||{id:Y},h=y.name||null,j_=y.avatar_url??y.avatarUrl??y.avatar??null,E_=!1,c=!1;if(J&&J!==y.name)h=J,c=!0;if(M!==void 0){let V_=typeof M==="string"?M.trim():null,i_=typeof j_==="string"?j_.trim():null,F_=V_||null;if(F_!==(i_||null))j_=F_,E_=!0}if(!c&&!E_)return;if(Q_((V_)=>{let F_={...V_[Y]||{id:Y}};if(c)F_.name=h;if(E_)F_.avatar_url=j_;return{...V_,[Y]:F_}}),Y==="default")g0(h,j_,E_?Date.now():null)},[g0]),S1=P((q)=>{if(!q||typeof q!=="object")return;let Y=q.user_name??q.userName,J=q.user_avatar??q.userAvatar,M=q.user_avatar_background??q.userAvatarBackground;if(Y===void 0&&J===void 0&&M===void 0)return;X$((y)=>{let h=typeof Y==="string"&&Y.trim()?Y.trim():y.name||"You",j_=J===void 0?y.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,E_=M===void 0?y.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(y.name===h&&y.avatar_url===j_&&y.avatar_background===E_)return y;return{name:h,avatar_url:j_,avatar_background:E_}})},[]),t2=P((q)=>{if(!q||typeof q!=="object")return;let Y=q.model??q.current;if(Y!==void 0)U_(Y);if(q.thinking_level!==void 0)t_(q.thinking_level??null);if(q.supports_thinking!==void 0)T_(Boolean(q.supports_thinking));if(q.provider_usage!==void 0)N0(q.provider_usage??null)},[]),a$=P(()=>{let q=$;T5(q).then((Y)=>{if(T0.current!==q)return;if(Y)t2(Y)}).catch(()=>{})},[t2,$]),c0=P(()=>{f5().then((q)=>{let Y=Array.isArray(q?.chats)?q.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];e_(Y)}).catch(()=>{})},[]),R0=P(()=>{Q8(b).then((q)=>{let Y=Array.isArray(q?.chats)?q.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];y0(Y)}).catch(()=>{})},[b]),R8=P((q)=>{let Y=q?.row_id;if(Y==null)return;q0.current.add(Y),d_((J)=>J.filter((M)=>M?.row_id!==Y)),m5(Y,J1($)).then(()=>{p_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),O("Failed to steer message","The queued message could not be sent as steering.","warning"),q0.current.delete(Y),p_()})},[$,p_,d_,O]),u8=P((q)=>{let Y=q?.row_id;if(Y==null)return;let J=K0.current.filter((M)=>M?.row_id!==Y).length;q0.current.add(Y),C0(J),d_((M)=>M.filter((y)=>y?.row_id!==Y)),g5(Y,J1($)).then(()=>{p_()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),O("Failed to remove message","The queued message could not be removed.","warning"),q0.current.delete(Y),p_()})},[C0,$,p_,d_,O]),e2=P((q)=>{if(!q||typeof q!=="object")return;if(c0(),R0(),q?.queued==="followup"||q?.queued==="steer"){p_();return}let Y=q?.command;if(Y&&typeof Y==="object"&&(Y?.queued_followup||Y?.queued_steer))p_()},[c0,R0,p_]),_4=P(()=>{if(Y_.current)Y_.current.abort(),Y_.current=null;s_(null)},[]),Q2=P(async(q)=>{let Y=String(q||"").trim();if(!Y)return O("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y_.current)Y_.current.abort();let J=new AbortController;Y_.current=J,s_({question:Y,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await c5(Y,{signal:J.signal,chatJid:x3($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(y,h)=>{if(y==="side_prompt_start")s_((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(y)=>{s_((h)=>h?{...h,thinking:`${h.thinking||""}${y||""}`}:h)},onTextDelta:(y)=>{s_((h)=>h?{...h,answer:`${h.answer||""}${y||""}`}:h)}});if(Y_.current!==J)return!0;s_((y)=>y?{...y,answer:M?.result||y.answer||"",thinking:M?.thinking||y.thinking||"",model:M?.model||null,status:"success",error:null}:y)}catch(M){if(J.signal.aborted)return!0;s_((y)=>y?{...y,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:y)}finally{if(Y_.current===J)Y_.current=null}return!0},[$,O]),v8=P(async({content:q})=>{let Y=S3(q);if(!Y)return!1;if(Y.type==="help")return O("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return _4(),O("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Q2(Y.question),!0;return!1},[_4,Q2,O]),m8=P(()=>{if(h_?.question)Q2(h_.question)},[h_,Q2]),g8=P(async()=>{let q=R3(h_);if(!q)return;try{let Y=await g$("default",q,null,[],a2?"queue":null,$);e2(Y),O(Y?.queued==="followup"?"BTW queued":"BTW injected",Y?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(Y){O("BTW inject failed",Y?.message||"Could not inject BTW answer into chat.","warning")}},[h_,e2,a2,O]),t$=P(()=>{a$(),c0(),R0(),p_(),n0()},[a$,c0,R0,p_,n0]);u(()=>{t$();let q=setInterval(()=>{a$(),c0(),R0(),p_()},60000);return()=>clearInterval(q)},[t$,a$,c0,R0,p_]),u(()=>{R0()},[R0]),u(()=>{let q=!1;if(U0(null),X)return j$(X),()=>{q=!0};if(V)return q8(V,50,0,$,R,b).then((Y)=>{if(q)return;U0(Y.results),B2(!1)}).catch((Y)=>{if(q)return;console.error("Failed to search:",Y),U0([]),B2(!1)}),()=>{q=!0};return j$(),()=>{q=!0}},[$,X,V,R,b,j$,B2,U0]),u(()=>{let q=I$.current||$;m0.current.set(q,O2())},[$,O2]),u(()=>{let q=I$.current||$;if(q===$)return;m0.current.set(q,O2()),I$.current=$,q0.current.clear(),y1(m0.current.get($)||null),p_(),d0(),n0()},[$,d0,n0,p_,y1,O2]);let c8=P(()=>{let{currentHashtag:q,searchQuery:Y}=P0.current||{};if(!q&&!Y)b0();t$()},[t$,b0]),$4=P((q,Y)=>{let J=Y?.turn_id,M=typeof Y?.chat_jid==="string"&&Y.chat_jid.trim()?Y.chat_jid.trim():null,h=M?M===$:q==="connected"||q==="workspace_update";if(h)I1(Y),S1(Y);if(q==="ui_theme"){k3(Y);return}if(q?.startsWith("agent_")){if(!(q==="agent_draft_delta"||q==="agent_thought_delta"||q==="agent_draft"||q==="agent_thought"))X_()}if(q==="connected"){n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),S_.current=null,H0();let c=$;L8(c).then((F_)=>{if(T0.current!==c)return;if(!F_||F_.status!=="active"||!F_.data)return;let v$=F_.data,x1=v$.turn_id||v$.turnId;if(x1)B$(x1);if(i({clearSilence:!0}),Q0(v$),F_.thought&&F_.thought.text)R_.current=F_.thought.text,$_({text:F_.thought.text,totalLines:F_.thought.totalLines||0});if(F_.draft&&F_.draft.text)y_.current=F_.draft.text,l({text:F_.draft.text,totalLines:F_.draft.totalLines||0})}).catch((F_)=>{console.warn("Failed to fetch agent status:",F_)});let{currentHashtag:V_,searchQuery:i_}=P0.current||{};if(!V_&&!i_)b0();t$();return}if(q==="agent_status"){if(!h){if(Y?.type==="done"||Y?.type==="error")c0(),R0();return}if(Y.type==="done"||Y.type==="error"){if(J&&z_.current&&J!==z_.current)return;if(Y.type==="done"){A1(J||z_.current);let{currentHashtag:c,searchQuery:V_}=P0.current||{};if(!c&&!V_)b0();if(Y.context_usage)W0(Y.context_usage)}if(v0.current=!1,H0(),q0.current.clear(),c0(),p_(),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null),Y.type==="error")n({type:"error",title:Y.title||"Agent error"}),setTimeout(()=>n(null),8000);else n(null)}else{if(J)B$(J);if(i({running:!0,clearSilence:!0}),Y.type==="thinking")y_.current="",R_.current="",l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0});e0.current=Y,n((c)=>{if(c&&c.type===Y.type&&c.title===Y.title)return c;return Y})}return}if(q==="agent_steer_queued"){if(!h)return;if(J&&z_.current&&J!==z_.current)return;let c=J||z_.current;if(!c)return;a.current=c,G_(c);return}if(q==="agent_followup_queued"){if(!h)return;let c=Y?.row_id,V_=Y?.content;if(c!=null&&typeof V_==="string"&&V_.trim())d_((i_)=>{if(i_.some((F_)=>F_?.row_id===c))return i_;return[...i_,{row_id:c,content:V_,timestamp:Y?.timestamp||null,thread_id:Y?.thread_id??null}]});p_();return}if(q==="agent_followup_consumed"){if(!h)return;let c=Y?.row_id;if(c!=null){let V_=K0.current.filter((i_)=>i_.row_id!==c).length;C0(V_),d_((i_)=>i_.filter((F_)=>F_.row_id!==c))}p_(),b0();return}if(q==="agent_followup_removed"){if(!h)return;let c=Y?.row_id;if(c!=null){let V_=K0.current.filter((i_)=>i_.row_id!==c).length;q0.current.add(c),C0(V_),d_((i_)=>i_.filter((F_)=>F_.row_id!==c))}p_();return}if(q==="agent_draft_delta"){if(!h)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B$(J);if(i({running:!0,clearSilence:!0}),Y?.reset)y_.current="";if(Y?.delta)y_.current+=Y.delta;let c=Date.now();if(!S$.current||c-S$.current>=100){S$.current=c;let V_=y_.current,i_=U1(V_);if(q_.current)l((F_)=>({text:F_?.text||"",totalLines:i_,fullText:V_}));else l({text:V_,totalLines:i_})}return}if(q==="agent_draft"){if(!h)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B$(J);i({running:!0,clearSilence:!0});let c=Y.text||"",V_=Y.mode||(Y.kind==="plan"?"replace":"append"),i_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(Y.kind==="plan")if(V_==="replace")x_(c);else x_((F_)=>(F_||"")+c);else if(!q_.current)y_.current=c,l({text:c,totalLines:i_});return}if(q==="agent_thought_delta"){if(!h)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B$(J);if(i({running:!0,clearSilence:!0}),Y?.reset)R_.current="";if(typeof Y?.delta==="string")R_.current+=Y.delta;let c=Date.now();if(A_.current&&(!_$.current||c-_$.current>=100)){_$.current=c;let V_=R_.current;$_((i_)=>({text:i_?.text||"",totalLines:U1(V_),fullText:V_}))}return}if(q==="agent_thought"){if(!h)return;if(J&&z_.current&&J!==z_.current)return;if(J&&!z_.current)B$(J);i({running:!0,clearSilence:!0});let c=Y.text||"",V_=Number.isFinite(Y.total_lines)?Y.total_lines:c?c.replace(/\r\n/g,`
`).split(`
`).length:0;if(!A_.current)R_.current=c,$_({text:c,totalLines:V_});return}if(q==="model_changed"){if(!h)return;if(Y?.model!==void 0)U_(Y.model);if(Y?.thinking_level!==void 0)t_(Y.thinking_level??null);if(Y?.supports_thinking!==void 0)T_(Boolean(Y.supports_thinking));let c=$;D1(c).then((V_)=>{if(T0.current!==c)return;if(V_)W0(V_)}).catch(()=>{});return}if(q==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:Y}));return}if(Y8(q)){if(!h)return;if(G8(q,Y),q==="extension_ui_notify"&&typeof Y?.message==="string")O(Y.message,null,Y?.type||"info");if(q==="extension_ui_error"&&typeof Y?.error==="string")O("Extension UI error",Y.error,"error",5000);return}let{currentHashtag:j_,searchQuery:E_}=P0.current;if(q==="agent_response"){if(!h)return;L2(),d.current={post:Y,turnId:z_.current}}if(!j_&&!E_&&h&&(q==="new_post"||q==="new_reply"||q==="agent_response"))U0((c)=>{if(!c)return[Y];if(c.some((V_)=>V_.id===Y.id))return c;return[...c,Y]}),d2.current?.();if(q==="interaction_updated"){if(!h)return;U0((c)=>{if(!c)return c;if(!c.some((V_)=>V_.id===Y.id))return c;return c.map((V_)=>V_.id===Y.id?Y:V_)})}if(q==="interaction_deleted"){if(!h)return;let c=Y?.ids||[];if(c.length){r$(()=>{U0((F_)=>F_?F_.filter((v$)=>!c.includes(v$.id)):F_)});let{currentHashtag:V_,searchQuery:i_}=P0.current;if(P1.current&&!V_&&!i_)o2.current?.({preserveScroll:!0,preserveMode:"top"})}}},[H0,X_,$,o2,i,A1,r$,c0,R0,b0,L2,B$,Q0,I1,S1,a$,p_,d_]);u(()=>{if(typeof window>"u")return;let q=window.__PICLAW_TEST_API||{};return q.emit=$4,q.reset=()=>{L2(),H0(),n(null),l({text:"",totalLines:0}),x_(""),$_({text:"",totalLines:0}),Z_(null)},q.finalize=()=>C1(),window.__PICLAW_TEST_API=q,()=>{if(window.__PICLAW_TEST_API===q)window.__PICLAW_TEST_API=void 0}},[H0,C1,$4,L2]),g6({handleSseEvent:$4,handleConnectionStatusChange:C8,loadPosts:j$,onWake:c8,chatJid:$}),u(()=>{if(!u$||u$.length===0)return;let q=location.hash;if(!q||!q.startsWith("#msg-"))return;let Y=q.slice(5);m(Y),history.replaceState(null,"",location.pathname+location.search)},[u$,m]);let j4=t!==null;u(()=>{if(K!=="connected")return;let Y=setInterval(()=>{let{currentHashtag:J,searchQuery:M}=P0.current||{},y=!J&&!M;if(j4){if(y)b0();p_(),d0(),n0()}else{if(y)b0();d0(),n0()}},j4?15000:60000);return()=>clearInterval(Y)},[K,j4,d0,n0,p_,b0]),u(()=>{return W8(()=>{d0(),n0(),p_()})},[d0,n0,p_]);let p8=P(()=>{z0((q)=>!q)},[]),h8=P((q)=>{if(typeof window>"u")return;let Y=String(q||"").trim();if(!Y||Y===$)return;let J=q2(window.location.href,Y,{chatOnly:j});window.location.assign(J)},[j,$]),i8=P(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;let q=J_.agent_name||"",Y=J_.display_name||"",J=window.prompt("Branch display name",Y);if(J===null)return;let M=window.prompt("Agent handle (without @)",q);if(M===null)return;try{let y=await R5(J_.chat_jid,{displayName:J,agentName:M});await Promise.allSettled([c0(),R0()]);let h=y?.branch?.agent_name||String(M||"").trim()||q;O("Branch renamed",`This chat is now @${h}.`,"info",3500)}catch(y){let h=y instanceof Error?y.message:String(y||"Could not rename branch.");O("Could not rename branch",h||"Could not rename branch.","warning",5000)}},[J_,c0,R0,O]),l8=P(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;if(J_.chat_jid===(J_.root_chat_jid||J_.chat_jid)){O("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let Y=J_.display_name||`@${J_.agent_name||J_.chat_jid}`;if(!window.confirm(`Prune ${Y}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await u5(J_.chat_jid),await Promise.allSettled([c0(),R0()]);let M=J_.root_chat_jid||"web:default";O("Branch pruned",`${Y} has been archived.`,"info",3000);let y=q2(window.location.href,M,{chatOnly:j});window.location.assign(y)}catch(M){let y=M instanceof Error?M.message:String(M||"Could not prune branch.");O("Could not prune branch",y||"Could not prune branch.","warning",5000)}},[j,J_,c0,R0,O]);u(()=>{if(!Z||typeof window>"u")return;let q=!1;return(async()=>{try{c_({status:"running",message:"Preparing a new chat branch…"});let Y=await M2(N);if(q)return;let J=Y?.branch,M=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let y=q2(window.location.href,M,{chatOnly:!0});window.location.replace(y)}catch(Y){if(q)return;c_({status:"error",message:H1(Y)})}})(),()=>{q=!0}},[Z,N]);let n8=P(async()=>{if(typeof window>"u"||G)return;let q=t6($);if(!q){O("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(q.mode==="tab"){let J=Z8(window.location.href,$,{chatOnly:!0});if(!window.open(J,q.target))O("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let Y=e6(q);if(!Y){O("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}_8(Y,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await M2($))?.branch,y=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!y)throw Error("Branch fork did not return a chat id.");try{let j_=await U4();e_(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await Q8(b);y0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let h=q2(window.location.href,y,{chatOnly:!0});$8(Y,h)}catch(J){j8(Y),O("Could not open branch window",H1(J),"error",5000)}},[$,b,G,O]);u(()=>{if(!V0)return;if(typeof window>"u")return;let q=q$.current;if(!q)return;if(!Q.current){let Y=h$("editorWidth",null),J=x$.current||280;Q.current=Number.isFinite(Y)?Y:J}if(q.style.setProperty("--editor-width",`${Q.current}px`),!I.current){let Y=h$("dockHeight",null);I.current=Number.isFinite(Y)?Y:200}q.style.setProperty("--dock-height",`${I.current}px`)},[V0]),u(()=>{if(!F0||j)return;let q=(Y)=>{if(Y.ctrlKey&&Y.key==="`")Y.preventDefault(),L0()};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[L0,F0,j]);let d8=Boolean(k_&&k_===(t?.turn_id||W_));if(Z)return L`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${P_.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${P_.message}</p>
                    </div>
                </div>
            </div>
        `;return L`
        <div class=${`app-shell${l0?"":" workspace-collapsed"}${V0?" editor-open":""}${j?" chat-only":""}`} ref=${q$}>
            ${!j&&L`
                <${R6}
                    onFileSelect=${V$}
                    visible=${l0}
                    active=${l0||V0}
                    onOpenEditor=${x0}
                />
                <button
                    class=${`workspace-toggle-tab${l0?" open":" closed"}`}
                    onClick=${p8}
                    title=${l0?"Hide workspace":"Show workspace"}
                    aria-label=${l0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${k8} onTouchStart=${y8}></div>
            `}
            ${P$&&L`
                <div class="editor-pane-container">
                    ${V0&&L`
                        <${u6}
                            tabs=${Y0}
                            activeId=${v_}
                            onActivate=${y$}
                            onClose=${F$}
                            onCloseOthers=${E0}
                            onCloseAll=${A$}
                            onTogglePin=${d$}
                            onTogglePreview=${w$}
                            previewTabs=${u0}
                            onToggleDock=${F0?L0:void 0}
                            dockVisible=${F0&&G$}
                        />
                    `}
                    ${V0&&L`<div class="editor-pane-host" ref=${M$}></div>`}
                    ${V0&&v_&&u0.has(v_)&&L`
                        <${m6}
                            getContent=${()=>B0.current?.getContent?.()}
                            path=${v_}
                            onClose=${()=>w$(v_)}
                        />
                    `}
                    ${F0&&G$&&L`<div class="dock-splitter" onMouseDown=${M8} onTouchStart=${P8}></div>`}
                    ${F0&&L`<div class=${`dock-panel${G$?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${L0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${H$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${A8} onTouchStart=${w8}></div>
            `}
            <div class="container">
                ${V&&o6()&&L`<div class="search-results-spacer"></div>`}
                ${j&&L`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${J_?.display_name||J_?.agent_name?`@${J_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${J_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${J0.length>1&&L`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(q)=>h8(q.currentTarget.value)}
                                    >
                                        ${J0.map((q)=>L`
                                            <option key=${q.chat_jid} value=${q.chat_jid}>
                                                ${`@${q.agent_name}${q.display_name?` — ${q.display_name}`:""}${q.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${J_?.chat_jid&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${i8}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${J_?.chat_jid&&J_.chat_jid!==(J_.root_chat_jid||J_.chat_jid)&&L`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${l8}
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
                ${(X||V)&&L`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${I8}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${X?`#${X}`:`Search: ${V} · ${e}`}</span>
                    </div>
                `}
                <${z6}
                    posts=${u$}
                    hasMore=${D8}
                    onLoadMore=${E8}
                    timelineRef=${$$}
                    onHashtagClick=${b8}
                    onMessageRef=${k}
                    onScrollToMessage=${m}
                    onFileRef=${U}
                    onPostClick=${void 0}
                    onDeletePost=${f8}
                    emptyMessage=${X?`No posts with #${X}`:V?`No results for "${V}"`:void 0}
                    agents=${H_}
                    user=${C$}
                    reverse=${!(V&&!X)}
                    removingPostIds=${n$}
                    searchQuery=${V}
                />
                <${i3}
                    status=${t}
                    draft=${N_}
                    plan=${B_}
                    thought=${s}
                    pendingRequest=${K_}
                    intent=${p}
                    turnId=${W_}
                    steerQueued=${d8}
                    onPanelToggle=${U8}
                />
                <${u3}
                    session=${h_}
                    onClose=${_4}
                    onRetry=${m8}
                    onInject=${g8}
                />
                <${L3}
                    onPost=${()=>{j$(),s2()}}
                    onFocus=${s2}
                    searchMode=${A}
                    searchScope=${R}
                    onSearch=${S8}
                    onSearchScopeChange=${v}
                    onEnterSearch=${x8}
                    onExitSearch=${T8}
                    fileRefs=${S}
                    onRemoveFileRef=${J$}
                    onClearFileRefs=${O$}
                    messageRefs=${w}
                    onRemoveMessageRef=${r}
                    onClearMessageRefs=${o}
                    activeEditorPath=${j?null:v_}
                    onAttachEditorFile=${j?void 0:E}
                    onOpenFilePill=${U}
                    followupQueueCount=${M0}
                    followupQueueItems=${A0}
                    onInjectQueuedFollowup=${R8}
                    onRemoveQueuedFollowup=${u8}
                    onSubmitIntercept=${v8}
                    onMessageResponse=${e2}
                    onPopOutChat=${G?void 0:n8}
                    isAgentActive=${a2}
                    activeChatAgents=${C_}
                    currentChatJid=${$}
                    activeModel=${g_}
                    modelUsage=${Z0}
                    thinkingLevel=${M_}
                    supportsThinking=${a_}
                    contextUsage=${D0}
                    notificationsEnabled=${t0}
                    notificationPermission=${S0}
                    onToggleNotifications=${h0}
                    onModelChange=${U_}
                    onModelStateChange=${t2}
                />
                <${n3} status=${K} />
                <${l3}
                    request=${K_}
                    onRespond=${()=>{Z_(null),S_.current=null}}
                />
            </div>
        </div>
    `}function h5(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return L`<${p5} locationParams=${_} />`}N3(L`<${h5} />`,document.getElementById("app"));

//# debugId=96D9D110A94E223D64756E2164756E21
//# sourceMappingURL=app.bundle.js.map
