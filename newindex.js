/*Created by Ridwan Abubakar*/
    /*This part first check if your browser support web storage. If "yes", the program will request for 
    your name which will be stored on the user's local device and later use to welcome the user the first
    time to the program and any other time the program is visited by the same user. ...THE SCRIPT IS NOT 
    YET COMPLETED.*/
    
    if(typeof(Storage)!=="undefined"){
        if(localStorage.getItem("name") === null){
            var username = prompt("What is your full name?");

            if(username==null || username==""){
                alert("Fill in a valid name");
                var username = prompt("What is your full name?");
            }
            localStorage.setItem("name", username); 
            alert("Welcome " + localStorage.getItem("name") + " to Web development test!");
                        
        }else{
            alert("Welcome back " + localStorage.getItem("name") + " to Web development test!");
        }
    } else{
        alert("Sorry! No web storage support.")
    }

    /*This section of the program handles the "click" event. More to come on this. 
    */
    var testscore = 0;//to store the test scores.
    var testTime = new Date();
    
    var start_test = document.getElementById("starttest");
    var intro = document.getElementsByClassName("intro");
    var display1 = document.getElementsByClassName("display1");
    var next1 = document.getElementsByClassName("next1");
    var display2 = document.getElementsByClassName("display2");
    var next2 = document.getElementsByClassName("next2");
    var display3 = document.getElementsByClassName("display3");
    var next3 = document.getElementsByClassName("next3");
    var display4 = document.getElementsByClassName("display4");
    var next4 = document.getElementsByClassName("next4");
    var display5 = document.getElementsByClassName("display5");
    var next5 = document.getElementsByClassName("next5");
    var display6 = document.getElementsByClassName("display6");
    var next6 = document.getElementsByClassName("next6");
    var display7 = document.getElementsByClassName("display7");
    var next7 = document.getElementsByClassName("next7");
    var display8 = document.getElementsByClassName("display8");
    var next8 = document.getElementsByClassName("next8");
    var display9 = document.getElementsByClassName("display9");
    var next9 = document.getElementsByClassName("next9");
    var display10 = document.getElementsByClassName("display10");
    var next10 = document.getElementsByClassName("next10");
    
