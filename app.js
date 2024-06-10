// Connect to the API URL https://teamtreehouse.com/profiles/csalgado.json
// 連結 data
// 介接 data
// 印出 data


const https = require("https");
function getProfile() {
    // Connect to the API URL https://teamtreehouse.com/profiles/csalgado.json
    const request = https.get("https://teamtreehouse.com/profiles/csalgado.json",
        (res) => {
            console.log('statusCode:', res.statusCode);
            // console.log('headers:', res.headers);
            // console.dir(res); // 印出所有
        });
    // 連結 data
    // 介接 data
    // 印出 data
}
getProfile();
