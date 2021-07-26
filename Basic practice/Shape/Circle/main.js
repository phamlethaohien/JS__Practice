const pi = 3.14;

console.log("Cách 1: Nhập đường kính");
var D = 6;
C1 = D * pi;
S1 = (D * D / 4) * pi;

if (D > 0) {
    console.log("Chu vi hình tròn là: ", C1 ,"cm");
    console.log("Diện tích hình tròn là: ", S1 ,"cm2");
} else{
    console.log("Bạn vui lòng kiểm tra lại nhé!");
}

console.log("Cách 2: Nhập bán kính");
var R = 2;
C2 = 2 * R * pi;
S2 = R * R * pi;

if (R > 0) {
    console.log("Chu vi hình tròn là: ", C2 ,"cm");
    console.log("Diện tích hình tròn là: ", S2 ,"cm2");
} else{
    console.log("Bạn vui lòng kiểm tra lại nhé!");
}
