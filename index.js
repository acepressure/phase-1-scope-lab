// Write your solution in this file!
customerName = 'bob';

function customer() {
return customerName;
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
     bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    let leastFavoriteCustomer = 'any';
    leastFavoriteCustomer = 'walter'; 
}