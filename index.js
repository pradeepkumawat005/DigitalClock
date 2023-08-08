let Hrs = document.getElementById("hrs");
let Min = document.getElementById("min");
let Sec = document.getElementById("sec");

setInterval(()=>{
    let currectime = new Date();
    
    // console.log(currectime.getHours());
    
    Hrs.innerHTML = (currectime.getHours()<10?"0":"") + currectime.getHours();
    Min.innerHTML = (currectime.getMinutes()<10?"0":"") + currectime.getMinutes();
    Sec.innerHTML = (currectime.getSeconds()<10?"0":"") + currectime.getSeconds();

},1000)


