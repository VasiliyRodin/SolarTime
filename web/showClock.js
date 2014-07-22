/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm;
    
    m=checkTime(m);
    s=checkTime(s);
    ampm=checkAMPM(h);
    h=checkHour(h);
    
    
    
    document.getElementById('txt').innerHTML = ampm +" " + h +" : "+m+" : "+s;
    var t = setTimeout(function(){startTime();},500);
    
    
}

function checkTime(i){
    if(i<10){
        i="0" + i;
    }
    return i;
}


function checkHour(i){
    if(i>12){
        i=i-12;
    }
    return i;
}
function checkAMPM(i){
    var j;
    if(i>12){
        j="PM";
    }
    else
        j="AM";
    return j;
}


function startDate(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();
}

