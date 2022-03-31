$(document).ready(function(){
    var result = 0;
    var temp = 0;
    var temp1 = 0;
    var symbol = 0;
    var screenDisplay = $('#screen-display');
    var screenDisplayField = $('#screen-display').innerText;
    var ansDisplay = $('#ans-ansDisplay');
    var ansDisplayField = $('#ans-ansDisplay').innerText;
    screenDisplayField = "";
    ansDisplayField = "";
    // to get value of the btn from keys-calculator


    $('.btn-keys').click(function() {
        btnValue(this);
    });

    function btnValue(btnvals) {
        val = btnvals.innerText;

           // code for display input number and hide of namder('caly me')
        var inputVal = parseInt(val);
        let namer = $('#screenCalculator-namer');
        let ansDisplayDiv = $('.ansDisplay-calculator');

        if(inputVal >=0 && Number.isInteger(inputVal) || val === "-") {
            namer.css('display', 'none');
            screenDisplay.css('display', 'block');
            ansDisplayDiv.css('display', 'block')
        }
        
    }

    $('.btn-num').click(function(){
        if(symbol == 0){
            ansDisplayField = ansDisplayField + val;
            // screenDisplayField = screenDisplayField + val;
            screenDisplay.text(`${screenDisplay.text()}${val}`);
            console.log(ansDisplayField);
        }else{
            ansDisplayField =  `${ansDisplayField}${val}`;
            // screenDisplayField = screenDisplayField + val;
            screenDisplay.text(`${screenDisplay.text()}${val}`);
            if(symbol ==1){
                temp1 = parseInt(ansDisplayField);
                console.log(temp1 + " temp1");
            }
            console.log(ansDisplayField);
        }
        
        console.log(screenDisplayField);
    });

    $('.btn-symbol').click(function() {
        inputSymbol = this.innerText;
        symbol+=1;
        console.log(symbol + " symbol");
        if(temp1 == 0 && symbol == 1){
            temp = parseInt(ansDisplayField);
            console.log(temp + " = temp");
            console.log(typeof(temp) + "atyper of temp");
        }else{
                switch(inputSymbol){
                    case "+":
                        result = temp + temp1;
                        break;
                    case "-":
                        result = temp - temp1;
                        break;
                    case "/":
                        result = temp / temp1;
                        break;
                    case "*":
                        result = temp * temp1;
                        break;
                }
                temp2 = parseInt(ansDisplayField);
                console.log(temp2 + " = temp2");
                console.log(typeof(temp2) + "atyper of temp2");                
                temp = result;
                temp1 = temp2;
                temp2 = 0;   
                result = 0;
            
        }
        // screenDisplayField = screenDisplayField + inputSymbol;
        screenDisplay.text(`${screenDisplay.text()}${inputSymbol}`);
        ansDisplayField = "";
        
    });
    
    // for displaying the ans separatly from calculation 
    function resultDisplay(){
        if(symbol<2){
            temp1 = parseInt( ansDisplayField);
            console.log(temp1 + " = temp1");
            console.log(typeof(temp1) + "atyper of temp1")
            switch(inputSymbol){
                case "+":
                    result = temp + temp1;
                    break;
                case "-":
                    result = temp - temp1;
                    break;
                case "/":
                    result = temp / temp1;
                    break;
                case "*":
                    result = temp * temp1;
                    break;
                default:
                    "calculation error";
                    break;
            };
        }else{
            switch(inputSymbol){
                case "+":
                    result = temp + temp1;
                    break;
                case "-":
                    result = temp - temp1;
                    break;
                case "/":
                    result = temp / temp1;
                    break;
                case "*":
                    result = temp * temp1;
                    break;
                default:
                    "calculation error";
                    break;
            };
        }
            
        

        ansDisplay.text(`${result}`);
        console.log(result + " = result");
        console.log(typeof(result) + " type of result");
    };

    $('#btn-equal').click(resultDisplay);
    
    // function to clear screen on click 'AC'
     function clearAc(){
        ansDisplayField = "";
        screenDisplayField = "";
        screenDisplay.text("");
        ansDisplay.text("");
        result = 0;
        temp = 0;
        temp1 = 0;
        symbol = 0;
     }

     $('#btn-ac').click(clearAc);

    
     




});