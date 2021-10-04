const adultCheck = function(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
};

const greeting = function(age) {
adultCheck();
if (age === true) {
    return "Hello there";
} else {
        return "Hello kiddo";
    }
};
console.log(greeting(adultCheck(15)));