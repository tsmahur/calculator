//------code to focus any element ------------
// document.getElementById('displayId').focus()

function keyPressFromDisplay(event){
    if(event.key=='Enter'){
        evaluateFromDisplay();
    }
}

function appendToDisplay(value){
    document.getElementById('error').innerHTML=''
    document.getElementById('displayId').value+=value //for input:text
    // document.getElementById('displayId').innerHTML+=value //textContent
}
function evaluateFromDisplay(){
    var display=document.getElementById('displayId')
    var inputFromDisplay=display.value// input:text , display.textContent
    try {
        if(inputFromDisplay){
            calculate(inputFromDisplay,display)
        }
    } catch (error) {
        document.getElementById('error').innerHTML="Invalid Expression"
    }
    
}

function calculate(inputFromDisplay,display){
    try {
            var calc=eval(inputFromDisplay);
            display.value=calc?calc:''//input:text
            // display.innerHTML=calc?calc:''
    } catch (error) {
        document.getElementById('error').innerHTML="Invalid Expression"
    }
}


function clearAll(){
    document.getElementById('displayId').value=''//innerHTML
    document.getElementById('error').innerHTML=''
}