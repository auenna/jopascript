
var images_host_path = 'https://images.wondershare.com/';

fBrowserRedirect();

function fBrowserRedirect() {  
	var sUserAgent	= navigator.userAgent.toLowerCase();
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";   
	var bIsAndroid	= sUserAgent.match(/android/i) == "android";
	var bIsIpad		= sUserAgent.match(/ipad/i) == "ipad";  
	var bIsWin = sUserAgent.match(/windows phone/i) == "windows phone";
	
	if(bIsIphoneOs || bIsAndroid || bIsIpad || bIsWin){
		
		//$(document.body).append('<div id="popup_div" style="position:fixed;top:0;left:0; z-index:999"></div>');
		setBuyBtn();
		var language = ['es','br','fr','de'];
		var path_name = window.location.pathname;
		var path = path_name.substr(1,2);

		$('a[href^="https://ssl-download"]').each(function(){
			var download_url = $(this).attr('href');
			if(download_url.indexOf('.dmg') > -1 || download_url.indexOf('.exe') > -1){
				if(in_array(path,language)){
					if(path == 'es'){
						$(this).attr('href', 'https://drfone.wondershare.com/es/get-download-link-to-your-email.html');
					}if(path == 'fr'){
						$(this).attr('href', 'https://drfone.wondershare.com/fr/get-download-link-to-your-email.html');
					}if(path == 'br'){
						$(this).attr('href', 'https://drfone.wondershare.com/br/get-download-link-to-your-email.html');
					}if(path == 'de'){
						$(this).attr('href', 'https://drfone.wondershare.com/de/drfone-mobile-download.html');
					}
				}else{
					$(this).attr('href', 'https://drfone.wondershare.com/mail/get-download-link-for-drfone.html');
				}	
			}
		})
		// $('.p_trynow,.btndown_mac,.btndown_win,.p_trynow,.if_btnWin,.if_btnMac,.btn_try').each(function(){
		// 	var download_url = $(this).attr('href');
		// 	if(typeof(download_url) != 'undefined' ){
		// 		if(download_url.indexOf('.dmg') > -1 || download_url.indexOf('.exe') > -1){
		// 			if(in_array(path,language)){
		// 				if(path == 'es'){
		// 					$(this).attr('href', 'https://drfone.wondershare.com/es/get-download-link-to-your-email.html');
		// 				}if(path == 'fr'){
		// 					$(this).attr('href', 'https://drfone.wondershare.com/fr/get-download-link-to-your-email.html');
		// 				}if(path == 'br'){
		// 					$(this).attr('href', 'https://drfone.wondershare.com/br/get-download-link-to-your-email.html');
		// 				}
		// 			}else{
		// 				$(this).attr('href', 'https://drfone.wondershare.com/mail/get-download-link-for-drfone.html');
		// 			}	
		// 		}
		// 	}
		// });
		//changeBtn();
	}
}
//是否是数组中的值
function in_array(search,array){
	for(var i in array){
		if(array[i]==search){
			return true;
		}
	}
	return false;
}


