

const btn = document.getElementById("btn"),
    reportBlock = document.getElementById("reportBlock"),
    url = "https://data.epa.gov.tw/api/v2/aqx_p_434?api_key=e8dd42e6-9b8b-43f8-991e-b3dee723a52d&limit=1000&sort=monitordate desc&format=JSON"

btn.addEventListener("click", function () {
    axios
        .get(url)
        .then(res => {
            console.log("正確", res)
            const { sitename, monitordate, aqi } = res.data.records[1]
            const report = `<div class="alert-info">
            sitename:${sitename}<br>
            monitordate:${monitordate}<br>
            aqi:${aqi}<br>
            </div>`;
            reportBlock.innerHTML = report;
        })
        .catch(err => {
            console.log("發生錯誤", err)
            const report = `<div class="alert alert-danger">
            發生錯誤，請確認網路連線正常，並再次嘗試。
            </div>`;
            reportBlock.innerHTML = report;
        })
})