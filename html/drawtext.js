sound_play = false

window.addEventListener('message', function(event) {
    if (event.data.type == "open") {
        
        var color = '#2196f3'
        if(event.data.color == 'error') {
            color = '#f44336'
        } else if(event.data.color == 'info' || event.data.color == null ) {
            color = '#2196f3'
        } else if(event.data.color == 'success') {
            color = '#4caf50'
        } else if(event.data.color == 'classic') {
            color = '#30475e'
        }

        if(event.data.sound)
        {
            var sound = new Audio('sound.mp3');
	        sound.volume = 0.5;
            
            if(sound_play == false)
            {
                sound.play();
                sound_play = true;
            }
        }

        $("#container").show().removeClass("slide-out").addClass("container")
        $("#container").css('border-color' , color)
        $("#text").html(event.data.text)

    } else if (event.data.type == "close") {
        $("#container").removeClass("container").addClass("slide-out")
        sound_play = false;
    } else {
        $("#container").hide()
    }
});