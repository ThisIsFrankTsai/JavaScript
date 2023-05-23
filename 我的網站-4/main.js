const scoreForm = document.getElementById("scoreForm"),
    chineseScore = document.getElementById("chineseScoreinput"),
    englishScore = document.getElementById("englishScoreinput"),
    mathScore = document.getElementById("mathScoreinput"),
    result = document.getElementById("result");

scoreForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const chinese = parseInt(chineseScore.value),
        english = parseInt(englishScore.value),
        math = parseInt(mathScore.value),
        sum = chinese + english + math,
        avg = Math.round((sum / 3) * 100) / 100;

    let gpa;
    let color = "alert-secondary";
    if (avg >= 90) {
        gpa = "A+";
        color = "alert-success";
    } else if (avg >= 80) {
        gpa = "A";
    } else if (avg >= 70) {
        gpa = "B";
    } else if (avg >= 60) {
        gpa = "C";
    } else {
        gpa = "F";
        color = "alert-danger"
    }

    const report = `<div class="alert ${color}">
        國文:${chinese} <br>
        英文:${english} <br>
        數學:${math}    <br>
        總分:${sum}     <br>
        平均:${avg}     <br>
        總評:${gpa}     <br>
        </div>`
    result.innerHTML = report;
});