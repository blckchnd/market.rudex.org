(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{2110:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(111),o=a(2),s=a.n(o),c=a(67),i=a(19),u=a(6),m=a(4),p=a(5),h=a.n(p),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var w=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state=e._getInitialState(),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),d(t,[{key:"_getInitialState",value:function(){return{password:null,brainkey:null,invalid_password:!1}}},{key:"render",value:function(){var e,t=i.a.getWallet().brainkey_backup_date,a=t?l.a.createElement("div",null,l.a.createElement(s.a,{content:"wallet.brainkey_backed_up"}),":"," ",l.a.createElement(r.a,{value:t})):l.a.createElement(s.a,{className:"facolor-error",component:"p",content:"wallet.brainkey_not_backed_up"});if(this.state.verified){var n=u.hash.sha1(this.state.brainkey).toString("hex").substring(0,4);e=l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement(s.a,{content:"wallet.brainkey"})),l.a.createElement(m.Card,null,this.state.brainkey),l.a.createElement("br",null),l.a.createElement("pre",{className:"no-overflow"},"sha1 hash of the brainkey: ",n),l.a.createElement("br",null),a)}if(!e&&this.state.brainkey){n=u.hash.sha1(this.state.brainkey).toString("hex").substring(0,4);e=l.a.createElement("span",null,l.a.createElement("h3",null,l.a.createElement(s.a,{content:"wallet.brainkey"})),l.a.createElement(m.Card,null,this.state.brainkey),l.a.createElement("div",{style:{padding:"10px 0"}},l.a.createElement("pre",{className:"no-overflow"},"sha1 hash of your brainkey: ",n)),l.a.createElement("hr",null),l.a.createElement("div",{style:{padding:"10px 0 20px 0"}},l.a.createElement(s.a,{content:"wallet.brainkey_w1"}),l.a.createElement("br",null),l.a.createElement(s.a,{content:"wallet.brainkey_w2"}),l.a.createElement("br",null),l.a.createElement(s.a,{content:"wallet.brainkey_w3"})),l.a.createElement(m.Button,{type:"primary",onClick:this.onComplete.bind(this)},l.a.createElement(s.a,{content:"wallet.verify"})),l.a.createElement(m.Button,{type:"default",onClick:this.reset.bind(this)},l.a.createElement(s.a,{content:"wallet.cancel"})))}if(!e){this.state.password&&this.state.password;e=l.a.createElement("span",null,l.a.createElement("label",null,l.a.createElement(s.a,{content:"wallet.enter_password"})),l.a.createElement("form",{onSubmit:this.onSubmit.bind(this),className:"name-form",noValidate:!0},l.a.createElement(m.Input,{type:"password",id:"password",onChange:this.onPassword.bind(this)}),l.a.createElement("div",null,a,l.a.createElement("br",null)),l.a.createElement(m.Button,{type:"primary",onClick:this.onSubmit.bind(this)},l.a.createElement(s.a,{content:"wallet.show_brainkey"}))))}return l.a.createElement("div",{className:"grid-block vertical"},l.a.createElement("div",{className:"grid-content no-overflow"},e))}},{key:"onComplete",value:function(e){this.setState({verified:!0}),c.a.setBrainkeyBackupDate()}},{key:"reset",value:function(e){e&&e.preventDefault(),this.setState(this._getInitialState())}},{key:"onBack",value:function(e){e.preventDefault(),window.history.back()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=i.a.isLocked();if(i.a.validatePassword(this.state.password,!0).success){var a=i.a.getBrainKey();t&&i.a.onLock(),this.setState({brainkey:a})}else m.Notification.error({message:h.a.translate("notifications.invalid_password")})}},{key:"onPassword",value:function(e){this.setState({password:e.target.value})}}]),t}(n.Component);t.a=w},2111:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(102),o=a(2),s=a.n(o),c=a(19),i=a(8),u=a.n(i),m=a(3),p=a.n(m),h=a(1),d=a.n(h),w=a(5),f=a.n(w),b=a(4),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var y=b.Form.Item,v=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",confirm:"",errors:u.a.Map(),valid:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),E(t,[{key:"componentDidMount",value:function(){this.refs.firstPassword&&this.refs.firstPassword.focus()}},{key:"formChange",value:function(e){var t={};t["current-password"===e.target.id?"password":"confirm"]=e.target.value,this.setState(t,this.validate)}},{key:"validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.password,a=e.confirm;a=a.trim(),t=t.trim();var n=u.a.Map();0!==t.length&&t.length<8&&(n=n.set("password_length","Password must be 8 characters or more")),""!==t&&""!==a&&t!==a&&(n=n.set("password_match","Passwords do not match"));var l=t.length>=8&&t===a;this.setState({errors:n,valid:l}),this.props.onValid(l?t:null)}},{key:"render",value:function(){var e=this.state,t=e.password,a=e.confirm,n=e.errors,r=this.props.newPassword,o=1;return l.a.createElement("div",{className:p()({"has-error":n.size})},l.a.createElement(y,{label:f.a.translate(r?"wallet.new_password":"wallet.password")},l.a.createElement("section",null,l.a.createElement("input",{type:"password",id:"current-password",autoComplete:"current-password",ref:"firstPassword",onChange:this.formChange.bind(this),value:t,tabIndex:o++}))),l.a.createElement(y,{label:f.a.translate(r?"wallet.new_confirm":"wallet.confirm")},l.a.createElement("section",null,l.a.createElement("input",{type:"password",id:"new-password",autoComplete:"new-password",onChange:this.formChange.bind(this),value:a,tabIndex:o++}))),l.a.createElement("div",{style:{paddingBottom:10}},n.get("password_match")||n.get("password_length")),this.props.children,l.a.createElement("br",null))}}]),t}(n.Component);v.propTypes={onValid:d.a.func.isRequired};var _=v,k=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var N=b.Form.Item,P=function(e){function t(){g(this,t);var e=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={success:!1},e}return O(t,e),k(t,[{key:"onAccept",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.old_password,l=a.new_password;c.a.changePassword(n,l,!0).then((function(){b.Notification.success({message:f.a.translate("notifications.password_change_success")}),t.setState({success:!0})})).catch((function(e){console.error(e),b.Notification.error({message:f.a.translate("notifications.password_change_failure",{error_msg:e})})}))}},{key:"onOldPassword",value:function(e){this.setState({old_password:e})}},{key:"onNewPassword",value:function(e){this.setState({new_password:e})}},{key:"_onCancel",value:function(){this.setState({old_password:""}),this.refs.pwd.cancel()}},{key:"render",value:function(){var e=!!this.state.new_password;return this.state.success?l.a.createElement("div",null,l.a.createElement(s.a,{component:"p",content:"wallet.change_success"}),l.a.createElement(s.a,{component:"p",content:"wallet.change_backup"}),l.a.createElement(r.a,{to:"/wallet/backup/create"},l.a.createElement(b.Button,null,l.a.createElement(s.a,{content:"wallet.create_backup"})))):l.a.createElement("span",null,l.a.createElement(S,{ref:"pwd",onValid:this.onOldPassword.bind(this)},l.a.createElement(_,{onSubmit:this.onAccept.bind(this),newPassword:!0,onValid:this.onNewPassword.bind(this)},l.a.createElement(b.Button,{type:"primary",disabled:!e,htmlType:"submit",style:{marginRight:"16px"},onClick:this.onAccept.bind(this)},l.a.createElement(s.a,{content:"wallet.accept"})),l.a.createElement(b.Button,{onClick:this._onCancel.bind(this)},l.a.createElement(s.a,{content:"wallet.cancel"})))))}}]),t}(n.Component),S=(t.a=P,function(e){function t(){g(this,t);var e=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={password:"",verified:!1},e}return O(t,e),k(t,[{key:"cancel",value:function(){this.setState({verified:!1,password:""})}},{key:"onPassword",value:function(e){e.preventDefault(),c.a.validatePassword(this.state.password,!0).success?(this.setState({verified:!0}),this.props.onValid(this.state.password)):b.Notification.error({message:f.a.translate("notifications.invalid_password")})}},{key:"formChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"render",value:function(){return this.state.verified?l.a.createElement("div",{className:"grid-content"},this.props.children):l.a.createElement(b.Form,{onSubmit:this.onPassword.bind(this)},l.a.createElement(N,{label:f.a.translate("wallet.current_pass")},l.a.createElement("section",null,l.a.createElement(b.Input,{placeholder:f.a.translate("wallet.current_pass"),type:"password",id:"password",autoComplete:"current-password",onChange:this.formChange.bind(this),value:this.state.password})),l.a.createElement(b.Button,{type:"primary",onClick:this.onPassword.bind(this),style:{marginTop:10}},l.a.createElement(s.a,{content:"wallet.submit"}))))}}]),t}(n.Component));S.propTypes={onValid:d.a.func.isRequired};!function(e){function t(){return g(this,t),C(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}O(t,e),k(t,[{key:"render",value:function(){var e=this.props.label||l.a.createElement(s.a,{content:"wallet.reset"});return l.a.createElement("span",{className:"button outline",onClick:this.onReset.bind(this)},e)}},{key:"onReset",value:function(){window.history.back()}}])}(n.Component)},2308:function(e,t,a){"use strict";a.r(t),a.d(t,"WalletOptions",(function(){return T})),a.d(t,"ChangeActiveWallet",(function(){return R})),a.d(t,"WalletDelete",(function(){return I}));var n=a(0),l=a.n(n),r=a(102),o=a(28),s=a(67),c=a(69),i=a(88),u=a(2),m=a.n(u),p=(a(3),a(5)),h=a.n(p),d=a(1964),w=a(1961),f=a(2316),b=a(2055),E=a(2026),y=a(2111),v=a(616),_=a(380),k=a(2110),g=a(4),C=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function P(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var S=g.Form.Item,j=g.Select.Option,x={listenTo:function(){return[i.a]},getProps:function(){return i.a.getState()}},B=function(e){function t(){return O(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return P(t,e),C(t,[{key:"getTitle",value:function(){switch(this.props.location.pathname){case"/wallet/create":return"wallet.create_wallet";case"/wallet/backup/create":return"wallet.create_backup";case"/wallet/backup/restore":return"wallet.restore_backup";case"/wallet/backup/brainkey":return"wallet.backup_brainkey";case"/wallet/delete":return"wallet.delete_wallet";case"/wallet/change-password":return"wallet.change_password";case"/wallet/import-keys":return"wallet.import_keys";default:return"wallet.console"}}},{key:"render",value:function(){return l.a.createElement("div",{className:"grid-block vertical"},l.a.createElement("div",{className:"grid-container",style:{maxWidth:"40rem"}},l.a.createElement("div",{className:"content-block"},l.a.createElement("div",{className:"page-header"},l.a.createElement(m.a,{component:"h3",content:this.getTitle()})),l.a.createElement("div",{className:"content-block"},l.a.createElement(d.a,null,l.a.createElement(w.a,{exact:!0,path:"/wallet",component:T}),l.a.createElement(w.a,{exact:!0,path:"/wallet/change",component:R}),l.a.createElement(w.a,{exact:!0,path:"/wallet/change-password",component:y.a}),l.a.createElement(w.a,{exact:!0,path:"/wallet/import-keys",component:b.a}),l.a.createElement(w.a,{exact:!0,path:"/wallet/brainkey",component:f.ExistingAccountOptions}),l.a.createElement(w.a,{exact:!0,path:"/wallet/create",component:v.b}),l.a.createElement(w.a,{exact:!0,path:"/wallet/delete",component:I}),l.a.createElement(w.a,{exact:!0,path:"/wallet/backup/restore",component:_.b}),l.a.createElement(w.a,{exact:!0,path:"/wallet/backup/create",component:_.a}),l.a.createElement(w.a,{exact:!0,path:"/wallet/backup/brainkey",component:k.a}),l.a.createElement(w.a,{exact:!0,path:"/wallet/balance-claims",component:E.a}))))))}}]),t}(n.Component);B=Object(o.a)(B,x);var T=function(e){function t(){return O(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return P(t,e),C(t,[{key:"render",value:function(){var e=!!this.props.current_wallet,t=this.props.wallet_names.size>1,a=this.props.current_wallet?this.props.current_wallet.toUpperCase():"";return l.a.createElement("span",null,l.a.createElement("div",{className:"grid-block"},l.a.createElement("div",{className:"grid-content"},l.a.createElement(g.Card,null,l.a.createElement("label",null,l.a.createElement(m.a,{content:"wallet.active_wallet"}),":"),l.a.createElement("div",null,a),l.a.createElement("br",null),t?l.a.createElement(r.a,{to:"/wallet/change"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.change_wallet"}))):null)),l.a.createElement("div",{className:"grid-content"},l.a.createElement(g.Card,null,l.a.createElement("label",null,l.a.createElement(m.a,{content:"wallet.import_keys_tool"})),l.a.createElement("div",{style:{visibility:"hidden"}},"Dummy"),l.a.createElement("br",null),e?l.a.createElement(r.a,{to:"/wallet/import-keys"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.import_keys"}))):null)),e?l.a.createElement("div",{className:"grid-content"},l.a.createElement(g.Card,null,l.a.createElement("label",null,l.a.createElement(m.a,{content:"wallet.balance_claims"})),l.a.createElement("div",{style:{visibility:"hidden"}},"Dummy"),l.a.createElement("br",null),l.a.createElement(r.a,{to:"/wallet/balance-claims"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.balance_claim_lookup"}))))):null),e?l.a.createElement(r.a,{to:"/wallet/backup/create"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.create_backup"}))):null,e?l.a.createElement(r.a,{to:"/wallet/backup/brainkey"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.backup_brainkey"}))):null,l.a.createElement(r.a,{to:"/wallet/backup/restore"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.restore_backup"}))),l.a.createElement("br",null),e?l.a.createElement("br",null):null,l.a.createElement(r.a,{to:"/wallet/create"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.new_wallet"}))),e?l.a.createElement(r.a,{to:"/wallet/delete"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.delete_wallet"}))):null,e?l.a.createElement(r.a,{to:"/wallet/change-password"},l.a.createElement("div",{className:"button outline success"},l.a.createElement(m.a,{content:"wallet.change_password"}))):null)}}]),t}(n.Component);T=Object(o.a)(T,x);var R=function(e){function t(){O(this,t);var e=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={},e}return P(t,e),C(t,[{key:"componentWillMount",value:function(){var e=this.props.current_wallet;this.setState({current_wallet:e})}},{key:"componentWillReceiveProps",value:function(e){e.current_wallet!==this.state.current_wallet&&this.setState({current_wallet:e.current_wallet})}},{key:"render",value:function(){var e=i.a.getState(),t=[];e.wallet_names.forEach((function(e){t.push(l.a.createElement(j,{key:e,value:e},e.toLowerCase()))}));var a=this.state.current_wallet!==this.props.current_wallet;return l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement(S,{label:h.a.translate("wallet.active_wallet"),className:"no-offset"},l.a.createElement("ul",{className:"unstyled-list"},l.a.createElement("li",{className:"with-dropdown",style:{borderBottom:0}},e.wallet_names.count()<=1?l.a.createElement(g.Input,{className:"settings--input",defaultValue:this.state.current_wallet,disabled:!0}):l.a.createElement(g.Select,{className:"settings--select",value:this.state.current_wallet,onChange:this.onChange.bind(this)},t))))),l.a.createElement(r.a,{to:"/wallet/create"},l.a.createElement(g.Button,{style:{marginRight:"16px"}},l.a.createElement(m.a,{content:"wallet.new_wallet"}))),a?l.a.createElement(g.Button,{onClick:this.onConfirm.bind(this)},l.a.createElement(m.a,{content:"wallet.change",name:this.state.current_wallet})):null)}},{key:"onConfirm",value:function(){s.a.setWallet(this.state.current_wallet),c.c.reset()}},{key:"onChange",value:function(e){var t=e;this.setState({current_wallet:t})}}]),t}(n.Component);R=Object(o.a)(R,x);var I=function(e){function t(){O(this,t);var e=N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={selected_wallet:null,confirm:0},e}return P(t,e),C(t,[{key:"_onCancel",value:function(){this.setState({confirm:0,selected_wallet:null})}},{key:"render",value:function(){if(1===this.state.confirm)return l.a.createElement("div",{style:{paddingTop:20}},l.a.createElement("h4",null,l.a.createElement(m.a,{content:"wallet.delete_confirm_line1"})),l.a.createElement(m.a,{component:"p",content:"wallet.delete_confirm_line3"}),l.a.createElement("br",null),l.a.createElement(g.Button,{onClick:this.onConfirm2.bind(this),style:{marginRight:"16px"}},l.a.createElement(m.a,{content:"wallet.delete_confirm_line4",name:this.state.selected_wallet})),l.a.createElement(g.Button,{onClick:this._onCancel.bind(this)},l.a.createElement(m.a,{content:"wallet.cancel"})));var e=[l.a.createElement(j,{key:"placeholder",value:" ",disabled:this.props.wallet_names.size>1}," ")];e.push(l.a.createElement(j,{key:"select_option",value:""},h.a.translate("settings.delete_select"),"…")),this.props.wallet_names.forEach((function(t){e.push(l.a.createElement(j,{key:t,value:t},t.toLowerCase()))}));var t=!!this.state.selected_wallet;return l.a.createElement("div",{style:{paddingTop:20}},l.a.createElement("section",null,l.a.createElement(S,{label:h.a.translate("wallet.delete_wallet"),className:"no-offset"},l.a.createElement("ul",{className:"unstyled-list"},l.a.createElement("li",{className:"with-dropdown",style:{borderBottom:0}},l.a.createElement(g.Select,{className:"settings--select",value:this.state.selected_wallet||"",style:{margin:"0 auto"},onChange:this.onChange.bind(this)},e))))),l.a.createElement(g.Button,{disabled:!t,onClick:this.onConfirm.bind(this)},l.a.createElement(m.a,{content:this.state.selected_wallet?"wallet.delete_wallet_name":"wallet.delete_wallet",name:this.state.selected_wallet})))}},{key:"onConfirm",value:function(){this.setState({confirm:1})}},{key:"onConfirm2",value:function(){s.a.deleteWallet(this.state.selected_wallet),this._onCancel()}},{key:"onChange",value:function(e){this.setState({selected_wallet:e})}}]),t}(n.Component);I=Object(o.a)(I,x),t.default=B}}]);
//# sourceMappingURL=wallet.js.map