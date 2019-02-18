// we need an array of objects

const food = {
    
    breakfast: [
        {
            name: "eggs",
            protien: 7,
            carbs: 1,
            fat: 5,
        },
        {
            name: "cereal",
            protien: 11,
            carbs: 55,
            fat: 5,
        },
        {
            name: "bagel",
            protien: 10,
            carbs: 46,
            fat: 2,
        },
        {
            name: "bacon",
            protien: 2,
            carbs: 0,
            fat: 6,
        },
    ],

    lunch: [
        {
            name: "sandwich",
            protien: 8,
            carbs: 27,
            fat: 7,
        },
        {
            name: "gyro",
            protien: 20,
            carbs: 47,
            fat: 20,
        },
        {
            name: "tomato soup",
            protien: 4,
            carbs: 11,
            fat: 2,
        },
        {
            name: "protien shake",
            protien: 5,
            carbs: 30,
            fat: 3,
        },
    ],

    dinner: [
        {
            name: "hamburger",
            protien: 26,
            carbs: 40,
            fat: 27,
        },
        {
            name: "pizza",
            protien: 11,
            carbs: 40,
            fat: 13,
        },
        {
            name: "steak",
            protien: 17,
            carbs: 3,
            fat: 17,
        },
        {
            name: "fish fry",
            protien: 37,
            carbs: 25,
            fat: 10,
        },
    ]
}

//object to keep track of the users total calories consumed
const calories = {
    totalProtien: 0,
    totalCarbs: 0,
    totalFats: 0,
    totalCalories: function() {
        var protienCals = this.totalProtien * 4;
        var carbsCals = this.totalCarbs * 4;
        var fatsCals = this.totalFats * 9
        var totalCals = protienCals + carbsCals + fatsCals;
        if(totalCals > 2700){
            alert("DAMN YOU ATE ALOT!");
        }
        return totalCals;
    }

}

//populate the check boxes with the json

//create div with class "checkbox"
//append checkbox to the child div
//repeat for each object in food
breakfast();
lunch();
dinner();

function breakfast() {
    populateCheckboxes(food.breakfast,"Breakfast")
}

function lunch() {
    populateCheckboxes(food.lunch, "Lunch")
}

function dinner() {
    populateCheckboxes(food.dinner, "Dinner")
}

//append a div with class checkbox to flex-container
function populateCheckboxes(meal, mealName) {
        //create the div
        var parent = document.querySelector(".checkbox-flex");
        var child = document.createElement("DIV");
        var myH1 = document.createElement('h1');
        var h1TextNode = document.createTextNode(mealName);
        myH1.appendChild(h1TextNode);
        child.appendChild(myH1);
        child.className = "checkbox";
        for(var i = 0; i < meal.length; i++) {
            var mybr = document.createElement('br');
            var value = meal[i];
            var textNode = document.createTextNode(value.name);
            var checkbox = document.createElement("INPUT");
            checkbox.setAttribute("type","checkbox");
            checkbox.addEventListener("click", addCalories);
            checkbox.setAttribute("value",[value.protien,value.carbs,value.fat]); //attaching values to each checkbox for easier reference in another function
            child.appendChild(checkbox);
            child.appendChild(textNode);
            child.appendChild(mybr);        
        }
        parent.appendChild(child);  
}

function updateCalories() {
    var protienElem = document.querySelector(".protienClass");
    var fatElem = document.querySelector(".fatsClass");
    var carbsElem = document.querySelector(".carbsClass");
    var totalCaloriesElem = document.querySelector(".total")
    protienElem.innerText = calories.totalProtien + " g";
    fatElem.innerText = calories.totalFats + " g";
    carbsElem.innerText = calories.totalCarbs + " g";
    totalCaloriesElem.innerText = calories.totalCalories();
}

function addCalories(event) {
    
    var foodInfo = event.target.value.split(',');
    console.log("is checked " + this.checked);
    if(this.checked) {
        calories.totalProtien += parseInt(foodInfo[0]);
        calories.totalCarbs += parseInt(foodInfo[1]);
        calories.totalFats += parseInt(foodInfo[2]); 
        updateCalories();  
    }
    else{
        calories.totalProtien -= parseInt(foodInfo[0]);
        calories.totalCarbs -= parseInt(foodInfo[1]);
        calories.totalFats -= parseInt(foodInfo[2]);  
        updateCalories();   
    }   
}

