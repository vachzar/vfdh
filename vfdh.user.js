// ==UserScript==
//allow pasting
// @id             downloadhelper
// @name           Various Filehosting Download Helper
// @icon           http://puu.sh/2MzuG
// @homepageURL    https://goo.gl/o34ydc
// @version        0.98
// @namespace      vachzar/vfdh
// @author         vachzar
// @description    A fork of Yet Another Download Helper for Various FileHosting, Just Helper Dengan Taburan Kacang Almond Diselimuti Coklat Belgia Yang Langsung Meleleh Bila Masuk Di Mulut. [Argggghhh} (╯°Д°）╯︵ ɯuᴎƃɐɯ
// @updateURL      https://raw.githubusercontent.com/vachzar/vfdh/master/vfdh.meta.js
// @downloadURL    https://raw.githubusercontent.com/vachzar/vfdh/master/vfdh.user.js
// @grant          GM_addStyle
// @exclude        *.com/
// @exclude        /^.*(^\.1fichier)\.com//
// @exclude        *.net/
// @exclude        *.com/go/*
// @exclude        *.com/login
// @exclude        *.net/login
// @exclude        *.com/login*
// @exclude        *.net/login*
// @exclude        *.com/user*
// @exclude        *.net/user*
// @exclude        */undefined
// @exclude        */?*=*

// @include        *moe.god.jp/*
// @include        http://moesubs.akurapopo.pro/*
// @include        http://www.mp3boo.com/get/*
// @include        https://docs.google.com/uc?*download
// @include           https://docs.google.com/file/d/*
// @include        *.kaskus.co.id/redirect?url=*

// @include        http://www.mirrorcreator.com/showlink.php?*
// @include        http://www.mirrorcreator.com/mstat.php?*
// @include        http://www.mirrorcreator.com/files/*
// @include        http://www.mirrorcreator.com/host/*
// @include        https://www.mirrorcreator.com/showlink.php?*
// @include        https://www.mirrorcreator.com/mstat.php?*
// @include        https://www.mirrorcreator.com/files/*
// @include        https://www.mirrorcreator.com/host/*
// @include        *embedupload.com/?*
// @include           *embedupload.to/?*
// @include        *jheberg.net/captcha/*

