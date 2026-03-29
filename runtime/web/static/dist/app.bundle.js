var nY=Object.defineProperty;var dY=(_)=>_;function iY(_,$){this[_]=dY.bind(null,$)}var rY=(_,$)=>{for(var j in $)nY(_,j,{get:$[j],enumerable:!0,configurable:!0,set:iY.bind($,j)})};var B8,V1,Z2,oY,M4,n3,Q2,Y2,q2,A6,F6,H6,K2,U8={},L8=[],sY=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z8=Array.isArray;function N4(_,$){for(var j in $)_[j]=$[j];return _}function E6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function F8(_,$,j){var Z,Q,Y,q={};for(Y in $)Y=="key"?Z=$[Y]:Y=="ref"?Q=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?B8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return X8(_,q,Z,Q,null)}function X8(_,$,j,Z,Q){var Y={type:_,props:$,key:j,ref:Z,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Q==null?++Z2:Q,__i:-1,__u:0};return Q==null&&V1.vnode!=null&&V1.vnode(Y),Y}function H8(_){return _.children}function K5(_,$){this.props=_,this.context=$}function N5(_,$){if($==null)return _.__?N5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?N5(_):null}function aY(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Z=[],Q=[],Y=N4({},$);Y.__v=$.__v+1,V1.vnode&&V1.vnode(Y),k6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Z,j==null?N5($):j,!!(32&$.__u),Q),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,V2(Z,Y,Q),$.__e=$.__=null,Y.__e!=j&&N2(Y)}}function N2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),N2(_)}function J6(_){(!_.__d&&(_.__d=!0)&&M4.push(_)&&!W8.__r++||n3!=V1.debounceRendering)&&((n3=V1.debounceRendering)||Q2)(W8)}function W8(){try{for(var _,$=1;M4.length;)M4.length>$&&M4.sort(Y2),_=M4.shift(),$=M4.length,aY(_)}finally{M4.length=W8.__r=0}}function G2(_,$,j,Z,Q,Y,q,K,N,G,V){var X,U,L,H,A,J,W,D=Z&&Z.__k||L8,E=$.length;for(N=tY(j,$,D,N,E),X=0;X<E;X++)(L=j.__k[X])!=null&&(U=L.__i!=-1&&D[L.__i]||U8,L.__i=X,J=k6(_,L,U,Q,Y,q,K,N,G,V),H=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&M6(U.ref,null,L),V.push(L.ref,L.__c||H,L)),A==null&&H!=null&&(A=H),(W=!!(4&L.__u))||U.__k===L.__k?N=X2(L,N,_,W):typeof L.type=="function"&&J!==void 0?N=J:H&&(N=H.nextSibling),L.__u&=-7);return j.__e=A,N}function tY(_,$,j,Z,Q){var Y,q,K,N,G,V=j.length,X=V,U=0;for(_.__k=Array(Q),Y=0;Y<Q;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=X8(null,q,null,null,null):z8(q)?q=_.__k[Y]=X8(H8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=X8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,N=Y+U,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=eY(q,j,N,X))!=-1&&(X--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Q>V?U--:Q<V&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=N&&(G==N-1?U--:G==N+1?U++:(G>N?U--:U++,q.__u|=4))):_.__k[Y]=null;if(X)for(Y=0;Y<V;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Z&&(Z=N5(K)),L2(K,K));return Z}function X2(_,$,j,Z){var Q,Y;if(typeof _.type=="function"){for(Q=_.__k,Y=0;Q&&Y<Q.length;Y++)Q[Y]&&(Q[Y].__=_,$=X2(Q[Y],$,j,Z));return $}_.__e!=$&&(Z&&($&&_.type&&!$.parentNode&&($=N5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function eY(_,$,j,Z){var Q,Y,q,K=_.key,N=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&K==null||V&&K==G.key&&N==G.type)return j;if(Z>(V?1:0)){for(Q=j-1,Y=j+1;Q>=0||Y<$.length;)if((G=$[q=Q>=0?Q--:Y++])!=null&&(2&G.__u)==0&&K==G.key&&N==G.type)return q}return-1}function d3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||sY.test($)?j:j+"px"}function G8(_,$,j,Z,Q){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Z=="string"&&(_.style.cssText=Z=""),Z)for($ in Z)j&&$ in j||d3(_.style,$,"");if(j)for($ in j)Z&&j[$]==Z[$]||d3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(q2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Z?j.u=Z.u:(j.u=A6,_.addEventListener($,Y?H6:F6,Y)):_.removeEventListener($,Y?H6:F6,Y);else{if(Q=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function i3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=A6++;else if($.t<j.u)return;return j(V1.event?V1.event($):$)}}}function k6(_,$,j,Z,Q,Y,q,K,N,G){var V,X,U,L,H,A,J,W,D,E,f,R,p,d,T,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(N=!!(32&j.__u),Y=[K=$.__e=j.__e]),(V=V1.__b)&&V($);_:if(typeof M=="function")try{if(W=$.props,D=M.prototype&&M.prototype.render,E=(V=M.contextType)&&Z[V.__c],f=V?E?E.props.value:V.__:Z,j.__c?J=(X=$.__c=j.__c).__=X.__E:(D?$.__c=X=new M(W,f):($.__c=X=new K5(W,f),X.constructor=M,X.render=$q),E&&E.sub(X),X.state||(X.state={}),X.__n=Z,U=X.__d=!0,X.__h=[],X._sb=[]),D&&X.__s==null&&(X.__s=X.state),D&&M.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=N4({},X.__s)),N4(X.__s,M.getDerivedStateFromProps(W,X.__s))),L=X.props,H=X.state,X.__v=$,U)D&&M.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),D&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(D&&M.getDerivedStateFromProps==null&&W!==L&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(W,f),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(W,X.__s,f)===!1){$.__v!=j.__v&&(X.props=W,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(F){F&&(F.__=$)}),L8.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&q.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(W,X.__s,f),D&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(L,H,A)})}if(X.context=f,X.props=W,X.__P=_,X.__e=!1,R=V1.__r,p=0,D)X.state=X.__s,X.__d=!1,R&&R($),V=X.render(X.props,X.state,X.context),L8.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,R&&R($),V=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++p<25);X.state=X.__s,X.getChildContext!=null&&(Z=N4(N4({},Z),X.getChildContext())),D&&!U&&X.getSnapshotBeforeUpdate!=null&&(A=X.getSnapshotBeforeUpdate(L,H)),d=V!=null&&V.type===H8&&V.key==null?U2(V.props.children):V,K=G2(_,z8(d)?d:[d],$,j,Z,Q,Y,q,K,N,G),X.base=$.__e,$.__u&=-161,X.__h.length&&q.push(X),J&&(X.__E=X.__=null)}catch(F){if($.__v=null,N||Y!=null)if(F.then){for($.__u|=N?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(T=Y.length;T--;)E6(Y[T]);O6($)}else $.__e=j.__e,$.__k=j.__k,F.then||O6($);V1.__e(F,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=_q(j.__e,$,j,Z,Q,Y,q,N,G);return(V=V1.diffed)&&V($),128&$.__u?void 0:K}function O6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(O6))}function V2(_,$,j){for(var Z=0;Z<j.length;Z++)M6(j[Z],j[++Z],j[++Z]);V1.__c&&V1.__c($,_),_.some(function(Q){try{_=Q.__h,Q.__h=[],_.some(function(Y){Y.call(Q)})}catch(Y){V1.__e(Y,Q.__v)}})}function U2(_){return typeof _!="object"||_==null||_.__b>0?_:z8(_)?_.map(U2):N4({},_)}function _q(_,$,j,Z,Q,Y,q,K,N){var G,V,X,U,L,H,A,J=j.props||U8,W=$.props,D=$.type;if(D=="svg"?Q="http://www.w3.org/2000/svg":D=="math"?Q="http://www.w3.org/1998/Math/MathML":Q||(Q="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((L=Y[G])&&"setAttribute"in L==!!D&&(D?L.localName==D:L.nodeType==3)){_=L,Y[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(W);_=document.createElementNS(Q,D,W.is&&W),K&&(V1.__m&&V1.__m($,Y),K=!1),Y=null}if(D==null)J===W||K&&_.data==W||(_.data=W);else{if(Y=Y&&B8.call(_.childNodes),!K&&Y!=null)for(J={},G=0;G<_.attributes.length;G++)J[(L=_.attributes[G]).name]=L.value;for(G in J)L=J[G],G=="dangerouslySetInnerHTML"?X=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||G8(_,G,null,L,Q);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?V=L:G=="value"?H=L:G=="checked"?A=L:K&&typeof L!="function"||J[G]===L||G8(_,G,L,J[G],Q);if(V)K||X&&(V.__html==X.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(X&&(_.innerHTML=""),G2($.type=="template"?_.content:_,z8(U)?U:[U],$,j,Z,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Q,Y,q,Y?Y[0]:j.__k&&N5(j,0),K,N),Y!=null)for(G=Y.length;G--;)E6(Y[G]);K||(G="value",D=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[G]||D=="progress"&&!H||D=="option"&&H!=J[G])&&G8(_,G,H,J[G],Q),G="checked",A!=null&&A!=_[G]&&G8(_,G,A,J[G],Q))}return _}function M6(_,$,j){try{if(typeof _=="function"){var Z=typeof _.__u=="function";Z&&_.__u(),Z&&$==null||(_.__u=_($))}else _.current=$}catch(Q){V1.__e(Q,j)}}function L2(_,$,j){var Z,Q;if(V1.unmount&&V1.unmount(_),(Z=_.ref)&&(Z.current&&Z.current!=_.__e||M6(Z,null,$)),(Z=_.__c)!=null){if(Z.componentWillUnmount)try{Z.componentWillUnmount()}catch(Y){V1.__e(Y,$)}Z.base=Z.__P=null}if(Z=_.__k)for(Q=0;Q<Z.length;Q++)Z[Q]&&L2(Z[Q],$,j||typeof _.type!="function");j||E6(_.__e),_.__c=_.__=_.__e=void 0}function $q(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Z,Q,Y,q;$==document&&($=document.documentElement),V1.__&&V1.__(_,$),Q=(Z=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],k6($,_=(!Z&&j||$).__k=F8(H8,null,[_]),Q||U8,U8,$.namespaceURI,!Z&&j?[j]:Q?null:$.firstChild?B8.call($.childNodes):null,Y,!Z&&j?j:Q?Q.__e:$.firstChild,Z,q),V2(Y,_,q)}function W2(_){function $(j){var Z,Q;return this.getChildContext||(Z=new Set,(Q={})[$.__c]=this,this.getChildContext=function(){return Q},this.componentWillUnmount=function(){Z=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Z.forEach(function(q){q.__e=!0,J6(q)})},this.sub=function(Y){Z.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Z&&Z.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+K2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Z){return j.children(Z)}).contextType=$,$}B8=L8.slice,V1={__e:function(_,$,j,Z){for(var Q,Y,q;$=$.__;)if((Q=$.__c)&&!Q.__)try{if((Y=Q.constructor)&&Y.getDerivedStateFromError!=null&&(Q.setState(Y.getDerivedStateFromError(_)),q=Q.__d),Q.componentDidCatch!=null&&(Q.componentDidCatch(_,Z||{}),q=Q.__d),q)return Q.__E=Q}catch(K){_=K}throw _}},Z2=0,oY=function(_){return _!=null&&_.constructor===void 0},K5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N4({},this.state),typeof _=="function"&&(_=_(N4({},j),this.props)),_&&N4(j,_),_!=null&&this.__v&&($&&this._sb.push($),J6(this))},K5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),J6(this))},K5.prototype.render=H8,M4=[],Q2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Y2=function(_,$){return _.__v.__b-$.__v.__b},W8.__r=0,q2=/(PointerCapture)$|Capture$/i,A6=0,F6=i3(!1),H6=i3(!0),K2=0;var I4,X1,z6,r3,G5=0,B2=[],H1=V1,o3=H1.__b,s3=H1.__r,a3=H1.diffed,t3=H1.__c,e3=H1.unmount,_2=H1.__;function X5(_,$){H1.__h&&H1.__h(X1,_,G5||$),G5=0;var j=X1.__H||(X1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return G5=1,I6(O2,_)}function I6(_,$,j){var Z=X5(I4++,2);if(Z.t=_,!Z.__c&&(Z.__=[j?j($):O2(void 0,$),function(K){var N=Z.__N?Z.__N[0]:Z.__[0],G=Z.t(N,K);N!==G&&(Z.__N=[G,Z.__[1]],Z.__c.setState({}))}],Z.__c=X1,!X1.__f)){var Q=function(K,N,G){if(!Z.__c.__H)return!0;var V=Z.__c.__H.__.filter(function(U){return U.__c});if(V.every(function(U){return!U.__N}))return!Y||Y.call(this,K,N,G);var X=Z.__c.props!==K;return V.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(X=!0)}}),Y&&Y.call(this,K,N,G)||X};X1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=X1;X1.componentWillUpdate=function(K,N,G){if(this.__e){var V=Y;Y=void 0,Q(K,N,G),Y=V}q&&q.call(this,K,N,G)},X1.shouldComponentUpdate=Q}return Z.__N||Z.__}function b(_,$){var j=X5(I4++,3);!H1.__s&&x6(j.__H,$)&&(j.__=_,j.u=$,X1.__H.__h.push(j))}function S5(_,$){var j=X5(I4++,4);!H1.__s&&x6(j.__H,$)&&(j.__=_,j.u=$,X1.__h.push(j))}function I(_){return G5=5,S0(function(){return{current:_}},[])}function z2(_,$,j){G5=6,S5(function(){if(typeof _=="function"){var Z=_($());return function(){_(null),Z&&typeof Z=="function"&&Z()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function S0(_,$){var j=X5(I4++,7);return x6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return G5=8,S0(function(){return _},$)}function F2(_){var $=X1.context[_.__c],j=X5(I4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(X1)),$.props.value):_.__}function H2(_,$){H1.useDebugValue&&H1.useDebugValue($?$(_):_)}function J2(_){var $=X5(I4++,10),j=g();return $.__=_,X1.componentDidCatch||(X1.componentDidCatch=function(Z,Q){$.__&&$.__(Z,Q),j[1](Z)}),[j[0],function(){j[1](void 0)}]}function jq(){for(var _;_=B2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(V8),$.__h.some(D6),$.__h=[]}catch(j){$.__h=[],H1.__e(j,_.__v)}}}H1.__b=function(_){X1=null,o3&&o3(_)},H1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),_2&&_2(_,$)},H1.__r=function(_){s3&&s3(_),I4=0;var $=(X1=_.__c).__H;$&&(z6===X1?($.__h=[],X1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(V8),$.__h.some(D6),$.__h=[],I4=0)),z6=X1},H1.diffed=function(_){a3&&a3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(B2.push($)!==1&&r3===H1.requestAnimationFrame||((r3=H1.requestAnimationFrame)||Zq)(jq)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),z6=X1=null},H1.__c=function(_,$){$.some(function(j){try{j.__h.some(V8),j.__h=j.__h.filter(function(Z){return!Z.__||D6(Z)})}catch(Z){$.some(function(Q){Q.__h&&(Q.__h=[])}),$=[],H1.__e(Z,j.__v)}}),t3&&t3(_,$)},H1.unmount=function(_){e3&&e3(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Z){try{V8(Z)}catch(Q){$=Q}}),j.__H=void 0,$&&H1.__e($,j.__v))};var $2=typeof requestAnimationFrame=="function";function Zq(_){var $,j=function(){clearTimeout(Z),$2&&cancelAnimationFrame($),setTimeout(_)},Z=setTimeout(j,35);$2&&($=requestAnimationFrame(j))}function V8(_){var $=X1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X1=$}function D6(_){var $=X1;_.__c=_.__(),X1=$}function x6(_,$){return!_||_.length!==$.length||$.some(function(j,Z){return j!==_[Z]})}function O2(_,$){return typeof $=="function"?$(_):$}var D2=function(_,$,j,Z){var Q;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],K=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Z[0]=K:q===4?Z[1]=Object.assign(Z[1]||{},K):q===5?(Z[1]=Z[1]||{})[$[++Y]]=K:q===6?Z[1][$[++Y]]+=K+"":q?(Q=_.apply(K,D2(_,K,j,["",null])),Z.push(Q),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=Q)):Z.push(K)}return Z},j2=new Map;function Qq(_){var $=j2.get(this);return $||($=new Map,j2.set(this,$)),($=D2(this,$.get(_)||($.set(_,$=function(j){for(var Z,Q,Y=1,q="",K="",N=[0],G=function(U){Y===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,U,q):Y===3&&(U||q)?(N.push(3,U,q),Y=2):Y===2&&q==="..."&&U?N.push(4,U,0):Y===2&&q&&!U?N.push(5,0,!0,q):Y>=5&&((q||!U&&Y===5)&&(N.push(Y,0,q,Q),Y=6),U&&(N.push(Y,U,0,Q),Y=6)),q=""},V=0;V<j.length;V++){V&&(Y===1&&G(),G(V));for(var X=0;X<j[V].length;X++)Z=j[V][X],Y===1?Z==="<"?(G(),N=[N],Y=3):q+=Z:Y===4?q==="--"&&Z===">"?(Y=1,q=""):q=Z+q[0]:K?Z===K?K="":q+=Z:Z==='"'||Z==="'"?K=Z:Z===">"?(G(),Y=1):Y&&(Z==="="?(Y=5,Q=q,q=""):Z==="/"&&(Y<5||j[V][X+1]===">")?(G(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):Z===" "||Z==="\t"||Z===`
`||Z==="\r"?(G(),Y=2):q+=Z),Y===3&&q==="!--"&&(Y=4,N=N[0])}return G(),N}(_)),$),arguments,[])).length>1?$:$[0]}var B=Qq.bind(F8);var l1={};rY(l1,{uploadWorkspaceFile:()=>O8,uploadMedia:()=>u6,updateWorkspaceFile:()=>Eq,submitAdaptiveCardAction:()=>f6,streamSidePrompt:()=>Oq,stopAutoresearch:()=>Bq,steerAgentQueueItem:()=>Jq,setWorkspaceVisibility:()=>v5,setAgentThoughtVisibility:()=>g6,sendPeerAgentMessage:()=>Uq,sendAgentMessage:()=>n4,searchPosts:()=>P6,restoreChatBranch:()=>Vq,respondToAgentRequest:()=>J8,renameWorkspaceFile:()=>l6,renameChatBranch:()=>Gq,removeAgentQueueItem:()=>Hq,pruneChatBranch:()=>Xq,moveWorkspaceEntry:()=>n6,getWorkspaceTree:()=>u5,getWorkspaceRawUrl:()=>D8,getWorkspaceFile:()=>f5,getWorkspaceDownloadUrl:()=>A8,getWorkspaceBranch:()=>Aq,getTimeline:()=>l4,getThumbnailUrl:()=>m6,getThread:()=>C6,getPostsByHashtag:()=>T6,getMediaUrl:()=>C_,getMediaText:()=>h6,getMediaInfo:()=>V5,getMediaBlob:()=>Dq,getChatBranches:()=>Nq,getAutoresearchStatus:()=>Wq,getAgents:()=>w6,getAgentThought:()=>b6,getAgentStatus:()=>R6,getAgentQueueState:()=>Fq,getAgentModels:()=>R5,getAgentContext:()=>Lq,getActiveChatAgents:()=>S6,forkChatBranch:()=>w5,dismissAutoresearch:()=>zq,deleteWorkspaceFile:()=>d6,deletePost:()=>y6,createWorkspaceFile:()=>c6,createReply:()=>Kq,createPost:()=>qq,attachWorkspaceFile:()=>p6,addToWhitelist:()=>v6,SSEClient:()=>E8});async function i0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Z=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}function A2(_){let $=String(_||"").split(`
`),j="message",Z=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Z.push(Y.slice(5).trim());let Q=Z.join(`
`);if(!Q)return null;try{return{event:j,data:JSON.parse(Q)}}catch{return{event:j,data:Q}}}async function Yq(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Z=new TextDecoder,Q="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Q+=Z.decode(q,{stream:!0});let N=Q.split(`

`);Q=N.pop()||"";for(let G of N){let V=A2(G);if(V)$(V.event,V.data)}}Q+=Z.decode();let Y=A2(Q);if(Y)$(Y.event,Y.data)}async function l4(_=10,$=null,j=null){let Z=`/timeline?limit=${_}`;if($)Z+=`&before=${$}`;if(j)Z+=`&chat_jid=${encodeURIComponent(j)}`;return i0(Z)}async function T6(_,$=50,j=0,Z=null){let Q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Q}`)}async function P6(_,$=50,j=0,Z=null,Q="current",Y=null){let q=Z?`&chat_jid=${encodeURIComponent(Z)}`:"",K=Q?`&scope=${encodeURIComponent(Q)}`:"",N=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return i0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${N}`)}async function C6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return i0(`/thread/${_}${j}`)}async function qq(_,$=[],j=null){let Z=j?`?chat_jid=${encodeURIComponent(j)}`:"";return i0(`/post${Z}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function Kq(_,$,j=[],Z=null){let Q=Z?`?chat_jid=${encodeURIComponent(Z)}`:"";return i0(`/post/reply${Q}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function y6(_,$=!1,j=null){let Z=j?`&chat_jid=${encodeURIComponent(j)}`:"",Q=`/post/${_}?cascade=${$?"true":"false"}${Z}`;return i0(Q,{method:"DELETE"})}async function n4(_,$,j=null,Z=[],Q=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",K={content:$,thread_id:j,media_ids:Z};if(Q==="auto"||Q==="queue"||Q==="steer")K.mode=Q;return i0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function S6(){return i0("/agent/active-chats")}async function Nq(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Z=j.toString()?`?${j.toString()}`:"";return i0(`/agent/branches${Z}`)}async function w5(_,$={}){return i0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function Gq(_,$={}){return i0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Xq(_){return i0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function Vq(_,$={}){return i0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Uq(_,$,j,Z="auto",Q={}){let Y={source_chat_jid:_,content:j,mode:Z,...Q?.sourceAgentName?{source_agent_name:Q.sourceAgentName}:{},...Q?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return i0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function w6(){return i0("/agent/roster")}async function R6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/status${$}`)}async function Lq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/context${$}`)}async function Wq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/autoresearch/status${$}`)}async function Bq(_=null,$={}){return i0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function zq(_=null){return i0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function Fq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/queue-state${$}`)}async function Hq(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function Jq(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function R5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/models${$}`)}async function u6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Z=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function J8(_,$,j=null){let Z=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Z.ok){let Q=await Z.json().catch(()=>({error:"Failed to respond"}));throw Error(Q.error||`HTTP ${Z.status}`)}return Z.json()}async function f6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function Oq(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Z=null,Q=null;if(await Yq(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Z=q;else if(Y==="side_prompt_error")Q=q}),Q){let Y=Error(Q?.error||"Side prompt failed");throw Y.payload=Q,Y}return Z}async function v6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Z.error||`HTTP ${j.status}`)}return j.json()}async function b6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i0(j)}async function g6(_,$,j){return i0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function C_(_){return`/media/${_}`}function m6(_){return`/media/${_}/thumbnail`}async function V5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function h6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Dq(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function u5(_="",$=2,j=!1){let Z=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return i0(Z)}async function Aq(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i0($)}async function f5(_,$=20000,j=null){let Z=j?`&mode=${encodeURIComponent(j)}`:"",Q=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Z}`;return i0(Q)}async function Eq(_,$){return i0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function p6(_){return i0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function O8(_,$="",j={}){let Z=new FormData;Z.append("file",_);let Q=new URLSearchParams;if($)Q.set("path",$);if(j.overwrite)Q.set("overwrite","1");let Y=Q.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Z});if(!K.ok){let N=await K.json().catch(()=>({error:"Upload failed"})),G=Error(N.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=N.code,G}return K.json()}async function c6(_,$,j=""){let Z=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Z.ok){let Q=await Z.json().catch(()=>({error:"Create failed"})),Y=Error(Q.error||`HTTP ${Z.status}`);throw Y.status=Z.status,Y.code=Q.code,Y}return Z.json()}async function l6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Rename failed"})),Q=Error(Z.error||`HTTP ${j.status}`);throw Q.status=j.status,Q.code=Z.code,Q}return j.json()}async function n6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Z=await j.json().catch(()=>({error:"Move failed"})),Q=Error(Z.error||`HTTP ${j.status}`);throw Q.status=j.status,Q.code=Z.code,Q}return j.json()}async function d6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i0($,{method:"DELETE"})}async function v5(_,$=!1){return i0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function D8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function A8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class E8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Z)=>{this.markActivity(),this.onEvent(j,JSON.parse(Z.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Z=Math.max(this.cooldownUntil-j,0),Q=Math.max(this.reconnectDelay,Z);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Q),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class E2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Z of this.extensions.values()){if(Z.placement!=="tabs")continue;if(!Z.canHandle)continue;try{let Q=Z.canHandle(_);if(Q===!1||Q===0)continue;let Y=Q===!0?0:typeof Q==="number"?Q:0;if(Y>j)j=Y,$=Z}catch(Q){console.warn(`[PaneRegistry] canHandle() error for "${Z.id}":`,Q)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var h0=new E2;var k8=null,i6=null;function kq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function k2(){if(i6)return Promise.resolve(i6);if(!k8)k8=import(kq()).then((_)=>{return i6=_,_}).catch((_)=>{throw k8=null,_});return k8}class M2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await k2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var r6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new M2(_,$)}};function o6(){k2().catch(()=>{})}var U5="piclaw://terminal";var Mq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Iq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},M8=null,s6=null;function xq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Tq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Z=(Q,Y)=>{let q=Q instanceof Request?Q.url:Q instanceof URL?Q.href:String(Q);if(!xq(q))return $(Q,Y);if(Q instanceof Request)return $(new Request(j,Q));return $(j,Y)};globalThis.fetch=Z;try{return await _()}finally{globalThis.fetch=$}}async function Pq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!M8)M8=Tq(()=>Promise.resolve($.init?.())).catch((j)=>{throw M8=null,j});return await M8,$}async function Cq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!s6)s6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await s6}async function yq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Sq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function wq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function G4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Rq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function I2(){let _=wq(),$=_?Iq:Mq,j=G4("--bg-primary",_?"#000000":"#ffffff"),Z=G4("--text-primary",_?"#e7e9ea":"#0f1419"),Q=G4("--text-secondary",_?"#71767b":"#536471"),Y=G4("--accent-color","#1d9bf0"),q=G4("--danger-color",_?"#ff7b72":"#cf222e"),K=G4("--success-color",_?"#7ee787":"#1a7f37"),N=G4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=G4("--border-color",_?"#2f3336":"#eff3f4"),V=G4("--accent-soft-strong",Rq(Y,_?"47":"33"));return{background:j,foreground:Z,cursor:Y,cursorAccent:j,selectionBackground:V,selectionForeground:Z,black:N,red:q,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Z,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class a6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Z=Number.isFinite(_?.height)?_.height:0,Q=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Z)}:${Math.round(Q)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Pq();if(await Cq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:I2()}),Z=null;if(typeof _.FitAddon==="function")Z=new _.FitAddon,j.loadAddon?.(Z);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Z?.observeResize?.(),this.terminal=j,this.fitAddon=Z,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=I2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Z=this.bodyEl.querySelector(".terminal-live-host");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground;let Q=this.bodyEl.querySelector("canvas");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Z=()=>_();if(j?.addEventListener)j.addEventListener("change",Z);else if(j?.addListener)j.addListener(Z);this.mediaQuery=j,this.mediaQueryListener=Z;let Q=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Q?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Q?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Q}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await yq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Sq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Z)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:Q})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Z,rows:Q}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Z)=>{if(this.disposed)return;let Q=null;try{Q=JSON.parse(String(Z.data))}catch{Q={type:"output",data:String(Z.data)}}if(Q?.type==="output"&&typeof Q.data==="string"){_.write?.(Q.data);return}if(Q?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var t6={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new a6(_,$)}},e6={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new a6(_,$)}};function X4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Q)=>{try{return Boolean($.matchMedia(Q)?.matches)}catch{return!1}})}function I8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Z=String(j?.userAgent||""),Q=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Z),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Q>1||q)}function x2(_,$={}){if(X4($))return null;if(I8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:uq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function _$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function $$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Z=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Z}</p>
            </div>
        `}catch{}}function j$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function Z$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V4(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim()||"web:default";if(Z.searchParams.set("chat_jid",Q),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function T2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim()||"web:default";if(Z.searchParams.set("branch_loader","1"),Z.searchParams.set("branch_source_chat_jid",Q),Z.searchParams.delete("chat_jid"),Z.searchParams.delete("pane_popout"),Z.searchParams.delete("pane_path"),Z.searchParams.delete("pane_label"),j.chatOnly!==!1)Z.searchParams.set("chat_only","1");return Z.toString()}function P2(_,$,j={}){let Z=new URL(String(_||"http://localhost/")),Q=String($||"").trim();if(!Q)return Z.toString();if(Z.searchParams.set("pane_popout","1"),Z.searchParams.set("pane_path",Q),j?.label)Z.searchParams.set("pane_label",String(j.label));else Z.searchParams.delete("pane_label");if(j?.chatJid)Z.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,K]of Object.entries(Y)){let N=String(q||"").trim();if(!N)continue;if(K===null||K===void 0||K==="")Z.searchParams.delete(N);else Z.searchParams.set(N,String(K))}return Z.searchParams.delete("chat_only"),Z.searchParams.delete("branch_loader"),Z.searchParams.delete("branch_source_chat_jid"),Z.toString()}function uq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function fq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function C2(_,$={}){if(X4($))return null;if(I8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:fq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function b5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Z=j.toLowerCase();if(Z.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Z.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Z.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Z.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Z.includes("failed to fork branch")||Z.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function vq(_){try{return JSON.parse(_)}catch{return null}}function bq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function gq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class Q${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=gq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Z=this.options.parseControlMessage||vq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Z($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=bq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var g5=()=>{throw Error("Operation requires compiling with --exportRuntime")},mq=typeof BigUint64Array<"u",m5=Symbol();var hq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function y2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Z=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Z);try{return hq.decode(Z)}catch{let Q="",Y=0;while(j-Y>1024)Q+=String.fromCharCode(...Z.subarray(Y,Y+=1024));return Q+String.fromCharCode(...Z.subarray(Y))}}function S2(_){let $={};function j(Q,Y){if(!Q)return"<yet unknown>";return y2(Q.buffer,Y)}let Z=_.env=_.env||{};return Z.abort=Z.abort||function(Y,q,K,N){let G=$.memory||Z.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${K}:${N}`)},Z.trace=Z.trace||function(Y,q,...K){let N=$.memory||Z.memory;console.log(`trace: ${j(N,Y)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Z.seed=Z.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function w2(_,$){let j=$.exports,Z=j.memory,Q=j.table,Y=j.__new||g5,q=j.__pin||g5,K=j.__unpin||g5,N=j.__collect||g5,G=j.__rtti_base,V=G?(F)=>F[G>>>2]:g5;_.__new=Y,_.__pin=q,_.__unpin=K,_.__collect=N;function X(F){let x=new Uint32Array(Z.buffer);if((F>>>=0)>=V(x))throw Error(`invalid id: ${F}`);return x[(G+4>>>2)+F]}function U(F){let x=X(F);if(!(x&7))throw Error(`not an array: ${F}, flags=${x}`);return x}function L(F){return 31-Math.clz32(F>>>6&31)}function H(F){if(F==null)return 0;let x=F.length,v=Y(x<<1,2),s=new Uint16Array(Z.buffer);for(let m=0,a=v>>>1;m<x;++m)s[a+m]=F.charCodeAt(m);return v}_.__newString=H;function A(F){if(F==null)return 0;let x=new Uint8Array(F),v=Y(x.length,1);return new Uint8Array(Z.buffer).set(x,v),v}_.__newArrayBuffer=A;function J(F){if(!F)return null;let x=Z.buffer;if(new Uint32Array(x)[F+-8>>>2]!==2)throw Error(`not a string: ${F}`);return y2(x,F)}_.__getString=J;function W(F,x,v){let s=Z.buffer;if(v)switch(F){case 2:return new Float32Array(s);case 3:return new Float64Array(s)}else switch(F){case 0:return new(x?Int8Array:Uint8Array)(s);case 1:return new(x?Int16Array:Uint16Array)(s);case 2:return new(x?Int32Array:Uint32Array)(s);case 3:return new(x?BigInt64Array:BigUint64Array)(s)}throw Error(`unsupported align: ${F}`)}function D(F,x=0){let v=x,s=U(F),m=L(s),a=typeof v!=="number",o=a?v.length:v,_0=Y(o<<m,s&4?F:1),q0;if(s&4)q0=_0;else{q(_0);let Q0=Y(s&2?16:12,F);K(_0);let K0=new Uint32Array(Z.buffer);if(K0[Q0+0>>>2]=_0,K0[Q0+4>>>2]=_0,K0[Q0+8>>>2]=o<<m,s&2)K0[Q0+12>>>2]=o;q0=Q0}if(a){let Q0=W(m,s&2048,s&4096),K0=_0>>>m;if(s&16384)for(let W0=0;W0<o;++W0)Q0[K0+W0]=v[W0];else Q0.set(v,K0)}return q0}_.__newArray=D;function E(F){let x=new Uint32Array(Z.buffer),v=x[F+-8>>>2],s=U(v),m=L(s),a=s&4?F:x[F+4>>>2],o=s&2?x[F+12>>>2]:x[a+-4>>>2]>>>m;return W(m,s&2048,s&4096).subarray(a>>>=m,a+o)}_.__getArrayView=E;function f(F){let x=E(F),v=x.length,s=Array(v);for(let m=0;m<v;m++)s[m]=x[m];return s}_.__getArray=f;function R(F){let x=Z.buffer,v=new Uint32Array(x)[F+-4>>>2];return x.slice(F,F+v)}_.__getArrayBuffer=R;function p(F){if(!Q)throw Error("Operation requires compiling with --exportTable");let x=new Uint32Array(Z.buffer)[F>>>2];return Q.get(x)}_.__getFunction=p;function d(F,x,v){return new F(T(F,x,v))}function T(F,x,v){let s=Z.buffer,m=new Uint32Array(s);return new F(s,m[v+4>>>2],m[v+8>>>2]>>>x)}function M(F,x,v){_[`__get${x}`]=d.bind(null,F,v),_[`__get${x}View`]=T.bind(null,F,v)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((F)=>{M(F,F.name,31-Math.clz32(F.BYTES_PER_ELEMENT))}),mq)[BigUint64Array,BigInt64Array].forEach((F)=>{M(F,F.name.slice(3),3)});return _.memory=_.memory||Z,_.table=_.table||Q,cq(j,_)}function R2(_){return typeof Response<"u"&&_ instanceof Response}function pq(_){return _ instanceof WebAssembly.Module}async function Y$(_,$={}){if(R2(_=await _))return x8(_,$);let j=pq(_)?_:await WebAssembly.compile(_),Z=S2($),Q=await WebAssembly.instantiate(j,$),Y=w2(Z,Q);return{module:j,instance:Q,exports:Y}}async function x8(_,$={}){if(!WebAssembly.instantiateStreaming)return Y$(R2(_=await _)?_.arrayBuffer():_,$);let j=S2($),Z=await WebAssembly.instantiateStreaming(_,$),Q=w2(j,Z.instance);return{...Z,exports:Q}}function cq(_,$={}){let j=_.__argumentsLength?(Z)=>{_.__argumentsLength.value=Z}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Z of Object.keys(_)){let Q=_[Z],Y=Z.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Y[0],N=K.indexOf("#");if(N>=0){let G=K.substring(0,N),V=q[G];if(typeof V>"u"||!V.prototype){let X=function(...U){return X.wrap(X.prototype.constructor(0,...U))};if(X.prototype={valueOf(){return this[m5]}},X.wrap=function(U){return Object.create(X.prototype,{[m5]:{value:U,writable:!1}})},V)Object.getOwnPropertyNames(V).forEach((U)=>Object.defineProperty(X,U,Object.getOwnPropertyDescriptor(V,U)));q[G]=X}if(K=K.substring(N+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let X=_[Z.replace("set:","get:")],U=_[Z.replace("get:","set:")];Object.defineProperty(q,K,{get(){return X(this[m5])},set(L){U(this[m5],L)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...X){return j(X.length),Q(...X)}).original=Q;else(q[K]=function(...X){return j(X.length),Q(this[m5],...X)}).original=Q}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Z.replace("set:","get:")],set:_[Z.replace("get:","set:")],enumerable:!0})}else if(typeof Q==="function"&&Q!==j)(q[K]=(...G)=>{return j(G.length),Q(...G)}).original=Q;else q[K]=Q}return $}var nq="/static/js/vendor/remote-display-decoder.wasm",T8=null;function u2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function f2(){if(T8)return T8;return T8=(async()=>{try{let Z=function(Q,Y,q,K,N,G,V){let X=u2(Y),U=j.__pin(j.__newArrayBuffer(X));try{return j[Q](U,q,K,N,G,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(nq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof x8==="function"?await x8(_,{}):await Y$(await _.arrayBuffer(),{})).exports;for(let Q of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Q]!=="function")throw Error(`${Q} export is missing.`);return{initFramebuffer(Q,Y){j.initFramebuffer(Q,Y)},getFramebuffer(){let Q=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Q,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Q,Y,q,K,N,G){return Z("processRawRect",Q,Y,q,K,N,G)},processCopyRect(Q,Y,q,K,N,G){return j.processCopyRect(Q,Y,q,K,N,G)},processRreRect(Q,Y,q,K,N,G){return Z("processRreRect",Q,Y,q,K,N,G)},processHextileRect(Q,Y,q,K,N,G){return Z("processHextileRect",Q,Y,q,K,N,G)},processZrleTileData(Q,Y,q,K,N,G){return Z("processZrleTileData",Q,Y,q,K,N,G)},decodeRawRectToRgba(Q,Y,q,K){let N=u2(Q),G=j.__pin(j.__newArrayBuffer(N));try{let V=j.__pin(j.decodeRawRectToRgba(G,Y,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(V))}finally{j.__unpin(V)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),T8}function L5(_,$,j){return Math.max($,Math.min(j,_))}function P8(_,$,j){let Z=new Uint8Array(6),Q=L5(Math.floor(Number($||0)),0,65535),Y=L5(Math.floor(Number(j||0)),0,65535);return Z[0]=5,Z[1]=L5(Math.floor(Number(_||0)),0,255),Z[2]=Q>>8&255,Z[3]=Q&255,Z[4]=Y>>8&255,Z[5]=Y&255,Z}function K$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function v2(_,$,j,Z,Q){let Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Math.floor(Number(Q||0))),K=Math.max(1,Number(j?.width||0)),N=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,V=(Number($||0)-Number(j?.top||0))/N;return{x:L5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:L5(Math.floor(V*q),0,Math.max(0,q-1))}}function b2(_,$,j,Z=0){let Q=Number(_)<0?8:16,Y=L5(Number(Z||0)|Q,0,255);return[P8(Y,$,j),P8(Number(Z||0),$,j)]}function g2(_,$){let j=new Uint8Array(8),Z=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Z>>>24&255,j[5]=Z>>>16&255,j[6]=Z>>>8&255,j[7]=Z&255,j}function h5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function m2(_,$,j,Z){let Q=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Z||0))),N=Math.min(Q/q,Y/K);if(!Number.isFinite(N)||N<=0)return 1;return Math.max(0.01,N)}var q$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)q$[`F${_}`]=65470+(_-1);function N$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(q$,Y))return q$[Y];let j=String(_?.key||""),Z=j?j.codePointAt(0):null,Q=Z==null?0:Z>65535?2:1;if(Z!=null&&j.length===Q){if(Z<=255)return Z;return(16777216|Z)>>>0}return null}var S1=Uint8Array,W_=Uint16Array,F$=Int32Array,C8=new S1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),y8=new S1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),L$=new S1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),l2=function(_,$){var j=new W_(31);for(var Z=0;Z<31;++Z)j[Z]=$+=1<<_[Z-1];var Q=new F$(j[30]);for(var Z=1;Z<30;++Z)for(var Y=j[Z];Y<j[Z+1];++Y)Q[Y]=Y-j[Z]<<5|Z;return{b:j,r:Q}},n2=l2(C8,2),d2=n2.b,W$=n2.r;d2[28]=258,W$[258]=28;var i2=l2(y8,0),dq=i2.b,h2=i2.r,B$=new W_(32768);for(m0=0;m0<32768;++m0)r_=(m0&43690)>>1|(m0&21845)<<1,r_=(r_&52428)>>2|(r_&13107)<<2,r_=(r_&61680)>>4|(r_&3855)<<4,B$[m0]=((r_&65280)>>8|(r_&255)<<8)>>1;var r_,m0,o_=function(_,$,j){var Z=_.length,Q=0,Y=new W_($);for(;Q<Z;++Q)if(_[Q])++Y[_[Q]-1];var q=new W_($);for(Q=1;Q<$;++Q)q[Q]=q[Q-1]+Y[Q-1]<<1;var K;if(j){K=new W_(1<<$);var N=15-$;for(Q=0;Q<Z;++Q)if(_[Q]){var G=Q<<4|_[Q],V=$-_[Q],X=q[_[Q]-1]++<<V;for(var U=X|(1<<V)-1;X<=U;++X)K[B$[X]>>N]=G}}else{K=new W_(Z);for(Q=0;Q<Z;++Q)if(_[Q])K[Q]=B$[q[_[Q]-1]++]>>15-_[Q]}return K},T4=new S1(288);for(m0=0;m0<144;++m0)T4[m0]=8;var m0;for(m0=144;m0<256;++m0)T4[m0]=9;var m0;for(m0=256;m0<280;++m0)T4[m0]=7;var m0;for(m0=280;m0<288;++m0)T4[m0]=8;var m0,n5=new S1(32);for(m0=0;m0<32;++m0)n5[m0]=5;var m0,iq=o_(T4,9,0),rq=o_(T4,9,1),oq=o_(n5,5,0),sq=o_(n5,5,1),G$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},b_=function(_,$,j){var Z=$/8|0;return(_[Z]|_[Z+1]<<8)>>($&7)&j},X$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},H$=function(_){return(_+7)/8|0},l5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new S1(_.subarray($,j))};var aq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],G_=function(_,$,j){var Z=Error($||aq[_]);if(Z.code=_,Error.captureStackTrace)Error.captureStackTrace(Z,G_);if(!j)throw Z;return Z},tq=function(_,$,j,Z){var Q=_.length,Y=Z?Z.length:0;if(!Q||$.f&&!$.l)return j||new S1(0);var q=!j,K=q||$.i!=2,N=$.i;if(q)j=new S1(Q*3);var G=function(n0){var B0=j.length;if(n0>B0){var I0=new S1(Math.max(B0*2,n0));I0.set(j),j=I0}},V=$.f||0,X=$.p||0,U=$.b||0,L=$.l,H=$.d,A=$.m,J=$.n,W=Q*8;do{if(!L){V=b_(_,X,1);var D=b_(_,X+1,3);if(X+=3,!D){var E=H$(X)+4,f=_[E-4]|_[E-3]<<8,R=E+f;if(R>Q){if(N)G_(0);break}if(K)G(U+f);j.set(_.subarray(E,R),U),$.b=U+=f,$.p=X=R*8,$.f=V;continue}else if(D==1)L=rq,H=sq,A=9,J=5;else if(D==2){var p=b_(_,X,31)+257,d=b_(_,X+10,15)+4,T=p+b_(_,X+5,31)+1;X+=14;var M=new S1(T),F=new S1(19);for(var x=0;x<d;++x)F[L$[x]]=b_(_,X+x*3,7);X+=d*3;var v=G$(F),s=(1<<v)-1,m=o_(F,v,1);for(var x=0;x<T;){var a=m[b_(_,X,s)];X+=a&15;var E=a>>4;if(E<16)M[x++]=E;else{var o=0,_0=0;if(E==16)_0=3+b_(_,X,3),X+=2,o=M[x-1];else if(E==17)_0=3+b_(_,X,7),X+=3;else if(E==18)_0=11+b_(_,X,127),X+=7;while(_0--)M[x++]=o}}var q0=M.subarray(0,p),Q0=M.subarray(p);A=G$(q0),J=G$(Q0),L=o_(q0,A,1),H=o_(Q0,J,1)}else G_(1);if(X>W){if(N)G_(0);break}}if(K)G(U+131072);var K0=(1<<A)-1,W0=(1<<J)-1,U0=X;for(;;U0=X){var o=L[X$(_,X)&K0],u0=o>>4;if(X+=o&15,X>W){if(N)G_(0);break}if(!o)G_(2);if(u0<256)j[U++]=u0;else if(u0==256){U0=X,L=null;break}else{var k0=u0-254;if(u0>264){var x=u0-257,O0=C8[x];k0=b_(_,X,(1<<O0)-1)+d2[x],X+=O0}var g0=H[X$(_,X)&W0],f0=g0>>4;if(!g0)G_(3);X+=g0&15;var Q0=dq[f0];if(f0>3){var O0=y8[f0];Q0+=X$(_,X)&(1<<O0)-1,X+=O0}if(X>W){if(N)G_(0);break}if(K)G(U+131072);var p0=U+k0;if(U<Q0){var l0=Y-Q0,D0=Math.min(Q0,p0);if(l0+U<0)G_(3);for(;U<D0;++U)j[U]=Z[l0+U]}for(;U<p0;++U)j[U]=j[U-Q0]}}if($.l=L,$.p=U0,$.b=U,$.f=V,L)V=1,$.m=A,$.d=H,$.n=J}while(!V);return U!=j.length&&q?l5(j,0,U):j.subarray(0,U)},U4=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8},p5=function(_,$,j){j<<=$&7;var Z=$/8|0;_[Z]|=j,_[Z+1]|=j>>8,_[Z+2]|=j>>16},V$=function(_,$){var j=[];for(var Z=0;Z<_.length;++Z)if(_[Z])j.push({s:Z,f:_[Z]});var Q=j.length,Y=j.slice();if(!Q)return{t:o2,l:0};if(Q==1){var q=new S1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(R,p){return R.f-p.f}),j.push({s:-1,f:25001});var K=j[0],N=j[1],G=0,V=1,X=2;j[0]={s:-1,f:K.f+N.f,l:K,r:N};while(V!=Q-1)K=j[j[G].f<j[X].f?G++:X++],N=j[G!=V&&j[G].f<j[X].f?G++:X++],j[V++]={s:-1,f:K.f+N.f,l:K,r:N};var U=Y[0].s;for(var Z=1;Z<Q;++Z)if(Y[Z].s>U)U=Y[Z].s;var L=new W_(U+1),H=z$(j[V-1],L,0);if(H>$){var Z=0,A=0,J=H-$,W=1<<J;Y.sort(function(p,d){return L[d.s]-L[p.s]||p.f-d.f});for(;Z<Q;++Z){var D=Y[Z].s;if(L[D]>$)A+=W-(1<<H-L[D]),L[D]=$;else break}A>>=J;while(A>0){var E=Y[Z].s;if(L[E]<$)A-=1<<$-L[E]++-1;else++Z}for(;Z>=0&&A;--Z){var f=Y[Z].s;if(L[f]==$)--L[f],++A}H=$}return{t:new S1(L),l:H}},z$=function(_,$,j){return _.s==-1?Math.max(z$(_.l,$,j+1),z$(_.r,$,j+1)):$[_.s]=j},p2=function(_){var $=_.length;while($&&!_[--$]);var j=new W_(++$),Z=0,Q=_[0],Y=1,q=function(N){j[Z++]=N};for(var K=1;K<=$;++K)if(_[K]==Q&&K!=$)++Y;else{if(!Q&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Q),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Q);Y=1,Q=_[K]}return{c:j.subarray(0,Z),n:$}},c5=function(_,$){var j=0;for(var Z=0;Z<$.length;++Z)j+=_[Z]*$[Z];return j},r2=function(_,$,j){var Z=j.length,Q=H$($+2);_[Q]=Z&255,_[Q+1]=Z>>8,_[Q+2]=_[Q]^255,_[Q+3]=_[Q+1]^255;for(var Y=0;Y<Z;++Y)_[Q+Y+4]=j[Y];return(Q+4+Z)*8},c2=function(_,$,j,Z,Q,Y,q,K,N,G,V){U4($,V++,j),++Q[256];var X=V$(Q,15),U=X.t,L=X.l,H=V$(Y,15),A=H.t,J=H.l,W=p2(U),D=W.c,E=W.n,f=p2(A),R=f.c,p=f.n,d=new W_(19);for(var T=0;T<D.length;++T)++d[D[T]&31];for(var T=0;T<R.length;++T)++d[R[T]&31];var M=V$(d,7),F=M.t,x=M.l,v=19;for(;v>4&&!F[L$[v-1]];--v);var s=G+5<<3,m=c5(Q,T4)+c5(Y,n5)+q,a=c5(Q,U)+c5(Y,A)+q+14+3*v+c5(d,F)+2*d[16]+3*d[17]+7*d[18];if(N>=0&&s<=m&&s<=a)return r2($,V,_.subarray(N,N+G));var o,_0,q0,Q0;if(U4($,V,1+(a<m)),V+=2,a<m){o=o_(U,L,0),_0=U,q0=o_(A,J,0),Q0=A;var K0=o_(F,x,0);U4($,V,E-257),U4($,V+5,p-1),U4($,V+10,v-4),V+=14;for(var T=0;T<v;++T)U4($,V+3*T,F[L$[T]]);V+=3*v;var W0=[D,R];for(var U0=0;U0<2;++U0){var u0=W0[U0];for(var T=0;T<u0.length;++T){var k0=u0[T]&31;if(U4($,V,K0[k0]),V+=F[k0],k0>15)U4($,V,u0[T]>>5&127),V+=u0[T]>>12}}}else o=iq,_0=T4,q0=oq,Q0=n5;for(var T=0;T<K;++T){var O0=Z[T];if(O0>255){var k0=O0>>18&31;if(p5($,V,o[k0+257]),V+=_0[k0+257],k0>7)U4($,V,O0>>23&31),V+=C8[k0];var g0=O0&31;if(p5($,V,q0[g0]),V+=Q0[g0],g0>3)p5($,V,O0>>5&8191),V+=y8[g0]}else p5($,V,o[O0]),V+=_0[O0]}return p5($,V,o[256]),V+_0[256]},eq=new F$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),o2=new S1(0),_K=function(_,$,j,Z,Q,Y){var q=Y.z||_.length,K=new S1(Z+q+5*(1+Math.ceil(q/7000))+Q),N=K.subarray(Z,K.length-Q),G=Y.l,V=(Y.r||0)&7;if($){if(V)N[0]=Y.r>>3;var X=eq[$-1],U=X>>13,L=X&8191,H=(1<<j)-1,A=Y.p||new W_(32768),J=Y.h||new W_(H+1),W=Math.ceil(j/3),D=2*W,E=function(d0){return(_[d0]^_[d0+1]<<W^_[d0+2]<<D)&H},f=new F$(25000),R=new W_(288),p=new W_(32),d=0,T=0,M=Y.i||0,F=0,x=Y.w||0,v=0;for(;M+2<q;++M){var s=E(M),m=M&32767,a=J[s];if(A[m]=a,J[s]=m,x<=M){var o=q-M;if((d>7000||F>24576)&&(o>423||!G)){V=c2(_,N,0,f,R,p,T,F,v,M-v,V),F=d=T=0,v=M;for(var _0=0;_0<286;++_0)R[_0]=0;for(var _0=0;_0<30;++_0)p[_0]=0}var q0=2,Q0=0,K0=L,W0=m-a&32767;if(o>2&&s==E(M-W0)){var U0=Math.min(U,o)-1,u0=Math.min(32767,M),k0=Math.min(258,o);while(W0<=u0&&--K0&&m!=a){if(_[M+q0]==_[M+q0-W0]){var O0=0;for(;O0<k0&&_[M+O0]==_[M+O0-W0];++O0);if(O0>q0){if(q0=O0,Q0=W0,O0>U0)break;var g0=Math.min(W0,O0-2),f0=0;for(var _0=0;_0<g0;++_0){var p0=M-W0+_0&32767,l0=A[p0],D0=p0-l0&32767;if(D0>f0)f0=D0,a=p0}}}m=a,a=A[m],W0+=m-a&32767}}if(Q0){f[F++]=268435456|W$[q0]<<18|h2[Q0];var n0=W$[q0]&31,B0=h2[Q0]&31;T+=C8[n0]+y8[B0],++R[257+n0],++p[B0],x=M+q0,++d}else f[F++]=_[M],++R[_[M]]}}for(M=Math.max(M,x);M<q;++M)f[F++]=_[M],++R[_[M]];if(V=c2(_,N,G,f,R,p,T,F,v,M-v,V),!G)Y.r=V&7|N[V/8|0]<<3,V-=7,Y.h=J,Y.p=A,Y.i=M,Y.w=x}else{for(var M=Y.w||0;M<q+G;M+=65535){var I0=M+65535;if(I0>=q)N[V/8|0]=G,I0=q;V=r2(N,V+1,_.subarray(M,I0))}Y.i=q}return l5(K,0,Z+H$(V)+Q)};var s2=function(){var _=1,$=0;return{p:function(j){var Z=_,Q=$,Y=j.length|0;for(var q=0;q!=Y;){var K=Math.min(q+2655,Y);for(;q<K;++q)Q+=Z+=j[q];Z=(Z&65535)+15*(Z>>16),Q=(Q&65535)+15*(Q>>16)}_=Z,$=Q},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},$K=function(_,$,j,Z,Q){if(!Q){if(Q={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new S1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Q.w=Y.length}}return _K(_,$.level==null?6:$.level,$.mem==null?Q.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Z,Q)};var a2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var jK=function(_,$){var j=$.level,Z=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Z<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Q=s2();Q.p($.dictionary),a2(_,2,Q.d())}},ZK=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)G_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)G_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var U$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Z=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Z?Z.length:0},this.o=new S1(32768),this.p=new S1(0),Z)this.o.set(Z)}return _.prototype.e=function($){if(!this.ondata)G_(5);if(this.d)G_(4);if(!this.p.length)this.p=$;else if($.length){var j=new S1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Z=tq(this.p,this.s,this.o);this.ondata(l5(Z,j,this.s.b),this.d),this.o=l5(Z,this.s.b-32768),this.s.b=this.o.length,this.p=l5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function t2(_,$){if(!$)$={};var j=s2();j.p(_);var Z=$K(_,$,$.dictionary?6:2,4);return jK(Z,$),a2(Z,Z.length-4,j.d()),Z}var e2=function(){function _($,j){U$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(U$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(ZK(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)G_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}U$.prototype.c.call(this,j)},_}();var QK=typeof TextDecoder<"u"&&new TextDecoder,YK=0;try{QK.decode(o2,{stream:!0}),YK=1}catch(_){}var qK=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],KK=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],NK=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],GK=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],XK=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],VK=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],UK=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],LK=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],j7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;j7[_]=$}function Z7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function Q7(_){let $=0n,j=Z7(_);for(let Z of j)$=$<<8n|BigInt(Z);return $}function WK(_,$){let j=new Uint8Array($),Z=BigInt(_);for(let Q=$-1;Q>=0;Q-=1)j[Q]=Number(Z&0xffn),Z>>=8n;return j}function W5(_,$,j){let Z=0n;for(let Q of $){let Y=BigInt(_)>>BigInt(j-Q)&1n;Z=Z<<1n|Y}return Z}function _7(_,$){let j=28n,Z=(1n<<j)-1n,Q=BigInt($%28);return(_<<Q|_>>j-Q)&Z}function BK(_){let $=W5(Q7(_),XK,64),j=$>>28n&0x0fffffffn,Z=$&0x0fffffffn,Q=[];for(let Y of UK){j=_7(j,Y),Z=_7(Z,Y);let q=j<<28n|Z;Q.push(W5(q,VK,56))}return Q}function zK(_){let $=0n;for(let j=0;j<8;j+=1){let Z=BigInt((7-j)*6),Q=Number(_>>Z&0x3fn),Y=(Q&32)>>4|Q&1,q=Q>>1&15;$=$<<4n|BigInt(LK[j][Y][q])}return $}function FK(_,$){let j=W5(_,NK,32)^BigInt($),Z=zK(j);return W5(Z,GK,32)}function $7(_,$){let j=BK($),Z=W5(Q7(_),qK,64),Q=Z>>32n&0xffffffffn,Y=Z&0xffffffffn;for(let K of j){let N=Y,G=(Q^FK(Y,K))&0xffffffffn;Q=N,Y=G}let q=Y<<32n|Q;return WK(W5(q,KK,64),8)}function HK(_){let $=String(_??""),j=new Uint8Array(8);for(let Z=0;Z<8;Z+=1){let Q=Z<$.length?$.charCodeAt(Z)&255:0;j[Z]=j7[Q]}return j}function Y7(_,$){let j=Z7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Z=HK(_),Q=new Uint8Array(16);return Q.set($7(j.slice(0,8),Z),0),Q.set($7(j.slice(8,16),Z),8),Q}var g_="vnc";function JK(_){return Number(_)}function OK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Q)=>Q.trim()).filter((Q)=>Q.length>0):[],j=[],Z=new Set;for(let Q of $){let Y=JK(Q);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Z.has(q))j.push(q),Z.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function F5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function DK(_,$){let j=F5(_),Z=F5($);if(!j.byteLength)return new Uint8Array(Z);if(!Z.byteLength)return new Uint8Array(j);let Q=new Uint8Array(j.byteLength+Z.byteLength);return Q.set(j,0),Q.set(Z,j.byteLength),Q}function AK(_){let $=0;for(let Q of _||[])$+=Q?.byteLength||0;let j=new Uint8Array($),Z=0;for(let Q of _||[]){let Y=F5(Q);j.set(Y,Z),Z+=Y.byteLength}return j}function EK(){return(_)=>{let $=F5(_);try{let j=[],Z=new e2((Q)=>{j.push(new Uint8Array(Q))});if(Z.push($,!0),Z.err)throw Error(Z.msg||"zlib decompression error");return AK(j)}catch(j){try{let Z=t2($);return Z instanceof Uint8Array?Z:new Uint8Array(Z)}catch(Z){let Q=Z instanceof Error?Z.message:"unexpected EOF";throw Error(`unexpected EOF: ${Q}`)}}}}function kK(_){return new TextEncoder().encode(String(_||""))}function B5(_){return new TextDecoder().decode(F5(_))}function MK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function IK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function q7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function xK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function TK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Z=new DataView(j);Z.setUint8(0,2),Z.setUint8(1,0),Z.setUint16(2,$.length,!1);let Q=4;for(let Y of $)Z.setInt32(Q,Number(Y||0),!1),Q+=4;return new Uint8Array(j)}function K7(_,$,j,Z=0,Q=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Z,!1),q.setUint16(4,Q,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function z5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function G7(_,$,j,Z){if(j===1)return _[$];if(j===2)return Z?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Z?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Z?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function PK(_,$,j,Z){let Q=Z||H5,Y=F5(_),q=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Y.byteLength}`);if(!Q.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let N=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,V=0;for(let X=0;X<Math.max(0,$||0)*Math.max(0,j||0);X+=1){let U=G7(Y,G,q,Q.bigEndian),L=z5(U>>>Q.redShift&Q.redMax,Q.redMax),H=z5(U>>>Q.greenShift&Q.greenMax,Q.greenMax),A=z5(U>>>Q.blueShift&Q.blueMax,Q.blueMax);N[V]=L,N[V+1]=H,N[V+2]=A,N[V+3]=255,G+=q,V+=4}return N}function L4(_,$,j){let Z=j||H5,Q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8));if(_.byteLength<$+Q)return null;let Y=G7(_,$,Q,Z.bigEndian);return{rgba:[z5(Y>>>Z.redShift&Z.redMax,Z.redMax),z5(Y>>>Z.greenShift&Z.greenMax,Z.greenMax),z5(Y>>>Z.blueShift&Z.blueMax,Z.blueMax),255],bytesPerPixel:Q}}function P4(_,$,j,Z,Q,Y,q){if(!q)return;for(let K=0;K<Y;K+=1)for(let N=0;N<Q;N+=1){let G=((Z+K)*$+(j+N))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function X7(_,$,j,Z,Q,Y,q){for(let K=0;K<Y;K+=1){let N=K*Q*4,G=((Z+K)*$+j)*4;_.set(q.subarray(N,N+Q*4),G)}}function N7(_,$){let j=$,Z=1;while(!0){if(_.byteLength<j+1)return null;let Q=_[j++];if(Z+=Q,Q!==255)break}return{consumed:j-$,runLength:Z}}function CK(_,$,j,Z,Q,Y,q){let K=Q||H5,N=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let V=_.slice($+4,$+4+G),X;try{X=q(V)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);for(let H=0;H<Z;H+=64){let A=Math.min(64,Z-H);for(let J=0;J<j;J+=64){let W=Math.min(64,j-J);if(X.byteLength<U+1)return null;let D=X[U++],E=D&127,f=(D&128)!==0;if(!f&&E===0){let R=W*A*N;if(X.byteLength<U+R)return null;let p=Y(X.slice(U,U+R),W,A,K);U+=R,X7(L,j,J,H,W,A,p);continue}if(!f&&E===1){let R=L4(X,U,K);if(!R)return null;U+=R.bytesPerPixel,P4(L,j,J,H,W,A,R.rgba);continue}if(!f&&E>1&&E<=16){let R=[];for(let M=0;M<E;M+=1){let F=L4(X,U,K);if(!F)return null;U+=F.bytesPerPixel,R.push(F.rgba)}let p=E<=2?1:E<=4?2:4,d=Math.ceil(W*p/8),T=d*A;if(X.byteLength<U+T)return null;for(let M=0;M<A;M+=1){let F=U+M*d;for(let x=0;x<W;x+=1){let v=x*p,s=F+(v>>3),m=8-p-(v&7),a=X[s]>>m&(1<<p)-1;P4(L,j,J+x,H+M,1,1,R[a])}}U+=T;continue}if(f&&E===0){let R=0,p=0;while(p<A){let d=L4(X,U,K);if(!d)return null;U+=d.bytesPerPixel;let T=N7(X,U);if(!T)return null;U+=T.consumed;for(let M=0;M<T.runLength;M+=1)if(P4(L,j,J+R,H+p,1,1,d.rgba),R+=1,R>=W){if(R=0,p+=1,p>=A)break}}continue}if(f&&E>0){let R=[];for(let T=0;T<E;T+=1){let M=L4(X,U,K);if(!M)return null;U+=M.bytesPerPixel,R.push(M.rgba)}let p=0,d=0;while(d<A){if(X.byteLength<U+1)return null;let T=X[U++],M=T,F=1;if(T&128){M=T&127;let v=N7(X,U);if(!v)return null;U+=v.consumed,F=v.runLength}let x=R[M];if(!x)return null;for(let v=0;v<F;v+=1)if(P4(L,j,J+p,H+d,1,1,x),p+=1,p>=W){if(p=0,d+=1,d>=A)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:X}}function yK(_,$,j,Z,Q){let Y=Q||H5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let N=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+N*(q+8);if(_.byteLength<$+G)return null;let V=$+4,X=L4(_,V,Y);if(!X)return null;V+=X.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4);P4(U,j,0,0,j,Z,X.rgba);for(let L=0;L<N;L+=1){let H=L4(_,V,Y);if(!H)return null;if(V+=H.bytesPerPixel,_.byteLength<V+8)return null;let A=new DataView(_.buffer,_.byteOffset+V,8),J=A.getUint16(0,!1),W=A.getUint16(2,!1),D=A.getUint16(4,!1),E=A.getUint16(6,!1);V+=8,P4(U,j,J,W,D,E,H.rgba)}return{consumed:V-$,rgba:U}}function SK(_,$,j,Z,Q,Y){let q=Q||H5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Z||0)*4),G=$,V=[0,0,0,255],X=[255,255,255,255];for(let U=0;U<Z;U+=16){let L=Math.min(16,Z-U);for(let H=0;H<j;H+=16){let A=Math.min(16,j-H);if(_.byteLength<G+1)return null;let J=_[G++];if(J&1){let W=A*L*K;if(_.byteLength<G+W)return null;let D=Y(_.slice(G,G+W),A,L,q);G+=W,X7(N,j,H,U,A,L,D);continue}if(J&2){let W=L4(_,G,q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(P4(N,j,H,U,A,L,V),J&4){let W=L4(_,G,q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(J&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let D=0;D<W;D+=1){let E=X;if(J&16){let F=L4(_,G,q);if(!F)return null;E=F.rgba,G+=F.bytesPerPixel}if(_.byteLength<G+2)return null;let f=_[G++],R=_[G++],p=f>>4,d=f&15,T=(R>>4)+1,M=(R&15)+1;P4(N,j,H+p,U+d,T,M,E)}}}}return{consumed:G-$,rgba:N}}var H5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class S8{protocol=g_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:PK,this.pipeline=_.pipeline||null,this.encodings=OK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...H5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:EK()}receive(_){if(_)this.buffer=DK(this.buffer,_);let $=[],j=[],Z=!0;while(Z){if(Z=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Q=this.consume(12),Y=B5(Q),q=MK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=IK(q),j.push(kK(this.clientVersionText)),$.push({type:"protocol-version",protocol:g_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Z=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Q=this.buffer[0];if(Q===0){if(this.buffer.byteLength<5)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+N)break;this.consume(1);let G=B5(this.consume(4+N).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Q)break;this.consume(1);let Y=Array.from(this.consume(Q));$.push({type:"security-types",protocol:g_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:g_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Z=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let N=B5(this.consume(4+K).slice(4));throw Error(N||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:g_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Z=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:g_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Q=this.consume(16);j.push(Y7(this.password,Q)),this.state="security-result",Z=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=B5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:g_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Z=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Q.getUint16(0,!1),q=Q.getUint16(2,!1),K=q7(Q,4),N=Q.getUint32(20,!1);if(this.buffer.byteLength<24+N)break;let G=this.consume(24),V=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=V.getUint16(0,!1),this.framebufferHeight=V.getUint16(2,!1),this.serverPixelFormat=q7(V,4),this.serverName=B5(this.consume(N)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(xK(this.clientPixelFormat)),j.push(TK(this.encodings)),j.push(K7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:g_,width:Y,height:q,name:this.serverName,pixelFormat:K}),Z=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Q=this.buffer[0];if(Q===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,N=[],G=!1,V=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),H=L.getUint16(0,!1),A=L.getUint16(2,!1),J=L.getUint16(4,!1),W=L.getUint16(6,!1),D=L.getInt32(8,!1);if(K+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),f=J*W*E;if(this.buffer.byteLength<K+f){G=!0;break}let R=this.buffer.slice(K,K+f);if(K+=f,V)this.pipeline.processRawRect(R,H,A,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:J,height:W});else N.push({kind:"rgba",x:H,y:A,width:J,height:W,rgba:this.decodeRawRect(R,J,W,this.clientPixelFormat)});continue}if(D===2){let E=yK(this.buffer,K,J,W,this.clientPixelFormat);if(!E){G=!0;break}if(V){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(f,H,A,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:J,height:W})}else N.push({kind:"rgba",x:H,y:A,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<K+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),f=E.getUint16(0,!1),R=E.getUint16(2,!1);if(K+=4,V)this.pipeline.processCopyRect(H,A,J,W,f,R),N.push({kind:"pipeline",x:H,y:A,width:J,height:W});else N.push({kind:"copy",x:H,y:A,width:J,height:W,srcX:f,srcY:R});continue}if(D===16){let E=CK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(K+=E.consumed,E.skipped)continue;if(V&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,H,A,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:J,height:W});else N.push({kind:"rgba",x:H,y:A,width:J,height:W,rgba:E.rgba});continue}if(D===5){let E=SK(this.buffer,K,J,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(V){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(f,H,A,J,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:J,height:W})}else N.push({kind:"rgba",x:H,y:A,width:J,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=J,this.framebufferHeight=W,V)this.pipeline.initFramebuffer(J,W);N.push({kind:"resize",x:H,y:A,width:J,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let X={type:"framebuffer-update",protocol:g_,width:this.framebufferWidth,height:this.framebufferHeight,rects:N};if(V)X.framebuffer=this.pipeline.getFramebuffer();$.push(X),j.push(K7(!0,this.framebufferWidth,this.framebufferHeight)),Z=!0;continue}if(Q===2){this.consume(1),$.push({type:"bell",protocol:g_}),Z=!0;continue}if(Q===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=B5(this.consume(q));$.push({type:"clipboard",protocol:g_,text:K}),Z=!0;continue}throw Error(`Unsupported VNC server message type ${Q}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var W4="piclaw://vnc";function wK(_){let $=String(_||"");if($===W4)return null;if(!$.startsWith(`${W4}/`))return null;let j=$.slice(`${W4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function RK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z}async function uK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Z=await j.json().catch(()=>({}));if(!j.ok)throw Error(Z?.error||`HTTP ${j.status}`);return Z?.handoff||null}function fK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${j}//${window.location.host}/vnc/ws`);if(Z.searchParams.set("target",String(_||"")),$)Z.searchParams.set("handoff",String($));return Z.toString()}function vK(_,$){let j=String(_||"").trim(),Z=Math.floor(Number($||0));if(!j||!Number.isFinite(Z)||Z<=0||Z>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Z}`}function bK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class V7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=wK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=bK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Q)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d4(Q.label||Q.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d4(Q.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Q.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d4(Q.id)}" data-target-label="${d4(Q.label||Q.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let Q=vK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Q)return;this.authPassword=h5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Q,Q)};this.directHostInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(Q)=>{if(Q.key!=="Enter")return;Q.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let Q of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Q.addEventListener("click",()=>{let Y=Q.getAttribute("data-target-open-tab"),q=Q.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=h5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=h5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Z=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Q=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Z}${Q}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Z=j?.reveal===!0;if(this.canvas.style.display=Z||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Z||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Z=m2($,j,this.canvas.width,this.canvas.height);this.displayScale=Z,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Z))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Z))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return v2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(P8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=K$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~K$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of b2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(g2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=N$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??N$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Z)=>Z.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Q of _.rects||[])if(Q.kind==="resize")this.ensureCanvasSize(Q.width,Q.height);let Z=this.canvas?.getContext("2d",{alpha:!1});if(Z){let Q=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Z.putImageData(Q,0,0),$=!0}}else for(let Z of _.rects||[]){if(Z.kind==="resize"){this.ensureCanvasSize(Z.width,Z.height);continue}if(Z.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Z),$=!0;continue}if(Z.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Z),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Z=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Z}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Z}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new S8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Z=$.receive(j);for(let Q of Z.outgoing||[])this.socketBoundary?.send?.(Q);for(let Q of Z.events||[])this.applyRemoteDisplayEvent(Q)}catch(j){let Z=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Z}`),this.updateDisplayInfo(`Display protocol error: ${Z}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Z))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Z=await f2(),Q={};if(Z)Q.pipeline=Z,Q.decodeRawRect=(K,N,G,V)=>Z.decodeRawRectToRgba(K,N,G,V);let Y=h5(this.authPassword);if(Y!==null)Q.password=Y;if(j)Q.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new S8(Q),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new Q$({url:fK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await RK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await uK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var J$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===W4||$.startsWith(`${W4}/`)?9000:!1},mount(_,$){return new V7(_,$)}};function B_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Q1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function J5(_,$=!1){let j=B_(_);if(j===null)return $;return j==="true"}function d5(_,$=null){let j=B_(_);if(j===null)return $;let Z=parseInt(j,10);return Number.isFinite(Z)?Z:$}var A$="piclaw_theme",R8="piclaw_tint",W7="piclaw_chat_themes",r5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},U7={default:{label:"Default",mode:"auto",light:r5,dark:B7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},gK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],i4={theme:"default",tint:null},z7="light",O$=!1;function u8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Q=parseInt(Z,16);return{r:Q>>16&255,g:Q>>8&255,b:Q&255,hex:`#${Z.toLowerCase()}`}}function mK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Z=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Q=Z.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Q)return null;let Y=parseInt(Q[1],10),q=parseInt(Q[2],10),K=parseInt(Q[3],10);if(![Y,q,K].every((G)=>Number.isFinite(G)))return null;let N=`#${[Y,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:K,hex:N}}function F7(_){return D5(_)||mK(_)}function i5(_,$,j){let Z=Math.round(_.r+($.r-_.r)*j),Q=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Z} ${Q} ${Y})`}function D$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function hK(_){let $=_.r/255,j=_.g/255,Z=_.b/255,Q=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Z<=0.03928?Z/12.92:Math.pow((Z+0.055)/1.055,2.4);return 0.2126*Q+0.7152*Y+0.0722*q}function pK(_){return hK(_)>0.4?"#000000":"#ffffff"}function H7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function E$(_){return U7[_]||U7.default}function cK(_){return _.mode==="auto"?H7():_.mode}function J7(_,$){let j=E$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||r5}function O7(_,$,j){let Z=F7($);if(!Z)return _;let Q=D5(_.bgPrimary),Y=D5(_.bgSecondary),q=D5(_.bgHover),K=D5(_.borderColor);if(!Q||!Y||!q||!K)return _;let G=D5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:i5(Q,Z,0.08),bgSecondary:i5(Y,Z,0.12),bgHover:i5(q,Z,0.16),borderColor:i5(K,Z,0.08),accent:Z.hex,accentHover:G?i5(Z,G,0.18):Z.hex}}function lK(_,$){if(typeof document>"u")return;let j=document.documentElement,Z=_.accent,Q=F7(Z),Y=Q?D$(Q,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Q?D$(Q,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Q?D$(Q,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N=Q?pK(Q):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Z,"--accent-hover":_.accentHover||Z,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":N,"--danger-color":_.danger||r5.danger,"--success-color":_.success||r5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([V,X])=>{if(X)j.style.setProperty(V,X)})}function nK(){if(typeof document>"u")return;let _=document.documentElement;gK.forEach(($)=>_.style.removeProperty($))}function O5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Z=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Z)Z=document.createElement("meta"),document.head.appendChild(Z);if(Z.setAttribute("name",_),j)Z.setAttribute("id",j);return Z}function L7(_){let $=u8(i4?.theme||"default"),j=i4?.tint?String(i4.tint).trim():null,Z=J7($,_);if($==="default"&&j)Z=O7(Z,j,_);if(Z?.bgPrimary)return Z.bgPrimary;return _==="dark"?B7.bgPrimary:r5.bgPrimary}function dK(_,$){if(typeof document>"u")return;let j=O5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Z=O5("theme-color",{id:"theme-color-light"});if(Z)Z.setAttribute("media","(prefers-color-scheme: light)"),Z.setAttribute("content",L7("light"));let Q=O5("theme-color",{id:"theme-color-dark"});if(Q)Q.setAttribute("media","(prefers-color-scheme: dark)"),Q.setAttribute("content",L7("dark"));let Y=O5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=O5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=O5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function iK(){if(typeof window>"u")return;let _={...i4,mode:z7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function D7(){try{let _=B_(W7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function rK(_,$,j){let Z=D7();if(!$&&!j)delete Z[_];else Z[_]={theme:$||"default",tint:j||null};Q1(W7,JSON.stringify(Z))}function oK(_){if(!_)return null;return D7()[_]||null}function A7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function k$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=u8(_?.theme||"default"),Z=_?.tint?String(_.tint).trim():null,Q=E$(j),Y=cK(Q),q=J7(j,Y);i4={theme:j,tint:Z},z7=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Z?String(Z):"",K.style.colorScheme=Y;let N=q;if(j==="default"&&Z)N=O7(q,Z,Y);if(j==="default"&&!Z)nK();else lK(N,Y);if(dK(N.bgPrimary,Y),iK(),$.persist!==!1)if(Q1(A$,j),Z)Q1(R8,Z);else Q1(R8,"")}function w8(){if(E$(i4.theme).mode!=="auto")return;k$(i4,{persist:!1})}function E7(){if(typeof window>"u")return()=>{};let _=A7(),$=oK(_),j=$?u8($.theme||"default"):u8(B_(A$)||"default"),Z=$?$.tint?String($.tint).trim():null:(()=>{let Q=B_(R8);return Q?Q.trim():null})();if(k$({theme:j,tint:Z},{persist:!1}),window.matchMedia&&!O$){let Q=window.matchMedia("(prefers-color-scheme: dark)");if(Q.addEventListener)Q.addEventListener("change",w8);else if(Q.addListener)Q.addListener(w8);return O$=!0,()=>{if(Q.removeEventListener)Q.removeEventListener("change",w8);else if(Q.removeListener)Q.removeListener(w8);O$=!1}}return()=>{}}function k7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||A7(),j=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(rK($,j||"default",Z),k$({theme:j||"default",tint:Z},{persist:!1}),!$||$==="web:default")Q1(A$,j||"default"),Q1(R8,Z||"")}function M7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return H7()}var f8=/#(\w+)/g,sK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),aK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),tK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),eK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},_N=new Set(["http:","https:","mailto:",""]);function M$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function r4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Z=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!_N.has(Z.protocol))return null;return Z.href}catch{return null}}function I7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Z=[],Q=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Q.nextNode())Z.push(Y);for(let q of Z){let K=q.tagName.toLowerCase();if(!aK.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let N=eK[K]||new Set;for(let G of Array.from(q.attributes)){let V=G.name.toLowerCase(),X=G.value;if(V.startsWith("on")){q.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(N.has(V)||tK.has(V)){if(V==="href"){let U=r4(X);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,L=r4(U,{allowDataImage:K==="img"});if(!L)q.removeAttribute(G.name);else q.setAttribute(G.name,L)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function x7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function v8(_,$=2){if(!_)return _;let j=_;for(let Z=0;Z<$;Z+=1){let Q=x7(j);if(Q===j)break;j=Q}return j}function $N(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Q=[],Y=!1,q=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let N=Z.length;Z.push(q.join(`
`)),Q.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,q=[];continue}if(Y)q.push(K);else Q.push(K)}if(Y)Q.push("```mermaid"),Q.push(...q);return{text:Q.join(`
`),blocks:Z}}function jN(_){if(!_)return _;return v8(_,5)}function ZN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Z of $)j+=String.fromCharCode(Z);return btoa(j)}function QN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Z=0;Z<$.length;Z+=1)j[Z]=$.charCodeAt(Z);return new TextDecoder().decode(j)}function YN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Z)=>{let Q=Number(Z),Y=$[Q]??"",q=jN(Y);return`<div class="mermaid-container" data-mermaid="${ZN(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function T7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var qN={span:new Set(["title","class","lang","dir"])};function KN(_,$){let j=qN[_];if(!j||!$)return"";let Z=[],Q=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Q.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Y[2]??Y[3]??Y[4]??"";Z.push(` ${q}="${M$(K)}"`)}return Z.join("")}function P7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Z=j.trim(),Q=Z.startsWith("/"),Y=Q?Z.slice(1).trim():Z,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[N=""]=K.split(/\s+/,1),G=N.toLowerCase();if(!G||!sK.has(G))return $;if(G==="br")return Q?"":"<br>";if(Q)return`</${G}>`;let V=K.slice(N.length).trim(),X=KN(G,V);return`<${G}${X}>`})}function C7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Z)=>`<pre><code>${$(Z)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Z)=>`<code>${$(Z)}</code>`)}function y7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Q;while(Q=j.nextNode()){if(!Q.nodeValue)continue;let Y=Z(Q.nodeValue);if(Y!==Q.nodeValue)Q.nodeValue=Y}return $.body.innerHTML}function NN(_){if(!window.katex)return _;let $=(q)=>x7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],N=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_BLOCK_${V}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_INLINE_${V}@@`}),{html:N,blocks:K}},Z=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,G)=>{let V=Number(G);return K[V]??""})},Q=j(_),Y=Q.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,N)=>{try{let G=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${M$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,N)=>{if(/\s$/.test(N))return q;try{let G=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${M$(G.message)}">$${N}$</span>`}}),Z(Y,Q.blocks)}function GN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Z=[],Q;while(Q=j.nextNode())Z.push(Q);for(let Y of Z){let q=Y.nodeValue;if(!q)continue;if(f8.lastIndex=0,!f8.test(q))continue;f8.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let N=q.split(f8);if(N.length<=1)continue;let G=$.createDocumentFragment();N.forEach((V,X)=>{if(X%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",V),U.textContent=`#${V}`,G.appendChild(U)}else G.appendChild($.createTextNode(V))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function XN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=[],Q=!1;for(let Y of j){if(!Q&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Q=!0,Z.push("$$");continue}if(Q&&Y.trim().match(/^```\s*$/)){Q=!1,Z.push("$$");continue}Z.push(Y)}return Z.join(`
`)}function VN(_){let $=XN(_||""),{text:j,blocks:Z}=$N($),Q=v8(j,2),q=T7(Q).replace(/</g,"&lt;");return{safeHtml:P7(q),mermaidBlocks:Z}}function z_(_,$,j={}){if(!_)return"";let{safeHtml:Z,mermaidBlocks:Q}=VN(_),Y=window.marked?marked.parse(Z,{headerIds:!1,mangle:!1}):Z.replace(/\n/g,"<br>");return Y=C7(Y),Y=y7(Y),Y=NN(Y),Y=GN(Y),Y=YN(Y,Q),Y=I7(Y,j),Y}function o5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=v8($,2),Q=T7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=P7(Q),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=C7(q),q=y7(q),q=I7(q),q}function UN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Z,Q,Y)=>{let q=Q.trim().split(/\s+/).map((N)=>{let[G,V]=N.split(",").map(Number);return{x:G,y:V}});if(q.length<3)return`<polyline${Z}points="${Q}"${Y}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let N=1;N<q.length-1;N++){let G=q[N-1],V=q[N],X=q[N+1],U=V.x-G.x,L=V.y-G.y,H=X.x-V.x,A=X.y-V.y,J=Math.sqrt(U*U+L*L),W=Math.sqrt(H*H+A*A),D=Math.min($,J/2,W/2);if(D<0.5){K.push(`L ${V.x},${V.y}`);continue}let E=V.x-U/J*D,f=V.y-L/J*D,R=V.x+H/W*D,p=V.y+A/W*D,T=U*A-L*H>0?1:0;K.push(`L ${E},${f}`),K.push(`A ${D},${D} 0 0 ${T} ${R},${p}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Z}d="${K.join(" ")}"${Y}/>`})}async function B4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Q=M7()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let K=q.dataset.mermaid,N=QN(K||""),G=v8(N,2),V=await $(G,{...Q,transparent:!0});V=UN(V),q.innerHTML=V,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(N),q.removeAttribute("data-mermaid")}}function S7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Z=new Date-$,Q=Z/1000,Y=86400000;if(Z<Y){if(Q<60)return"just now";if(Q<3600)return`${Math.floor(Q/60)}m`;return`${Math.floor(Q/3600)}h`}if(Z<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function s5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function y_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function o4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function C4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function LN(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Z=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Q=Z?.[1]||j,Y=Z?.[2]||"",q=Z?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Q.startsWith("/")?Q:`${K?`${K}/`:""}${Q}`,V=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(V.length>0)V.pop();continue}V.push(U)}let X=V.join("/");return`${D8(X)}${Y}${q}`}function a5(_){return _?.preview||null}function WN(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Z=j>=0?$.slice(j+1):$,Q=Z.lastIndexOf(".");if(Q<=0||Q===Z.length-1)return"none";return Z.slice(Q+1)}function BN(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function zN(_,$){let j=$?.path||_?.path||"",Z=[];if($?.content_type)Z.push(`<span><strong>type:</strong> ${C4($.content_type)}</span>`);if(typeof $?.size==="number")Z.push(`<span><strong>size:</strong> ${C4(y_($.size))}</span>`);if($?.mtime)Z.push(`<span><strong>modified:</strong> ${C4(o4($.mtime))}</span>`);if(Z.push(`<span><strong>kind:</strong> ${C4(BN($))}</span>`),Z.push(`<span><strong>extension:</strong> ${C4(WN(j))}</span>`),j)Z.push(`<span><strong>path:</strong> ${C4(j)}</span>`);if($?.truncated)Z.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Z.join("")}</div>`}function FN(_){let $=a5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=zN(_,$);if($.kind==="image"){let Z=$.url||($.path?D8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${C4(Z)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Z=z_($.text||"",null,{rewriteImageSrc:(Q)=>LN(Q,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Z}</div>`}return`${j}<pre class="workspace-preview-text"><code>${C4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class I${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=FN(this.context)}getContent(){let _=a5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=a5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var x$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=a5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new I$(_,$)}},T$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return a5(_)||_?.path?1:!1},mount(_,$){return new I$(_,$)}};var HN=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),JN={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},ON={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function R7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function w7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class u7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Q=R7(j),Y=ON[Q]||"\uD83D\uDCC4",q=JN[Q]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${w7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${w7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let N=K.querySelector("#ov-open-tab");if(N)N.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class f7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document",Q=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Q)}&name=${encodeURIComponent(Z)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var P$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=R7(_?.path);if(!$||!HN.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new u7(_,$);return new f7(_,$)}};var DN=/\.(csv|tsv)$/i;function v7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class b7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"table.csv",Q=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${v7(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${v7(Q)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var C$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!DN.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new b7(_,$);return new g7(_,$)}};var AN=/\.pdf$/i;function EN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"document.pdf",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${EN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new m7(_,$);return new h7(_,$)}};var kN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function S$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"image",Q=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${S$(Q)}" alt="${S$(Z)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${S$(Z)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!kN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new p7(_,$);return new c7(_,$)}};var MN=/\.(mp4|m4v|mov|webm|ogv)$/i;function IN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"video.mp4",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${IN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!MN.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new l7(_,$);return new n7(_,$)}};function xN(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function TN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var u$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function d7(_){let $=String(_||"").trim();return $?$:u$}function PN(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function CN(_){let $="",j=32768;for(let Z=0;Z<_.length;Z+=j)$+=String.fromCharCode(..._.subarray(Z,Z+j));return btoa($)}function yN(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Z=_.EditorUi;if(Z?.prototype&&!Z.prototype.__piclawWorkspaceSavePatched){let Y=Z.prototype.saveData;Z.prototype.saveData=function(q,K,N,G,V,X){try{if(q&&N!=null&&j({filename:q,format:K,data:N,mimeType:G,base64Encoded:Boolean(V),defaultMode:X}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Z.prototype.__piclawWorkspaceSavePatched=!0}let Q=_.App;if(Q?.prototype&&!Q.prototype.__piclawExportPatched){let Y=Q.prototype.exportFile;Q.prototype.exportFile=function(q,K,N,G,V,X){try{if(K&&j({filename:K,data:q,mimeType:N,base64Encoded:Boolean(G),mode:V,folderId:X}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Q.prototype.__piclawExportPatched=!0}return Boolean(Z?.prototype&&Z.prototype.__piclawWorkspaceSavePatched||Q?.prototype&&Q.prototype.__piclawExportPatched)}catch{return!1}}async function i7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${CN(j)}`}class r7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"diagram.drawio",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${TN(Z)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Q);let Y=Q.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class o7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=PN(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Q=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(yN(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=u$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await i7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await i7(_,"image/png");else this.xmlData=d7(await _.text());else if(_.status===404)this.xmlData=u$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?d7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var f$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!xN(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new r7(_,$);return new o7(_,$)}};var SN=/\.mindmap\.ya?ml$/i,v$=String(Date.now());function s7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function b$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Q,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Q(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function wN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function RN(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Z=document.createElement("div");Z.id="context-menu",Z.className="context-menu hidden",Z.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Z)}class a7{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"mindmap",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Q.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Q),Q.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class t7{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(s7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,wN("/static/css/mindmap.css"),await Promise.all([b$("/static/js/vendor/d3-mindmap.min.js?v="+v$),b$("/static/js/vendor/js-yaml.min.js?v="+v$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),RN(this.mindmapEl);let j=s7(),Z=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await b$("/static/js/vendor/mindmap-editor.js?v="+v$),this.disposed)return;let Q=window.__mindmapEditor;if(!Q)throw Error("__mindmapEditor not found");if(Q.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Z+"/"+Y)}`}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[mindmap] Failed to load mindmap renderer:",Q),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var g$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!SN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new a7(_,$);return new t7(_,$)}};var uN=/\.kanban\.md$/i,fN=String(Date.now());function e7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function vN(){let _=window;if(_.preact)return;_.preact={h:F8,render:x4,Component:K5,createContext:W2},_.preactHooks={useState:g,useEffect:b,useCallback:P,useRef:I,useMemo:S0,useReducer:I6,useContext:F2,useLayoutEffect:S5,useImperativeHandle:z2,useErrorBoundary:J2,useDebugValue:H2},_.htm={bind:()=>B}}function bN(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Z=document.querySelector(`script[src="${$}"]`);if(Z)Z.remove();return new Promise((Q,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Q(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function gN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class _9{container;constructor(_,$){this.container=_;let j=$.path||"",Z=j.split("/").pop()||"kanban",Q=document.createElement("div");Q.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Q.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Z}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Q),Q.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class $9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(e7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,gN("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=e7();try{if(vN(),await bN("/static/js/vendor/kanban-editor.js?v="+fN),this.disposed)return;let Z=window.__kanbanEditor;if(!Z)throw Error("__kanbanEditor not found");if(Z.mount(this.boardEl,{content:$,isDark:j,onEdit:(Q)=>{this.lastContent=Q,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Q)}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[kanban] Failed to load kanban renderer:",Z),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var m$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!uN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _9(_,$);return new $9(_,$)}};class j9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Z){console.warn("[tab-store] Change listener failed:",Z)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Z)=>Z!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Z=this.tabs.get(_);if(!Z)return;if(this.tabs.delete(_),Z.id=$,Z.path=$,Z.label=j||$.split("/").pop()||$,this.tabs.set($,Z),this.mruOrder=this.mruOrder.map((Q)=>Q===_?$:Q),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Z)=>Z.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r0=new j9;function Z9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Z,chatJid:Q}){let Y=I(_);Y.current=_;let q=I($);q.current=$;let K=I(j);K.current=j;let N=I(Z);N.current=Z,b(()=>{let G=new E8((X,U)=>Y.current(X,U),(X)=>q.current(X),{chatJid:Q});G.connect();let V=()=>{G.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")N.current?.()};return window.addEventListener("focus",V),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),G.disconnect()}},[Q])}function Q9(){let[_,$]=g(!1),[j,Z]=g("default"),Q=I(!1);b(()=>{let N=J5("notificationsEnabled",!1);if(Q.current=N,$(N),typeof Notification<"u")Z(Notification.permission)},[]),b(()=>{Q.current=_},[_]);let Y=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Z("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Z(G||"default"),G!=="granted"){Q.current=!1,$(!1),Q1("notificationsEnabled","false");return}}let N=!Q.current;Q.current=N,$(N),Q1("notificationsEnabled",String(N))},[Y]),K=P((N,G)=>{if(!Q.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(N,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var t5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function Y9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Z,Q]=g(null),[Y,q]=g(!1),K=I(!1),N=I(null),G=I(!1),V=I(null),X=I(null),U=I(0);b(()=>{K.current=Y},[Y]),b(()=>{X.current=Z},[Z]),b(()=>{U.current+=1,V.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let L=P(async(J=null)=>{let W=U.current;try{if(J){let D=await T6(J,50,0,j);if(W!==U.current)return;Q(D.posts),q(!1)}else{let D=await l4(10,null,j);if(W!==U.current)return;Q(D.posts),q(D.has_more)}}catch(D){if(W!==U.current)return;console.error("Failed to load posts:",D)}},[j]),H=P(async()=>{let J=U.current;try{let W=await l4(10,null,j);if(J!==U.current)return;Q((D)=>{if(!D||D.length===0)return W.posts;return t5([...W.posts,...D])}),q((D)=>D||W.has_more)}catch(W){if(J!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),A=P(async(J={})=>{let W=U.current,D=X.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:f="top",allowRepeat:R=!1}=J,p=(M)=>{if(!E){M();return}if(f==="top")$(M);else _(M)},T=D.slice().sort((M,F)=>M.id-F.id)[0]?.id;if(!Number.isFinite(T))return;if(!R&&V.current===T)return;G.current=!0,V.current=T;try{let M=await l4(10,T,j);if(W!==U.current)return;if(M.posts.length>0)p(()=>{Q((F)=>t5([...M.posts,...F||[]])),q(M.has_more)});else q(!1)}catch(M){if(W!==U.current)return;console.error("Failed to load more posts:",M)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return b(()=>{N.current=A},[A]),{posts:Z,setPosts:Q,hasMore:Y,setHasMore:q,hasMoreRef:K,loadPosts:L,refreshTimeline:H,loadMore:A,loadMoreRef:N,loadingMoreRef:G,lastBeforeIdRef:V}}function q9(){let[_,$]=g(null),[j,Z]=g({text:"",totalLines:0}),[Q,Y]=g(""),[q,K]=g({text:"",totalLines:0}),[N,G]=g(null),[V,X]=g(null),[U,L]=g(null),H=I(null),A=I(0),J=I(!1),W=I(""),D=I(""),E=I(null),f=I(null),R=I(null),p=I(null),d=I(!1),T=I(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Z,agentPlan:Q,setAgentPlan:Y,agentThought:q,setAgentThought:K,pendingRequest:N,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:X,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:H,lastSilenceNoticeRef:A,isAgentRunningRef:J,draftBufferRef:W,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:f,currentTurnIdRef:R,steerQueuedTurnIdRef:p,thoughtExpandedRef:d,draftExpandedRef:T}}function K9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Z}){let Q=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=$.current||280,H=V.currentTarget;H.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,J=(D)=>{A=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),160),600);X.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let D=Math.min(Math.max(L+(A-U),160),600);$.current=D,H.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Q1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,Y=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=$.current||280,A=V.currentTarget;A.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let f=Math.min(Math.max(H+(E.clientX-L),160),600);X.style.setProperty("--sidebar-width",`${f}px`),$.current=f},W=()=>{A.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Q1("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=j.current||$.current||280,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,J=(D)=>{A=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),200),800);X.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let D=Math.min(Math.max(L+(A-U),200),800);j.current=D,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,K=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=j.current||$.current||280,A=V.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let f=Math.min(Math.max(H+(E.clientX-L),200),800);X.style.setProperty("--editor-width",`${f}px`),j.current=f},W=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",Q1("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,N=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientY,L=Z?.current||200,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=U,J=(D)=>{A=D.clientY;let E=Math.min(Math.max(L-(D.clientY-U),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${E}px`),Z)Z.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let D=Math.min(Math.max(L-(A-U),100),window.innerHeight*0.5);if(Z)Z.current=D;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}).current,G=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientY,H=Z?.current||200,A=V.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let J=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let f=Math.min(Math.max(H-(E.clientY-L),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${f}px`),Z)Z.current=f;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",Q1("dockHeight",String(Math.round(Z?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",J),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",J,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Q,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:G}}function mN(_,$,j,Z){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Q=!1,Y=new Map;for(let[q,K]of _.entries()){let N=q;if(Z==="dir"){if(q===$)N=j,Q=!0;else if(q.startsWith(`${$}/`))N=`${j}${q.slice($.length)}`,Q=!0}else if(q===$)N=j,Q=!0;Y.set(N,K)}return Q?Y:_}function N9({onTabClosed:_}={}){let $=I(_);$.current=_;let[j,Z]=g(()=>r0.getTabs()),[Q,Y]=g(()=>r0.getActiveId()),[q,K]=g(()=>r0.getTabs().length>0);b(()=>{return r0.onChange((T,M)=>{Z(T),Y(M),K(T.length>0)})},[]);let[N,G]=g(()=>new Set),[V,X]=g(()=>new Map),U=P((T)=>{G((M)=>{let F=new Set(M);if(F.has(T))F.delete(T);else F.add(T);return F})},[]),L=P((T)=>{G((M)=>{if(!M.has(T))return M;let F=new Set(M);return F.delete(T),F})},[]),H=P((T)=>{X((M)=>{if(!M.has(T))return M;let F=new Map(M);return F.delete(T),F})},[]),A=P((T,M={})=>{if(!T)return;let F=typeof M?.paneOverrideId==="string"&&M.paneOverrideId.trim()?M.paneOverrideId.trim():null,x={path:T,mode:"edit"};try{if(!(F?h0.get(F):h0.resolve(x))){if(!h0.get("editor")){console.warn(`[openEditor] No pane handler for: ${T}`);return}}}catch(s){console.warn(`[openEditor] paneRegistry.resolve() error for "${T}":`,s)}let v=typeof M?.label==="string"&&M.label.trim()?M.label.trim():void 0;if(r0.open(T,v),F)X((s)=>{if(s.get(T)===F)return s;let m=new Map(s);return m.set(T,F),m})},[]),J=P(()=>{let T=r0.getActiveId();if(T){let M=r0.get(T);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}r0.close(T),L(T),H(T),$.current?.(T)}},[H,L]),W=P((T)=>{let M=r0.get(T);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}r0.close(T),L(T),H(T),$.current?.(T)},[H,L]),D=P((T)=>{r0.activate(T)},[]),E=P((T)=>{let M=r0.getTabs().filter((v)=>v.id!==T&&!v.pinned),F=M.filter((v)=>v.dirty).length;if(F>0){if(!window.confirm(`${F} unsaved tab${F>1?"s":""} will be closed. Continue?`))return}let x=M.map((v)=>v.id);r0.closeOthers(T),x.forEach((v)=>{L(v),H(v),$.current?.(v)})},[H,L]),f=P(()=>{let T=r0.getTabs().filter((x)=>!x.pinned),M=T.filter((x)=>x.dirty).length;if(M>0){if(!window.confirm(`${M} unsaved tab${M>1?"s":""} will be closed. Continue?`))return}let F=T.map((x)=>x.id);r0.closeAll(),F.forEach((x)=>{L(x),H(x),$.current?.(x)})},[H,L]),R=P((T)=>{r0.togglePin(T)},[]),p=P((T)=>{if(!T)return;X((M)=>{if(M.get(T)==="editor")return M;let F=new Map(M);return F.set(T,"editor"),F}),r0.activate(T)},[]),d=P(()=>{let T=r0.getActiveId();if(T)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:T}}))},[]);return b(()=>{let T=(M)=>{let{oldPath:F,newPath:x,type:v}=M.detail||{};if(!F||!x)return;if(v==="dir"){for(let s of r0.getTabs())if(s.path===F||s.path.startsWith(`${F}/`)){let m=`${x}${s.path.slice(F.length)}`;r0.rename(s.id,m)}}else r0.rename(F,x);X((s)=>mN(s,F,x,v))};return window.addEventListener("workspace-file-renamed",T),()=>window.removeEventListener("workspace-file-renamed",T)},[]),b(()=>{let T=(M)=>{if(r0.hasUnsaved())M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",T),()=>window.removeEventListener("beforeunload",T)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Q,previewTabs:N,tabPaneOverrides:V,openEditor:A,closeEditor:J,handleTabClose:W,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:f,handleTabTogglePin:R,handleTabTogglePreview:U,handleTabEditSource:p,revealInExplorer:d}}function h$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Z=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Q=j[_]??window[Z],Y=Number(Q);return Number.isFinite(Y)?Y:$}catch{return $}}var p$=h$("warning",30000),G9=h$("finalize",120000),c$=h$("refresh",30000),X9=30000;function V9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function U9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function L9(_=30000){let[,$]=g(0);b(()=>{let j=setInterval(()=>$((Z)=>Z+1),_);return()=>clearInterval(j)},[_])}function W9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Z,Q)=>Z+Math.max(1,Math.ceil(Q.length/$)),0)}async function B9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Z,thoughtExpandedRef:Q,draftExpandedRef:Y,setAgentThoughtVisibility:q,getAgentThought:K,thoughtBufferRef:N,draftBufferRef:G,setAgentThought:V,setAgentDraft:X}=_;if($!=="thought"&&$!=="draft")return;let U=Z.current;if($==="thought"){if(Q.current=j,U)try{await q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)N.current=L.text;V((H)=>({...H||{text:"",totalLines:0},fullText:N.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(Y.current=j,U)try{await q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)G.current=L.text;X((H)=>({...H||{text:"",totalLines:0},fullText:G.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function z9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function F9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function H9(_){return String(_||"").trim()||"web:default"}function J9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function O9(_){if(!_)return!1;return _.status!=="running"}function D9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function l$(_){return String(_||"").trim()||"web:default"}function A9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function hN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function y4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function b8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return y4(_)?"Compacting context":"Working..."}function pN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Z=Math.floor($/60)%60,Q=Math.floor($/3600);if(Q>0)return`${Q}:${String(Z).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Z}:${String(j).padStart(2,"0")}`}function g8(_,$=Date.now()){let j=hN(_);if(j===null)return null;return pN(Math.max(0,$-j))}function e5(_){return typeof _==="string"}function E9(_){return typeof _==="string"&&_.trim().length>0}function n$(_){if(!Array.isArray(_))return[];return _.filter(($)=>E9($?.chat_jid)&&E9($?.agent_name))}function k9(_){if(!Array.isArray(_))return[];return _.filter(($)=>e5($?.chat_jid)&&e5($?.agent_name))}function M9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Z=new Map;if(Array.isArray(_)){for(let q of _)if(e5(q?.chat_jid))Z.set(q.chat_jid,q)}let Q=$.map((q)=>{if(!e5(q?.chat_jid))return q;let K=Z.get(q.chat_jid);return K?{...q,...K,is_active:K.is_active??q.is_active}:q}),Y=e5(j)?j:"";return Q.sort((q,K)=>{if(q.chat_jid===Y&&K.chat_jid!==Y)return-1;if(K.chat_jid===Y&&q.chat_jid!==Y)return 1;let N=Boolean(q.archived_at),G=Boolean(K.archived_at);if(N!==G)return N?1:-1;if(Boolean(q.is_active)!==Boolean(K.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(K.chat_jid))}),Q}var cN={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function I9(_){if(!_||typeof _!=="object")return cN;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function x9(_){let j=(Array.isArray(_)?_:[]).find((Z)=>Z?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function T9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Z=String(j),Q=_.agent_name,Y=_.agent_avatar;if(!Q&&Y===void 0)return null;let q=$||{id:Z},K=q.name||null,N=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,V=!1;if(Q&&Q!==q.name)K=Q,G=!0;if(Y!==void 0){let X=typeof Y==="string"?Y.trim():null,U=typeof N==="string"?N.trim():null,L=X||null;if(L!==(U||null))N=L,V=!0}if(!G&&!V)return null;return{agentId:Z,nameChanged:G,avatarChanged:V,resolvedName:K,resolvedAvatar:N}}function P9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Z=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Q=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Z&&_.avatar_background===Q)return _;return{name:j,avatar_url:Z,avatar_background:Q}}function C9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Z=$.user_avatar??$.userAvatar,Q=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Z===void 0&&Q===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Z===void 0?_.avatar_url:typeof Z==="string"&&Z.trim()?Z.trim():null,K=Q===void 0?_.avatar_background:typeof Q==="string"&&Q.trim()?Q.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===K)return _;return{name:Y,avatar_url:q,avatar_background:K}}function lN(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function y9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Z=_.filter((Q)=>!j.has(Q?.id)&&!lN(Q));return Z.length===_.length?_:Z}function S9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Z)=>({...Z})).filter((Z)=>!j.has(Z.row_id)):[]}function w9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Z)=>j?.row_id===$[Z]?.row_id)}function S4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Z)=>Z?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function R9(_,$){let j=Array.isArray(_)?_:[],Z=$?.row_id,Q=$?.content;if(Z==null||typeof Q!=="string"||!Q.trim())return j;if(j.some((Y)=>Y?.row_id===Z))return j;return[...j,{row_id:Z,content:Q,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function u9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function f9(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Q}=_;try{let Y=await $();j(V9(Y));let q=Y?.user||{};Z((N)=>P9(N,q));let K=x9(Y?.agents);Q(K.name,K.avatarUrl)}catch(Y){console.warn("Failed to load agents:",Y)}}function v9(_){let{payload:$,agentsRef:j,setAgents:Z,applyBranding:Q}=_,Y=T9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Y)return;if(Z((q)=>{let N={...q[Y.agentId]||{id:Y.agentId}};if(Y.nameChanged)N.name=Y.resolvedName;if(Y.avatarChanged)N.avatar_url=Y.resolvedAvatar;return{...q,[Y.agentId]:N}}),Y.agentId==="default")Q(Y.resolvedName,Y.resolvedAvatar,Y.avatarChanged?Date.now():null)}function b9(_){let{payload:$,setUserProfile:j}=_;j((Z)=>C9(Z,$))}function g9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Z,setSupportsThinking:Q,setActiveModelUsage:Y}=_,q=I9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Z(q.thinkingLevel);if(q.hasSupportsThinking)Q(q.supportsThinking);if(q.hasProviderUsage)Y(q.providerUsage)}function m9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Z,applyModelState:Q}=_,Y=$;j(Y).then((q)=>{if(Z.current!==Y)return;if(q)Q(q)}).catch(()=>{})}function h9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Z,activeChatJidRef:Q,setActiveChatAgents:Y}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Z(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,N])=>{if(Q.current!==q)return;let G=n$(K?.chats),V=n$(N?.chats);Y(M9(G,V,q))}).catch(()=>{if(Q.current!==q)return;Y([])})}function p9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Z}=_;j($).then((Q)=>{Z(k9(Q?.chats))}).catch(()=>{})}function c9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshContextUsage:Q,refreshAutoresearchStatus:Y,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Z(),Q(),Y(),u9($))q()}function d$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function l9(_,$){let j=new Map(_),Z=d$($);if(typeof $?.key==="string"&&$.key&&Z)j.set($.key,Z);else j.delete("autoresearch");return j}function n9(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Z=new Map(_),Q=d$($);if($?.options?.remove||!Q)Z.delete(j);else Z.set(j,Q);return Z}function d9(_){if(_?.options?.remove)return!0;return d$(_)?.state!=="running"}function i$(_,$){return`${_}:${$}`}function i9(_,$,j){let Z=i$($,j);if(_.has(Z))return _;let Q=new Set(_);return Q.add(Z),Q}function r9(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function m8(_,$){if(_.size===0)return _;let j=`${$}:`,Z=new Set(Array.from(_).filter((Q)=>!String(Q).startsWith(j)));return Z.size===_.size?_:Z}async function o9(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Z=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Z)throw Error("No tmux command available.");return await _.writeClipboard(Z),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function s_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function s9(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function r$(_,$){return _&&$}function a9(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function t9(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function e9(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Z=new Set(j),Q=_.filter((Y)=>!Z.has(Y?.id));return Q.length===_.length?_:Q}function _j(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Z,dismissedQueueRowIdsRef:Q,getAgentQueueState:Y,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:K}=_,N=++j.current,G=$;Y(G).then((V)=>{if(N!==j.current)return;if(Z.current!==G)return;let X=Q.current,U=S9(V?.items,X);if(U.length){q((L)=>w9(L,U)?L:U);return}X.clear(),K(0),q((L)=>L.length===0?L:[])}).catch(()=>{if(N!==j.current)return;if(Z.current!==G)return;q((V)=>V.length===0?V:[])})}async function $j(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Z,setContextUsage:Q}=_,Y=$;try{let q=await Z(Y);if(j.current!==Y)return;if(q)Q(q)}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch agent context:",q)}}async function jj(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Z,setExtensionStatusPanels:Q,setPendingExtensionPanelActions:Y}=_,q=$;try{let K=await Z(q);if(j.current!==q)return;Q((N)=>l9(N,K)),Y((N)=>m8(N,"autoresearch"))}catch(K){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",K)}}function Zj(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Z,refreshQueueState:Q,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_;$(),j(),Z(),Q(),Y(),q()}function Qj(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Z}=_;if(s_($.current))j();Z()}function Yj(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Z,minWidth:Q=160,maxWidth:Y=600,fallbackWidth:q=280}=_,K=$("sidebarWidth",null),N=Number.isFinite(K)?Math.min(Math.max(Number(K),Q),Y):q;if(j.current=N,Z)Z.style.setProperty("--sidebar-width",`${N}px`);return N}async function qj(_){let{currentHashtag:$,searchQuery:j,searchScope:Z,currentChatJid:Q,currentRootChatJid:Y,loadPosts:q,searchPosts:K,setPosts:N,setHasMore:G,scrollToBottom:V,isCancelled:X,scheduleRaf:U=(A)=>requestAnimationFrame(A),scheduleTimeout:L=(A,J)=>{setTimeout(A,J)}}=_,H=()=>{if(X())return;U(()=>{if(X())return;L(()=>{if(X())return;V()},0)})};if($){await q($);return}if(j){try{let A=await K(j,50,0,Q,Z,Y);if(X())return;N(Array.isArray(A?.results)?A.results:[]),G(!1)}catch(A){if(X())return;console.error("Failed to search:",A),N([]),G(!1)}return}try{await q(),H()}catch(A){if(X())return;console.error("Failed to load timeline:",A)}}function nN(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Q,refreshQueueState:Y,intervalMs:q=60000,scheduleInterval:K=(V,X)=>setInterval(V,X),clearScheduledInterval:N=(V)=>clearInterval(V)}=_;$();let G=K(()=>{j(),Z(),Q(),Y()},q);return()=>{N(G)}}function Kj(_){let{getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Q,readStoredNumber:Y,sidebarWidthRef:q,appShellRef:K,currentChatJid:N,currentRootChatJid:G,getAgentModels:V,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H,setCurrentChatBranches:A,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E,agentsRef:f,refreshQueueState:R,refreshContextUsage:p,refreshAutoresearchStatus:d}=_,T=P(async()=>{await f9({getAgents:$,setAgents:j,setUserProfile:Z,applyBranding:Q})},[Q,$,j,Z]);b(()=>{T(),Yj({readStoredNumber:Y,sidebarWidthRef:q,shellElement:K.current})},[K,T,Y,q]);let M=P((o)=>{v9({payload:o,agentsRef:f,setAgents:j,applyBranding:Q})},[f,Q,j]),F=P((o)=>{b9({payload:o,setUserProfile:Z})},[Z]),x=P((o)=>{g9({payload:o,setActiveModel:J,setActiveThinkingLevel:W,setSupportsThinking:D,setActiveModelUsage:E})},[J,E,W,D]),v=P(()=>{m9({currentChatJid:N,getAgentModels:V,activeChatJidRef:L,applyModelState:x})},[L,x,N,V]),s=P(()=>{h9({currentChatJid:N,getActiveChatAgents:X,getChatBranches:U,activeChatJidRef:L,setActiveChatAgents:H})},[L,N,X,U,H]),m=P(()=>{p9({currentRootChatJid:G,getChatBranches:U,setCurrentChatBranches:A})},[G,U,A]),a=P(()=>{Zj({refreshModelState:v,refreshActiveChatAgents:s,refreshCurrentChatBranches:m,refreshQueueState:R,refreshContextUsage:p,refreshAutoresearchStatus:d})},[s,d,p,m,v,R]);return b(()=>nN({refreshModelAndQueueState:a,refreshModelState:v,refreshActiveChatAgents:s,refreshCurrentChatBranches:m,refreshQueueState:R}),[s,m,a,v,R]),{updateAgentProfile:M,updateUserProfile:F,applyModelState:x,refreshModelState:v,refreshActiveChatAgents:s,refreshCurrentChatBranches:m,refreshModelAndQueueState:a}}function Nj(_={}){return X4(_)&&I8(_)}function dN(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Z=Number($?.innerHeight||0);if(Number.isFinite(Z)&&Z>0)return Math.round(Z);return null}function iN(_={},$={}){if(!Nj(_))return null;let j=_.window??(typeof window<"u"?window:null),Z=_.document??(typeof document<"u"?document:null);if(!j||!Z?.documentElement)return null;let Q=dN({window:j});if(Q&&Q>0)Z.documentElement.style.setProperty("--app-height",`${Q}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Z.scrollingElement)Z.scrollingElement.scrollTop=0,Z.scrollingElement.scrollLeft=0;if(Z.documentElement)Z.documentElement.scrollTop=0,Z.documentElement.scrollLeft=0;if(Z.body)Z.body.scrollTop=0,Z.body.scrollLeft=0}catch{}}return Q}function Gj(_={}){if(!Nj(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Z=0,Q=new Set,Y=()=>{if(Z)$.cancelAnimationFrame?.(Z),Z=0;for(let X of Q)$.clearTimeout?.(X);Q.clear()},q=()=>{Z=0,iN({window:$,document:j})},K=()=>{if(Z)$.cancelAnimationFrame?.(Z);Z=$.requestAnimationFrame?.(q)??0},N=()=>{K();for(let X of[80,220,420]){let U=$.setTimeout?.(()=>{Q.delete(U),K()},X);if(U!=null)Q.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;N()},V=$.visualViewport;return N(),$.addEventListener("focus",N),$.addEventListener("pageshow",N),$.addEventListener("resize",N),$.addEventListener("orientationchange",N),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",N,!0),V?.addEventListener?.("resize",N),V?.addEventListener?.("scroll",N),()=>{Y(),$.removeEventListener("focus",N),$.removeEventListener("pageshow",N),$.removeEventListener("resize",N),$.removeEventListener("orientationchange",N),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",N,!0),V?.removeEventListener?.("resize",N),V?.removeEventListener?.("scroll",N)}}function rN(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function a1(_,$,j){let Z=_?.[$];return typeof Z==="function"?Z:rN($,j)}var oN=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Xj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Q=()=>{_(X4({window:j,navigator:Z}))};Q();let q=oN.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Q),()=>K.removeEventListener("change",Q);if(typeof K.addListener==="function")return K.addListener(Q),()=>K.removeListener(Q);return()=>{}});return j.addEventListener?.("focus",Q),j.addEventListener?.("pageshow",Q),()=>{for(let K of q)K();j.removeEventListener?.("focus",Q),j.removeEventListener?.("pageshow",Q)}}function Vj(_,$={}){let j=$.window??(typeof window<"u"?window:null),Z=$.document??(typeof document<"u"?document:null);if(!j||!Z||typeof _!=="function")return()=>{};let Q=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Q),j.addEventListener?.("pageshow",Q),Z.addEventListener?.("visibilitychange",Q),()=>{j.removeEventListener?.("focus",Q),j.removeEventListener?.("pageshow",Q),Z.removeEventListener?.("visibilitychange",Q)}}function Uj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.openTab,Q=_?.popOutPane,Y=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Z?.(G,V)},q=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Q?.(G,V)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((N)=>j.addEventListener(N,Y)),j.addEventListener("pane:popout",q),()=>{K.forEach((N)=>j.removeEventListener(N,Y)),j.removeEventListener("pane:popout",q)}}function Lj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=(Q)=>{if(Q?.ctrlKey&&Q.key==="`")Q.preventDefault?.(),_?.()};return j.addEventListener("keydown",Z),()=>j.removeEventListener("keydown",Z)}function Wj(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Z=_?.toggleZenMode,Q=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Z?.();return}if(K?.key==="Escape"&&Y())K.preventDefault?.(),Q?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function Bj(_,$){let j=Array.isArray(_)?_:[];return j.find((Z)=>Z?.id===$)||j[0]||null}function zj(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Fj(_,$,j){return _||$?.label||j||"Pane"}function Hj(_,$,j){let Z=Array.isArray(_)?_.length:0,Q=Boolean(j&&$?.has?.(j));return Z>1||Q}function Jj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function Oj(_,$,j,Z){return _===$&&!j||Z}function Dj(_,$,j,Z,Q){return _||!$&&(j||Z&&Q)}function h8(_){let $=o$(_);return $?`@${$}`:""}function o$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function p8(_,$=""){let j=String(_||""),Z=o$(j),Q=o$($);if(!j.trim())return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Z)return{normalized:Z,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Z}`;if(Z===Q)return{normalized:Z,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Z!==j.trim())return{normalized:Z,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Z,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function Aj(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?h8(_.agent_name):String($||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Z} • current branch`}function sN(_,$={}){let j=[],Z=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Q=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Z&&Q===Z)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function c8(_,$={}){let j=h8(_?.agent_name)||String(_?.chat_jid||"").trim(),Z=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Q=sN(_,$);return Q.length>0?`${j} — ${Z} • ${Q.join(" • ")}`:`${j} — ${Z}`}function Ej(_,$,j){let Z=h8(_),Q=h8($),Y=String(j||"").trim();if(Z&&Q&&Z!==Q)return`Restored archived ${Z} as ${Q} because ${Z} is already in use.`;if(Q)return`Restored ${Q}.`;if(Z)return`Restored ${Z}.`;return`Restored ${Y||"branch"}.`}var aN="piclaw_btw_session",Mj=900,kj="__piclawRenameBranchFormLock__";function tN(){try{return import.meta.url}catch{return null}}function s$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function l8(_,$,j=""){let Z=_?.get?.($);return Z&&Z.trim()?Z.trim():j}function Ij(_={}){let $=_.importMetaUrl===void 0?tN():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Z=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Q=$?new URL($).searchParams.get("v"):null;if(Q&&Q.trim())return Q.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((N)=>String(N?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,Z).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function a$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[kj];if(j&&typeof j==="object")return j;let Z={inFlight:!1,cooldownUntil:0};return $[kj]=Z,Z}function xj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Tj(_={}){let $=typeof _.readItem==="function"?_.readItem:B_,j=_.storageKey||aN,Z=$(j);if(!Z)return null;try{let Q=JSON.parse(Z);if(!Q||typeof Q!=="object")return null;let Y=typeof Q.question==="string"?Q.question:"",q=typeof Q.answer==="string"?Q.answer:"",K=typeof Q.thinking==="string"?Q.thinking:"",N=typeof Q.error==="string"&&Q.error.trim()?Q.error:null,G=Q.status==="running"?"error":Q.status==="success"||Q.status==="error"?Q.status:"success";return{question:Y,answer:q,thinking:K,error:G==="error"?N||"BTW stream interrupted. You can retry.":N,model:null,status:G}}catch{return null}}function Pj(_,$={}){let j=$.defaultChatJid||"web:default",Z=l8(_,"chat_jid",j),Q=s$(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=s$(_?.get?.("pane_popout")),q=l8(_,"pane_path"),K=l8(_,"pane_label"),N=s$(_?.get?.("branch_loader")),G=l8(_,"branch_source_chat_jid",Z);return{currentChatJid:Z,chatOnlyMode:Q,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:N,branchLoaderSourceChatJid:G}}function Cj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Z,staleUiReloadScheduledRef:Q,tabStoreHasUnsaved:Y,isAgentRunningRef:q,pendingRequestRef:K,showIntentToast:N}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Z.current===G)return!0;Z.current=G;let V=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Y()&&!V&&!q.current&&!K.current&&!Q.current)return Q.current=!0,N("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Q.current=!1}},350),!0;return N("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function t$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Z}=_||{};return!$&&!j&&!Z}function yj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Z,setAgentDraft:Q,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:N,clearAgentRunState:G,hasConnectedOnceRef:V,viewStateRef:X,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:H,refreshContextUsage:A}=_;if(j($),$!=="connected"){Z(null),Q({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),N.current=null,G();return}if(!V.current){if(V.current=!0,t$(X.current))U();L(),H(),A();return}if(t$(X.current))U();L(),H(),A()}function Sj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Z,refreshQueueState:Q,refreshAgentStatus:Y,refreshContextUsage:q,refreshAutoresearchStatus:K}=_,N=t$($.current);if(j){if(N)Z();Q(),Y(),q(),K();return}if(N)Z();Y(),q(),K()}function wj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Z,renameBranchLockUntil:Q,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:N=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Z||N<Number(Q||0)||G.inFlight||N<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function Rj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function uj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Z,openRenameForm:Q,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:G,refreshActiveChatAgents:V,refreshCurrentChatBranches:X,showIntentToast:U,closeRenameForm:L,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Z!=="string")return Q?.(),!1;let A=H(),J=K?.()||null;if(!J)return!1;if(Y.current||A<Number(q.current||0)||J.inFlight||A<Number(J.cooldownUntil||0))return!1;Y.current=!0,J.inFlight=!0,N?.(!0);try{let W=j.agent_name||"",D=p8(Z,W);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||W,f=await G(j.chat_jid,{agentName:E});await Promise.allSettled([V?.(),X?.()]);let R=f?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${R}`,"info",3500),L?.(),!0}catch(W){let D=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,N?.(!1);let W=H()+Mj;q.current=W;let D=K?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=W}}async function fj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Z,currentBranchRecord:Q,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:G,showIntentToast:V,baseHref:X,chatOnlyMode:U,navigate:L,confirm:H=(p)=>window.confirm(p)}=_;if(!$)return!1;let A=typeof j==="string"&&j.trim()?j.trim():"",J=typeof Z==="string"&&Z.trim()?Z.trim():"",W=A||Q?.chat_jid||J;if(!W)return V?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Q?.chat_jid===W?Q:null)||Y.find((p)=>p?.chat_jid===W)||q.find((p)=>p?.chat_jid===W)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return V?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let f=`@${D?.agent_name||W}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!H(`Prune ${f}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([N?.(),G?.()]);let p=D?.root_chat_jid||"web:default";V?.("Branch pruned",`${f} has been archived.`,"info",3000);let d=V4(X,p,{chatOnly:U});return L?.(d),!0}catch(p){let d=p instanceof Error?p.message:String(p||"Could not prune branch.");return V?.("Could not prune branch",d||"Could not prune branch.","warning",5000),!1}}async function vj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Z=[],refreshActiveChatAgents:Q,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:K,chatOnlyMode:N,navigate:G}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;try{let X=Z.find((W)=>W?.chat_jid===V)||null,U=await j(V);await Promise.allSettled([Q?.(),Y?.()]);let L=U?.branch,H=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():V,A=Ej(X?.agent_name,L?.agent_name,H);q?.("Branch restored",A,"info",4200);let J=V4(K,H,{chatOnly:N});return G?.(J),!0}catch(X){let U=X instanceof Error?X.message:String(X||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function bj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Z,navigate:Q,baseHref:Y,isCancelled:q=()=>!1}=_;try{Z?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let N=K?.branch,G=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let V=V4(Y,G,{chatOnly:!0});return Q?.(V,{replace:!0}),!0}catch(K){if(q())return!1;return Z?.({status:"error",message:b5(K)}),!1}}function gj(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Z,chatOnlyMode:Q,currentHref:Y,navigate:q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Z)return!1;let N=V4(Y,K,{chatOnly:Q});return q?.(N),!0}async function mj(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Z,dockInstanceRef:Q,terminalTabPath:Y}=_,K=(typeof j==="string"?j.trim():"")===$?Z.current:$===Y?Q.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function hj(_){let{panePath:$,terminalTabPath:j,dockVisible:Z,resolveTab:Q,closeTab:Y,setDockVisible:q}=_,K=Q($);if(K&&!K.dirty){Y($);return}if($===j&&Z)q(!1)}function pj(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Z,editorWidthRef:Q,dockHeightRef:Y,sidebarWidthRef:q,readStoredNumber:K}=_;if(!j||!$||!Z)return;if(!Q.current){let N=K("editorWidth",null),G=q.current||280;Q.current=Number.isFinite(N)?Number(N):G}if(Z.style.setProperty("--editor-width",`${Q.current}px`),!Y.current){let N=K("dockHeight",null);Y.current=Number.isFinite(N)?Number(N):200}Z.style.setProperty("--dock-height",`${Y.current}px`)}async function cj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Z,refreshActiveChatAgents:Q,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:K,baseHref:N}=_;try{let V=(await Z($))?.branch,X=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Q?.(),Y?.()]);let U=V?.agent_name?`@${V.agent_name}`:X;q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=V4(N,X,{chatOnly:j});return K?.(L),!0}catch(G){return q?.("Could not create branch",b5(G),"warning",5000),!1}}async function lj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Z,label:Q,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:N,baseHref:G}=_;if(!$||j)return!1;let V=typeof Z==="string"&&Z.trim()?Z.trim():"";if(!V)return!1;let X=C2(V);if(!X)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=_$(X);if(!U)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;$$(U,{title:typeof Q==="string"&&Q.trim()?`Opening ${Q}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await q?.(V),H=P2(G,V,{label:typeof Q==="string"&&Q.trim()?Q.trim():void 0,chatJid:N,params:L});return j$(U,H),K?.(V),!0}catch(L){Z$(U);let H=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",H,"warning",5000),!1}}async function nj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Z,currentRootChatJid:Q,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:N,setCurrentChatBranches:G,showIntentToast:V,baseHref:X}=_;if(!$||j)return!1;let U=x2(Z);if(!U)return V?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let H=T2(X,Z,{chatOnly:!0});if(!window.open(H,U.target))return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=_$(U);if(!L)return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;$$(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let A=(await Y(Z))?.branch,J=typeof A?.chat_jid==="string"&&A.chat_jid.trim()?A.chat_jid.trim():null;if(!J)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();N?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await K?.(Q);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let W=V4(X,J,{chatOnly:!0});return j$(L,W),!0}catch(H){return Z$(L),V?.("Could not open branch window",b5(H),"error",5000),!1}}function dj(_){_(($)=>!$)}function ij(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,navigate:Q,hasWindow:Y=typeof window<"u",currentHref:q=Y?window.location.href:"http://localhost/"}=_;return gj({hasWindow:Y,nextChatJid:$,currentChatJid:j,chatOnlyMode:Z,currentHref:q,navigate:Q})}function rj(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Q,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,hasWindow:K=typeof window<"u"}=_;return wj({hasWindow:K,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Z,getFormLock:Q,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q})}function oj(_){Rj(_)}async function sj(_){let{hasWindow:$=typeof window<"u",...j}=_;await uj({hasWindow:$,...j})}async function aj(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await fj({hasWindow:$,baseHref:j,...Z})}async function tj(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await vj({baseHref:j,...Z})}function ej(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Q,navigate:Y,hasWindow:q=typeof window<"u",baseHref:K=q?window.location.href:"http://localhost/",runBranchLoaderImpl:N=bj}=_;if(!$||!q)return;let G=!1;return N({branchLoaderSourceChatJid:j,forkChatBranch:Z,setBranchLoaderState:Q,navigate:Y,baseHref:K,isCancelled:()=>G}),()=>{G=!0}}async function _Z(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await cj({baseHref:j,...Z})}async function $Z(_){let{isWebAppMode:$,path:j,label:Z,showIntentToast:Q,currentChatJid:Y,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L,hasWindow:H=typeof window<"u",baseHref:A=H?window.location.href:"http://localhost/"}=_;await lj({hasWindow:H,isWebAppMode:$,path:j,label:Z,showIntentToast:Q,currentChatJid:Y,baseHref:A,resolveSourceTransfer:(J)=>mj({panePath:J,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G}),closeSourcePaneIfTransferred:(J)=>{hj({panePath:J,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L})}})}function jZ(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Z=Uj}=_;return Z({openTab:(Q,Y)=>$(Q,Y?{label:Y}:void 0),popOutPane:(Q,Y)=>{j(Q,Y)}})}async function ZZ(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Z}=_;await nj({hasWindow:$,baseHref:j,...Z})}function QZ(_){let{hasWindow:$=typeof window<"u",...j}=_;pj({hasWindow:$,...j})}function n8(_){return _?{..._}:{text:"",totalLines:0}}function YZ(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function eN(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function _G(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function qZ(_){return{agentStatus:_.agentStatus,agentDraft:n8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:n8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:YZ(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:eN(_.silentRecovery)}}function KZ(_){let $=_.snapshot||_G(),{refs:j,setters:Z}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Z.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Z.setAgentStatus($.agentStatus||null),Z.setAgentDraft(n8($.agentDraft)),Z.setAgentPlan($.agentPlan||""),Z.setAgentThought(n8($.agentThought)),Z.setPendingRequest($.pendingRequest||null),Z.setCurrentTurnId($.currentTurnId||null),Z.setSteerQueuedTurnId($.steerQueuedTurnId||null),Z.setFollowupQueueItems(YZ($.followupQueueItems)),Z.setActiveModel($.activeModel||null),Z.setActiveThinkingLevel($.activeThinkingLevel||null),Z.setSupportsThinking(Boolean($.supportsThinking)),Z.setActiveModelUsage($.activeModelUsage??null),Z.setContextUsage($.contextUsage??null),$}function $G(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Q?{kind:j,html:Q}:null}let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}function jG(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Z?{kind:Y,html:Z}:{kind:Y}}function w4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function C0(_){return typeof _==="string"&&_.trim()?_.trim():null}function GZ(_,$=!1){let Z=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Q)=>typeof Q==="string").map((Q)=>Q.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Z))}var XZ="__PICLAW_WIDGET_HOST__:";function NZ(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function e$(_,$){if(!_||_.type!=="generated_widget")return null;let j=$G(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:GZ(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function VZ(_){if(!_||typeof _!=="object")return null;let $=jG(_),j=C0(_?.widget_id)||C0(_?.widgetId)||C0(_?.tool_call_id)||C0(_?.toolCallId),Z=C0(_?.tool_call_id)||C0(_?.toolCallId),Q=C0(_?.turn_id)||C0(_?.turnId),Y=C0(_?.title)||C0(_?.name)||"Generated widget",q=C0(_?.subtitle)||"",K=C0(_?.description)||q,N=C0(_?.status),G=N==="loading"||N==="streaming"||N==="final"||N==="error"?N:"streaming";return{title:Y,subtitle:q,description:K,originPostId:w4(_?.origin_post_id)??w4(_?.originPostId),originChatJid:C0(_?.origin_chat_jid)||C0(_?.originChatJid)||C0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:GZ(_?.capabilities,!0),source:"live",status:G,turnId:Q,toolCallId:Z,width:w4(_?.width),height:w4(_?.height),error:C0(_?.error)}}function UZ(_){return e$(_,null)!==null}function F_(_){let $=C0(_?.toolCallId)||C0(_?.tool_call_id);if($)return $;let j=C0(_?.widgetId)||C0(_?.widget_id);if(j)return j;let Z=w4(_?.originPostId)??w4(_?.origin_post_id);if(Z!==null)return`post:${Z}`;return null}function LZ(_){let j=(_?.artifact||{}).kind||_?.kind||null,Q=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Q)}function WZ(_){return LZ(_)?"allow-downloads allow-scripts":"allow-downloads"}function d8(_){return{title:C0(_?.title)||"Generated widget",widgetId:C0(_?.widgetId)||C0(_?.widget_id),toolCallId:C0(_?.toolCallId)||C0(_?.tool_call_id),turnId:C0(_?.turnId)||C0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:C0(_?.status)||"final"}}function i8(_){return{...d8(_),subtitle:C0(_?.subtitle)||"",description:C0(_?.description)||"",error:C0(_?.error)||null,width:w4(_?.width),height:w4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function r8(_){return`${XZ}${JSON.stringify(i8(_))}`}function BZ(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=C0(_.text)||C0(_.content)||C0(_.message)||C0(_.prompt)||C0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Z=C0(j.text)||C0(j.content)||C0(j.message)||C0(j.prompt)||C0(j.value);if(Z)return Z}return null}function zZ(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function FZ(_){let $=C0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return C0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function ZG(_){let $=d8(_);return`<script>
(function () {
  const meta = ${NZ($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${NZ(XZ)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function HZ(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Q:Z;if(!q)return"";let K=LZ(_),N=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,V=K?ZG(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${N}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Y.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${V}
</head>
<body>${G}</body>
</html>`}function QG(_,$){let j=F_(_);return Boolean(_&&j===$)}function A5(_,$,j){if(!QG(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function JZ(_,$){return{..._,openedAt:$}}function OZ(_){let $=F_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function DZ(_,$,j){let Z=VZ({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Z)return _;let Q=F_(Z);if(Q&&j.dismissedSessionKeys?.has(Q))return _;let Y=F_(_),q=Boolean(Q&&Y&&Q===Y),K={...q&&_?.artifact?_.artifact:{},...Z.artifact||{}};return{...q&&_?_:{},...Z,artifact:K,source:"live",originChatJid:Z.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function AZ(_,$){if(!_||_?.source!=="live")return _||null;let j=F_($),Z=F_(_);if(j&&Z&&j!==Z)return _;return null}function EZ(_,$,j){return A5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function _3(_,$,j){if(j.errorMessage)return A5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return A5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function kZ(_,$,j){return A5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function MZ(_,$,j){return A5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function IZ(_,$,j){return A5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function E5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Z=S4(_,j);return{rowId:j,items:Z.items,remainingQueueCount:Z.remainingQueueCount}}function $3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function R4(_){return _.status==="fulfilled"?_.value:null}function o8(_){return Math.max(0,Math.min(100,_))}function xZ(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Z=$.filter((J)=>J?.data?.is_bot_message).length,Q=$.filter((J)=>!J?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,N=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,V=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,X=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),A=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:K},agent:{status:H,phase:A,running:Boolean(_.isAgentTurnActive)},model:{current:X,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:V,percent:N},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Z,userPosts:Q,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:o8(Math.round(N))},{key:"queue",label:"Queue",value:o8(Y*18)},{key:"activeChats",label:"Active chats",value:o8(q*12)},{key:"posts",label:"Timeline load",value:o8($.length*5)}]}}function TZ(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function PZ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function CZ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function yZ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function SZ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function wZ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function RZ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Z,getAgentStatus:Q,getAgentContext:Y,getAgentQueueState:q,getAgentModels:K,getActiveChatAgents:N,getChatBranches:G,getTimeline:V,rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:A,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E}=_,[f,R,p,d,T,M,F]=await Promise.allSettled([Q(j),Y(j),q(j),K(j),N(),G(Z),V(20,null,j)]);return xZ({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Z,statusPayload:R4(f),contextPayload:R4(R),queuePayload:R4(p),modelsPayload:R4(d),activeChatsPayload:R4(T),branchesPayload:R4(M),timelinePayload:R4(F),rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:A,activeModel:J,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E})}function uZ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Q,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,steerAgentQueueItem:N}=_,G=E5(j.current,$);if(!G)return;let{rowId:V}=G;Z.current.add(V),q((X)=>S4(X,V).items),N(V,l$(Q)).then(()=>{Y()}).catch((X)=>{console.warn("[queue] Failed to steer queued item:",X);let U=$3("steer");K(U.title,U.detail,"warning"),Z.current.delete(V),Y()})}function fZ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Z,currentChatJid:Q,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,clearQueuedSteerStateIfStale:N,removeAgentQueueItem:G}=_,V=E5(j.current,$);if(!V)return;let{rowId:X}=V;Z.current.add(X),N?.(V.remainingQueueCount),q((U)=>S4(U,X).items),G(X,l$(Q)).then(()=>{Y()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=$3("remove");K(L.title,L.detail,"warning"),Z.current.delete(X),Y()})}function vZ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Z}=_;if(!$||typeof $!=="object")return;let Q=F_($);if(Q)j.current.delete(Q);Z(JZ($,new Date().toISOString()))}function bZ(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Z)=>{let Q=OZ(Z);if(Q.dismissedSessionKey)$.current.add(Q.dismissedSessionKey);return Q.nextWidget})}function gZ(_){let{event:$,widget:j,currentChatJid:Z,isComposeBoxAgentActive:Q,setFloatingWidget:Y,handleCloseFloatingWidget:q,handleMessageResponse:K,showIntentToast:N,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:V}=_,X=typeof $?.kind==="string"?$.kind:"",U=F_(j);if(!X||!U)return;if(X==="widget.close"){q();return}if(X==="widget.submit"){let L=BZ($?.payload),H=zZ($?.payload),A=new Date().toISOString();if(Y((J)=>EZ(J,U,{kind:X,payload:$?.payload||null,submittedAt:A,submissionText:L})),!L){if(N("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)q();return}(async()=>{try{let J=await G("default",L,null,[],Q?"queue":null,Z);K(J),Y((D)=>_3(D,U,{submittedAt:A,submissionText:L,queued:J?.queued||null}));let W=TZ(J?.queued);if(N(W.title,W.detail,W.kind,W.durationMs),H)q()}catch(J){Y((D)=>_3(D,U,{submittedAt:A,submissionText:L,errorMessage:J?.message||"Could not send the widget message."}));let W=PZ(J?.message);N(W.title,W.detail,W.kind,W.durationMs)}})();return}if(X==="widget.ready"||X==="widget.request_refresh"){let L=new Date().toISOString(),H=CZ($?.payload||null,j?.runtimeState?.refreshCount);if(Y((A)=>kZ(A,U,{kind:X,payload:$?.payload||null,eventAt:L,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),X==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let A=await V($?.payload||null);Y((W)=>MZ(W,U,{dashboard:A,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let J=yZ();N(J.title,J.detail,J.kind,J.durationMs)}catch(A){Y((W)=>IZ(W,U,{errorMessage:A?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let J=SZ(A?.message);N(J.title,J.detail,J.kind,J.durationMs)}})();else{let A=wZ();N(A.title,A.detail,A.kind,A.durationMs)}}}var YG=400,j3=60,mZ=220,Z3="mdPreviewHeight";function qG(){try{let _=localStorage.getItem(Z3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=j3?$:mZ}catch{return mZ}}function s8({getContent:_,path:$,onClose:j}){let[Z,Q]=g(""),[Y,q]=g(qG),K=I(null),N=I(null),G=I(""),V=I(_);return V.current=_,b(()=>{let L=()=>{let A=V.current?.()||"";if(A===G.current)return;G.current=A;try{let J=z_(A,null,{sanitize:!1});Q(J)}catch{Q('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let H=setInterval(L,YG);return()=>clearInterval(H)},[]),b(()=>{if(K.current&&Z)B4(K.current).catch(()=>{})},[Z]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let H=L.clientY,A=N.current?.offsetHeight||Y,J=N.current?.parentElement,W=J?J.offsetHeight*0.7:500,D=L.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(R)=>{let p=Math.min(Math.max(A-(R.clientY-H),j3),W);q(p)},f=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",f)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",f)}}
            onTouchStart=${(L)=>{L.preventDefault();let H=L.touches[0];if(!H)return;let A=H.clientY,J=N.current?.offsetHeight||Y,W=N.current?.parentElement,D=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let f=(p)=>{let d=p.touches[0];if(!d)return;p.preventDefault();let T=Math.min(Math.max(J-(d.clientY-A),j3),D);q(T)},R=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",f),document.removeEventListener("touchend",R),document.removeEventListener("touchcancel",R)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",R),document.addEventListener("touchcancel",R)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Y+"px"}}>
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
                ref=${K}
                dangerouslySetInnerHTML=${{__html:Z}}
            />
        </div>
    `}function hZ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function KG(_){return _==="error"?"Could not open branch window":"Opening branch…"}function pZ(_){return B`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${KG(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function cZ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Z,panePopoutHasMenuActions:Q,panePopoutTitle:Y,tabStripTabs:q,tabStripActiveId:K,handleTabActivate:N,previewTabs:G,handleTabTogglePreview:V,editorContainerRef:X,getPaneContent:U,panePopoutPath:L}=_;return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Z&&B`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Q?B`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${Y}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${q.length>1&&B`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${q.map((H)=>B`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${H.id===K?" active":""}`}
                              onClick=${(A)=>{N(H.id),A.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${H.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${K&&G.has(K)&&B`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(H)=>{V(K),H.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:B`
                <div class="pane-popout-controls-label" aria-label=${Y}>${Y}</div>
              `}
          </div>
        `}
        ${j?B`<div class="editor-pane-host" ref=${X}></div>`:B`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${L||"No pane path provided."}</p>
            </div>
          `}
        ${j&&K&&G.has(K)&&B`
          <${s8}
            getContent=${U}
            path=${K}
            onClose=${()=>V(K)}
          />
        `}
      </div>
    </div>
  `}function a8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function NG(_,$){let j=a8(_),Z=a8($);if(!Z)return!1;return j.startsWith(Z)||j.includes(Z)}function Q3(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function Y3(_,$,j=Date.now(),Z=700){let Q=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Q.value||!Number.isFinite(Q.updatedAt)||j-Q.updatedAt>Z?Y:`${Q.value}${Y}`,updatedAt:j}}function GG(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Q=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Q+q)%j);return Y}function XG(_,$,j=0,Z=(Q)=>Q){let Q=a8($);if(!Q)return-1;let Y=Array.isArray(_)?_:[],q=GG(Y.length,j),K=Y.map((N)=>a8(Z(N)));for(let N of q)if(K[N].startsWith(Q))return N;for(let N of q)if(K[N].includes(Q))return N;return-1}function q3(_,$,j=-1,Z=(Q)=>Q){let Q=Array.isArray(_)?_:[];if(j>=0&&j<Q.length){let Y=Z(Q[j]);if(NG(Y,$))return j}return XG(Q,$,0,Z)}function t8(_){return String(_||"").trim().toLowerCase()}function K3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return t8($[1]||"")}function VG(_){let $=new Set,j=[];for(let Z of Array.isArray(_)?_:[]){let Q=t8(Z?.agent_name);if(!Q||$.has(Q))continue;$.add(Q),j.push(Z)}return j}function lZ(_,$,j={}){let Z=K3($);if(Z==null)return[];let Q=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return VG(_).filter((Y)=>{if(Q&&Y?.chat_jid===Q)return!1;return t8(Y?.agent_name).startsWith(Z)})}function N3(_){let $=t8(_);return $?`@${$} `:""}function nZ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function m_({prefix:_="file",label:$,title:j,onRemove:Z,onClick:Q,removeTitle:Y="Remove",icon:q="file"}){let K=`${_}-file-pill`,N=`${_}-file-name`,G=`${_}-file-remove`,V=q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${K} title=${j||$} onClick=${Q}>
      ${V}
      <span class=${N}>${$}</span>
      ${Z&&B`
        <button
          class=${G}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),Z()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var UG=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function LG({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Z=_.tokens,Q=_.contextWindow,Y="Compact context",K=`${Z!=null?`Context: ${dZ(Z)} / ${dZ(Q)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,N=9,G=2*Math.PI*9,V=j/100*G,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${X}
                    stroke-width="2.5"
                    stroke-dasharray=${`${V} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function dZ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function WG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Q.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Q.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Q}}function BG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Q.push(V[1])}else if(!G.trim())break;else break}if(Q.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Q}}function zG(_){let $=WG(_||""),j=BG($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function G3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Z}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Q)=>{let Y=typeof Q?.content==="string"?Q.content:"",q=zG(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&B`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>B`
                                        <${m_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let N=K.split("/").pop()||K;return B`
                                            <${m_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${N}
                                                title=${K}
                                                onClick=${()=>Z?.(K)}
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
                                onClick=${()=>$?.(Q)}
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
                                onClick=${()=>j?.(Q)}
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
    `}function iZ({onPost:_,onFocus:$,searchMode:j,searchScope:Z="current",onSearch:Q,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:K,fileRefs:N=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:X=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:H=null,modelUsage:A=null,thinkingLevel:J=null,supportsThinking:W=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:f=!1,notificationPermission:R="default",onToggleNotifications:p,onModelChange:d,onModelStateChange:T,activeEditorPath:M=null,onAttachEditorFile:F,onOpenFilePill:x,followupQueueItems:v=[],onInjectQueuedFollowup:s,onRemoveQueuedFollowup:m,onSubmitIntercept:a,onMessageResponse:o,onPopOutChat:_0,isAgentActive:q0=!1,activeChatAgents:Q0=[],currentChatJid:K0="web:default",connectionStatus:W0="connected",onSetFileRefs:U0,onSetMessageRefs:u0,onSubmitError:k0,onSwitchChat:O0,onRenameSession:g0,isRenameSessionInProgress:f0=!1,onCreateSession:p0,onDeleteSession:l0,onRestoreSession:D0,showQueueStack:n0=!0,statusNotice:B0=null}){let[I0,d0]=g(""),[o0,w1]=g(""),[q1,c0]=g([]),[U1,$1]=g(!1),[s0,V0]=g([]),[w0,_1]=g(0),[r,Y0]=g(!1),[h,i]=g([]),[z0,A0]=g(0),[M0,F0]=g(!1),[T0,v0]=g(!1),[L0,y0]=g(!1),[H0,j0]=g(!1),[y,t]=g([]),[X0,J0]=g(0),[b0,a0]=g(0),[K1,D1]=g(!1),[f1,S_]=g(0),[t1,v1]=g(null),[n1,p1]=g(()=>Date.now()),t0=I(null),d1=I(null),a_=I(null),e1=I(null),t_=I(null),h_=I(null),A1=I(null),i1=I(null),E1=I({value:"",updatedAt:0}),L1=I(0),W1=I(!1),X_=200,V_=(z)=>{let w=new Set,l=[];for(let c of z||[]){if(typeof c!=="string")continue;let x0=c.trim();if(!x0||w.has(x0))continue;w.add(x0),l.push(x0)}return l},I1=()=>{let z=B_("piclaw_compose_history");if(!z)return[];try{let w=JSON.parse(z);if(!Array.isArray(w))return[];return V_(w)}catch{return[]}},r1=(z)=>{Q1("piclaw_compose_history",JSON.stringify(z))},Y1=I(I1()),x1=I(-1),__=I(""),b1=I0.trim()||q1.length>0||N.length>0||X.length>0,e_=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),H_=typeof window<"u"&&typeof Notification<"u",_4=typeof window<"u"?Boolean(window.isSecureContext):!1,z4=H_&&_4&&R!=="denied",O_=R==="granted"&&f,w_=y4(B0),u4=b8(B0),f4=typeof B0?.detail==="string"&&B0.detail.trim()?B0.detail.trim():"",j1=w_?g8(B0,n1):null,k1=O_?"Disable notifications":"Enable notifications",F4=q1.length>0||N.length>0||X.length>0,$_=W0==="disconnected"?"Reconnecting":String(W0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),D_=W0==="disconnected"?"Reconnecting":`Connection: ${$_}`,c1=(Array.isArray(Q0)?Q0:[]).filter((z)=>!z?.archived_at),J1=(()=>{for(let z of Array.isArray(Q0)?Q0:[]){let w=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(w&&w===K0)return z}return null})(),R1=Boolean(J1&&J1.chat_jid===(J1.root_chat_jid||J1.chat_jid)),N1=S0(()=>{let z=new Set,w=[];for(let l of Array.isArray(Q0)?Q0:[]){let c=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!c||c===K0||z.has(c))continue;if(!(typeof l?.agent_name==="string"?l.agent_name.trim():""))continue;z.add(c),w.push(l)}return w},[Q0,K0]),j_=N1.length>0,Z_=j_&&typeof O0==="function",Q_=j_&&typeof D0==="function",p_=Boolean(f0||W1.current),g1=!j&&typeof g0==="function"&&!p_,u1=!j&&typeof p0==="function",Y_=!j&&typeof l0==="function"&&!R1,R_=!j&&(Z_||Q_||g1||u1||Y_),B1=H||"",A_=W&&J?` (${J})`:"",G1=A_.trim()?`${J}`:"",u_=typeof A?.hint_short==="string"?A.hint_short.trim():"",E_=[G1||null,u_||null].filter(Boolean).join(" • "),v4=[B1?`Current model: ${B1}${A_}`:null,A?.plan?`Plan: ${A.plan}`:null,u_||null,A?.primary?.reset_description||null,A?.secondary?.reset_description||null].filter(Boolean),b4=T0?"Switching model…":v4.join(" • ")||`Current model: ${B1}${A_} (tap to open model picker)`,f_=(z)=>{if(!z||typeof z!=="object")return;let w=z.model??z.current;if(typeof T==="function")T({model:w??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(w&&typeof d==="function")d(w)},c_=(z)=>{let w=z||t0.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},g4=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){Y0(!1),V0([]);return}let w=z.toLowerCase().split(" ")[0];if(w.length<1){Y0(!1),V0([]);return}let l=UG.filter((c)=>c.name.startsWith(w)||c.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===w))F0(!1),i([]),V0(l),_1(0),Y0(!0);else Y0(!1),V0([])},$4=(z)=>{let w=I0,l=w.indexOf(" "),c=l>=0?w.slice(l):"",x0=z.name+c;d0(x0),Y0(!1),V0([]),requestAnimationFrame(()=>{let z1=t0.current;if(!z1)return;let T1=x0.length;z1.selectionStart=T1,z1.selectionEnd=T1,z1.focus()})},a4=(z)=>{if(K3(z)==null){F0(!1),i([]);return}let w=lZ(c1,z,{currentChatJid:K0});if(w.length>0&&!(w.length===1&&N3(w[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))Y0(!1),V0([]),i(w),A0(0),F0(!0);else F0(!1),i([])},j4=(z)=>{let w=N3(z?.agent_name);if(!w)return;d0(w),F0(!1),i([]),requestAnimationFrame(()=>{let l=t0.current;if(!l)return;let c=w.length;l.selectionStart=c,l.selectionEnd=c,l.focus()})},l_=()=>{if(j||!Z_&&!Q_&&!g1&&!u1&&!Y_)return!1;return E1.current={value:"",updatedAt:0},y0(!1),Y0(!1),V0([]),F0(!1),i([]),j0(!0),!0},o1=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!Z_&&!Q_&&!g1&&!u1&&!Y_)return;if(H0){E1.current={value:"",updatedAt:0},j0(!1);return}l_()},H4=(z)=>{let w=typeof z==="string"?z.trim():"";if(j0(!1),!w||w===K0){requestAnimationFrame(()=>t0.current?.focus());return}O0?.(w)},J4=async(z)=>{let w=typeof z==="string"?z.trim():"";if(j0(!1),!w||typeof D0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await D0(w)}catch(l){console.warn("Failed to restore session:",l),requestAnimationFrame(()=>t0.current?.focus())}},x5=(z)=>{let l=(Array.isArray(z)?z:[]).findIndex((c)=>!c?.disabled);return l>=0?l:0},O1=S0(()=>{let z=[];for(let w of N1){let l=Boolean(w?.archived_at),c=typeof w?.agent_name==="string"?w.agent_name.trim():"",x0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!c||!x0)continue;z.push({type:"session",key:`session:${x0}`,label:`@${c} — ${x0}${w?.is_active?" active":""}${l?" archived":""}`,chat:w,disabled:l?!Q_:!Z_})}if(u1)z.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(g1)z.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:p_});if(Y_)z.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return z},[N1,Q_,Z_,u1,g1,Y_,p_]),O4=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof g0!=="function"||f0||W1.current)return;W1.current=!0,j0(!1);try{await g0()}catch(w){console.warn("Failed to rename session:",w)}finally{W1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},t4=async()=>{if(typeof p0!=="function")return;j0(!1);try{await p0()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>t0.current?.focus())},q_=async()=>{if(typeof l0!=="function")return;j0(!1);try{await l0(K0)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>t0.current?.focus())},K_=(z)=>{if(j)w1(z);else d0(z),g4(z),a4(z);requestAnimationFrame(()=>c_())},Z4=(z)=>{let w=j?o0:I0,l=w&&!w.endsWith(`
`)?`
`:"",c=`${w}${l}${z}`.trimStart();K_(c)},m4=(z)=>{let w=z?.command?.model_label;if(w)return w;let l=z?.command?.message;if(typeof l==="string"){let c=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(c?.[1])return c[1].trim()}return null},h4=async(z)=>{if(j||T0)return;v0(!0);try{let w=await n4("default",z,null,[],null,K0),l=m4(w);f_({model:l??H??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let c=await R5(K0);if(c)f_(c)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{v0(!1)}},e4=async()=>{await h4("/cycle-model")},Q4=async(z)=>{if(!z||T0)return;if(await h4(`/model ${z}`))y0(!1)},k_=(z)=>{if(!z||z.disabled)return;if(z.type==="session"){let w=z.chat;if(w?.archived_at)J4(w.chat_jid);else H4(w.chat_jid);return}if(z.type==="action"){if(z.action==="new"){t4();return}if(z.action==="rename"){O4();return}if(z.action==="delete")q_()}},_5=(z)=>{z.preventDefault(),z.stopPropagation(),E1.current={value:"",updatedAt:0},j0(!1),y0((w)=>!w)},D4=async()=>{if(j)return;E?.(),await M_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},p4=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return q0?"queue":void 0},M_=async(z,w,l={})=>{let{includeMedia:c=!0,includeFileRefs:x0=!0,includeMessageRefs:z1=!0,clearAfterSubmit:T1=!0,recordHistory:C1=!0}=l||{},Y4=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:I0,c4=typeof Y4==="string"?Y4:"";if(!c4.trim()&&(c?q1.length===0:!0)&&(x0?N.length===0:!0)&&(z1?X.length===0:!0))return;Y0(!1),V0([]),F0(!1),i([]),j0(!1),v1(null);let $5=c?[...q1]:[],j5=x0?[...N]:[],q4=z1?[...X]:[],m1=c4.trim();if(C1&&m1){let A4=Y1.current,F1=V_(A4.filter((n_)=>n_!==m1));if(F1.push(m1),F1.length>200)F1.splice(0,F1.length-200);Y1.current=F1,r1(F1),x1.current=-1,__.current=""}let Z5=()=>{if(c)c0([...$5]);if(x0)U0?.(j5);if(z1)u0?.(q4);d0(m1),requestAnimationFrame(()=>c_())};if(T1)d0(""),c0([]),V?.(),L?.();(async()=>{try{if(await a?.({content:m1,submitMode:w,fileRefs:j5,messageRefs:q4,mediaFiles:$5})){_?.();return}let F1=[];for(let I_ of $5){let k4=await u6(I_);F1.push(k4.id)}let n_=j5.length?`Files:
${j5.map((I_)=>`- ${I_}`).join(`
`)}`:"",Q5=q4.length?`Referenced messages:
${q4.map((I_)=>`- message:${I_}`).join(`
`)}`:"",Z8=F1.length?`Attachments:
${F1.map((I_,k4)=>{let q6=$5[k4]?.name||`attachment-${k4+1}`;return`- attachment:${I_} (${q6})`}).join(`
`)}`:"",Y5=[m1,n_,Q5,Z8].filter(Boolean).join(`

`),E4=await n4("default",Y5,null,F1,p4(w),K0);if(o?.(E4),E4?.command){f_({model:E4.command.model_label??H??null,thinking_level:E4.command.thinking_level,supports_thinking:E4.command.supports_thinking});try{let I_=await R5(K0);if(I_)f_(I_)}catch{}}_?.()}catch(A4){if(T1)Z5();let F1=A4?.message||"Failed to send message.";v1(F1),k0?.(F1),console.error("Failed to post:",A4)}})()},O=(z)=>{s?.(z)},k=P((z)=>{if(j||!L0&&!H0||z?.isComposing)return!1;let w=()=>{z.preventDefault?.(),z.stopPropagation?.()},l=()=>{E1.current={value:"",updatedAt:0}};if(z.key==="Escape"){if(w(),l(),L0)y0(!1);if(H0)j0(!1);return!0}if(L0){if(z.key==="ArrowDown"){if(w(),l(),y.length>0)J0((c)=>(c+1)%y.length);return!0}if(z.key==="ArrowUp"){if(w(),l(),y.length>0)J0((c)=>(c-1+y.length)%y.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&y.length>0)return w(),l(),Q4(y[Math.max(0,Math.min(X0,y.length-1))]),!0;if(Q3(z)&&y.length>0){w();let c=Y3(E1.current,z.key);E1.current=c;let x0=q3(y,c.value,X0,(z1)=>z1);if(x0>=0)J0(x0);return!0}}if(H0){if(z.key==="ArrowDown"){if(w(),l(),O1.length>0)a0((c)=>(c+1)%O1.length);return!0}if(z.key==="ArrowUp"){if(w(),l(),O1.length>0)a0((c)=>(c-1+O1.length)%O1.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&O1.length>0)return w(),l(),k_(O1[Math.max(0,Math.min(b0,O1.length-1))]),!0;if(Q3(z)&&O1.length>0){w();let c=Y3(E1.current,z.key);E1.current=c;let x0=q3(O1,c.value,b0,(z1)=>z1.label);if(x0>=0)a0(x0);return!0}}return!1},[j,L0,H0,y,X0,O1,b0,Q4]),u=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),w1(""),K?.();return}if(k(z))return;let w=t0.current?.value??(j?o0:I0);if(nZ(z,w,{searchMode:j,showSessionSwitcherButton:R_})){z.preventDefault(),l_();return}if(M0&&h.length>0){let l=t0.current?.value??(j?o0:I0);if(!String(l||"").match(/^@([a-zA-Z0-9_-]*)$/))F0(!1),i([]);else{if(z.key==="ArrowDown"){z.preventDefault(),A0((c)=>(c+1)%h.length);return}if(z.key==="ArrowUp"){z.preventDefault(),A0((c)=>(c-1+h.length)%h.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),j4(h[z0]);return}if(z.key==="Escape"){z.preventDefault(),F0(!1),i([]);return}}}if(r&&s0.length>0){let l=t0.current?.value??(j?o0:I0);if(!String(l||"").startsWith("/"))Y0(!1),V0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),_1((c)=>(c+1)%s0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),_1((c)=>(c-1+s0.length)%s0.length);return}if(z.key==="Tab"){z.preventDefault(),$4(s0[w0]);return}if(z.key==="Enter"&&!z.shiftKey){if(!w.includes(" ")){z.preventDefault();let x0=s0[w0];Y0(!1),V0([]),M_(x0.name);return}}if(z.key==="Escape"){z.preventDefault(),Y0(!1),V0([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let l=t0.current;if(!l)return;let c=l.value||"",x0=l.selectionStart===0&&l.selectionEnd===0,z1=l.selectionStart===c.length&&l.selectionEnd===c.length;if(z.key==="ArrowUp"&&x0||z.key==="ArrowDown"&&z1){let T1=Y1.current;if(!T1.length)return;z.preventDefault();let C1=x1.current;if(z.key==="ArrowUp"){if(C1===-1)__.current=c,C1=T1.length-1;else if(C1>0)C1-=1;x1.current=C1,K_(T1[C1]||"")}else{if(C1===-1)return;if(C1<T1.length-1)C1+=1,x1.current=C1,K_(T1[C1]||"");else x1.current=-1,K_(__.current||""),__.current=""}requestAnimationFrame(()=>{let Y4=t0.current;if(!Y4)return;let c4=Y4.value.length;Y4.selectionStart=c4,Y4.selectionEnd=c4});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){if(z.preventDefault(),j){if(w.trim())Q?.(w.trim(),Z)}else M_(w,"steer");return}if(z.key==="Enter"&&!z.shiftKey)if(z.preventDefault(),j){if(w.trim())Q?.(w.trim(),Z)}else M_(w)},S=(z)=>{let w=Array.from(z||[]).filter((l)=>l instanceof File&&!String(l.name||"").startsWith(".DS_Store"));if(!w.length)return;c0((l)=>[...l,...w]),v1(null)},n=(z)=>{S(z.target.files),z.target.value=""},Z0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),L1.current+=1,$1(!0)},N0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),L1.current=Math.max(0,L1.current-1),L1.current===0)$1(!1)},G0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";$1(!0)},$0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),L1.current=0,$1(!1),S(z.dataTransfer?.files||[])},P0=(z)=>{if(j)return;let w=z.clipboardData?.items;if(!w||!w.length)return;let l=[];for(let c of w){if(c.kind!=="file")continue;let x0=c.getAsFile?.();if(x0)l.push(x0)}if(l.length>0)z.preventDefault(),S(l)},P1=(z)=>{c0((w)=>w.filter((l,c)=>c!==z))},s1=()=>{v1(null),c0([]),V?.(),L?.()},N_=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:w,longitude:l,accuracy:c}=z.coords,x0=`${w.toFixed(5)}, ${l.toFixed(5)}`,z1=Number.isFinite(c)?` ±${Math.round(c)}m`:"",T1=`https://maps.google.com/?q=${w},${l}`,C1=`Location: ${x0}${z1} ${T1}`;Z4(C1)},(z)=>{let w=z?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};b(()=>{if(!L0)return;E1.current={value:"",updatedAt:0},D1(!0),R5(K0).then((z)=>{let w=Array.isArray(z?.models)?z.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];w.sort((l,c)=>l.localeCompare(c,void 0,{sensitivity:"base"})),t(w),f_(z)}).catch((z)=>{console.warn("Failed to load model list:",z),t([])}).finally(()=>{D1(!1)})},[L0,H]),b(()=>{if(j)y0(!1),j0(!1),Y0(!1),V0([]),F0(!1),i([])},[j]),b(()=>{if(H0&&!R_)j0(!1)},[H0,R_]),b(()=>{if(!L0)return;let z=y.findIndex((w)=>w===H);J0(z>=0?z:0)},[L0,y,H]),b(()=>{if(!H0)return;a0(x5(O1)),E1.current={value:"",updatedAt:0}},[H0,K0]),b(()=>{if(!L0)return;let z=(w)=>{let l=e1.current,c=t_.current,x0=w.target;if(l&&l.contains(x0))return;if(c&&c.contains(x0))return;y0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[L0]),b(()=>{if(!H0)return;let z=(w)=>{let l=h_.current,c=A1.current,x0=w.target;if(l&&l.contains(x0))return;if(c&&c.contains(x0))return;j0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[H0]),b(()=>{if(j||!L0&&!H0)return;let z=(w)=>{k(w)};return document.addEventListener("keydown",z,!0),()=>document.removeEventListener("keydown",z,!0)},[j,L0,H0,k]),b(()=>{if(!L0)return;let z=e1.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[L0,X0,y]),b(()=>{if(!H0)return;let z=h_.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[H0,b0,O1.length]),b(()=>{let z=()=>{let z1=i1.current?.clientWidth||0;S_((T1)=>T1===z1?T1:z1)};z();let w=i1.current,l=0,c=()=>{if(l)cancelAnimationFrame(l);l=requestAnimationFrame(()=>{l=0,z()})},x0=null;if(w&&typeof ResizeObserver<"u")x0=new ResizeObserver(()=>c()),x0.observe(w);if(typeof window<"u")window.addEventListener("resize",c);return()=>{if(l)cancelAnimationFrame(l);if(x0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",c)}},[j,H,J1?.agent_name,R_,D?.percent]);let T5=(z)=>{let w=z.target.value;if(v1(null),H0)j0(!1);c_(z.target),K_(w)};return b(()=>{requestAnimationFrame(()=>c_())},[I0,o0,j]),b(()=>{if(!w_)return;p1(Date.now());let z=setInterval(()=>p1(Date.now()),1000);return()=>clearInterval(z)},[w_,B0?.started_at,B0?.startedAt]),b(()=>{if(j)return;a4(I0)},[c1,K0,I0,j]),B`
        <div class="compose-box">
            ${n0&&!j&&B`
                <${G3}
                    items=${v}
                    onInjectQueuedFollowup=${O}
                    onRemoveQueuedFollowup=${m}
                    onOpenFilePill=${x}
                />
            `}
            ${B0&&B`
                <div
                    class=${`compose-inline-status${w_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${f4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${u4}</span>
                        ${j1&&B`<span class="compose-inline-status-elapsed">${j1}</span>`}
                    </div>
                    ${f4&&B`<div class="compose-inline-status-detail">${f4}</div>`}
                </div>
            `}
            ${t1&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${t1}</div>
            `}
            <div
                class=${`compose-input-wrapper${U1?" drag-active":""}`}
                onDragEnter=${Z0}
                onDragOver=${G0}
                onDragLeave=${N0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${F4&&B`
                        <div class="compose-file-refs">
                            ${X.map((z)=>{return B`
                                    <${m_}
                                        key=${"msg-"+z}
                                        prefix="compose"
                                        label=${"msg:"+z}
                                        title=${"Message reference: "+z}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(z)}
                                    />
                                `})}
                            ${N.map((z)=>{let w=z.split("/").pop()||z;return B`
                                    <${m_}
                                        prefix="compose"
                                        label=${w}
                                        title=${z}
                                        onClick=${()=>x?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(z)}
                                    />
                                `})}
                            ${q1.map((z,w)=>{let l=z?.name||`attachment-${w+1}`;return B`
                                    <${m_}
                                        key=${l+w}
                                        prefix="compose"
                                        label=${l}
                                        title=${l}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>P1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${s1}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof _0==="function"&&B`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>_0?.()}
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
                        ref=${t0}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?o0:I0}
                        onInput=${T5}
                        onKeyDown=${u}
                        onPaste=${P0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${M0&&h.length>0&&B`
                        <div class="slash-autocomplete" ref=${a_}>
                            ${h.map((z,w)=>B`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${w===z0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),j4(z)}}
                                    onMouseEnter=${()=>A0(w)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${r&&s0.length>0&&B`
                        <div class="slash-autocomplete" ref=${d1}>
                            ${s0.map((z,w)=>B`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${w===w0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),$4(z)}}
                                    onMouseEnter=${()=>_1(w)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${L0&&!j&&B`
                        <div class="compose-model-popup" ref=${e1} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${K1&&B`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!K1&&y.length===0&&B`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!K1&&y.map((z,w)=>B`
                                    <button
                                        key=${z}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${X0===w?" active":""}${H===z?" current-model":""}`}
                                        onClick=${()=>{Q4(z)}}
                                        disabled=${T0}
                                    >
                                        ${z}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{e4()}}
                                    disabled=${T0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${H0&&!j&&B`
                        <div class="compose-model-popup" ref=${h_} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return Aj(J1,K0)})()}
                                    </div>
                                `}
                                ${!j_&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${j_&&N1.map((z,w)=>{let l=Boolean(z.archived_at),x0=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!l&&typeof l0==="function",z1=c8(z,{currentChatJid:K0});return B`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${l?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${l?" archived":""}${b0===w?" active":""}`}
                                                onClick=${()=>{if(l){J4(z.chat_jid);return}H4(z.chat_jid)}}
                                                disabled=${l?!Q_:!Z_}
                                                title=${l?`Restore archived ${`@${z.agent_name}`}`:`Switch to ${`@${z.agent_name}`}`}
                                            >
                                                ${z1}
                                            </button>
                                            ${x0&&B`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${z.agent_name}`}
                                                    onClick=${(T1)=>{T1.stopPropagation(),j0(!1),l0(z.chat_jid)}}
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
                            ${(u1||g1||Y_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${u1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${O1.findIndex((z)=>z.key==="action:new")===b0?" active":""}`}
                                            onClick=${()=>{t4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${g1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${O1.findIndex((z)=>z.key==="action:rename")===b0?" active":""}`}
                                            onClick=${(z)=>{O4(z)}}
                                            title="Rename the current branch handle"
                                            disabled=${p_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Y_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${O1.findIndex((z)=>z.key==="action:delete")===b0?" active":""}`}
                                            onClick=${()=>{q_()}}
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
                <div class="compose-footer" ref=${i1}>
                    ${!j&&H&&B`
                    <div class="compose-meta-row">
                        ${!j&&H&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${t_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${b4}
                                    aria-label="Open model picker"
                                    onClick=${_5}
                                    disabled=${T0}
                                >
                                    ${T0?"Switching…":B1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!T0&&E_&&B`
                                        <span class="compose-model-usage-hint" title=${b4}>
                                            ${E_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&B`
                            <${LG} usage=${D} onCompact=${D4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${R_&&B`
                        ${J1?.agent_name&&B`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${J1.chat_jid||K0}
                                aria-label=${`Manage sessions for @${J1.agent_name}`}
                                onClick=${o1}
                            >@${J1.agent_name}</button>
                        `}
                        <button
                            ref=${A1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${H0?" active":""}`}
                            onClick=${o1}
                            title=${H0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${H0?"true":"false"}
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
                                onChange=${(z)=>Y?.(z.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:q}
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
                    ${e_&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${N_}
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
                    ${z4&&!j&&B`
                        <button
                            class=${`icon-btn notification-btn${O_?" active":""}`}
                            onClick=${p}
                            title=${k1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&B`
                        ${M&&F&&B`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${F}
                                title=${`Attach open file: ${M}`}
                                type="button"
                                disabled=${N.includes(M)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${n} />
                        </label>
                    `}
                    ${(W0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${W0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${W0}" title=${D_}>
                                    ${$_}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{M_()}}
                                    disabled=${!b1}
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
    `}function rZ({session:_,onClose:$,onInject:j,onRetry:Z}){let Q=I(null),Y=I(null),q=_?.thinking?o5(_.thinking):"",K=_?.answer?z_(_.answer,null,{sanitize:!1}):"";if(b(()=>{if(Q.current&&q)B4(Q.current).catch(()=>{})},[q]),b(()=>{if(Y.current&&K)B4(Y.current).catch(()=>{})},[K]),!_)return null;let N=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),X=J9(_),U=O9(_),L=!N&&G,H=N?"Thinking…":_.status==="error"?"Error":"Done";return B`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${H}</span>
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
            ${V&&B`
                <details class="btw-block btw-thinking" open=${N?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Q}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${X&&B`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${U&&B`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&B`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Z?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!L}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}function oZ({widget:_,onClose:$,onWidgetEvent:j}){let Z=I(null),Q=I(!1),Y=S0(()=>HZ(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(b(()=>{if(!_)return;let W=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),b(()=>{Q.current=!1},[Y]),b(()=>{if(!_)return;let W=Z.current;if(!W)return;let D=(d)=>{let T=r8(_),M=d==="widget.init"?d8(_):i8(_);try{W.name=T}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:d,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},f=()=>{Q.current=!0,E()};W.addEventListener("load",f);let p=[0,40,120,300,800].map((d)=>setTimeout(E,d));return()=>{W.removeEventListener("load",f),p.forEach((d)=>clearTimeout(d))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),b(()=>{if(!_)return;let W=Z.current;if(!W?.contentWindow)return;let D=r8(_),E=i8(_);try{W.name=D}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),b(()=>{if(!_)return;let W=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let f=Z.current,R=F_(_),p=F_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(p&&R&&p!==R)return;if(!p&&f?.contentWindow&&D.source!==f.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",V=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=V==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!Y,A=FZ(_),J=WZ(_);return B`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${N}
                onClick=${(W)=>W.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${N}</div>
                        ${(G||L)&&B`
                            <div class="floating-widget-subtitle">${G||L}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${H?B`<div class="floating-widget-empty">${A}</div>`:B`
                            <iframe
                                ref=${Z}
                                class="floating-widget-frame"
                                title=${N}
                                name=${r8(_)}
                                sandbox=${J}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var sZ="PiClaw";function X3(_,$,j=!1){let Z=_||"PiClaw",Q=Z.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Q.charCodeAt(0)%Y.length,K=Y[q],N=Z.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",V=G?G:null,X=j||N==="PiClaw".toLowerCase()||N==="pi";return{letter:Q,color:K,image:V||(X?"/static/icon-192.png":null)}}function aZ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function tZ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function eZ(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(K||q&&q!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Z=0;for(let Y=0;Y<j.length;Y+=1)Z=(Z*31+j.charCodeAt(Y))%2147483647;let Q=Math.abs(Z)%$.length;return $[Q]}var FG=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function V3({status:_,draft:$,plan:j,thought:Z,pendingRequest:Q,intent:Y,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:N,turnId:G,steerQueued:V,onPanelToggle:X,showCorePanels:U=!0,showExtensionPanels:L=!0}){let J=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let z0=r,A0=z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:z0,totalLines:A0,fullText:z0}}let Y0=r.text||"",h=r.fullText||r.full_text||Y0,i=Number.isFinite(r.totalLines)?r.totalLines:h?h.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Y0,totalLines:i,fullText:h}},W=160,D=(r)=>String(r||"").replace(/<\/?internal>/gi,""),E=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},f=(r,Y0,h)=>{let i=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(h)?h:0,visibleLines:0};let z0=i.split(`
`),A0=z0.length>Y0?z0.slice(0,Y0).join(`
`):i,M0=Number.isFinite(h)?h:z0.reduce((v0,L0)=>v0+E(L0),0),F0=A0?A0.split(`
`).reduce((v0,L0)=>v0+E(L0),0):0,T0=Math.max(M0-F0,0);return{text:A0,omitted:T0,totalLines:M0,visibleLines:F0}},R=J(j),p=J(Z),d=J($),T=Boolean(R.text)||R.totalLines>0,M=Boolean(p.text)||p.totalLines>0,F=Boolean(d.fullText?.trim()||d.text?.trim()),x=Boolean(_||F||T||M||Q||Y),v=Array.isArray(q)&&q.length>0;if((!U||!x)&&(!L||!v))return null;let[s,m]=g(new Set),[a,o]=g(null),[_0,q0]=g(()=>Date.now()),Q0=(r)=>m((Y0)=>{let h=new Set(Y0),i=!h.has(r);if(i)h.add(r);else h.delete(r);if(typeof X==="function")X(r,i);return h});b(()=>{m(new Set),o(null)},[G]);let K0=y4(_);b(()=>{if(!K0)return;q0(Date.now());let r=setInterval(()=>q0(Date.now()),1000);return()=>clearInterval(r)},[K0,_?.started_at,_?.startedAt]);let W0=_?.turn_id||G,U0=eZ(W0),u0=V?"turn-dot turn-dot-queued":"turn-dot",k0=(r)=>r,O0=Boolean(_?.last_activity||_?.lastActivity),g0=(r)=>r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":U0,f0=Y?.kind||"info",p0=g0(f0),l0=g0(_?.kind||(K0?"warning":"info")),D0="",n0=_?.title,B0=_?.status;if(_?.type==="plan")D0=n0?`Planning: ${n0}`:"Planning...";else if(_?.type==="tool_call")D0=n0?`Running: ${n0}`:"Running tool...";else if(_?.type==="tool_status")D0=n0?`${n0}: ${B0||"Working..."}`:B0||"Working...";else if(_?.type==="error")D0=n0||"Agent error";else D0=n0||B0||"Working...";if(O0)D0="Last activity just now";let I0=({panelTitle:r,text:Y0,fullText:h,totalLines:i,maxLines:z0,titleClass:A0,panelKey:M0})=>{let F0=s.has(M0),T0=h||Y0||"",v0=M0==="thought"||M0==="draft"?D(T0):T0,L0=typeof z0==="number",y0=F0&&L0,H0=L0?f(v0,z0,i):{text:v0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!v0&&!(Number.isFinite(H0.totalLines)&&H0.totalLines>0))return null;let j0=`agent-thinking-body${L0?" agent-thinking-body-collapsible":""}`,y=L0?`--agent-thinking-collapsed-lines: ${z0};`:"";return B`
            <div
                class="agent-thinking"
                data-expanded=${F0?"true":"false"}
                data-collapsible=${L0?"true":"false"}
                style=${U0?`--turn-color: ${U0};`:""}
            >
                <div class="agent-thinking-title ${A0||""}">
                    ${U0&&B`<span class=${u0} aria-hidden="true"></span>`}
                    ${r}
                    ${y0&&B`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${r} panel`}
                            onClick=${()=>Q0(M0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:o5(v0)}}
                />
                ${!F0&&H0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Q0(M0)}>
                        ▸ ${H0.omitted} more lines
                    </button>
                `}
                ${F0&&H0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Q0(M0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},d0=Q?.tool_call?.title,o0=d0?`Awaiting approval: ${d0}`:"Awaiting approval",w1=K0?g8(_,_0):null,q1=(r,Y0,h=null)=>{let i=b8(r);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Y0?`--turn-color: ${Y0};`:""}
                title=${r?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Y0&&B`<span class=${u0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${h&&B`<span class="agent-status-elapsed">${h}</span>`}
                </div>
                ${r.detail&&B`<div class="agent-thinking-body">${r.detail}</div>`}
            </div>
        `},c0=(r,Y0,h,i,z0,A0,M0,F0=8,T0=8)=>{let v0=Math.max(z0-i,0.000000001),L0=Math.max(Y0-F0*2,1),y0=Math.max(h-T0*2,1),H0=Math.max(M0-A0,1),j0=M0===A0?Y0/2:F0+(r.run-A0)/H0*L0,y=T0+(y0-(r.value-i)/v0*y0);return{x:j0,y}},U1=(r,Y0,h,i,z0,A0,M0,F0=8,T0=8)=>{if(!Array.isArray(r)||r.length===0)return"";return r.map((v0,L0)=>{let{x:y0,y:H0}=c0(v0,Y0,h,i,z0,A0,M0,F0,T0);return`${L0===0?"M":"L"} ${y0.toFixed(2)} ${H0.toFixed(2)}`}).join(" ")},$1=(r,Y0="")=>{if(!Number.isFinite(r))return"—";return`${Math.abs(r)>=100?r.toFixed(0):r.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Y0}`},s0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],V0=(r,Y0)=>{let h=s0;if(!Array.isArray(h)||h.length===0)return"var(--accent-color)";if(h.length===1||!Number.isFinite(Y0)||Y0<=1)return h[0];let z0=Math.max(0,Math.min(Number.isFinite(r)?r:0,Y0-1))/Math.max(1,Y0-1)*(h.length-1),A0=Math.floor(z0),M0=Math.min(h.length-1,A0+1),F0=z0-A0,T0=h[A0],v0=h[M0];if(!v0||A0===M0||F0<=0.001)return T0;if(F0>=0.999)return v0;let L0=Math.round((1-F0)*1000)/10,y0=Math.round(F0*1000)/10;return`color-mix(in oklab, ${T0} ${L0}%, ${v0} ${y0}%)`},w0=(r,Y0="autoresearch")=>{let h=Array.isArray(r)?r.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],i=h.map((j0,y)=>({...j0,color:V0(y,h.length)}));if(i.length===0)return null;let z0=320,A0=120,M0=i.flatMap((j0)=>j0.points),F0=M0.map((j0)=>j0.value),T0=M0.map((j0)=>j0.run),v0=Math.min(...F0),L0=Math.max(...F0),y0=Math.min(...T0),H0=Math.max(...T0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${z0} ${A0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((j0)=>{let y=j0?.key||j0?.label||"series",t=a?.panelKey===Y0&&a?.seriesKey===y;return B`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${t?" is-hovered":""}`}
                                        d=${U1(j0.points,z0,A0,v0,L0,y0,H0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>o({panelKey:Y0,seriesKey:y})}
                                        onMouseLeave=${()=>o((X0)=>X0?.panelKey===Y0&&X0?.seriesKey===y?null:X0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",t=j0?.key||j0?.label||"series";return j0.points.map((X0,J0)=>{let b0=c0(X0,z0,A0,v0,L0,y0,H0);return B`
                                    <button
                                        key=${`${t}-point-${J0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${b0.x/z0*100}%; top:${b0.y/A0*100}%;`}
                                        onMouseEnter=${()=>o({panelKey:Y0,seriesKey:t,run:X0.run,value:X0.value,unit:y})}
                                        onMouseLeave=${()=>o((a0)=>a0?.panelKey===Y0?null:a0)}
                                        onFocus=${()=>o({panelKey:Y0,seriesKey:t,run:X0.run,value:X0.value,unit:y})}
                                        onBlur=${()=>o((a0)=>a0?.panelKey===Y0?null:a0)}
                                        aria-label=${`${j0?.label||"Series"} ${$1(X0.value,y)} at run ${X0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,t=typeof j0?.unit==="string"?j0.unit:"",X0=j0?.key||j0?.label||"series",J0=a?.panelKey===Y0&&a?.seriesKey===X0?a:null,b0=J0&&Number.isFinite(J0.value)?J0.value:y,a0=J0&&typeof J0.unit==="string"?J0.unit:t,K1=J0&&Number.isFinite(J0.run)?J0.run:null;return B`
                            <div key=${`${X0}-legend`} class=${`agent-series-legend-item${J0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${K1!==null&&B`<span class="agent-series-legend-run">run ${K1}</span>`}
                                <span class="agent-series-legend-value">${$1(b0,a0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},_1=(r)=>{if(!r)return null;let Y0=typeof r?.key==="string"?r.key:`panel-${Math.random()}`,h=s.has(Y0),i=r?.title||"Extension status",z0=r?.collapsed_text||"",A0=String(r?.state||"").replace(/[-_]+/g," ").replace(/^./,(t)=>t.toUpperCase()),M0=g0(r?.state==="completed"?"success":r?.state==="failed"?"error":r?.state==="stopped"?"warning":"info"),F0=typeof r?.detail_markdown==="string"?r.detail_markdown.trim():"",T0=typeof r?.last_run_text==="string"?r.last_run_text.trim():"",v0=typeof r?.tmux_command==="string"?r.tmux_command.trim():"",L0=Array.isArray(r?.series)?r.series:[],y0=Array.isArray(r?.actions)?r.actions:[],H0=Boolean(F0||v0),j0=Boolean(F0||L0.length>0||v0),y=[i,z0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${h?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
                title=${!h?y||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?Q0(Y0):null}
                    >
                        ${M0&&B`<span class=${u0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${z0&&B`<span class="agent-thinking-title-meta">${z0}</span>`}
                    </button>
                    ${(y0.length>0||j0&&!h)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${y0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${y0.map((t)=>{let X0=`${Y0}:${t?.key||""}`,J0=K?.has?.(X0);return B`
                                            <button
                                                key=${X0}
                                                class=${`agent-thinking-action-btn${t?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>N?.(r,t)}
                                                disabled=${Boolean(J0)}
                                            >
                                                ${J0?"Working…":t?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!h&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>Q0(Y0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&h&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>Q0(Y0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${h&&B`
                    <div class=${`agent-thinking-autoresearch-layout${H0?"":" chart-only"}`}>
                        ${H0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${F0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:o5(F0)}}
                                    />
                                `}
                                ${v0&&B`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${v0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>N?.(r,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${FG}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${L0.length>0?B`
                                <div class="agent-series-chart-stack">
                                    ${w0(L0,Y0)}
                                    ${T0&&B`<div class="agent-series-chart-note">${T0}</div>`}
                                </div>
                            `:B`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return B`
        <div class="agent-status-panel">
            ${U&&Y&&q1(Y,p0)}
            ${L&&Array.isArray(q)&&q.map((r)=>_1(r))}
            ${U&&_?.type==="intent"&&q1(_,l0,w1)}
            ${U&&Q&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    <span class=${u0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${o0}</span>
                </div>
            `}
            ${U&&T&&I0({panelTitle:k0("Planning"),text:R.text,fullText:R.fullText,totalLines:R.totalLines,panelKey:"plan"})}
            ${U&&M&&I0({panelTitle:k0("Thoughts"),text:p.text,fullText:p.fullText,totalLines:p.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&F&&I0({panelTitle:k0("Draft"),text:d.text,fullText:d.fullText,totalLines:d.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${O0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    ${U0&&B`<span class=${u0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!O0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${D0}</span>
                </div>
            `}
        </div>
    `}function _Q({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Z,options:Q,chat_jid:Y}=_,q=Z?.title||"Agent Request",K=Z?.kind||"other",N=Z?.rawInput||{},G=N.command||N.commands&&N.commands[0]||null,V=N.diff||null,X=N.fileName||N.path||null,U=Z?.description||N.description||N.explanation||null,H=(Array.isArray(Z?.locations)?Z.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),A=Array.from(new Set([X,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Z,options:Q});let J=async(E)=>{try{await J8(j,E,Y||null),$()}catch(f){console.error("Failed to respond to agent request:",f)}},W=async()=>{try{await v6(q,`Auto-approved: ${q}`),await J8(j,"approved",Y||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Q&&Q.length>0;return B`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${q}</div>
                </div>
                ${(U||G||V||A.length>0)&&B`
                    <div class="agent-request-body">
                        ${U&&B`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${A.length>0&&B`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((E,f)=>B`<li key=${f}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&B`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${V&&B`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${V}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${D?Q.map((E)=>B`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>J(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>J("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>J("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var HG=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),JG=new Set(["text/markdown"]),OG=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),DG=new Set(["application/vnd.jgraph.mxfile"]);function _8(_){return typeof _==="string"?_.trim().toLowerCase():""}function AG(_){let $=_8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function EG(_){let $=_8(_);return!!$&&$.endsWith(".pdf")}function kG(_){let $=_8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function $8(_,$){let j=_8(_);if(AG($)||DG.has(j))return"drawio";if(EG($)||j==="application/pdf")return"pdf";if(kG($)||OG.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(HG.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function $Q(_){let $=_8(_);return JG.has($)}function jQ(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function MG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Z=j[1].length===3?j[1].split("").map((Q)=>`${Q}${Q}`).join(""):j[1];return{r:parseInt(Z.slice(0,2),16),g:parseInt(Z.slice(2,4),16),b:parseInt(Z.slice(4,6),16)}}function IG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Z=Number(j[1]),Q=Number(j[2]),Y=Number(j[3]);if(![Z,Q,Y].every((q)=>Number.isFinite(q)))return null;return{r:Z,g:Q,b:Y}}function ZQ(_){return MG(_)||IG(_)}function e8(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Z=$(_.g),Q=$(_.b);return 0.2126*j+0.7152*Z+0.0722*Q}function xG(_,$){let j=Math.max(e8(_),e8($)),Z=Math.min(e8(_),e8($));return(j+0.05)/(Z+0.05)}function TG(_,$,j="#ffffff"){let Z=ZQ(_);if(!Z)return j;let Q=j,Y=-1;for(let q of $){let K=ZQ(q);if(!K)continue;let N=xG(Z,K);if(N>Y)Q=q,Y=N}return Q}function U3(){let _=getComputedStyle(document.documentElement),$=(H,A)=>{for(let J of H){let W=_.getPropertyValue(J).trim();if(W)return W}return A},j=$(["--text-primary","--color-text"],"#0f1419"),Z=$(["--text-secondary","--color-text-muted"],"#536471"),Q=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),N=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=TG(K,[j,Q],j);return{fg:j,fgMuted:Z,bgPrimary:Q,bg:Y,bgEmphasis:q,accent:K,good:N,warning:G,attention:V,border:X,fontFamily:U,buttonTextColor:L}}function QQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Z,accent:Q,good:Y,warning:q,attention:K,border:N,fontFamily:G}=U3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Q,subtle:Q},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Z,foregroundColors:{default:{default:_,subtle:$},accent:{default:Q,subtle:Q},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:N},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var PG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),YQ=!1,_6=null,qQ=!1;function L3(_){_.querySelector(".adaptive-card-notice")?.remove()}function CG(_,$,j="error"){L3(_);let Z=document.createElement("div");Z.className=`adaptive-card-notice adaptive-card-notice-${j}`,Z.textContent=$,_.appendChild(Z)}function yG(_,$=(j)=>z_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function SG(_=($)=>z_($,null)){return($,j)=>{try{let Z=yG($,_);j.outputHtml=Z.outputHtml,j.didProcess=Z.didProcess}catch(Z){console.error("[adaptive-card] Failed to process markdown:",Z),j.outputHtml=String($??""),j.didProcess=!1}}}function wG(_){if(qQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=SG(),qQ=!0}async function RG(){if(YQ)return;if(_6)return _6;return _6=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{YQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),_6}function uG(){return globalThis.AdaptiveCards}function fG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function vG(_){return PG.has(_)}function B3(_){if(!Array.isArray(_))return[];return _.filter(fG)}function bG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Z=(typeof _?.url==="string"?_.url:"")||void 0,Q=_?.data??void 0;return{type:$,title:j,data:Q,url:Z,raw:_}}function W3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>W3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Z])=>`${j}: ${W3(Z)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function gG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return W3($);return typeof $==="string"?$:String($)}function mG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Z=(Q)=>{if(Array.isArray(Q))return Q.map((K)=>Z(K));if(!Q||typeof Q!=="object")return Q;let q={...Q};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=gG(q.type,j[q.id],q);for(let[K,N]of Object.entries(q))if(Array.isArray(N)||N&&typeof N==="object")q[K]=Z(N);return q};return Z(_)}function hG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function pG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function cG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Z=j&&typeof j.title==="string"?j.title.trim():"",Q=pG(_.completed_at||j?.submitted_at),Y=[Z||null,Q||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function KQ(_,$,j){if(!vG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await RG()}catch(Z){return console.error("[adaptive-card] Failed to load SDK:",Z),!1}try{let Z=uG();wG(Z);let Q=new Z.AdaptiveCard,Y=U3();Q.hostConfig=new Z.HostConfig(QQ());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:mG($.payload,q);Q.parse(K),Q.onExecuteAction=(V)=>{let X=bG(V);if(j?.onAction)L3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");CG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let N=Q.render();if(!N)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=cG($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=G.label,V.appendChild(X),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,V.appendChild(U)}_.appendChild(V)}if(L3(_),_.appendChild(N),G)hG(N);return!0}catch(Z){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Z),!1}}function j8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>j8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${j8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function NQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:j8(j)})).filter(($)=>$.value)}function lG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function z3(_){if(!Array.isArray(_))return[];return _.filter(lG)}function GQ(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Z=j8(j);return Z?`Card submission: ${$} — ${Z}`:`Card submission: ${$}`}if(typeof j==="object"){let Q=NQ(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Q.length>0?`Card submission: ${$} — ${Q.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function XQ(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=NQ(_.data),Z=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):j8(_.data)||null,Q=j.length;return{title:$,summary:Z,fields:j,fieldCount:Q,submittedAt:_.submitted_at}}function k5({children:_,className:$=""}){let j=I(null);return b(()=>{if(typeof document>"u")return;let Z=document.createElement("div");if($)Z.className=$;return document.body.appendChild(Z),j.current=Z,()=>{try{x4(null,Z)}finally{if(Z.remove(),j.current===Z)j.current=null}}},[$]),S5(()=>{let Z=j.current;if(!Z)return;return x4(_,Z),()=>{x4(null,Z)}},[_]),null}function nG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?y_($):null},{label:"Added",value:_?.created_at?o4(_.created_at):null}].filter((Z)=>Z.value)}function dG(_,$,j){let Z=encodeURIComponent($||`attachment-${_}`),Q=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Q}&name=${Z}#media=${Q}&name=${Z}`;if(j==="office"){let Y=C_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Z}`}if(j==="drawio")return`/drawio/edit.html?media=${Q}&name=${Z}&readonly=1#media=${Q}&name=${Z}&readonly=1`;return null}function VQ({mediaId:_,info:$,onClose:j}){let Z=$?.filename||`attachment-${_}`,Q=S0(()=>$8($?.content_type,Z),[$?.content_type,Z]),Y=jQ(Q),q=S0(()=>$Q($?.content_type),[$?.content_type]),[K,N]=g(Q==="text"),[G,V]=g(""),[X,U]=g(null),L=I(null),H=S0(()=>nG($),[$]),A=S0(()=>dG(_,Z,Q),[_,Z,Q]),J=S0(()=>{if(!q||!G)return"";return z_(G)},[q,G]);return b(()=>{let W=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),b(()=>{if(!L.current||!J)return;B4(L.current);return},[J]),b(()=>{let W=!1;async function D(){if(Q!=="text"){N(!1),U(null);return}N(!0),U(null);try{let E=await h6(_);if(!W)V(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)N(!1)}}return D(),()=>{W=!0}},[_,Q]),B`
        <${k5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Z}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${A&&B`
                                <a
                                    href=${A}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(W)=>W.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${C_(_)}
                                download=${Z}
                                class="attachment-preview-download"
                                onClick=${(W)=>W.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&B`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&X&&B`<div class="attachment-preview-state">${X}</div>`}
                        ${!K&&!X&&Q==="image"&&B`
                            <img class="attachment-preview-image" src=${C_(_)} alt=${Z} />
                        `}
                        ${!K&&!X&&(Q==="pdf"||Q==="office"||Q==="drawio")&&A&&B`
                            <iframe class="attachment-preview-frame" src=${A} title=${Z}></iframe>
                        `}
                        ${!K&&!X&&Q==="drawio"&&B`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!X&&Q==="text"&&q&&B`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:J}}
                            />
                        `}
                        ${!K&&!X&&Q==="text"&&!q&&B`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!K&&!X&&Q==="unsupported"&&B`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${H.map((W)=>B`
                            <div class="attachment-preview-meta-item" key=${W.label}>
                                <span class="attachment-preview-meta-label">${W.label}</span>
                                <span class="attachment-preview-meta-value">${W.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${k5}>
    `}function UQ({src:_,onClose:$}){return b(()=>{let j=(Z)=>{if(Z.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${k5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${k5}>
    `}function iG({mediaId:_,onPreview:$}){let[j,Z]=g(null);if(b(()=>{V5(_).then(Z).catch(()=>{})},[_]),!j)return null;let Q=j.filename||"file",Y=j.metadata?.size,q=Y?y_(Y):"",N=$8(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${C_(_)} download=${Q} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Q}</span>
                    <span class="file-meta-row">
                        ${q&&B`<span class="file-size">${q}</span>`}
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
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${N}
            </button>
        </div>
    `}function rG({attachment:_,onPreview:$}){let j=Number(_?.id),[Z,Q]=g(null);b(()=>{if(!Number.isFinite(j))return;V5(j).then(Q).catch(()=>{});return},[j]);let Y=Z?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?C_(j):null,N=$8(Z?.content_type,Z?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Y}>
            ${q?B`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${m_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:B`
                    <${m_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Z&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Z})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function $6({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Z}=_,Q=Z?o4(Z):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Q&&B`
                <span class="content-annotation">Updated: ${Q}</span>
            `}
        </div>
    `}function oG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Z=_.size?y_(_.size):"",Q=_.mime_type||"",Y=tG(Q),q=r4(_.uri);return B`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&B`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Q&&B`<span>${Q}</span>`}
                    ${Z&&B`<span>${Z}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function sG({block:_}){let[$,j]=g(!1),Z=_.uri||"Embedded resource",Q=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Z}
            </button>
            ${$&&B`
                ${Q&&B`<pre class="resource-embed-content">${Q}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&B`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(N),V=document.createElement("a");V.href=G,V.download=Z.split("/").pop()||"resource",V.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function aG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Z=e$(_,$),Q=UZ(_),Y=Z?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Z?.title||_.title||_.name||"Generated widget",K=Z?.description||_.description||_.subtitle||"",N=_.open_label||"Open widget",G=(V)=>{if(V.preventDefault(),V.stopPropagation(),!Z)return;j?.(Z)};return B`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${K&&B`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Q}
                    onClick=${G}
                    title=${Q?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${N}
                </button>
                <span class="generated-widget-launch-note">
                    ${Q?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function tG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function eG({preview:_}){let $=r4(_.url),j=r4(_.image,{allowDataImage:!0}),Z=j?`background-image: url('${j}')`:"",Q=_.site_name;if(!Q&&$)try{Q=new URL($).hostname}catch{Q=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Z}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Q||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&B`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function _X(_,$){return typeof _==="string"?_:""}var $X=1800,jX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,ZX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,QX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function YX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Z=document.execCommand("copy");return document.body.removeChild(j),Z}catch{return!1}}function qX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Z=[],Q=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=ZX,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=QX,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=jX,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Q(K,"idle"),q.appendChild(K);let N=async(G)=>{G.preventDefault(),G.stopPropagation();let X=Y.querySelector("code")?.textContent||"",U=await YX(X);Q(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let H=setTimeout(()=>{Q(K,"idle"),j.delete(K)},$X);j.set(K,H)};K.addEventListener("click",N),Z.push(()=>{K.removeEventListener("click",N);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Z.forEach((Y)=>Y())}}function KX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,fileRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Q.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Q.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Z),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:Q}}function NX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}if(Z===-1)return{content:_,messageRefs:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Q.push(X[1])}else if(!G.trim())break;else break}if(Q.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Z),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:Q}}function GX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Z=-1;for(let G=0;G<j.length;G+=1){let V=j[G].trim();if((V==="Images:"||V==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Z=G;break}}if(Z===-1)return{content:_,attachments:[]};let Q=[],Y=Z+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),X=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let U=X[1],L=(X[2]||"").trim()||U;Q.push({id:U,label:L,raw:V})}else Q.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(Q.length===0)return{content:_,attachments:[]};let q=j.slice(0,Z),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:Q}}function XX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function VX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Z=j.map(XX).sort((V,X)=>X.length-V.length),Q=new RegExp(`(${Z.join("|")})`,"gi"),Y=new RegExp(`^(${Z.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),N=[],G;while(G=K.nextNode())N.push(G);for(let V of N){let X=V.nodeValue;if(!X||!Q.test(X)){Q.lastIndex=0;continue}Q.lastIndex=0;let U=V.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=X.split(Q).filter((A)=>A!=="");if(L.length===0)continue;let H=q.createDocumentFragment();for(let A of L)if(Y.test(A)){let J=q.createElement("mark");J.className="search-highlight-term",J.textContent=A,H.appendChild(J)}else H.appendChild(q.createTextNode(A));V.parentNode.replaceChild(H,V)}return q.body.innerHTML}function LQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:Z,onScrollToMessage:Q,agentName:Y,agentAvatarUrl:q,userName:K,userAvatarUrl:N,userAvatarBackground:G,onDelete:V,isThreadReply:X,isThreadPrev:U,isThreadNext:L,isRemoving:H,highlightQuery:A,onFileRef:J,onOpenWidget:W}){let[D,E]=g(null),f=I(null),R=_.data,p=R.type==="agent_response",d=K||"You",T=p?Y||sZ:d,M=p?X3(Y,q,!0):X3(d,N),F=typeof G==="string"?G.trim().toLowerCase():"",x=!p&&M.image&&(F==="clear"||F==="transparent"),v=p&&Boolean(M.image),s=`background-color: ${x||v?"transparent":M.color}`,m=R.content_meta,a=Boolean(m?.truncated),o=Boolean(m?.preview),_0=a&&!o,q0=a?{originalLength:Number.isFinite(m?.original_length)?m.original_length:R.content?R.content.length:0,maxLength:Number.isFinite(m?.max_length)?m.max_length:0}:null,Q0=R.content_blocks||[],K0=R.media_ids||[],W0=_X(R.content,R.link_previews),{content:U0,fileRefs:u0}=KX(W0),{content:k0,messageRefs:O0}=NX(U0),{content:g0,attachments:f0}=GX(k0);W0=g0;let p0=B3(Q0),l0=z3(Q0),D0=p0.length===1&&typeof p0[0]?.fallback_text==="string"?p0[0].fallback_text.trim():"",n0=l0.length===1?GQ(l0[0]).trim():"",B0=Boolean(D0)&&W0?.trim()===D0||Boolean(n0)&&W0?.trim()===n0,I0=Boolean(W0)&&!_0&&!B0,d0=typeof A==="string"?A.trim():"",o0=S0(()=>{if(!W0||B0)return"";let y=z_(W0,j);return d0?VX(y,d0):y},[W0,B0,d0]),w1=(y,t)=>{y.stopPropagation(),E(C_(t))},[q1,c0]=g(null),U1=(y)=>{c0(y)},$1=(y)=>{y.stopPropagation(),V?.(_)},s0=(y,t)=>{let X0=new Set;if(!y||t.length===0)return{content:y,usedIds:X0};return{content:y.replace(/attachment:([^\s)"']+)/g,(b0,a0,K1,D1)=>{let f1=a0.replace(/^\/+/,""),t1=t.find((n1)=>n1.name&&n1.name.toLowerCase()===f1.toLowerCase()&&!X0.has(n1.id))||t.find((n1)=>!X0.has(n1.id));if(!t1)return b0;if(X0.add(t1.id),D1.slice(Math.max(0,K1-2),K1)==="](")return`/media/${t1.id}`;return t1.name||"attachment"}),usedIds:X0}},V0=[],w0=[],_1=[],r=[],Y0=[],h=[],i=[],z0=0;if(Q0.length>0)Q0.forEach((y)=>{if(y?.type==="text"&&y.annotations)i.push(y.annotations);if(y?.type==="generated_widget")h.push(y);else if(y?.type==="resource_link")r.push(y);else if(y?.type==="resource")Y0.push(y);else if(y?.type==="file"){let t=K0[z0++];if(t)w0.push(t),_1.push({id:t,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let t=K0[z0++];if(t){let X0=typeof y?.mime_type==="string"?y.mime_type:void 0;V0.push({id:t,annotations:y?.annotations,mimeType:X0}),_1.push({id:t,name:y?.name||y?.filename||y?.title})}}});else if(K0.length>0){let y=f0.length>0;K0.forEach((t,X0)=>{let J0=f0[X0]||null;if(_1.push({id:t,name:J0?.label||null}),y)w0.push(t);else V0.push({id:t,annotations:null})})}if(f0.length>0)f0.forEach((y)=>{if(!y?.id)return;let t=_1.find((X0)=>String(X0.id)===String(y.id));if(t&&!t.name)t.name=y.label});let{content:A0,usedIds:M0}=s0(W0,_1);W0=A0;let F0=V0.filter(({id:y})=>!M0.has(y)),T0=w0.filter((y)=>!M0.has(y)),v0=f0.length>0?f0.map((y,t)=>({id:y.id||`attachment-${t+1}`,label:y.label||`attachment-${t+1}`})):_1.map((y,t)=>({id:y.id,label:y.name||`attachment-${t+1}`})),L0=S0(()=>B3(Q0),[Q0]),y0=S0(()=>z3(Q0),[Q0]),H0=S0(()=>{return L0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[L0]);b(()=>{if(!f.current)return;return B4(f.current),qX(f.current)},[o0]);let j0=I(null);return b(()=>{if(!j0.current||L0.length===0)return;let y=j0.current;y.innerHTML="";for(let t of L0){let X0=document.createElement("div");y.appendChild(X0),KQ(X0,t,{onAction:async(J0)=>{if(J0.type==="Action.OpenUrl"){let b0=r4(J0.url||"");if(!b0)throw Error("Invalid URL");window.open(b0,"_blank","noopener,noreferrer");return}if(J0.type==="Action.Submit"){await f6({post_id:_.id,thread_id:R.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:t.card_id,action:{type:J0.type,title:J0.title||"",data:J0.data}});return}console.warn("[post] unsupported adaptive card action:",J0.type,J0)}}).catch((J0)=>{console.error("[post] adaptive card render error:",J0),X0.textContent=t.fallback_text||"Card failed to render."})}},[H0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${p?"agent-post":""} ${X?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${p?"agent-avatar":""} ${M.image?"has-image":""}" style=${s}>
                ${M.image?B`<img src=${M.image} alt=${T} />`:M.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${$1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${T}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Z)Z(_.id)}}>${S7(_.timestamp)}</a>
                </div>
                ${_0&&q0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${s5(q0.originalLength)} chars
                            ${q0.maxLength?B` • Display limit: ${s5(q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${o&&q0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${s5(q0.maxLength)} of ${s5(q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(u0.length>0||O0.length>0||v0.length>0)&&B`
                    <div class="post-file-refs">
                        ${O0.map((y)=>{let t=(X0)=>{if(X0.preventDefault(),X0.stopPropagation(),Q)Q(y,_.chat_jid||null);else{let J0=document.getElementById("post-"+y);if(J0)J0.scrollIntoView({behavior:"smooth",block:"center"}),J0.classList.add("post-highlight"),setTimeout(()=>J0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${t}>
                                    <${m_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${t}
                                    />
                                </a>
                            `})}
                        ${u0.map((y)=>{let t=y.split("/").pop()||y;return B`
                                <${m_}
                                    prefix="post"
                                    label=${t}
                                    title=${y}
                                    onClick=${()=>J?.(y)}
                                />
                            `})}
                        ${v0.map((y)=>B`
                            <${rG}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${U1}
                            />
                        `)}
                    </div>
                `}
                ${I0&&B`
                    <div 
                        ref=${f}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:o0}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let t=y.target.dataset.hashtag;if(t)j?.(t)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),E(y.target.src)}}
                    />
                `}
                ${L0.length>0&&B`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${y0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${y0.map((y,t)=>{let X0=XQ(y),J0=`${y.card_id}-${t}`;return B`
                                <div key=${J0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${X0.title}</span>
                                        </div>
                                    </div>
                                    ${X0.fields.length>0&&B`
                                        <div class="adaptive-card-submission-fields">
                                            ${X0.fields.map((b0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${b0.key}: ${b0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${b0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${b0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${o4(X0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${h.length>0&&B`
                    <div class="generated-widget-launches">
                        ${h.map((y,t)=>B`
                            <${aG}
                                key=${y.widget_id||y.id||`${_.id}-widget-${t}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&B`
                    ${i.map((y,t)=>B`
                        <${$6} key=${t} annotations=${y} />
                    `)}
                `}
                ${F0.length>0&&B`
                    <div class="media-preview">
                        ${F0.map(({id:y,mimeType:t})=>{let J0=typeof t==="string"&&t.toLowerCase().startsWith("image/svg")?C_(y):m6(y);return B`
                                <img 
                                    key=${y} 
                                    src=${J0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(b0)=>w1(b0,y)}
                                />
                            `})}
                    </div>
                `}
                ${F0.length>0&&B`
                    ${F0.map(({annotations:y},t)=>B`
                        ${y&&B`<${$6} key=${t} annotations=${y} />`}
                    `)}
                `}
                ${T0.length>0&&B`
                    <div class="file-attachments">
                        ${T0.map((y)=>B`
                            <${iG} key=${y} mediaId=${y} onPreview=${U1} />
                        `)}
                    </div>
                `}
                ${r.length>0&&B`
                    <div class="resource-links">
                        ${r.map((y,t)=>B`
                            <div key=${t}>
                                <${oG} block=${y} />
                                <${$6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&B`
                    <div class="resource-embeds">
                        ${Y0.map((y,t)=>B`
                            <div key=${t}>
                                <${sG} block=${y} />
                                <${$6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${R.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${R.link_previews.map((y,t)=>B`
                            <${eG} key=${t} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&B`<${UQ} src=${D} onClose=${()=>E(null)} />`}
        ${q1&&B`
            <${VQ}
                mediaId=${q1.mediaId}
                info=${q1.info}
                onClose=${()=>c0(null)}
            />
        `}
    `}function WQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:Z,onHashtagClick:Q,onMessageRef:Y,onScrollToMessage:q,onFileRef:K,onOpenWidget:N,emptyMessage:G,timelineRef:V,agents:X,user:U,onDeletePost:L,reverse:H=!0,removingPostIds:A,searchQuery:J}){let[W,D]=g(!1),E=I(null),f=typeof IntersectionObserver<"u",R=P(async()=>{if(!j||!$||W)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,W,j]),p=P((m)=>{let{scrollTop:a,scrollHeight:o,clientHeight:_0}=m.target,q0=H?o-_0-a:a,Q0=Math.max(300,_0);if(q0<Q0)R()},[H,R]);b(()=>{if(!f)return;let m=E.current,a=V?.current;if(!m||!a)return;let o=300,_0=new IntersectionObserver((q0)=>{for(let Q0 of q0){if(!Q0.isIntersecting)continue;R()}},{root:a,rootMargin:`${o}px 0px ${o}px 0px`,threshold:0});return _0.observe(m),()=>_0.disconnect()},[f,$,j,V,R]);let d=I(R);if(d.current=R,b(()=>{if(f)return;if(!V?.current)return;let{scrollTop:m,scrollHeight:a,clientHeight:o}=V.current,_0=H?a-o-m:m,q0=Math.max(300,o);if(_0<q0)d.current?.()},[f,_,$,H,V]),b(()=>{if(!V?.current)return;if(!$||W)return;let{scrollTop:m,scrollHeight:a,clientHeight:o}=V.current,_0=H?a-o-m:m,q0=Math.max(300,o);if(a<=o+1||_0<q0)d.current?.()},[_,$,W,H,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let T=_.slice().sort((m,a)=>m.id-a.id),M=(m)=>{let a=m?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let o=Number(a);return Number.isFinite(o)?o:null},F=new Map;for(let m=0;m<T.length;m+=1){let a=T[m],o=Number(a?.id),_0=M(a);if(_0!==null){let q0=F.get(_0)||{anchorIndex:-1,replyIndexes:[]};q0.replyIndexes.push(m),F.set(_0,q0)}else if(Number.isFinite(o)){let q0=F.get(o)||{anchorIndex:-1,replyIndexes:[]};q0.anchorIndex=m,F.set(o,q0)}}let x=new Map;for(let[m,a]of F.entries()){let o=new Set;if(a.anchorIndex>=0)o.add(a.anchorIndex);for(let _0 of a.replyIndexes)o.add(_0);x.set(m,Array.from(o).sort((_0,q0)=>_0-q0))}let v=T.map((m,a)=>{let o=M(m);if(o===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=x.get(o);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=_0.indexOf(a);if(q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:q0>0,hasThreadNext:q0<_0.length-1}}),s=B`<div class="timeline-sentinel" ref=${E}></div>`;return B`
        <div class="timeline ${H?"reverse":"normal"}" ref=${V} onScroll=${p}>
            <div class="timeline-content">
                ${H?s:null}
                ${T.map((m,a)=>{let o=Boolean(m.data?.thread_id&&m.data.thread_id!==m.id),_0=A?.has?.(m.id),q0=v[a]||{};return B`
                    <${LQ}
                        key=${m.id}
                        post=${m}
                        isThreadReply=${o}
                        isThreadPrev=${q0.hasThreadPrev}
                        isThreadNext=${q0.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${J}
                        agentName=${aZ(m.data?.agent_id,X||{})}
                        agentAvatarUrl=${tZ(m.data?.agent_id,X||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Z?.(m)}
                        onHashtagClick=${Q}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${N}
                        onDelete=${L}
                    />
                `})}
                ${H?null:s}
            </div>
        </div>
    `}var j6="workspaceExplorerScale",UX=["compact","default","comfortable"],LX=new Set(UX),WX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function BQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return LX.has(j)?j:$}function F3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Z=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Z&&j}}function BX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function zX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function H3(_={}){let $=BX(_),j=_.stored?BQ(_.stored,$):$;return zX(j,_)}function zQ(_){return WX[BQ(_)]}function FX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function J3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Z=$({path:j,mode:"edit"});if(!Z||typeof Z!=="object")return!1;return Z.id!=="editor"}function FQ(_,$,j={}){let Z=j.resolvePane;if(J3(_,Z))return!0;return FX($)}var HX=60000,DQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function JX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return J3($,(j)=>h0.resolve(j))}function AQ(_,$,j,Z=0,Q=[]){if(!j&&DQ(_))return Q;if(!_)return Q;if(Q.push({node:_,depth:Z}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)AQ(Y,$,j,Z+1,Q);return Q}function HQ(_,$,j){if(!_)return"";let Z=[],Q=(Y)=>{if(!j&&DQ(Y))return;if(Z.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Q(q)};return Q(_),Z.join("|")}function E3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Z=Array.isArray($.children)?$.children:null;if(!Z)return _;let Q=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Z.length,q=Z.map((K)=>{let N=E3(Q.get(K.path),K);if(N!==Q.get(K.path))Y=!0;return N});return Y?{...$,children:q}:_}function D3(_,$,j){if(!_)return _;if(_.path===$)return E3(_,j);if(!Array.isArray(_.children))return _;let Z=!1,Q=_.children.map((Y)=>{let q=D3(Y,$,j);if(q!==Y)Z=!0;return q});return Z?{..._,children:Q}:_}var EQ=4,O3=14,OX=8,DX=16;function kQ(_){if(!_)return 0;if(_.type==="file"){let Z=Math.max(0,Number(_.size)||0);return _.__bytes=Z,Z}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Z of $)j+=kQ(Z);return _.__bytes=j,j}function MQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Z={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=EQ)return Z;let Q=Array.isArray(_.children)?_.children:[],Y=[];for(let K of Q){let N=Math.max(0,Number(K?.__bytes??K?.size??0));if(N<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:N});else Y.push({kind:"file",name:K.name,path:K.path,size:N})}Y.sort((K,N)=>N.size-K.size);let q=Y;if(Y.length>O3){let K=Y.slice(0,O3-1),N=Y.slice(O3-1),G=N.reduce((V,X)=>V+X.size,0);K.push({kind:"other",name:`+${N.length} more`,path:`${Z.path}/[other]`,size:G}),q=K}return Z.children=q.map((K)=>{if(K.kind==="dir")return MQ(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Z}function JQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function IQ(_,$,j){let Z=((_+Math.PI/2)*180/Math.PI+360)%360,Q=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Z.toFixed(1)} ${Q}% ${Y}%)`}function Z6(_,$,j,Z){return{x:_+j*Math.cos(Z),y:$+j*Math.sin(Z)}}function k3(_,$,j,Z,Q,Y){let q=Math.PI*2-0.0001,K=Y-Q>q?Q+q:Y,N=Z6(_,$,Z,Q),G=Z6(_,$,Z,K),V=Z6(_,$,j,K),X=Z6(_,$,j,Q),U=K-Q>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${Z} ${Z} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var xQ={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function TQ(_,$,j){let Z=[],Q=[],Y=Math.max(0,Number($)||0),q=(K,N,G,V)=>{let X=Array.isArray(K?.children)?K.children:[];if(!X.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=G-N,H=N;X.forEach((A,J)=>{let W=Math.max(0,Number(A.size)||0);if(W<=0)return;let D=W/U,E=H,f=J===X.length-1?G:H+L*D;if(H=f,f-E<0.003)return;let R=xQ[V];if(R){let p=IQ(E,V,j);if(Z.push({key:A.path,path:A.path,label:A.name,size:W,color:p,depth:V,startAngle:E,endAngle:f,innerRadius:R[0],outerRadius:R[1],d:k3(120,120,R[0],R[1],E,f)}),V===1)Q.push({key:A.path,name:A.name,size:W,pct:Y>0?W/Y*100:0,color:p})}if(V<EQ)q(A,E,f,V+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Z,legend:Q}}function A3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Z of j){let Q=A3(Z,$);if(Q)return Q}return null}function PQ(_,$,j,Z){if(!j||j<=0)return{segments:[],legend:[]};let Q=xQ[1];if(!Q)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,K=IQ(Y,1,Z),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:q,innerRadius:Q[0],outerRadius:Q[1],d:k3(120,120,Q[0],Q[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function OQ(_,$=!1,j=!1){if(!_)return null;let Z=kQ(_),Q=MQ(_,0),Y=Q.size||Z,{segments:q,legend:K}=TQ(Q,Y,j);if(!q.length&&Y>0){let N=PQ("[files]",Q.path,Y,j);q=N.segments,K=N.legend}return{root:Q,totalSize:Y,segments:q,legend:K,truncated:$,isDarkTheme:j}}function AX({payload:_}){if(!_)return null;let[$,j]=g(null),[Z,Q]=g(_?.root?.path||"."),[Y,q]=g(()=>[_?.root?.path||"."]),[K,N]=g(!1);b(()=>{let F=_?.root?.path||".";Q(F),q([F]),j(null)},[_?.root?.path,_?.totalSize]),b(()=>{if(!Z)return;N(!0);let F=setTimeout(()=>N(!1),180);return()=>clearTimeout(F)},[Z]);let G=S0(()=>{return A3(_.root,Z)||_.root},[_?.root,Z]),V=G?.size||_.totalSize||0,{segments:X,legend:U}=S0(()=>{let F=TQ(G,V,_.isDarkTheme);if(F.segments.length>0)return F;if(V<=0)return F;let x=G?.children?.length?"Total":"[files]";return PQ(x,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[L,H]=g(X),A=I(new Map),J=I(0);b(()=>{let F=A.current,x=new Map(X.map((a)=>[a.key,a])),v=performance.now(),s=220,m=(a)=>{let o=Math.min(1,(a-v)/220),_0=o*(2-o),q0=X.map((Q0)=>{let W0=F.get(Q0.key)||{startAngle:Q0.startAngle,endAngle:Q0.startAngle,innerRadius:Q0.innerRadius,outerRadius:Q0.innerRadius},U0=(f0,p0)=>f0+(p0-f0)*_0,u0=U0(W0.startAngle,Q0.startAngle),k0=U0(W0.endAngle,Q0.endAngle),O0=U0(W0.innerRadius,Q0.innerRadius),g0=U0(W0.outerRadius,Q0.outerRadius);return{...Q0,d:k3(120,120,O0,g0,u0,k0)}});if(H(q0),o<1)J.current=requestAnimationFrame(m)};if(J.current)cancelAnimationFrame(J.current);return J.current=requestAnimationFrame(m),A.current=x,()=>{if(J.current)cancelAnimationFrame(J.current)}},[X]);let W=L.length?L:X,D=V>0?y_(V):"0 B",E=G?.name||"",R=(E&&E!=="."?E:"Total")||"Total",p=D,d=Y.length>1,T=(F)=>{if(!F?.path)return;let x=A3(_.root,F.path);if(!x||!Array.isArray(x.children)||x.children.length===0)return;q((v)=>[...v,x.path]),Q(x.path),j(null)},M=()=>{if(!d)return;q((F)=>{let x=F.slice(0,-1);return Q(x[x.length-1]||_?.root?.path||"."),x}),j(null)};return B`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${W.length}
                data-base-size=${V}>
                ${W.map((F)=>B`
                    <path
                        key=${F.key}
                        d=${F.d}
                        fill=${F.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===F.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(F)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(F)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>T(F)}
                    >
                        <title>${F.label} — ${y_(F.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${d?" is-drill":""}`}
                    onClick=${M}
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
            ${U.length>0&&B`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((F)=>B`
                        <div key=${F.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${F.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${F.name}>${F.name}</span>
                            <span class="workspace-folder-starburst-size">${y_(F.size)}</span>
                            <span class="workspace-folder-starburst-pct">${F.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&B`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function EX({mediaId:_}){let[$,j]=g(null);if(b(()=>{if(!_)return;V5(_).then(j).catch(()=>{})},[_]),!$)return null;let Z=$.filename||"file",Q=$.metadata?.size?y_($.metadata.size):"";return B`
        <a href=${C_(_)} download=${Z} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Z}</span>
                ${Q&&B`<span class="file-size">${Q}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function CQ({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Z,onOpenTerminalTab:Q,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:K=!1}){let[N,G]=g(null),[V,X]=g(new Set(["."])),[U,L]=g(null),[H,A]=g(null),[J,W]=g(""),[D,E]=g(null),[f,R]=g(null),[p,d]=g(!0),[T,M]=g(!1),[F,x]=g(null),[v,s]=g(()=>J5("workspaceShowHidden",!1)),[m,a]=g(!1),[o,_0]=g(null),[q0,Q0]=g(null),[K0,W0]=g(null),[U0,u0]=g(!1),[k0,O0]=g(null),[g0,f0]=g(()=>JQ()),[p0,l0]=g(()=>H3({stored:B_(j6),...F3()})),[D0,n0]=g(!1),B0=I(V),I0=I(""),d0=I(null),o0=I(0),w1=I(new Set),q1=I(null),c0=I(new Map),U1=I(_),$1=I(Z),s0=I(null),V0=I(null),w0=I(null),_1=I(null),r=I(null),Y0=I(null),h=I("."),i=I(null),z0=I({path:null,dragging:!1,startX:0,startY:0}),A0=I({path:null,dragging:!1,startX:0,startY:0}),M0=I({path:null,timer:0}),F0=I(!1),T0=I(0),v0=I(new Map),L0=I(null),y0=I(null),H0=I(null),j0=I(null),y=I(null),t=I(null),X0=I(v),J0=I($),b0=I(j??$),a0=I(0),K1=I(K0),D1=I(m),f1=I(o),S_=I(null),t1=I({x:0,y:0}),v1=I(0),n1=I(null),p1=I(U),t0=I(H),d1=I(null),a_=I(D);U1.current=_,$1.current=Z,b(()=>{B0.current=V},[V]),b(()=>{X0.current=v},[v]),b(()=>{J0.current=$},[$]),b(()=>{b0.current=j??$},[j,$]),b(()=>{K1.current=K0},[K0]),b(()=>{if(typeof window>"u")return;let O=()=>{l0(H3({stored:B_(j6),...F3()}))};O();let k=()=>O(),u=()=>O(),S=($0)=>{if(!$0||$0.key===null||$0.key===j6)O()};window.addEventListener("resize",k),window.addEventListener("focus",u),window.addEventListener("storage",S);let n=window.matchMedia?.("(pointer: coarse)"),Z0=window.matchMedia?.("(hover: none)"),N0=($0,P0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",P0);else if($0.addListener)$0.addListener(P0)},G0=($0,P0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",P0);else if($0.removeListener)$0.removeListener(P0)};return N0(n,k),N0(Z0,k),()=>{window.removeEventListener("resize",k),window.removeEventListener("focus",u),window.removeEventListener("storage",S),G0(n,k),G0(Z0,k)}},[]),b(()=>{let O=(k)=>{let u=k?.detail?.path;if(!u)return;let S=u.split("/"),n=[];for(let Z0=1;Z0<S.length;Z0++)n.push(S.slice(0,Z0).join("/"));if(n.length)X((Z0)=>{let N0=new Set(Z0);N0.add(".");for(let G0 of n)N0.add(G0);return N0});L(u),requestAnimationFrame(()=>{let Z0=document.querySelector(`[data-path="${CSS.escape(u)}"]`);if(Z0)Z0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",O),()=>window.removeEventListener("workspace-reveal-path",O)},[]),b(()=>{D1.current=m},[m]),b(()=>{f1.current=o},[o]),b(()=>{p1.current=U},[U]),b(()=>{t0.current=H},[H]),b(()=>{a_.current=D},[D]),b(()=>{if(typeof window>"u"||typeof document>"u")return;let O=()=>f0(JQ());O();let k=window.matchMedia?.("(prefers-color-scheme: dark)"),u=()=>O();if(k?.addEventListener)k.addEventListener("change",u);else if(k?.addListener)k.addListener(u);let S=typeof MutationObserver<"u"?new MutationObserver(()=>O()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(k?.removeEventListener)k.removeEventListener("change",u);else if(k?.removeListener)k.removeListener(u);S?.disconnect()}},[]),b(()=>{if(!H)return;let O=r.current;if(!O)return;let k=requestAnimationFrame(()=>{try{O.focus(),O.select()}catch{}});return()=>cancelAnimationFrame(k)},[H]),b(()=>{if(!D0)return;let O=(u)=>{let S=u?.target;if(!(S instanceof Element))return;if(y.current?.contains(S))return;if(t.current?.contains(S))return;n0(!1)},k=(u)=>{if(u?.key==="Escape")n0(!1),t.current?.focus?.()};return document.addEventListener("mousedown",O),document.addEventListener("touchstart",O,{passive:!0}),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("touchstart",O),document.removeEventListener("keydown",k)}},[D0]);let e1=async(O,k={})=>{let u=Boolean(k?.autoOpen),S=String(O||"").trim();M(!0),E(null),R(null);try{let n=await f5(S,20000);if(u&&S&&FQ(S,n,{resolvePane:(Z0)=>h0.resolve(Z0)}))return $1.current?.(S,n),n;return E(n),n}catch(n){let Z0={error:n.message||"Failed to load preview"};return E(Z0),Z0}finally{M(!1)}};s0.current=e1;let t_=async()=>{if(!J0.current)return;try{let O=await u5("",1,X0.current),k=HQ(O.root,B0.current,X0.current);if(k===I0.current){d(!1);return}if(I0.current=k,d0.current=O.root,!o0.current)o0.current=requestAnimationFrame(()=>{o0.current=0,G((u)=>E3(u,d0.current)),d(!1)})}catch(O){x(O.message||"Failed to load workspace"),d(!1)}},h_=async(O)=>{if(!O)return;if(w1.current.has(O))return;w1.current.add(O);try{let k=await u5(O,1,X0.current);G((u)=>D3(u,O,k.root))}catch(k){x(k.message||"Failed to load workspace")}finally{w1.current.delete(O)}};V0.current=h_;let A1=P(()=>{let O=U;if(!O)return".";let k=c0.current?.get(O);if(k&&k.type==="dir")return k.path;if(O==="."||!O.includes("/"))return".";let u=O.split("/");return u.pop(),u.join("/")||"."},[U]),i1=P((O)=>{let k=O?.closest?.(".workspace-row");if(!k)return null;let u=k.dataset.path,S=k.dataset.type;if(!u)return null;if(S==="dir")return u;if(u.includes("/")){let n=u.split("/");return n.pop(),n.join("/")||"."}return"."},[]),E1=P((O)=>{return i1(O?.target||null)},[i1]),L1=P((O)=>{K1.current=O,W0(O)},[]),W1=P(()=>{let O=M0.current;if(O?.timer)clearTimeout(O.timer);M0.current={path:null,timer:0}},[]),X_=P((O)=>{if(!O||O==="."){W1();return}let k=c0.current?.get(O);if(!k||k.type!=="dir"){W1();return}if(B0.current?.has(O)){W1();return}if(M0.current?.path===O)return;W1();let u=setTimeout(()=>{M0.current={path:null,timer:0},V0.current?.(O),X((S)=>{let n=new Set(S);return n.add(O),n})},600);M0.current={path:O,timer:u}},[W1]),V_=P((O,k)=>{if(t1.current={x:O,y:k},v1.current)return;v1.current=requestAnimationFrame(()=>{v1.current=0;let u=S_.current;if(!u)return;let S=t1.current;u.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),I1=P((O)=>{if(!O)return;let u=(c0.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!u)return;Q0({path:O,label:u})},[]),r1=P(()=>{if(Q0(null),v1.current)cancelAnimationFrame(v1.current),v1.current=0;if(S_.current)S_.current.style.transform="translate(-9999px, -9999px)"},[]),Y1=P((O)=>{if(!O)return".";let k=c0.current?.get(O);if(k&&k.type==="dir")return k.path;if(O==="."||!O.includes("/"))return".";let u=O.split("/");return u.pop(),u.join("/")||"."},[]),x1=P(()=>{A(null),W("")},[]),__=P((O)=>{if(!O)return;let u=(c0.current?.get(O)?.name||O.split("/").pop()||O).trim();if(!u||O===".")return;A(O),W(u)},[]),b1=P(async()=>{let O=t0.current;if(!O)return;let k=(J||"").trim();if(!k){x1();return}let u=c0.current?.get(O),S=(u?.name||O.split("/").pop()||O).trim();if(k===S){x1();return}try{let Z0=(await l6(O,k))?.path||O,N0=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(x1(),x(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:O,newPath:Z0,type:u?.type||"file"}})),u?.type==="dir")X((G0)=>{let $0=new Set;for(let P0 of G0)if(P0===O)$0.add(Z0);else if(P0.startsWith(`${O}/`))$0.add(`${Z0}${P0.slice(O.length)}`);else $0.add(P0);return $0});if(L(Z0),u?.type==="dir")E(null),M(!1),R(null);else s0.current?.(Z0);V0.current?.(N0)}catch(n){x(n?.message||"Failed to rename file")}},[x1,J]),e_=P(async(O)=>{let S=O||".";for(let n=0;n<50;n+=1){let N0=`untitled${n===0?"":`-${n}`}.md`;try{let $0=(await c6(S,N0,""))?.path||(S==="."?N0:`${S}/${N0}`);if(S&&S!==".")X((P0)=>new Set([...P0,S]));L($0),x(null),V0.current?.(S),s0.current?.($0);return}catch(G0){if(G0?.status===409||G0?.code==="file_exists")continue;x(G0?.message||"Failed to create file");return}}x("Failed to create file (untitled name already in use).")},[]),H_=P((O)=>{if(O?.stopPropagation?.(),U0)return;let k=Y1(p1.current);e_(k)},[U0,Y1,e_]);b(()=>{if(typeof window>"u")return;let O=(k)=>{let u=k?.detail?.updates||[];if(!Array.isArray(u)||u.length===0)return;G((G0)=>{let $0=G0;for(let P0 of u){if(!P0?.root)continue;if(!$0||P0.path==="."||!P0.path)$0=P0.root;else $0=D3($0,P0.path,P0.root)}if($0)I0.current=HQ($0,B0.current,X0.current);return d(!1),$0});let S=p1.current;if(Boolean(S)&&u.some((G0)=>{let $0=G0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)||$0.startsWith(`${S}/`)}))v0.current.clear();if(!S||!a_.current)return;let Z0=c0.current?.get(S);if(Z0&&Z0.type==="dir")return;if(u.some((G0)=>{let $0=G0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)}))s0.current?.(S)};return window.addEventListener("workspace-update",O),()=>window.removeEventListener("workspace-update",O)},[]),q1.current=t_;let _4=I(()=>{if(typeof window>"u")return;let O=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),k=b0.current??J0.current,u=document.visibilityState!=="hidden"&&(k||O.matches&&J0.current);v5(u,X0.current).catch(()=>{})}).current,J_=I(0),z4=I(()=>{if(J_.current)clearTimeout(J_.current);J_.current=setTimeout(()=>{J_.current=0,_4()},250)}).current;b(()=>{if(J0.current)q1.current?.();z4()},[$,j]),b(()=>{q1.current(),_4();let O=setInterval(()=>q1.current(),HX),k=d5("previewHeight",null),u=Number.isFinite(k)?Math.min(Math.max(k,80),600):280;if(T0.current=u,w0.current)w0.current.style.setProperty("--preview-height",`${u}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),n=()=>z4();if(S.addEventListener)S.addEventListener("change",n);else if(S.addListener)S.addListener(n);return document.addEventListener("visibilitychange",n),()=>{if(clearInterval(O),o0.current)cancelAnimationFrame(o0.current),o0.current=0;if(S.removeEventListener)S.removeEventListener("change",n);else if(S.removeListener)S.removeListener(n);if(document.removeEventListener("visibilitychange",n),J_.current)clearTimeout(J_.current),J_.current=0;if(i.current)clearTimeout(i.current),i.current=null;v5(!1,X0.current).catch(()=>{})}},[]);let O_=S0(()=>AQ(N,V,v),[N,V,v]),w_=S0(()=>new Map(O_.map((O)=>[O.node.path,O.node])),[O_]),u4=S0(()=>zQ(p0),[p0]);c0.current=w_;let j1=(U?c0.current.get(U):null)?.type==="dir";b(()=>{if(!U||!j1){O0(null),L0.current=null,y0.current=null;return}let O=U,k=`${v?"hidden":"visible"}:${U}`,u=v0.current,S=u.get(k);if(S?.root){u.delete(k),u.set(k,S);let N0=OQ(S.root,Boolean(S.truncated),g0);if(N0)L0.current=N0,y0.current=U,O0({loading:!1,error:null,payload:N0});return}let n=L0.current,Z0=y0.current;O0({loading:!0,error:null,payload:Z0===U?n:null}),u5(U,OX,v).then((N0)=>{if(p1.current!==O)return;let G0={root:N0?.root,truncated:Boolean(N0?.truncated)};u.delete(k),u.set(k,G0);while(u.size>DX){let P0=u.keys().next().value;if(!P0)break;u.delete(P0)}let $0=OQ(G0.root,G0.truncated,g0);L0.current=$0,y0.current=U,O0({loading:!1,error:null,payload:$0})}).catch((N0)=>{if(p1.current!==O)return;O0({loading:!1,error:N0?.message||"Failed to load folder size chart",payload:Z0===U?n:null})})},[U,j1,v,g0]);let k1=Boolean(D&&D.kind==="text"&&!j1&&(!D.size||D.size<=262144)),F4=k1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",$_=Boolean(U&&U!=="."),D_=Boolean(U&&!j1),c1=Boolean(U&&!j1),J1=U&&j1?A8(U,v):null,R1=P(()=>n0(!1),[]),N1=P(async(O)=>{R1();try{await O?.()}catch(k){console.warn("[workspace-explorer] Header menu action failed:",k)}},[R1]);b(()=>{let O=H0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!O)return;if(O.innerHTML="",!U||j1||!D||D.error)return;let k={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},u=h0.resolve(k)||h0.get("workspace-preview-default");if(!u)return;let S=u.mount(O,k);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;O.innerHTML=""}},[U,j1,D]);let j_=(O)=>{let k=O?.target;if(k instanceof Element)return k;return k?.parentElement||null},Z_=(O)=>{return Boolean(O?.closest?.(".workspace-node-icon, .workspace-label-text"))},Q_=I((O)=>{let k=j_(O),u=k?.closest?.("[data-path]");if(!u)return;let S=u.dataset.path;if(!S||S===".")return;let n=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),Z0=Boolean(k?.closest?.(".workspace-caret"));if(n||Z0)return;if(t0.current===S)return;__(S)}).current,p_=I((O)=>{if(F0.current){F0.current=!1;return}let k=j_(O),u=k?.closest?.("[data-path]");if(_1.current?.focus?.(),!u)return;let S=u.dataset.path,n=u.dataset.type,Z0=Boolean(k?.closest?.(".workspace-caret")),N0=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),G0=p1.current===S,$0=t0.current;if($0){if($0===S)return;x1()}let P0=n==="file"&&d1.current===S&&!Z0&&!N0;if(n==="dir"){if(d1.current=null,L(S),E(null),R(null),M(!1),!B0.current.has(S))V0.current?.(S);if(G0&&!Z0)return;X((s1)=>{let N_=new Set(s1);if(N_.has(S))N_.delete(S);else N_.add(S);return N_})}else{d1.current=null,L(S);let P1=c0.current.get(S);if(P1)U1.current?.(P1.path,P1);if(!N0&&!Z0&&JX(S))$1.current?.(S,a_.current);else{let N_=!N0&&!Z0;s0.current?.(S,{autoOpen:N_})}}}).current,g1=I(()=>{I0.current="",q1.current(),Array.from(B0.current||[]).filter((k)=>k&&k!==".").forEach((k)=>V0.current?.(k))}).current,u1=I(()=>{d1.current=null,L(null),E(null),R(null),M(!1)}).current,Y_=I(()=>{s((O)=>{let k=!O;if(typeof window<"u")Q1("workspaceShowHidden",String(k));return X0.current=k,v5(!0,k).catch(()=>{}),I0.current="",q1.current?.(),Array.from(B0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>V0.current?.(S)),k})}).current,R_=I((O)=>{if(j_(O)?.closest?.("[data-path]"))return;u1()}).current,B1=P(async(O)=>{if(!O)return;let k=O.split("/").pop()||O;if(!window.confirm(`Delete "${k}"? This cannot be undone.`))return;try{await d6(O);let S=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(p1.current===O)u1();V0.current?.(S),x(null)}catch(S){E((n)=>({...n||{},error:S.message||"Failed to delete file"}))}},[u1]),A_=P((O)=>{let k=_1.current;if(!k||!O||typeof CSS>"u"||typeof CSS.escape!=="function")return;k.querySelector(`[data-path="${CSS.escape(O)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),G1=P((O)=>{let k=O_;if(!k||k.length===0)return;let u=U?k.findIndex((S)=>S.node.path===U):-1;if(O.key==="ArrowDown"){O.preventDefault();let S=Math.min(u+1,k.length-1),n=k[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")U1.current?.(n.node.path,n.node),s0.current?.(n.node.path);else E(null),M(!1),R(null);A_(n.node.path);return}if(O.key==="ArrowUp"){O.preventDefault();let S=u<=0?0:u-1,n=k[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")U1.current?.(n.node.path,n.node),s0.current?.(n.node.path);else E(null),M(!1),R(null);A_(n.node.path);return}if(O.key==="ArrowRight"&&u>=0){let S=k[u];if(S?.node?.type==="dir"&&!V.has(S.node.path))O.preventDefault(),V0.current?.(S.node.path),X((n)=>new Set([...n,S.node.path]));return}if(O.key==="ArrowLeft"&&u>=0){let S=k[u];if(S?.node?.type==="dir"&&V.has(S.node.path))O.preventDefault(),X((n)=>{let Z0=new Set(n);return Z0.delete(S.node.path),Z0});return}if(O.key==="Enter"&&u>=0){O.preventDefault();let S=k[u];if(!S)return;let n=S.node.path;if(S.node.type==="dir"){if(!B0.current.has(n))V0.current?.(n);X((N0)=>{let G0=new Set(N0);if(G0.has(n))G0.delete(n);else G0.add(n);return G0}),E(null),R(null),M(!1)}else U1.current?.(n,S.node),s0.current?.(n);return}if((O.key==="Delete"||O.key==="Backspace")&&u>=0){let S=k[u];if(!S||S.node.type==="dir")return;O.preventDefault(),B1(S.node.path);return}if(O.key==="Escape")O.preventDefault(),u1()},[u1,B1,V,O_,A_,U]),u_=P((O)=>{let k=j_(O),u=k?.closest?.(".workspace-row");if(!u)return;let S=u.dataset.type,n=u.dataset.path;if(!n||n===".")return;if(t0.current===n)return;let Z0=O?.touches?.[0];if(!Z0)return;if(z0.current={path:Z_(k)?n:null,dragging:!1,startX:Z0.clientX,startY:Z0.clientY},S!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,z0.current?.dragging)return;B1(n)},600)},[B1]),E_=P(()=>{if(i.current)clearTimeout(i.current),i.current=null;let O=z0.current;if(O?.dragging&&O.path){let k=K1.current||A1(),u=n1.current;if(typeof u==="function")u(O.path,k)}z0.current={path:null,dragging:!1,startX:0,startY:0},a0.current=0,a(!1),_0(null),L1(null),W1(),r1()},[A1,r1,L1,W1]),v4=P((O)=>{let k=z0.current,u=O?.touches?.[0];if(!u||!k?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let S=Math.abs(u.clientX-k.startX),n=Math.abs(u.clientY-k.startY),Z0=S>8||n>8;if(Z0&&i.current)clearTimeout(i.current),i.current=null;if(!k.dragging&&Z0)k.dragging=!0,a(!0),_0("move"),I1(k.path);if(k.dragging){O.preventDefault(),V_(u.clientX,u.clientY);let N0=document.elementFromPoint(u.clientX,u.clientY),G0=i1(N0)||A1();if(K1.current!==G0)L1(G0);X_(G0)}},[i1,A1,I1,V_,L1,X_]),b4=I((O)=>{O.preventDefault();let k=w0.current;if(!k)return;let u=O.clientY,S=T0.current||280,n=O.currentTarget;n.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Z0=u,N0=($0)=>{Z0=$0.clientY;let P0=k.clientHeight-80,P1=Math.min(Math.max(S-($0.clientY-u),80),P0);k.style.setProperty("--preview-height",`${P1}px`),T0.current=P1},G0=()=>{let $0=k.clientHeight-80,P0=Math.min(Math.max(S-(Z0-u),80),$0);T0.current=P0,n.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Q1("previewHeight",String(Math.round(P0))),document.removeEventListener("mousemove",N0),document.removeEventListener("mouseup",G0)};document.addEventListener("mousemove",N0),document.addEventListener("mouseup",G0)}).current,f_=I((O)=>{O.preventDefault();let k=w0.current;if(!k)return;let u=O.touches[0];if(!u)return;let S=u.clientY,n=T0.current||280,Z0=O.currentTarget;Z0.classList.add("dragging"),document.body.style.userSelect="none";let N0=($0)=>{let P0=$0.touches[0];if(!P0)return;$0.preventDefault();let P1=k.clientHeight-80,s1=Math.min(Math.max(n-(P0.clientY-S),80),P1);k.style.setProperty("--preview-height",`${s1}px`),T0.current=s1},G0=()=>{Z0.classList.remove("dragging"),document.body.style.userSelect="",Q1("previewHeight",String(Math.round(T0.current||n))),document.removeEventListener("touchmove",N0),document.removeEventListener("touchend",G0),document.removeEventListener("touchcancel",G0)};document.addEventListener("touchmove",N0,{passive:!1}),document.addEventListener("touchend",G0),document.addEventListener("touchcancel",G0)}).current,c_=async()=>{if(!U)return;try{let O=await p6(U);if(O.media_id)R(O.media_id)}catch(O){E((k)=>({...k||{},error:O.message||"Failed to attach"}))}},g4=async()=>{if(!U||j1)return;await B1(U)},$4=(O)=>{return Array.from(O?.dataTransfer?.types||[]).includes("Files")},a4=P((O)=>{if(!$4(O))return;if(O.preventDefault(),a0.current+=1,!D1.current)a(!0);_0("upload");let k=E1(O)||A1();L1(k),X_(k)},[A1,E1,L1,X_]),j4=P((O)=>{if(!$4(O))return;if(O.preventDefault(),O.dataTransfer)O.dataTransfer.dropEffect="copy";if(!D1.current)a(!0);if(f1.current!=="upload")_0("upload");let k=E1(O)||A1();if(K1.current!==k)L1(k);X_(k)},[A1,E1,L1,X_]),l_=P((O)=>{if(!$4(O))return;if(O.preventDefault(),a0.current=Math.max(0,a0.current-1),a0.current===0)a(!1),_0(null),L1(null),W1()},[L1,W1]),o1=P(async(O,k=".")=>{let u=Array.from(O||[]);if(u.length===0)return;let S=k&&k!==""?k:".",n=S!=="."?S:"workspace root";u0(!0);try{let Z0=null;for(let N0 of u)try{Z0=await O8(N0,S)}catch(G0){let $0=G0?.status,P0=G0?.code;if($0===409||P0==="file_exists"){let P1=N0?.name||"file";if(!window.confirm(`"${P1}" already exists in ${n}. Overwrite?`))continue;Z0=await O8(N0,S,{overwrite:!0})}else throw G0}if(Z0?.path)d1.current=Z0.path,L(Z0.path),s0.current?.(Z0.path);V0.current?.(S)}catch(Z0){x(Z0.message||"Failed to upload file")}finally{u0(!1)}},[]),H4=P(async(O,k)=>{if(!O)return;let u=c0.current?.get(O);if(!u)return;let S=k&&k!==""?k:".",n=O.includes("/")?O.split("/").slice(0,-1).join("/")||".":".";if(S===n)return;try{let N0=(await n6(O,S))?.path||O;if(u.type==="dir")X((G0)=>{let $0=new Set;for(let P0 of G0)if(P0===O)$0.add(N0);else if(P0.startsWith(`${O}/`))$0.add(`${N0}${P0.slice(O.length)}`);else $0.add(P0);return $0});if(L(N0),u.type==="dir")E(null),M(!1),R(null);else s0.current?.(N0);V0.current?.(n),V0.current?.(S)}catch(Z0){x(Z0?.message||"Failed to move entry")}},[]);n1.current=H4;let J4=P(async(O)=>{if(!$4(O))return;O.preventDefault(),a0.current=0,a(!1),_0(null),W0(null),W1();let k=Array.from(O?.dataTransfer?.files||[]);if(k.length===0)return;let u=K1.current||E1(O)||A1();await o1(k,u)},[A1,E1,o1]),x5=P((O)=>{if(O?.stopPropagation?.(),U0)return;let k=O?.currentTarget?.dataset?.uploadTarget||".";h.current=k,Y0.current?.click()},[U0]),O1=P(()=>{if(U0)return;let O=p1.current,k=O?c0.current?.get(O):null;h.current=k?.type==="dir"?k.path:".",Y0.current?.click()},[U0]),O4=P(()=>{N1(()=>H_(null))},[N1,H_]),t4=P(()=>{N1(()=>O1())},[N1,O1]),q_=P(()=>{N1(()=>g1())},[N1,g1]),K_=P(()=>{N1(()=>Y_())},[N1,Y_]),Z4=P(()=>{if(!U||!k1)return;N1(()=>$1.current?.(U,D))},[N1,U,k1,D]),m4=P(()=>{if(!U||U===".")return;N1(()=>__(U))},[N1,U,__]),h4=P(()=>{if(!U||j1)return;N1(()=>g4())},[N1,U,j1,g4]),e4=P(()=>{if(!U||j1)return;N1(()=>c_())},[N1,U,j1,c_]),Q4=P(()=>{if(!J1)return;if(R1(),typeof window<"u")window.open(J1,"_blank","noopener")},[R1,J1]),k_=P(()=>{R1(),Q?.()},[R1,Q]),_5=P(()=>{R1(),Y?.()},[R1,Y]),D4=P(()=>{R1(),q?.()},[R1,q]),p4=P((O)=>{if(!O||O.button!==0)return;let k=O.currentTarget;if(!k||!k.dataset)return;let u=k.dataset.path;if(!u||u===".")return;if(t0.current===u)return;let S=j_(O);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!Z_(S))return;O.preventDefault(),A0.current={path:u,dragging:!1,startX:O.clientX,startY:O.clientY};let n=(N0)=>{let G0=A0.current;if(!G0?.path)return;let $0=Math.abs(N0.clientX-G0.startX),P0=Math.abs(N0.clientY-G0.startY),P1=$0>4||P0>4;if(!G0.dragging&&P1)G0.dragging=!0,F0.current=!0,a(!0),_0("move"),I1(G0.path),V_(N0.clientX,N0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(G0.dragging){N0.preventDefault(),V_(N0.clientX,N0.clientY);let s1=document.elementFromPoint(N0.clientX,N0.clientY),N_=i1(s1)||A1();if(K1.current!==N_)L1(N_);X_(N_)}},Z0=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",Z0);let N0=A0.current;if(N0?.dragging&&N0.path){let G0=K1.current||A1(),$0=n1.current;if(typeof $0==="function")$0(N0.path,G0)}A0.current={path:null,dragging:!1,startX:0,startY:0},a0.current=0,a(!1),_0(null),L1(null),W1(),r1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F0.current=!1},0)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",Z0)},[i1,A1,I1,V_,r1,L1,X_,W1]),M_=P(async(O)=>{let k=Array.from(O?.target?.files||[]);if(k.length===0)return;let u=h.current||".";if(await o1(k,u),h.current=".",O?.target)O.target.value=""},[o1]);return B`
        <aside
            class=${`workspace-sidebar${m?" workspace-drop-active":""}`}
            data-workspace-scale=${p0}
            ref=${w0}
            onDragEnter=${a4}
            onDragOver=${j4}
            onDragLeave=${l_}
            onDrop=${J4}
        >
            <input type="file" multiple style="display:none" ref=${Y0} onChange=${M_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${t}
                            class=${`workspace-menu-button${D0?" active":""}`}
                            onClick=${(O)=>{O.stopPropagation(),n0((k)=>!k)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${D0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${D0&&B`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${O4} disabled=${U0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${t4} disabled=${U0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${q_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${v?" active":""}`} role="menuitem" onClick=${K_}>
                                    ${v?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!j1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4} disabled=${!k1}>Open in editor</button>
                                `}
                                ${$_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${c1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${e4}>Download selected file</button>
                                `}
                                ${J1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q4}>Download selected folder (zip)</button>
                                `}
                                ${D_&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${h4}>Delete selected file</button>
                                `}

                                ${(Q||Y||q)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${k_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${_5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${D4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${H_} title="New file" disabled=${U0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${g1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${R_}>
                ${U0&&B`<div class="workspace-drop-hint">Uploading…</div>`}
                ${p&&B`<div class="workspace-loading">Loading…</div>`}
                ${F&&B`<div class="workspace-error">${F}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${_1}
                        tabIndex="0"
                        onClick=${p_}
                        onDblClick=${Q_}
                        onKeyDown=${G1}
                        onTouchStart=${u_}
                        onTouchEnd=${E_}
                        onTouchMove=${v4}
                        onTouchCancel=${E_}
                    >
                        ${O_.map(({node:O,depth:k})=>{let u=O.type==="dir",S=O.path===U,n=O.path===H,Z0=u&&V.has(O.path),N0=K0&&O.path===K0,G0=Array.isArray(O.children)&&O.children.length>0?O.children.length:Number(O.child_count)||0;return B`
                                <div
                                    key=${O.path}
                                    class=${`workspace-row${S?" selected":""}${N0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+k*u4.indentPx}px`}}
                                    data-path=${O.path}
                                    data-type=${O.type}
                                    onMouseDown=${p4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${u?Z0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${u?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${u?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${n?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${r}
                                                value=${J}
                                                onInput=${($0)=>W($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),b1();else if($0.key==="Escape")$0.preventDefault(),x1()}}
                                                onBlur=${x1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${O.name}</span></span>`}
                                    ${u&&!Z0&&G0>0&&B`
                                        <span class="workspace-count">${G0}</span>
                                    `}
                                    ${u&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${O.path}
                                            title="Upload files to this folder"
                                            onClick=${x5}
                                            disabled=${U0}
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
            ${U&&B`
                <div class="workspace-preview-splitter-h" onMouseDown=${b4} onTouchStart=${f_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${H_} title="New file" disabled=${U0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!j1&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>k1&&$1.current?.(U,D)}
                                    title=${F4}
                                    disabled=${!k1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${g4}
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
                            ${j1?B`
                                    <button class="workspace-download" onClick=${O1}
                                        title="Upload files to this folder" disabled=${U0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${A8(U,v)}
                                        title="Download folder as zip" onClick=${(O)=>O.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${c_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${T&&B`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&B`<div class="workspace-error">${D.error}</div>`}
                    ${j1&&B`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${k0?.loading&&B`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${k0?.error&&B`<div class="workspace-error">${k0.error}</div>`}
                        ${k0?.payload&&k0.payload.segments?.length>0&&B`
                            <${AX} payload=${k0.payload} />
                        `}
                        ${k0?.payload&&(!k0.payload.segments||k0.payload.segments.length===0)&&B`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!j1&&B`
                        <div class="workspace-preview-body" ref=${H0}></div>
                    `}
                    ${f&&B`
                        <div class="workspace-download-card">
                            <${EX} mediaId=${f} />
                        </div>
                    `}
                </div>
            `}
            ${q0&&B`
                <div class="workspace-drag-ghost" ref=${S_}>${q0.label}</div>
            `}
        </aside>
    `}var kX=new Set(["kanban-editor","mindmap-editor"]);function MX(_,$,j){let Z=String(_||"").trim();if(!Z)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Z,mode:"edit"})?.id||null}function yQ(_,$,j){let Z=MX(_,$,j);return Z!=null&&kX.has(Z)}var IX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,xX=/\.(csv|tsv)$/i,TX=/\.pdf$/i,PX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,SQ=/\.drawio(\.xml|\.svg|\.png)?$/i;function wQ({tabs:_,activeId:$,onActivate:j,onClose:Z,onCloseOthers:Q,onCloseAll:Y,onTogglePin:q,onTogglePreview:K,onEditSource:N,previewTabs:G,paneOverrides:V,onToggleDock:X,dockVisible:U,onToggleZen:L,zenMode:H,onPopOutTab:A}){let[J,W]=g(null),D=I(null);b(()=>{if(!J)return;let F=(x)=>{if(x.type==="keydown"&&x.key!=="Escape")return;W(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[J]),b(()=>{let F=(x)=>{if(x.ctrlKey&&x.key==="Tab"){if(x.preventDefault(),!_.length)return;let v=_.findIndex((s)=>s.id===$);if(x.shiftKey){let s=_[(v-1+_.length)%_.length];j?.(s.id)}else{let s=_[(v+1)%_.length];j?.(s.id)}return}if((x.ctrlKey||x.metaKey)&&x.key==="w"){let v=document.querySelector(".editor-pane");if(v&&v.contains(document.activeElement)){if(x.preventDefault(),$)Z?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Z]);let E=P((F,x)=>{if(F.button===1){F.preventDefault(),Z?.(x);return}if(F.button===0)j?.(x)},[j,Z]),f=P((F,x)=>{F.preventDefault(),W({id:x,x:F.clientX,y:F.clientY})},[]),R=P((F)=>{F.preventDefault(),F.stopPropagation()},[]),p=P((F,x)=>{F.preventDefault(),F.stopPropagation(),Z?.(x)},[Z]);b(()=>{if(!$||!D.current)return;let F=D.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let d=P((F)=>{if(!(V instanceof Map))return null;return V.get(F)||null},[V]),T=S0(()=>_.find((F)=>F.id===J?.id)||null,[J?.id,_]),M=S0(()=>{let F=J?.id;if(!F)return!1;return yQ(F,d(F),(x)=>h0.resolve(x))},[J?.id,d]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(x)=>E(x,F.id)}
                    onContextMenu=${(x)=>f(x,F.id)}
                >
                    ${F.pinned&&B`
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
                        onMouseDown=${R}
                        onClick=${(x)=>p(x,F.id)}
                        title=${F.dirty?"Unsaved changes":"Close"}
                        aria-label=${F.dirty?"Unsaved changes":`Close ${F.label}`}
                    >
                        ${F.dirty?B`<span class="tab-dirty-dot" aria-hidden="true"></span>`:B`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${X&&B`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${X}
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
            ${L&&B`
                <button
                    class=${`tab-strip-zen-toggle${H?" active":""}`}
                    onClick=${L}
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
        ${J&&B`
            <div class="tab-context-menu" style=${{left:J.x+"px",top:J.y+"px"}}>
                <button onClick=${()=>{Z?.(J.id),W(null)}}>Close</button>
                <button onClick=${()=>{Q?.(J.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(J.id),W(null)}}>
                    ${T?.pinned?"Unpin":"Pin"}
                </button>
                ${M&&N&&B`
                    <button onClick=${()=>{N(J.id),W(null)}}>Edit Source</button>
                `}
                ${A&&B`
                    <button onClick=${()=>{let F=_.find((x)=>x.id===J.id);A(J.id,F?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{K(J.id),W(null)}}>
                        ${G?.has(J.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${IX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(J.id),x=J.id.split("/").pop()||"document",v="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(x);window.open(v,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${xX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${TX.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${PX.test(J.id)&&!SQ.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${SQ.test(J.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(J.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function CX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Z,zenMode:Q}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Z?" chat-only":""}${Q?" zen-mode":""}`}function RQ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Z,chatOnlyMode:Q,zenMode:Y,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:N,renameBranchNameDraft:G,renameBranchNameInputRef:V,setRenameBranchNameDraft:X,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:H,openEditor:A,openTerminalTab:J,openVncTab:W,hasDockPanes:D,toggleDock:E,dockVisible:f,handleSplitterMouseDown:R,handleSplitterTouchStart:p,showEditorPaneContainer:d,tabStripTabs:T,tabStripActiveId:M,handleTabActivate:F,handleTabClose:x,handleTabCloseOthers:v,handleTabCloseAll:s,handleTabTogglePin:m,handleTabTogglePreview:a,handleTabEditSource:o,previewTabs:_0,tabPaneOverrides:q0,toggleZenMode:Q0,handlePopOutPane:K0,isWebAppMode:W0,editorContainerRef:U0,editorInstanceRef:u0,handleDockSplitterMouseDown:k0,handleDockSplitterTouchStart:O0,TERMINAL_TAB_PATH:g0,dockContainerRef:f0,handleEditorSplitterMouseDown:p0,handleEditorSplitterTouchStart:l0,searchQuery:D0,isIOSDevice:n0,currentBranchRecord:B0,currentChatJid:I0,currentChatBranches:d0,handleBranchPickerChange:o0,formatBranchPickerLabel:w1,openRenameCurrentBranchForm:q1,handlePruneCurrentBranch:c0,currentHashtag:U1,handleBackToTimeline:$1,activeSearchScopeLabel:s0,posts:V0,isMainTimelineView:w0,hasMore:_1,loadMore:r,timelineRef:Y0,handleHashtagClick:h,addMessageRef:i,scrollToMessage:z0,openFileFromPill:A0,handleDeletePost:M0,handleOpenFloatingWidget:F0,agents:T0,userProfile:v0,removingPostIds:L0,agentStatus:y0,isCompactionStatus:H0,agentDraft:j0,agentPlan:y,agentThought:t,pendingRequest:X0,intentToast:J0,currentTurnId:b0,steerQueued:a0,handlePanelToggle:K1,btwSession:D1,closeBtwPanel:f1,handleBtwRetry:S_,handleBtwInject:t1,floatingWidget:v1,handleCloseFloatingWidget:n1,handleFloatingWidgetEvent:p1,extensionStatusPanels:t0,pendingExtensionPanelActions:d1,handleExtensionPanelAction:a_,searchOpen:e1,followupQueueItems:t_,handleInjectQueuedFollowup:h_,handleRemoveQueuedFollowup:A1,viewStateRef:i1,loadPosts:E1,scrollToBottom:L1,searchScope:W1,handleSearch:X_,setSearchScope:V_,enterSearchMode:I1,exitSearchMode:r1,fileRefs:Y1,removeFileRef:x1,clearFileRefs:__,setFileRefsFromCompose:b1,messageRefs:e_,removeMessageRef:H_,clearMessageRefs:_4,setMessageRefsFromCompose:J_,handleCreateSessionFromCompose:z4,handleRestoreBranch:O_,attachActiveEditorFile:w_,followupQueueCount:u4,handleBtwIntercept:f4,handleMessageResponse:j1,handleComposeSubmitError:k1,handlePopOutChat:F4,isComposeBoxAgentActive:$_,activeChatAgents:D_,connectionStatus:c1,activeModel:J1,activeModelUsage:R1,activeThinkingLevel:N1,supportsThinking:j_,contextUsage:Z_,notificationsEnabled:Q_,notificationPermission:p_,handleToggleNotifications:g1,setActiveModel:u1,applyModelState:Y_,setPendingRequest:R_,pendingRequestRef:B1,toggleWorkspace:A_}=_;return B`
    <div class=${CX({workspaceOpen:j,editorOpen:Z,chatOnlyMode:Q,zenMode:Y})} ref=${$}>
      ${q&&B`
        <div class="rename-branch-overlay" onPointerDown=${(G1)=>{if(G1.target===G1.currentTarget)K()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(G1)=>{G1.preventDefault(),N(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${V}
              value=${G}
              onInput=${(G1)=>{let u_=G1.currentTarget?.value??"";X(String(u_))}}
              onKeyDown=${(G1)=>{if(G1.key==="Escape")G1.preventDefault(),K()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${U.kind||"info"}`}>
              ${U.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${L||!U.canSubmit}>
                ${L?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${K}
                disabled=${L}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Q&&B`
        <${CQ}
          onFileSelect=${H}
          visible=${j}
          active=${j||Z}
          onOpenEditor=${A}
          onOpenTerminalTab=${J}
          onOpenVncTab=${W}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&f)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${A_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${R} onTouchStart=${p}></div>
      `}
      ${d&&B`
        <div class="editor-pane-container">
          ${Y&&B`<div class="zen-hover-zone"></div>`}
          ${Z&&B`
            <${wQ}
              tabs=${T}
              activeId=${M}
              onActivate=${F}
              onClose=${x}
              onCloseOthers=${v}
              onCloseAll=${s}
              onTogglePin=${m}
              onTogglePreview=${a}
              onEditSource=${o}
              previewTabs=${_0}
              paneOverrides=${q0}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&f}
              onToggleZen=${Q0}
              zenMode=${Y}
              onPopOutTab=${W0?void 0:K0}
            />
          `}
          ${Z&&B`<div class="editor-pane-host" ref=${U0}></div>`}
          ${Z&&M&&_0.has(M)&&B`
            <${s8}
              getContent=${()=>u0.current?.getContent?.()}
              path=${M}
              onClose=${()=>a(M)}
            />
          `}
          ${D&&f&&B`<div class="dock-splitter" onMouseDown=${k0} onTouchStart=${O0}></div>`}
          ${D&&B`<div class=${`dock-panel${f?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!W0&&B`
                  <button class="dock-panel-action" onClick=${()=>K0(g0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${E} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="dock-panel-body" ref=${f0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${p0} onTouchStart=${l0}></div>
      `}
      <div class="container">
        ${D0&&n0()&&B`<div class="search-results-spacer"></div>`}
        ${Q&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${B0?.agent_name?`@${B0.agent_name}`:I0}
              </span>
              <span class="chat-window-header-subtitle">${B0?.chat_jid||I0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${d0.length>1&&B`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${I0}
                    onChange=${(G1)=>o0(G1.currentTarget.value)}
                  >
                    ${d0.map((G1)=>B`
                      <option key=${G1.chat_jid} value=${G1.chat_jid}>
                        ${w1(G1,{currentChatJid:I0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${B0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${q1}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${B0?.chat_jid&&B0.chat_jid!==(B0.root_chat_jid||B0.chat_jid)&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${c0}
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
        ${(U1||D0)&&B`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${$1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${U1?`#${U1}`:`Search: ${D0} · ${s0}`}</span>
          </div>
        `}
        <${WQ}
          posts=${V0}
          hasMore=${w0?_1:!1}
          onLoadMore=${w0?r:void 0}
          timelineRef=${Y0}
          onHashtagClick=${h}
          onMessageRef=${i}
          onScrollToMessage=${z0}
          onFileRef=${A0}
          onPostClick=${void 0}
          onDeletePost=${M0}
          onOpenWidget=${F0}
          emptyMessage=${U1?`No posts with #${U1}`:D0?`No results for "${D0}"`:void 0}
          agents=${T0}
          user=${v0}
          reverse=${w0}
          removingPostIds=${L0}
          searchQuery=${D0}
        />
        <${V3}
          status=${H0(y0)?null:y0}
          draft=${j0}
          plan=${y}
          thought=${t}
          pendingRequest=${X0}
          intent=${J0}
          turnId=${b0}
          steerQueued=${a0}
          onPanelToggle=${K1}
          showExtensionPanels=${!1}
        />
        <${rZ}
          session=${D1}
          onClose=${f1}
          onRetry=${S_}
          onInject=${t1}
        />
        <${oZ}
          widget=${v1}
          onClose=${n1}
          onWidgetEvent=${p1}
        />
        <${V3}
          extensionPanels=${Array.from(t0.values())}
          pendingPanelActions=${d1}
          onExtensionPanelAction=${a_}
          turnId=${b0}
          steerQueued=${a0}
          onPanelToggle=${K1}
          showCorePanels=${!1}
        />
        <${G3}
          items=${e1?[]:t_}
          onInjectQueuedFollowup=${h_}
          onRemoveQueuedFollowup=${A1}
          onOpenFilePill=${A0}
        />
        <${iZ}
          onPost=${()=>{let{searchQuery:G1,searchOpen:u_}=i1.current||{};if(!G1&&!u_)E1(),L1()}}
          onFocus=${L1}
          searchMode=${e1}
          searchScope=${W1}
          onSearch=${X_}
          onSearchScopeChange=${V_}
          onEnterSearch=${I1}
          onExitSearch=${r1}
          fileRefs=${Y1}
          onRemoveFileRef=${x1}
          onClearFileRefs=${__}
          onSetFileRefs=${b1}
          messageRefs=${e_}
          onRemoveMessageRef=${H_}
          onClearMessageRefs=${_4}
          onSetMessageRefs=${J_}
          onSwitchChat=${o0}
          onRenameSession=${N}
          isRenameSessionInProgress=${L}
          onCreateSession=${z4}
          onDeleteSession=${c0}
          onRestoreSession=${O_}
          activeEditorPath=${Q?null:M}
          onAttachEditorFile=${Q?void 0:w_}
          onOpenFilePill=${A0}
          followupQueueCount=${u4}
          followupQueueItems=${t_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${h_}
          onRemoveQueuedFollowup=${A1}
          onSubmitIntercept=${f4}
          onMessageResponse=${j1}
          onSubmitError=${k1}
          onPopOutChat=${W0?void 0:F4}
          isAgentActive=${$_}
          activeChatAgents=${D_}
          currentChatJid=${I0}
          connectionStatus=${c1}
          activeModel=${J1}
          modelUsage=${R1}
          thinkingLevel=${N1}
          supportsThinking=${j_}
          contextUsage=${Z_}
          notificationsEnabled=${Q_}
          notificationPermission=${p_}
          onToggleNotifications=${g1}
          onModelChange=${u1}
          onModelStateChange=${Y_}
          statusNotice=${H0(y0)?y0:null}
        />
        <${_Q}
          request=${X0}
          onRespond=${()=>{R_(null),B1.current=null}}
        />
      </div>
    </div>
  `}function yX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function Q6(_,$){return{text:_,totalLines:yX(_,$)}}function M3(_,$){return{text:$?.text||"",totalLines:W9(_),fullText:_}}function uQ(_,$,j){return j==="replace"?$:`${_||""}${$}`}function fQ(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function vQ(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function M5(_,$){return Boolean(_)&&!Boolean($)}function bQ(_,$){return _||$||null}function Y6(_){return _?.turn_id||_?.turnId||null}function I5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function I3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function gQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function SX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function mQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:SX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function hQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var wX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function pQ(_){return wX.has(String(_||"").trim())}function RX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function x3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Z={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Z})),j.dispatchEvent(new CustomEvent(RX(_),{detail:Z})),!0}function cQ(_,$,j){let Z=$?.turn_id,Q=$?.chat_jid,Y=typeof Q==="string"&&Q.trim()?Q.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Z,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function lQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function nQ(_,$,j){let{currentChatJid:Z,updateAgentProfile:Q,updateUserProfile:Y,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:N,draftBufferRef:G,thoughtBufferRef:V,steerQueuedTurnIdRef:X,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:H,thoughtThrottleRef:A,viewStateRef:J,followupQueueItemsRef:W,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:f,loadMoreRef:R,lastAgentResponseRef:p,wasAgentActiveRef:d,setActiveTurn:T,applyLiveGeneratedWidgetUpdate:M,setFloatingWidget:F,clearLastActivityFlag:x,handleUiVersionDrift:v,setAgentStatus:s,setAgentDraft:m,setAgentPlan:a,setAgentThought:o,setPendingRequest:_0,clearAgentRunState:q0,getAgentStatus:Q0,noteAgentActivity:K0,showLastActivity:W0,refreshTimeline:U0,refreshModelAndQueueState:u0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:O0,notifyForFinalResponse:g0,setContextUsage:f0,refreshContextUsage:p0,refreshQueueState:l0,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:n0,setSteerQueuedTurnId:B0,applyModelState:I0,getAgentContext:d0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:w1,refreshActiveEditorFromWorkspace:q1,showIntentToast:c0,removeStalledPost:U1,setPosts:$1,preserveTimelineScrollTop:s0}=j,{turnId:V0,isCurrentChatEvent:w0}=cQ(_,$,Z);if(w0)Q($),Y($);if(_==="ui_theme"){k7($);return}let _1=gQ(_);if(_1.kind==="update"){if(!w0)return;if(_1.shouldAdoptTurn&&M5(V0,q.current))T(V0);M($,_1.fallbackStatus||"streaming");return}if(_1.kind==="close"){if(!w0)return;F((h)=>AZ(h,$));return}if(_?.startsWith("agent_")&&!lQ(_))x();if(_==="connected"){if(v($?.app_asset_version))return;s(null),m({text:"",totalLines:0}),a(""),o({text:"",totalLines:0}),_0(null),N.current=null,q0();let h=Z;if(Q0(h).then((i)=>{if(K.current!==h)return;if(!i||i.status!=="active"||!i.data)return;let z0=i.data,A0=Y6(z0);if(A0)T(A0);K0({clearSilence:!0}),W0(z0);let M0=I5(i.thought);if(M0)V.current=M0.text,o(M0);let F0=I5(i.draft);if(F0)G.current=F0.text,m(F0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),s_(J.current))U0();u0();return}if(_==="agent_status"){if(!w0){if($?.type==="done"||$?.type==="error")k0(),O0();return}if($.type==="done"||$.type==="error"){if(s4(V0,q.current))return;if($.type==="done"){if(g0(V0||q.current),s_(J.current))U0();if($.context_usage)f0($.context_usage)}if(p0(),d.current=!1,q0(),D.current.clear(),k0(),l0(),m({text:"",totalLines:0}),a(""),o({text:"",totalLines:0}),_0(null),$.type==="error")s({type:"error",title:$.title||"Agent error"}),setTimeout(()=>s(null),8000);else s(null)}else{if(V0)T(V0);if(K0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",V.current="",m({text:"",totalLines:0}),a(""),o({text:"",totalLines:0});s((h)=>{if(h&&h.type===$.type&&h.title===$.title)return h;return $})}return}if(_==="agent_steer_queued"){if(!w0)return;if(s4(V0,q.current))return;let h=bQ(V0,q.current);if(!h)return;X.current=h,B0(h);return}if(_==="agent_followup_queued"){if(!w0)return;D0((h)=>R9(h,$)),l0();return}if(_==="agent_followup_consumed"){if(!w0)return;let h=E5(W.current,$);if(h)n0(h.remainingQueueCount),D0((i)=>S4(i,h.rowId).items);if(l0(),s_(J.current))U0();return}if(_==="agent_followup_removed"){if(!w0)return;let h=E5(W.current,$);if(h)D.current.add(h.rowId),n0(h.remainingQueueCount),D0((i)=>S4(i,h.rowId).items);l0();return}if(_==="agent_draft_delta"){if(!w0)return;if(s4(V0,q.current))return;if(M5(V0,q.current))T(V0);K0({running:!0,clearSilence:!0}),G.current=fQ(G.current,$);let h=Date.now();if(!H.current||h-H.current>=100){H.current=h;let i=G.current;if(L.current)m((z0)=>M3(i,z0));else m(Q6(i,null))}return}if(_==="agent_draft"){if(!w0)return;if(s4(V0,q.current))return;if(M5(V0,q.current))T(V0);K0({running:!0,clearSilence:!0});let h=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")a((z0)=>uQ(z0,h,i));else if(!L.current)G.current=h,m(Q6(h,$.total_lines));return}if(_==="agent_thought_delta"){if(!w0)return;if(s4(V0,q.current))return;if(M5(V0,q.current))T(V0);K0({running:!0,clearSilence:!0}),V.current=vQ(V.current,$);let h=Date.now();if(U.current&&(!A.current||h-A.current>=100)){A.current=h;let i=V.current;o((z0)=>M3(i,z0))}return}if(_==="agent_thought"){if(!w0)return;if(s4(V0,q.current))return;if(M5(V0,q.current))T(V0);K0({running:!0,clearSilence:!0});let h=$.text||"";if(!U.current)V.current=h,o(Q6(h,$.total_lines));return}if(_==="model_changed"){if(!w0)return;I0($);let h=Z;d0(h).then((i)=>{if(K.current!==h)return;if(i)f0(i)}).catch(()=>{});return}let r=mQ(_,$,Z);if(r.isStatusPanelWidgetEvent){if(r.eventChatJid!==Z)return;if(!r.panelKey)return;if(o0((h)=>n9(h,$)),d9($))w1((h)=>m8(h,r.panelKey));x3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));q1($?.updates);return}if(pQ(_)){if(!w0)return;x3(_,$);let h=hQ(_,$);if(h)c0(h.title,h.detail,h.kind,h.durationMs);return}let Y0=s_(J.current);if(_==="agent_response"){if(!w0)return;U1(),p.current={post:$,turnId:q.current}}if(s9(_,w0,Y0))$1((h)=>a9(h,$)),E.current?.();if(_==="interaction_updated"){if(!r$(w0,Y0))return;$1((h)=>t9(h,$))}if(_==="interaction_deleted"){if(!r$(w0,Y0))return;let h=$?.ids||[];if(h.length){if(s0(()=>{$1((i)=>e9(i,h))}),f.current)R.current?.({preserveScroll:!0,preserveMode:"top"})}}}async function dQ(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Z,wasAgentActiveRef:Q,viewStateRef:Y,refreshTimeline:q,clearAgentRunState:K,agentStatusRef:N,pendingRequestRef:G,thoughtBufferRef:V,draftBufferRef:X,setAgentStatus:U,setAgentDraft:L,setAgentPlan:H,setAgentThought:A,setPendingRequest:J,setActiveTurn:W,noteAgentActivity:D,clearLastActivityFlag:E}=_,f=$;try{let R=await j(f);if(Z.current!==f)return null;if(!R||R.status!=="active"||!R.data){if(Q.current&&s_(Y.current))q();return Q.current=!1,K(),N.current=null,U(null),L({text:"",totalLines:0}),H(""),A({text:"",totalLines:0}),J(null),G.current=null,R??null}Q.current=!0;let p=R.data;N.current=p;let d=Y6(p);if(d)W(d);D({running:!0,clearSilence:!0}),E(),U(p);let T=I5(R.thought);if(T)A((F)=>{if(I3(F,T.text))return F;return V.current=T.text,T});let M=I5(R.draft);if(M)L((F)=>{if(I3(F,M.text))return F;return X.current=M.text,M});return R}catch(R){return console.warn("Failed to fetch agent status:",R),null}}async function iQ(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Z,silentRecoveryRef:Q,silenceRefreshMs:Y,viewStateRef:q,refreshTimeline:K,refreshQueueState:N,refreshAgentStatus:G,now:V=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let X=Z.current||null,U=Q.current,L=V();if(U.inFlight)return null;if(U.turnId===X&&L-U.lastAttemptAt<Y)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=X;try{if(s_(q.current))await K();return await N(),await G()}finally{U.inFlight=!1}}function rQ(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Z,lastSilenceNoticeRef:Q,agentStatusRef:Y,silenceWarningMs:q,silenceFinalizeMs:K,silenceRefreshMs:N,isCompactionStatus:G,setAgentStatus:V,reconcileSilentTurn:X,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Z.current;if(!L)return;let H=U(),A=H-L,J=G(Y.current);if(A>=K){if(!J)V({type:"waiting",title:"Re-syncing after a quiet period…"});X();return}if(A>=q&&H-Q.current>=N){if(!J){let W=Math.floor(A/1000);V({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Q.current=H,X()}}function oQ(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Z,currentTurnIdRef:Q,thoughtExpandedRef:Y,draftExpandedRef:q,draftBufferRef:K,thoughtBufferRef:N,pendingRequestRef:G,lastAgentResponseRef:V,stalledPostIdRef:X,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:H,setAgentPlan:A,setAgentThought:J,setPendingRequest:W,setAgentStatus:D,setPosts:E,dedupePosts:f,now:R=()=>Date.now(),nowIso:p=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Z.current=null,Q.current=null,L(null),Y.current=!1,q.current=!1;let d=(K.current||"").trim();if(K.current="",N.current="",H({text:"",totalLines:0}),A(""),J({text:"",totalLines:0}),W(null),G.current=null,V.current=null,!d){D({type:"error",title:"Response stalled - No content received"});return}let M=`${d}${`

⚠️ Response may be incomplete - the model stopped responding`}`,F=R(),x=p(),v={id:F,timestamp:x,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};X.current=F,E((s)=>s?f([...s,v]):[v]),U.current?.(),D(null)}function T3(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Z=Array.isArray(_)?_:[];if(Z.includes(j))return Z;return[...Z,j]}function P3(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Z=$.trim();if(!Z)return j;if(!j.includes(Z))return j;return j.filter((Q)=>Q!==Z)}function C3(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Z of _){if(typeof Z!=="string")continue;let Q=Z.trim();if(!Q||j.has(Q))continue;j.add(Q),$.push(Q)}return $}async function sQ(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Z,loadPosts:Q}=_;j($),Z(null),await Q($)}async function aQ(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Z,loadPosts:Q}=_;$(null),j(null),Z(null),await Q()}async function tQ(_){let{query:$,scope:j,currentChatJid:Z,currentRootChatJid:Q,searchPosts:Y,setSearchScope:q,setSearchQuery:K,setCurrentHashtag:N,setPosts:G,setHasMore:V}=_,X=typeof $==="string"?$.trim():"";if(!X)return;let U=j==="root"||j==="all"?j:"current";q(U),K(X),N(null),G(null);try{let L=await Y(X,50,0,Z,U,Q);G(Array.isArray(L?.results)?L.results:[]),V(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function eQ(_){let{post:$,posts:j,currentChatJid:Z,deletePost:Q,preserveTimelineScrollTop:Y,setPosts:q,setRemovingPostIds:K,hasMoreRef:N,loadMoreRef:G,confirm:V=(W)=>window.confirm(W),showAlert:X=(W)=>alert(W),scheduleTimeout:U=(W,D)=>{setTimeout(W,D)}}=_;if(!$)return;let L=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Z,A=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(A>0){if(!V(`Delete this message and its ${A} replies?`))return}let J=(W)=>{if(!W.length)return;K((D)=>{let E=new Set(D);return W.forEach((f)=>E.add(f)),E}),U(()=>{if(Y(()=>{q((D)=>D?D.filter((E)=>!W.includes(E.id)):D)}),K((D)=>{let E=new Set(D);return W.forEach((f)=>E.delete(f)),E}),N.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Q(L,A>0,H);if(W?.ids?.length)J(W.ids)}catch(W){let D=W instanceof Error?W.message:String(W||"");if(A===0&&D.includes("Replies exist")){if(!V("Delete this message and its replies?"))return;let f=await Q(L,!0,H);if(f?.ids?.length)J(f.ids);return}console.error("Failed to delete post:",W),X(`Failed to delete message: ${D}`)}}async function _Y(_){let{id:$,targetChatJid:j,currentChatJid:Z,getThread:Q,setPosts:Y,getElementById:q=(X)=>document.getElementById(X),scheduleRaf:K=(X)=>requestAnimationFrame(X),scheduleTimeout:N=(X,U)=>{setTimeout(X,U)}}=_,G=(X)=>{X.scrollIntoView({behavior:"smooth",block:"center"}),X.classList.add("post-highlight"),N(()=>X.classList.remove("post-highlight"),2000)},V=q(`post-${$}`);if(V){G(V);return}try{let X=typeof j==="string"&&j.trim()?j.trim():Z,L=(await Q($,X))?.thread?.[0];if(!L)return;Y((H)=>{if(!H)return[L];if(H.some((A)=>A.id===L.id))return H;return[...H,L]}),K(()=>{N(()=>{let H=q(`post-${$}`);if(H)G(H)},50)})}catch(X){console.error("[scrollToMessage] Failed to fetch message",$,X)}}function $Y(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function jY(_){let{question:$,currentChatJid:j,streamSidePrompt:Z,resolveBtwChatJid:Q,showIntentToast:Y,btwAbortRef:q,setBtwSession:K}=_,N=String($||"").trim();if(!N)return Y("BTW needs a question","Usage: /btw <question>","warning"),!0;if(q.current)q.current.abort();let G=new AbortController;q.current=G,K({question:N,answer:"",thinking:"",error:null,model:null,status:"running"});try{let V=await Z(N,{signal:G.signal,chatJid:Q(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(X)=>{if(X==="side_prompt_start")K((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(X)=>{K((U)=>U?{...U,thinking:`${U.thinking||""}${X||""}`}:U)},onTextDelta:(X)=>{K((U)=>U?{...U,answer:`${U.answer||""}${X||""}`}:U)}});if(q.current!==G)return!0;K((X)=>X?{...X,answer:V?.result||X.answer||"",thinking:V?.thinking||X.thinking||"",model:V?.model||null,status:"success",error:null}:X)}catch(V){if(G.signal.aborted)return!0;K((X)=>X?{...X,status:"error",error:V?.payload?.error||V?.message||"BTW request failed."}:X)}finally{if(q.current===G)q.current=null}return!0}async function ZY(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Z,runBtwPrompt:Q,showIntentToast:Y}=_,q=j($);if(!q)return!1;if(q.type==="help")return Y("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return Z(),Y("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await Q(q.question),!0;return!1}async function QY(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Z,currentChatJid:Q,sendAgentMessage:Y,handleMessageResponse:q,showIntentToast:K}=_,N=j($);if(!N)return!1;try{let G=await Y("default",N,null,[],Z?"queue":null,Q);return q(G),K(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(G){return K("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning"),!1}}var uX=Ij(),YY=P6,fX=y6,vX=w6,bX=b6,gX=g6,y3=R6,S3=a1(l1,"getAgentContext",null),mX=a1(l1,"getAutoresearchStatus",null),hX=a1(l1,"stopAutoresearch",{status:"ok"}),pX=a1(l1,"dismissAutoresearch",{status:"ok"}),qY=a1(l1,"getAgentModels",{current:null,models:[]}),KY=a1(l1,"getActiveChatAgents",{chats:[]}),w3=a1(l1,"getChatBranches",{chats:[]}),cX=a1(l1,"renameChatBranch",null),lX=a1(l1,"pruneChatBranch",null),nX=a1(l1,"restoreChatBranch",null),NY=a1(l1,"getAgentQueueState",{count:0}),GY=a1(l1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),XY=a1(l1,"removeAgentQueueItem",{removed:!1}),dX=a1(l1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});h0.register(r6);h0.register(T$);h0.register(x$);h0.register(P$);h0.register(C$);h0.register(y$);h0.register(w$);h0.register(R$);h0.register(f$);h0.register(g$);h0.register(m$);h0.register(J$);o6();h0.register(t6);h0.register(e6);function iX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Z,panePopoutMode:Q,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:N}=S0(()=>Pj(_),[_]),[G,V]=g("disconnected"),[X,U]=g(()=>X4()),[L,H]=g(null),[A,J]=g(null),[W,D]=g(!1),[E,f]=g("current"),[R,p]=g([]),[d,T]=g([]),[M,F]=g(null),{agentStatus:x,setAgentStatus:v,agentDraft:s,setAgentDraft:m,agentPlan:a,setAgentPlan:o,agentThought:_0,setAgentThought:q0,pendingRequest:Q0,setPendingRequest:K0,currentTurnId:W0,setCurrentTurnId:U0,steerQueuedTurnId:u0,setSteerQueuedTurnId:k0,lastAgentEventRef:O0,lastSilenceNoticeRef:g0,isAgentRunningRef:f0,draftBufferRef:p0,thoughtBufferRef:l0,pendingRequestRef:D0,stalledPostIdRef:n0,currentTurnIdRef:B0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:d0,draftExpandedRef:o0}=q9(),[w1,q1]=g({}),[c0,U1]=g(null),[$1,s0]=g(null),[V0,w0]=g(!1),[_1,r]=g(null),[Y0,h]=g([]),[i,z0]=g([]),[A0,M0]=g(null),[F0,T0]=g(()=>new Map),[v0,L0]=g(()=>new Set),[y0,H0]=g([]),[j0,y]=g(!1),[t,X0]=g(()=>Tj()),[J0,b0]=g(null),a0=I(new Set),K1=S0(()=>Y0.find((C)=>C?.chat_jid===j)||null,[Y0,j]),D1=S0(()=>i.find((C)=>C?.chat_jid===j)||K1||null,[K1,i,j]),f1=D1?.root_chat_jid||K1?.root_chat_jid||j,S_=xj(E),[t1,v1]=g(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),n1=y0.length,p1=I(new Set),t0=I([]),d1=I(new Set),a_=I(0),e1=I({inFlight:!1,lastAttemptAt:0,turnId:null});p1.current=new Set(y0.map((C)=>C.row_id)),t0.current=y0;let{notificationsEnabled:t_,notificationPermission:h_,toggleNotifications:A1,notify:i1}=Q9(),[E1,L1]=g(()=>new Set),[W1,X_]=g(()=>J5("workspaceOpen",!0)),V_=I(null),{editorOpen:I1,tabStripTabs:r1,tabStripActiveId:Y1,previewTabs:x1,tabPaneOverrides:__,openEditor:b1,closeEditor:e_,handleTabClose:H_,handleTabActivate:_4,handleTabCloseOthers:J_,handleTabCloseAll:z4,handleTabTogglePin:O_,handleTabTogglePreview:w_,handleTabEditSource:u4,revealInExplorer:f4}=N9({onTabClosed:(C)=>V_.current?.(C)}),j1=I(null),k1=I(null),F4=I(null),$_=I(null),D_=h0.getDockPanes().length>0,[c1,J1]=g(!1),R1=P(()=>J1((C)=>!C),[]),N1=P(()=>{b1(U5,{label:"Terminal"})},[b1]),j_=P(()=>{b1(W4,{label:"VNC"})},[b1]),Z_=S0(()=>Bj(r1,Y1),[Y1,r1]),Q_=S0(()=>zj(__,Y1),[__,Y1]),p_=S0(()=>Fj(q,Z_,Y),[Z_,q,Y]),g1=S0(()=>Hj(r1,x1,Y1),[x1,Y1,r1]),u1=S0(()=>Jj(Y,W4),[Y]),Y_=S0(()=>Oj(Y,U5,g1,u1),[u1,g1,Y]),R_=Dj(Q,Z,I1,D_,c1),[B1,A_]=g(!1),G1=I(!1),u_=P(()=>{if(!I1||Z)return;if(G1.current=c1,c1)J1(!1);A_(!0)},[I1,Z,c1]),E_=P(()=>{if(!B1)return;if(A_(!1),G1.current)J1(!0),G1.current=!1},[B1]),v4=P(()=>{if(B1)E_();else u_()},[B1,u_,E_]);b(()=>{if(B1&&!I1)E_()},[B1,I1,E_]),b(()=>{if(!Q||!Y)return;if(r0.getActiveId()===Y)return;b1(Y,q?{label:q}:void 0)},[b1,q,Q,Y]),b(()=>{let C=j1.current;if(!C)return;if(k1.current)k1.current.dispose(),k1.current=null;let e=Y1;if(!e)return;let E0={path:e,mode:"edit"},e0=(Q_?h0.get(Q_):null)||h0.resolve(E0)||h0.get("editor");if(!e0){C.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let R0=e0.mount(C,E0);k1.current=R0,R0.onDirtyChange?.((M1)=>{r0.setDirty(e,M1)}),R0.onSaveRequest?.(()=>{}),R0.onClose?.(()=>{e_()});let Z1=r0.getViewState(e);if(Z1&&typeof R0.restoreViewState==="function")requestAnimationFrame(()=>R0.restoreViewState(Z1));if(typeof R0.onViewStateChange==="function")R0.onViewStateChange((M1)=>{r0.saveViewState(e,M1)});return requestAnimationFrame(()=>R0.focus()),()=>{if(k1.current===R0)R0.dispose(),k1.current=null}},[Y1,Q_,e_]);let b4=P(async(C)=>{let e=typeof Y1==="string"?Y1.trim():"",E0=k1.current;if(!e||!E0?.setContent)return;if(typeof E0.isDirty==="function"&&E0.isDirty())return;if(!(Array.isArray(C)&&C.length>0?C.some((R0)=>{let Z1=Array.isArray(R0?.changed_paths)?R0.changed_paths.map((h1)=>typeof h1==="string"?h1.trim():"").filter(Boolean):[];if(Z1.length>0)return Z1.some((h1)=>h1==="."||h1===e);let M1=typeof R0?.path==="string"?R0.path.trim():"";return!M1||M1==="."||M1===e}):!0))return;try{let R0=await f5(e,1e6,"edit"),Z1=typeof R0?.text==="string"?R0.text:"",M1=typeof R0?.mtime==="string"&&R0.mtime.trim()?R0.mtime.trim():new Date().toISOString();E0.setContent(Z1,M1)}catch(R0){console.warn("[workspace_update] Failed to refresh active pane:",R0)}},[Y1]);b(()=>{let C=F4.current;if($_.current)$_.current.dispose(),$_.current=null;if(!C||!D_||!c1)return;let e=h0.getDockPanes()[0];if(!e){C.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let E0=e.mount(C,{mode:"view"});return $_.current=E0,requestAnimationFrame(()=>E0.focus?.()),()=>{if($_.current===E0)E0.dispose(),$_.current=null}},[D_,c1]);let[f_,c_]=g({name:"You",avatar_url:null,avatar_background:null}),g4=I(null),$4=I(!1),a4=I(!1),j4=I(!1),l_=I(null),o1=I(j),H4=I(new Map),J4=I(j),x5=I(0),O1=I(0),O4=I({}),t4=I({name:null,avatar_url:null}),q_=I({currentHashtag:null,searchQuery:null,searchOpen:!1}),K_=I(null),Z4=I(null),m4=I(0),h4=I(0),e4=I(0),Q4=I(null),k_=I(null),_5=I(null),D4=I(null),p4=I(0),M_=I({title:null,avatarBase:null}),O=I(null),k=I(!1),[u,S]=g(!1),n=I(0),[Z0,N0]=g(!1),[G0,$0]=g(""),P0=S0(()=>p8(G0,D1?.agent_name||""),[D1?.agent_name,G0]),P1=I(null),s1=P(()=>{if(O.current)clearTimeout(O.current),O.current=null;F(null)},[]);L9(30000),b(()=>{if(!Z0)return;requestAnimationFrame(()=>{if(Z0)P1.current?.focus(),P1.current?.select?.()})},[Z0]),b(()=>{return E7()},[]),b(()=>{return Xj(U)},[]),b(()=>{Q1("workspaceOpen",String(W1))},[W1]),b(()=>{return Gj()},[]),b(()=>{return()=>{s1()}},[s1]),b(()=>{if(!t){Q1(BTW_SESSION_KEY,"");return}Q1(BTW_SESSION_KEY,JSON.stringify({question:t.question||"",answer:t.answer||"",thinking:t.thinking||"",error:t.error||null,status:t.status||"success"}))},[t]),b(()=>{O4.current=w1||{}},[w1]),b(()=>{o1.current=j},[j]),b(()=>{t4.current=f_||{name:"You",avatar_url:null,avatar_background:null}},[f_]);let N_=P((C,e,E0=null)=>{if(typeof document>"u")return;let e0=(C||"").trim()||"PiClaw";if(M_.current.title!==e0){document.title=e0;let v_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(v_&&v_.getAttribute("content")!==e0)v_.setAttribute("content",e0);M_.current.title=e0}let R0=document.getElementById("dynamic-favicon");if(!R0)return;let Z1=R0.getAttribute("data-default")||R0.getAttribute("href")||"/favicon.ico",M1=e||Z1,h1=e?`${M1}|${E0||""}`:M1;if(M_.current.avatarBase!==h1){let v_=e?`${M1}${M1.includes("?")?"&":"?"}v=${E0||Date.now()}`:M1;R0.setAttribute("href",v_),M_.current.avatarBase=h1}},[]),T5=P((C)=>{p((e)=>T3(e,C))},[]),z=P((C)=>{p((e)=>P3(e,C))},[]);V_.current=z;let w=P(()=>{p([])},[]),l=P((C)=>{p(C3(C))},[]),c=P((C,e=null,E0="info",e0=3000)=>{s1(),F({title:C,detail:e||null,kind:E0||"info"}),O.current=setTimeout(()=>{F((R0)=>R0?.title===C?null:R0)},e0)},[s1]),x0=P((C)=>{let e=z9(C,{editorOpen:I1,resolvePane:(E0)=>h0.resolve(E0)});if(e.kind==="open"){b1(e.path);return}if(e.kind==="toast")c(e.title,e.detail,e.level)},[I1,b1,c]),z1=P(()=>{let C=Y1;if(C)T5(C)},[Y1,T5]),T1=P((C)=>{T((e)=>T3(e,C))},[]),C1=P(async(C,e=null)=>{await _Y({id:C,targetChatJid:e,currentChatJid:j,getThread:C6,setPosts:U_})},[j,U_]),Y4=P((C)=>{T((e)=>P3(e,C))},[]),c4=P(()=>{T([])},[]),$5=P((C)=>{T(C3(C))},[]),j5=P((C)=>{let e=typeof C==="string"&&C.trim()?C.trim():"Could not send your message.";c("Compose failed",e,"error",5000)},[c]),q4=P((C={})=>{let e=Date.now();if(O0.current=e,C.running)f0.current=!0,y((E0)=>E0?E0:!0);if(C.clearSilence)g0.current=0},[y]),m1=P(()=>{if(D4.current)clearTimeout(D4.current),D4.current=null;p4.current=0},[]);b(()=>()=>{m1()},[m1]);let Z5=P(()=>{m1(),v((C)=>{if(!C)return C;if(!(C.last_activity||C.lastActivity))return C;let{last_activity:e,lastActivity:E0,...e0}=C;return e0})},[m1]),A4=P((C)=>{if(!C)return;m1();let e=Date.now();p4.current=e,v({type:C.type||"active",last_activity:!0}),D4.current=setTimeout(()=>{if(p4.current!==e)return;v((E0)=>{if(!E0||!(E0.last_activity||E0.lastActivity))return E0;return null})},X9)},[m1]),F1=P(()=>{f0.current=!1,y(!1),O0.current=null,g0.current=0,p0.current="",l0.current="",D0.current=null,k_.current=null,B0.current=null,I0.current=null,l_.current=null,e1.current={inFlight:!1,lastAttemptAt:0,turnId:null},m1(),U0(null),k0(null),d0.current=!1,o0.current=!1},[m1,U0,k0,y]),n_=P((C)=>{if(!A9({remainingQueueCount:C,currentTurnId:B0.current,isAgentTurnActive:j0}))return;I0.current=null,k0(null)},[j0,k0]),Q5=P(()=>qZ({agentStatus:x,agentDraft:s,agentPlan:a,agentThought:_0,pendingRequest:Q0,currentTurnId:W0,steerQueuedTurnId:u0,isAgentTurnActive:j0,followupQueueItems:y0,activeModel:c0,activeThinkingLevel:$1,supportsThinking:V0,activeModelUsage:_1,contextUsage:A0,isAgentRunning:f0.current,wasAgentActive:j4.current,draftBuffer:p0.current,thoughtBuffer:l0.current,lastAgentEvent:O0.current,lastSilenceNotice:g0.current,lastAgentResponse:k_.current,currentTurnIdRef:B0.current,steerQueuedTurnIdRef:I0.current,thoughtExpanded:d0.current,draftExpanded:o0.current,agentStatusRef:l_.current,silentRecovery:e1.current}),[c0,_1,$1,s,a,x,_0,A0,W0,y0,j0,Q0,u0,V0]),Z8=P((C)=>{KZ({snapshot:C,clearLastActivityTimer:m1,refs:{isAgentRunningRef:f0,wasAgentActiveRef:j4,lastAgentEventRef:O0,lastSilenceNoticeRef:g0,draftBufferRef:p0,thoughtBufferRef:l0,pendingRequestRef:D0,lastAgentResponseRef:k_,currentTurnIdRef:B0,steerQueuedTurnIdRef:I0,agentStatusRef:l_,silentRecoveryRef:e1,thoughtExpandedRef:d0,draftExpandedRef:o0},setters:{setIsAgentTurnActive:y,setAgentStatus:v,setAgentDraft:m,setAgentPlan:o,setAgentThought:q0,setPendingRequest:K0,setCurrentTurnId:U0,setSteerQueuedTurnId:k0,setFollowupQueueItems:H0,setActiveModel:U1,setActiveThinkingLevel:s0,setSupportsThinking:w0,setActiveModelUsage:r,setContextUsage:M0}})},[m1,U0,H0,y,k0]),Y5=P((C)=>{if(!C)return;if(B0.current===C)return;B0.current=C,e1.current={inFlight:!1,lastAttemptAt:0,turnId:C},U0(C),I0.current=null,k0(null),p0.current="",l0.current="",m({text:"",totalLines:0}),o(""),q0({text:"",totalLines:0}),K0(null),D0.current=null,k_.current=null,d0.current=!1,o0.current=!1},[U0,k0]),E4=P((C)=>{if(typeof document<"u"){let v_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&v_)return}let e=k_.current;if(!e||!e.post)return;if(C&&e.turnId&&e.turnId!==C)return;let E0=e.post;if(E0.id&&Q4.current===E0.id)return;let e0=String(E0?.data?.content||"").trim();if(!e0)return;Q4.current=E0.id||Q4.current,k_.current=null;let R0=e0.replace(/\s+/g," ").slice(0,200),Z1=O4.current||{},h1=(E0?.data?.agent_id?Z1[E0.data.agent_id]:null)?.name||"Pi";i1(h1,R0)},[i1]),I_=P(async(C,e)=>{await B9({panelKey:C,expanded:e,currentTurnIdRef:B0,thoughtExpandedRef:d0,draftExpandedRef:o0,setAgentThoughtVisibility:gX,getAgentThought:bX,thoughtBufferRef:l0,draftBufferRef:p0,setAgentThought:q0,setAgentDraft:m})},[]),k4=I(null),P5=P(()=>{let C=K_.current;if(!C)return;if(!(Math.abs(C.scrollTop)>150))C.scrollTop=0},[]);k4.current=P5;let q6=P((C)=>{let e=K_.current;if(!e||typeof C!=="function"){C?.();return}let{currentHashtag:E0,searchQuery:e0,searchOpen:R0}=q_.current||{},Z1=!((e0||R0)&&!E0),M1=Z1?e.scrollHeight-e.scrollTop:e.scrollTop;C(),requestAnimationFrame(()=>{let h1=K_.current;if(!h1)return;if(Z1){let v_=Math.max(h1.scrollHeight-M1,0);h1.scrollTop=v_}else{let v_=Math.max(h1.scrollHeight-h1.clientHeight,0),lY=Math.min(M1,v_);h1.scrollTop=lY}})},[]),Q8=P((C)=>{let e=K_.current;if(!e||typeof C!=="function"){C?.();return}let E0=e.scrollTop;C(),requestAnimationFrame(()=>{let e0=K_.current;if(!e0)return;let R0=Math.max(e0.scrollHeight-e0.clientHeight,0);e0.scrollTop=Math.min(E0,R0)})},[]),R3=P((C)=>y9(C,p1.current),[]),{posts:Y8,setPosts:U_,hasMore:VY,setHasMore:K6,hasMoreRef:u3,loadPosts:d_,refreshTimeline:x_,loadMore:UY,loadMoreRef:f3}=Y9({preserveTimelineScroll:q6,preserveTimelineScrollTop:Q8,chatJid:j}),q5=S0(()=>R3(Y8),[Y8,y0,R3]),q8=P(()=>{let C=n0.current;if(!C)return;U_((e)=>e?e.filter((E0)=>E0.id!==C):e),n0.current=null},[U_]),{handleSplitterMouseDown:LY,handleSplitterTouchStart:WY,handleEditorSplitterMouseDown:BY,handleEditorSplitterTouchStart:zY,handleDockSplitterMouseDown:FY,handleDockSplitterTouchStart:HY}=K9({appShellRef:Z4,sidebarWidthRef:m4,editorWidthRef:h4,dockHeightRef:e4}),v3=P(()=>{oQ({isAgentRunningRef:f0,lastSilenceNoticeRef:g0,lastAgentEventRef:O0,currentTurnIdRef:B0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftBufferRef:p0,thoughtBufferRef:l0,pendingRequestRef:D0,lastAgentResponseRef:k_,stalledPostIdRef:n0,scrollToBottomRef:k4,setCurrentTurnId:U0,setAgentDraft:m,setAgentPlan:o,setAgentThought:q0,setPendingRequest:K0,setAgentStatus:v,setPosts:U_,dedupePosts:t5})},[U0]);b(()=>{q_.current={currentHashtag:L,searchQuery:A,searchOpen:W}},[L,A,W]);let y1=P(()=>{_j({currentChatJid:j,queueRefreshGenRef:a_,activeChatJidRef:o1,dismissedQueueRowIdsRef:d1,getAgentQueueState:NY,setFollowupQueueItems:H0,clearQueuedSteerStateIfStale:n_})},[n_,j]),L_=P(async()=>{await $j({currentChatJid:j,activeChatJidRef:o1,getAgentContext:S3,setContextUsage:M0})},[j]),K4=P(async()=>{await jj({currentChatJid:j,activeChatJidRef:o1,getAutoresearchStatus:mX,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:L0})},[j]),i_=P(async()=>{return await dQ({currentChatJid:j,getAgentStatus:y3,activeChatJidRef:o1,wasAgentActiveRef:j4,viewStateRef:q_,refreshTimeline:x_,clearAgentRunState:F1,agentStatusRef:l_,pendingRequestRef:D0,thoughtBufferRef:l0,draftBufferRef:p0,setAgentStatus:v,setAgentDraft:m,setAgentPlan:o,setAgentThought:q0,setPendingRequest:K0,setActiveTurn:Y5,noteAgentActivity:q4,clearLastActivityFlag:Z5})},[F1,Z5,j,q4,x_,Y5]),b3=P(async()=>{return await iQ({isAgentRunningRef:f0,pendingRequestRef:D0,currentTurnIdRef:B0,silentRecoveryRef:e1,silenceRefreshMs:c$,viewStateRef:q_,refreshTimeline:x_,refreshQueueState:y1,refreshAgentStatus:i_})},[i_,y1,x_]);b(()=>{let C=Math.min(1000,Math.max(100,Math.floor(p$/2))),e=setInterval(()=>{rQ({isAgentRunningRef:f0,pendingRequestRef:D0,lastAgentEventRef:O0,lastSilenceNoticeRef:g0,agentStatusRef:l_,silenceWarningMs:p$,silenceFinalizeMs:G9,silenceRefreshMs:c$,isCompactionStatus:y4,setAgentStatus:v,reconcileSilentTurn:b3})},C);return()=>clearInterval(e)},[b3]);let g3=P((C)=>{return Cj({serverVersion:C,currentAppAssetVersion:uX,staleUiVersionRef:g4,staleUiReloadScheduledRef:$4,tabStoreHasUnsaved:()=>r0.hasUnsaved(),isAgentRunningRef:f0,pendingRequestRef:D0,showIntentToast:c})},[f0,D0,c]),JY=P((C)=>{yj({status:C,setConnectionStatus:V,setAgentStatus:v,setAgentDraft:m,setAgentPlan:o,setAgentThought:q0,setPendingRequest:K0,pendingRequestRef:D0,clearAgentRunState:F1,hasConnectedOnceRef:a4,viewStateRef:q_,refreshTimeline:x_,refreshAgentStatus:i_,refreshQueueState:y1,refreshContextUsage:L_})},[F1,x_,i_,y1,L_]),OY=P(async(C)=>{await sQ({hashtag:C,setCurrentHashtag:H,setPosts:U_,loadPosts:d_})},[d_]),DY=P(async()=>{await aQ({setCurrentHashtag:H,setSearchQuery:J,setPosts:U_,loadPosts:d_})},[d_]),AY=P(async(C,e=E)=>{await tQ({query:C,scope:e,currentChatJid:j,currentRootChatJid:f1,searchPosts:YY,setSearchScope:f,setSearchQuery:J,setCurrentHashtag:H,setPosts:U_,setHasMore:K6})},[j,f1,E]),EY=P(()=>{D(!0),J(null),H(null),f("current"),U_([])},[]),kY=P(()=>{D(!1),J(null),d_()},[d_]),oX=P(()=>{},[]),MY=!L&&!A&&!W,IY=P(async(C)=>{await eQ({post:C,posts:q5,currentChatJid:j,deletePost:fX,preserveTimelineScrollTop:Q8,setPosts:U_,setRemovingPostIds:L1,hasMoreRef:u3,loadMoreRef:f3})},[j,q5,Q8]),{updateAgentProfile:m3,updateUserProfile:h3,applyModelState:N6,refreshModelState:sX,refreshActiveChatAgents:T_,refreshCurrentChatBranches:P_,refreshModelAndQueueState:K8}=Kj({getAgents:vX,setAgents:q1,setUserProfile:c_,applyBranding:N_,readStoredNumber:d5,sidebarWidthRef:m4,appShellRef:Z4,currentChatJid:j,currentRootChatJid:f1,getAgentModels:qY,getActiveChatAgents:KY,getChatBranches:w3,activeChatJidRef:o1,setActiveChatAgents:h,setCurrentChatBranches:z0,setActiveModel:U1,setActiveThinkingLevel:s0,setSupportsThinking:w0,setActiveModelUsage:r,agentsRef:O4,refreshQueueState:y1,refreshContextUsage:L_,refreshAutoresearchStatus:K4}),C5=j0||x!==null,xY=P((C)=>{uZ({queuedItem:C,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:d1,currentChatJid:j,refreshQueueState:y1,setFollowupQueueItems:H0,showIntentToast:c,steerAgentQueueItem:GY,removeAgentQueueItem:XY})},[j,y1,H0,c]),TY=P((C)=>{fZ({queuedItem:C,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:d1,currentChatJid:j,refreshQueueState:y1,setFollowupQueueItems:H0,showIntentToast:c,clearQueuedSteerStateIfStale:n_,steerAgentQueueItem:GY,removeAgentQueueItem:XY})},[n_,j,y1,H0,c]),y5=P((C)=>{c9({response:C,refreshActiveChatAgents:T_,refreshCurrentChatBranches:P_,refreshContextUsage:L_,refreshAutoresearchStatus:K4,refreshQueueState:y1})},[T_,K4,P_,L_,y1]),PY=P(async(C,e)=>{let E0=typeof C?.key==="string"?C.key:"",e0=typeof e?.key==="string"?e.key:"",R0=i$(E0,e0);if(!E0||!e0)return;L0((Z1)=>i9(Z1,E0,e0));try{let Z1=await o9({panel:C,action:e,currentChatJid:j,stopAutoresearch:hX,dismissAutoresearch:pX,writeClipboard:(M1)=>navigator.clipboard.writeText(M1)});if(Z1.refreshAutoresearchStatus)K4();if(Z1.toast)c(Z1.toast.title,Z1.toast.detail,Z1.toast.kind,Z1.toast.durationMs)}catch(Z1){c("Panel action failed",Z1?.message||"Could not complete that action.","warning")}finally{L0((Z1)=>r9(Z1,R0))}},[j,K4,c]),G6=P(()=>{$Y({btwAbortRef:_5,setBtwSession:X0})},[]),N8=P(async(C)=>{return await jY({question:C,currentChatJid:j,streamSidePrompt:dX,resolveBtwChatJid:H9,showIntentToast:c,btwAbortRef:_5,setBtwSession:X0})},[j,c]),CY=P(async({content:C})=>{return await ZY({content:C,parseBtwCommand:F9,closeBtwPanel:G6,runBtwPrompt:N8,showIntentToast:c})},[G6,N8,c]),yY=P(()=>{if(t?.question)N8(t.question)},[t,N8]),SY=P(async()=>{await QY({btwSession:t,buildBtwInjectionText:D9,isComposeBoxAgentActive:C5,currentChatJid:j,sendAgentMessage:n4,handleMessageResponse:y5,showIntentToast:c})},[t,j,y5,C5,c]),p3=P(async(C=null)=>{return RZ({requestPayload:C,currentChatJid:j,currentRootChatJid:f1,getAgentStatus:y3,getAgentContext:S3,getAgentQueueState:NY,getAgentModels:qY,getActiveChatAgents:KY,getChatBranches:w3,getTimeline:l4,rawPosts:Y8,activeChatAgents:Y0,currentChatBranches:i,contextUsage:A0,followupQueueItems:t0.current,activeModel:c0,activeThinkingLevel:$1,supportsThinking:V0,isAgentTurnActive:j0})},[Y0,c0,$1,A0,i,j,f1,j0,Y8,V0]);b(()=>{T0(new Map),L0(new Set)},[j]),b(()=>{let C=!1;return qj({currentHashtag:L,searchQuery:A,searchScope:E,currentChatJid:j,currentRootChatJid:f1,loadPosts:d_,searchPosts:YY,setPosts:U_,setHasMore:K6,scrollToBottom:P5,isCancelled:()=>C}),()=>{C=!0}},[j,L,A,E,f1,d_,P5,K6,U_]),b(()=>{let C=J4.current||j;H4.current.set(C,Q5())},[j,Q5]),b(()=>{let C=J4.current||j;if(C===j)return;H4.current.set(C,Q5()),J4.current=j,d1.current.clear(),Z8(H4.current.get(j)||null),y1(),i_(),L_()},[j,i_,L_,y1,Z8,Q5]);let wY=P(()=>{Qj({viewStateRef:q_,refreshTimeline:x_,refreshModelAndQueueState:K8})},[K8,x_]),c3=P((C,e="streaming")=>{let E0=new Date().toISOString();b0((e0)=>DZ(e0,C,{fallbackStatus:e,currentChatJid:j,dismissedSessionKeys:a0.current,updatedAt:E0}))},[j]),X6=P((C,e)=>{nQ(C,e,{currentChatJid:j,updateAgentProfile:m3,updateUserProfile:h3,currentTurnIdRef:B0,activeChatJidRef:o1,pendingRequestRef:D0,draftBufferRef:p0,thoughtBufferRef:l0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftThrottleRef:x5,thoughtThrottleRef:O1,viewStateRef:q_,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:d1,scrollToBottomRef:k4,hasMoreRef:u3,loadMoreRef:f3,lastAgentResponseRef:k_,wasAgentActiveRef:j4,setActiveTurn:Y5,applyLiveGeneratedWidgetUpdate:c3,setFloatingWidget:b0,clearLastActivityFlag:Z5,handleUiVersionDrift:g3,setAgentStatus:v,setAgentDraft:m,setAgentPlan:o,setAgentThought:q0,setPendingRequest:K0,clearAgentRunState:F1,getAgentStatus:y3,noteAgentActivity:q4,showLastActivity:A4,refreshTimeline:x_,refreshModelAndQueueState:K8,refreshActiveChatAgents:T_,refreshCurrentChatBranches:P_,notifyForFinalResponse:E4,setContextUsage:M0,refreshContextUsage:L_,refreshQueueState:y1,setFollowupQueueItems:H0,clearQueuedSteerStateIfStale:n_,setSteerQueuedTurnId:k0,applyModelState:N6,getAgentContext:S3,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:L0,refreshActiveEditorFromWorkspace:b4,showIntentToast:c,removeStalledPost:q8,setPosts:U_,preserveTimelineScrollTop:Q8})},[c3,N6,F1,Z5,n_,j,g3,q4,E4,T_,b4,L_,P_,K8,y1,x_,q8,Y5,H0,c,A4,m3,h3]);b(()=>{if(typeof window>"u")return;let C=window.__PICLAW_TEST_API||{};return C.emit=X6,C.reset=()=>{q8(),F1(),v(null),m({text:"",totalLines:0}),o(""),q0({text:"",totalLines:0}),K0(null)},C.finalize=()=>v3(),window.__PICLAW_TEST_API=C,()=>{if(window.__PICLAW_TEST_API===C)window.__PICLAW_TEST_API=void 0}},[F1,v3,X6,q8]),Z9({handleSseEvent:X6,handleConnectionStatusChange:JY,loadPosts:d_,onWake:wY,chatJid:j}),b(()=>{if(!q5||q5.length===0)return;let C=location.hash;if(!C||!C.startsWith("#msg-"))return;let e=C.slice(5);C1(e),history.replaceState(null,"",location.pathname+location.search)},[q5,C1]);let V6=x!==null;b(()=>{if(G!=="connected")return;let e=setInterval(()=>{Sj({viewStateRef:q_,isAgentActive:V6,refreshTimeline:x_,refreshQueueState:y1,refreshAgentStatus:i_,refreshContextUsage:L_,refreshAutoresearchStatus:K4})},V6?15000:60000);return()=>clearInterval(e)},[G,V6,i_,K4,L_,y1,x_]),b(()=>{return Vj(()=>{i_(),L_(),y1(),K4()})},[i_,K4,L_,y1]);let RY=P(()=>{dj(X_)},[]),uY=P((C)=>{ij({nextChatJid:C,currentChatJid:j,chatOnlyMode:Z,navigate:$})},[Z,j,$]),U6=P(()=>{rj({currentBranchRecord:D1,renameBranchInFlight:k.current,renameBranchLockUntil:n.current,getFormLock:a$,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:N0})},[D1]),L6=P(()=>{oj({setIsRenameBranchFormOpen:N0,setRenameBranchNameDraft:$0})},[]),fY=P(async(C)=>{await sj({currentBranchRecord:D1,nextName:C,openRenameForm:U6,renameBranchInFlightRef:k,renameBranchLockUntilRef:n,getFormLock:a$,setIsRenamingBranch:S,renameChatBranch:cX,refreshActiveChatAgents:T_,refreshCurrentChatBranches:P_,showIntentToast:c,closeRenameForm:L6})},[L6,D1,T_,P_,U6,S,c]),vY=P(async(C=null)=>{await aj({targetChatJid:C,currentChatJid:j,currentBranchRecord:D1,currentChatBranches:i,activeChatAgents:Y0,pruneChatBranch:lX,refreshActiveChatAgents:T_,refreshCurrentChatBranches:P_,showIntentToast:c,chatOnlyMode:Z,navigate:$})},[Y0,Z,D1,i,j,$,T_,P_,c]),bY=P(async(C)=>{await tj({targetChatJid:C,restoreChatBranch:nX,currentChatBranches:i,refreshActiveChatAgents:T_,refreshCurrentChatBranches:P_,showIntentToast:c,chatOnlyMode:Z,navigate:$})},[Z,i,$,T_,P_,c]);b(()=>ej({branchLoaderMode:K,branchLoaderSourceChatJid:N,forkChatBranch:w5,setBranchLoaderState:v1,navigate:$}),[K,N,$]);let gY=P((C)=>{vZ({widget:C,dismissedLiveWidgetKeysRef:a0,setFloatingWidget:b0})},[]),W6=P(()=>{bZ({dismissedLiveWidgetKeysRef:a0,setFloatingWidget:b0})},[]),mY=P((C,e)=>{gZ({event:C,widget:e,currentChatJid:j,isComposeBoxAgentActive:C5,setFloatingWidget:b0,handleCloseFloatingWidget:W6,handleMessageResponse:y5,showIntentToast:c,sendAgentMessage:n4,buildFloatingWidgetDashboardSnapshot:p3})},[p3,j,W6,y5,C5,c]);b(()=>{a0.current.clear(),b0(null)},[j]);let hY=P(async()=>{await _Z({currentChatJid:j,chatOnlyMode:Z,forkChatBranch:w5,refreshActiveChatAgents:T_,refreshCurrentChatBranches:P_,showIntentToast:c,navigate:$})},[Z,j,$,T_,P_,c]),B6=P(async(C,e)=>{await $Z({isWebAppMode:X,path:C,label:e,showIntentToast:c,currentChatJid:j,tabStripActiveId:Y1,editorInstanceRef:k1,dockInstanceRef:$_,terminalTabPath:U5,dockVisible:c1,resolveTab:(E0)=>r0.get(E0),closeTab:H_,setDockVisible:J1})},[j,c1,H_,X,c,Y1]);b(()=>jZ({openEditor:b1,popOutPane:(C,e)=>{B6(C,e)}}),[B6,b1]);let pY=P(async()=>{await ZZ({isWebAppMode:X,currentChatJid:j,currentRootChatJid:f1,forkChatBranch:w5,getActiveChatAgents:S6,getChatBranches:w3,setActiveChatAgents:h,setCurrentChatBranches:z0,showIntentToast:c})},[j,f1,X,c]);b(()=>{QZ({editorOpen:I1,shellElement:Z4.current,editorWidthRef:h4,dockHeightRef:e4,sidebarWidthRef:m4,readStoredNumber:d5})},[I1]),b(()=>{if(!D_||Z)return;return Lj(R1)},[R1,D_,Z]),b(()=>{if(Z)return;return Wj({toggleZenMode:v4,exitZenMode:E_,zenMode:B1,isZenModeActive:()=>B1})},[v4,E_,B1,Z]);let cY=Boolean(u0&&u0===(x?.turn_id||W0)),l3=hZ({branchLoaderMode:K,panePopoutMode:Q});if(l3==="branch-loader")return pZ(t1);if(l3==="pane-popout")return cZ({appShellRef:Z4,editorOpen:I1,hidePanePopoutControls:Y_,panePopoutHasMenuActions:g1,panePopoutTitle:p_,tabStripTabs:r1,tabStripActiveId:Y1,handleTabActivate:_4,previewTabs:x1,handleTabTogglePreview:w_,editorContainerRef:j1,getPaneContent:()=>k1.current?.getContent?.(),panePopoutPath:Y});return RQ({appShellRef:Z4,workspaceOpen:W1,editorOpen:I1,chatOnlyMode:Z,zenMode:B1,isRenameBranchFormOpen:Z0,closeRenameCurrentBranchForm:L6,handleRenameCurrentBranch:fY,renameBranchNameDraft:G0,renameBranchNameInputRef:P1,setRenameBranchNameDraft:$0,renameBranchDraftState:P0,isRenamingBranch:u,addFileRef:T5,openEditor:b1,openTerminalTab:N1,openVncTab:j_,hasDockPanes:D_,toggleDock:R1,dockVisible:c1,handleSplitterMouseDown:LY,handleSplitterTouchStart:WY,showEditorPaneContainer:R_,tabStripTabs:r1,tabStripActiveId:Y1,handleTabActivate:_4,handleTabClose:H_,handleTabCloseOthers:J_,handleTabCloseAll:z4,handleTabTogglePin:O_,handleTabTogglePreview:w_,handleTabEditSource:u4,previewTabs:x1,tabPaneOverrides:__,toggleZenMode:v4,handlePopOutPane:B6,isWebAppMode:X,editorContainerRef:j1,editorInstanceRef:k1,handleDockSplitterMouseDown:FY,handleDockSplitterTouchStart:HY,TERMINAL_TAB_PATH:U5,dockContainerRef:F4,handleEditorSplitterMouseDown:BY,handleEditorSplitterTouchStart:zY,searchQuery:A,isIOSDevice:U9,currentBranchRecord:D1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:uY,formatBranchPickerLabel:c8,openRenameCurrentBranchForm:U6,handlePruneCurrentBranch:vY,currentHashtag:L,handleBackToTimeline:DY,activeSearchScopeLabel:S_,posts:q5,isMainTimelineView:MY,hasMore:VY,loadMore:UY,timelineRef:K_,handleHashtagClick:OY,addMessageRef:T1,scrollToMessage:C1,openFileFromPill:x0,handleDeletePost:IY,handleOpenFloatingWidget:gY,agents:w1,userProfile:f_,removingPostIds:E1,agentStatus:x,isCompactionStatus:y4,agentDraft:s,agentPlan:a,agentThought:_0,pendingRequest:Q0,intentToast:M,currentTurnId:W0,steerQueued:cY,handlePanelToggle:I_,btwSession:t,closeBtwPanel:G6,handleBtwRetry:yY,handleBtwInject:SY,floatingWidget:J0,handleCloseFloatingWidget:W6,handleFloatingWidgetEvent:mY,extensionStatusPanels:F0,pendingExtensionPanelActions:v0,handleExtensionPanelAction:PY,searchOpen:W,followupQueueItems:y0,handleInjectQueuedFollowup:xY,handleRemoveQueuedFollowup:TY,viewStateRef:q_,loadPosts:d_,scrollToBottom:P5,searchScope:E,handleSearch:AY,setSearchScope:f,enterSearchMode:EY,exitSearchMode:kY,fileRefs:R,removeFileRef:z,clearFileRefs:w,setFileRefsFromCompose:l,messageRefs:d,removeMessageRef:Y4,clearMessageRefs:c4,setMessageRefsFromCompose:$5,handleCreateSessionFromCompose:hY,handleRestoreBranch:bY,attachActiveEditorFile:z1,followupQueueCount:n1,handleBtwIntercept:CY,handleMessageResponse:y5,handleComposeSubmitError:j5,handlePopOutChat:pY,isComposeBoxAgentActive:C5,activeChatAgents:Y0,connectionStatus:G,activeModel:c0,activeModelUsage:_1,activeThinkingLevel:$1,supportsThinking:V0,contextUsage:A0,notificationsEnabled:t_,notificationPermission:h_,handleToggleNotifications:A1,setActiveModel:U1,applyModelState:N6,setPendingRequest:K0,pendingRequestRef:D0,toggleWorkspace:RY})}function rX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);b(()=>{if(typeof window>"u")return;let Q=()=>$(window.location.href);return window.addEventListener("popstate",Q),()=>window.removeEventListener("popstate",Q)},[]);let j=P((Q,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},K=new URL(String(Q||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Z=S0(()=>new URL(_).searchParams,[_]);return B`<${iX} locationParams=${Z} navigate=${j} />`}x4(B`<${rX} />`,document.getElementById("app"));

//# debugId=4B4D896A68CF4F4664756E2164756E21
//# sourceMappingURL=app.bundle.js.map
