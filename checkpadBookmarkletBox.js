// ==UserScript==
// @name           check*pad BookmarkletBox
// @namespace      http://www.akiyan.com/cc_greasemonkey
// @description    check*pad BookmarkletBox
// @include        http://www.checkpad.jp/?mode=pjt&act=detail&id=*
// ==/UserScript==


(function() {

    // Bookmarklet
    var elm_rightside = document.getElementById('rightside');

    var idRegexp = new RegExp("&id=([0-9]+)");
    location.href.match(idRegexp);
    var id = RegExp.$1;
    var action = 'http://www.checkpad.jp/?mode=ms&act=add&pjt_id=' + id;

    var addBlank = "javascript:(function(){var formObj=document.createElement('form');var ttl=document.createElement('input');document.body.appendChild(formObj);formObj.appendChild(ttl);ttl.name='ttl';ttl.value=document.title+' '+location.href;formObj.action='" + action + "';formObj.acceptCharset='euc-jp';formObj.method='post';formObj.target='_blank';formObj.submit();})();";
    var addSelf = "javascript:(function(){var formObj=document.createElement('form');var ttl=document.createElement('input');document.body.appendChild(formObj);formObj.appendChild(ttl);ttl.name='ttl';ttl.value=document.title+' '+location.href;formObj.action='" + action + "';formObj.acceptCharset='euc-jp';formObj.method='post';formObj.target='_self';formObj.submit();})();";
    
    var cpTitle = document.title + unescape('%u3078%u8FFD%u52A0');

    var menuBoxHtml = '<div><p class="title">' + unescape('%u30D6%u30C3%u30AF%u30DE%u30FC%u30AF%u30EC%u30C3%u30C8') + '</p><ul><li><a href="' + addBlank + '">' + cpTitle + '</a> (blank)</li><li><a href="' + addSelf + '">' + cpTitle + '</a> (self)</li></ul></div>';
    var menuBox = document.createElement('div');
    menuBox.className = 'menu_box';
    menuBox.innerHTML = menuBoxHtml;
    
    elm_rightside.appendChild(menuBox);
    //alert(elm_edit_link_pjt.textNode);

})();