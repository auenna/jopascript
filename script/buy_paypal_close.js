$(document).ready(function() {	
	var is_bool = false;
	var is_switch = false; 
	var host = 'https://'+document.domain;
	$.getJSON(host+'/servers/public/index.php?c=Geoip&a=Isturkey', function(data){
		if(data)
		{	
			if(data['status']['code'] == 200){
				$('a').each(function(){
					var url = $(this).attr('href');
					if(url){					
						if(url.indexOf("flush=paypal") >0)
						{
							$(this).prev().hide();
							$(this).hide();	
						}
					}
				});
				is_bool = true ;
			}
		}
		return is_bool;	
	});
	if(is_switch){
		
		if(!is_bool)
		{
			$.ajaxSettings.async = false;
			$.getJSON(host+'/servers/public/index.php?c=Geoip&a=European', function(data){
				if(data)
				{	
					if(data['status']['code'] == 200){
						is_bool = true ;
					}
				}
				return is_bool;
			});
			$('a').click(function(){
				var url = $(this).attr('href');
				if(url){
					if(url.indexOf("flush=paypal") >0)
					{
						if(is_bool){
							$('.theme-popover-mask').fadeIn(100);
							$('.theme-popover').slideDown(100);
							$('#pay_url').val(url);
							return false;
						}
						window.location.href = url;
					}
				}	
			});		
		}	
	}
});