// @include        *180upload.com/*
// @include        *.1fichier.co*
// @include        *2shared.com/*
// @include        *4upfiles.com/getfile.php
// @include           *4upfiles.com/getfiles.php
// @include        *acefile.net/*
// @include        *aisfile.com/*
// @include        *akafile.com/down.php
// @include           *akafile.com/downs.php
// @include        *albafile.com/*
// @include        *anafile.com/anain.php
// @include        *anonfiles.com/file/*
// @include        *arabloads.com/*
// @include        *asfile.com/file/*
// @include           *asfile.com/en/free-download/file/*
// @include        *bayfiles.net/file/*
// @include        *billionuploads.com/*
// @include        *bitshare.com/files/*
// @include        *clicknupload.com/*
// @include        *copy.com/s/*
// @include        *cyberlocker.ch/*
// @include        *d-h.st/*
// @include        *datafilehost.com/d/*
// @include        *davvas.com/*
// @include        *dropbox.com/s/*
// @include        *embedload.com/*
// @include        *epicshare.net/*
// @include        *filedap.com/*
// @include        *filedropper.com/*
// @include        *filefactory.com/file/*
// @include           *filefactory.com/dlf/*
// @include        *filefolks.com/*
// @include        *filepost.com/files/*
// @include        *filerio.in/*
// @include        *filetrip.net/dl?*
// @include        *filezy.net/*
// @include        *firedrive.com/file/*
// @include           *firedrive.ws/file/*
// @include        *forunesia.com/*
// @include        *freakshare.com/files/*
// @include        *dl.free.fr/*
// @include        *gamefront.com/files/*
// @include        *ge.tt/*
// @include        *hipfile.com/*
// @include        *hostr.co/*
// include        *hotfile.com/dl/*
// @include        *hugefiles.net/*
// @include        *hulkload.com/*
// @include        *ifile.ws/*
// @include        *inafile.com/*
// @include        *imzupload.com/*
// @include        *jumbofiles.com/*
// @include        *kumpulbagi.id/*
// @include        *limelinx.com/*
// @include        *lumfile.com/*
// include        *mediafire.com/?*
// @include           *mediafire.com/download/*
// @include        *mightyupload.com/*
// @include        *miloshare.com/*
// @include        *mixturecloud.com/*
// @include        *movreel.com/*
// @include        *netload.in/*
// @include        *potload.com/*
// @include           *potload.net/*
// @include        *queenshare.com/*
// @include        *rapidgator.net/file/*
// @include           *rapidgator.net/download/*
// @include        *rapidshare.com/#!download*
// @include        *rghost.net/*
// @include        *ryushare.com/*
// @include        *sendmyway.com/*
// @include        *sendspace.com/file/*
// @include        *sharebeast.com/*
// @include        *sinhro.net/*
// @include        *sockshare.com/file/*
// @include           *sockshare.ws/file/*
// @include        *solidfiles.com/v/*
// @include           *solidfiles.net/v/*
// @include        *swankshare.com/*
// @include        *turbobit.net/*
// @include        *tusfiles.net/*
// @include           *tusfil.es/*
// @include        *upfile.mobi/*
// @include        *upafile.com/*
// @include        *uploaded.net/file/*
// @include        *uploadingit.com/file/*
// @include        *uploads.ws/*
// @include        *uppit.com/*
// @include        *uptobox.com/*
// @include        *userscloud.com/*
// @include        *usersfiles.com/*
// @include        *verzend.be/*
// @include        *vidplay.net/*
// @include        *v-vids.com/*
// @include        *wuala.com/*
// @include        *xl.gs/*
// @include        *zaladuj.to/*
// @include        *ziddu.com/download/*
// @include           *downloads.ziddu.com/downloadfile/*
// @include        *zippyshare.com/*/file.html*

  // @include        *.4shared.com/android/*
  // @include        *.4shared.com/archive/*
  // @include        *.4shared.com/download/*
  // @include        *.4shared.com/file/*
  // @include        *.4shared.com/get/*
  // @include        *.4shared.com/mobile/*
  // @include        *.4shared.com/mp3/*
  // @include        *.4shared.com/music/*
  // @include        *.4shared.com/office/*
  // @include        *.4shared.com/photo/*
  // @include        *.4shared.com/rar/*
  // @include        *.4shared.com/video/*
  // @include        *.4shared.com/zip/*
  // @include        *.4shared-china.com/android/*
  // @include        *.4shared-china.com/archive/*
  // @include        *.4shared-china.com/download/*
  // @include        *.4shared-china.com/file/*
  // @include        *.4shared-china.com/get/*
  // @include        *.4shared-china.com/mobile/*
  // @include        *.4shared-china.com/mp3/*
  // @include        *.4shared-china.com/music/*
  // @include        *.4shared-china.com/office/*
  // @include        *.4shared-china.com/photo/*
  // @include        *.4shared-china.com/rar/*
  // @include        *.4shared-china.com/video/*
  // @include        *.4shared-china.com/zip/*  

  // @include         *.mylinkgen.com/*

  // @include        *4server.info/download/*
  // @exclude        *4server.info/premium/*

// @require        http://code.jquery.com/jquery-1.10.1.min.js
// @run-at         document-start
// ==/UserScript==

