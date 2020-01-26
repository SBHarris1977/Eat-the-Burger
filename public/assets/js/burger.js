$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
var newBurger = {
    name: $("#burger-text").val(),
    devoured: false
};
console.log("NEW BURGER", newBurger)
//POST requeat

$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
    //processData: false,
    //contentType: false
    
}).then(
    function() {
        console.log("new burger created");
        location.reload();
    }
);
  //Adding the devour button
        });

    $(".devour").on("click", function(event) {
        var id = $(this).data("id");
          //PUT request to change the burger to dovoured
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: 1
        }).then(
            function() {
                console.log("Changed devoured to true");
                location.reload();
            }
        );
    })
    
  
});
