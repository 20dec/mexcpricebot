##MEXC Price Bot

##Overview
MEXC Price Bot is a Telegram bot built with Telegraf in Node.js that allows users to fetch price, high, low, and amount data for cryptocurrency symbols from the MEXC exchange.

##Features
Get the latest price, high, low, and amount for a specific cryptocurrency symbol in USDT pair.
Automatically appends "_USDT" to the provided symbol for fetching data.
Provides real-time data fetched from the MEXC API.

##Setup Instructions

1. Clone the repository:
```
git clone https://github.com/your_username/mexc-price-bot.git
```

2. Install dependencies:
```
cd mexc-price-bot
npm install
```

3. Obtain a Telegram bot token from BotFather and replace 'YOUR_TELEGRAM_BOT_TOKEN' in the index.js file with your token.

4. Run the bot:
```
node index.js
```

##Usage
To use the MEXC Price Bot, follow these steps:

Start a chat with the bot by searching for it in Telegram or clicking on the provided link.
Use the /price SYMBOL command to fetch the latest price, high, low, and amount data for a specific cryptocurrency symbol. Replace SYMBOL with the desired cryptocurrency symbol (e.g., BTC, ETH, LTC).

##Example
```
/price BTC
```
This command will fetch and display the latest price, high, low, and amount data for Bitcoin (BTC) in USDT pair.