$(document).ready(function() {

//
  Download(/moe.god.jp|moesubs.akurapopo.pro/, moe);
  Download(/mp3boo/, mp3boo);
  Download(/docs.google.com/, GoogleDocs);
  Download(/kaskus.co.id/, Kaskus);
  
//
  Download(/mirrorcreator/, MirrorCreator);
  Download(/embedupload/, EmbedUpload);
  Download(/jheberg.net/, Jheberg);
  
  Download(/180upload|epicshare.net/, SatuDelapanNolUpload);
  Download(/1fichier|free.fr/, SatuFichier);
  Download(/2shared/, DuaShared);
  Download(/4shared/, EmpatShared);
  Download(/4server.info/, EmpatServer);
  Download(/4upfiles|ryushare/, EmpatUpFiles);
  Download(/acefile.net/, AceFile);
  Download(/aisfile/, AisFile);
  Download(/akafile|hipfile/, AkaFile);
  Download(/albafile|filefolks|queenshare/, AlbaFile);
  Download(/anonfiles/, AnonFiles);
  Download(/asfile/, AsFile);
  Download(/bayfiles.net/, BayFiles);
  Download(/billionuploads/, BillionUploads);
  Download(/bitshare/, BitShare);
  Download(/clicknupload/, ClicknUpload);
  Download(/copy/, Copy);
  Download(/cyberlocker.ch/, CyberLocker);
  Download(/d-h.st/, DHost);
  Download(/datafilehost/, DataFileHost);
  Download(/davvas/, Davvas);
  Download(/dropbox/, DropBox);
  Download(/embedload/, EmbedLoad);
  Download(/filedap/, FileDap);
  Download(/filedropper/, FileDropper);
  Download(/filefactory/, FileFactory);
  Download(/filepost/, FilePost);
  Download(/filerio.in/, FileRio);
  Download(/filetrip.net/, FileTrip);
  Download(/filezy.net/, FileZy);
  Download(/firedrive/, FireDrive);
  Download(/forunesia/, ForUNesia);
  Download(/freakshare/, FreakShare);
  Download(/gamefront/, GameFront);
  Download(/ge.tt/, Gett);
  Download(/hostr.co/, Hostr);
//  Download(/hotfile/, HotFile);
  Download(/hugefiles.net/, HugeFiles);
  Download(/hulkload/, HulkLoad);
  Download(/ifile.ws|arabloads|zaladuj.to/, iFile);
  Download(/ifile.ws/, iFile2);
  Download(/imzupload/, IMZupload);
  Download(/inafile/, InaFile);
  Download(/jumbofiles/, JumboFiles);
  Download(/kumpulbagi/, KumpulBagi);
  Download(/limelinx/, LimeLinx);
  Download(/lumfile/, Lumfile);
  Download(/mediafire/, MediaFire);
  Download(/mightyupload/, MightyUpload);
  Download(/mixturecloud/, MixtureCloud);
  Download(/movreel/, Movreel);
  Download(/netload.in/, NetLoad);
  Download(/potload|potload.net/, PotLoad);
//  Download(/rapidgator.net/, RapidGator);
  Download(/rapidshare/, RapidShare);
  Download(/rghost.net/, RGhost);
  Download(/sendmyway/, SendMyWay);
  Download(/sendspace/, SendSpace);
  Download(/sharebeast/, ShareBeast);
  Download(/sinhro.net/, Sinhro);
  Download(/sockshare/, SockShare);
  Download(/solidfiles|solidfiles.net/, SolidFiles);
  Download(/swankshare/, SwankShare);
  Download(/turbobit.net/, TurboBit);
  Download(/tusfiles.net/, Tusfiles);
  Download(/tusfil.es/, Tusfil);
  Download(/upfile.mobi/, UpFile);
  Download(/upafile/, UpAFile);
  Download(/uploaded.net/, Uploaded);
  Download(/uploadingit/, UploadingIt);
  Download(/uploads.ws/, UploadsWS);
  Download(/uppit/, Uppit);
  Download(/userscloud|usersfiles/, UsersCloud);
  Download(/verzend.be/, Verzend);
  Download(/vidplay.net/, Vidplay);
  Download(/vids/, Vids);
  Download(/wuala/, Wuala);
  Download(/xl.gs/, XL);
  Download(/ziddu/, Ziddu);
  Download(/zippyshare/, ZippyShare);
  Download(/mylinkgen/, MyLinkGen);
  
});


function Download(check, callback) {
  if (check.test(window.location.host)) {
        callback();
    controls();
  }
}

//
//
var moe = function () {
  if ($('img[src="http://valuecarpetonline.com/click.gif"]').length) {
    window.location= $('img[src="http://valuecarpetonline.com/click.gif"]').closest('a').attr('href');}   
};
var mp3boo = function () {
  if ($('.download').length) {
    window.location= $('.download > a[target="_blank"]').attr('href');}
};
var GoogleDocs = function () {
  var func1 = function () { $('.texmex-nopreview-download').get(0).click();};
  var func2 = function () { $("#uc-download-link").get(0).click();};
  setTimeout(func1, 3000);
  setTimeout(func2, 300);    
};
var Kaskus = function () {
  if ($('#main p[style="font-size:14px"] > a').length) {
    window.location= $('#main p[style="font-size:14px"] > a').attr('href');}
};
//
//

var MirrorCreator = function () {
  var jika = function () {
    if ($('img[alt="SolidFiles"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="SolidFiles"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="FireDrive"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="FireDrive"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="PutLocker"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="PutLocker"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="SockShare"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="SockShare"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="RGhost"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="RGhost"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="Gett"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="Gett"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="AnonFiles"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="AnonFiles"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="ShareBeast"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="ShareBeast"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="FourShared"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="FourShared"]').closest('tr').find('a[target="_blank"]').attr('href');}
    else if ($('img[alt="TusFiles"]').closest('tr').find('a[target="_blank"]').length) {
      window.location= $('img[alt="TusFiles"]').closest('tr').find('a[target="_blank"]').attr('href');}
  };
  if (window.location.href.indexOf("files") > -1) {
    GM_addStyle(ssc);
    setTimeout(jika, 5000);
    }
  if (window.location.href.indexOf("mstat") > -1) {
    GM_addStyle(ssc);
    jika();
    }
  if (window.location.href.indexOf("showlink") > -1) {
    GM_addStyle(ssc);
    if ($('#redirectlink > a').length) {
      window.location= $('#redirectlink > a').attr('href');}
    }
};
var EmbedUpload = function () {
  GM_addStyle(ssc);
  $("script").remove();
  if ($('.categories > span > b > a[target="_blank"]').length) {
    window.location= $('.categories > span > b > a[target="_blank"]').attr('href');}
  else if ($('.linkazza').length) {
    window.location= $('.linkazza').attr('href');}
};
var Jheberg = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("a > .download").get(0).click();
};

