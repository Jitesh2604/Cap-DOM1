
    let minute = document.getElementById("min");
    let second = document.getElementById("sec");
    
    let flag = false;
    let intervalId;

    
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");

    start.addEventListener("click", function(){
        flag = true;
        intervalId = setInterval(countdownStart, 1000) ;
    });

    stop.addEventListener("click", function(){
        flag = false;
        clearInterval(intervalId);
    });

    reset.addEventListener("click", function(){
        flag = false;
        clearInterval(intervalId)
        minute.innerHTML = "05";
        second.innerHTML = "60";
    });

    function countdownStart(){
        let min = parseInt(minute.textContent);
        let sec = parseInt(second.textContent);

        if (min === 0 && sec === 0) {
            flag = false;
            clearInterval(intervalId);
        } else {
            if (sec === 0) {
                min--;
                sec = 59;
            } else {
                sec--;
            }

            if (min < 10) {
                minute.innerHTML = "0" + min;
            } else {
                minute.innerHTML = min;
            }

            if (sec < 10) {
                second.innerHTML = "0" + sec;
            } else {
                second.innerHTML = sec;
            }
        }
    };

