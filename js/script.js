setInterval(function(){
    var date = new Date();
    updateTime(date);
    updateClock(date);
},1000);


function updateClock(data){
    var secHand=document.getElementById("sec-Hand").style;
    var minHand=document.getElementById("min-Hand").style;
    var hrHand=document.getElementById("hr-Hand").style;
    secHand.transform = "rotate(" + data.getSeconds() * 6 + "deg)";
    minHand.transform = "rotate(" + data.getMinutes() * 6 + "deg)";
    hrHand.transform = "rotate(" + (data.getHours() * 30 + data.getMinutes() * 0.5) +"deg)";
}

function updateTime(date){
    var timeArt=document.getElementById('time');
    var hr;
    var min;
    var sec;
    hr = date.getHours();
    min = date.getMinutes();
    sec= date.getSeconds();
    if (hr.toString().length === 1){
        hr = '0' + hr;
    }
    if (min.toString().length === 1){
        min = '0' + min;
    }
    if (sec.toString().length === 1){
        sec = '0' + sec;
    }
    var time = "Current Time -----"+ hr + " : "
        + min+ " : " + sec;
    timeArt.innerHTML = time;    
    //return timeArt;
}










//window.onload = setInterval;




