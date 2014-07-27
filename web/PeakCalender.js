/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function changeColor(){
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDay();
    var date = d.getDate();
    var hour = d.getHours();
    
    checkMonthHour(month,day,date,hour);
}


function checkMonthHour(month,day,date,hour){               //month MONTH, day DAY, date DATE, hour HOUR
    if((month == 2 && date >= 9) || (month == 3 && date <= 5)){ // make sure in between march9 and april 5
        if(day!=0 || day!=6){ //make sure not weekend
            if(hour >= 17 && hour < 20) // hours of day
            {
                document.getElementById("boxColor").style.backgroundColor = "yellow";//DISPLAY YELLOW
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";// display red
            }
        }
        else{
            document.getElementById("boxColor").style.backgroundColor = "red";//display red
        }
    }
    
    if((month == 3 && date >=6)){//april 6-april 30
        if(day!=0 || day!=6){//ADD HOLIDAYS LATER
            if(hour >= 16 && hour<19){//hours of day
                document.getElementById("boxColor").style.backgroundColor = "yellow";//DISPLAY YELLOW
            }
        }
        else{
            document.getElementById("boxColor").style.backgroundColor = "red";//display red
        }
    
    }
    if((month == 4 && date >=1) || (month==9 && date <= 25)){
        if(day!=0 || day!=6){
            if(hour >= 1 && hour>18){
                document.getElementById("boxColor").style.backgroundColor = "green";//display green
            }
            if((hour >= 9 && hour<12) || (hour>=18 && hour<20)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//DISPLAY RED
            }
        }
        else if(day==0 || day==8){
            if((hour >= 16 && hour<19)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//display red
            }
        }
    }
    
    if((month == 9 && date >=26)){
        if(day!=0 || day!=6){
            if(hour >= 13 && hour>19){
                document.getElementById("boxColor").style.backgroundColor = "green";//display green
            }
            if((hour >= 10 && hour<13) || (hour>=19 && hour<21)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//DISPLAY RED
            }
        }
        else if(day==0 || day==8){
            if((hour >= 17 && hour<20)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//display red
            }
        }
    }
        
    if((month == 10) || (month <= 11)){
        if(day!=0 || day!=6){ //make sure not weekend
            if(hour >= 17 && hour < 20) // hours of day
            {
                document.getElementById("boxColor").style.backgroundColor = "yellow"//DISPLAY YELLOW
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red"//display red
            }
        }
        else{
            document.getElementById("boxColor").style.backgroundColor = "red"//display red
        }
    }
/************************ YEAR ENDS THIS IS FOR NEXT YEAR*********** 
    if((month >= 0 && date >= 1) && (month <= 2 && date <= 7)){
        if(day!=0 || day!=6){ //make sure not weekend
            if(hour >= 17 && hour < 20) // hours of day
            {
                //DISPLAY YELLOW
            }
            else{
                //display red
            }
        }
        else{
            //display red
        }
    }
*/
}
    