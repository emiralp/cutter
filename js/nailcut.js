var nailcut = {
	'nailcutCount' : 0
};

$(document).ready(function(){
	
	$('.nailcut').each(function(){
		$w = $(this).attr('data-nailcut');
		$h = $(this).attr('data-nailcut');
		
		if($w !== undefined && $h !== undefined)
		{
			nailcut.nailcutCount++;
			
			$(this).before('<div id="nailcutId_'+nailcut.nailcutCount+'" style="width:'+ $w +'px;height:'+ $h +'px;overflow:hidden;"><img src="'+$(this).attr('src')+'"></div>');
			
			$('#nailcutId_' + nailcut.nailcutCount).find('img').load(function(){
				$tw = $(this).width();
				$th = $(this).height();
				
				$w = parseInt($(this).parent().css('width'));
				$h = parseInt($(this).parent().css('height'));
				
				if($tw > $th)
				{
					$(this).attr('height',$w);
					
					$nw = ($tw * $w) / $th;
					$ml = ($nw - $w) / 2;
					$ml = Math.floor($ml);
					
					$(this).css('margin-left',-1 * $ml);
				}
				else
				{
					$(this).attr('width',$w);
					
					$nh = ($th * $h) / $tw;
					$mt = ($nh - $h) / 2;
					$mt = Math.floor($mt);
					
					$(this).css('margin-top',-1 * $mt);
				}
			});
			
			$(this).remove();
			
		}
	});
	
});