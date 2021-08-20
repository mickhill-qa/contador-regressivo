$(function(){
	
	var note = $('#note'),
		ts = new Date('2021/08/22 09:00:00'),
		// ts = new Date('2021/02/27 13:40:00'),
		newYear = true;
	
	if((new Date()) > ts){
		ts = new Date();
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			
			if(newYear){
				message += days + " dia" 		+ ( (days==1    || days==0)    ? '':'s' ) + ", ";
				message += hours + " hora" 		+ ( (hours==1   || hours==0)   ? '':'s' ) + ", ";
				message += minutes + " minuto" 	+ ( (minutes==1 || minutes==0) ? '':'s' ) + " e ";
				message += seconds + " segundo" + ( (seconds==1 || seconds==0) ? '':'s' ) + " ";
				message += "para iniciar!";
			}
			else {
				message += "A transmissão começará a qualquer momento...";
				countdown.style.display = "none";
			}
			
			note.html(message);
		}
	});
	
});
