var FoodItem = function(pName, pCalories, pQuantity){
    this.name = pName;
    this.calories = pCalories;
    this.quantity = pQuantity;



    this.count = function(){
        return this.calories * this.quantity;
    }
};

FoodItem.prototype.isValid = function(){
    if (this.name == "" || this.calories == "" || this.quantity == ""){
        return false;
    } else if (isNaN(this.calories) || isNaN(this.quantity)){
        return false;
    } else {
        return true;
    }
}

FoodItem.prototype.toString = function() {
    var totalCalories = this.count().toFixed(1);
    return "- " + this.name + ", " + totalCalories + " calories, " + this.quantity;
}
