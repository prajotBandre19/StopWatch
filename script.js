let button1 = document.getElementsByTagName('img')[0]
let button2 = document.getElementsByTagName('img')[1]
let button3 = document.getElementsByTagName('img')[2]

let [seconds,minutes,hours]=[0,0,0]
let timer =null;
let displaytime=document.querySelector('.timer')

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    //If any time unit (hours, minutes, seconds) is less than 10, a "0" is added in front.
    //For example, 7 becomes 07   (hh:mm:ss)
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    displaytime.innerHTML=h + ":" + m + ":" + s
}

function watchStop(){
    clearInterval(timer)
}

function watchStart(){
    if(timer!==null)
    {
        clearInterval(timer)
    }
    timer=setInterval(stopwatch,1000) 
}

function watchReset(){
    clearInterval(timer);
     [seconds,minutes,hours]=[0,0,0]
     displaytime.innerHTML="00:00:00"
}


button1.addEventListener('click',watchStop)
button2.addEventListener('click',watchStart)
button3.addEventListener('click',watchReset)

