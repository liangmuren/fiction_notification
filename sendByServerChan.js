let request = require('request')
const url = 'https://sc.ftqq.com/SCU17645Tad0bd9ce2c5f29468b1448d7af5ecb8a5a29537708e45.send'
let send = function (text, desp) {
    let postData = {
        text,
        desp
    }
    request.post({
        url: url,
        form: postData
    }, function (err) {
        if (err) {
            console.log(err)
        }
    })
}
module.exports = send
