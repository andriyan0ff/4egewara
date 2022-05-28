// Бот выводит в чат админов группы
// в качестве запроса принимает сообщение с ссылкой на группу или тег группы
// также прикручено введение лога в файл, в корне скрипта создайте файл log.txt
// для просмотра лога через чат введите команду /logcat
const TelegramBot = require('node-telegram-bot-api'); 
const fs = require('fs');
const token = ''; //тут прописываем токен бота
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
   let now = new Date()
   const otvet = []
   const uslovie = msg.text;
   const users = msg.from.id
   const userName = msg.from.username
   if(uslovie.startsWith('https://t.me/')){
       const url = uslovie.replace('https://t.me/','@')
       bot.getChatAdministrators(url)
       .then( function(data) {
        const members = data.length
        console.log(data)
        console.log(members)
        for (let i = 0; i <= members - 1; i++) {
            otvet[i] = '@'+data[i].user.username+' ('+data[i].custom_title+')\n'
        }
        console.log(otvet.join(''))
        bot.sendMessage(msg.chat.id, 'Список админов группы '+msg.text+'\n'+otvet.join(''));
        fs.appendFileSync('log.txt', ''+now+' userid| '+users+' UserName| '+userName+' query| '+msg.text+'\n')
        
} )
.catch(error => bot.sendMessage(msg.chat.id, 'Ой, что то пошло не так!!!\nВероятнее всего вы ввели неправельную ссылку.'));

   }
   if (msg.text === '/logcat'){
       let logfile = fs.readFileSync('log.txt', 'utf8')
       bot.sendMessage(msg.chat.id, logfile)

   }else{
   bot.getChatAdministrators(msg.text)
    .then( function(data) {
        const members = data.length
        console.log(data)
        console.log(members)
        for (let i = 0; i <= members - 1; i++) {
            otvet[i] = '@'+data[i].user.username+' ('+data[i].custom_title+')\n'
        }
        console.log(otvet.join(''))
        console.log(users)
        console.log(userName)
        bot.sendMessage(msg.chat.id, 'Список админов группы '+msg.text+'\n'+otvet.join(''));
        fs.appendFileSync('log.txt', ''+now+' userid| '+users+' UserName| '+userName+' query| '+msg.text+'\n')
} )
    
.catch(error => bot.sendMessage(msg.chat.id, 'Ой, что то пошло не так!!!\nВероятнее всего вы ввели название канала а не группы, или такой группы не существует.'));
}});