// ==UserScript==
//allow pasting
// @id             downloadhelper
// @name           Various Filehosting Download Helper
// @icon           http://puu.sh/2MzuG
// @homepageURL    https://goo.gl/o34ydc
// @version        1.1
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
// @include        *awcloud.pw*

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
