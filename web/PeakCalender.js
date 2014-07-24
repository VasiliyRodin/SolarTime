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
    if((i >= 2 && k >= 9) && (i <= 3 && k <= 5)){ // make sure in between march9 and april 5
        while(j!=0 || j!=6){ //make sure not weekend
            while(l >= 17 && l < 20) // hours of day
            {
                //DISPLAY YELLOW
            }
        }
    }
    
    if((i == 3 && k >=6) && (i==3 && k <= 30)){//april 6-april 30
        while(j!=0 || j!=6){//ADD HOLIDAYS LATER
            while(l >= 16 && l<19){//hours of day
                //DISPLAY YELLOW
            }
        }
    
    }
    
    
}
    