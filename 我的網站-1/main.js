// 跳出視窗
// alert("Hello!World")

// 在主控台上印出文字
// console.log("Hello!world");


// // const 常數:不可以重新賦予新值
// // let 變數:可以重新賦予新值

// let a = "Sam";
// const username = "Frank";
// console.log(a);
// console.log("Hello!" + username);

// a = "Amy"
// console.log("Hi," + a);
// console.log("哈囉!" + username);

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const titleInput = document.getElementById("titleInput");
const btn = document.getElementById("btn");
const intro = document.getElementById("intro");
const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");

btn.addEventListener("click", function () {
    const name = nameInput.value;
    const age = ageInput.value;
    const title = titleInput.value;

    intro.innerText = "Hello!我是" + name + "我現在" + age + "，我是:" + title;
    intro1.innerText = `<h1>Hello!</h1>
            <h2>我是${name}</h2>我現在${age}，我是:${title}`
    intro2.innerHTML = `<h1>Hello!</h1>
            <h2>我是${name}</h2>我現在${age}，我是:${title}`
});



