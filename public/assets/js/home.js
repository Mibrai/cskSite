function getSystemDate(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() +1;
    var day = now.getDate() ;
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var second = now.getSeconds();
    showTime=" "+day+"/"+month+"/"+year;
    document.getElementById("fieldDate").innerHTML="<br/>&nbsp; &nbsp; Lokales Datum "+showTime+"<br/>Lokale Uhr "+hour+" : "+minutes+" : "+second;
    document.getElementById("fieldDateCmr").innerHTML="<br/>Date Locale "+showTime+"<br/>Heure Locale"+(hour+1)+" : "+minutes+" : "+second;
    window.setTimeout(function(){ getSystemDate()}, 1000);
}
window.onload=function(){getSystemDate();}
