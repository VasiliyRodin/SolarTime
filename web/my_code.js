/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $("span").hide();
    
    $("b").click(function(){
        var titleId= $(this).attr("id");
        titleId.substring(1,11).slideToggle(300);
    });
});
