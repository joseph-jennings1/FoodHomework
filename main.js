document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("count").addEventListener("click", function () {
        var foodItem = new FoodItem(
            document.getElementById("foodName").value,
            parseFloat(document.getElementById("calories").value),
            parseFloat(document.getElementById("quantity").value)
        );
        if (!foodItem.isValid()) {
            alert("All entries must have a value and the quantity and calory values must be numerical");
        } else {
            entries.push(foodItem);
            displayEntries();
        }
    });

    document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("foodName").value = "";
        document.getElementById("calories").value = "";
        document.getElementById("quantity").value = "";
        
        document.getElementById("foodName").focus();
    });
    
    document.getElementById("foodName").focus();
});

var entries = [];

var displayEntries = function() {
    let displayString = "", totalCal = 0;

    for (var i in entries) {
        displayString += entries[i].toString() + "\n";
        totalCal += entries[i].count();
    }

    displayString += "\nTotal Calories:" + totalCal.toFixed(1);

    document.getElementById("entry_list").value = displayString;
}
