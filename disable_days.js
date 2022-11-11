

<script type="text/javascript">

			alert('Esto es una prueba!!!!!');

document.addEventListener("DOMContentLoaded", function(){

			const d = new Date();
			
			var disabled_days_53 = [[11, 24, 2022]];
			var disabled_dayofweek_53 = [0,6];

			const intDayofWeek = d.getDay();

			if(intDayofWeek == 5)
			{
				disabled_days_53.push([d.getMonth() + 1,d.getDate(),d.getFullYear()]);
				d.setDate(d.getDate() + 3);
				disabled_days_53.push([d.getMonth() + 1,d.getDate(),d.getFullYear()]);				
			}
			else if(intDayofWeek == 6)
			{
				d.setDate(d.getDate() + 2);
				disabled_days_53.push([d.getMonth() + 1,d.getDate(),d.getFullYear()]);
			}
			else if(intDayofWeek == 0)
			{
				d.setDate(d.getDate() + 1);
				disabled_days_53.push([d.getMonth() + 1,d.getDate(),d.getFullYear()]);
			}
			else 
			{
				
				disabled_days_53.push([d.getMonth() + 1,d.getDate(),d.getFullYear()]);
				d.setDate(d.getDate() + 1);
				disabled_days_53.push([d.getMonth() + 1,d.getDate(),d.getFullYear()]);
			}
		
		
			function disable_days_53(date, inMonth) { 
				if (inMonth) { 
			    	if(disabled_dayofweek_53.indexOf(date.getDay()) != -1){
			    		return {selectable: false};
			    	}else{
				        for (i = 0; i < disabled_days_53.length; i++) { 
				            if (date.getMonth() + 1 == disabled_days_53[i][0] && 
				                date.getDate() == disabled_days_53[i][1] &&
				                date.getFullYear() == disabled_days_53[i][2]
				                ) { 
				                return {dateClass: 'day_disabled', selectable: false}; 
				            } 
				        } 
			        }
			        
			    } 
			    return {}; 
			}	
			$('#element_53_datepick').datepick({ 
	    		onSelect: select_date,
				showTrigger: '#cal_img_53',
				yearRange:"c-100:c+10"
	    		, minDate: -0
	    		, maxDate: +10
	    		, onDate: disable_days_53
			});
			
			});
			
</script>