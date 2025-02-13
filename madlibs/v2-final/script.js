(function(){
    'use strict';
    console.log('reading js');


    const myForm=document.querySelector('form');
    const errorText=document.querySelector('#errorText');
    const madLib=document.querySelector('#madlib');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const time=document.querySelector('#time').value;
        const object1=document.querySelector('#object1').value;
        const object2=document.querySelector('#object2').value;
        const emotion=document.querySelector('#emotion').value;
        const object3=document.querySelector('#object3').value;
        const adjective=document.querySelector('#adjective').value;
        const verbing=document.querySelector('#verbing').value;
        const verb=document.querySelector('#verb').value;
        const animal=document.querySelector('#animal').value;
        const clothing=document.querySelector('#clothing').value;
        

        let myText;

        if(time == ""){
            myText = "please provide a time of day";
            document.querySelector('#time').focus;
            errorText.innerHTML = myText;
        }
        else if(object1 == ""){
            myText = "please provide an object";
            document.querySelector('#object1').focus;
            errorText.innerHTML = myText;
        }
        else if(object2 == ""){
            myText = "please provide an object";
            document.querySelector('#object2').focus;
            errorText.innerHTML = myText;
        }
        else if(emotion == ""){
            myText = "please provide an emotion";
            document.querySelector('#emotion').focus;
            errorText.innerHTML = myText;
        }
        else if(object3 == ""){
            myText = "please provide an object";
            document.querySelector('#object3').focus;
            errorText.innerHTML = myText;
        }
        else if(adjective == ""){
            myText = "please provide an adjective";
            document.querySelector('#adjective').focus;
            errorText.innerHTML = myText;
        }
        else if(verbing == ""){
            myText = "please provide a verb ending in -ing";
            document.querySelector('#verbing').focus;
            errorText.innerHTML = myText;
        }
        else if(verb == ""){
            myText = "please provide a verb";
            document.querySelector('#verb').focus;
            errorText.innerHTML = myText;
        }
        else if(animal == ""){
            myText = "please provide an animal";
            document.querySelector('#animal').focus;
            errorText.innerHTML = myText;
        }
        else if(clothing == ""){
            myText = "please provide an article of clothing";
            document.querySelector('#clothing').focus;
            errorText.innerHTML = myText;
        }

        else{
            myText = `Dear Resident, due to the following events we will be issuing a notice of eviction. One week ago, at ${time} the residents at 1020B began the Great War of the Red Door Duplexes when they swapped the ${object1} with their ${object2}. In the following morning the 1020A residents awoke to see their updated house and were overcome with feeling ${emotion}. 

            Later, Duplex A responded to their neighbors since their ${object3} was too ${adjective}. With some ${verbing} around, Duplex A succeeded to ${verb} Duplex B’s ${object2}

            The final straw occurred when 1020B unleashed a surprise: a ${animal} wearing a ${clothing}. They rampaged through the duplex, leaving destruction in their wake. For these reasons, the residents of 1020A and 1020B are unable to continue their lease.`;
            document.querySelector('#time').value= "";
            document.querySelector('#object1').value= "";
            document.querySelector('#object2').value= "";
            document.querySelector('#emotion').value= "";
            document.querySelector('#object3').value= "";
            document.querySelector('#adjective').value= "";
            document.querySelector('#verbing').value= "";
            document.querySelector('#verb').value= "";
            document.querySelector('#animal').value= "";
            document.querySelector('#clothing').value= "";

            madLib.innerHTML = myText;

            document.querySelector('#overlay').className = 'showing';

            document.querySelector('.close').addEventListener('click', function(event){
                event.preventDefault();
                document.querySelector('#overlay').className = 'hidden';
            });

            document.addEventListener('keydown', function(event){
                if(event.key === 'Escape'){
                    document.querySelector('#overlay').className = 'hidden';
                }
            });

        }


    });

    
})();