//
//

var SatuDelapanNolUpload = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#adcopy_response").focus();};
  var func2 = function () { $("#use_installer").get(0).click();};
  var func3 = function () { $("#lnk_download").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
};

var SatuFichier = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $(".form-button").get(0).click();
};

var DuaShared = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $('a[onclick="downloadComplete();"]').get(0).click();
};

var EmpatShared = function () {
  GM_addStyle(ssc);
  $("script").remove();
  window.location="http://www.4server.info/download/"+window.location.href;
};

var EmpatServer = function () {
  $("script").remove();
  if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
    } else if (typeof PRO_addStyle != "undefined") {
      PRO_addStyle(css);
    } else if (typeof addStyle != "undefined") {
      addStyle(css);
    } else {
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node); 
      }
  }
    $("a[href*='4shared.com/download/']").get(0).click();
  $('iframe').contents().find('a[href*="4shared.com/download/"]').get(0).click();
};

var EmpatUpFiles = function () {
  GM_addStyle(ssc);
  $("script").remove();
    var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#btn_download").removeAttr("disabled");};
  var func3 = function () { $("#btn_download").get(0).click();};
  var func4 = function () { $("#file_button").get(0).click();};
  setTimeout(func1, 500);
  setTimeout(func2, 600);
  setTimeout(func3, 31000);
  setTimeout(func4, 900);
};

var AceFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $('.cont_mdl > div > a').get(0).click();};
  setTimeout(func1, 500);
  setTimeout(func2, 1000);
};

var AisFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $('a[href^="http://aisfile.com:182/d/"]').get(0).click();};
  if ($('a[href$="op=logout"]').length) {
    setTimeout(func1, 6000);}
    else {setTimeout(func1, 11000);}
  setTimeout(func2, 100);
};
  
var AkaFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
    var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#btn_download").get(0).click();};
  var func3 = function () { $("center > a[href*='arc.akafile']").get(0).click();};
  setTimeout(func1, 500);
  setTimeout(func2, 600);
  setTimeout(func3, 700);
};

var AlbaFile = function () {
//  GM_addStyle(ssc);
  GM_addStyle(zma);
  $("script").remove();
  var func01 = function () { $("body").prepend('<div id="amz" class="amz" style="z-index: 9999 !important;"></div>');};
  var func02 = function () { $("form").appendTo("#amz");};
  var func03 = function () { $("#amz").nextAll().addClass('zma');};
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#btn_download").removeAttr("disabled");
                $(".captcha_code").focus();};
  var func3 = function () { $("span[style*='background:#f9f9f9'] > a").get(0).click();};
  setTimeout(func01, 100);
  setTimeout(func02, 200);
  setTimeout(func03, 300);
  setTimeout(func1, 500);
  setTimeout(func2, 700);
  setTimeout(func3, 900);
};

var AnaFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#btn_download").removeAttr("disabled");
                $("#recaptcha_response_field").focus();};
  var func3 = function () { 
    if ($('#download1').length) {
      window.location= $('#download1').attr('href');}
    };
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
};

var AnonFiles = function () {
  if ($('.download_button').length) {
    window.location= $('.download_button').attr('href');}
};

var AsFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#pop_up_load").removeAttr("style");
                $("#div_captcha").removeAttr("style");};
  var func11 = function () { $("#recaptcha_response_field").focus();};
  var func2 = function () { $('#manuel_redirect > a[href^="/en/free-download/file/"]').get(0).click();};
  var func3 = function () { $("#clock_block").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func11, 150);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
};

var BayFiles = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $(".highlighted-btn").get(0).click();
};

var BillionUploads = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $("#vegd").removeAttr("checked");};
  var func3 = function () { $('a[onclick^="init_download"]').get(0).click();};
  setTimeout(func1, 1000);
  setTimeout(func2, 500);
  setTimeout(func3, 1000);
};

