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
    var p;
    
    m=checkTime(m);
    s=checkTime(s);
    h=checkHour(h,p);
    
    
    document.getElementById('txt').innerHTML = p + h+ " : "+m+" : "+s;
    var t = setTimeout(function(){startTime();},500);
    
    
}

function checkTime(i){
    if(i<10){
        i="0" + i;
    }
    return i;
}


function checkHour(i,j){
    if(i>12){
        i=i-12;
        j="PM"
    }
    else{
        j="AM"
    }
    return i,j;
}

function startDate(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();
}

