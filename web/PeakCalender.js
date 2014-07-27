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


function checkMonthHour(i,j,k,l){               //i MONTH, j DAY, k DATE, l HOUR
    if((i == 2 && k >= 9) || (i == 3 && k <= 5)){ // make sure in between march9 and april 5
        if(j!=0 || j!=6){ //make sure not weekend
            if(l >= 17 && l < 20) // hours of day
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
    
    if((i == 3 && k >=6)){//april 6-april 30
        if(j!=0 || j!=6){//ADD HOLIDAYS LATER
            if(l >= 16 && l<19){//hours of day
                document.getElementById("boxColor").style.backgroundColor = "yellow";//DISPLAY YELLOW
            }
        }
        else{
            document.getElementById("boxColor").style.backgroundColor = "red";//display red
        }
    
    }
    if((i == 4 && k >=1) || (i==9 && k <= 25)){
        if(j!=0 || j!=6){
            if(l >= 1 && l>18){
                document.getElementById("boxColor").style.backgroundColor = "green";//display green
            }
            if((l >= 9 && l<12) || (l>=18 && l<20)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//DISPLAY RED
            }
        }
        else if(j==0 || j==8){
            if((l >= 16 && l<19)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//display red
            }
        }
    }
    
    if((i == 9 && k >=26)){
        if(j!=0 || j!=6){
            if(l >= 13 && l>19){
                document.getElementById("boxColor").style.backgroundColor = "green";//display green
            }
            if((l >= 10 && l<13) || (l>=19 && l<21)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//DISPLAY RED
            }
        }
        else if(j==0 || j==8){
            if((l >= 17 && l<20)){
                document.getElementById("boxColor").style.backgroundColor = "yellow";//display yellow
            }
            else{
                document.getElementById("boxColor").style.backgroundColor = "red";//display red
            }
        }
    }
        
    if((i == 10) || (i <= 11)){
        if(j!=0 || j!=6){ //make sure not weekend
            if(l >= 17 && l < 20) // hours of day
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
    if((i >= 0 && k >= 1) && (i <= 2 && k <= 7)){
        if(j!=0 || j!=6){ //make sure not weekend
            if(l >= 17 && l < 20) // hours of day
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
    