var BitShare = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $(".bluebutton > .left").removeAttr("disabled");};
  var func2 = function () { $(".bluebutton > .left").get(0).click();};
  var func3 = function () { $("#captcha").removeAttr("style");
                $("#benefit-waitingtime").hide();
                $("#downloadstarting").removeAttr("style");
                $("#recaptcha_response_field").focus();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
//  setTimeout(func3, 5000);
};

var ClicknUpload = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2a = function () { $("#btn_download").removeAttr("disabled").click();};
  var func2b = function () { $("#btn_download").get(0).click();};
  var func3 = function () { $('.file_slot td>a>img').get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2a, 400);
  setTimeout(func2b, 500);
  setTimeout(func3, 700);
};

var Copy = function () {
  $("a[href$='?download=1']").get(0).click();
};

var CyberLocker = function () {
  GM_addStyle(ssc);
  $("script").remove();
//  var func = function () { 
  $("#btn_download").removeAttr("disabled").click();
//  }
//  setTimeout(func, 500);
};

var DHost = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("#downloadfile").get(0).click();
};

var DataFileHost = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $('input[type="checkbox"]').get(0).click();
  if ($('a[href^="http://www.datafilehost.com/get.php?"]').length) {
    window.location= $('a[href^="http://www.datafilehost.com/get.php?"]').attr('href');}
};

var Davvas = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#btn_download").get(0).click();};
  var func3 = function () { if ($("#chlink").is(":checked")) {
          $("#chlink").get(0).click();} };
  var func4 = function () { $("a[onclick*='btnClick']").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 12000);
  setTimeout(func3, 300);
  setTimeout(func4, 500);
};

var DropBox = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("#default_content_download_button").get(0).click();
};

var EmbedLoad = function () {
  GM_addStyle(ssc);
  $("script").remove();
  if ($('a[href^="http://embedload.com/files/"]').length) {
    window.location= $('a[href^="http://embedload.com/files/"]').attr('href');}
  $("#btn_download").get(0).click();
};

var FileDap = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("#chlink").removeAttr("checked");
  if ($('a[href*=".filedap.com:"]').length) {
    window.location= $('a[href*=".filedap.com:"]').attr('href');}
  $("input[name='method_free']").get(0).click();
  $('input[value^="GoTo"]').get(0).click();
};

var FileDropper = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("#captcha").removeAttr("style");
  $('#captcha input[type="text"]').focus();
};

var FileFactory = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#basicLink").get(0).click();};
  var func2 = function () { $("#dlManager").get(0).click();};
  var func3 = function () { $("a[data-href-direct^='http']").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 61000);
};

var FilePost = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $(".gray_big").get(0).click();};
  var func2 = function () { $("#captcha").removeAttr("style");
                $("#recaptcha_response_field").focus();};
  setTimeout(func1, 100);
  setTimeout(func2, 30000);
};

var FileRio = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func = function () { $(".download0_form").removeAttr("disabled");
                $(".regular_download").get(0).click();};
  setTimeout(func, 1000);
};

var FileTrip = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func = function () { $('form[target*="_blank"]').submit();};
  setTimeout(func, 300);
};

var FileZy = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#regularBtn_n").get(0).click();};
  var fun02 = function () { $("#btn_download").removeAttr("disabled");};
  var func2 = function () { $("#btn_download").get(0).click();};
  var func3 = function () { $(".btn-download").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(fun02, 150);
  setTimeout(func2, 31000);
  setTimeout(func3, 300);
};

var FireDrive = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func0 = function () { $('#password_file_image input[type="password"]').focus();};
  var func1 = function () { $('#confirm_form').submit();};
//  var func2 = function () { $(".continue").get(0).click();};
  var func3 = function () { 
    if ($('a[href^="http://dl.firedrive.com/"]').length) {
      window.location= $('a[href^="http://dl.firedrive.com/"]').attr('href');}
    else if ($('a[href^="https://dl.firedrive.com/"]').length) {
      window.location= $('a[href^="https://dl.firedrive.com/"]').attr('href');} };
  setTimeout(func0, 80);
  setTimeout(func1, 100);
//  setTimeout(func2, 300);
  setTimeout(func3, 350);
};

var ForUNesia = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var klik = $("#btn_download").removeAttr("disabled").click();
  var func = function () { $("#btn_download").get(0).click();};
  if ($('#countdown_str').length) {
    setTimeout(func, 31000);}
    else {klik}
};

var FreakShare = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#dlbutton").removeAttr("disabled");};
  var func2 = function () { $("#dlbutton").get(0).click();};
  var func3 = function () { $("#captcha").removeAttr("style");
                $("#recaptcha_response_field").focus();};
