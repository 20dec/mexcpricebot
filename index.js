const { Telegraf } = require('telegraf');
const fetch = require('node-fetch');

const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

// Function to fetch price, high, low, and volume data from MXC API
async function fetchMXCData(symbol) {
    try {
        const response = await fetch(`https://www.mexc.com/open/api/v2/market/ticker?symbol=${symbol.toUpperCase()}_USDT`);
        const data = await response.json();
        if (data && data.data && data.data.length > 0) {
            const { buy, high, low, amount } = data.data[0];
            return {
                price: buy,
                high,
                low,
                amount
            };
        } else {
            throw new Error('Invalid response from MXC API');
        }
    } catch (error) {
        console.error('Error fetching data from MXC API:', error);
        return null;
    }
}

// Command to start the bot
bot.start((ctx) => {
    ctx.reply('Welcome to the MXC Price Bot! Type /price SYMBOL to get the latest price, high, low, and amount for a specific symbol (USDT pair).');
});

// Command to get the latest price, high, low, and amount for a specific symbol
bot.command('price', async (ctx) => {
    const symbol = ctx.message.text.split(' ')[1];
    if (!symbol) {
        return ctx.reply('Please provide a valid symbol.');
    }

    const data = await fetchMXCData(symbol);
    if (data) {
        ctx.reply(`Symbol: ${symbol.toUpperCase()}_USDT
Price: $${data.price}
High: $${data.high}
Low: $${data.low}
Amount: ${data.amount} $`);
    } else {
        ctx.reply('Failed to fetch data for the provided symbol.');
    }
});

bot.launch();
