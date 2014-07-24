<%-- 
    Document   : index
    Created on : Jul 22, 2014, 11:38:37 AM
    Author     : vrodin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script lang="javascript" type="text/javascript" src="showClock.js"></script>
        <link rel="stylesheet" type="text/css" href="Box.css">
    </head>
   
    
    
    <body onload="startTime(); startDate();">
        <h4>
            Todays Date is:
        </h4>
        <div id="date"></div>
        <p>The time is:</p>
        <div id="txt"></div>
        
        <h3>
            Green = On-Peak <br>
            Yellow = Partial Peak <br>
            Red = Off-Peak<br>
        </h3>
        <div class="boxColor">
             
        </div>
    </body>
</html>
