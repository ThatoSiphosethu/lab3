$(document).ready
(
    function () {
        // add event listeners
        $("button").click();

        // other functions
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
            //alert(`Each person pays ${totalCost} `);
            $("#pizzaTotal").text(totalCost.toFixed(1));

            $("p.output").show();

        }

    }
);