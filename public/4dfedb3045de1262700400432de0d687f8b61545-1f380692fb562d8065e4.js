/*! For license information please see 4dfedb3045de1262700400432de0d687f8b61545-1f380692fb562d8065e4.js.LICENSE.txt */
(self.webpackChunkvenzo_site=self.webpackChunkvenzo_site||[]).push([[827],{9512:function(e,t,o){"use strict";o.d(t,{kV:function(){return s}});var i=o(7294),n="https://platform.twitter.com/widgets.js",r="createTimeline",s=function(e){var t=i.useRef(null),s=i.useState(!0),a=s[0],l=s[1];return i.useEffect((function(){var i=!0;return o(5277)(n,"twitter-embed",(function(){if(window.twttr){if(i){if(!window.twttr.widgets[r])return void console.error("Method "+r+" is not present anymore in twttr.widget api");var o=function(){var o,i,n=Object.assign({},e.options);return null!=e&&e.autoHeight&&(n.height=null===(o=t.current)||void 0===o||null===(i=o.parentNode)||void 0===i?void 0:i.offsetHeight),n=Object.assign({},n,{theme:null==e?void 0:e.theme,linkColor:null==e?void 0:e.linkColor,borderColor:null==e?void 0:e.borderColor,lang:null==e?void 0:e.lang,tweetLimit:null==e?void 0:e.tweetLimit,ariaPolite:null==e?void 0:e.ariaPolite})}();o=function(t){return t.chrome="",e.noHeader&&(t.chrome=t.chrome+" noheader"),e.noFooter&&(t.chrome=t.chrome+" nofooter"),e.noBorders&&(t.chrome=t.chrome+" noborders"),e.noScrollbar&&(t.chrome=t.chrome+" noscrollbar"),e.transparent&&(t.chrome=t.chrome+" transparent"),t}(o),window.twttr.widgets[r]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null==t?void 0:t.current,o).then((function(t){l(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){i=!1}}),[]),i.createElement(i.Fragment,null,a&&i.createElement(i.Fragment,null,e.placeholder),i.createElement("div",{ref:t}))}},5277:function(e,t,o){var i,n,r;r=function(){var e,t,o=document,i=o.getElementsByTagName("head")[0],n="push",r="readyState",s="onreadystatechange",a={},l={},u={},c={};function g(e,t){for(var o=0,i=e.length;o<i;++o)if(!t(e[o]))return!1;return 1}function m(e,t){g(e,(function(e){return t(e),1}))}function d(t,o,i){t=t[n]?t:[t];var r=o&&o.call,s=r?o:i,h=r?t.join(""):o,b=t.length;function f(e){return e.call?e():a[e]}function v(){if(!--b)for(var e in a[h]=1,s&&s(),u)g(e.split("|"),f)&&!m(u[e],f)&&(u[e]=[])}return setTimeout((function(){m(t,(function t(o,i){return null===o?v():(i||/^https?:\/\//.test(o)||!e||(o=-1===o.indexOf(".js")?e+o+".js":e+o),c[o]?(h&&(l[h]=1),2==c[o]?v():setTimeout((function(){t(o,!0)}),0)):(c[o]=1,h&&(l[h]=1),void p(o,v)))}))}),0),d}function p(e,n){var a,l=o.createElement("script");l.onload=l.onerror=l[s]=function(){l[r]&&!/^c|loade/.test(l[r])||a||(l.onload=l[s]=null,a=1,c[e]=2,n())},l.async=1,l.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,i.insertBefore(l,i.lastChild)}return d.get=p,d.order=function(e,t,o){!function i(n){n=e.shift(),e.length?d(n,i):d(n,t,o)}()},d.path=function(t){e=t},d.urlArgs=function(e){t=e},d.ready=function(e,t,o){e=e[n]?e:[e];var i,r=[];return!m(e,(function(e){a[e]||r[n](e)}))&&g(e,(function(e){return a[e]}))?t():(i=e.join("|"),u[i]=u[i]||[],u[i][n](t),o&&o(r)),d},d.done=function(e){d([null],e)},d},e.exports?e.exports=r():void 0===(n="function"==typeof(i=r)?i.call(t,o,t,e):i)||(e.exports=n)},1889:function(e,t,o){"use strict";o.p},9758:function(e,t,o){"use strict";o.p},9411:function(e){"use strict";e.exports=JSON.parse('[{"images":"../images/blogsPic/blog0.png","title1":"New Product Development; Winner’s Guide","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …","subTitle":"All Categories  |   May 26, 2022 | Karthik","route":"/blog/stages-of-new-product-development-process"},{"images":"../images/blogsPic/blog1.png","title1":"Selenium the Most Popular Test Automation Tool; A Superlative Guide To Selenium Testing","subTitle":"All Categories  |   February 16, 2022 | Arun Charles","route":"/blog/why-selenium-is-most-widely-used-test-automation-tool","content1":"The most important element in the software development lifecycle is testing, which has the primary goal of ensuring bug-free software that fulfills client requirements.. …"},{"images":"../images/blogsPic/blog2.png","title1":"How To Choose Between React Native And Ionic For Your App","subTitle":"All Categories   |   December 20, 2021 | Kristen","route":"/blog/react-native-vs-ionic","content1":"React Native and Ionic are two such technologies for creating user interfaces that are extensively used by developers..."},{"images":"../images/blogsPic/reactjs1.webp","title1":"ReactJS Framework Working Wonders For Modern Web Development Businesses","content1":"If we consider a current estimate, there are over 2,20,000 live websites that are built-in ReactJS, reflecting …","subTitle":"All Categories | November 29th, 2021 | Vasanth","route":"/blog/reason-to-use-reactjs-for-web-development"},{"images":"../images/blogsPic/blog3.png","title1":"Top-15 Mobile App Ideas that Will Drive Your Start-Up Ahead","content1":"Introduction A terrific app idea is what drives your start-up business ahead and enables you to spin money. It is an online …","subTitle":" All Categories   |   November 29, 2021 | Elamparithi ","route":"/blog/top-mobile-app-ideas-that-will-drive-your-start-up-ahead"},{"images":"../images/blogsPic/blog4.png","title1":"Significant Benefits and Why Your Company Requires IT Staff Augmentation Services","subTitle":"All Categories|   November 29, 2021 | Kristen","route":"/blog/significant-benefits-and-why-your-company-requires-it-staff-augmentation-services","content1":"Let’s explore benefits and why your company needs IT Staff Augmentation Services for swifter business success.  …"},{"images":"../images/blogsPic/autotestingimg1.webp","title1":"Why should banks invest in automated testing for their software?","subTitle":"All Categories| November 29th, 2021 | Arun Charles","route":"/blog/why-should-banks-invest-in-automated-testing-for-their-software","content1":"Introduction Banking business priorities have shifted towards optimizing internal cost structures and identifying  …"},{"images":"../images/blogsPic/AngularVSReact.webp","title1":"Angular JS vs React Js: Which is Better for You?","subTitle":"All Categories | November 29, 2021 | Vasanth","route":"/blog/angular-js-vs-react-js","content1":"The ability to develop robust and reliable web applications in a shorter time using a high functionality framework is the common requirement  …"},{"images":"../images/blogsPic/blog0.png","title1":"New Product Development; Winner’s Guide","content1":"Introduction You never act on a hunch in software product development because developing robust software for widespread adoption is a complex process. …","subTitle":"Product Development   |   May 26, 2022 | Karthik","route":"/blog/stages-of-new-product-development-process"},{"images":"../images/blogsPic/blog1.png","title1":"Selenium the Most Popular Test Automation Tool; A Superlative Guide To Selenium Testing","subTitle":"Automated Testing   |   February 16, 2022 | Arun Charles","route":"/blog/why-selenium-is-most-widely-used-test-automation-tool","content1":"The most important element in the software development lifecycle is testing, which has the primary goal of ensuring bug-free software that fulfills client requirements.. …"},{"images":"../images/blogsPic/AngularVSReact.webp","title1":"PLAYWRIGHT - Automation Testing","subTitle":"All Categories | February 16, 2022 | Ramya","route":"/blog/play-wright","content1":"Playwright is a tool used for testing web applications.It helps developers automate tests so that they can quickly and easily check if their web application is working properly…"},{"images":"../images/blogsPic/blog2.png","title1":"How To Choose Between React Native And Ionic For Your App","subTitle":"Technology   |   December 20, 2021 | Kristen","route":"/blog/react-native-vs-ionic","content1":"React Native and Ionic are two such technologies for creating user interfaces that are extensively used by developers..."},{"images":"../images/blogsPic/reactjs1.webp","title1":"ReactJS Framework Working Wonders For Modern Web Development Businesses","content1":"If we consider a current estimate, there are over 2,20,000 live websites that are built-in ReactJS, reflecting …","subTitle":"Technology, Web App Development | November 29th, 2021 | Vasanth ","route":"/blog/reason-to-use-reactjs-for-web-development"},{"images":"../images/blogsPic/blog3.png","title1":"Top-15 Mobile App Ideas that Will Drive Your Start-Up Ahead","content1":"Introduction A terrific app idea is what drives your start-up business ahead and enables you to spin money. It is an online …","subTitle":" Mobile APP Development    |   November 29, 2021 | Elamparithi","route":"/blog/top-mobile-app-ideas-that-will-drive-your-start-up-ahead"},{"images":"../images/blogsPic/blog4.png","title1":"Significant Benefits and Why Your Company Requires IT Staff Augmentation Services","subTitle":"Staff Augmentation   |   November 29, 2021 | Kristen ","route":"/blog/significant-benefits-and-why-your-company-requires-it-staff-augmentation-services","content1":"Let’s explore benefits and why your company needs IT Staff Augmentation Services for swifter business success.  …"},{"images":"../images/blogsPic/autotestingimg1.webp","title1":"Why should banks invest in automated testing for their software?","subTitle":"Automated Testing | November 29th, 2021 | Arun Charles","route":"/blog/why-should-banks-invest-in-automated-testing-for-their-software","content1":"Introduction Banking business priorities have shifted towards optimizing internal cost structures and identifying  …"},{"images":"../images/blogsPic/AngularVSReact.webp","title1":"Angular JS vs React Js: Which is Better for You?","subTitle":"Technology | November 29, 2021 | Vasanth","route":"/blog/angular-js-vs-react-js","content1":"The ability to develop robust and reliable web applications in a shorter time using a high functionality framework is the common requirement  …"},{"images":"../images/blogsPic/AngularVSReact.webp","title1":"PLAYWRIGHT - Automation Testing","subTitle":"Automated Testing   | February 16, 2022 | Ramya","route":"/blog/play-wright","content1":"Playwright is a tool used for testing web applications.It helps developers automate tests so that they can quickly and easily check if their web application is working properly…"}]')}}]);
//# sourceMappingURL=4dfedb3045de1262700400432de0d687f8b61545-1f380692fb562d8065e4.js.map