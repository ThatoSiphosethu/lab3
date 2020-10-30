$(document).ready(
    function ()
    {
        // add event listener
        $("button").click(lateFees);
        $("#alertButton").click(showPopUp);
    },
        //any other functions
        function f()
        {

        },

        function showPopUp()
        {
            alert("Hello!!!")
        },

function lateFees() {
    //total books rented?

    var books = $("#booksRented").val();
    books = parseFloat(books);

    //late days

    var days = $("#days").val();
    days = parseFloat(days);

    //cost of book rental

    var bookRental = parseFloat($("#books").val();

    //total cost of book rental

    var totalCost = 0.25 * days * bookRental;


    //output

    // alert(`Your total is $${totalCost}`);
    $("#bookTotal").text(totalCost.toFixed(1));

    $("p.output").show();

    //total DVDs rented?

    var DVD = $("#DVDRented").val();
    DVD = parseFloat(DVD);

    //late days

    var lateDays = $("#lateDays").val();
    lateDays = parseFloat(lateDays);

    //cost of dvd rental

    var rental = parseFloat(DVD);

    //total cost of dvd rental

    var dvdRental = (0.75 * lateDays * rental);

    //output

    //alert(`Your total is $${dvdRental}`);
    $("#dvdTotal").text(dvdRental.toFixed(1));

    $("p.output").show();


},

function pizzaOrder()
{

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
    //alert(`Each person pays ${totalCost} `);
    $("#pizzaTotal").text(totalCost.toFixed(1));

    $("p.output").show();

};