//  setTimeout(func1, 100);
  setTimeout(func2, 92000);
  setTimeout(func3, 500);
};

var GameFront = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#downloadLink").get(0).click();};
  var func2 = function () { $('a[href*=".gamefront.com/guploads/"]').get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
};

var Gett = function () {
  GM_addStyle(ssc);
  $("script").remove();
  if ($('a[target="hidden-frame"]').length) {
    window.location= $('a[target="hidden-frame"]').attr('href');}
};

var HotFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $('input[value*="DOWNLOAD"]').get(0).click();};
  var func2 = function () { $(".click_download").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
};

var Hostr = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { if ($("#checkbox-label").not(":checked")) {
          $("#checkbox-label").get(0).click();} };
  var func2 = function () { $("#download-button").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
};

var HugeFiles = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#adcopy_response").focus();};
  var func2 = function () { $("#dap").removeAttr("checked");};
  var func3 = function () { $("#btn_download").get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
  setTimeout(func3, 550);
};

var HulkLoad = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { 
    $("#cap").attr('style', 'display: block !important');
    $("#adcopy_response").focus();};
  var func3 = function () { $("#spnsrdld").removeAttr("checked");};
  var func4 = function () { 
    if ($('a[target="_self"]').length) {
      window.location= $('a[target="_self"]').attr('href');}};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
  setTimeout(func3, 550);
  setTimeout(func4, 600);
};

var iFile = function () {
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#real_dl").attr('style', 'display: block !important');
                $("td[align='right']>img").css('height','200px');
                $("#btn_download").removeAttr("disabled");};
  var func3 = function () { $(".captcha_code").focus();};
  var func41 = function () { $("button > img[alt^='Download']").get(0).click();};
  var func42 = function () { $("span[style*='background:#f9f9f9'] > a").get(0).click();};
  var func43 = function () { $(".a-btn").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
  setTimeout(func41, 710);
  setTimeout(func42, 730);
  setTimeout(func43, 750);
};

var iFile2 = function () {
  GM_addStyle(ssc);
};

var IMZupload = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("td[align='right']>img").css('height','200px');
                $("#btn_download").removeAttr("disabled");};
  var func3a = function () { $('form[name*="F1"]').submit();};
  var func3b = function () { $(".captcha_code").focus();};
  var func4 = function () { $("span[style*='background:#f9f9f9'] > a").get(0).click();};
  if ($('a[href$="op=logout"]').length) {
    setTimeout(func3a, 450);}
    else {setTimeout(func3b, 500);}
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func4, 700);
};

var InaFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#recaptcha_response_field").focus();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
};

var JumboFiles = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $('input[value="Download"]').get(0).click();};
  var func2 = function () { $('form[name*="F1"]').submit();};
  var func3 = function () { $('form[method*="LINK"]').submit();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
};

var KumpulBagi = function () {
  var func1 = function () { if ($('.file_actions > .download_container INPUT.button.download').length) {
    GM_addStyle(ssc);
    $("script").remove();
    $('.download_form INPUT.button.download').get(0).click();}};
  setTimeout(func1, 300);
};

var LimeLinx = function () {
  GM_addStyle(ssc);
  $(".btn-success").get(0).click();
  setTimeOut("window.close();",5000);
};

var Lumfile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $('input[name="method_free"]').get(0).click();};
  var func2 = function () { $("#recaptcha_response_field").focus();
                $("#btn_download").removeAttr("disabled");};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
};

var MediaFire = function () {
  GM_addStyle(ssc);
  $('a[onclick^="DLP_mOnDownload(this)"]').get(0).click();
  setTimeOut("window.close();",5000);
};

var MixtureCloud = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $(".shadow_media").remove();
  var func1 = function () { $(".text-center > a[href*='/download/']").get(0).click();};
  var func2 = function () { $("#download_unlimited").get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
};

var MightyUpload = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $("#use_installer").get(0).click();
                $("#lnk_download").get(0).click();};
  setTimeout(func1, 500);
  setTimeout(func2, 1000);
};

var MiloShare = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $('a[href^="http://aisfile.com:182/d/"]').get(0).click();};
  if ($('a[href$="op=logout"]').length) {
    setTimeout(func1, 6000);}
    else {setTimeout(func1, 11000);};
  setTimeout(func2, 100);
};

var Movreel = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $('img[alt*="Submit Query"]').get(0).click();};
  var func3 = function () { $("#use_installer").get(0).click();
                $("#lnk_download").get(0).click();};
  var func4 = function () { $("span[style*='background:#f9f9f9'] > a").get(0).click();};
  setTimeout(func1, 100);
