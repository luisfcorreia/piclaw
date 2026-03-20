var m9=Object.defineProperty;var g9=(_)=>_;function p9(_,$){this[_]=g9.bind(null,$)}var c9=(_,$)=>{for(var j in $)m9(_,j,{get:$[j],enumerable:!0,configurable:!0,set:p9.bind($,j)})};var G1,e_,T3,h9,r$,D3,S3,f3,R3,l1,p1,c1,i9,K1={},Y1=[],l9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,W1=Array.isArray;function R$(_,$){for(var j in $)_[j]=$[j];return _}function d1(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function v3(_,$,j){var Z,N,K,z={};for(K in $)K=="key"?Z=$[K]:K=="ref"?N=$[K]:z[K]=$[K];if(arguments.length>2&&(z.children=arguments.length>3?G1.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(K in _.defaultProps)z[K]===void 0&&(z[K]=_.defaultProps[K]);return j1(_,z,Z,N,null)}function j1(_,$,j,Z,N){var K={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:N==null?++T3:N,__i:-1,__u:0};return N==null&&e_.vnode!=null&&e_.vnode(K),K}function X1(_){return _.children}function Z1(_,$){this.props=_,this.context=$}function F2(_,$){if($==null)return _.__?F2(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?F2(_):null}function d9(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],N=[],K=R$({},$);K.__v=$.__v+1,e_.vnode&&e_.vnode(K),n1(_.__P,K,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?F2($):j,!!(32&$.__u),N),K.__v=$.__v,K.__.__k[K.__i]=K,p3(Z,K,N),$.__e=$.__=null,K.__e!=j&&u3(K)}}function u3(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),u3(_)}function J3(_){(!_.__d&&(_.__d=!0)&&r$.push(_)&&!z1.__r++||D3!=e_.debounceRendering)&&((D3=e_.debounceRendering)||S3)(z1)}function z1(){try{for(var _,$=1;r$.length;)r$.length>$&&r$.sort(f3),_=r$.shift(),$=r$.length,d9(_)}finally{r$.length=z1.__r=0}}function m3(_,$,j,Z,N,K,z,X,L,q,U){var V,H,w,R,m,u,P,M=Z&&Z.__k||Y1,c=$.length;for(L=n9(j,$,M,L,c),V=0;V<c;V++)(w=j.__k[V])!=null&&(H=w.__i!=-1&&M[w.__i]||K1,w.__i=V,u=n1(_,w,H,N,K,z,X,L,q,U),R=w.__e,w.ref&&H.ref!=w.ref&&(H.ref&&o1(H.ref,null,w),U.push(w.ref,w.__c||R,w)),m==null&&R!=null&&(m=R),(P=!!(4&w.__u))||H.__k===w.__k?L=g3(w,L,_,P):typeof w.type=="function"&&u!==void 0?L=u:R&&(L=R.nextSibling),w.__u&=-7);return j.__e=m,L}function n9(_,$,j,Z,N){var K,z,X,L,q,U=j.length,V=U,H=0;for(_.__k=Array(N),K=0;K<N;K++)(z=$[K])!=null&&typeof z!="boolean"&&typeof z!="function"?(typeof z=="string"||typeof z=="number"||typeof z=="bigint"||z.constructor==String?z=_.__k[K]=j1(null,z,null,null,null):W1(z)?z=_.__k[K]=j1(X1,{children:z},null,null,null):z.constructor===void 0&&z.__b>0?z=_.__k[K]=j1(z.type,z.props,z.key,z.ref?z.ref:null,z.__v):_.__k[K]=z,L=K+H,z.__=_,z.__b=_.__b+1,X=null,(q=z.__i=o9(z,j,L,V))!=-1&&(V--,(X=j[q])&&(X.__u|=2)),X==null||X.__v==null?(q==-1&&(N>U?H--:N<U&&H++),typeof z.type!="function"&&(z.__u|=4)):q!=L&&(q==L-1?H--:q==L+1?H++:(q>L?H--:H++,z.__u|=4))):_.__k[K]=null;if(V)for(K=0;K<U;K++)(X=j[K])!=null&&(2&X.__u)==0&&(X.__e==Z&&(Z=F2(X)),h3(X,X));return Z}function g3(_,$,j,Z){var N,K;if(typeof _.type=="function"){for(N=_.__k,K=0;N&&K<N.length;K++)N[K]&&(N[K].__=_,$=g3(N[K],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=F2(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function o9(_,$,j,Z){var N,K,z,X=_.key,L=_.type,q=$[j],U=q!=null&&(2&q.__u)==0;if(q===null&&X==null||U&&X==q.key&&L==q.type)return j;if(Z>(U?1:0)){for(N=j-1,K=j+1;N>=0||K<$.length;)if((q=$[z=N>=0?N--:K++])!=null&&(2&q.__u)==0&&X==q.key&&L==q.type)return z}return-1}function y3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||l9.test($)?j:j+"px"}function $1(_,$,j,Z,N){var K,z;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||y3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||y3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")K=$!=($=$.replace(R3,"$1")),z=$.toLowerCase(),$=z in _||$=="onFocusOut"||$=="onFocusIn"?z.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+K]=j,j?Z?j.u=Z.u:(j.u=l1,_.addEventListener($,K?c1:p1,K)):_.removeEventListener($,K?c1:p1,K);else{if(N=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(X){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function k3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=l1++;else if($.t<j.u)return;return j(e_.event?e_.event($):$)}}}function n1(_,$,j,Z,N,K,z,X,L,q){var U,V,H,w,R,m,u,P,M,c,J,p,d,t,l,j_=$.type;if($.constructor!==void 0)return null;128&j.__u&&(L=!!(32&j.__u),K=[X=$.__e=j.__e]),(U=e_.__b)&&U($);_:if(typeof j_=="function")try{if(P=$.props,M=j_.prototype&&j_.prototype.render,c=(U=j_.contextType)&&Z[U.__c],J=U?c?c.props.value:U.__:Z,j.__c?u=(V=$.__c=j.__c).__=V.__E:(M?$.__c=V=new j_(P,J):($.__c=V=new Z1(P,J),V.constructor=j_,V.render=r9),c&&c.sub(V),V.state||(V.state={}),V.__n=Z,H=V.__d=!0,V.__h=[],V._sb=[]),M&&V.__s==null&&(V.__s=V.state),M&&j_.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=R$({},V.__s)),R$(V.__s,j_.getDerivedStateFromProps(P,V.__s))),w=V.props,R=V.state,V.__v=$,H)M&&j_.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),M&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(M&&j_.getDerivedStateFromProps==null&&P!==w&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(P,J),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(P,V.__s,J)===!1){$.__v!=j.__v&&(V.props=P,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(i){i&&(i.__=$)}),Y1.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&z.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(P,V.__s,J),M&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(w,R,m)})}if(V.context=J,V.props=P,V.__P=_,V.__e=!1,p=e_.__r,d=0,M)V.state=V.__s,V.__d=!1,p&&p($),U=V.render(V.props,V.state,V.context),Y1.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,p&&p($),U=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++d<25);V.state=V.__s,V.getChildContext!=null&&(Z=R$(R$({},Z),V.getChildContext())),M&&!H&&V.getSnapshotBeforeUpdate!=null&&(m=V.getSnapshotBeforeUpdate(w,R)),t=U!=null&&U.type===X1&&U.key==null?c3(U.props.children):U,X=m3(_,W1(t)?t:[t],$,j,Z,N,K,z,X,L,q),V.base=$.__e,$.__u&=-161,V.__h.length&&z.push(V),u&&(V.__E=V.__=null)}catch(i){if($.__v=null,L||K!=null)if(i.then){for($.__u|=L?160:128;X&&X.nodeType==8&&X.nextSibling;)X=X.nextSibling;K[K.indexOf(X)]=null,$.__e=X}else{for(l=K.length;l--;)d1(K[l]);h1($)}else $.__e=j.__e,$.__k=j.__k,i.then||h1($);e_.__e(i,$,j)}else K==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):X=$.__e=s9(j.__e,$,j,Z,N,K,z,L,q);return(U=e_.diffed)&&U($),128&$.__u?void 0:X}function h1(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(h1))}function p3(_,$,j){for(var Z=0;Z<j.length;Z++)o1(j[Z],j[++Z],j[++Z]);e_.__c&&e_.__c($,_),_.some(function(N){try{_=N.__h,N.__h=[],_.some(function(K){K.call(N)})}catch(K){e_.__e(K,N.__v)}})}function c3(_){return typeof _!="object"||_==null||_.__b>0?_:W1(_)?_.map(c3):R$({},_)}function s9(_,$,j,Z,N,K,z,X,L){var q,U,V,H,w,R,m,u=j.props||K1,P=$.props,M=$.type;if(M=="svg"?N="http://www.w3.org/2000/svg":M=="math"?N="http://www.w3.org/1998/Math/MathML":N||(N="http://www.w3.org/1999/xhtml"),K!=null){for(q=0;q<K.length;q++)if((w=K[q])&&"setAttribute"in w==!!M&&(M?w.localName==M:w.nodeType==3)){_=w,K[q]=null;break}}if(_==null){if(M==null)return document.createTextNode(P);_=document.createElementNS(N,M,P.is&&P),X&&(e_.__m&&e_.__m($,K),X=!1),K=null}if(M==null)u===P||X&&_.data==P||(_.data=P);else{if(K=K&&G1.call(_.childNodes),!X&&K!=null)for(u={},q=0;q<_.attributes.length;q++)u[(w=_.attributes[q]).name]=w.value;for(q in u)w=u[q],q=="dangerouslySetInnerHTML"?V=w:q=="children"||(q in P)||q=="value"&&("defaultValue"in P)||q=="checked"&&("defaultChecked"in P)||$1(_,q,null,w,N);for(q in P)w=P[q],q=="children"?H=w:q=="dangerouslySetInnerHTML"?U=w:q=="value"?R=w:q=="checked"?m=w:X&&typeof w!="function"||u[q]===w||$1(_,q,w,u[q],N);if(U)X||V&&(U.__html==V.__html||U.__html==_.innerHTML)||(_.innerHTML=U.__html),$.__k=[];else if(V&&(_.innerHTML=""),m3($.type=="template"?_.content:_,W1(H)?H:[H],$,j,Z,M=="foreignObject"?"http://www.w3.org/1999/xhtml":N,K,z,K?K[0]:j.__k&&F2(j,0),X,L),K!=null)for(q=K.length;q--;)d1(K[q]);X||(q="value",M=="progress"&&R==null?_.removeAttribute("value"):R!=null&&(R!==_[q]||M=="progress"&&!R||M=="option"&&R!=u[q])&&$1(_,q,R,u[q],N),q="checked",m!=null&&m!=_[q]&&$1(_,q,m,u[q],N))}return _}function o1(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(N){e_.__e(N,j)}}function h3(_,$,j){var Z,N;if(e_.unmount&&e_.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||o1(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(K){e_.__e(K,$)}Z.base=Z.__P=null}if(Z=_.__k)for(N=0;N<Z.length;N++)Z[N]&&h3(Z[N],$,j||typeof _.type!="function");j||d1(_.__e),_.__c=_.__=_.__e=void 0}function r9(_,$,j){return this.constructor(_,j)}function i3(_,$,j){var Z,N,K,z;$==document&&($=document.documentElement),e_.__&&e_.__(_,$),N=(Z=typeof j=="function")?null:j&&j.__k||$.__k,K=[],z=[],n1($,_=(!Z&&j||$).__k=v3(X1,null,[_]),N||K1,K1,$.namespaceURI,!Z&&j?[j]:N?null:$.firstChild?G1.call($.childNodes):null,K,!Z&&j?j:N?N.__e:$.firstChild,Z,z),p3(K,_,z)}G1=Y1.slice,e_={__e:function(_,$,j,Z){for(var N,K,z;$=$.__;)if((N=$.__c)&&!N.__)try{if((K=N.constructor)&&K.getDerivedStateFromError!=null&&(N.setState(K.getDerivedStateFromError(_)),z=N.__d),N.componentDidCatch!=null&&(N.componentDidCatch(_,Z||{}),z=N.__d),z)return N.__E=N}catch(X){_=X}throw _}},T3=0,h9=function(_){return _!=null&&_.constructor===void 0},Z1.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R$({},this.state),typeof _=="function"&&(_=_(R$({},j),this.props)),_&&R$(j,_),_!=null&&this.__v&&($&&this._sb.push($),J3(this))},Z1.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J3(this))},Z1.prototype.render=X1,r$=[],S3=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f3=function(_,$){return _.__v.__b-$.__v.__b},z1.__r=0,R3=/(PointerCapture)$|Capture$/i,l1=0,p1=k3(!1),c1=k3(!0),i9=0;var f2,Q0,g1,E3,R2=0,l3=[],L0=e_,w3=L0.__b,A3=L0.__r,P3=L0.diffed,b3=L0.__c,x3=L0.unmount,M3=L0.__;function s1(_,$){L0.__h&&L0.__h(Q0,_,R2||$),R2=0;var j=Q0.__H||(Q0.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function S(_){return R2=1,a9(n3,_)}function a9(_,$,j){var Z=s1(f2++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):n3(void 0,$),function(X){var L=Z.__N?Z.__N[0]:Z.__[0],q=Z.t(L,X);L!==q&&(Z.__N=[q,Z.__[1]],Z.__c.setState({}))}],Z.__c=Q0,!Q0.__f)){var N=function(X,L,q){if(!Z.__c.__H)return!0;var U=Z.__c.__H.__.filter(function(H){return H.__c});if(U.every(function(H){return!H.__N}))return!K||K.call(this,X,L,q);var V=Z.__c.props!==X;return U.some(function(H){if(H.__N){var w=H.__[0];H.__=H.__N,H.__N=void 0,w!==H.__[0]&&(V=!0)}}),K&&K.call(this,X,L,q)||V};Q0.__f=!0;var{shouldComponentUpdate:K,componentWillUpdate:z}=Q0;Q0.componentWillUpdate=function(X,L,q){if(this.__e){var U=K;K=void 0,N(X,L,q),K=U}z&&z.call(this,X,L,q)},Q0.shouldComponentUpdate=N}return Z.__N||Z.__}function v(_,$){var j=s1(f2++,3);!L0.__s&&d3(j.__H,$)&&(j.__=_,j.u=$,Q0.__H.__h.push(j))}function k(_){return R2=5,h_(function(){return{current:_}},[])}function h_(_,$){var j=s1(f2++,7);return d3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function x(_,$){return R2=8,h_(function(){return _},$)}function t9(){for(var _;_=l3.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(N1),$.__h.some(i1),$.__h=[]}catch(j){$.__h=[],L0.__e(j,_.__v)}}}L0.__b=function(_){Q0=null,w3&&w3(_)},L0.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),M3&&M3(_,$)},L0.__r=function(_){A3&&A3(_),f2=0;var $=(Q0=_.__c).__H;$&&(g1===Q0?($.__h=[],Q0.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(N1),$.__h.some(i1),$.__h=[],f2=0)),g1=Q0},L0.diffed=function(_){P3&&P3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(l3.push($)!==1&&E3===L0.requestAnimationFrame||((E3=L0.requestAnimationFrame)||e9)(t9)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),g1=Q0=null},L0.__c=function(_,$){$.some(function(j){try{j.__h.some(N1),j.__h=j.__h.filter(function(Z){return!Z.__||i1(Z)})}catch(Z){$.some(function(N){N.__h&&(N.__h=[])}),$=[],L0.__e(Z,j.__v)}}),b3&&b3(_,$)},L0.unmount=function(_){x3&&x3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{N1(Z)}catch(N){$=N}}),j.__H=void 0,$&&L0.__e($,j.__v))};var I3=typeof requestAnimationFrame=="function";function e9(_){var $,j=function(){clearTimeout(Z),I3&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);I3&&($=requestAnimationFrame(j))}function N1(_){var $=Q0,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),Q0=$}function i1(_){var $=Q0;_.__c=_.__(),Q0=$}function d3(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function n3(_,$){return typeof $=="function"?$(_):$}var o3=function(_,$,j,Z){var N;$[0]=0;for(var K=1;K<$.length;K++){var z=$[K++],X=$[K]?($[0]|=z?1:2,j[$[K++]]):$[++K];z===3?Z[0]=X:z===4?Z[1]=Object.assign(Z[1]||{},X):z===5?(Z[1]=Z[1]||{})[$[++K]]=X:z===6?Z[1][$[++K]]+=X+"":z?(N=_.apply(X,o3(_,X,j,["",null])),Z.push(N),X[0]?$[0]|=2:($[K-2]=0,$[K]=N)):Z.push(X)}return Z},C3=new Map;function _5(_){var $=C3.get(this);return $||($=new Map,C3.set(this,$)),($=o3(this,$.get(_)||($.set(_,$=function(j){for(var Z,N,K=1,z="",X="",L=[0],q=function(H){K===1&&(H||(z=z.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?L.push(0,H,z):K===3&&(H||z)?(L.push(3,H,z),K=2):K===2&&z==="..."&&H?L.push(4,H,0):K===2&&z&&!H?L.push(5,0,!0,z):K>=5&&((z||!H&&K===5)&&(L.push(K,0,z,N),K=6),H&&(L.push(K,H,0,N),K=6)),z=""},U=0;U<j.length;U++){U&&(K===1&&q(),q(U));for(var V=0;V<j[U].length;V++)Z=j[U][V],K===1?Z==="<"?(q(),L=[L],K=3):z+=Z:K===4?z==="--"&&Z===">"?(K=1,z=""):z=Z+z[0]:X?Z===X?X="":z+=Z:Z==='"'||Z==="'"?X=Z:Z===">"?(q(),K=1):K&&(Z==="="?(K=5,N=z,z=""):Z==="/"&&(K<5||j[U][V+1]===">")?(q(),K===3&&(L=L[0]),K=L,(L=L[0]).push(2,0,K),K=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(q(),K=2):z+=Z),K===3&&z==="!--"&&(K=4,L=L[0])}return q(),L}(_)),$),arguments,[])).length>1?$:$[0]}var B=_5.bind(v3);var e0={};c9(e0,{uploadWorkspaceFile:()=>V1,uploadMedia:()=>Z4,updateWorkspaceFile:()=>B5,submitAdaptiveCardAction:()=>N4,streamSidePrompt:()=>L5,steerAgentQueueItem:()=>V5,setWorkspaceVisibility:()=>p2,setAgentThoughtVisibility:()=>z4,sendPeerAgentMessage:()=>G5,sendAgentMessage:()=>H2,searchPosts:()=>a1,restoreChatBranch:()=>z5,respondToAgentRequest:()=>q1,renameWorkspaceFile:()=>L4,renameChatBranch:()=>K5,removeAgentQueueItem:()=>q5,pruneChatBranch:()=>Y5,moveWorkspaceEntry:()=>Q4,getWorkspaceTree:()=>g2,getWorkspaceRawUrl:()=>L1,getWorkspaceFile:()=>X4,getWorkspaceDownloadUrl:()=>Q1,getWorkspaceBranch:()=>U5,getTimeline:()=>v2,getThumbnailUrl:()=>G4,getThread:()=>t1,getPostsByHashtag:()=>r1,getMediaUrl:()=>W$,getMediaText:()=>W4,getMediaInfo:()=>D2,getMediaBlob:()=>Q5,getChatBranches:()=>N5,getAgents:()=>$4,getAgentThought:()=>Y4,getAgentStatus:()=>j4,getAgentQueueState:()=>X5,getAgentModels:()=>m2,getAgentContext:()=>W5,getActiveChatAgents:()=>_4,forkChatBranch:()=>u2,deleteWorkspaceFile:()=>U4,deletePost:()=>e1,createWorkspaceFile:()=>V4,createReply:()=>Z5,createPost:()=>j5,attachWorkspaceFile:()=>q4,addToWhitelist:()=>K4,SSEClient:()=>U1});async function S_(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function s3(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let K of $)if(K.startsWith("event:"))j=K.slice(6).trim()||"message";else if(K.startsWith("data:"))Z.push(K.slice(5).trim());let N=Z.join(`
`);if(!N)return null;try{return{event:j,data:JSON.parse(N)}}catch{return{event:j,data:N}}}async function $5(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,N="";while(!0){let{value:z,done:X}=await j.read();if(X)break;N+=Z.decode(z,{stream:!0});let L=N.split(`

`);N=L.pop()||"";for(let q of L){let U=s3(q);if(U)$(U.event,U.data)}}N+=Z.decode();let K=s3(N);if(K)$(K.event,K.data)}async function v2(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return S_(Z)}async function r1(_,$=50,j=0,Z=null){let N=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${N}`)}async function a1(_,$=50,j=0,Z=null,N="current",K=null){let z=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",X=N?`&scope=${encodeURIComponent(N)}`:"",L=K?`&root_chat_jid=${encodeURIComponent(K)}`:"";return S_(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${z}${X}${L}`)}async function t1(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return S_(`/thread/${_}${j}`)}async function j5(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return S_(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function Z5(_,$,j=[],Z=null){let N=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return S_(`/post/reply${N}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function e1(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",N=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return S_(N,{method:"DELETE"})}async function H2(_,$,j=null,Z=[],N=null,K=null){let z=K?`?chat_jid=${encodeURIComponent(K)}`:"";return S_(`/agent/${_}/message${z}`,{method:"POST",body:JSON.stringify({content:$,thread_id:j,media_ids:Z,mode:N})})}async function _4(){return S_("/agent/active-chats")}async function N5(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return S_(`/agent/branches${Z}`)}async function u2(_,$={}){return S_("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{},...$?.displayName?{display_name:$.displayName}:{}})})}async function K5(_,$={}){return S_("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function Y5(_){return S_("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function z5(_,$={}){return S_("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{},...$&&Object.prototype.hasOwnProperty.call($,"displayName")?{display_name:$.displayName}:{}})})}async function G5(_,$,j,Z="auto",N={}){let K={source_chat_jid:_,content:j,mode:Z,...N?.sourceAgentName?{source_agent_name:N.sourceAgentName}:{},...N?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return S_("/agent/peer-message",{method:"POST",body:JSON.stringify(K)})}async function $4(){return S_("/agent/roster")}async function j4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/status${$}`)}async function W5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/context${$}`)}async function X5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/queue-state${$}`)}async function q5(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function V5(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function m2(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return S_(`/agent/models${$}`)}async function Z4(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function q1(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(N.error||`HTTP ${Z.status}`)}return Z.json()}async function N4(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function L5(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let K=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(K.error||`HTTP ${j.status}`)}let Z=null,N=null;if(await $5(j,(K,z)=>{if($.onEvent?.(K,z),K==="side_prompt_thinking_delta")$.onThinkingDelta?.(z?.delta||"");else if(K==="side_prompt_text_delta")$.onTextDelta?.(z?.delta||"");else if(K==="side_prompt_done")Z=z;else if(K==="side_prompt_error")N=z}),N){let K=Error(N?.error||"Side prompt failed");throw K.payload=N,K}return Z}async function K4(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Y4(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return S_(j)}async function z4(_,$,j){return S_("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function W$(_){return`/media/${_}`}function G4(_){return`/media/${_}/thumbnail`}async function D2(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function W4(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Q5(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function g2(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return S_(Z)}async function U5(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return S_($)}async function X4(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",N=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return S_(N)}async function B5(_,$){return S_("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function q4(_){return S_("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function V1(_,$="",j={}){let Z=new FormData;Z.append("file",_);let N=new URLSearchParams;if($)N.set("path",$);if(j.overwrite)N.set("overwrite","1");let K=N.toString(),z=K?`/workspace/upload?${K}`:"/workspace/upload",X=await fetch(""+z,{method:"POST",body:Z});if(!X.ok){let L=await X.json().catch(()=>({error:"Upload failed"})),q=Error(L.error||`HTTP ${X.status}`);throw q.status=X.status,q.code=L.code,q}return X.json()}async function V4(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let N=await Z.json().catch(()=>({error:"Create failed"})),K=Error(N.error||`HTTP ${Z.status}`);throw K.status=Z.status,K.code=N.code,K}return Z.json()}async function L4(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function Q4(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),N=Error(Z.error||`HTTP ${j.status}`);throw N.status=j.status,N.code=Z.code,N}return j.json()}async function U4(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return S_($,{method:"DELETE"})}async function p2(_,$=!1){return S_("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function L1(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function Q1(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class U1{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),N=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},N),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}function _$(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function i_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function J2(_,$=!1){let j=_$(_);if(j===null)return $;return j==="true"}function y2(_,$=null){let j=_$(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}function B1(_){return String(_||"").trim().toLowerCase()}function B4(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return B1($[1]||"")}function r3(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let N=B1(Z?.agent_name);if(!N||$.has(N))continue;$.add(N),j.push(Z)}return j}function a3(_,$,j={}){let Z=B4($);if(Z==null)return[];let N=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return r3(_).filter((K)=>{if(N&&K?.chat_jid===N)return!1;return B1(K?.agent_name).startsWith(Z)})}function O4(_){let $=B1(_);return $?`@${$} `:""}function t3(_,$={}){let j=typeof $?.currentChatJid==="string"?$.currentChatJid:null,Z=Number.isFinite($?.limit)?Math.max(0,$.limit):4;return r3(_).filter((N)=>!(j&&N?.chat_jid===j)).slice(0,Z)}function e3({footerWidth:_=0,visibleAgentCount:$=0,hasContextIndicator:j=!1}={}){let Z=Number(_||0),N=Math.max(0,Math.min(Number($||0),4));if(!Number.isFinite(Z)||Z<=0)return!1;if(N<=0)return!1;let K=460+N*68+(j?40:0);return Z>=K}function B$({prefix:_="file",label:$,title:j,onRemove:Z,onClick:N,removeTitle:K="Remove",icon:z="file"}){let X=`${_}-file-pill`,L=`${_}-file-name`,q=`${_}-file-remove`,U=z==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${X} title=${j||$} onClick=${N}>
      ${U}
      <span class=${L}>${$}</span>
      ${Z&&B`
        <button
          class=${q}
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
  `}var O5=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function F5({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,N=_.contextWindow,K="Compact context",X=`${Z!=null?`Context: ${_8(Z)} / ${_8(N)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,L=9,q=2*Math.PI*9,U=j/100*q,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${X}
            aria-label="Compact context"
            onClick=${(H)=>{H.preventDefault(),H.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${q}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function _8(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function $8({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:N,onSearchScopeChange:K,onEnterSearch:z,onExitSearch:X,fileRefs:L=[],onRemoveFileRef:q,onClearFileRefs:U,messageRefs:V=[],onRemoveMessageRef:H,onClearMessageRefs:w,activeModel:R=null,modelUsage:m=null,thinkingLevel:u=null,supportsThinking:P=!1,contextUsage:M=null,onContextCompact:c,notificationsEnabled:J=!1,notificationPermission:p="default",onToggleNotifications:d,onModelChange:t,onModelStateChange:l,activeEditorPath:j_=null,onAttachEditorFile:i,onOpenFilePill:G_,followupQueueItems:u_=[],onInjectQueuedFollowup:r,onRemoveQueuedFollowup:s,onSubmitIntercept:N_,onMessageResponse:$_,onPopOutChat:Y_,isAgentActive:w_=!1,activeChatAgents:U_=[],currentChatJid:W_="web:default",connectionStatus:X_="connected",onSetFileRefs:M_,onSetMessageRefs:f_,onSubmitError:H_,onSwitchChat:A_,onRenameSession:m_,isRenameSessionInProgress:U0=!1,onCreateSession:q_,onDeleteSession:__,onRestoreSession:F_}){let[Z_,D_]=S(""),[J_,_0]=S(""),[d_,R_]=S([]),[n_,g_]=S(!1),[I_,y_]=S([]),[P_,K0]=S(0),[X0,o_]=S(!1),[F0,Z0]=S([]),[v_,G0]=S(0),[r_,p_]=S(!1),[N0,c_]=S(!1),[Y0,P0]=S(!1),[L_,b_]=S(!1),[C,a]=S([]),[B_,Q_]=S(!1),[z0,V$]=S(0),[$0,q0]=S(null),C_=k(null),t$=k(null),h0=k(null),m$=k(null),H0=k(null),g$=k(null),m0=k(null),B0=k(null),i0=k(0),R0=k(!1),D0=200,L2=(Y)=>{let O=new Set,D=[];for(let I of Y||[]){if(typeof I!=="string")continue;let T=I.trim();if(!T||O.has(T))continue;O.add(T),D.push(T)}return D},g0=()=>{let Y=_$("piclaw_compose_history");if(!Y)return[];try{let O=JSON.parse(Y);if(!Array.isArray(O))return[];return L2(O)}catch{return[]}},Q2=(Y)=>{i_("piclaw_compose_history",JSON.stringify(Y))},a_=k(g0()),v0=k(-1),l0=k(""),b0=Z_.trim()||d_.length>0||L.length>0||V.length>0,M0=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),j$=typeof window<"u"&&typeof Notification<"u",k$=typeof window<"u"?Boolean(window.isSecureContext):!1,e$=j$&&k$&&p!=="denied",c$=p==="granted"&&J,J0=c$?"Disable notifications":"Enable notifications",E$=d_.length>0||L.length>0||V.length>0,L$=X_==="disconnected"?"Reconnecting":String(X_||"Connecting").replace(/[-_]+/g," ").replace(/^./,(Y)=>Y.toUpperCase()),I0=X_==="disconnected"?"Reconnecting":`Connection: ${L$}`,O0=(Array.isArray(U_)?U_:[]).filter((Y)=>!Y?.archived_at),O$=t3(O0,{currentChatJid:W_,limit:4}),u0=!j&&e3({footerWidth:z0,visibleAgentCount:O$.length,hasContextIndicator:Boolean(M&&M.percent!=null)}),y0=(()=>{for(let Y of Array.isArray(U_)?U_:[]){let O=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(O&&O===W_)return Y}return null})(),w$=Boolean(y0&&y0.chat_jid===(y0.root_chat_jid||y0.chat_jid)),C0=(()=>{let Y=new Set,O=[];for(let D of Array.isArray(U_)?U_:[]){let I=typeof D?.chat_jid==="string"?D.chat_jid.trim():"";if(!I||I===W_||Y.has(I))continue;if(!(typeof D?.agent_name==="string"?D.agent_name.trim():""))continue;Y.add(I),O.push(D)}return O})(),A$=C0.length>0,h$=A$&&typeof A_==="function",t_=A$&&typeof F_==="function",T0=Boolean(U0||R0.current),F$=!j&&typeof m_==="function"&&!T0,H$=!j&&typeof q_==="function",P$=!j&&typeof __==="function"&&!w$,i$=!j&&(h$||t_||F$||H$||P$),S0=R||"",V0=P&&u?` (${u})`:"",k_=V0.trim()?`${u}`:"",Z$=typeof m?.hint_short==="string"?m.hint_short.trim():"",b$=[k_||null,Z$||null].filter(Boolean).join(" • "),_2=[S0?`Current model: ${S0}${V0}`:null,m?.plan?`Plan: ${m.plan}`:null,Z$||null,m?.primary?.reset_description||null,m?.secondary?.reset_description||null].filter(Boolean),l$=N0?"Switching model…":_2.join(" • ")||`Current model: ${S0}${V0} (tap to open model picker)`,d0=(Y)=>{if(!Y||typeof Y!=="object")return;let O=Y.model??Y.current;if(typeof l==="function")l({model:O??null,thinking_level:Y.thinking_level??null,supports_thinking:Y.supports_thinking,provider_usage:Y.provider_usage??null});if(O&&typeof t==="function")t(O)},N$=(Y)=>{let O=Y||C_.current;if(!O)return;O.style.height="auto",O.style.height=`${O.scrollHeight}px`,O.style.overflowY="hidden"},k0=(Y)=>{if(!Y)return{content:Y,fileRefs:[]};let D=Y.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),I=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Files:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){I=O_;break}if(I===-1)return{content:Y,fileRefs:[]};let T=[],f=I+1;for(;f<D.length;f+=1){let O_=D[f];if(/^\s*-\s+/.test(O_))T.push(O_.replace(/^\s*-\s+/,"").trim());else if(!O_.trim())break;else break}if(T.length===0)return{content:Y,fileRefs:[]};let n=D.slice(0,I),x_=D.slice(f);return{content:[...n,...x_].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:T}},D$=(Y)=>{if(!Y)return{content:Y,messageRefs:[]};let D=Y.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),I=-1;for(let O_=0;O_<D.length;O_+=1)if(D[O_].trim()==="Referenced messages:"&&D[O_+1]&&/^\s*-\s+/.test(D[O_+1])){I=O_;break}if(I===-1)return{content:Y,messageRefs:[]};let T=[],f=I+1;for(;f<D.length;f+=1){let O_=D[f];if(/^\s*-\s+/.test(O_)){let a0=O_.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(a0)T.push(a0[1])}else if(!O_.trim())break;else break}if(T.length===0)return{content:Y,messageRefs:[]};let n=D.slice(0,I),x_=D.slice(f);return{content:[...n,...x_].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:T}},n0=(Y)=>{let O=k0(Y||""),D=D$(O.content||"");return{text:D.content||"",fileRefs:O.fileRefs,messageRefs:D.messageRefs}},x$=(Y)=>{if(!Y.startsWith("/")||Y.includes(`
`)){o_(!1),y_([]);return}let O=Y.toLowerCase().split(" ")[0];if(O.length<1){o_(!1),y_([]);return}let D=O5.filter((I)=>I.name.startsWith(O)||I.name.replace(/-/g,"").startsWith(O.replace(/-/g,"")));if(D.length>0&&!(D.length===1&&D[0].name===O))p_(!1),Z0([]),y_(D),K0(0),o_(!0);else o_(!1),y_([])},M$=(Y)=>{let O=Z_,D=O.indexOf(" "),I=D>=0?O.slice(D):"",T=Y.name+I;D_(T),o_(!1),y_([]),requestAnimationFrame(()=>{let f=C_.current;if(!f)return;let n=T.length;f.selectionStart=n,f.selectionEnd=n,f.focus()})},I$=(Y)=>{if(B4(Y)==null){p_(!1),Z0([]);return}let O=a3(O0,Y,{currentChatJid:W_});if(O.length>0&&!(O.length===1&&O4(O[0].agent_name).trim().toLowerCase()===String(Y||"").trim().toLowerCase()))o_(!1),y_([]),Z0(O),G0(0),p_(!0);else p_(!1),Z0([])},J$=(Y)=>{let O=O4(Y?.agent_name);if(!O)return;D_(O),p_(!1),Z0([]),requestAnimationFrame(()=>{let D=C_.current;if(!D)return;let I=O.length;D.selectionStart=I,D.selectionEnd=I,D.focus()})},o0=(Y)=>{if(Y?.preventDefault?.(),Y?.stopPropagation?.(),j||!h$&&!t_&&!F$&&!H$&&!P$)return;P0(!1),o_(!1),y_([]),p_(!1),Z0([]),b_((O)=>!O)},s0=(Y)=>{let O=typeof Y==="string"?Y.trim():"";if(b_(!1),!O||O===W_){requestAnimationFrame(()=>C_.current?.focus());return}A_?.(O)},d$=async(Y)=>{let O=typeof Y==="string"?Y.trim():"";if(b_(!1),!O||typeof F_!=="function"){requestAnimationFrame(()=>C_.current?.focus());return}try{await F_(O)}catch(D){console.warn("Failed to restore session:",D),requestAnimationFrame(()=>C_.current?.focus())}},C$=(Y)=>{let O=typeof Y?.chat_jid==="string"?Y.chat_jid.trim():"";if(O&&typeof A_==="function"){A_(O);return}J$(Y)},y$=async(Y)=>{if(Y?.preventDefault)Y.preventDefault();if(Y?.stopPropagation)Y.stopPropagation();if(typeof m_!=="function"||U0||R0.current)return;R0.current=!0,b_(!1);try{await m_()}catch(O){console.warn("Failed to rename session:",O)}finally{R0.current=!1}requestAnimationFrame(()=>C_.current?.focus())},Q$=async()=>{if(typeof q_!=="function")return;b_(!1);try{await q_()}catch(Y){console.warn("Failed to create session:",Y)}requestAnimationFrame(()=>C_.current?.focus())},$2=async()=>{if(typeof __!=="function")return;b_(!1);try{await __(W_)}catch(Y){console.warn("Failed to delete session:",Y)}requestAnimationFrame(()=>C_.current?.focus())},K$=(Y)=>{if(j)_0(Y);else D_(Y),x$(Y),I$(Y);requestAnimationFrame(()=>N$())},j2=(Y)=>{let O=j?J_:Z_,D=O&&!O.endsWith(`
`)?`
`:"",I=`${O}${D}${Y}`.trimStart();K$(I)},T$=(Y)=>{let O=Y?.command?.model_label;if(O)return O;let D=Y?.command?.message;if(typeof D==="string"){let I=D.match(/•\s+([^\n]+?)\s+\(current\)/);if(I?.[1])return I[1].trim()}return null},S$=async(Y)=>{if(j||N0)return;c_(!0);try{let O=await H2("default",Y,null,[],null,W_),D=T$(O);d0({model:D??R??null,thinking_level:O?.command?.thinking_level,supports_thinking:O?.command?.supports_thinking});try{let I=await m2(W_);if(I)d0(I)}catch{}return _?.(),!0}catch(O){return console.error("Failed to switch model:",O),alert("Failed to switch model: "+O.message),!1}finally{c_(!1)}},n$=async()=>{await S$("/cycle-model")},Z2=async(Y)=>{if(!Y||N0)return;if(await S$(`/model ${Y}`))P0(!1)},o$=(Y)=>{Y.preventDefault(),Y.stopPropagation(),b_(!1),P0((O)=>!O)},w2=async()=>{if(j)return;c?.(),await z_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},A2=(Y)=>{if(Y==="queue"||Y==="steer"||Y==="auto")return Y;return w_?"queue":null},z_=async(Y,O,D={})=>{let{includeMedia:I=!0,includeFileRefs:T=!0,includeMessageRefs:f=!0,clearAfterSubmit:n=!0,recordHistory:x_=!0}=D||{},W0=typeof Y==="string"?Y:Y&&typeof Y?.target?.value==="string"?Y.target.value:Z_,O_=typeof W0==="string"?W0:"";if(!O_.trim()&&(I?d_.length===0:!0)&&(T?L.length===0:!0)&&(f?V.length===0:!0))return;o_(!1),y_([]),p_(!1),Z0([]),b_(!1),q0(null);let a0=I?[...d_]:[],B2=T?[...L]:[],O2=f?[...V]:[],f$=O_.trim();if(x_&&f$){let j0=a_.current,f0=L2(j0.filter((s$)=>s$!==f$));if(f0.push(f$),f0.length>200)f0.splice(0,f0.length-200);a_.current=f0,Q2(f0),v0.current=-1,l0.current=""}let a2=()=>{if(I)R_([...a0]);if(T)M_?.(B2);if(f)f_?.(O2);D_(f$),requestAnimationFrame(()=>N$())};if(n)D_(""),R_([]),U?.(),w?.();(async()=>{try{if(await N_?.({content:f$,submitMode:O,fileRefs:B2,messageRefs:O2,mediaFiles:a0})){_?.();return}let f0=[];for(let c0 of a0){let U$=await Z4(c0);f0.push(U$.id)}let s$=B2.length?`Files:
${B2.map((c0)=>`- ${c0}`).join(`
`)}`:"",t2=O2.length?`Referenced messages:
${O2.map((c0)=>`- message:${c0}`).join(`
`)}`:"",t0=f0.length?`Attachments:
${f0.map((c0,U$)=>{let I1=a0[U$]?.name||`attachment-${U$+1}`;return`- attachment:${c0} (${I1})`}).join(`
`)}`:"",E0=[f$,s$,t2,t0].filter(Boolean).join(`

`),Y2=await H2("default",E0,null,f0,A2(O),W_);if($_?.(Y2),Y2?.command){d0({model:Y2.command.model_label??R??null,thinking_level:Y2.command.thinking_level,supports_thinking:Y2.command.supports_thinking});try{let c0=await m2(W_);if(c0)d0(c0)}catch{}}_?.()}catch(j0){if(n)a2();let f0=j0?.message||"Failed to send message.";q0(f0),H_?.(f0),console.error("Failed to post:",j0)}})()},U2=(Y)=>{r?.(Y)},P2=(Y)=>{if(Y.isComposing)return;if(j&&Y.key==="Escape"){Y.preventDefault(),_0(""),X?.();return}if(!j&&L_&&Y.key==="Escape"){Y.preventDefault(),b_(!1);return}if(r_&&F0.length>0){let O=C_.current?.value??(j?J_:Z_);if(!String(O||"").match(/^@([a-zA-Z0-9_-]*)$/))p_(!1),Z0([]);else{if(Y.key==="ArrowDown"){Y.preventDefault(),G0((D)=>(D+1)%F0.length);return}if(Y.key==="ArrowUp"){Y.preventDefault(),G0((D)=>(D-1+F0.length)%F0.length);return}if(Y.key==="Tab"||Y.key==="Enter"){Y.preventDefault(),J$(F0[v_]);return}if(Y.key==="Escape"){Y.preventDefault(),p_(!1),Z0([]);return}}}if(X0&&I_.length>0){let O=C_.current?.value??(j?J_:Z_);if(!String(O||"").startsWith("/"))o_(!1),y_([]);else{if(Y.key==="ArrowDown"){Y.preventDefault(),K0((D)=>(D+1)%I_.length);return}if(Y.key==="ArrowUp"){Y.preventDefault(),K0((D)=>(D-1+I_.length)%I_.length);return}if(Y.key==="Tab"){Y.preventDefault(),M$(I_[P_]);return}if(Y.key==="Enter"&&!Y.shiftKey){if(!(C_.current?.value??(j?J_:Z_)).includes(" ")){Y.preventDefault();let T=I_[P_];o_(!1),y_([]),z_(T.name);return}}if(Y.key==="Escape"){Y.preventDefault(),o_(!1),y_([]);return}}}if(!j&&(Y.key==="ArrowUp"||Y.key==="ArrowDown")&&!Y.metaKey&&!Y.ctrlKey&&!Y.altKey&&!Y.shiftKey){let O=C_.current;if(!O)return;let D=O.value||"",I=O.selectionStart===0&&O.selectionEnd===0,T=O.selectionStart===D.length&&O.selectionEnd===D.length;if(Y.key==="ArrowUp"&&I||Y.key==="ArrowDown"&&T){let f=a_.current;if(!f.length)return;Y.preventDefault();let n=v0.current;if(Y.key==="ArrowUp"){if(n===-1)l0.current=D,n=f.length-1;else if(n>0)n-=1;v0.current=n,K$(f[n]||"")}else{if(n===-1)return;if(n<f.length-1)n+=1,v0.current=n,K$(f[n]||"");else v0.current=-1,K$(l0.current||""),l0.current=""}requestAnimationFrame(()=>{let x_=C_.current;if(!x_)return;let W0=x_.value.length;x_.selectionStart=W0,x_.selectionEnd=W0});return}}if(Y.key==="Enter"&&!Y.shiftKey&&(Y.ctrlKey||Y.metaKey)){Y.preventDefault();let O=C_.current?.value??(j?J_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else z_(O,"steer");return}if(Y.key==="Enter"&&!Y.shiftKey){Y.preventDefault();let O=C_.current?.value??(j?J_:Z_);if(j){if(O.trim())N?.(O.trim(),Z)}else z_(O)}},N2=(Y)=>{let O=Array.from(Y||[]).filter((D)=>D instanceof File&&!String(D.name||"").startsWith(".DS_Store"));if(!O.length)return;R_((D)=>[...D,...O]),q0(null)},K2=(Y)=>{N2(Y.target.files),Y.target.value=""},b2=(Y)=>{if(j)return;Y.preventDefault(),Y.stopPropagation(),i0.current+=1,g_(!0)},x2=(Y)=>{if(j)return;if(Y.preventDefault(),Y.stopPropagation(),i0.current=Math.max(0,i0.current-1),i0.current===0)g_(!1)},M2=(Y)=>{if(j)return;if(Y.preventDefault(),Y.stopPropagation(),Y.dataTransfer)Y.dataTransfer.dropEffect="copy";g_(!0)},I2=(Y)=>{if(j)return;Y.preventDefault(),Y.stopPropagation(),i0.current=0,g_(!1),N2(Y.dataTransfer?.files||[])},r0=(Y)=>{if(j)return;let O=Y.clipboardData?.items;if(!O||!O.length)return;let D=[];for(let I of O){if(I.kind!=="file")continue;let T=I.getAsFile?.();if(T)D.push(T)}if(D.length>0)Y.preventDefault(),N2(D)},p0=(Y)=>{R_((O)=>O.filter((D,I)=>I!==Y))},Q=()=>{q0(null),R_([]),U?.(),w?.()},y=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((Y)=>{let{latitude:O,longitude:D,accuracy:I}=Y.coords,T=`${O.toFixed(5)}, ${D.toFixed(5)}`,f=Number.isFinite(I)?` ±${Math.round(I)}m`:"",n=`https://maps.google.com/?q=${O},${D}`,x_=`Location: ${T}${f} ${n}`;j2(x_)},(Y)=>{let O=Y?.message||"Unable to retrieve location.";alert(`Location error: ${O}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!Y0)return;Q_(!0),m2(W_).then((Y)=>{let O=Array.isArray(Y?.models)?Y.models.filter((D)=>typeof D==="string"&&D.trim().length>0):[];O.sort((D,I)=>D.localeCompare(I,void 0,{sensitivity:"base"})),a(O),d0(Y)}).catch((Y)=>{console.warn("Failed to load model list:",Y),a([])}).finally(()=>{Q_(!1)})},[Y0,R]),v(()=>{if(j)P0(!1),b_(!1),o_(!1),y_([]),p_(!1),Z0([])},[j]),v(()=>{if(L_&&!i$)b_(!1)},[L_,i$]),v(()=>{if(!Y0)return;let Y=(O)=>{let D=m$.current,I=H0.current,T=O.target;if(D&&D.contains(T))return;if(I&&I.contains(T))return;P0(!1)};return document.addEventListener("pointerdown",Y),()=>document.removeEventListener("pointerdown",Y)},[Y0]),v(()=>{if(!L_)return;let Y=(O)=>{let D=g$.current,I=m0.current,T=O.target;if(D&&D.contains(T))return;if(I&&I.contains(T))return;b_(!1)};return document.addEventListener("pointerdown",Y),()=>document.removeEventListener("pointerdown",Y)},[L_]),v(()=>{let Y=()=>{let f=B0.current?.clientWidth||0;V$((n)=>n===f?n:f)};Y();let O=B0.current,D=0,I=()=>{if(D)cancelAnimationFrame(D);D=requestAnimationFrame(()=>{D=0,Y()})},T=null;if(O&&typeof ResizeObserver<"u")T=new ResizeObserver(()=>I()),T.observe(O);if(typeof window<"u")window.addEventListener("resize",I);return()=>{if(D)cancelAnimationFrame(D);if(T?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",I)}},[j,R,O$.length,M?.percent]);let A=(Y)=>{let O=Y.target.value;if(q0(null),L_)b_(!1);N$(Y.target),K$(O)};return v(()=>{requestAnimationFrame(()=>N$())},[Z_,J_,j]),v(()=>{if(j)return;I$(Z_)},[O0,W_,Z_,j]),B`
        <div class="compose-box">
            ${!j&&u_.length>0&&B`
                <div class="compose-queue-stack">
                    ${u_.map((Y)=>{let O=typeof Y?.content==="string"?Y.content:"",D=n0(O);if(!D.text.trim()&&D.fileRefs.length===0&&D.messageRefs.length===0)return null;return B`
                            <div class="compose-queue-stack-item" role="listitem">
                                <div class="compose-queue-stack-content" title=${O}>
                                    ${D.text.trim()&&B`
                                        <div class="compose-queue-stack-text">${D.text}</div>
                                    `}
                                    ${(D.messageRefs.length>0||D.fileRefs.length>0)&&B`
                                        <div class="compose-queue-stack-refs">
                                            ${D.messageRefs.map((I)=>B`
                                                <${B$}
                                                    key=${"queue-msg-"+I}
                                                    prefix="compose"
                                                    label=${"msg:"+I}
                                                    title=${"Message reference: "+I}
                                                    icon="message"
                                                />
                                            `)}
                                            ${D.fileRefs.map((I)=>{let T=I.split("/").pop()||I;return B`
                                                    <${B$}
                                                        key=${"queue-file-"+I}
                                                        prefix="compose"
                                                        label=${T}
                                                        title=${I}
                                                        onClick=${()=>G_?.(I)}
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
                                        onClick=${()=>U2(Y)}
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
                                        onClick=${()=>s?.(Y)}
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
                class=${`compose-input-wrapper${n_?" drag-active":""}`}
                onDragEnter=${b2}
                onDragOver=${M2}
                onDragLeave=${x2}
                onDrop=${I2}
            >
                <div class="compose-input-main">
                    ${$0&&!E$&&B`
                        <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${$0}</div>
                    `}
                    ${E$&&B`
                        <div class="compose-file-refs">
                            ${$0&&B`
                                <div class="compose-submit-error" role="status" aria-live="polite">${$0}</div>
                            `}
                            ${V.map((Y)=>{return B`
                                    <${B$}
                                        key=${"msg-"+Y}
                                        prefix="compose"
                                        label=${"msg:"+Y}
                                        title=${"Message reference: "+Y}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>H?.(Y)}
                                    />
                                `})}
                            ${L.map((Y)=>{let O=Y.split("/").pop()||Y;return B`
                                    <${B$}
                                        prefix="compose"
                                        label=${O}
                                        title=${Y}
                                        onClick=${()=>G_?.(Y)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>q?.(Y)}
                                    />
                                `})}
                            ${d_.map((Y,O)=>{let D=Y?.name||`attachment-${O+1}`;return B`
                                    <${B$}
                                        key=${D+O}
                                        prefix="compose"
                                        label=${D}
                                        title=${D}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>p0(O)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${Q}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof Y_==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>Y_?.()}
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
                        ref=${C_}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?J_:Z_}
                        onInput=${A}
                        onKeyDown=${P2}
                        onPaste=${r0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${r_&&F0.length>0&&B`
                        <div class="slash-autocomplete" ref=${h0}>
                            ${F0.map((Y,O)=>B`
                                <div
                                    key=${Y.chat_jid||Y.agent_name}
                                    class=${`slash-item${O===v_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),J$(Y)}}
                                    onMouseEnter=${()=>G0(O)}
                                >
                                    <span class="slash-name">@${Y.agent_name}</span>
                                    <span class="slash-desc">${Y.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${X0&&I_.length>0&&B`
                        <div class="slash-autocomplete" ref=${t$}>
                            ${I_.map((Y,O)=>B`
                                <div
                                    key=${Y.name}
                                    class=${`slash-item${O===P_?" active":""}`}
                                    onMouseDown=${(D)=>{D.preventDefault(),M$(Y)}}
                                    onMouseEnter=${()=>K0(O)}
                                >
                                    <span class="slash-name">${Y.name}</span>
                                    <span class="slash-desc">${Y.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${Y0&&!j&&B`
                        <div class="compose-model-popup" ref=${m$}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${B_&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!B_&&C.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!B_&&C.map((Y)=>B`
                                    <button
                                        key=${Y}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${R===Y?" active":""}`}
                                        onClick=${()=>{Z2(Y)}}
                                        disabled=${N0}
                                    >
                                        ${Y}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{n$()}}
                                    disabled=${N0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${L_&&!j&&B`
                        <div class="compose-model-popup" ref=${g$}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{let Y=typeof y0?.agent_name==="string"&&y0.agent_name.trim()?`@${y0.agent_name.trim()}`:W_,O=typeof y0?.chat_jid==="string"&&y0.chat_jid.trim()?y0.chat_jid.trim():W_;return`${Y} — ${O} • current`})()}
                                    </div>
                                `}
                                ${!A$&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${A$&&C0.map((Y)=>{let O=Boolean(Y.archived_at),I=Y.chat_jid!==(Y.root_chat_jid||Y.chat_jid)&&!Y.is_active&&!O&&typeof __==="function",T=`@${Y.agent_name} — ${Y.chat_jid}${Y.is_active?" • active":""}${O?" • archived":""}`;return B`
                                        <div key=${Y.chat_jid} class=${`compose-model-popup-item-row${O?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${O?" archived":""}`}
                                                onClick=${()=>{if(O){d$(Y.chat_jid);return}s0(Y.chat_jid)}}
                                                disabled=${O?!t_:!h$}
                                                title=${O?"Restore this archived branch":"Switch to this session"}
                                            >
                                                ${T}
                                            </button>
                                            ${I&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${Y.agent_name}`}
                                                    onClick=${(f)=>{f.stopPropagation(),b_(!1),__(Y.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(H$||F$||P$)&&B`
                                <div class="compose-model-popup-actions">
                                    ${H$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn primary"
                                            onClick=${()=>{Q$()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${F$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn"
                                            onClick=${(Y)=>{y$(Y)}}
                                            title="Rename current branch name and agent handle"
                                            disabled=${T0}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${P$&&B`
                                        <button
                                            type="button"
                                            class="compose-model-popup-btn danger"
                                            onClick=${()=>{$2()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${B0}>
                    ${!j&&R&&B`
                    <div class="compose-meta-row">
                        ${!j&&R&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${H0}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${l$}
                                    aria-label="Open model picker"
                                    onClick=${o$}
                                    disabled=${N0}
                                >
                                    ${N0?"Switching…":S0}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!N0&&b$&&B`
                                        <span class="compose-model-usage-hint" title=${l$}>
                                            ${b$}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&M&&M.percent!=null&&B`
                            <${F5} usage=${M} onCompact=${w2} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${u0&&B`
                        <div class="compose-agent-hints compose-agent-hints-inline" title="Active chat agents you can mention with @name">
                            ${O$.map((Y)=>B`
                                <button
                                    key=${Y.chat_jid||Y.agent_name}
                                    type="button"
                                    class="compose-agent-chip"
                                    onClick=${()=>C$(Y)}
                                    title=${`${Y.chat_jid||"Active agent"} — switch to @${Y.agent_name}`}
                                >
                                    <span class="compose-agent-chip-handle">@${Y.agent_name}</span>
                                </button>
                            `)}
                        </div>
                    `}
                    ${i$&&B`
                        ${y0?.agent_name&&B`
                            <span
                                class="compose-current-agent-label"
                                title=${y0.chat_jid||W_}
                                onClick=${o0}
                            >@${y0.agent_name}</span>
                        `}
                        <button
                            ref=${m0}
                            type="button"
                            class=${`icon-btn compose-mention-btn${L_?" active":""}`}
                            onClick=${o0}
                            title=${L_?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${L_?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&B`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Z}
                                onChange=${(Y)=>K?.(Y.currentTarget.value)}
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
                    ${M0&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${y}
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
                    ${e$&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${c$?" active":""}`}
                            onClick=${d}
                            title=${J0}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${j_&&i&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${i}
                                title=${`Attach open file: ${j_}`}
                                type="button"
                                disabled=${L.includes(j_)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${K2} />
                        </label>
                    `}
                    ${(X_!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${X_!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${X_}" title=${I0}>
                                    ${L$}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{z_()}}
                                    disabled=${!b0}
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
    `}var D4="piclaw_theme",F1="piclaw_tint",N8="piclaw_chat_themes",h2={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},K8={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},j8={default:{label:"Default",mode:"auto",light:h2,dark:K8},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},H5=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],G2={theme:"default",tint:null},Y8="light",F4=!1;function H1(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function E2(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((K)=>K+K).join(""):j,N=parseInt(Z,16);return{r:N>>16&255,g:N>>8&255,b:N&255,hex:`#${Z.toLowerCase()}`}}function D5(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let N=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!N)return null;let K=parseInt(N[1],10),z=parseInt(N[2],10),X=parseInt(N[3],10);if(![K,z,X].every((q)=>Number.isFinite(q)))return null;let L=`#${[K,z,X].map((q)=>q.toString(16).padStart(2,"0")).join("")}`;return{r:K,g:z,b:X,hex:L}}function z8(_){return E2(_)||D5(_)}function c2(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),N=Math.round(_.g+($.g-_.g)*j),K=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${N} ${K})`}function H4(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function J5(_){let $=_.r/255,j=_.g/255,Z=_.b/255,N=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),K=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),z=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*N+0.7152*K+0.0722*z}function y5(_){return J5(_)>0.4?"#000000":"#ffffff"}function G8(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function J4(_){return j8[_]||j8.default}function k5(_){return _.mode==="auto"?G8():_.mode}function W8(_,$){let j=J4(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||h2}function X8(_,$,j){let Z=z8($);if(!Z)return _;let N=E2(_.bgPrimary),K=E2(_.bgSecondary),z=E2(_.bgHover),X=E2(_.borderColor);if(!N||!K||!z||!X)return _;let q=E2(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:c2(N,Z,0.08),bgSecondary:c2(K,Z,0.12),bgHover:c2(z,Z,0.16),borderColor:c2(X,Z,0.08),accent:Z.hex,accentHover:q?c2(Z,q,0.18):Z.hex}}function E5(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,N=z8(Z),K=N?H4(N,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,z=N?H4(N,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",X=N?H4(N,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",L=N?y5(N):$==="dark"?"#000000":"#ffffff",q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":z,"--accent-soft-strong":X,"--accent-contrast-text":L,"--danger-color":_.danger||h2.danger,"--success-color":_.success||h2.success,"--search-highlight-color":K||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([U,V])=>{if(V)j.style.setProperty(U,V)})}function w5(){if(typeof document>"u")return;let _=document.documentElement;H5.forEach(($)=>_.style.removeProperty($))}function k2(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function Z8(_){let $=H1(G2?.theme||"default"),j=G2?.tint?String(G2.tint).trim():null,Z=W8($,_);if($==="default"&&j)Z=X8(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?K8.bgPrimary:h2.bgPrimary}function A5(_,$){if(typeof document>"u")return;let j=k2("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=k2("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",Z8("light"));let N=k2("theme-color",{id:"theme-color-dark"});if(N)N.setAttribute("media","(prefers-color-scheme: dark)"),N.setAttribute("content",Z8("dark"));let K=k2("msapplication-TileColor");if(K&&_)K.setAttribute("content",_);let z=k2("msapplication-navbutton-color");if(z&&_)z.setAttribute("content",_);let X=k2("apple-mobile-web-app-status-bar-style");if(X)X.setAttribute("content",$==="dark"?"black-translucent":"default")}function P5(){if(typeof window>"u")return;let _={...G2,mode:Y8};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function q8(){try{let _=_$(N8);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function b5(_,$,j){let Z=q8();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};i_(N8,JSON.stringify(Z))}function x5(_){if(!_)return null;return q8()[_]||null}function V8(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function y4(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=H1(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,N=J4(j),K=k5(N),z=W8(j,K);G2={theme:j,tint:Z},Y8=K;let X=document.documentElement;X.dataset.theme=K,X.dataset.colorTheme=j,X.dataset.tint=Z?String(Z):"",X.style.colorScheme=K;let L=z;if(j==="default"&&Z)L=X8(z,Z,K);if(j==="default"&&!Z)w5();else E5(L,K);if(A5(L.bgPrimary,K),P5(),$.persist!==!1)if(i_(D4,j),Z)i_(F1,Z);else i_(F1,"")}function O1(){if(J4(G2.theme).mode!=="auto")return;y4(G2,{persist:!1})}function L8(){if(typeof window>"u")return()=>{};let _=V8(),$=x5(_),j=$?H1($.theme||"default"):H1(_$(D4)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let N=_$(F1);return N?N.trim():null})();if(y4({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!F4){let N=window.matchMedia("(prefers-color-scheme: dark)");if(N.addEventListener)N.addEventListener("change",O1);else if(N.addListener)N.addListener(O1);return F4=!0,()=>{if(N.removeEventListener)N.removeEventListener("change",O1);else if(N.removeListener)N.removeListener(O1);F4=!1}}return()=>{}}function Q8(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||V8(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(b5($,j||"default",Z),y4({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")i_(D4,j||"default"),i_(F1,Z||"")}function U8(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return G8()}var D1=/#(\w+)/g,M5=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),I5=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),C5=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),T5={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},S5=new Set(["http:","https:","mailto:",""]);function k4(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function W2(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!S5.has(Z.protocol))return null;return Z.href}catch{return null}}function B8(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],N=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),K;while(K=N.nextNode())Z.push(K);for(let z of Z){let X=z.tagName.toLowerCase();if(!I5.has(X)){let q=z.parentNode;if(!q)continue;while(z.firstChild)q.insertBefore(z.firstChild,z);q.removeChild(z);continue}let L=T5[X]||new Set;for(let q of Array.from(z.attributes)){let U=q.name.toLowerCase(),V=q.value;if(U.startsWith("on")){z.removeAttribute(q.name);continue}if(U.startsWith("data-")||U.startsWith("aria-"))continue;if(L.has(U)||C5.has(U)){if(U==="href"){let H=W2(V);if(!H)z.removeAttribute(q.name);else if(z.setAttribute(q.name,H),X==="a"&&!z.getAttribute("rel"))z.setAttribute("rel","noopener noreferrer")}else if(U==="src"){let H=X==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,w=W2(H,{allowDataImage:X==="img"});if(!w)z.removeAttribute(q.name);else z.setAttribute(q.name,w)}continue}z.removeAttribute(q.name)}}return j.body.innerHTML}function O8(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function J1(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let N=O8(j);if(N===j)break;j=N}return j}function f5(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=[],K=!1,z=[];for(let X of j){if(!K&&X.trim().match(/^```mermaid\s*$/i)){K=!0,z=[];continue}if(K&&X.trim().match(/^```\s*$/)){let L=Z.length;Z.push(z.join(`
`)),N.push(`@@MERMAID_BLOCK_${L}@@`),K=!1,z=[];continue}if(K)z.push(X);else N.push(X)}if(K)N.push("```mermaid"),N.push(...z);return{text:N.join(`
`),blocks:Z}}function R5(_){if(!_)return _;return J1(_,5)}function v5(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function u5(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function m5(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let N=Number(Z),K=$[N]??"",z=R5(K);return`<div class="mermaid-container" data-mermaid="${v5(z)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function F8(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var g5={span:new Set(["title","class","lang","dir"])};function p5(_,$){let j=g5[_];if(!j||!$)return"";let Z=[],N=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,K;while(K=N.exec($)){let z=(K[1]||"").toLowerCase();if(!z||z.startsWith("on")||!j.has(z))continue;let X=K[2]??K[3]??K[4]??"";Z.push(` ${z}="${k4(X)}"`)}return Z.join("")}function H8(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),N=Z.startsWith("/"),K=N?Z.slice(1).trim():Z,X=K.endsWith("/")?K.slice(0,-1).trim():K,[L=""]=X.split(/\s+/,1),q=L.toLowerCase();if(!q||!M5.has(q))return $;if(q==="br")return N?"":"<br>";if(N)return`</${q}>`;let U=X.slice(L.length).trim(),V=p5(q,U);return`<${q}${V}>`})}function D8(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function J8(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(K)=>K.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),N;while(N=j.nextNode()){if(!N.nodeValue)continue;let K=Z(N.nodeValue);if(K!==N.nodeValue)N.nodeValue=K}return $.body.innerHTML}function c5(_){if(!window.katex)return _;let $=(z)=>O8(z).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(z)=>{let X=[],L=z.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(q)=>{let U=X.length;return X.push(q),`@@CODE_BLOCK_${U}@@`});return L=L.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(q)=>{let U=X.length;return X.push(q),`@@CODE_INLINE_${U}@@`}),{html:L,blocks:X}},Z=(z,X)=>{if(!X.length)return z;return z.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(L,q)=>{let U=Number(q);return X[U]??""})},N=j(_),K=N.html;return K=K.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(z,X,L)=>{try{let q=katex.renderToString($(L.trim()),{displayMode:!0,throwOnError:!1});return`${X}${q}`}catch(q){return`<span class="math-error" title="${k4(q.message)}">${z}</span>`}}),K=K.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(z,X,L)=>{if(/\s$/.test(L))return z;try{let q=katex.renderToString($(L),{displayMode:!1,throwOnError:!1});return`${X}${q}`}catch(q){return`${X}<span class="math-error" title="${k4(q.message)}">$${L}$</span>`}}),Z(K,N.blocks)}function h5(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],N;while(N=j.nextNode())Z.push(N);for(let K of Z){let z=K.nodeValue;if(!z)continue;if(D1.lastIndex=0,!D1.test(z))continue;D1.lastIndex=0;let X=K.parentElement;if(X&&(X.closest("a")||X.closest("code")||X.closest("pre")))continue;let L=z.split(D1);if(L.length<=1)continue;let q=$.createDocumentFragment();L.forEach((U,V)=>{if(V%2===1){let H=$.createElement("a");H.setAttribute("href","#"),H.className="hashtag",H.setAttribute("data-hashtag",U),H.textContent=`#${U}`,q.appendChild(H)}else q.appendChild($.createTextNode(U))}),K.parentNode?.replaceChild(q,K)}return $.body.innerHTML}function i5(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],N=!1;for(let K of j){if(!N&&K.trim().match(/^```(?:math|katex|latex)\s*$/i)){N=!0,Z.push("$$");continue}if(N&&K.trim().match(/^```\s*$/)){N=!1,Z.push("$$");continue}Z.push(K)}return Z.join(`
`)}function $$(_,$,j={}){if(!_)return"";let Z=i5(_),{text:N,blocks:K}=f5(Z),z=J1(N,2),L=F8(z).replace(/</g,"&lt;").replace(/>/g,"&gt;"),q=H8(L),U=window.marked?marked.parse(q,{headerIds:!1,mangle:!1}):q.replace(/\n/g,"<br>");return U=D8(U),U=J8(U),U=c5(U),U=h5(U),U=m5(U,K),U=B8(U,j),U}function y1(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=J1($,2),N=F8(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),K=H8(N),z=window.marked?marked.parse(K):K.replace(/\n/g,"<br>");return z=D8(z),z=J8(z),z=B8(z),z}function l5(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,N,K)=>{let z=N.trim().split(/\s+/).map((L)=>{let[q,U]=L.split(",").map(Number);return{x:q,y:U}});if(z.length<3)return`<polyline${Z}points="${N}"${K}/>`;let X=[`M ${z[0].x},${z[0].y}`];for(let L=1;L<z.length-1;L++){let q=z[L-1],U=z[L],V=z[L+1],H=U.x-q.x,w=U.y-q.y,R=V.x-U.x,m=V.y-U.y,u=Math.sqrt(H*H+w*w),P=Math.sqrt(R*R+m*m),M=Math.min($,u/2,P/2);if(M<0.5){X.push(`L ${U.x},${U.y}`);continue}let c=U.x-H/u*M,J=U.y-w/u*M,p=U.x+R/P*M,d=U.y+m/P*M,l=H*m-w*R>0?1:0;X.push(`L ${c},${J}`),X.push(`A ${M},${M} 0 0 ${l} ${p},${d}`)}return X.push(`L ${z[z.length-1].x},${z[z.length-1].y}`),`<path${Z}d="${X.join(" ")}"${K}/>`})}async function v$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,N=U8()==="dark"?j["tokyo-night"]:j["github-light"],K=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let z of K)try{let X=z.dataset.mermaid,L=u5(X||""),q=J1(L,2),U=await $(q,{...N,transparent:!0});U=l5(U),z.innerHTML=U,z.removeAttribute("data-mermaid")}catch(X){console.error("Mermaid render error:",X);let L=document.createElement("pre");L.className="mermaid-error",L.textContent=`Diagram error: ${X.message}`,z.innerHTML="",z.appendChild(L),z.removeAttribute("data-mermaid")}}function y8(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function k8(_){return String(_||"").trim()||"web:default"}function E8(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function w8(_){if(!_)return!1;return _.status!=="running"}function A8(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function P8({session:_,onClose:$,onInject:j,onRetry:Z}){let N=k(null),K=k(null),z=_?.thinking?y1(_.thinking):"",X=_?.answer?$$(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(N.current&&z)v$(N.current).catch(()=>{})},[z]),v(()=>{if(K.current&&X)v$(K.current).catch(()=>{})},[X]),!_)return null;let L=_.status==="running",q=Boolean(String(_.answer||"").trim()),U=Boolean(String(_.thinking||"").trim()),V=E8(_),H=w8(_),w=!L&&q,R=L?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${R}</span>
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
            ${U&&B`
                <details class="btw-block btw-thinking" open=${L?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${N}
                        dangerouslySetInnerHTML=${{__html:z}}
                    ></div>
                </details>
            `}
            ${V&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${K}
                        dangerouslySetInnerHTML=${{__html:X}}
                    ></div>
                </div>
            `}

            ${H&&B`
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
    `}var b8="PiClaw";function E4(_,$,j=!1){let Z=_||"PiClaw",N=Z.charAt(0).toUpperCase(),K=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],z=N.charCodeAt(0)%K.length,X=K[z],L=Z.trim().toLowerCase(),q=typeof $==="string"?$.trim():"",U=q?q:null,V=j||L==="PiClaw".toLowerCase()||L==="pi";return{letter:N,color:X,image:U||(V?"/static/icon-192.png":null)}}function x8(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function M8(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function I8(_){if(!_)return null;if(typeof document<"u"){let K=document.documentElement,z=K?.dataset?.colorTheme||"",X=K?.dataset?.tint||"",L=getComputedStyle(K).getPropertyValue("--accent-color")?.trim();if(L&&(X||z&&z!=="default"))return L}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let K=0;K<j.length;K+=1)Z=(Z*31+j.charCodeAt(K))%2147483647;let N=Math.abs(Z)%$.length;return $[N]}function d5(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function i2(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function C8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return i2(_)?"Compacting context":"Working..."}function n5(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,N=Math.floor($/3600);if(N>0)return`${N}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function T8(_,$=Date.now()){let j=d5(_);if(j===null)return null;return n5(Math.max(0,$-j))}function S8({status:_,draft:$,plan:j,thought:Z,pendingRequest:N,intent:K,turnId:z,steerQueued:X,onPanelToggle:L}){let V=(__)=>{if(!__)return{text:"",totalLines:0,fullText:""};if(typeof __==="string"){let J_=__,_0=J_?J_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:J_,totalLines:_0,fullText:J_}}let F_=__.text||"",Z_=__.fullText||__.full_text||F_,D_=Number.isFinite(__.totalLines)?__.totalLines:Z_?Z_.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:F_,totalLines:D_,fullText:Z_}},H=160,w=(__)=>String(__||"").replace(/<\/?internal>/gi,""),R=(__)=>{if(!__)return 1;return Math.max(1,Math.ceil(__.length/160))},m=(__,F_,Z_)=>{let D_=(__||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!D_)return{text:"",omitted:0,totalLines:Number.isFinite(Z_)?Z_:0,visibleLines:0};let J_=D_.split(`
`),_0=J_.length>F_?J_.slice(0,F_).join(`
`):D_,d_=Number.isFinite(Z_)?Z_:J_.reduce((g_,I_)=>g_+R(I_),0),R_=_0?_0.split(`
`).reduce((g_,I_)=>g_+R(I_),0):0,n_=Math.max(d_-R_,0);return{text:_0,omitted:n_,totalLines:d_,visibleLines:R_}},u=V(j),P=V(Z),M=V($),c=Boolean(u.text)||u.totalLines>0,J=Boolean(P.text)||P.totalLines>0,p=Boolean(M.fullText?.trim()||M.text?.trim());if(!_&&!p&&!c&&!J&&!N&&!K)return null;let[d,t]=S(new Set),[l,j_]=S(()=>Date.now()),i=(__)=>t((F_)=>{let Z_=new Set(F_),D_=!Z_.has(__);if(D_)Z_.add(__);else Z_.delete(__);if(typeof L==="function")L(__,D_);return Z_});v(()=>{t(new Set)},[z]);let G_=i2(_);v(()=>{if(!G_)return;j_(Date.now());let __=setInterval(()=>j_(Date.now()),1000);return()=>clearInterval(__)},[G_,_?.started_at,_?.startedAt]);let u_=_?.turn_id||z,r=I8(u_),s=X?"turn-dot turn-dot-queued":"turn-dot",N_=(__)=>__,$_=Boolean(_?.last_activity||_?.lastActivity),Y_=(__)=>__==="warning"?"#f59e0b":__==="error"?"var(--danger-color)":__==="success"?"var(--success-color)":r,w_=K?.kind||"info",U_=Y_(w_),W_=Y_(_?.kind||(G_?"warning":"info")),X_="",M_=_?.title,f_=_?.status;if(_?.type==="plan")X_=M_?`Planning: ${M_}`:"Planning...";else if(_?.type==="tool_call")X_=M_?`Running: ${M_}`:"Running tool...";else if(_?.type==="tool_status")X_=M_?`${M_}: ${f_||"Working..."}`:f_||"Working...";else if(_?.type==="error")X_=M_||"Agent error";else X_=M_||f_||"Working...";if($_)X_="Last activity just now";let H_=({panelTitle:__,text:F_,fullText:Z_,totalLines:D_,maxLines:J_,titleClass:_0,panelKey:d_})=>{let R_=d.has(d_),n_=Z_||F_||"",g_=d_==="thought"||d_==="draft"?w(n_):n_,I_=typeof J_==="number",y_=R_&&I_,P_=I_?m(g_,J_,D_):{text:g_||"",omitted:0,totalLines:Number.isFinite(D_)?D_:0};if(!g_&&!(Number.isFinite(P_.totalLines)&&P_.totalLines>0))return null;let K0=`agent-thinking-body${I_?" agent-thinking-body-collapsible":""}`,X0=I_?`--agent-thinking-collapsed-lines: ${J_};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${R_?"true":"false"}
                data-collapsible=${I_?"true":"false"}
                style=${r?`--turn-color: ${r};`:""}
            >
                <div class="agent-thinking-title ${_0||""}">
                    ${r&&B`<span class=${s} aria-hidden="true"></span>`}
                    ${__}
                    ${y_&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${__} panel`}
                            onClick=${()=>i(d_)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${K0}
                    style=${X0}
                    dangerouslySetInnerHTML=${{__html:y1(g_)}}
                />
                ${!R_&&P_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(d_)}>
                        ▸ ${P_.omitted} more lines
                    </button>
                `}
                ${R_&&P_.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>i(d_)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},A_=N?.tool_call?.title,m_=A_?`Awaiting approval: ${A_}`:"Awaiting approval",U0=G_?T8(_,l):null,q_=(__,F_,Z_=null)=>{let D_=C8(__);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${F_?`--turn-color: ${F_};`:""}
                title=${__?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${F_&&B`<span class=${s} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${D_}</span>
                    ${Z_&&B`<span class="agent-status-elapsed">${Z_}</span>`}
                </div>
                ${__.detail&&B`<div class="agent-thinking-body">${__.detail}</div>`}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${K&&q_(K,U_)}
            ${_?.type==="intent"&&q_(_,W_,U0)}
            ${N&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    <span class=${s} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${m_}</span>
                </div>
            `}
            ${c&&H_({panelTitle:N_("Planning"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,panelKey:"plan"})}
            ${J&&H_({panelTitle:N_("Thoughts"),text:P.text,fullText:P.fullText,totalLines:P.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${p&&H_({panelTitle:N_("Draft"),text:M.text,fullText:M.fullText,totalLines:M.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${$_?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${r?`--turn-color: ${r};`:""}>
                    ${r&&B`<span class=${s} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!$_&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${X_}</span>
                </div>
            `}
        </div>
    `}function f8({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:N,chat_jid:K}=_,z=Z?.title||"Agent Request",X=Z?.kind||"other",L=Z?.rawInput||{},q=L.command||L.commands&&L.commands[0]||null,U=L.diff||null,V=L.fileName||L.path||null,H=Z?.description||L.description||L.explanation||null,R=(Array.isArray(Z?.locations)?Z.locations:[]).map((c)=>c?.path).filter((c)=>Boolean(c)),m=Array.from(new Set([V,...R].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:N});let u=async(c)=>{try{await q1(j,c,K||null),$()}catch(J){console.error("Failed to respond to agent request:",J)}},P=async()=>{try{await K4(z,`Auto-approved: ${z}`),await q1(j,"approved",K||null),$()}catch(c){console.error("Failed to add to whitelist:",c)}},M=N&&N.length>0;return B`
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
                ${(H||q||U||m.length>0)&&B`
                    <div class="agent-request-body">
                        ${H&&B`
                            <div class="agent-request-description">${H}</div>
                        `}
                        ${m.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${m.map((c,J)=>B`<li key=${J}>${c}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${q&&B`
                            <pre class="agent-request-command">${q}</pre>
                        `}
                        ${U&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${U}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${M?N.map((c)=>B`
                            <button 
                                key=${c.optionId||c.id||String(c)}
                                class="agent-request-btn ${c.kind==="allow_once"||c.kind==="allow_always"?"primary":""}"
                                onClick=${()=>u(c.optionId||c.id||c)}
                            >
                                ${c.name||c.label||c.optionId||c.id||String(c)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>u("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>u("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${P}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}function R8(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,N=Z/1000,K=86400000;if(Z<K){if(N<60)return"just now";if(N<3600)return`${Math.floor(N/60)}m`;return`${Math.floor(N/3600)}h`}if(Z<5*K){let L=$.toLocaleDateString(void 0,{weekday:"short"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${L} ${q}`}let z=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),X=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${z} ${X}`}function l2(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function X$(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function X2(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}var o5=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),s5=new Set(["text/markdown"]),r5=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),a5=new Set(["application/vnd.jgraph.mxfile"]);function d2(_){return typeof _==="string"?_.trim().toLowerCase():""}function t5(_){let $=d2(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function e5(_){let $=d2(_);return!!$&&$.endsWith(".pdf")}function _7(_){let $=d2(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function n2(_,$){let j=d2(_);if(t5($)||a5.has(j))return"drawio";if(e5($)||j==="application/pdf")return"pdf";if(_7($)||r5.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(o5.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function v8(_){let $=d2(_);return s5.has($)}function u8(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function $7(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((N)=>`${N}${N}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function j7(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),N=Number(j[2]),K=Number(j[3]);if(![Z,N,K].every((z)=>Number.isFinite(z)))return null;return{r:Z,g:N,b:K}}function m8(_){return $7(_)||j7(_)}function k1(_){let $=(K)=>{let z=K/255;return z<=0.03928?z/12.92:((z+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),N=$(_.b);return 0.2126*j+0.7152*Z+0.0722*N}function Z7(_,$){let j=Math.max(k1(_),k1($)),Z=Math.min(k1(_),k1($));return(j+0.05)/(Z+0.05)}function N7(_,$,j="#ffffff"){let Z=m8(_);if(!Z)return j;let N=j,K=-1;for(let z of $){let X=m8(z);if(!X)continue;let L=Z7(Z,X);if(L>K)N=z,K=L}return N}function w4(){let _=getComputedStyle(document.documentElement),$=(R,m)=>{for(let u of R){let P=_.getPropertyValue(u).trim();if(P)return P}return m},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),N=$(["--bg-primary","--color-bg-primary"],"#ffffff"),K=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),z=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),X=$(["--accent-color","--color-accent"],"#1d9bf0"),L=$(["--success-color","--color-success"],"#00ba7c"),q=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),U=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),H=$(["--font-family"],"system-ui, sans-serif"),w=N7(X,[j,N],j);return{fg:j,fgMuted:Z,bgPrimary:N,bg:K,bgEmphasis:z,accent:X,good:L,warning:q,attention:U,border:V,fontFamily:H,buttonTextColor:w}}function g8(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:N,good:K,warning:z,attention:X,border:L,fontFamily:q}=w4();return{fontFamily:q,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:N,subtle:N},good:{default:K,subtle:K},warning:{default:z,subtle:z},attention:{default:X,subtle:X}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:L},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var K7=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),p8=!1,E1=null,c8=!1;function A4(_){_.querySelector(".adaptive-card-notice")?.remove()}function Y7(_,$,j="error"){A4(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function z7(_,$=(j)=>$$(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function G7(_=($)=>$$($,null)){return($,j)=>{try{let Z=z7($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function W7(_){if(c8||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=G7(),c8=!0}async function X7(){if(p8)return;if(E1)return E1;return E1=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{p8=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),E1}function q7(){return globalThis.AdaptiveCards}function V7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function L7(_){return K7.has(_)}function b4(_){if(!Array.isArray(_))return[];return _.filter(V7)}function Q7(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,N=_?.data??void 0;return{type:$,title:j,data:N,url:Z,raw:_}}function P4(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>P4($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${P4(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function U7(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return P4($);return typeof $==="string"?$:String($)}function B7(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(N)=>{if(Array.isArray(N))return N.map((X)=>Z(X));if(!N||typeof N!=="object")return N;let z={...N};if(typeof z.id==="string"&&z.id in j&&String(z.type||"").startsWith("Input."))z.value=U7(z.type,j[z.id],z);for(let[X,L]of Object.entries(z))if(Array.isArray(L)||L&&typeof L==="object")z[X]=Z(L);return z};return Z(_)}function O7(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function F7(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function H7(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",N=F7(_.completed_at||j?.submitted_at),K=[Z||null,N||null].filter(Boolean).join(" · ")||null;return{label:$,detail:K}}async function h8(_,$,j){if(!L7($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await X7()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=q7();W7(Z);let N=new Z.AdaptiveCard,K=w4();N.hostConfig=new Z.HostConfig(g8());let z=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,X=$.state==="active"?$.payload:B7($.payload,z);N.parse(X),N.onExecuteAction=(U)=>{let V=Q7(U);if(j?.onAction)A4(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((H)=>{console.error("[adaptive-card] Action failed:",H);let w=H instanceof Error?H.message:String(H||"Action failed.");Y7(_,w||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let L=N.render();if(!L)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",K.buttonTextColor);let q=H7($);if(q){_.classList.add("adaptive-card-finished");let U=document.createElement("div");U.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=q.label,U.appendChild(V),q.detail){let H=document.createElement("span");H.className="adaptive-card-status-detail",H.textContent=q.detail,U.appendChild(H)}_.appendChild(U)}if(A4(_),_.appendChild(L),q)O7(L);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function o2(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>o2($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${o2(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function i8(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:o2(j)})).filter(($)=>$.value)}function D7(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function x4(_){if(!Array.isArray(_))return[];return _.filter(D7)}function l8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=o2(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let N=i8(j).map(({key:K,value:z})=>`${K}: ${z}`);return N.length>0?`Card submission: ${$} — ${N.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function d8(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=i8(_.data),Z=j.length>0?j.slice(0,2).map(({key:K,value:z})=>`${K}: ${z}`).join(", "):o2(_.data)||null,N=j.length;return{title:$,summary:Z,fields:j,fieldCount:N,submittedAt:_.submitted_at}}function J7(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?X$($):null},{label:"Added",value:_?.created_at?X2(_.created_at):null}].filter((Z)=>Z.value)}function y7(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),N=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${N}&name=${Z}#media=${N}&name=${Z}`;if(j==="office"){let K=W$(_);return`/office-viewer/?url=${encodeURIComponent(K)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${N}&name=${Z}&readonly=1#media=${N}&name=${Z}&readonly=1`;return null}function n8({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,N=h_(()=>n2($?.content_type,Z),[$?.content_type,Z]),K=u8(N),z=h_(()=>v8($?.content_type),[$?.content_type]),[X,L]=S(N==="text"),[q,U]=S(""),[V,H]=S(null),w=k(null),R=h_(()=>J7($),[$]),m=h_(()=>y7(_,Z,N),[_,Z,N]),u=h_(()=>{if(!z||!q)return"";return $$(q)},[z,q]);return v(()=>{let P=(M)=>{if(M.key==="Escape")j()};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[j]),v(()=>{if(!w.current||!u)return;v$(w.current);return},[u]),v(()=>{let P=!1;async function M(){if(N!=="text"){L(!1),H(null);return}L(!0),H(null);try{let c=await W4(_);if(!P)U(c)}catch{if(!P)H("Failed to load text preview.")}finally{if(!P)L(!1)}}return M(),()=>{P=!0}},[_,N]),B`
        <div class="image-modal attachment-preview-modal" onClick=${j}>
            <div class="attachment-preview-shell" onClick=${(P)=>{P.stopPropagation()}}>
                <div class="attachment-preview-header">
                    <div class="attachment-preview-heading">
                        <div class="attachment-preview-title">${Z}</div>
                        <div class="attachment-preview-subtitle">${K}</div>
                    </div>
                    <div class="attachment-preview-header-actions">
                        ${m&&B`
                            <a
                                href=${m}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="attachment-preview-download"
                                onClick=${(P)=>P.stopPropagation()}
                            >
                                Open in Tab
                            </a>
                        `}
                        <a
                            href=${W$(_)}
                            download=${Z}
                            class="attachment-preview-download"
                            onClick=${(P)=>P.stopPropagation()}
                        >
                            Download
                        </a>
                        <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                    </div>
                </div>
                <div class="attachment-preview-body">
                    ${X&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                    ${!X&&V&&B`<div class="attachment-preview-state">${V}</div>`}
                    ${!X&&!V&&N==="image"&&B`
                        <img class="attachment-preview-image" src=${W$(_)} alt=${Z} />
                    `}
                    ${!X&&!V&&(N==="pdf"||N==="office"||N==="drawio")&&m&&B`
                        <iframe class="attachment-preview-frame" src=${m} title=${Z}></iframe>
                    `}
                    ${!X&&!V&&N==="drawio"&&B`
                        <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                    `}
                    ${!X&&!V&&N==="text"&&z&&B`
                        <div
                            ref=${w}
                            class="attachment-preview-markdown post-content"
                            dangerouslySetInnerHTML=${{__html:u}}
                        />
                    `}
                    ${!X&&!V&&N==="text"&&!z&&B`
                        <pre class="attachment-preview-text">${q}</pre>
                    `}
                    ${!X&&!V&&N==="unsupported"&&B`
                        <div class="attachment-preview-state">
                            Preview is not available for this file type yet. You can still download it directly.
                        </div>
                    `}
                </div>
                <div class="attachment-preview-meta">
                    ${R.map((P)=>B`
                        <div class="attachment-preview-meta-item" key=${P.label}>
                            <span class="attachment-preview-meta-label">${P.label}</span>
                            <span class="attachment-preview-meta-value">${P.value}</span>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    `}function o8({src:_,onClose:$}){return v(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <div class="image-modal" onClick=${$}>
            <img src=${_} alt="Full size" />
        </div>
    `}function k7({mediaId:_,onPreview:$}){let[j,Z]=S(null);if(v(()=>{D2(_).then(Z).catch(()=>{})},[_]),!j)return null;let N=j.filename||"file",K=j.metadata?.size,z=K?X$(K):"",L=n2(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(q)=>q.stopPropagation()}>
            <a href=${W$(_)} download=${N} class="file-attachment-main">
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
                        ${z&&B`<span class="file-size">${z}</span>`}
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
                onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${L}
            </button>
        </div>
    `}function E7({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,N]=S(null);v(()=>{if(!Number.isFinite(j))return;D2(j).then(N).catch(()=>{});return},[j]);let K=Z?.filename||_.label||`attachment-${_.id}`,z=Number.isFinite(j)?W$(j):null,L=n2(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${K}>
            ${z?B`
                    <a href=${z} download=${K} class="attachment-pill-main" onClick=${(q)=>q.stopPropagation()}>
                        <${B$}
                            prefix="post"
                            label=${_.label}
                            title=${K}
                        />
                    </a>
                `:B`
                    <${B$}
                        prefix="post"
                        label=${_.label}
                        title=${K}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${L}
                    onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function w1({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,N=Z?X2(Z):null;return B`
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
    `}function w7({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?X$(_.size):"",N=_.mime_type||"",K=P7(N),z=W2(_.uri);return B`
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
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${N&&B`<span>${N}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function A7({block:_}){let[$,j]=S(!1),Z=_.uri||"Embedded resource",N=_.text||"",K=Boolean(_.data),z=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${N&&B`<pre class="resource-embed-content">${N}</pre>`}
                ${K&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${z&&B`<span class="resource-embed-blob-meta">${z}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(X)=>{X.preventDefault(),X.stopPropagation();let L=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:z||"application/octet-stream"}),q=URL.createObjectURL(L),U=document.createElement("a");U.href=q,U.download=Z.split("/").pop()||"resource",U.click(),URL.revokeObjectURL(q)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function P7(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function b7({preview:_}){let $=W2(_.url),j=W2(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",N=_.site_name;if(!N&&$)try{N=new URL($).hostname}catch{N=$}return B`
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
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function x7(_,$){return typeof _==="string"?_:""}var M7=1800,I7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,C7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,T7=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function S7(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function f7(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((K)=>K.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],N=(K,z)=>{let X=z||"idle";if(K.dataset.copyState=X,X==="success")K.innerHTML=C7,K.setAttribute("aria-label","Copied"),K.setAttribute("title","Copied"),K.classList.add("is-success"),K.classList.remove("is-error");else if(X==="error")K.innerHTML=T7,K.setAttribute("aria-label","Copy failed"),K.setAttribute("title","Copy failed"),K.classList.add("is-error"),K.classList.remove("is-success");else K.innerHTML=I7,K.setAttribute("aria-label","Copy code"),K.setAttribute("title","Copy code"),K.classList.remove("is-success","is-error")};return $.forEach((K)=>{let z=document.createElement("div");z.className="post-code-block",K.parentNode?.insertBefore(z,K),z.appendChild(K);let X=document.createElement("button");X.type="button",X.className="post-code-copy-btn",N(X,"idle"),z.appendChild(X);let L=async(q)=>{q.preventDefault(),q.stopPropagation();let V=K.querySelector("code")?.textContent||"",H=await S7(V);N(X,H?"success":"error");let w=j.get(X);if(w)clearTimeout(w);let R=setTimeout(()=>{N(X,"idle"),j.delete(X)},M7);j.set(X,R)};X.addEventListener("click",L),Z.push(()=>{X.removeEventListener("click",L);let q=j.get(X);if(q)clearTimeout(q);if(z.parentNode)z.parentNode.insertBefore(K,z),z.remove()})}),()=>{Z.forEach((K)=>K())}}function R7(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Files:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,fileRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q))N.push(q.replace(/^\s*-\s+/,"").trim());else if(!q.trim())break;else break}if(N.length===0)return{content:_,fileRefs:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,fileRefs:N}}function v7(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1)if(j[q].trim()==="Referenced messages:"&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}if(Z===-1)return{content:_,messageRefs:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q)){let V=q.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)N.push(V[1])}else if(!q.trim())break;else break}if(N.length===0)return{content:_,messageRefs:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,messageRefs:N}}function u7(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let q=0;q<j.length;q+=1){let U=j[q].trim();if((U==="Images:"||U==="Attachments:")&&j[q+1]&&/^\s*-\s+/.test(j[q+1])){Z=q;break}}if(Z===-1)return{content:_,attachments:[]};let N=[],K=Z+1;for(;K<j.length;K+=1){let q=j[K];if(/^\s*-\s+/.test(q)){let U=q.replace(/^\s*-\s+/,"").trim(),V=U.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||U.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let H=V[1],w=(V[2]||"").trim()||H;N.push({id:H,label:w,raw:U})}else N.push({id:null,label:U,raw:U})}else if(!q.trim())break;else break}if(N.length===0)return{content:_,attachments:[]};let z=j.slice(0,Z),X=j.slice(K),L=[...z,...X].join(`
`);return L=L.replace(/\n{3,}/g,`

`).trim(),{content:L,attachments:N}}function m7(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g7(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(m7).sort((U,V)=>V.length-U.length),N=new RegExp(`(${Z.join("|")})`,"gi"),K=new RegExp(`^(${Z.join("|")})$`,"i"),z=new DOMParser().parseFromString(_,"text/html"),X=z.createTreeWalker(z.body,NodeFilter.SHOW_TEXT),L=[],q;while(q=X.nextNode())L.push(q);for(let U of L){let V=U.nodeValue;if(!V||!N.test(V)){N.lastIndex=0;continue}N.lastIndex=0;let H=U.parentElement;if(H&&H.closest("code, pre, script, style"))continue;let w=V.split(N).filter((m)=>m!=="");if(w.length===0)continue;let R=z.createDocumentFragment();for(let m of w)if(K.test(m)){let u=z.createElement("mark");u.className="search-highlight-term",u.textContent=m,R.appendChild(u)}else R.appendChild(z.createTextNode(m));U.parentNode.replaceChild(R,U)}return z.body.innerHTML}function s8({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:N,agentName:K,agentAvatarUrl:z,userName:X,userAvatarUrl:L,userAvatarBackground:q,onDelete:U,isThreadReply:V,isThreadPrev:H,isThreadNext:w,isRemoving:R,highlightQuery:m,onFileRef:u}){let[P,M]=S(null),c=k(null),J=_.data,p=J.type==="agent_response",d=X||"You",t=p?K||b8:d,l=p?E4(K,z,!0):E4(d,L),j_=typeof q==="string"?q.trim().toLowerCase():"",i=!p&&l.image&&(j_==="clear"||j_==="transparent"),G_=p&&Boolean(l.image),u_=`background-color: ${i||G_?"transparent":l.color}`,r=J.content_meta,s=Boolean(r?.truncated),N_=Boolean(r?.preview),$_=s&&!N_,Y_=s?{originalLength:Number.isFinite(r?.original_length)?r.original_length:J.content?J.content.length:0,maxLength:Number.isFinite(r?.max_length)?r.max_length:0}:null,w_=J.content_blocks||[],U_=J.media_ids||[],W_=x7(J.content,J.link_previews),{content:X_,fileRefs:M_}=R7(W_),{content:f_,messageRefs:H_}=v7(X_),{content:A_,attachments:m_}=u7(f_);W_=A_;let U0=b4(w_),q_=x4(w_),__=U0.length===1&&typeof U0[0]?.fallback_text==="string"?U0[0].fallback_text.trim():"",F_=q_.length===1?l8(q_[0]).trim():"",Z_=Boolean(__)&&W_?.trim()===__||Boolean(F_)&&W_?.trim()===F_,D_=Boolean(W_)&&!$_&&!Z_,J_=typeof m==="string"?m.trim():"",_0=h_(()=>{if(!W_||Z_)return"";let C=$$(W_,j);return J_?g7(C,J_):C},[W_,Z_,J_]),d_=(C,a)=>{C.stopPropagation(),M(W$(a))},[R_,n_]=S(null),g_=(C)=>{n_(C)},I_=(C)=>{C.stopPropagation(),U?.(_)},y_=(C,a)=>{let B_=new Set;if(!C||a.length===0)return{content:C,usedIds:B_};return{content:C.replace(/attachment:([^\s)"']+)/g,(z0,V$,$0,q0)=>{let C_=V$.replace(/^\/+/,""),h0=a.find((H0)=>H0.name&&H0.name.toLowerCase()===C_.toLowerCase()&&!B_.has(H0.id))||a.find((H0)=>!B_.has(H0.id));if(!h0)return z0;if(B_.add(h0.id),q0.slice(Math.max(0,$0-2),$0)==="](")return`/media/${h0.id}`;return h0.name||"attachment"}),usedIds:B_}},P_=[],K0=[],X0=[],o_=[],F0=[],Z0=[],v_=0;if(w_.length>0)w_.forEach((C)=>{if(C?.type==="text"&&C.annotations)Z0.push(C.annotations);if(C?.type==="resource_link")o_.push(C);else if(C?.type==="resource")F0.push(C);else if(C?.type==="file"){let a=U_[v_++];if(a)K0.push(a),X0.push({id:a,name:C?.name||C?.filename||C?.title})}else if(C?.type==="image"||!C?.type){let a=U_[v_++];if(a){let B_=typeof C?.mime_type==="string"?C.mime_type:void 0;P_.push({id:a,annotations:C?.annotations,mimeType:B_}),X0.push({id:a,name:C?.name||C?.filename||C?.title})}}});else if(U_.length>0){let C=m_.length>0;U_.forEach((a,B_)=>{let Q_=m_[B_]||null;if(X0.push({id:a,name:Q_?.label||null}),C)K0.push(a);else P_.push({id:a,annotations:null})})}if(m_.length>0)m_.forEach((C)=>{if(!C?.id)return;let a=X0.find((B_)=>String(B_.id)===String(C.id));if(a&&!a.name)a.name=C.label});let{content:G0,usedIds:r_}=y_(W_,X0);W_=G0;let p_=P_.filter(({id:C})=>!r_.has(C)),N0=K0.filter((C)=>!r_.has(C)),c_=m_.length>0?m_.map((C,a)=>({id:C.id||`attachment-${a+1}`,label:C.label||`attachment-${a+1}`})):X0.map((C,a)=>({id:C.id,label:C.name||`attachment-${a+1}`})),Y0=h_(()=>b4(w_),[w_]),P0=h_(()=>x4(w_),[w_]),L_=h_(()=>{return Y0.map((C)=>`${C.card_id}:${C.state}`).join("|")},[Y0]);v(()=>{if(!c.current)return;return v$(c.current),f7(c.current)},[_0]);let b_=k(null);return v(()=>{if(!b_.current||Y0.length===0)return;let C=b_.current;C.innerHTML="";for(let a of Y0){let B_=document.createElement("div");C.appendChild(B_),h8(B_,a,{onAction:async(Q_)=>{if(Q_.type==="Action.OpenUrl"){let z0=W2(Q_.url||"");if(!z0)throw Error("Invalid URL");window.open(z0,"_blank","noopener,noreferrer");return}if(Q_.type==="Action.Submit"){await N4({post_id:_.id,thread_id:J.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:a.card_id,action:{type:Q_.type,title:Q_.title||"",data:Q_.data}});return}console.warn("[post] unsupported adaptive card action:",Q_.type,Q_)}}).catch((Q_)=>{console.error("[post] adaptive card render error:",Q_),B_.textContent=a.fallback_text||"Card failed to render."})}},[L_,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${p?"agent-post":""} ${V?"thread-reply":""} ${H?"thread-prev":""} ${w?"thread-next":""} ${R?"removing":""}" onClick=${$}>
            <div class="post-avatar ${p?"agent-avatar":""} ${l.image?"has-image":""}" style=${u_}>
                ${l.image?B`<img src=${l.image} alt=${t} />`:l.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${I_}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${t}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(C)=>{if(C.preventDefault(),C.stopPropagation(),Z)Z(_.id)}}>${R8(_.timestamp)}</a>
                </div>
                ${$_&&Y_&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${l2(Y_.originalLength)} chars
                            ${Y_.maxLength?B` • Display limit: ${l2(Y_.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${N_&&Y_&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${l2(Y_.maxLength)} of ${l2(Y_.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(M_.length>0||H_.length>0||c_.length>0)&&B`
                    <div class="post-file-refs">
                        ${H_.map((C)=>{let a=(B_)=>{if(B_.preventDefault(),B_.stopPropagation(),N)N(C,_.chat_jid||null);else{let Q_=document.getElementById("post-"+C);if(Q_)Q_.scrollIntoView({behavior:"smooth",block:"center"}),Q_.classList.add("post-highlight"),setTimeout(()=>Q_.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${C}`} class="post-msg-pill-link" onClick=${a}>
                                    <${B$}
                                        prefix="post"
                                        label=${"msg:"+C}
                                        title=${"Message "+C}
                                        icon="message"
                                        onClick=${a}
                                    />
                                </a>
                            `})}
                        ${M_.map((C)=>{let a=C.split("/").pop()||C;return B`
                                <${B$}
                                    prefix="post"
                                    label=${a}
                                    title=${C}
                                    onClick=${()=>u?.(C)}
                                />
                            `})}
                        ${c_.map((C)=>B`
                            <${E7}
                                key=${C.id}
                                attachment=${C}
                                onPreview=${g_}
                            />
                        `)}
                    </div>
                `}
                ${D_&&B`
                    <div 
                        ref=${c}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:_0}}
                        onClick=${(C)=>{if(C.target.classList.contains("hashtag")){C.preventDefault(),C.stopPropagation();let a=C.target.dataset.hashtag;if(a)j?.(a)}else if(C.target.tagName==="IMG")C.preventDefault(),C.stopPropagation(),M(C.target.src)}}
                    />
                `}
                ${Y0.length>0&&B`
                    <div ref=${b_} class="post-adaptive-cards" />
                `}
                ${P0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${P0.map((C,a)=>{let B_=d8(C),Q_=`${C.card_id}-${a}`;return B`
                                <div key=${Q_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${B_.title}</span>
                                        </div>
                                    </div>
                                    ${B_.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${B_.fields.map((z0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${z0.key}: ${z0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${z0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${z0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${X2(B_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${Z0.length>0&&B`
                    ${Z0.map((C,a)=>B`
                        <${w1} key=${a} annotations=${C} />
                    `)}
                `}
                ${p_.length>0&&B`
                    <div class="media-preview">
                        ${p_.map(({id:C,mimeType:a})=>{let Q_=typeof a==="string"&&a.toLowerCase().startsWith("image/svg")?W$(C):G4(C);return B`
                                <img 
                                    key=${C} 
                                    src=${Q_} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(z0)=>d_(z0,C)}
                                />
                            `})}
                    </div>
                `}
                ${p_.length>0&&B`
                    ${p_.map(({annotations:C},a)=>B`
                        ${C&&B`<${w1} key=${a} annotations=${C} />`}
                    `)}
                `}
                ${N0.length>0&&B`
                    <div class="file-attachments">
                        ${N0.map((C)=>B`
                            <${k7} key=${C} mediaId=${C} onPreview=${g_} />
                        `)}
                    </div>
                `}
                ${o_.length>0&&B`
                    <div class="resource-links">
                        ${o_.map((C,a)=>B`
                            <div key=${a}>
                                <${w7} block=${C} />
                                <${w1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${F0.length>0&&B`
                    <div class="resource-embeds">
                        ${F0.map((C,a)=>B`
                            <div key=${a}>
                                <${A7} block=${C} />
                                <${w1} annotations=${C.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${J.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${J.link_previews.map((C,a)=>B`
                            <${b7} key=${a} preview=${C} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${P&&B`<${o8} src=${P} onClose=${()=>M(null)} />`}
        ${R_&&B`
            <${n8}
                mediaId=${R_.mediaId}
                info=${R_.info}
                onClose=${()=>n_(null)}
            />
        `}
    `}function r8({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:N,onMessageRef:K,onScrollToMessage:z,onFileRef:X,emptyMessage:L,timelineRef:q,agents:U,user:V,onDeletePost:H,reverse:w=!0,removingPostIds:R,searchQuery:m}){let[u,P]=S(!1),M=k(null),c=typeof IntersectionObserver<"u",J=x(async()=>{if(!j||!$||u)return;P(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{P(!1)}},[$,u,j]),p=x((r)=>{let{scrollTop:s,scrollHeight:N_,clientHeight:$_}=r.target,Y_=w?N_-$_-s:s,w_=Math.max(300,$_);if(Y_<w_)J()},[w,J]);v(()=>{if(!c)return;let r=M.current,s=q?.current;if(!r||!s)return;let N_=300,$_=new IntersectionObserver((Y_)=>{for(let w_ of Y_){if(!w_.isIntersecting)continue;J()}},{root:s,rootMargin:`${N_}px 0px ${N_}px 0px`,threshold:0});return $_.observe(r),()=>$_.disconnect()},[c,$,j,q,J]);let d=k(J);if(d.current=J,v(()=>{if(c)return;if(!q?.current)return;let{scrollTop:r,scrollHeight:s,clientHeight:N_}=q.current,$_=w?s-N_-r:r,Y_=Math.max(300,N_);if($_<Y_)d.current?.()},[c,_,$,w,q]),v(()=>{if(!q?.current)return;if(!$||u)return;let{scrollTop:r,scrollHeight:s,clientHeight:N_}=q.current,$_=w?s-N_-r:r,Y_=Math.max(300,N_);if(s<=N_+1||$_<Y_)d.current?.()},[_,$,u,w,q]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${L||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let t=_.slice().sort((r,s)=>r.id-s.id),l=(r)=>{let s=r?.data?.thread_id;if(s===null||s===void 0||s==="")return null;let N_=Number(s);return Number.isFinite(N_)?N_:null},j_=new Map;for(let r=0;r<t.length;r+=1){let s=t[r],N_=Number(s?.id),$_=l(s);if($_!==null){let Y_=j_.get($_)||{anchorIndex:-1,replyIndexes:[]};Y_.replyIndexes.push(r),j_.set($_,Y_)}else if(Number.isFinite(N_)){let Y_=j_.get(N_)||{anchorIndex:-1,replyIndexes:[]};Y_.anchorIndex=r,j_.set(N_,Y_)}}let i=new Map;for(let[r,s]of j_.entries()){let N_=new Set;if(s.anchorIndex>=0)N_.add(s.anchorIndex);for(let $_ of s.replyIndexes)N_.add($_);i.set(r,Array.from(N_).sort(($_,Y_)=>$_-Y_))}let G_=t.map((r,s)=>{let N_=l(r);if(N_===null)return{hasThreadPrev:!1,hasThreadNext:!1};let $_=i.get(N_);if(!$_||$_.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let Y_=$_.indexOf(s);if(Y_<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:Y_>0,hasThreadNext:Y_<$_.length-1}}),u_=B`<div class="timeline-sentinel" ref=${M}></div>`;return B`
        <div class="timeline ${w?"reverse":"normal"}" ref=${q} onScroll=${p}>
            <div class="timeline-content">
                ${w?u_:null}
                ${t.map((r,s)=>{let N_=Boolean(r.data?.thread_id&&r.data.thread_id!==r.id),$_=R?.has?.(r.id),Y_=G_[s]||{};return B`
                    <${s8}
                        key=${r.id}
                        post=${r}
                        isThreadReply=${N_}
                        isThreadPrev=${Y_.hasThreadPrev}
                        isThreadNext=${Y_.hasThreadNext}
                        isRemoving=${$_}
                        highlightQuery=${m}
                        agentName=${x8(r.data?.agent_id,U||{})}
                        agentAvatarUrl=${M8(r.data?.agent_id,U||{})}
                        userName=${V?.name||V?.user_name}
                        userAvatarUrl=${V?.avatar_url||V?.avatarUrl||V?.avatar}
                        userAvatarBackground=${V?.avatar_background||V?.avatarBackground}
                        onClick=${()=>Z?.(r)}
                        onHashtagClick=${N}
                        onMessageRef=${K}
                        onScrollToMessage=${z}
                        onFileRef=${X}
                        onDelete=${H}
                    />
                `})}
                ${w?null:u_}
            </div>
        </div>
    `}class a8{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let N=Z.canHandle(_);if(N===!1||N===0)continue;let K=N===!0?0:typeof N==="number"?N:0;if(K>j)j=K,$=Z}catch(N){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,N)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var s_=new a8;var A1=null,M4=null;function p7(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function t8(){if(M4)return Promise.resolve(M4);if(!A1)A1=import(p7()).then((_)=>{return M4=_,_}).catch((_)=>{throw A1=null,_});return A1}class e8{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await t8();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var I4={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new e8(_,$)}};function C4(){t8().catch(()=>{})}var S4="piclaw://terminal";var c7={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},h7={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},P1=null,T4=null;function i7(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function l7(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(N,K)=>{let z=N instanceof Request?N.url:N instanceof URL?N.href:String(N);if(!i7(z))return $(N,K);if(N instanceof Request)return $(new Request(j,N));return $(j,K)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function d7(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!P1)P1=l7(()=>Promise.resolve($.init?.())).catch((j)=>{throw P1=null,j});return await P1,$}async function n7(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!T4)T4=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await T4}async function o7(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function s7(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function r7(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function u$(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function a7(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function _6(){let _=r7(),$=_?h7:c7,j=u$("--bg-primary",_?"#000000":"#ffffff"),Z=u$("--text-primary",_?"#e7e9ea":"#0f1419"),N=u$("--text-secondary",_?"#71767b":"#536471"),K=u$("--accent-color","#1d9bf0"),z=u$("--danger-color",_?"#ff7b72":"#cf222e"),X=u$("--success-color",_?"#7ee787":"#1a7f37"),L=u$("--bg-hover",_?"#1d1f23":"#e8ebed"),q=u$("--border-color",_?"#2f3336":"#eff3f4"),U=u$("--accent-soft-strong",a7(K,_?"47":"33"));return{background:j,foreground:Z,cursor:K,cursorAccent:j,selectionBackground:U,selectionForeground:Z,black:L,red:z,green:X,yellow:$.yellow,blue:K,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:q}}class f4{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,N=Number.isFinite($?.width)?$.width:0,K=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(N)}x${Math.round(K)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await d7();if(await n7(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:_6()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=_6(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let N=this.bodyEl.querySelector("canvas");if(N instanceof HTMLElement)N.style.backgroundColor=_.background,N.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let N=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(N?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)N?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=N}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await o7();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(s7($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:N})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:N}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let N=null;try{N=JSON.parse(String(Z.data))}catch{N={type:"output",data:String(Z.data)}}if(N?.type==="output"&&typeof N.data==="string"){_.write?.(N.data);return}if(N?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var R4={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new f4(_,$)}},v4={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new f4(_,$)}};function a$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function t7(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),N=Z?.[1]||j,K=Z?.[2]||"",z=Z?.[3]||"",X=String($||"").split("/").slice(0,-1).join("/"),q=N.startsWith("/")?N:`${X?`${X}/`:""}${N}`,U=[];for(let H of q.split("/")){if(!H||H===".")continue;if(H===".."){if(U.length>0)U.pop();continue}U.push(H)}let V=U.join("/");return`${L1(V)}${K}${z}`}function s2(_){return _?.preview||null}function e7(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,N=Z.lastIndexOf(".");if(N<=0||N===Z.length-1)return"none";return Z.slice(N+1)}function _j(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function $j(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${a$($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${a$(X$($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${a$(X2($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${a$(_j($))}</span>`),Z.push(`<span><strong>extension:</strong> ${a$(e7(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${a$(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function jj(_){let $=s2(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=$j(_,$);if($.kind==="image"){let Z=$.url||($.path?L1($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${a$(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=$$($.text||"",null,{rewriteImageSrc:(N)=>t7(N,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${a$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class u4{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=jj(this.context)}getContent(){let _=s2(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=s2(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var m4={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=s2(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new u4(_,$)}},g4={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return s2(_)||_?.path?1:!1},mount(_,$){return new u4(_,$)}};var Zj=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),Nj={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},Kj={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function j6(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function $6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Z6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=j6(j),K=Kj[N]||"\uD83D\uDCC4",z=Nj[N]||"Office Document",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${K}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${$6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${$6(z)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let L=X.querySelector("#ov-open-tab");if(L)L.addEventListener("click",()=>{let q=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class N6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=`/office-viewer/?url=${encodeURIComponent(N)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=K,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var p4={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=j6(_?.path);if(!$||!Zj.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new Z6(_,$);return new N6(_,$)}};var Yj=/\.(csv|tsv)$/i;function K6(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class Y6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",N=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${K6(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${K6(N)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#csv-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class z6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var c4={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Yj.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new Y6(_,$);return new z6(_,$)}};var zj=/\.pdf$/i;function Gj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class G6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Gj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#pdf-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class W6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var h4={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!zj.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new G6(_,$);return new W6(_,$)}};var Wj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function i4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class X6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",N=`/workspace/raw?path=${encodeURIComponent(j)}`,K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${i4(N)}" alt="${i4(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${i4(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let z=K.querySelector("#img-open-tab");if(z)z.addEventListener("click",()=>{let X=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(X)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class q6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l4={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Wj.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new X6(_,$);return new q6(_,$)}};var Xj=/\.(mp4|m4v|mov|webm|ogv)$/i;function qj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class V6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${qj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#video-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class L6{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var d4={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!Xj.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new V6(_,$);return new L6(_,$)}};function Vj(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function Lj(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var n4='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function Q6(_){let $=String(_||"").trim();return $?$:n4}function Qj(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function Uj(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function Bj(_,$="*"){try{let j=(K)=>{let z=_.parent||_.opener;if(!z)return!1;return z.postMessage(JSON.stringify({event:"workspace-export",...K}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let K=Z.prototype.saveData;Z.prototype.saveData=function(z,X,L,q,U,V){try{if(z&&L!=null&&j({filename:z,format:X,data:L,mimeType:q,base64Encoded:Boolean(U),defaultMode:V}))return}catch(H){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",H)}return K.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let N=_.App;if(N?.prototype&&!N.prototype.__piclawExportPatched){let K=N.prototype.exportFile;N.prototype.exportFile=function(z,X,L,q,U,V){try{if(X&&j({filename:X,data:z,mimeType:L,base64Encoded:Boolean(q),mode:U,folderId:V}))return}catch(H){console.warn("[drawio-pane] export intercept failed, falling back to native export",H)}return K.apply(this,arguments)},N.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||N?.prototype&&N.prototype.__piclawExportPatched)}catch{return!1}}async function U6(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${Uj(j)}`}class B6{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",N=document.createElement("div");N.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",N.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${Lj(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(N);let K=N.querySelector("#drawio-open-tab");if(K)K.addEventListener("click",()=>{let z=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(z)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class O6{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=Qj(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let N=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=N,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let K=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(Bj(this.iframe.contentWindow))return;setTimeout(K,250)};K()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=n4,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await U6(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await U6(_,"image/png");else this.xmlData=Q6(await _.text());else if(_.status===404)this.xmlData=n4;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?Q6(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var o4={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!Vj(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new B6(_,$);return new O6(_,$)}};class F6{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch{}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((N)=>N===_?$:N),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var l_=new F6;var b1="workspaceExplorerScale",Oj=["compact","default","comfortable"],Fj=new Set(Oj),Hj={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function H6(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return Fj.has(j)?j:$}function s4(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function Dj(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function Jj(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function r4(_={}){let $=Dj(_),j=_.stored?H6(_.stored,$):$;return Jj(j,_)}function D6(_){return Hj[H6(_)]}var yj=60000,E6=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function w6(_,$,j,Z=0,N=[]){if(!j&&E6(_))return N;if(!_)return N;if(N.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let K of _.children)w6(K,$,j,Z+1,N);return N}function J6(_,$,j){if(!_)return"";let Z=[],N=(K)=>{if(!j&&E6(K))return;if(Z.push(K.type==="dir"?`d:${K.path}`:`f:${K.path}`),K.children&&$?.has(K.path))for(let z of K.children)N(z)};return N(_),Z.join("|")}function _3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let N=j?new Map(j.map((X)=>[X?.path,X])):new Map,K=!j||j.length!==Z.length,z=Z.map((X)=>{let L=_3(N.get(X.path),X);if(L!==N.get(X.path))K=!0;return L});return K?{...$,children:z}:_}function t4(_,$,j){if(!_)return _;if(_.path===$)return _3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,N=_.children.map((K)=>{let z=t4(K,$,j);if(z!==K)Z=!0;return z});return Z?{..._,children:N}:_}var A6=4,a4=14,kj=8,Ej=16;function P6(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=P6(Z);return _.__bytes=j,j}function b6(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=A6)return Z;let N=Array.isArray(_.children)?_.children:[],K=[];for(let X of N){let L=Math.max(0,Number(X?.__bytes??X?.size??0));if(L<=0)continue;if(X.type==="dir")K.push({kind:"dir",node:X,size:L});else K.push({kind:"file",name:X.name,path:X.path,size:L})}K.sort((X,L)=>L.size-X.size);let z=K;if(K.length>a4){let X=K.slice(0,a4-1),L=K.slice(a4-1),q=L.reduce((U,V)=>U+V.size,0);X.push({kind:"other",name:`+${L.length} more`,path:`${Z.path}/[other]`,size:q}),z=X}return Z.children=z.map((X)=>{if(X.kind==="dir")return b6(X.node,$+1);return{name:X.name,path:X.path,size:X.size,children:[]}}),Z}function y6(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function x6(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,N=j?Math.max(30,70-$*10):Math.max(34,66-$*8),K=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${N}% ${K}%)`}function x1(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function $3(_,$,j,Z,N,K){let z=Math.PI*2-0.0001,X=K-N>z?N+z:K,L=x1(_,$,Z,N),q=x1(_,$,Z,X),U=x1(_,$,j,X),V=x1(_,$,j,N),H=X-N>Math.PI?1:0;return[`M ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${H} 1 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,`L ${U.x.toFixed(3)} ${U.y.toFixed(3)}`,`A ${j} ${j} 0 ${H} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var M6={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function I6(_,$,j){let Z=[],N=[],K=Math.max(0,Number($)||0),z=(X,L,q,U)=>{let V=Array.isArray(X?.children)?X.children:[];if(!V.length)return;let H=Math.max(0,Number(X.size)||0);if(H<=0)return;let w=q-L,R=L;V.forEach((m,u)=>{let P=Math.max(0,Number(m.size)||0);if(P<=0)return;let M=P/H,c=R,J=u===V.length-1?q:R+w*M;if(R=J,J-c<0.003)return;let p=M6[U];if(p){let d=x6(c,U,j);if(Z.push({key:m.path,path:m.path,label:m.name,size:P,color:d,depth:U,startAngle:c,endAngle:J,innerRadius:p[0],outerRadius:p[1],d:$3(120,120,p[0],p[1],c,J)}),U===1)N.push({key:m.path,name:m.name,size:P,pct:K>0?P/K*100:0,color:d})}if(U<A6)z(m,c,J,U+1)})};return z(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:N}}function e4(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let N=e4(Z,$);if(N)return N}return null}function C6(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let N=M6[1];if(!N)return{segments:[],legend:[]};let K=-Math.PI/2,z=Math.PI*3/2,X=x6(K,1,Z),q=`${$||"."}/[files]`;return{segments:[{key:q,path:q,label:_,size:j,color:X,depth:1,startAngle:K,endAngle:z,innerRadius:N[0],outerRadius:N[1],d:$3(120,120,N[0],N[1],K,z)}],legend:[{key:q,name:_,size:j,pct:100,color:X}]}}function k6(_,$=!1,j=!1){if(!_)return null;let Z=P6(_),N=b6(_,0),K=N.size||Z,{segments:z,legend:X}=I6(N,K,j);if(!z.length&&K>0){let L=C6("[files]",N.path,K,j);z=L.segments,X=L.legend}return{root:N,totalSize:K,segments:z,legend:X,truncated:$,isDarkTheme:j}}function wj({payload:_}){if(!_)return null;let[$,j]=S(null),[Z,N]=S(_?.root?.path||"."),[K,z]=S(()=>[_?.root?.path||"."]),[X,L]=S(!1);v(()=>{let i=_?.root?.path||".";N(i),z([i]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Z)return;L(!0);let i=setTimeout(()=>L(!1),180);return()=>clearTimeout(i)},[Z]);let q=h_(()=>{return e4(_.root,Z)||_.root},[_?.root,Z]),U=q?.size||_.totalSize||0,{segments:V,legend:H}=h_(()=>{let i=I6(q,U,_.isDarkTheme);if(i.segments.length>0)return i;if(U<=0)return i;let G_=q?.children?.length?"Total":"[files]";return C6(G_,q?.path||_?.root?.path||".",U,_.isDarkTheme)},[q,U,_.isDarkTheme,_?.root?.path]),[w,R]=S(V),m=k(new Map),u=k(0);v(()=>{let i=m.current,G_=new Map(V.map((N_)=>[N_.key,N_])),u_=performance.now(),r=220,s=(N_)=>{let $_=Math.min(1,(N_-u_)/220),Y_=$_*(2-$_),w_=V.map((U_)=>{let X_=i.get(U_.key)||{startAngle:U_.startAngle,endAngle:U_.startAngle,innerRadius:U_.innerRadius,outerRadius:U_.innerRadius},M_=(U0,q_)=>U0+(q_-U0)*Y_,f_=M_(X_.startAngle,U_.startAngle),H_=M_(X_.endAngle,U_.endAngle),A_=M_(X_.innerRadius,U_.innerRadius),m_=M_(X_.outerRadius,U_.outerRadius);return{...U_,d:$3(120,120,A_,m_,f_,H_)}});if(R(w_),$_<1)u.current=requestAnimationFrame(s)};if(u.current)cancelAnimationFrame(u.current);return u.current=requestAnimationFrame(s),m.current=G_,()=>{if(u.current)cancelAnimationFrame(u.current)}},[V]);let P=w.length?w:V,M=U>0?X$(U):"0 B",c=q?.name||"",p=(c&&c!=="."?c:"Total")||"Total",d=M,t=K.length>1,l=(i)=>{if(!i?.path)return;let G_=e4(_.root,i.path);if(!G_||!Array.isArray(G_.children)||G_.children.length===0)return;z((u_)=>[...u_,G_.path]),N(G_.path),j(null)},j_=()=>{if(!t)return;z((i)=>{let G_=i.slice(0,-1);return N(G_[G_.length-1]||_?.root?.path||"."),G_}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${X?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${q?.path||_?.root?.path||"."}`}
                data-segments=${P.length}
                data-base-size=${U}>
                ${P.map((i)=>B`
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
                        <title>${i.label} — ${X$(i.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${t?" is-drill":""}`}
                    onClick=${j_}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${d}</text>
                </g>
            </svg>
            ${H.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${H.slice(0,8).map((i)=>B`
                        <div key=${i.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${i.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${i.name}>${i.name}</span>
                            <span class="workspace-folder-starburst-size">${X$(i.size)}</span>
                            <span class="workspace-folder-starburst-pct">${i.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function Aj({mediaId:_}){let[$,j]=S(null);if(v(()=>{if(!_)return;D2(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",N=$.metadata?.size?X$($.metadata.size):"";return B`
        <a href=${W$(_)} download=${Z} class="file-attachment"
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
                ${N&&B`<span class="file-size">${N}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function T6({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:N,onToggleTerminal:K,terminalVisible:z=!1}){let[X,L]=S(null),[q,U]=S(new Set(["."])),[V,H]=S(null),[w,R]=S(null),[m,u]=S(""),[P,M]=S(null),[c,J]=S(null),[p,d]=S(!0),[t,l]=S(!1),[j_,i]=S(null),[G_,u_]=S(()=>J2("workspaceShowHidden",!1)),[r,s]=S(!1),[N_,$_]=S(null),[Y_,w_]=S(null),[U_,W_]=S(null),[X_,M_]=S(!1),[f_,H_]=S(null),[A_,m_]=S(()=>y6()),[U0,q_]=S(()=>r4({stored:_$(b1),...s4()})),[__,F_]=S(!1),Z_=k(q),D_=k(""),J_=k(null),_0=k(0),d_=k(new Set),R_=k(null),n_=k(new Map),g_=k(_),I_=k(Z),y_=k(null),P_=k(null),K0=k(null),X0=k(null),o_=k(null),F0=k(null),Z0=k("."),v_=k(null),G0=k({path:null,dragging:!1,startX:0,startY:0}),r_=k({path:null,dragging:!1,startX:0,startY:0}),p_=k({path:null,timer:0}),N0=k(!1),c_=k(0),Y0=k(new Map),P0=k(null),L_=k(null),b_=k(null),C=k(null),a=k(null),B_=k(null),Q_=k(G_),z0=k($),V$=k(j??$),$0=k(0),q0=k(U_),C_=k(r),t$=k(N_),h0=k(null),m$=k({x:0,y:0}),H0=k(0),g$=k(null),m0=k(V),B0=k(w),i0=k(null),R0=k(null),D0=k(P);g_.current=_,I_.current=Z,v(()=>{Z_.current=q},[q]),v(()=>{Q_.current=G_},[G_]),v(()=>{z0.current=$},[$]),v(()=>{V$.current=j??$},[j,$]),v(()=>{q0.current=U_},[U_]),v(()=>{if(typeof window>"u")return;let Q=()=>{q_(r4({stored:_$(b1),...s4()}))};Q();let y=()=>Q(),A=()=>Q(),Y=(f)=>{if(!f||f.key===null||f.key===b1)Q()};window.addEventListener("resize",y),window.addEventListener("focus",A),window.addEventListener("storage",Y);let O=window.matchMedia?.("(pointer: coarse)"),D=window.matchMedia?.("(hover: none)"),I=(f,n)=>{if(!f)return;if(f.addEventListener)f.addEventListener("change",n);else if(f.addListener)f.addListener(n)},T=(f,n)=>{if(!f)return;if(f.removeEventListener)f.removeEventListener("change",n);else if(f.removeListener)f.removeListener(n)};return I(O,y),I(D,y),()=>{window.removeEventListener("resize",y),window.removeEventListener("focus",A),window.removeEventListener("storage",Y),T(O,y),T(D,y)}},[]),v(()=>{let Q=(y)=>{let A=y?.detail?.path;if(!A)return;let Y=A.split("/"),O=[];for(let D=1;D<Y.length;D++)O.push(Y.slice(0,D).join("/"));if(O.length)U((D)=>{let I=new Set(D);I.add(".");for(let T of O)I.add(T);return I});H(A),requestAnimationFrame(()=>{let D=document.querySelector(`[data-path="${CSS.escape(A)}"]`);if(D)D.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",Q),()=>window.removeEventListener("workspace-reveal-path",Q)},[]),v(()=>{C_.current=r},[r]),v(()=>{t$.current=N_},[N_]),v(()=>{m0.current=V},[V]),v(()=>{B0.current=w},[w]),v(()=>{D0.current=P},[P]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let Q=()=>m_(y6());Q();let y=window.matchMedia?.("(prefers-color-scheme: dark)"),A=()=>Q();if(y?.addEventListener)y.addEventListener("change",A);else if(y?.addListener)y.addListener(A);let Y=typeof MutationObserver<"u"?new MutationObserver(()=>Q()):null;if(Y?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)Y?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(y?.removeEventListener)y.removeEventListener("change",A);else if(y?.removeListener)y.removeListener(A);Y?.disconnect()}},[]),v(()=>{if(!w)return;let Q=o_.current;if(!Q)return;let y=requestAnimationFrame(()=>{try{Q.focus(),Q.select()}catch{}});return()=>cancelAnimationFrame(y)},[w]),v(()=>{if(!__)return;let Q=(A)=>{let Y=A?.target;if(!(Y instanceof Element))return;if(a.current?.contains(Y))return;if(B_.current?.contains(Y))return;F_(!1)},y=(A)=>{if(A?.key==="Escape")F_(!1),B_.current?.focus?.()};return document.addEventListener("mousedown",Q),document.addEventListener("touchstart",Q,{passive:!0}),document.addEventListener("keydown",y),()=>{document.removeEventListener("mousedown",Q),document.removeEventListener("touchstart",Q),document.removeEventListener("keydown",y)}},[__]);let L2=async(Q)=>{l(!0),M(null),J(null);try{let y=await X4(Q,20000);M(y)}catch(y){M({error:y.message||"Failed to load preview"})}finally{l(!1)}};y_.current=L2;let g0=async()=>{if(!z0.current)return;try{let Q=await g2("",1,Q_.current),y=J6(Q.root,Z_.current,Q_.current);if(y===D_.current){d(!1);return}if(D_.current=y,J_.current=Q.root,!_0.current)_0.current=requestAnimationFrame(()=>{_0.current=0,L((A)=>_3(A,J_.current)),d(!1)})}catch(Q){i(Q.message||"Failed to load workspace"),d(!1)}},Q2=async(Q)=>{if(!Q)return;if(d_.current.has(Q))return;d_.current.add(Q);try{let y=await g2(Q,1,Q_.current);L((A)=>t4(A,Q,y.root))}catch(y){i(y.message||"Failed to load workspace")}finally{d_.current.delete(Q)}};P_.current=Q2;let a_=x(()=>{let Q=V;if(!Q)return".";let y=n_.current?.get(Q);if(y&&y.type==="dir")return y.path;if(Q==="."||!Q.includes("/"))return".";let A=Q.split("/");return A.pop(),A.join("/")||"."},[V]),v0=x((Q)=>{let y=Q?.closest?.(".workspace-row");if(!y)return null;let A=y.dataset.path,Y=y.dataset.type;if(!A)return null;if(Y==="dir")return A;if(A.includes("/")){let O=A.split("/");return O.pop(),O.join("/")||"."}return"."},[]),l0=x((Q)=>{return v0(Q?.target||null)},[v0]),b0=x((Q)=>{q0.current=Q,W_(Q)},[]),M0=x(()=>{let Q=p_.current;if(Q?.timer)clearTimeout(Q.timer);p_.current={path:null,timer:0}},[]),j$=x((Q)=>{if(!Q||Q==="."){M0();return}let y=n_.current?.get(Q);if(!y||y.type!=="dir"){M0();return}if(Z_.current?.has(Q)){M0();return}if(p_.current?.path===Q)return;M0();let A=setTimeout(()=>{p_.current={path:null,timer:0},P_.current?.(Q),U((Y)=>{let O=new Set(Y);return O.add(Q),O})},600);p_.current={path:Q,timer:A}},[M0]),k$=x((Q,y)=>{if(m$.current={x:Q,y},H0.current)return;H0.current=requestAnimationFrame(()=>{H0.current=0;let A=h0.current;if(!A)return;let Y=m$.current;A.style.transform=`translate(${Y.x+12}px, ${Y.y+12}px)`})},[]),p$=x((Q)=>{if(!Q)return;let A=(n_.current?.get(Q)?.name||Q.split("/").pop()||Q).trim();if(!A)return;w_({path:Q,label:A})},[]),e$=x(()=>{if(w_(null),H0.current)cancelAnimationFrame(H0.current),H0.current=0;if(h0.current)h0.current.style.transform="translate(-9999px, -9999px)"},[]),c$=x((Q)=>{if(!Q)return".";let y=n_.current?.get(Q);if(y&&y.type==="dir")return y.path;if(Q==="."||!Q.includes("/"))return".";let A=Q.split("/");return A.pop(),A.join("/")||"."},[]),J0=x(()=>{R(null),u("")},[]),E$=x((Q)=>{if(!Q)return;let A=(n_.current?.get(Q)?.name||Q.split("/").pop()||Q).trim();if(!A||Q===".")return;R(Q),u(A)},[]),L$=x(async()=>{let Q=B0.current;if(!Q)return;let y=(m||"").trim();if(!y){J0();return}let A=n_.current?.get(Q),Y=(A?.name||Q.split("/").pop()||Q).trim();if(y===Y){J0();return}try{let D=(await L4(Q,y))?.path||Q,I=Q.includes("/")?Q.split("/").slice(0,-1).join("/")||".":".";if(J0(),i(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:Q,newPath:D,type:A?.type||"file"}})),A?.type==="dir")U((T)=>{let f=new Set;for(let n of T)if(n===Q)f.add(D);else if(n.startsWith(`${Q}/`))f.add(`${D}${n.slice(Q.length)}`);else f.add(n);return f});if(H(D),A?.type==="dir")M(null),l(!1),J(null);else y_.current?.(D);P_.current?.(I)}catch(O){i(O?.message||"Failed to rename file")}},[J0,m]),I0=x(async(Q)=>{let Y=Q||".";for(let O=0;O<50;O+=1){let I=`untitled${O===0?"":`-${O}`}.md`;try{let f=(await V4(Y,I,""))?.path||(Y==="."?I:`${Y}/${I}`);if(Y&&Y!==".")U((n)=>new Set([...n,Y]));H(f),i(null),P_.current?.(Y),y_.current?.(f);return}catch(T){if(T?.status===409||T?.code==="file_exists")continue;i(T?.message||"Failed to create file");return}}i("Failed to create file (untitled name already in use).")},[]),O0=x((Q)=>{if(Q?.stopPropagation?.(),X_)return;let y=c$(m0.current);I0(y)},[X_,c$,I0]);v(()=>{if(typeof window>"u")return;let Q=(y)=>{let A=y?.detail?.updates||[];if(!Array.isArray(A)||A.length===0)return;L((T)=>{let f=T;for(let n of A){if(!n?.root)continue;if(!f||n.path==="."||!n.path)f=n.root;else f=t4(f,n.path,n.root)}if(f)D_.current=J6(f,Z_.current,Q_.current);return d(!1),f});let Y=m0.current;if(Boolean(Y)&&A.some((T)=>{let f=T?.path||"";if(!f||f===".")return!0;return Y===f||Y.startsWith(`${f}/`)||f.startsWith(`${Y}/`)}))Y0.current.clear();if(!Y||!D0.current)return;let D=n_.current?.get(Y);if(D&&D.type==="dir")return;if(A.some((T)=>{let f=T?.path||"";if(!f||f===".")return!0;return Y===f||Y.startsWith(`${f}/`)}))y_.current?.(Y)};return window.addEventListener("workspace-update",Q),()=>window.removeEventListener("workspace-update",Q)},[]),R_.current=g0;let O$=k(()=>{if(typeof window>"u")return;let Q=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),y=V$.current??z0.current,A=document.visibilityState!=="hidden"&&(y||Q.matches&&z0.current);p2(A,Q_.current).catch(()=>{})}).current,u0=k(0),y0=k(()=>{if(u0.current)clearTimeout(u0.current);u0.current=setTimeout(()=>{u0.current=0,O$()},250)}).current;v(()=>{if(z0.current)R_.current?.();y0()},[$,j]),v(()=>{R_.current(),O$();let Q=setInterval(()=>R_.current(),yj),y=y2("previewHeight",null),A=Number.isFinite(y)?Math.min(Math.max(y,80),600):280;if(c_.current=A,K0.current)K0.current.style.setProperty("--preview-height",`${A}px`);let Y=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),O=()=>y0();if(Y.addEventListener)Y.addEventListener("change",O);else if(Y.addListener)Y.addListener(O);return document.addEventListener("visibilitychange",O),()=>{if(clearInterval(Q),_0.current)cancelAnimationFrame(_0.current),_0.current=0;if(Y.removeEventListener)Y.removeEventListener("change",O);else if(Y.removeListener)Y.removeListener(O);if(document.removeEventListener("visibilitychange",O),u0.current)clearTimeout(u0.current),u0.current=0;if(v_.current)clearTimeout(v_.current),v_.current=null;p2(!1,Q_.current).catch(()=>{})}},[]);let w$=h_(()=>w6(X,q,G_),[X,q,G_]),C0=h_(()=>new Map(w$.map((Q)=>[Q.node.path,Q.node])),[w$]),A$=h_(()=>D6(U0),[U0]);n_.current=C0;let t_=(V?n_.current.get(V):null)?.type==="dir";v(()=>{if(!V||!t_){H_(null),P0.current=null,L_.current=null;return}let Q=V,y=`${G_?"hidden":"visible"}:${V}`,A=Y0.current,Y=A.get(y);if(Y?.root){A.delete(y),A.set(y,Y);let I=k6(Y.root,Boolean(Y.truncated),A_);if(I)P0.current=I,L_.current=V,H_({loading:!1,error:null,payload:I});return}let O=P0.current,D=L_.current;H_({loading:!0,error:null,payload:D===V?O:null}),g2(V,kj,G_).then((I)=>{if(m0.current!==Q)return;let T={root:I?.root,truncated:Boolean(I?.truncated)};A.delete(y),A.set(y,T);while(A.size>Ej){let n=A.keys().next().value;if(!n)break;A.delete(n)}let f=k6(T.root,T.truncated,A_);P0.current=f,L_.current=V,H_({loading:!1,error:null,payload:f})}).catch((I)=>{if(m0.current!==Q)return;H_({loading:!1,error:I?.message||"Failed to load folder size chart",payload:D===V?O:null})})},[V,t_,G_,A_]);let T0=Boolean(P&&P.kind==="text"&&!t_&&(!P.size||P.size<=262144)),F$=T0?"Open in editor":P?.size>262144?"File too large to edit":"File is not editable",H$=Boolean(V&&V!=="."),P$=Boolean(V&&!t_),i$=Boolean(V&&!t_),S0=V&&t_?Q1(V,G_):null,V0=x(()=>F_(!1),[]),k_=x(async(Q)=>{V0();try{await Q?.()}catch{}},[V0]);v(()=>{let Q=b_.current;if(C.current)C.current.dispose(),C.current=null;if(!Q)return;if(Q.innerHTML="",!V||t_||!P||P.error)return;let y={path:V,content:typeof P.text==="string"?P.text:void 0,mtime:P.mtime,size:P.size,preview:P,mode:"view"},A=s_.resolve(y)||s_.get("workspace-preview-default");if(!A)return;let Y=A.mount(Q,y);return C.current=Y,()=>{if(C.current===Y)Y.dispose(),C.current=null;Q.innerHTML=""}},[V,t_,P]);let Z$=(Q)=>{let y=Q?.target;if(y instanceof Element)return y;return y?.parentElement||null},b$=(Q)=>{return Boolean(Q?.closest?.(".workspace-node-icon, .workspace-label-text"))},_2=k((Q)=>{if(R0.current)clearTimeout(R0.current),R0.current=null;let A=Z$(Q)?.closest?.("[data-path]");if(!A)return;let Y=A.dataset.path;if(A.dataset.type==="dir"||!Y)return;if(B0.current===Y)J0();I_.current?.(Y)}).current,l$=k((Q)=>{if(N0.current){N0.current=!1;return}let y=Z$(Q),A=y?.closest?.("[data-path]");if(X0.current?.focus?.(),!A)return;let Y=A.dataset.path,O=A.dataset.type,D=Boolean(y?.closest?.(".workspace-caret")),I=Boolean(y?.closest?.("button"))||Boolean(y?.closest?.("a"))||Boolean(y?.closest?.("input")),T=m0.current===Y,f=B0.current;if(f){if(f===Y)return;J0()}let n=O==="file"&&i0.current===Y&&!D&&!I;if(T&&!D&&!I&&Y!=="."&&!n){if(R0.current)clearTimeout(R0.current);R0.current=setTimeout(()=>{R0.current=null,E$(Y)},350);return}if(O==="dir"){if(i0.current=null,H(Y),M(null),J(null),l(!1),!Z_.current.has(Y))P_.current?.(Y);if(T&&!D)return;U((W0)=>{let O_=new Set(W0);if(O_.has(Y))O_.delete(Y);else O_.add(Y);return O_})}else{i0.current=null,H(Y);let x_=n_.current.get(Y);if(x_)g_.current?.(x_.path,x_);y_.current?.(Y)}}).current,d0=k(()=>{D_.current="",R_.current(),Array.from(Z_.current||[]).filter((y)=>y&&y!==".").forEach((y)=>P_.current?.(y))}).current,N$=k(()=>{i0.current=null,H(null),M(null),J(null),l(!1)}).current,k0=k(()=>{u_((Q)=>{let y=!Q;if(typeof window<"u")i_("workspaceShowHidden",String(y));return Q_.current=y,p2(!0,y).catch(()=>{}),D_.current="",R_.current?.(),Array.from(Z_.current||[]).filter((Y)=>Y&&Y!==".").forEach((Y)=>P_.current?.(Y)),y})}).current,D$=k((Q)=>{if(Z$(Q)?.closest?.("[data-path]"))return;N$()}).current,n0=x(async(Q)=>{if(!Q)return;let y=Q.split("/").pop()||Q;if(!window.confirm(`Delete "${y}"? This cannot be undone.`))return;try{await U4(Q);let Y=Q.includes("/")?Q.split("/").slice(0,-1).join("/")||".":".";if(m0.current===Q)N$();P_.current?.(Y),i(null)}catch(Y){M((O)=>({...O||{},error:Y.message||"Failed to delete file"}))}},[N$]),x$=x((Q)=>{let y=X0.current;if(!y||!Q||typeof CSS>"u"||typeof CSS.escape!=="function")return;y.querySelector(`[data-path="${CSS.escape(Q)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),M$=x((Q)=>{let y=w$;if(!y||y.length===0)return;let A=V?y.findIndex((Y)=>Y.node.path===V):-1;if(Q.key==="ArrowDown"){Q.preventDefault();let Y=Math.min(A+1,y.length-1),O=y[Y];if(!O)return;if(H(O.node.path),O.node.type!=="dir")g_.current?.(O.node.path,O.node),y_.current?.(O.node.path);else M(null),l(!1),J(null);x$(O.node.path);return}if(Q.key==="ArrowUp"){Q.preventDefault();let Y=A<=0?0:A-1,O=y[Y];if(!O)return;if(H(O.node.path),O.node.type!=="dir")g_.current?.(O.node.path,O.node),y_.current?.(O.node.path);else M(null),l(!1),J(null);x$(O.node.path);return}if(Q.key==="ArrowRight"&&A>=0){let Y=y[A];if(Y?.node?.type==="dir"&&!q.has(Y.node.path))Q.preventDefault(),P_.current?.(Y.node.path),U((O)=>new Set([...O,Y.node.path]));return}if(Q.key==="ArrowLeft"&&A>=0){let Y=y[A];if(Y?.node?.type==="dir"&&q.has(Y.node.path))Q.preventDefault(),U((O)=>{let D=new Set(O);return D.delete(Y.node.path),D});return}if(Q.key==="Enter"&&A>=0){Q.preventDefault();let Y=y[A];if(!Y)return;let O=Y.node.path;if(Y.node.type==="dir"){if(!Z_.current.has(O))P_.current?.(O);U((I)=>{let T=new Set(I);if(T.has(O))T.delete(O);else T.add(O);return T}),M(null),J(null),l(!1)}else g_.current?.(O,Y.node),y_.current?.(O);return}if((Q.key==="Delete"||Q.key==="Backspace")&&A>=0){let Y=y[A];if(!Y||Y.node.type==="dir")return;Q.preventDefault(),n0(Y.node.path);return}if(Q.key==="Escape")Q.preventDefault(),N$()},[N$,n0,q,w$,x$,V]),I$=x((Q)=>{let y=Z$(Q),A=y?.closest?.(".workspace-row");if(!A)return;let Y=A.dataset.type,O=A.dataset.path;if(!O||O===".")return;if(B0.current===O)return;let D=Q?.touches?.[0];if(!D)return;if(G0.current={path:b$(y)?O:null,dragging:!1,startX:D.clientX,startY:D.clientY},Y!=="file")return;if(v_.current)clearTimeout(v_.current);v_.current=setTimeout(()=>{if(v_.current=null,G0.current?.dragging)return;n0(O)},600)},[n0]),J$=x(()=>{if(v_.current)clearTimeout(v_.current),v_.current=null;let Q=G0.current;if(Q?.dragging&&Q.path){let y=q0.current||a_(),A=g$.current;if(typeof A==="function")A(Q.path,y)}G0.current={path:null,dragging:!1,startX:0,startY:0},$0.current=0,s(!1),$_(null),b0(null),M0(),e$()},[a_,e$,b0,M0]),o0=x((Q)=>{let y=G0.current,A=Q?.touches?.[0];if(!A||!y?.path){if(v_.current)clearTimeout(v_.current),v_.current=null;return}let Y=Math.abs(A.clientX-y.startX),O=Math.abs(A.clientY-y.startY),D=Y>8||O>8;if(D&&v_.current)clearTimeout(v_.current),v_.current=null;if(!y.dragging&&D)y.dragging=!0,s(!0),$_("move"),p$(y.path);if(y.dragging){Q.preventDefault(),k$(A.clientX,A.clientY);let I=document.elementFromPoint(A.clientX,A.clientY),T=v0(I)||a_();if(q0.current!==T)b0(T);j$(T)}},[v0,a_,p$,k$,b0,j$]),s0=k((Q)=>{Q.preventDefault();let y=K0.current;if(!y)return;let A=Q.clientY,Y=c_.current||280,O=Q.currentTarget;O.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=A,I=(f)=>{D=f.clientY;let n=y.clientHeight-80,x_=Math.min(Math.max(Y-(f.clientY-A),80),n);y.style.setProperty("--preview-height",`${x_}px`),c_.current=x_},T=()=>{let f=y.clientHeight-80,n=Math.min(Math.max(Y-(D-A),80),f);c_.current=n,O.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("previewHeight",String(Math.round(n))),document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",T)};document.addEventListener("mousemove",I),document.addEventListener("mouseup",T)}).current,d$=k((Q)=>{Q.preventDefault();let y=K0.current;if(!y)return;let A=Q.touches[0];if(!A)return;let Y=A.clientY,O=c_.current||280,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let I=(f)=>{let n=f.touches[0];if(!n)return;f.preventDefault();let x_=y.clientHeight-80,W0=Math.min(Math.max(O-(n.clientY-Y),80),x_);y.style.setProperty("--preview-height",`${W0}px`),c_.current=W0},T=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",i_("previewHeight",String(Math.round(c_.current||O))),document.removeEventListener("touchmove",I),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)};document.addEventListener("touchmove",I,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T)}).current,C$=async()=>{if(!V)return;try{let Q=await q4(V);if(Q.media_id)J(Q.media_id)}catch(Q){M((y)=>({...y||{},error:Q.message||"Failed to attach"}))}},y$=async()=>{if(!V||t_)return;await n0(V)},Q$=(Q)=>{return Array.from(Q?.dataTransfer?.types||[]).includes("Files")},$2=x((Q)=>{if(!Q$(Q))return;if(Q.preventDefault(),$0.current+=1,!C_.current)s(!0);$_("upload");let y=l0(Q)||a_();b0(y),j$(y)},[a_,l0,b0,j$]),K$=x((Q)=>{if(!Q$(Q))return;if(Q.preventDefault(),Q.dataTransfer)Q.dataTransfer.dropEffect="copy";if(!C_.current)s(!0);if(t$.current!=="upload")$_("upload");let y=l0(Q)||a_();if(q0.current!==y)b0(y);j$(y)},[a_,l0,b0,j$]),j2=x((Q)=>{if(!Q$(Q))return;if(Q.preventDefault(),$0.current=Math.max(0,$0.current-1),$0.current===0)s(!1),$_(null),b0(null),M0()},[b0,M0]),T$=x(async(Q,y=".")=>{let A=Array.from(Q||[]);if(A.length===0)return;let Y=y&&y!==""?y:".",O=Y!=="."?Y:"workspace root";M_(!0);try{let D=null;for(let I of A)try{D=await V1(I,Y)}catch(T){let f=T?.status,n=T?.code;if(f===409||n==="file_exists"){let x_=I?.name||"file";if(!window.confirm(`"${x_}" already exists in ${O}. Overwrite?`))continue;D=await V1(I,Y,{overwrite:!0})}else throw T}if(D?.path)i0.current=D.path,H(D.path),y_.current?.(D.path);P_.current?.(Y)}catch(D){i(D.message||"Failed to upload file")}finally{M_(!1)}},[]),S$=x(async(Q,y)=>{if(!Q)return;let A=n_.current?.get(Q);if(!A)return;let Y=y&&y!==""?y:".",O=Q.includes("/")?Q.split("/").slice(0,-1).join("/")||".":".";if(Y===O)return;try{let I=(await Q4(Q,Y))?.path||Q;if(A.type==="dir")U((T)=>{let f=new Set;for(let n of T)if(n===Q)f.add(I);else if(n.startsWith(`${Q}/`))f.add(`${I}${n.slice(Q.length)}`);else f.add(n);return f});if(H(I),A.type==="dir")M(null),l(!1),J(null);else y_.current?.(I);P_.current?.(O),P_.current?.(Y)}catch(D){i(D?.message||"Failed to move entry")}},[]);g$.current=S$;let n$=x(async(Q)=>{if(!Q$(Q))return;Q.preventDefault(),$0.current=0,s(!1),$_(null),W_(null),M0();let y=Array.from(Q?.dataTransfer?.files||[]);if(y.length===0)return;let A=q0.current||l0(Q)||a_();await T$(y,A)},[a_,l0,T$]),Z2=x((Q)=>{if(Q?.stopPropagation?.(),X_)return;let y=Q?.currentTarget?.dataset?.uploadTarget||".";Z0.current=y,F0.current?.click()},[X_]),o$=x(()=>{if(X_)return;let Q=m0.current,y=Q?n_.current?.get(Q):null;Z0.current=y?.type==="dir"?y.path:".",F0.current?.click()},[X_]),w2=x(()=>{k_(()=>O0(null))},[k_,O0]),A2=x(()=>{k_(()=>o$())},[k_,o$]),z_=x(()=>{k_(()=>d0())},[k_,d0]),U2=x(()=>{k_(()=>k0())},[k_,k0]),P2=x(()=>{if(!V||!T0)return;k_(()=>I_.current?.(V,P))},[k_,V,T0,P]),N2=x(()=>{if(!V||V===".")return;k_(()=>E$(V))},[k_,V,E$]),K2=x(()=>{if(!V||t_)return;k_(()=>y$())},[k_,V,t_,y$]),b2=x(()=>{if(!V||t_)return;k_(()=>C$())},[k_,V,t_,C$]),x2=x(()=>{if(!S0)return;if(V0(),typeof window<"u")window.open(S0,"_blank","noopener")},[V0,S0]),M2=x(()=>{V0(),N?.()},[V0,N]),I2=x(()=>{V0(),K?.()},[V0,K]),r0=x((Q)=>{if(!Q||Q.button!==0)return;let y=Q.currentTarget;if(!y||!y.dataset)return;let A=y.dataset.path;if(!A||A===".")return;if(B0.current===A)return;let Y=Z$(Q);if(Y?.closest?.("button, a, input, .workspace-caret"))return;if(!b$(Y))return;Q.preventDefault(),r_.current={path:A,dragging:!1,startX:Q.clientX,startY:Q.clientY};let O=(I)=>{let T=r_.current;if(!T?.path)return;let f=Math.abs(I.clientX-T.startX),n=Math.abs(I.clientY-T.startY),x_=f>4||n>4;if(!T.dragging&&x_)T.dragging=!0,N0.current=!0,s(!0),$_("move"),p$(T.path),k$(I.clientX,I.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(T.dragging){I.preventDefault(),k$(I.clientX,I.clientY);let W0=document.elementFromPoint(I.clientX,I.clientY),O_=v0(W0)||a_();if(q0.current!==O_)b0(O_);j$(O_)}},D=()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",D);let I=r_.current;if(I?.dragging&&I.path){let T=q0.current||a_(),f=g$.current;if(typeof f==="function")f(I.path,T)}r_.current={path:null,dragging:!1,startX:0,startY:0},$0.current=0,s(!1),$_(null),b0(null),M0(),e$(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{N0.current=!1},0)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",D)},[v0,a_,p$,k$,e$,b0,j$,M0]),p0=x(async(Q)=>{let y=Array.from(Q?.target?.files||[]);if(y.length===0)return;let A=Z0.current||".";if(await T$(y,A),Z0.current=".",Q?.target)Q.target.value=""},[T$]);return B`
        <aside
            class=${`workspace-sidebar${r?" workspace-drop-active":""}`}
            data-workspace-scale=${U0}
            ref=${K0}
            onDragEnter=${$2}
            onDragOver=${K$}
            onDragLeave=${j2}
            onDrop=${n$}
        >
            <input type="file" multiple style="display:none" ref=${F0} onChange=${p0} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${B_}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(Q)=>{Q.stopPropagation(),F_((y)=>!y)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&B`
                            <div class="workspace-menu-dropdown" ref=${a} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${w2} disabled=${X_}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${A2} disabled=${X_}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${z_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${G_?" active":""}`} role="menuitem" onClick=${U2}>
                                    ${G_?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${V&&B`<div class="workspace-menu-separator"></div>`}
                                ${V&&!t_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${P2} disabled=${!T0}>Open in editor</button>
                                `}
                                ${H$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${N2}>Rename selected</button>
                                `}
                                ${i$&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b2}>Download selected file</button>
                                `}
                                ${S0&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${x2}>Download selected folder (zip)</button>
                                `}
                                ${P$&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${K2}>Delete selected file</button>
                                `}

                                ${(N||K)&&B`<div class="workspace-menu-separator"></div>`}
                                ${N&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${M2}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${K&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I2}>
                                        ${z?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${O0} title="New file" disabled=${X_}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${d0} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${D$}>
                ${X_&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${p&&B`<div class="workspace-loading">Loading…</div>`}
                ${j_&&B`<div class="workspace-error">${j_}</div>`}
                ${X&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${X0}
                        tabIndex="0"
                        onClick=${l$}
                        onDblClick=${_2}
                        onKeyDown=${M$}
                        onTouchStart=${I$}
                        onTouchEnd=${J$}
                        onTouchMove=${o0}
                        onTouchCancel=${J$}
                    >
                        ${w$.map(({node:Q,depth:y})=>{let A=Q.type==="dir",Y=Q.path===V,O=Q.path===w,D=A&&q.has(Q.path),I=U_&&Q.path===U_,T=Array.isArray(Q.children)&&Q.children.length>0?Q.children.length:Number(Q.child_count)||0;return B`
                                <div
                                    key=${Q.path}
                                    class=${`workspace-row${Y?" selected":""}${I?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+y*A$.indentPx}px`}}
                                    data-path=${Q.path}
                                    data-type=${Q.type}
                                    onMouseDown=${r0}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${A?D?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${A?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${A?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${O?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${o_}
                                                value=${m}
                                                onInput=${(f)=>u(f?.target?.value||"")}
                                                onKeyDown=${(f)=>{if(f.key==="Enter")f.preventDefault(),L$();else if(f.key==="Escape")f.preventDefault(),J0()}}
                                                onBlur=${J0}
                                                onClick=${(f)=>f.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${Q.name}</span></span>`}
                                    ${A&&!D&&T>0&&B`
                                        <span class="workspace-count">${T}</span>
                                    `}
                                    ${A&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${Q.path}
                                            title="Upload files to this folder"
                                            onClick=${Z2}
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
            ${V&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${s0} onTouchStart=${d$}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${V}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${O0} title="New file" disabled=${X_}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!t_&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>T0&&I_.current?.(V,P)}
                                    title=${F$}
                                    disabled=${!T0}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${y$}
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
                            ${t_?B`
                                    <button class="workspace-download" onClick=${o$}
                                        title="Upload files to this folder" disabled=${X_}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${Q1(V,G_)}
                                        title="Download folder as zip" onClick=${(Q)=>Q.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${C$} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${t&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${P?.error&&B`<div class="workspace-error">${P.error}</div>`}
                    ${t_&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${f_?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${f_?.error&&B`<div class="workspace-error">${f_.error}</div>`}
                        ${f_?.payload&&f_.payload.segments?.length>0&&B`
                            <${wj} payload=${f_.payload} />
                        `}
                        ${f_?.payload&&(!f_.payload.segments||f_.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${P&&!P.error&&!t_&&B`
                        <div class="workspace-preview-body" ref=${b_}></div>
                    `}
                    ${c&&B`
                        <div class="workspace-download-card">
                            <${Aj} mediaId=${c} />
                        </div>
                    `}
                </div>
            `}
            ${Y_&&B`
                <div class="workspace-drag-ghost" ref=${h0}>${Y_.label}</div>
            `}
        </aside>
    `}var Pj=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,bj=/\.(csv|tsv)$/i,xj=/\.pdf$/i,Mj=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,S6=/\.drawio(\.xml|\.svg|\.png)?$/i;function f6({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:N,onCloseAll:K,onTogglePin:z,onTogglePreview:X,previewTabs:L,onToggleDock:q,dockVisible:U,onToggleZen:V,zenMode:H}){let[w,R]=S(null),m=k(null);v(()=>{if(!w)return;let J=(p)=>{if(p.type==="keydown"&&p.key!=="Escape")return;R(null)};return document.addEventListener("click",J),document.addEventListener("keydown",J),()=>{document.removeEventListener("click",J),document.removeEventListener("keydown",J)}},[w]),v(()=>{let J=(p)=>{if(p.ctrlKey&&p.key==="Tab"){if(p.preventDefault(),!_.length)return;let d=_.findIndex((t)=>t.id===$);if(p.shiftKey){let t=_[(d-1+_.length)%_.length];j?.(t.id)}else{let t=_[(d+1)%_.length];j?.(t.id)}return}if((p.ctrlKey||p.metaKey)&&p.key==="w"){let d=document.querySelector(".editor-pane");if(d&&d.contains(document.activeElement)){if(p.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",J),()=>document.removeEventListener("keydown",J)},[_,$,j,Z]);let u=x((J,p)=>{if(J.button===1){J.preventDefault(),Z?.(p);return}if(J.button===0)j?.(p)},[j,Z]),P=x((J,p)=>{J.preventDefault(),R({id:p,x:J.clientX,y:J.clientY})},[]),M=x((J)=>{J.preventDefault(),J.stopPropagation()},[]),c=x((J,p)=>{J.preventDefault(),J.stopPropagation(),Z?.(p)},[Z]);if(v(()=>{if(!$||!m.current)return;let J=m.current.querySelector(".tab-item.active");if(J)J.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]),!_.length)return null;return B`
        <div class="tab-strip" ref=${m} role="tablist">
            ${_.map((J)=>B`
                <div
                    key=${J.id}
                    class=${`tab-item${J.id===$?" active":""}${J.dirty?" dirty":""}${J.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${J.id===$}
                    title=${J.path}
                    onMouseDown=${(p)=>u(p,J.id)}
                    onContextMenu=${(p)=>P(p,J.id)}
                >
                    ${J.pinned&&B`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${J.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${M}
                        onClick=${(p)=>c(p,J.id)}
                        title=${J.dirty?"Unsaved changes":"Close"}
                        aria-label=${J.dirty?"Unsaved changes":`Close ${J.label}`}
                    >
                        ${J.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${q&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${q}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${V&&B`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${V}
                    title=${`${H?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${H?"Exit":"Enter"} zen mode`}
                    aria-pressed=${H?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${H?B`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:B`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${w&&B`
            <div class="tab-context-menu" style=${{left:w.x+"px",top:w.y+"px"}}>
                <button onClick=${()=>{Z?.(w.id),R(null)}}>Close</button>
                <button onClick=${()=>{N?.(w.id),R(null)}}>Close Others</button>
                <button onClick=${()=>{K?.(),R(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{z?.(w.id),R(null)}}>
                    ${_.find((J)=>J.id===w.id)?.pinned?"Unpin":"Pin"}
                </button>
                ${X&&/\.(md|mdx|markdown)$/i.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{X(w.id),R(null)}}>
                        ${L?.has(w.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${Pj.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let J="/workspace/raw?path="+encodeURIComponent(w.id),p=w.id.split("/").pop()||"document",d="/office-viewer/?url="+encodeURIComponent(J)+"&name="+encodeURIComponent(p);window.open(d,"_blank","noopener"),R(null)}}>Open in New Tab</button>
                `}
                ${bj.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let J="/csv-viewer/?path="+encodeURIComponent(w.id);window.open(J,"_blank","noopener"),R(null)}}>Open in New Tab</button>
                `}
                ${xj.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let J="/workspace/raw?path="+encodeURIComponent(w.id);window.open(J,"_blank","noopener"),R(null)}}>Open in New Tab</button>
                `}
                ${Mj.test(w.id)&&!S6.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let J="/image-viewer/?path="+encodeURIComponent(w.id);window.open(J,"_blank","noopener"),R(null)}}>Open in New Tab</button>
                `}
                ${S6.test(w.id)&&B`
                    <hr />
                    <button onClick=${()=>{let J="/drawio/edit?path="+encodeURIComponent(w.id);window.open(J,"_blank","noopener"),R(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}var Ij=400,j3=60,R6=220,Z3="mdPreviewHeight";function Cj(){try{let _=localStorage.getItem(Z3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=j3?$:R6}catch{return R6}}function v6({getContent:_,path:$,onClose:j}){let[Z,N]=S(""),[K,z]=S(Cj),X=k(null),L=k(null),q=k(""),U=k(_);return U.current=_,v(()=>{let w=()=>{let m=U.current?.()||"";if(m===q.current)return;q.current=m;try{let u=$$(m,null,{sanitize:!1});N(u)}catch{N('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};w();let R=setInterval(w,Ij);return()=>clearInterval(R)},[]),v(()=>{if(X.current&&Z)v$(X.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(w)=>{w.preventDefault();let R=w.clientY,m=L.current?.offsetHeight||K,u=L.current?.parentElement,P=u?u.offsetHeight*0.7:500,M=w.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let c=(p)=>{let d=Math.min(Math.max(m-(p.clientY-R),j3),P);z(d)},J=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",J)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",J)}}
            onTouchStart=${(w)=>{w.preventDefault();let R=w.touches[0];if(!R)return;let m=R.clientY,u=L.current?.offsetHeight||K,P=L.current?.parentElement,M=P?P.offsetHeight*0.7:500,c=w.currentTarget;c.classList.add("dragging"),document.body.style.userSelect="none";let J=(d)=>{let t=d.touches[0];if(!t)return;d.preventDefault();let l=Math.min(Math.max(u-(t.clientY-m),j3),M);z(l)},p=()=>{c.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(L.current?.offsetHeight||K)))}catch{}document.removeEventListener("touchmove",J),document.removeEventListener("touchend",p),document.removeEventListener("touchcancel",p)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",p),document.addEventListener("touchcancel",p)}}
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
    `}function u6({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:N}){let K=k(_);K.current=_;let z=k($);z.current=$;let X=k(j);X.current=j;let L=k(Z);L.current=Z,v(()=>{X.current();let q=new U1((V,H)=>K.current(V,H),(V)=>z.current(V),{chatJid:N});q.connect();let U=()=>{q.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")L.current?.()};return window.addEventListener("focus",U),document.addEventListener("visibilitychange",U),()=>{window.removeEventListener("focus",U),document.removeEventListener("visibilitychange",U),q.disconnect()}},[N])}function m6(){let[_,$]=S(!1),[j,Z]=S("default"),N=k(!1);v(()=>{let L=J2("notificationsEnabled",!1);if(N.current=L,$(L),typeof Notification<"u")Z(Notification.permission)},[]),v(()=>{N.current=_},[_]);let K=x(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let L=Notification.requestPermission();if(L&&typeof L.then==="function")return L;return Promise.resolve(L)}catch{return Promise.resolve("default")}},[]),z=x(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let q=await K();if(Z(q||"default"),q!=="granted"){N.current=!1,$(!1),i_("notificationsEnabled","false");return}}let L=!N.current;N.current=L,$(L),i_("notificationsEnabled",String(L))},[K]),X=x((L,q)=>{if(!N.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let U=new Notification(L,{body:q});return U.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:z,notify:X}}var r2=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function g6({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,N]=S(null),[K,z]=S(!1),X=k(!1),L=k(null),q=k(!1),U=k(null),V=k(null),H=k(0);v(()=>{X.current=K},[K]),v(()=>{V.current=Z},[Z]),v(()=>{H.current+=1,V.current=null,U.current=null,q.current=!1,X.current=!1,N(null),z(!1)},[j]);let w=x(async(u=null)=>{let P=H.current;try{if(u){let M=await r1(u,50,0,j);if(P!==H.current)return;N(M.posts),z(!1)}else{let M=await v2(10,null,j);if(P!==H.current)return;N(M.posts),z(M.has_more)}}catch(M){if(P!==H.current)return;console.error("Failed to load posts:",M)}},[j]),R=x(async()=>{let u=H.current;try{let P=await v2(10,null,j);if(u!==H.current)return;N((M)=>{if(!M||M.length===0)return P.posts;return r2([...P.posts,...M])}),z((M)=>M||P.has_more)}catch(P){if(u!==H.current)return;console.error("Failed to refresh timeline:",P)}},[j]),m=x(async(u={})=>{let P=H.current,M=V.current;if(!M||M.length===0)return;if(q.current)return;let{preserveScroll:c=!0,preserveMode:J="top",allowRepeat:p=!1}=u,d=(j_)=>{if(!c){j_();return}if(J==="top")$(j_);else _(j_)},l=M.slice().sort((j_,i)=>j_.id-i.id)[0]?.id;if(!Number.isFinite(l))return;if(!p&&U.current===l)return;q.current=!0,U.current=l;try{let j_=await v2(10,l,j);if(P!==H.current)return;if(j_.posts.length>0)d(()=>{N((i)=>r2([...j_.posts,...i||[]])),z(j_.has_more)});else z(!1)}catch(j_){if(P!==H.current)return;console.error("Failed to load more posts:",j_)}finally{if(P===H.current)q.current=!1}},[j,_,$]);return v(()=>{L.current=m},[m]),{posts:Z,setPosts:N,hasMore:K,setHasMore:z,hasMoreRef:X,loadPosts:w,refreshTimeline:R,loadMore:m,loadMoreRef:L,loadingMoreRef:q,lastBeforeIdRef:U}}function p6(){let[_,$]=S(null),[j,Z]=S({text:"",totalLines:0}),[N,K]=S(""),[z,X]=S({text:"",totalLines:0}),[L,q]=S(null),[U,V]=S(null),[H,w]=S(null),R=k(null),m=k(0),u=k(!1),P=k(""),M=k(""),c=k(null),J=k(null),p=k(null),d=k(null),t=k(!1),l=k(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:N,setAgentPlan:K,agentThought:z,setAgentThought:X,pendingRequest:L,setPendingRequest:q,currentTurnId:U,setCurrentTurnId:V,steerQueuedTurnId:H,setSteerQueuedTurnId:w,lastAgentEventRef:R,lastSilenceNoticeRef:m,isAgentRunningRef:u,draftBufferRef:P,thoughtBufferRef:M,pendingRequestRef:c,stalledPostIdRef:J,currentTurnIdRef:p,steerQueuedTurnIdRef:d,thoughtExpandedRef:t,draftExpandedRef:l}}function c6({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let N=k((U)=>{U.preventDefault();let V=_.current;if(!V)return;let H=U.clientX,w=$.current||280,R=U.currentTarget;R.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,u=(M)=>{m=M.clientX;let c=Math.min(Math.max(w+(M.clientX-H),160),600);V.style.setProperty("--sidebar-width",`${c}px`),$.current=c},P=()=>{let M=Math.min(Math.max(w+(m-H),160),600);$.current=M,R.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",i_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",P)}).current,K=k((U)=>{U.preventDefault();let V=_.current;if(!V)return;let H=U.touches[0];if(!H)return;let w=H.clientX,R=$.current||280,m=U.currentTarget;m.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let u=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let J=Math.min(Math.max(R+(c.clientX-w),160),600);V.style.setProperty("--sidebar-width",`${J}px`),$.current=J},P=()=>{m.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",i_("sidebarWidth",String(Math.round($.current||R))),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,z=k((U)=>{U.preventDefault();let V=_.current;if(!V)return;let H=U.clientX,w=j.current||$.current||280,R=U.currentTarget;R.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let m=H,u=(M)=>{m=M.clientX;let c=Math.min(Math.max(w+(M.clientX-H),200),800);V.style.setProperty("--editor-width",`${c}px`),j.current=c},P=()=>{let M=Math.min(Math.max(w+(m-H),200),800);j.current=M,R.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",P)}).current,X=k((U)=>{U.preventDefault();let V=_.current;if(!V)return;let H=U.touches[0];if(!H)return;let w=H.clientX,R=j.current||$.current||280,m=U.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let u=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let J=Math.min(Math.max(R+(c.clientX-w),200),800);V.style.setProperty("--editor-width",`${J}px`),j.current=J},P=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",i_("editorWidth",String(Math.round(j.current||R))),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current,L=k((U)=>{U.preventDefault();let V=_.current;if(!V)return;let H=U.clientY,w=Z?.current||200,R=U.currentTarget;R.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let m=H,u=(M)=>{m=M.clientY;let c=Math.min(Math.max(w-(M.clientY-H),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${c}px`),Z)Z.current=c;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{let M=Math.min(Math.max(w-(m-H),100),window.innerHeight*0.5);if(Z)Z.current=M;R.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",i_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",P)};document.addEventListener("mousemove",u),document.addEventListener("mouseup",P)}).current,q=k((U)=>{U.preventDefault();let V=_.current;if(!V)return;let H=U.touches[0];if(!H)return;let w=H.clientY,R=Z?.current||200,m=U.currentTarget;m.classList.add("dragging"),document.body.style.userSelect="none";let u=(M)=>{let c=M.touches[0];if(!c)return;M.preventDefault();let J=Math.min(Math.max(R-(c.clientY-w),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${J}px`),Z)Z.current=J;window.dispatchEvent(new CustomEvent("dock-resize"))},P=()=>{m.classList.remove("dragging"),document.body.style.userSelect="",i_("dockHeight",String(Math.round(Z?.current||R))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",P),document.removeEventListener("touchcancel",P)};document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",P),document.addEventListener("touchcancel",P)}).current;return{handleSplitterMouseDown:N,handleSplitterTouchStart:K,handleEditorSplitterMouseDown:z,handleEditorSplitterTouchStart:X,handleDockSplitterMouseDown:L,handleDockSplitterTouchStart:q}}function h6({onTabClosed:_}={}){let $=k(_);$.current=_;let[j,Z]=S(()=>l_.getTabs()),[N,K]=S(()=>l_.getActiveId()),[z,X]=S(()=>l_.getTabs().length>0);v(()=>{return l_.onChange((J,p)=>{Z(J),K(p),X(J.length>0)})},[]);let[L,q]=S(()=>new Set),U=x((J)=>{q((p)=>{let d=new Set(p);if(d.has(J))d.delete(J);else d.add(J);return d})},[]),V=x((J)=>{q((p)=>{if(!p.has(J))return p;let d=new Set(p);return d.delete(J),d})},[]),H=x((J,p={})=>{if(!J)return;let d={path:J,mode:"edit"};try{if(!s_.resolve(d)){if(!s_.get("editor")){console.warn(`[openEditor] No pane handler for: ${J}`);return}}}catch(l){console.warn(`[openEditor] paneRegistry.resolve() error for "${J}":`,l)}let t=typeof p?.label==="string"&&p.label.trim()?p.label.trim():void 0;l_.open(J,t)},[]),w=x(()=>{let J=l_.getActiveId();if(J){let p=l_.get(J);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}l_.close(J),V(J),$.current?.(J)}},[V]),R=x((J)=>{let p=l_.get(J);if(p?.dirty){if(!window.confirm(`"${p.label}" has unsaved changes. Close anyway?`))return}l_.close(J),V(J),$.current?.(J)},[V]),m=x((J)=>{l_.activate(J)},[]),u=x((J)=>{let p=l_.getTabs().filter((l)=>l.id!==J&&!l.pinned),d=p.filter((l)=>l.dirty).length;if(d>0){if(!window.confirm(`${d} unsaved tab${d>1?"s":""} will be closed. Continue?`))return}let t=p.map((l)=>l.id);l_.closeOthers(J),t.forEach((l)=>{V(l),$.current?.(l)})},[V]),P=x(()=>{let J=l_.getTabs().filter((t)=>!t.pinned),p=J.filter((t)=>t.dirty).length;if(p>0){if(!window.confirm(`${p} unsaved tab${p>1?"s":""} will be closed. Continue?`))return}let d=J.map((t)=>t.id);l_.closeAll(),d.forEach((t)=>{V(t),$.current?.(t)})},[V]),M=x((J)=>{l_.togglePin(J)},[]),c=x(()=>{let J=l_.getActiveId();if(J)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:J}}))},[]);return v(()=>{let J=(p)=>{let{oldPath:d,newPath:t,type:l}=p.detail||{};if(!d||!t)return;if(l==="dir"){for(let j_ of l_.getTabs())if(j_.path===d||j_.path.startsWith(`${d}/`)){let i=`${t}${j_.path.slice(d.length)}`;l_.rename(j_.id,i)}}else l_.rename(d,t)};return window.addEventListener("workspace-file-renamed",J),()=>window.removeEventListener("workspace-file-renamed",J)},[]),v(()=>{let J=(p)=>{if(l_.hasUnsaved())p.preventDefault(),p.returnValue=""};return window.addEventListener("beforeunload",J),()=>window.removeEventListener("beforeunload",J)},[]),{editorOpen:z,tabStripTabs:j,tabStripActiveId:N,previewTabs:L,openEditor:H,closeEditor:w,handleTabClose:R,handleTabActivate:m,handleTabCloseOthers:u,handleTabCloseAll:P,handleTabTogglePin:M,handleTabTogglePreview:U,revealInExplorer:c}}function N3(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,N=j[_]??window[Z],K=Number(N);return Number.isFinite(K)?K:$}catch{return $}}var K3=N3("warning",30000),i6=N3("finalize",120000),Y3=N3("refresh",30000),l6=30000;function d6(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function n6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function o6(_=30000){let[,$]=S(0);v(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function z3(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,N)=>Z+Math.max(1,Math.ceil(N.length/$)),0)}function s6(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function q2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((N)=>{try{return Boolean($.matchMedia(N)?.matches)}catch{return!1}})}function G3(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),N=Number(j?.maxTouchPoints||0),K=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),z=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(K||N>1||z)}function r6(_,$={}){if(q2($))return null;if(G3($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Tj(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function a6(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function t6(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function e6(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function _9(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",N),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function $9(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),N=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",N),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function Tj(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function M1(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function W3(_){return String(_||"").trim()||"web:default"}function j9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function Z9(_={}){return q2(_)&&G3(_)}function Sj(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function fj(_={},$={}){if(!Z9(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let N=Sj({window:j});if(N&&N>0)Z.documentElement.style.setProperty("--app-height",`${N}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return N}function N9(_={}){if(!Z9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,N=new Set,K=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let V of N)$.clearTimeout?.(V);N.clear()},z=()=>{Z=0,fj({window:$,document:j})},X=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(z)??0},L=()=>{X();for(let V of[80,220,420]){let H=$.setTimeout?.(()=>{N.delete(H),X()},V);if(H!=null)N.add(H)}},q=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;L()},U=$.visualViewport;return L(),$.addEventListener("focus",L),$.addEventListener("pageshow",L),$.addEventListener("resize",L),$.addEventListener("orientationchange",L),j.addEventListener("visibilitychange",q),j.addEventListener("focusin",L,!0),U?.addEventListener?.("resize",L),U?.addEventListener?.("scroll",L),()=>{K(),$.removeEventListener("focus",L),$.removeEventListener("pageshow",L),$.removeEventListener("resize",L),$.removeEventListener("orientationchange",L),j.removeEventListener("visibilitychange",q),j.removeEventListener("focusin",L,!0),U?.removeEventListener?.("resize",L),U?.removeEventListener?.("scroll",L)}}function Rj(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function q$(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:Rj($,j)}var vj=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function K9(_){return vj.has(String(_||"").trim())}function uj(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function Y9(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(uj(_),{detail:Z})),!0}var mj=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function z9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let N=()=>{_(q2({window:j,navigator:Z}))};N();let z=mj.map((X)=>{try{return j.matchMedia?.(X)??null}catch{return null}}).filter(Boolean).map((X)=>{if(typeof X.addEventListener==="function")return X.addEventListener("change",N),()=>X.removeEventListener("change",N);if(typeof X.addListener==="function")return X.addListener(N),()=>X.removeListener(N);return()=>{}});return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),()=>{for(let X of z)X();j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N)}}function G9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let N=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",N),j.addEventListener?.("pageshow",N),Z.addEventListener?.("visibilitychange",N),()=>{j.removeEventListener?.("focus",N),j.removeEventListener?.("pageshow",N),Z.removeEventListener?.("visibilitychange",N)}}var V3="piclaw_btw_session",gj=900,pj="__piclawRenameBranchPromptLock__",W9=()=>{if(typeof window>"u")return null;let _=window,$=pj,j=_[$];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return _[$]=Z,Z};function cj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function hj(){let _=_$(V3);if(!_)return null;try{let $=JSON.parse(_);if(!$||typeof $!=="object")return null;let j=typeof $.question==="string"?$.question:"",Z=typeof $.answer==="string"?$.answer:"",N=typeof $.thinking==="string"?$.thinking:"",K=typeof $.error==="string"&&$.error.trim()?$.error:null,z=$.status==="running"?"error":$.status==="success"||$.status==="error"?$.status:"success";return{question:j,answer:Z,thinking:N,error:z==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:z}}catch{return null}}var X9=a1,q9=e1,ij=$4,V9=Y4,L9=z4,Q9=j4,X3=q$(e0,"getAgentContext",null),lj=q$(e0,"getAgentModels",{current:null,models:[]}),dj=q$(e0,"getActiveChatAgents",{chats:[]}),q3=q$(e0,"getChatBranches",{chats:[]}),nj=q$(e0,"renameChatBranch",null),oj=q$(e0,"pruneChatBranch",null),U9=q$(e0,"restoreChatBranch",null),sj=q$(e0,"getAgentQueueState",{count:0}),rj=q$(e0,"steerAgentQueueItem",{removed:!1,queued:"steer"}),aj=q$(e0,"removeAgentQueueItem",{removed:!1}),tj=q$(e0,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});s_.register(I4);s_.register(g4);s_.register(m4);s_.register(p4);s_.register(c4);s_.register(h4);s_.register(l4);s_.register(d4);s_.register(o4);C4();s_.register(R4);s_.register(v4);function ej({locationParams:_}){let $=h_(()=>{let W=_.get("chat_jid");return W&&W.trim()?W.trim():"web:default"},[_]),j=h_(()=>{let W=(_.get("chat_only")||_.get("chat-only")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),Z=h_(()=>{let W=(_.get("branch_loader")||"").trim().toLowerCase();return W==="1"||W==="true"||W==="yes"},[_]),N=h_(()=>{let W=_.get("branch_source_chat_jid");return W&&W.trim()?W.trim():$},[$,_]),[K,z]=S("disconnected"),[X,L]=S(()=>q2()),[q,U]=S(null),[V,H]=S(null),[w,R]=S(!1),[m,u]=S("current"),[P,M]=S([]),[c,J]=S([]),[p,d]=S(null),{agentStatus:t,setAgentStatus:l,agentDraft:j_,setAgentDraft:i,agentPlan:G_,setAgentPlan:u_,agentThought:r,setAgentThought:s,pendingRequest:N_,setPendingRequest:$_,currentTurnId:Y_,setCurrentTurnId:w_,steerQueuedTurnId:U_,setSteerQueuedTurnId:W_,lastAgentEventRef:X_,lastSilenceNoticeRef:M_,isAgentRunningRef:f_,draftBufferRef:H_,thoughtBufferRef:A_,pendingRequestRef:m_,stalledPostIdRef:U0,currentTurnIdRef:q_,steerQueuedTurnIdRef:__,thoughtExpandedRef:F_,draftExpandedRef:Z_}=p6(),[D_,J_]=S({}),[_0,d_]=S(null),[R_,n_]=S(null),[g_,I_]=S(!1),[y_,P_]=S(null),[K0,X0]=S([]),[o_,F0]=S([]),[Z0,v_]=S(null),[G0,r_]=S([]),[p_,N0]=S(!1),[c_,Y0]=S(()=>hj()),P0=h_(()=>K0.find((W)=>W?.chat_jid===$)||null,[K0,$]),L_=h_(()=>o_.find((W)=>W?.chat_jid===$)||P0||null,[P0,o_,$]),b_=L_?.root_chat_jid||P0?.root_chat_jid||$,C=cj(m),[a,B_]=S(()=>({status:Z?"running":"idle",message:Z?"Preparing a new chat branch…":""})),Q_=G0.length,z0=k(new Set),V$=k([]),$0=k(new Set),q0=k(0),C_=k({inFlight:!1,lastAttemptAt:0,turnId:null});z0.current=new Set(G0.map((W)=>W.row_id)),V$.current=G0;let{notificationsEnabled:t$,notificationPermission:h0,toggleNotifications:m$,notify:H0}=m6(),[g$,m0]=S(()=>new Set),[B0,i0]=S(()=>J2("workspaceOpen",!0)),R0=k(null),{editorOpen:D0,tabStripTabs:L2,tabStripActiveId:g0,previewTabs:Q2,openEditor:a_,closeEditor:v0,handleTabClose:l0,handleTabActivate:b0,handleTabCloseOthers:M0,handleTabCloseAll:j$,handleTabTogglePin:k$,handleTabTogglePreview:p$,revealInExplorer:e$}=h6({onTabClosed:(W)=>R0.current?.(W)}),c$=k(null),J0=k(null),E$=k(null),L$=k(null),I0=s_.getDockPanes().length>0,[O0,O$]=S(!1),u0=x(()=>O$((W)=>!W),[]),y0=x(()=>{a_(S4,{label:"Terminal"})},[a_]),w$=!j&&(D0||I0&&O0),[C0,A$]=S(!1),h$=k(!1),t_=x(()=>{if(!D0||j)return;if(h$.current=O0,O0)O$(!1);A$(!0)},[D0,j,O0]),T0=x(()=>{if(!C0)return;if(A$(!1),h$.current)O$(!0),h$.current=!1},[C0]),F$=x(()=>{if(C0)T0();else t_()},[C0,t_,T0]);v(()=>{if(C0&&!D0)T0()},[C0,D0,T0]),v(()=>{let W=c$.current;if(!W)return;if(J0.current)J0.current.dispose(),J0.current=null;let G=g0;if(!G)return;let F={path:G,mode:"edit"},E=s_.resolve(F)||s_.get("editor");if(!E){W.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let b=E.mount(W,F);J0.current=b,b.onDirtyChange?.((o)=>{l_.setDirty(G,o)}),b.onSaveRequest?.(()=>{}),b.onClose?.(()=>{v0()});let g=l_.getViewState(G);if(g&&typeof b.restoreViewState==="function")requestAnimationFrame(()=>b.restoreViewState(g));if(typeof b.onViewStateChange==="function")b.onViewStateChange((o)=>{l_.saveViewState(G,o)});return requestAnimationFrame(()=>b.focus()),()=>{if(J0.current===b)b.dispose(),J0.current=null}},[g0,v0]),v(()=>{let W=(G)=>{let F=G.detail?.path;if(F)a_(F)};return document.addEventListener("office-viewer:open-tab",W),document.addEventListener("drawio:open-tab",W),document.addEventListener("csv-viewer:open-tab",W),document.addEventListener("pdf-viewer:open-tab",W),document.addEventListener("image-viewer:open-tab",W),document.addEventListener("video-viewer:open-tab",W),()=>{document.removeEventListener("office-viewer:open-tab",W),document.removeEventListener("drawio:open-tab",W),document.removeEventListener("csv-viewer:open-tab",W),document.removeEventListener("pdf-viewer:open-tab",W),document.removeEventListener("image-viewer:open-tab",W),document.removeEventListener("video-viewer:open-tab",W)}},[a_]),v(()=>{let W=E$.current;if(L$.current)L$.current.dispose(),L$.current=null;if(!W||!I0||!O0)return;let G=s_.getDockPanes()[0];if(!G){W.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let F=G.mount(W,{mode:"view"});return L$.current=F,requestAnimationFrame(()=>F.focus?.()),()=>{if(L$.current===F)F.dispose(),L$.current=null}},[I0,O0]);let[H$,P$]=S({name:"You",avatar_url:null,avatar_background:null}),i$=k(!1),S0=k(!1),V0=k(null),k_=k($),Z$=k(new Map),b$=k($),_2=k(0),l$=k(0),d0=k({}),N$=k({name:null,avatar_url:null}),k0=k({currentHashtag:null,searchQuery:null,searchOpen:!1}),D$=k(null),n0=k(null),x$=k(0),M$=k(0),I$=k(0),J$=k(null),o0=k(null),s0=k(null),d$=k(null),C$=k(0),y$=k({title:null,avatarBase:null}),Q$=k(null),$2=k(!1),[K$,j2]=S(!1),T$=k(0),S$=x(()=>{if(Q$.current)clearTimeout(Q$.current),Q$.current=null;d(null)},[]);o6(30000),v(()=>{return L8()},[]),v(()=>{return z9(L)},[]),v(()=>{i_("workspaceOpen",String(B0))},[B0]),v(()=>{return N9()},[]),v(()=>{return()=>{S$()}},[S$]),v(()=>{if(!c_){i_(V3,"");return}i_(V3,JSON.stringify({question:c_.question||"",answer:c_.answer||"",thinking:c_.thinking||"",error:c_.error||null,status:c_.status||"success"}))},[c_]),v(()=>{d0.current=D_||{}},[D_]),v(()=>{k_.current=$},[$]),v(()=>{N$.current=H$||{name:"You",avatar_url:null,avatar_background:null}},[H$]);let n$=x((W,G,F=null)=>{if(typeof document>"u")return;let E=(W||"").trim()||"PiClaw";if(y$.current.title!==E){document.title=E;let e=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(e&&e.getAttribute("content")!==E)e.setAttribute("content",E);y$.current.title=E}let b=document.getElementById("dynamic-favicon");if(!b)return;let g=b.getAttribute("data-default")||b.getAttribute("href")||"/favicon.ico",o=G||g,K_=G?`${o}|${F||""}`:o;if(y$.current.avatarBase!==K_){let e=G?`${o}${o.includes("?")?"&":"?"}v=${F||Date.now()}`:o;b.setAttribute("href",e),y$.current.avatarBase=K_}},[]),Z2=x((W)=>{if(!W)return;M((G)=>G.includes(W)?G:[...G,W])},[]),o$=x((W)=>{M((G)=>G.filter((F)=>F!==W))},[]);R0.current=o$;let w2=x(()=>{M([])},[]),A2=x((W)=>{if(!Array.isArray(W)){M([]);return}let G=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let b=E.trim();if(F.has(b))continue;F.add(b),G.push(b)}M(G)},[]),z_=x((W,G=null,F="info",E=3000)=>{S$(),d({title:W,detail:G||null,kind:F||"info"}),Q$.current=setTimeout(()=>{d((b)=>b?.title===W?null:b)},E)},[S$]),U2=x((W)=>{let G=s6(W,{editorOpen:D0,resolvePane:(F)=>s_.resolve(F)});if(G.kind==="open"){a_(G.path);return}if(G.kind==="toast")z_(G.title,G.detail,G.level)},[D0,a_,z_]),P2=x(()=>{let W=g0;if(W)Z2(W)},[g0,Z2]),N2=x((W)=>{if(!W)return;J((G)=>G.includes(W)?G:[...G,W])},[]),K2=x(async(W,G=null)=>{let F=(b)=>{b.scrollIntoView({behavior:"smooth",block:"center"}),b.classList.add("post-highlight"),setTimeout(()=>b.classList.remove("post-highlight"),2000)},E=document.getElementById("post-"+W);if(E){F(E);return}try{let b=typeof G==="string"&&G.trim()?G.trim():$,o=(await t1(W,b))?.thread?.[0];if(!o)return;j0((K_)=>{if(!K_)return[o];if(K_.some((e)=>e.id===o.id))return K_;return[...K_,o]}),requestAnimationFrame(()=>{setTimeout(()=>{let K_=document.getElementById("post-"+W);if(K_)F(K_)},50)})}catch(b){console.error("[scrollToMessage] Failed to fetch message",W,b)}},[$]),b2=x((W)=>{J((G)=>G.filter((F)=>F!==W))},[]),x2=x(()=>{J([])},[]),M2=x((W)=>{if(!Array.isArray(W)){J([]);return}let G=[],F=new Set;for(let E of W){if(typeof E!=="string"||!E.trim())continue;let b=E.trim();if(F.has(b))continue;F.add(b),G.push(b)}J(G)},[]),I2=x((W)=>{let G=typeof W==="string"&&W.trim()?W.trim():"Could not send your message.";z_("Compose failed",G,"error",5000)},[z_]),r0=x((W={})=>{let G=Date.now();if(X_.current=G,W.running)f_.current=!0,N0((F)=>F?F:!0);if(W.clearSilence)M_.current=0},[N0]),p0=x(()=>{if(d$.current)clearTimeout(d$.current),d$.current=null;C$.current=0},[]);v(()=>()=>{p0()},[p0]);let Q=x(()=>{p0(),l((W)=>{if(!W)return W;if(!(W.last_activity||W.lastActivity))return W;let{last_activity:G,lastActivity:F,...E}=W;return E})},[p0]),y=x((W)=>{if(!W)return;p0();let G=Date.now();C$.current=G,l({type:W.type||"active",last_activity:!0}),d$.current=setTimeout(()=>{if(C$.current!==G)return;l((F)=>{if(!F||!(F.last_activity||F.lastActivity))return F;return null})},l6)},[p0]),A=x(()=>{f_.current=!1,N0(!1),X_.current=null,M_.current=0,H_.current="",A_.current="",m_.current=null,o0.current=null,q_.current=null,__.current=null,V0.current=null,C_.current={inFlight:!1,lastAttemptAt:0,turnId:null},p0(),w_(null),W_(null),F_.current=!1,Z_.current=!1},[p0,w_,W_,N0]),Y=x((W)=>{if(!j9({remainingQueueCount:W,currentTurnId:q_.current,isAgentTurnActive:p_}))return;__.current=null,W_(null)},[p_,W_]),O=x(()=>({agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}),[]),D=x(()=>({agentStatus:t,agentDraft:j_?{...j_}:{text:"",totalLines:0},agentPlan:G_||"",agentThought:r?{...r}:{text:"",totalLines:0},pendingRequest:N_,currentTurnId:Y_,steerQueuedTurnId:U_,isAgentTurnActive:Boolean(p_),followupQueueItems:Array.isArray(G0)?G0.map((W)=>({...W})):[],activeModel:_0,activeThinkingLevel:R_,supportsThinking:Boolean(g_),activeModelUsage:y_,contextUsage:Z0,isAgentRunning:Boolean(f_.current),wasAgentActive:Boolean(S0.current),draftBuffer:H_.current||"",thoughtBuffer:A_.current||"",lastAgentEvent:X_.current||null,lastSilenceNotice:M_.current||0,lastAgentResponse:o0.current||null,currentTurnIdRef:q_.current||null,steerQueuedTurnIdRef:__.current||null,thoughtExpanded:Boolean(F_.current),draftExpanded:Boolean(Z_.current),agentStatusRef:V0.current||null,silentRecovery:{...C_.current||{inFlight:!1,lastAttemptAt:0,turnId:null}}}),[_0,y_,R_,j_,G_,t,r,Z0,Y_,G0,p_,N_,U_,g_]),I=x((W)=>{let G=W||O();p0(),f_.current=Boolean(G.isAgentRunning),S0.current=Boolean(G.wasAgentActive),N0(Boolean(G.isAgentTurnActive)),X_.current=G.lastAgentEvent||null,M_.current=Number(G.lastSilenceNotice||0),H_.current=G.draftBuffer||"",A_.current=G.thoughtBuffer||"",m_.current=G.pendingRequest||null,o0.current=G.lastAgentResponse||null,q_.current=G.currentTurnIdRef||null,__.current=G.steerQueuedTurnIdRef||null,V0.current=G.agentStatusRef||null,C_.current=G.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},F_.current=Boolean(G.thoughtExpanded),Z_.current=Boolean(G.draftExpanded),l(G.agentStatus||null),i(G.agentDraft?{...G.agentDraft}:{text:"",totalLines:0}),u_(G.agentPlan||""),s(G.agentThought?{...G.agentThought}:{text:"",totalLines:0}),$_(G.pendingRequest||null),w_(G.currentTurnId||null),W_(G.steerQueuedTurnId||null),r_(Array.isArray(G.followupQueueItems)?G.followupQueueItems.map((F)=>({...F})):[]),d_(G.activeModel||null),n_(G.activeThinkingLevel||null),I_(Boolean(G.supportsThinking)),P_(G.activeModelUsage??null),v_(G.contextUsage??null)},[p0,O,w_,r_,N0,W_]),T=x((W)=>{if(!W)return;if(q_.current===W)return;q_.current=W,C_.current={inFlight:!1,lastAttemptAt:0,turnId:W},w_(W),__.current=null,W_(null),H_.current="",A_.current="",i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0}),$_(null),m_.current=null,o0.current=null,F_.current=!1,Z_.current=!1},[w_,W_]),f=x((W)=>{if(typeof document<"u"){let e=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&e)return}let G=o0.current;if(!G||!G.post)return;if(W&&G.turnId&&G.turnId!==W)return;let F=G.post;if(F.id&&J$.current===F.id)return;let E=String(F?.data?.content||"").trim();if(!E)return;J$.current=F.id||J$.current,o0.current=null;let b=E.replace(/\s+/g," ").slice(0,200),g=d0.current||{},K_=(F?.data?.agent_id?g[F.data.agent_id]:null)?.name||"Pi";H0(K_,b)},[H0]),n=x(async(W,G)=>{if(W!=="thought"&&W!=="draft")return;let F=q_.current;if(W==="thought"){if(F_.current=G,F)try{await L9(F,"thought",G)}catch(E){console.warn("Failed to update thought visibility:",E)}if(!G)return;try{let E=F?await V9(F,"thought"):null;if(E?.text)A_.current=E.text;s((b)=>({...b||{text:"",totalLines:0},fullText:A_.current||b?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:b?.totalLines||0}))}catch(E){console.warn("Failed to fetch full thought:",E)}return}if(Z_.current=G,F)try{await L9(F,"draft",G)}catch(E){console.warn("Failed to update draft visibility:",E)}if(!G)return;try{let E=F?await V9(F,"draft"):null;if(E?.text)H_.current=E.text;i((b)=>({...b||{text:"",totalLines:0},fullText:H_.current||b?.fullText||"",totalLines:Number.isFinite(E?.total_lines)?E.total_lines:b?.totalLines||0}))}catch(E){console.warn("Failed to fetch full draft:",E)}},[]),x_=k(null),W0=x(()=>{let W=D$.current;if(!W)return;if(!(Math.abs(W.scrollTop)>150))W.scrollTop=0},[]);x_.current=W0;let O_=x((W)=>{let G=D$.current;if(!G||typeof W!=="function"){W?.();return}let{currentHashtag:F,searchQuery:E,searchOpen:b}=k0.current||{},g=!((E||b)&&!F),o=g?G.scrollHeight-G.scrollTop:G.scrollTop;W(),requestAnimationFrame(()=>{let K_=D$.current;if(!K_)return;if(g){let e=Math.max(K_.scrollHeight-o,0);K_.scrollTop=e}else{let e=Math.max(K_.scrollHeight-K_.clientHeight,0),h=Math.min(o,e);K_.scrollTop=h}})},[]),a0=x((W)=>{let G=D$.current;if(!G||typeof W!=="function"){W?.();return}let F=G.scrollTop;W(),requestAnimationFrame(()=>{let E=D$.current;if(!E)return;let b=Math.max(E.scrollHeight-E.clientHeight,0);E.scrollTop=Math.min(F,b)})},[]),B2="Queued as a follow-up (one-at-a-time).",O2="⁣",f$=x((W)=>{if(!W||!Array.isArray(W))return W;let G=z0.current,F=new Set(G),E=W.filter((b)=>{if(F.has(b?.id))return!1;if(b?.data?.is_bot_message){let g=b?.data?.content;if(g===B2||g===O2)return!1}return!0});return E.length===W.length?W:E},[]),{posts:a2,setPosts:j0,hasMore:f0,setHasMore:s$,hasMoreRef:t2,loadPosts:t0,refreshTimeline:E0,loadMore:Y2,loadMoreRef:c0}=g6({preserveTimelineScroll:O_,preserveTimelineScrollTop:a0,chatJid:$}),U$=h_(()=>f$(a2),[a2,G0,f$]),C2=x(()=>{let W=U0.current;if(!W)return;j0((G)=>G?G.filter((F)=>F.id!==W):G),U0.current=null},[j0]),{handleSplitterMouseDown:I1,handleSplitterTouchStart:B9,handleEditorSplitterMouseDown:O9,handleEditorSplitterTouchStart:F9,handleDockSplitterMouseDown:H9,handleDockSplitterTouchStart:D9}=c6({appShellRef:n0,sidebarWidthRef:x$,editorWidthRef:M$,dockHeightRef:I$}),L3=x(()=>{if(!f_.current)return;f_.current=!1,M_.current=0,X_.current=null,q_.current=null,w_(null),F_.current=!1,Z_.current=!1;let W=(H_.current||"").trim();if(H_.current="",A_.current="",i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0}),$_(null),m_.current=null,o0.current=null,!W){l({type:"error",title:"Response stalled - No content received"});return}let F=`${W}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E=Date.now(),b=new Date().toISOString(),g={id:E,timestamp:b,data:{type:"agent_response",content:F,agent_id:"default",is_local_stall:!0}};U0.current=E,j0((o)=>o?r2([...o,g]):[g]),x_.current?.(),l(null)},[w_]);v(()=>{k0.current={currentHashtag:q,searchQuery:V,searchOpen:w}},[q,V,w]);let T_=x(()=>{let W=++q0.current,G=$;sj(G).then((F)=>{if(W!==q0.current)return;if(k_.current!==G)return;let E=$0.current,b=Array.isArray(F?.items)?F.items.map((g)=>({...g})).filter((g)=>!E.has(g.row_id)):[];if(b.length){r_((g)=>{if(g.length===b.length&&g.every((o,K_)=>o.row_id===b[K_].row_id))return g;return b});return}E.clear(),Y(0),r_((g)=>g.length===0?g:[])}).catch(()=>{if(W!==q0.current)return;if(k_.current!==G)return;r_((F)=>F.length===0?F:[])})},[Y,$,r_]),Y$=x(async()=>{let W=$;try{let G=await X3(W);if(k_.current!==W)return;if(G)v_(G)}catch(G){if(k_.current!==W)return;console.warn("Failed to fetch agent context:",G)}},[$]),z$=x(async()=>{let W=$;try{let G=await Q9(W);if(k_.current!==W)return null;if(!G||G.status!=="active"||!G.data){if(S0.current){let{currentHashtag:b,searchQuery:g,searchOpen:o}=k0.current||{};if(!b&&!g&&!o)E0()}return S0.current=!1,A(),V0.current=null,l(null),i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0}),$_(null),m_.current=null,G??null}S0.current=!0;let F=G.data;V0.current=F;let E=F.turn_id||F.turnId;if(E)T(E);if(r0({running:!0,clearSilence:!0}),Q(),l(F),G.thought&&G.thought.text)s((b)=>{if(b&&b.text&&b.text.length>=G.thought.text.length)return b;return A_.current=G.thought.text,{text:G.thought.text,totalLines:G.thought.totalLines||0}});if(G.draft&&G.draft.text)i((b)=>{if(b&&b.text&&b.text.length>=G.draft.text.length)return b;return H_.current=G.draft.text,{text:G.draft.text,totalLines:G.draft.totalLines||0}});return G}catch(G){return console.warn("Failed to fetch agent status:",G),null}},[A,Q,r0,E0,T]),C1=x(async()=>{if(!f_.current)return null;if(m_.current)return null;let W=q_.current||null,G=C_.current,F=Date.now();if(G.inFlight)return null;if(G.turnId===W&&F-G.lastAttemptAt<Y3)return null;G.inFlight=!0,G.lastAttemptAt=F,G.turnId=W;try{let{currentHashtag:E,searchQuery:b,searchOpen:g}=k0.current||{};if(!E&&!b&&!g)await E0();return await T_(),await z$()}finally{G.inFlight=!1}},[z$,T_,E0]);v(()=>{let W=Math.min(1000,Math.max(100,Math.floor(K3/2))),G=setInterval(()=>{if(!f_.current)return;if(m_.current)return;let F=X_.current;if(!F)return;let E=Date.now(),b=E-F,g=i2(V0.current);if(b>=i6){if(!g)l({type:"waiting",title:"Re-syncing after a quiet period…"});C1();return}if(b>=K3){if(E-M_.current>=Y3){if(!g){let o=Math.floor(b/1000);l({type:"waiting",title:`Waiting for model… No events for ${o}s`})}M_.current=E,C1()}}},W);return()=>clearInterval(G)},[C1]);let J9=x((W)=>{if(z(W),W!=="connected"){l(null),i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0}),$_(null),m_.current=null,A();return}if(!i$.current){i$.current=!0;let{currentHashtag:b,searchQuery:g,searchOpen:o}=k0.current||{};if(!b&&!g&&!o)E0();z$(),T_(),Y$();return}let{currentHashtag:G,searchQuery:F,searchOpen:E}=k0.current;if(!G&&!F&&!E)E0();z$(),T_(),Y$()},[A,E0,z$,T_,Y$]),y9=x(async(W)=>{U(W),j0(null),await t0(W)},[t0]),k9=x(async()=>{U(null),H(null),j0(null),await t0()},[t0]),E9=x(async(W,G=m)=>{if(!W||!W.trim())return;let F=G==="root"||G==="all"?G:"current";u(F),H(W.trim()),U(null),j0(null);try{let E=await X9(W.trim(),50,0,$,F,b_);j0(E.results),s$(!1)}catch(E){console.error("Failed to search:",E),j0([])}},[$,b_,m]),w9=x(()=>{R(!0),H(null),U(null),u("current"),j0([])},[]),A9=x(()=>{R(!1),H(null),t0()},[t0]),$Z=x(()=>{},[]),T1=!q&&!V&&!w,P9=x(async(W)=>{if(!W)return;let G=W.id,F=typeof W?.chat_jid==="string"&&W.chat_jid.trim()?W.chat_jid.trim():$,E=U$?.filter((g)=>g?.data?.thread_id===G&&g?.id!==G).length||0;if(E>0){if(!window.confirm(`Delete this message and its ${E} replies?`))return}let b=(g)=>{if(!g.length)return;m0((K_)=>{let e=new Set(K_);return g.forEach((h)=>e.add(h)),e}),setTimeout(()=>{if(a0(()=>{j0((K_)=>K_?K_.filter((e)=>!g.includes(e.id)):K_)}),m0((K_)=>{let e=new Set(K_);return g.forEach((h)=>e.delete(h)),e}),t2.current)c0.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let g=await q9(G,E>0,F);if(g?.ids?.length)b(g.ids)}catch(g){let o=g?.message||"";if(E===0&&o.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let e=await q9(G,!0,F);if(e?.ids?.length)b(e.ids);return}console.error("Failed to delete post:",g),alert(`Failed to delete message: ${o}`)}},[$,U$,a0]),Q3=x(async()=>{try{let W=await ij();J_(d6(W));let G=W?.user||{};P$((E)=>{let b=typeof G.name==="string"&&G.name.trim()?G.name.trim():"You",g=typeof G.avatar_url==="string"?G.avatar_url.trim():null,o=typeof G.avatar_background==="string"&&G.avatar_background.trim()?G.avatar_background.trim():null;if(E.name===b&&E.avatar_url===g&&E.avatar_background===o)return E;return{name:b,avatar_url:g,avatar_background:o}});let F=(W?.agents||[]).find((E)=>E.id==="default");n$(F?.name,F?.avatar_url)}catch(W){console.warn("Failed to load agents:",W)}try{let W=$,G=await X3(W);if(k_.current!==W)return;if(G)v_(G)}catch{}},[n$,$]);v(()=>{Q3();let W=y2("sidebarWidth",null),G=Number.isFinite(W)?Math.min(Math.max(W,160),600):280;if(x$.current=G,n0.current)n0.current.style.setProperty("--sidebar-width",`${G}px`)},[Q3]);let S1=p_||t!==null,U3=x((W)=>{if(!W||typeof W!=="object")return;let G=W.agent_id;if(!G)return;let{agent_name:F,agent_avatar:E}=W;if(!F&&E===void 0)return;let b=d0.current?.[G]||{id:G},g=b.name||null,o=b.avatar_url??b.avatarUrl??b.avatar??null,K_=!1,e=!1;if(F&&F!==b.name)g=F,e=!0;if(E!==void 0){let h=typeof E==="string"?E.trim():null,V_=typeof o==="string"?o.trim():null,E_=h||null;if(E_!==(V_||null))o=E_,K_=!0}if(!e&&!K_)return;if(J_((h)=>{let E_={...h[G]||{id:G}};if(e)E_.name=g;if(K_)E_.avatar_url=o;return{...h,[G]:E_}}),G==="default")n$(g,o,K_?Date.now():null)},[n$]),B3=x((W)=>{if(!W||typeof W!=="object")return;let G=W.user_name??W.userName,F=W.user_avatar??W.userAvatar,E=W.user_avatar_background??W.userAvatarBackground;if(G===void 0&&F===void 0&&E===void 0)return;P$((b)=>{let g=typeof G==="string"&&G.trim()?G.trim():b.name||"You",o=F===void 0?b.avatar_url:typeof F==="string"&&F.trim()?F.trim():null,K_=E===void 0?b.avatar_background:typeof E==="string"&&E.trim()?E.trim():null;if(b.name===g&&b.avatar_url===o&&b.avatar_background===K_)return b;return{name:g,avatar_url:o,avatar_background:K_}})},[]),f1=x((W)=>{if(!W||typeof W!=="object")return;let G=W.model??W.current;if(G!==void 0)d_(G);if(W.thinking_level!==void 0)n_(W.thinking_level??null);if(W.supports_thinking!==void 0)I_(Boolean(W.supports_thinking));if(W.provider_usage!==void 0)P_(W.provider_usage??null)},[]),T2=x(()=>{let W=$;lj(W).then((G)=>{if(k_.current!==W)return;if(G)f1(G)}).catch(()=>{})},[f1,$]),x0=x(()=>{let W=$,G=(F)=>Array.isArray(F)?F.filter((E)=>E&&typeof E.chat_jid==="string"&&typeof E.agent_name==="string"&&E.agent_name.trim()):[];Promise.all([dj().catch(()=>({chats:[]})),q3(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([F,E])=>{if(k_.current!==W)return;let b=G(F?.chats),g=G(E?.chats);if(g.length===0){X0(b);return}let o=new Map(b.map((e)=>[e.chat_jid,e])),K_=g.map((e)=>{let h=o.get(e.chat_jid);return h?{...e,...h,is_active:h.is_active??e.is_active}:e});K_.sort((e,h)=>{if(e.chat_jid===W&&h.chat_jid!==W)return-1;if(h.chat_jid===W&&e.chat_jid!==W)return 1;let V_=Boolean(e.archived_at),E_=Boolean(h.archived_at);if(V_!==E_)return V_?1:-1;if(Boolean(e.is_active)!==Boolean(h.is_active))return e.is_active?-1:1;return String(e.chat_jid).localeCompare(String(h.chat_jid))}),X0(K_)}).catch(()=>{if(k_.current!==W)return;X0([])})},[$]),w0=x(()=>{q3(b_).then((W)=>{let G=Array.isArray(W?.chats)?W.chats.filter((F)=>F&&typeof F.chat_jid==="string"&&typeof F.agent_name==="string"):[];F0(G)}).catch(()=>{})},[b_]),b9=x((W)=>{let G=W?.row_id;if(G==null)return;$0.current.add(G),r_((F)=>F.filter((E)=>E?.row_id!==G)),rj(G,W3($)).then(()=>{T_()}).catch((F)=>{console.warn("[queue] Failed to steer queued item:",F),z_("Failed to steer message","The queued message could not be sent as steering.","warning"),$0.current.delete(G),T_()})},[$,T_,r_,z_]),x9=x((W)=>{let G=W?.row_id;if(G==null)return;let F=V$.current.filter((E)=>E?.row_id!==G).length;$0.current.add(G),Y(F),r_((E)=>E.filter((b)=>b?.row_id!==G)),aj(G,W3($)).then(()=>{T_()}).catch((E)=>{console.warn("[queue] Failed to remove queued item:",E),z_("Failed to remove message","The queued message could not be removed.","warning"),$0.current.delete(G),T_()})},[Y,$,T_,r_,z_]),R1=x((W)=>{if(!W||typeof W!=="object")return;if(x0(),w0(),W?.queued==="followup"||W?.queued==="steer"){T_();return}let G=W?.command;if(G&&typeof G==="object"&&(G?.queued_followup||G?.queued_steer))T_()},[x0,w0,T_]),v1=x(()=>{if(s0.current)s0.current.abort(),s0.current=null;Y0(null)},[]),e2=x(async(W)=>{let G=String(W||"").trim();if(!G)return z_("BTW needs a question","Usage: /btw <question>","warning"),!0;if(s0.current)s0.current.abort();let F=new AbortController;s0.current=F,Y0({question:G,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E=await tj(G,{signal:F.signal,chatJid:k8($),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(b,g)=>{if(b==="side_prompt_start")Y0((o)=>o?{...o,status:"running"}:o)},onThinkingDelta:(b)=>{Y0((g)=>g?{...g,thinking:`${g.thinking||""}${b||""}`}:g)},onTextDelta:(b)=>{Y0((g)=>g?{...g,answer:`${g.answer||""}${b||""}`}:g)}});if(s0.current!==F)return!0;Y0((b)=>b?{...b,answer:E?.result||b.answer||"",thinking:E?.thinking||b.thinking||"",model:E?.model||null,status:"success",error:null}:b)}catch(E){if(F.signal.aborted)return!0;Y0((b)=>b?{...b,status:"error",error:E?.payload?.error||E?.message||"BTW request failed."}:b)}finally{if(s0.current===F)s0.current=null}return!0},[$,z_]),M9=x(async({content:W})=>{let G=y8(W);if(!G)return!1;if(G.type==="help")return z_("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(G.type==="clear")return v1(),z_("BTW cleared","Closed the side conversation panel.","info"),!0;if(G.type==="ask")return await e2(G.question),!0;return!1},[v1,e2,z_]),I9=x(()=>{if(c_?.question)e2(c_.question)},[c_,e2]),C9=x(async()=>{let W=A8(c_);if(!W)return;try{let G=await H2("default",W,null,[],S1?"queue":null,$);R1(G),z_(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(G){z_("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning")}},[c_,R1,S1,z_]),S2=x(()=>{T2(),x0(),w0(),T_(),Y$()},[T2,x0,w0,T_,Y$]);v(()=>{S2();let W=setInterval(()=>{T2(),x0(),w0(),T_()},60000);return()=>clearInterval(W)},[S2,T2,x0,w0,T_]),v(()=>{w0()},[w0]),v(()=>{let W=!1;j0(null);let G=()=>{if(W)return;requestAnimationFrame(()=>{if(W)return;W0()})};if(q)return t0(q),()=>{W=!0};if(V)return X9(V,50,0,$,m,b_).then((F)=>{if(W)return;j0(F.results),s$(!1)}).catch((F)=>{if(W)return;console.error("Failed to search:",F),j0([]),s$(!1)}),()=>{W=!0};return t0().then(()=>{G()}).catch((F)=>{if(W)return;console.error("Failed to load timeline:",F)}),()=>{W=!0}},[$,q,V,m,b_,t0,W0,s$,j0]),v(()=>{let W=b$.current||$;Z$.current.set(W,D())},[$,D]),v(()=>{let W=b$.current||$;if(W===$)return;Z$.current.set(W,D()),b$.current=$,$0.current.clear(),I(Z$.current.get($)||null),T_(),z$(),Y$()},[$,z$,Y$,T_,I,D]);let T9=x(()=>{let{currentHashtag:W,searchQuery:G,searchOpen:F}=k0.current||{};if(!W&&!G&&!F)E0();S2()},[S2,E0]),u1=x((W,G)=>{let F=G?.turn_id,E=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null,g=E?E===$:W==="connected"||W==="workspace_update";if(g)U3(G),B3(G);if(W==="ui_theme"){Q8(G);return}if(W?.startsWith("agent_")){if(!(W==="agent_draft_delta"||W==="agent_thought_delta"||W==="agent_draft"||W==="agent_thought"))Q()}if(W==="connected"){l(null),i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0}),$_(null),m_.current=null,A();let h=$;Q9(h).then((A0)=>{if(k_.current!==h)return;if(!A0||A0.status!=="active"||!A0.data)return;let z2=A0.data,_1=z2.turn_id||z2.turnId;if(_1)T(_1);if(r0({clearSilence:!0}),y(z2),A0.thought&&A0.thought.text)A_.current=A0.thought.text,s({text:A0.thought.text,totalLines:A0.thought.totalLines||0});if(A0.draft&&A0.draft.text)H_.current=A0.draft.text,i({text:A0.draft.text,totalLines:A0.draft.totalLines||0})}).catch((A0)=>{console.warn("Failed to fetch agent status:",A0)});let{currentHashtag:V_,searchQuery:E_,searchOpen:G$}=k0.current||{};if(!V_&&!E_&&!G$)E0();S2();return}if(W==="agent_status"){if(!g){if(G?.type==="done"||G?.type==="error")x0(),w0();return}if(G.type==="done"||G.type==="error"){if(F&&q_.current&&F!==q_.current)return;if(G.type==="done"){f(F||q_.current);let{currentHashtag:h,searchQuery:V_,searchOpen:E_}=k0.current||{};if(!h&&!V_&&!E_)E0();if(G.context_usage)v_(G.context_usage)}if(S0.current=!1,A(),$0.current.clear(),x0(),T_(),i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0}),$_(null),G.type==="error")l({type:"error",title:G.title||"Agent error"}),setTimeout(()=>l(null),8000);else l(null)}else{if(F)T(F);if(r0({running:!0,clearSilence:!0}),G.type==="thinking")H_.current="",A_.current="",i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0});V0.current=G,l((h)=>{if(h&&h.type===G.type&&h.title===G.title)return h;return G})}return}if(W==="agent_steer_queued"){if(!g)return;if(F&&q_.current&&F!==q_.current)return;let h=F||q_.current;if(!h)return;__.current=h,W_(h);return}if(W==="agent_followup_queued"){if(!g)return;let h=G?.row_id,V_=G?.content;if(h!=null&&typeof V_==="string"&&V_.trim())r_((E_)=>{if(E_.some((G$)=>G$?.row_id===h))return E_;return[...E_,{row_id:h,content:V_,timestamp:G?.timestamp||null,thread_id:G?.thread_id??null}]});T_();return}if(W==="agent_followup_consumed"){if(!g)return;let h=G?.row_id;if(h!=null){let A0=V$.current.filter((z2)=>z2.row_id!==h).length;Y(A0),r_((z2)=>z2.filter((_1)=>_1.row_id!==h))}T_();let{currentHashtag:V_,searchQuery:E_,searchOpen:G$}=k0.current||{};if(!V_&&!E_&&!G$)E0();return}if(W==="agent_followup_removed"){if(!g)return;let h=G?.row_id;if(h!=null){let V_=V$.current.filter((E_)=>E_.row_id!==h).length;$0.current.add(h),Y(V_),r_((E_)=>E_.filter((G$)=>G$.row_id!==h))}T_();return}if(W==="agent_draft_delta"){if(!g)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)T(F);if(r0({running:!0,clearSilence:!0}),G?.reset)H_.current="";if(G?.delta)H_.current+=G.delta;let h=Date.now();if(!_2.current||h-_2.current>=100){_2.current=h;let V_=H_.current,E_=z3(V_);if(Z_.current)i((G$)=>({text:G$?.text||"",totalLines:E_,fullText:V_}));else i({text:V_,totalLines:E_})}return}if(W==="agent_draft"){if(!g)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)T(F);r0({running:!0,clearSilence:!0});let h=G.text||"",V_=G.mode||(G.kind==="plan"?"replace":"append"),E_=Number.isFinite(G.total_lines)?G.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(G.kind==="plan")if(V_==="replace")u_(h);else u_((G$)=>(G$||"")+h);else if(!Z_.current)H_.current=h,i({text:h,totalLines:E_});return}if(W==="agent_thought_delta"){if(!g)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)T(F);if(r0({running:!0,clearSilence:!0}),G?.reset)A_.current="";if(typeof G?.delta==="string")A_.current+=G.delta;let h=Date.now();if(F_.current&&(!l$.current||h-l$.current>=100)){l$.current=h;let V_=A_.current;s((E_)=>({text:E_?.text||"",totalLines:z3(V_),fullText:V_}))}return}if(W==="agent_thought"){if(!g)return;if(F&&q_.current&&F!==q_.current)return;if(F&&!q_.current)T(F);r0({running:!0,clearSilence:!0});let h=G.text||"",V_=Number.isFinite(G.total_lines)?G.total_lines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;if(!F_.current)A_.current=h,s({text:h,totalLines:V_});return}if(W==="model_changed"){if(!g)return;if(G?.model!==void 0)d_(G.model);if(G?.thinking_level!==void 0)n_(G.thinking_level??null);if(G?.supports_thinking!==void 0)I_(Boolean(G.supports_thinking));let h=$;X3(h).then((V_)=>{if(k_.current!==h)return;if(V_)v_(V_)}).catch(()=>{});return}if(W==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:G}));return}if(K9(W)){if(!g)return;if(Y9(W,G),W==="extension_ui_notify"&&typeof G?.message==="string")z_(G.message,null,G?.type||"info");if(W==="extension_ui_error"&&typeof G?.error==="string")z_("Extension UI error",G.error,"error",5000);return}let{currentHashtag:o,searchQuery:K_,searchOpen:e}=k0.current;if(W==="agent_response"){if(!g)return;C2(),o0.current={post:G,turnId:q_.current}}if(!o&&!K_&&!e&&g&&(W==="new_post"||W==="new_reply"||W==="agent_response"))j0((h)=>{if(!h)return[G];if(h.some((V_)=>V_.id===G.id))return h;return[...h,G]}),x_.current?.();if(W==="interaction_updated"){if(!g)return;if(o||K_||e)return;j0((h)=>{if(!h)return h;if(!h.some((V_)=>V_.id===G.id))return h;return h.map((V_)=>V_.id===G.id?G:V_)})}if(W==="interaction_deleted"){if(!g)return;if(o||K_||e)return;let h=G?.ids||[];if(h.length){if(a0(()=>{j0((V_)=>V_?V_.filter((E_)=>!h.includes(E_.id)):V_)}),t2.current)c0.current?.({preserveScroll:!0,preserveMode:"top"})}}},[A,Q,$,c0,r0,f,a0,x0,w0,E0,C2,T,y,U3,B3,T2,T_,r_]);v(()=>{if(typeof window>"u")return;let W=window.__PICLAW_TEST_API||{};return W.emit=u1,W.reset=()=>{C2(),A(),l(null),i({text:"",totalLines:0}),u_(""),s({text:"",totalLines:0}),$_(null)},W.finalize=()=>L3(),window.__PICLAW_TEST_API=W,()=>{if(window.__PICLAW_TEST_API===W)window.__PICLAW_TEST_API=void 0}},[A,L3,u1,C2]),u6({handleSseEvent:u1,handleConnectionStatusChange:J9,loadPosts:t0,onWake:T9,chatJid:$}),v(()=>{if(!U$||U$.length===0)return;let W=location.hash;if(!W||!W.startsWith("#msg-"))return;let G=W.slice(5);K2(G),history.replaceState(null,"",location.pathname+location.search)},[U$,K2]);let m1=t!==null;v(()=>{if(K!=="connected")return;let G=setInterval(()=>{let{currentHashtag:F,searchQuery:E,searchOpen:b}=k0.current||{},g=!F&&!E&&!b;if(m1){if(g)E0();T_(),z$(),Y$()}else{if(g)E0();z$(),Y$()}},m1?15000:60000);return()=>clearInterval(G)},[K,m1,z$,Y$,T_,E0]),v(()=>{return G9(()=>{z$(),Y$(),T_()})},[z$,Y$,T_]);let S9=x(()=>{i0((W)=>!W)},[]),O3=x((W)=>{if(typeof window>"u")return;let G=String(W||"").trim();if(!G||G===$)return;let F=V2(window.location.href,G,{chatOnly:j});window.location.assign(F)},[j,$]),F3=x(async()=>{if(typeof window>"u"||!L_?.chat_jid)return;let W=Date.now(),G=W9();if(!G)return;if($2.current||W<T$.current||G.inFlight||W<G.cooldownUntil)return;$2.current=!0,G.inFlight=!0,j2(!0);try{let F=L_.display_name||L_.agent_name||"",E=window.prompt("Agent name",F);if(E===null)return;let b=E.trim(),g=b.toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")||L_.agent_name||"",o=await nj(L_.chat_jid,{displayName:b,agentName:g});await Promise.allSettled([x0(),w0()]);let K_=o?.branch?.agent_name||g||L_.agent_name||"",e=o?.branch?.display_name||b||K_;z_("Branch renamed",`${e} (@${K_})`,"info",3500)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not rename branch."),b=/already in use/i.test(E||"")?`${E} Switch to or restore that existing session from the session manager.`:E;z_("Could not rename branch",b||"Could not rename branch.","warning",5000)}finally{$2.current=!1,j2(!1);let F=Date.now()+gj;T$.current=F;let E=W9();if(E)E.inFlight=!1,E.cooldownUntil=F}},[L_,x0,w0,j2,z_]),H3=x(async(W=null)=>{if(typeof window>"u")return;let G=typeof W==="string"&&W.trim()?W.trim():"",F=typeof $==="string"&&$.trim()?$.trim():"",E=G||L_?.chat_jid||F;if(!E){z_("Could not prune branch","No active session is selected yet.","warning",4000);return}let b=(L_?.chat_jid===E?L_:null)||o_.find((e)=>e?.chat_jid===E)||K0.find((e)=>e?.chat_jid===E)||null;if(b?.chat_jid===(b?.root_chat_jid||b?.chat_jid)){z_("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000);return}let o=`@${b?.agent_name||E}${b?.chat_jid?` — ${b.chat_jid}`:""}`;if(!window.confirm(`Prune ${o}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return;try{await oj(E),await Promise.allSettled([x0(),w0()]);let e=b?.root_chat_jid||"web:default";z_("Branch pruned",`${o} has been archived.`,"info",3000);let h=V2(window.location.href,e,{chatOnly:j});window.location.assign(h)}catch(e){let h=e instanceof Error?e.message:String(e||"Could not prune branch.");z_("Could not prune branch",h||"Could not prune branch.","warning",5000)}},[K0,j,L_,o_,$,x0,w0,z_]),f9=x(async(W)=>{let G=typeof W==="string"?W.trim():"";if(!G||typeof U9!=="function")return;try{let F=await U9(G);await Promise.allSettled([x0(),w0()]);let E=F?.branch,b=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():G,g=typeof E?.agent_name==="string"&&E.agent_name.trim()?`@${E.agent_name.trim()}`:b;z_("Branch restored",`Restored ${g}.`,"info",3200);let o=V2(window.location.href,b,{chatOnly:j});window.location.assign(o)}catch(F){let E=F instanceof Error?F.message:String(F||"Could not restore branch.");z_("Could not restore branch",E||"Could not restore branch.","warning",5000)}},[j,x0,w0,z_]);v(()=>{if(!Z||typeof window>"u")return;let W=!1;return(async()=>{try{B_({status:"running",message:"Preparing a new chat branch…"});let G=await u2(N);if(W)return;let F=G?.branch,E=typeof F?.chat_jid==="string"&&F.chat_jid.trim()?F.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let b=V2(window.location.href,E,{chatOnly:!0});window.location.replace(b)}catch(G){if(W)return;B_({status:"error",message:M1(G)})}})(),()=>{W=!0}},[Z,N]);let R9=x(async()=>{if(typeof window>"u")return;try{let G=(await u2($))?.branch,F=typeof G?.chat_jid==="string"&&G.chat_jid.trim()?G.chat_jid.trim():null;if(!F)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([x0(),w0()]);let E=G?.agent_name?`@${G.agent_name}`:F;z_("New branch created",`Switched to ${E}.`,"info",2500);let b=V2(window.location.href,F,{chatOnly:j});window.location.assign(b)}catch(W){z_("Could not create branch",M1(W),"warning",5000)}},[j,$,x0,w0,z_]),v9=x(async()=>{if(typeof window>"u"||X)return;let W=r6($);if(!W){z_("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000);return}if(W.mode==="tab"){let F=$9(window.location.href,$,{chatOnly:!0});if(!window.open(F,W.target))z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}let G=a6(W);if(!G){z_("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000);return}t6(G,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await u2($))?.branch,b=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!b)throw Error("Branch fork did not return a chat id.");try{let o=await _4();X0(Array.isArray(o?.chats)?o.chats:[])}catch{}try{let o=await q3(b_);F0(Array.isArray(o?.chats)?o.chats:[])}catch{}let g=V2(window.location.href,b,{chatOnly:!0});e6(G,g)}catch(F){_9(G),z_("Could not open branch window",M1(F),"error",5000)}},[$,b_,X,z_]);v(()=>{if(!D0)return;if(typeof window>"u")return;let W=n0.current;if(!W)return;if(!M$.current){let G=y2("editorWidth",null),F=x$.current||280;M$.current=Number.isFinite(G)?G:F}if(W.style.setProperty("--editor-width",`${M$.current}px`),!I$.current){let G=y2("dockHeight",null);I$.current=Number.isFinite(G)?G:200}W.style.setProperty("--dock-height",`${I$.current}px`)},[D0]),v(()=>{if(!I0||j)return;let W=(G)=>{if(G.ctrlKey&&G.key==="`")G.preventDefault(),u0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[u0,I0,j]),v(()=>{if(j)return;let W=(G)=>{if(G.ctrlKey&&G.shiftKey&&(G.key==="Z"||G.key==="z")){G.preventDefault(),F$();return}if(G.key==="Escape"&&C0)G.preventDefault(),T0()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[F$,T0,C0,j]);let u9=Boolean(U_&&U_===(t?.turn_id||Y_));if(Z)return B`
            <div class="app-shell chat-only">
                <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
                    <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
                        <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
                            ${a.status==="error"?"Could not open branch window":"Opening branch…"}
                        </h1>
                        <p style=${{margin:0,lineHeight:1.6}}>${a.message}</p>
                    </div>
                </div>
            </div>
        `;return B`
        <div class=${`app-shell${B0?"":" workspace-collapsed"}${D0?" editor-open":""}${j?" chat-only":""}${C0?" zen-mode":""}`} ref=${n0}>
            ${!j&&B`
                <${T6}
                    onFileSelect=${Z2}
                    visible=${B0}
                    active=${B0||D0}
                    onOpenEditor=${a_}
                    onOpenTerminalTab=${y0}
                    onToggleTerminal=${I0?u0:void 0}
                    terminalVisible=${Boolean(I0&&O0)}
                />
                <button
                    class=${`workspace-toggle-tab${B0?" open":" closed"}`}
                    onClick=${S9}
                    title=${B0?"Hide workspace":"Show workspace"}
                    aria-label=${B0?"Hide workspace":"Show workspace"}
                >
                    <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="6 3 11 8 6 13" />
                    </svg>
                </button>
                <div class="workspace-splitter" onMouseDown=${I1} onTouchStart=${B9}></div>
            `}
            ${w$&&B`
                <div class="editor-pane-container">
                    ${C0&&B`<div class="zen-hover-zone"></div>`}
                    ${D0&&B`
                        <${f6}
                            tabs=${L2}
                            activeId=${g0}
                            onActivate=${b0}
                            onClose=${l0}
                            onCloseOthers=${M0}
                            onCloseAll=${j$}
                            onTogglePin=${k$}
                            onTogglePreview=${p$}
                            previewTabs=${Q2}
                            onToggleDock=${I0?u0:void 0}
                            dockVisible=${I0&&O0}
                            onToggleZen=${F$}
                            zenMode=${C0}
                        />
                    `}
                    ${D0&&B`<div class="editor-pane-host" ref=${c$}></div>`}
                    ${D0&&g0&&Q2.has(g0)&&B`
                        <${v6}
                            getContent=${()=>J0.current?.getContent?.()}
                            path=${g0}
                            onClose=${()=>p$(g0)}
                        />
                    `}
                    ${I0&&O0&&B`<div class="dock-splitter" onMouseDown=${H9} onTouchStart=${D9}></div>`}
                    ${I0&&B`<div class=${`dock-panel${O0?"":" hidden"}`}>
                        <div class="dock-panel-header">
                            <span class="dock-panel-title">Terminal</span>
                            <button class="dock-panel-close" onClick=${u0} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                                <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                                    <line x1="4" y1="4" x2="12" y2="12"/>
                                    <line x1="12" y1="4" x2="4" y2="12"/>
                                </svg>
                            </button>
                        </div>
                        <div class="dock-panel-body" ref=${E$}></div>
                    </div>`}
                </div>
                <div class="editor-splitter" onMouseDown=${O9} onTouchStart=${F9}></div>
            `}
            <div class="container">
                ${V&&n6()&&B`<div class="search-results-spacer"></div>`}
                ${j&&B`
                    <div class="chat-window-header">
                        <div class="chat-window-header-main">
                            <span class="chat-window-header-title">
                                ${L_?.agent_name?`@${L_.agent_name}`:$}
                            </span>
                            <span class="chat-window-header-subtitle">${L_?.chat_jid||$}</span>
                        </div>
                        <div class="chat-window-header-actions">
                            ${o_.length>1&&B`
                                <label class="chat-window-branch-picker-wrap">
                                    <span class="chat-window-branch-picker-label">Branch</span>
                                    <select
                                        class="chat-window-branch-picker"
                                        value=${$}
                                        onChange=${(W)=>O3(W.currentTarget.value)}
                                    >
                                        ${o_.map((W)=>B`
                                            <option key=${W.chat_jid} value=${W.chat_jid}>
                                                ${`@${W.agent_name} — ${W.chat_jid}${W.is_active?" • active":""}`}
                                            </option>
                                        `)}
                                    </select>
                                </label>
                            `}
                            ${L_?.chat_jid&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${F3}
                                    title=${K$?"Renaming branch…":"Rename this branch"}
                                    aria-label="Rename this branch"
                                    disabled=${K$}
                                >
                                    ${K$?"Renaming…":"Rename"}
                                </button>
                            `}
                            ${L_?.chat_jid&&L_.chat_jid!==(L_.root_chat_jid||L_.chat_jid)&&B`
                                <button
                                    class="chat-window-header-button"
                                    type="button"
                                    onClick=${H3}
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
                ${(q||V)&&B`
                    <div class="hashtag-header">
                        <button class="back-btn" onClick=${k9}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        </button>
                        <span>${q?`#${q}`:`Search: ${V} · ${C}`}</span>
                    </div>
                `}
                <${r8}
                    posts=${U$}
                    hasMore=${T1?f0:!1}
                    onLoadMore=${T1?Y2:void 0}
                    timelineRef=${D$}
                    onHashtagClick=${y9}
                    onMessageRef=${N2}
                    onScrollToMessage=${K2}
                    onFileRef=${U2}
                    onPostClick=${void 0}
                    onDeletePost=${P9}
                    emptyMessage=${q?`No posts with #${q}`:V?`No results for "${V}"`:void 0}
                    agents=${D_}
                    user=${H$}
                    reverse=${T1}
                    removingPostIds=${g$}
                    searchQuery=${V}
                />
                <${S8}
                    status=${t}
                    draft=${j_}
                    plan=${G_}
                    thought=${r}
                    pendingRequest=${N_}
                    intent=${p}
                    turnId=${Y_}
                    steerQueued=${u9}
                    onPanelToggle=${n}
                />
                <${P8}
                    session=${c_}
                    onClose=${v1}
                    onRetry=${I9}
                    onInject=${C9}
                />
                <${$8}
                    onPost=${()=>{let{searchQuery:W,searchOpen:G}=k0.current||{};if(!W&&!G)t0(),W0()}}
                    onFocus=${W0}
                    searchMode=${w}
                    searchScope=${m}
                    onSearch=${E9}
                    onSearchScopeChange=${u}
                    onEnterSearch=${w9}
                    onExitSearch=${A9}
                    fileRefs=${P}
                    onRemoveFileRef=${o$}
                    onClearFileRefs=${w2}
                    onSetFileRefs=${A2}
                    messageRefs=${c}
                    onRemoveMessageRef=${b2}
                    onClearMessageRefs=${x2}
                    onSetMessageRefs=${M2}
                    onSwitchChat=${O3}
                    onRenameSession=${F3}
                    isRenameSessionInProgress=${K$}
                    onCreateSession=${R9}
                    onDeleteSession=${H3}
                    onRestoreSession=${f9}
                    activeEditorPath=${j?null:g0}
                    onAttachEditorFile=${j?void 0:P2}
                    onOpenFilePill=${U2}
                    followupQueueCount=${Q_}
                    followupQueueItems=${G0}
                    onInjectQueuedFollowup=${b9}
                    onRemoveQueuedFollowup=${x9}
                    onSubmitIntercept=${M9}
                    onMessageResponse=${R1}
                    onSubmitError=${I2}
                    onPopOutChat=${X?void 0:v9}
                    isAgentActive=${S1}
                    activeChatAgents=${K0}
                    currentChatJid=${$}
                    connectionStatus=${K}
                    activeModel=${_0}
                    modelUsage=${y_}
                    thinkingLevel=${R_}
                    supportsThinking=${g_}
                    contextUsage=${Z0}
                    notificationsEnabled=${t$}
                    notificationPermission=${h0}
                    onToggleNotifications=${m$}
                    onModelChange=${d_}
                    onModelStateChange=${f1}
                />
                <${f8}
                    request=${N_}
                    onRespond=${()=>{$_(null),m_.current=null}}
                />
            </div>
        </div>
    `}function _Z(){let _=typeof window>"u"?new URLSearchParams:new URL(window.location.href).searchParams;return B`<${ej} locationParams=${_} />`}i3(B`<${_Z} />`,document.getElementById("app"));

//# debugId=CDF667660ADC451264756E2164756E21
//# sourceMappingURL=app.bundle.js.map
