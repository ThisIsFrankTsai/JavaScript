// 1.取得公分與英吋的輸入框DOM
const inchInput = document.getElementById("inchInput"),
    cmInput = document.getElementById("cmInput"),
    inchErr = document.getElementById("inchErr"),
    cmErr = document.getElementById("cmErr");
// 2.綁定英吋輸入框的輸入變更事件
// 清空錯誤訊息
// 取得英吋的值
//轉換成公分，四捨五入取到小數點後兩位
// 公分的值放到公分的輸入框
// 如果英吋是NaN
// 如果條件為True
inchInput.addEventListener("input", function () {

    inchErr.innerText = "";

    const inch = parseFloat(inchInput.value);

    const cm = Math.round(2.54 * inch * 100) / 100;

    cmInput.value = cm

    if (isNaN(inch)) {

        inchErr.innerText = "請輸入數字"
    }
});

cmInput.addEventListener("input", function () {
    cmErr.innerText = "";
    const cm = parseFloat(cmInput.value);
    let inch = cm / 2.54;
    inch = Math.round(inch * 100) / 100;
    console.log(inch);
    inchInput.value = inch;
    if (isNaN(cm)) {
        cmErr.innerText = "請輸入數字";
    }

});