//  setTimeout(func2, 300);
//  setTimeout(func3, 500);
  setTimeout(func4, 150);
};

var MyLinkGen = function () {
  GM_addStyle(ssc);
  $("script").remove();
  if ($('#main-content a.btn.btn-default').length) {
    window.location= $('#main-content a.btn.btn-default').attr('href');}
};

var NetLoad = function () {
  GM_addStyle(ssc);
  GM_addStyle(zma);
  $("script").remove();
  var func1 = function () { $(".whitelink").get(0).click();};
  var func2 = function () { $("#downloadDiv").addClass("amz");
                $(".Download_Captcha").focus();};
  var func3 = function () { $(".Orange_Link").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
};

var PotLoad = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#btn_download").removeAttr("disabled");};
  var func3 = function () { $("#btn_download").get(0).click();};
  var func4 = function () { $('input[type="checkbox"]').removeAttr("checked");
                $(".downloadurl > a").get(0).click();};
  if ($('a[href$="op=logout"]').length) {
    setTimeout(func3, 16000);}
    else {setTimeout(func3, 22000);}
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func4, 500);
};

var RapidGator = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $(".btn-free").get(0).click();};
  var func2 = function () { $("#adcopy_response").focus();};
  var func3 = function () { $(".btn-download").get(0).click();};
  var func4 = function () { $("#use_web_downloader").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 350);
  setTimeout(func4, 370);
};

var RapidShare = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("#js_btn_download").get(0).click();
};

var RGhost = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $(".header_link").get(0).click();
};

var SendMyWay = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $("#adcopy_response").focus();};
  var func3 = function () { $("#direct_download > #download_link").get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
  setTimeout(func3, 700);
};

var SendSpace = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("#download_button").get(0).click();
};

var ShareBeast = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $('input[type="checkbox"]').removeAttr("checked");
  $(".download-file1").get(0).click();
};

var Sinhro = function () {
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $(".captcha_code").focus();};
  var func3 = function () { $("#btn_download").get(0).click();};
  var func4 = function () { $("span[style*='background:#f9f9f9'] > a").get(0).click();};
  if ($('a[href$="op=logout"]').length) {
    setTimeout(func3, 31000);}
    else {setTimeout(func3, 61000);}
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func4, 500);
};

var SockShare = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#submitButton").removeAttr("disabled");};
  var func2 = function () { $("#submitButton").get(0).click();};
  var func3 = function () { $(".download_file_link").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
};

var SolidFiles = function () {
  GM_addStyle(ssc);
  $("script").remove();
  if ($('.buttons .btn.btn-primary.btn-sm').length) {
    window.location= $('.buttons .btn.btn-primary.btn-sm').attr('href');}
};

var SwankShare = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { 
  if ($('a[href$="op=logout"]').length) {
    $("#btn_download").get(0).click();}  
  else {  $("#recaptcha_response_field").focus();
      $("#btn_download").removeAttr("disabled");} };
  var func2 = function () { $('a[href*=".swankshare.com:182/d/"]').get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
};

var TurboBit = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { 
    if ($('.min-speed-header > a[href^="/download/free/"]').length) {
      window.location= "http://m.turbobit.net"+$('a[href^="/download/free/"]').attr('href');} };
  var func2 = function () { $("#captcha_response").focus();};
  var func3 = function () { $(".download-file-link").get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
  setTimeout(func3, 700);
};

var Tusfiles = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $('input').removeAttr("disabled");
  $('input[type="checkbox"]').removeAttr("checked");
  if ($('form input[type="password"]').length) {
    $('form input[type="password"]').focus();}
    else {$('#btn_download').get(0).click();}
};

var Tusfil = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $(".button > a").get(0).click();
};

var UpFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $('a[href*="download.php?f="]').get(0).click();
};

var UpAFile = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { 
  if ($('a[href$="op=logout"]').length) {
    $("#btn_download").get(0).click();}  
  else {  $("#recaptcha_response_field").focus();
      $("#btn_download").removeAttr("disabled");} };
  var func2 = function () { $("#btn_download").get(0).click();};
  var func3 = function () { $("span > a[href^='http']").get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func3, 300);
};

var Uploaded = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $(".free").get(0).click();};
  var func2 = function () { $("#recaptcha_response_field").focus();};
  setTimeout(func1, 100);
  setTimeout(func2, 33000);
};

var UploadingIt = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $("#downloadForm").submit();
};

var UploadsWS = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func = function () { $("#downloadFile").get(0).click();};
  setTimeout(func, 11000);
};

