// Question 1 - The html is not attached to the script file, add the script info in header of html --- 1 mark

// Question 2 - Create a constant to hold your first name and store it in firstName
const firstName = "YourFirstName";
// Create a constant to get the paragraph from question 2 html and store it in question2Text
const question2Text = document.querySelector('#question2');
// Output your first name stored in firstName to question2Text p tag --- 3 marks
question2Text.textContent = firstName;

// Question 3 - Have a close look at the following code:
let employee = {
    name: ['Biff', 'Henderson'],
    employeeNumber: 30573,
    department: 'Repossessions',
    interests: ['the Mob', 'fast cars', 'baseball'],
    active: true
};

/* Write a short script that creates an interesting sentence by concatenating members of the above employee 
    object together (using either dot notation or bracket notation). Include as much information about the employee as you can. 
    Output the resulting content as text inside the question3 paragraph element. --- 5 marks */
const question3 = document.querySelector('#question3');
const sentence = `${employee.name[0]} ${employee.name[1]} is an employee in the ${employee.department} department. 
    Their employee number is ${employee.employeeNumber}. They are interested in ${employee.interests.join(', ')} and 
    currently ${employee.active ? 'active' : 'not active'}.`;
question3.textContent = sentence;

// Question 4 - Consider the following block of code:
const question4Para = document.querySelector('#question4');
class Coffee {
    constructor(type, size) {
        this.type = type;
        this.size = size;
    };

    // Method to order a coffee
    coffeeOrder() {
        question4Para.textContent = `You have ordered a ${this.size} ${this.type} coffee.`;
    };
};

// Continue with the JavaScript portion of this code above to do the following, making use of the Coffee class above:
// Create a new instance of the Coffee object, picking whatever type of coffee you like(latte, espresso, americano, etc.), 
// and whatever size you like(extra large, large, medium, small, etc.).
const myCoffee = new Coffee('latte', 'medium');
// Call the coffeeOrder method to output your coffee order to the screen as text inside the paragraph element(represented by const question4Para).
myCoffee.coffeeOrder();
// Comment and format your above code appropriately. --- 5 marks

// Question 5 - Consider the following JavaScript:
let sandwich3 = {
    bread: 'multigrain',
    meat: 'sliced turkey',
    vegetables: {
        tomatoes: 'roma',
        lettuce: 'romaine',
        pickles: 'kosher dill'
    },
    spread: 'garlic mayonnaise'
};

// Write a snippet of code which would point to the type of tomatoes used to make the sandwich3 object
// Output the result pf tomatoes. i.e. "roma" in this case to the question5 paragraph --- 2 marks
const question5 = document.querySelector('#question5');
const tomatoesType = sandwich3.vegetables.tomatoes;
question5.textContent = tomatoesType;

// Question 6 - Given the below JavaScript object, car1, 
let car1 = {
    type: 'coupe',
    color: 'red',
    fuelType: 'battery electric',
    description: function () {
        alert(`This car is a ${this.color} ${this.fuelType} powered ${this.type}.`);
    }
};

// add information about the wheel type (17" aluminum alloy) to the above object? --- 2 marks
car1.wheelType = '17" aluminum alloy';

// Question 7a - Use the below API to generate a url with your student id as the api key
// Base URL - https://lamp.computerstudi.es/~Priyansh001/js03/test2/api/users.php
// Parameter: api_key = {your student id}
// Sample/example: https://lamp.computerstudi.es/~Priyansh001/js03/test2/api/users.php?api_key=1234
// Note - The final URL generated will be different for each student in the class and response received will also be different.
//          There is no point in using other student's url, you might receive 0 from this step ahead + academic misconduct!!!

// Create your personalized URL and store it in a const/variable below --- 2 marks
const apiKey = '200556150'; // Replace '200556150' with your actual student ID
const personalizedURL = `https://lamp.computerstudi.es/~Priyansh001/js03/test2/api/users.php?api_key=200556150`;

// Question 7b - Use the above URL to create a fetch request and log the response to your console --- 4 marks
fetch(personalizedURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        handleResponse(data);
    })
    .catch(error => console.error('Error fetching data:', error));

// Take a break, drink some water and observe your response in any json reader or postman or your browser...

// Question 7c - Create a function that receives the above response as a parameter --- 1 mark
//               You can use this function for next two steps
function handleResponse(response) {
    // Question 7d - Dynamically create the following tags, store the received data and append everyting to question7d div
    // Received Personal ID - h2 tag
    // Received Personal First Name - h3 tag
    // Received Personal Last Name - h3 tag
    // Received Personal Image - img tag  --- 5 marks
    const question7d = document.querySelector('#question7d');
    const { personal_id, first_name, last_name, image } = response;
    const personalIdHeading = document.createElement('h2');
    personalIdHeading.textContent = `Received Personal ID: ${personal_id}`;
    const firstNameHeading = document.createElement('h3');
    firstNameHeading.textContent = `Received Personal First Name: ${first_name}`;
    const lastNameHeading = document.createElement('h3');
    lastNameHeading.textContent = `Received Personal Last Name: ${last_name}`;
    const imageElement = document.createElement('img');
    imageElement.src = image;
    question7d.append(personalIdHeading, firstNameHeading, lastNameHeading, imageElement);

    // Question 7e - For the received random data, create a loop, create appropriate table tags(td|tr|th|tbody), 
    //               and similarly like previous question append everything to question7e div --- 10 marks
    const question7e = document.querySelector('#question7e');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    for (const key in response) {
        if (Object.hasOwnProperty.call(response, key)) {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            th.textContent = key;
            const td = document.createElement('td');
            td.textContent = response[key];
            tr.append(th, td);
            tbody.appendChild(tr);
        }
    }
    table.appendChild(tbody);
    question7e.appendChild(table);
}
