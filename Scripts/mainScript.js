function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function mulitply(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate (operator, num1 , num2){
    if (operator == '+'){
        return add(num1, num2);
    }
    else if(operator == '-'){
        return subtract(num1,num2);
    }
    else if(operator == '*'){
        return mulitply(num1, num2);
    }
    else if(operator == '/'){
        return divide(num1,num2);
    }
}