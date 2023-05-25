// 所有導覽列中的連結nav-link
//.navbar class="navbar" 

const navLinkList = document.querySelectorAll('.navbar .nav-link'),
    // 取得放在id為navbar 裡面所有class 為nav-link
    navbar = document.getElementById("navbar"),
    // 使用Id取得元素
    scrollReport = document.getElementById("scrollReport");

const navigationTable = {};

// 透過forEach迴圈取出navLinkList裡所有的連結DOM
navLinkList.forEach(a => {
    {
        // console.log(a);
        const sectionId = a.dataset.target;
        // console.log(sectionId);
        // 物件["屬性名"]=值
        navigationTable[sectionId] = { link: a, section: document.getElementById(sectionId) };
        console.log(navigationTable[sectionId])
    }
});
// console.log(navigationTable);                   //印出object的內容
// console.log(typeof navigationTable);            //object
// console.log(navigationTable.section1);          //印出object中key為section1的value
// console.log(typeof navigationTable.section1);   //object
// console.log(navigationTable.section1.link);     //section1第一個 key =>印出section1第一個key對應的value
// console.log(navigationTable.section1.section);  //section1第二個key =>印出section1第二個key對應的value
// console.log("-----------------------");

window.addEventListener("scroll", function () {
    const y = Math.round(window.scrollY + navbar.offsetHeight);
    scrollReport.innerText = `${y}`;


    for (const sectionId in navigationTable) {

        // console.log(sectionId);
        // console.log(typeof sectionId);

        // console.log(navigationTable[sectionId]);
        // console.log(typeof navigationTable[sectionId]);
        // console.log("-----------------------");
        const section = navigationTable[sectionId].section;
        const link = navigationTable[sectionId].link;
        // console.log(sectionId, section.offsetTop);
        // console.log(link);
        // 取得元素頂邊的座標
        const top = section.offsetTop;
        // 取得元素底邊的座標
        const bottom = section.offsetTop + section.offsetHeight;
        // console.log(sectionId, top, bottom)
        // 如果y大於頂邊座標 且y小於底邊座標
        if (y > top && y < bottom) {
            // console.log(sectionId)
            // console.log(link);
            // 標籤DOM.classList.add("要新增的class名稱")
            link.classList.add("text-warning");
            section.classList.add("is-active");
        } else {
            // 如果y值不在section內
            link.classList.remove("text-warning");
            section.classList.remove("is-active");
        }
    }
}
);