function lateFees() {
    //total books rented?

    var books = prompt("How many books did you rent?");

    //late days

    var days = prompt("Total elapsed day since return date?");

    //cost of book rental

    var bookRental = parseFloat(books);

    //total cost of book rental

    var totalCost = 0.25 * days * bookRental;

    //output

    alert(`Your total is $${totalCost}`);

    //total DVD's rented?

    var DVD = prompt("How many DVD's did you rent?");

    //late days

    var lateDays = prompt("Total number of late days?");

    //cost of dvd rental

    var rental = parseFloat(DVD);

    //total cost of dvd rental

    var dvdRental = (0.75 * lateDays * rental);

    //output

    alert(`Your total is $${dvdRental}`);


}

function pizzaOrder() {

    //total pizzas

    var pizza = prompt("Cheese Pizza's do we want?");

    //Cost of pizza

    var pizzaCost = parseFloat(pizza)

    // how many toppings

    var toppings = prompt("How many toppings");

    //cost of toppings

    var toppingCost = parseFloat(toppings);

    //number of co-workers

    var coworkers = prompt("What is the total number of people buying?");

    //number of coworkers

    var totalCoworkers = parseFloat(coworkers);

    //total cost of pizza

    var total = (pizzaCost + toppingCost);

    //total

    var totalCost = total / totalCoworkers;

    //output
    alert(`Each person pays ${totalCost} `)






}