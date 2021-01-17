const fetch = require('node-fetch');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
require('date-utils');

//api
const appid ='APIキー';

async function callweather() {
    const res =await fetch('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=' + appid + '&lang=ja&units=metric');
    const wresult = await res.json();
    return(wresult);
};

async function weatherMailSend() {

    //天気情報取得
    const weatherobj = await callweather();
    const weather = weatherobj.weather;
    const weatherresult = weather[0].description

    //現在日時を取得
    let nowdate = new Date().toFormat('YYYY年MM月DD日');

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ご自信のGmailアドレス',
            pass: 'ご自身のGmailパスワード'
        }
    });

    // メールの内容
    const mailOptions1 = {
        to: 'ご自信のGmailアドレス', 
        subject: `${nowdate} :本日のお天気`,
        text: '本日の天気は、、、、' + weatherresult + 'です。'
    };
    try{
        // 送信
        const result = await transporter.sendMail(mailOptions1);
        console.log(result);
    }catch(e){
        console.error(e);
    }
};

//朝9時に天気情報メールを送信
cron.schedule('0 0 9 * * *', () => {
    weatherMailSend();
},{
    scheduled: true,
    timezone: 'Asia/Tokyo'
});