function changeBtn(){
	
	$('div.mt20 a,div.btn a').each(function(){
		
		if($(this).is(".btn_try,.btndown_win")){
			var href = $(this).attr('href');
			//增加Dr.fone产品跳转到https://itunes.apple.com/us/app/data-rescue/id1030298807?ls=1&mt=8
			//var download_url = $(this).parent("a").attr("onclick");
			if(href != undefined)
			{
				if(href.indexOf("1283") !== -1 || href.indexOf("1318") !== -1 || href.indexOf("1464") !== -1 || href.indexOf("1887") !== -1)
				{
					$("#popup_div").load("https://drfone.wondershare.com/data-recovery/pop_ad.html",function(response,Status)
					{
						$('#popup_div').html(response); 
				 
					});
				}if(href.indexOf("1284") !== -1 || href.indexOf("1388") !== -1 || href.indexOf("1561") !== -1 || href.indexOf("1983") !== -1){
				
					$("#popup_div").load("https://drfone.wondershare.com/data-recovery/pop_ad_de.html",function(response,Status)
					{
						$('#popup_div').html(response); 
				 
					});
				}if(href.indexOf("1275") !== -1 || href.indexOf("1387") !== -1 || href.indexOf("1495") !== -1 || href.indexOf("1890") !== -1){
				
					$("#popup_div").load("https://drfone.wondershare.com/data-recovery/pop_ad_fr.html",function(response,Status)
					{
						$('#popup_div').html(response); 
				 
					});
				}
				if(href.indexOf("1577") !== -1 || href.indexOf("1391") !== -1 || href.indexOf("1545") !== -1 || href.indexOf("1888") !== -1){
				
					$("#popup_div").load("https://drfone.wondershare.com/data-recovery/pop_ad_es.html",function(response,Status)
					{
						$('#popup_div').html(response); 
				 
					});
				}
				
				if(href.indexOf("1579") !== -1 || href.indexOf("1389") !== -1 || href.indexOf("1546") !== -1 || href.indexOf("1891") !== -1){
				
					$("#popup_div").load("https://drfone.wondershare.com/data-recovery/pop_ad_br.html",function(response,Status)
					{
						$('#popup_div').html(response); 
				 
					});
				}
				
				if(href.indexOf("1580") !== -1 || href.indexOf("1390") !== -1 || href.indexOf("1544") !== -1 || href.indexOf("1889") !== -1){
				
					$("#popup_div").load("https://drfone.wondershare.com/data-recovery/pop_ad_it.html",function(response,Status)
					{
						$('#popup_div').html(response); 
				 
					});
				}
				
				if(href.indexOf("1799") !== -1 || href.indexOf("1800") !== -1 || href.indexOf("1798") !== -1 || href.indexOf("1907") !== -1){
				
					$("#popup_div").load("https://drfone.wondershare.com/data-recovery/pop_ad_nl.html",function(response,Status)
					{
						$('#popup_div').html(response); 
				 
					});
				}
				
				$(this).parent().parent().html("<a style='margin:5px 0;' href=\"https://itunes.apple.com/us/app/recover-data-recovery/id1048903602?ls=1&mt=8\" class=\"btn_downApp\"><strong>Download App</strong></a><a style='margin:5px 0;' href='https://play.google.com/store/apps/details?id=com.wondershare.drfone' class='btn_downAnd'><strong>Download App</strong></a>");
			}
			
			
		}else{
			return;
		}
	});
}

function setBuyBtn(){
	
	//roll
	$('.rollTop .sendMailBtn').each(function(){
		$(this).remove();
	});

	$('.sendMailBtn').each(function(){
		$(this).remove();	
	});
	
	$('#article img, .rec_content img, .reProBox2 img, .reInfoBox img, .articleVideo img').each(function(){
		var src = $(this).attr('src');
		if( src.indexOf('/images/download-btn-win.png') == -1 && src.indexOf('/images/download-btn-mac.png') == -1 ) return;
		
		var download_url = $.trim($(this).parents('a').attr('href'));		
		var os = download_url.indexOf('.exe') > 1 ? 'win' : 'mac';

		$(this).parents('a').replaceWith('<a href="javascript:void(0);" onclick="getBuyUrl( \''+download_url+'\' )" rel="nofollow"><img src="'+images_host_path+'style/images/buy-'+os+'.jpg" /></a>');
	});
	
	$('#article img').each(function(){
		var src = $(this).attr('src');
		if( src.indexOf('/images/win-down-btn.jpg') == -1 && src.indexOf('/images/mac-down-btn.jpg') == -1 ) return;
		
		var download_url = $(this).parents('a').attr('href');		
		var os = download_url.indexOf('.exe') > 1 ? 'win' : 'mac';
		
		$(this).parents('a').replaceWith('<a href="javascript:void(0);" onclick="getBuyUrl( \''+download_url+'\' )" rel="nofollow"><img src="'+images_host_path+'style/images/buy-'+os+'.jpg" /></a>');
	});
	
	
	$('.downBnt-b').each(function(){		
		var download_url = $(this).attr('href');		
		var os = download_url.indexOf('.exe') > 1 ? 'win' : 'mac';
		
		$(this).replaceWith('<a href="javascript:void(0);" onclick="getBuyUrl( \''+download_url+'\' )" rel="nofollow"><img src="'+images_host_path+'style/images/buy-'+os+'.jpg" /></a>');
	});
	
	$('.box1 .btn .bluebtn').each(function(){
		$(this).remove();	
	});
	
	$('.bluebtn-s').each(function(){
		$(this).remove();
	});
	
}

