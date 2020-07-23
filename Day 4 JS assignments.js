####Q1
for(let i=1; i<=100; i++)
{
    if((i%3==0) && (i%5==0))
    {
        console.log("fizzbuzz ",i)
    }
    else if( i%3 == 0)
    {
        console.log("fizz ",i)
    }
    else if( i%5 == 0)
    {
        console.log("buzz ",i)
    }
   
     else 
    {
        console.log(i)
    }
     
}

####Q2
const student = {
    name : "helsinki",
    age : 24,
    projects :{
        dicegame:"two player dice game using javascript"
    }
}
 const {name,projects:{dicegame},age} = student
 console.log(name)
 console.log(age)
 console.log(dicegame)
 
 
 ####Q3
 let shoppingList =['biscuits','carrots','mango','curry-leaves','coriander','capsicum','pasta','cheese'];
console.log(shoppingList)

let shoppingBasket = [...shoppingList,'butter','chocolates']
console.log(shoppingBasket)


###Q4
function add(num1,num2)
{
    let res = num1+num2;
    console.log(res);
}

function sub(num1,num2)
{
    let res = num1-num2;
    console.log(res);
}

function mul(num1,num2)
{
    let res = num1*num2;
    console.log(res);
}

function div(num1,num2)
{
    let res = num1/num2;
    console.log(res);
}

function sqrt(num1)
{
    let res = Math.sqrt(num1)
    console.log(res);
}

function percent(num1,num2)
{
    let res = (num1/num2)*100;
    console.log(res)
}

alert("enter number 2 as '0' for square root")
alert("enter total for number 2 for percent")
var number1 = Number(prompt("enter number 1",0));
var number2 = Number(prompt("enter number 2",0));
var result = Number(prompt("enter '1' for addition, '2' for subtraction, '3' for multiplication, '4' for division, '5' for squareroot, '6' for percent"))

switch(result){
    case 1: 
            add(number1,number2);
            break;
    case 2:
            sub(number1,number2)
            break;
    case 3:
            mul(number1,number2);
            break;
    case 4:
            div(number1,number2);
            break;
    case 5:
            sqrt(number1);
            break;
    case 6:
            percent(number1,number2);
            break;
    default:
            console.log("error");
            break;


}



#####Q5

console.log('Employee rewards')
 let sales = Number(prompt('enter the total sales achieved.'))
 let reward = 0

 if(sales>=0 && sales<=5000)
 {
     reward = sales*0.02;
     console.log(`Rewards earned by the employee is ${reward}.`)
 }
 else if(sales>5000 && sales<=10000)
 {
     reward = (5000*0.02)+((sales - 5000)*0.05)
     console.log(`Rewards earned by the employee is ${reward}.`)
 }
 else if(sales>10000 && sales<=20000)
 {
     reward = (5000*0.02)+(5000*0.05)+((sales-10000)*0.07)
     console.log(`Rewards earned by the employee is ${reward}.`)
 }
 else
 {
    reward = (5000*0.02)+(5000*0.05)+((10000)*0.07)+((sales-20000)*0.1)
    console.log(`Rewards earned by the employee is ${reward}.`)
 }
 
 
 ###Q6
  let num = 0
    num = Number(prompt("enter a number"))
    
    
    while(num<=100)
     {
         num = Number(prompt("Enter a number greater than 100",0))
         let res = (num<=100) ? 'entered number is incorrect':'entered number is correct'
         console.log(res)
        
        
    }
    
    
    ####Q7
    
    let num = Number(prompt('enter a number',0))


for (var counter = 2; counter <= num; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}


#######Q8
// function ask(question, yes, no)
// {
//     if(confirm(question)) yes()
//     else no();
// }

//  ask("Do you agree?",
//  function() { alert("you agreed.");},
//  function() { alert("you cancelled the execution");});

let ask = (question,yes,no) => {if(confirm(question)) yes()
    else no();
}
ask("Do you agree?",
 function() { alert("you agreed.");},
 function() { alert("you cancelled the execution");});
 
 
 