var Uppit = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").removeAttr("disabled");};
  var func2 = function () { $("#btn_download").get(0).click();};
  var func3 = function () { $(".m-btn.blue").get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
  setTimeout(func3, 700);
};

var UptoBox = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").removeAttr("disabled");};
  var func2 = function () { $("#btn_download").get(0).click();};
  var func3 = function () { $('table[align="center"] div[align="center"] > a').get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
  setTimeout(func3, 700);
};

var UsersCloud = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").removeAttr("disabled");};
  var func2 = function () { $("#btn_download").get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
};

var Verzend = function () {
  GM_addStyle(ssc);
  $("script").remove();
  $(".captcha_code").focus();
};

var Vidplay = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#adcopy_response").focus();};
  var func2 = function () { $('#player_img a[style*="downloadbutton2.png"]').get(0).click();};
  setTimeout(func1, 100);
  setTimeout(func2, 150);
};

var Vids = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("#btn_download").get(0).click();};
  var func2 = function () { $('#player_img a[style*="downloadbutton2.png"]').get(0).click();};
  setTimeout(func1, 300);
  setTimeout(func2, 500);
};
var Wuala = function () {
  var func1 = function () { $('.socialbox > a[href*="content.wuala.com/contents/"]').get(0).click();};
  setTimeout(func1, 5000);
};

var XL = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $("input[name='method_free']").get(0).click();};
  var func2 = function () { $("#btn_download").removeAttr("disabled");};
  var func3 = function () { $("#btn_download").get(0).click();};
  var func4 = function () { $("span[style*='background:#f9f9f9'] > a").get(0).click();};
  if ($('.login_area > .user').length) {
    setTimeout(func3, 12000);}
    else {setTimeout(func3, 22000);}
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func4, 500);
};

var Ziddu = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func1 = function () { $('form[name="dfrm"]').submit();};
  var func2 = function () { $("#accelerator").get(0).click();};
  var func3 = function () { $("#securitycode").focus();};
  setTimeout(func1, 100);
  setTimeout(func2, 300);
  setTimeout(func3, 500);
};

var ZippyShare = function () {
  GM_addStyle(ssc);
  $("script").remove();
  var func = function () { $("#dlbutton").get(0).click();};
  setTimeout(func, 1000);
};




///////////| Cuma Semacam Sampah |////////////
var css = "#kanan, iframe, noscript, blink, h2, p, a[target*=\"_blank\"], script[type*=\"text/javascript\"], div[id*=\"chitikaAdBeacon\"], font[color=\"ff00ff\"] {\n    display: none !important;\n    }\n    \n#center {\n    margin: 15% 20% !important;\n    }\n    \nfont[color=\"000080\"] {\n    font-size: 20px !important;\n    }\n    \nhtml, html > *, * {\n background-color: #CFCFCF !important;\n color: black !important;\n  }\n \na, font[color=\"000080\"] {\n color: black !important;\n  text-shadow: 0 0 5px white !important;\n  font-weight: bold !important;\n }\n\na:visited, font[color=\"000080\"]:visited {\n  color: #996633 !important;\n    text-decoration: line-through !important;\n }\n\na:hover, a:focus, font[color=\"000080\"]:hover {\n color: white !important;\n  text-shadow: 1px 1px 0 #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333 !important;\n transition: all 0.3s ease-in-out 0s !important;\n font-size: 18px !important;\n }";
var ssc = "form > * { box-shadow: 0 0 8px #0F8CBB !important; }input[type=\"text\"] { box-shadow: 0 0 8px #740ED3 !important; }img {opacity: .75 !important;}html, html > *, *:before, *:after, * { background-color: #CFCFCF !important; color: black !important;  } body {  background: transparent !important;}a { color: black !important;  text-shadow: 0 0 5px white !important;  font-weight: bold !important; } a:visited { color: #996633 !important;  }a:hover, a:focus { text-decoration: none !important; color: white !important;  text-shadow: 1px 1px 0 #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333 !important; transition: all 0.3s ease-in-out 0s !important; }";
var zma = ".zma {display: none !important;} .amz {display: block !important;} }";
///////////| Cuma Semacam Sampah |////////////


///////////| Lupakan Jangan, Dibuang Sayang |////////////
//
//  Blillion | ALba
//  GM_addStyle("br, table, ul { display: none !important; }");
//  GM_addStyle("#_tlink>img {width: 500px !important; height: 600px !important;");
// 
///////////| Lupakan Jangan, Dibuang Sayang |////////////


// if ($(selector).length)
// -------AMZ------- //