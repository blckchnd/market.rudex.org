(this.webpackJsonp=this.webpackJsonp||[]).push([[22],{1991:function(e,t,n){"use strict";n.d(t,"b",function(){return v}),n.d(t,"a",function(){return _});var a=n(0),r=n.n(a),o=n(1),s=n.n(o),c=n(3),i=n.n(c),l=n(30),u=n(22),p=n(21),d=n(5),h=n.n(d),m=n(2349),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){function t(){return g(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return y(t,r.a.Component),f(t,[{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.index,a=e.changeTab,o=e.title,s=e.className,c=e.updatedTab,l=e.disabled,u=e.subText,p=i()({"is-active":t},s);return"string"==typeof o&&o.indexOf(".")>0&&(o=h.a.translate(o)),this.props.collapsed?("string"==typeof u&&(u=u.trim()),"span"===o.type&&(o=o.props.children[2]),r.a.createElement("option",{value:n,"data-is-link-to":this.props.isLinkTo},o,c?"*":"",u&&" (",u&&u,u&&")")):r.a.createElement("li",{className:p,onClick:l?null:a.bind(this,n,this.props.isLinkTo)},r.a.createElement("a",null,r.a.createElement("span",{className:"tab-title"},o,c?"*":""),u&&r.a.createElement("div",{className:"tab-subtext"},u)))}}]),t}();_.propTypes={changeTab:s.a.func,isActive:s.a.bool.isRequired,index:s.a.number.isRequired,className:s.a.string,isLinkTo:s.a.string,subText:s.a.oneOfType([s.a.object,s.a.string])},_.defaultProps={isActive:!1,index:0,className:"",isLinkTo:"",subText:null};var v=function(e){function t(e){g(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={activeTab:e.setting?e.viewSettings.get(e.setting,e.defaultActiveTab):e.defaultActiveTab,width:window.innerWidth},n._setDimensions=n._setDimensions.bind(n),n}return y(t,r.a.Component),f(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"componentWillReceiveProps",value:function(e){var t=e.viewSettings.get(e.setting);t!==this.props.viewSettings.get(this.props.setting)&&this.setState({activeTab:t})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_changeTab",value:function(e,t){e!==this.state.activeTab&&(""!==t&&this.props.history.push(t),this.props.setting&&u.a.changeViewSetting(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.props.setting,e)),this.setState({activeTab:e}),this.props.onChangeTab&&this.props.onChangeTab(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.contentClass,o=t.tabsClass,s=t.style,c=t.segmented,l=this.state.width<900&&r.a.Children.count(n)>2,u=null,p=r.a.Children.map(n,function(t,n){if(!t)return null;if(l&&t.props.disabled)return null;var a=n===e.state.activeTab;return a&&(u=t.props.children),r.a.cloneElement(t,{collapsed:l,isActive:a,changeTab:e._changeTab.bind(e),index:n})}).filter(function(e){return null!==e});return u||(u=p[0].props.children),r.a.createElement("div",{className:i()(this.props.actionButtons?"with-buttons":"",this.props.className)},r.a.createElement("div",{className:"service-selector"},r.a.createElement("ul",{style:s,className:i()("button-group no-margin",o,{segmented:c})},l?r.a.createElement("li",{style:{paddingLeft:10,paddingRight:10,minWidth:"15rem"}},r.a.createElement("select",{value:this.state.activeTab,style:{marginTop:10,marginBottom:10},className:"bts-select",onChange:function(t){var n=parseInt(t.target.value,10);e._changeTab(n,t.target[n].attributes["data-is-link-to"].value)}},p)):p,this.props.actionButtons?r.a.createElement("li",{className:"tabs-action-buttons"},this.props.actionButtons):null)),r.a.createElement("div",{className:i()("tab-content",a)},u))}}]),t}();v.propTypes={setting:s.a.string,defaultActiveTab:s.a.number,segmented:s.a.bool},v.defaultProps={active:0,defaultActiveTab:0,segmented:!0,contentClass:"",style:{}},v=Object(l.a)(v,{listenTo:function(){return[p.a]},getProps:function(){return{viewSettings:p.a.getState().viewSettings}}}),v=Object(m.a)(v)},2022:function(e,t,n){const a=n(32),r=n(2023);let o={},s={},c={};function i(e,t,n,a){o[e]||(o[e]=[]),s[e]||(s[e]=[]),o[e].push(t),s[e].push([n,t,new Date(a)]),c[e]||(c[e]={}),c[e][n]||(c[e][n]={deposit:[],withdrawal:[]}),c[e][n][t>0?"deposit":"withdrawal"].push(t)}function l(e,t,n,a,o,s,c,l,u){return n||(n={amount:"",currency:""}),a||(a={amount:"",currency:""}),o||(o={amount:"",currency:""}),n.amount&&i(n.currency,n.amount,c,s),a.amount&&i(a.currency,-a.amount,c,s),o.amount&&i(o.currency,-o.amount,c,s),e.push([t,r.printAmount(n),n.currency,r.printAmount(a),a.currency,r.printAmount(o),o.currency,"BTS-DEX",u||"",l||"",s]),e}e.exports={parseData:function(e,t,n){let a=[];a.push(["Type","Buy Amount","Buy Currency","Sell Amount","Sell Currency","Fee Amount","Fee Currency","Exchange","Trade Group","Comment","Date"]);let o={};function s(e){o[e]||(o[e]=0),o[e]++}for(let o of Object.keys(e)){const{timestamp:c,type:i,data:u}=e[o];let p=null;switch(i){case"vesting_balance_withdraw":let e=r.parseCurrency(u.amount);p=r.parseCurrency(u.fee),a=l(a,"1.2.30665"===u.owner&&e.amount>1e4?"Income":"Deposit",e,null,p,c,i,`${n} : Vesting balance withdraw`),s(i);break;case"balance_claim":a=l(a,"Deposit",r.parseCurrency(u.total_claimed),null,null,c,i,`${n} : Balance claim`),s(i);break;case"transfer":let o=r.parseCurrency(u.amount);p=r.parseCurrency(u.fee),a=u.to==t?l(a,"1.2.391938"===u.to&&"1.2.381086"===u.from?"Income":"Deposit",o,null,null,c,i,`${n} : From ${u.from}`):l(a,"Withdrawal",null,o,p,c,i,`${n}: To ${u.to}`),s(i);break;case"fill_order":let d=r.parseCurrency(u.pays),h=r.parseCurrency(u.receives);"BTS"!==(p=r.parseCurrency(u.fee)).currency&&(h.currency===p.currency?(h.amount-=p.amount,p.amount=0):d.currency===p.currency&&(d.amount-=p.amount,p.amount=0)),a=l(a,"Trade",h,d,p,c,i),s(i);break;case"asset_issue":{let e=r.parseCurrency(u.asset_to_issue);p=u.issuer===t?r.parseCurrency(u.fee):null,u.issue_to_account===t&&(a=l(a,"Deposit",e,null,p,c,i,`${n} : Issued to account`)),s(i);break}case"account_update":case"proposal_create":case"proposal_update":case"account_whitelist":case"worker_create":case"limit_order_create":case"limit_order_cancel":case"call_order_update":(p=r.parseCurrency(u.fee)).amount>0&&(a=l(a,"Withdrawal",null,p,null,c,i,`${i} fee`),s(i));break;case"account_create":u.registrar===t&&(a=l(a,"Withdrawal",null,p=r.parseCurrency(u.fee),null,c,i,`${i} fee`),s(i));break;case"asset_fund_fee_pool":p=r.parseCurrency(u.fee),a=l(a,"Withdrawal",null,r.parseCurrency({amount:u.amount,asset_id:"1.3.0"}),p,c,i,`${i}`),s(i);break;default:console.log("Unhandled type:",i,u)}}return a},filterEntries:function(e,t,n){if(!t&&!n)return e;let a=Object.keys(e);for(var r=a.length-1;r>=0;r--){let o=a[r],{timestamp:s,type:c,data:i}=e[o];t&&c!==t?delete e[o]:n&&new Date(s).getTime()<n&&delete e[o]}return console.log(`Removed ${a.length-Object.keys(e).length} entries by filtering`),e},groupEntries:function(e){let t={},n=Object.keys(e);for(var r=n.length-1;r>=0;r--){let o=n[r],{timestamp:s,type:c,data:i}=e[o];switch(c){case"fill_order":let n=a(s),r=i.receives.asset_id+"_"+i.pays.asset_id,l=t[r],u=l?a(l.timestamp):null;l&&n.isSame(u,"day")&&l.data.pays.asset_id===i.pays.asset_id&&l.data.receives.asset_id===i.receives.asset_id&&(i.pays.amount=parseInt(i.pays.amount,10)+parseInt(l.data.pays.amount,10),i.receives.amount=parseInt(i.receives.amount,10)+parseInt(l.data.receives.amount,10),i.fee.amount=parseInt(i.fee.amount,10)+parseInt(l.data.fee.amount,10),e[o].data=i,delete e[l.trx_id]),t[r]={data:i,timestamp:s,trx_id:o}}}return console.log(`Removed ${n.length-Object.keys(e).length} fill_order entries by grouping`),e}}},2023:function(e,t,n){const{ChainStore:a}=n(6);e.exports={parseCurrency:function(e){let t=a.getAsset(e.asset_id),n=function(e){if("number"!=typeof e)throw new Error("Input must be a number");return Math.pow(10,e)}((t=t?t.toJS():{precision:5}).precision);return{amount:e.amount/n,currency:t.symbol,asset_id:e.asset_id}},printAmount:function(e){if(!e.amount||!e.currency)return"";let t=a.getAsset(e.asset_id);return t=t?t.toJS():{precision:5},e.amount.toFixed(t.precision)},getIndex:function(e){let t=e.split(".");return parseInt(t[2],10)}}},2024:function(e,t,n){const a=n(2025),r=n(15),{ChainTypes:o,ChainStore:s,FetchChain:c}=n(6),{operations:i}=o,l=Object.keys(i);let u={},p={};function d(e){return new Promise((t,n)=>{if(u[e])return t(u[e]);r.Apis.instance().db_api().exec("get_block",[e]).then(n=>{u[e]=new Date(n.timestamp+"Z"),t(u[e])}).catch(n)})}function h(e){return new Promise((t,n)=>{if(p[e])return t(p[e]);c("getObject",e,void 0,{[e]:!1}).then(n=>{let a=n.toJS();p[e]={symbol:a.symbol.replace(/OPEN\.|BRIDGE\.|RUDEX\.|GDEX\.|BLOCK\./,""),precision:a.precision},t(p[e])}).catch(e=>{n()})})}e.exports={connect:function(){return new Promise(e=>{r.Apis.instance(a.apiNode,!0).init_promise.then(t=>{s.init(!1).then(()=>{e(t)})}).catch(e=>{console.error("Error connection to node:",e)})})},disconnect:function(){r.Apis.instance().close()},getUser:function(e){return new Promise((t,n)=>{c("getAccount",e,void 0,{[e]:!1}).then(e=>{let n=e.toJS();n.balances||(n.balances={}),n.call_orders||(n.call_orders=[]);let a=Object.keys(n.balances);t({accountId:n.id,assets:a,balances:n.balances})}).catch(n)})},getBlockTime:d,getAssetData:h,resolveAssets:function(e,t){return new Promise((n,a)=>{let r=[],o={};e&&e.forEach(e=>{switch(l[e.op[0]]){case"transfer":o[e.op[1].amount.asset_id]=!0,o[e.op[1].fee.asset_id]=!0;break;case"fill_order":o[e.op[1].pays.asset_id]=!0,o[e.op[1].receives.asset_id]=!0,o[e.op[1].fee.asset_id]=!0;break;case"asset_issue":o[e.op[1].asset_to_issue.asset_id]=!0,o[e.op[1].fee.asset_id]=!0}}),t&&t.forEach(e=>{o[e]=!0}),Object.keys(o).forEach(e=>{!p[e]&&e&&r.push(h(e))}),Promise.all(r).then(n).catch(a)})},resolveBlockTimes:function(e){return new Promise((t,n)=>{let a=e.map(e=>(e.block_time&&(u[e.block_num]=new Date(e.block_time)),d(e.block_num)));Promise.all(a).then(t).catch(n)})},getAsset:function(e){return p[e]},getBlock:function(e){return u[e]}}},2025:function(e,t){e.exports={apiNode:"wss://eu.nodes.bitshares.ws",useES:!0,esNode:"https://wrapper.elasticsearch.bitshares.ws",botPaymentAccounts:[]}},2026:function(e,t,n){const a=n(15);let r;e.exports=function(e){return r=e?fetch:n(2027),{getAccountHistory:function(e,t,n,r){return new Promise((o,s)=>{a.Apis.instance().history_api().exec("get_account_history",[e,t,n,r]).then(e=>{o(e)}).catch(s)})},getAccountHistoryES:function(e,t,n,a="https://eswrapper.bitshares.eu"){return console.log("query",`${a}/get_account_history?account_id=${e}&from_=${n}&size=${t}&sort_by=block_data.block_time&type=data&agg_field=operation_type`),new Promise((o,s)=>{r(`${a}/get_account_history?account_id=${e}&from_=${n}&size=${t}&sort_by=block_data.block_time&type=data&agg_field=operation_type`).then(e=>e.json()).then(e=>{let t=e.map(e=>("amount_"in e.operation_history.op_object&&(e.operation_history.op_object.amount=e.operation_history.op_object.amount_),{id:e.account_history.operation_id,op:e.operation_history.op_object,operation_type:e.operation_type,result:JSON.parse(e.operation_history.operation_result),block_num:e.block_data.block_num,block_time:e.block_data.block_time+"Z"}));o(t)}).catch(e=>{console.log("getAccountHistory errror:",e),o([])})})}}}},2027:function(e,t){},2045:function(e,t,n){const{groupEntries:a,parseData:r}=n(2022),{resolveBlockTimes:o,resolveAssets:s}=n(2024),{getAccountHistoryES:c,getAccountHistory:i}=n(2026)(!0);e.exports={groupEntries:a,parseData:r,getAccountHistoryES:c,getAccountHistory:i,resolveBlockTimes:o,resolveAssets:s}},2372:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),s=n.n(o),c=n(16),i=n(2),l=n.n(i),u=n(30),p=n(21),d=n(115),h=n(44),m=n(47),f=n(22),g=n(42),b=n(34),y=n(6),_=n(607),v=n(23),w=n(5),E=n.n(w),k=n(20),A=n(2349),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=function(e){function t(e){S(this,t);var n=T(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={inverseSort:e.viewSettings.get("dashboardSortInverse",!0),sortBy:e.viewSettings.get("dashboardSort","star"),dashboardFilter:e.viewSettings.get("dashboardFilter","")},n}return O(t,r.a.Component),C(t,[{key:"shouldComponentUpdate",value:function(e,t){return!c.a.are_equal_shallow(e.accounts,this.props.accounts)||e.isContactsList!==this.props.isContactsList||e.showMyAccounts!==this.props.showMyAccounts||e.width!==this.props.width||e.showIgnored!==this.props.showIgnored||e.locked!==this.props.locked||e.passwordAccount!==this.props.passwordAccount||!c.a.are_equal_shallow(e.starredAccounts,this.props.starredAccounts)||!c.a.are_equal_shallow(t,this.state)}},{key:"_onStar",value:function(e,t,n){n.preventDefault(),t?g.a.removeStarAccount(e):g.a.addStarAccount(e)}},{key:"_goAccount",value:function(e,t){this.props.history.push("/account/"+e),f.a.changeViewSetting({overviewTab:t})}},{key:"_createAccount",value:function(){this.props.history.push("/create-account/wallet")}},{key:"_onFilter",value:function(e){this.setState({dashboardFilter:e.target.value.toLowerCase()}),f.a.changeViewSetting({dashboardFilter:e.target.value.toLowerCase()})}},{key:"_setSort",value:function(e){var t=e===this.state.sortBy?!this.state.inverseSort:this.state.inverseSort;this.setState({sortBy:e,inverseSort:t}),f.a.changeViewSetting({dashboardSort:e,dashboardSortInverse:t})}},{key:"_onAddContact",value:function(e){g.a.addAccountContact(e)}},{key:"_onRemoveContact",value:function(e){g.a.removeAccountContact(e)}},{key:"_renderList",value:function(e,t){var n=this,a=this.props,o=a.width,i=a.starredAccounts,l=a.isContactsList,u=a.passwordAccount,p=this.state,d=p.dashboardFilter,h=p.sortBy,m=p.inverseSort,f=s.a.List();return e.filter(function(e){if(!e)return!1;var t=e.get("name"),a=v.a.isMyAccount(e)||t===u;return!!l||a===n.props.showMyAccounts}).filter(function(e){return!!e&&-1!==e.get("name").toLowerCase().indexOf(d)}).sort(function(e,t){switch(h){case"star":return function(e,t,n,a){var r=e.get("name"),o=t.get("name"),s=a.has(r),i=a.has(o);return s&&!i?n?-1:1:i&&!s?n?1:-1:r>o?n?1:-1:r<o?n?-1:1:c.a.sortText(r,o,!n)}(e,t,m,i);case"name":return c.a.sortText(e.get("name"),t.get("name"),m)}}).map(function(e){if(e){var a={},s={},c={};f=f.clear();var p=e.get("name"),d=e.get("lifetime_referrer_name")===p;e.get("orders")&&e.get("orders").forEach(function(e,t){var n=y.ChainStore.getObject(e);if(n){var a=n.getIn(["sell_price","base","asset_id"]);c[a]?c[a]+=parseInt(n.get("for_sale"),10):c[a]=parseInt(n.get("for_sale"),10)}}),e.get("call_orders")&&e.get("call_orders").forEach(function(e,t){var n=y.ChainStore.getObject(e);if(n){var r=n.getIn(["call_price","base","asset_id"]);a[r]?a[r]+=parseInt(n.get("collateral"),10):a[r]=parseInt(n.get("collateral"),10);var o=n.getIn(["call_price","quote","asset_id"]);s[o]?s[o]+=parseInt(n.get("debt"),10):s[o]=parseInt(n.get("debt"),10)}});var h=e.get("balances");e.get("balances")&&h.forEach(function(e){var t=y.ChainStore.getObject(e);if(!t||!t.get("balance"))return null;f=f.push(e)});var m=v.a.isMyAccount(e)||p===u,g=i.has(p),w=g?"gold-star":"grey-star";return r.a.createElement("tr",{key:p},r.a.createElement("td",{className:"clickable",onClick:n._onStar.bind(n,p,g)},r.a.createElement(b.a,{className:w,name:"fi-star",title:"icons.fi_star.account"})),l?t&&r.a.createElement("td",{onClick:n._onAddContact.bind(n,p)},r.a.createElement(b.a,{name:"plus-circle",title:"icons.plus_circle.add_contact"}))||r.a.createElement("td",{onClick:n._onRemoveContact.bind(n,p)},r.a.createElement(b.a,{name:"minus-circle",title:"icons.minus_circle.remove_contact"})):null,r.a.createElement("td",{style:{textAlign:"left"}},e.get("id")),r.a.createElement("td",{style:{textAlign:"left",paddingLeft:10},onClick:n._goAccount.bind(n,p,0),className:"clickable"+(m?" my-account":"")},r.a.createElement("span",{className:d?"lifetime":""},p)),r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,p,1),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:[],openOrders:c})),o>=750?r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,p,2),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:[],collateral:a})):null,o>=1200?r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,p,2),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:[],debt:s})):null,r.a.createElement("td",{className:"clickable",onClick:n._goAccount.bind(n,p,0),style:{textAlign:"right"}},r.a.createElement(_.a,{noTip:!0,balances:f,collateral:a,debt:s,openOrders:c})))}})}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.showIgnored,a=e.isContactsList,o=this.state.dashboardFilter,s=this._renderList(this.props.accounts),c=this._renderList(this.props.ignoredAccounts,!0),i=a?E.a.translate("explorer.accounts.filter_contacts"):E.a.translate("explorer.accounts.filter");i+="...";var u=!!k.a.getWallet();return r.a.createElement("div",{style:this.props.style},this.props.compact?null:r.a.createElement("section",{style:{paddingTop:"1rem",paddingLeft:"2rem"}},r.a.createElement("input",{placeholder:i,style:{maxWidth:"20rem",display:"inline-block"},type:"text",value:o,onChange:this._onFilter.bind(this)}),u&&!a?r.a.createElement("div",{onClick:this._createAccount.bind(this),style:{display:"inline-block",marginLeft:5,marginBottom:"1rem"},className:"button small"},r.a.createElement(l.a,{content:"header.create_account"})):null,c&&c.length?r.a.createElement("div",{onClick:this.props.onToggleIgnored,style:{display:"inline-block",float:"right",marginRight:"20px"},className:"button small"},r.a.createElement(l.a,{content:"account."+(this.props.showIgnored?"hide_ignored":"show_ignored")})):null),r.a.createElement("table",{className:"table table-hover dashboard-table",style:{fontSize:"0.85rem"}},this.props.compact?null:r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:this._setSort.bind(this,"star"),className:"clickable"},r.a.createElement(b.a,{className:"grey-star",name:"fi-star",title:"icons.fi_star.sort_accounts"})),a?r.a.createElement("th",null,r.a.createElement(b.a,{name:"user",title:"icons.user.account"})):null,r.a.createElement("th",{style:{textAlign:"left"}},"ID"),r.a.createElement("th",{style:{textAlign:"left",paddingLeft:10},onClick:this._setSort.bind(this,"name"),className:"clickable"},r.a.createElement(l.a,{content:"header.account"})),r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"account.open_orders"})),t>=750?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"account.as_collateral"})):null,t>=1200?r.a.createElement("th",{style:{textAlign:"right"}},r.a.createElement(l.a,{content:"transaction.borrow_amount"})):null,r.a.createElement("th",{style:{textAlign:"right",marginRight:20}},r.a.createElement(l.a,{content:"account.total_value"})))),r.a.createElement("tbody",null,s,n&&c.length?r.a.createElement("tr",{className:"dashboard-table--hiddenAccounts",style:{backgroundColor:"transparent"},key:"hidden"},r.a.createElement("td",{colSpan:"8"},E.a.translate("account.hidden_accounts_row"),":")):null,n&&c)))}}]),t}();x.propTypes={accounts:h.a.ChainAccountsList.isRequired,ignoredAccounts:h.a.ChainAccountsList},x.defaultProps={width:2e3,compact:!1},x=Object(m.a)(x);var j=function(e){function t(){return S(this,t),T(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,r.a.Component),C(t,[{key:"render",value:function(){return r.a.createElement(x,this.props)}}]),t}();j=Object(A.a)(j);var I=Object(u.a)(j,{listenTo:function(){return[p.a,d.a,v.a]},getProps:function(){return{locked:d.a.getState().locked,starredAccounts:v.a.getState().starredAccounts,viewSettings:p.a.getState().viewSettings}}}),N=n(2041),P=n(41),L=n(625),D=n(197),B=n(1991),R=n(117),$=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var M=function(e){function t(){return W(this,t),H(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return z(t,r.a.Component),F(t,[{key:"render",value:function(){return r.a.createElement(R.a,{stores:[v.a,p.a,D.a],inject:{contacts:function(){return v.a.getState().accountContacts},myActiveAccounts:function(){return v.a.getState().myActiveAccounts},myHiddenAccounts:function(){return v.a.getState().myHiddenAccounts},accountsReady:function(){return v.a.getState().accountsLoaded&&v.a.getState().refsLoaded},passwordAccount:function(){return v.a.getState().passwordAccount},currentEntry:p.a.getState().viewSettings.get("dashboardEntry","accounts")}},r.a.createElement(q,this.props))}}]),t}(),q=function(e){function t(e){W(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={width:null,showIgnored:!1,currentEntry:e.currentEntry},n._setDimensions=n._setDimensions.bind(n),n}return z(t,r.a.Component),F(t,[{key:"componentDidMount",value:function(){this._setDimensions(),window.addEventListener("resize",this._setDimensions,{capture:!1,passive:!0})}},{key:"shouldComponentUpdate",value:function(e,t){return e.myActiveAccounts!==this.props.myActiveAccounts||e.contacts!==this.props.contacts||e.ignoredAccounts!==this.props.ignoredAccounts||e.passwordAccount!==this.props.passwordAccount||t.width!==this.state.width||e.accountsReady!==this.props.accountsReady||t.showIgnored!==this.state.showIgnored||t.currentEntry!==this.state.currentEntry}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._setDimensions)}},{key:"_setDimensions",value:function(){var e=window.innerWidth;e!==this.state.width&&this.setState({width:e})}},{key:"_onToggleIgnored",value:function(){this.setState({showIgnored:!this.state.showIgnored})}},{key:"_onSwitchType",value:function(e){this.setState({currentEntry:e}),f.a.changeViewSetting({dashboardEntry:e})}},{key:"render",value:function(){var e=this.props,t=e.myActiveAccounts,n=e.myHiddenAccounts,a=e.accountsReady,o=e.passwordAccount,c=this.state,i=c.width,l=c.showIgnored;o&&!t.has(o)&&(t=t.add(o));var u=t.toArray().sort();o&&-1===u.indexOf(o)&&u.push(o);var p=n.toArray().sort(),d=t.size+n.size+(o?1:0);if(!a)return r.a.createElement(P.a,null);if(!d)return r.a.createElement(L.a,null);var h=this.props.contacts.toArray();return r.a.createElement("div",{ref:"wrapper",className:"grid-block page-layout vertical"},r.a.createElement("div",{ref:"container",className:"tabs-container generic-bordered-box"},r.a.createElement(B.b,{setting:"accountTab",className:"account-tabs",defaultActiveTab:1,segmented:!1,tabsClass:"account-overview no-padding bordered-header content-block"},r.a.createElement(B.a,{title:"account.accounts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(I,{accounts:s.a.List(u),ignoredAccounts:s.a.List(p),width:i,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:l,showMyAccounts:!0})))),r.a.createElement(B.a,{title:"account.contacts"},r.a.createElement("div",{className:"generic-bordered-box"},r.a.createElement("div",{className:"box-content"},r.a.createElement(I,{accounts:h,passwordAccount:o,ignoredAccounts:s.a.List(p),width:i,onToggleIgnored:this._onToggleIgnored.bind(this),showIgnored:l,isContactsList:!0})))),r.a.createElement(B.a,{title:"account.recent"},r.a.createElement(N.a,{accountsList:t,limit:10,compactView:!1,fullHeight:!0,showFilters:!0,dashboard:!0})))))}}]),t}();t.default=function(e){return r.a.createElement(M,$({},e,{onlyAccounts:!0}))}}}]);
//# sourceMappingURL=dashboard-accounts.js.map