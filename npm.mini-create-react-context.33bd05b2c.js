(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{tEiQ:function(t,e,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("VbXa"),s=n.n(i),u=n("17x9"),c=n.n(u),a=n("fZtv"),p=n.n(a),v=1073741823;var f=r.a.createContext||function(t,e){var n,r,i="__create-react-context-"+p()()+"__",u=function(t){function n(){var e,n,o;return(e=t.apply(this,arguments)||this).emitter=(n=e.props.value,o=[],{on:function(t){o.push(t)},off:function(t){o=o.filter((function(e){return e!==t}))},get:function(){return n},set:function(t,e){n=t,o.forEach((function(t){return t(n,e)}))}}),e}s()(n,t);var o=n.prototype;return o.getChildContext=function(){var t;return(t={})[i]=this.emitter,t},o.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,o=this.props.value,r=t.value;((i=o)===(s=r)?0!==i||1/i==1/s:i!=i&&s!=s)?n=0:(n="function"==typeof e?e(o,r):v,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,s},o.render=function(){return this.props.children},n}(o.Component);u.childContextTypes=((n={})[i]=c.a.object.isRequired,n);var a=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}s()(n,e);var o=n.prototype;return o.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?v:e},o.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?v:t},o.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},o.getValue=function(){return this.context[i]?this.context[i].get():t},o.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(o.Component);return a.contextTypes=((r={})[i]=c.a.object,r),{Provider:u,Consumer:a}};e.a=f}}]);