let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let output = document.getElementById("output");
let active = false;
let centsec = 00;
let sec = 00;
let min = 00;
let hour = 00;

function start(){
   let interval =  setInterval(() => {
       active = true;
        centsec++
        if (centsec === 100){
            sec++;
            centsec = 00;
        }
        if(sec === 60){
            min++;
            sec = 00;
        }
        if(min === 60){
            min = 00;
            hour++
        }
        output.innerHTML = `${("0" + hour).slice(-2)} : ${("0" + min).slice(-2)} : ${("0" + sec).slice(-2)} : ${("0" + centsec).slice(-2)}`
     } , 10)
    stopBtn.addEventListener(`click` , function(){
         active = false;
        clearInterval(interval)
    })
    resetBtn.addEventListener(`click` , function(){
         centsec = 00
         sec = 00;
         min = 00;
         hour = 00; 
         output.innerHTML = `${("0" + hour).slice(-2)} : ${("0" + min).slice(-2)} : ${("0" + sec).slice(-2)} : ${("0" + centsec).slice(-2)}`
    })
};
    startBtn.addEventListener(`click` , function(){
        if(active === true) return
        else{
            start()
        }
    })