//this script executes when Begin Test button is clicked
    start_test.onclick = function(){
        intro[0].style.display = "none";
        display1[0].style.display = "block";
    }
    
    //create new object for the answers
    var answers1 = document.getElementsByName("answers1");
    var answers2 = document.getElementsByName("answers2");
    var answers3 = document.getElementsByName("answers3");
    var answers4 = document.getElementsByName("answers4");
    var answers5 = document.getElementsByName("answers5");
    var answers6 = document.getElementsByName("answers6");
    var answers7 = document.getElementsByName("answers7");
    var answers8 = document.getElementsByName("answers8");
    var answers9 = document.getElementsByName("answers9");
    var answers10 = document.getElementsByName("answers10");

    next1[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers1.length; i++){
            if(answers1[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next2[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers2.length; i++){
            if(answers2[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }
     
    next3[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers3.length; i++){
            if(answers3[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "none";
                display4[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next4[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers4.length; i++){
            if(answers4[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "none";
                display4[0].style.display = "none";
                display5[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next5[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers5.length; i++){
            if(answers5[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "none";
                display4[0].style.display = "none";
                display5[0].style.display = "none";
                display6[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next6[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers6.length; i++){
            if(answers6[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "none";
                display4[0].style.display = "none";
                display5[0].style.display = "none";
                display6[0].style.display = "none";
                display7[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next7[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers7.length; i++){
            if(answers7[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "none";
                display4[0].style.display = "none";
                display5[0].style.display = "none";
                display6[0].style.display = "none";
                display7[0].style.display = "none";
                display8[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next8[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers8.length; i++){
            if(answers8[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "none";
                display4[0].style.display = "none";
                display5[0].style.display = "none";
                display6[0].style.display = "none";
                display7[0].style.display = "none";
                display8[0].style.display = "none";
                display9[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next9[0].onclick = function(){
        var valid = false;
        for(var i = 0; i < answers9.length; i++){
            if(answers9[i].checked !== false){
                intro[0].style.display = "none";
                display1[0].style.display = "none";
                display2[0].style.display = "none";
                display3[0].style.display = "none";
                display4[0].style.display = "none";
                display5[0].style.display = "none";
                display6[0].style.display = "none";
                display7[0].style.display = "none";
                display8[0].style.display = "none";
                display9[0].style.display = "none";
                display10[0].style.display = "block";
                valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    next10[0].onclick = function(){
      var valid = false;
        for(var i = 0; i < answers10.length; i++){
            if(answers10[i].checked !== false){
                var answer = confirm("Would you like to cross-check your selections?");
                if(answer===true){
                //this part is to remove an element and some buttons when the answer is true.
                    var parent = document.getElementsByClassName("parent");
                    var buttonright = document.getElementsByClassName("buttonright");         
                    parent[0].removeChild(intro[0]);         
                    display1[0].removeChild(buttonright[0]);                        
                    display2[0].removeChild(buttonright[0]);                        
                    display3[0].removeChild(buttonright[0]);                                           
                    display4[0].removeChild(buttonright[0]);                        
                    display5[0].removeChild(buttonright[0]);                          
                    display6[0].removeChild(buttonright[0]);                        
                    display7[0].removeChild(buttonright[0]);                       
                    display8[0].removeChild(buttonright[0]);                      
                    display9[0].removeChild(buttonright[0]);       
           
                    //this is to display all elements initially made invisible.
                    display1[0].style.display = "block";
                    display2[0].style.display = "block";
                    display3[0].style.display = "block";
                    display4[0].style.display = "block";
                    display5[0].style.display = "block";
                    display6[0].style.display = "block";
                    display7[0].style.display = "block";
                    display8[0].style.display = "block";
                    display9[0].style.display = "block";
                    display10[0].style.display = "block";
            }else{
                    //to check the condition of the answers
                    if(answers1[1].checked === true){
                        testscore += 10;
                    }
                    if(answers2[3].checked === true){
                        testscore += 10;
                    }
                    if(answers3[0].checked === true){
                        testscore += 10;
                    }
                    if(answers4[2].checked === true){
                        testscore += 10;
                    }
                    if(answers5[1].checked === true){
                        testscore += 10;
                    }
                    if(answers6[3].checked === true){
                        testscore += 10;
                    }
                    if(answers7[1].checked === true){
                        testscore += 10;
                    }
                    if(answers8[0].checked === true){
                        testscore += 10;
                    }
                    if(answers9[2].checked === true){
                        testscore += 10;
                    }
                    if(answers10[0].checked === true){
                        testscore += 10;
                    }

                    //this section is for the final result
                    var result = document.getElementsByClassName("result");
                    var name = document.getElementsByClassName("name");
                    var test = document.getElementsByClassName("test");
                    var date = document.getElementsByClassName("date");
                    var score = document.getElementsByClassName("score");
                    var comment = document.getElementsByClassName("comment");
                    
                 //decide the type of comment for the result base on the user's score.
                    var commt = "";//to store comment
                    switch(testscore){
                        case 100:
                        case 90:
                        case 80:
                        commt = "Excellent performance";
                        break;
                        case 70:
                        case 60:
                        commt = "Satisfactory";
                        break;
                        case 50:
                        commt = "Average performance";
                        break;
                        case 40:
                        case 30:
                        commt = "You can do better";
                        break;
                        case 20:
                        case 10:
                        case 0:
                        commt = "Try again, you can do better";
                    }

                    //replace the objects' value on the html page
                    name[0].innerHTML = localStorage.getItem("name");
                    test[0].innerHTML = "Introduction to Web Development";
                    date[0].innerHTML = testTime.toUTCString(); 
                    score[0].innerHTML = testscore+"%";
                    comment[0].innerHTML = commt;
                    
                    //display the final result
                    display10[0].style.display="none";
                    result[0].style.display="block";            
            }
            valid = true;
            }    
        }
        if(!valid){
            alert("Your must select one option");
        }     
    }

    
//simple script to refresh page
    var refresh = document.getElementsByClassName("refresh");
    
    refresh[0].onclick=function(){
        window.location.href = window.location.href;
    }



