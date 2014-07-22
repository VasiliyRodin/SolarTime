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
    </head>
   
    
    
    <body onload="startTime(); startDate();">
        <h1>
            Todays Date is:
        </h1>
        <div id="date"></div>
        <p>The time is:</p>
        <div id="txt"></div>        
    </body>
</html>
