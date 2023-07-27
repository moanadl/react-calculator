import { useState } from 'react';
import Button from '../Button';
import Display from '../Display';
import './Main.css'

const Main = () => {


// Creating de state of the elements that are going to be updated in the display at each click
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [operator, setOperator] = useState();

// Function called when numbers or the decimal point are clicked
    function inputNumber (e) {

        // 'e' is going to be the label of the button i.e. a string whilst 'number' is defined initally as the NUMBER 0.
            // To avoid the display to show a lot of 0, if the first input is the string '0' it won't be computed
        if(number === 0 && e === '0') {

            return

        }

        // If 'number' is still the initial value and 'e' is '.' the new number will be '0.' to avoid the display 
            //to show the decimals without the 0 on the left, for example: .123 instead of 0.123.
        // If 'number' is still the inital value or it is an operator, the new number will be 'e'.
        if (number === 0 || number === operator) {

            if (e === '.') {

                setNumber(0 + '.');

            } else {

                setNumber(e);

            }
        } else {
            // If number already has a decimal point and 'e' = '.' display 'Invalid input!' and return.
                // If it hasn't, 'number' will be the last 'e' plus the present one.
            if (e === '.' && number.toString().includes('.')) {

                alert('Invalid input!')
                return
            }

            setNumber(number + e);

        }
    }

// Function called when 'AC' is clicked
    function clearDisplay () {

        setNumber(0);
        setOldNumber(0);

    }

// Function called when operators are clicked
    function operationHandler (e) {

        // 'number' will be register as the operator to separate the two numbers that are going to be used for the calculation
            // 'oldNumber' will be the number input so far and 'number' will be reseted in the function 'inputNumber' and start over
        setOldNumber(number);
        setNumber(e);
        setOperator(e);

    }

// Function called when 'DEL' is clicked
    function deleteNumber () {

        // Just after an operation the type of 'number' is number. To prevent error when the user click 'DEL' at this moment
            // 'number' is transformed to a string either way and 'slice' is used to delete the last element of it.
        let numberDEL = number.toString().slice(0,-1);

        // If 'DEL' is used in the last element of the string, the display will be back to its initial state, i.e. '0'.
        if (numberDEL.length === 0) {

            setNumber(0);

        } else {

            setNumber(numberDEL);

        }
    }

//Function called when '=' is clicked
    function calculateResult (e) {

        // Wheter the operator is '+', '-', 'x' or '÷', 'number' and 'oldNumber' will be transformed to number type and the operation
            // between them will be implemented. After that they will be transformed to string again and if the new number
            // is a decimal with more than 7 digits after the separator it will be limited to only 5 on the display.
            // Otherwise, 'number' will be defined as the number obtained by the operation transformed to number type again.
        if (operator === '+') {

            let calculation = parseFloat(oldNumber) + parseFloat(number);
            let calculationString = calculation.toString();

            if (calculationString.includes('.')) {

                if (calculationString.split('.')[1].length >= 7) {

                    setNumber((parseFloat(calculationString)).toFixed(5));

                } else {

                    setNumber(parseFloat(calculationString));

                }
            } else {

                setNumber(parseFloat(calculationString));

            }}

            else if (operator === '-') {

                let calculation = parseFloat(oldNumber) - parseFloat(number);
                let calculationString = calculation.toString();

                if (calculationString.includes('.')) {

                    if (calculationString.split('.')[1].length >= 7) {

                        setNumber((parseFloat(calculationString)).toFixed(5));

                    } else {

                        setNumber(parseFloat(calculationString));

                    }
                } else {

                    setNumber(parseFloat(calculationString));

                }}

            else if (operator === 'x') {

                let calculation = parseFloat(oldNumber) * parseFloat(number);
                let calculationString = calculation.toString();

                if (calculationString.includes('.')) {

                    if (calculationString.split('.')[1].length >= 7) {

                        setNumber((parseFloat(calculationString)).toFixed(5));

                    } else {

                        setNumber(parseFloat(calculationString));
                        
                    }
                } else {

                    setNumber(parseFloat(calculationString));

                }}
            
            else if (operator === '÷') {

                let calculation = parseFloat(oldNumber) / parseFloat(number);
                let calculationString = calculation.toString();

                if (calculationString.includes('.')) {
                    
                    if (calculationString.split('.')[1].length >= 7) {

                        setNumber((parseFloat(calculationString)).toFixed(5));

                    } else {

                        setNumber(parseFloat(calculationString));

                    }
                } else {

                    setNumber(parseFloat(calculationString));

                }}

            else if (operator === '%') {

                let calculation = parseFloat(oldNumber) / 100 * parseFloat(number);
                let calculationString = calculation.toString();

                if (calculationString.includes('.')) {

                    if (calculationString.split('.')[1].length >= 7) {

                        setNumber((parseFloat(calculationString)).toFixed(5));

                    } else {

                        setNumber(parseFloat(calculationString));

                    }
                } else {

                    setNumber(parseFloat(calculationString));

                }}
    }

    return (

        <div className="calculator-area">

            <div className='calculator'>

                <Display value={number} />
                <div className='edge left'></div>
                <div className='edge right'></div>
                <div className='buttons-area'>
                    <Button label='AC' click={clearDisplay} ac/>
                    <Button label='DEL' click={deleteNumber} del/>
                    <Button label='%' click={operationHandler} operation/>
                    <Button label='&divide;' click={operationHandler} operation/>
                    <Button label='7' click={inputNumber}/>
                    <Button label='8' click={inputNumber}/>
                    <Button label='9' click={inputNumber}/>
                    <Button label='x' click={operationHandler} operation/>
                    <Button label='4' click={inputNumber}/>
                    <Button label='5' click={inputNumber}/>
                    <Button label='6' click={inputNumber}/>
                    <Button label='-' click={operationHandler} operation/>
                    <Button label='1' click={inputNumber}/>
                    <Button label='2' click={inputNumber}/>
                    <Button label='3' click={inputNumber}/>
                    <Button label='+' click={operationHandler} operation/>
                    <Button label='0' click={inputNumber} double/>
                    <Button label='.' click={inputNumber}/>
                    <Button label='=' click={calculateResult} operation/>
                </div>
                <div className='credits'><h6>Calculator developed in React.js by Moana Lopes</h6></div>
            </div>
        </div>
    )

}

export default Main;


// Quando aperta = sem ter apertado nenhum operador o programa assume que é multiplicação por algum motivo
// Fazer comentários explicando cada trecho de código
// Ajeitar a questão de operação sem decimal