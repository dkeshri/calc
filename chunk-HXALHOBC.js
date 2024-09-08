import{d as B,r as k}from"./chunk-AHG5W2CV.js";import{Ha as E,Ja as H,Lb as U,Ma as W,Pa as N,Ra as x,U as v,V as y,a as T,ca as R,da as L,ea as O,i as D,ib as I,jb as C,sa as M,tb as w,ua as P,ya as F}from"./chunk-MBXRHBUO.js";var _=class o{static isArray(n,t=!0){return Array.isArray(n)&&(t||n.length!==0)}static isObject(n,t=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(t||Object.keys(n).length!==0)}static equals(n,t,e){return e?this.resolveFieldData(n,e)===this.resolveFieldData(t,e):this.equalsByValue(n,t)}static equalsByValue(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var e=Array.isArray(n),i=Array.isArray(t),s,r,a;if(e&&i){if(r=n.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!this.equalsByValue(n[s],t[s]))return!1;return!0}if(e!=i)return!1;var c=this.isDate(n),d=this.isDate(t);if(c!=d)return!1;if(c&&d)return n.getTime()==t.getTime();var l=n instanceof RegExp,p=t instanceof RegExp;if(l!=p)return!1;if(l&&p)return n.toString()==t.toString();var u=Object.keys(n);if(r=u.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,u[s]))return!1;for(s=r;s--!==0;)if(a=u[s],!this.equalsByValue(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static resolveFieldData(n,t){if(n&&t){if(this.isFunction(t))return t(n);if(t.indexOf(".")==-1)return n[t];{let e=t.split("."),i=n;for(let s=0,r=e.length;s<r;++s){if(i==null)return null;i=i[e[s]]}return i}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,t,e){let i;n&&t!==e&&(e>=n.length&&(e%=n.length,t%=n.length),n.splice(e,0,n.splice(t,1)[0]))}static insertIntoOrderedArray(n,t,e,i){if(e.length>0){let s=!1;for(let r=0;r<e.length;r++)if(this.findIndexInList(e[r],i)>t){e.splice(r,0,n),s=!0;break}s||e.push(n)}else e.push(n)}static findIndexInList(n,t){let e=-1;if(t){for(let i=0;i<t.length;i++)if(t[i]==n){e=i;break}}return e}static contains(n,t){if(n!=null&&t&&t.length){for(let e of t)if(this.equals(n,e))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,t,e,i=1){let s=-1,r=this.isEmpty(n),a=this.isEmpty(t);return r&&a?s=0:r?s=i:a?s=-i:typeof n=="string"&&typeof t=="string"?s=n.localeCompare(t,e,{numeric:!0}):s=n<t?-1:n>t?1:0,s}static sort(n,t,e=1,i,s=1){let r=o.compare(n,t,i,e),a=e;return(o.isEmpty(n)||o.isEmpty(t))&&(a=s===1?e:s),a*r}static merge(n,t){if(!(n==null&&t==null)){{if((n==null||typeof n=="object")&&(t==null||typeof t=="object"))return T(T({},n||{}),t||{});if((n==null||typeof n=="string")&&(t==null||typeof t=="string"))return[n||"",t||""].join(" ")}return t||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...t){return this.isFunction(n)?n(...t):n}static findLastIndex(n,t){let e=-1;if(this.isNotEmpty(n))try{e=n.findLastIndex(t)}catch{e=n.lastIndexOf([...n].reverse().find(t))}return e}static findLast(n,t){let e;if(this.isNotEmpty(n))try{e=n.findLast(t)}catch{e=[...n].reverse().find(t)}return e}static deepEquals(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var e=Array.isArray(n),i=Array.isArray(t),s,r,a;if(e&&i){if(r=n.length,r!=t.length)return!1;for(s=r;s--!==0;)if(!this.deepEquals(n[s],t[s]))return!1;return!0}if(e!=i)return!1;var c=n instanceof Date,d=t instanceof Date;if(c!=d)return!1;if(c&&d)return n.getTime()==t.getTime();var l=n instanceof RegExp,p=t instanceof RegExp;if(l!=p)return!1;if(l&&p)return n.toString()==t.toString();var u=Object.keys(n);if(r=u.length,r!==Object.keys(t).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,u[s]))return!1;for(s=r;s--!==0;)if(a=u[s],!this.deepEquals(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}},G=0;function J(o="pn_id_"){return G++,`${o}${G}`}function $(){let o=[],n=(s,r)=>{let a=o.length>0?o[o.length-1]:{key:s,value:r},c=a.value+(a.key===s?0:r)+2;return o.push({key:s,value:c}),c},t=s=>{o=o.filter(r=>r.value!==s)},e=()=>o.length>0?o[o.length-1].value:0,i=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:i,set:(s,r,a)=>{r&&(r.style.zIndex=String(n(s,a)))},clear:s=>{s&&(t(i(s)),s.style.zIndex="")},getCurrent:()=>e()}}var X=$();var z=["*"];var h=(()=>{class o{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return o})();var K=(()=>{class o{ripple=!1;inputStyle=N("outlined");overlayOptions={};csp=N({nonce:void 0});filterMatchModeOptions={text:[h.STARTS_WITH,h.CONTAINS,h.NOT_CONTAINS,h.ENDS_WITH,h.EQUALS,h.NOT_EQUALS],numeric:[h.EQUALS,h.NOT_EQUALS,h.LESS_THAN,h.LESS_THAN_OR_EQUAL_TO,h.GREATER_THAN,h.GREATER_THAN_OR_EQUAL_TO],date:[h.DATE_IS,h.DATE_IS_NOT,h.DATE_BEFORE,h.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new D;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=T(T({},this.translation),t),this.translationSource.next(this.translation)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=v({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ct=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=R({type:o,selectors:[["p-footer"]],standalone:!0,features:[w],ngContentSelectors:z,decls:1,vars:0,template:function(e,i){e&1&&(I(),C(0))},encapsulation:2})}return o})(),lt=(()=>{class o{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(e){return new(e||o)(E(H))};static \u0275dir=O({type:o,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return o})(),pt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=L({type:o});static \u0275inj=y({})}return o})();var g=(()=>{class o{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,e){t&&e&&(t.classList?t.classList.add(e):t.className+=" "+e)}static addMultipleClasses(t,e){if(t&&e)if(t.classList){let i=e.trim().split(" ");for(let s=0;s<i.length;s++)t.classList.add(i[s])}else{let i=e.split(" ");for(let s=0;s<i.length;s++)t.className+=" "+i[s]}}static removeClass(t,e){t&&e&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,e){t&&e&&[e].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(s=>this.removeClass(t,s)))}static hasClass(t,e){return t&&e?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}static find(t,e){return Array.from(t.querySelectorAll(e))}static findSingle(t,e){return this.isElement(t)?t.querySelector(e):null}static index(t){let e=t.parentNode.childNodes,i=0;for(var s=0;s<e.length;s++){if(e[s]==t)return i;e[s].nodeType==1&&i++}return-1}static indexWithinGroup(t,e){let i=t.parentNode?t.parentNode.childNodes:[],s=0;for(var r=0;r<i.length;r++){if(i[r]==t)return s;i[r].attributes&&i[r].attributes[e]&&i[r].nodeType==1&&s++}return-1}static appendOverlay(t,e,i="self"){i!=="self"&&t&&e&&this.appendChild(t,e)}static alignOverlay(t,e,i="self",s=!0){t&&e&&(s&&(t.style.minWidth=`${o.getOuterWidth(e)}px`),i==="self"?this.relativePosition(t,e):this.absolutePosition(t,e))}static relativePosition(t,e,i=!0){let s=A=>{if(A)return getComputedStyle(A).getPropertyValue("position")==="relative"?A:s(A.parentElement)},r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=e.offsetHeight??e.getBoundingClientRect().height,c=e.getBoundingClientRect(),d=this.getWindowScrollTop(),l=this.getWindowScrollLeft(),p=this.getViewport(),f=s(t)?.getBoundingClientRect()||{top:-1*d,left:-1*l},m,S;c.top+a+r.height>p.height?(m=c.top-f.top-r.height,t.style.transformOrigin="bottom",c.top+m<0&&(m=-1*c.top)):(m=a+c.top-f.top,t.style.transformOrigin="top");let b=c.left+r.width-p.width,Y=c.left-f.left;r.width>p.width?S=(c.left-f.left)*-1:b>0?S=Y-b:S=c.left-f.left,t.style.top=m+"px",t.style.left=S+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,e,i=!0){let s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=s.height,a=s.width,c=e.offsetHeight??e.getBoundingClientRect().height,d=e.offsetWidth??e.getBoundingClientRect().width,l=e.getBoundingClientRect(),p=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),f=this.getViewport(),m,S;l.top+c+r>f.height?(m=l.top+p-r,t.style.transformOrigin="bottom",m<0&&(m=p)):(m=c+l.top+p,t.style.transformOrigin="top"),l.left+a>f.width?S=Math.max(0,l.left+u+d-a):S=l.left+u,t.style.top=m+"px",t.style.left=S+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))}static getScrollableParents(t){let e=[];if(t){let i=this.getParents(t),s=/(auto|scroll)/,r=a=>{let c=window.getComputedStyle(a,null);return s.test(c.getPropertyValue("overflow"))||s.test(c.getPropertyValue("overflowX"))||s.test(c.getPropertyValue("overflowY"))};for(let a of i){let c=a.nodeType===1&&a.dataset.scrollselectors;if(c){let d=c.split(",");for(let l of d){let p=this.findSingle(a,l);p&&r(p)&&e.push(p)}}a.nodeType!==9&&r(a)&&e.push(a)}}return e}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e}static getHiddenElementDimensions(t){let e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e}static scrollInView(t,e){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),s=i?parseFloat(i):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),a=r?parseFloat(r):0,c=t.getBoundingClientRect(),l=e.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-s-a,p=t.scrollTop,u=t.clientHeight,f=this.getOuterHeight(e);l<0?t.scrollTop=p+l:l+f>u&&(t.scrollTop=p+l-u+f)}static fadeIn(t,e){t.style.opacity=0;let i=+new Date,s=0,r=function(){s=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/e,t.style.opacity=s,i=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(t,e){var i=1,s=50,r=e,a=s/r;let c=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(c)),t.style.opacity=i},s)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,e){var i=Element.prototype,s=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return s.call(t,e)}static getOuterWidth(t,e){let i=t.offsetWidth;if(e){let s=getComputedStyle(t);i+=parseFloat(s.marginLeft)+parseFloat(s.marginRight)}return i}static getHorizontalPadding(t){let e=getComputedStyle(t);return parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)}static getHorizontalMargin(t){let e=getComputedStyle(t);return parseFloat(e.marginLeft)+parseFloat(e.marginRight)}static innerWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static width(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),e}static getInnerHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),e}static getOuterHeight(t,e){let i=t.offsetHeight;if(e){let s=getComputedStyle(t);i+=parseFloat(s.marginTop)+parseFloat(s.marginBottom)}return i}static getHeight(t){let e=t.offsetHeight,i=getComputedStyle(t);return e-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),e}static getWidth(t){let e=t.offsetWidth,i=getComputedStyle(t);return e-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),e}static getViewport(){let t=window,e=document,i=e.documentElement,s=e.getElementsByTagName("body")[0],r=t.innerWidth||i.clientWidth||s.clientWidth,a=t.innerHeight||i.clientHeight||s.clientHeight;return{width:r,height:a}}static getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,e){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(e,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,e=t.indexOf("MSIE ");if(e>0)return!0;var i=t.indexOf("Trident/");if(i>0){var s=t.indexOf("rv:");return!0}var r=t.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e&&e.el&&e.el.nativeElement)e.el.nativeElement.appendChild(t);else throw"Cannot append "+e+" to "+t}static removeChild(t,e){if(this.isElement(e))e.removeChild(t);else if(e.el&&e.el.nativeElement)e.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+e}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let e=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(e.borderLeftWidth)-parseFloat(e.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e}static invokeElementMethod(t,e,i){t[e].apply(t,i)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,e){t&&document.activeElement!==t&&t.focus(e)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,e=""){let i=this.find(t,this.getFocusableSelectorString(e)),s=[];for(let r of i){let a=getComputedStyle(r);this.isVisible(r)&&a.display!="none"&&a.visibility!="hidden"&&s.push(r)}return s}static getFocusableElement(t,e=""){let i=this.findSingle(t,this.getFocusableSelectorString(e));if(i){let s=getComputedStyle(i);if(this.isVisible(i)&&s.display!="none"&&s.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,e=""){let i=this.getFocusableElements(t,e);return i.length>0?i[0]:null}static getLastFocusableElement(t,e){let i=this.getFocusableElements(t,e);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,e=!1){let i=o.getFocusableElements(t),s=0;if(i&&i.length>0){let r=i.indexOf(i[0].ownerDocument.activeElement);e?r==-1||r===0?s=i.length-1:s=r-1:r!=-1&&r!==i.length-1&&(s=r+1)}return i[s]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,e){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return e?.nextElementSibling;case"@prev":return e?.previousElementSibling;case"@parent":return e?.parentElement;case"@grandparent":return e?.parentElement.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let r=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,e){if(t){let i=t.getAttribute(e);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,e={},...i){if(t){let s=document.createElement(t);return this.setAttributes(s,e),s.append(...i),s}}static setAttribute(t,e="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(e,i)}static setAttributes(t,e={}){if(this.isElement(t)){let i=(s,r)=>{let a=t?.$attrs?.[s]?[t?.$attrs?.[s]]:[];return[r].flat().reduce((c,d)=>{if(d!=null){let l=typeof d;if(l==="string"||l==="number")c.push(d);else if(l==="object"){let p=Array.isArray(d)?i(s,d):Object.entries(d).map(([u,f])=>s==="style"&&(f||f===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?u:void 0);c=p.length?c.concat(p.filter(u=>!!u)):c}}return c},a)};Object.entries(e).forEach(([s,r])=>{if(r!=null){let a=s.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),r):s==="pBind"?this.setAttributes(t,r):(r=s==="class"?[...new Set(i("class",r))].join(" ").trim():s==="style"?i("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[s]=r),t.setAttribute(s,r))}})}}static isFocusableElement(t,e=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`):!1}}return o})(),q=class{element;listener;scrollableParents;constructor(n,t=()=>{}){this.element=n,this.listener=t}bindScrollListener(){this.scrollableParents=g.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var At=(()=>{class o{document;platformId;renderer;el;zone;config;constructor(t,e,i,s,r,a){this.document=t,this.platformId=e,this.renderer=i,this.el=s,this.zone=r,this.config=a}animationListener;mouseDownListener;timeout;ngAfterViewInit(){k(this.platformId)&&this.config&&this.config.ripple&&this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))})}onMouseDown(t){let e=this.getInk();if(!e||this.document.defaultView?.getComputedStyle(e,null).display==="none")return;if(g.removeClass(e,"p-ink-active"),!g.getHeight(e)&&!g.getWidth(e)){let a=Math.max(g.getOuterWidth(this.el.nativeElement),g.getOuterHeight(this.el.nativeElement));e.style.height=a+"px",e.style.width=a+"px"}let i=g.getOffset(this.el.nativeElement),s=t.pageX-i.left+this.document.body.scrollTop-g.getWidth(e)/2,r=t.pageY-i.top+this.document.body.scrollLeft-g.getHeight(e)/2;this.renderer.setStyle(e,"top",r+"px"),this.renderer.setStyle(e,"left",s+"px"),g.addClass(e,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&g.removeClass(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let e=0;e<t.length;e++)if(typeof t[e].className=="string"&&t[e].className.indexOf("p-ink")!==-1)return t[e];return null}resetInk(){let t=this.getInk();t&&g.removeClass(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),g.removeClass(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,g.removeElement(t))}ngOnDestroy(){this.config&&this.config.ripple&&this.remove()}static \u0275fac=function(e){return new(e||o)(E(B),E(F),E(W),E(P),E(M),E(K,8))};static \u0275dir=O({type:o,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple","p-element"],standalone:!0})}return o})(),yt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=L({type:o});static \u0275inj=y({})}return o})();var Z=["*"],Nt=(()=>{class o{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){this.getAttributes()}getAttributes(){let t=_.isEmpty(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=R({type:o,selectors:[["ng-component"]],hostAttrs:[1,"p-element","p-icon-wrapper"],inputs:{label:"label",spin:[2,"spin","spin",U],styleClass:"styleClass"},standalone:!0,features:[x,w],ngContentSelectors:Z,decls:1,vars:0,template:function(e,i){e&1&&(I(),C(0))},encapsulation:2,changeDetection:0})}return o})();export{_ as a,J as b,X as c,K as d,ct as e,lt as f,pt as g,Nt as h,g as i,q as j,At as k,yt as l};
