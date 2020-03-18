
var firebaseConfig = {
    apiKey: "AIzaSyBGf_Squby6IcCogGVbQTK1wzUHYFNz3Fk",
    authDomain: "javascript-myfirst.firebaseapp.com",
    databaseURL: "https://javascript-myfirst.firebaseio.com",
    projectId: "javascript-myfirst",
    storageBucket: "javascript-myfirst.appspot.com",
    messagingSenderId: "510179206818",
    appId: "1:510179206818:web:c0d70b445c1e875cab59fb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database= firebase.database();
  var count=0;
  var ref= database.ref("scores");
  var scores;
  var data;
  var max=0;
  var nscoren = new Array();
  var arr= new Array();
var fnamee= new Array();
    var bsort =new Array();    
  function getoldvalue()
  {
count=document.getElementById("score").innerHTML ;
  }
  document.getElementById("count").onclick=function(){
  getoldvalue();
    count++;
    document.getElementById("score").innerHTML=count;
}

document.getElementById("submit").onclick=function(){

    if(scores!=document.getElementById("score").innerHTML)
    {
        if(document.getElementById("fname").value=="")
        {
            alert("enter first name");
        }
       else{
        scores=document.getElementById("score").innerHTML;
        data = {
            name: document.getElementById("fname").value,
            score: scores
                }
        ref.push(data);
        
   
    }

    }
    else{
    alert("SUBMIT BUTTON PRESSED TWICE");   
    }

    ref.on('value',gotdata,errdata);
            function gotdata(datan)
            {       
                var scorelistings = document.querySelectorAll(".scorelisting");
                for (var abc=0; abc<scorelistings.length; abc++)
                {

                    scorelistings[abc].remove();
                }
        
                var nscores=datan.val();
                var keys=Object.keys(nscores);
       
                for(var ii=0;ii<keys.length;ii++)
                {
                    var kk=keys[ii];
                    fnamee[ii]=nscores[kk].name;
                    nscoren[ii]=parseInt(nscores[kk].score);    
                    bsort[ii]=parseInt(nscores[kk].score);    
                    
                }    
                document.getElementById("forheader").innerHTML="SCORES";
                for(var ii=0;ii<fnamee.length;ii++)
                 {

                       if(nscoren[ii]>max)
                        {
                            max=nscoren[ii];
                        }

                        var li1=document.createElement("LI");
                        li1.innerHTML= "Name: "+fnamee[ii]+ "&nbsp &nbsp &nbsp &nbsp &nbsp Score: "+nscoren[ii] ;
                        document.getElementById('scorelist').appendChild(li1);
         
                 }   

                  
document.getElementById("highest").innerHTML="HIGHEST SCORE: " + max;
            
             
            var element=document.getElementsByTagName("LI");
            for(var nkl=0;nkl<element.length;nkl++)
            {
            element[nkl].classList.add("scorelisting");
            
            }
         }
   
    function errdata(errn){
            console.log('error');
        
        }


    document.getElementById("fname").value="";
    document.getElementById("score").innerHTML=0;
    console.log(fnamee,nscoren);
 


}

document.getElementById("clearall").onclick= function() {
    ref.remove();
    document.getElementById("forheader").innerHTML="";
    document.getElementById("highest").innerHTML="";
             
    

}