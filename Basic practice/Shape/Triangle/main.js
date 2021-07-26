var a = 71;
var b = 95;
var c = 75;

P = a + b + c;
p = (a + b + c) / 2;
S = Math.sqrt( (p*(p - a)*(p - b)*(p -c)) );

if (a > 0 && b > 0 && c > 0 && (a + b) > c && (a + c) > b && (b + c) > a ) {
    console.log('Chu vi hình tam giác là: ', P ,'cm');
    console.log('Diện tích hình tam giác là: ', S ,'cm2');
} else {
    console.log('Bạn vui lòng kiểm tra lại nhé!');
}
