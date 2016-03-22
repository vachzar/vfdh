[1mdiff --git a/README.md b/README.md[m
[1mindex 4502ee6..cdc7710 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -2,6 +2,9 @@[m
 It's a fork from this [script](https://openuserjs.org/scripts/AMZMA/Yet_Another_Download_Helper_for_Various_FileHosting,_Just_Helper_Dengan_Taburan_Kacang_Almond_Diselimuti_Coklat_Belgia_Yang_Langsung_Meleleh_Bila_Masuk_Di_Mulut._%5BArgggghhh%7D_%28%E2%95%AF%C2%B0%D0%94%C2%B0%EF%BC%89%E2%95%AF%EF%B8%B5_%C9%AFu%E1%B4%8E%C6%83%C9%90%C9%AF/)[m
 [m
 ### Changelog[m
[32m+[m[32m**2015-03-22**[m
[32m+[m[32m- add awcloud.pw[m
[32m+[m
 **2015-03-19**[m
 - add MyLinkGen[m
 [m
[1mdiff --git a/vfdh.meta.js b/vfdh.meta.js[m
[1mindex 2670a0b..17cb94e 100644[m
[1m--- a/vfdh.meta.js[m
[1m+++ b/vfdh.meta.js[m
[36m@@ -4,7 +4,7 @@[m
 // @name           Various Filehosting Download Helper[m
 // @icon           http://puu.sh/2MzuG[m
 // @homepageURL    https://goo.gl/o34ydc[m
[31m-// @version        0.98[m
[32m+[m[32m// @version        0.99[m
 // @namespace      vachzar/vfdh[m
 // @author         vachzar[m
 // @description    A fork of Yet Another Download Helper for Various FileHosting, Just Helper Dengan Taburan Kacang Almond Diselimuti Coklat Belgia Yang Langsung Meleleh Bila Masuk Di Mulut. [Argggghhh} (╯°Д°）╯︵ ɯuᴎƃɐɯ[m
[36m@@ -143,6 +143,7 @@[m
 // @include        *ziddu.com/download/*[m
 // @include           *downloads.ziddu.com/downloadfile/*[m
 // @include        *zippyshare.com/*/file.html*[m
[32m+[m[32m// @include        *awcloud.pw*[m
 [m
   // @include        *.4shared.com/android/*[m
   // @include        *.4shared.com/archive/*[m
[1mdiff --git a/vfdh.user.js b/vfdh.user.js[m
[1mindex a73310c..03ed986 100644[m
[1m--- a/vfdh.user.js[m
[1m+++ b/vfdh.user.js[m
[36m@@ -4,7 +4,7 @@[m
 // @name           Various Filehosting Download Helper[m
 // @icon           http://puu.sh/2MzuG[m
 // @homepageURL    https://goo.gl/o34ydc[m
[31m-// @version        0.98[m
[32m+[m[32m// @version        0.99[m
 // @namespace      vachzar/vfdh[m
 // @author         vachzar[m
 // @description    A fork of Yet Another Download Helper for Various FileHosting, Just Helper Dengan Taburan Kacang Almond Diselimuti Coklat Belgia Yang Langsung Meleleh Bila Masuk Di Mulut. [Argggghhh} (╯°Д°）╯︵ ɯuᴎƃɐɯ[m
[36m@@ -143,6 +143,7 @@[m
 // @include        *ziddu.com/download/*[m
 // @include           *downloads.ziddu.com/downloadfile/*[m
 // @include        *zippyshare.com/*/file.html*[m
[32m+[m[32m// @include        *awcloud.pw*[m
 [m
   // @include        *.4shared.com/android/*[m
   // @include        *.4shared.com/archive/*[m
[36m@@ -205,6 +206,7 @@[m [m$(document).ready(function() {[m
   Download(/albafile|filefolks|queenshare/, AlbaFile);[m
   Download(/anonfiles/, AnonFiles);[m
   Download(/asfile/, AsFile);[m
[32m+[m[32m  Download(/awcloud/, AWCloud);[m
   Download(/bayfiles.net/, BayFiles);[m
   Download(/billionuploads/, BillionUploads);[m
   Download(/bitshare/, BitShare);[m
[36m@@ -229,7 +231,6 @@[m [m$(document).ready(function() {[m
   Download(/gamefront/, GameFront);[m
   Download(/ge.tt/, Gett);[m
   Download(/hostr.co/, Hostr);[m
[31m-//  Download(/hotfile/, HotFile);[m
   Download(/hugefiles.net/, HugeFiles);[m
   Download(/hulkload/, HulkLoad);[m
   Download(/ifile.ws|arabloads|zaladuj.to/, iFile);[m
[36m@@ -246,7 +247,6 @@[m [m$(document).ready(function() {[m
   Download(/movreel/, Movreel);[m
   Download(/netload.in/, NetLoad);[m
   Download(/potload|potload.net/, PotLoad);[m
[31m-//  Download(/rapidgator.net/, RapidGator);[m
   Download(/rapidshare/, RapidShare);[m
   Download(/rghost.net/, RGhost);[m
   Download(/sendmyway/, SendMyWay);[m
[36m@@ -508,7 +508,16 @@[m [mvar AsFile = function () {[m
   setTimeout(func2, 300);[m
   setTimeout(func3, 500);[m
 };[m
[31m-[m
[32m+[m[32mvar AWCloud = function () {[m
[32m+[m[32m  GM_addStyle(ssc);[m
[32m+[m[32m  $("script").remove();[m
[32m+[m[32m  var func1 = function () {[m[41m [m
[32m+[m[32m    if ($('.download-timer a.btn.btn-default').length) {[m
[32m+[m[32m      window.location= $('.download-timer a.btn.btn-default').attr('href');[m
[32m+[m[32m    }[m
[32m+[m[32m  };[m
[32m+[m[32m  setTimeout(func1, 150);[m[41m  [m
[32m+[m[32m};[m
 var BayFiles = function () {[m
   GM_addStyle(ssc);[m
   $("script").remove();[m
