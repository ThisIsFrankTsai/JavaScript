const nums = [10, 20, 30, 40, 50, 60];

console.log(nums);
console.log(typeof nums);
console.log(nums[0]);

nums[0] = 100;
nums[6] = 200;
console.log(nums);


// 第一種寫法
let i = 0;
nums.forEach(n => {
    console.log(`第${i}個數字${n}`);
    i += 1;
});

// 第二種寫法
nums.forEach((n, j) => {
    console.log(`第${j}個數字${n}`);
});

let sum = 0;

nums.forEach(n => {
    sum += n;
});

console.log("nums sum is:", sum);

console.log("長度:", nums.length);

// 透過函數新增資料
// 新增到最後面
nums.push(300);
console.log(nums);
// 移除，使用索引splice(從哪裡開始刪除，刪除幾筆資料(預設不填寫為全部))
nums.splice(0, 2)
console.log(nums);

console.log(Array.isArray(nums));



const list = document.getElementById("list");

const productList = [
    { name: "A", price: 100 },
    { name: "B", price: 200 },
    { name: "C", price: 300 },
];
productList.forEach(product => {
    const text = `<li>產品名稱:${product.name} 價格:${product.price}</li>`;
    console.log(text);
    list.innerHTML += text;
})

const countrySelect = document.getElementById("countrySelect")

axios.get("https://restcountries.com/v3.1/all")
    .then(res => {
        res.data.forEach(country => {
            console.log(country.name.common);
            const opt = `<option value="${country.name.common}">${country.name.common}</option>`;
            countrySelect.innerHTML += opt;
        })
    })
    .catch(err => {
        console.log("fail", err);
    })



