void 0==window.jQuery&&alert("dzscalendar.js -> jQuery is not defined or improperly declared ( must be included at the start of the head tag ), you need jQuery for this plugin");var settings_dzscalendar={animation_time:500,animation_easing:"swing"};function is_ios(){return-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")||-1!=navigator.platform.indexOf("iPad")}function is_android(){return-1!=navigator.platform.indexOf("Android")}
function is_ie(){return-1!=navigator.appVersion.indexOf("MSIE")?!0:!1}function is_firefox(){return-1!=navigator.userAgent.indexOf("Firefox")?!0:!1}function is_opera(){return-1!=navigator.userAgent.indexOf("Opera")?!0:!1}function is_chrome(){return-1<navigator.userAgent.toLowerCase().indexOf("chrome")}function is_safari(){return-1<navigator.userAgent.toLowerCase().indexOf("safari")}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}
function version_firefox(){if(/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)}function version_opera(){if(/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))return new Number(RegExp.$1)}function is_ie8(){return!0==is_ie()&&9>version_ie()?!0:!1}
(function(e){e.fn.dzscalendar=function(a){a=e.extend({settings_slideshowTime:"5",mode:"normal",settings_autoHeight:"on",settings_skin:"skin-default",start_month:"",start_year:"",start_day:"",start_weekday:"Sunday",design_transition:"default",design_transitionDesc:"tooltipDef",header_weekdayStyle:"default",settings_alwaysinclude6rows:"default",mode_blogevents_container:".content",mode_blogevents_defaultaction:"none",settings_makeFunctional:1,design_month_covers:"http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg http://dummyimage.com/940x350/222224/2e2e2e.jpg".split(" ")},
    a);this.each(function(){function h(){for(b=0;b<f.children(".events").children().length;b++)l=f.children(".events").children().eq(b),k[b]={date:l.attr("data-date"),startdate:l.attr("data-startdate"),enddate:l.attr("data-enddate"),content:l.html(),repeat:l.attr("data-repeat"),day:parseInt(l.attr("data-day"),10),month:parseInt(l.attr("data-month"),10),year:l.attr("data-year"),startday:l.attr("data-startday"),endday:l.attr("data-endday"),type:l.attr("data-type"),href:l.attr("data-href"),tag:l.attr("data-tag")};
    f.children(".events").remove();void 0!=p&&H(u,t)}function X(a){a=e(this);for(b=0;b<f.get(0).arr_datepicker_events.length;b++)f.get(0).arr_datepicker_events[b](a.attr("data-date"))}function I(){if(!0==a.settings_makeFunctional){var n=!1,d=document.URL,c=d.indexOf("://")+3,g=d.indexOf("/",c),d=d.substring(c,g);-1<d.indexOf("a")&&-1<d.indexOf("c")&&-1<d.indexOf("o")&&-1<d.indexOf("l")&&(n=!0);-1<d.indexOf("o")&&-1<d.indexOf("z")&&-1<d.indexOf("e")&&-1<d.indexOf("h")&&-1<d.indexOf("t")&&(n=!0);-1<d.indexOf("e")&&
    -1<d.indexOf("v")&&-1<d.indexOf("n")&&-1<d.indexOf("a")&&-1<d.indexOf("t")&&(n=!0);if(!1==n)return}D=f.width();for(f.removeClass("under-240 under-480");;){if(240>=D){f.addClass("under-240");break}if(480>=D){f.addClass("under-480");break}break}n="";if("responsivefull"==a.header_weekdayStyle){d=[];for(b=0;b<w.length;b++)c=w[b],d[b]=c;if(f.hasClass("under-480"))for(b=0;b<w.length;b++)c=w[b].substr(0,3),d[b]=c;if(f.hasClass("under-240"))for(b=0;b<w.length;b++)c=w[b].substr(0,1),d[b]=c;c=0;"Monday"==a.start_weekday&&
(c=1);for(b=c;b<w.length;b++)n+='<span class="week-day week-day-header">'+d[b]+"</span>";for(b=0;b<c;b++)n+='<span class="week-day week-day-header">'+d[b]+"</span>";f.find(".headerRow").html(n)}}function J(){"tooltipDef"==a.design_transitionDesc&&f.find(".dzstooltip").each(function(){var a=e(this);a.removeClass("currTooltip");a.removeClass("openTooltip");a.animate({opacity:0,left:x+25},{queue:!1,complete:Y,duration:settings_dzscalendar.animation_time/2,easing:settings_dzscalendar.animation_easing})});
    f.css("height",S)}function Z(a){J()}function K(b){var d=e(this);if(0!=f.has(d).length)if(d.hasClass("desc-close-button"))"slide"==a.design_transitionDesc&&(r.animate({top:-O},{queue:!1,duration:settings_dzscalendar.animation_time/1.5,easing:settings_dzscalendar.animation_easing}),P.animate({top:0},{queue:!1,duration:settings_dzscalendar.animation_time/1.5,easing:settings_dzscalendar.animation_easing}),p.animate({top:0},{queue:!1,duration:settings_dzscalendar.animation_time/1.5,easing:settings_dzscalendar.animation_easing}));
else if(J(),d.hasClass("openTooltip"))d.removeClass("openTooltip");else{d.attr("data-date");d.attr("data-year");d.attr("data-month");d.attr("data-day");var c=d.parent().parent().parent().parent().parent(),g=0,F="",g=0,F=d.children(".the-event-content").html();if("blogevents"==a.mode)return c={foo:"bar"},b="",b=window.location.href,b=add_query_arg(b,"dzscal_date",d.attr("data-date")),is_ie()&&9>=version_ie()||can_history_api()?(!1==(is_ie()&&9>=version_ie())&&history.pushState(c,"Gallery Video",b),
    e(a.mode_blogevents_container).html(F),e(a.mode_blogevents_container).addClass("active")):window.location.href=b,!1;void 0!=b&&"click"==b.type&&"link"==k[g].type&&""!=k[g].href&&void 0!=k[g].href&&window.open(k[g].href,"_blank","");if(""!=F){f.find(".openTooltip").each(function(){e(this).removeClass("openTooltip")});d.addClass("openTooltip");b="arrow-left";x=d.offset().left-c.offset().left+d.outerWidth();T=d.offset().top-c.offset().top+5;x+200>e(window).width()&&(b="arrow-right",x=d.offset().left-
    c.offset().left-d.outerWidth()-200);if("tooltipDef"==a.design_transitionDesc&&(f.append('<div class="dzstooltip '+b+' currTooltip" style="left:'+(x-10)+"px; top:"+T+'px;"></div>'),d=f.children(".dzstooltip").last(),d.html(F),d.animate({opacity:1,left:x+10},{queue:!1,duration:settings_dzscalendar.animation_time/1.5,easing:settings_dzscalendar.animation_easing}),d.height()+parseInt(d.css("top"),10)>f.height())){S=f.height();var m=parseInt(d.height(),10),h=parseInt(d.css("top"),10),d=f.height();f.addClass("non-animation").css("height",
    d);setTimeout(function(){f.removeClass("non-animation").css("height",m+h)},10)}"slide"==a.design_transitionDesc&&(f.css({overflow:"hidden"}),f.append('<div class="currDesc slideDescription" style=""></div>'),r=f.find(".currDesc").eq(0),r.html(F),r.append('<div class="desc-close-button">x</div>'),r.css({top:-O,width:U}),r.children("div").css({width:"auto"}),r.animate({top:0},{queue:!1,duration:settings_dzscalendar.animation_time/1.5,easing:settings_dzscalendar.animation_easing}),P.animate({top:L+20},
    {queue:!1,duration:settings_dzscalendar.animation_time/1.5,easing:settings_dzscalendar.animation_easing}),p.animate({top:L+20},{queue:!1,duration:settings_dzscalendar.animation_time/1.5,easing:settings_dzscalendar.animation_easing}),r.children(".desc-close-button").bind("click",K));return!1}}}function Y(){"tooltipDef"==a.design_transitionDesc&&f.find(".dzstooltip").each(function(){var a=e(this);!1==a.hasClass("currTooltip")&&a.remove()})}function $(){var a=t-1,b=u;-1==a&&(a=11,b--);H(b,a)}function aa(){var a=
    t+1,b=u;12==a&&(a=0,b++);H(b,a)}function H(n,d){if("ceva"==window.cev2){var c=!1,g=document.URL,e=g.indexOf("://")+3,h=g.indexOf("/",e),g=g.substring(e,h);-1<g.indexOf("a")&&-1<g.indexOf("c")&&-1<g.indexOf("o")&&-1<g.indexOf("l")&&(c=!0);-1<g.indexOf("o")&&-1<g.indexOf("z")&&-1<g.indexOf("e")&&-1<g.indexOf("h")&&-1<g.indexOf("t")&&(c=!0);-1<g.indexOf("e")&&-1<g.indexOf("v")&&-1<g.indexOf("n")&&-1<g.indexOf("a")&&-1<g.indexOf("t")&&(c=!0);if(!1==c)return}d++;if(!0!=M){M=!0;e=new Date(n,d,0);e.setDate(0);
    var h=d-1,g=0,c='<div class="mon-row">',l=e.getDay();"Monday"==a.start_weekday&&l--;for(b=e=0;b<=l;b++){var c=c+'<span class="week-day other-months-date',z=new Date(n,h,b+2);z<v&&(c+=" past-date");c+='"';c+="><span>";c+=(new Date(n,h,0)).getDate()-l+b;c+="</span></span>";6==e&&(c+="</div>",c+='<div class="mon-row">',e=-1,g++);e++}for(b=0;b<(new Date(n,d,0)).getDate();b++){c+='<span class="week-day curr-months-date';z=new Date(n,d-1,b+1);z.getFullYear()==v.getFullYear()&&z.getMonth()==v.getMonth()&&
        z.getDate()==v.getDate()&&(c+=" today-date");var h=d+"-"+(b+1)+"-"+n,z=n,l=d,q=b+1,s=new Date(n);s.setFullYear(n);s.setMonth(d-1);s.setDate(b+1);var r=!1,A="";for(m=0;m<k.length;m++){var r=!1,B=null;if("undefined"!=typeof k[m].date){var E=String(k[m].date).split("-");E[2]&&(B=new Date(E[2]),B.setFullYear(E[2]),B.setMonth(Number(E[0])-1),B.setDate(Number(E[1])))}if(k[m].date==h||null!=B&&B.getFullYear()==s.getFullYear()&&B.getMonth()==s.getMonth()&&B.getDate()==s.getDate())r=!0;Number(k[m].year)==
    z&&Number(k[m].month)==l&&(Number(k[m].day)==q?r=!0:void 0!=k[m].startday&&k[m].startday<=q&&k[m].endday>=q&&(r=!0));"everymonth"==k[m].repeat&&k[m].day==q&&(r=!0);"everyyear"==k[m].repeat&&k[m].month==l&&k[m].day==q&&(r=!0);if("undefined"!=typeof k[m].startdate){var x=String(k[m].startdate).split("-"),B=parseInt(x[2],10),E=parseInt(x[1],10),x=parseInt(x[0],10),y=String(k[m].enddate).split("-"),D=parseInt(y[2],10),C=parseInt(y[1],10),y=parseInt(y[0],10),D=new Date(D,y-1,C),C=new Date(z,l-1,q);C>=
    new Date(B,x-1,E)&&C<=D&&(r=!0)}!0==r&&(c+=" hasEvent","link"==k[m].type&&(c+="ForHover"),"undefined"!=typeof k[m].tag&&(c+=" tag-"+k[m].tag),A+=k[m].content)}c+='"';c+=' data-date="'+h+'"';c+=' data-day="'+q+'"';c+=' data-month="'+l+'"';c+=' data-year="'+z+'"';c+='><span class="the-number">';c+=b+1;c+="</span>";c+='<span class="the-event-content">'+A+"</span>";c+="</span>";6==e&&(c+="</div>",c+='<div class="mon-row">',e=-1,g++);e++}if("on"==a.settings_alwaysinclude6rows||0<e)for(h=7,"on"==a.settings_alwaysinclude6rows&&
        6>g&&(4==g&&(h=14),5==g&&(h=7)),"on"==a.settings_alwaysinclude6rows&&6<=g&&(h=0),b=0;e<h;b++)c+='<span class="week-day other-months-date',z=new Date(n,d,b+2),z<v&&(c+=" past-date"),c+='"',c+="><span>",c+=b+1,c+="</span></span>",e++,0==e%7&&(c+="</div>",c+='<div class="mon-row">',g++);c+='</div><div class="separator"></div>';0<p.children().length?(p.children().eq(0).removeClass("argTable"),p.children().eq(0).addClass("currTable"),n>u?N=!0:n<u?N=!1:n==u&&(N=d<t?!1:!0)):M=!1;u=n;t=d-1;V=0;"slide3d"!=
    a.design_transition&&(Q.children(".curr-month").html(G[t]),Q.children(".curr-year").html(u));g="";weekDays=[];for(b=0;b<w.length;b++)g=w[b].substr(0,1),weekDays[b]=g;if("three"==a.header_weekdayStyle)for(b=0;b<w.length;b++)g=w[b].substr(0,3),weekDays[b]=g;e=0;"Monday"==a.start_weekday&&(e=1);g='<div class="argTable main-mon"><div class="mon-head"><div class="headerRow">';for(b=e;b<weekDays.length;b++)g+='<span class="week-day week-day-header">'+weekDays[b]+"</span>";for(b=0;b<e;b++)g+='<span class="week-day week-day-header">'+
        weekDays[b]+"</span>";g+='</div><div class="separator"></div>';g+="</div>";g+='<div class="mon-body">'+c+"</div></div>";p.append(g);-1<V&&(J(),"auto"==p.css("height")||0==parseInt(p.css("height"),10)||void 0!=p.attr("data-initheight")&&"auto"==p.attr("data-initheight"))&&(p.animate({height:f.find(".argTable").height()},{queue:!1,duration:300}),p.attr("data-initheight","auto"));ba()}}function ba(){if(1!=p.children().length){C=!1;A=p.children(".currTable");q=p.children(".argTable");"slide"!=a.design_transition&&
    "fade"!=a.design_transition&&"none"!=a.design_transition||A.css({top:0,left:0});if("slide"==a.design_transition&&(C=!0,!0==N?(A.animate({top:0,left:"-100%"},{queue:!1,complete:y,duration:settings_dzscalendar.animation_time,easing:settings_dzscalendar.animation_easing}),q.css({top:0,left:"100%"})):(A.animate({top:0,left:"100%"},{queue:!1,complete:y,duration:settings_dzscalendar.animation_time,easing:settings_dzscalendar.animation_easing}),q.css({top:0,left:"-100%"})),q.animate({top:0,left:0},{queue:!1,
    duration:settings_dzscalendar.animation_time,easing:settings_dzscalendar.animation_easing}),!is_ie8())){for(b=q.find(".mon-body").find(".mon-row").length;-1<b;b--){l=q.find(".mon-body").find(".mon-row").eq(b);l.css({opacity:0});var e=3*settings_dzscalendar.animation_time/(q.find(".mon-body").find(".mon-row").length-b+1);l.delay(settings_dzscalendar.animation_time/2).animate({opacity:1},{queue:!0,duration:e,easing:settings_dzscalendar.animation_easing})}for(b=q.find(".mon-body").find(".mon-row").length;-1<
    b;)break}"fade"==a.design_transition&&(C=!0,A.animate({opacity:0},{queue:!1,complete:y,duration:settings_dzscalendar.animation_time,easing:settings_dzscalendar.animation_easing}),q.css({top:0,left:0,opacity:0}),q.animate({opacity:1},{queue:!1,duration:settings_dzscalendar.animation_time,easing:settings_dzscalendar.animation_easing}));"slide3d"==a.design_transition&&(C=!0,e='<div class="aux-transition-container"><div class="aux-transition"></div></div>',f.append(e),s=f.find(".aux-transition"),s.css({}),
    s.append(f.children(".calendar-controls").clone()),s.append(p.clone()),s.find(".argTable").remove(),s.find(".month-bg").css("background-image","url("+a.design_month_covers[t]+")"),p.find(".currTable").hide(),setTimeout(function(){s.addClass("dzsflipped")},100),s.find(".curr-month").html(G[t]),s.find(".curr-year").html(u),cthis_height=f.height(),"responsivefull"==a.header_weekdayStyle&&I(),setTimeout(y,1200));!1==C&&y()}}function y(){A.remove();"skin-responsive-galileo"==a.settings_skin&&R.find(".month-bg").css("background-image",
        "url("+a.design_month_covers[t]+")");"slide3d"==a.design_transition&&(f.find(".aux-transition-container").remove(),f.find(".curr-month").html(G[t]),f.find(".curr-year").html(u),cthis_height=f.height(),I());M=!1}var f=e(this),W="",D,L;f.children();var V=-1,t=0,u=0,A,R,r,q,s,p,M=!1,N=!1,C=!1,l,U=182,O=138;parseInt(a.settings_slideshowTime);var b=0,m=0,P,Q,k=[],v,x,T,S="auto",G="January February March April May June July August September October November December".split(" "),w="SUNDAY MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY".split(" ");
    "object"==typeof window.arr_weekdays&&1<window.arr_weekdays.length&&(w=window.arr_weekdays);"object"==typeof window.arr_monthnames&&1<window.arr_monthnames.length&&(G=window.arr_monthnames);(function(){W="string"==typeof f.attr("class")?f.attr("class"):f.get(0).className;-1==W.indexOf("skin-")?f.addClass(a.settings_skin):(f.hasClass("skin-default")&&(a.settings_skin="skin-default"),f.hasClass("skin-black")&&(a.settings_skin="skin-black"),f.hasClass("skin-aurora")&&(a.settings_skin="skin-aurora"),
        f.hasClass("skin-responsive")&&(a.settings_skin="skin-responsive"),f.hasClass("skin-responsive-galileo")&&(a.settings_skin="skin-responsive-galileo"));f.addClass("mode-"+a.mode);"skin-black"==a.settings_skin&&(U=192,O=158,D=192,L=158);"skin-aurora"==a.settings_skin&&(D=212,L=220);"skin-responsive-galileo"==a.settings_skin&&("default"==a.design_transition&&(a.design_transition="slide3d"),"default"==a.header_weekdayStyle&&(a.header_weekdayStyle="responsivefull"));"default"==a.design_transitionDesc&&
    (a.design_transitionDesc="tooltipDef");"default"==a.design_transition&&(a.design_transition="slide");"slide3d"==a.design_transition&&(a.settings_alwaysinclude6rows="on");v=new Date;h();f.append('<div class="calendar-controls"><div class="curr-date"><span class="curr-month">'+G[v.getMonth()]+'</span><span class="curr-year">'+v.getFullYear()+'</span></div><div class="arrow-left"><i class="icon-caret-left"></i></div><div class="arrow-right"><i class="icon-caret-right"></i></div></div>');f.append('<div class="theMonths"></div>');Q=f.find(".curr-date");p=f.children(".theMonths");
        R=P=f.children(".calendar-controls");"slide"==a.design_transitionDesc&&p.css({overflow:"hidden"});"slide3d"==a.design_transition&&R.prepend('<div class="month-bg"></div>');f.get(0).arr_datepicker_events=[];f.get(0).api_reinit=h;f.find(".arrow-left").click($);f.find(".arrow-right").click(aa);e(document).delegate(".hasEvent","click",K);e(document).delegate(".hasEventForHover","click",K);"tooltipDef"==a.design_transitionDesc&&(e(document).delegate(".hasEventForHover","mouseenter",K),e(document).delegate(".hasEventForHover",
            "mouseleave",J));"datepicker"==a.mode&&f.delegate(".mon-body .week-day","click",X);t=v.getMonth();u=v.getFullYear();if("blogevents"==a.mode)if(void 0!=get_query_arg(window.location.href,"dzscal_date")){var b=get_query_arg(window.location.href,"dzscal_date"),b=String(b).split("-");b[0]&&(a.start_month=b[0]);b[1]&&(a.start_day=b[1]);b[2]&&(a.start_year=b[2])}else"today"==a.mode_blogevents_defaultaction&&(a.start_month=v.getMonth()+1,a.start_day=v.getDate(),a.start_year=v.getFullYear());""!=a.start_year&&
        (u=parseInt(a.start_year,10));""!=a.start_month&&(t=parseInt(a.start_month,10),t--);H(u,t);A=p.children(".currTable");""!=a.start_day&&(a.start_day=parseInt(a.start_day,10)-1,!1==isNaN(a.start_day)&&(p.find(".curr-months-date").eq(a.start_day).trigger("click"),!1==p.find(".curr-months-date").eq(a.start_day).hasClass("hasEvent")&&(e(a.mode_blogevents_container).html("No events for today. You can see upcoming events in the calendar to the right."),e(a.mode_blogevents_container).addClass("active"))));
        "slide3d"==a.design_transition&&y();e(window).bind("click",Z);e(window).bind("resize",I);I()})();return this})};window.dzscal_init=function(a,h){e(a).dzscalendar(h)}})(jQuery);function can_history_api(){return!(!window.history||!history.pushState)}function get_query_arg(e,a){if(-1<e.indexOf(a+"=")){var h=(new RegExp("[?&]"+a+"=.+")).exec(e);if(null!=h)return h=h[0],-1<h.indexOf("&")&&(h=h.split("&")[1]),h.split("=")[1]}}
function add_query_arg(e,a,h){a=encodeURIComponent(a);h=encodeURIComponent(h);h=a+"="+h;e=e.replace(new RegExp("(&|\\?)"+a+"=[^&]*"),"$1"+h);-1<e.indexOf(a+"=")||(e=-1<e.indexOf("?")?e+("&"+h):e+("?"+h));return e};