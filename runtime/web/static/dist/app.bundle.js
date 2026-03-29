var dY=Object.defineProperty;var iY=(_)=>_;function rY(_,$){this[_]=iY.bind(null,$)}var oY=(_,$)=>{for(var j in $)dY(_,j,{get:$[j],enumerable:!0,configurable:!0,set:rY.bind($,j)})};var F8,V1,Y2,sY,M4,i3,q2,K2,N2,k6,J6,O6,G2,B8={},W8=[],aY=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H8=Array.isArray;function N4(_,$){for(var j in $)_[j]=$[j];return _}function M6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function J8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?F8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return U8(_,q,Q,Z,null)}function U8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++Y2:Z,__i:-1,__u:0};return Z==null&&V1.vnode!=null&&V1.vnode(Y),Y}function O8(_){return _.children}function N5(_,$){this.props=_,this.context=$}function G5(_,$){if($==null)return _.__?G5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?G5(_):null}function tY(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=N4({},$);Y.__v=$.__v+1,V1.vnode&&V1.vnode(Y),I6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?G5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,L2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&X2(Y)}}function X2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),X2(_)}function D6(_){(!_.__d&&(_.__d=!0)&&M4.push(_)&&!z8.__r++||i3!=V1.debounceRendering)&&((i3=V1.debounceRendering)||q2)(z8)}function z8(){try{for(var _,$=1;M4.length;)M4.length>$&&M4.sort(K2),_=M4.shift(),$=M4.length,tY(_)}finally{M4.length=z8.__r=0}}function V2(_,$,j,Q,Z,Y,q,K,N,G,V){var X,U,L,H,A,O,W,D=Q&&Q.__k||W8,E=$.length;for(N=eY(j,$,D,N,E),X=0;X<E;X++)(L=j.__k[X])!=null&&(U=L.__i!=-1&&D[L.__i]||B8,L.__i=X,O=I6(_,L,U,Z,Y,q,K,N,G,V),H=L.__e,L.ref&&U.ref!=L.ref&&(U.ref&&x6(U.ref,null,L),V.push(L.ref,L.__c||H,L)),A==null&&H!=null&&(A=H),(W=!!(4&L.__u))||U.__k===L.__k?N=U2(L,N,_,W):typeof L.type=="function"&&O!==void 0?N=O:H&&(N=H.nextSibling),L.__u&=-7);return j.__e=A,N}function eY(_,$,j,Q,Z){var Y,q,K,N,G,V=j.length,X=V,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=U8(null,q,null,null,null):H8(q)?q=_.__k[Y]=U8(O8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=U8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,N=Y+U,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=_q(q,j,N,X))!=-1&&(X--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Z>V?U--:Z<V&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=N&&(G==N-1?U--:G==N+1?U++:(G>N?U--:U++,q.__u|=4))):_.__k[Y]=null;if(X)for(Y=0;Y<V;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Q&&(Q=G5(K)),W2(K,K));return Q}function U2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=U2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=G5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function _q(_,$,j,Q){var Z,Y,q,K=_.key,N=_.type,G=$[j],V=G!=null&&(2&G.__u)==0;if(G===null&&K==null||V&&K==G.key&&N==G.type)return j;if(Q>(V?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&K==G.key&&N==G.type)return q}return-1}function r3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||aY.test($)?j:j+"px"}function V8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||r3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||r3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(N2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=k6,_.addEventListener($,Y?O6:J6,Y)):_.removeEventListener($,Y?O6:J6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function o3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=k6++;else if($.t<j.u)return;return j(V1.event?V1.event($):$)}}}function I6(_,$,j,Q,Z,Y,q,K,N,G){var V,X,U,L,H,A,O,W,D,E,f,u,c,i,P,M=$.type;if($.constructor!==void 0)return null;128&j.__u&&(N=!!(32&j.__u),Y=[K=$.__e=j.__e]),(V=V1.__b)&&V($);_:if(typeof M=="function")try{if(W=$.props,D=M.prototype&&M.prototype.render,E=(V=M.contextType)&&Q[V.__c],f=V?E?E.props.value:V.__:Q,j.__c?O=(X=$.__c=j.__c).__=X.__E:(D?$.__c=X=new M(W,f):($.__c=X=new N5(W,f),X.constructor=M,X.render=jq),E&&E.sub(X),X.state||(X.state={}),X.__n=Q,U=X.__d=!0,X.__h=[],X._sb=[]),D&&X.__s==null&&(X.__s=X.state),D&&M.getDerivedStateFromProps!=null&&(X.__s==X.state&&(X.__s=N4({},X.__s)),N4(X.__s,M.getDerivedStateFromProps(W,X.__s))),L=X.props,H=X.state,X.__v=$,U)D&&M.getDerivedStateFromProps==null&&X.componentWillMount!=null&&X.componentWillMount(),D&&X.componentDidMount!=null&&X.__h.push(X.componentDidMount);else{if(D&&M.getDerivedStateFromProps==null&&W!==L&&X.componentWillReceiveProps!=null&&X.componentWillReceiveProps(W,f),$.__v==j.__v||!X.__e&&X.shouldComponentUpdate!=null&&X.shouldComponentUpdate(W,X.__s,f)===!1){$.__v!=j.__v&&(X.props=W,X.state=X.__s,X.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(F){F&&(F.__=$)}),W8.push.apply(X.__h,X._sb),X._sb=[],X.__h.length&&q.push(X);break _}X.componentWillUpdate!=null&&X.componentWillUpdate(W,X.__s,f),D&&X.componentDidUpdate!=null&&X.__h.push(function(){X.componentDidUpdate(L,H,A)})}if(X.context=f,X.props=W,X.__P=_,X.__e=!1,u=V1.__r,c=0,D)X.state=X.__s,X.__d=!1,u&&u($),V=X.render(X.props,X.state,X.context),W8.push.apply(X.__h,X._sb),X._sb=[];else do X.__d=!1,u&&u($),V=X.render(X.props,X.state,X.context),X.state=X.__s;while(X.__d&&++c<25);X.state=X.__s,X.getChildContext!=null&&(Q=N4(N4({},Q),X.getChildContext())),D&&!U&&X.getSnapshotBeforeUpdate!=null&&(A=X.getSnapshotBeforeUpdate(L,H)),i=V!=null&&V.type===O8&&V.key==null?B2(V.props.children):V,K=V2(_,H8(i)?i:[i],$,j,Q,Z,Y,q,K,N,G),X.base=$.__e,$.__u&=-161,X.__h.length&&q.push(X),O&&(X.__E=X.__=null)}catch(F){if($.__v=null,N||Y!=null)if(F.then){for($.__u|=N?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(P=Y.length;P--;)M6(Y[P]);A6($)}else $.__e=j.__e,$.__k=j.__k,F.then||A6($);V1.__e(F,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=$q(j.__e,$,j,Q,Z,Y,q,N,G);return(V=V1.diffed)&&V($),128&$.__u?void 0:K}function A6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(A6))}function L2(_,$,j){for(var Q=0;Q<j.length;Q++)x6(j[Q],j[++Q],j[++Q]);V1.__c&&V1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){V1.__e(Y,Z.__v)}})}function B2(_){return typeof _!="object"||_==null||_.__b>0?_:H8(_)?_.map(B2):N4({},_)}function $q(_,$,j,Q,Z,Y,q,K,N){var G,V,X,U,L,H,A,O=j.props||B8,W=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((L=Y[G])&&"setAttribute"in L==!!D&&(D?L.localName==D:L.nodeType==3)){_=L,Y[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(W);_=document.createElementNS(Z,D,W.is&&W),K&&(V1.__m&&V1.__m($,Y),K=!1),Y=null}if(D==null)O===W||K&&_.data==W||(_.data=W);else{if(Y=Y&&F8.call(_.childNodes),!K&&Y!=null)for(O={},G=0;G<_.attributes.length;G++)O[(L=_.attributes[G]).name]=L.value;for(G in O)L=O[G],G=="dangerouslySetInnerHTML"?X=L:G=="children"||(G in W)||G=="value"&&("defaultValue"in W)||G=="checked"&&("defaultChecked"in W)||V8(_,G,null,L,Z);for(G in W)L=W[G],G=="children"?U=L:G=="dangerouslySetInnerHTML"?V=L:G=="value"?H=L:G=="checked"?A=L:K&&typeof L!="function"||O[G]===L||V8(_,G,L,O[G],Z);if(V)K||X&&(V.__html==X.__html||V.__html==_.innerHTML)||(_.innerHTML=V.__html),$.__k=[];else if(X&&(_.innerHTML=""),V2($.type=="template"?_.content:_,H8(U)?U:[U],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&G5(j,0),K,N),Y!=null)for(G=Y.length;G--;)M6(Y[G]);K||(G="value",D=="progress"&&H==null?_.removeAttribute("value"):H!=null&&(H!==_[G]||D=="progress"&&!H||D=="option"&&H!=O[G])&&V8(_,G,H,O[G],Z),G="checked",A!=null&&A!=_[G]&&V8(_,G,A,O[G],Z))}return _}function x6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){V1.__e(Z,j)}}function W2(_,$,j){var Q,Z;if(V1.unmount&&V1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||x6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){V1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&W2(Q[Z],$,j||typeof _.type!="function");j||M6(_.__e),_.__c=_.__=_.__e=void 0}function jq(_,$,j){return this.constructor(_,j)}function x4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),V1.__&&V1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],I6($,_=(!Q&&j||$).__k=J8(O8,null,[_]),Z||B8,B8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?F8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),L2(Y,_,q)}function z2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,D6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+G2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}F8=W8.slice,V1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(K){_=K}throw _}},Y2=0,sY=function(_){return _!=null&&_.constructor===void 0},N5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N4({},this.state),typeof _=="function"&&(_=_(N4({},j),this.props)),_&&N4(j,_),_!=null&&this.__v&&($&&this._sb.push($),D6(this))},N5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),D6(this))},N5.prototype.render=O8,M4=[],q2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,K2=function(_,$){return _.__v.__b-$.__v.__b},z8.__r=0,N2=/(PointerCapture)$|Capture$/i,k6=0,J6=o3(!1),O6=o3(!0),G2=0;var I4,X1,H6,s3,X5=0,F2=[],H1=V1,a3=H1.__b,t3=H1.__r,e3=H1.diffed,_2=H1.__c,$2=H1.unmount,j2=H1.__;function V5(_,$){H1.__h&&H1.__h(X1,_,X5||$),X5=0;var j=X1.__H||(X1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function g(_){return X5=1,T6(A2,_)}function T6(_,$,j){var Q=V5(I4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):A2(void 0,$),function(K){var N=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(N,K);N!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=X1,!X1.__f)){var Z=function(K,N,G){if(!Q.__c.__H)return!0;var V=Q.__c.__H.__.filter(function(U){return U.__c});if(V.every(function(U){return!U.__N}))return!Y||Y.call(this,K,N,G);var X=Q.__c.props!==K;return V.some(function(U){if(U.__N){var L=U.__[0];U.__=U.__N,U.__N=void 0,L!==U.__[0]&&(X=!0)}}),Y&&Y.call(this,K,N,G)||X};X1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=X1;X1.componentWillUpdate=function(K,N,G){if(this.__e){var V=Y;Y=void 0,Z(K,N,G),Y=V}q&&q.call(this,K,N,G)},X1.shouldComponentUpdate=Z}return Q.__N||Q.__}function v(_,$){var j=V5(I4++,3);!H1.__s&&C6(j.__H,$)&&(j.__=_,j.u=$,X1.__H.__h.push(j))}function R5(_,$){var j=V5(I4++,4);!H1.__s&&C6(j.__H,$)&&(j.__=_,j.u=$,X1.__h.push(j))}function I(_){return X5=5,S0(function(){return{current:_}},[])}function H2(_,$,j){X5=6,R5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function S0(_,$){var j=V5(I4++,7);return C6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function C(_,$){return X5=8,S0(function(){return _},$)}function J2(_){var $=X1.context[_.__c],j=V5(I4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(X1)),$.props.value):_.__}function O2(_,$){H1.useDebugValue&&H1.useDebugValue($?$(_):_)}function D2(_){var $=V5(I4++,10),j=g();return $.__=_,X1.componentDidCatch||(X1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function Qq(){for(var _;_=F2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(L8),$.__h.some(E6),$.__h=[]}catch(j){$.__h=[],H1.__e(j,_.__v)}}}H1.__b=function(_){X1=null,a3&&a3(_)},H1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),j2&&j2(_,$)},H1.__r=function(_){t3&&t3(_),I4=0;var $=(X1=_.__c).__H;$&&(H6===X1?($.__h=[],X1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(L8),$.__h.some(E6),$.__h=[],I4=0)),H6=X1},H1.diffed=function(_){e3&&e3(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(F2.push($)!==1&&s3===H1.requestAnimationFrame||((s3=H1.requestAnimationFrame)||Zq)(Qq)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),H6=X1=null},H1.__c=function(_,$){$.some(function(j){try{j.__h.some(L8),j.__h=j.__h.filter(function(Q){return!Q.__||E6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],H1.__e(Q,j.__v)}}),_2&&_2(_,$)},H1.unmount=function(_){$2&&$2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{L8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&H1.__e($,j.__v))};var Q2=typeof requestAnimationFrame=="function";function Zq(_){var $,j=function(){clearTimeout(Q),Q2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);Q2&&($=requestAnimationFrame(j))}function L8(_){var $=X1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),X1=$}function E6(_){var $=X1;_.__c=_.__(),X1=$}function C6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function A2(_,$){return typeof $=="function"?$(_):$}var E2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],K=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=K:q===4?Q[1]=Object.assign(Q[1]||{},K):q===5?(Q[1]=Q[1]||{})[$[++Y]]=K:q===6?Q[1][$[++Y]]+=K+"":q?(Z=_.apply(K,E2(_,K,j,["",null])),Q.push(Z),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(K)}return Q},Z2=new Map;function Yq(_){var $=Z2.get(this);return $||($=new Map,Z2.set(this,$)),($=E2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",K="",N=[0],G=function(U){Y===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,U,q):Y===3&&(U||q)?(N.push(3,U,q),Y=2):Y===2&&q==="..."&&U?N.push(4,U,0):Y===2&&q&&!U?N.push(5,0,!0,q):Y>=5&&((q||!U&&Y===5)&&(N.push(Y,0,q,Z),Y=6),U&&(N.push(Y,U,0,Z),Y=6)),q=""},V=0;V<j.length;V++){V&&(Y===1&&G(),G(V));for(var X=0;X<j[V].length;X++)Q=j[V][X],Y===1?Q==="<"?(G(),N=[N],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:K?Q===K?K="":q+=Q:Q==='"'||Q==="'"?K=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[V][X+1]===">")?(G(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,N=N[0])}return G(),N}(_)),$),arguments,[])).length>1?$:$[0]}var B=Yq.bind(J8);var r1={};oY(r1,{uploadWorkspaceFile:()=>A8,uploadMedia:()=>v6,updateWorkspaceFile:()=>kq,submitAdaptiveCardAction:()=>g6,streamSidePrompt:()=>Dq,stopAutoresearch:()=>zq,steerAgentQueueItem:()=>Oq,setWorkspaceVisibility:()=>b5,setAgentThoughtVisibility:()=>h6,sendPeerAgentMessage:()=>Lq,sendAgentMessage:()=>n4,searchPosts:()=>y6,restoreChatBranch:()=>Uq,respondToAgentRequest:()=>D8,renameWorkspaceFile:()=>d6,renameChatBranch:()=>Xq,removeAgentQueueItem:()=>Jq,pruneChatBranch:()=>Vq,moveWorkspaceEntry:()=>i6,getWorkspaceTree:()=>v5,getWorkspaceRawUrl:()=>E8,getWorkspaceFile:()=>g5,getWorkspaceDownloadUrl:()=>k8,getWorkspaceBranch:()=>Eq,getTimeline:()=>l4,getThumbnailUrl:()=>p6,getThread:()=>S6,getPostsByHashtag:()=>P6,getMediaUrl:()=>P_,getMediaText:()=>c6,getMediaInfo:()=>U5,getMediaBlob:()=>Aq,getChatBranches:()=>Gq,getAutoresearchStatus:()=>Wq,getAgents:()=>u6,getAgentThought:()=>m6,getAgentStatus:()=>f6,getAgentQueueState:()=>Hq,getAgentModels:()=>f5,getAgentContext:()=>Bq,getActiveChatAgents:()=>R6,forkChatBranch:()=>u5,dismissAutoresearch:()=>Fq,deleteWorkspaceFile:()=>r6,deletePost:()=>w6,createWorkspaceFile:()=>n6,createReply:()=>Nq,createPost:()=>Kq,attachWorkspaceFile:()=>l6,addToWhitelist:()=>b6,SSEClient:()=>M8});async function i0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function k2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function qq(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Z+=Q.decode(q,{stream:!0});let N=Z.split(`

`);Z=N.pop()||"";for(let G of N){let V=k2(G);if(V)$(V.event,V.data)}}Z+=Q.decode();let Y=k2(Z);if(Y)$(Y.event,Y.data)}async function l4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return i0(Q)}async function P6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return i0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function y6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",N=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return i0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${N}`)}async function S6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return i0(`/thread/${_}${j}`)}async function Kq(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return i0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function Nq(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return i0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function w6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return i0(Z,{method:"DELETE"})}async function n4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",K={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")K.mode=Z;return i0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function R6(){return i0("/agent/active-chats")}async function Gq(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return i0(`/agent/branches${Q}`)}async function u5(_,$={}){return i0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function Xq(_,$={}){return i0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Vq(_){return i0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function Uq(_,$={}){return i0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function Lq(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return i0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function u6(){return i0("/agent/roster")}async function f6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/status${$}`)}async function Bq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/context${$}`)}async function Wq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/autoresearch/status${$}`)}async function zq(_=null,$={}){return i0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function Fq(_=null){return i0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function Hq(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/queue-state${$}`)}async function Jq(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function Oq(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function f5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return i0(`/agent/models${$}`)}async function v6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function D8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function g6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function Dq(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await qq(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function b6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function m6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return i0(j)}async function h6(_,$,j){return i0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function P_(_){return`/media/${_}`}function p6(_){return`/media/${_}/thumbnail`}async function U5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function c6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function Aq(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function v5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return i0(Q)}async function Eq(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return i0($)}async function g5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return i0(Z)}async function kq(_,$){return i0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function l6(_){return i0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function A8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Q});if(!K.ok){let N=await K.json().catch(()=>({error:"Upload failed"})),G=Error(N.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=N.code,G}return K.json()}async function n6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function d6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function i6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function r6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return i0($,{method:"DELETE"})}async function b5(_,$=!1){return i0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function E8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function k8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class M8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class M2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var h0=new M2;var I8=null,o6=null;function Mq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function I2(){if(o6)return Promise.resolve(o6);if(!I8)I8=import(Mq()).then((_)=>{return o6=_,_}).catch((_)=>{throw I8=null,_});return I8}class x2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await I2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var s6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new x2(_,$)}};function a6(){I2().catch(()=>{})}var L5="piclaw://terminal";var Iq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},xq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},x8=null,t6=null;function Tq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Cq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!Tq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function Pq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!x8)x8=Cq(()=>Promise.resolve($.init?.())).catch((j)=>{throw x8=null,j});return await x8,$}async function yq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!t6)t6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await t6}async function Sq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function wq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Rq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function G4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function uq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function T2(){let _=Rq(),$=_?xq:Iq,j=G4("--bg-primary",_?"#000000":"#ffffff"),Q=G4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=G4("--text-secondary",_?"#71767b":"#536471"),Y=G4("--accent-color","#1d9bf0"),q=G4("--danger-color",_?"#ff7b72":"#cf222e"),K=G4("--success-color",_?"#7ee787":"#1a7f37"),N=G4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=G4("--border-color",_?"#2f3336":"#eff3f4"),V=G4("--accent-soft-strong",uq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:V,selectionForeground:Q,black:N,red:q,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class e6{container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Pq();if(await yq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:T2()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=T2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Sq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(wq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var _$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new e6(_,$)}},$$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new e6(_,$)}};function X4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function T8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function C2(_,$={}){if(X4($))return null;if(T8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:fq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function j$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Q$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function Z$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function Y$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function V4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function P2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function y2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,K]of Object.entries(Y)){let N=String(q||"").trim();if(!N)continue;if(K===null||K===void 0||K==="")Q.searchParams.delete(N);else Q.searchParams.set(N,String(K))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function fq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function vq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function S2(_,$={}){if(X4($))return null;if(T8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:vq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function m5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function gq(_){try{return JSON.parse(_)}catch{return null}}function bq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function mq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class q${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=mq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||gq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=bq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var h5=()=>{throw Error("Operation requires compiling with --exportRuntime")},hq=typeof BigUint64Array<"u",p5=Symbol();var pq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function w2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return pq.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function R2(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return w2(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,K,N){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${K}:${N}`)},Q.trace=Q.trace||function(Y,q,...K){let N=$.memory||Q.memory;console.log(`trace: ${j(N,Y)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function u2(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||h5,q=j.__pin||h5,K=j.__unpin||h5,N=j.__collect||h5,G=j.__rtti_base,V=G?(F)=>F[G>>>2]:h5;_.__new=Y,_.__pin=q,_.__unpin=K,_.__collect=N;function X(F){let T=new Uint32Array(Q.buffer);if((F>>>=0)>=V(T))throw Error(`invalid id: ${F}`);return T[(G+4>>>2)+F]}function U(F){let T=X(F);if(!(T&7))throw Error(`not an array: ${F}, flags=${T}`);return T}function L(F){return 31-Math.clz32(F>>>6&31)}function H(F){if(F==null)return 0;let T=F.length,b=Y(T<<1,2),t=new Uint16Array(Q.buffer);for(let h=0,s=b>>>1;h<T;++h)t[s+h]=F.charCodeAt(h);return b}_.__newString=H;function A(F){if(F==null)return 0;let T=new Uint8Array(F),b=Y(T.length,1);return new Uint8Array(Q.buffer).set(T,b),b}_.__newArrayBuffer=A;function O(F){if(!F)return null;let T=Q.buffer;if(new Uint32Array(T)[F+-8>>>2]!==2)throw Error(`not a string: ${F}`);return w2(T,F)}_.__getString=O;function W(F,T,b){let t=Q.buffer;if(b)switch(F){case 2:return new Float32Array(t);case 3:return new Float64Array(t)}else switch(F){case 0:return new(T?Int8Array:Uint8Array)(t);case 1:return new(T?Int16Array:Uint16Array)(t);case 2:return new(T?Int32Array:Uint32Array)(t);case 3:return new(T?BigInt64Array:BigUint64Array)(t)}throw Error(`unsupported align: ${F}`)}function D(F,T=0){let b=T,t=U(F),h=L(t),s=typeof b!=="number",a=s?b.length:b,_0=Y(a<<h,t&4?F:1),q0;if(t&4)q0=_0;else{q(_0);let Z0=Y(t&2?16:12,F);K(_0);let K0=new Uint32Array(Q.buffer);if(K0[Z0+0>>>2]=_0,K0[Z0+4>>>2]=_0,K0[Z0+8>>>2]=a<<h,t&2)K0[Z0+12>>>2]=a;q0=Z0}if(s){let Z0=W(h,t&2048,t&4096),K0=_0>>>h;if(t&16384)for(let B0=0;B0<a;++B0)Z0[K0+B0]=b[B0];else Z0.set(b,K0)}return q0}_.__newArray=D;function E(F){let T=new Uint32Array(Q.buffer),b=T[F+-8>>>2],t=U(b),h=L(t),s=t&4?F:T[F+4>>>2],a=t&2?T[F+12>>>2]:T[s+-4>>>2]>>>h;return W(h,t&2048,t&4096).subarray(s>>>=h,s+a)}_.__getArrayView=E;function f(F){let T=E(F),b=T.length,t=Array(b);for(let h=0;h<b;h++)t[h]=T[h];return t}_.__getArray=f;function u(F){let T=Q.buffer,b=new Uint32Array(T)[F+-4>>>2];return T.slice(F,F+b)}_.__getArrayBuffer=u;function c(F){if(!Z)throw Error("Operation requires compiling with --exportTable");let T=new Uint32Array(Q.buffer)[F>>>2];return Z.get(T)}_.__getFunction=c;function i(F,T,b){return new F(P(F,T,b))}function P(F,T,b){let t=Q.buffer,h=new Uint32Array(t);return new F(t,h[b+4>>>2],h[b+8>>>2]>>>T)}function M(F,T,b){_[`__get${T}`]=i.bind(null,F,b),_[`__get${T}View`]=P.bind(null,F,b)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((F)=>{M(F,F.name,31-Math.clz32(F.BYTES_PER_ELEMENT))}),hq)[BigUint64Array,BigInt64Array].forEach((F)=>{M(F,F.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,lq(j,_)}function f2(_){return typeof Response<"u"&&_ instanceof Response}function cq(_){return _ instanceof WebAssembly.Module}async function K$(_,$={}){if(f2(_=await _))return C8(_,$);let j=cq(_)?_:await WebAssembly.compile(_),Q=R2($),Z=await WebAssembly.instantiate(j,$),Y=u2(Q,Z);return{module:j,instance:Z,exports:Y}}async function C8(_,$={}){if(!WebAssembly.instantiateStreaming)return K$(f2(_=await _)?_.arrayBuffer():_,$);let j=R2($),Q=await WebAssembly.instantiateStreaming(_,$),Z=u2(j,Q.instance);return{...Q,exports:Z}}function lq(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Y[0],N=K.indexOf("#");if(N>=0){let G=K.substring(0,N),V=q[G];if(typeof V>"u"||!V.prototype){let X=function(...U){return X.wrap(X.prototype.constructor(0,...U))};if(X.prototype={valueOf(){return this[p5]}},X.wrap=function(U){return Object.create(X.prototype,{[p5]:{value:U,writable:!1}})},V)Object.getOwnPropertyNames(V).forEach((U)=>Object.defineProperty(X,U,Object.getOwnPropertyDescriptor(V,U)));q[G]=X}if(K=K.substring(N+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let X=_[Q.replace("set:","get:")],U=_[Q.replace("get:","set:")];Object.defineProperty(q,K,{get(){return X(this[p5])},set(L){U(this[p5],L)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...X){return j(X.length),Z(...X)}).original=Z;else(q[K]=function(...X){return j(X.length),Z(this[p5],...X)}).original=Z}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[K]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[K]=Z}return $}var dq="/static/js/vendor/remote-display-decoder.wasm",P8=null;function v2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function g2(){if(P8)return P8;return P8=(async()=>{try{let Q=function(Z,Y,q,K,N,G,V){let X=v2(Y),U=j.__pin(j.__newArrayBuffer(X));try{return j[Z](U,q,K,N,G,V.bitsPerPixel,V.bigEndian?1:0,V.trueColor?1:0,V.redMax,V.greenMax,V.blueMax,V.redShift,V.greenShift,V.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(dq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof C8==="function"?await C8(_,{}):await K$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,K,N,G){return Q("processRawRect",Z,Y,q,K,N,G)},processCopyRect(Z,Y,q,K,N,G){return j.processCopyRect(Z,Y,q,K,N,G)},processRreRect(Z,Y,q,K,N,G){return Q("processRreRect",Z,Y,q,K,N,G)},processHextileRect(Z,Y,q,K,N,G){return Q("processHextileRect",Z,Y,q,K,N,G)},processZrleTileData(Z,Y,q,K,N,G){return Q("processZrleTileData",Z,Y,q,K,N,G)},decodeRawRectToRgba(Z,Y,q,K){let N=v2(Z),G=j.__pin(j.__newArrayBuffer(N));try{let V=j.__pin(j.decodeRawRectToRgba(G,Y,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(V))}finally{j.__unpin(V)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),P8}function B5(_,$,j){return Math.max($,Math.min(j,_))}function y8(_,$,j){let Q=new Uint8Array(6),Z=B5(Math.floor(Number($||0)),0,65535),Y=B5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=B5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function G$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function b2(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),K=Math.max(1,Number(j?.width||0)),N=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,V=(Number($||0)-Number(j?.top||0))/N;return{x:B5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:B5(Math.floor(V*q),0,Math.max(0,q-1))}}function m2(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=B5(Number(Q||0)|Z,0,255);return[y8(Y,$,j),y8(Number(Q||0),$,j)]}function h2(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function c5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function p2(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Q||0))),N=Math.min(Z/q,Y/K);if(!Number.isFinite(N)||N<=0)return 1;return Math.max(0.01,N)}var N$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)N$[`F${_}`]=65470+(_-1);function X$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(N$,Y))return N$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var S1=Uint8Array,z_=Uint16Array,J$=Int32Array,S8=new S1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),w8=new S1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),W$=new S1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),d2=function(_,$){var j=new z_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new J$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},i2=d2(S8,2),r2=i2.b,z$=i2.r;r2[28]=258,z$[258]=28;var o2=d2(w8,0),iq=o2.b,c2=o2.r,F$=new z_(32768);for(m0=0;m0<32768;++m0)o_=(m0&43690)>>1|(m0&21845)<<1,o_=(o_&52428)>>2|(o_&13107)<<2,o_=(o_&61680)>>4|(o_&3855)<<4,F$[m0]=((o_&65280)>>8|(o_&255)<<8)>>1;var o_,m0,s_=function(_,$,j){var Q=_.length,Z=0,Y=new z_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new z_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var K;if(j){K=new z_(1<<$);var N=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],V=$-_[Z],X=q[_[Z]-1]++<<V;for(var U=X|(1<<V)-1;X<=U;++X)K[F$[X]>>N]=G}}else{K=new z_(Q);for(Z=0;Z<Q;++Z)if(_[Z])K[Z]=F$[q[_[Z]-1]++]>>15-_[Z]}return K},T4=new S1(288);for(m0=0;m0<144;++m0)T4[m0]=8;var m0;for(m0=144;m0<256;++m0)T4[m0]=9;var m0;for(m0=256;m0<280;++m0)T4[m0]=7;var m0;for(m0=280;m0<288;++m0)T4[m0]=8;var m0,i5=new S1(32);for(m0=0;m0<32;++m0)i5[m0]=5;var m0,rq=s_(T4,9,0),oq=s_(T4,9,1),sq=s_(i5,5,0),aq=s_(i5,5,1),V$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},b_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},U$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},O$=function(_){return(_+7)/8|0},d5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new S1(_.subarray($,j))};var tq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U_=function(_,$,j){var Q=Error($||tq[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,U_);if(!j)throw Q;return Q},eq=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new S1(0);var q=!j,K=q||$.i!=2,N=$.i;if(q)j=new S1(Z*3);var G=function(n0){var W0=j.length;if(n0>W0){var I0=new S1(Math.max(W0*2,n0));I0.set(j),j=I0}},V=$.f||0,X=$.p||0,U=$.b||0,L=$.l,H=$.d,A=$.m,O=$.n,W=Z*8;do{if(!L){V=b_(_,X,1);var D=b_(_,X+1,3);if(X+=3,!D){var E=O$(X)+4,f=_[E-4]|_[E-3]<<8,u=E+f;if(u>Z){if(N)U_(0);break}if(K)G(U+f);j.set(_.subarray(E,u),U),$.b=U+=f,$.p=X=u*8,$.f=V;continue}else if(D==1)L=oq,H=aq,A=9,O=5;else if(D==2){var c=b_(_,X,31)+257,i=b_(_,X+10,15)+4,P=c+b_(_,X+5,31)+1;X+=14;var M=new S1(P),F=new S1(19);for(var T=0;T<i;++T)F[W$[T]]=b_(_,X+T*3,7);X+=i*3;var b=V$(F),t=(1<<b)-1,h=s_(F,b,1);for(var T=0;T<P;){var s=h[b_(_,X,t)];X+=s&15;var E=s>>4;if(E<16)M[T++]=E;else{var a=0,_0=0;if(E==16)_0=3+b_(_,X,3),X+=2,a=M[T-1];else if(E==17)_0=3+b_(_,X,7),X+=3;else if(E==18)_0=11+b_(_,X,127),X+=7;while(_0--)M[T++]=a}}var q0=M.subarray(0,c),Z0=M.subarray(c);A=V$(q0),O=V$(Z0),L=s_(q0,A,1),H=s_(Z0,O,1)}else U_(1);if(X>W){if(N)U_(0);break}}if(K)G(U+131072);var K0=(1<<A)-1,B0=(1<<O)-1,U0=X;for(;;U0=X){var a=L[U$(_,X)&K0],u0=a>>4;if(X+=a&15,X>W){if(N)U_(0);break}if(!a)U_(2);if(u0<256)j[U++]=u0;else if(u0==256){U0=X,L=null;break}else{var k0=u0-254;if(u0>264){var T=u0-257,O0=S8[T];k0=b_(_,X,(1<<O0)-1)+r2[T],X+=O0}var b0=H[U$(_,X)&B0],f0=b0>>4;if(!b0)U_(3);X+=b0&15;var Z0=iq[f0];if(f0>3){var O0=w8[f0];Z0+=U$(_,X)&(1<<O0)-1,X+=O0}if(X>W){if(N)U_(0);break}if(K)G(U+131072);var p0=U+k0;if(U<Z0){var l0=Y-Z0,D0=Math.min(Z0,p0);if(l0+U<0)U_(3);for(;U<D0;++U)j[U]=Q[l0+U]}for(;U<p0;++U)j[U]=j[U-Z0]}}if($.l=L,$.p=U0,$.b=U,$.f=V,L)V=1,$.m=A,$.d=H,$.n=O}while(!V);return U!=j.length&&q?d5(j,0,U):j.subarray(0,U)},U4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},l5=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},L$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:a2,l:0};if(Z==1){var q=new S1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(u,c){return u.f-c.f}),j.push({s:-1,f:25001});var K=j[0],N=j[1],G=0,V=1,X=2;j[0]={s:-1,f:K.f+N.f,l:K,r:N};while(V!=Z-1)K=j[j[G].f<j[X].f?G++:X++],N=j[G!=V&&j[G].f<j[X].f?G++:X++],j[V++]={s:-1,f:K.f+N.f,l:K,r:N};var U=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>U)U=Y[Q].s;var L=new z_(U+1),H=H$(j[V-1],L,0);if(H>$){var Q=0,A=0,O=H-$,W=1<<O;Y.sort(function(c,i){return L[i.s]-L[c.s]||c.f-i.f});for(;Q<Z;++Q){var D=Y[Q].s;if(L[D]>$)A+=W-(1<<H-L[D]),L[D]=$;else break}A>>=O;while(A>0){var E=Y[Q].s;if(L[E]<$)A-=1<<$-L[E]++-1;else++Q}for(;Q>=0&&A;--Q){var f=Y[Q].s;if(L[f]==$)--L[f],++A}H=$}return{t:new S1(L),l:H}},H$=function(_,$,j){return _.s==-1?Math.max(H$(_.l,$,j+1),H$(_.r,$,j+1)):$[_.s]=j},l2=function(_){var $=_.length;while($&&!_[--$]);var j=new z_(++$),Q=0,Z=_[0],Y=1,q=function(N){j[Q++]=N};for(var K=1;K<=$;++K)if(_[K]==Z&&K!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[K]}return{c:j.subarray(0,Q),n:$}},n5=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},s2=function(_,$,j){var Q=j.length,Z=O$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},n2=function(_,$,j,Q,Z,Y,q,K,N,G,V){U4($,V++,j),++Z[256];var X=L$(Z,15),U=X.t,L=X.l,H=L$(Y,15),A=H.t,O=H.l,W=l2(U),D=W.c,E=W.n,f=l2(A),u=f.c,c=f.n,i=new z_(19);for(var P=0;P<D.length;++P)++i[D[P]&31];for(var P=0;P<u.length;++P)++i[u[P]&31];var M=L$(i,7),F=M.t,T=M.l,b=19;for(;b>4&&!F[W$[b-1]];--b);var t=G+5<<3,h=n5(Z,T4)+n5(Y,i5)+q,s=n5(Z,U)+n5(Y,A)+q+14+3*b+n5(i,F)+2*i[16]+3*i[17]+7*i[18];if(N>=0&&t<=h&&t<=s)return s2($,V,_.subarray(N,N+G));var a,_0,q0,Z0;if(U4($,V,1+(s<h)),V+=2,s<h){a=s_(U,L,0),_0=U,q0=s_(A,O,0),Z0=A;var K0=s_(F,T,0);U4($,V,E-257),U4($,V+5,c-1),U4($,V+10,b-4),V+=14;for(var P=0;P<b;++P)U4($,V+3*P,F[W$[P]]);V+=3*b;var B0=[D,u];for(var U0=0;U0<2;++U0){var u0=B0[U0];for(var P=0;P<u0.length;++P){var k0=u0[P]&31;if(U4($,V,K0[k0]),V+=F[k0],k0>15)U4($,V,u0[P]>>5&127),V+=u0[P]>>12}}}else a=rq,_0=T4,q0=sq,Z0=i5;for(var P=0;P<K;++P){var O0=Q[P];if(O0>255){var k0=O0>>18&31;if(l5($,V,a[k0+257]),V+=_0[k0+257],k0>7)U4($,V,O0>>23&31),V+=S8[k0];var b0=O0&31;if(l5($,V,q0[b0]),V+=Z0[b0],b0>3)l5($,V,O0>>5&8191),V+=w8[b0]}else l5($,V,a[O0]),V+=_0[O0]}return l5($,V,a[256]),V+_0[256]},_K=new J$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),a2=new S1(0),$K=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,K=new S1(Q+q+5*(1+Math.ceil(q/7000))+Z),N=K.subarray(Q,K.length-Z),G=Y.l,V=(Y.r||0)&7;if($){if(V)N[0]=Y.r>>3;var X=_K[$-1],U=X>>13,L=X&8191,H=(1<<j)-1,A=Y.p||new z_(32768),O=Y.h||new z_(H+1),W=Math.ceil(j/3),D=2*W,E=function(d0){return(_[d0]^_[d0+1]<<W^_[d0+2]<<D)&H},f=new J$(25000),u=new z_(288),c=new z_(32),i=0,P=0,M=Y.i||0,F=0,T=Y.w||0,b=0;for(;M+2<q;++M){var t=E(M),h=M&32767,s=O[t];if(A[h]=s,O[t]=h,T<=M){var a=q-M;if((i>7000||F>24576)&&(a>423||!G)){V=n2(_,N,0,f,u,c,P,F,b,M-b,V),F=i=P=0,b=M;for(var _0=0;_0<286;++_0)u[_0]=0;for(var _0=0;_0<30;++_0)c[_0]=0}var q0=2,Z0=0,K0=L,B0=h-s&32767;if(a>2&&t==E(M-B0)){var U0=Math.min(U,a)-1,u0=Math.min(32767,M),k0=Math.min(258,a);while(B0<=u0&&--K0&&h!=s){if(_[M+q0]==_[M+q0-B0]){var O0=0;for(;O0<k0&&_[M+O0]==_[M+O0-B0];++O0);if(O0>q0){if(q0=O0,Z0=B0,O0>U0)break;var b0=Math.min(B0,O0-2),f0=0;for(var _0=0;_0<b0;++_0){var p0=M-B0+_0&32767,l0=A[p0],D0=p0-l0&32767;if(D0>f0)f0=D0,s=p0}}}h=s,s=A[h],B0+=h-s&32767}}if(Z0){f[F++]=268435456|z$[q0]<<18|c2[Z0];var n0=z$[q0]&31,W0=c2[Z0]&31;P+=S8[n0]+w8[W0],++u[257+n0],++c[W0],T=M+q0,++i}else f[F++]=_[M],++u[_[M]]}}for(M=Math.max(M,T);M<q;++M)f[F++]=_[M],++u[_[M]];if(V=n2(_,N,G,f,u,c,P,F,b,M-b,V),!G)Y.r=V&7|N[V/8|0]<<3,V-=7,Y.h=O,Y.p=A,Y.i=M,Y.w=T}else{for(var M=Y.w||0;M<q+G;M+=65535){var I0=M+65535;if(I0>=q)N[V/8|0]=G,I0=q;V=s2(N,V+1,_.subarray(M,I0))}Y.i=q}return d5(K,0,Q+O$(V)+Z)};var t2=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var K=Math.min(q+2655,Y);for(;q<K;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},jK=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new S1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return $K(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var e2=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var QK=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=t2();Z.p($.dictionary),e2(_,2,Z.d())}},ZK=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)U_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)U_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var B$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new S1(32768),this.p=new S1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)U_(5);if(this.d)U_(4);if(!this.p.length)this.p=$;else if($.length){var j=new S1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=eq(this.p,this.s,this.o);this.ondata(d5(Q,j,this.s.b),this.d),this.o=d5(Q,this.s.b-32768),this.s.b=this.o.length,this.p=d5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function _7(_,$){if(!$)$={};var j=t2();j.p(_);var Q=jK(_,$,$.dictionary?6:2,4);return QK(Q,$),e2(Q,Q.length-4,j.d()),Q}var $7=function(){function _($,j){B$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(B$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(ZK(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)U_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}B$.prototype.c.call(this,j)},_}();var YK=typeof TextDecoder<"u"&&new TextDecoder,qK=0;try{YK.decode(a2,{stream:!0}),qK=1}catch(_){}var KK=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],NK=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],GK=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],XK=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],VK=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],UK=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],LK=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],BK=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Z7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Z7[_]=$}function Y7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function q7(_){let $=0n,j=Y7(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function WK(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function W5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function j7(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function zK(_){let $=W5(q7(_),VK,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of LK){j=j7(j,Y),Q=j7(Q,Y);let q=j<<28n|Q;Z.push(W5(q,UK,56))}return Z}function FK(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(BK[j][Y][q])}return $}function HK(_,$){let j=W5(_,GK,32)^BigInt($),Q=FK(j);return W5(Q,XK,32)}function Q7(_,$){let j=zK($),Q=W5(q7(_),KK,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let K of j){let N=Y,G=(Z^HK(Y,K))&0xffffffffn;Z=N,Y=G}let q=Y<<32n|Z;return WK(W5(q,NK,64),8)}function JK(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=Z7[Z]}return j}function K7(_,$){let j=Y7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=JK(_),Z=new Uint8Array(16);return Z.set(Q7(j.slice(0,8),Q),0),Z.set(Q7(j.slice(8,16),Q),8),Z}var m_="vnc";function OK(_){return Number(_)}function DK(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=OK(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function H5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function AK(_,$){let j=H5(_),Q=H5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function EK(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=H5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function kK(){return(_)=>{let $=H5(_);try{let j=[],Q=new $7((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return EK(j)}catch(j){try{let Q=_7($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function MK(_){return new TextEncoder().encode(String(_||""))}function z5(_){return new TextDecoder().decode(H5(_))}function IK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function xK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function N7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function TK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function CK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function G7(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function F5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function V7(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function PK(_,$,j,Q){let Z=Q||J5,Y=H5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let N=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,V=0;for(let X=0;X<Math.max(0,$||0)*Math.max(0,j||0);X+=1){let U=V7(Y,G,q,Z.bigEndian),L=F5(U>>>Z.redShift&Z.redMax,Z.redMax),H=F5(U>>>Z.greenShift&Z.greenMax,Z.greenMax),A=F5(U>>>Z.blueShift&Z.blueMax,Z.blueMax);N[V]=L,N[V+1]=H,N[V+2]=A,N[V+3]=255,G+=q,V+=4}return N}function L4(_,$,j){let Q=j||J5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=V7(_,$,Z,Q.bigEndian);return{rgba:[F5(Y>>>Q.redShift&Q.redMax,Q.redMax),F5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),F5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function C4(_,$,j,Q,Z,Y,q){if(!q)return;for(let K=0;K<Y;K+=1)for(let N=0;N<Z;N+=1){let G=((Q+K)*$+(j+N))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function U7(_,$,j,Q,Z,Y,q){for(let K=0;K<Y;K+=1){let N=K*Z*4,G=((Q+K)*$+j)*4;_.set(q.subarray(N,N+Z*4),G)}}function X7(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function yK(_,$,j,Q,Z,Y,q){let K=Z||J5,N=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let V=_.slice($+4,$+4+G),X;try{X=q(V)}catch{return{consumed:4+G,skipped:!0}}let U=0,L=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let H=0;H<Q;H+=64){let A=Math.min(64,Q-H);for(let O=0;O<j;O+=64){let W=Math.min(64,j-O);if(X.byteLength<U+1)return null;let D=X[U++],E=D&127,f=(D&128)!==0;if(!f&&E===0){let u=W*A*N;if(X.byteLength<U+u)return null;let c=Y(X.slice(U,U+u),W,A,K);U+=u,U7(L,j,O,H,W,A,c);continue}if(!f&&E===1){let u=L4(X,U,K);if(!u)return null;U+=u.bytesPerPixel,C4(L,j,O,H,W,A,u.rgba);continue}if(!f&&E>1&&E<=16){let u=[];for(let M=0;M<E;M+=1){let F=L4(X,U,K);if(!F)return null;U+=F.bytesPerPixel,u.push(F.rgba)}let c=E<=2?1:E<=4?2:4,i=Math.ceil(W*c/8),P=i*A;if(X.byteLength<U+P)return null;for(let M=0;M<A;M+=1){let F=U+M*i;for(let T=0;T<W;T+=1){let b=T*c,t=F+(b>>3),h=8-c-(b&7),s=X[t]>>h&(1<<c)-1;C4(L,j,O+T,H+M,1,1,u[s])}}U+=P;continue}if(f&&E===0){let u=0,c=0;while(c<A){let i=L4(X,U,K);if(!i)return null;U+=i.bytesPerPixel;let P=X7(X,U);if(!P)return null;U+=P.consumed;for(let M=0;M<P.runLength;M+=1)if(C4(L,j,O+u,H+c,1,1,i.rgba),u+=1,u>=W){if(u=0,c+=1,c>=A)break}}continue}if(f&&E>0){let u=[];for(let P=0;P<E;P+=1){let M=L4(X,U,K);if(!M)return null;U+=M.bytesPerPixel,u.push(M.rgba)}let c=0,i=0;while(i<A){if(X.byteLength<U+1)return null;let P=X[U++],M=P,F=1;if(P&128){M=P&127;let b=X7(X,U);if(!b)return null;U+=b.consumed,F=b.runLength}let T=u[M];if(!T)return null;for(let b=0;b<F;b+=1)if(C4(L,j,O+c,H+i,1,1,T),c+=1,c>=W){if(c=0,i+=1,i>=A)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:L,decompressed:X}}function SK(_,$,j,Q,Z){let Y=Z||J5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let N=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+N*(q+8);if(_.byteLength<$+G)return null;let V=$+4,X=L4(_,V,Y);if(!X)return null;V+=X.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);C4(U,j,0,0,j,Q,X.rgba);for(let L=0;L<N;L+=1){let H=L4(_,V,Y);if(!H)return null;if(V+=H.bytesPerPixel,_.byteLength<V+8)return null;let A=new DataView(_.buffer,_.byteOffset+V,8),O=A.getUint16(0,!1),W=A.getUint16(2,!1),D=A.getUint16(4,!1),E=A.getUint16(6,!1);V+=8,C4(U,j,O,W,D,E,H.rgba)}return{consumed:V-$,rgba:U}}function wK(_,$,j,Q,Z,Y){let q=Z||J5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,V=[0,0,0,255],X=[255,255,255,255];for(let U=0;U<Q;U+=16){let L=Math.min(16,Q-U);for(let H=0;H<j;H+=16){let A=Math.min(16,j-H);if(_.byteLength<G+1)return null;let O=_[G++];if(O&1){let W=A*L*K;if(_.byteLength<G+W)return null;let D=Y(_.slice(G,G+W),A,L,q);G+=W,U7(N,j,H,U,A,L,D);continue}if(O&2){let W=L4(_,G,q);if(!W)return null;V=W.rgba,G+=W.bytesPerPixel}if(C4(N,j,H,U,A,L,V),O&4){let W=L4(_,G,q);if(!W)return null;X=W.rgba,G+=W.bytesPerPixel}if(O&8){if(_.byteLength<G+1)return null;let W=_[G++];for(let D=0;D<W;D+=1){let E=X;if(O&16){let F=L4(_,G,q);if(!F)return null;E=F.rgba,G+=F.bytesPerPixel}if(_.byteLength<G+2)return null;let f=_[G++],u=_[G++],c=f>>4,i=f&15,P=(u>>4)+1,M=(u&15)+1;C4(N,j,H+c,U+i,P,M,E)}}}}return{consumed:G-$,rgba:N}}var J5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class R8{protocol=m_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:PK,this.pipeline=_.pipeline||null,this.encodings=DK(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...J5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:kK()}receive(_){if(_)this.buffer=AK(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=z5(Z),q=IK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=xK(q),j.push(MK(this.clientVersionText)),$.push({type:"protocol-version",protocol:m_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+N)break;this.consume(1);let G=z5(this.consume(4+N).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:m_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:m_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let N=z5(this.consume(4+K).slice(4));throw Error(N||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:m_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:m_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(K7(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=z5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:m_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),K=N7(Z,4),N=Z.getUint32(20,!1);if(this.buffer.byteLength<24+N)break;let G=this.consume(24),V=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=V.getUint16(0,!1),this.framebufferHeight=V.getUint16(2,!1),this.serverPixelFormat=N7(V,4),this.serverName=z5(this.consume(N)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(TK(this.clientPixelFormat)),j.push(CK(this.encodings)),j.push(G7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:m_,width:Y,height:q,name:this.serverName,pixelFormat:K}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,N=[],G=!1,V=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let L=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),H=L.getUint16(0,!1),A=L.getUint16(2,!1),O=L.getUint16(4,!1),W=L.getUint16(6,!1),D=L.getInt32(8,!1);if(K+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),f=O*W*E;if(this.buffer.byteLength<K+f){G=!0;break}let u=this.buffer.slice(K,K+f);if(K+=f,V)this.pipeline.processRawRect(u,H,A,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:O,height:W});else N.push({kind:"rgba",x:H,y:A,width:O,height:W,rgba:this.decodeRawRect(u,O,W,this.clientPixelFormat)});continue}if(D===2){let E=SK(this.buffer,K,O,W,this.clientPixelFormat);if(!E){G=!0;break}if(V){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(f,H,A,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:O,height:W})}else N.push({kind:"rgba",x:H,y:A,width:O,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<K+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),f=E.getUint16(0,!1),u=E.getUint16(2,!1);if(K+=4,V)this.pipeline.processCopyRect(H,A,O,W,f,u),N.push({kind:"pipeline",x:H,y:A,width:O,height:W});else N.push({kind:"copy",x:H,y:A,width:O,height:W,srcX:f,srcY:u});continue}if(D===16){let E=yK(this.buffer,K,O,W,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(K+=E.consumed,E.skipped)continue;if(V&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,H,A,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:O,height:W});else N.push({kind:"rgba",x:H,y:A,width:O,height:W,rgba:E.rgba});continue}if(D===5){let E=wK(this.buffer,K,O,W,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(V){let f=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(f,H,A,O,W,this.clientPixelFormat),N.push({kind:"pipeline",x:H,y:A,width:O,height:W})}else N.push({kind:"rgba",x:H,y:A,width:O,height:W,rgba:E.rgba});K+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=O,this.framebufferHeight=W,V)this.pipeline.initFramebuffer(O,W);N.push({kind:"resize",x:H,y:A,width:O,height:W});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let X={type:"framebuffer-update",protocol:m_,width:this.framebufferWidth,height:this.framebufferHeight,rects:N};if(V)X.framebuffer=this.pipeline.getFramebuffer();$.push(X),j.push(G7(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:m_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=z5(this.consume(q));$.push({type:"clipboard",protocol:m_,text:K}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var B4="piclaw://vnc";function RK(_){let $=String(_||"");if($===B4)return null;if(!$.startsWith(`${B4}/`))return null;let j=$.slice(`${B4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function uK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function fK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function vK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function gK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function bK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class L7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=RK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=bK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
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
                        ${$.map((Z)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d4(Z.id)}" data-target-label="${d4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=gK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=c5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
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
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=c5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=c5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=p2($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return b2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(y8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=G$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~G$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of m2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(h2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=X$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??X$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new R8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await g2(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(K,N,G,V)=>Q.decodeRawRectToRgba(K,N,G,V);let Y=c5(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new R8(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new q$({url:vK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await uK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await fK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var D$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===B4||$.startsWith(`${B4}/`)?9000:!1},mount(_,$){return new L7(_,$)}};function F_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function Z1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function O5(_,$=!1){let j=F_(_);if(j===null)return $;return j==="true"}function r5(_,$=null){let j=F_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}var k$="piclaw_theme",f8="piclaw_tint",z7="piclaw_chat_themes",s5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},F7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},B7={default:{label:"Default",mode:"auto",light:s5,dark:F7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},mK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],i4={theme:"default",tint:null},H7="light",A$=!1;function v8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function A5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function hK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),K=parseInt(Z[3],10);if(![Y,q,K].every((G)=>Number.isFinite(G)))return null;let N=`#${[Y,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:K,hex:N}}function J7(_){return A5(_)||hK(_)}function o5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function E$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function pK(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function cK(_){return pK(_)>0.4?"#000000":"#ffffff"}function O7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function M$(_){return B7[_]||B7.default}function lK(_){return _.mode==="auto"?O7():_.mode}function D7(_,$){let j=M$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||s5}function A7(_,$,j){let Q=J7($);if(!Q)return _;let Z=A5(_.bgPrimary),Y=A5(_.bgSecondary),q=A5(_.bgHover),K=A5(_.borderColor);if(!Z||!Y||!q||!K)return _;let G=A5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:o5(Z,Q,0.08),bgSecondary:o5(Y,Q,0.12),bgHover:o5(q,Q,0.16),borderColor:o5(K,Q,0.08),accent:Q.hex,accentHover:G?o5(Q,G,0.18):Q.hex}}function nK(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=J7(Q),Y=Z?E$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?E$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Z?E$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N=Z?cK(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":N,"--danger-color":_.danger||s5.danger,"--success-color":_.success||s5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([V,X])=>{if(X)j.style.setProperty(V,X)})}function dK(){if(typeof document>"u")return;let _=document.documentElement;mK.forEach(($)=>_.style.removeProperty($))}function D5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function W7(_){let $=v8(i4?.theme||"default"),j=i4?.tint?String(i4.tint).trim():null,Q=D7($,_);if($==="default"&&j)Q=A7(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?F7.bgPrimary:s5.bgPrimary}function iK(_,$){if(typeof document>"u")return;let j=D5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=D5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",W7("light"));let Z=D5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",W7("dark"));let Y=D5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=D5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=D5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function rK(){if(typeof window>"u")return;let _={...i4,mode:H7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function E7(){try{let _=F_(z7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function oK(_,$,j){let Q=E7();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};Z1(z7,JSON.stringify(Q))}function sK(_){if(!_)return null;return E7()[_]||null}function k7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function I$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=v8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=M$(j),Y=lK(Z),q=D7(j,Y);i4={theme:j,tint:Q},H7=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Q?String(Q):"",K.style.colorScheme=Y;let N=q;if(j==="default"&&Q)N=A7(q,Q,Y);if(j==="default"&&!Q)dK();else nK(N,Y);if(iK(N.bgPrimary,Y),rK(),$.persist!==!1)if(Z1(k$,j),Q)Z1(f8,Q);else Z1(f8,"")}function u8(){if(M$(i4.theme).mode!=="auto")return;I$(i4,{persist:!1})}function M7(){if(typeof window>"u")return()=>{};let _=k7(),$=sK(_),j=$?v8($.theme||"default"):v8(F_(k$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=F_(f8);return Z?Z.trim():null})();if(I$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!A$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",u8);else if(Z.addListener)Z.addListener(u8);return A$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",u8);else if(Z.removeListener)Z.removeListener(u8);A$=!1}}return()=>{}}function I7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||k7(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(oK($,j||"default",Q),I$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")Z1(k$,j||"default"),Z1(f8,Q||"")}function x7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return O7()}var g8=/#(\w+)/g,aK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),tK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),eK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),_N={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},$N=new Set(["http:","https:","mailto:",""]);function x$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function r4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!$N.has(Q.protocol))return null;return Q.href}catch{return null}}function T7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let K=q.tagName.toLowerCase();if(!tK.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let N=_N[K]||new Set;for(let G of Array.from(q.attributes)){let V=G.name.toLowerCase(),X=G.value;if(V.startsWith("on")){q.removeAttribute(G.name);continue}if(V.startsWith("data-")||V.startsWith("aria-"))continue;if(N.has(V)||eK.has(V)){if(V==="href"){let U=r4(X);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(V==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(X):X,L=r4(U,{allowDataImage:K==="img"});if(!L)q.removeAttribute(G.name);else q.setAttribute(G.name,L)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function C7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function b8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=C7(j);if(Z===j)break;j=Z}return j}function jN(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let N=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,q=[];continue}if(Y)q.push(K);else Z.push(K)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function QN(_){if(!_)return _;return b8(_,5)}function ZN(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function YN(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function qN(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=QN(Y);return`<div class="mermaid-container" data-mermaid="${ZN(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function P7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var KN={span:new Set(["title","class","lang","dir"])};function NN(_,$){let j=KN[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${x$(K)}"`)}return Q.join("")}function y7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[N=""]=K.split(/\s+/,1),G=N.toLowerCase();if(!G||!aK.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let V=K.slice(N.length).trim(),X=NN(G,V);return`<${G}${X}>`})}function S7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function w7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function GN(_){if(!window.katex)return _;let $=(q)=>C7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],N=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_BLOCK_${V}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let V=K.length;return K.push(G),`@@CODE_INLINE_${V}@@`}),{html:N,blocks:K}},Q=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,G)=>{let V=Number(G);return K[V]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,N)=>{try{let G=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${x$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,N)=>{if(/\s$/.test(N))return q;try{let G=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${x$(G.message)}">$${N}$</span>`}}),Q(Y,Z.blocks)}function XN(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(g8.lastIndex=0,!g8.test(q))continue;g8.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let N=q.split(g8);if(N.length<=1)continue;let G=$.createDocumentFragment();N.forEach((V,X)=>{if(X%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",V),U.textContent=`#${V}`,G.appendChild(U)}else G.appendChild($.createTextNode(V))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function VN(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function UN(_){let $=VN(_||""),{text:j,blocks:Q}=jN($),Z=b8(j,2),q=P7(Z).replace(/</g,"&lt;");return{safeHtml:y7(q),mermaidBlocks:Q}}function H_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=UN(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=S7(Y),Y=w7(Y),Y=GN(Y),Y=XN(Y),Y=qN(Y,Z),Y=T7(Y,j),Y}function a5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=b8($,2),Z=P7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=y7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=S7(q),q=w7(q),q=T7(q),q}function LN(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((N)=>{let[G,V]=N.split(",").map(Number);return{x:G,y:V}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let N=1;N<q.length-1;N++){let G=q[N-1],V=q[N],X=q[N+1],U=V.x-G.x,L=V.y-G.y,H=X.x-V.x,A=X.y-V.y,O=Math.sqrt(U*U+L*L),W=Math.sqrt(H*H+A*A),D=Math.min($,O/2,W/2);if(D<0.5){K.push(`L ${V.x},${V.y}`);continue}let E=V.x-U/O*D,f=V.y-L/O*D,u=V.x+H/W*D,c=V.y+A/W*D,P=U*A-L*H>0?1:0;K.push(`L ${E},${f}`),K.push(`A ${D},${D} 0 0 ${P} ${u},${c}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${K.join(" ")}"${Y}/>`})}async function W4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=x7()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let K=q.dataset.mermaid,N=YN(K||""),G=b8(N,2),V=await $(G,{...Z,transparent:!0});V=LN(V),q.innerHTML=V,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(N),q.removeAttribute("data-mermaid")}}function R7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function t5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function y_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function o4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function P4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function BN(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${K?`${K}/`:""}${Z}`,V=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(V.length>0)V.pop();continue}V.push(U)}let X=V.join("/");return`${E8(X)}${Y}${q}`}function e5(_){return _?.preview||null}function WN(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function zN(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function FN(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${P4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${P4(y_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${P4(o4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${P4(zN($))}</span>`),Q.push(`<span><strong>extension:</strong> ${P4(WN(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${P4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function HN(_){let $=e5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=FN(_,$);if($.kind==="image"){let Q=$.url||($.path?E8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${P4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=H_($.text||"",null,{rewriteImageSrc:(Z)=>BN(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${P4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class T${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=HN(this.context)}getContent(){let _=e5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=e5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var C$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=e5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new T$(_,$)}},P$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return e5(_)||_?.path?1:!1},mount(_,$){return new T$(_,$)}};var JN=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),ON={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},DN={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function f7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function u7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class v7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=f7(j),Y=DN[Z]||"\uD83D\uDCC4",q=ON[Z]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${u7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${u7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let N=K.querySelector("#ov-open-tab");if(N)N.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class g7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var y$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=f7(_?.path);if(!$||!JN.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new v7(_,$);return new g7(_,$)}};var AN=/\.(csv|tsv)$/i;function b7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class m7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${b7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${b7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class h7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!AN.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new m7(_,$);return new h7(_,$)}};var EN=/\.pdf$/i;function kN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class p7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${kN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class c7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!EN.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new p7(_,$);return new c7(_,$)}};var MN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function R$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class l7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${R$(Z)}" alt="${R$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${R$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class n7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!MN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new l7(_,$);return new n7(_,$)}};var IN=/\.(mp4|m4v|mov|webm|ogv)$/i;function xN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class d7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${xN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class i7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!IN.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new d7(_,$);return new i7(_,$)}};function TN(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function CN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var v$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function r7(_){let $=String(_||"").trim();return $?$:v$}function PN(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function yN(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function SN(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,K,N,G,V,X){try{if(q&&N!=null&&j({filename:q,format:K,data:N,mimeType:G,base64Encoded:Boolean(V),defaultMode:X}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,K,N,G,V,X){try{if(K&&j({filename:K,data:q,mimeType:N,base64Encoded:Boolean(G),mode:V,folderId:X}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function o7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${yN(j)}`}class s7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${CN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class a7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=PN(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(SN(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=v$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await o7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await o7(_,"image/png");else this.xmlData=r7(await _.text());else if(_.status===404)this.xmlData=v$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?r7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var g$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!TN(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new s7(_,$);return new a7(_,$)}};var wN=/\.mindmap\.ya?ml$/i,b$=String(Date.now());function t7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function m$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function RN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function uN(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(j);let Q=document.createElement("div");Q.id="context-menu",Q.className="context-menu hidden",Q.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Q)}class e7{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class _9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(t7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,RN("/static/css/mindmap.css"),await Promise.all([m$("/static/js/vendor/d3-mindmap.min.js?v="+b$),m$("/static/js/vendor/js-yaml.min.js?v="+b$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),uN(this.mindmapEl);let j=t7(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await m$("/static/js/vendor/mindmap-editor.js?v="+b$),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var h$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!wN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new e7(_,$);return new _9(_,$)}};var fN=/\.kanban\.md$/i,vN=String(Date.now());function $9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function gN(){let _=window;if(_.preact)return;_.preact={h:J8,render:x4,Component:N5,createContext:z2},_.preactHooks={useState:g,useEffect:v,useCallback:C,useRef:I,useMemo:S0,useReducer:T6,useContext:J2,useLayoutEffect:R5,useImperativeHandle:H2,useErrorBoundary:D2,useDebugValue:O2},_.htm={bind:()=>B}}function bN(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function mN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class j9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class Q9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.($9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,mN("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=$9();try{if(gN(),await bN("/static/js/vendor/kanban-editor.js?v="+vN),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var p$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!fN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new j9(_,$);return new Q9(_,$)}};class Z9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var r0=new Z9;function Y9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=I(_);Y.current=_;let q=I($);q.current=$;let K=I(j);K.current=j;let N=I(Q);N.current=Q,v(()=>{let G=new M8((X,U)=>Y.current(X,U),(X)=>q.current(X),{chatJid:Z});G.connect();let V=()=>{G.reconnectIfNeeded();let X=typeof document<"u"?document:null;if(!X||X.visibilityState==="visible")N.current?.()};return window.addEventListener("focus",V),document.addEventListener("visibilitychange",V),()=>{window.removeEventListener("focus",V),document.removeEventListener("visibilitychange",V),G.disconnect()}},[Z])}function q9(){let[_,$]=g(!1),[j,Q]=g("default"),Z=I(!1);v(()=>{let N=O5("notificationsEnabled",!1);if(Z.current=N,$(N),typeof Notification<"u")Q(Notification.permission)},[]),v(()=>{Z.current=_},[_]);let Y=C(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),q=C(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),Z1("notificationsEnabled","false");return}}let N=!Z.current;Z.current=N,$(N),Z1("notificationsEnabled",String(N))},[Y]),K=C((N,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let V=new Notification(N,{body:G});return V.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var _8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function K9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=g(null),[Y,q]=g(!1),K=I(!1),N=I(null),G=I(!1),V=I(null),X=I(null),U=I(0);v(()=>{K.current=Y},[Y]),v(()=>{X.current=Q},[Q]),v(()=>{U.current+=1,V.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let L=C(async(O=null)=>{let W=U.current;try{if(O){let D=await P6(O,50,0,j);if(W!==U.current)return;Z(D.posts),q(!1)}else{let D=await l4(10,null,j);if(W!==U.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(W!==U.current)return;console.error("Failed to load posts:",D)}},[j]),H=C(async()=>{let O=U.current;try{let W=await l4(10,null,j);if(O!==U.current)return;Z((D)=>{if(!D||D.length===0)return W.posts;return _8([...W.posts,...D])}),q((D)=>D||W.has_more)}catch(W){if(O!==U.current)return;console.error("Failed to refresh timeline:",W)}},[j]),A=C(async(O={})=>{let W=U.current,D=X.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:f="top",allowRepeat:u=!1}=O,c=(M)=>{if(!E){M();return}if(f==="top")$(M);else _(M)},P=D.slice().sort((M,F)=>M.id-F.id)[0]?.id;if(!Number.isFinite(P))return;if(!u&&V.current===P)return;G.current=!0,V.current=P;try{let M=await l4(10,P,j);if(W!==U.current)return;if(M.posts.length>0)c(()=>{Z((F)=>_8([...M.posts,...F||[]])),q(M.has_more)});else q(!1)}catch(M){if(W!==U.current)return;console.error("Failed to load more posts:",M)}finally{if(W===U.current)G.current=!1}},[j,_,$]);return v(()=>{N.current=A},[A]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:K,loadPosts:L,refreshTimeline:H,loadMore:A,loadMoreRef:N,loadingMoreRef:G,lastBeforeIdRef:V}}function N9(){let[_,$]=g(null),[j,Q]=g({text:"",totalLines:0}),[Z,Y]=g(""),[q,K]=g({text:"",totalLines:0}),[N,G]=g(null),[V,X]=g(null),[U,L]=g(null),H=I(null),A=I(0),O=I(!1),W=I(""),D=I(""),E=I(null),f=I(null),u=I(null),c=I(null),i=I(!1),P=I(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:K,pendingRequest:N,setPendingRequest:G,currentTurnId:V,setCurrentTurnId:X,steerQueuedTurnId:U,setSteerQueuedTurnId:L,lastAgentEventRef:H,lastSilenceNoticeRef:A,isAgentRunningRef:O,draftBufferRef:W,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:f,currentTurnIdRef:u,steerQueuedTurnIdRef:c,thoughtExpandedRef:i,draftExpandedRef:P}}function G9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=$.current||280,H=V.currentTarget;H.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,O=(D)=>{A=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),160),600);X.style.setProperty("--sidebar-width",`${E}px`),$.current=E},W=()=>{let D=Math.min(Math.max(L+(A-U),160),600);$.current=D,H.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",Z1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,Y=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=$.current||280,A=V.currentTarget;A.classList.add("dragging"),X.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let O=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let f=Math.min(Math.max(H+(E.clientX-L),160),600);X.style.setProperty("--sidebar-width",`${f}px`),$.current=f},W=()=>{A.classList.remove("dragging"),X.classList.remove("sidebar-resizing"),document.body.style.userSelect="",Z1("sidebarWidth",String(Math.round($.current||H))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,q=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientX,L=j.current||$.current||280,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,O=(D)=>{A=D.clientX;let E=Math.min(Math.max(L+(D.clientX-U),200),800);X.style.setProperty("--editor-width",`${E}px`),j.current=E},W=()=>{let D=Math.min(Math.max(L+(A-U),200),800);j.current=D,H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,K=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientX,H=j.current||$.current||280,A=V.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let O=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let f=Math.min(Math.max(H+(E.clientX-L),200),800);X.style.setProperty("--editor-width",`${f}px`),j.current=f},W=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",Z1("editorWidth",String(Math.round(j.current||H))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current,N=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.clientY,L=Q?.current||200,H=V.currentTarget;H.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=U,O=(D)=>{A=D.clientY;let E=Math.min(Math.max(L-(D.clientY-U),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${E}px`),Q)Q.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{let D=Math.min(Math.max(L-(A-U),100),window.innerHeight*0.5);if(Q)Q.current=D;H.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",W)}).current,G=I((V)=>{V.preventDefault();let X=_.current;if(!X)return;let U=V.touches[0];if(!U)return;let L=U.clientY,H=Q?.current||200,A=V.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let O=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let f=Math.min(Math.max(H-(E.clientY-L),100),window.innerHeight*0.5);if(X.style.setProperty("--dock-height",`${f}px`),Q)Q.current=f;window.dispatchEvent(new CustomEvent("dock-resize"))},W=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",Z1("dockHeight",String(Math.round(Q?.current||H))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",W)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",W)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:G}}function hN(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,K]of _.entries()){let N=q;if(Q==="dir"){if(q===$)N=j,Z=!0;else if(q.startsWith(`${$}/`))N=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)N=j,Z=!0;Y.set(N,K)}return Z?Y:_}function X9({onTabClosed:_}={}){let $=I(_);$.current=_;let[j,Q]=g(()=>r0.getTabs()),[Z,Y]=g(()=>r0.getActiveId()),[q,K]=g(()=>r0.getTabs().length>0);v(()=>{return r0.onChange((P,M)=>{Q(P),Y(M),K(P.length>0)})},[]);let[N,G]=g(()=>new Set),[V,X]=g(()=>new Map),U=C((P)=>{G((M)=>{let F=new Set(M);if(F.has(P))F.delete(P);else F.add(P);return F})},[]),L=C((P)=>{G((M)=>{if(!M.has(P))return M;let F=new Set(M);return F.delete(P),F})},[]),H=C((P)=>{X((M)=>{if(!M.has(P))return M;let F=new Map(M);return F.delete(P),F})},[]),A=C((P,M={})=>{if(!P)return;let F=typeof M?.paneOverrideId==="string"&&M.paneOverrideId.trim()?M.paneOverrideId.trim():null,T={path:P,mode:"edit"};try{if(!(F?h0.get(F):h0.resolve(T))){if(!h0.get("editor")){console.warn(`[openEditor] No pane handler for: ${P}`);return}}}catch(t){console.warn(`[openEditor] paneRegistry.resolve() error for "${P}":`,t)}let b=typeof M?.label==="string"&&M.label.trim()?M.label.trim():void 0;if(r0.open(P,b),F)X((t)=>{if(t.get(P)===F)return t;let h=new Map(t);return h.set(P,F),h})},[]),O=C(()=>{let P=r0.getActiveId();if(P){let M=r0.get(P);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}r0.close(P),L(P),H(P),$.current?.(P)}},[H,L]),W=C((P)=>{let M=r0.get(P);if(M?.dirty){if(!window.confirm(`"${M.label}" has unsaved changes. Close anyway?`))return}r0.close(P),L(P),H(P),$.current?.(P)},[H,L]),D=C((P)=>{r0.activate(P)},[]),E=C((P)=>{let M=r0.getTabs().filter((b)=>b.id!==P&&!b.pinned),F=M.filter((b)=>b.dirty).length;if(F>0){if(!window.confirm(`${F} unsaved tab${F>1?"s":""} will be closed. Continue?`))return}let T=M.map((b)=>b.id);r0.closeOthers(P),T.forEach((b)=>{L(b),H(b),$.current?.(b)})},[H,L]),f=C(()=>{let P=r0.getTabs().filter((T)=>!T.pinned),M=P.filter((T)=>T.dirty).length;if(M>0){if(!window.confirm(`${M} unsaved tab${M>1?"s":""} will be closed. Continue?`))return}let F=P.map((T)=>T.id);r0.closeAll(),F.forEach((T)=>{L(T),H(T),$.current?.(T)})},[H,L]),u=C((P)=>{r0.togglePin(P)},[]),c=C((P)=>{if(!P)return;X((M)=>{if(M.get(P)==="editor")return M;let F=new Map(M);return F.set(P,"editor"),F}),r0.activate(P)},[]),i=C(()=>{let P=r0.getActiveId();if(P)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:P}}))},[]);return v(()=>{let P=(M)=>{let{oldPath:F,newPath:T,type:b}=M.detail||{};if(!F||!T)return;if(b==="dir"){for(let t of r0.getTabs())if(t.path===F||t.path.startsWith(`${F}/`)){let h=`${T}${t.path.slice(F.length)}`;r0.rename(t.id,h)}}else r0.rename(F,T);X((t)=>hN(t,F,T,b))};return window.addEventListener("workspace-file-renamed",P),()=>window.removeEventListener("workspace-file-renamed",P)},[]),v(()=>{let P=(M)=>{if(r0.hasUnsaved())M.preventDefault(),M.returnValue=""};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:N,tabPaneOverrides:V,openEditor:A,closeEditor:O,handleTabClose:W,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:f,handleTabTogglePin:u,handleTabTogglePreview:U,handleTabEditSource:c,revealInExplorer:i}}function c$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var l$=c$("warning",30000),V9=c$("finalize",120000),n$=c$("refresh",30000),U9=30000;function L9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function B9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function W9(_=30000){let[,$]=g(0);v(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function z9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}async function F9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Q,thoughtExpandedRef:Z,draftExpandedRef:Y,setAgentThoughtVisibility:q,getAgentThought:K,thoughtBufferRef:N,draftBufferRef:G,setAgentThought:V,setAgentDraft:X}=_;if($!=="thought"&&$!=="draft")return;let U=Q.current;if($==="thought"){if(Z.current=j,U)try{await q(U,"thought",j)}catch(L){console.warn("Failed to update thought visibility:",L)}if(!j)return;try{let L=U?await K(U,"thought"):null;if(L?.text)N.current=L.text;V((H)=>({...H||{text:"",totalLines:0},fullText:N.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full thought:",L)}return}if(Y.current=j,U)try{await q(U,"draft",j)}catch(L){console.warn("Failed to update draft visibility:",L)}if(!j)return;try{let L=U?await K(U,"draft"):null;if(L?.text)G.current=L.text;X((H)=>({...H||{text:"",totalLines:0},fullText:G.current||H?.fullText||"",totalLines:Number.isFinite(L?.total_lines)?L.total_lines:H?.totalLines||0}))}catch(L){console.warn("Failed to fetch full draft:",L)}}function H9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function J9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function O9(_){return String(_||"").trim()||"web:default"}function D9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function A9(_){if(!_)return!1;return _.status!=="running"}function E9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function d$(_){return String(_||"").trim()||"web:default"}function k9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function pN(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function y4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function m8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return y4(_)?"Compacting context":"Working..."}function cN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function h8(_,$=Date.now()){let j=pN(_);if(j===null)return null;return cN(Math.max(0,$-j))}function $8(_){return typeof _==="string"}function M9(_){return typeof _==="string"&&_.trim().length>0}function i$(_){if(!Array.isArray(_))return[];return _.filter(($)=>M9($?.chat_jid)&&M9($?.agent_name))}function I9(_){if(!Array.isArray(_))return[];return _.filter(($)=>$8($?.chat_jid)&&$8($?.agent_name))}function x9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if($8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!$8(q?.chat_jid))return q;let K=Q.get(q.chat_jid);return K?{...q,...K,is_active:K.is_active??q.is_active}:q}),Y=$8(j)?j:"";return Z.sort((q,K)=>{if(q.chat_jid===Y&&K.chat_jid!==Y)return-1;if(K.chat_jid===Y&&q.chat_jid!==Y)return 1;let N=Boolean(q.archived_at),G=Boolean(K.archived_at);if(N!==G)return N?1:-1;if(Boolean(q.is_active)!==Boolean(K.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(K.chat_jid))}),Z}var lN={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function T9(_){if(!_||typeof _!=="object")return lN;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function C9(_){let j=(Array.isArray(_)?_:[]).find((Q)=>Q?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function P9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Q=String(j),Z=_.agent_name,Y=_.agent_avatar;if(!Z&&Y===void 0)return null;let q=$||{id:Q},K=q.name||null,N=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,V=!1;if(Z&&Z!==q.name)K=Z,G=!0;if(Y!==void 0){let X=typeof Y==="string"?Y.trim():null,U=typeof N==="string"?N.trim():null,L=X||null;if(L!==(U||null))N=L,V=!0}if(!G&&!V)return null;return{agentId:Q,nameChanged:G,avatarChanged:V,resolvedName:K,resolvedAvatar:N}}function y9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Q=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Q&&_.avatar_background===Z)return _;return{name:j,avatar_url:Q,avatar_background:Z}}function S9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Q=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Q===void 0&&Z===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Q===void 0?_.avatar_url:typeof Q==="string"&&Q.trim()?Q.trim():null,K=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===K)return _;return{name:Y,avatar_url:q,avatar_background:K}}function nN(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function w9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!nN(Z));return Q.length===_.length?_:Q}function R9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function u9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function S4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function f9(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function v9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function g9(_){let{getAgents:$,setAgents:j,setUserProfile:Q,applyBranding:Z}=_;try{let Y=await $();j(L9(Y));let q=Y?.user||{};Q((N)=>y9(N,q));let K=C9(Y?.agents);Z(K.name,K.avatarUrl)}catch(Y){console.warn("Failed to load agents:",Y)}}function b9(_){let{payload:$,agentsRef:j,setAgents:Q,applyBranding:Z}=_,Y=P9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Y)return;if(Q((q)=>{let N={...q[Y.agentId]||{id:Y.agentId}};if(Y.nameChanged)N.name=Y.resolvedName;if(Y.avatarChanged)N.avatar_url=Y.resolvedAvatar;return{...q,[Y.agentId]:N}}),Y.agentId==="default")Z(Y.resolvedName,Y.resolvedAvatar,Y.avatarChanged?Date.now():null)}function m9(_){let{payload:$,setUserProfile:j}=_;j((Q)=>S9(Q,$))}function h9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Q,setSupportsThinking:Z,setActiveModelUsage:Y}=_,q=T9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Q(q.thinkingLevel);if(q.hasSupportsThinking)Z(q.supportsThinking);if(q.hasProviderUsage)Y(q.providerUsage)}function p9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Q,applyModelState:Z}=_,Y=$;j(Y).then((q)=>{if(Q.current!==Y)return;if(q)Z(q)}).catch(()=>{})}function c9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Q,activeChatJidRef:Z,setActiveChatAgents:Y}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Q(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,N])=>{if(Z.current!==q)return;let G=i$(K?.chats),V=i$(N?.chats);Y(x9(G,V,q))}).catch(()=>{if(Z.current!==q)return;Y([])})}function l9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Q}=_;j($).then((Z)=>{Q(I9(Z?.chats))}).catch(()=>{})}function n9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshContextUsage:Z,refreshAutoresearchStatus:Y,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Q(),Z(),Y(),v9($))q()}function d9(_={}){return X4(_)&&T8(_)}function dN(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function iN(_={},$={}){if(!d9(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=dN({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function i9(_={}){if(!d9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let X of Z)$.clearTimeout?.(X);Z.clear()},q=()=>{Q=0,iN({window:$,document:j})},K=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},N=()=>{K();for(let X of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),K()},X);if(U!=null)Z.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;N()},V=$.visualViewport;return N(),$.addEventListener("focus",N),$.addEventListener("pageshow",N),$.addEventListener("resize",N),$.addEventListener("orientationchange",N),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",N,!0),V?.addEventListener?.("resize",N),V?.addEventListener?.("scroll",N),()=>{Y(),$.removeEventListener("focus",N),$.removeEventListener("pageshow",N),$.removeEventListener("resize",N),$.removeEventListener("orientationchange",N),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",N,!0),V?.removeEventListener?.("resize",N),V?.removeEventListener?.("scroll",N)}}function rN(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function __(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:rN($,j)}var oN=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function r9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(X4({window:j,navigator:Q}))};Z();let q=oN.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Z),()=>K.removeEventListener("change",Z);if(typeof K.addListener==="function")return K.addListener(Z),()=>K.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let K of q)K();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function o9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function s9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Q?.(G,V)},q=(N)=>{let G=N?.detail?.path,V=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Z?.(G,V)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((N)=>j.addEventListener(N,Y)),j.addEventListener("pane:popout",q),()=>{K.forEach((N)=>j.removeEventListener(N,Y)),j.removeEventListener("pane:popout",q)}}function a9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function t9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Q?.();return}if(K?.key==="Escape"&&Y())K.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function e9(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function _j(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function $j(_,$,j){return _||$?.label||j||"Pane"}function jj(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function Qj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function Zj(_,$,j,Q){return _===$&&!j||Q}function Yj(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}function p8(_){let $=r$(_);return $?`@${$}`:""}function r$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function c8(_,$=""){let j=String(_||""),Q=r$(j),Z=r$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function qj(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?p8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function sN(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function l8(_,$={}){let j=p8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=sN(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function Kj(_,$,j){let Q=p8(_),Z=p8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}var aN="piclaw_btw_session",Gj=900,Nj="__piclawRenameBranchFormLock__";function tN(){try{return import.meta.url}catch{return null}}function o$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function n8(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function Xj(_={}){let $=_.importMetaUrl===void 0?tN():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((N)=>String(N?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,Q).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function s$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Nj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[Nj]=Q,Q}function Vj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Uj(_={}){let $=typeof _.readItem==="function"?_.readItem:F_,j=_.storageKey||aN,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",K=typeof Z.thinking==="string"?Z.thinking:"",N=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:K,error:G==="error"?N||"BTW stream interrupted. You can retry.":N,model:null,status:G}}catch{return null}}function Lj(_,$={}){let j=$.defaultChatJid||"web:default",Q=n8(_,"chat_jid",j),Z=o$(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=o$(_?.get?.("pane_popout")),q=n8(_,"pane_path"),K=n8(_,"pane_label"),N=o$(_?.get?.("branch_loader")),G=n8(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:N,branchLoaderSourceChatJid:G}}function Bj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Q,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:Y,isAgentRunningRef:q,pendingRequestRef:K,showIntentToast:N}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Q.current===G)return!0;Q.current=G;let V=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Y()&&!V&&!q.current&&!K.current&&!Z.current)return Z.current=!0,N("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Z.current=!1}},350),!0;return N("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function a$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Q}=_||{};return!$&&!j&&!Q}function Wj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Q,setAgentDraft:Z,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:N,clearAgentRunState:G,hasConnectedOnceRef:V,viewStateRef:X,refreshTimeline:U,refreshAgentStatus:L,refreshQueueState:H,refreshContextUsage:A}=_;if(j($),$!=="connected"){Q(null),Z({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),N.current=null,G();return}if(!V.current){if(V.current=!0,a$(X.current))U();L(),H(),A();return}if(a$(X.current))U();L(),H(),A()}function zj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Q,refreshQueueState:Z,refreshAgentStatus:Y,refreshContextUsage:q,refreshAutoresearchStatus:K}=_,N=a$($.current);if(j){if(N)Q();Z(),Y(),q(),K();return}if(N)Q();Y(),q(),K()}function Fj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:N=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||N<Number(Z||0)||G.inFlight||N<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function Hj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function Jj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:G,refreshActiveChatAgents:V,refreshCurrentChatBranches:X,showIntentToast:U,closeRenameForm:L,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let A=H(),O=K?.()||null;if(!O)return!1;if(Y.current||A<Number(q.current||0)||O.inFlight||A<Number(O.cooldownUntil||0))return!1;Y.current=!0,O.inFlight=!0,N?.(!0);try{let W=j.agent_name||"",D=c8(Q,W);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||W,f=await G(j.chat_jid,{agentName:E});await Promise.allSettled([V?.(),X?.()]);let u=f?.branch?.agent_name||E||W;return U?.("Branch renamed",`@${u}`,"info",3500),L?.(),!0}catch(W){let D=W instanceof Error?W.message:String(W||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,N?.(!1);let W=H()+Gj;q.current=W;let D=K?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=W}}async function Oj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:G,showIntentToast:V,baseHref:X,chatOnlyMode:U,navigate:L,confirm:H=(c)=>window.confirm(c)}=_;if(!$)return!1;let A=typeof j==="string"&&j.trim()?j.trim():"",O=typeof Q==="string"&&Q.trim()?Q.trim():"",W=A||Z?.chat_jid||O;if(!W)return V?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===W?Z:null)||Y.find((c)=>c?.chat_jid===W)||q.find((c)=>c?.chat_jid===W)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return V?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let f=`@${D?.agent_name||W}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!H(`Prune ${f}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(W),await Promise.allSettled([N?.(),G?.()]);let c=D?.root_chat_jid||"web:default";V?.("Branch pruned",`${f} has been archived.`,"info",3000);let i=V4(X,c,{chatOnly:U});return L?.(i),!0}catch(c){let i=c instanceof Error?c.message:String(c||"Could not prune branch.");return V?.("Could not prune branch",i||"Could not prune branch.","warning",5000),!1}}async function Dj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:K,chatOnlyMode:N,navigate:G}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;try{let X=Q.find((W)=>W?.chat_jid===V)||null,U=await j(V);await Promise.allSettled([Z?.(),Y?.()]);let L=U?.branch,H=typeof L?.chat_jid==="string"&&L.chat_jid.trim()?L.chat_jid.trim():V,A=Kj(X?.agent_name,L?.agent_name,H);q?.("Branch restored",A,"info",4200);let O=V4(K,H,{chatOnly:N});return G?.(O),!0}catch(X){let U=X instanceof Error?X.message:String(X||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function Aj(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let N=K?.branch,G=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let V=V4(Y,G,{chatOnly:!0});return Z?.(V,{replace:!0}),!0}catch(K){if(q())return!1;return Q?.({status:"error",message:m5(K)}),!1}}function Ej(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Q,chatOnlyMode:Z,currentHref:Y,navigate:q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Q)return!1;let N=V4(Y,K,{chatOnly:Z});return q?.(N),!0}async function kj(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Q,dockInstanceRef:Z,terminalTabPath:Y}=_,K=(typeof j==="string"?j.trim():"")===$?Q.current:$===Y?Z.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function Mj(_){let{panePath:$,terminalTabPath:j,dockVisible:Q,resolveTab:Z,closeTab:Y,setDockVisible:q}=_,K=Z($);if(K&&!K.dirty){Y($);return}if($===j&&Q)q(!1)}function Ij(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Q,editorWidthRef:Z,dockHeightRef:Y,sidebarWidthRef:q,readStoredNumber:K}=_;if(!j||!$||!Q)return;if(!Z.current){let N=K("editorWidth",null),G=q.current||280;Z.current=Number.isFinite(N)?Number(N):G}if(Q.style.setProperty("--editor-width",`${Z.current}px`),!Y.current){let N=K("dockHeight",null);Y.current=Number.isFinite(N)?Number(N):200}Q.style.setProperty("--dock-height",`${Y.current}px`)}async function xj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:K,baseHref:N}=_;try{let V=(await Q($))?.branch,X=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!X)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let U=V?.agent_name?`@${V.agent_name}`:X;q?.("New branch created",`Switched to ${U}.`,"info",2500);let L=V4(N,X,{chatOnly:j});return K?.(L),!0}catch(G){return q?.("Could not create branch",m5(G),"warning",5000),!1}}async function Tj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:N,baseHref:G}=_;if(!$||j)return!1;let V=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!V)return!1;let X=S2(V);if(!X)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=j$(X);if(!U)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;Q$(U,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let L=await q?.(V),H=y2(G,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:N,params:L});return Z$(U,H),K?.(V),!0}catch(L){Y$(U);let H=L instanceof Error?L.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",H,"warning",5000),!1}}async function Cj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:N,setCurrentChatBranches:G,showIntentToast:V,baseHref:X}=_;if(!$||j)return!1;let U=C2(Q);if(!U)return V?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let H=P2(X,Q,{chatOnly:!0});if(!window.open(H,U.target))return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let L=j$(U);if(!L)return V?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;Q$(L,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let A=(await Y(Q))?.branch,O=typeof A?.chat_jid==="string"&&A.chat_jid.trim()?A.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();N?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await K?.(Z);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let W=V4(X,O,{chatOnly:!0});return Z$(L,W),!0}catch(H){return Y$(L),V?.("Could not open branch window",m5(H),"error",5000),!1}}function Pj(_){_(($)=>!$)}function yj(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:Q,navigate:Z,hasWindow:Y=typeof window<"u",currentHref:q=Y?window.location.href:"http://localhost/"}=_;return Ej({hasWindow:Y,nextChatJid:$,currentChatJid:j,chatOnlyMode:Q,currentHref:q,navigate:Z})}function Sj(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Q,getFormLock:Z,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,hasWindow:K=typeof window<"u"}=_;return Fj({hasWindow:K,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:Q,getFormLock:Z,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q})}function wj(_){Hj(_)}async function Rj(_){let{hasWindow:$=typeof window<"u",...j}=_;await Jj({hasWindow:$,...j})}async function uj(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Q}=_;await Oj({hasWindow:$,baseHref:j,...Q})}async function fj(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Q}=_;await Dj({baseHref:j,...Q})}function vj(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:Q,setBranchLoaderState:Z,navigate:Y,hasWindow:q=typeof window<"u",baseHref:K=q?window.location.href:"http://localhost/",runBranchLoaderImpl:N=Aj}=_;if(!$||!q)return;let G=!1;return N({branchLoaderSourceChatJid:j,forkChatBranch:Q,setBranchLoaderState:Z,navigate:Y,baseHref:K,isCancelled:()=>G}),()=>{G=!0}}async function gj(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Q}=_;await xj({baseHref:j,...Q})}async function bj(_){let{isWebAppMode:$,path:j,label:Q,showIntentToast:Z,currentChatJid:Y,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L,hasWindow:H=typeof window<"u",baseHref:A=H?window.location.href:"http://localhost/"}=_;await Tj({hasWindow:H,isWebAppMode:$,path:j,label:Q,showIntentToast:Z,currentChatJid:Y,baseHref:A,resolveSourceTransfer:(O)=>kj({panePath:O,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:N,terminalTabPath:G}),closeSourcePaneIfTransferred:(O)=>{Mj({panePath:O,terminalTabPath:G,dockVisible:V,resolveTab:X,closeTab:U,setDockVisible:L})}})}function mj(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:Q=s9}=_;return Q({openTab:(Z,Y)=>$(Z,Y?{label:Y}:void 0),popOutPane:(Z,Y)=>{j(Z,Y)}})}async function hj(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...Q}=_;await Cj({hasWindow:$,baseHref:j,...Q})}function pj(_){let{hasWindow:$=typeof window<"u",...j}=_;Ij({hasWindow:$,...j})}function d8(_){return _?{..._}:{text:"",totalLines:0}}function cj(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function eN(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function _G(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function lj(_){return{agentStatus:_.agentStatus,agentDraft:d8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:d8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:cj(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:eN(_.silentRecovery)}}function nj(_){let $=_.snapshot||_G(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(d8($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(d8($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(cj($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function t$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function dj(_,$){let j=new Map(_),Q=t$($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function ij(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=t$($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function rj(_){if(_?.options?.remove)return!0;return t$(_)?.state!=="running"}function e$(_,$){return`${_}:${$}`}function oj(_,$,j){let Q=e$($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function sj(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function i8(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function aj(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function $G(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function jG(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function w4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function P0(_){return typeof _==="string"&&_.trim()?_.trim():null}function ej(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var _Q="__PICLAW_WIDGET_HOST__:";function tj(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function _3(_,$){if(!_||_.type!=="generated_widget")return null;let j=$G(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:ej(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function $Q(_){if(!_||typeof _!=="object")return null;let $=jG(_),j=P0(_?.widget_id)||P0(_?.widgetId)||P0(_?.tool_call_id)||P0(_?.toolCallId),Q=P0(_?.tool_call_id)||P0(_?.toolCallId),Z=P0(_?.turn_id)||P0(_?.turnId),Y=P0(_?.title)||P0(_?.name)||"Generated widget",q=P0(_?.subtitle)||"",K=P0(_?.description)||q,N=P0(_?.status),G=N==="loading"||N==="streaming"||N==="final"||N==="error"?N:"streaming";return{title:Y,subtitle:q,description:K,originPostId:w4(_?.origin_post_id)??w4(_?.originPostId),originChatJid:P0(_?.origin_chat_jid)||P0(_?.originChatJid)||P0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:ej(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:w4(_?.width),height:w4(_?.height),error:P0(_?.error)}}function jQ(_){return _3(_,null)!==null}function J_(_){let $=P0(_?.toolCallId)||P0(_?.tool_call_id);if($)return $;let j=P0(_?.widgetId)||P0(_?.widget_id);if(j)return j;let Q=w4(_?.originPostId)??w4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function QQ(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function ZQ(_){return QQ(_)?"allow-downloads allow-scripts":"allow-downloads"}function r8(_){return{title:P0(_?.title)||"Generated widget",widgetId:P0(_?.widgetId)||P0(_?.widget_id),toolCallId:P0(_?.toolCallId)||P0(_?.tool_call_id),turnId:P0(_?.turnId)||P0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:P0(_?.status)||"final"}}function o8(_){return{...r8(_),subtitle:P0(_?.subtitle)||"",description:P0(_?.description)||"",error:P0(_?.error)||null,width:w4(_?.width),height:w4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function s8(_){return`${_Q}${JSON.stringify(o8(_))}`}function YQ(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=P0(_.text)||P0(_.content)||P0(_.message)||P0(_.prompt)||P0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=P0(j.text)||P0(j.content)||P0(j.message)||P0(j.prompt)||P0(j.value);if(Q)return Q}return null}function qQ(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function KQ(_){let $=P0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return P0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function QG(_){let $=r8(_);return`<script>
(function () {
  const meta = ${tj($)};
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

  const windowNamePrefix = ${tj(_Q)};
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
</script>`}function NQ(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let K=QQ(_),N=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,V=K?QG(_):"";return`<!doctype html>
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
</html>`}function ZG(_,$){let j=J_(_);return Boolean(_&&j===$)}function E5(_,$,j){if(!ZG(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function GQ(_,$){return{..._,openedAt:$}}function XQ(_){let $=J_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function VQ(_,$,j){let Q=$Q({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=J_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=J_(_),q=Boolean(Z&&Y&&Z===Y),K={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:K,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function UQ(_,$){if(!_||_?.source!=="live")return _||null;let j=J_($),Q=J_(_);if(j&&Q&&j!==Q)return _;return null}function LQ(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function $3(_,$,j){if(j.errorMessage)return E5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return E5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function BQ(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function WQ(_,$,j){return E5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function zQ(_,$,j){return E5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function k5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Q=S4(_,j);return{rowId:j,items:Q.items,remainingQueueCount:Q.remainingQueueCount}}function j3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function R4(_){return _.status==="fulfilled"?_.value:null}function a8(_){return Math.max(0,Math.min(100,_))}function FQ(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Q=$.filter((O)=>O?.data?.is_bot_message).length,Z=$.filter((O)=>!O?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,N=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,V=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,X=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,L=_.modelsPayload?.supports_thinking??_.supportsThinking,H=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),A=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:K},agent:{status:H,phase:A,running:Boolean(_.isAgentTurnActive)},model:{current:X,thinkingLevel:U,supportsThinking:Boolean(L)},context:{tokens:G,contextWindow:V,percent:N},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Q,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:a8(Math.round(N))},{key:"queue",label:"Queue",value:a8(Y*18)},{key:"activeChats",label:"Active chats",value:a8(q*12)},{key:"posts",label:"Timeline load",value:a8($.length*5)}]}}function HQ(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function JQ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function OQ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function DQ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function AQ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function EQ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function kQ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Q,getAgentStatus:Z,getAgentContext:Y,getAgentQueueState:q,getAgentModels:K,getActiveChatAgents:N,getChatBranches:G,getTimeline:V,rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:A,activeModel:O,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E}=_,[f,u,c,i,P,M,F]=await Promise.allSettled([Z(j),Y(j),q(j),K(j),N(),G(Q),V(20,null,j)]);return FQ({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Q,statusPayload:R4(f),contextPayload:R4(u),queuePayload:R4(c),modelsPayload:R4(i),activeChatsPayload:R4(P),branchesPayload:R4(M),timelinePayload:R4(F),rawPosts:X,activeChatAgents:U,currentChatBranches:L,contextUsage:H,followupQueueItems:A,activeModel:O,activeThinkingLevel:W,supportsThinking:D,isAgentTurnActive:E})}function MQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,steerAgentQueueItem:N}=_,G=k5(j.current,$);if(!G)return;let{rowId:V}=G;Q.current.add(V),q((X)=>S4(X,V).items),N(V,d$(Z)).then(()=>{Y()}).catch((X)=>{console.warn("[queue] Failed to steer queued item:",X);let U=j3("steer");K(U.title,U.detail,"warning"),Q.current.delete(V),Y()})}function IQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,clearQueuedSteerStateIfStale:N,removeAgentQueueItem:G}=_,V=k5(j.current,$);if(!V)return;let{rowId:X}=V;Q.current.add(X),N?.(V.remainingQueueCount),q((U)=>S4(U,X).items),G(X,d$(Z)).then(()=>{Y()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let L=j3("remove");K(L.title,L.detail,"warning"),Q.current.delete(X),Y()})}function xQ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Q}=_;if(!$||typeof $!=="object")return;let Z=J_($);if(Z)j.current.delete(Z);Q(GQ($,new Date().toISOString()))}function TQ(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Q)=>{let Z=XQ(Q);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function CQ(_){let{event:$,widget:j,currentChatJid:Q,isComposeBoxAgentActive:Z,setFloatingWidget:Y,handleCloseFloatingWidget:q,handleMessageResponse:K,showIntentToast:N,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:V}=_,X=typeof $?.kind==="string"?$.kind:"",U=J_(j);if(!X||!U)return;if(X==="widget.close"){q();return}if(X==="widget.submit"){let L=YQ($?.payload),H=qQ($?.payload),A=new Date().toISOString();if(Y((O)=>LQ(O,U,{kind:X,payload:$?.payload||null,submittedAt:A,submissionText:L})),!L){if(N("Widget submission received","The widget submitted data without a message payload yet.","info",3500),H)q();return}(async()=>{try{let O=await G("default",L,null,[],Z?"queue":null,Q);K(O),Y((D)=>$3(D,U,{submittedAt:A,submissionText:L,queued:O?.queued||null}));let W=HQ(O?.queued);if(N(W.title,W.detail,W.kind,W.durationMs),H)q()}catch(O){Y((D)=>$3(D,U,{submittedAt:A,submissionText:L,errorMessage:O?.message||"Could not send the widget message."}));let W=JQ(O?.message);N(W.title,W.detail,W.kind,W.durationMs)}})();return}if(X==="widget.ready"||X==="widget.request_refresh"){let L=new Date().toISOString(),H=OQ($?.payload||null,j?.runtimeState?.refreshCount);if(Y((A)=>BQ(A,U,{kind:X,payload:$?.payload||null,eventAt:L,nextRefreshCount:H.nextRefreshCount,shouldBuildDashboard:H.shouldBuildDashboard})),X==="widget.request_refresh")if(H.shouldBuildDashboard)(async()=>{try{let A=await V($?.payload||null);Y((W)=>WQ(W,U,{dashboard:A,at:new Date().toISOString(),count:H.nextRefreshCount,echo:$?.payload||null}));let O=DQ();N(O.title,O.detail,O.kind,O.durationMs)}catch(A){Y((W)=>zQ(W,U,{errorMessage:A?.message||"Could not build dashboard.",at:new Date().toISOString(),count:H.nextRefreshCount}));let O=AQ(A?.message);N(O.title,O.detail,O.kind,O.durationMs)}})();else{let A=EQ();N(A.title,A.detail,A.kind,A.durationMs)}}}var YG=400,Q3=60,PQ=220,Z3="mdPreviewHeight";function qG(){try{let _=localStorage.getItem(Z3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=Q3?$:PQ}catch{return PQ}}function t8({getContent:_,path:$,onClose:j}){let[Q,Z]=g(""),[Y,q]=g(qG),K=I(null),N=I(null),G=I(""),V=I(_);return V.current=_,v(()=>{let L=()=>{let A=V.current?.()||"";if(A===G.current)return;G.current=A;try{let O=H_(A,null,{sanitize:!1});Z(O)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};L();let H=setInterval(L,YG);return()=>clearInterval(H)},[]),v(()=>{if(K.current&&Q)W4(K.current).catch(()=>{})},[Q]),B`
        <div
            class="md-preview-splitter"
            onMouseDown=${(L)=>{L.preventDefault();let H=L.clientY,A=N.current?.offsetHeight||Y,O=N.current?.parentElement,W=O?O.offsetHeight*0.7:500,D=L.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(u)=>{let c=Math.min(Math.max(A-(u.clientY-H),Q3),W);q(c)},f=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",f)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",f)}}
            onTouchStart=${(L)=>{L.preventDefault();let H=L.touches[0];if(!H)return;let A=H.clientY,O=N.current?.offsetHeight||Y,W=N.current?.parentElement,D=W?W.offsetHeight*0.7:500,E=L.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let f=(c)=>{let i=c.touches[0];if(!i)return;c.preventDefault();let P=Math.min(Math.max(O-(i.clientY-A),Q3),D);q(P)},u=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Z3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",f),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",f,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}}
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
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function yQ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function KG(_){return _==="error"?"Could not open branch window":"Opening branch…"}function SQ(_){return B`
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
  `}function wQ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Q,panePopoutHasMenuActions:Z,panePopoutTitle:Y,tabStripTabs:q,tabStripActiveId:K,handleTabActivate:N,previewTabs:G,handleTabTogglePreview:V,editorContainerRef:X,getPaneContent:U,panePopoutPath:L}=_;return B`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Q&&B`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Z?B`
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
          <${t8}
            getContent=${U}
            path=${K}
            onClose=${()=>V(K)}
          />
        `}
      </div>
    </div>
  `}function e8(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function NG(_,$){let j=e8(_),Q=e8($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function Y3(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function q3(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function GG(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function XG(_,$,j=0,Q=(Z)=>Z){let Z=e8($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=GG(Y.length,j),K=Y.map((N)=>e8(Q(N)));for(let N of q)if(K[N].startsWith(Z))return N;for(let N of q)if(K[N].includes(Z))return N;return-1}function K3(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(NG(Y,$))return j}return XG(Z,$,0,Q)}function _6(_){return String(_||"").trim().toLowerCase()}function N3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return _6($[1]||"")}function VG(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=_6(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function RQ(_,$,j={}){let Q=N3($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return VG(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return _6(Y?.agent_name).startsWith(Q)})}function G3(_){let $=_6(_);return $?`@${$} `:""}function uQ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function h_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let K=`${_}-file-pill`,N=`${_}-file-name`,G=`${_}-file-remove`,V=q==="message"?B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:B`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return B`
    <span class=${K} title=${j||$} onClick=${Z}>
      ${V}
      <span class=${N}>${$}</span>
      ${Q&&B`
        <button
          class=${G}
          onClick=${(X)=>{X.preventDefault(),X.stopPropagation(),Q()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var UG=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function LG({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",K=`${Q!=null?`Context: ${fQ(Q)} / ${fQ(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,N=9,G=2*Math.PI*9,V=j/100*G,X=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return B`
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
    `}function fQ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function BG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function WG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function zG(_){let $=BG(_||""),j=WG($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function X3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return B`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=zG(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return B`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&B`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&B`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>B`
                                        <${h_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let N=K.split("/").pop()||K;return B`
                                            <${h_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${N}
                                                title=${K}
                                                onClick=${()=>Q?.(K)}
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
                                onClick=${()=>$?.(Z)}
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
                                onClick=${()=>j?.(Z)}
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
    `}function vQ({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:K,fileRefs:N=[],onRemoveFileRef:G,onClearFileRefs:V,messageRefs:X=[],onRemoveMessageRef:U,onClearMessageRefs:L,activeModel:H=null,modelUsage:A=null,thinkingLevel:O=null,supportsThinking:W=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:f=!1,notificationPermission:u="default",onToggleNotifications:c,onModelChange:i,onModelStateChange:P,activeEditorPath:M=null,onAttachEditorFile:F,onOpenFilePill:T,followupQueueItems:b=[],onInjectQueuedFollowup:t,onRemoveQueuedFollowup:h,onSubmitIntercept:s,onMessageResponse:a,onPopOutChat:_0,isAgentActive:q0=!1,activeChatAgents:Z0=[],currentChatJid:K0="web:default",connectionStatus:B0="connected",onSetFileRefs:U0,onSetMessageRefs:u0,onSubmitError:k0,onSwitchChat:O0,onRenameSession:b0,isRenameSessionInProgress:f0=!1,onCreateSession:p0,onDeleteSession:l0,onRestoreSession:D0,showQueueStack:n0=!0,statusNotice:W0=null}){let[I0,d0]=g(""),[o0,w1]=g(""),[Y1,c0]=g([]),[U1,$1]=g(!1),[s0,V0]=g([]),[w0,_1]=g(0),[r,Y0]=g(!1),[m,d]=g([]),[z0,A0]=g(0),[M0,F0]=g(!1),[T0,v0]=g(!1),[L0,y0]=g(!1),[H0,j0]=g(!1),[y,o]=g([]),[X0,J0]=g(0),[g0,a0]=g(0),[K1,A1]=g(!1),[R1,S_]=g(0),[$_,v1]=g(null),[o1,c1]=g(()=>Date.now()),t0=I(null),s1=I(null),t_=I(null),j_=I(null),e_=I(null),p_=I(null),E1=I(null),a1=I(null),k1=I({value:"",updatedAt:0}),L1=I(0),B1=I(!1),L_=200,B_=(z)=>{let w=new Set,l=[];for(let p of z||[]){if(typeof p!=="string")continue;let x0=p.trim();if(!x0||w.has(x0))continue;w.add(x0),l.push(x0)}return l},x1=()=>{let z=F_("piclaw_compose_history");if(!z)return[];try{let w=JSON.parse(z);if(!Array.isArray(w))return[];return B_(w)}catch{return[]}},t1=(z)=>{Z1("piclaw_compose_history",JSON.stringify(z))},q1=I(x1()),T1=I(-1),Q_=I(""),g1=I0.trim()||Y1.length>0||N.length>0||X.length>0,_4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),O_=typeof window<"u"&&typeof Notification<"u",$4=typeof window<"u"?Boolean(window.isSecureContext):!1,z4=O_&&$4&&u!=="denied",A_=u==="granted"&&f,w_=y4(W0),u4=m8(W0),f4=typeof W0?.detail==="string"&&W0.detail.trim()?W0.detail.trim():"",j1=w_?h8(W0,o1):null,M1=A_?"Disable notifications":"Enable notifications",F4=Y1.length>0||N.length>0||X.length>0,Z_=B0==="disconnected"?"Reconnecting":String(B0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(z)=>z.toUpperCase()),E_=B0==="disconnected"?"Reconnecting":`Connection: ${Z_}`,l1=(Array.isArray(Z0)?Z0:[]).filter((z)=>!z?.archived_at),J1=(()=>{for(let z of Array.isArray(Z0)?Z0:[]){let w=typeof z?.chat_jid==="string"?z.chat_jid.trim():"";if(w&&w===K0)return z}return null})(),u1=Boolean(J1&&J1.chat_jid===(J1.root_chat_jid||J1.chat_jid)),N1=S0(()=>{let z=new Set,w=[];for(let l of Array.isArray(Z0)?Z0:[]){let p=typeof l?.chat_jid==="string"?l.chat_jid.trim():"";if(!p||p===K0||z.has(p))continue;if(!(typeof l?.agent_name==="string"?l.agent_name.trim():""))continue;z.add(p),w.push(l)}return w},[Z0,K0]),Y_=N1.length>0,q_=Y_&&typeof O0==="function",K_=Y_&&typeof D0==="function",c_=Boolean(f0||B1.current),b1=!j&&typeof b0==="function"&&!c_,f1=!j&&typeof p0==="function",N_=!j&&typeof l0==="function"&&!u1,R_=!j&&(q_||K_||b1||f1||N_),W1=H||"",k_=W&&O?` (${O})`:"",G1=k_.trim()?`${O}`:"",u_=typeof A?.hint_short==="string"?A.hint_short.trim():"",M_=[G1||null,u_||null].filter(Boolean).join(" • "),v4=[W1?`Current model: ${W1}${k_}`:null,A?.plan?`Plan: ${A.plan}`:null,u_||null,A?.primary?.reset_description||null,A?.secondary?.reset_description||null].filter(Boolean),g4=T0?"Switching model…":v4.join(" • ")||`Current model: ${W1}${k_} (tap to open model picker)`,f_=(z)=>{if(!z||typeof z!=="object")return;let w=z.model??z.current;if(typeof P==="function")P({model:w??null,thinking_level:z.thinking_level??null,supports_thinking:z.supports_thinking,provider_usage:z.provider_usage??null});if(w&&typeof i==="function")i(w)},v_=(z)=>{let w=z||t0.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},b4=(z)=>{if(!z.startsWith("/")||z.includes(`
`)){Y0(!1),V0([]);return}let w=z.toLowerCase().split(" ")[0];if(w.length<1){Y0(!1),V0([]);return}let l=UG.filter((p)=>p.name.startsWith(w)||p.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(l.length>0&&!(l.length===1&&l[0].name===w))F0(!1),d([]),V0(l),_1(0),Y0(!0);else Y0(!1),V0([])},j4=(z)=>{let w=I0,l=w.indexOf(" "),p=l>=0?w.slice(l):"",x0=z.name+p;d0(x0),Y0(!1),V0([]),requestAnimationFrame(()=>{let z1=t0.current;if(!z1)return;let C1=x0.length;z1.selectionStart=C1,z1.selectionEnd=C1,z1.focus()})},a4=(z)=>{if(N3(z)==null){F0(!1),d([]);return}let w=RQ(l1,z,{currentChatJid:K0});if(w.length>0&&!(w.length===1&&G3(w[0].agent_name).trim().toLowerCase()===String(z||"").trim().toLowerCase()))Y0(!1),V0([]),d(w),A0(0),F0(!0);else F0(!1),d([])},Q4=(z)=>{let w=G3(z?.agent_name);if(!w)return;d0(w),F0(!1),d([]),requestAnimationFrame(()=>{let l=t0.current;if(!l)return;let p=w.length;l.selectionStart=p,l.selectionEnd=p,l.focus()})},l_=()=>{if(j||!q_&&!K_&&!b1&&!f1&&!N_)return!1;return k1.current={value:"",updatedAt:0},y0(!1),Y0(!1),V0([]),F0(!1),d([]),j0(!0),!0},n1=(z)=>{if(z?.preventDefault?.(),z?.stopPropagation?.(),j||!q_&&!K_&&!b1&&!f1&&!N_)return;if(H0){k1.current={value:"",updatedAt:0},j0(!1);return}l_()},H4=(z)=>{let w=typeof z==="string"?z.trim():"";if(j0(!1),!w||w===K0){requestAnimationFrame(()=>t0.current?.focus());return}O0?.(w)},J4=async(z)=>{let w=typeof z==="string"?z.trim():"";if(j0(!1),!w||typeof D0!=="function"){requestAnimationFrame(()=>t0.current?.focus());return}try{await D0(w)}catch(l){console.warn("Failed to restore session:",l),requestAnimationFrame(()=>t0.current?.focus())}},T5=(z)=>{let l=(Array.isArray(z)?z:[]).findIndex((p)=>!p?.disabled);return l>=0?l:0},O1=S0(()=>{let z=[];for(let w of N1){let l=Boolean(w?.archived_at),p=typeof w?.agent_name==="string"?w.agent_name.trim():"",x0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!p||!x0)continue;z.push({type:"session",key:`session:${x0}`,label:`@${p} — ${x0}${w?.is_active?" active":""}${l?" archived":""}`,chat:w,disabled:l?!K_:!q_})}if(f1)z.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(b1)z.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:c_});if(N_)z.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return z},[N1,K_,q_,f1,b1,N_,c_]),O4=async(z)=>{if(z?.preventDefault)z.preventDefault();if(z?.stopPropagation)z.stopPropagation();if(typeof b0!=="function"||f0||B1.current)return;B1.current=!0,j0(!1);try{await b0()}catch(w){console.warn("Failed to rename session:",w)}finally{B1.current=!1}requestAnimationFrame(()=>t0.current?.focus())},t4=async()=>{if(typeof p0!=="function")return;j0(!1);try{await p0()}catch(z){console.warn("Failed to create session:",z)}requestAnimationFrame(()=>t0.current?.focus())},G_=async()=>{if(typeof l0!=="function")return;j0(!1);try{await l0(K0)}catch(z){console.warn("Failed to delete session:",z)}requestAnimationFrame(()=>t0.current?.focus())},X_=(z)=>{if(j)w1(z);else d0(z),b4(z),a4(z);requestAnimationFrame(()=>v_())},Z4=(z)=>{let w=j?o0:I0,l=w&&!w.endsWith(`
`)?`
`:"",p=`${w}${l}${z}`.trimStart();X_(p)},m4=(z)=>{let w=z?.command?.model_label;if(w)return w;let l=z?.command?.message;if(typeof l==="string"){let p=l.match(/•\s+([^\n]+?)\s+\(current\)/);if(p?.[1])return p[1].trim()}return null},h4=async(z)=>{if(j||T0)return;v0(!0);try{let w=await n4("default",z,null,[],null,K0),l=m4(w);f_({model:l??H??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let p=await f5(K0);if(p)f_(p)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{v0(!1)}},e4=async()=>{await h4("/cycle-model")},Y4=async(z)=>{if(!z||T0)return;if(await h4(`/model ${z}`))y0(!1)},I_=(z)=>{if(!z||z.disabled)return;if(z.type==="session"){let w=z.chat;if(w?.archived_at)J4(w.chat_jid);else H4(w.chat_jid);return}if(z.type==="action"){if(z.action==="new"){t4();return}if(z.action==="rename"){O4();return}if(z.action==="delete")G_()}},_5=(z)=>{z.preventDefault(),z.stopPropagation(),k1.current={value:"",updatedAt:0},j0(!1),y0((w)=>!w)},D4=async()=>{if(j)return;E?.(),await x_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},p4=(z)=>{if(z==="queue"||z==="steer"||z==="auto")return z;return q0?"queue":void 0},x_=async(z,w,l={})=>{let{includeMedia:p=!0,includeFileRefs:x0=!0,includeMessageRefs:z1=!0,clearAfterSubmit:C1=!0,recordHistory:y1=!0}=l||{},q4=typeof z==="string"?z:z&&typeof z?.target?.value==="string"?z.target.value:I0,c4=typeof q4==="string"?q4:"";if(!c4.trim()&&(p?Y1.length===0:!0)&&(x0?N.length===0:!0)&&(z1?X.length===0:!0))return;Y0(!1),V0([]),F0(!1),d([]),j0(!1),v1(null);let $5=p?[...Y1]:[],j5=x0?[...N]:[],K4=z1?[...X]:[],h1=c4.trim();if(y1&&h1){let A4=q1.current,F1=B_(A4.filter((n_)=>n_!==h1));if(F1.push(h1),F1.length>200)F1.splice(0,F1.length-200);q1.current=F1,t1(F1),T1.current=-1,Q_.current=""}let Q5=()=>{if(p)c0([...$5]);if(x0)U0?.(j5);if(z1)u0?.(K4);d0(h1),requestAnimationFrame(()=>v_())};if(C1)d0(""),c0([]),V?.(),L?.();(async()=>{try{if(await s?.({content:h1,submitMode:w,fileRefs:j5,messageRefs:K4,mediaFiles:$5})){_?.();return}let F1=[];for(let T_ of $5){let k4=await v6(T_);F1.push(k4.id)}let n_=j5.length?`Files:
${j5.map((T_)=>`- ${T_}`).join(`
`)}`:"",Z5=K4.length?`Referenced messages:
${K4.map((T_)=>`- message:${T_}`).join(`
`)}`:"",Y8=F1.length?`Attachments:
${F1.map((T_,k4)=>{let G6=$5[k4]?.name||`attachment-${k4+1}`;return`- attachment:${T_} (${G6})`}).join(`
`)}`:"",Y5=[h1,n_,Z5,Y8].filter(Boolean).join(`

`),E4=await n4("default",Y5,null,F1,p4(w),K0);if(a?.(E4),E4?.command){f_({model:E4.command.model_label??H??null,thinking_level:E4.command.thinking_level,supports_thinking:E4.command.supports_thinking});try{let T_=await f5(K0);if(T_)f_(T_)}catch{}}_?.()}catch(A4){if(C1)Q5();let F1=A4?.message||"Failed to send message.";v1(F1),k0?.(F1),console.error("Failed to post:",A4)}})()},J=(z)=>{t?.(z)},k=C((z)=>{if(j||!L0&&!H0||z?.isComposing)return!1;let w=()=>{z.preventDefault?.(),z.stopPropagation?.()},l=()=>{k1.current={value:"",updatedAt:0}};if(z.key==="Escape"){if(w(),l(),L0)y0(!1);if(H0)j0(!1);return!0}if(L0){if(z.key==="ArrowDown"){if(w(),l(),y.length>0)J0((p)=>(p+1)%y.length);return!0}if(z.key==="ArrowUp"){if(w(),l(),y.length>0)J0((p)=>(p-1+y.length)%y.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&y.length>0)return w(),l(),Y4(y[Math.max(0,Math.min(X0,y.length-1))]),!0;if(Y3(z)&&y.length>0){w();let p=q3(k1.current,z.key);k1.current=p;let x0=K3(y,p.value,X0,(z1)=>z1);if(x0>=0)J0(x0);return!0}}if(H0){if(z.key==="ArrowDown"){if(w(),l(),O1.length>0)a0((p)=>(p+1)%O1.length);return!0}if(z.key==="ArrowUp"){if(w(),l(),O1.length>0)a0((p)=>(p-1+O1.length)%O1.length);return!0}if((z.key==="Enter"||z.key==="Tab")&&O1.length>0)return w(),l(),I_(O1[Math.max(0,Math.min(g0,O1.length-1))]),!0;if(Y3(z)&&O1.length>0){w();let p=q3(k1.current,z.key);k1.current=p;let x0=K3(O1,p.value,g0,(z1)=>z1.label);if(x0>=0)a0(x0);return!0}}return!1},[j,L0,H0,y,X0,O1,g0,Y4]),R=(z)=>{if(z.isComposing)return;if(j&&z.key==="Escape"){z.preventDefault(),w1(""),K?.();return}if(k(z))return;let w=t0.current?.value??(j?o0:I0);if(uQ(z,w,{searchMode:j,showSessionSwitcherButton:R_})){z.preventDefault(),l_();return}if(M0&&m.length>0){let l=t0.current?.value??(j?o0:I0);if(!String(l||"").match(/^@([a-zA-Z0-9_-]*)$/))F0(!1),d([]);else{if(z.key==="ArrowDown"){z.preventDefault(),A0((p)=>(p+1)%m.length);return}if(z.key==="ArrowUp"){z.preventDefault(),A0((p)=>(p-1+m.length)%m.length);return}if(z.key==="Tab"||z.key==="Enter"){z.preventDefault(),Q4(m[z0]);return}if(z.key==="Escape"){z.preventDefault(),F0(!1),d([]);return}}}if(r&&s0.length>0){let l=t0.current?.value??(j?o0:I0);if(!String(l||"").startsWith("/"))Y0(!1),V0([]);else{if(z.key==="ArrowDown"){z.preventDefault(),_1((p)=>(p+1)%s0.length);return}if(z.key==="ArrowUp"){z.preventDefault(),_1((p)=>(p-1+s0.length)%s0.length);return}if(z.key==="Tab"){z.preventDefault(),j4(s0[w0]);return}if(z.key==="Enter"&&!z.shiftKey){if(!w.includes(" ")){z.preventDefault();let x0=s0[w0];Y0(!1),V0([]),x_(x0.name);return}}if(z.key==="Escape"){z.preventDefault(),Y0(!1),V0([]);return}}}if(!j&&(z.key==="ArrowUp"||z.key==="ArrowDown")&&!z.metaKey&&!z.ctrlKey&&!z.altKey&&!z.shiftKey){let l=t0.current;if(!l)return;let p=l.value||"",x0=l.selectionStart===0&&l.selectionEnd===0,z1=l.selectionStart===p.length&&l.selectionEnd===p.length;if(z.key==="ArrowUp"&&x0||z.key==="ArrowDown"&&z1){let C1=q1.current;if(!C1.length)return;z.preventDefault();let y1=T1.current;if(z.key==="ArrowUp"){if(y1===-1)Q_.current=p,y1=C1.length-1;else if(y1>0)y1-=1;T1.current=y1,X_(C1[y1]||"")}else{if(y1===-1)return;if(y1<C1.length-1)y1+=1,T1.current=y1,X_(C1[y1]||"");else T1.current=-1,X_(Q_.current||""),Q_.current=""}requestAnimationFrame(()=>{let q4=t0.current;if(!q4)return;let c4=q4.value.length;q4.selectionStart=c4,q4.selectionEnd=c4});return}}if(z.key==="Enter"&&!z.shiftKey&&(z.ctrlKey||z.metaKey)){if(z.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else x_(w,"steer");return}if(z.key==="Enter"&&!z.shiftKey)if(z.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else x_(w)},S=(z)=>{let w=Array.from(z||[]).filter((l)=>l instanceof File&&!String(l.name||"").startsWith(".DS_Store"));if(!w.length)return;c0((l)=>[...l,...w]),v1(null)},n=(z)=>{S(z.target.files),z.target.value=""},Q0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),L1.current+=1,$1(!0)},N0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),L1.current=Math.max(0,L1.current-1),L1.current===0)$1(!1)},G0=(z)=>{if(j)return;if(z.preventDefault(),z.stopPropagation(),z.dataTransfer)z.dataTransfer.dropEffect="copy";$1(!0)},$0=(z)=>{if(j)return;z.preventDefault(),z.stopPropagation(),L1.current=0,$1(!1),S(z.dataTransfer?.files||[])},C0=(z)=>{if(j)return;let w=z.clipboardData?.items;if(!w||!w.length)return;let l=[];for(let p of w){if(p.kind!=="file")continue;let x0=p.getAsFile?.();if(x0)l.push(x0)}if(l.length>0)z.preventDefault(),S(l)},P1=(z)=>{c0((w)=>w.filter((l,p)=>p!==z))},e1=()=>{v1(null),c0([]),V?.(),L?.()},m1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((z)=>{let{latitude:w,longitude:l,accuracy:p}=z.coords,x0=`${w.toFixed(5)}, ${l.toFixed(5)}`,z1=Number.isFinite(p)?` ±${Math.round(p)}m`:"",C1=`https://maps.google.com/?q=${w},${l}`,y1=`Location: ${x0}${z1} ${C1}`;Z4(y1)},(z)=>{let w=z?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};v(()=>{if(!L0)return;k1.current={value:"",updatedAt:0},A1(!0),f5(K0).then((z)=>{let w=Array.isArray(z?.models)?z.models.filter((l)=>typeof l==="string"&&l.trim().length>0):[];w.sort((l,p)=>l.localeCompare(p,void 0,{sensitivity:"base"})),o(w),f_(z)}).catch((z)=>{console.warn("Failed to load model list:",z),o([])}).finally(()=>{A1(!1)})},[L0,H]),v(()=>{if(j)y0(!1),j0(!1),Y0(!1),V0([]),F0(!1),d([])},[j]),v(()=>{if(H0&&!R_)j0(!1)},[H0,R_]),v(()=>{if(!L0)return;let z=y.findIndex((w)=>w===H);J0(z>=0?z:0)},[L0,y,H]),v(()=>{if(!H0)return;a0(T5(O1)),k1.current={value:"",updatedAt:0}},[H0,K0]),v(()=>{if(!L0)return;let z=(w)=>{let l=j_.current,p=e_.current,x0=w.target;if(l&&l.contains(x0))return;if(p&&p.contains(x0))return;y0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[L0]),v(()=>{if(!H0)return;let z=(w)=>{let l=p_.current,p=E1.current,x0=w.target;if(l&&l.contains(x0))return;if(p&&p.contains(x0))return;j0(!1)};return document.addEventListener("pointerdown",z),()=>document.removeEventListener("pointerdown",z)},[H0]),v(()=>{if(j||!L0&&!H0)return;let z=(w)=>{k(w)};return document.addEventListener("keydown",z,!0),()=>document.removeEventListener("keydown",z,!0)},[j,L0,H0,k]),v(()=>{if(!L0)return;let z=j_.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[L0,X0,y]),v(()=>{if(!H0)return;let z=p_.current;z?.focus?.(),z?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[H0,g0,O1.length]),v(()=>{let z=()=>{let z1=a1.current?.clientWidth||0;S_((C1)=>C1===z1?C1:z1)};z();let w=a1.current,l=0,p=()=>{if(l)cancelAnimationFrame(l);l=requestAnimationFrame(()=>{l=0,z()})},x0=null;if(w&&typeof ResizeObserver<"u")x0=new ResizeObserver(()=>p()),x0.observe(w);if(typeof window<"u")window.addEventListener("resize",p);return()=>{if(l)cancelAnimationFrame(l);if(x0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",p)}},[j,H,J1?.agent_name,R_,D?.percent]);let C5=(z)=>{let w=z.target.value;if(v1(null),H0)j0(!1);v_(z.target),X_(w)};return v(()=>{requestAnimationFrame(()=>v_())},[I0,o0,j]),v(()=>{if(!w_)return;c1(Date.now());let z=setInterval(()=>c1(Date.now()),1000);return()=>clearInterval(z)},[w_,W0?.started_at,W0?.startedAt]),v(()=>{if(j)return;a4(I0)},[l1,K0,I0,j]),B`
        <div class="compose-box">
            ${n0&&!j&&B`
                <${X3}
                    items=${b}
                    onInjectQueuedFollowup=${J}
                    onRemoveQueuedFollowup=${h}
                    onOpenFilePill=${T}
                />
            `}
            ${W0&&B`
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
            ${$_&&B`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${$_}</div>
            `}
            <div
                class=${`compose-input-wrapper${U1?" drag-active":""}`}
                onDragEnter=${Q0}
                onDragOver=${G0}
                onDragLeave=${N0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${F4&&B`
                        <div class="compose-file-refs">
                            ${X.map((z)=>{return B`
                                    <${h_}
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
                                    <${h_}
                                        prefix="compose"
                                        label=${w}
                                        title=${z}
                                        onClick=${()=>T?.(z)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(z)}
                                    />
                                `})}
                            ${Y1.map((z,w)=>{let l=z?.name||`attachment-${w+1}`;return B`
                                    <${h_}
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
                                onClick=${e1}
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
                        onInput=${C5}
                        onKeyDown=${R}
                        onPaste=${C0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${M0&&m.length>0&&B`
                        <div class="slash-autocomplete" ref=${t_}>
                            ${m.map((z,w)=>B`
                                <div
                                    key=${z.chat_jid||z.agent_name}
                                    class=${`slash-item${w===z0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),Q4(z)}}
                                    onMouseEnter=${()=>A0(w)}
                                >
                                    <span class="slash-name">@${z.agent_name}</span>
                                    <span class="slash-desc">${z.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${r&&s0.length>0&&B`
                        <div class="slash-autocomplete" ref=${s1}>
                            ${s0.map((z,w)=>B`
                                <div
                                    key=${z.name}
                                    class=${`slash-item${w===w0?" active":""}`}
                                    onMouseDown=${(l)=>{l.preventDefault(),j4(z)}}
                                    onMouseEnter=${()=>_1(w)}
                                >
                                    <span class="slash-name">${z.name}</span>
                                    <span class="slash-desc">${z.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${L0&&!j&&B`
                        <div class="compose-model-popup" ref=${j_} tabIndex="-1" onKeyDown=${k}>
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
                                        onClick=${()=>{Y4(z)}}
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
                        <div class="compose-model-popup" ref=${p_} tabIndex="-1" onKeyDown=${k}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${B`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return qj(J1,K0)})()}
                                    </div>
                                `}
                                ${!Y_&&B`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${Y_&&N1.map((z,w)=>{let l=Boolean(z.archived_at),x0=z.chat_jid!==(z.root_chat_jid||z.chat_jid)&&!z.is_active&&!l&&typeof l0==="function",z1=l8(z,{currentChatJid:K0});return B`
                                        <div key=${z.chat_jid} class=${`compose-model-popup-item-row${l?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${l?" archived":""}${g0===w?" active":""}`}
                                                onClick=${()=>{if(l){J4(z.chat_jid);return}H4(z.chat_jid)}}
                                                disabled=${l?!K_:!q_}
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
                                                    onClick=${(C1)=>{C1.stopPropagation(),j0(!1),l0(z.chat_jid)}}
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
                            ${(f1||b1||N_)&&B`
                                <div class="compose-model-popup-actions">
                                    ${f1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${O1.findIndex((z)=>z.key==="action:new")===g0?" active":""}`}
                                            onClick=${()=>{t4()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${b1&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${O1.findIndex((z)=>z.key==="action:rename")===g0?" active":""}`}
                                            onClick=${(z)=>{O4(z)}}
                                            title="Rename the current branch handle"
                                            disabled=${c_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${N_&&B`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${O1.findIndex((z)=>z.key==="action:delete")===g0?" active":""}`}
                                            onClick=${()=>{G_()}}
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
                <div class="compose-footer" ref=${a1}>
                    ${!j&&H&&B`
                    <div class="compose-meta-row">
                        ${!j&&H&&B`
                            <div class="compose-model-meta">
                                <button
                                    ref=${e_}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${g4}
                                    aria-label="Open model picker"
                                    onClick=${_5}
                                    disabled=${T0}
                                >
                                    ${T0?"Switching…":W1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!T0&&M_&&B`
                                        <span class="compose-model-usage-hint" title=${g4}>
                                            ${M_}
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
                                onClick=${n1}
                            >@${J1.agent_name}</button>
                        `}
                        <button
                            ref=${E1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${H0?" active":""}`}
                            onClick=${n1}
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
                                value=${Q}
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
                    ${_4&&!j&&B`
                        <button
                            class="icon-btn location-btn"
                            onClick=${m1}
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
                            class=${`icon-btn notification-btn${A_?" active":""}`}
                            onClick=${c}
                            title=${M1}
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
                    ${(B0!=="connected"||!j)&&B`
                        <div class="compose-send-stack">
                            ${B0!=="connected"&&B`
                                <span class="compose-connection-status connection-status ${B0}" title=${E_}>
                                    ${Z_}
                                </span>
                            `}
                            ${!j&&B`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{x_()}}
                                    disabled=${!g1}
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
    `}function gQ({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=I(null),Y=I(null),q=_?.thinking?a5(_.thinking):"",K=_?.answer?H_(_.answer,null,{sanitize:!1}):"";if(v(()=>{if(Z.current&&q)W4(Z.current).catch(()=>{})},[q]),v(()=>{if(Y.current&&K)W4(Y.current).catch(()=>{})},[K]),!_)return null;let N=_.status==="running",G=Boolean(String(_.answer||"").trim()),V=Boolean(String(_.thinking||"").trim()),X=D9(_),U=A9(_),L=!N&&G,H=N?"Thinking…":_.status==="error"?"Error":"Done";return B`
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
                        ref=${Z}
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
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Q?.()}>
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
    `}function bQ({widget:_,onClose:$,onWidgetEvent:j}){let Q=I(null),Z=I(!1),Y=S0(()=>NQ(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(v(()=>{if(!_)return;let W=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[_,$]),v(()=>{Z.current=!1},[Y]),v(()=>{if(!_)return;let W=Q.current;if(!W)return;let D=(i)=>{let P=s8(_),M=i==="widget.init"?r8(_):o8(_);try{W.name=P}catch{}try{W.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:i,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:M},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},f=()=>{Z.current=!0,E()};W.addEventListener("load",f);let c=[0,40,120,300,800].map((i)=>setTimeout(E,i));return()=>{W.removeEventListener("load",f),c.forEach((i)=>clearTimeout(i))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),v(()=>{if(!_)return;let W=Q.current;if(!W?.contentWindow)return;let D=s8(_),E=o8(_);try{W.name=D}catch{}try{W.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),v(()=>{if(!_)return;let W=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let f=Q.current,u=J_(_),c=J_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(c&&u&&c!==u)return;if(!c&&f?.contentWindow&&D.source!==f.contentWindow)return;j?.(E,_)};return window.addEventListener("message",W),()=>window.removeEventListener("message",W)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",V=_?.source==="live"?"live":"timeline",X=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=V==="live"?`Live widget • ${X.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",L=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",H=!Y,A=KQ(_),O=ZQ(_);return B`
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
                                ref=${Q}
                                class="floating-widget-frame"
                                title=${N}
                                name=${s8(_)}
                                sandbox=${O}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var mQ="PiClaw";function V3(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,K=Y[q],N=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",V=G?G:null,X=j||N==="PiClaw".toLowerCase()||N==="pi";return{letter:Z,color:K,image:V||(X?"/static/icon-192.png":null)}}function hQ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function pQ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function cQ(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(K||q&&q!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var FG=B`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function U3({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:N,turnId:G,steerQueued:V,onPanelToggle:X,showCorePanels:U=!0,showExtensionPanels:L=!0}){let O=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let z0=r,A0=z0?z0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:z0,totalLines:A0,fullText:z0}}let Y0=r.text||"",m=r.fullText||r.full_text||Y0,d=Number.isFinite(r.totalLines)?r.totalLines:m?m.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Y0,totalLines:d,fullText:m}},W=160,D=(r)=>String(r||"").replace(/<\/?internal>/gi,""),E=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},f=(r,Y0,m)=>{let d=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!d)return{text:"",omitted:0,totalLines:Number.isFinite(m)?m:0,visibleLines:0};let z0=d.split(`
`),A0=z0.length>Y0?z0.slice(0,Y0).join(`
`):d,M0=Number.isFinite(m)?m:z0.reduce((v0,L0)=>v0+E(L0),0),F0=A0?A0.split(`
`).reduce((v0,L0)=>v0+E(L0),0):0,T0=Math.max(M0-F0,0);return{text:A0,omitted:T0,totalLines:M0,visibleLines:F0}},u=O(j),c=O(Q),i=O($),P=Boolean(u.text)||u.totalLines>0,M=Boolean(c.text)||c.totalLines>0,F=Boolean(i.fullText?.trim()||i.text?.trim()),T=Boolean(_||F||P||M||Z||Y),b=Array.isArray(q)&&q.length>0;if((!U||!T)&&(!L||!b))return null;let[t,h]=g(new Set),[s,a]=g(null),[_0,q0]=g(()=>Date.now()),Z0=(r)=>h((Y0)=>{let m=new Set(Y0),d=!m.has(r);if(d)m.add(r);else m.delete(r);if(typeof X==="function")X(r,d);return m});v(()=>{h(new Set),a(null)},[G]);let K0=y4(_);v(()=>{if(!K0)return;q0(Date.now());let r=setInterval(()=>q0(Date.now()),1000);return()=>clearInterval(r)},[K0,_?.started_at,_?.startedAt]);let B0=_?.turn_id||G,U0=cQ(B0),u0=V?"turn-dot turn-dot-queued":"turn-dot",k0=(r)=>r,O0=Boolean(_?.last_activity||_?.lastActivity),b0=(r)=>r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":U0,f0=Y?.kind||"info",p0=b0(f0),l0=b0(_?.kind||(K0?"warning":"info")),D0="",n0=_?.title,W0=_?.status;if(_?.type==="plan")D0=n0?`Planning: ${n0}`:"Planning...";else if(_?.type==="tool_call")D0=n0?`Running: ${n0}`:"Running tool...";else if(_?.type==="tool_status")D0=n0?`${n0}: ${W0||"Working..."}`:W0||"Working...";else if(_?.type==="error")D0=n0||"Agent error";else D0=n0||W0||"Working...";if(O0)D0="Last activity just now";let I0=({panelTitle:r,text:Y0,fullText:m,totalLines:d,maxLines:z0,titleClass:A0,panelKey:M0})=>{let F0=t.has(M0),T0=m||Y0||"",v0=M0==="thought"||M0==="draft"?D(T0):T0,L0=typeof z0==="number",y0=F0&&L0,H0=L0?f(v0,z0,d):{text:v0||"",omitted:0,totalLines:Number.isFinite(d)?d:0};if(!v0&&!(Number.isFinite(H0.totalLines)&&H0.totalLines>0))return null;let j0=`agent-thinking-body${L0?" agent-thinking-body-collapsible":""}`,y=L0?`--agent-thinking-collapsed-lines: ${z0};`:"";return B`
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
                            onClick=${()=>Z0(M0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:a5(v0)}}
                />
                ${!F0&&H0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(M0)}>
                        ▸ ${H0.omitted} more lines
                    </button>
                `}
                ${F0&&H0.omitted>0&&B`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(M0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},d0=Z?.tool_call?.title,o0=d0?`Awaiting approval: ${d0}`:"Awaiting approval",w1=K0?h8(_,_0):null,Y1=(r,Y0,m=null)=>{let d=m8(r);return B`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Y0?`--turn-color: ${Y0};`:""}
                title=${r?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Y0&&B`<span class=${u0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${d}</span>
                    ${m&&B`<span class="agent-status-elapsed">${m}</span>`}
                </div>
                ${r.detail&&B`<div class="agent-thinking-body">${r.detail}</div>`}
            </div>
        `},c0=(r,Y0,m,d,z0,A0,M0,F0=8,T0=8)=>{let v0=Math.max(z0-d,0.000000001),L0=Math.max(Y0-F0*2,1),y0=Math.max(m-T0*2,1),H0=Math.max(M0-A0,1),j0=M0===A0?Y0/2:F0+(r.run-A0)/H0*L0,y=T0+(y0-(r.value-d)/v0*y0);return{x:j0,y}},U1=(r,Y0,m,d,z0,A0,M0,F0=8,T0=8)=>{if(!Array.isArray(r)||r.length===0)return"";return r.map((v0,L0)=>{let{x:y0,y:H0}=c0(v0,Y0,m,d,z0,A0,M0,F0,T0);return`${L0===0?"M":"L"} ${y0.toFixed(2)} ${H0.toFixed(2)}`}).join(" ")},$1=(r,Y0="")=>{if(!Number.isFinite(r))return"—";return`${Math.abs(r)>=100?r.toFixed(0):r.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Y0}`},s0=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],V0=(r,Y0)=>{let m=s0;if(!Array.isArray(m)||m.length===0)return"var(--accent-color)";if(m.length===1||!Number.isFinite(Y0)||Y0<=1)return m[0];let z0=Math.max(0,Math.min(Number.isFinite(r)?r:0,Y0-1))/Math.max(1,Y0-1)*(m.length-1),A0=Math.floor(z0),M0=Math.min(m.length-1,A0+1),F0=z0-A0,T0=m[A0],v0=m[M0];if(!v0||A0===M0||F0<=0.001)return T0;if(F0>=0.999)return v0;let L0=Math.round((1-F0)*1000)/10,y0=Math.round(F0*1000)/10;return`color-mix(in oklab, ${T0} ${L0}%, ${v0} ${y0}%)`},w0=(r,Y0="autoresearch")=>{let m=Array.isArray(r)?r.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],d=m.map((j0,y)=>({...j0,color:V0(y,m.length)}));if(d.length===0)return null;let z0=320,A0=120,M0=d.flatMap((j0)=>j0.points),F0=M0.map((j0)=>j0.value),T0=M0.map((j0)=>j0.run),v0=Math.min(...F0),L0=Math.max(...F0),y0=Math.min(...T0),H0=Math.max(...T0);return B`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${d.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${z0} ${A0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${d.map((j0)=>{let y=j0?.key||j0?.label||"series",o=s?.panelKey===Y0&&s?.seriesKey===y;return B`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${o?" is-hovered":""}`}
                                        d=${U1(j0.points,z0,A0,v0,L0,y0,H0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>a({panelKey:Y0,seriesKey:y})}
                                        onMouseLeave=${()=>a((X0)=>X0?.panelKey===Y0&&X0?.seriesKey===y?null:X0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${d.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",o=j0?.key||j0?.label||"series";return j0.points.map((X0,J0)=>{let g0=c0(X0,z0,A0,v0,L0,y0,H0);return B`
                                    <button
                                        key=${`${o}-point-${J0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${g0.x/z0*100}%; top:${g0.y/A0*100}%;`}
                                        onMouseEnter=${()=>a({panelKey:Y0,seriesKey:o,run:X0.run,value:X0.value,unit:y})}
                                        onMouseLeave=${()=>a((a0)=>a0?.panelKey===Y0?null:a0)}
                                        onFocus=${()=>a({panelKey:Y0,seriesKey:o,run:X0.run,value:X0.value,unit:y})}
                                        onBlur=${()=>a((a0)=>a0?.panelKey===Y0?null:a0)}
                                        aria-label=${`${j0?.label||"Series"} ${$1(X0.value,y)} at run ${X0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${d.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,o=typeof j0?.unit==="string"?j0.unit:"",X0=j0?.key||j0?.label||"series",J0=s?.panelKey===Y0&&s?.seriesKey===X0?s:null,g0=J0&&Number.isFinite(J0.value)?J0.value:y,a0=J0&&typeof J0.unit==="string"?J0.unit:o,K1=J0&&Number.isFinite(J0.run)?J0.run:null;return B`
                            <div key=${`${X0}-legend`} class=${`agent-series-legend-item${J0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${K1!==null&&B`<span class="agent-series-legend-run">run ${K1}</span>`}
                                <span class="agent-series-legend-value">${$1(g0,a0)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},_1=(r)=>{if(!r)return null;let Y0=typeof r?.key==="string"?r.key:`panel-${Math.random()}`,m=t.has(Y0),d=r?.title||"Extension status",z0=r?.collapsed_text||"",A0=String(r?.state||"").replace(/[-_]+/g," ").replace(/^./,(o)=>o.toUpperCase()),M0=b0(r?.state==="completed"?"success":r?.state==="failed"?"error":r?.state==="stopped"?"warning":"info"),F0=typeof r?.detail_markdown==="string"?r.detail_markdown.trim():"",T0=typeof r?.last_run_text==="string"?r.last_run_text.trim():"",v0=typeof r?.tmux_command==="string"?r.tmux_command.trim():"",L0=Array.isArray(r?.series)?r.series:[],y0=Array.isArray(r?.actions)?r.actions:[],H0=Boolean(F0||v0),j0=Boolean(F0||L0.length>0||v0),y=[d,z0].filter(Boolean).join(" — ");return B`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${m?"true":"false"}
                style=${M0?`--turn-color: ${M0};`:""}
                title=${!m?y||d:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?Z0(Y0):null}
                    >
                        ${M0&&B`<span class=${u0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${d}</span>
                        ${z0&&B`<span class="agent-thinking-title-meta">${z0}</span>`}
                    </button>
                    ${(y0.length>0||j0&&!m)&&B`
                        <div class="agent-thinking-tools-inline">
                            ${y0.length>0&&B`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${y0.map((o)=>{let X0=`${Y0}:${o?.key||""}`,J0=K?.has?.(X0);return B`
                                            <button
                                                key=${X0}
                                                class=${`agent-thinking-action-btn${o?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>N?.(r,o)}
                                                disabled=${Boolean(J0)}
                                            >
                                                ${J0?"Working…":o?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!m&&B`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${d}`}
                                    title="Expand details"
                                    onClick=${()=>Z0(Y0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&m&&B`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${d}`}
                        title="Collapse details"
                        onClick=${()=>Z0(Y0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${m&&B`
                    <div class=${`agent-thinking-autoresearch-layout${H0?"":" chart-only"}`}>
                        ${H0&&B`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${F0&&B`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:a5(F0)}}
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
            ${U&&Y&&Y1(Y,p0)}
            ${L&&Array.isArray(q)&&q.map((r)=>_1(r))}
            ${U&&_?.type==="intent"&&Y1(_,l0,w1)}
            ${U&&Z&&B`
                <div class="agent-status agent-status-request" aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    <span class=${u0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${o0}</span>
                </div>
            `}
            ${U&&P&&I0({panelTitle:k0("Planning"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,panelKey:"plan"})}
            ${U&&M&&I0({panelTitle:k0("Thoughts"),text:c.text,fullText:c.fullText,totalLines:c.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&F&&I0({panelTitle:k0("Draft"),text:i.text,fullText:i.fullText,totalLines:i.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&B`
                <div class=${`agent-status${O0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${U0?`--turn-color: ${U0};`:""}>
                    ${U0&&B`<span class=${u0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?B`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!O0&&B`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${D0}</span>
                </div>
            `}
        </div>
    `}function lQ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",K=Q?.kind||"other",N=Q?.rawInput||{},G=N.command||N.commands&&N.commands[0]||null,V=N.diff||null,X=N.fileName||N.path||null,U=Q?.description||N.description||N.explanation||null,H=(Array.isArray(Q?.locations)?Q.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),A=Array.from(new Set([X,...H].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let O=async(E)=>{try{await D8(j,E,Y||null),$()}catch(f){console.error("Failed to respond to agent request:",f)}},W=async()=>{try{await b6(q,`Auto-approved: ${q}`),await D8(j,"approved",Y||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Z&&Z.length>0;return B`
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
                    ${D?Z.map((E)=>B`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>O(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):B`
                        <button class="agent-request-btn primary" onClick=${()=>O("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>O("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${W}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var HG=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),JG=new Set(["text/markdown"]),OG=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),DG=new Set(["application/vnd.jgraph.mxfile"]);function j8(_){return typeof _==="string"?_.trim().toLowerCase():""}function AG(_){let $=j8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function EG(_){let $=j8(_);return!!$&&$.endsWith(".pdf")}function kG(_){let $=j8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function Q8(_,$){let j=j8(_);if(AG($)||DG.has(j))return"drawio";if(EG($)||j==="application/pdf")return"pdf";if(kG($)||OG.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(HG.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function nQ(_){let $=j8(_);return JG.has($)}function dQ(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function MG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function IG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function iQ(_){return MG(_)||IG(_)}function $6(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function xG(_,$){let j=Math.max($6(_),$6($)),Q=Math.min($6(_),$6($));return(j+0.05)/(Q+0.05)}function TG(_,$,j="#ffffff"){let Q=iQ(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let K=iQ(q);if(!K)continue;let N=xG(Q,K);if(N>Y)Z=q,Y=N}return Z}function L3(){let _=getComputedStyle(document.documentElement),$=(H,A)=>{for(let O of H){let W=_.getPropertyValue(O).trim();if(W)return W}return A},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),N=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),V=$(["--danger-color","--color-error"],"#f4212e"),X=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),L=TG(K,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:K,good:N,warning:G,attention:V,border:X,fontFamily:U,buttonTextColor:L}}function rQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:K,border:N,fontFamily:G}=L3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:N},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var CG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),oQ=!1,j6=null,sQ=!1;function B3(_){_.querySelector(".adaptive-card-notice")?.remove()}function PG(_,$,j="error"){B3(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function yG(_,$=(j)=>H_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function SG(_=($)=>H_($,null)){return($,j)=>{try{let Q=yG($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function wG(_){if(sQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=SG(),sQ=!0}async function RG(){if(oQ)return;if(j6)return j6;return j6=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{oQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),j6}function uG(){return globalThis.AdaptiveCards}function fG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function vG(_){return CG.has(_)}function z3(_){if(!Array.isArray(_))return[];return _.filter(fG)}function gG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function W3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>W3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${W3(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function bG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return W3($);return typeof $==="string"?$:String($)}function mG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((K)=>Q(K));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=bG(q.type,j[q.id],q);for(let[K,N]of Object.entries(q))if(Array.isArray(N)||N&&typeof N==="object")q[K]=Q(N);return q};return Q(_)}function hG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function pG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function cG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=pG(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function aQ(_,$,j){if(!vG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await RG()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=uG();wG(Q);let Z=new Q.AdaptiveCard,Y=L3();Z.hostConfig=new Q.HostConfig(rQ());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:mG($.payload,q);Z.parse(K),Z.onExecuteAction=(V)=>{let X=gG(V);if(j?.onAction)B3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(X)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let L=U instanceof Error?U.message:String(U||"Action failed.");PG(_,L||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",X)};let N=Z.render();if(!N)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=cG($);if(G){_.classList.add("adaptive-card-finished");let V=document.createElement("div");V.className=`adaptive-card-status adaptive-card-status-${$.state}`;let X=document.createElement("span");if(X.className="adaptive-card-status-label",X.textContent=G.label,V.appendChild(X),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,V.appendChild(U)}_.appendChild(V)}if(B3(_),_.appendChild(N),G)hG(N);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function Z8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Z8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Z8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function tQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Z8(j)})).filter(($)=>$.value)}function lG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function F3(_){if(!Array.isArray(_))return[];return _.filter(lG)}function eQ(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=Z8(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=tQ(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function _Z(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=tQ(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):Z8(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function M5({children:_,className:$=""}){let j=I(null);return v(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{x4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),R5(()=>{let Q=j.current;if(!Q)return;return x4(_,Q),()=>{x4(null,Q)}},[_]),null}function nG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?y_($):null},{label:"Added",value:_?.created_at?o4(_.created_at):null}].filter((Q)=>Q.value)}function dG(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=P_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function $Z({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=S0(()=>Q8($?.content_type,Q),[$?.content_type,Q]),Y=dQ(Z),q=S0(()=>nQ($?.content_type),[$?.content_type]),[K,N]=g(Z==="text"),[G,V]=g(""),[X,U]=g(null),L=I(null),H=S0(()=>nG($),[$]),A=S0(()=>dG(_,Q,Z),[_,Q,Z]),O=S0(()=>{if(!q||!G)return"";return H_(G)},[q,G]);return v(()=>{let W=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[j]),v(()=>{if(!L.current||!O)return;W4(L.current);return},[O]),v(()=>{let W=!1;async function D(){if(Z!=="text"){N(!1),U(null);return}N(!0),U(null);try{let E=await c6(_);if(!W)V(E)}catch{if(!W)U("Failed to load text preview.")}finally{if(!W)N(!1)}}return D(),()=>{W=!0}},[_,Z]),B`
        <${M5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(W)=>{W.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Q}</div>
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
                                href=${P_(_)}
                                download=${Q}
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
                        ${!K&&!X&&Z==="image"&&B`
                            <img class="attachment-preview-image" src=${P_(_)} alt=${Q} />
                        `}
                        ${!K&&!X&&(Z==="pdf"||Z==="office"||Z==="drawio")&&A&&B`
                            <iframe class="attachment-preview-frame" src=${A} title=${Q}></iframe>
                        `}
                        ${!K&&!X&&Z==="drawio"&&B`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!X&&Z==="text"&&q&&B`
                            <div
                                ref=${L}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:O}}
                            />
                        `}
                        ${!K&&!X&&Z==="text"&&!q&&B`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!K&&!X&&Z==="unsupported"&&B`
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
        </${M5}>
    `}function jZ({src:_,onClose:$}){return v(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),B`
        <${M5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${M5}>
    `}function iG({mediaId:_,onPreview:$}){let[j,Q]=g(null);if(v(()=>{U5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?y_(Y):"",N=Q8(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return B`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${P_(_)} download=${Z} class="file-attachment-main">
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
    `}function rG({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=g(null);v(()=>{if(!Number.isFinite(j))return;U5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?P_(j):null,N=Q8(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return B`
        <span class="attachment-pill" title=${Y}>
            ${q?B`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${h_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:B`
                    <${h_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&B`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Q6({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?o4(Q):null;return B`
        <div class="content-annotations">
            ${$&&$.length>0&&B`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&B`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&B`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function oG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?y_(_.size):"",Z=_.mime_type||"",Y=tG(Z),q=r4(_.uri);return B`
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
                    ${Z&&B`<span>${Z}</span>`}
                    ${Q&&B`<span>${Q}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function sG({block:_}){let[$,j]=g(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return B`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&B`
                ${Z&&B`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&B`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&B`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(X)=>X.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(N),V=document.createElement("a");V.href=G,V.download=Q.split("/").pop()||"resource",V.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function aG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=_3(_,$),Z=jQ(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",K=Q?.description||_.description||_.subtitle||"",N=_.open_label||"Open widget",G=(V)=>{if(V.preventDefault(),V.stopPropagation(),!Q)return;j?.(Q)};return B`
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
                    disabled=${!Z}
                    onClick=${G}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${N}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function tG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function eG({preview:_}){let $=r4(_.url),j=r4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return B`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Q}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
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
    </svg>`,QX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,ZX=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function YX(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function qX(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=QX,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=ZX,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=jX,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Z(K,"idle"),q.appendChild(K);let N=async(G)=>{G.preventDefault(),G.stopPropagation();let X=Y.querySelector("code")?.textContent||"",U=await YX(X);Z(K,U?"success":"error");let L=j.get(K);if(L)clearTimeout(L);let H=setTimeout(()=>{Z(K,"idle"),j.delete(K)},$X);j.set(K,H)};K.addEventListener("click",N),Q.push(()=>{K.removeEventListener("click",N);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function KX(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:Z}}function NX(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:Z}}function GX(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let V=j[G].trim();if((V==="Images:"||V==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim(),X=V.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||V.match(/^attachment:([^\s]+)\s+(.+)$/i);if(X){let U=X[1],L=(X[2]||"").trim()||U;Z.push({id:U,label:L,raw:V})}else Z.push({id:null,label:V,raw:V})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:Z}}function XX(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function VX(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(XX).sort((V,X)=>X.length-V.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),N=[],G;while(G=K.nextNode())N.push(G);for(let V of N){let X=V.nodeValue;if(!X||!Z.test(X)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=V.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let L=X.split(Z).filter((A)=>A!=="");if(L.length===0)continue;let H=q.createDocumentFragment();for(let A of L)if(Y.test(A)){let O=q.createElement("mark");O.className="search-highlight-term",O.textContent=A,H.appendChild(O)}else H.appendChild(q.createTextNode(A));V.parentNode.replaceChild(H,V)}return q.body.innerHTML}function QZ({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:K,userAvatarUrl:N,userAvatarBackground:G,onDelete:V,isThreadReply:X,isThreadPrev:U,isThreadNext:L,isRemoving:H,highlightQuery:A,onFileRef:O,onOpenWidget:W}){let[D,E]=g(null),f=I(null),u=_.data,c=u.type==="agent_response",i=K||"You",P=c?Y||mQ:i,M=c?V3(Y,q,!0):V3(i,N),F=typeof G==="string"?G.trim().toLowerCase():"",T=!c&&M.image&&(F==="clear"||F==="transparent"),b=c&&Boolean(M.image),t=`background-color: ${T||b?"transparent":M.color}`,h=u.content_meta,s=Boolean(h?.truncated),a=Boolean(h?.preview),_0=s&&!a,q0=s?{originalLength:Number.isFinite(h?.original_length)?h.original_length:u.content?u.content.length:0,maxLength:Number.isFinite(h?.max_length)?h.max_length:0}:null,Z0=u.content_blocks||[],K0=u.media_ids||[],B0=_X(u.content,u.link_previews),{content:U0,fileRefs:u0}=KX(B0),{content:k0,messageRefs:O0}=NX(U0),{content:b0,attachments:f0}=GX(k0);B0=b0;let p0=z3(Z0),l0=F3(Z0),D0=p0.length===1&&typeof p0[0]?.fallback_text==="string"?p0[0].fallback_text.trim():"",n0=l0.length===1?eQ(l0[0]).trim():"",W0=Boolean(D0)&&B0?.trim()===D0||Boolean(n0)&&B0?.trim()===n0,I0=Boolean(B0)&&!_0&&!W0,d0=typeof A==="string"?A.trim():"",o0=S0(()=>{if(!B0||W0)return"";let y=H_(B0,j);return d0?VX(y,d0):y},[B0,W0,d0]),w1=(y,o)=>{y.stopPropagation(),E(P_(o))},[Y1,c0]=g(null),U1=(y)=>{c0(y)},$1=(y)=>{y.stopPropagation(),V?.(_)},s0=(y,o)=>{let X0=new Set;if(!y||o.length===0)return{content:y,usedIds:X0};return{content:y.replace(/attachment:([^\s)"']+)/g,(g0,a0,K1,A1)=>{let R1=a0.replace(/^\/+/,""),$_=o.find((o1)=>o1.name&&o1.name.toLowerCase()===R1.toLowerCase()&&!X0.has(o1.id))||o.find((o1)=>!X0.has(o1.id));if(!$_)return g0;if(X0.add($_.id),A1.slice(Math.max(0,K1-2),K1)==="](")return`/media/${$_.id}`;return $_.name||"attachment"}),usedIds:X0}},V0=[],w0=[],_1=[],r=[],Y0=[],m=[],d=[],z0=0;if(Z0.length>0)Z0.forEach((y)=>{if(y?.type==="text"&&y.annotations)d.push(y.annotations);if(y?.type==="generated_widget")m.push(y);else if(y?.type==="resource_link")r.push(y);else if(y?.type==="resource")Y0.push(y);else if(y?.type==="file"){let o=K0[z0++];if(o)w0.push(o),_1.push({id:o,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let o=K0[z0++];if(o){let X0=typeof y?.mime_type==="string"?y.mime_type:void 0;V0.push({id:o,annotations:y?.annotations,mimeType:X0}),_1.push({id:o,name:y?.name||y?.filename||y?.title})}}});else if(K0.length>0){let y=f0.length>0;K0.forEach((o,X0)=>{let J0=f0[X0]||null;if(_1.push({id:o,name:J0?.label||null}),y)w0.push(o);else V0.push({id:o,annotations:null})})}if(f0.length>0)f0.forEach((y)=>{if(!y?.id)return;let o=_1.find((X0)=>String(X0.id)===String(y.id));if(o&&!o.name)o.name=y.label});let{content:A0,usedIds:M0}=s0(B0,_1);B0=A0;let F0=V0.filter(({id:y})=>!M0.has(y)),T0=w0.filter((y)=>!M0.has(y)),v0=f0.length>0?f0.map((y,o)=>({id:y.id||`attachment-${o+1}`,label:y.label||`attachment-${o+1}`})):_1.map((y,o)=>({id:y.id,label:y.name||`attachment-${o+1}`})),L0=S0(()=>z3(Z0),[Z0]),y0=S0(()=>F3(Z0),[Z0]),H0=S0(()=>{return L0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[L0]);v(()=>{if(!f.current)return;return W4(f.current),qX(f.current)},[o0]);let j0=I(null);return v(()=>{if(!j0.current||L0.length===0)return;let y=j0.current;y.innerHTML="";for(let o of L0){let X0=document.createElement("div");y.appendChild(X0),aQ(X0,o,{onAction:async(J0)=>{if(J0.type==="Action.OpenUrl"){let g0=r4(J0.url||"");if(!g0)throw Error("Invalid URL");window.open(g0,"_blank","noopener,noreferrer");return}if(J0.type==="Action.Submit"){await g6({post_id:_.id,thread_id:u.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:o.card_id,action:{type:J0.type,title:J0.title||"",data:J0.data}});return}console.warn("[post] unsupported adaptive card action:",J0.type,J0)}}).catch((J0)=>{console.error("[post] adaptive card render error:",J0),X0.textContent=o.fallback_text||"Card failed to render."})}},[H0,_.id]),B`
        <div id=${`post-${_.id}`} class="post ${c?"agent-post":""} ${X?"thread-reply":""} ${U?"thread-prev":""} ${L?"thread-next":""} ${H?"removing":""}" onClick=${$}>
            <div class="post-avatar ${c?"agent-avatar":""} ${M.image?"has-image":""}" style=${t}>
                ${M.image?B`<img src=${M.image} alt=${P} />`:M.letter}
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
                    <span class="post-author">${P}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${R7(_.timestamp)}</a>
                </div>
                ${_0&&q0&&B`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${t5(q0.originalLength)} chars
                            ${q0.maxLength?B` • Display limit: ${t5(q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${a&&q0&&B`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${t5(q0.maxLength)} of ${t5(q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(u0.length>0||O0.length>0||v0.length>0)&&B`
                    <div class="post-file-refs">
                        ${O0.map((y)=>{let o=(X0)=>{if(X0.preventDefault(),X0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let J0=document.getElementById("post-"+y);if(J0)J0.scrollIntoView({behavior:"smooth",block:"center"}),J0.classList.add("post-highlight"),setTimeout(()=>J0.classList.remove("post-highlight"),2000)}};return B`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${o}>
                                    <${h_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${o}
                                    />
                                </a>
                            `})}
                        ${u0.map((y)=>{let o=y.split("/").pop()||y;return B`
                                <${h_}
                                    prefix="post"
                                    label=${o}
                                    title=${y}
                                    onClick=${()=>O?.(y)}
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
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let o=y.target.dataset.hashtag;if(o)j?.(o)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),E(y.target.src)}}
                    />
                `}
                ${L0.length>0&&B`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${y0.length>0&&B`
                    <div class="post-adaptive-card-submissions">
                        ${y0.map((y,o)=>{let X0=_Z(y),J0=`${y.card_id}-${o}`;return B`
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
                                            ${X0.fields.map((g0)=>B`
                                                <span class="adaptive-card-submission-field" title=${`${g0.key}: ${g0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${g0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${g0.value}</span>
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
                ${m.length>0&&B`
                    <div class="generated-widget-launches">
                        ${m.map((y,o)=>B`
                            <${aG}
                                key=${y.widget_id||y.id||`${_.id}-widget-${o}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${W}
                            />
                        `)}
                    </div>
                `}
                ${d.length>0&&B`
                    ${d.map((y,o)=>B`
                        <${Q6} key=${o} annotations=${y} />
                    `)}
                `}
                ${F0.length>0&&B`
                    <div class="media-preview">
                        ${F0.map(({id:y,mimeType:o})=>{let J0=typeof o==="string"&&o.toLowerCase().startsWith("image/svg")?P_(y):p6(y);return B`
                                <img 
                                    key=${y} 
                                    src=${J0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(g0)=>w1(g0,y)}
                                />
                            `})}
                    </div>
                `}
                ${F0.length>0&&B`
                    ${F0.map(({annotations:y},o)=>B`
                        ${y&&B`<${Q6} key=${o} annotations=${y} />`}
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
                        ${r.map((y,o)=>B`
                            <div key=${o}>
                                <${oG} block=${y} />
                                <${Q6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&B`
                    <div class="resource-embeds">
                        ${Y0.map((y,o)=>B`
                            <div key=${o}>
                                <${sG} block=${y} />
                                <${Q6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${u.link_previews?.length>0&&B`
                    <div class="link-previews">
                        ${u.link_previews.map((y,o)=>B`
                            <${eG} key=${o} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&B`<${jZ} src=${D} onClose=${()=>E(null)} />`}
        ${Y1&&B`
            <${$Z}
                mediaId=${Y1.mediaId}
                info=${Y1.info}
                onClose=${()=>c0(null)}
            />
        `}
    `}function ZZ({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:K,onOpenWidget:N,emptyMessage:G,timelineRef:V,agents:X,user:U,onDeletePost:L,reverse:H=!0,removingPostIds:A,searchQuery:O}){let[W,D]=g(!1),E=I(null),f=typeof IntersectionObserver<"u",u=C(async()=>{if(!j||!$||W)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,W,j]),c=C((h)=>{let{scrollTop:s,scrollHeight:a,clientHeight:_0}=h.target,q0=H?a-_0-s:s,Z0=Math.max(300,_0);if(q0<Z0)u()},[H,u]);v(()=>{if(!f)return;let h=E.current,s=V?.current;if(!h||!s)return;let a=300,_0=new IntersectionObserver((q0)=>{for(let Z0 of q0){if(!Z0.isIntersecting)continue;u()}},{root:s,rootMargin:`${a}px 0px ${a}px 0px`,threshold:0});return _0.observe(h),()=>_0.disconnect()},[f,$,j,V,u]);let i=I(u);if(i.current=u,v(()=>{if(f)return;if(!V?.current)return;let{scrollTop:h,scrollHeight:s,clientHeight:a}=V.current,_0=H?s-a-h:h,q0=Math.max(300,a);if(_0<q0)i.current?.()},[f,_,$,H,V]),v(()=>{if(!V?.current)return;if(!$||W)return;let{scrollTop:h,scrollHeight:s,clientHeight:a}=V.current,_0=H?s-a-h:h,q0=Math.max(300,a);if(s<=a+1||_0<q0)i.current?.()},[_,$,W,H,V]),!_)return B`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return B`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let P=_.slice().sort((h,s)=>h.id-s.id),M=(h)=>{let s=h?.data?.thread_id;if(s===null||s===void 0||s==="")return null;let a=Number(s);return Number.isFinite(a)?a:null},F=new Map;for(let h=0;h<P.length;h+=1){let s=P[h],a=Number(s?.id),_0=M(s);if(_0!==null){let q0=F.get(_0)||{anchorIndex:-1,replyIndexes:[]};q0.replyIndexes.push(h),F.set(_0,q0)}else if(Number.isFinite(a)){let q0=F.get(a)||{anchorIndex:-1,replyIndexes:[]};q0.anchorIndex=h,F.set(a,q0)}}let T=new Map;for(let[h,s]of F.entries()){let a=new Set;if(s.anchorIndex>=0)a.add(s.anchorIndex);for(let _0 of s.replyIndexes)a.add(_0);T.set(h,Array.from(a).sort((_0,q0)=>_0-q0))}let b=P.map((h,s)=>{let a=M(h);if(a===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=T.get(a);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=_0.indexOf(s);if(q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:q0>0,hasThreadNext:q0<_0.length-1}}),t=B`<div class="timeline-sentinel" ref=${E}></div>`;return B`
        <div class="timeline ${H?"reverse":"normal"}" ref=${V} onScroll=${c}>
            <div class="timeline-content">
                ${H?t:null}
                ${P.map((h,s)=>{let a=Boolean(h.data?.thread_id&&h.data.thread_id!==h.id),_0=A?.has?.(h.id),q0=b[s]||{};return B`
                    <${QZ}
                        key=${h.id}
                        post=${h}
                        isThreadReply=${a}
                        isThreadPrev=${q0.hasThreadPrev}
                        isThreadNext=${q0.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${O}
                        agentName=${hQ(h.data?.agent_id,X||{})}
                        agentAvatarUrl=${pQ(h.data?.agent_id,X||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Q?.(h)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${N}
                        onDelete=${L}
                    />
                `})}
                ${H?null:t}
            </div>
        </div>
    `}var Z6="workspaceExplorerScale",UX=["compact","default","comfortable"],LX=new Set(UX),BX={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function YZ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return LX.has(j)?j:$}function H3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function WX(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function zX(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function J3(_={}){let $=WX(_),j=_.stored?YZ(_.stored,$):$;return zX(j,_)}function qZ(_){return BX[YZ(_)]}function FX(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function O3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function KZ(_,$,j={}){let Q=j.resolvePane;if(O3(_,Q))return!0;return FX($)}var HX=60000,VZ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function JX(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return O3($,(j)=>h0.resolve(j))}function UZ(_,$,j,Q=0,Z=[]){if(!j&&VZ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)UZ(Y,$,j,Q+1,Z);return Z}function NZ(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&VZ(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function k3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Q.length,q=Q.map((K)=>{let N=k3(Z.get(K.path),K);if(N!==Z.get(K.path))Y=!0;return N});return Y?{...$,children:q}:_}function A3(_,$,j){if(!_)return _;if(_.path===$)return k3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=A3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var LZ=4,D3=14,OX=8,DX=16;function BZ(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=BZ(Q);return _.__bytes=j,j}function WZ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=LZ)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let K of Z){let N=Math.max(0,Number(K?.__bytes??K?.size??0));if(N<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:N});else Y.push({kind:"file",name:K.name,path:K.path,size:N})}Y.sort((K,N)=>N.size-K.size);let q=Y;if(Y.length>D3){let K=Y.slice(0,D3-1),N=Y.slice(D3-1),G=N.reduce((V,X)=>V+X.size,0);K.push({kind:"other",name:`+${N.length} more`,path:`${Q.path}/[other]`,size:G}),q=K}return Q.children=q.map((K)=>{if(K.kind==="dir")return WZ(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Q}function GZ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function zZ(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function Y6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function M3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,K=Y-Z>q?Z+q:Y,N=Y6(_,$,Q,Z),G=Y6(_,$,Q,K),V=Y6(_,$,j,K),X=Y6(_,$,j,Z),U=K-Z>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,"Z"].join(" ")}var FZ={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function HZ(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(K,N,G,V)=>{let X=Array.isArray(K?.children)?K.children:[];if(!X.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let L=G-N,H=N;X.forEach((A,O)=>{let W=Math.max(0,Number(A.size)||0);if(W<=0)return;let D=W/U,E=H,f=O===X.length-1?G:H+L*D;if(H=f,f-E<0.003)return;let u=FZ[V];if(u){let c=zZ(E,V,j);if(Q.push({key:A.path,path:A.path,label:A.name,size:W,color:c,depth:V,startAngle:E,endAngle:f,innerRadius:u[0],outerRadius:u[1],d:M3(120,120,u[0],u[1],E,f)}),V===1)Z.push({key:A.path,name:A.name,size:W,pct:Y>0?W/Y*100:0,color:c})}if(V<LZ)q(A,E,f,V+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function E3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=E3(Q,$);if(Z)return Z}return null}function JZ(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=FZ[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,K=zZ(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:M3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function XZ(_,$=!1,j=!1){if(!_)return null;let Q=BZ(_),Z=WZ(_,0),Y=Z.size||Q,{segments:q,legend:K}=HZ(Z,Y,j);if(!q.length&&Y>0){let N=JZ("[files]",Z.path,Y,j);q=N.segments,K=N.legend}return{root:Z,totalSize:Y,segments:q,legend:K,truncated:$,isDarkTheme:j}}function AX({payload:_}){if(!_)return null;let[$,j]=g(null),[Q,Z]=g(_?.root?.path||"."),[Y,q]=g(()=>[_?.root?.path||"."]),[K,N]=g(!1);v(()=>{let F=_?.root?.path||".";Z(F),q([F]),j(null)},[_?.root?.path,_?.totalSize]),v(()=>{if(!Q)return;N(!0);let F=setTimeout(()=>N(!1),180);return()=>clearTimeout(F)},[Q]);let G=S0(()=>{return E3(_.root,Q)||_.root},[_?.root,Q]),V=G?.size||_.totalSize||0,{segments:X,legend:U}=S0(()=>{let F=HZ(G,V,_.isDarkTheme);if(F.segments.length>0)return F;if(V<=0)return F;let T=G?.children?.length?"Total":"[files]";return JZ(T,G?.path||_?.root?.path||".",V,_.isDarkTheme)},[G,V,_.isDarkTheme,_?.root?.path]),[L,H]=g(X),A=I(new Map),O=I(0);v(()=>{let F=A.current,T=new Map(X.map((s)=>[s.key,s])),b=performance.now(),t=220,h=(s)=>{let a=Math.min(1,(s-b)/220),_0=a*(2-a),q0=X.map((Z0)=>{let B0=F.get(Z0.key)||{startAngle:Z0.startAngle,endAngle:Z0.startAngle,innerRadius:Z0.innerRadius,outerRadius:Z0.innerRadius},U0=(f0,p0)=>f0+(p0-f0)*_0,u0=U0(B0.startAngle,Z0.startAngle),k0=U0(B0.endAngle,Z0.endAngle),O0=U0(B0.innerRadius,Z0.innerRadius),b0=U0(B0.outerRadius,Z0.outerRadius);return{...Z0,d:M3(120,120,O0,b0,u0,k0)}});if(H(q0),a<1)O.current=requestAnimationFrame(h)};if(O.current)cancelAnimationFrame(O.current);return O.current=requestAnimationFrame(h),A.current=T,()=>{if(O.current)cancelAnimationFrame(O.current)}},[X]);let W=L.length?L:X,D=V>0?y_(V):"0 B",E=G?.name||"",u=(E&&E!=="."?E:"Total")||"Total",c=D,i=Y.length>1,P=(F)=>{if(!F?.path)return;let T=E3(_.root,F.path);if(!T||!Array.isArray(T.children)||T.children.length===0)return;q((b)=>[...b,T.path]),Z(T.path),j(null)},M=()=>{if(!i)return;q((F)=>{let T=F.slice(0,-1);return Z(T[T.length-1]||_?.root?.path||"."),T}),j(null)};return B`
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
                        onClick=${()=>P(F)}
                    >
                        <title>${F.label} — ${y_(F.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${i?" is-drill":""}`}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${u}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${c}</text>
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
    `}function EX({mediaId:_}){let[$,j]=g(null);if(v(()=>{if(!_)return;U5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?y_($.metadata.size):"";return B`
        <a href=${P_(_)} download=${Q} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Q}</span>
                ${Z&&B`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function OZ({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:K=!1}){let[N,G]=g(null),[V,X]=g(new Set(["."])),[U,L]=g(null),[H,A]=g(null),[O,W]=g(""),[D,E]=g(null),[f,u]=g(null),[c,i]=g(!0),[P,M]=g(!1),[F,T]=g(null),[b,t]=g(()=>O5("workspaceShowHidden",!1)),[h,s]=g(!1),[a,_0]=g(null),[q0,Z0]=g(null),[K0,B0]=g(null),[U0,u0]=g(!1),[k0,O0]=g(null),[b0,f0]=g(()=>GZ()),[p0,l0]=g(()=>J3({stored:F_(Z6),...H3()})),[D0,n0]=g(!1),W0=I(V),I0=I(""),d0=I(null),o0=I(0),w1=I(new Set),Y1=I(null),c0=I(new Map),U1=I(_),$1=I(Q),s0=I(null),V0=I(null),w0=I(null),_1=I(null),r=I(null),Y0=I(null),m=I("."),d=I(null),z0=I({path:null,dragging:!1,startX:0,startY:0}),A0=I({path:null,dragging:!1,startX:0,startY:0}),M0=I({path:null,timer:0}),F0=I(!1),T0=I(0),v0=I(new Map),L0=I(null),y0=I(null),H0=I(null),j0=I(null),y=I(null),o=I(null),X0=I(b),J0=I($),g0=I(j??$),a0=I(0),K1=I(K0),A1=I(h),R1=I(a),S_=I(null),$_=I({x:0,y:0}),v1=I(0),o1=I(null),c1=I(U),t0=I(H),s1=I(null),t_=I(D);U1.current=_,$1.current=Q,v(()=>{W0.current=V},[V]),v(()=>{X0.current=b},[b]),v(()=>{J0.current=$},[$]),v(()=>{g0.current=j??$},[j,$]),v(()=>{K1.current=K0},[K0]),v(()=>{if(typeof window>"u")return;let J=()=>{l0(J3({stored:F_(Z6),...H3()}))};J();let k=()=>J(),R=()=>J(),S=($0)=>{if(!$0||$0.key===null||$0.key===Z6)J()};window.addEventListener("resize",k),window.addEventListener("focus",R),window.addEventListener("storage",S);let n=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),N0=($0,C0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",C0);else if($0.addListener)$0.addListener(C0)},G0=($0,C0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",C0);else if($0.removeListener)$0.removeListener(C0)};return N0(n,k),N0(Q0,k),()=>{window.removeEventListener("resize",k),window.removeEventListener("focus",R),window.removeEventListener("storage",S),G0(n,k),G0(Q0,k)}},[]),v(()=>{let J=(k)=>{let R=k?.detail?.path;if(!R)return;let S=R.split("/"),n=[];for(let Q0=1;Q0<S.length;Q0++)n.push(S.slice(0,Q0).join("/"));if(n.length)X((Q0)=>{let N0=new Set(Q0);N0.add(".");for(let G0 of n)N0.add(G0);return N0});L(R),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",J),()=>window.removeEventListener("workspace-reveal-path",J)},[]),v(()=>{A1.current=h},[h]),v(()=>{R1.current=a},[a]),v(()=>{c1.current=U},[U]),v(()=>{t0.current=H},[H]),v(()=>{t_.current=D},[D]),v(()=>{if(typeof window>"u"||typeof document>"u")return;let J=()=>f0(GZ());J();let k=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>J();if(k?.addEventListener)k.addEventListener("change",R);else if(k?.addListener)k.addListener(R);let S=typeof MutationObserver<"u"?new MutationObserver(()=>J()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(k?.removeEventListener)k.removeEventListener("change",R);else if(k?.removeListener)k.removeListener(R);S?.disconnect()}},[]),v(()=>{if(!H)return;let J=r.current;if(!J)return;let k=requestAnimationFrame(()=>{try{J.focus(),J.select()}catch{}});return()=>cancelAnimationFrame(k)},[H]),v(()=>{if(!D0)return;let J=(R)=>{let S=R?.target;if(!(S instanceof Element))return;if(y.current?.contains(S))return;if(o.current?.contains(S))return;n0(!1)},k=(R)=>{if(R?.key==="Escape")n0(!1),o.current?.focus?.()};return document.addEventListener("mousedown",J),document.addEventListener("touchstart",J,{passive:!0}),document.addEventListener("keydown",k),()=>{document.removeEventListener("mousedown",J),document.removeEventListener("touchstart",J),document.removeEventListener("keydown",k)}},[D0]);let j_=async(J,k={})=>{let R=Boolean(k?.autoOpen),S=String(J||"").trim();M(!0),E(null),u(null);try{let n=await g5(S,20000);if(R&&S&&KZ(S,n,{resolvePane:(Q0)=>h0.resolve(Q0)}))return $1.current?.(S,n),n;return E(n),n}catch(n){let Q0={error:n.message||"Failed to load preview"};return E(Q0),Q0}finally{M(!1)}};s0.current=j_;let e_=async()=>{if(!J0.current)return;try{let J=await v5("",1,X0.current),k=NZ(J.root,W0.current,X0.current);if(k===I0.current){i(!1);return}if(I0.current=k,d0.current=J.root,!o0.current)o0.current=requestAnimationFrame(()=>{o0.current=0,G((R)=>k3(R,d0.current)),i(!1)})}catch(J){T(J.message||"Failed to load workspace"),i(!1)}},p_=async(J)=>{if(!J)return;if(w1.current.has(J))return;w1.current.add(J);try{let k=await v5(J,1,X0.current);G((R)=>A3(R,J,k.root))}catch(k){T(k.message||"Failed to load workspace")}finally{w1.current.delete(J)}};V0.current=p_;let E1=C(()=>{let J=U;if(!J)return".";let k=c0.current?.get(J);if(k&&k.type==="dir")return k.path;if(J==="."||!J.includes("/"))return".";let R=J.split("/");return R.pop(),R.join("/")||"."},[U]),a1=C((J)=>{let k=J?.closest?.(".workspace-row");if(!k)return null;let R=k.dataset.path,S=k.dataset.type;if(!R)return null;if(S==="dir")return R;if(R.includes("/")){let n=R.split("/");return n.pop(),n.join("/")||"."}return"."},[]),k1=C((J)=>{return a1(J?.target||null)},[a1]),L1=C((J)=>{K1.current=J,B0(J)},[]),B1=C(()=>{let J=M0.current;if(J?.timer)clearTimeout(J.timer);M0.current={path:null,timer:0}},[]),L_=C((J)=>{if(!J||J==="."){B1();return}let k=c0.current?.get(J);if(!k||k.type!=="dir"){B1();return}if(W0.current?.has(J)){B1();return}if(M0.current?.path===J)return;B1();let R=setTimeout(()=>{M0.current={path:null,timer:0},V0.current?.(J),X((S)=>{let n=new Set(S);return n.add(J),n})},600);M0.current={path:J,timer:R}},[B1]),B_=C((J,k)=>{if($_.current={x:J,y:k},v1.current)return;v1.current=requestAnimationFrame(()=>{v1.current=0;let R=S_.current;if(!R)return;let S=$_.current;R.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),x1=C((J)=>{if(!J)return;let R=(c0.current?.get(J)?.name||J.split("/").pop()||J).trim();if(!R)return;Z0({path:J,label:R})},[]),t1=C(()=>{if(Z0(null),v1.current)cancelAnimationFrame(v1.current),v1.current=0;if(S_.current)S_.current.style.transform="translate(-9999px, -9999px)"},[]),q1=C((J)=>{if(!J)return".";let k=c0.current?.get(J);if(k&&k.type==="dir")return k.path;if(J==="."||!J.includes("/"))return".";let R=J.split("/");return R.pop(),R.join("/")||"."},[]),T1=C(()=>{A(null),W("")},[]),Q_=C((J)=>{if(!J)return;let R=(c0.current?.get(J)?.name||J.split("/").pop()||J).trim();if(!R||J===".")return;A(J),W(R)},[]),g1=C(async()=>{let J=t0.current;if(!J)return;let k=(O||"").trim();if(!k){T1();return}let R=c0.current?.get(J),S=(R?.name||J.split("/").pop()||J).trim();if(k===S){T1();return}try{let Q0=(await d6(J,k))?.path||J,N0=J.includes("/")?J.split("/").slice(0,-1).join("/")||".":".";if(T1(),T(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:J,newPath:Q0,type:R?.type||"file"}})),R?.type==="dir")X((G0)=>{let $0=new Set;for(let C0 of G0)if(C0===J)$0.add(Q0);else if(C0.startsWith(`${J}/`))$0.add(`${Q0}${C0.slice(J.length)}`);else $0.add(C0);return $0});if(L(Q0),R?.type==="dir")E(null),M(!1),u(null);else s0.current?.(Q0);V0.current?.(N0)}catch(n){T(n?.message||"Failed to rename file")}},[T1,O]),_4=C(async(J)=>{let S=J||".";for(let n=0;n<50;n+=1){let N0=`untitled${n===0?"":`-${n}`}.md`;try{let $0=(await n6(S,N0,""))?.path||(S==="."?N0:`${S}/${N0}`);if(S&&S!==".")X((C0)=>new Set([...C0,S]));L($0),T(null),V0.current?.(S),s0.current?.($0);return}catch(G0){if(G0?.status===409||G0?.code==="file_exists")continue;T(G0?.message||"Failed to create file");return}}T("Failed to create file (untitled name already in use).")},[]),O_=C((J)=>{if(J?.stopPropagation?.(),U0)return;let k=q1(c1.current);_4(k)},[U0,q1,_4]);v(()=>{if(typeof window>"u")return;let J=(k)=>{let R=k?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;G((G0)=>{let $0=G0;for(let C0 of R){if(!C0?.root)continue;if(!$0||C0.path==="."||!C0.path)$0=C0.root;else $0=A3($0,C0.path,C0.root)}if($0)I0.current=NZ($0,W0.current,X0.current);return i(!1),$0});let S=c1.current;if(Boolean(S)&&R.some((G0)=>{let $0=G0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)||$0.startsWith(`${S}/`)}))v0.current.clear();if(!S||!t_.current)return;let Q0=c0.current?.get(S);if(Q0&&Q0.type==="dir")return;if(R.some((G0)=>{let $0=G0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)}))s0.current?.(S)};return window.addEventListener("workspace-update",J),()=>window.removeEventListener("workspace-update",J)},[]),Y1.current=e_;let $4=I(()=>{if(typeof window>"u")return;let J=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),k=g0.current??J0.current,R=document.visibilityState!=="hidden"&&(k||J.matches&&J0.current);b5(R,X0.current).catch(()=>{})}).current,D_=I(0),z4=I(()=>{if(D_.current)clearTimeout(D_.current);D_.current=setTimeout(()=>{D_.current=0,$4()},250)}).current;v(()=>{if(J0.current)Y1.current?.();z4()},[$,j]),v(()=>{Y1.current(),$4();let J=setInterval(()=>Y1.current(),HX),k=r5("previewHeight",null),R=Number.isFinite(k)?Math.min(Math.max(k,80),600):280;if(T0.current=R,w0.current)w0.current.style.setProperty("--preview-height",`${R}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),n=()=>z4();if(S.addEventListener)S.addEventListener("change",n);else if(S.addListener)S.addListener(n);return document.addEventListener("visibilitychange",n),()=>{if(clearInterval(J),o0.current)cancelAnimationFrame(o0.current),o0.current=0;if(S.removeEventListener)S.removeEventListener("change",n);else if(S.removeListener)S.removeListener(n);if(document.removeEventListener("visibilitychange",n),D_.current)clearTimeout(D_.current),D_.current=0;if(d.current)clearTimeout(d.current),d.current=null;b5(!1,X0.current).catch(()=>{})}},[]);let A_=S0(()=>UZ(N,V,b),[N,V,b]),w_=S0(()=>new Map(A_.map((J)=>[J.node.path,J.node])),[A_]),u4=S0(()=>qZ(p0),[p0]);c0.current=w_;let j1=(U?c0.current.get(U):null)?.type==="dir";v(()=>{if(!U||!j1){O0(null),L0.current=null,y0.current=null;return}let J=U,k=`${b?"hidden":"visible"}:${U}`,R=v0.current,S=R.get(k);if(S?.root){R.delete(k),R.set(k,S);let N0=XZ(S.root,Boolean(S.truncated),b0);if(N0)L0.current=N0,y0.current=U,O0({loading:!1,error:null,payload:N0});return}let n=L0.current,Q0=y0.current;O0({loading:!0,error:null,payload:Q0===U?n:null}),v5(U,OX,b).then((N0)=>{if(c1.current!==J)return;let G0={root:N0?.root,truncated:Boolean(N0?.truncated)};R.delete(k),R.set(k,G0);while(R.size>DX){let C0=R.keys().next().value;if(!C0)break;R.delete(C0)}let $0=XZ(G0.root,G0.truncated,b0);L0.current=$0,y0.current=U,O0({loading:!1,error:null,payload:$0})}).catch((N0)=>{if(c1.current!==J)return;O0({loading:!1,error:N0?.message||"Failed to load folder size chart",payload:Q0===U?n:null})})},[U,j1,b,b0]);let M1=Boolean(D&&D.kind==="text"&&!j1&&(!D.size||D.size<=262144)),F4=M1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",Z_=Boolean(U&&U!=="."),E_=Boolean(U&&!j1),l1=Boolean(U&&!j1),J1=U&&j1?k8(U,b):null,u1=C(()=>n0(!1),[]),N1=C(async(J)=>{u1();try{await J?.()}catch(k){console.warn("[workspace-explorer] Header menu action failed:",k)}},[u1]);v(()=>{let J=H0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!J)return;if(J.innerHTML="",!U||j1||!D||D.error)return;let k={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},R=h0.resolve(k)||h0.get("workspace-preview-default");if(!R)return;let S=R.mount(J,k);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;J.innerHTML=""}},[U,j1,D]);let Y_=(J)=>{let k=J?.target;if(k instanceof Element)return k;return k?.parentElement||null},q_=(J)=>{return Boolean(J?.closest?.(".workspace-node-icon, .workspace-label-text"))},K_=I((J)=>{let k=Y_(J),R=k?.closest?.("[data-path]");if(!R)return;let S=R.dataset.path;if(!S||S===".")return;let n=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),Q0=Boolean(k?.closest?.(".workspace-caret"));if(n||Q0)return;if(t0.current===S)return;Q_(S)}).current,c_=I((J)=>{if(F0.current){F0.current=!1;return}let k=Y_(J),R=k?.closest?.("[data-path]");if(_1.current?.focus?.(),!R)return;let S=R.dataset.path,n=R.dataset.type,Q0=Boolean(k?.closest?.(".workspace-caret")),N0=Boolean(k?.closest?.("button"))||Boolean(k?.closest?.("a"))||Boolean(k?.closest?.("input")),G0=c1.current===S,$0=t0.current;if($0){if($0===S)return;T1()}let C0=n==="file"&&s1.current===S&&!Q0&&!N0;if(n==="dir"){if(s1.current=null,L(S),E(null),u(null),M(!1),!W0.current.has(S))V0.current?.(S);if(G0&&!Q0)return;X((e1)=>{let m1=new Set(e1);if(m1.has(S))m1.delete(S);else m1.add(S);return m1})}else{s1.current=null,L(S);let P1=c0.current.get(S);if(P1)U1.current?.(P1.path,P1);if(!N0&&!Q0&&JX(S))$1.current?.(S,t_.current);else{let m1=!N0&&!Q0;s0.current?.(S,{autoOpen:m1})}}}).current,b1=I(()=>{I0.current="",Y1.current(),Array.from(W0.current||[]).filter((k)=>k&&k!==".").forEach((k)=>V0.current?.(k))}).current,f1=I(()=>{s1.current=null,L(null),E(null),u(null),M(!1)}).current,N_=I(()=>{t((J)=>{let k=!J;if(typeof window<"u")Z1("workspaceShowHidden",String(k));return X0.current=k,b5(!0,k).catch(()=>{}),I0.current="",Y1.current?.(),Array.from(W0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>V0.current?.(S)),k})}).current,R_=I((J)=>{if(Y_(J)?.closest?.("[data-path]"))return;f1()}).current,W1=C(async(J)=>{if(!J)return;let k=J.split("/").pop()||J;if(!window.confirm(`Delete "${k}"? This cannot be undone.`))return;try{await r6(J);let S=J.includes("/")?J.split("/").slice(0,-1).join("/")||".":".";if(c1.current===J)f1();V0.current?.(S),T(null)}catch(S){E((n)=>({...n||{},error:S.message||"Failed to delete file"}))}},[f1]),k_=C((J)=>{let k=_1.current;if(!k||!J||typeof CSS>"u"||typeof CSS.escape!=="function")return;k.querySelector(`[data-path="${CSS.escape(J)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),G1=C((J)=>{let k=A_;if(!k||k.length===0)return;let R=U?k.findIndex((S)=>S.node.path===U):-1;if(J.key==="ArrowDown"){J.preventDefault();let S=Math.min(R+1,k.length-1),n=k[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")U1.current?.(n.node.path,n.node),s0.current?.(n.node.path);else E(null),M(!1),u(null);k_(n.node.path);return}if(J.key==="ArrowUp"){J.preventDefault();let S=R<=0?0:R-1,n=k[S];if(!n)return;if(L(n.node.path),n.node.type!=="dir")U1.current?.(n.node.path,n.node),s0.current?.(n.node.path);else E(null),M(!1),u(null);k_(n.node.path);return}if(J.key==="ArrowRight"&&R>=0){let S=k[R];if(S?.node?.type==="dir"&&!V.has(S.node.path))J.preventDefault(),V0.current?.(S.node.path),X((n)=>new Set([...n,S.node.path]));return}if(J.key==="ArrowLeft"&&R>=0){let S=k[R];if(S?.node?.type==="dir"&&V.has(S.node.path))J.preventDefault(),X((n)=>{let Q0=new Set(n);return Q0.delete(S.node.path),Q0});return}if(J.key==="Enter"&&R>=0){J.preventDefault();let S=k[R];if(!S)return;let n=S.node.path;if(S.node.type==="dir"){if(!W0.current.has(n))V0.current?.(n);X((N0)=>{let G0=new Set(N0);if(G0.has(n))G0.delete(n);else G0.add(n);return G0}),E(null),u(null),M(!1)}else U1.current?.(n,S.node),s0.current?.(n);return}if((J.key==="Delete"||J.key==="Backspace")&&R>=0){let S=k[R];if(!S||S.node.type==="dir")return;J.preventDefault(),W1(S.node.path);return}if(J.key==="Escape")J.preventDefault(),f1()},[f1,W1,V,A_,k_,U]),u_=C((J)=>{let k=Y_(J),R=k?.closest?.(".workspace-row");if(!R)return;let S=R.dataset.type,n=R.dataset.path;if(!n||n===".")return;if(t0.current===n)return;let Q0=J?.touches?.[0];if(!Q0)return;if(z0.current={path:q_(k)?n:null,dragging:!1,startX:Q0.clientX,startY:Q0.clientY},S!=="file")return;if(d.current)clearTimeout(d.current);d.current=setTimeout(()=>{if(d.current=null,z0.current?.dragging)return;W1(n)},600)},[W1]),M_=C(()=>{if(d.current)clearTimeout(d.current),d.current=null;let J=z0.current;if(J?.dragging&&J.path){let k=K1.current||E1(),R=o1.current;if(typeof R==="function")R(J.path,k)}z0.current={path:null,dragging:!1,startX:0,startY:0},a0.current=0,s(!1),_0(null),L1(null),B1(),t1()},[E1,t1,L1,B1]),v4=C((J)=>{let k=z0.current,R=J?.touches?.[0];if(!R||!k?.path){if(d.current)clearTimeout(d.current),d.current=null;return}let S=Math.abs(R.clientX-k.startX),n=Math.abs(R.clientY-k.startY),Q0=S>8||n>8;if(Q0&&d.current)clearTimeout(d.current),d.current=null;if(!k.dragging&&Q0)k.dragging=!0,s(!0),_0("move"),x1(k.path);if(k.dragging){J.preventDefault(),B_(R.clientX,R.clientY);let N0=document.elementFromPoint(R.clientX,R.clientY),G0=a1(N0)||E1();if(K1.current!==G0)L1(G0);L_(G0)}},[a1,E1,x1,B_,L1,L_]),g4=I((J)=>{J.preventDefault();let k=w0.current;if(!k)return;let R=J.clientY,S=T0.current||280,n=J.currentTarget;n.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=R,N0=($0)=>{Q0=$0.clientY;let C0=k.clientHeight-80,P1=Math.min(Math.max(S-($0.clientY-R),80),C0);k.style.setProperty("--preview-height",`${P1}px`),T0.current=P1},G0=()=>{let $0=k.clientHeight-80,C0=Math.min(Math.max(S-(Q0-R),80),$0);T0.current=C0,n.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",Z1("previewHeight",String(Math.round(C0))),document.removeEventListener("mousemove",N0),document.removeEventListener("mouseup",G0)};document.addEventListener("mousemove",N0),document.addEventListener("mouseup",G0)}).current,f_=I((J)=>{J.preventDefault();let k=w0.current;if(!k)return;let R=J.touches[0];if(!R)return;let S=R.clientY,n=T0.current||280,Q0=J.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let N0=($0)=>{let C0=$0.touches[0];if(!C0)return;$0.preventDefault();let P1=k.clientHeight-80,e1=Math.min(Math.max(n-(C0.clientY-S),80),P1);k.style.setProperty("--preview-height",`${e1}px`),T0.current=e1},G0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",Z1("previewHeight",String(Math.round(T0.current||n))),document.removeEventListener("touchmove",N0),document.removeEventListener("touchend",G0),document.removeEventListener("touchcancel",G0)};document.addEventListener("touchmove",N0,{passive:!1}),document.addEventListener("touchend",G0),document.addEventListener("touchcancel",G0)}).current,v_=async()=>{if(!U)return;try{let J=await l6(U);if(J.media_id)u(J.media_id)}catch(J){E((k)=>({...k||{},error:J.message||"Failed to attach"}))}},b4=async()=>{if(!U||j1)return;await W1(U)},j4=(J)=>{return Array.from(J?.dataTransfer?.types||[]).includes("Files")},a4=C((J)=>{if(!j4(J))return;if(J.preventDefault(),a0.current+=1,!A1.current)s(!0);_0("upload");let k=k1(J)||E1();L1(k),L_(k)},[E1,k1,L1,L_]),Q4=C((J)=>{if(!j4(J))return;if(J.preventDefault(),J.dataTransfer)J.dataTransfer.dropEffect="copy";if(!A1.current)s(!0);if(R1.current!=="upload")_0("upload");let k=k1(J)||E1();if(K1.current!==k)L1(k);L_(k)},[E1,k1,L1,L_]),l_=C((J)=>{if(!j4(J))return;if(J.preventDefault(),a0.current=Math.max(0,a0.current-1),a0.current===0)s(!1),_0(null),L1(null),B1()},[L1,B1]),n1=C(async(J,k=".")=>{let R=Array.from(J||[]);if(R.length===0)return;let S=k&&k!==""?k:".",n=S!=="."?S:"workspace root";u0(!0);try{let Q0=null;for(let N0 of R)try{Q0=await A8(N0,S)}catch(G0){let $0=G0?.status,C0=G0?.code;if($0===409||C0==="file_exists"){let P1=N0?.name||"file";if(!window.confirm(`"${P1}" already exists in ${n}. Overwrite?`))continue;Q0=await A8(N0,S,{overwrite:!0})}else throw G0}if(Q0?.path)s1.current=Q0.path,L(Q0.path),s0.current?.(Q0.path);V0.current?.(S)}catch(Q0){T(Q0.message||"Failed to upload file")}finally{u0(!1)}},[]),H4=C(async(J,k)=>{if(!J)return;let R=c0.current?.get(J);if(!R)return;let S=k&&k!==""?k:".",n=J.includes("/")?J.split("/").slice(0,-1).join("/")||".":".";if(S===n)return;try{let N0=(await i6(J,S))?.path||J;if(R.type==="dir")X((G0)=>{let $0=new Set;for(let C0 of G0)if(C0===J)$0.add(N0);else if(C0.startsWith(`${J}/`))$0.add(`${N0}${C0.slice(J.length)}`);else $0.add(C0);return $0});if(L(N0),R.type==="dir")E(null),M(!1),u(null);else s0.current?.(N0);V0.current?.(n),V0.current?.(S)}catch(Q0){T(Q0?.message||"Failed to move entry")}},[]);o1.current=H4;let J4=C(async(J)=>{if(!j4(J))return;J.preventDefault(),a0.current=0,s(!1),_0(null),B0(null),B1();let k=Array.from(J?.dataTransfer?.files||[]);if(k.length===0)return;let R=K1.current||k1(J)||E1();await n1(k,R)},[E1,k1,n1]),T5=C((J)=>{if(J?.stopPropagation?.(),U0)return;let k=J?.currentTarget?.dataset?.uploadTarget||".";m.current=k,Y0.current?.click()},[U0]),O1=C(()=>{if(U0)return;let J=c1.current,k=J?c0.current?.get(J):null;m.current=k?.type==="dir"?k.path:".",Y0.current?.click()},[U0]),O4=C(()=>{N1(()=>O_(null))},[N1,O_]),t4=C(()=>{N1(()=>O1())},[N1,O1]),G_=C(()=>{N1(()=>b1())},[N1,b1]),X_=C(()=>{N1(()=>N_())},[N1,N_]),Z4=C(()=>{if(!U||!M1)return;N1(()=>$1.current?.(U,D))},[N1,U,M1,D]),m4=C(()=>{if(!U||U===".")return;N1(()=>Q_(U))},[N1,U,Q_]),h4=C(()=>{if(!U||j1)return;N1(()=>b4())},[N1,U,j1,b4]),e4=C(()=>{if(!U||j1)return;N1(()=>v_())},[N1,U,j1,v_]),Y4=C(()=>{if(!J1)return;if(u1(),typeof window<"u")window.open(J1,"_blank","noopener")},[u1,J1]),I_=C(()=>{u1(),Z?.()},[u1,Z]),_5=C(()=>{u1(),Y?.()},[u1,Y]),D4=C(()=>{u1(),q?.()},[u1,q]),p4=C((J)=>{if(!J||J.button!==0)return;let k=J.currentTarget;if(!k||!k.dataset)return;let R=k.dataset.path;if(!R||R===".")return;if(t0.current===R)return;let S=Y_(J);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!q_(S))return;J.preventDefault(),A0.current={path:R,dragging:!1,startX:J.clientX,startY:J.clientY};let n=(N0)=>{let G0=A0.current;if(!G0?.path)return;let $0=Math.abs(N0.clientX-G0.startX),C0=Math.abs(N0.clientY-G0.startY),P1=$0>4||C0>4;if(!G0.dragging&&P1)G0.dragging=!0,F0.current=!0,s(!0),_0("move"),x1(G0.path),B_(N0.clientX,N0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(G0.dragging){N0.preventDefault(),B_(N0.clientX,N0.clientY);let e1=document.elementFromPoint(N0.clientX,N0.clientY),m1=a1(e1)||E1();if(K1.current!==m1)L1(m1);L_(m1)}},Q0=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",Q0);let N0=A0.current;if(N0?.dragging&&N0.path){let G0=K1.current||E1(),$0=o1.current;if(typeof $0==="function")$0(N0.path,G0)}A0.current={path:null,dragging:!1,startX:0,startY:0},a0.current=0,s(!1),_0(null),L1(null),B1(),t1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{F0.current=!1},0)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",Q0)},[a1,E1,x1,B_,t1,L1,L_,B1]),x_=C(async(J)=>{let k=Array.from(J?.target?.files||[]);if(k.length===0)return;let R=m.current||".";if(await n1(k,R),m.current=".",J?.target)J.target.value=""},[n1]);return B`
        <aside
            class=${`workspace-sidebar${h?" workspace-drop-active":""}`}
            data-workspace-scale=${p0}
            ref=${w0}
            onDragEnter=${a4}
            onDragOver=${Q4}
            onDragLeave=${l_}
            onDrop=${J4}
        >
            <input type="file" multiple style="display:none" ref=${Y0} onChange=${x_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${o}
                            class=${`workspace-menu-button${D0?" active":""}`}
                            onClick=${(J)=>{J.stopPropagation(),n0((k)=>!k)}}
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
                                <button class="workspace-menu-item" role="menuitem" onClick=${G_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${b?" active":""}`} role="menuitem" onClick=${X_}>
                                    ${b?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&B`<div class="workspace-menu-separator"></div>`}
                                ${U&&!j1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Z4} disabled=${!M1}>Open in editor</button>
                                `}
                                ${Z_&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m4}>Rename selected</button>
                                `}
                                ${l1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${e4}>Download selected file</button>
                                `}
                                ${J1&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4}>Download selected folder (zip)</button>
                                `}
                                ${E_&&B`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${h4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&B`<div class="workspace-menu-separator"></div>`}
                                ${Z&&B`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${I_}>
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
                    <button class="workspace-create" onClick=${O_} title="New file" disabled=${U0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${b1} title="Refresh">
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
                ${c&&B`<div class="workspace-loading">Loading…</div>`}
                ${F&&B`<div class="workspace-error">${F}</div>`}
                ${N&&B`
                    <div
                        class="workspace-tree-list"
                        ref=${_1}
                        tabIndex="0"
                        onClick=${c_}
                        onDblClick=${K_}
                        onKeyDown=${G1}
                        onTouchStart=${u_}
                        onTouchEnd=${M_}
                        onTouchMove=${v4}
                        onTouchCancel=${M_}
                    >
                        ${A_.map(({node:J,depth:k})=>{let R=J.type==="dir",S=J.path===U,n=J.path===H,Q0=R&&V.has(J.path),N0=K0&&J.path===K0,G0=Array.isArray(J.children)&&J.children.length>0?J.children.length:Number(J.child_count)||0;return B`
                                <div
                                    key=${J.path}
                                    class=${`workspace-row${S?" selected":""}${N0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+k*u4.indentPx}px`}}
                                    data-path=${J.path}
                                    data-type=${J.type}
                                    onMouseDown=${p4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?Q0?B`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:B`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?B`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:B`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${n?B`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${r}
                                                value=${O}
                                                onInput=${($0)=>W($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),g1();else if($0.key==="Escape")$0.preventDefault(),T1()}}
                                                onBlur=${T1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:B`<span class="workspace-label"><span class="workspace-label-text">${J.name}</span></span>`}
                                    ${R&&!Q0&&G0>0&&B`
                                        <span class="workspace-count">${G0}</span>
                                    `}
                                    ${R&&B`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${J.path}
                                            title="Upload files to this folder"
                                            onClick=${T5}
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
                <div class="workspace-preview-splitter-h" onMouseDown=${g4} onTouchStart=${f_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${O_} title="New file" disabled=${U0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!j1&&B`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>M1&&$1.current?.(U,D)}
                                    title=${F4}
                                    disabled=${!M1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${b4}
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
                                    <a class="workspace-download" href=${k8(U,b)}
                                        title="Download folder as zip" onClick=${(J)=>J.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:B`<button class="workspace-download" onClick=${v_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${P&&B`<div class="workspace-loading">Loading preview…</div>`}
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
    `}var kX=new Set(["kanban-editor","mindmap-editor"]);function MX(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function DZ(_,$,j){let Q=MX(_,$,j);return Q!=null&&kX.has(Q)}var IX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,xX=/\.(csv|tsv)$/i,TX=/\.pdf$/i,CX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,AZ=/\.drawio(\.xml|\.svg|\.png)?$/i;function EZ({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:K,onEditSource:N,previewTabs:G,paneOverrides:V,onToggleDock:X,dockVisible:U,onToggleZen:L,zenMode:H,onPopOutTab:A}){let[O,W]=g(null),D=I(null);v(()=>{if(!O)return;let F=(T)=>{if(T.type==="keydown"&&T.key!=="Escape")return;W(null)};return document.addEventListener("click",F),document.addEventListener("keydown",F),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",F)}},[O]),v(()=>{let F=(T)=>{if(T.ctrlKey&&T.key==="Tab"){if(T.preventDefault(),!_.length)return;let b=_.findIndex((t)=>t.id===$);if(T.shiftKey){let t=_[(b-1+_.length)%_.length];j?.(t.id)}else{let t=_[(b+1)%_.length];j?.(t.id)}return}if((T.ctrlKey||T.metaKey)&&T.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(T.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$,j,Q]);let E=C((F,T)=>{if(F.button===1){F.preventDefault(),Q?.(T);return}if(F.button===0)j?.(T)},[j,Q]),f=C((F,T)=>{F.preventDefault(),W({id:T,x:F.clientX,y:F.clientY})},[]),u=C((F)=>{F.preventDefault(),F.stopPropagation()},[]),c=C((F,T)=>{F.preventDefault(),F.stopPropagation(),Q?.(T)},[Q]);v(()=>{if(!$||!D.current)return;let F=D.current.querySelector(".tab-item.active");if(F)F.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let i=C((F)=>{if(!(V instanceof Map))return null;return V.get(F)||null},[V]),P=S0(()=>_.find((F)=>F.id===O?.id)||null,[O?.id,_]),M=S0(()=>{let F=O?.id;if(!F)return!1;return DZ(F,i(F),(T)=>h0.resolve(T))},[O?.id,i]);if(!_.length)return null;return B`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((F)=>B`
                <div
                    key=${F.id}
                    class=${`tab-item${F.id===$?" active":""}${F.dirty?" dirty":""}${F.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${F.id===$}
                    title=${F.path}
                    onMouseDown=${(T)=>E(T,F.id)}
                    onContextMenu=${(T)=>f(T,F.id)}
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
                        onMouseDown=${u}
                        onClick=${(T)=>c(T,F.id)}
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
        ${O&&B`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{Q?.(O.id),W(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),W(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),W(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(O.id),W(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${M&&N&&B`
                    <button onClick=${()=>{N(O.id),W(null)}}>Edit Source</button>
                `}
                ${A&&B`
                    <button onClick=${()=>{let F=_.find((T)=>T.id===O.id);A(O.id,F?.label),W(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{K(O.id),W(null)}}>
                        ${G?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${IX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(O.id),T=O.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(F)+"&name="+encodeURIComponent(T);window.open(b,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${xX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/csv-viewer/?path="+encodeURIComponent(O.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${TX.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/workspace/raw?path="+encodeURIComponent(O.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${CX.test(O.id)&&!AZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/image-viewer/?path="+encodeURIComponent(O.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
                ${AZ.test(O.id)&&B`
                    <hr />
                    <button onClick=${()=>{let F="/drawio/edit?path="+encodeURIComponent(O.id);window.open(F,"_blank","noopener"),W(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function PX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Q,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Q?" chat-only":""}${Z?" zen-mode":""}`}function kZ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:N,renameBranchNameDraft:G,renameBranchNameInputRef:V,setRenameBranchNameDraft:X,renameBranchDraftState:U,isRenamingBranch:L,addFileRef:H,openEditor:A,openTerminalTab:O,openVncTab:W,hasDockPanes:D,toggleDock:E,dockVisible:f,handleSplitterMouseDown:u,handleSplitterTouchStart:c,showEditorPaneContainer:i,tabStripTabs:P,tabStripActiveId:M,handleTabActivate:F,handleTabClose:T,handleTabCloseOthers:b,handleTabCloseAll:t,handleTabTogglePin:h,handleTabTogglePreview:s,handleTabEditSource:a,previewTabs:_0,tabPaneOverrides:q0,toggleZenMode:Z0,handlePopOutPane:K0,isWebAppMode:B0,editorContainerRef:U0,editorInstanceRef:u0,handleDockSplitterMouseDown:k0,handleDockSplitterTouchStart:O0,TERMINAL_TAB_PATH:b0,dockContainerRef:f0,handleEditorSplitterMouseDown:p0,handleEditorSplitterTouchStart:l0,searchQuery:D0,isIOSDevice:n0,currentBranchRecord:W0,currentChatJid:I0,currentChatBranches:d0,handleBranchPickerChange:o0,formatBranchPickerLabel:w1,openRenameCurrentBranchForm:Y1,handlePruneCurrentBranch:c0,currentHashtag:U1,handleBackToTimeline:$1,activeSearchScopeLabel:s0,posts:V0,isMainTimelineView:w0,hasMore:_1,loadMore:r,timelineRef:Y0,handleHashtagClick:m,addMessageRef:d,scrollToMessage:z0,openFileFromPill:A0,handleDeletePost:M0,handleOpenFloatingWidget:F0,agents:T0,userProfile:v0,removingPostIds:L0,agentStatus:y0,isCompactionStatus:H0,agentDraft:j0,agentPlan:y,agentThought:o,pendingRequest:X0,intentToast:J0,currentTurnId:g0,steerQueued:a0,handlePanelToggle:K1,btwSession:A1,closeBtwPanel:R1,handleBtwRetry:S_,handleBtwInject:$_,floatingWidget:v1,handleCloseFloatingWidget:o1,handleFloatingWidgetEvent:c1,extensionStatusPanels:t0,pendingExtensionPanelActions:s1,handleExtensionPanelAction:t_,searchOpen:j_,followupQueueItems:e_,handleInjectQueuedFollowup:p_,handleRemoveQueuedFollowup:E1,viewStateRef:a1,loadPosts:k1,scrollToBottom:L1,searchScope:B1,handleSearch:L_,setSearchScope:B_,enterSearchMode:x1,exitSearchMode:t1,fileRefs:q1,removeFileRef:T1,clearFileRefs:Q_,setFileRefsFromCompose:g1,messageRefs:_4,removeMessageRef:O_,clearMessageRefs:$4,setMessageRefsFromCompose:D_,handleCreateSessionFromCompose:z4,handleRestoreBranch:A_,attachActiveEditorFile:w_,followupQueueCount:u4,handleBtwIntercept:f4,handleMessageResponse:j1,handleComposeSubmitError:M1,handlePopOutChat:F4,isComposeBoxAgentActive:Z_,activeChatAgents:E_,connectionStatus:l1,activeModel:J1,activeModelUsage:u1,activeThinkingLevel:N1,supportsThinking:Y_,contextUsage:q_,notificationsEnabled:K_,notificationPermission:c_,handleToggleNotifications:b1,setActiveModel:f1,applyModelState:N_,setPendingRequest:R_,pendingRequestRef:W1,toggleWorkspace:k_}=_;return B`
    <div class=${PX({workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y})} ref=${$}>
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
      ${!Z&&B`
        <${OZ}
          onFileSelect=${H}
          visible=${j}
          active=${j||Q}
          onOpenEditor=${A}
          onOpenTerminalTab=${O}
          onOpenVncTab=${W}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&f)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${k_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${u} onTouchStart=${c}></div>
      `}
      ${i&&B`
        <div class="editor-pane-container">
          ${Y&&B`<div class="zen-hover-zone"></div>`}
          ${Q&&B`
            <${EZ}
              tabs=${P}
              activeId=${M}
              onActivate=${F}
              onClose=${T}
              onCloseOthers=${b}
              onCloseAll=${t}
              onTogglePin=${h}
              onTogglePreview=${s}
              onEditSource=${a}
              previewTabs=${_0}
              paneOverrides=${q0}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&f}
              onToggleZen=${Z0}
              zenMode=${Y}
              onPopOutTab=${B0?void 0:K0}
            />
          `}
          ${Q&&B`<div class="editor-pane-host" ref=${U0}></div>`}
          ${Q&&M&&_0.has(M)&&B`
            <${t8}
              getContent=${()=>u0.current?.getContent?.()}
              path=${M}
              onClose=${()=>s(M)}
            />
          `}
          ${D&&f&&B`<div class="dock-splitter" onMouseDown=${k0} onTouchStart=${O0}></div>`}
          ${D&&B`<div class=${`dock-panel${f?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!B0&&B`
                  <button class="dock-panel-action" onClick=${()=>K0(b0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
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
        ${Z&&B`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${W0?.agent_name?`@${W0.agent_name}`:I0}
              </span>
              <span class="chat-window-header-subtitle">${W0?.chat_jid||I0}</span>
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
              ${W0?.chat_jid&&B`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${Y1}
                  title=${L?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${L}
                >
                  ${L?"Renaming…":"Rename"}
                </button>
              `}
              ${W0?.chat_jid&&W0.chat_jid!==(W0.root_chat_jid||W0.chat_jid)&&B`
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
        <${ZZ}
          posts=${V0}
          hasMore=${w0?_1:!1}
          onLoadMore=${w0?r:void 0}
          timelineRef=${Y0}
          onHashtagClick=${m}
          onMessageRef=${d}
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
        <${U3}
          status=${H0(y0)?null:y0}
          draft=${j0}
          plan=${y}
          thought=${o}
          pendingRequest=${X0}
          intent=${J0}
          turnId=${g0}
          steerQueued=${a0}
          onPanelToggle=${K1}
          showExtensionPanels=${!1}
        />
        <${gQ}
          session=${A1}
          onClose=${R1}
          onRetry=${S_}
          onInject=${$_}
        />
        <${bQ}
          widget=${v1}
          onClose=${o1}
          onWidgetEvent=${c1}
        />
        <${U3}
          extensionPanels=${Array.from(t0.values())}
          pendingPanelActions=${s1}
          onExtensionPanelAction=${t_}
          turnId=${g0}
          steerQueued=${a0}
          onPanelToggle=${K1}
          showCorePanels=${!1}
        />
        <${X3}
          items=${j_?[]:e_}
          onInjectQueuedFollowup=${p_}
          onRemoveQueuedFollowup=${E1}
          onOpenFilePill=${A0}
        />
        <${vQ}
          onPost=${()=>{let{searchQuery:G1,searchOpen:u_}=a1.current||{};if(!G1&&!u_)k1(),L1()}}
          onFocus=${L1}
          searchMode=${j_}
          searchScope=${B1}
          onSearch=${L_}
          onSearchScopeChange=${B_}
          onEnterSearch=${x1}
          onExitSearch=${t1}
          fileRefs=${q1}
          onRemoveFileRef=${T1}
          onClearFileRefs=${Q_}
          onSetFileRefs=${g1}
          messageRefs=${_4}
          onRemoveMessageRef=${O_}
          onClearMessageRefs=${$4}
          onSetMessageRefs=${D_}
          onSwitchChat=${o0}
          onRenameSession=${N}
          isRenameSessionInProgress=${L}
          onCreateSession=${z4}
          onDeleteSession=${c0}
          onRestoreSession=${A_}
          activeEditorPath=${Z?null:M}
          onAttachEditorFile=${Z?void 0:w_}
          onOpenFilePill=${A0}
          followupQueueCount=${u4}
          followupQueueItems=${e_}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${p_}
          onRemoveQueuedFollowup=${E1}
          onSubmitIntercept=${f4}
          onMessageResponse=${j1}
          onSubmitError=${M1}
          onPopOutChat=${B0?void 0:F4}
          isAgentActive=${Z_}
          activeChatAgents=${E_}
          currentChatJid=${I0}
          connectionStatus=${l1}
          activeModel=${J1}
          modelUsage=${u1}
          thinkingLevel=${N1}
          supportsThinking=${Y_}
          contextUsage=${q_}
          notificationsEnabled=${K_}
          notificationPermission=${c_}
          onToggleNotifications=${b1}
          onModelChange=${f1}
          onModelStateChange=${N_}
          statusNotice=${H0(y0)?y0:null}
        />
        <${lQ}
          request=${X0}
          onRespond=${()=>{R_(null),W1.current=null}}
        />
      </div>
    </div>
  `}function a_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function MZ(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function I3(_,$){return _&&$}function IZ(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function xZ(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function TZ(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function CZ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Q,dismissedQueueRowIdsRef:Z,getAgentQueueState:Y,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:K}=_,N=++j.current,G=$;Y(G).then((V)=>{if(N!==j.current)return;if(Q.current!==G)return;let X=Z.current,U=R9(V?.items,X);if(U.length){q((L)=>u9(L,U)?L:U);return}X.clear(),K(0),q((L)=>L.length===0?L:[])}).catch(()=>{if(N!==j.current)return;if(Q.current!==G)return;q((V)=>V.length===0?V:[])})}async function PZ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Q,setContextUsage:Z}=_,Y=$;try{let q=await Q(Y);if(j.current!==Y)return;if(q)Z(q)}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch agent context:",q)}}async function yZ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:Y}=_,q=$;try{let K=await Q(q);if(j.current!==q)return;Z((N)=>dj(N,K)),Y((N)=>i8(N,"autoresearch"))}catch(K){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",K)}}function SZ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshQueueState:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_;$(),j(),Q(),Z(),Y(),q()}function wZ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Q}=_;if(a_($.current))j();Q()}function yX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function q6(_,$){return{text:_,totalLines:yX(_,$)}}function x3(_,$){return{text:$?.text||"",totalLines:z9(_),fullText:_}}function RZ(_,$,j){return j==="replace"?$:`${_||""}${$}`}function uZ(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function fZ(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function I5(_,$){return Boolean(_)&&!Boolean($)}function vZ(_,$){return _||$||null}function K6(_){return _?.turn_id||_?.turnId||null}function x5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function T3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function gZ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function SX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function bZ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:SX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function mZ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var wX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function hZ(_){return wX.has(String(_||"").trim())}function RX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function C3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(RX(_),{detail:Q})),!0}function pZ(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function cZ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function lZ(_,$,j){let{currentChatJid:Q,updateAgentProfile:Z,updateUserProfile:Y,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:N,draftBufferRef:G,thoughtBufferRef:V,steerQueuedTurnIdRef:X,thoughtExpandedRef:U,draftExpandedRef:L,draftThrottleRef:H,thoughtThrottleRef:A,viewStateRef:O,followupQueueItemsRef:W,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:f,loadMoreRef:u,lastAgentResponseRef:c,wasAgentActiveRef:i,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:M,setFloatingWidget:F,clearLastActivityFlag:T,handleUiVersionDrift:b,setAgentStatus:t,setAgentDraft:h,setAgentPlan:s,setAgentThought:a,setPendingRequest:_0,clearAgentRunState:q0,getAgentStatus:Z0,noteAgentActivity:K0,showLastActivity:B0,refreshTimeline:U0,refreshModelAndQueueState:u0,refreshActiveChatAgents:k0,refreshCurrentChatBranches:O0,notifyForFinalResponse:b0,setContextUsage:f0,refreshContextUsage:p0,refreshQueueState:l0,setFollowupQueueItems:D0,clearQueuedSteerStateIfStale:n0,setSteerQueuedTurnId:W0,applyModelState:I0,getAgentContext:d0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:w1,refreshActiveEditorFromWorkspace:Y1,showIntentToast:c0,removeStalledPost:U1,setPosts:$1,preserveTimelineScrollTop:s0}=j,{turnId:V0,isCurrentChatEvent:w0}=pZ(_,$,Q);if(w0)Z($),Y($);if(_==="ui_theme"){I7($);return}let _1=gZ(_);if(_1.kind==="update"){if(!w0)return;if(_1.shouldAdoptTurn&&I5(V0,q.current))P(V0);M($,_1.fallbackStatus||"streaming");return}if(_1.kind==="close"){if(!w0)return;F((m)=>UQ(m,$));return}if(_?.startsWith("agent_")&&!cZ(_))T();if(_==="connected"){if(b($?.app_asset_version))return;t(null),h({text:"",totalLines:0}),s(""),a({text:"",totalLines:0}),_0(null),N.current=null,q0();let m=Q;if(Z0(m).then((d)=>{if(K.current!==m)return;if(!d||d.status!=="active"||!d.data)return;let z0=d.data,A0=K6(z0);if(A0)P(A0);K0({clearSilence:!0}),B0(z0);let M0=x5(d.thought);if(M0)V.current=M0.text,a(M0);let F0=x5(d.draft);if(F0)G.current=F0.text,h(F0)}).catch((d)=>{console.warn("Failed to fetch agent status:",d)}),a_(O.current))U0();u0();return}if(_==="agent_status"){if(!w0){if($?.type==="done"||$?.type==="error")k0(),O0();return}if($.type==="done"||$.type==="error"){if(s4(V0,q.current))return;if($.type==="done"){if(b0(V0||q.current),a_(O.current))U0();if($.context_usage)f0($.context_usage)}if(p0(),i.current=!1,q0(),D.current.clear(),k0(),l0(),h({text:"",totalLines:0}),s(""),a({text:"",totalLines:0}),_0(null),$.type==="error")t({type:"error",title:$.title||"Agent error"}),setTimeout(()=>t(null),8000);else t(null)}else{if(V0)P(V0);if(K0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",V.current="",h({text:"",totalLines:0}),s(""),a({text:"",totalLines:0});t((m)=>{if(m&&m.type===$.type&&m.title===$.title)return m;return $})}return}if(_==="agent_steer_queued"){if(!w0)return;if(s4(V0,q.current))return;let m=vZ(V0,q.current);if(!m)return;X.current=m,W0(m);return}if(_==="agent_followup_queued"){if(!w0)return;D0((m)=>f9(m,$)),l0();return}if(_==="agent_followup_consumed"){if(!w0)return;let m=k5(W.current,$);if(m)n0(m.remainingQueueCount),D0((d)=>S4(d,m.rowId).items);if(l0(),a_(O.current))U0();return}if(_==="agent_followup_removed"){if(!w0)return;let m=k5(W.current,$);if(m)D.current.add(m.rowId),n0(m.remainingQueueCount),D0((d)=>S4(d,m.rowId).items);l0();return}if(_==="agent_draft_delta"){if(!w0)return;if(s4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0}),G.current=uZ(G.current,$);let m=Date.now();if(!H.current||m-H.current>=100){H.current=m;let d=G.current;if(L.current)h((z0)=>x3(d,z0));else h(q6(d,null))}return}if(_==="agent_draft"){if(!w0)return;if(s4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0});let m=$.text||"",d=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")s((z0)=>RZ(z0,m,d));else if(!L.current)G.current=m,h(q6(m,$.total_lines));return}if(_==="agent_thought_delta"){if(!w0)return;if(s4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0}),V.current=fZ(V.current,$);let m=Date.now();if(U.current&&(!A.current||m-A.current>=100)){A.current=m;let d=V.current;a((z0)=>x3(d,z0))}return}if(_==="agent_thought"){if(!w0)return;if(s4(V0,q.current))return;if(I5(V0,q.current))P(V0);K0({running:!0,clearSilence:!0});let m=$.text||"";if(!U.current)V.current=m,a(q6(m,$.total_lines));return}if(_==="model_changed"){if(!w0)return;I0($);let m=Q;d0(m).then((d)=>{if(K.current!==m)return;if(d)f0(d)}).catch(()=>{});return}let r=bZ(_,$,Q);if(r.isStatusPanelWidgetEvent){if(r.eventChatJid!==Q)return;if(!r.panelKey)return;if(o0((m)=>ij(m,$)),rj($))w1((m)=>i8(m,r.panelKey));C3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));Y1($?.updates);return}if(hZ(_)){if(!w0)return;C3(_,$);let m=mZ(_,$);if(m)c0(m.title,m.detail,m.kind,m.durationMs);return}let Y0=a_(O.current);if(_==="agent_response"){if(!w0)return;U1(),c.current={post:$,turnId:q.current}}if(MZ(_,w0,Y0))$1((m)=>IZ(m,$)),E.current?.();if(_==="interaction_updated"){if(!I3(w0,Y0))return;$1((m)=>xZ(m,$))}if(_==="interaction_deleted"){if(!I3(w0,Y0))return;let m=$?.ids||[];if(m.length){if(s0(()=>{$1((d)=>TZ(d,m))}),f.current)u.current?.({preserveScroll:!0,preserveMode:"top"})}}}async function nZ(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Q,wasAgentActiveRef:Z,viewStateRef:Y,refreshTimeline:q,clearAgentRunState:K,agentStatusRef:N,pendingRequestRef:G,thoughtBufferRef:V,draftBufferRef:X,setAgentStatus:U,setAgentDraft:L,setAgentPlan:H,setAgentThought:A,setPendingRequest:O,setActiveTurn:W,noteAgentActivity:D,clearLastActivityFlag:E}=_,f=$;try{let u=await j(f);if(Q.current!==f)return null;if(!u||u.status!=="active"||!u.data){if(Z.current&&a_(Y.current))q();return Z.current=!1,K(),N.current=null,U(null),L({text:"",totalLines:0}),H(""),A({text:"",totalLines:0}),O(null),G.current=null,u??null}Z.current=!0;let c=u.data;N.current=c;let i=K6(c);if(i)W(i);D({running:!0,clearSilence:!0}),E(),U(c);let P=x5(u.thought);if(P)A((F)=>{if(T3(F,P.text))return F;return V.current=P.text,P});let M=x5(u.draft);if(M)L((F)=>{if(T3(F,M.text))return F;return X.current=M.text,M});return u}catch(u){return console.warn("Failed to fetch agent status:",u),null}}async function dZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Q,silentRecoveryRef:Z,silenceRefreshMs:Y,viewStateRef:q,refreshTimeline:K,refreshQueueState:N,refreshAgentStatus:G,now:V=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let X=Q.current||null,U=Z.current,L=V();if(U.inFlight)return null;if(U.turnId===X&&L-U.lastAttemptAt<Y)return null;U.inFlight=!0,U.lastAttemptAt=L,U.turnId=X;try{if(a_(q.current))await K();return await N(),await G()}finally{U.inFlight=!1}}function iZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Q,lastSilenceNoticeRef:Z,agentStatusRef:Y,silenceWarningMs:q,silenceFinalizeMs:K,silenceRefreshMs:N,isCompactionStatus:G,setAgentStatus:V,reconcileSilentTurn:X,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let L=Q.current;if(!L)return;let H=U(),A=H-L,O=G(Y.current);if(A>=K){if(!O)V({type:"waiting",title:"Re-syncing after a quiet period…"});X();return}if(A>=q&&H-Z.current>=N){if(!O){let W=Math.floor(A/1000);V({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Z.current=H,X()}}function rZ(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:Q,currentTurnIdRef:Z,thoughtExpandedRef:Y,draftExpandedRef:q,draftBufferRef:K,thoughtBufferRef:N,pendingRequestRef:G,lastAgentResponseRef:V,stalledPostIdRef:X,scrollToBottomRef:U,setCurrentTurnId:L,setAgentDraft:H,setAgentPlan:A,setAgentThought:O,setPendingRequest:W,setAgentStatus:D,setPosts:E,dedupePosts:f,now:u=()=>Date.now(),nowIso:c=()=>new Date().toISOString()}=_;if(!$.current)return;$.current=!1,j.current=0,Q.current=null,Z.current=null,L(null),Y.current=!1,q.current=!1;let i=(K.current||"").trim();if(K.current="",N.current="",H({text:"",totalLines:0}),A(""),O({text:"",totalLines:0}),W(null),G.current=null,V.current=null,!i){D({type:"error",title:"Response stalled - No content received"});return}let M=`${i}${`

⚠️ Response may be incomplete - the model stopped responding`}`,F=u(),T=c(),b={id:F,timestamp:T,data:{type:"agent_response",content:M,agent_id:"default",is_local_stall:!0}};X.current=F,E((t)=>t?f([...t,b]):[b]),U.current?.(),D(null)}function oZ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Q,minWidth:Z=160,maxWidth:Y=600,fallbackWidth:q=280}=_,K=$("sidebarWidth",null),N=Number.isFinite(K)?Math.min(Math.max(Number(K),Z),Y):q;if(j.current=N,Q)Q.style.setProperty("--sidebar-width",`${N}px`);return N}async function sZ(_){let{currentHashtag:$,searchQuery:j,searchScope:Q,currentChatJid:Z,currentRootChatJid:Y,loadPosts:q,searchPosts:K,setPosts:N,setHasMore:G,scrollToBottom:V,isCancelled:X,scheduleRaf:U=(A)=>requestAnimationFrame(A),scheduleTimeout:L=(A,O)=>{setTimeout(A,O)}}=_,H=()=>{if(X())return;U(()=>{if(X())return;L(()=>{if(X())return;V()},0)})};if($){await q($);return}if(j){try{let A=await K(j,50,0,Z,Q,Y);if(X())return;N(Array.isArray(A?.results)?A.results:[]),G(!1)}catch(A){if(X())return;console.error("Failed to search:",A),N([]),G(!1)}return}try{await q(),H()}catch(A){if(X())return;console.error("Failed to load timeline:",A)}}function P3(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Q=Array.isArray(_)?_:[];if(Q.includes(j))return Q;return[...Q,j]}function y3(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Q=$.trim();if(!Q)return j;if(!j.includes(Q))return j;return j.filter((Z)=>Z!==Q)}function S3(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Q of _){if(typeof Q!=="string")continue;let Z=Q.trim();if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function aZ(_){let{hashtag:$,setCurrentHashtag:j,setPosts:Q,loadPosts:Z}=_;j($),Q(null),await Z($)}async function tZ(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:Q,loadPosts:Z}=_;$(null),j(null),Q(null),await Z()}async function eZ(_){let{query:$,scope:j,currentChatJid:Q,currentRootChatJid:Z,searchPosts:Y,setSearchScope:q,setSearchQuery:K,setCurrentHashtag:N,setPosts:G,setHasMore:V}=_,X=typeof $==="string"?$.trim():"";if(!X)return;let U=j==="root"||j==="all"?j:"current";q(U),K(X),N(null),G(null);try{let L=await Y(X,50,0,Q,U,Z);G(Array.isArray(L?.results)?L.results:[]),V(!1)}catch(L){console.error("Failed to search:",L),G([])}}async function _Y(_){let{post:$,posts:j,currentChatJid:Q,deletePost:Z,preserveTimelineScrollTop:Y,setPosts:q,setRemovingPostIds:K,hasMoreRef:N,loadMoreRef:G,confirm:V=(W)=>window.confirm(W),showAlert:X=(W)=>alert(W),scheduleTimeout:U=(W,D)=>{setTimeout(W,D)}}=_;if(!$)return;let L=$.id,H=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():Q,A=j?.filter((W)=>W?.data?.thread_id===L&&W?.id!==L).length||0;if(A>0){if(!V(`Delete this message and its ${A} replies?`))return}let O=(W)=>{if(!W.length)return;K((D)=>{let E=new Set(D);return W.forEach((f)=>E.add(f)),E}),U(()=>{if(Y(()=>{q((D)=>D?D.filter((E)=>!W.includes(E.id)):D)}),K((D)=>{let E=new Set(D);return W.forEach((f)=>E.delete(f)),E}),N.current)G.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let W=await Z(L,A>0,H);if(W?.ids?.length)O(W.ids)}catch(W){let D=W instanceof Error?W.message:String(W||"");if(A===0&&D.includes("Replies exist")){if(!V("Delete this message and its replies?"))return;let f=await Z(L,!0,H);if(f?.ids?.length)O(f.ids);return}console.error("Failed to delete post:",W),X(`Failed to delete message: ${D}`)}}async function $Y(_){let{id:$,targetChatJid:j,currentChatJid:Q,getThread:Z,setPosts:Y,getElementById:q=(X)=>document.getElementById(X),scheduleRaf:K=(X)=>requestAnimationFrame(X),scheduleTimeout:N=(X,U)=>{setTimeout(X,U)}}=_,G=(X)=>{X.scrollIntoView({behavior:"smooth",block:"center"}),X.classList.add("post-highlight"),N(()=>X.classList.remove("post-highlight"),2000)},V=q(`post-${$}`);if(V){G(V);return}try{let X=typeof j==="string"&&j.trim()?j.trim():Q,L=(await Z($,X))?.thread?.[0];if(!L)return;Y((H)=>{if(!H)return[L];if(H.some((A)=>A.id===L.id))return H;return[...H,L]}),K(()=>{N(()=>{let H=q(`post-${$}`);if(H)G(H)},50)})}catch(X){console.error("[scrollToMessage] Failed to fetch message",$,X)}}function jY(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function QY(_){let{question:$,currentChatJid:j,streamSidePrompt:Q,resolveBtwChatJid:Z,showIntentToast:Y,btwAbortRef:q,setBtwSession:K}=_,N=String($||"").trim();if(!N)return Y("BTW needs a question","Usage: /btw <question>","warning"),!0;if(q.current)q.current.abort();let G=new AbortController;q.current=G,K({question:N,answer:"",thinking:"",error:null,model:null,status:"running"});try{let V=await Q(N,{signal:G.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(X)=>{if(X==="side_prompt_start")K((U)=>U?{...U,status:"running"}:U)},onThinkingDelta:(X)=>{K((U)=>U?{...U,thinking:`${U.thinking||""}${X||""}`}:U)},onTextDelta:(X)=>{K((U)=>U?{...U,answer:`${U.answer||""}${X||""}`}:U)}});if(q.current!==G)return!0;K((X)=>X?{...X,answer:V?.result||X.answer||"",thinking:V?.thinking||X.thinking||"",model:V?.model||null,status:"success",error:null}:X)}catch(V){if(G.signal.aborted)return!0;K((X)=>X?{...X,status:"error",error:V?.payload?.error||V?.message||"BTW request failed."}:X)}finally{if(q.current===G)q.current=null}return!0}async function ZY(_){let{content:$,parseBtwCommand:j,closeBtwPanel:Q,runBtwPrompt:Z,showIntentToast:Y}=_,q=j($);if(!q)return!1;if(q.type==="help")return Y("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(q.type==="clear")return Q(),Y("BTW cleared","Closed the side conversation panel.","info"),!0;if(q.type==="ask")return await Z(q.question),!0;return!1}async function YY(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:Q,currentChatJid:Z,sendAgentMessage:Y,handleMessageResponse:q,showIntentToast:K}=_,N=j($);if(!N)return!1;try{let G=await Y("default",N,null,[],Q?"queue":null,Z);return q(G),K(G?.queued==="followup"?"BTW queued":"BTW injected",G?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(G){return K("BTW inject failed",G?.message||"Could not inject BTW answer into chat.","warning"),!1}}var uX=Xj(),qY=y6,fX=w6,vX=u6,gX=m6,bX=h6,w3=f6,R3=__(r1,"getAgentContext",null),mX=__(r1,"getAutoresearchStatus",null),hX=__(r1,"stopAutoresearch",{status:"ok"}),pX=__(r1,"dismissAutoresearch",{status:"ok"}),KY=__(r1,"getAgentModels",{current:null,models:[]}),NY=__(r1,"getActiveChatAgents",{chats:[]}),N6=__(r1,"getChatBranches",{chats:[]}),cX=__(r1,"renameChatBranch",null),lX=__(r1,"pruneChatBranch",null),nX=__(r1,"restoreChatBranch",null),GY=__(r1,"getAgentQueueState",{count:0}),XY=__(r1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),VY=__(r1,"removeAgentQueueItem",{removed:!1}),dX=__(r1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});h0.register(s6);h0.register(P$);h0.register(C$);h0.register(y$);h0.register(S$);h0.register(w$);h0.register(u$);h0.register(f$);h0.register(g$);h0.register(h$);h0.register(p$);h0.register(D$);a6();h0.register(_$);h0.register($$);function iX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:N}=S0(()=>Lj(_),[_]),[G,V]=g("disconnected"),[X,U]=g(()=>X4()),[L,H]=g(null),[A,O]=g(null),[W,D]=g(!1),[E,f]=g("current"),[u,c]=g([]),[i,P]=g([]),[M,F]=g(null),{agentStatus:T,setAgentStatus:b,agentDraft:t,setAgentDraft:h,agentPlan:s,setAgentPlan:a,agentThought:_0,setAgentThought:q0,pendingRequest:Z0,setPendingRequest:K0,currentTurnId:B0,setCurrentTurnId:U0,steerQueuedTurnId:u0,setSteerQueuedTurnId:k0,lastAgentEventRef:O0,lastSilenceNoticeRef:b0,isAgentRunningRef:f0,draftBufferRef:p0,thoughtBufferRef:l0,pendingRequestRef:D0,stalledPostIdRef:n0,currentTurnIdRef:W0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:d0,draftExpandedRef:o0}=N9(),[w1,Y1]=g({}),[c0,U1]=g(null),[$1,s0]=g(null),[V0,w0]=g(!1),[_1,r]=g(null),[Y0,m]=g([]),[d,z0]=g([]),[A0,M0]=g(null),[F0,T0]=g(()=>new Map),[v0,L0]=g(()=>new Set),[y0,H0]=g([]),[j0,y]=g(!1),[o,X0]=g(()=>Uj()),[J0,g0]=g(null),a0=I(new Set),K1=S0(()=>Y0.find((x)=>x?.chat_jid===j)||null,[Y0,j]),A1=S0(()=>d.find((x)=>x?.chat_jid===j)||K1||null,[K1,d,j]),R1=A1?.root_chat_jid||K1?.root_chat_jid||j,S_=Vj(E),[$_,v1]=g(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),o1=y0.length,c1=I(new Set),t0=I([]),s1=I(new Set),t_=I(0),j_=I({inFlight:!1,lastAttemptAt:0,turnId:null});c1.current=new Set(y0.map((x)=>x.row_id)),t0.current=y0;let{notificationsEnabled:e_,notificationPermission:p_,toggleNotifications:E1,notify:a1}=q9(),[k1,L1]=g(()=>new Set),[B1,L_]=g(()=>O5("workspaceOpen",!0)),B_=I(null),{editorOpen:x1,tabStripTabs:t1,tabStripActiveId:q1,previewTabs:T1,tabPaneOverrides:Q_,openEditor:g1,closeEditor:_4,handleTabClose:O_,handleTabActivate:$4,handleTabCloseOthers:D_,handleTabCloseAll:z4,handleTabTogglePin:A_,handleTabTogglePreview:w_,handleTabEditSource:u4,revealInExplorer:f4}=X9({onTabClosed:(x)=>B_.current?.(x)}),j1=I(null),M1=I(null),F4=I(null),Z_=I(null),E_=h0.getDockPanes().length>0,[l1,J1]=g(!1),u1=C(()=>J1((x)=>!x),[]),N1=C(()=>{g1(L5,{label:"Terminal"})},[g1]),Y_=C(()=>{g1(B4,{label:"VNC"})},[g1]),q_=S0(()=>e9(t1,q1),[q1,t1]),K_=S0(()=>_j(Q_,q1),[Q_,q1]),c_=S0(()=>$j(q,q_,Y),[q_,q,Y]),b1=S0(()=>jj(t1,T1,q1),[T1,q1,t1]),f1=S0(()=>Qj(Y,B4),[Y]),N_=S0(()=>Zj(Y,L5,b1,f1),[f1,b1,Y]),R_=Yj(Z,Q,x1,E_,l1),[W1,k_]=g(!1),G1=I(!1),u_=C(()=>{if(!x1||Q)return;if(G1.current=l1,l1)J1(!1);k_(!0)},[x1,Q,l1]),M_=C(()=>{if(!W1)return;if(k_(!1),G1.current)J1(!0),G1.current=!1},[W1]),v4=C(()=>{if(W1)M_();else u_()},[W1,u_,M_]);v(()=>{if(W1&&!x1)M_()},[W1,x1,M_]),v(()=>{if(!Z||!Y)return;if(r0.getActiveId()===Y)return;g1(Y,q?{label:q}:void 0)},[g1,q,Z,Y]),v(()=>{let x=j1.current;if(!x)return;if(M1.current)M1.current.dispose(),M1.current=null;let e=q1;if(!e)return;let E0={path:e,mode:"edit"},e0=(K_?h0.get(K_):null)||h0.resolve(E0)||h0.get("editor");if(!e0){x.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let R0=e0.mount(x,E0);M1.current=R0,R0.onDirtyChange?.((I1)=>{r0.setDirty(e,I1)}),R0.onSaveRequest?.(()=>{}),R0.onClose?.(()=>{_4()});let Q1=r0.getViewState(e);if(Q1&&typeof R0.restoreViewState==="function")requestAnimationFrame(()=>R0.restoreViewState(Q1));if(typeof R0.onViewStateChange==="function")R0.onViewStateChange((I1)=>{r0.saveViewState(e,I1)});return requestAnimationFrame(()=>R0.focus()),()=>{if(M1.current===R0)R0.dispose(),M1.current=null}},[q1,K_,_4]);let g4=C(async(x)=>{let e=typeof q1==="string"?q1.trim():"",E0=M1.current;if(!e||!E0?.setContent)return;if(typeof E0.isDirty==="function"&&E0.isDirty())return;if(!(Array.isArray(x)&&x.length>0?x.some((R0)=>{let Q1=Array.isArray(R0?.changed_paths)?R0.changed_paths.map((p1)=>typeof p1==="string"?p1.trim():"").filter(Boolean):[];if(Q1.length>0)return Q1.some((p1)=>p1==="."||p1===e);let I1=typeof R0?.path==="string"?R0.path.trim():"";return!I1||I1==="."||I1===e}):!0))return;try{let R0=await g5(e,1e6,"edit"),Q1=typeof R0?.text==="string"?R0.text:"",I1=typeof R0?.mtime==="string"&&R0.mtime.trim()?R0.mtime.trim():new Date().toISOString();E0.setContent(Q1,I1)}catch(R0){console.warn("[workspace_update] Failed to refresh active pane:",R0)}},[q1]);v(()=>{let x=F4.current;if(Z_.current)Z_.current.dispose(),Z_.current=null;if(!x||!E_||!l1)return;let e=h0.getDockPanes()[0];if(!e){x.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let E0=e.mount(x,{mode:"view"});return Z_.current=E0,requestAnimationFrame(()=>E0.focus?.()),()=>{if(Z_.current===E0)E0.dispose(),Z_.current=null}},[E_,l1]);let[f_,v_]=g({name:"You",avatar_url:null,avatar_background:null}),b4=I(null),j4=I(!1),a4=I(!1),Q4=I(!1),l_=I(null),n1=I(j),H4=I(new Map),J4=I(j),T5=I(0),O1=I(0),O4=I({}),t4=I({name:null,avatar_url:null}),G_=I({currentHashtag:null,searchQuery:null,searchOpen:!1}),X_=I(null),Z4=I(null),m4=I(0),h4=I(0),e4=I(0),Y4=I(null),I_=I(null),_5=I(null),D4=I(null),p4=I(0),x_=I({title:null,avatarBase:null}),J=I(null),k=I(!1),[R,S]=g(!1),n=I(0),[Q0,N0]=g(!1),[G0,$0]=g(""),C0=S0(()=>c8(G0,A1?.agent_name||""),[A1?.agent_name,G0]),P1=I(null),e1=C(()=>{if(J.current)clearTimeout(J.current),J.current=null;F(null)},[]);W9(30000),v(()=>{if(!Q0)return;requestAnimationFrame(()=>{if(Q0)P1.current?.focus(),P1.current?.select?.()})},[Q0]),v(()=>{return M7()},[]),v(()=>{return r9(U)},[]),v(()=>{Z1("workspaceOpen",String(B1))},[B1]),v(()=>{return i9()},[]),v(()=>{return()=>{e1()}},[e1]),v(()=>{if(!o){Z1(BTW_SESSION_KEY,"");return}Z1(BTW_SESSION_KEY,JSON.stringify({question:o.question||"",answer:o.answer||"",thinking:o.thinking||"",error:o.error||null,status:o.status||"success"}))},[o]),v(()=>{O4.current=w1||{}},[w1]),v(()=>{n1.current=j},[j]),v(()=>{t4.current=f_||{name:"You",avatar_url:null,avatar_background:null}},[f_]);let m1=C((x,e,E0=null)=>{if(typeof document>"u")return;let e0=(x||"").trim()||"PiClaw";if(x_.current.title!==e0){document.title=e0;let g_=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(g_&&g_.getAttribute("content")!==e0)g_.setAttribute("content",e0);x_.current.title=e0}let R0=document.getElementById("dynamic-favicon");if(!R0)return;let Q1=R0.getAttribute("data-default")||R0.getAttribute("href")||"/favicon.ico",I1=e||Q1,p1=e?`${I1}|${E0||""}`:I1;if(x_.current.avatarBase!==p1){let g_=e?`${I1}${I1.includes("?")?"&":"?"}v=${E0||Date.now()}`:I1;R0.setAttribute("href",g_),x_.current.avatarBase=p1}},[]),C5=C((x)=>{c((e)=>P3(e,x))},[]),z=C((x)=>{c((e)=>y3(e,x))},[]);B_.current=z;let w=C(()=>{c([])},[]),l=C((x)=>{c(S3(x))},[]),p=C((x,e=null,E0="info",e0=3000)=>{e1(),F({title:x,detail:e||null,kind:E0||"info"}),J.current=setTimeout(()=>{F((R0)=>R0?.title===x?null:R0)},e0)},[e1]),x0=C((x)=>{let e=H9(x,{editorOpen:x1,resolvePane:(E0)=>h0.resolve(E0)});if(e.kind==="open"){g1(e.path);return}if(e.kind==="toast")p(e.title,e.detail,e.level)},[x1,g1,p]),z1=C(()=>{let x=q1;if(x)C5(x)},[q1,C5]),C1=C((x)=>{P((e)=>P3(e,x))},[]),y1=C(async(x,e=null)=>{await $Y({id:x,targetChatJid:e,currentChatJid:j,getThread:S6,setPosts:W_})},[j,W_]),q4=C((x)=>{P((e)=>y3(e,x))},[]),c4=C(()=>{P([])},[]),$5=C((x)=>{P(S3(x))},[]),j5=C((x)=>{let e=typeof x==="string"&&x.trim()?x.trim():"Could not send your message.";p("Compose failed",e,"error",5000)},[p]),K4=C((x={})=>{let e=Date.now();if(O0.current=e,x.running)f0.current=!0,y((E0)=>E0?E0:!0);if(x.clearSilence)b0.current=0},[y]),h1=C(()=>{if(D4.current)clearTimeout(D4.current),D4.current=null;p4.current=0},[]);v(()=>()=>{h1()},[h1]);let Q5=C(()=>{h1(),b((x)=>{if(!x)return x;if(!(x.last_activity||x.lastActivity))return x;let{last_activity:e,lastActivity:E0,...e0}=x;return e0})},[h1]),A4=C((x)=>{if(!x)return;h1();let e=Date.now();p4.current=e,b({type:x.type||"active",last_activity:!0}),D4.current=setTimeout(()=>{if(p4.current!==e)return;b((E0)=>{if(!E0||!(E0.last_activity||E0.lastActivity))return E0;return null})},U9)},[h1]),F1=C(()=>{f0.current=!1,y(!1),O0.current=null,b0.current=0,p0.current="",l0.current="",D0.current=null,I_.current=null,W0.current=null,I0.current=null,l_.current=null,j_.current={inFlight:!1,lastAttemptAt:0,turnId:null},h1(),U0(null),k0(null),d0.current=!1,o0.current=!1},[h1,U0,k0,y]),n_=C((x)=>{if(!k9({remainingQueueCount:x,currentTurnId:W0.current,isAgentTurnActive:j0}))return;I0.current=null,k0(null)},[j0,k0]),Z5=C(()=>lj({agentStatus:T,agentDraft:t,agentPlan:s,agentThought:_0,pendingRequest:Z0,currentTurnId:B0,steerQueuedTurnId:u0,isAgentTurnActive:j0,followupQueueItems:y0,activeModel:c0,activeThinkingLevel:$1,supportsThinking:V0,activeModelUsage:_1,contextUsage:A0,isAgentRunning:f0.current,wasAgentActive:Q4.current,draftBuffer:p0.current,thoughtBuffer:l0.current,lastAgentEvent:O0.current,lastSilenceNotice:b0.current,lastAgentResponse:I_.current,currentTurnIdRef:W0.current,steerQueuedTurnIdRef:I0.current,thoughtExpanded:d0.current,draftExpanded:o0.current,agentStatusRef:l_.current,silentRecovery:j_.current}),[c0,_1,$1,t,s,T,_0,A0,B0,y0,j0,Z0,u0,V0]),Y8=C((x)=>{nj({snapshot:x,clearLastActivityTimer:h1,refs:{isAgentRunningRef:f0,wasAgentActiveRef:Q4,lastAgentEventRef:O0,lastSilenceNoticeRef:b0,draftBufferRef:p0,thoughtBufferRef:l0,pendingRequestRef:D0,lastAgentResponseRef:I_,currentTurnIdRef:W0,steerQueuedTurnIdRef:I0,agentStatusRef:l_,silentRecoveryRef:j_,thoughtExpandedRef:d0,draftExpandedRef:o0},setters:{setIsAgentTurnActive:y,setAgentStatus:b,setAgentDraft:h,setAgentPlan:a,setAgentThought:q0,setPendingRequest:K0,setCurrentTurnId:U0,setSteerQueuedTurnId:k0,setFollowupQueueItems:H0,setActiveModel:U1,setActiveThinkingLevel:s0,setSupportsThinking:w0,setActiveModelUsage:r,setContextUsage:M0}})},[h1,U0,H0,y,k0]),Y5=C((x)=>{if(!x)return;if(W0.current===x)return;W0.current=x,j_.current={inFlight:!1,lastAttemptAt:0,turnId:x},U0(x),I0.current=null,k0(null),p0.current="",l0.current="",h({text:"",totalLines:0}),a(""),q0({text:"",totalLines:0}),K0(null),D0.current=null,I_.current=null,d0.current=!1,o0.current=!1},[U0,k0]),E4=C((x)=>{if(typeof document<"u"){let g_=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&g_)return}let e=I_.current;if(!e||!e.post)return;if(x&&e.turnId&&e.turnId!==x)return;let E0=e.post;if(E0.id&&Y4.current===E0.id)return;let e0=String(E0?.data?.content||"").trim();if(!e0)return;Y4.current=E0.id||Y4.current,I_.current=null;let R0=e0.replace(/\s+/g," ").slice(0,200),Q1=O4.current||{},p1=(E0?.data?.agent_id?Q1[E0.data.agent_id]:null)?.name||"Pi";a1(p1,R0)},[a1]),T_=C(async(x,e)=>{await F9({panelKey:x,expanded:e,currentTurnIdRef:W0,thoughtExpandedRef:d0,draftExpandedRef:o0,setAgentThoughtVisibility:bX,getAgentThought:gX,thoughtBufferRef:l0,draftBufferRef:p0,setAgentThought:q0,setAgentDraft:h})},[]),k4=I(null),P5=C(()=>{let x=X_.current;if(!x)return;if(!(Math.abs(x.scrollTop)>150))x.scrollTop=0},[]);k4.current=P5;let G6=C((x)=>{let e=X_.current;if(!e||typeof x!=="function"){x?.();return}let{currentHashtag:E0,searchQuery:e0,searchOpen:R0}=G_.current||{},Q1=!((e0||R0)&&!E0),I1=Q1?e.scrollHeight-e.scrollTop:e.scrollTop;x(),requestAnimationFrame(()=>{let p1=X_.current;if(!p1)return;if(Q1){let g_=Math.max(p1.scrollHeight-I1,0);p1.scrollTop=g_}else{let g_=Math.max(p1.scrollHeight-p1.clientHeight,0),nY=Math.min(I1,g_);p1.scrollTop=nY}})},[]),q8=C((x)=>{let e=X_.current;if(!e||typeof x!=="function"){x?.();return}let E0=e.scrollTop;x(),requestAnimationFrame(()=>{let e0=X_.current;if(!e0)return;let R0=Math.max(e0.scrollHeight-e0.clientHeight,0);e0.scrollTop=Math.min(E0,R0)})},[]),u3=C((x)=>w9(x,c1.current),[]),{posts:K8,setPosts:W_,hasMore:UY,setHasMore:X6,hasMoreRef:f3,loadPosts:d_,refreshTimeline:C_,loadMore:LY,loadMoreRef:v3}=K9({preserveTimelineScroll:G6,preserveTimelineScrollTop:q8,chatJid:j}),q5=S0(()=>u3(K8),[K8,y0,u3]),N8=C(()=>{let x=n0.current;if(!x)return;W_((e)=>e?e.filter((E0)=>E0.id!==x):e),n0.current=null},[W_]),{handleSplitterMouseDown:BY,handleSplitterTouchStart:WY,handleEditorSplitterMouseDown:zY,handleEditorSplitterTouchStart:FY,handleDockSplitterMouseDown:HY,handleDockSplitterTouchStart:JY}=G9({appShellRef:Z4,sidebarWidthRef:m4,editorWidthRef:h4,dockHeightRef:e4}),g3=C(()=>{rZ({isAgentRunningRef:f0,lastSilenceNoticeRef:b0,lastAgentEventRef:O0,currentTurnIdRef:W0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftBufferRef:p0,thoughtBufferRef:l0,pendingRequestRef:D0,lastAgentResponseRef:I_,stalledPostIdRef:n0,scrollToBottomRef:k4,setCurrentTurnId:U0,setAgentDraft:h,setAgentPlan:a,setAgentThought:q0,setPendingRequest:K0,setAgentStatus:b,setPosts:W_,dedupePosts:_8})},[U0]);v(()=>{G_.current={currentHashtag:L,searchQuery:A,searchOpen:W}},[L,A,W]);let D1=C(()=>{CZ({currentChatJid:j,queueRefreshGenRef:t_,activeChatJidRef:n1,dismissedQueueRowIdsRef:s1,getAgentQueueState:GY,setFollowupQueueItems:H0,clearQueuedSteerStateIfStale:n_})},[n_,j]),V_=C(async()=>{await PZ({currentChatJid:j,activeChatJidRef:n1,getAgentContext:R3,setContextUsage:M0})},[j]),i_=C(async()=>{await yZ({currentChatJid:j,activeChatJidRef:n1,getAutoresearchStatus:mX,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:L0})},[j]),r_=C(async()=>{return await nZ({currentChatJid:j,getAgentStatus:w3,activeChatJidRef:n1,wasAgentActiveRef:Q4,viewStateRef:G_,refreshTimeline:C_,clearAgentRunState:F1,agentStatusRef:l_,pendingRequestRef:D0,thoughtBufferRef:l0,draftBufferRef:p0,setAgentStatus:b,setAgentDraft:h,setAgentPlan:a,setAgentThought:q0,setPendingRequest:K0,setActiveTurn:Y5,noteAgentActivity:K4,clearLastActivityFlag:Q5})},[F1,Q5,j,K4,C_,Y5]),b3=C(async()=>{return await dZ({isAgentRunningRef:f0,pendingRequestRef:D0,currentTurnIdRef:W0,silentRecoveryRef:j_,silenceRefreshMs:n$,viewStateRef:G_,refreshTimeline:C_,refreshQueueState:D1,refreshAgentStatus:r_})},[r_,D1,C_]);v(()=>{let x=Math.min(1000,Math.max(100,Math.floor(l$/2))),e=setInterval(()=>{iZ({isAgentRunningRef:f0,pendingRequestRef:D0,lastAgentEventRef:O0,lastSilenceNoticeRef:b0,agentStatusRef:l_,silenceWarningMs:l$,silenceFinalizeMs:V9,silenceRefreshMs:n$,isCompactionStatus:y4,setAgentStatus:b,reconcileSilentTurn:b3})},x);return()=>clearInterval(e)},[b3]);let m3=C((x)=>{return Bj({serverVersion:x,currentAppAssetVersion:uX,staleUiVersionRef:b4,staleUiReloadScheduledRef:j4,tabStoreHasUnsaved:()=>r0.hasUnsaved(),isAgentRunningRef:f0,pendingRequestRef:D0,showIntentToast:p})},[f0,D0,p]),OY=C((x)=>{Wj({status:x,setConnectionStatus:V,setAgentStatus:b,setAgentDraft:h,setAgentPlan:a,setAgentThought:q0,setPendingRequest:K0,pendingRequestRef:D0,clearAgentRunState:F1,hasConnectedOnceRef:a4,viewStateRef:G_,refreshTimeline:C_,refreshAgentStatus:r_,refreshQueueState:D1,refreshContextUsage:V_})},[F1,C_,r_,D1,V_]),DY=C(async(x)=>{await aZ({hashtag:x,setCurrentHashtag:H,setPosts:W_,loadPosts:d_})},[d_]),AY=C(async()=>{await tZ({setCurrentHashtag:H,setSearchQuery:O,setPosts:W_,loadPosts:d_})},[d_]),EY=C(async(x,e=E)=>{await eZ({query:x,scope:e,currentChatJid:j,currentRootChatJid:R1,searchPosts:qY,setSearchScope:f,setSearchQuery:O,setCurrentHashtag:H,setPosts:W_,setHasMore:X6})},[j,R1,E]),kY=C(()=>{D(!0),O(null),H(null),f("current"),W_([])},[]),MY=C(()=>{D(!1),O(null),d_()},[d_]),oX=C(()=>{},[]),IY=!L&&!A&&!W,xY=C(async(x)=>{await _Y({post:x,posts:q5,currentChatJid:j,deletePost:fX,preserveTimelineScrollTop:q8,setPosts:W_,setRemovingPostIds:L1,hasMoreRef:f3,loadMoreRef:v3})},[j,q5,q8]),h3=C(async()=>{await g9({getAgents:vX,setAgents:Y1,setUserProfile:v_,applyBranding:m1})},[m1]);v(()=>{h3(),oZ({readStoredNumber:r5,sidebarWidthRef:m4,shellElement:Z4.current})},[h3]);let y5=j0||T!==null,p3=C((x)=>{b9({payload:x,agentsRef:O4,setAgents:Y1,applyBranding:m1})},[m1]),c3=C((x)=>{m9({payload:x,setUserProfile:v_})},[]),S5=C((x)=>{h9({payload:x,setActiveModel:U1,setActiveThinkingLevel:s0,setSupportsThinking:w0,setActiveModelUsage:r})},[]),G8=C(()=>{p9({currentChatJid:j,getAgentModels:KY,activeChatJidRef:n1,applyModelState:S5})},[S5,j]),d1=C(()=>{c9({currentChatJid:j,getActiveChatAgents:NY,getChatBranches:N6,activeChatJidRef:n1,setActiveChatAgents:m})},[j]),i1=C(()=>{l9({currentRootChatJid:R1,getChatBranches:N6,setCurrentChatBranches:z0})},[R1]),TY=C((x)=>{MQ({queuedItem:x,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:s1,currentChatJid:j,refreshQueueState:D1,setFollowupQueueItems:H0,showIntentToast:p,steerAgentQueueItem:XY,removeAgentQueueItem:VY})},[j,D1,H0,p]),CY=C((x)=>{IQ({queuedItem:x,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:s1,currentChatJid:j,refreshQueueState:D1,setFollowupQueueItems:H0,showIntentToast:p,clearQueuedSteerStateIfStale:n_,steerAgentQueueItem:XY,removeAgentQueueItem:VY})},[n_,j,D1,H0,p]),w5=C((x)=>{n9({response:x,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,refreshContextUsage:V_,refreshAutoresearchStatus:i_,refreshQueueState:D1})},[d1,i_,i1,V_,D1]),PY=C(async(x,e)=>{let E0=typeof x?.key==="string"?x.key:"",e0=typeof e?.key==="string"?e.key:"",R0=e$(E0,e0);if(!E0||!e0)return;L0((Q1)=>oj(Q1,E0,e0));try{let Q1=await aj({panel:x,action:e,currentChatJid:j,stopAutoresearch:hX,dismissAutoresearch:pX,writeClipboard:(I1)=>navigator.clipboard.writeText(I1)});if(Q1.refreshAutoresearchStatus)i_();if(Q1.toast)p(Q1.toast.title,Q1.toast.detail,Q1.toast.kind,Q1.toast.durationMs)}catch(Q1){p("Panel action failed",Q1?.message||"Could not complete that action.","warning")}finally{L0((Q1)=>sj(Q1,R0))}},[j,i_,p]),V6=C(()=>{jY({btwAbortRef:_5,setBtwSession:X0})},[]),X8=C(async(x)=>{return await QY({question:x,currentChatJid:j,streamSidePrompt:dX,resolveBtwChatJid:O9,showIntentToast:p,btwAbortRef:_5,setBtwSession:X0})},[j,p]),yY=C(async({content:x})=>{return await ZY({content:x,parseBtwCommand:J9,closeBtwPanel:V6,runBtwPrompt:X8,showIntentToast:p})},[V6,X8,p]),SY=C(()=>{if(o?.question)X8(o.question)},[o,X8]),wY=C(async()=>{await YY({btwSession:o,buildBtwInjectionText:E9,isComposeBoxAgentActive:y5,currentChatJid:j,sendAgentMessage:n4,handleMessageResponse:w5,showIntentToast:p})},[o,j,w5,y5,p]),l3=C(async(x=null)=>{return kQ({requestPayload:x,currentChatJid:j,currentRootChatJid:R1,getAgentStatus:w3,getAgentContext:R3,getAgentQueueState:GY,getAgentModels:KY,getActiveChatAgents:NY,getChatBranches:N6,getTimeline:l4,rawPosts:K8,activeChatAgents:Y0,currentChatBranches:d,contextUsage:A0,followupQueueItems:t0.current,activeModel:c0,activeThinkingLevel:$1,supportsThinking:V0,isAgentTurnActive:j0})},[Y0,c0,$1,A0,d,j,R1,j0,K8,V0]),K5=C(()=>{SZ({refreshModelState:G8,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,refreshQueueState:D1,refreshContextUsage:V_,refreshAutoresearchStatus:i_})},[d1,i_,V_,i1,G8,D1]);v(()=>{K5();let x=setInterval(()=>{G8(),d1(),i1(),D1()},60000);return()=>clearInterval(x)},[K5,G8,d1,i1,D1]),v(()=>{T0(new Map),L0(new Set)},[j]),v(()=>{let x=!1;return sZ({currentHashtag:L,searchQuery:A,searchScope:E,currentChatJid:j,currentRootChatJid:R1,loadPosts:d_,searchPosts:qY,setPosts:W_,setHasMore:X6,scrollToBottom:P5,isCancelled:()=>x}),()=>{x=!0}},[j,L,A,E,R1,d_,P5,X6,W_]),v(()=>{let x=J4.current||j;H4.current.set(x,Z5())},[j,Z5]),v(()=>{let x=J4.current||j;if(x===j)return;H4.current.set(x,Z5()),J4.current=j,s1.current.clear(),Y8(H4.current.get(j)||null),D1(),r_(),V_()},[j,r_,V_,D1,Y8,Z5]);let RY=C(()=>{wZ({viewStateRef:G_,refreshTimeline:C_,refreshModelAndQueueState:K5})},[K5,C_]),n3=C((x,e="streaming")=>{let E0=new Date().toISOString();g0((e0)=>VQ(e0,x,{fallbackStatus:e,currentChatJid:j,dismissedSessionKeys:a0.current,updatedAt:E0}))},[j]),U6=C((x,e)=>{lZ(x,e,{currentChatJid:j,updateAgentProfile:p3,updateUserProfile:c3,currentTurnIdRef:W0,activeChatJidRef:n1,pendingRequestRef:D0,draftBufferRef:p0,thoughtBufferRef:l0,steerQueuedTurnIdRef:I0,thoughtExpandedRef:d0,draftExpandedRef:o0,draftThrottleRef:T5,thoughtThrottleRef:O1,viewStateRef:G_,followupQueueItemsRef:t0,dismissedQueueRowIdsRef:s1,scrollToBottomRef:k4,hasMoreRef:f3,loadMoreRef:v3,lastAgentResponseRef:I_,wasAgentActiveRef:Q4,setActiveTurn:Y5,applyLiveGeneratedWidgetUpdate:n3,setFloatingWidget:g0,clearLastActivityFlag:Q5,handleUiVersionDrift:m3,setAgentStatus:b,setAgentDraft:h,setAgentPlan:a,setAgentThought:q0,setPendingRequest:K0,clearAgentRunState:F1,getAgentStatus:w3,noteAgentActivity:K4,showLastActivity:A4,refreshTimeline:C_,refreshModelAndQueueState:K5,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,notifyForFinalResponse:E4,setContextUsage:M0,refreshContextUsage:V_,refreshQueueState:D1,setFollowupQueueItems:H0,clearQueuedSteerStateIfStale:n_,setSteerQueuedTurnId:k0,applyModelState:S5,getAgentContext:R3,setExtensionStatusPanels:T0,setPendingExtensionPanelActions:L0,refreshActiveEditorFromWorkspace:g4,showIntentToast:p,removeStalledPost:N8,setPosts:W_,preserveTimelineScrollTop:q8})},[n3,S5,F1,Q5,n_,j,m3,K4,E4,d1,g4,V_,i1,K5,D1,C_,N8,Y5,H0,p,A4,p3,c3]);v(()=>{if(typeof window>"u")return;let x=window.__PICLAW_TEST_API||{};return x.emit=U6,x.reset=()=>{N8(),F1(),b(null),h({text:"",totalLines:0}),a(""),q0({text:"",totalLines:0}),K0(null)},x.finalize=()=>g3(),window.__PICLAW_TEST_API=x,()=>{if(window.__PICLAW_TEST_API===x)window.__PICLAW_TEST_API=void 0}},[F1,g3,U6,N8]),Y9({handleSseEvent:U6,handleConnectionStatusChange:OY,loadPosts:d_,onWake:RY,chatJid:j}),v(()=>{if(!q5||q5.length===0)return;let x=location.hash;if(!x||!x.startsWith("#msg-"))return;let e=x.slice(5);y1(e),history.replaceState(null,"",location.pathname+location.search)},[q5,y1]);let L6=T!==null;v(()=>{if(G!=="connected")return;let e=setInterval(()=>{zj({viewStateRef:G_,isAgentActive:L6,refreshTimeline:C_,refreshQueueState:D1,refreshAgentStatus:r_,refreshContextUsage:V_,refreshAutoresearchStatus:i_})},L6?15000:60000);return()=>clearInterval(e)},[G,L6,r_,i_,V_,D1,C_]),v(()=>{return o9(()=>{r_(),V_(),D1(),i_()})},[r_,i_,V_,D1]);let uY=C(()=>{Pj(L_)},[]),fY=C((x)=>{yj({nextChatJid:x,currentChatJid:j,chatOnlyMode:Q,navigate:$})},[Q,j,$]),B6=C(()=>{Sj({currentBranchRecord:A1,renameBranchInFlight:k.current,renameBranchLockUntil:n.current,getFormLock:s$,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:N0})},[A1]),W6=C(()=>{wj({setIsRenameBranchFormOpen:N0,setRenameBranchNameDraft:$0})},[]),vY=C(async(x)=>{await Rj({currentBranchRecord:A1,nextName:x,openRenameForm:B6,renameBranchInFlightRef:k,renameBranchLockUntilRef:n,getFormLock:s$,setIsRenamingBranch:S,renameChatBranch:cX,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,closeRenameForm:W6})},[W6,A1,d1,i1,B6,S,p]),gY=C(async(x=null)=>{await uj({targetChatJid:x,currentChatJid:j,currentBranchRecord:A1,currentChatBranches:d,activeChatAgents:Y0,pruneChatBranch:lX,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,chatOnlyMode:Q,navigate:$})},[Y0,Q,A1,d,j,$,d1,i1,p]),bY=C(async(x)=>{await fj({targetChatJid:x,restoreChatBranch:nX,currentChatBranches:d,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,chatOnlyMode:Q,navigate:$})},[Q,d,$,d1,i1,p]);v(()=>vj({branchLoaderMode:K,branchLoaderSourceChatJid:N,forkChatBranch:u5,setBranchLoaderState:v1,navigate:$}),[K,N,$]);let mY=C((x)=>{xQ({widget:x,dismissedLiveWidgetKeysRef:a0,setFloatingWidget:g0})},[]),z6=C(()=>{TQ({dismissedLiveWidgetKeysRef:a0,setFloatingWidget:g0})},[]),hY=C((x,e)=>{CQ({event:x,widget:e,currentChatJid:j,isComposeBoxAgentActive:y5,setFloatingWidget:g0,handleCloseFloatingWidget:z6,handleMessageResponse:w5,showIntentToast:p,sendAgentMessage:n4,buildFloatingWidgetDashboardSnapshot:l3})},[l3,j,z6,w5,y5,p]);v(()=>{a0.current.clear(),g0(null)},[j]);let pY=C(async()=>{await gj({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:u5,refreshActiveChatAgents:d1,refreshCurrentChatBranches:i1,showIntentToast:p,navigate:$})},[Q,j,$,d1,i1,p]),F6=C(async(x,e)=>{await bj({isWebAppMode:X,path:x,label:e,showIntentToast:p,currentChatJid:j,tabStripActiveId:q1,editorInstanceRef:M1,dockInstanceRef:Z_,terminalTabPath:L5,dockVisible:l1,resolveTab:(E0)=>r0.get(E0),closeTab:O_,setDockVisible:J1})},[j,l1,O_,X,p,q1]);v(()=>mj({openEditor:g1,popOutPane:(x,e)=>{F6(x,e)}}),[F6,g1]);let cY=C(async()=>{await hj({isWebAppMode:X,currentChatJid:j,currentRootChatJid:R1,forkChatBranch:u5,getActiveChatAgents:R6,getChatBranches:N6,setActiveChatAgents:m,setCurrentChatBranches:z0,showIntentToast:p})},[j,R1,X,p]);v(()=>{pj({editorOpen:x1,shellElement:Z4.current,editorWidthRef:h4,dockHeightRef:e4,sidebarWidthRef:m4,readStoredNumber:r5})},[x1]),v(()=>{if(!E_||Q)return;return a9(u1)},[u1,E_,Q]),v(()=>{if(Q)return;return t9({toggleZenMode:v4,exitZenMode:M_,zenMode:W1,isZenModeActive:()=>W1})},[v4,M_,W1,Q]);let lY=Boolean(u0&&u0===(T?.turn_id||B0)),d3=yQ({branchLoaderMode:K,panePopoutMode:Z});if(d3==="branch-loader")return SQ($_);if(d3==="pane-popout")return wQ({appShellRef:Z4,editorOpen:x1,hidePanePopoutControls:N_,panePopoutHasMenuActions:b1,panePopoutTitle:c_,tabStripTabs:t1,tabStripActiveId:q1,handleTabActivate:$4,previewTabs:T1,handleTabTogglePreview:w_,editorContainerRef:j1,getPaneContent:()=>M1.current?.getContent?.(),panePopoutPath:Y});return kZ({appShellRef:Z4,workspaceOpen:B1,editorOpen:x1,chatOnlyMode:Q,zenMode:W1,isRenameBranchFormOpen:Q0,closeRenameCurrentBranchForm:W6,handleRenameCurrentBranch:vY,renameBranchNameDraft:G0,renameBranchNameInputRef:P1,setRenameBranchNameDraft:$0,renameBranchDraftState:C0,isRenamingBranch:R,addFileRef:C5,openEditor:g1,openTerminalTab:N1,openVncTab:Y_,hasDockPanes:E_,toggleDock:u1,dockVisible:l1,handleSplitterMouseDown:BY,handleSplitterTouchStart:WY,showEditorPaneContainer:R_,tabStripTabs:t1,tabStripActiveId:q1,handleTabActivate:$4,handleTabClose:O_,handleTabCloseOthers:D_,handleTabCloseAll:z4,handleTabTogglePin:A_,handleTabTogglePreview:w_,handleTabEditSource:u4,previewTabs:T1,tabPaneOverrides:Q_,toggleZenMode:v4,handlePopOutPane:F6,isWebAppMode:X,editorContainerRef:j1,editorInstanceRef:M1,handleDockSplitterMouseDown:HY,handleDockSplitterTouchStart:JY,TERMINAL_TAB_PATH:L5,dockContainerRef:F4,handleEditorSplitterMouseDown:zY,handleEditorSplitterTouchStart:FY,searchQuery:A,isIOSDevice:B9,currentBranchRecord:A1,currentChatJid:j,currentChatBranches:d,handleBranchPickerChange:fY,formatBranchPickerLabel:l8,openRenameCurrentBranchForm:B6,handlePruneCurrentBranch:gY,currentHashtag:L,handleBackToTimeline:AY,activeSearchScopeLabel:S_,posts:q5,isMainTimelineView:IY,hasMore:UY,loadMore:LY,timelineRef:X_,handleHashtagClick:DY,addMessageRef:C1,scrollToMessage:y1,openFileFromPill:x0,handleDeletePost:xY,handleOpenFloatingWidget:mY,agents:w1,userProfile:f_,removingPostIds:k1,agentStatus:T,isCompactionStatus:y4,agentDraft:t,agentPlan:s,agentThought:_0,pendingRequest:Z0,intentToast:M,currentTurnId:B0,steerQueued:lY,handlePanelToggle:T_,btwSession:o,closeBtwPanel:V6,handleBtwRetry:SY,handleBtwInject:wY,floatingWidget:J0,handleCloseFloatingWidget:z6,handleFloatingWidgetEvent:hY,extensionStatusPanels:F0,pendingExtensionPanelActions:v0,handleExtensionPanelAction:PY,searchOpen:W,followupQueueItems:y0,handleInjectQueuedFollowup:TY,handleRemoveQueuedFollowup:CY,viewStateRef:G_,loadPosts:d_,scrollToBottom:P5,searchScope:E,handleSearch:EY,setSearchScope:f,enterSearchMode:kY,exitSearchMode:MY,fileRefs:u,removeFileRef:z,clearFileRefs:w,setFileRefsFromCompose:l,messageRefs:i,removeMessageRef:q4,clearMessageRefs:c4,setMessageRefsFromCompose:$5,handleCreateSessionFromCompose:pY,handleRestoreBranch:bY,attachActiveEditorFile:z1,followupQueueCount:o1,handleBtwIntercept:yY,handleMessageResponse:w5,handleComposeSubmitError:j5,handlePopOutChat:cY,isComposeBoxAgentActive:y5,activeChatAgents:Y0,connectionStatus:G,activeModel:c0,activeModelUsage:_1,activeThinkingLevel:$1,supportsThinking:V0,contextUsage:A0,notificationsEnabled:e_,notificationPermission:p_,handleToggleNotifications:E1,setActiveModel:U1,applyModelState:S5,setPendingRequest:K0,pendingRequestRef:D0,toggleWorkspace:uY})}function rX(){let[_,$]=g(()=>typeof window>"u"?"http://localhost/":window.location.href);v(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=C((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},K=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Q=S0(()=>new URL(_).searchParams,[_]);return B`<${iX} locationParams=${Q} navigate=${j} />`}x4(B`<${rX} />`,document.getElementById("app"));

//# debugId=9F25E5106CD807D664756E2164756E21
//# sourceMappingURL=app.bundle.js.map
