const user = {
    name: "Frank",
    age: 30,
    title: "RD",
    isStudent: false,
    address: {
        city: "台北市",
        dis: "中正區"
    }
};


console.log("user", user);                //#1
console.log(user.name);                   //#2
console.log(user['age']);                 //#2
console.log(user.address);                 //#

const x = "name";							  //#2
console.log(user[x]);

console.log(user.address.city)            //#3
console.log(user["address"]["city"])
console.log(user["address"].city)
user.name = "Abee"; //常數可以改值
console.log(user.name);
user["title"] = "Law";
user.address["city"] = "台中市"
console.log(user.address.city)
console.log(user.title);
user.age += 1;
console.log(user.age); //新增
user.email = "Abee@gmail.com"
