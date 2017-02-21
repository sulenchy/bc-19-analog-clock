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
    var time = "Time for reference -----"+ date.getHours() + " : "
        + date.getMinutes() + " : " + date.getSeconds();
    timeArt.innerHTML = time;
    
    //return timeArt;
}

//window.onload = setInterval;



