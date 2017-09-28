// let using block 
function order(a, b) {
    if (a > b) {
        let foo = a;
        a = b;
        b = foo;
    }
    console.log(foo === a);
    return [a, b];
}

/// const using block
const identity = {
    person: 'suresh'
}
identity.person

///Array binding
var landscape = {}
landscape.city = 'hyderabad';
landscape.area = '15000 km ';
var [city, area] = 'landascape';

// object binding
var total = function(x, y) {
    return x * y;
};

var multiply40 = total.bind(null, 40);
console.log(multiply40(8));

//// arrow functions
var arguments = 20;
var arr = () => arguments;

arr();

function foo() {
    var f = (i) => arguments[0] + i;
    return f(6);
}

foo(4);