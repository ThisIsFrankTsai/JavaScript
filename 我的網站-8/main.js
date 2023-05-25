const user = {
    name: "sdf",
    age: 30,
    intro: function (a) {
        console.log("in the object this", this);  //this 相當於user，在物件函數內將可代表此物件本身
        console.log(`${a}hello!我是${this.name}`);
    }
};

// console.log("in the outside this", this);
// console.log("in the outside user", user);

// user.intro("Hello");

// 物件建構式，是一種用來產生物件的函數
// 命名慣例，首字大寫

// 設計一個用來產生user物件的建構式
function User(name, age) {
    // 在建構式內的this,這個this將會代表此建構式所產生的物件
    this.name = name;
    this.age = age;
    this.city = "新北市" //預設default
    this.intro = function (greeting = "哈囉") { //物件函數
        console.log(`${greeting},我是${this.name}我住${this.city}目前${this.age}歲`)
    }
}
// 透過建構式產生一個獨立的物件
// new 建構式
const user2 = new User("Amy", 18,);
const user3 = new User("John", 45);

console.log(user3.intro("Hello"));
console.log(user2.intro());