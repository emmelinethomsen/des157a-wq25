(function(){
    'use strict';
    console.log('reading js');


    const myForm=document.querySelector('#myform');
    const madLib=document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        //alert("form submitted");

        const noun1=document.querySelector('#noun1').value;
        const adj=document.querySelector('#adj').value;
        const noun2=document.querySelector('#noun2').value;
        const verb=document.querySelector('#verb').value;

        let myText;

        if(noun1 == ''){
            myText = "please provide a noun";
            document.querySelector('#noun1').focus();
        }
        else if(adj == ''){
            myText = "please provide an adjective";
            document.querySelector('#adj').focus();
        }
        else if(noun2 == ''){
            myText = "please provide a noun";
            document.querySelector('#noun2').focus();
        }
        else if(verb == ''){
            myText = "please provide a verb";
            document.querySelector('#verb').focus();
        }

        else{
            myText=`you typed the words ${noun1}, ${adj}, ${adj}, ${noun2}, and ${verb}`;
            document.querySelector('#noun1').value= "";
            document.querySelector('#adj').value= "";
            document.querySelector('#noun2').value= "";
            document.querySelector('#verb').value= "";
        }

        /*if(noun1 && adj && noun2 && verb){
            myText=`you typed the words ${noun1}, ${adj}, ${adj}, ${noun2}, and ${verb}`;
        }
        else{
            myText = "please fill out the damn form";
        }

        madLib.innerHTML=myText;*/


        //alert(`here you entered ${noun1}`);

        //madLib.innerHTML = noun1;

        //madLib.innerHTML= `<p>${myText}</p>`;


    });

    
})();