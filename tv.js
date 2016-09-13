/*!
* stuQuery version 1.0.1
*/
var eventcache={};function S(h){function f(m,e){var s=new Array();var q,r,p,n,l,o;if(e.indexOf(":eq")>=0){q=e.split(" ");for(p=0;p<q.length;p++){if(p==0){o=c(m,q[p])}else{r=new Array();for(n=0;n<o.length;n++){r=r.concat(c(o[n],q[p]))}o=r.splice(0)}}}else{o=m.querySelectorAll(e)}for(l=0;l<o.length;l++){s.push(o[l])}return s}function c(p,o){var n=-1;var l=new Array();if(o.indexOf(":eq")>0){var j=o.replace(/(.*)\:eq\(([0-9]+)\)/,"$1 $2").split(" ");o=j[0];n=parseInt(j[1])}if(o[0]=="."){els=p.getElementsByClassName(o.substr(1))}else{if(o[0]=="#"){els=p.getElementById(o.substr(1))}else{els=p.getElementsByTagName(o)}}if(!els){els=[]}if(els.nodeName&&els.nodeName=="SELECT"){l.push(els)}else{if(typeof els.length!=="number"){els=[els]}for(k=0;k<els.length;k++){l.push(els[k])}if(n>=0&&l.length>0){if(n<l.length){l=[l[n]]}else{l=[]}}}return l}function a(n,m){var j=false;if(m[0]=="."){m=m.substr(1);for(var l=0;l<n.classList.length;l++){if(n.classList[l]==m){return true}}}else{if(m[0]=="#"){if(n.id==m.substr(1)){return true}}else{if(n.tagName==m.toUpperCase()){return true}}}return false}function d(e){var j;if(typeof e==="string"){this.e=f(document,e)}else{if(typeof e==="object"){this.e=(typeof e.length=="number")?e:[e]}}this.length=(this.e?this.e.length:0);return this}d.prototype.ready=function(e){/in/.test(document.readyState)?setTimeout("S(document).ready("+e+")",9):e()};d.prototype.html=function(j){if(typeof j==="number"){j=""+j}if(typeof j!=="string"&&this.e.length==1){return this.e[0].innerHTML}if(typeof j==="string"){for(var e=0;e<this.e.length;e++){this.e[e].innerHTML=j}}return this};d.prototype.append=function(j){if(!j&&this.e.length==1){return this.e[0].innerHTML}if(j){for(var e=0;e<this.e.length;e++){this.e[e].innerHTML+=j}}return this};d.prototype.prepend=function(l){if(!l&&this.e.length==1){return this.e[0].innerHTML}if(l){for(var m=0;m<this.e.length;m++){this.e[m].innerHTML=l+this.e[m].innerHTML}}return this};d.prototype.before=function(n){var p=document.createElement("div");p.innerHTML=n;var o=p.childNodes;for(var m=0;m<el.length;m++){for(var l=0;l<o.length;l++){el[m].parentNode.insertBefore(o[l],el[m])}}return this};d.prototype.after=function(j){for(var e=0;e<this.e.length;e++){this.e[e].insertAdjacentHTML("afterend",j)}return this};function i(e,l){if(e&&e.length>0){for(var j=0;j<e.length;j++){if(e[j].node==l){return{success:true,match:j}}}}return{success:false}}function g(o,m,l,j,n){if(!eventcache[m]){eventcache[m]=new Array()}eventcache[m].push({node:o,fn:l,fn2:j,data:n})}function b(l){if(eventcache[l.type]){var j=i(eventcache[l.type],l.currentTarget);if(j.success){if(j.match.data){l.data=eventcache[l.type][j.match].data}return{fn:eventcache[l.type][j.match].fn,data:l}}}return function(){return{fn:""}}}d.prototype.off=function(l){if(typeof Element.prototype.removeEventListener!=="function"){Element.prototype.removeEventListener=function(s,p){if(!oListeners.hasOwnProperty(s)){return}var o=oListeners[s];for(var m=-1,n=0;n<o.aEls.length;n++){if(o.aEls[n]===this){m=n;break}}if(m===-1){return}for(var r=0,q=o.aEvts[m];r<q.length;r++){if(q[r]===p){q.splice(r,1)}}}}for(var j=0;j<this.e.length;j++){var e=i(eventcache[l],this.e[j]);if(e.success){this.e[j].removeEventListener(l,eventcache[l][e.match].fn2,false);eventcache[l].splice(e.match,1)}}return this};d.prototype.on=function(m,n,l){m=m||window.event;this.cache=[4,5,6];if(typeof n==="function"&&!l){l=n;n=""}if(typeof l!=="function"){return this}if(this.e.length>0){var o=this;var e=function(p){var q=b({currentTarget:this,type:m,data:n,originalEvent:p});if(typeof q.fn==="function"){return q.fn.call(o,q.data)}};for(var j=0;j<this.e.length;j++){g(this.e[j],m,l,e,n);if(this.e[j].addEventListener){this.e[j].addEventListener(m,e,false)}else{if(this.e[j].attachEvent){this.e[j].attachEvent(m,e)}}}}return this};d.prototype.trigger=function(m){var l;if(document.createEvent){l=document.createEvent("HTMLEvents");l.initEvent(m,true,true)}else{l=document.createEventObject();l.eventType=m}l.eventName=m;for(var j=0;j<this.e.length;j++){if(document.createEvent){this.e[j].dispanelEvent(l)}else{this.e[j].fireEvent("on"+l.eventType,l)}}return this};d.prototype.focus=function(){if(this.e.length==1){this.e[0].focus()}return this};d.prototype.blur=function(){if(this.e.length==1){this.e[0].blur()}return this};d.prototype.remove=function(){if(!this.e){return this}for(var e=this.e.length-1;e>=0;e--){if(!this.e[e]){return}if(typeof this.e[e].remove==="function"){this.e[e].remove()}else{if(typeof this.e[e].parentElement.removeChild==="function"){this.e[e].parentElement.removeChild(this.e[e])}}}return S(this.e)};d.prototype.hasClass=function(j){var e=true;for(var l=0;l<this.e.length;l++){if(!this.e[l].className.match(new RegExp("(\\s|^)"+j+"(\\s|$)"))){e=false}}return e};d.prototype.toggleClass=function(e){for(var j=0;j<this.e.length;j++){if(this.e[j].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this.e[j].className=this.e[j].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"")}else{this.e[j].className=(this.e[j].className+" "+e).replace(/^ /,"")}}return S(this.e)};d.prototype.addClass=function(e){for(var j=0;j<this.e.length;j++){if(!this.e[j].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this.e[j].className=(this.e[j].className+" "+e).replace(/^ /,"")}}return S(this.e)};d.prototype.removeClass=function(e){for(var j=0;j<this.e.length;j++){while(this.e[j].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this.e[j].className=this.e[j].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"").replace(/^ /,"")}}return S(this.e)};d.prototype.css=function(m){var o;for(var l=0;l<this.e.length;l++){o={};var n=this.e[l].getAttribute("style");if(n){var q=this.e[l].getAttribute("style").split(";");for(var j=0;j<q.length;j++){var p=q[j].split(":");if(p.length==2){o[p[0]]=p[1]}}}if(typeof m==="object"){for(key in m){o[key]=m[key]}var e="";for(key in o){if(e){e+=";"}if(o[key]){e+=key+":"+o[key]}}this.e[l].setAttribute("style",e)}}if(this.e.length==1&&typeof m==="string"){return o[m]}return S(this.e)};d.prototype.parent=function(){var j=[];for(var e=0;e<this.e.length;e++){j.push(this.e[e].parentElement)}return S(j)};d.prototype.children=function(m){if(typeof m==="string"){var e=[];for(var j=0;j<this.e.length;j++){for(var l=0;l<this.e[j].children.length;l++){if(a(this.e[j].children[l],m)){e.push(this.e[j].children[l])}}}return S(e)}else{for(var j=0;j<this.e.length;j++){this.e[j]=(this.e[j].children.length>m?this.e[j].children[m]:this.e[j])}return S(this.e)}};d.prototype.find=function(j){var m=[];var e=new Array();for(var l=0;l<this.e.length;l++){e=e.concat(f(this.e[l],j))}return S(e)};d.prototype.attr=function(e,m){var l=[];for(var j=0;j<this.e.length;j++){l.push(this.e[j].getAttribute(e));if(typeof m==="string"||typeof m==="number"){if(m){this.e[j].setAttribute(e,m)}else{this.e[j].removeAttribute(e)}}}if(l.length==1){l=l[0]}if(typeof m==="undefined"){return l}else{return S(this.e)}};d.prototype.prop=function(e,m){var l=[];for(var j=0;j<this.e.length;j++){l.push(this.e[j].getAttribute(e));if(typeof m==="boolean"){if(m){this.e[j].setAttribute(e,e)}else{this.e[j].removeAttribute(e)}}}if(l.length==1){l=l[0]}return l};d.prototype.clone=function(){var e=document.createElement("div");e.appendChild(this.e[0].cloneNode(true));return e.innerHTML};d.prototype.replaceWith=function(j){var l=document.createElement("span");l.innerHTML=j;var m=S(this.e);for(var e=0;e<this.e.length;e++){m.e[0].parentNode.replaceChild(l,m.e[0])}return m};d.prototype.ajax=function(m,l){if(typeof m!=="string"){return false}if(!l){l={}}l.url=m+(typeof l.cache==="boolean" && !l.cache ? '?'+(new Date()).valueOf():'');var o=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");o.addEventListener("load",e);o.addEventListener("error",j);function e(p){if(o.status===200){l.header=o.getAllResponseHeaders();if(typeof l.complete==="function"){l.complete.call((l["this"]?l["this"]:this),(l.dataType=="json")?JSON.parse(o.responseText):o.responseText,l)}}else{j(p)}}function j(p){if(typeof l.error==="function"){l.error.call((l["this"]?l["this"]:this),p,l)}}try{o.open("GET",m)}catch(n){j(n)}try{o.send()}catch(n){j(n)}return this};d.prototype.loadJSON=function(j,l,e){if(!e){e={}}e.dataType="json";e.complete=l;this.ajax(j,e);return this};return new d(h)};


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
			
			if(image){
				S('#screen').css({'background-image':'url("'+p.url+'")','background-color':(p.colour || '')}).html('');
			}else{
				S('#screen').css({'background-image':'','background-color':''}).html('<iframe src="'+p.url+'"></iframe>')
			}
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
		S('#clock').html( d.getFullYear()+'/'+('0'+d.getMonth()).slice(-2)+'/'+('0'+d.getDate()).slice(-2) + ' ' + ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2));
		return this;
	} 

	// Define the Schedule class
	function Schedule(file){
		this.file = file;
		this.update();
		return this;
	}
	Schedule.prototype.update = function(){

		S(document).ajax(this.file,{
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
		S(document).ajax(this.file,{
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
							{'name':'hidenext','format':'boolean'}
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
			newdata.push(datum);
		}
		return newdata;
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

