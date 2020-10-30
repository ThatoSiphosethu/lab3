$(document).ready(function () {
    // add event listeners
    $("button").click(lateFees);


    // other functions
    function lateFees() {
        //total books rented?

        var books = $("#booksRented").val();
        books = parseFloat(books);

        //late days

        var days = $("#days").val();
        days = parseFloat(days);

        //cost of book rental

        var bookRental = parseFloat($("#books").val());

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


    }


});



