$(function() {
    $(".add-burger").on("submit", function(event) {
var newBurger = {
    name:$("burger"),
    devoured: false
}
    });
});

//PUT request
$.ajax("api/burgers/" + id, {
    type: "PUT",
    data: newBurger
}).then(
    function() {
        console.log("create new burger");
        location.reload();
    }
)

//Adding the devour button
$(".devour").on("click", function(event) {
    var id = $(this).data("id");
})

$.ajax("api/burgers/" + id, {
    type: "PUT",
    data: 1
    }).then(
        function() {
            console.log("Changed devoured to true");
            location.reload();
        }
    );
    