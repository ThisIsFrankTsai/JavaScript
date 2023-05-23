// 取得畫面上要控制的標籤(DOM，Document Object Model)
const form = document.getElementById("form"),
    xInput = document.getElementById("xInput"),
    yInput = document.getElementById("yInput"),
    result = document.getElementById("result");

// 從標籤上取得的任何資料都是字串
// 在function中執行的常數、變數由上往下走到底的時候，結尾就自動消失。
form.addEventListener("submit", function (e) {
    // 預防form表單的重新整理行為
    e.preventDefault();
    // 表單送出後的流程
    const x = parseInt(xInput.value);
    const y = parseInt(yInput.value);
    const ans = x + y;
    result.innerText = ans;
});




// console.log(typeof "Hello");
// console.log(typeof 2.1414);
// console.log(typeof { name: "amy", age: 30 });



// const a = 30;
// const b = 9;
// const c = "9";
// console.log(a + b); //加法
// console.log(a - b); //減法
// console.log(a * b); //乘法
// console.log(a / b); //除法
// console.log(a % b); //取餘數

// // 數字+文字=文字+文字

// console.log(a + parseInt(c)); //加法
// console.log(a + c);
// console.log(parseInt(a / b));
// console.log(parseFloat(a / b));

// console.log(a - c); //減法
// console.log(a * c); //乘法
// console.log(a / c); //除法
// console.log(a % c); //取餘數


// 常用function
// parseInt() //強制轉換成整數
// parseFloat()//保留小數
// NaN Not a Number

