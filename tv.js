/*!
 * stuQuery v1.0.5
 */
var eventcache={};function S(g){function d(m,e){var s=new Array();var q,r,p,n,l,o;if(e.indexOf(":eq")>=0){q=e.split(" ");for(p=0;p<q.length;p++){if(p==0){o=i(m,q[p])}else{r=new Array();for(n=0;n<o.length;n++){r=r.concat(i(o[n],q[p]))}o=r.splice(0)}}}else{o=m.querySelectorAll(e)}for(l=0;l<o.length;l++){s.push(o[l])}return s}function i(q,p){var o=-1;var n=new Array();if(p.indexOf(":eq")>0){var l=p.replace(/(.*)\:eq\(([0-9]+)\)/,"$1 $2").split(" ");p=l[0];o=parseInt(l[1])}if(p[0]=="."){els=q.getElementsByClassName(p.substr(1))}else{if(p[0]=="#"){els=q.getElementById(p.substr(1))}else{els=q.getElementsByTagName(p)}}if(!els){els=[]}if(els.nodeName&&els.nodeName=="SELECT"){n.push(els)}else{if(typeof els.length!=="number"){els=[els]}for(k=0;k<els.length;k++){n.push(els[k])}if(o>=0&&n.length>0){if(o<n.length){n=[n[o]]}else{n=[]}}}return n}function c(o,n){var l=false;if(n[0]=="."){n=n.substr(1);for(var m=0;m<o.classList.length;m++){if(o.classList[m]==n){return true}}}else{if(n[0]=="#"){if(o.id==n.substr(1)){return true}}else{if(o.tagName==n.toUpperCase()){return true}}}return false}function f(e){var m;if(typeof e==="string"){this.e=d(document,e)}else{if(typeof e==="object"){this.e=(typeof e.length=="number")?e:[e]}}for(var l in this.e){this[l]=this.e[l]}this.length=(this.e?this.e.length:0);return this}f.prototype.ready=function(e){/in/.test(document.readyState)?setTimeout("S(document).ready("+e+")",9):e()};f.prototype.html=function(l){if(typeof l==="number"){l=""+l}if(typeof l!=="string"&&this.length==1){return this[0].innerHTML}if(typeof l==="string"){for(var e=0;e<this.length;e++){this[e].innerHTML=l}}return this};f.prototype.append=function(l){if(!l&&this.length==1){return this[0].innerHTML}if(l){for(var e=0;e<this.length;e++){this[e].innerHTML+=l}}return this};f.prototype.prepend=function(l){if(!l&&this.length==1){return this[0].innerHTML}if(l){for(var m=0;m<this.length;m++){this[m].innerHTML=l+this[m].innerHTML}}return this};f.prototype.before=function(n){var m,p,o,l;for(m=0;m<this.length;m++){p=document.createElement("div");p.innerHTML=n;o=p.childNodes;for(l=0;l<o.length;l++){this[m].parentNode.insertBefore(o[l],this[m])}}return this};f.prototype.after=function(l){for(var e=0;e<this.length;e++){this[e].insertAdjacentHTML("afterend",l)}return this};function b(e,m){if(e&&e.length>0){for(var l=0;l<e.length;l++){if(e[l].node==m){return{success:true,match:l}}}}return{success:false}}function j(p,n,m,l,o){if(!eventcache[n]){eventcache[n]=new Array()}eventcache[n].push({node:p,fn:m,fn2:l,data:o})}function h(n){if(eventcache[n.type]){var l=b(eventcache[n.type],n.currentTarget);if(l.success){if(l.match.data){n.data=eventcache[n.type][l.match].data}return{fn:eventcache[n.type][l.match].fn,data:n}}}return function(){return{fn:""}}}f.prototype.off=function(n){if(typeof Element.prototype.removeEventListener!=="function"){Element.prototype.removeEventListener=function(t,q){if(!oListeners.hasOwnProperty(t)){return}var p=oListeners[t];for(var m=-1,o=0;o<p.aEls.length;o++){if(p.aEls[o]===this){m=o;break}}if(m===-1){return}for(var s=0,r=p.aEvts[m];s<r.length;s++){if(r[s]===q){r.splice(s,1)}}}}for(var l=0;l<this.length;l++){var e=b(eventcache[n],this.e[l]);if(e.success){this[l].removeEventListener(n,eventcache[n][e.match].fn2,false);eventcache[n].splice(e.match,1)}}return this};f.prototype.on=function(n,o,m){n=n||window.event;this.cache=[4,5,6];if(typeof o==="function"&&!m){m=o;o=""}if(typeof m!=="function"){return this}if(this.length>0){var p=this;var e=function(q){var r=h({currentTarget:this,type:n,data:o,originalEvent:q,preventDefault:function(){if(q.preventDefault){q.preventDefault()}},stopPropagation:function(){if(q.stopImmediatePropagation){q.stopImmediatePropagation()}if(q.stopPropagation){q.stopPropagation()}if(q.cancelBubble!=null){q.cancelBubble=true}}});if(typeof r.fn==="function"){return r.fn.call(p,r.data)}};for(var l=0;l<this.length;l++){j(this[l],n,m,e,o);if(this[l].addEventListener){this[l].addEventListener(n,e,false)}else{if(this[l].attachEvent){this[l].attachEvent(n,e)}}}}return this};f.prototype.trigger=function(n){var m;if(document.createEvent){m=document.createEvent("HTMLEvents");m.initEvent(n,true,true)}else{m=document.createEventObject();m.eventType=n}m.eventName=n;for(var l=0;l<this.length;l++){if(document.createEvent){this[l].dispatchEvent(m)}else{this[l].fireEvent("on"+m.eventType,m)}}return this};f.prototype.focus=function(){if(this.length==1){this[0].focus()}return this};f.prototype.blur=function(){if(this.length==1){this[0].blur()}return this};f.prototype.remove=function(){if(this.length<1){return this}for(var e=this.length-1;e>=0;e--){if(!this[e]){return}if(typeof this[e].remove==="function"){this[e].remove()}else{if(typeof this[e].parentElement.removeChild==="function"){this[e].parentElement.removeChild(this[e])}}}return this};f.prototype.hasClass=function(l){var e=true;for(var m=0;m<this.length;m++){if(!this[m].className.match(new RegExp("(\\s|^)"+l+"(\\s|$)"))){e=false}}return e};f.prototype.toggleClass=function(e){for(var l=0;l<this.length;l++){if(this[l].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this[l].className=this[l].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"")}else{this[l].className=(this[l].className+" "+e).replace(/^ /,"")}}return this};f.prototype.addClass=function(e){for(var l=0;l<this.length;l++){if(!this[l].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this[l].className=(this[l].className+" "+e).replace(/^ /,"")}}return this};f.prototype.removeClass=function(e){for(var l=0;l<this.length;l++){while(this[l].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this[l].className=this[l].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"").replace(/^ /,"")}}return this};f.prototype.css=function(n){var p;for(var m=0;m<this.length;m++){p={};var o=this[m].getAttribute("style");if(o){var r=this[m].getAttribute("style").split(";");for(var l=0;l<r.length;l++){var q=r[l].split(":");if(q.length==2){p[q[0]]=q[1]}}}if(typeof n==="object"){for(key in n){p[key]=n[key]}var e="";for(key in p){if(e){e+=";"}if(p[key]){e+=key+":"+p[key]}}this[m].setAttribute("style",e)}}if(this.length==1&&typeof n==="string"){return p[n]}return this};f.prototype.parent=function(){var l=[];for(var e=0;e<this.length;e++){l.push(this[e].parentElement)}return S(l)};f.prototype.children=function(n){if(typeof n==="string"){var e=[];for(var l=0;l<this.length;l++){for(var m=0;m<this[l].children.length;m++){if(c(this[l].children[m],n)){e.push(this[l].children[m])}}}return S(e)}else{for(var l=0;l<this.length;l++){this[l]=(this[l].children.length>n?this[l].children[n]:this[l])}return this}};f.prototype.find=function(l){var n=[];var e=new Array();for(var m=0;m<this.length;m++){e=e.concat(d(this[m],l))}return S(e)};function a(q,e,r,l){var p=[];for(var o=0;o<q.length;o++){p.push(q[o].getAttribute(e));var n=false;for(var m in l){if(typeof r===l[m]){n=true}}if(n){if(r){q[o].setAttribute(e,r)}else{q[o].removeAttribute(e)}}}if(p.length==1){p=p[0]}if(typeof r==="undefined"){return p}else{return q}}f.prototype.attr=function(e,l){return a(this,e,l,["string","number"])};f.prototype.prop=function(e,l){return a(this,e,l,["boolean"])};f.prototype.clone=function(){var e=document.createElement("div");e.appendChild(this[0].cloneNode(true));return e.innerHTML};f.prototype.replaceWith=function(l){var m=document.createElement("span");m.innerHTML=l;var n=S(this.e);for(var e=0;e<this.length;e++){n[0].parentNode.replaceChild(m,n[0])}return n};f.prototype.outerWidth=function(){if(this.length>1){return}var e=getComputedStyle(this[0]);return this[0].offsetWidth+parseInt(e.marginLeft)+parseInt(e.marginRight)};f.prototype.offset=function(){return this[0].getBoundingClientRect()};f.prototype.position=function(){if(this.length>1){return}return{left:this[0].offsetLeft,top:this[0].offsetTop}};f.prototype.ajax=function(n,m){if(typeof n!=="string"){return false}if(!m){m={}}m.url=n+(typeof m.cache==="boolean"&&!m.cache?"?"+(new Date()).valueOf():"");var p=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");p.addEventListener("load",e);p.addEventListener("error",l);function e(q){if(p.status===200){m.header=p.getAllResponseHeaders();if(typeof m.complete==="function"){m.complete.call((m["this"]?m["this"]:this),(m.dataType=="json")?JSON.parse(p.responseText):p.responseText,m)}}else{l(q)}}function l(q){if(typeof m.error==="function"){m.error.call((m["this"]?m["this"]:this),q,m)}}try{p.open("GET",n)}catch(o){l(o)}try{p.send()}catch(o){l(o)}return this};f.prototype.loadJSON=function(l,m,e){if(!e){e={}}e.dataType="json";e.complete=m;this.ajax(l,e);return this};return new f(g)};


/*!
* ODI Leeds TV (version 1)
*/
var tv;
S(document).ready(function(){
	tv = new TV();	
});

function TV(){

	// Full Screen API - http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/
	var fullScreenApi = { 
			supportsFullScreen: false,
			isFullScreen: function() { return false; }, 
			requestFullScreen: function() {}, 
			cancelFullScreen: function() {},
			fullScreenEventName: '',
			prefix: ''
		},
		browserPrefixes = 'webkit moz o ms khtml'.split(' ');
	
	// check for native support
	if(typeof document.cancelFullScreen != 'undefined') {
		fullScreenApi.supportsFullScreen = true;
	}else{	 
		// check for fullscreen support by vendor prefix
		for(var i = 0, il = browserPrefixes.length; i < il; i++ ) {
			fullScreenApi.prefix = browserPrefixes[i];
			if(typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' ) {
				fullScreenApi.supportsFullScreen = true;
				break;
			}
		}
	}
	
	// update methods to do something useful
	if(fullScreenApi.supportsFullScreen) {
		fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
		
		fullScreenApi.isFullScreen = function() {
			switch (this.prefix) {	
				case '':
					return document.fullScreen;
				case 'webkit':
					return document.webkitIsFullScreen;
				default:
					return document[this.prefix + 'FullScreen'];
			}
		}
		fullScreenApi.requestFullScreen = function(el) {
			return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
		}
		fullScreenApi.cancelFullScreen = function(el) {
			return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
		}		
	}
	// export api
	window.fullScreenApi = fullScreenApi;
	// End of Full Screen API

	// TV functions
	this.resize = function(){
		// Create ourselves an empty stylesheet that we can update later
		S('#customstylesheet').html('body { font-size: '+(Math.round(document.body.offsetWidth/50))+'px; }');

		return this;
	}
	this.toggleFullScreen = function(){
		// Get the container
		var elem = S("body").e[0];

		if(fullScreenApi.isFullScreen()){
			fullScreenApi.cancelFullScreen(elem);
			this.fullscreen = false;
			S('body').removeClass('fullscreen');
		}else{
			fullScreenApi.requestFullScreen(elem);
			this.fullscreen = true;
			S('body').addClass('fullscreen');
		}
		return this;
	}
	this.update = function(){
		this.tick();
		
		return this;
	}
	this.updateOverlays = function(logo,clock,next){
		console.log(logo,clock,next);
		if(clock) S('#clock').css({'opacity':'0'});
		else S('#clock').css({'opacity':'1'});
		if(logo) S('#logo').css({'opacity':'0'});
		else S('#logo').css({'opacity':'1'});
		if(next) S('#next').css({'opacity':'0'});
		else S('#next').css({'opacity':'1'});

		return this;
	}
	
	
	function getStyleSheetPropertyValue(selectorText, propertyName) {
		// search backwards because the last match is more likely the right one
		for(var s= document.styleSheets.length - 1; s >= 0; s--) {
			// Use a try/catch to stop Firefox throwing a security error for stylesheets originating from a different domain. 
			// See http://stackoverflow.com/questions/21642277/security-error-the-operation-is-insecure-in-firefox-document-stylesheets?noredirect=1&lq=1
			try {
				var cssRules = document.styleSheets[s].rules || document.styleSheets[s].cssRules
				for (var c=0; c < cssRules.length; c++) {
					if (cssRules[c].selectorText === selectorText) return cssRules[c].style[propertyName];
				}
			}catch(e){

			}
		}
		return null;
	}
		
	this.setProgramme = function(i){
		if(this.programmes.loaded){
			if(!i){
				if(this.nextprogramme){
					i = this.nextprogramme;
					this.nextprogramme = -1;
				}else{
					i = Math.floor(Math.random()*this.programmes.slides.length);
					this.nextprogramme = -1;
				}
			}
			next = i;
			// Randomly select the next slide (it should be different to the current one if possible)
			if(this.programmes.slides.length > 1){
				while(next == i) next = Math.floor(Math.random()*this.programmes.slides.length);
			}
			this.nextprogramme = next;
			var p = this.programmes.slides[i];
			image = false;
			if(p.url.lastIndexOf(".png")==p.url.length-4 || p.url.lastIndexOf(".jpg")==p.url.length-4) image = true;
			
			if(image) S('#screen').css({'background-image':'url("'+p.url+'")','background-color':(p.colour || '')}).html('');
			else S('#screen').css({'background-image':'','background-color':''}).html('<iframe src="'+p.url+'"></iframe>');
			
			S('#logo img.dark').css({'display':(p.darklogo ? 'block' : 'none')});
			S('#logo img.light').css({'display':(p.darklogo ? 'none' : 'block')});
			
			S('#next').html('Next: '+this.programmes.slides[next].title);
			var d = (p.duration*1000) || 30000;
			this.updateOverlays(p.hidelogo,p.hideclock,p.hidenext);
			this.intervalNext = setTimeout((function(self) { return function(){ self.next(); } })(this),d);
		}
		return this;
	}
	this.next = function(){
		if(this.programmes.loaded) this.setProgramme();
		else this.intervalNext = setTimeout((function(self) { return function(){ self.next(); } })(this),1000); // We haven't yet loaded so try again shortly
		return this;
	}
	this.tick = function(){
		var d = new Date();
		S('#clock').html( d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2) + ' ' + ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2));
		return this;
	} 

	// Define the Schedule class
	function Schedule(file){
		this.file = file;
		this.update();
		return this;
	}
	Schedule.prototype.update = function(){

		S(document).ajax(this.file+'?'+Math.random(),{
			'complete': this.loadedSchedule,
			'error': this.failSchedule,
			'this': this,
			'cache': false
		});
		return this;
	}
	Schedule.prototype.loadedSchedule = function(data){
		console.log('loaded schedule',data)
		return this;
	}
	Schedule.prototype.failSchedule = function(e){
		console.log('failed to load schedule',e)
		return this;
	}
	
	function Programmes(file){
		this.file = file;
		this.update();
		this.loaded = false;
		return this;
	}
	Programmes.prototype.update = function(){
		S(document).ajax(this.file+'?'+Math.random(),{
			'complete': this.loaded,
			'error': this.fail,
			'this': this,
			'cache': false
		});
		return this;
	}
	Programmes.prototype.loaded = function(data){
		this.slides = CSV2JSON(data,[{'name':'ID','format':'number'},
							{'name':'url','format':'url'},
							{'name':'title','format':'string'},
							{'name':'duration','format':'number'},
							{'name':'colour','format':'string'},
							{'name':'hidelogo','format':'boolean'},
							{'name':'hideclock','format':'boolean'},
							{'name':'hidenext','format':'boolean'},
							{'name':'darklogo','format':'boolean'}
							]);
		this.loaded = true;
		return this;
	}
	Programmes.prototype.fail = function(e){
		console.log('failed to load programmes',e)
		return this;
	}
	function CSV2JSON(data,format,start,end){

		if(typeof start!=="number") start = 1;
		var delim = ",";

		if(typeof data==="string"){
			data = data.replace(/\r/,'');
			data = data.split(/[\n]/);
		}
		if(typeof end!=="number") end = data.length;

		if(data[0].indexOf("\t") > 0) delim = /\t/;

		var line,datum;
		var newdata = new Array();
		for(var i = start; i < end; i++){
			data[i] = data[i].replace(/[\n\r]/,'');
			line = data[i].split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/);
			datum = {};
			for(var j=0; j < line.length; j++){
				// Remove any quotes around the column value
				line[j] = (line[j][0]=='"' && line[j][line[j].length-1]=='"') ? line[j].substring(1,line[j].length-1) : line[j];

				if(format[j]){
					if(format[j].format=="number"){
						if(line[j]!=""){
							if(line[j]=="infinity" || line[j]=="Inf") datum[format[j].name] = Number.POSITIVE_INFINITY;
							else datum[format[j].name] = parseFloat(line[j]);
						}
					}else if(format[j].format=="eval"){
						if(line[j]!="") datum[format[j].name] = eval(line[j]);
					}else if(format[j].format=="date"){
						if(line[j]) datum[format[j].name] = new Date(line[j].replace(/^"/,"").replace(/"$/,""));
						else datum[format[j].name] = null;
					}else if(format[j].format=="url"){
						// Zap any invalid URLs
						if(line[j].search(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/) >= 0) datum[format[j].name] = line[j];
						else datum[format[j].name] = "";
					}else if(format[j].format=="boolean"){
						if(line[j]=="1" || line[j]=="true" || line[j]=="Y") datum[format[j].name] = true;
						else if(line[j]=="0" || line[j]=="false" || line[j]=="N") datum[format[j].name] = false;
						else datum[format[j].name] = false;	// default
					}else{
						datum[format[j].name] = (line[j][0]=='"' && line[j][line[j].length-1]=='"') ? line[j].substring(1,line[j].length-1) : line[j];
					}
				}else{
					datum[j] = (line[j][0]=='"' && line[j][line[j].length-1]=='"') ? line[j].substring(1,line[j].length-1) : line[j];
				}
			}
			if(!isEmptyObject(datum)){
				newdata.push(datum);
			}
		}
		return newdata;
	}
	function isEmptyObject(obj) {
		for(var prop in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, prop)) return false;
		}
		return true
	}
	this.init = function(){
		// Create ourselves an empty stylesheet that we can update later
		S('body').append('<style id="customstylesheet"></style>');
		var _obj = this;
		window.addEventListener('resize',function(e){ _obj.resize(); });
		this.resize();
		// Start the TV
		this.update();
		this.next();
		this.intervalID = setInterval((function(self) { return function(){ self.update(); } })(this),1000);
		this.intervalSchedule = setInterval((function(self) { return function(){ self.schedule.update(); } })(this),60000);
		this.intervalProgrammes = setInterval((function(self) { return function(){ self.programmes.update(); } })(this),60000);
		S('#screen, #clock').on('click',{me:this},function(e){ e.data.me.toggleFullScreen(); });
		S('#next').on('click',{me:this},function(e){ clearTimeout(e.data.me.intervalNext); e.data.me.next(); });
		return this;
	}

	// Define variables
	this.show = { 'dog': true, 'clock': true, 'next': true };
	this.schedule = new Schedule('data/schedule.csv');
	this.programmes = new Programmes('data/programmes.csv');

	this.init();

	return this;
}