function getBuyUrl( download_url ){
	$.get('/servers/public/?c=mobi&a=geturl&page=buy_urls&download_url='+encodeURI(download_url)+'&r='+Math.random(),function(data){
		if(data) document.location.href = data;
	})	
}

//
$('.downBtn-b, .blueBtn-b, .bluebtn-s, .btn-try, .btn-try2, .btn_downWin, .try, .btn-try3-win, .btn-try3-mac, .btn_downMac, .btn_downMac_green, .btn_downWin_green, .btn-mg-win, .btn-mg-mac').each(function(){
	downloadJudge( $(this) );
});

$('img[src="https://images.wondershare.com/style/images/download-btn-win.png"], img[src="https://images.wondershare.com/style/images/download-btn-mac.png"]').parents('a').each(function(){
	downloadJudge( this );
});

function downloadJudge( obj ){
	var download_url = $(obj).attr('href');
	var isMac = navigator.platform.substr(0,3) == 'Mac';
	var os = download_url.indexOf('.exe') > -1 ? 'win' : 'mac';
	
	if( (isMac && download_url.indexOf('.dmg') > -1) || (!isMac && download_url.indexOf('.exe') > -1) ) return;
	
	if(download_url.indexOf('http://download.wondershare.com') > -1){
		$(obj).attr('href', 'javascript:void(0);');
		$(obj).click(function(){
			$.getJSON('/sendmail/?type=getinfo&download_url='+encodeURI(download_url)+'&r='+Math.random(),function(data){				
			$("#versionJudge").remove();
				if( data['rel_download_url'] && data['rel_download_url'].indexOf('https://') > -1 ){
					var rel_download_url = data['rel_download_url'];
					if(isMac && download_url.indexOf('.exe') > -1){	
						$(obj).fancybox();
						var str = '<div class="versionJudge" id="versionJudge" style="display:none;"><p>This version can\'t be installed in your computer, you may need:</p><p class="mac"><a href="'+rel_download_url+'" class="btn">Download for Mac</a></p><p class="mac">No, I need a <a href="'+download_url+'">Windows version</a></p></div>';
						
						$('body').append( str );
						$.fancybox.open({href:'#versionJudge'});
						
						$('.versionJudge .btn').each(function(){
							$.download.click(this, {callback_func : function(download_url)
							{
								_gaq.push(["_trackEvent", download_url, "Download",document.location.pathname]);
								_gaq.push(['_trackPageview', download_url]);
							}});
						}); 
					}else if( !isMac && download_url.indexOf('.dmg') > -1 ){
						//$(obj).fancybox();
						var str = '<div class="versionJudge" id="versionJudge" style="display:none;"><p>This version can\'t be installed in your computer, you may need:</p><p class="mac"><a href="'+rel_download_url+'" class="btn">Download for Windows</a></p><p class="mac">No, I need a <a href="'+download_url+'">Mac version</a></p></div>';

						$('body').append( str );
						$.fancybox.open({href:'#versionJudge'});
						
						$('.versionJudge a').each(function(){
							$.download.click(this, {callback_func : function(download_url)
							{
								_gaq.push(["_trackEvent", download_url, "Download",document.location.pathname]);
								_gaq.push(['_trackPageview', download_url]);
							}});
						}); 
					}else{
						document.location.href = download_url;	
					}
				}else{
					document.location.href = download_url;		
				}
			})
		});
	}
	
}