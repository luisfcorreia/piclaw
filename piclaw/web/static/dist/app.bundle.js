var Q9=Object.defineProperty;var U9=(_)=>_;function F9(_,$){this[_]=U9.bind(null,$)}var H9=(_,$)=>{for(var j in $)Q9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:F9.bind($,j)})};var J9=((_)=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(_,{get:($,j)=>(typeof require<"u"?require:$)[j]}):_)(function(_){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+_+'" is not supported')});var n2,$0,O3,D9,g$,$3,B3,Q3,U3,w1,E1,k1,E9,h2={},i2=[],k9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d2=Array.isArray;function x$(_,$){for(var j in $)_[j]=$[j];return _}function P1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function F3(_,$,j){var Z,N,z,K={};for(z in $)z=="key"?Z=$[z]:z=="ref"?N=$[z]:K[z]=$[z];if(arguments.length>2&&(K.children=arguments.length>3?n2.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(z in _.defaultProps)K[z]===void 0&&(K[z]=_.defaultProps[z]);return g2(_,K,Z,N,null)}function g2(_,$,j,Z,N){var z={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++O3:N,__i:-1,__u:0};return N==null&&$0.vnode!=null&&$0.vnode(z),z}function s2(_){return _.children}function p2(_,$){this.props=_,this.context=$}function W2(_,$){if($==null)return _.__?W2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?W2(_):null}function y9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],z=x$({},$);z.__v=$.__v+1,$0.vnode&&$0.vnode(z),M1(_.__P,z,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?W2($):j,!!(32&$.__u),N),z.__v=$.__v,z.__.__k[z.__i]=z,E3(Z,z,N),$.__e=$.__=null,z.__e!=j&&H3(z)}}function H3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),H3(_)}function j3(_){(!_.__d&&(_.__d=!0)&&g$.push(_)&&!l2.__r++||$3!=$0.debounceRendering)&&(($3=$0.debounceRendering)||B3)(l2)}function l2(){try{for(var _,$=1;g$.length;)g$.length>$&&g$.sort(Q3),_=g$.shift(),$=g$.length,y9(_)}finally{g$.length=l2.__r=0}}function J3(_,$,j,Z,N,z,K,G,q,V,O){var Y,F,w,m,v,f,E,H=Z&&Z.__k||i2,I=$.length;for(q=A9(j,$,H,q,I),Y=0;Y<I;Y++)(w=j.__k[Y])!=null&&(F=w.__i!=-1&&H[w.__i]||h2,w.__i=Y,f=M1(_,w,F,N,z,K,G,q,V,O),m=w.__e,w.ref&&F.ref!=w.ref&&(F.ref&&b1(F.ref,null,w),O.push(w.ref,w.__c||m,w)),v==null&&m!=null&&(v=m),(E=!!(4&w.__u))||F.__k===w.__k?q=D3(w,q,_,E):typeof w.type=="function"&&f!==void 0?q=f:m&&(q=m.nextSibling),w.__u&=-7);return j.__e=v,q}function A9(_,$,j,Z,N){var z,K,G,q,V,O=j.length,Y=O,F=0;for(_.__k=Array(N),z=0;z<N;z++)(K=$[z])!=null&&typeof K!="boolean"&&typeof K!="function"?(typeof K=="string"||typeof K=="number"||typeof K=="bigint"||K.constructor==String?K=_.__k[z]=g2(null,K,null,null,null):d2(K)?K=_.__k[z]=g2(s2,{children:K},null,null,null):K.constructor===void 0&&K.__b>0?K=_.__k[z]=g2(K.type,K.props,K.key,K.ref?K.ref:null,K.__v):_.__k[z]=K,q=z+F,K.__=_,K.__b=_.__b+1,G=null,(V=K.__i=w9(K,j,q,Y))!=-1&&(Y--,(G=j[V])&&(G.__u|=2)),G==null||G.__v==null?(V==-1&&(N>O?F--:N<O&&F++),typeof K.type!="function"&&(K.__u|=4)):V!=q&&(V==q-1?F--:V==q+1?F++:(V>q?F--:F++,K.__u|=4))):_.__k[z]=null;if(Y)for(z=0;z<O;z++)(G=j[z])!=null&&(2&G.__u)==0&&(G.__e==Z&&(Z=W2(G)),y3(G,G));return Z}function D3(_,$,j,Z){var N,z;if(typeof _.type=="function"){for(N=_.__k,z=0;N&&z<N.length;z++)N[z]&&(N[z].__=_,$=D3(N[z],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=W2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function w9(_,$,j,Z){var N,z,K,G=_.key,q=_.type,V=$[j],O=V!=null&&(2&V.__u)==0;if(V===null&&G==null||O&&G==V.key&&q==V.type)return j;if(Z>(O?1:0)){for(N=j-1,z=j+1;N>=0||z<$.length;)if((V=$[K=N>=0?N--:z++])!=null&&(2&V.__u)==0&&G==V.key&&q==V.type)return K}return-1}function Z3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||k9.test($)?j:j+"px"}function m2(_,$,j,Z,N){var z,K;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||Z3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||Z3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")z=$!=($=$.replace(U3,"$1")),K=$.toLowerCase(),$=K in _||$=="onFocusOut"||$=="onFocusIn"?K.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+z]=j,j?Z?j.u=Z.u:(j.u=w1,_.addEventListener($,z?k1:E1,z)):_.removeEventListener($,z?k1:E1,z);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(G){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function N3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=w1++;else if($.t<j.u)return;return j($0.event?$0.event($):$)}}}function M1(_,$,j,Z,N,z,K,G,q,V){var O,Y,F,w,m,v,f,E,H,I,C,l,s,e,o,K_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(q=!!(32&j.__u),z=[G=$.__e=j.__e]),(O=$0.__b)&&O($);_:if(typeof K_=="function")try{if(E=$.props,H=K_.prototype&&K_.prototype.render,I=(O=K_.contextType)&&Z[O.__c],C=O?I?I.props.value:O.__:Z,j.__c?f=(Y=$.__c=j.__c).__=Y.__E:(H?$.__c=Y=new K_(E,C):($.__c=Y=new p2(E,C),Y.constructor=K_,Y.render=M9),I&&I.sub(Y),Y.state||(Y.state={}),Y.__n=Z,F=Y.__d=!0,Y.__h=[],Y._sb=[]),H&&Y.__s==null&&(Y.__s=Y.state),H&&K_.getDerivedStateFromProps!=null&&(Y.__s==Y.state&&(Y.__s=x$({},Y.__s)),x$(Y.__s,K_.getDerivedStateFromProps(E,Y.__s))),w=Y.props,m=Y.state,Y.__v=$,F)H&&K_.getDerivedStateFromProps==null&&Y.componentWillMount!=null&&Y.componentWillMount(),H&&Y.componentDidMount!=null&&Y.__h.push(Y.componentDidMount);else{if(H&&K_.getDerivedStateFromProps==null&&E!==w&&Y.componentWillReceiveProps!=null&&Y.componentWillReceiveProps(E,C),$.__v==j.__v||!Y.__e&&Y.shouldComponentUpdate!=null&&Y.shouldComponentUpdate(E,Y.__s,C)===!1){$.__v!=j.__v&&(Y.props=E,Y.state=Y.__s,Y.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(c){c&&(c.__=$)}),i2.push.apply(Y.__h,Y._sb),Y._sb=[],Y.__h.length&&K.push(Y);break _}Y.componentWillUpdate!=null&&Y.componentWillUpdate(E,Y.__s,C),H&&Y.componentDidUpdate!=null&&Y.__h.push(function(){Y.componentDidUpdate(w,m,v)})}if(Y.context=C,Y.props=E,Y.__P=_,Y.__e=!1,l=$0.__r,s=0,H)Y.state=Y.__s,Y.__d=!1,l&&l($),O=Y.render(Y.props,Y.state,Y.context),i2.push.apply(Y.__h,Y._sb),Y._sb=[];else do Y.__d=!1,l&&l($),O=Y.render(Y.props,Y.state,Y.context),Y.state=Y.__s;while(Y.__d&&++s<25);Y.state=Y.__s,Y.getChildContext!=null&&(Z=x$(x$({},Z),Y.getChildContext())),H&&!F&&Y.getSnapshotBeforeUpdate!=null&&(v=Y.getSnapshotBeforeUpdate(w,m)),e=O!=null&&O.type===s2&&O.key==null?k3(O.props.children):O,G=J3(_,d2(e)?e:[e],$,j,Z,N,z,K,G,q,V),Y.base=$.__e,$.__u&=-161,Y.__h.length&&K.push(Y),f&&(Y.__E=Y.__=null)}catch(c){if($.__v=null,q||z!=null)if(c.then){for($.__u|=q?160:128;G&&G.nodeType==8&&G.nextSibling;)G=G.nextSibling;z[z.indexOf(G)]=null,$.__e=G}else{for(o=z.length;o--;)P1(z[o]);y1($)}else $.__e=j.__e,$.__k=j.__k,c.then||y1($);$0.__e(c,$,j)}else z==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):G=$.__e=P9(j.__e,$,j,Z,N,z,K,q,V);return(O=$0.diffed)&&O($),128&$.__u?void 0:G}function y1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(y1))}function E3(_,$,j){for(var Z=0;Z<j.length;Z++)b1(j[Z],j[++Z],j[++Z]);$0.__c&&$0.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(z){z.call(N)})}catch(z){$0.__e(z,N.__v)}})}function k3(_){return typeof _!="object"||_==null||_.__b>0?_:d2(_)?_.map(k3):x$({},_)}function P9(_,$,j,Z,N,z,K,G,q){var V,O,Y,F,w,m,v,f=j.props||h2,E=$.props,H=$.type;if(H=="svg"?N="http://www.w3.org/2000/svg":H=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),z!=null){for(V=0;V<z.length;V++)if((w=z[V])&&"setAttribute"in w==!!H&&(H?w.localName==H:w.nodeType==3)){_=w,z[V]=null;break}}if(_==null){if(H==null)return document.createTextNode(E);_=document.createElementNS(N,H,E.is&&E),G&&($0.__m&&$0.__m($,z),G=!1),z=null}if(H==null)f===E||G&&_.data==E||(_.data=E);else{if(z=z&&n2.call(_.childNodes),!G&&z!=null)for(f={},V=0;V<_.attributes.length;V++)f[(w=_.attributes[V]).name]=w.value;for(V in f)w=f[V],V=="dangerouslySetInnerHTML"?Y=w:V=="children"||(V in E)||V=="value"&&("defaultValue"in E)||V=="checked"&&("defaultChecked"in E)||m2(_,V,null,w,N);for(V in E)w=E[V],V=="children"?F=w:V=="dangerouslySetInnerHTML"?O=w:V=="value"?m=w:V=="checked"?v=w:G&&typeof w!="function"||f[V]===w||m2(_,V,w,f[V],N);if(O)G||Y&&(O.__html==Y.__html||O.__html==_.innerHTML)||(_.innerHTML=O.__html),$.__k=[];else if(Y&&(_.innerHTML=""),J3($.type=="template"?_.content:_,d2(F)?F:[F],$,j,Z,H=="foreignObject"?"http://www.w3.org/1999/xhtml":N,z,K,z?z[0]:j.__k&&W2(j,0),G,q),z!=null)for(V=z.length;V--;)P1(z[V]);G||(V="value",H=="progress"&&m==null?_.removeAttribute("value"):m!=null&&(m!==_[V]||H=="progress"&&!m||H=="option"&&m!=f[V])&&m2(_,V,m,f[V],N),V="checked",v!=null&&v!=_[V]&&m2(_,V,v,f[V],N))}return _}function b1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){$0.__e(N,j)}}function y3(_,$,j){var Z,N;if($0.unmount&&$0.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||b1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(z){$0.__e(z,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&y3(Z[N],$,j||typeof _.type!="function");j||P1(_.__e),_.__c=_.__=_.__e=void 0}function M9(_,$,j){return this.constructor(_,j)}function A3(_,$,j){var Z,N,z,K;$==document&&($=document.documentElement),$0.__&&$0.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,z=[],K=[],M1($,_=(!Z&&j||$).__k=F3(s2,null,[_]),N||h2,h2,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?n2.call($.childNodes):null,z,!Z&&j?j:N?N.__e:$.firstChild,Z,K),E3(z,_,K)}n2=i2.slice,$0={__e:function(_,$,j,Z){for(var N,z,K;$=$.__;)if((N=$.__c)&&!N.__)try{if((z=N.constructor)&&z.getDerivedStateFromError!=null&&(N.setState(z.getDerivedStateFromError(_)),K=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),K=N.__d),K)return N.__E=N}catch(G){_=G}throw _}},O3=0,D9=function(_){return _!=null&&_.constructor===void 0},p2.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=x$({},this.state),typeof _=="function"&&(_=_(x$({},j),this.props)),_&&x$(j,_),_!=null&&this.__v&&($&&this._sb.push($),j3(this))},p2.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),j3(this))},p2.prototype.render=s2,g$=[],B3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Q3=function(_,$){return _.__v.__b-$.__v.__b},l2.__r=0,U3=/(PointerCapture)$|Capture$/i,w1=0,E1=N3(!1),k1=N3(!0),E9=0;var D2,B0,D1,z3,E2=0,w3=[],O0=$0,K3=O0.__b,Y3=O0.__r,W3=O0.diffed,G3=O0.__c,V3=O0.unmount,X3=O0.__;function C1(_,$){O0.__h&&O0.__h(B0,_,E2||$),E2=0;var j=B0.__H||(B0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function T(_){return E2=1,b9(M3,_)}function b9(_,$,j){var Z=C1(D2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):M3(void 0,$),function(G){var q=Z.__N?Z.__N[0]:Z.__[0],V=Z.t(q,G);q!==V&&(Z.__N=[V,Z.__[1]],Z.__c.setState({}))}],Z.__c=B0,!B0.__f)){var N=function(G,q,V){if(!Z.__c.__H)return!0;var O=Z.__c.__H.__.filter(function(F){return F.__c});if(O.every(function(F){return!F.__N}))return!z||z.call(this,G,q,V);var Y=Z.__c.props!==G;return O.some(function(F){if(F.__N){var w=F.__[0];F.__=F.__N,F.__N=void 0,w!==F.__[0]&&(Y=!0)}}),z&&z.call(this,G,q,V)||Y};B0.__f=!0;var{shouldComponentUpdate:z,componentWillUpdate:K}=B0;B0.componentWillUpdate=function(G,q,V){if(this.__e){var O=z;z=void 0,N(G,q,V),z=O}K&&K.call(this,G,q,V)},B0.shouldComponentUpdate=N}return Z.__N||Z.__}function R(_,$){var j=C1(D2++,3);!O0.__s&&P3(j.__H,$)&&(j.__=_,j.u=$,B0.__H.__h.push(j))}function D(_){return E2=5,a_(function(){return{current:_}},[])}function a_(_,$){var j=C1(D2++,7);return P3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function A(_,$){return E2=8,a_(function(){return _},$)}function C9(){for(var _;_=w3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(c2),$.__h.some(A1),$.__h=[]}catch(j){$.__h=[],O0.__e(j,_.__v)}}}O0.__b=function(_){B0=null,K3&&K3(_)},O0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),X3&&X3(_,$)},O0.__r=function(_){Y3&&Y3(_),D2=0;var $=(B0=_.__c).__H;$&&(D1===B0?($.__h=[],B0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(c2),$.__h.some(A1),$.__h=[],D2=0)),D1=B0},O0.diffed=function(_){W3&&W3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(w3.push($)!==1&&z3===O0.requestAnimationFrame||((z3=O0.requestAnimationFrame)||I9)(C9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),D1=B0=null},O0.__c=function(_,$){$.some(function(j){try{j.__h.some(c2),j.__h=j.__h.filter(function(Z){return!Z.__||A1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],O0.__e(Z,j.__v)}}),G3&&G3(_,$)},O0.unmount=function(_){V3&&V3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{c2(Z)}catch(N){$=N}}),j.__H=void 0,$&&O0.__e($,j.__v))};var q3=typeof requestAnimationFrame=="function";function I9(_){var $,j=function(){clearTimeout(Z),q3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);q3&&($=requestAnimationFrame(j))}function c2(_){var $=B0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),B0=$}function A1(_){var $=B0;_.__c=_.__(),B0=$}function P3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function M3(_,$){return typeof $=="function"?$(_):$}var b3=function(_,$,j,Z){var N;$[0]=0;for(var z=1;z<$.length;z++){var K=$[z++],G=$[z]?($[0]|=K?1:2,j[$[z++]]):$[++z];K===3?Z[0]=G:K===4?Z[1]=Object.assign(Z[1]||{},G):K===5?(Z[1]=Z[1]||{})[$[++z]]=G:K===6?Z[1][$[++z]]+=G+"":K?(N=_.apply(G,b3(_,G,j,["",null])),Z.push(N),G[0]?$[0]|=2:($[z-2]=0,$[z]=N)):Z.push(G)}return Z},L3=new Map;function x9(_){var $=L3.get(this);return $||($=new Map,L3.set(this,$)),($=b3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,z=1,K="",G="",q=[0],V=function(F){z===1&&(F||(K=K.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?q.push(0,F,K):z===3&&(F||K)?(q.push(3,F,K),z=2):z===2&&K==="..."&&F?q.push(4,F,0):z===2&&K&&!F?q.push(5,0,!0,K):z>=5&&((K||!F&&z===5)&&(q.push(z,0,K,N),z=6),F&&(q.push(z,F,0,N),z=6)),K=""},O=0;O<j.length;O++){O&&(z===1&&V(),V(O));for(var Y=0;Y<j[O].length;Y++)Z=j[O][Y],z===1?Z==="<"?(V(),q=[q],z=3):K+=Z:z===4?K==="--"&&Z===">"?(z=1,K=""):K=Z+K[0]:G?Z===G?G="":K+=Z:Z==='"'||Z==="'"?G=Z:Z===">"?(V(),z=1):z&&(Z==="="?(z=5,N=K,K=""):Z==="/"&&(z<5||j[O][Y+1]===">")?(V(),z===3&&(q=q[0]),z=q,(q=q[0]).push(2,0,z),z=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(V(),z=2):K+=Z),z===3&&K==="!--"&&(z=4,q=q[0])}return V(),q}(_)),$),arguments,[])).length>1?$:$[0]}var B=x9.bind(F3);var Z$={};H9(Z$,{uploadWorkspaceFile:()=>a2,uploadMedia:()=>u1,updateWorkspaceFile:()=>d9,submitAdaptiveCardAction:()=>m1,streamSidePrompt:()=>i9,steerAgentQueueItem:()=>h9,setWorkspaceVisibility:()=>w2,setAgentThoughtVisibility:()=>c1,sendPeerAgentMessage:()=>m9,sendAgentMessage:()=>G2,searchPosts:()=>x1,respondToAgentRequest:()=>r2,renameWorkspaceFile:()=>s1,renameChatBranch:()=>v9,removeAgentQueueItem:()=>c9,pruneChatBranch:()=>u9,moveWorkspaceEntry:()=>o1,getWorkspaceTree:()=>A2,getWorkspaceRawUrl:()=>t2,getWorkspaceFile:()=>l1,getWorkspaceDownloadUrl:()=>e2,getWorkspaceBranch:()=>n9,getTimeline:()=>k2,getThumbnailUrl:()=>h1,getThread:()=>S1,getPostsByHashtag:()=>I1,getMediaUrl:()=>j$,getMediaText:()=>i1,getMediaInfo:()=>V2,getMediaBlob:()=>l9,getChatBranches:()=>R9,getAgents:()=>R1,getAgentThought:()=>p1,getAgentStatus:()=>v1,getAgentQueueState:()=>p9,getAgentModels:()=>y2,getAgentContext:()=>g9,getActiveChatAgents:()=>f1,forkChatBranch:()=>o2,deleteWorkspaceFile:()=>r1,deletePost:()=>T1,createWorkspaceFile:()=>d1,createReply:()=>f9,createPost:()=>T9,attachWorkspaceFile:()=>n1,addToWhitelist:()=>g1,SSEClient:()=>_1});async function i_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function C3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let z of $)if(z.startsWith("event:"))j=z.slice(6).trim()||"message";else if(z.startsWith("data:"))Z.push(z.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function S9(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:K,done:G}=await j.read();if(G)break;N+=Z.decode(K,{stream:!0});let q=N.split(`

`);N=q.pop()||"";for(let V of q){let O=C3(V);if(O)$(O.event,O.data)}}N+=Z.decode();let z=C3(N);if(z)$(z.event,z.data)}async function k2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return i_(Z)}async function I1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return i_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function x1(_,$=50,j=0,Z=null,N="current",z=null){let K=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",G=N?`&scope=${encodeURIComponent(N)}`:"",q=z?`&root_chat_jid=${encodeURIComponent(z)}`:"";return i_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${K}${G}${q}`)}async function S1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return i_(`/thread/${_}${j}`)}async function T9(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return i_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function f9(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return i_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function T1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return i_(N,{method:"DELETE"})}async function G2(_,$,j=null,Z=[],N=null,z=null){let K=z?`?chat_jid=${encodeURIComponent(z)}`:"";return i_(`/agent/${_}/message${K}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function f1(){return i_("/agent/active-chats")}async function R9(_=null){let $=_?`?root_chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/branches${$}`)}async function o2(_,$={}){return i_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function v9(_,$={}){return i_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function u9(_){return i_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function m9(_,$,j,Z="auto",N={}){let z={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return i_("/agent/peer-message",{method:"POST",body:JSON.stringify(z)})}async function R1(){return i_("/agent/roster")}async function v1(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/status${$}`)}async function g9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/context${$}`)}async function p9(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/queue-state${$}`)}async function c9(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function h9(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function y2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i_(`/agent/models${$}`)}async function u1(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function r2(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function m1(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function i9(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let z=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(z.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await S9(j,(z,K)=>{if($.onEvent?.(z,K),z==="side_prompt_thinking_delta")$.onThinkingDelta?.(K?.delta||"");else if(z==="side_prompt_text_delta")$.onTextDelta?.(K?.delta||"");else if(z==="side_prompt_done")Z=K;else if(z==="side_prompt_error")N=K}),N){let z=Error(N?.error||"Side prompt failed");throw z.payload=N,z}return Z}async function g1(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function p1(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i_(j)}async function c1(_,$,j){return i_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function j$(_){return`/media/${_}`}function h1(_){return`/media/${_}/thumbnail`}async function V2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function i1(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function l9(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function A2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return i_(Z)}async function n9(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i_($)}async function l1(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return i_(N)}async function d9(_,$){return i_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function n1(_){return i_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function a2(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let z=N.toString(),K=z?`/workspace/upload?${z}`:"/workspace/upload",G=await fetch(""+K,{method:"POST",body:Z});if(!G.ok){let q=await G.json().catch(()=>({error:"Upload failed"})),V=Error(q.error||`HTTP ${G.status}`);throw V.status=G.status,V.code=q.code,V}return G.json()}async function d1(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),z=Error(N.error||`HTTP ${Z.status}`);throw z.status=Z.status,z.code=N.code,z}return Z.json()}async function s1(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function o1(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function r1(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i_($,{method:"DELETE"})}async function w2(_,$=!1){return i_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function t2(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function e2(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class _1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_),this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("new_post",($)=>{this.onEvent("new_post",JSON.parse($.data))}),this.eventSource.addEventListener("new_reply",($)=>{this.onEvent("new_reply",JSON.parse($.data))}),this.eventSource.addEventListener("agent_response",($)=>{this.onEvent("agent_response",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_updated",($)=>{this.onEvent("interaction_updated",JSON.parse($.data))}),this.eventSource.addEventListener("interaction_deleted",($)=>{this.onEvent("interaction_deleted",JSON.parse($.data))}),this.eventSource.addEventListener("agent_status",($)=>{this.onEvent("agent_status",JSON.parse($.data))}),this.eventSource.addEventListener("agent_steer_queued",($)=>{this.onEvent("agent_steer_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_queued",($)=>{this.onEvent("agent_followup_queued",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_consumed",($)=>{this.onEvent("agent_followup_consumed",JSON.parse($.data))}),this.eventSource.addEventListener("agent_followup_removed",($)=>{this.onEvent("agent_followup_removed",JSON.parse($.data))}),this.eventSource.addEventListener("workspace_update",($)=>{this.onEvent("workspace_update",JSON.parse($.data))}),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach(($)=>{this.eventSource.addEventListener($,(j)=>{this.onEvent($,JSON.parse(j.data))})}),this.eventSource.addEventListener("agent_draft",($)=>{this.onEvent("agent_draft",JSON.parse($.data))}),this.eventSource.addEventListener("agent_draft_delta",($)=>{this.onEvent("agent_draft_delta",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought",($)=>{this.onEvent("agent_thought",JSON.parse($.data))}),this.eventSource.addEventListener("agent_thought_delta",($)=>{this.onEvent("agent_thought_delta",JSON.parse($.data))}),this.eventSource.addEventListener("model_changed",($)=>{this.onEvent("model_changed",JSON.parse($.data))}),this.eventSource.addEventListener("ui_theme",($)=>{this.onEvent("ui_theme",JSON.parse($.data))})}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){if(this.status==="connected")return;let _=Date.now();if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function N$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Y0(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function X2(_,$=!1){let j=N$(_);if(j===null)return $;return j==="true"}function q2(_,$=null){let j=N$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function $1(_){return String(_||"").trim().toLowerCase()}function a1(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return $1($[1]||"")}function I3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=$1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function x3(_,$,j={}){let Z=a1($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return I3(_).filter((z)=>{if(N&&z?.chat_jid===N)return!1;return $1(z?.agent_name).startsWith(Z)})}function t1(_){let $=$1(_);return $?`@${$} `:""}function S3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return I3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function T3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let z=460+N*68+(j?40:0);return Z>=z}function L$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:z="Remove",icon:K="file"}){let G=`${_}-file-pill`,q=`${_}-file-name`,V=`${_}-file-remove`,O=K==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${G} title=${j||$} onClick=${N}>
      ${O}
      <span class=${q}>${$}</span>
      ${Z&&B`
        <button
          class=${V}
          onClick=${(Y)=>{Y.preventDefault(),Y.stopPropagation(),Z()}}
          title=${z}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var s9=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (use /theme list for options)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function o9({usage:_}){let $=Math.min(100,Math.max(0,_.percent||0)),j=_.tokens,Z=_.contextWindow,N=j!=null?`Context: ${f3(j)} / ${f3(Z)} tokens (${$.toFixed(0)}%)`:`Context: ${$.toFixed(0)}%`,z=7,K=2*Math.PI*7,G=$/100*K,q=$>90?"var(--context-red, #ef4444)":$>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <span class="compose-context-pie icon-btn" title=${N}>
            <svg width="16" height="16" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="10" cy="10" r=${7}
                    fill="none"
                    stroke=${q}
                    stroke-width="2.5"
                    stroke-dasharray=${`${G} ${K}`}
                    stroke-linecap="round"
                    transform="rotate(-90 10 10)" />
            </svg>
        </span>
    `}function f3(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function R3({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:z,onEnterSearch:K,onExitSearch:G,fileRefs:q=[],onRemoveFileRef:V,onClearFileRefs:O,messageRefs:Y=[],onRemoveMessageRef:F,onClearMessageRefs:w,activeModel:m=null,modelUsage:v=null,thinkingLevel:f=null,supportsThinking:E=!1,contextUsage:H=null,notificationsEnabled:I=!1,notificationPermission:C="default",onToggleNotifications:l,onModelChange:s,onModelStateChange:e,activeEditorPath:o=null,onAttachEditorFile:K_,onOpenFilePill:c,followupQueueItems:X_=[],onInjectQueuedFollowup:o_,onRemoveQueuedFollowup:__,onSubmitIntercept:t,onMessageResponse:N_,onPopOutChat:$_,isAgentActive:O_=!1,activeChatAgents:g_=[],currentChatJid:L_="web:default",connectionStatus:b_="connected",onSetFileRefs:B_,onSetMessageRefs:Q_,onSubmitError:p_,onSwitchChat:w_,onRenameSession:T_}){let[P_,V0]=T(""),[Y_,Z_]=T(""),[H_,W_]=T([]),[f_,l_]=T(!1),[R_,E_]=T([]),[t_,c_]=T(0),[r_,y_]=T(!1),[n_,k_]=T([]),[M0,T0]=T(0),[g0,X0]=T(!1),[Z0,v_]=T(!1),[N0,u_]=T(!1),[e_,z0]=T(!1),[d_,J0]=T([]),[f0,J_]=T(!1),[D0,n0]=T(0),[p0,x]=T(null),n=D(null),G_=D(null),M_=D(null),x_=D(null),S_=D(null),R0=D(null),k$=D(null),a0=D(null),K$=D(0),v0=200,y$=(Q)=>{let b=new Set,S=[];for(let i of Q||[]){if(typeof i!=="string")continue;let z_=i.trim();if(!z_||b.has(z_))continue;b.add(z_),S.push(z_)}return S},Q0=()=>{let Q=N$("piclaw_compose_history");if(!Q)return[];try{let b=JSON.parse(Q);if(!Array.isArray(b))return[];return y$(b)}catch{return[]}},A0=(Q)=>{Y0("piclaw_compose_history",JSON.stringify(Q))},Y$=D(Q0()),b0=D(-1),E0=D(""),B2=P_.trim()||H_.length>0||q.length>0||Y.length>0,c0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),$2=typeof window<"u"&&typeof Notification<"u",W0=typeof window<"u"?Boolean(window.isSecureContext):!1,Q$=$2&&W0&&C!=="denied",k0=C==="granted"&&I,C0=k0?"Disable notifications":"Enable notifications",d0=H_.length>0||q.length>0||Y.length>0,U$=b_==="disconnected"?"Reconnecting":String(b_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Q)=>Q.toUpperCase()),A$=b_==="disconnected"?"Reconnecting":`Connection: ${U$}`,w$=S3(g_,{currentChatJid:L_,limit:4}),c$=!j&&T3({footerWidth:D0,visibleAgentCount:w$.length,hasContextIndicator:Boolean(H&&H.percent!=null)}),U0=(()=>{let Q=new Set,b=[];for(let S of Array.isArray(g_)?g_:[]){let i=typeof S?.chat_jid==="string"?S.chat_jid.trim():"";if(!i||i===L_||Q.has(i))continue;if(!(typeof S?.agent_name==="string"?S.agent_name.trim():""))continue;Q.add(i),b.push(S)}return b})(),s0=U0.length>0&&typeof w_==="function",y0=!j&&typeof T_==="function",I0=!j&&(s0||y0),P$=m||"",w0=E&&f?` (${f})`:"",j2=w0.trim()?`${f}`:"",F$=typeof v?.hint_short==="string"?v.hint_short.trim():"",f$=[j2||null,F$||null].filter(Boolean).join(" • "),Z2=[P$?`Current model: ${P$}${w0}`:null,v?.plan?`Plan: ${v.plan}`:null,F$||null,v?.primary?.reset_description||null,v?.secondary?.reset_description||null].filter(Boolean),N2=Z0?"Switching model…":Z2.join(" • ")||`Current model: ${P$}${w0} (tap to open model picker)`,C_=(Q)=>{if(!Q||typeof Q!=="object")return;let b=Q.model??Q.current;if(typeof e==="function")e({model:b??null,thinking_level:Q.thinking_level??null,supports_thinking:Q.supports_thinking,provider_usage:Q.provider_usage??null});if(b&&typeof s==="function")s(b)},F0=(Q)=>{let b=Q||n.current;if(!b)return;b.style.height="auto",b.style.height=`${b.scrollHeight}px`,b.style.overflowY="hidden"},h0=(Q)=>{if(!Q)return{content:Q,fileRefs:[]};let S=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),i=-1;for(let m_=0;m_<S.length;m_+=1)if(S[m_].trim()==="Files:"&&S[m_+1]&&/^\s*-\s+/.test(S[m_+1])){i=m_;break}if(i===-1)return{content:Q,fileRefs:[]};let z_=[],D_=i+1;for(;D_<S.length;D_+=1){let m_=S[D_];if(/^\s*-\s+/.test(m_))z_.push(m_.replace(/^\s*-\s+/,"").trim());else if(!m_.trim())break;else break}if(z_.length===0)return{content:Q,fileRefs:[]};let I_=S.slice(0,i),K0=S.slice(D_);return{content:[...I_,...K0].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:z_}},i$=(Q)=>{if(!Q)return{content:Q,messageRefs:[]};let S=Q.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),i=-1;for(let m_=0;m_<S.length;m_+=1)if(S[m_].trim()==="Referenced messages:"&&S[m_+1]&&/^\s*-\s+/.test(S[m_+1])){i=m_;break}if(i===-1)return{content:Q,messageRefs:[]};let z_=[],D_=i+1;for(;D_<S.length;D_+=1){let m_=S[D_];if(/^\s*-\s+/.test(m_)){let i0=m_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(i0)z_.push(i0[1])}else if(!m_.trim())break;else break}if(z_.length===0)return{content:Q,messageRefs:[]};let I_=S.slice(0,i),K0=S.slice(D_);return{content:[...I_,...K0].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:z_}},l$=(Q)=>{let b=h0(Q||""),S=i$(b.content||"");return{text:S.content||"",fileRefs:b.fileRefs,messageRefs:S.messageRefs}},n$=(Q)=>{if(!Q.startsWith("/")||Q.includes(`
`)){y_(!1),E_([]);return}let b=Q.toLowerCase().split(" ")[0];if(b.length<1){y_(!1),E_([]);return}let S=s9.filter((i)=>i.name.startsWith(b)||i.name.replace(/-/g,"").startsWith(b.replace(/-/g,"")));if(S.length>0&&!(S.length===1&&S[0].name===b))X0(!1),k_([]),E_(S),c_(0),y_(!0);else y_(!1),E_([])},W$=(Q)=>{let b=P_,S=b.indexOf(" "),i=S>=0?b.slice(S):"",z_=Q.name+i;V0(z_),y_(!1),E_([]),requestAnimationFrame(()=>{let D_=n.current;if(!D_)return;let I_=z_.length;D_.selectionStart=I_,D_.selectionEnd=I_,D_.focus()})},u0=(Q)=>{if(a1(Q)==null){X0(!1),k_([]);return}let b=x3(g_,Q,{currentChatJid:L_});if(b.length>0&&!(b.length===1&&t1(b[0].agent_name).trim().toLowerCase()===String(Q||"").trim().toLowerCase()))y_(!1),E_([]),k_(b),T0(0),X0(!0);else X0(!1),k_([])},G0=(Q)=>{let b=t1(Q?.agent_name);if(!b)return;V0(b),X0(!1),k_([]),requestAnimationFrame(()=>{let S=n.current;if(!S)return;let i=b.length;S.selectionStart=i,S.selectionEnd=i,S.focus()})},H0=(Q)=>{if(Q?.preventDefault?.(),Q?.stopPropagation?.(),j||!s0&&!y0)return;u_(!1),y_(!1),E_([]),X0(!1),k_([]),z0((b)=>!b)},G$=(Q)=>{let b=typeof Q==="string"?Q.trim():"";if(z0(!1),!b||b===L_){requestAnimationFrame(()=>n.current?.focus());return}w_?.(b)},M$=async()=>{if(typeof T_!=="function")return;z0(!1);try{await T_()}catch(Q){console.warn("Failed to rename session:",Q)}requestAnimationFrame(()=>n.current?.focus())},V$=(Q)=>{if(j)Z_(Q);else V0(Q),n$(Q),u0(Q);requestAnimationFrame(()=>F0())},H$=(Q)=>{let b=j?Y_:P_,S=b&&!b.endsWith(`
`)?`
`:"",i=`${b}${S}${Q}`.trimStart();V$(i)},t0=(Q)=>{let b=Q?.command?.model_label;if(b)return b;let S=Q?.command?.message;if(typeof S==="string"){let i=S.match(/•\s+([^\n]+?)\s+\(current\)/);if(i?.[1])return i[1].trim()}return null},b$=async(Q)=>{if(j||Z0)return;v_(!0);try{let b=await G2("default",Q,null,[],null,L_),S=t0(b);C_({model:S??m??null,thinking_level:b?.command?.thinking_level,supports_thinking:b?.command?.supports_thinking});try{let i=await y2(L_);if(i)C_(i)}catch{}return _?.(),!0}catch(b){return console.error("Failed to switch model:",b),alert("Failed to switch model: "+b.message),!1}finally{v_(!1)}},e0=async()=>{await b$("/cycle-model")},P0=async(Q)=>{if(!Q||Z0)return;if(await b$(`/model ${Q}`))u_(!1)},J$=(Q)=>{Q.preventDefault(),Q.stopPropagation(),z0(!1),u_((b)=>!b)},d$=(Q)=>{if(Q==="queue"||Q==="steer"||Q==="auto")return Q;return O_?"queue":null},X$=async(Q,b,S={})=>{let{includeMedia:i=!0,includeFileRefs:z_=!0,includeMessageRefs:D_=!0,clearAfterSubmit:I_=!0,recordHistory:K0=!0}=S||{},x0=typeof Q==="string"?Q:Q&&typeof Q?.target?.value==="string"?Q.target.value:P_,m_=typeof x0==="string"?x0:"";if(!m_.trim()&&(i?H_.length===0:!0)&&(z_?q.length===0:!0)&&(D_?Y.length===0:!0))return;y_(!1),E_([]),X0(!1),k_([]),z0(!1),x(null);let i0=i?[...H_]:[],I$=z_?[...q]:[],S0=D_?[...Y]:[],q$=m_.trim();if(K0&&q$){let L=Y$.current,U=y$(L.filter((k)=>k!==q$));if(U.push(q$),U.length>200)U.splice(0,U.length-200);Y$.current=U,A0(U),b0.current=-1,E0.current=""}let F2=()=>{if(i)W_([...i0]);if(z_)B_?.(I$);if(D_)Q_?.(S0);V0(q$),requestAnimationFrame(()=>F0())};if(I_)V0(""),W_([]),O?.(),w?.();(async()=>{try{if(await t?.({content:q$,submitMode:b,fileRefs:I$,messageRefs:S0,mediaFiles:i0})){_?.();return}let U=[];for(let d of i0){let u=await u1(d);U.push(u.id)}let k=I$.length?`Files:
${I$.map((d)=>`- ${d}`).join(`
`)}`:"",y=S0.length?`Referenced messages:
${S0.map((d)=>`- message:${d}`).join(`
`)}`:"",g=U.length?`Images:
${U.map((d,u)=>{let q0=i0[u]?.name||`attachment-${u+1}`;return`- attachment:${d} (${q0})`}).join(`
`)}`:"",a=[q$,k,y,g].filter(Boolean).join(`

`),r=await G2("default",a,null,U,d$(b),L_);if(N_?.(r),r?.command){C_({model:r.command.model_label??m??null,thinking_level:r.command.thinking_level,supports_thinking:r.command.supports_thinking});try{let d=await y2(L_);if(d)C_(d)}catch{}}_?.()}catch(L){if(I_)F2();let U=L?.message||"Failed to send message.";x(U),p_?.(U),console.error("Failed to post:",L)}})()},C$=(Q)=>{o_?.(Q)},R$=(Q)=>{if(Q.isComposing)return;if(j&&Q.key==="Escape"){Q.preventDefault(),Z_(""),G?.();return}if(!j&&e_&&Q.key==="Escape"){Q.preventDefault(),z0(!1);return}if(g0&&n_.length>0){let b=n.current?.value??(j?Y_:P_);if(!String(b||"").match(/^@([a-zA-Z0-9_-]*)$/))X0(!1),k_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),T0((S)=>(S+1)%n_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),T0((S)=>(S-1+n_.length)%n_.length);return}if(Q.key==="Tab"||Q.key==="Enter"){Q.preventDefault(),G0(n_[M0]);return}if(Q.key==="Escape"){Q.preventDefault(),X0(!1),k_([]);return}}}if(r_&&R_.length>0){let b=n.current?.value??(j?Y_:P_);if(!String(b||"").startsWith("/"))y_(!1),E_([]);else{if(Q.key==="ArrowDown"){Q.preventDefault(),c_((S)=>(S+1)%R_.length);return}if(Q.key==="ArrowUp"){Q.preventDefault(),c_((S)=>(S-1+R_.length)%R_.length);return}if(Q.key==="Tab"){Q.preventDefault(),W$(R_[t_]);return}if(Q.key==="Enter"&&!Q.shiftKey){if(!(n.current?.value??(j?Y_:P_)).includes(" ")){Q.preventDefault();let z_=R_[t_];y_(!1),E_([]),X$(z_.name);return}}if(Q.key==="Escape"){Q.preventDefault(),y_(!1),E_([]);return}}}if(!j&&(Q.key==="ArrowUp"||Q.key==="ArrowDown")&&!Q.metaKey&&!Q.ctrlKey&&!Q.altKey&&!Q.shiftKey){let b=n.current;if(!b)return;let S=b.value||"",i=b.selectionStart===0&&b.selectionEnd===0,z_=b.selectionStart===S.length&&b.selectionEnd===S.length;if(Q.key==="ArrowUp"&&i||Q.key==="ArrowDown"&&z_){let D_=Y$.current;if(!D_.length)return;Q.preventDefault();let I_=b0.current;if(Q.key==="ArrowUp"){if(I_===-1)E0.current=S,I_=D_.length-1;else if(I_>0)I_-=1;b0.current=I_,V$(D_[I_]||"")}else{if(I_===-1)return;if(I_<D_.length-1)I_+=1,b0.current=I_,V$(D_[I_]||"");else b0.current=-1,V$(E0.current||""),E0.current=""}requestAnimationFrame(()=>{let K0=n.current;if(!K0)return;let x0=K0.value.length;K0.selectionStart=x0,K0.selectionEnd=x0});return}}if(Q.key==="Enter"&&!Q.shiftKey&&(Q.ctrlKey||Q.metaKey)){Q.preventDefault();let b=n.current?.value??(j?Y_:P_);if(j){if(b.trim())N?.(b.trim(),Z)}else X$(b,"steer");return}if(Q.key==="Enter"&&!Q.shiftKey){Q.preventDefault();let b=n.current?.value??(j?Y_:P_);if(j){if(b.trim())N?.(b.trim(),Z)}else X$(b)}},D$=(Q)=>{let b=Array.from(Q||[]).filter((S)=>S&&S.type&&S.type.startsWith("image/"));if(!b.length)return;W_((S)=>[...S,...b]),x(null)},s$=(Q)=>{D$(Q.target.files),Q.target.value=""},v$=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),K$.current+=1,l_(!0)},o$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),K$.current=Math.max(0,K$.current-1),K$.current===0)l_(!1)},u$=(Q)=>{if(j)return;if(Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";l_(!0)},A_=(Q)=>{if(j)return;Q.preventDefault(),Q.stopPropagation(),K$.current=0,l_(!1),D$(Q.dataTransfer?.files||[])},z2=(Q)=>{if(j)return;let b=Q.clipboardData?.items;if(!b||!b.length)return;let S=[];for(let i of b){if(i.kind!=="file")continue;let z_=i.getAsFile?.();if(z_)S.push(z_)}if(S.length>0)Q.preventDefault(),D$(S)},Q2=(Q)=>{W_((b)=>b.filter((S,i)=>i!==Q))},m$=()=>{x(null),W_([]),O?.(),w?.()},r$=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Q)=>{let{latitude:b,longitude:S,accuracy:i}=Q.coords,z_=`${b.toFixed(5)}, ${S.toFixed(5)}`,D_=Number.isFinite(i)?` ±${Math.round(i)}m`:"",I_=`https://maps.google.com/?q=${b},${S}`,K0=`Location: ${z_}${D_} ${I_}`;H$(K0)},(Q)=>{let b=Q?.message||"Unable to retrieve location.";alert(`Location error: ${b}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};R(()=>{if(!N0)return;J_(!0),y2(L_).then((Q)=>{let b=Array.isArray(Q?.models)?Q.models.filter((S)=>typeof S==="string"&&S.trim().length>0):[];b.sort((S,i)=>S.localeCompare(i,void 0,{sensitivity:"base"})),J0(b),C_(Q)}).catch((Q)=>{console.warn("Failed to load model list:",Q),J0([])}).finally(()=>{J_(!1)})},[N0,m]),R(()=>{if(j)u_(!1),z0(!1),y_(!1),E_([]),X0(!1),k_([])},[j]),R(()=>{if(e_&&!I0)z0(!1)},[e_,I0]),R(()=>{if(!N0)return;let Q=(b)=>{let S=x_.current,i=S_.current,z_=b.target;if(S&&S.contains(z_))return;if(i&&i.contains(z_))return;u_(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[N0]),R(()=>{if(!e_)return;let Q=(b)=>{let S=R0.current,i=k$.current,z_=b.target;if(S&&S.contains(z_))return;if(i&&i.contains(z_))return;z0(!1)};return document.addEventListener("pointerdown",Q),()=>document.removeEventListener("pointerdown",Q)},[e_]),R(()=>{let Q=()=>{let D_=a0.current?.clientWidth||0;n0((I_)=>I_===D_?I_:D_)};Q();let b=a0.current,S=0,i=()=>{if(S)cancelAnimationFrame(S);S=requestAnimationFrame(()=>{S=0,Q()})},z_=null;if(b&&typeof ResizeObserver<"u")z_=new ResizeObserver(()=>i()),z_.observe(b);if(typeof window<"u")window.addEventListener("resize",i);return()=>{if(S)cancelAnimationFrame(S);if(z_?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",i)}},[j,m,w$.length,H?.percent]);let U2=(Q)=>{let b=Q.target.value;if(x(null),e_)z0(!1);F0(Q.target),V$(b)};return R(()=>{requestAnimationFrame(()=>F0())},[P_,Y_,j]),R(()=>{if(j)return;u0(P_)},[g_,L_,P_,j]),B`
        <div class="compose-box">
            ${!j&&X_.length>0&&B`
                <div class="compose-queue-stack">
                    ${X_.map((Q)=>{let b=typeof Q?.content==="string"?Q.content:"",S=l$(b);if(!S.text.trim()&&S.fileRefs.length===0&&S.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${b}>
                                    ${S.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${S.text}</div>
                                    `}
                                    ${(S.messageRefs.length>0||S.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${S.messageRefs.map((i)=>B`
                                                <${L$}
                                                    key=${"queue-msg-"+i}
                                                    prefix="compose"
                                                    label=${"msg:"+i}
                                                    title=${"Message reference: "+i}
                                                    icon="message"
                                                />
                                            `)}
                                            ${S.fileRefs.map((i)=>{let z_=i.split("/").pop()||i;return B`
                                                    <${L$}
                                                        key=${"queue-file-"+i}
                                                        prefix="compose"
                                                        label=${z_}
                                                        title=${i}
                                                        onClick=${()=>c?.(i)}
                                                    />
                                                `})}
                                        </div>
                                    `}
                                </div>
                                <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                                    <button
                                        class="compose-queue-stack-steer-btn"
                                        type="button"
                                        title="Inject queued follow-up as steer"
                                        aria-label="Inject queued follow-up as steer"
                                        onClick=${()=>C$(Q)}
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
                                        aria-label="Cancel queued message"
                                        onClick=${()=>__?.(Q)}
                                    >
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        `})}
                </div>
            `}
            <div
                class=${`compose-input-wrapper${f_?" drag-active":""}`}
                onDragEnter=${v$}
                onDragOver=${u$}
                onDragLeave=${o$}
                onDrop=${A_}
            >
                <div class="compose-input-main">
                    ${p0&&!d0&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${p0}</div>
                    `}
                    ${d0&&B`
                        <div class="compose-file-refs">
                            ${p0&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${p0}</div>
                            `}
                            ${Y.map((Q)=>{return B`
                                    <${L$}
                                        key=${"msg-"+Q}
                                        prefix="compose"
                                        label=${"msg:"+Q}
                                        title=${"Message reference: "+Q}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>F?.(Q)}
                                    />
                                `})}
                            ${q.map((Q)=>{let b=Q.split("/").pop()||Q;return B`
                                    <${L$}
                                        prefix="compose"
                                        label=${b}
                                        title=${Q}
                                        onClick=${()=>c?.(Q)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>V?.(Q)}
                                    />
                                `})}
                            ${H_.map((Q,b)=>{let S=Q?.name||`attachment-${b+1}`;return B`
                                    <${L$}
                                        key=${S+b}
                                        prefix="compose"
                                        label=${S}
                                        title=${S}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>Q2(b)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${m$}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof $_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>$_?.()}
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
                        ref=${n}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?Y_:P_}
                        onInput=${U2}
                        onKeyDown=${R$}
                        onPaste=${z2}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${g0&&n_.length>0&&B`
                        <div class="slash-autocomplete" ref=${M_}>
                            ${n_.map((Q,b)=>B`
                                <div
                                    key=${Q.chat_jid||Q.agent_name}
                                    class=${`slash-item${b===M0?" active":""}`}
                                    onMouseDown=${(S)=>{S.preventDefault(),G0(Q)}}
                                    onMouseEnter=${()=>T0(b)}
                                >
                                    <span class="slash-name">@${Q.agent_name}</span>
                                    <span class="slash-desc">${Q.display_name||Q.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${r_&&R_.length>0&&B`
                        <div class="slash-autocomplete" ref=${G_}>
                            ${R_.map((Q,b)=>B`
                                <div
                                    key=${Q.name}
                                    class=${`slash-item${b===t_?" active":""}`}
                                    onMouseDown=${(S)=>{S.preventDefault(),W$(Q)}}
                                    onMouseEnter=${()=>c_(b)}
                                >
                                    <span class="slash-name">${Q.name}</span>
                                    <span class="slash-desc">${Q.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${N0&&!j&&B`
                        <div class="compose-model-popup" ref=${x_}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${f0&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!f0&&d_.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!f0&&d_.map((Q)=>B`
                                    <button
                                        key=${Q}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${m===Q?" active":""}`}
                                        onClick=${()=>{P0(Q)}}
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
                                    onClick=${()=>{e0()}}
                                    disabled=${Z0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${e_&&!j&&B`
                        <div class="compose-model-popup" ref=${R0}>
                            <div class="compose-model-popup-title">Switch active session</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Active sessions">
                                ${!s0&&B`
                                    <div class="compose-model-popup-empty">No other active sessions.</div>
                                `}
                                ${s0&&U0.map((Q)=>B`
                                    <button
                                        key=${Q.chat_jid}
                                        type="button"
                                        role="menuitem"
                                        class="compose-model-popup-item"
                                        onClick=${()=>G$(Q.chat_jid)}
                                    >
                                        ${`@${Q.agent_name}${Q.display_name?` — ${Q.display_name}`:""}${Q.is_active?" • active":""}`}
                                    </button>
                                `)}
                            </div>
                            ${y0&&B`
                                <div class="compose-model-popup-actions">
                                    <button
                                        type="button"
                                        class="compose-model-popup-btn primary"
                                        onClick=${()=>{M$()}}
                                        title="Rename current branch name and agent handle"
                                    >
                                        Rename current…
                                    </button>
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${a0}>
                    ${!j&&m&&B`
                    <div class="compose-meta-row">
                        ${!j&&m&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${S_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${N2}
                                    aria-label="Open model picker"
                                    onClick=${J$}
                                    disabled=${Z0}
                                >
                                    ${Z0?"Switching…":P$}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!Z0&&f$&&B`
                                        <span class="compose-model-usage-hint" title=${N2}>
                                            ${f$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${I0&&B`
                        <button
                            ref=${k$}
                            type="button"
                            class=${`icon-btn compose-mention-btn${e_?" active":""}`}
                            onClick=${H0}
                            title=${e_?"Hide active sessions":"Switch active session/agent"}
                            aria-label="Switch active session/agent"
                            aria-expanded=${e_?"true":"false"}
                        >
                            <span>@</span>
                        </button>
                    `}
                    ${c$&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            <span class="compose-agent-hints-label">Agents</span>
                            ${w$.map((Q)=>B`
                                <button
                                    key=${Q.chat_jid||Q.agent_name}
                                    type="button"
                                    class=${`compose-agent-chip${Q.is_active?" active":""}`}
                                    onClick=${()=>G0(Q)}
                                    title=${`${Q.display_name||Q.chat_jid||"Active agent"} — insert @${Q.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Q.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${!j&&H&&H.percent!=null&&B`
                        <${o9} usage=${H} />
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Q)=>z?.(Q.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?G:K}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:B`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${c0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${r$}
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
                    ${Q$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${k0?" active":""}`}
                            onClick=${l}
                            title=${C0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${o&&K_&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${K_}
                                title=${`Attach open file: ${o}`}
                                type="button"
                                disabled=${q.includes(o)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach image">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" accept="image/*" multiple hidden onChange=${s$} />
                        </label>
                    `}
                    ${(b_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${b_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${b_}" title=${A$}>
                                    ${U$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{X$()}}
                                    disabled=${!B2}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}var m3="piclaw_theme",$4="piclaw_tint",M2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},g3={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},v3={default:{label:"Default",mode:"auto",light:M2,dark:g3},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},r9=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],a$={theme:"default",tint:null},p3="light",e1=!1;function j4(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function O2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((z)=>z+z).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function a9(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let z=parseInt(N[1],10),K=parseInt(N[2],10),G=parseInt(N[3],10);if(![z,K,G].every((V)=>Number.isFinite(V)))return null;let q=`#${[z,K,G].map((V)=>V.toString(16).padStart(2,"0")).join("")}`;return{r:z,g:K,b:G,hex:q}}function c3(_){return O2(_)||a9(_)}function P2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),z=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${z})`}function _4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function t9(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),z=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),K=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*z+0.0722*K}function e9(_){return t9(_)>0.4?"#000000":"#ffffff"}function h3(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function Z4(_){return v3[_]||v3.default}function _7(_){return _.mode==="auto"?h3():_.mode}function i3(_,$){let j=Z4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||M2}function l3(_,$,j){let Z=c3($);if(!Z)return _;let N=O2(_.bgPrimary),z=O2(_.bgSecondary),K=O2(_.bgHover),G=O2(_.borderColor);if(!N||!z||!K||!G)return _;let V=O2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:P2(N,Z,0.08),bgSecondary:P2(z,Z,0.12),bgHover:P2(K,Z,0.16),borderColor:P2(G,Z,0.08),accent:Z.hex,accentHover:V?P2(Z,V,0.18):Z.hex}}function $7(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=c3(Z),z=N?_4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,K=N?_4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",G=N?_4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",q=N?e9(N):$==="dark"?"#000000":"#ffffff",V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":K,"--accent-soft-strong":G,"--accent-contrast-text":q,"--danger-color":_.danger||M2.danger,"--success-color":_.success||M2.success,"--search-highlight-color":z||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([O,Y])=>{if(Y)j.style.setProperty(O,Y)})}function j7(){if(typeof document>"u")return;let _=document.documentElement;r9.forEach(($)=>_.style.removeProperty($))}function L2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function u3(_){let $=j4(a$?.theme||"default"),j=a$?.tint?String(a$.tint).trim():null,Z=i3($,_);if($==="default"&&j)Z=l3(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?g3.bgPrimary:M2.bgPrimary}function Z7(_,$){if(typeof document>"u")return;let j=L2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=L2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",u3("light"));let N=L2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",u3("dark"));let z=L2("msapplication-TileColor");if(z&&_)z.setAttribute("content",_);let K=L2("msapplication-navbutton-color");if(K&&_)K.setAttribute("content",_);let G=L2("apple-mobile-web-app-status-bar-style");if(G)G.setAttribute("content",$==="dark"?"black-translucent":"default")}function N7(){if(typeof window>"u")return;let _={...a$,mode:p3};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function N4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=j4(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=Z4(j),z=_7(N),K=i3(j,z);a$={theme:j,tint:Z},p3=z;let G=document.documentElement;G.dataset.theme=z,G.dataset.colorTheme=j,G.dataset.tint=Z?String(Z):"",G.style.colorScheme=z;let q=K;if(j==="default"&&Z)q=l3(K,Z,z);if(j==="default"&&!Z)j7();else $7(q,z);if(Z7(q.bgPrimary,z),N7(),$.persist!==!1)if(Y0(m3,j),Z)Y0($4,Z);else Y0($4,"")}function j1(){if(Z4(a$.theme).mode!=="auto")return;N4(a$,{persist:!1})}function n3(){if(typeof window>"u")return()=>{};let _=j4(N$(m3)||"default"),$=N$($4),j=$?$.trim():null;if(N4({theme:_,tint:j},{persist:!1}),window.matchMedia&&!e1){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",j1);else if(Z.addListener)Z.addListener(j1);return e1=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",j1);else if(Z.removeListener)Z.removeListener(j1);e1=!1}}return()=>{}}function d3(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid;if($&&$!=="web:default")return;let j=_.theme??_.name??_.colorTheme,Z=_.tint??null;N4({theme:j||"default",tint:Z},{persist:!0})}function s3(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return h3()}var Z1=/#(\w+)/g,z7=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),K7=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),Y7=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),W7={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},G7=new Set(["http:","https:","mailto:",""]);function z4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function t$(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!G7.has(Z.protocol))return null;return Z.href}catch{return null}}function o3(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),z;while(z=N.nextNode())Z.push(z);for(let K of Z){let G=K.tagName.toLowerCase();if(!K7.has(G)){let V=K.parentNode;if(!V)continue;while(K.firstChild)V.insertBefore(K.firstChild,K);V.removeChild(K);continue}let q=W7[G]||new Set;for(let V of Array.from(K.attributes)){let O=V.name.toLowerCase(),Y=V.value;if(O.startsWith("on")){K.removeAttribute(V.name);continue}if(O.startsWith("data-")||O.startsWith("aria-"))continue;if(q.has(O)||Y7.has(O)){if(O==="href"){let F=t$(Y);if(!F)K.removeAttribute(V.name);else if(K.setAttribute(V.name,F),G==="a"&&!K.getAttribute("rel"))K.setAttribute("rel","noopener noreferrer")}else if(O==="src"){let F=G==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(Y):Y,w=t$(F,{allowDataImage:G==="img"});if(!w)K.removeAttribute(V.name);else K.setAttribute(V.name,w)}continue}K.removeAttribute(V.name)}}return j.body.innerHTML}function r3(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function N1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=r3(j);if(N===j)break;j=N}return j}function V7(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],z=!1,K=[];for(let G of j){if(!z&&G.trim().match(/^```mermaid\s*$/i)){z=!0,K=[];continue}if(z&&G.trim().match(/^```\s*$/)){let q=Z.length;Z.push(K.join(`
`)),N.push(`@@MERMAID_BLOCK_${q}@@`),z=!1,K=[];continue}if(z)K.push(G);else N.push(G)}if(z)N.push("```mermaid"),N.push(...K);return{text:N.join(`
`),blocks:Z}}function X7(_){if(!_)return _;return N1(_,5)}function q7(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function L7(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function O7(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),z=$[N]??"",K=X7(z);return`<div class="mermaid-container" data-mermaid="${q7(K)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function a3(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var B7={span:new Set(["title","class","lang","dir"])};function Q7(_,$){let j=B7[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,z;while(z=N.exec($)){let K=(z[1]||"").toLowerCase();if(!K||K.startsWith("on")||!j.has(K))continue;let G=z[2]??z[3]??z[4]??"";Z.push(` ${K}="${z4(G)}"`)}return Z.join("")}function t3(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),z=N?Z.slice(1).trim():Z,G=z.endsWith("/")?z.slice(0,-1).trim():z,[q=""]=G.split(/\s+/,1),V=q.toLowerCase();if(!V||!z7.has(V))return $;if(V==="br")return N?"":"<br>";if(N)return`</${V}>`;let O=G.slice(q.length).trim(),Y=Q7(V,O);return`<${V}${Y}>`})}function e3(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function _6(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(z)=>z.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let z=Z(N.nodeValue);if(z!==N.nodeValue)N.nodeValue=z}return $.body.innerHTML}function U7(_){if(!window.katex)return _;let $=(K)=>r3(K).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(K)=>{let G=[],q=K.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(V)=>{let O=G.length;return G.push(V),`@@CODE_BLOCK_${O}@@`});return q=q.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(V)=>{let O=G.length;return G.push(V),`@@CODE_INLINE_${O}@@`}),{html:q,blocks:G}},Z=(K,G)=>{if(!G.length)return K;return K.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(q,V)=>{let O=Number(V);return G[O]??""})},N=j(_),z=N.html;return z=z.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(K,G,q)=>{try{let V=katex.renderToString($(q.trim()),{displayMode:!0,throwOnError:!1});return`${G}${V}`}catch(V){return`<span class="math-error" title="${z4(V.message)}">${K}</span>`}}),z=z.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(K,G,q)=>{if(/\s$/.test(q))return K;try{let V=katex.renderToString($(q),{displayMode:!1,throwOnError:!1});return`${G}${V}`}catch(V){return`${G}<span class="math-error" title="${z4(V.message)}">$${q}$</span>`}}),Z(z,N.blocks)}function F7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let z of Z){let K=z.nodeValue;if(!K)continue;if(Z1.lastIndex=0,!Z1.test(K))continue;Z1.lastIndex=0;let G=z.parentElement;if(G&&(G.closest("a")||G.closest("code")||G.closest("pre")))continue;let q=K.split(Z1);if(q.length<=1)continue;let V=$.createDocumentFragment();q.forEach((O,Y)=>{if(Y%2===1){let F=$.createElement("a");F.setAttribute("href","#"),F.className="hashtag",F.setAttribute("data-hashtag",O),F.textContent=`#${O}`,V.appendChild(F)}else V.appendChild($.createTextNode(O))}),z.parentNode?.replaceChild(V,z)}return $.body.innerHTML}function H7(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let z of j){if(!N&&z.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&z.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(z)}return Z.join(`
`)}function r0(_,$,j={}){if(!_)return"";let Z=H7(_),{text:N,blocks:z}=V7(Z),K=N1(N,2),q=a3(K).replace(/</g,"&lt;").replace(/>/g,"&gt;"),V=t3(q),O=window.marked?marked.parse(V,{headerIds:!1,mangle:!1}):V.replace(/\n/g,"<br>");return O=e3(O),O=_6(O),O=U7(O),O=F7(O),O=O7(O,z),O=o3(O,j),O}function z1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=N1($,2),N=a3(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),z=t3(N),K=window.marked?marked.parse(z):z.replace(/\n/g,"<br>");return K=e3(K),K=_6(K),K=o3(K),K}function J7(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,z)=>{let K=N.trim().split(/\s+/).map((q)=>{let[V,O]=q.split(",").map(Number);return{x:V,y:O}});if(K.length<3)return`<polyline${Z}points="${N}"${z}/>`;let G=[`M ${K[0].x},${K[0].y}`];for(let q=1;q<K.length-1;q++){let V=K[q-1],O=K[q],Y=K[q+1],F=O.x-V.x,w=O.y-V.y,m=Y.x-O.x,v=Y.y-O.y,f=Math.sqrt(F*F+w*w),E=Math.sqrt(m*m+v*v),H=Math.min($,f/2,E/2);if(H<0.5){G.push(`L ${O.x},${O.y}`);continue}let I=O.x-F/f*H,C=O.y-w/f*H,l=O.x+m/E*H,s=O.y+v/E*H,o=F*v-w*m>0?1:0;G.push(`L ${I},${C}`),G.push(`A ${H},${H} 0 0 ${o} ${l},${s}`)}return G.push(`L ${K[K.length-1].x},${K[K.length-1].y}`),`<path${Z}d="${G.join(" ")}"${z}/>`})}async function S$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=s3()==="dark"?j["tokyo-night"]:j["github-light"],z=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let K of z)try{let G=K.dataset.mermaid,q=L7(G||""),V=N1(q,2),O=await $(V,{...N,transparent:!0});O=J7(O),K.innerHTML=O,K.removeAttribute("data-mermaid")}catch(G){console.error("Mermaid render error:",G);let q=document.createElement("pre");q.className="mermaid-error",q.textContent=`Diagram error: ${G.message}`,K.innerHTML="",K.appendChild(q),K.removeAttribute("data-mermaid")}}function $6(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function j6(_){return String(_||"").trim()||"web:default"}function Z6(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function N6(_){if(!_)return!1;return _.status!=="running"}function z6(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function K6({session:_,onClose:$,onInject:j,onRetry:Z}){let N=D(null),z=D(null),K=_?.thinking?z1(_.thinking):"",G=_?.answer?r0(_.answer,null,{sanitize:!1}):"";if(R(()=>{if(N.current&&K)S$(N.current).catch(()=>{})},[K]),R(()=>{if(z.current&&G)S$(z.current).catch(()=>{})},[G]),!_)return null;let q=_.status==="running",V=Boolean(String(_.answer||"").trim()),O=Boolean(String(_.thinking||"").trim()),Y=Z6(_),F=N6(_),w=!q&&V,m=q?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${m}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&B`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&B`<div class="btw-block btw-error">${_.error}</div>`}
            ${O&&B`
                <details class="btw-block btw-thinking" open=${q?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </details>
            `}
            ${Y&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${z}
                        dangerouslySetInnerHTML=${{__html:G}}
                    ></div>
                </div>
            `}

            ${F&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
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
    `}var Y6="PiClaw";function K4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),z=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],K=N.charCodeAt(0)%z.length,G=z[K],q=Z.trim().toLowerCase(),V=typeof $==="string"?$.trim():"",O=V?V:null,Y=j||q==="PiClaw".toLowerCase()||q==="pi";return{letter:N,color:G,image:O||(Y?"/static/icon-192.png":null)}}function W6(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function G6(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function V6(_){if(!_)return null;if(typeof document<"u"){let z=document.documentElement,K=z?.dataset?.colorTheme||"",G=z?.dataset?.tint||"",q=getComputedStyle(z).getPropertyValue("--accent-color")?.trim();if(q&&(G||K&&K!=="default"))return q}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let z=0;z<j.length;z+=1)Z=(Z*31+j.charCodeAt(z))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function D7(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function b2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function X6(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return b2(_)?"Compacting context":"Working..."}function E7(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function q6(_,$=Date.now()){let j=D7(_);if(j===null)return null;return E7(Math.max(0,$-j))}function L6({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:z,turnId:K,steerQueued:G,onPanelToggle:q}){let Y=(Z_)=>{if(!Z_)return{text:"",totalLines:0,fullText:""};if(typeof Z_==="string"){let l_=Z_,R_=l_?l_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:l_,totalLines:R_,fullText:l_}}let H_=Z_.text||"",W_=Z_.fullText||Z_.full_text||H_,f_=Number.isFinite(Z_.totalLines)?Z_.totalLines:W_?W_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:H_,totalLines:f_,fullText:W_}},F=160,w=(Z_)=>String(Z_||"").replace(/<\/?internal>/gi,""),m=(Z_)=>{if(!Z_)return 1;return Math.max(1,Math.ceil(Z_.length/160))},v=(Z_,H_,W_)=>{let f_=(Z_||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!f_)return{text:"",omitted:0,totalLines:Number.isFinite(W_)?W_:0,visibleLines:0};let l_=f_.split(`
`),R_=l_.length>H_?l_.slice(0,H_).join(`
`):f_,E_=Number.isFinite(W_)?W_:l_.reduce((r_,y_)=>r_+m(y_),0),t_=R_?R_.split(`
`).reduce((r_,y_)=>r_+m(y_),0):0,c_=Math.max(E_-t_,0);return{text:R_,omitted:c_,totalLines:E_,visibleLines:t_}},f=Y(j),E=Y(Z),H=Y($),I=Boolean(f.text)||f.totalLines>0,C=Boolean(E.text)||E.totalLines>0,l=Boolean(H.fullText?.trim()||H.text?.trim());if(!_&&!l&&!I&&!C&&!N&&!z)return null;let[s,e]=T(new Set),[o,K_]=T(()=>Date.now()),c=(Z_)=>e((H_)=>{let W_=new Set(H_),f_=!W_.has(Z_);if(f_)W_.add(Z_);else W_.delete(Z_);if(typeof q==="function")q(Z_,f_);return W_});R(()=>{e(new Set)},[K]);let X_=b2(_);R(()=>{if(!X_)return;K_(Date.now());let Z_=setInterval(()=>K_(Date.now()),1000);return()=>clearInterval(Z_)},[X_,_?.started_at,_?.startedAt]);let o_=_?.turn_id||K,__=V6(o_),t=G?"turn-dot turn-dot-queued":"turn-dot",N_=(Z_)=>Z_,$_=Boolean(_?.last_activity||_?.lastActivity),O_=(Z_)=>Z_==="warning"?"#f59e0b":Z_==="error"?"var(--danger-color)":Z_==="success"?"var(--success-color)":__,g_=z?.kind||"info",L_=O_(g_),b_=O_(_?.kind||(X_?"warning":"info")),B_="",Q_=_?.title,p_=_?.status;if(_?.type==="plan")B_=Q_?`Planning: ${Q_}`:"Planning...";else if(_?.type==="tool_call")B_=Q_?`Running: ${Q_}`:"Running tool...";else if(_?.type==="tool_status")B_=Q_?`${Q_}: ${p_||"Working..."}`:p_||"Working...";else if(_?.type==="error")B_=Q_||"Agent error";else B_=Q_||p_||"Working...";if($_)B_="Last activity just now";let w_=({panelTitle:Z_,text:H_,fullText:W_,totalLines:f_,maxLines:l_,titleClass:R_,panelKey:E_})=>{let t_=s.has(E_),c_=W_||H_||"",r_=E_==="thought"||E_==="draft"?w(c_):c_,y_=typeof l_==="number",n_=t_&&y_,k_=y_?v(r_,l_,f_):{text:r_||"",omitted:0,totalLines:Number.isFinite(f_)?f_:0};if(!r_&&!(Number.isFinite(k_.totalLines)&&k_.totalLines>0))return null;let M0=`agent-thinking-body${y_?" agent-thinking-body-collapsible":""}`,T0=y_?`--agent-thinking-collapsed-lines: ${l_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${t_?"true":"false"}
                data-collapsible=${y_?"true":"false"}
                style=${__?`--turn-color: ${__};`:""}
            >
                <div class="agent-thinking-title ${R_||""}">
                    ${__&&B`<span class=${t} aria-hidden="true"></span>`}
                    ${Z_}
                    ${n_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${Z_} panel`}
                            onClick=${()=>c(E_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${M0}
                    style=${T0}
                    dangerouslySetInnerHTML=${{__html:z1(r_)}}
                />
                ${!t_&&k_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>c(E_)}>
                        ▸ ${k_.omitted} more lines
                    </button>
                `}
                ${t_&&k_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>c(E_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},T_=N?.tool_call?.title,P_=T_?`Awaiting approval: ${T_}`:"Awaiting approval",V0=X_?q6(_,o):null,Y_=(Z_,H_,W_=null)=>{let f_=X6(Z_);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${H_?`--turn-color: ${H_};`:""}
                title=${Z_?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${H_&&B`<span class=${t} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${f_}</span>
                    ${W_&&B`<span class="agent-status-elapsed">${W_}</span>`}
                </div>
                ${Z_.detail&&B`<div class="agent-thinking-body">${Z_.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${z&&Y_(z,L_)}
            ${_?.type==="intent"&&Y_(_,b_,V0)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    <span class=${t} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${P_}</span>
                </div>
            `}
            ${I&&w_({panelTitle:N_("Planning"),text:f.text,fullText:f.fullText,totalLines:f.totalLines,panelKey:"plan"})}
            ${C&&w_({panelTitle:N_("Thoughts"),text:E.text,fullText:E.fullText,totalLines:E.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${l&&w_({panelTitle:N_("Draft"),text:H.text,fullText:H.fullText,totalLines:H.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${__?`--turn-color: ${__};`:""}>
                    ${__&&B`<span class=${t} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${B_}</span>
                </div>
            `}
        </div>
    `}function O6({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:z}=_,K=Z?.title||"Agent Request",G=Z?.kind||"other",q=Z?.rawInput||{},V=q.command||q.commands&&q.commands[0]||null,O=q.diff||null,Y=q.fileName||q.path||null,F=Z?.description||q.description||q.explanation||null,m=(Array.isArray(Z?.locations)?Z.locations:[]).map((I)=>I?.path).filter((I)=>Boolean(I)),v=Array.from(new Set([Y,...m].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let f=async(I)=>{try{await r2(j,I,z||null),$()}catch(C){console.error("Failed to respond to agent request:",C)}},E=async()=>{try{await g1(K,`Auto-approved: ${K}`),await r2(j,"approved",z||null),$()}catch(I){console.error("Failed to add to whitelist:",I)}},H=N&&N.length>0;return B`
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
                ${(F||V||O||v.length>0)&&B`
                    <div class="agent-request-body">
                        ${F&&B`
                            <div class="agent-request-description">${F}</div>
                        `}
                        ${v.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${v.map((I,C)=>B`<li key=${C}>${I}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${V&&B`
                            <pre class="agent-request-command">${V}</pre>
                        `}
                        ${O&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${O}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${H?N.map((I)=>B`
                            <button 
                                key=${I.optionId||I.id||String(I)}
                                class="agent-request-btn ${I.kind==="allow_once"||I.kind==="allow_always"?"primary":""}"
                                onClick=${()=>f(I.optionId||I.id||I)}
                            >
                                ${I.name||I.label||I.optionId||I.id||String(I)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>f("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>f("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${E}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function B6(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,z=86400000;if(Z<z){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*z){let q=$.toLocaleDateString(void 0,{weekday:"short"}),V=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${V}`}let K=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${G}`}function C2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function z$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function e$(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var k7=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),y7=new Set(["text/markdown"]),A7=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),w7=new Set(["application/vnd.jgraph.mxfile"]);function I2(_){return typeof _==="string"?_.trim().toLowerCase():""}function P7(_){let $=I2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function M7(_){let $=I2(_);return!!$&&$.endsWith(".pdf")}function b7(_){let $=I2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function x2(_,$){let j=I2(_);if(P7($)||w7.has(j))return"drawio";if(M7($)||j==="application/pdf")return"pdf";if(b7($)||A7.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(k7.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function Q6(_){let $=I2(_);return y7.has($)}function U6(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function C7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function I7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),z=Number(j[3]);if(![Z,N,z].every((K)=>Number.isFinite(K)))return null;return{r:Z,g:N,b:z}}function F6(_){return C7(_)||I7(_)}function K1(_){let $=(z)=>{let K=z/255;return K<=0.03928?K/12.92:((K+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function x7(_,$){let j=Math.max(K1(_),K1($)),Z=Math.min(K1(_),K1($));return(j+0.05)/(Z+0.05)}function S7(_,$,j="#ffffff"){let Z=F6(_);if(!Z)return j;let N=j,z=-1;for(let K of $){let G=F6(K);if(!G)continue;let q=x7(Z,G);if(q>z)N=K,z=q}return N}function Y4(){let _=getComputedStyle(document.documentElement),$=(m,v)=>{for(let f of m){let E=_.getPropertyValue(f).trim();if(E)return E}return v},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),z=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),K=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),G=$(["--accent-color","--color-accent"],"#1d9bf0"),q=$(["--success-color","--color-success"],"#00ba7c"),V=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),O=$(["--danger-color","--color-error"],"#f4212e"),Y=$(["--border-color","--color-border"],"#eff3f4"),F=$(["--font-family"],"system-ui, sans-serif"),w=S7(G,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:z,bgEmphasis:K,accent:G,good:q,warning:V,attention:O,border:Y,fontFamily:F,buttonTextColor:w}}function H6(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:z,warning:K,attention:G,border:q,fontFamily:V}=Y4();return{fontFamily:V,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:z,subtle:z},warning:{default:K,subtle:K},attention:{default:G,subtle:G}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:q},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var T7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),J6=!1,Y1=null,D6=!1;function W4(_){_.querySelector(".adaptive-card-notice")?.remove()}function f7(_,$,j="error"){W4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function R7(_,$=(j)=>r0(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function v7(_=($)=>r0($,null)){return($,j)=>{try{let Z=R7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function u7(_){if(D6||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=v7(),D6=!0}async function m7(){if(J6)return;if(Y1)return Y1;return Y1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{J6=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Y1}function g7(){return globalThis.AdaptiveCards}function p7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function c7(_){return T7.has(_)}function V4(_){if(!Array.isArray(_))return[];return _.filter(p7)}function h7(_){let $=typeof _?.toJSON==="function"?_.toJSON():null,j=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||$?.type||"Unknown",Z=(typeof _?.title==="string"?_.title:"")||(typeof $?.title==="string"?$.title:"")||"",N=(typeof _?.url==="string"?_.url:"")||(typeof $?.url==="string"?$.url:"")||void 0,z=_?.data??$?.data;return{type:j,title:Z,data:z,url:N,raw:_}}function G4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>G4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${G4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function i7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return G4($);return typeof $==="string"?$:String($)}function l7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((G)=>Z(G));if(!N||typeof N!=="object")return N;let K={...N};if(typeof K.id==="string"&&K.id in j&&String(K.type||"").startsWith("Input."))K.value=i7(K.type,j[K.id],K);for(let[G,q]of Object.entries(K))if(Array.isArray(q)||q&&typeof q==="object")K[G]=Z(q);return K};return Z(_)}function n7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function d7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function s7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=d7(_.completed_at||j?.submitted_at),z=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:z}}async function E6(_,$,j){if(!c7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await m7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=g7();u7(Z);let N=new Z.AdaptiveCard,z=Y4();N.hostConfig=new Z.HostConfig(H6());let K=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,G=$.state==="active"?$.payload:l7($.payload,K);N.parse(G),N.onExecuteAction=(O)=>{let Y=h7(O);if(j?.onAction)W4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(Y)).catch((F)=>{console.error("[adaptive-card] Action failed:",F);let w=F instanceof Error?F.message:String(F||"Action failed.");f7(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",Y)};let q=N.render();if(!q)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",z.buttonTextColor);let V=s7($);if(V){_.classList.add("adaptive-card-finished");let O=document.createElement("div");O.className=`adaptive-card-status adaptive-card-status-${$.state}`;let Y=document.createElement("span");if(Y.className="adaptive-card-status-label",Y.textContent=V.label,O.appendChild(Y),V.detail){let F=document.createElement("span");F.className="adaptive-card-status-detail",F.textContent=V.detail,O.appendChild(F)}_.appendChild(O)}if(W4(_),_.appendChild(q),V)n7(q);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function S2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>S2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${S2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function k6(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:S2(j)})).filter(($)=>$.value)}function o7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function X4(_){if(!Array.isArray(_))return[];return _.filter(o7)}function y6(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=S2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=k6(j).slice(0,4).map(({key:z,value:K})=>`${z}: ${K}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function A6(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=k6(_.data),Z=j.length>0?j.slice(0,2).map(({key:q,value:V})=>`${q}: ${V}`).join(", "):S2(_.data)||null,N=j.length,z=j.slice(0,4),K=j.slice(4),G=K.length;return{title:$,summary:Z,fields:z,hiddenFields:K,fieldCount:N,hiddenFieldCount:G,submittedAt:_.submitted_at}}function r7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?z$($):null},{label:"Added",value:_?.created_at?e$(_.created_at):null}].filter((Z)=>Z.value)}function a7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let z=j$(_);return`/office-viewer/?url=${encodeURIComponent(z)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function w6({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=a_(()=>x2($?.content_type,Z),[$?.content_type,Z]),z=U6(N),K=a_(()=>Q6($?.content_type),[$?.content_type]),[G,q]=T(N==="text"),[V,O]=T(""),[Y,F]=T(null),w=D(null),m=a_(()=>r7($),[$]),v=a_(()=>a7(_,Z,N),[_,Z,N]),f=a_(()=>{if(!K||!V)return"";return r0(V)},[K,V]);return R(()=>{let E=(H)=>{if(H.key==="Escape")j()};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[j]),R(()=>{if(!w.current||!f)return;S$(w.current);return},[f]),R(()=>{let E=!1;async function H(){if(N!=="text"){q(!1),F(null);return}q(!0),F(null);try{let I=await i1(_);if(!E)O(I)}catch{if(!E)F("Failed to load text preview.")}finally{if(!E)q(!1)}}return H(),()=>{E=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(E)=>{E.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${z}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${v&&B`
                            <a
                                href=${v}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(E)=>E.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${j$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(E)=>E.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${G&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!G&&Y&&B`<div class="attachment-preview-state">${Y}</div>`}
                    ${!G&&!Y&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${j$(_)} alt=${Z} />
                    `}
                    ${!G&&!Y&&(N==="pdf"||N==="office"||N==="drawio")&&v&&B`
                        <iframe class="attachment-preview-frame" src=${v} title=${Z}></iframe>
                    `}
                    ${!G&&!Y&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!G&&!Y&&N==="text"&&K&&B`
                        <div
                            ref=${w}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:f}}
                        />
                    `}
                    ${!G&&!Y&&N==="text"&&!K&&B`
                        <pre class="attachment-preview-text">${V}</pre>
                    `}
                    ${!G&&!Y&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${m.map((E)=>B`
                        <div class="attachment-preview-meta-item" key=${E.label}>
                            <span class="attachment-preview-meta-label">${E.label}</span>
                            <span class="attachment-preview-meta-value">${E.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function P6({src:_,onClose:$}){return R(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function t7({mediaId:_,onPreview:$}){let[j,Z]=T(null);if(R(()=>{V2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",z=j.metadata?.size,K=z?z$(z):"",q=x2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(V)=>V.stopPropagation()}>
            <a href=${j$(_)} download=${N} class="file-attachment-main">
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
                        ${K&&B`<span class="file-size">${K}</span>`}
                        ${j.content_type&&B`<span class="file-size">${j.content_type}</span>`}
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
                onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${q}
            </button>
        </div>
    `}function e7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=T(null);R(()=>{if(!Number.isFinite(j))return;V2(j).then(N).catch(()=>{});return},[j]);let z=Z?.filename||_.label||`attachment-${_.id}`,K=Number.isFinite(j)?j$(j):null,q=x2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${z}>
            ${K?B`
                    <a href=${K} download=${z} class="attachment-pill-main" onClick=${(V)=>V.stopPropagation()}>
                        <${L$}
                            prefix="post"
                            label=${_.label}
                            title=${z}
                        />
                    </a>
                `:B`
                    <${L$}
                        prefix="post"
                        label=${_.label}
                        title=${z}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${q}
                    onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function W1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?e$(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${N&&B`
                <span class="content-annotation">Updated: ${N}</span>
            `}
        </div>
    `}function _5({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?z$(_.size):"",N=_.mime_type||"",z=j5(N),K=t$(_.uri);return B`
        <a
            href=${K||"#"}
            class="resource-link"
            target=${K?"_blank":void 0}
            rel=${K?"noopener noreferrer":void 0}
            onClick=${(G)=>G.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${z}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function $5({block:_}){let[$,j]=T(!1),Z=_.uri||"Embedded resource",N=_.text||"",z=Boolean(_.data),K=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${z&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${K&&B`<span class="resource-embed-blob-meta">${K}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(G)=>{G.preventDefault(),G.stopPropagation();let q=new Blob([Uint8Array.from(atob(_.data),(Y)=>Y.charCodeAt(0))],{type:K||"application/octet-stream"}),V=URL.createObjectURL(q),O=document.createElement("a");O.href=V,O.download=Z.split("/").pop()||"resource",O.click(),URL.revokeObjectURL(V)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function j5(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function Z5({preview:_}){let $=t$(_.url),j=t$(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(z)=>z.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${N||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function N5(_,$){return typeof _==="string"?_:""}var z5=1800,K5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,Y5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,W5=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function G5(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function V5(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((z)=>z.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(z,K)=>{let G=K||"idle";if(z.dataset.copyState=G,G==="success")z.innerHTML=Y5,z.setAttribute("aria-label","Copied"),z.setAttribute("title","Copied"),z.classList.add("is-success"),z.classList.remove("is-error");else if(G==="error")z.innerHTML=W5,z.setAttribute("aria-label","Copy failed"),z.setAttribute("title","Copy failed"),z.classList.add("is-error"),z.classList.remove("is-success");else z.innerHTML=K5,z.setAttribute("aria-label","Copy code"),z.setAttribute("title","Copy code"),z.classList.remove("is-success","is-error")};return $.forEach((z)=>{let K=document.createElement("div");K.className="post-code-block",z.parentNode?.insertBefore(K,z),K.appendChild(z);let G=document.createElement("button");G.type="button",G.className="post-code-copy-btn",N(G,"idle"),K.appendChild(G);let q=async(V)=>{V.preventDefault(),V.stopPropagation();let Y=z.querySelector("code")?.textContent||"",F=await G5(Y);N(G,F?"success":"error");let w=j.get(G);if(w)clearTimeout(w);let m=setTimeout(()=>{N(G,"idle"),j.delete(G)},z5);j.set(G,m)};G.addEventListener("click",q),Z.push(()=>{G.removeEventListener("click",q);let V=j.get(G);if(V)clearTimeout(V);if(K.parentNode)K.parentNode.insertBefore(z,K),K.remove()})}),()=>{Z.forEach((z)=>z())}}function X5(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Files:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V))N.push(V.replace(/^\s*-\s+/,"").trim());else if(!V.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,fileRefs:N}}function q5(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Referenced messages:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let Y=V.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Y)N.push(Y[1])}else if(!V.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,messageRefs:N}}function L5(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let V=0;V<j.length;V+=1)if(j[V].trim()==="Images:"&&j[V+1]&&/^\s*-\s+/.test(j[V+1])){Z=V;break}if(Z===-1)return{content:_,attachments:[]};let N=[],z=Z+1;for(;z<j.length;z+=1){let V=j[z];if(/^\s*-\s+/.test(V)){let O=V.replace(/^\s*-\s+/,"").trim(),Y=O.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||O.match(/^attachment:([^\s]+)\s+(.+)$/i);if(Y){let F=Y[1],w=(Y[2]||"").trim()||F;N.push({id:F,label:w,raw:O})}else N.push({id:null,label:O,raw:O})}else if(!V.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let K=j.slice(0,Z),G=j.slice(z),q=[...K,...G].join(`
`);return q=q.replace(/\n{3,}/g,`

`).trim(),{content:q,attachments:N}}function O5(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function B5(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(O5).sort((O,Y)=>Y.length-O.length),N=new RegExp(`(${Z.join("|")})`,"gi"),z=new RegExp(`^(${Z.join("|")})$`,"i"),K=new DOMParser().parseFromString(_,"text/html"),G=K.createTreeWalker(K.body,NodeFilter.SHOW_TEXT),q=[],V;while(V=G.nextNode())q.push(V);for(let O of q){let Y=O.nodeValue;if(!Y||!N.test(Y)){N.lastIndex=0;continue}N.lastIndex=0;let F=O.parentElement;if(F&&F.closest("code, pre, script, style"))continue;let w=Y.split(N).filter((v)=>v!=="");if(w.length===0)continue;let m=K.createDocumentFragment();for(let v of w)if(z.test(v)){let f=K.createElement("mark");f.className="search-highlight-term",f.textContent=v,m.appendChild(f)}else m.appendChild(K.createTextNode(v));O.parentNode.replaceChild(m,O)}return K.body.innerHTML}function M6({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:z,agentAvatarUrl:K,userName:G,userAvatarUrl:q,userAvatarBackground:V,onDelete:O,isThreadReply:Y,isThreadPrev:F,isThreadNext:w,isRemoving:m,highlightQuery:v,onFileRef:f}){let[E,H]=T(null),[I,C]=T(()=>new Set),l=D(null),s=_.data,e=s.type==="agent_response",o=G||"You",K_=e?z||Y6:o,c=e?K4(z,K,!0):K4(o,q),X_=typeof V==="string"?V.trim().toLowerCase():"",o_=!e&&c.image&&(X_==="clear"||X_==="transparent"),__=e&&Boolean(c.image),t=`background-color: ${o_||__?"transparent":c.color}`,N_=s.content_meta,$_=Boolean(N_?.truncated),O_=Boolean(N_?.preview),g_=$_&&!O_,L_=$_?{originalLength:Number.isFinite(N_?.original_length)?N_.original_length:s.content?s.content.length:0,maxLength:Number.isFinite(N_?.max_length)?N_.max_length:0}:null,b_=s.content_blocks||[],B_=s.media_ids||[],Q_=N5(s.content,s.link_previews),{content:p_,fileRefs:w_}=X5(Q_),{content:T_,messageRefs:P_}=q5(p_),{content:V0,attachments:Y_}=L5(T_);Q_=V0;let Z_=V4(b_),H_=X4(b_),W_=Z_.length===1&&typeof Z_[0]?.fallback_text==="string"?Z_[0].fallback_text.trim():"",f_=H_.length===1?y6(H_[0]).trim():"",l_=Boolean(W_)&&Q_?.trim()===W_||Boolean(f_)&&Q_?.trim()===f_,R_=Boolean(Q_)&&!g_&&!l_,E_=typeof v==="string"?v.trim():"",t_=a_(()=>{if(!Q_||l_)return"";let x=r0(Q_,j);return E_?B5(x,E_):x},[Q_,l_,E_]),c_=(x,n)=>{x.stopPropagation(),H(j$(n))},[r_,y_]=T(null),n_=(x)=>{y_(x)},k_=(x)=>{x.stopPropagation(),O?.(_)},M0=(x)=>{C((n)=>{let G_=new Set(n);if(G_.has(x))G_.delete(x);else G_.add(x);return G_})},T0=(x,n)=>{let G_=new Set;if(!x||n.length===0)return{content:x,usedIds:G_};return{content:x.replace(/attachment:([^\s)"']+)/g,(x_,S_,R0,k$)=>{let a0=S_.replace(/^\/+/,""),v0=n.find((Q0)=>Q0.name&&Q0.name.toLowerCase()===a0.toLowerCase()&&!G_.has(Q0.id))||n.find((Q0)=>!G_.has(Q0.id));if(!v0)return x_;if(G_.add(v0.id),k$.slice(Math.max(0,R0-2),R0)==="](")return`/media/${v0.id}`;return v0.name||"attachment"}),usedIds:G_}},g0=[],X0=[],Z0=[],v_=[],N0=[],u_=[],e_=0;if(b_.length>0)b_.forEach((x)=>{if(x?.type==="text"&&x.annotations)u_.push(x.annotations);if(x?.type==="resource_link")v_.push(x);else if(x?.type==="resource")N0.push(x);else if(x?.type==="file"){let n=B_[e_++];if(n)X0.push(n),Z0.push({id:n,name:x?.name||x?.filename||x?.title})}else if(x?.type==="image"||!x?.type){let n=B_[e_++];if(n){let G_=typeof x?.mime_type==="string"?x.mime_type:void 0;g0.push({id:n,annotations:x?.annotations,mimeType:G_}),Z0.push({id:n,name:x?.name||x?.filename||x?.title})}}});else if(B_.length>0)B_.forEach((x)=>{g0.push({id:x,annotations:null}),Z0.push({id:x,name:null})});if(Y_.length>0)Y_.forEach((x)=>{if(!x?.id)return;let n=Z0.find((G_)=>String(G_.id)===String(x.id));if(n&&!n.name)n.name=x.label});let{content:z0,usedIds:d_}=T0(Q_,Z0);Q_=z0;let J0=g0.filter(({id:x})=>!d_.has(x)),f0=X0.filter((x)=>!d_.has(x)),J_=Y_.length>0?Y_.map((x,n)=>({id:x.id||`attachment-${n+1}`,label:x.label||`attachment-${n+1}`})):Z0.map((x,n)=>({id:x.id,label:x.name||`attachment-${n+1}`})),D0=a_(()=>V4(b_),[b_]),n0=a_(()=>X4(b_),[b_]);R(()=>{if(!l.current)return;return S$(l.current),V5(l.current)},[t_]);let p0=D(null);return R(()=>{if(!p0.current||D0.length===0)return;let x=p0.current;x.innerHTML="";for(let n of D0){let G_=document.createElement("div");x.appendChild(G_),E6(G_,n,{onAction:async(M_)=>{if(M_.type==="Action.OpenUrl"){let x_=t$(M_.url||"");if(!x_)throw Error("Invalid URL");window.open(x_,"_blank","noopener,noreferrer");return}if(M_.type==="Action.Submit"){await m1({post_id:_.id,thread_id:s.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:n.card_id,action:{type:M_.type,title:M_.title||"",data:M_.data}});return}console.warn("[post] unsupported adaptive card action:",M_.type,M_)}}).catch((M_)=>{console.error("[post] adaptive card render error:",M_),G_.textContent=n.fallback_text||"Card failed to render."})}},[D0,s.thread_id,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${e?"agent-post":""} ${Y?"thread-reply":""} ${F?"thread-prev":""} ${w?"thread-next":""} ${m?"removing":""}" onClick=${$}>
            <div class="post-avatar ${e?"agent-avatar":""} ${c.image?"has-image":""}" style=${t}>
                ${c.image?B`<img src=${c.image} alt=${K_} />`:c.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${k_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${K_}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(x)=>{if(x.preventDefault(),x.stopPropagation(),Z)Z(_.id)}}>${B6(_.timestamp)}</a>
                </div>
                ${g_&&L_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${C2(L_.originalLength)} chars
                            ${L_.maxLength?B` • Display limit: ${C2(L_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${O_&&L_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${C2(L_.maxLength)} of ${C2(L_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(w_.length>0||P_.length>0||J_.length>0)&&B`
                    <div class="post-file-refs">
                        ${P_.map((x)=>{let n=(G_)=>{if(G_.preventDefault(),G_.stopPropagation(),N)N(x,_.chat_jid||null);else{let M_=document.getElementById("post-"+x);if(M_)M_.scrollIntoView({behavior:"smooth",block:"center"}),M_.classList.add("post-highlight"),setTimeout(()=>M_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${x}`} class="post-msg-pill-link" onClick=${n}>
                                    <${L$}
                                        prefix="post"
                                        label=${"msg:"+x}
                                        title=${"Message "+x}
                                        icon="message"
                                        onClick=${n}
                                    />
                                </a>
                            `})}
                        ${w_.map((x)=>{let n=x.split("/").pop()||x;return B`
                                <${L$}
                                    prefix="post"
                                    label=${n}
                                    title=${x}
                                    onClick=${()=>f?.(x)}
                                />
                            `})}
                        ${J_.map((x)=>B`
                            <${e7}
                                key=${x.id}
                                attachment=${x}
                                onPreview=${n_}
                            />
                        `)}
                    </div>
                `}
                ${R_&&B`
                    <div 
                        ref=${l}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:t_}}
                        onClick=${(x)=>{if(x.target.classList.contains("hashtag")){x.preventDefault(),x.stopPropagation();let n=x.target.dataset.hashtag;if(n)j?.(n)}else if(x.target.tagName==="IMG")x.preventDefault(),x.stopPropagation(),H(x.target.src)}}
                    />
                `}
                ${D0.length>0&&B`
                    <div ref=${p0} class="post-adaptive-cards" />
                `}
                ${n0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${n0.map((x,n)=>{let G_=A6(x),M_=`${x.card_id}-${n}`,x_=I.has(M_);return B`
                                <div key=${M_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${G_.title}</span>
                                        </div>
                                    </div>
                                    ${G_.summary&&B`
                                        <div class="adaptive-card-submission-summary">${G_.summary}</div>
                                    `}
                                    ${G_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${G_.fields.map((S_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${S_.key}: ${S_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${S_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${S_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    ${G_.hiddenFieldCount>0&&B`
                                        <button
                                            type="button"
                                            class="adaptive-card-submission-toggle"
                                            aria-expanded=${x_?"true":"false"}
                                            onClick=${(S_)=>{S_.preventDefault(),S_.stopPropagation(),M0(M_)}}
                                        >
                                            ${x_?`Hide ${G_.hiddenFieldCount} more`:`Show ${G_.hiddenFieldCount} more`}
                                        </button>
                                    `}
                                    ${x_&&G_.hiddenFields.length>0&&B`
                                        <div class="adaptive-card-submission-fields adaptive-card-submission-fields-extra">
                                            ${G_.hiddenFields.map((S_)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${S_.key}: ${S_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${S_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${S_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${e$(G_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${u_.length>0&&B`
                    ${u_.map((x,n)=>B`
                        <${W1} key=${n} annotations=${x} />
                    `)}
                `}
                ${J0.length>0&&B`
                    <div class="media-preview">
                        ${J0.map(({id:x,mimeType:n})=>{let M_=typeof n==="string"&&n.toLowerCase().startsWith("image/svg")?j$(x):h1(x);return B`
                                <img 
                                    key=${x} 
                                    src=${M_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(x_)=>c_(x_,x)}
                                />
                            `})}
                    </div>
                `}
                ${J0.length>0&&B`
                    ${J0.map(({annotations:x},n)=>B`
                        ${x&&B`<${W1} key=${n} annotations=${x} />`}
                    `)}
                `}
                ${f0.length>0&&B`
                    <div class="file-attachments">
                        ${f0.map((x)=>B`
                            <${t7} key=${x} mediaId=${x} onPreview=${n_} />
                        `)}
                    </div>
                `}
                ${v_.length>0&&B`
                    <div class="resource-links">
                        ${v_.map((x,n)=>B`
                            <div key=${n}>
                                <${_5} block=${x} />
                                <${W1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${N0.length>0&&B`
                    <div class="resource-embeds">
                        ${N0.map((x,n)=>B`
                            <div key=${n}>
                                <${$5} block=${x} />
                                <${W1} annotations=${x.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${s.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${s.link_previews.map((x,n)=>B`
                            <${Z5} key=${n} preview=${x} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${E&&B`<${P6} src=${E} onClose=${()=>H(null)} />`}
        ${r_&&B`
            <${w6}
                mediaId=${r_.mediaId}
                info=${r_.info}
                onClose=${()=>y_(null)}
            />
        `}
    `}function b6({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:z,onScrollToMessage:K,onFileRef:G,emptyMessage:q,timelineRef:V,agents:O,user:Y,onDeletePost:F,reverse:w=!0,removingPostIds:m,searchQuery:v}){let[f,E]=T(!1),H=D(null),I=typeof IntersectionObserver<"u",C=A(async()=>{if(!j||!$||f)return;E(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{E(!1)}},[$,f,j]),l=A((__)=>{let{scrollTop:t,scrollHeight:N_,clientHeight:$_}=__.target,O_=w?N_-$_-t:t,g_=Math.max(300,$_);if(O_<g_)C()},[w,C]);R(()=>{if(!I)return;let __=H.current,t=V?.current;if(!__||!t)return;let N_=300,$_=new IntersectionObserver((O_)=>{for(let g_ of O_){if(!g_.isIntersecting)continue;C()}},{root:t,rootMargin:`${N_}px 0px ${N_}px 0px`,threshold:0});return $_.observe(__),()=>$_.disconnect()},[I,$,j,V,C]);let s=D(C);if(s.current=C,R(()=>{if(I)return;if(!V?.current)return;let{scrollTop:__,scrollHeight:t,clientHeight:N_}=V.current,$_=w?t-N_-__:__,O_=Math.max(300,N_);if($_<O_)s.current?.()},[I,_,$,w,V]),R(()=>{if(!V?.current)return;if(!$||f)return;let{scrollTop:__,scrollHeight:t,clientHeight:N_}=V.current,$_=w?t-N_-__:__,O_=Math.max(300,N_);if(t<=N_+1||$_<O_)s.current?.()},[_,$,f,w,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let e=_.slice().sort((__,t)=>__.id-t.id),o=(__)=>{let t=__?.data?.thread_id;if(t===null||t===void 0||t==="")return null;let N_=Number(t);return Number.isFinite(N_)?N_:null},K_=new Map;for(let __=0;__<e.length;__+=1){let t=e[__],N_=Number(t?.id),$_=o(t);if($_!==null){let O_=K_.get($_)||{anchorIndex:-1,replyIndexes:[]};O_.replyIndexes.push(__),K_.set($_,O_)}else if(Number.isFinite(N_)){let O_=K_.get(N_)||{anchorIndex:-1,replyIndexes:[]};O_.anchorIndex=__,K_.set(N_,O_)}}let c=new Map;for(let[__,t]of K_.entries()){let N_=new Set;if(t.anchorIndex>=0)N_.add(t.anchorIndex);for(let $_ of t.replyIndexes)N_.add($_);c.set(__,Array.from(N_).sort(($_,O_)=>$_-O_))}let X_=e.map((__,t)=>{let N_=o(__);if(N_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=c.get(N_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let O_=$_.indexOf(t);if(O_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:O_>0,hasThreadNext:O_<$_.length-1}}),o_=B`<div class="timeline-sentinel" ref=${H}></div>`;return B`
        <div class="timeline ${w?"reverse":"normal"}" ref=${V} onScroll=${l}>
            <div class="timeline-content">
                ${w?o_:null}
                ${e.map((__,t)=>{let N_=Boolean(__.data?.thread_id&&__.data.thread_id!==__.id),$_=m?.has?.(__.id),O_=X_[t]||{};return B`
                    <${M6}
                        key=${__.id}
                        post=${__}
                        isThreadReply=${N_}
                        isThreadPrev=${O_.hasThreadPrev}
                        isThreadNext=${O_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${v}
                        agentName=${W6(__.data?.agent_id,O||{})}
                        agentAvatarUrl=${G6(__.data?.agent_id,O||{})}
                        userName=${Y?.name||Y?.user_name}
                        userAvatarUrl=${Y?.avatar_url||Y?.avatarUrl||Y?.avatar}
                        userAvatarBackground=${Y?.avatar_background||Y?.avatarBackground}
                        onClick=${()=>Z?.(__)}
                        onHashtagClick=${N}
                        onMessageRef=${z}
                        onScrollToMessage=${K}
                        onFileRef=${G}
                        onDelete=${F}
                    />
                `})}
                ${w?null:o_}
            </div>
        </div>
    `}class C6{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let z=N===!0?0:typeof N==="number"?N:0;if(z>j)j=z,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var j0=new C6;var G1=null,q4=null;function I6(){if(q4)return Promise.resolve(q4);if(!G1)G1=import("/static/dist/editor.bundle.js").then((_)=>{return q4=_,_}).catch((_)=>{throw G1=null,_});return G1}class x6{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await I6();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var L4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new x6(_,$)}};function O4(){I6().catch(()=>{})}var Q4="piclaw://terminal";var Q5={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},U5={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},V1=null,B4=null;function F5(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function H5(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,z)=>{let K=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!F5(K))return $(N,z);if(N instanceof Request)return $(new Request(j,N));return $(j,z)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function J5(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!V1)V1=H5(()=>Promise.resolve($.init?.())).catch((j)=>{throw V1=null,j});return await V1,$}async function D5(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!B4)B4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await B4}async function E5(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function k5(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function y5(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function T$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function A5(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function S6(){let _=y5(),$=_?U5:Q5,j=T$("--bg-primary",_?"#000000":"#ffffff"),Z=T$("--text-primary",_?"#e7e9ea":"#0f1419"),N=T$("--text-secondary",_?"#71767b":"#536471"),z=T$("--accent-color","#1d9bf0"),K=T$("--danger-color",_?"#ff7b72":"#cf222e"),G=T$("--success-color",_?"#7ee787":"#1a7f37"),q=T$("--bg-hover",_?"#1d1f23":"#e8ebed"),V=T$("--border-color",_?"#2f3336":"#eff3f4"),O=T$("--accent-soft-strong",A5(z,_?"47":"33"));return{background:j,foreground:Z,cursor:z,cursorAccent:j,selectionBackground:O,selectionForeground:Z,black:q,red:K,green:G,yellow:$.yellow,blue:z,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:V}}class U4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,z=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(z)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await J5();if(await D5(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:S6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=S6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await E5();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(k5($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var F4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new U4(_,$)}},H4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new U4(_,$)}};function p$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function w5(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,z=Z?.[2]||"",K=Z?.[3]||"",G=String($||"").split("/").slice(0,-1).join("/"),V=N.startsWith("/")?N:`${G?`${G}/`:""}${N}`,O=[];for(let F of V.split("/")){if(!F||F===".")continue;if(F===".."){if(O.length>0)O.pop();continue}O.push(F)}let Y=O.join("/");return`${t2(Y)}${z}${K}`}function T2(_){return _?.preview||null}function P5(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function M5(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function b5(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${p$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${p$(z$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${p$(e$($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${p$(M5($))}</span>`),Z.push(`<span><strong>extension:</strong> ${p$(P5(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${p$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function C5(_){let $=T2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=b5(_,$);if($.kind==="image"){let Z=$.url||($.path?t2($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${p$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=r0($.text||"",null,{rewriteImageSrc:(N)=>w5(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${p$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class J4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=C5(this.context)}getContent(){let _=T2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=T2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var D4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=T2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new J4(_,$)}},E4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return T2(_)||_?.path?1:!1},mount(_,$){return new J4(_,$)}};var I5=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),x5={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},S5={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function f6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function T6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class R6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=f6(j),z=S5[N]||"\uD83D\uDCC4",K=x5[N]||"Office Document",G=document.createElement("div");G.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",G.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${z}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${T6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${T6(K)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(G);let q=G.querySelector("#ov-open-tab");if(q)q.addEventListener("click",()=>{let V=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(V)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class v6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var k4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=f6(_?.path);if(!$||!I5.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new R6(_,$);return new v6(_,$)}};var T5=/\.(csv|tsv)$/i;function u6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${u6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${u6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#csv-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!T5.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new m6(_,$);return new g6(_,$)}};var f5=/\.pdf$/i;function R5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${R5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#pdf-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var A4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!f5.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new p6(_,$);return new c6(_,$)}};var v5=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function w4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class h6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,z=document.createElement("div");z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${w4(N)}" alt="${w4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${w4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(z);let K=z.querySelector("#img-open-tab");if(K)K.addEventListener("click",()=>{let G=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!v5.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new h6(_,$);return new i6(_,$)}};function u5(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function m5(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var M4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function l6(_){let $=String(_||"").trim();return $?$:M4}function g5(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function p5(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function c5(_,$="*"){try{let j=(z)=>{let K=_.parent||_.opener;if(!K)return!1;return K.postMessage(JSON.stringify({event:"workspace-export",...z}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let z=Z.prototype.saveData;Z.prototype.saveData=function(K,G,q,V,O,Y){try{if(K&&q!=null&&j({filename:K,format:G,data:q,mimeType:V,base64Encoded:Boolean(O),defaultMode:Y}))return}catch(F){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",F)}return z.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let z=N.prototype.exportFile;N.prototype.exportFile=function(K,G,q,V,O,Y){try{if(G&&j({filename:G,data:K,mimeType:q,base64Encoded:Boolean(V),mode:O,folderId:Y}))return}catch(F){console.warn("[drawio-pane] export intercept failed, falling back to native export",F)}return z.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function n6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${p5(j)}`}class d6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${m5(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let z=N.querySelector("#drawio-open-tab");if(z)z.addEventListener("click",()=>{let K=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class s6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=g5(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let z=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(c5(this.iframe.contentWindow))return;setTimeout(z,250)};z()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=M4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await n6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await n6(_,"image/png");else this.xmlData=l6(await _.text());else if(_.status===404)this.xmlData=M4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?l6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var b4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!u5(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new d6(_,$);return new s6(_,$)}};class o6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var s_=new o6;var X1="workspaceExplorerScale",h5=["compact","default","comfortable"],i5=new Set(h5),l5={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function r6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return i5.has(j)?j:$}function C4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function n5(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function d5(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function I4(_={}){let $=n5(_),j=_.stored?r6(_.stored,$):$;return d5(j,_)}function a6(_){return l5[r6(_)]}var s5=60000,$8=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function j8(_,$,j,Z=0,N=[]){if(!j&&$8(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let z of _.children)j8(z,$,j,Z+1,N);return N}function t6(_,$,j){if(!_)return"";let Z=[],N=(z)=>{if(!j&&$8(z))return;if(Z.push(z.type==="dir"?`d:${z.path}`:`f:${z.path}`),z.children&&$?.has(z.path))for(let K of z.children)N(K)};return N(_),Z.join("|")}function f4(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((G)=>[G?.path,G])):new Map,z=!j||j.length!==Z.length,K=Z.map((G)=>{let q=f4(N.get(G.path),G);if(q!==N.get(G.path))z=!0;return q});return z?{...$,children:K}:_}function S4(_,$,j){if(!_)return _;if(_.path===$)return f4(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((z)=>{let K=S4(z,$,j);if(K!==z)Z=!0;return K});return Z?{..._,children:N}:_}var Z8=4,x4=14,o5=8,r5=16;function N8(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=N8(Z);return _.__bytes=j,j}function z8(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=Z8)return Z;let N=Array.isArray(_.children)?_.children:[],z=[];for(let G of N){let q=Math.max(0,Number(G?.__bytes??G?.size??0));if(q<=0)continue;if(G.type==="dir")z.push({kind:"dir",node:G,size:q});else z.push({kind:"file",name:G.name,path:G.path,size:q})}z.sort((G,q)=>q.size-G.size);let K=z;if(z.length>x4){let G=z.slice(0,x4-1),q=z.slice(x4-1),V=q.reduce((O,Y)=>O+Y.size,0);G.push({kind:"other",name:`+${q.length} more`,path:`${Z.path}/[other]`,size:V}),K=G}return Z.children=K.map((G)=>{if(G.kind==="dir")return z8(G.node,$+1);return{name:G.name,path:G.path,size:G.size,children:[]}}),Z}function e6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function K8(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),z=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${z}%)`}function q1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function R4(_,$,j,Z,N,z){let K=Math.PI*2-0.0001,G=z-N>K?N+K:z,q=q1(_,$,Z,N),V=q1(_,$,Z,G),O=q1(_,$,j,G),Y=q1(_,$,j,N),F=G-N>Math.PI?1:0;return[`M ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${F} 1 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`L ${O.x.toFixed(3)} ${O.y.toFixed(3)}`,`A ${j} ${j} 0 ${F} 0 ${Y.x.toFixed(3)} ${Y.y.toFixed(3)}`,"Z"].join(" ")}var Y8={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function W8(_,$,j){let Z=[],N=[],z=Math.max(0,Number($)||0),K=(G,q,V,O)=>{let Y=Array.isArray(G?.children)?G.children:[];if(!Y.length)return;let F=Math.max(0,Number(G.size)||0);if(F<=0)return;let w=V-q,m=q;Y.forEach((v,f)=>{let E=Math.max(0,Number(v.size)||0);if(E<=0)return;let H=E/F,I=m,C=f===Y.length-1?V:m+w*H;if(m=C,C-I<0.003)return;let l=Y8[O];if(l){let s=K8(I,O,j);if(Z.push({key:v.path,path:v.path,label:v.name,size:E,color:s,depth:O,startAngle:I,endAngle:C,innerRadius:l[0],outerRadius:l[1],d:R4(120,120,l[0],l[1],I,C)}),O===1)N.push({key:v.path,name:v.name,size:E,pct:z>0?E/z*100:0,color:s})}if(O<Z8)K(v,I,C,O+1)})};return K(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function T4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=T4(Z,$);if(N)return N}return null}function G8(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=Y8[1];if(!N)return{segments:[],legend:[]};let z=-Math.PI/2,K=Math.PI*3/2,G=K8(z,1,Z),V=`${$||"."}/[files]`;return{segments:[{key:V,path:V,label:_,size:j,color:G,depth:1,startAngle:z,endAngle:K,innerRadius:N[0],outerRadius:N[1],d:R4(120,120,N[0],N[1],z,K)}],legend:[{key:V,name:_,size:j,pct:100,color:G}]}}function _8(_,$=!1,j=!1){if(!_)return null;let Z=N8(_),N=z8(_,0),z=N.size||Z,{segments:K,legend:G}=W8(N,z,j);if(!K.length&&z>0){let q=G8("[files]",N.path,z,j);K=q.segments,G=q.legend}return{root:N,totalSize:z,segments:K,legend:G,truncated:$,isDarkTheme:j}}function a5({payload:_}){if(!_)return null;let[$,j]=T(null),[Z,N]=T(_?.root?.path||"."),[z,K]=T(()=>[_?.root?.path||"."]),[G,q]=T(!1);R(()=>{let c=_?.root?.path||".";N(c),K([c]),j(null)},[_?.root?.path,_?.totalSize]),R(()=>{if(!Z)return;q(!0);let c=setTimeout(()=>q(!1),180);return()=>clearTimeout(c)},[Z]);let V=a_(()=>{return T4(_.root,Z)||_.root},[_?.root,Z]),O=V?.size||_.totalSize||0,{segments:Y,legend:F}=a_(()=>{let c=W8(V,O,_.isDarkTheme);if(c.segments.length>0)return c;if(O<=0)return c;let X_=V?.children?.length?"Total":"[files]";return G8(X_,V?.path||_?.root?.path||".",O,_.isDarkTheme)},[V,O,_.isDarkTheme,_?.root?.path]),[w,m]=T(Y),v=D(new Map),f=D(0);R(()=>{let c=v.current,X_=new Map(Y.map((N_)=>[N_.key,N_])),o_=performance.now(),__=220,t=(N_)=>{let $_=Math.min(1,(N_-o_)/220),O_=$_*(2-$_),g_=Y.map((L_)=>{let B_=c.get(L_.key)||{startAngle:L_.startAngle,endAngle:L_.startAngle,innerRadius:L_.innerRadius,outerRadius:L_.innerRadius},Q_=(V0,Y_)=>V0+(Y_-V0)*O_,p_=Q_(B_.startAngle,L_.startAngle),w_=Q_(B_.endAngle,L_.endAngle),T_=Q_(B_.innerRadius,L_.innerRadius),P_=Q_(B_.outerRadius,L_.outerRadius);return{...L_,d:R4(120,120,T_,P_,p_,w_)}});if(m(g_),$_<1)f.current=requestAnimationFrame(t)};if(f.current)cancelAnimationFrame(f.current);return f.current=requestAnimationFrame(t),v.current=X_,()=>{if(f.current)cancelAnimationFrame(f.current)}},[Y]);let E=w.length?w:Y,H=O>0?z$(O):"0 B",I=V?.name||"",l=(I&&I!=="."?I:"Total")||"Total",s=H,e=z.length>1,o=(c)=>{if(!c?.path)return;let X_=T4(_.root,c.path);if(!X_||!Array.isArray(X_.children)||X_.children.length===0)return;K((o_)=>[...o_,X_.path]),N(X_.path),j(null)},K_=()=>{if(!e)return;K((c)=>{let X_=c.slice(0,-1);return N(X_[X_.length-1]||_?.root?.path||"."),X_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${G?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${V?.path||_?.root?.path||"."}`}
                data-segments=${E.length}
                data-base-size=${O}>
                ${E.map((c)=>B`
                    <path
                        key=${c.key}
                        d=${c.d}
                        fill=${c.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===c.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(c)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(c)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>o(c)}
                    >
                        <title>${c.label} — ${z$(c.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${e?" is-drill":""}`}
                    onClick=${K_}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${l}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${s}</text>
                </g>
            </svg>
            ${F.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${F.slice(0,8).map((c)=>B`
                        <div key=${c.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${c.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${c.name}>${c.name}</span>
                            <span class="workspace-folder-starburst-size">${z$(c.size)}</span>
                            <span class="workspace-folder-starburst-pct">${c.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function t5({mediaId:_}){let[$,j]=T(null);if(R(()=>{if(!_)return;V2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?z$($.metadata.size):"";return B`
        <a href=${j$(_)} download=${Z} class="file-attachment"
            onClick=${(z)=>z.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${N&&B`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function V8({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:z,terminalVisible:K=!1}){let[G,q]=T(null),[V,O]=T(new Set(["."])),[Y,F]=T(null),[w,m]=T(null),[v,f]=T(""),[E,H]=T(null),[I,C]=T(null),[l,s]=T(!0),[e,o]=T(!1),[K_,c]=T(null),[X_,o_]=T(()=>X2("workspaceShowHidden",!1)),[__,t]=T(!1),[N_,$_]=T(null),[O_,g_]=T(null),[L_,b_]=T(null),[B_,Q_]=T(!1),[p_,w_]=T(null),[T_,P_]=T(()=>e6()),[V0,Y_]=T(()=>I4({stored:N$(X1),...C4()})),[Z_,H_]=T(!1),W_=D(V),f_=D(""),l_=D(null),R_=D(0),E_=D(new Set),t_=D(null),c_=D(new Map),r_=D(_),y_=D(Z),n_=D(null),k_=D(null),M0=D(null),T0=D(null),g0=D(null),X0=D(null),Z0=D("."),v_=D(null),N0=D({path:null,dragging:!1,startX:0,startY:0}),u_=D({path:null,dragging:!1,startX:0,startY:0}),e_=D({path:null,timer:0}),z0=D(!1),d_=D(0),J0=D(new Map),f0=D(null),J_=D(null),D0=D(null),n0=D(null),p0=D(null),x=D(null),n=D(X_),G_=D($),M_=D(j??$),x_=D(0),S_=D(L_),R0=D(__),k$=D(N_),a0=D(null),K$=D({x:0,y:0}),v0=D(0),y$=D(null),Q0=D(Y),A0=D(w),Y$=D(null),b0=D(null),E0=D(E);r_.current=_,y_.current=Z,R(()=>{W_.current=V},[V]),R(()=>{n.current=X_},[X_]),R(()=>{G_.current=$},[$]),R(()=>{M_.current=j??$},[j,$]),R(()=>{S_.current=L_},[L_]),R(()=>{if(typeof window>"u")return;let L=()=>{Y_(I4({stored:N$(X1),...C4()}))};L();let U=()=>L(),k=()=>L(),y=(u)=>{if(!u||u.key===null||u.key===X1)L()};window.addEventListener("resize",U),window.addEventListener("focus",k),window.addEventListener("storage",y);let g=window.matchMedia?.("(pointer: coarse)"),a=window.matchMedia?.("(hover: none)"),r=(u,V_)=>{if(!u)return;if(u.addEventListener)u.addEventListener("change",V_);else if(u.addListener)u.addListener(V_)},d=(u,V_)=>{if(!u)return;if(u.removeEventListener)u.removeEventListener("change",V_);else if(u.removeListener)u.removeListener(V_)};return r(g,U),r(a,U),()=>{window.removeEventListener("resize",U),window.removeEventListener("focus",k),window.removeEventListener("storage",y),d(g,U),d(a,U)}},[]),R(()=>{let L=(U)=>{let k=U?.detail?.path;if(!k)return;let y=k.split("/"),g=[];for(let a=1;a<y.length;a++)g.push(y.slice(0,a).join("/"));if(g.length)O((a)=>{let r=new Set(a);r.add(".");for(let d of g)r.add(d);return r});F(k),requestAnimationFrame(()=>{let a=document.querySelector(`[data-path="${CSS.escape(k)}"]`);if(a)a.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",L),()=>window.removeEventListener("workspace-reveal-path",L)},[]),R(()=>{R0.current=__},[__]),R(()=>{k$.current=N_},[N_]),R(()=>{Q0.current=Y},[Y]),R(()=>{A0.current=w},[w]),R(()=>{E0.current=E},[E]),R(()=>{if(typeof window>"u"||typeof document>"u")return;let L=()=>P_(e6());L();let U=window.matchMedia?.("(prefers-color-scheme: dark)"),k=()=>L();if(U?.addEventListener)U.addEventListener("change",k);else if(U?.addListener)U.addListener(k);let y=typeof MutationObserver<"u"?new MutationObserver(()=>L()):null;if(y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(U?.removeEventListener)U.removeEventListener("change",k);else if(U?.removeListener)U.removeListener(k);y?.disconnect()}},[]),R(()=>{if(!w)return;let L=g0.current;if(!L)return;let U=requestAnimationFrame(()=>{try{L.focus(),L.select()}catch{}});return()=>cancelAnimationFrame(U)},[w]),R(()=>{if(!Z_)return;let L=(k)=>{let y=k?.target;if(!(y instanceof Element))return;if(p0.current?.contains(y))return;if(x.current?.contains(y))return;H_(!1)},U=(k)=>{if(k?.key==="Escape")H_(!1),x.current?.focus?.()};return document.addEventListener("mousedown",L),document.addEventListener("touchstart",L,{passive:!0}),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("touchstart",L),document.removeEventListener("keydown",U)}},[Z_]);let B2=async(L)=>{o(!0),H(null),C(null);try{let U=await l1(L,20000);H(U)}catch(U){H({error:U.message||"Failed to load preview"})}finally{o(!1)}};n_.current=B2;let c0=async()=>{if(!G_.current)return;try{let L=await A2("",1,n.current),U=t6(L.root,W_.current,n.current);if(U===f_.current){s(!1);return}if(f_.current=U,l_.current=L.root,!R_.current)R_.current=requestAnimationFrame(()=>{R_.current=0,q((k)=>f4(k,l_.current)),s(!1)})}catch(L){c(L.message||"Failed to load workspace"),s(!1)}},$2=async(L)=>{if(!L)return;if(E_.current.has(L))return;E_.current.add(L);try{let U=await A2(L,1,n.current);q((k)=>S4(k,L,U.root))}catch(U){c(U.message||"Failed to load workspace")}finally{E_.current.delete(L)}};k_.current=$2;let W0=A(()=>{let L=Y;if(!L)return".";let U=c_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let k=L.split("/");return k.pop(),k.join("/")||"."},[Y]),B$=A((L)=>{let U=L?.closest?.(".workspace-row");if(!U)return null;let k=U.dataset.path,y=U.dataset.type;if(!k)return null;if(y==="dir")return k;if(k.includes("/")){let g=k.split("/");return g.pop(),g.join("/")||"."}return"."},[]),Q$=A((L)=>{return B$(L?.target||null)},[B$]),k0=A((L)=>{S_.current=L,b_(L)},[]),C0=A(()=>{let L=e_.current;if(L?.timer)clearTimeout(L.timer);e_.current={path:null,timer:0}},[]),d0=A((L)=>{if(!L||L==="."){C0();return}let U=c_.current?.get(L);if(!U||U.type!=="dir"){C0();return}if(W_.current?.has(L)){C0();return}if(e_.current?.path===L)return;C0();let k=setTimeout(()=>{e_.current={path:null,timer:0},k_.current?.(L),O((y)=>{let g=new Set(y);return g.add(L),g})},600);e_.current={path:L,timer:k}},[C0]),U$=A((L,U)=>{if(K$.current={x:L,y:U},v0.current)return;v0.current=requestAnimationFrame(()=>{v0.current=0;let k=a0.current;if(!k)return;let y=K$.current;k.style.transform=`translate(${y.x+12}px, ${y.y+12}px)`})},[]),A$=A((L)=>{if(!L)return;let k=(c_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!k)return;g_({path:L,label:k})},[]),w$=A(()=>{if(g_(null),v0.current)cancelAnimationFrame(v0.current),v0.current=0;if(a0.current)a0.current.style.transform="translate(-9999px, -9999px)"},[]),c$=A((L)=>{if(!L)return".";let U=c_.current?.get(L);if(U&&U.type==="dir")return U.path;if(L==="."||!L.includes("/"))return".";let k=L.split("/");return k.pop(),k.join("/")||"."},[]),U0=A(()=>{m(null),f("")},[]),h$=A((L)=>{if(!L)return;let k=(c_.current?.get(L)?.name||L.split("/").pop()||L).trim();if(!k||L===".")return;m(L),f(k)},[]),s0=A(async()=>{let L=A0.current;if(!L)return;let U=(v||"").trim();if(!U){U0();return}let k=c_.current?.get(L),y=(k?.name||L.split("/").pop()||L).trim();if(U===y){U0();return}try{let a=(await s1(L,U))?.path||L,r=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(U0(),c(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:L,newPath:a,type:k?.type||"file"}})),k?.type==="dir")O((d)=>{let u=new Set;for(let V_ of d)if(V_===L)u.add(a);else if(V_.startsWith(`${L}/`))u.add(`${a}${V_.slice(L.length)}`);else u.add(V_);return u});if(F(a),k?.type==="dir")H(null),o(!1),C(null);else n_.current?.(a);k_.current?.(r)}catch(g){c(g?.message||"Failed to rename file")}},[U0,v]),y0=A(async(L)=>{let y=L||".";for(let g=0;g<50;g+=1){let r=`untitled${g===0?"":`-${g}`}.md`;try{let u=(await d1(y,r,""))?.path||(y==="."?r:`${y}/${r}`);if(y&&y!==".")O((V_)=>new Set([...V_,y]));F(u),c(null),k_.current?.(y),n_.current?.(u);return}catch(d){if(d?.status===409||d?.code==="file_exists")continue;c(d?.message||"Failed to create file");return}}c("Failed to create file (untitled name already in use).")},[]),I0=A((L)=>{if(L?.stopPropagation?.(),B_)return;let U=c$(Q0.current);y0(U)},[B_,c$,y0]);R(()=>{if(typeof window>"u")return;let L=(U)=>{let k=U?.detail?.updates||[];if(!Array.isArray(k)||k.length===0)return;q((d)=>{let u=d;for(let V_ of k){if(!V_?.root)continue;if(!u||V_.path==="."||!V_.path)u=V_.root;else u=S4(u,V_.path,V_.root)}if(u)f_.current=t6(u,W_.current,n.current);return s(!1),u});let y=Q0.current;if(Boolean(y)&&k.some((d)=>{let u=d?.path||"";if(!u||u===".")return!0;return y===u||y.startsWith(`${u}/`)||u.startsWith(`${y}/`)}))J0.current.clear();if(!y||!E0.current)return;let a=c_.current?.get(y);if(a&&a.type==="dir")return;if(k.some((d)=>{let u=d?.path||"";if(!u||u===".")return!0;return y===u||y.startsWith(`${u}/`)}))n_.current?.(y)};return window.addEventListener("workspace-update",L),()=>window.removeEventListener("workspace-update",L)},[]),t_.current=c0;let P$=D(()=>{if(typeof window>"u")return;let L=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),U=M_.current??G_.current,k=document.visibilityState!=="hidden"&&(U||L.matches&&G_.current);w2(k,n.current).catch(()=>{})}).current,w0=D(0),j2=D(()=>{if(w0.current)clearTimeout(w0.current);w0.current=setTimeout(()=>{w0.current=0,P$()},250)}).current;R(()=>{if(G_.current)t_.current?.();j2()},[$,j]),R(()=>{t_.current(),P$();let L=setInterval(()=>t_.current(),s5),U=q2("previewHeight",null),k=Number.isFinite(U)?Math.min(Math.max(U,80),600):280;if(d_.current=k,M0.current)M0.current.style.setProperty("--preview-height",`${k}px`);let y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),g=()=>j2();if(y.addEventListener)y.addEventListener("change",g);else if(y.addListener)y.addListener(g);return document.addEventListener("visibilitychange",g),()=>{if(clearInterval(L),R_.current)cancelAnimationFrame(R_.current),R_.current=0;if(y.removeEventListener)y.removeEventListener("change",g);else if(y.removeListener)y.removeListener(g);if(document.removeEventListener("visibilitychange",g),w0.current)clearTimeout(w0.current),w0.current=0;if(v_.current)clearTimeout(v_.current),v_.current=null;w2(!1,n.current).catch(()=>{})}},[]);let F$=a_(()=>j8(G,V,X_),[G,V,X_]),f$=a_(()=>new Map(F$.map((L)=>[L.node.path,L.node])),[F$]),Z2=a_(()=>a6(V0),[V0]);c_.current=f$;let C_=(Y?c_.current.get(Y):null)?.type==="dir";R(()=>{if(!Y||!C_){w_(null),f0.current=null,J_.current=null;return}let L=Y,U=`${X_?"hidden":"visible"}:${Y}`,k=J0.current,y=k.get(U);if(y?.root){k.delete(U),k.set(U,y);let r=_8(y.root,Boolean(y.truncated),T_);if(r)f0.current=r,J_.current=Y,w_({loading:!1,error:null,payload:r});return}let g=f0.current,a=J_.current;w_({loading:!0,error:null,payload:a===Y?g:null}),A2(Y,o5,X_).then((r)=>{if(Q0.current!==L)return;let d={root:r?.root,truncated:Boolean(r?.truncated)};k.delete(U),k.set(U,d);while(k.size>r5){let V_=k.keys().next().value;if(!V_)break;k.delete(V_)}let u=_8(d.root,d.truncated,T_);f0.current=u,J_.current=Y,w_({loading:!1,error:null,payload:u})}).catch((r)=>{if(Q0.current!==L)return;w_({loading:!1,error:r?.message||"Failed to load folder size chart",payload:a===Y?g:null})})},[Y,C_,X_,T_]);let F0=Boolean(E&&E.kind==="text"&&!C_&&(!E.size||E.size<=262144)),h0=F0?"Open in editor":E?.size>262144?"File too large to edit":"File is not editable",i$=Boolean(Y&&Y!=="."),l$=Boolean(Y&&!C_),n$=Boolean(Y&&!C_),W$=Y&&C_?e2(Y,X_):null,u0=A(()=>H_(!1),[]),G0=A(async(L)=>{u0();try{await L?.()}catch{}},[u0]);R(()=>{let L=D0.current;if(n0.current)n0.current.dispose(),n0.current=null;if(!L)return;if(L.innerHTML="",!Y||C_||!E||E.error)return;let U={path:Y,content:typeof E.text==="string"?E.text:void 0,mtime:E.mtime,size:E.size,preview:E,mode:"view"},k=j0.resolve(U)||j0.get("workspace-preview-default");if(!k)return;let y=k.mount(L,U);return n0.current=y,()=>{if(n0.current===y)y.dispose(),n0.current=null;L.innerHTML=""}},[Y,C_,E]);let H0=(L)=>{let U=L?.target;if(U instanceof Element)return U;return U?.parentElement||null},G$=(L)=>{return Boolean(L?.closest?.(".workspace-node-icon, .workspace-label-text"))},M$=D((L)=>{if(b0.current)clearTimeout(b0.current),b0.current=null;let k=H0(L)?.closest?.("[data-path]");if(!k)return;let y=k.dataset.path;if(k.dataset.type==="dir"||!y)return;if(A0.current===y)U0();y_.current?.(y)}).current,V$=D((L)=>{if(z0.current){z0.current=!1;return}let U=H0(L),k=U?.closest?.("[data-path]");if(T0.current?.focus?.(),!k)return;let y=k.dataset.path,g=k.dataset.type,a=Boolean(U?.closest?.(".workspace-caret")),r=Boolean(U?.closest?.("button"))||Boolean(U?.closest?.("a"))||Boolean(U?.closest?.("input")),d=Q0.current===y,u=A0.current;if(u){if(u===y)return;U0()}let V_=g==="file"&&Y$.current===y&&!a&&!r;if(d&&!a&&!r&&y!=="."&&!V_){if(b0.current)clearTimeout(b0.current);b0.current=setTimeout(()=>{b0.current=null,h$(y)},350);return}if(g==="dir"){if(Y$.current=null,F(y),H(null),C(null),o(!1),!W_.current.has(y))k_.current?.(y);if(d&&!a)return;O((E$)=>{let L0=new Set(E$);if(L0.has(y))L0.delete(y);else L0.add(y);return L0})}else{Y$.current=null,F(y);let q0=c_.current.get(y);if(q0)r_.current?.(q0.path,q0);n_.current?.(y)}}).current,H$=D(()=>{f_.current="",t_.current(),Array.from(W_.current||[]).filter((U)=>U&&U!==".").forEach((U)=>k_.current?.(U))}).current,t0=D(()=>{Y$.current=null,F(null),H(null),C(null),o(!1)}).current,b$=D(()=>{o_((L)=>{let U=!L;if(typeof window<"u")Y0("workspaceShowHidden",String(U));return n.current=U,w2(!0,U).catch(()=>{}),f_.current="",t_.current?.(),Array.from(W_.current||[]).filter((y)=>y&&y!==".").forEach((y)=>k_.current?.(y)),U})}).current,e0=D((L)=>{if(H0(L)?.closest?.("[data-path]"))return;t0()}).current,P0=A(async(L)=>{if(!L)return;let U=L.split("/").pop()||L;if(!window.confirm(`Delete "${U}"? This cannot be undone.`))return;try{await r1(L);let y=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(Q0.current===L)t0();k_.current?.(y),c(null)}catch(y){H((g)=>({...g||{},error:y.message||"Failed to delete file"}))}},[t0]),J$=A((L)=>{let U=T0.current;if(!U||!L||typeof CSS>"u"||typeof CSS.escape!=="function")return;U.querySelector(`[data-path="${CSS.escape(L)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),d$=A((L)=>{let U=F$;if(!U||U.length===0)return;let k=Y?U.findIndex((y)=>y.node.path===Y):-1;if(L.key==="ArrowDown"){L.preventDefault();let y=Math.min(k+1,U.length-1),g=U[y];if(!g)return;if(F(g.node.path),g.node.type!=="dir")r_.current?.(g.node.path,g.node),n_.current?.(g.node.path);else H(null),o(!1),C(null);J$(g.node.path);return}if(L.key==="ArrowUp"){L.preventDefault();let y=k<=0?0:k-1,g=U[y];if(!g)return;if(F(g.node.path),g.node.type!=="dir")r_.current?.(g.node.path,g.node),n_.current?.(g.node.path);else H(null),o(!1),C(null);J$(g.node.path);return}if(L.key==="ArrowRight"&&k>=0){let y=U[k];if(y?.node?.type==="dir"&&!V.has(y.node.path))L.preventDefault(),k_.current?.(y.node.path),O((g)=>new Set([...g,y.node.path]));return}if(L.key==="ArrowLeft"&&k>=0){let y=U[k];if(y?.node?.type==="dir"&&V.has(y.node.path))L.preventDefault(),O((g)=>{let a=new Set(g);return a.delete(y.node.path),a});return}if(L.key==="Enter"&&k>=0){L.preventDefault();let y=U[k];if(!y)return;let g=y.node.path;if(y.node.type==="dir"){if(!W_.current.has(g))k_.current?.(g);O((r)=>{let d=new Set(r);if(d.has(g))d.delete(g);else d.add(g);return d}),H(null),C(null),o(!1)}else r_.current?.(g,y.node),n_.current?.(g);return}if((L.key==="Delete"||L.key==="Backspace")&&k>=0){let y=U[k];if(!y||y.node.type==="dir")return;L.preventDefault(),P0(y.node.path);return}if(L.key==="Escape")L.preventDefault(),t0()},[t0,P0,V,F$,J$,Y]),X$=A((L)=>{let U=H0(L),k=U?.closest?.(".workspace-row");if(!k)return;let y=k.dataset.type,g=k.dataset.path;if(!g||g===".")return;if(A0.current===g)return;let a=L?.touches?.[0];if(!a)return;if(N0.current={path:G$(U)?g:null,dragging:!1,startX:a.clientX,startY:a.clientY},y!=="file")return;if(v_.current)clearTimeout(v_.current);v_.current=setTimeout(()=>{if(v_.current=null,N0.current?.dragging)return;P0(g)},600)},[P0]),C$=A(()=>{if(v_.current)clearTimeout(v_.current),v_.current=null;let L=N0.current;if(L?.dragging&&L.path){let U=S_.current||W0(),k=y$.current;if(typeof k==="function")k(L.path,U)}N0.current={path:null,dragging:!1,startX:0,startY:0},x_.current=0,t(!1),$_(null),k0(null),C0(),w$()},[W0,w$,k0,C0]),R$=A((L)=>{let U=N0.current,k=L?.touches?.[0];if(!k||!U?.path){if(v_.current)clearTimeout(v_.current),v_.current=null;return}let y=Math.abs(k.clientX-U.startX),g=Math.abs(k.clientY-U.startY),a=y>8||g>8;if(a&&v_.current)clearTimeout(v_.current),v_.current=null;if(!U.dragging&&a)U.dragging=!0,t(!0),$_("move"),A$(U.path);if(U.dragging){L.preventDefault(),U$(k.clientX,k.clientY);let r=document.elementFromPoint(k.clientX,k.clientY),d=B$(r)||W0();if(S_.current!==d)k0(d);d0(d)}},[B$,W0,A$,U$,k0,d0]),D$=D((L)=>{L.preventDefault();let U=M0.current;if(!U)return;let k=L.clientY,y=d_.current||280,g=L.currentTarget;g.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let a=k,r=(u)=>{a=u.clientY;let V_=U.clientHeight-80,q0=Math.min(Math.max(y-(u.clientY-k),80),V_);U.style.setProperty("--preview-height",`${q0}px`),d_.current=q0},d=()=>{let u=U.clientHeight-80,V_=Math.min(Math.max(y-(a-k),80),u);d_.current=V_,g.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y0("previewHeight",String(Math.round(V_))),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",d)}).current,s$=D((L)=>{L.preventDefault();let U=M0.current;if(!U)return;let k=L.touches[0];if(!k)return;let y=k.clientY,g=d_.current||280,a=L.currentTarget;a.classList.add("dragging"),document.body.style.userSelect="none";let r=(u)=>{let V_=u.touches[0];if(!V_)return;u.preventDefault();let q0=U.clientHeight-80,E$=Math.min(Math.max(g-(V_.clientY-y),80),q0);U.style.setProperty("--preview-height",`${E$}px`),d_.current=E$},d=()=>{a.classList.remove("dragging"),document.body.style.userSelect="",Y0("previewHeight",String(Math.round(d_.current||g))),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",d),document.removeEventListener("touchcancel",d)};document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",d),document.addEventListener("touchcancel",d)}).current,v$=async()=>{if(!Y)return;try{let L=await n1(Y);if(L.media_id)C(L.media_id)}catch(L){H((U)=>({...U||{},error:L.message||"Failed to attach"}))}},o$=async()=>{if(!Y||C_)return;await P0(Y)},u$=(L)=>{return Array.from(L?.dataTransfer?.types||[]).includes("Files")},A_=A((L)=>{if(!u$(L))return;if(L.preventDefault(),x_.current+=1,!R0.current)t(!0);$_("upload");let U=Q$(L)||W0();k0(U),d0(U)},[W0,Q$,k0,d0]),z2=A((L)=>{if(!u$(L))return;if(L.preventDefault(),L.dataTransfer)L.dataTransfer.dropEffect="copy";if(!R0.current)t(!0);if(k$.current!=="upload")$_("upload");let U=Q$(L)||W0();if(S_.current!==U)k0(U);d0(U)},[W0,Q$,k0,d0]),Q2=A((L)=>{if(!u$(L))return;if(L.preventDefault(),x_.current=Math.max(0,x_.current-1),x_.current===0)t(!1),$_(null),k0(null),C0()},[k0,C0]),m$=A(async(L,U=".")=>{let k=Array.from(L||[]);if(k.length===0)return;let y=U&&U!==""?U:".",g=y!=="."?y:"workspace root";Q_(!0);try{let a=null;for(let r of k)try{a=await a2(r,y)}catch(d){let u=d?.status,V_=d?.code;if(u===409||V_==="file_exists"){let q0=r?.name||"file";if(!window.confirm(`"${q0}" already exists in ${g}. Overwrite?`))continue;a=await a2(r,y,{overwrite:!0})}else throw d}if(a?.path)Y$.current=a.path,F(a.path),n_.current?.(a.path);k_.current?.(y)}catch(a){c(a.message||"Failed to upload file")}finally{Q_(!1)}},[]),r$=A(async(L,U)=>{if(!L)return;let k=c_.current?.get(L);if(!k)return;let y=U&&U!==""?U:".",g=L.includes("/")?L.split("/").slice(0,-1).join("/")||".":".";if(y===g)return;try{let r=(await o1(L,y))?.path||L;if(k.type==="dir")O((d)=>{let u=new Set;for(let V_ of d)if(V_===L)u.add(r);else if(V_.startsWith(`${L}/`))u.add(`${r}${V_.slice(L.length)}`);else u.add(V_);return u});if(F(r),k.type==="dir")H(null),o(!1),C(null);else n_.current?.(r);k_.current?.(g),k_.current?.(y)}catch(a){c(a?.message||"Failed to move entry")}},[]);y$.current=r$;let U2=A(async(L)=>{if(!u$(L))return;L.preventDefault(),x_.current=0,t(!1),$_(null),b_(null),C0();let U=Array.from(L?.dataTransfer?.files||[]);if(U.length===0)return;let k=S_.current||Q$(L)||W0();await m$(U,k)},[W0,Q$,m$]),Q=A((L)=>{if(L?.stopPropagation?.(),B_)return;let U=L?.currentTarget?.dataset?.uploadTarget||".";Z0.current=U,X0.current?.click()},[B_]),b=A(()=>{if(B_)return;let L=Q0.current,U=L?c_.current?.get(L):null;Z0.current=U?.type==="dir"?U.path:".",X0.current?.click()},[B_]),S=A(()=>{G0(()=>I0(null))},[G0,I0]),i=A(()=>{G0(()=>b())},[G0,b]),z_=A(()=>{G0(()=>H$())},[G0,H$]),D_=A(()=>{G0(()=>b$())},[G0,b$]),I_=A(()=>{if(!Y||!F0)return;G0(()=>y_.current?.(Y,E))},[G0,Y,F0,E]),K0=A(()=>{if(!Y||Y===".")return;G0(()=>h$(Y))},[G0,Y,h$]),x0=A(()=>{if(!Y||C_)return;G0(()=>o$())},[G0,Y,C_,o$]),m_=A(()=>{if(!Y||C_)return;G0(()=>v$())},[G0,Y,C_,v$]),i0=A(()=>{if(!W$)return;if(u0(),typeof window<"u")window.open(W$,"_blank","noopener")},[u0,W$]),I$=A(()=>{u0(),N?.()},[u0,N]),S0=A(()=>{u0(),z?.()},[u0,z]),q$=A((L)=>{if(!L||L.button!==0)return;let U=L.currentTarget;if(!U||!U.dataset)return;let k=U.dataset.path;if(!k||k===".")return;if(A0.current===k)return;let y=H0(L);if(y?.closest?.("button, a, input, .workspace-caret"))return;if(!G$(y))return;L.preventDefault(),u_.current={path:k,dragging:!1,startX:L.clientX,startY:L.clientY};let g=(r)=>{let d=u_.current;if(!d?.path)return;let u=Math.abs(r.clientX-d.startX),V_=Math.abs(r.clientY-d.startY),q0=u>4||V_>4;if(!d.dragging&&q0)d.dragging=!0,z0.current=!0,t(!0),$_("move"),A$(d.path),U$(r.clientX,r.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(d.dragging){r.preventDefault(),U$(r.clientX,r.clientY);let E$=document.elementFromPoint(r.clientX,r.clientY),L0=B$(E$)||W0();if(S_.current!==L0)k0(L0);d0(L0)}},a=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",a);let r=u_.current;if(r?.dragging&&r.path){let d=S_.current||W0(),u=y$.current;if(typeof u==="function")u(r.path,d)}u_.current={path:null,dragging:!1,startX:0,startY:0},x_.current=0,t(!1),$_(null),k0(null),C0(),w$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{z0.current=!1},0)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",a)},[B$,W0,A$,U$,w$,k0,d0,C0]),F2=A(async(L)=>{let U=Array.from(L?.target?.files||[]);if(U.length===0)return;let k=Z0.current||".";if(await m$(U,k),Z0.current=".",L?.target)L.target.value=""},[m$]);return B`
        <aside
            class=${`workspace-sidebar${__?" workspace-drop-active":""}`}
            data-workspace-scale=${V0}
            ref=${M0}
            onDragEnter=${A_}
            onDragOver=${z2}
            onDragLeave=${Q2}
            onDrop=${U2}
        >
            <input type="file" multiple style="display:none" ref=${X0} onChange=${F2} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${x}
                            class=${`workspace-menu-button${Z_?" active":""}`}
                            onClick=${(L)=>{L.stopPropagation(),H_((U)=>!U)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${Z_?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${Z_&&B`
                            <div class="workspace-menu-dropdown" ref=${p0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${S} disabled=${B_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${i} disabled=${B_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${z_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${X_?" active":""}`} role="menuitem" onClick=${D_}>
                                    ${X_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${Y&&B`<div class="workspace-menu-separator"></div>`}
                                ${Y&&!C_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I_} disabled=${!F0}>Open in editor</button>
                                `}
                                ${i$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K0}>Rename selected</button>
                                `}
                                ${n$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m_}>Download selected file</button>
                                `}
                                ${W$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${i0}>Download selected folder (zip)</button>
                                `}
                                ${l$&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${x0}>Delete selected file</button>
                                `}

                                ${(N||z)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I$}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${S0}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${I0} title="New file" disabled=${B_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${H$} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${e0}>
                ${B_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${l&&B`<div class="workspace-loading">Loading…</div>`}
                ${K_&&B`<div class="workspace-error">${K_}</div>`}
                ${G&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${T0}
                        tabIndex="0"
                        onClick=${V$}
                        onDblClick=${M$}
                        onKeyDown=${d$}
                        onTouchStart=${X$}
                        onTouchEnd=${C$}
                        onTouchMove=${R$}
                        onTouchCancel=${C$}
                    >
                        ${F$.map(({node:L,depth:U})=>{let k=L.type==="dir",y=L.path===Y,g=L.path===w,a=k&&V.has(L.path),r=L_&&L.path===L_,d=Array.isArray(L.children)&&L.children.length>0?L.children.length:Number(L.child_count)||0;return B`
                                <div
                                    key=${L.path}
                                    class=${`workspace-row${y?" selected":""}${r?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+U*Z2.indentPx}px`}}
                                    data-path=${L.path}
                                    data-type=${L.type}
                                    onMouseDown=${q$}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${k?a?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${k?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${k?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${g?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${g0}
                                                value=${v}
                                                onInput=${(u)=>f(u?.target?.value||"")}
                                                onKeyDown=${(u)=>{if(u.key==="Enter")u.preventDefault(),s0();else if(u.key==="Escape")u.preventDefault(),U0()}}
                                                onBlur=${U0}
                                                onClick=${(u)=>u.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${L.name}</span></span>`}
                                    ${k&&!a&&d>0&&B`
                                        <span class="workspace-count">${d}</span>
                                    `}
                                    ${k&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${L.path}
                                            title="Upload files to this folder"
                                            onClick=${Q}
                                            disabled=${B_}
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
            ${Y&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${D$} onTouchStart=${s$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${Y}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${I0} title="New file" disabled=${B_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!C_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>F0&&y_.current?.(Y,E)}
                                    title=${h0}
                                    disabled=${!F0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${o$}
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
                            ${C_?B`
                                    <button class="workspace-download" onClick=${b}
                                        title="Upload files to this folder" disabled=${B_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${e2(Y,X_)}
                                        title="Download folder as zip" onClick=${(L)=>L.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${v$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${e&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${E?.error&&B`<div class="workspace-error">${E.error}</div>`}
                    ${C_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${p_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${p_?.error&&B`<div class="workspace-error">${p_.error}</div>`}
                        ${p_?.payload&&p_.payload.segments?.length>0&&B`
                            <${a5} payload=${p_.payload} />
                        `}
                        ${p_?.payload&&(!p_.payload.segments||p_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${E&&!E.error&&!C_&&B`
                        <div class="workspace-preview-body" ref=${D0}></div>
                    `}
                    ${I&&B`
                        <div class="workspace-download-card">
                            <${t5} mediaId=${I} />
                        </div>
                    `}
                </div>
            `}
            ${O_&&B`
                <div class="workspace-drag-ghost" ref=${a0}>${O_.label}</div>
            `}
        </aside>
    `}var e5=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,_j=/\.(csv|tsv)$/i,$j=/\.pdf$/i,jj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,X8=/\.drawio(\.xml|\.svg|\.png)?$/i;function q8({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:z,onTogglePin:K,onTogglePreview:G,previewTabs:q,onToggleDock:V,dockVisible:O}){let[Y,F]=T(null),w=D(null);R(()=>{if(!Y)return;let H=(I)=>{if(I.type==="keydown"&&I.key!=="Escape")return;F(null)};return document.addEventListener("click",H),document.addEventListener("keydown",H),()=>{document.removeEventListener("click",H),document.removeEventListener("keydown",H)}},[Y]),R(()=>{let H=(I)=>{if(I.ctrlKey&&I.key==="Tab"){if(I.preventDefault(),!_.length)return;let C=_.findIndex((l)=>l.id===$);if(I.shiftKey){let l=_[(C-1+_.length)%_.length];j?.(l.id)}else{let l=_[(C+1)%_.length];j?.(l.id)}return}if((I.ctrlKey||I.metaKey)&&I.key==="w"){let C=document.querySelector(".editor-pane");if(C&&C.contains(document.activeElement)){if(I.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$,j,Z]);let m=A((H,I)=>{if(H.button===1){H.preventDefault(),Z?.(I);return}if(H.button===0)j?.(I)},[j,Z]),v=A((H,I)=>{H.preventDefault(),F({id:I,x:H.clientX,y:H.clientY})},[]),f=A((H)=>{H.preventDefault(),H.stopPropagation()},[]),E=A((H,I)=>{H.preventDefault(),H.stopPropagation(),Z?.(I)},[Z]);if(R(()=>{if(!$||!w.current)return;let H=w.current.querySelector(".tab-item.active");if(H)H.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${w} role="tablist">
            ${_.map((H)=>B`
                <div
                    key=${H.id}
                    class=${`tab-item${H.id===$?" active":""}${H.dirty?" dirty":""}${H.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${H.id===$}
                    title=${H.path}
                    onMouseDown=${(I)=>m(I,H.id)}
                    onContextMenu=${(I)=>v(I,H.id)}
                >
                    ${H.pinned&&B`
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
                        onMouseDown=${f}
                        onClick=${(I)=>E(I,H.id)}
                        title=${H.dirty?"Unsaved changes":"Close"}
                        aria-label=${H.dirty?"Unsaved changes":`Close ${H.label}`}
                    >
                        ${H.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${O?" active":""}`}
                    onClick=${V}
                    title=${`${O?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${O?"Hide":"Show"} terminal`}
                    aria-pressed=${O?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
        </div>
        ${Y&&B`
            <div class="tab-context-menu" style=${{left:Y.x+"px",top:Y.y+"px"}}>
                <button onClick=${()=>{Z?.(Y.id),F(null)}}>Close</button>
                <button onClick=${()=>{N?.(Y.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{z?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{K?.(Y.id),F(null)}}>
                    ${_.find((H)=>H.id===Y.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${G&&/\.(md|mdx|markdown)$/i.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{G(Y.id),F(null)}}>
                        ${q?.has(Y.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${e5.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(Y.id),I=Y.id.split("/").pop()||"document",C="/office-viewer/?url="+encodeURIComponent(H)+"&name="+encodeURIComponent(I);window.open(C,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${_j.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let H="/csv-viewer/?path="+encodeURIComponent(Y.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${$j.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let H="/workspace/raw?path="+encodeURIComponent(Y.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${jj.test(Y.id)&&!X8.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let H="/image-viewer/?path="+encodeURIComponent(Y.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${X8.test(Y.id)&&B`
                    <hr />
                    <button onClick=${()=>{let H="/drawio/edit?path="+encodeURIComponent(Y.id);window.open(H,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Zj=400,v4=60,L8=220,u4="mdPreviewHeight";function Nj(){try{let _=localStorage.getItem(u4),$=_?Number(_):NaN;return Number.isFinite($)&&$>=v4?$:L8}catch{return L8}}function O8({getContent:_,path:$,onClose:j}){let[Z,N]=T(""),[z,K]=T(Nj),G=D(null),q=D(null),V=D(""),O=D(_);return O.current=_,R(()=>{let w=()=>{let v=O.current?.()||"";if(v===V.current)return;V.current=v;try{let f=r0(v,null,{sanitize:!1});N(f)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let m=setInterval(w,Zj);return()=>clearInterval(m)},[]),R(()=>{if(G.current&&Z)S$(G.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let m=w.clientY,v=q.current?.offsetHeight||z,f=q.current?.parentElement,E=f?f.offsetHeight*0.7:500,H=w.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let I=(l)=>{let s=Math.min(Math.max(v-(l.clientY-m),v4),E);K(s)},C=()=>{H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(u4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",C)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",C)}}
            onTouchStart=${(w)=>{w.preventDefault();let m=w.touches[0];if(!m)return;let v=m.clientY,f=q.current?.offsetHeight||z,E=q.current?.parentElement,H=E?E.offsetHeight*0.7:500,I=w.currentTarget;I.classList.add("dragging"),document.body.style.userSelect="none";let C=(s)=>{let e=s.touches[0];if(!e)return;s.preventDefault();let o=Math.min(Math.max(f-(e.clientY-v),v4),H);K(o)},l=()=>{I.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(u4,String(Math.round(q.current?.offsetHeight||z)))}catch{}document.removeEventListener("touchmove",C),document.removeEventListener("touchend",l),document.removeEventListener("touchcancel",l)};document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",l),document.addEventListener("touchcancel",l)}}
        ></div>
        <div class="md-preview-panel" ref=${q} style=${{height:z+"px"}}>
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
    `}function B8({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let z=D(_);z.current=_;let K=D($);K.current=$;let G=D(j);G.current=j;let q=D(Z);q.current=Z,R(()=>{G.current();let V=new _1((Y,F)=>z.current(Y,F),(Y)=>K.current(Y),{chatJid:N});V.connect();let O=()=>{V.reconnectIfNeeded();let Y=typeof document<"u"?document:null;if(!Y||Y.visibilityState==="visible")q.current?.()};return window.addEventListener("focus",O),document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("focus",O),document.removeEventListener("visibilitychange",O),V.disconnect()}},[N])}function Q8(){let[_,$]=T(!1),[j,Z]=T("default"),N=D(!1);R(()=>{let q=X2("notificationsEnabled",!1);if(N.current=q,$(q),typeof Notification<"u")Z(Notification.permission)},[]),R(()=>{N.current=_},[_]);let z=A(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let q=Notification.requestPermission();if(q&&typeof q.then==="function")return q;return Promise.resolve(q)}catch{return Promise.resolve("default")}},[]),K=A(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let V=await z();if(Z(V||"default"),V!=="granted"){N.current=!1,$(!1),Y0("notificationsEnabled","false");return}}let q=!N.current;N.current=q,$(q),Y0("notificationsEnabled",String(q))},[z]),G=A((q,V)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let O=new Notification(q,{body:V});return O.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:K,notify:G}}var f2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function U8({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=T(null),[z,K]=T(!1),G=D(!1),q=D(null),V=D(!1),O=D(null),Y=D(null),F=D(0);R(()=>{G.current=z},[z]),R(()=>{Y.current=Z},[Z]),R(()=>{F.current+=1,Y.current=null,O.current=null,V.current=!1,G.current=!1,N(null),K(!1)},[j]);let w=A(async(f=null)=>{let E=F.current;try{if(f){let H=await I1(f,50,0,j);if(E!==F.current)return;N(H.posts),K(!1)}else{let H=await k2(10,null,j);if(E!==F.current)return;N(H.posts),K(H.has_more)}}catch(H){if(E!==F.current)return;console.error("Failed to load posts:",H)}},[j]),m=A(async()=>{let f=F.current;try{let E=await k2(10,null,j);if(f!==F.current)return;N((H)=>{if(!H||H.length===0)return E.posts;return f2([...E.posts,...H])}),K((H)=>H||E.has_more)}catch(E){if(f!==F.current)return;console.error("Failed to refresh timeline:",E)}},[j]),v=A(async(f={})=>{let E=F.current,H=Y.current;if(!H||H.length===0)return;if(V.current)return;let{preserveScroll:I=!0,preserveMode:C="top",allowRepeat:l=!1}=f,s=(K_)=>{if(!I){K_();return}if(C==="top")$(K_);else _(K_)},o=H.slice().sort((K_,c)=>K_.id-c.id)[0]?.id;if(!Number.isFinite(o))return;if(!l&&O.current===o)return;V.current=!0,O.current=o;try{let K_=await k2(10,o,j);if(E!==F.current)return;if(K_.posts.length>0)s(()=>{N((c)=>f2([...K_.posts,...c||[]])),K(K_.has_more)});else K(!1)}catch(K_){if(E!==F.current)return;console.error("Failed to load more posts:",K_)}finally{if(E===F.current)V.current=!1}},[j,_,$]);return R(()=>{q.current=v},[v]),{posts:Z,setPosts:N,hasMore:z,setHasMore:K,hasMoreRef:G,loadPosts:w,refreshTimeline:m,loadMore:v,loadMoreRef:q,loadingMoreRef:V,lastBeforeIdRef:O}}function F8(){let[_,$]=T(null),[j,Z]=T({text:"",totalLines:0}),[N,z]=T(""),[K,G]=T({text:"",totalLines:0}),[q,V]=T(null),[O,Y]=T(null),[F,w]=T(null),m=D(null),v=D(0),f=D(!1),E=D(""),H=D(""),I=D(null),C=D(null),l=D(null),s=D(null),e=D(!1),o=D(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:z,agentThought:K,setAgentThought:G,pendingRequest:q,setPendingRequest:V,currentTurnId:O,setCurrentTurnId:Y,steerQueuedTurnId:F,setSteerQueuedTurnId:w,lastAgentEventRef:m,lastSilenceNoticeRef:v,isAgentRunningRef:f,draftBufferRef:E,thoughtBufferRef:H,pendingRequestRef:I,stalledPostIdRef:C,currentTurnIdRef:l,steerQueuedTurnIdRef:s,thoughtExpandedRef:e,draftExpandedRef:o}}function H8({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=D((O)=>{O.preventDefault();let Y=_.current;if(!Y)return;let F=O.clientX,w=$.current||280,m=O.currentTarget;m.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=F,f=(H)=>{v=H.clientX;let I=Math.min(Math.max(w+(H.clientX-F),160),600);Y.style.setProperty("--sidebar-width",`${I}px`),$.current=I},E=()=>{let H=Math.min(Math.max(w+(v-F),160),600);$.current=H,m.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Y0("sidebarWidth",String(Math.round(H))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,z=D((O)=>{O.preventDefault();let Y=_.current;if(!Y)return;let F=O.touches[0];if(!F)return;let w=F.clientX,m=$.current||280,v=O.currentTarget;v.classList.add("dragging"),Y.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let f=(H)=>{let I=H.touches[0];if(!I)return;H.preventDefault();let C=Math.min(Math.max(m+(I.clientX-w),160),600);Y.style.setProperty("--sidebar-width",`${C}px`),$.current=C},E=()=>{v.classList.remove("dragging"),Y.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Y0("sidebarWidth",String(Math.round($.current||m))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,K=D((O)=>{O.preventDefault();let Y=_.current;if(!Y)return;let F=O.clientX,w=j.current||$.current||280,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let v=F,f=(H)=>{v=H.clientX;let I=Math.min(Math.max(w+(H.clientX-F),200),800);Y.style.setProperty("--editor-width",`${I}px`),j.current=I},E=()=>{let H=Math.min(Math.max(w+(v-F),200),800);j.current=H,m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y0("editorWidth",String(Math.round(H))),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,G=D((O)=>{O.preventDefault();let Y=_.current;if(!Y)return;let F=O.touches[0];if(!F)return;let w=F.clientX,m=j.current||$.current||280,v=O.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let f=(H)=>{let I=H.touches[0];if(!I)return;H.preventDefault();let C=Math.min(Math.max(m+(I.clientX-w),200),800);Y.style.setProperty("--editor-width",`${C}px`),j.current=C},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",Y0("editorWidth",String(Math.round(j.current||m))),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current,q=D((O)=>{O.preventDefault();let Y=_.current;if(!Y)return;let F=O.clientY,w=Z?.current||200,m=O.currentTarget;m.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let v=F,f=(H)=>{v=H.clientY;let I=Math.min(Math.max(w-(H.clientY-F),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${I}px`),Z)Z.current=I;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{let H=Math.min(Math.max(w-(v-F),100),window.innerHeight*0.5);if(Z)Z.current=H;m.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Y0("dockHeight",String(Math.round(H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",E)};document.addEventListener("mousemove",f),document.addEventListener("mouseup",E)}).current,V=D((O)=>{O.preventDefault();let Y=_.current;if(!Y)return;let F=O.touches[0];if(!F)return;let w=F.clientY,m=Z?.current||200,v=O.currentTarget;v.classList.add("dragging"),document.body.style.userSelect="none";let f=(H)=>{let I=H.touches[0];if(!I)return;H.preventDefault();let C=Math.min(Math.max(m-(I.clientY-w),100),window.innerHeight*0.5);if(Y.style.setProperty("--dock-height",`${C}px`),Z)Z.current=C;window.dispatchEvent(new CustomEvent("dock-resize"))},E=()=>{v.classList.remove("dragging"),document.body.style.userSelect="",Y0("dockHeight",String(Math.round(Z?.current||m))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",f),document.removeEventListener("touchend",E),document.removeEventListener("touchcancel",E)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",E),document.addEventListener("touchcancel",E)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:z,handleEditorSplitterMouseDown:K,handleEditorSplitterTouchStart:G,handleDockSplitterMouseDown:q,handleDockSplitterTouchStart:V}}function J8({onTabClosed:_}={}){let $=D(_);$.current=_;let[j,Z]=T(()=>s_.getTabs()),[N,z]=T(()=>s_.getActiveId()),[K,G]=T(()=>s_.getTabs().length>0);R(()=>{return s_.onChange((C,l)=>{Z(C),z(l),G(C.length>0)})},[]);let[q,V]=T(()=>new Set),O=A((C)=>{V((l)=>{let s=new Set(l);if(s.has(C))s.delete(C);else s.add(C);return s})},[]),Y=A((C)=>{V((l)=>{if(!l.has(C))return l;let s=new Set(l);return s.delete(C),s})},[]),F=A((C,l={})=>{if(!C)return;let s={path:C,mode:"edit"};try{if(!j0.resolve(s)){if(!j0.get("editor")){console.warn(`[openEditor] No pane handler for: ${C}`);return}}}catch(o){console.warn(`[openEditor] paneRegistry.resolve() error for "${C}":`,o)}let e=typeof l?.label==="string"&&l.label.trim()?l.label.trim():void 0;s_.open(C,e)},[]),w=A(()=>{let C=s_.getActiveId();if(C){let l=s_.get(C);if(l?.dirty){if(!window.confirm(`"${l.label}" has unsaved changes. Close anyway?`))return}s_.close(C),Y(C),$.current?.(C)}},[Y]),m=A((C)=>{let l=s_.get(C);if(l?.dirty){if(!window.confirm(`"${l.label}" has unsaved changes. Close anyway?`))return}s_.close(C),Y(C),$.current?.(C)},[Y]),v=A((C)=>{s_.activate(C)},[]),f=A((C)=>{let l=s_.getTabs().filter((o)=>o.id!==C&&!o.pinned),s=l.filter((o)=>o.dirty).length;if(s>0){if(!window.confirm(`${s} unsaved tab${s>1?"s":""} will be closed. Continue?`))return}let e=l.map((o)=>o.id);s_.closeOthers(C),e.forEach((o)=>{Y(o),$.current?.(o)})},[Y]),E=A(()=>{let C=s_.getTabs().filter((e)=>!e.pinned),l=C.filter((e)=>e.dirty).length;if(l>0){if(!window.confirm(`${l} unsaved tab${l>1?"s":""} will be closed. Continue?`))return}let s=C.map((e)=>e.id);s_.closeAll(),s.forEach((e)=>{Y(e),$.current?.(e)})},[Y]),H=A((C)=>{s_.togglePin(C)},[]),I=A(()=>{let C=s_.getActiveId();if(C)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:C}}))},[]);return R(()=>{let C=(l)=>{let{oldPath:s,newPath:e,type:o}=l.detail||{};if(!s||!e)return;if(o==="dir"){for(let K_ of s_.getTabs())if(K_.path===s||K_.path.startsWith(`${s}/`)){let c=`${e}${K_.path.slice(s.length)}`;s_.rename(K_.id,c)}}else s_.rename(s,e)};return window.addEventListener("workspace-file-renamed",C),()=>window.removeEventListener("workspace-file-renamed",C)},[]),R(()=>{let C=(l)=>{if(s_.hasUnsaved())l.preventDefault(),l.returnValue=""};return window.addEventListener("beforeunload",C),()=>window.removeEventListener("beforeunload",C)},[]),{editorOpen:K,tabStripTabs:j,tabStripActiveId:N,previewTabs:q,openEditor:F,closeEditor:w,handleTabClose:m,handleTabActivate:v,handleTabCloseOthers:f,handleTabCloseAll:E,handleTabTogglePin:H,handleTabTogglePreview:O,revealInExplorer:I}}function m4(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],z=Number(N);return Number.isFinite(z)?z:$}catch{return $}}var g4=m4("warning",30000),D8=m4("finalize",120000),p4=m4("refresh",30000),E8=30000;function k8(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function y8(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function A8(_=30000){let[,$]=T(0);R(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function c4(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function w8(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function _2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function h4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),z=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),K=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(z||N>1||K)}function P8(_,$={}){if(_2($))return null;if(h4($))return{target:"_blank",features:void 0,mode:"tab"};return{target:zj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M8(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function b8(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function C8(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function I8(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function R2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function x8(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function zj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function i4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function l4(_){return String(_||"").trim()||"web:default"}function S8({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function T8(_={}){return _2(_)&&h4(_)}function Kj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function Yj(_={},$={}){if(!T8(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Kj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function f8(_={}){if(!T8(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,z=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let Y of N)$.clearTimeout?.(Y);N.clear()},K=()=>{Z=0,Yj({window:$,document:j})},G=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(K)??0},q=()=>{G();for(let Y of[80,220,420]){let F=$.setTimeout?.(()=>{N.delete(F),G()},Y);if(F!=null)N.add(F)}},V=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;q()},O=$.visualViewport;return q(),$.addEventListener("focus",q),$.addEventListener("pageshow",q),$.addEventListener("resize",q),$.addEventListener("orientationchange",q),j.addEventListener("visibilitychange",V),j.addEventListener("focusin",q,!0),O?.addEventListener?.("resize",q),O?.addEventListener?.("scroll",q),()=>{z(),$.removeEventListener("focus",q),$.removeEventListener("pageshow",q),$.removeEventListener("resize",q),$.removeEventListener("orientationchange",q),j.removeEventListener("visibilitychange",V),j.removeEventListener("focusin",q,!0),O?.removeEventListener?.("resize",q),O?.removeEventListener?.("scroll",q)}}function Wj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function O$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Wj($,j)}var Gj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function R8(_){return Gj.has(String(_||"").trim())}function Vj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function v8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(Vj(_),{detail:Z})),!0}var Xj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function u8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(_2({window:j,navigator:Z}))};N();let K=Xj.map((G)=>{try{return j.matchMedia?.(G)??null}catch{return null}}).filter(Boolean).map((G)=>{if(typeof G.addEventListener==="function")return G.addEventListener("change",N),()=>G.removeEventListener("change",N);if(typeof G.addListener==="function")return G.addListener(N),()=>G.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let G of K)G();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function m8(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var d4="piclaw_btw_session";function qj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Lj(){let _=N$(d4);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",z=typeof $.error==="string"&&$.error.trim()?$.error:null,K=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:K==="error"?z||"BTW stream interrupted. You can retry.":z,model:null,status:K}}catch{return null}}var g8=x1,p8=T1,Oj=R1,c8=p1,h8=c1,i8=v1,n4=O$(Z$,"getAgentContext",null),Bj=O$(Z$,"getAgentModels",{current:null,models:[]}),Qj=O$(Z$,"getActiveChatAgents",{chats:[]}),l8=O$(Z$,"getChatBranches",{chats:[]}),Uj=O$(Z$,"renameChatBranch",null),Fj=O$(Z$,"pruneChatBranch",null),Hj=O$(Z$,"getAgentQueueState",{count:0}),Jj=O$(Z$,"steerAgentQueueItem",{removed:!1,queued:"steer"}),Dj=O$(Z$,"removeAgentQueueItem",{removed:!1}),Ej=O$(Z$,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});j0.register(L4);j0.register(E4);j0.register(D4);j0.register(k4);j0.register(y4);j0.register(A4);j0.register(P4);j0.register(b4);O4();j0.register(F4);j0.register(H4);function kj({locationParams:_}){let $=a_(()=>{let X=_.get("chat_jid");return X&&X.trim()?X.trim():"web:default"},[_]),j=a_(()=>{let X=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),Z=a_(()=>{let X=(_.get("branch_loader")||"").trim().toLowerCase();return X==="1"||X==="true"||X==="yes"},[_]),N=a_(()=>{let X=_.get("branch_source_chat_jid");return X&&X.trim()?X.trim():$},[$,_]),[z,K]=T("disconnected"),[G,q]=T(()=>_2()),[V,O]=T(null),[Y,F]=T(null),[w,m]=T(!1),[v,f]=T("current"),[E,H]=T([]),[I,C]=T([]),[l,s]=T(null),{agentStatus:e,setAgentStatus:o,agentDraft:K_,setAgentDraft:c,agentPlan:X_,setAgentPlan:o_,agentThought:__,setAgentThought:t,pendingRequest:N_,setPendingRequest:$_,currentTurnId:O_,setCurrentTurnId:g_,steerQueuedTurnId:L_,setSteerQueuedTurnId:b_,lastAgentEventRef:B_,lastSilenceNoticeRef:Q_,isAgentRunningRef:p_,draftBufferRef:w_,thoughtBufferRef:T_,pendingRequestRef:P_,stalledPostIdRef:V0,currentTurnIdRef:Y_,steerQueuedTurnIdRef:Z_,thoughtExpandedRef:H_,draftExpandedRef:W_}=F8(),[f_,l_]=T({}),[R_,E_]=T(null),[t_,c_]=T(null),[r_,y_]=T(!1),[n_,k_]=T(null),[M0,T0]=T([]),[g0,X0]=T([]),[Z0,v_]=T(null),[N0,u_]=T([]),[e_,z0]=T(!1),[d_,J0]=T(()=>Lj()),f0=a_(()=>M0.find((X)=>X?.chat_jid===$)||null,[M0,$]),J_=a_(()=>g0.find((X)=>X?.chat_jid===$)||f0||null,[f0,g0,$]),D0=J_?.root_chat_jid||f0?.root_chat_jid||$,n0=qj(v),[p0,x]=T(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),n=N0.length,G_=D(new Set),M_=D([]),x_=D(new Set),S_=D(0),R0=D({inFlight:!1,lastAttemptAt:0,turnId:null});G_.current=new Set(N0.map((X)=>X.row_id)),M_.current=N0;let{notificationsEnabled:k$,notificationPermission:a0,toggleNotifications:K$,notify:v0}=Q8(),[y$,Q0]=T(()=>new Set),[A0,Y$]=T(()=>X2("workspaceOpen",!0)),b0=D(null),{editorOpen:E0,tabStripTabs:B2,tabStripActiveId:c0,previewTabs:$2,openEditor:W0,closeEditor:B$,handleTabClose:Q$,handleTabActivate:k0,handleTabCloseOthers:C0,handleTabCloseAll:d0,handleTabTogglePin:U$,handleTabTogglePreview:A$,revealInExplorer:w$}=J8({onTabClosed:(X)=>b0.current?.(X)}),c$=D(null),U0=D(null),h$=D(null),s0=D(null),y0=j0.getDockPanes().length>0,[I0,P$]=T(!1),w0=A(()=>P$((X)=>!X),[]),j2=A(()=>{W0(Q4,{label:"Terminal"})},[W0]),F$=!j&&(E0||y0&&I0);R(()=>{let X=c$.current;if(!X)return;if(U0.current)U0.current.dispose(),U0.current=null;let W=c0;if(!W)return;let J={path:W,mode:"edit"},M=j0.resolve(J)||j0.get("editor");if(!M){X.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let P=M.mount(X,J);U0.current=P,P.onDirtyChange?.((j_)=>{s_.setDirty(W,j_)}),P.onSaveRequest?.(()=>{}),P.onClose?.(()=>{B$()});let p=s_.getViewState(W);if(p&&typeof P.restoreViewState==="function")requestAnimationFrame(()=>P.restoreViewState(p));if(typeof P.onViewStateChange==="function")P.onViewStateChange((j_)=>{s_.saveViewState(W,j_)});return requestAnimationFrame(()=>P.focus()),()=>{if(U0.current===P)P.dispose(),U0.current=null}},[c0,B$]),R(()=>{let X=(W)=>{let J=W.detail?.path;if(J)W0(J)};return document.addEventListener("office-viewer:open-tab",X),document.addEventListener("drawio:open-tab",X),document.addEventListener("csv-viewer:open-tab",X),document.addEventListener("pdf-viewer:open-tab",X),document.addEventListener("image-viewer:open-tab",X),()=>{document.removeEventListener("office-viewer:open-tab",X),document.removeEventListener("drawio:open-tab",X),document.removeEventListener("csv-viewer:open-tab",X),document.removeEventListener("pdf-viewer:open-tab",X),document.removeEventListener("image-viewer:open-tab",X)}},[W0]),R(()=>{let X=h$.current;if(s0.current)s0.current.dispose(),s0.current=null;if(!X||!y0||!I0)return;let W=j0.getDockPanes()[0];if(!W){X.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let J=W.mount(X,{mode:"view"});return s0.current=J,requestAnimationFrame(()=>J.focus?.()),()=>{if(s0.current===J)J.dispose(),s0.current=null}},[y0,I0]);let[f$,Z2]=T({name:"You",avatar_url:null,avatar_background:null}),N2=D(!1),C_=D(!1),F0=D(null),h0=D($),i$=D(new Map),l$=D($),n$=D(0),W$=D(0),u0=D({}),G0=D({name:null,avatar_url:null}),H0=D({currentHashtag:null,searchQuery:null}),G$=D(null),M$=D(null),V$=D(0),H$=D(0),t0=D(0),b$=D(null),e0=D(null),P0=D(null),J$=D(null),d$=D(0),X$=D({title:null,avatarBase:null}),C$=D(null),R$=A(()=>{if(C$.current)clearTimeout(C$.current),C$.current=null;s(null)},[]);A8(30000),R(()=>{return n3()},[]),R(()=>{return u8(q)},[]),R(()=>{Y0("workspaceOpen",String(A0))},[A0]),R(()=>{return f8()},[]),R(()=>{return()=>{R$()}},[R$]),R(()=>{if(!d_){Y0(d4,"");return}Y0(d4,JSON.stringify({question:d_.question||"",answer:d_.answer||"",thinking:d_.thinking||"",error:d_.error||null,status:d_.status||"success"}))},[d_]),R(()=>{u0.current=f_||{}},[f_]),R(()=>{h0.current=$},[$]),R(()=>{G0.current=f$||{name:"You",avatar_url:null,avatar_background:null}},[f$]);let D$=A((X,W,J=null)=>{if(typeof document>"u")return;let M=(X||"").trim()||"PiClaw";if(X$.current.title!==M){document.title=M;let h=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(h&&h.getAttribute("content")!==M)h.setAttribute("content",M);X$.current.title=M}let P=document.getElementById("dynamic-favicon");if(!P)return;let p=P.getAttribute("data-default")||P.getAttribute("href")||"/favicon.ico",j_=W||p,U_=W?`${j_}|${J||""}`:j_;if(X$.current.avatarBase!==U_){let h=W?`${j_}${j_.includes("?")?"&":"?"}v=${J||Date.now()}`:j_;P.setAttribute("href",h),X$.current.avatarBase=U_}},[]),s$=A((X)=>{if(!X)return;H((W)=>W.includes(X)?W:[...W,X])},[]),v$=A((X)=>{H((W)=>W.filter((J)=>J!==X))},[]);b0.current=v$;let o$=A(()=>{H([])},[]),u$=A((X)=>{if(!Array.isArray(X)){H([]);return}let W=[],J=new Set;for(let M of X){if(typeof M!=="string"||!M.trim())continue;let P=M.trim();if(J.has(P))continue;J.add(P),W.push(P)}H(W)},[]),A_=A((X,W=null,J="info",M=3000)=>{R$(),s({title:X,detail:W||null,kind:J||"info"}),C$.current=setTimeout(()=>{s((P)=>P?.title===X?null:P)},M)},[R$]),z2=A((X)=>{let W=w8(X,{editorOpen:E0,resolvePane:(J)=>j0.resolve(J)});if(W.kind==="open"){W0(W.path);return}if(W.kind==="toast")A_(W.title,W.detail,W.level)},[E0,W0,A_]),Q2=A(()=>{let X=c0;if(X)s$(X)},[c0,s$]),m$=A((X)=>{if(!X)return;C((W)=>W.includes(X)?W:[...W,X])},[]),r$=A(async(X,W=null)=>{let J=(P)=>{P.scrollIntoView({behavior:"smooth",block:"center"}),P.classList.add("post-highlight"),setTimeout(()=>P.classList.remove("post-highlight"),2000)},M=document.getElementById("post-"+X);if(M){J(M);return}try{let P=typeof W==="string"&&W.trim()?W.trim():$,j_=(await S1(X,P))?.thread?.[0];if(!j_)return;u((U_)=>{if(!U_)return[j_];if(U_.some((h)=>h.id===j_.id))return U_;return[...U_,j_]}),requestAnimationFrame(()=>{setTimeout(()=>{let U_=document.getElementById("post-"+X);if(U_)J(U_)},50)})}catch(P){console.error("[scrollToMessage] Failed to fetch message",X,P)}},[$]),U2=A((X)=>{C((W)=>W.filter((J)=>J!==X))},[]),Q=A(()=>{C([])},[]),b=A((X)=>{if(!Array.isArray(X)){C([]);return}let W=[],J=new Set;for(let M of X){if(typeof M!=="string"||!M.trim())continue;let P=M.trim();if(J.has(P))continue;J.add(P),W.push(P)}C(W)},[]),S=A((X)=>{let W=typeof X==="string"&&X.trim()?X.trim():"Could not send your message.";A_("Compose failed",W,"error",5000)},[A_]),i=A((X={})=>{let W=Date.now();if(B_.current=W,X.running)p_.current=!0,z0((J)=>J?J:!0);if(X.clearSilence)Q_.current=0},[z0]),z_=A(()=>{if(J$.current)clearTimeout(J$.current),J$.current=null;d$.current=0},[]);R(()=>()=>{z_()},[z_]);let D_=A(()=>{z_(),o((X)=>{if(!X)return X;if(!(X.last_activity||X.lastActivity))return X;let{last_activity:W,lastActivity:J,...M}=X;return M})},[z_]),I_=A((X)=>{if(!X)return;z_();let W=Date.now();d$.current=W,o({type:X.type||"active",last_activity:!0}),J$.current=setTimeout(()=>{if(d$.current!==W)return;o((J)=>{if(!J||!(J.last_activity||J.lastActivity))return J;return null})},E8)},[z_]),K0=A(()=>{p_.current=!1,z0(!1),B_.current=null,Q_.current=0,w_.current="",T_.current="",P_.current=null,e0.current=null,Y_.current=null,Z_.current=null,F0.current=null,R0.current={inFlight:!1,lastAttemptAt:0,turnId:null},z_(),g_(null),b_(null),H_.current=!1,W_.current=!1},[z_,g_,b_,z0]),x0=A((X)=>{if(!S8({remainingQueueCount:X,currentTurnId:Y_.current,isAgentTurnActive:e_}))return;Z_.current=null,b_(null)},[e_,b_]),m_=A(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),i0=A(()=>({agentStatus:e,agentDraft:K_?{...K_}:{text:"",totalLines:0},agentPlan:X_||"",agentThought:__?{...__}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:O_,steerQueuedTurnId:L_,isAgentTurnActive:Boolean(e_),followupQueueItems:Array.isArray(N0)?N0.map((X)=>({...X})):[],activeModel:R_,activeThinkingLevel:t_,supportsThinking:Boolean(r_),activeModelUsage:n_,contextUsage:Z0,isAgentRunning:Boolean(p_.current),wasAgentActive:Boolean(C_.current),draftBuffer:w_.current||"",thoughtBuffer:T_.current||"",lastAgentEvent:B_.current||null,lastSilenceNotice:Q_.current||0,lastAgentResponse:e0.current||null,currentTurnIdRef:Y_.current||null,steerQueuedTurnIdRef:Z_.current||null,thoughtExpanded:Boolean(H_.current),draftExpanded:Boolean(W_.current),agentStatusRef:F0.current||null,silentRecovery:{...R0.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[R_,n_,t_,K_,X_,e,__,Z0,O_,N0,e_,N_,L_,r_]),I$=A((X)=>{let W=X||m_();z_(),p_.current=Boolean(W.isAgentRunning),C_.current=Boolean(W.wasAgentActive),z0(Boolean(W.isAgentTurnActive)),B_.current=W.lastAgentEvent||null,Q_.current=Number(W.lastSilenceNotice||0),w_.current=W.draftBuffer||"",T_.current=W.thoughtBuffer||"",P_.current=W.pendingRequest||null,e0.current=W.lastAgentResponse||null,Y_.current=W.currentTurnIdRef||null,Z_.current=W.steerQueuedTurnIdRef||null,F0.current=W.agentStatusRef||null,R0.current=W.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},H_.current=Boolean(W.thoughtExpanded),W_.current=Boolean(W.draftExpanded),o(W.agentStatus||null),c(W.agentDraft?{...W.agentDraft}:{text:"",totalLines:0}),o_(W.agentPlan||""),t(W.agentThought?{...W.agentThought}:{text:"",totalLines:0}),$_(W.pendingRequest||null),g_(W.currentTurnId||null),b_(W.steerQueuedTurnId||null),u_(Array.isArray(W.followupQueueItems)?W.followupQueueItems.map((J)=>({...J})):[]),E_(W.activeModel||null),c_(W.activeThinkingLevel||null),y_(Boolean(W.supportsThinking)),k_(W.activeModelUsage??null),v_(W.contextUsage??null)},[z_,m_,g_,u_,z0,b_]),S0=A((X)=>{if(!X)return;if(Y_.current===X)return;Y_.current=X,R0.current={inFlight:!1,lastAttemptAt:0,turnId:X},g_(X),Z_.current=null,b_(null),w_.current="",T_.current="",c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),$_(null),P_.current=null,e0.current=null,H_.current=!1,W_.current=!1},[g_,b_]),q$=A((X)=>{if(typeof document<"u"){let h=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&h)return}let W=e0.current;if(!W||!W.post)return;if(X&&W.turnId&&W.turnId!==X)return;let J=W.post;if(J.id&&b$.current===J.id)return;let M=String(J?.data?.content||"").trim();if(!M)return;b$.current=J.id||b$.current,e0.current=null;let P=M.replace(/\s+/g," ").slice(0,200),p=u0.current||{},U_=(J?.data?.agent_id?p[J.data.agent_id]:null)?.name||"Pi";v0(U_,P)},[v0]),F2=A(async(X,W)=>{if(X!=="thought"&&X!=="draft")return;let J=Y_.current;if(X==="thought"){if(H_.current=W,J)try{await h8(J,"thought",W)}catch(M){console.warn("Failed to update thought visibility:",M)}if(!W)return;try{let M=J?await c8(J,"thought"):null;if(M?.text)T_.current=M.text;t((P)=>({...P||{text:"",totalLines:0},fullText:T_.current||P?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:P?.totalLines||0}))}catch(M){console.warn("Failed to fetch full thought:",M)}return}if(W_.current=W,J)try{await h8(J,"draft",W)}catch(M){console.warn("Failed to update draft visibility:",M)}if(!W)return;try{let M=J?await c8(J,"draft"):null;if(M?.text)w_.current=M.text;c((P)=>({...P||{text:"",totalLines:0},fullText:w_.current||P?.fullText||"",totalLines:Number.isFinite(M?.total_lines)?M.total_lines:P?.totalLines||0}))}catch(M){console.warn("Failed to fetch full draft:",M)}},[]),L=D(null),U=A(()=>{let X=G$.current;if(!X)return;if(!(Math.abs(X.scrollTop)>150))X.scrollTop=0},[]);L.current=U;let k=A((X)=>{let W=G$.current;if(!W||typeof X!=="function"){X?.();return}let{currentHashtag:J,searchQuery:M}=H0.current||{},P=!(M&&!J),p=P?W.scrollHeight-W.scrollTop:W.scrollTop;X(),requestAnimationFrame(()=>{let j_=G$.current;if(!j_)return;if(P){let U_=Math.max(j_.scrollHeight-p,0);j_.scrollTop=U_}else{let U_=Math.max(j_.scrollHeight-j_.clientHeight,0),h=Math.min(p,U_);j_.scrollTop=h}})},[]),y=A((X)=>{let W=G$.current;if(!W||typeof X!=="function"){X?.();return}let J=W.scrollTop;X(),requestAnimationFrame(()=>{let M=G$.current;if(!M)return;let P=Math.max(M.scrollHeight-M.clientHeight,0);M.scrollTop=Math.min(J,P)})},[]),g="Queued as a follow-up (one-at-a-time).",a="⁣",r=A((X)=>{if(!X||!Array.isArray(X))return X;let W=G_.current,J=new Set(W),M=X.filter((P)=>{if(J.has(P?.id))return!1;if(P?.data?.is_bot_message){let p=P?.data?.content;if(p===g||p===a)return!1}return!0});return M.length===X.length?X:M},[]),{posts:d,setPosts:u,hasMore:V_,setHasMore:q0,hasMoreRef:E$,loadPosts:L0,refreshTimeline:m0,loadMore:n8,loadMoreRef:L1}=U8({preserveTimelineScroll:k,preserveTimelineScrollTop:y,chatJid:$}),K2=a_(()=>r(d),[d,N0,r]),v2=A(()=>{let X=V0.current;if(!X)return;u((W)=>W?W.filter((J)=>J.id!==X):W),V0.current=null},[u]),{handleSplitterMouseDown:d8,handleSplitterTouchStart:s8,handleEditorSplitterMouseDown:o8,handleEditorSplitterTouchStart:r8,handleDockSplitterMouseDown:a8,handleDockSplitterTouchStart:t8}=H8({appShellRef:M$,sidebarWidthRef:V$,editorWidthRef:H$,dockHeightRef:t0}),s4=A(()=>{if(!p_.current)return;p_.current=!1,Q_.current=0,B_.current=null,Y_.current=null,g_(null),H_.current=!1,W_.current=!1;let X=(w_.current||"").trim();if(w_.current="",T_.current="",c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),$_(null),P_.current=null,e0.current=null,!X){o({type:"error",title:"Response stalled - No content received"});return}let J=`${X}${`

⚠️ Response may be incomplete - the model stopped responding`}`,M=Date.now(),P=new Date().toISOString(),p={id:M,timestamp:P,data:{type:"agent_response",content:J,agent_id:"default",is_local_stall:!0}};V0.current=M,u((j_)=>j_?f2([...j_,p]):[p]),L.current?.(),o(null)},[g_]);R(()=>{H0.current={currentHashtag:V,searchQuery:Y}},[V,Y]);let h_=A(()=>{let X=++S_.current,W=$;Hj(W).then((J)=>{if(X!==S_.current)return;if(h0.current!==W)return;let M=x_.current,P=Array.isArray(J?.items)?J.items.map((p)=>({...p})).filter((p)=>!M.has(p.row_id)):[];if(P.length){u_((p)=>{if(p.length===P.length&&p.every((j_,U_)=>j_.row_id===P[U_].row_id))return p;return P});return}M.clear(),x0(0),u_((p)=>p.length===0?p:[])}).catch(()=>{if(X!==S_.current)return;if(h0.current!==W)return;u_((J)=>J.length===0?J:[])})},[x0,$,u_]),_$=A(async()=>{let X=$;try{let W=await n4(X);if(h0.current!==X)return;if(W)v_(W)}catch(W){if(h0.current!==X)return;console.warn("Failed to fetch agent context:",W)}},[$]),$$=A(async()=>{let X=$;try{let W=await i8(X);if(h0.current!==X)return null;if(!W||W.status!=="active"||!W.data){if(C_.current){let{currentHashtag:P,searchQuery:p}=H0.current||{};if(!P&&!p)m0()}return C_.current=!1,K0(),F0.current=null,o(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),$_(null),P_.current=null,W??null}C_.current=!0;let J=W.data;F0.current=J;let M=J.turn_id||J.turnId;if(M)S0(M);if(i({running:!0,clearSilence:!0}),D_(),o(J),W.thought&&W.thought.text)t((P)=>{if(P&&P.text&&P.text.length>=W.thought.text.length)return P;return T_.current=W.thought.text,{text:W.thought.text,totalLines:W.thought.totalLines||0}});if(W.draft&&W.draft.text)c((P)=>{if(P&&P.text&&P.text.length>=W.draft.text.length)return P;return w_.current=W.draft.text,{text:W.draft.text,totalLines:W.draft.totalLines||0}});return W}catch(W){return console.warn("Failed to fetch agent status:",W),null}},[K0,D_,i,m0,S0]),O1=A(async()=>{if(!p_.current)return null;if(P_.current)return null;let X=Y_.current||null,W=R0.current,J=Date.now();if(W.inFlight)return null;if(W.turnId===X&&J-W.lastAttemptAt<p4)return null;W.inFlight=!0,W.lastAttemptAt=J,W.turnId=X;try{let{currentHashtag:M,searchQuery:P}=H0.current||{};if(!M&&!P)await m0();return await h_(),await $$()}finally{W.inFlight=!1}},[$$,h_,m0]);R(()=>{let X=Math.min(1000,Math.max(100,Math.floor(g4/2))),W=setInterval(()=>{if(!p_.current)return;if(P_.current)return;let J=B_.current;if(!J)return;let M=Date.now(),P=M-J,p=b2(F0.current);if(P>=D8){if(!p)o({type:"waiting",title:"Re-syncing after a quiet period…"});O1();return}if(P>=g4){if(M-Q_.current>=p4){if(!p){let j_=Math.floor(P/1000);o({type:"waiting",title:`Waiting for model… No events for ${j_}s`})}Q_.current=M,O1()}}},X);return()=>clearInterval(W)},[O1]);let e8=A((X)=>{if(K(X),X!=="connected"){o(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),$_(null),P_.current=null,K0();return}if(!N2.current){N2.current=!0,$$(),_$();return}let{currentHashtag:W,searchQuery:J}=H0.current;if(!W&&!J)m0();$$(),h_(),_$()},[K0,m0,$$,h_,_$]),_9=A(async(X)=>{O(X),u(null),await L0(X)},[L0]),$9=A(async()=>{O(null),F(null),u(null),await L0()},[L0]),j9=A(async(X,W=v)=>{if(!X||!X.trim())return;let J=W==="root"||W==="all"?W:"current";f(J),F(X.trim()),O(null),u(null);try{let M=await g8(X.trim(),50,0,$,J,D0);u(M.results),q0(!1)}catch(M){console.error("Failed to search:",M),u([])}},[$,D0,v]),Z9=A(()=>{m(!0),F(null),O(null),f("current"),u([])},[]),N9=A(()=>{m(!1),F(null),L0()},[L0]),Aj=A(()=>{},[]),z9=A(async(X)=>{if(!X)return;let W=X.id,J=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():$,M=K2?.filter((p)=>p?.data?.thread_id===W&&p?.id!==W).length||0;if(M>0){if(!window.confirm(`Delete this message and its ${M} replies?`))return}let P=(p)=>{if(!p.length)return;Q0((U_)=>{let h=new Set(U_);return p.forEach((q_)=>h.add(q_)),h}),setTimeout(()=>{if(y(()=>{u((U_)=>U_?U_.filter((h)=>!p.includes(h.id)):U_)}),Q0((U_)=>{let h=new Set(U_);return p.forEach((q_)=>h.delete(q_)),h}),E$.current)L1.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let p=await p8(W,M>0,J);if(p?.ids?.length)P(p.ids)}catch(p){let j_=p?.message||"";if(M===0&&j_.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let h=await p8(W,!0,J);if(h?.ids?.length)P(h.ids);return}console.error("Failed to delete post:",p),alert(`Failed to delete message: ${j_}`)}},[$,K2,y]),o4=A(async()=>{try{let X=await Oj();l_(k8(X));let W=X?.user||{};Z2((M)=>{let P=typeof W.name==="string"&&W.name.trim()?W.name.trim():"You",p=typeof W.avatar_url==="string"?W.avatar_url.trim():null,j_=typeof W.avatar_background==="string"&&W.avatar_background.trim()?W.avatar_background.trim():null;if(M.name===P&&M.avatar_url===p&&M.avatar_background===j_)return M;return{name:P,avatar_url:p,avatar_background:j_}});let J=(X?.agents||[]).find((M)=>M.id==="default");D$(J?.name,J?.avatar_url)}catch(X){console.warn("Failed to load agents:",X)}try{let X=$,W=await n4(X);if(h0.current!==X)return;if(W)v_(W)}catch{}},[D$,$]);R(()=>{o4();let X=q2("sidebarWidth",null),W=Number.isFinite(X)?Math.min(Math.max(X,160),600):280;if(V$.current=W,M$.current)M$.current.style.setProperty("--sidebar-width",`${W}px`)},[o4]);let B1=e_||e!==null,r4=A((X)=>{if(!X||typeof X!=="object")return;let W=X.agent_id;if(!W)return;let{agent_name:J,agent_avatar:M}=X;if(!J&&M===void 0)return;let P=u0.current?.[W]||{id:W},p=P.name||null,j_=P.avatar_url??P.avatarUrl??P.avatar??null,U_=!1,h=!1;if(J&&J!==P.name)p=J,h=!0;if(M!==void 0){let q_=typeof M==="string"?M.trim():null,_0=typeof j_==="string"?j_.trim():null,F_=q_||null;if(F_!==(_0||null))j_=F_,U_=!0}if(!h&&!U_)return;if(l_((q_)=>{let F_={...q_[W]||{id:W}};if(h)F_.name=p;if(U_)F_.avatar_url=j_;return{...q_,[W]:F_}}),W==="default")D$(p,j_,U_?Date.now():null)},[D$]),a4=A((X)=>{if(!X||typeof X!=="object")return;let W=X.user_name??X.userName,J=X.user_avatar??X.userAvatar,M=X.user_avatar_background??X.userAvatarBackground;if(W===void 0&&J===void 0&&M===void 0)return;Z2((P)=>{let p=typeof W==="string"&&W.trim()?W.trim():P.name||"You",j_=J===void 0?P.avatar_url:typeof J==="string"&&J.trim()?J.trim():null,U_=M===void 0?P.avatar_background:typeof M==="string"&&M.trim()?M.trim():null;if(P.name===p&&P.avatar_url===j_&&P.avatar_background===U_)return P;return{name:p,avatar_url:j_,avatar_background:U_}})},[]),Q1=A((X)=>{if(!X||typeof X!=="object")return;let W=X.model??X.current;if(W!==void 0)E_(W);if(X.thinking_level!==void 0)c_(X.thinking_level??null);if(X.supports_thinking!==void 0)y_(Boolean(X.supports_thinking));if(X.provider_usage!==void 0)k_(X.provider_usage??null)},[]),H2=A(()=>{let X=$;Bj(X).then((W)=>{if(h0.current!==X)return;if(W)Q1(W)}).catch(()=>{})},[Q1,$]),o0=A(()=>{Qj().then((X)=>{let W=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.agent_name==="string"&&J.agent_name.trim()):[];T0(W)}).catch(()=>{})},[]),l0=A(()=>{l8(D0).then((X)=>{let W=Array.isArray(X?.chats)?X.chats.filter((J)=>J&&typeof J.chat_jid==="string"&&typeof J.agent_name==="string"):[];X0(W)}).catch(()=>{})},[D0]),K9=A((X)=>{let W=X?.row_id;if(W==null)return;x_.current.add(W),u_((J)=>J.filter((M)=>M?.row_id!==W)),Jj(W,l4($)).then(()=>{h_()}).catch((J)=>{console.warn("[queue] Failed to steer queued item:",J),A_("Failed to steer message","The queued message could not be sent as steering.","warning"),x_.current.delete(W),h_()})},[$,h_,u_,A_]),Y9=A((X)=>{let W=X?.row_id;if(W==null)return;let J=M_.current.filter((M)=>M?.row_id!==W).length;x_.current.add(W),x0(J),u_((M)=>M.filter((P)=>P?.row_id!==W)),Dj(W,l4($)).then(()=>{h_()}).catch((M)=>{console.warn("[queue] Failed to remove queued item:",M),A_("Failed to remove message","The queued message could not be removed.","warning"),x_.current.delete(W),h_()})},[x0,$,h_,u_,A_]),U1=A((X)=>{if(!X||typeof X!=="object")return;if(o0(),l0(),X?.queued==="followup"||X?.queued==="steer"){h_();return}let W=X?.command;if(W&&typeof W==="object"&&(W?.queued_followup||W?.queued_steer))h_()},[o0,l0,h_]),F1=A(()=>{if(P0.current)P0.current.abort(),P0.current=null;J0(null)},[]),u2=A(async(X)=>{let W=String(X||"").trim();if(!W)return A_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(P0.current)P0.current.abort();let J=new AbortController;P0.current=J,J0({question:W,answer:"",thinking:"",error:null,model:null,status:"running"});try{let M=await Ej(W,{signal:J.signal,chatJid:j6($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(P,p)=>{if(P==="side_prompt_start")J0((j_)=>j_?{...j_,status:"running"}:j_)},onThinkingDelta:(P)=>{J0((p)=>p?{...p,thinking:`${p.thinking||""}${P||""}`}:p)},onTextDelta:(P)=>{J0((p)=>p?{...p,answer:`${p.answer||""}${P||""}`}:p)}});if(P0.current!==J)return!0;J0((P)=>P?{...P,answer:M?.result||P.answer||"",thinking:M?.thinking||P.thinking||"",model:M?.model||null,status:"success",error:null}:P)}catch(M){if(J.signal.aborted)return!0;J0((P)=>P?{...P,status:"error",error:M?.payload?.error||M?.message||"BTW request failed."}:P)}finally{if(P0.current===J)P0.current=null}return!0},[$,A_]),W9=A(async({content:X})=>{let W=$6(X);if(!W)return!1;if(W.type==="help")return A_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(W.type==="clear")return F1(),A_("BTW cleared","Closed the side conversation panel.","info"),!0;if(W.type==="ask")return await u2(W.question),!0;return!1},[F1,u2,A_]),G9=A(()=>{if(d_?.question)u2(d_.question)},[d_,u2]),V9=A(async()=>{let X=z6(d_);if(!X)return;try{let W=await G2("default",X,null,[],B1?"queue":null,$);U1(W),A_(W?.queued==="followup"?"BTW queued":"BTW injected",W?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(W){A_("BTW inject failed",W?.message||"Could not inject BTW answer into chat.","warning")}},[d_,U1,B1,A_]),J2=A(()=>{H2(),o0(),l0(),h_(),_$()},[H2,o0,l0,h_,_$]);R(()=>{J2();let X=setInterval(()=>{H2(),o0(),l0(),h_()},60000);return()=>clearInterval(X)},[J2,H2,o0,l0,h_]),R(()=>{l0()},[l0]),R(()=>{let X=!1;if(u(null),V)return L0(V),()=>{X=!0};if(Y)return g8(Y,50,0,$,v,D0).then((W)=>{if(X)return;u(W.results),q0(!1)}).catch((W)=>{if(X)return;console.error("Failed to search:",W),u([]),q0(!1)}),()=>{X=!0};return L0(),()=>{X=!0}},[$,V,Y,v,D0,L0,q0,u]),R(()=>{let X=l$.current||$;i$.current.set(X,i0())},[$,i0]),R(()=>{let X=l$.current||$;if(X===$)return;i$.current.set(X,i0()),l$.current=$,x_.current.clear(),I$(i$.current.get($)||null),h_(),$$(),_$()},[$,$$,_$,h_,I$,i0]);let X9=A(()=>{let{currentHashtag:X,searchQuery:W}=H0.current||{};if(!X&&!W)m0();J2()},[J2,m0]),H1=A((X,W)=>{let J=W?.turn_id,M=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():null,p=M?M===$:X==="connected"||X==="workspace_update";if(p)r4(W),a4(W);if(X==="ui_theme"){d3(W);return}if(X?.startsWith("agent_")){if(!(X==="agent_draft_delta"||X==="agent_thought_delta"||X==="agent_draft"||X==="agent_thought"))D_()}if(X==="connected"){o(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),$_(null),P_.current=null,K0();let h=$;i8(h).then((F_)=>{if(h0.current!==h)return;if(!F_||F_.status!=="active"||!F_.data)return;let Y2=F_.data,_3=Y2.turn_id||Y2.turnId;if(_3)S0(_3);if(i({clearSilence:!0}),I_(Y2),F_.thought&&F_.thought.text)T_.current=F_.thought.text,t({text:F_.thought.text,totalLines:F_.thought.totalLines||0});if(F_.draft&&F_.draft.text)w_.current=F_.draft.text,c({text:F_.draft.text,totalLines:F_.draft.totalLines||0})}).catch((F_)=>{console.warn("Failed to fetch agent status:",F_)});let{currentHashtag:q_,searchQuery:_0}=H0.current||{};if(!q_&&!_0)m0();J2();return}if(X==="agent_status"){if(!p){if(W?.type==="done"||W?.type==="error")o0(),l0();return}if(W.type==="done"||W.type==="error"){if(J&&Y_.current&&J!==Y_.current)return;if(W.type==="done"){q$(J||Y_.current);let{currentHashtag:h,searchQuery:q_}=H0.current||{};if(!h&&!q_)m0();if(W.context_usage)v_(W.context_usage)}if(C_.current=!1,K0(),x_.current.clear(),o0(),h_(),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),$_(null),W.type==="error")o({type:"error",title:W.title||"Agent error"}),setTimeout(()=>o(null),8000);else o(null)}else{if(J)S0(J);if(i({running:!0,clearSilence:!0}),W.type==="thinking")w_.current="",T_.current="",c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0});F0.current=W,o((h)=>{if(h&&h.type===W.type&&h.title===W.title)return h;return W})}return}if(X==="agent_steer_queued"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;let h=J||Y_.current;if(!h)return;Z_.current=h,b_(h);return}if(X==="agent_followup_queued"){if(!p)return;let h=W?.row_id,q_=W?.content;if(h!=null&&typeof q_==="string"&&q_.trim())u_((_0)=>{if(_0.some((F_)=>F_?.row_id===h))return _0;return[..._0,{row_id:h,content:q_,timestamp:W?.timestamp||null,thread_id:W?.thread_id??null}]});h_();return}if(X==="agent_followup_consumed"){if(!p)return;let h=W?.row_id;if(h!=null){let q_=M_.current.filter((_0)=>_0.row_id!==h).length;x0(q_),u_((_0)=>_0.filter((F_)=>F_.row_id!==h))}h_(),m0();return}if(X==="agent_followup_removed"){if(!p)return;let h=W?.row_id;if(h!=null){let q_=M_.current.filter((_0)=>_0.row_id!==h).length;x_.current.add(h),x0(q_),u_((_0)=>_0.filter((F_)=>F_.row_id!==h))}h_();return}if(X==="agent_draft_delta"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)S0(J);if(i({running:!0,clearSilence:!0}),W?.reset)w_.current="";if(W?.delta)w_.current+=W.delta;let h=Date.now();if(!n$.current||h-n$.current>=100){n$.current=h;let q_=w_.current,_0=c4(q_);if(W_.current)c((F_)=>({text:F_?.text||"",totalLines:_0,fullText:q_}));else c({text:q_,totalLines:_0})}return}if(X==="agent_draft"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)S0(J);i({running:!0,clearSilence:!0});let h=W.text||"",q_=W.mode||(W.kind==="plan"?"replace":"append"),_0=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(W.kind==="plan")if(q_==="replace")o_(h);else o_((F_)=>(F_||"")+h);else if(!W_.current)w_.current=h,c({text:h,totalLines:_0});return}if(X==="agent_thought_delta"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)S0(J);if(i({running:!0,clearSilence:!0}),W?.reset)T_.current="";if(typeof W?.delta==="string")T_.current+=W.delta;let h=Date.now();if(H_.current&&(!W$.current||h-W$.current>=100)){W$.current=h;let q_=T_.current;t((_0)=>({text:_0?.text||"",totalLines:c4(q_),fullText:q_}))}return}if(X==="agent_thought"){if(!p)return;if(J&&Y_.current&&J!==Y_.current)return;if(J&&!Y_.current)S0(J);i({running:!0,clearSilence:!0});let h=W.text||"",q_=Number.isFinite(W.total_lines)?W.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!H_.current)T_.current=h,t({text:h,totalLines:q_});return}if(X==="model_changed"){if(!p)return;if(W?.model!==void 0)E_(W.model);if(W?.thinking_level!==void 0)c_(W.thinking_level??null);if(W?.supports_thinking!==void 0)y_(Boolean(W.supports_thinking));let h=$;n4(h).then((q_)=>{if(h0.current!==h)return;if(q_)v_(q_)}).catch(()=>{});return}if(X==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:W}));return}if(R8(X)){if(!p)return;if(v8(X,W),X==="extension_ui_notify"&&typeof W?.message==="string")A_(W.message,null,W?.type||"info");if(X==="extension_ui_error"&&typeof W?.error==="string")A_("Extension UI error",W.error,"error",5000);return}let{currentHashtag:j_,searchQuery:U_}=H0.current;if(X==="agent_response"){if(!p)return;v2(),e0.current={post:W,turnId:Y_.current}}if(!j_&&!U_&&p&&(X==="new_post"||X==="new_reply"||X==="agent_response"))u((h)=>{if(!h)return[W];if(h.some((q_)=>q_.id===W.id))return h;return[...h,W]}),L.current?.();if(X==="interaction_updated"){if(!p)return;u((h)=>{if(!h)return h;if(!h.some((q_)=>q_.id===W.id))return h;return h.map((q_)=>q_.id===W.id?W:q_)})}if(X==="interaction_deleted"){if(!p)return;let h=W?.ids||[];if(h.length){y(()=>{u((F_)=>F_?F_.filter((Y2)=>!h.includes(Y2.id)):F_)});let{currentHashtag:q_,searchQuery:_0}=H0.current;if(E$.current&&!q_&&!_0)L1.current?.({preserveScroll:!0,preserveMode:"top"})}}},[K0,D_,$,L1,i,q$,y,o0,l0,m0,v2,S0,I_,r4,a4,H2,h_,u_]);R(()=>{if(typeof window>"u")return;let X=window.__PICLAW_TEST_API||{};return X.emit=H1,X.reset=()=>{v2(),K0(),o(null),c({text:"",totalLines:0}),o_(""),t({text:"",totalLines:0}),$_(null)},X.finalize=()=>s4(),window.__PICLAW_TEST_API=X,()=>{if(window.__PICLAW_TEST_API===X)window.__PICLAW_TEST_API=void 0}},[K0,s4,H1,v2]),B8({handleSseEvent:H1,handleConnectionStatusChange:e8,loadPosts:L0,onWake:X9,chatJid:$}),R(()=>{if(!K2||K2.length===0)return;let X=location.hash;if(!X||!X.startsWith("#msg-"))return;let W=X.slice(5);r$(W),history.replaceState(null,"",location.pathname+location.search)},[K2,r$]);let J1=e!==null;R(()=>{if(z!=="connected")return;let W=setInterval(()=>{let{currentHashtag:J,searchQuery:M}=H0.current||{},P=!J&&!M;if(J1){if(P)m0();h_(),$$(),_$()}else{if(P)m0();$$(),_$()}},J1?15000:60000);return()=>clearInterval(W)},[z,J1,$$,_$,h_,m0]),R(()=>{return m8(()=>{$$(),_$(),h_()})},[$$,_$,h_]);let q9=A(()=>{Y$((X)=>!X)},[]),t4=A((X)=>{if(typeof window>"u")return;let W=String(X||"").trim();if(!W||W===$)return;let J=R2(window.location.href,W,{chatOnly:j});window.location.assign(J)},[j,$]),e4=A(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;let X=J_.agent_name||"",W=J_.display_name||"",J=window.prompt("Branch display name",W);if(J===null)return;let M=window.prompt("Agent handle (without @)",X);if(M===null)return;try{let P=await Uj(J_.chat_jid,{displayName:J,agentName:M});await Promise.allSettled([o0(),l0()]);let p=P?.branch?.agent_name||String(M||"").trim()||X;A_("Branch renamed",`This chat is now @${p}.`,"info",3500)}catch(P){let p=P instanceof Error?P.message:String(P||"Could not rename branch.");A_("Could not rename branch",p||"Could not rename branch.","warning",5000)}},[J_,o0,l0,A_]),L9=A(async()=>{if(typeof window>"u"||!J_?.chat_jid)return;if(J_.chat_jid===(J_.root_chat_jid||J_.chat_jid)){A_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let W=J_.display_name||`@${J_.agent_name||J_.chat_jid}`;if(!window.confirm(`Prune ${W}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await Fj(J_.chat_jid),await Promise.allSettled([o0(),l0()]);let M=J_.root_chat_jid||"web:default";A_("Branch pruned",`${W} has been archived.`,"info",3000);let P=R2(window.location.href,M,{chatOnly:j});window.location.assign(P)}catch(M){let P=M instanceof Error?M.message:String(M||"Could not prune branch.");A_("Could not prune branch",P||"Could not prune branch.","warning",5000)}},[j,J_,o0,l0,A_]);R(()=>{if(!Z||typeof window>"u")return;let X=!1;return(async()=>{try{x({status:"running",message:"Preparing a new chat branch…"});let W=await o2(N);if(X)return;let J=W?.branch,M=typeof J?.chat_jid==="string"&&J.chat_jid.trim()?J.chat_jid.trim():null;if(!M)throw Error("Branch fork did not return a chat id.");let P=R2(window.location.href,M,{chatOnly:!0});window.location.replace(P)}catch(W){if(X)return;x({status:"error",message:i4(W)})}})(),()=>{X=!0}},[Z,N]);let O9=A(async()=>{if(typeof window>"u"||G)return;let X=P8($);if(!X){A_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(X.mode==="tab"){let J=x8(window.location.href,$,{chatOnly:!0});if(!window.open(J,X.target))A_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let W=M8(X);if(!W){A_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}b8(W,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let M=(await o2($))?.branch,P=typeof M?.chat_jid==="string"&&M.chat_jid.trim()?M.chat_jid.trim():null;if(!P)throw Error("Branch fork did not return a chat id.");try{let j_=await f1();T0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}try{let j_=await l8(D0);X0(Array.isArray(j_?.chats)?j_.chats:[])}catch{}let p=R2(window.location.href,P,{chatOnly:!0});C8(W,p)}catch(J){I8(W),A_("Could not open branch window",i4(J),"error",5000)}},[$,D0,G,A_]);R(()=>{if(!E0)return;if(typeof window>"u")return;let X=M$.current;if(!X)return;if(!H$.current){let W=q2("editorWidth",null),J=V$.current||280;H$.current=Number.isFinite(W)?W:J}if(X.style.setProperty("--editor-width",`${H$.current}px`),!t0.current){let W=q2("dockHeight",null);t0.current=Number.isFinite(W)?W:200}X.style.setProperty("--dock-height",`${t0.current}px`)},[E0]),R(()=>{if(!y0||j)return;let X=(W)=>{if(W.ctrlKey&&W.key==="`")W.preventDefault(),w0()};return document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)},[w0,y0,j]);let B9=Boolean(L_&&L_===(e?.turn_id||O_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${p0.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${p0.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${A0?"":" workspace-collapsed"}${E0?" editor-open":""}${j?" chat-only":""}`} ref=${M$}>
            ${!j&&B`
                <${V8}
                    onFileSelect=${s$}
                    visible=${A0}
                    active=${A0||E0}
                    onOpenEditor=${W0}
                    onOpenTerminalTab=${j2}
                    onToggleTerminal=${y0?w0:void 0}
                    terminalVisible=${Boolean(y0&&I0)}
                />
                <button
                    class=${`workspace-toggle-tab${A0?" open":" closed"}`}
                    onClick=${q9}
                    title=${A0?"Hide workspace":"Show workspace"}
                    aria-label=${A0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${d8} onTouchStart=${s8}></div>
            `}
            ${F$&&B`
                <div class="editor-pane-container">
                    ${E0&&B`
                        <${q8}
                            tabs=${B2}
                            activeId=${c0}
                            onActivate=${k0}
                            onClose=${Q$}
                            onCloseOthers=${C0}
                            onCloseAll=${d0}
                            onTogglePin=${U$}
                            onTogglePreview=${A$}
                            previewTabs=${$2}
                            onToggleDock=${y0?w0:void 0}
                            dockVisible=${y0&&I0}
                        />
                    `}
                    ${E0&&B`<div class="editor-pane-host" ref=${c$}></div>`}
                    ${E0&&c0&&$2.has(c0)&&B`
                        <${O8}
                            getContent=${()=>U0.current?.getContent?.()}
                            path=${c0}
                            onClose=${()=>A$(c0)}
                        />
                    `}
                    ${y0&&I0&&B`<div class="dock-splitter" onMouseDown=${a8} onTouchStart=${t8}></div>`}
                    ${y0&&B`<div class=${`dock-panel${I0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${w0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${h$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${o8} onTouchStart=${r8}></div>
            `}
            <div class="container">
                ${Y&&y8()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${J_?.display_name||J_?.agent_name?`@${J_?.agent_name||$}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${J_?.display_name||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${g0.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(X)=>t4(X.currentTarget.value)}
                                    >
                                        ${g0.map((X)=>B`
                                            <option key=${X.chat_jid} value=${X.chat_jid}>
                                                ${`@${X.agent_name}${X.display_name?` — ${X.display_name}`:""}${X.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${J_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${e4}
                                    title="Rename this branch"
                                    aria-label="Rename this branch"
                                >
                                    Rename
                                </button>
                            `}
                            ${J_?.chat_jid&&J_.chat_jid!==(J_.root_chat_jid||J_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${L9}
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
                ${(V||Y)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${$9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${V?`#${V}`:`Search: ${Y} · ${n0}`}</span>
                    </div>
                `}
                <${b6}
                    posts=${K2}
                    hasMore=${V_}
                    onLoadMore=${n8}
                    timelineRef=${G$}
                    onHashtagClick=${_9}
                    onMessageRef=${m$}
                    onScrollToMessage=${r$}
                    onFileRef=${z2}
                    onPostClick=${void 0}
                    onDeletePost=${z9}
                    emptyMessage=${V?`No posts with #${V}`:Y?`No results for "${Y}"`:void 0}
                    agents=${f_}
                    user=${f$}
                    reverse=${!(Y&&!V)}
                    removingPostIds=${y$}
                    searchQuery=${Y}
                />
                <${L6}
                    status=${e}
                    draft=${K_}
                    plan=${X_}
                    thought=${__}
                    pendingRequest=${N_}
                    intent=${l}
                    turnId=${O_}
                    steerQueued=${B9}
                    onPanelToggle=${F2}
                />
                <${K6}
                    session=${d_}
                    onClose=${F1}
                    onRetry=${G9}
                    onInject=${V9}
                />
                <${R3}
                    onPost=${()=>{L0(),U()}}
                    onFocus=${U}
                    searchMode=${w}
                    searchScope=${v}
                    onSearch=${j9}
                    onSearchScopeChange=${f}
                    onEnterSearch=${Z9}
                    onExitSearch=${N9}
                    fileRefs=${E}
                    onRemoveFileRef=${v$}
                    onClearFileRefs=${o$}
                    onSetFileRefs=${u$}
                    messageRefs=${I}
                    onRemoveMessageRef=${U2}
                    onClearMessageRefs=${Q}
                    onSetMessageRefs=${b}
                    onSwitchChat=${t4}
                    onRenameSession=${e4}
                    activeEditorPath=${j?null:c0}
                    onAttachEditorFile=${j?void 0:Q2}
                    onOpenFilePill=${z2}
                    followupQueueCount=${n}
                    followupQueueItems=${N0}
                    onInjectQueuedFollowup=${K9}
                    onRemoveQueuedFollowup=${Y9}
                    onSubmitIntercept=${W9}
                    onMessageResponse=${U1}
                    onSubmitError=${S}
                    onPopOutChat=${G?void 0:O9}
                    isAgentActive=${B1}
                    activeChatAgents=${M0}
                    currentChatJid=${$}
                    connectionStatus=${z}
                    activeModel=${R_}
                    modelUsage=${n_}
                    thinkingLevel=${t_}
                    supportsThinking=${r_}
                    contextUsage=${Z0}
                    notificationsEnabled=${k$}
                    notificationPermission=${a0}
                    onToggleNotifications=${K$}
                    onModelChange=${E_}
                    onModelStateChange=${Q1}
                />
                <${O6}
                    request=${N_}
                    onRespond=${()=>{$_(null),P_.current=null}}
                />
            </div>
        </div>
    `}function yj(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${kj} locationParams=${_} />`}A3(B`<${yj} />`,document.getElementById("app"));

//# debugId=A39940D76033EB8964756E2164756E21
//# sourceMappingURL=app.bundle.js.map
