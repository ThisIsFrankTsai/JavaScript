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
console.log("user", user);
console.log(user.name);
console.log(user['age']);
console.log(user.address);

const x = "name";
console.log(user[x]);

console.log(user.address.city)
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
console.log(user); 