<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>day 4 assignment</h2>
    <!-- <script src="scripts/Q1.js"></script> -->
    <!-- <script src="scripts/Q2.js"></script> -->
     <!-- <script src="scripts/Q3.js"></script>  -->
    <!-- s<script src="scripts/Q4.js"></script>  -->
     <!-- <script src="scripts/Q5.js"></script>  -->
    <!-- <script src="scripts/Q6.js"></script>  -->
     <!-- <script src="scripts/Q7.js"></script> -->
    <script src="scripts/Q8.js"></script> 
</body>
</html>




let shoppingList =['biscuits','carrots','mango','curry-leaves','coriander','capsicum','pasta','cheese'];
console.log(shoppingList)

let shoppingBasket = [...shoppingList,'butter','chocolates']
console.log(shoppingBasket)
© 2020 GitHub, Inc.





let num = 0
    num = Number(prompt("enter a number"))
    
    
    while(num<=100)
     {
         num = Number(prompt("Enter a number greater than 100",0))
         let res = (num<=100) ? 'entered number is incorrect':'entered number is correct'
         console.log(res)
        
        
    }
