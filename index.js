const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'taodanglag-Q1JA.aternos.me', 
        port: 25565, 
        username: 'BotAFK_247', 
        version: false // Hệ thống sẽ tự động nhận diện phiên bản server của bạn
    });

    bot.on('spawn', () => {
        console.log('Bot đã vào server thành công!');
        
        setTimeout(() => {
            bot.chat('/register taodanglag123 taodanglag123'); 
            bot.chat('/login taodanglag123');               
            console.log('Bot đã tự động gõ lệnh đăng nhập!');
        }, 2000);
    });

    bot.on('end', () => {
        console.log('Bot bị mất kết nối, đang thử lại sau 30 giây...');
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => console.log('Lỗi kết nối: ', err));
}

const http = require('http');
http.createServer((req, res) => {
    res.write("Bot đang chạy ngon lành!");
    res.end();
}).listen(8080);

createBot();
