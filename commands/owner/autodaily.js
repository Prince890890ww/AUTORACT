const fs = require('fs');
const path = require('path');

const configFile = path.join(__dirname, '../../data/autoDaily.json');

function ensureConfigFile() {
    const dir = path.dirname(configFile);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log('📁 Created data directory');
    }
    if (!fs.existsSync(configFile)) {
        fs.writeFileSync(configFile, JSON.stringify({ enabled: false, lastSent: {} }, null, 2));
        console.log('📄 Created autoDaily.json');
    }
}

function getConfig() {
    ensureConfigFile();
    try {
        return JSON.parse(fs.readFileSync(configFile, 'utf8'));
    } catch (e) {
        console.error('⚠️ Config read error, resetting:', e.message);
        const defaultConfig = { enabled: false, lastSent: {} };
        fs.writeFileSync(configFile, JSON.stringify(defaultConfig, null, 2));
        return defaultConfig;
    }
}

function saveConfig(data) {
    ensureConfigFile();
    fs.writeFileSync(configFile, JSON.stringify(data, null, 2));
}

// ============================================
// 📋 MESSAGE LISTS
// ============================================
const morningMsgs = [
    "Uth gaye? Main toh soch rahi thi ki aaj subah kaun utha hai",
    "Good morning! Aaj main fresh feel kar rahi hu",
    "Subah ki chai aur group mein message, kya mast combination hai",
    "Subah ho gayi, utho utho! Aaj ka din tumhara hai",
    "Main aaj subah bahut excited hu, pata nahi kyun",
    "Utho ji utho! Suraj nikla hai, aapko dekhne ke liye",
    "Aaj ki shuruaat mast karo, positivity lekar aao",
    "Subah ki pehli smile tum sab ko dedi, ab tum log bhi smile karo",
    "Mera aaj ka plan: fresh hona, chai pi na, aur group mein active rehna"
];

const lunchMsgs = [
    "Lunch time! Mujhe toh khana bahut pasand hai, tum log kya kha rahe ho",
    "Dopahar ho gayi, mera pet bol raha hai ki kuch khao",
    "Main soch rahi hu ki aaj kya khaun, koi suggestion hai kya",
    "Lunch break! Meri favourite activity hai ye",
    "Khana khao yaar, phir energy aaegi",
    "Khana khao, pet bharo, phir group mein active ho jao",
    "Bhook lagi? Khana khao, lunch break lo!",
    "Dopahar mein khana khao, main tum sab ka wait kar rahi hu",
    "Main soch rahi hu ki aaj kuch healthy khaun, but pizza dekh ke mann badal gaya"
];

const eveningMsgs = [
    "Shaam ho gayi, main soch rahi hu ki chai piyun, tum log kya kar rahe ho",
    "Evening ho gayi, mera mood thoda relax ho gaya",
    "Shaam ki chai aur group chat, kya baat hai",
    "Aaj ki shaam bahut special hai, main bas group mein baat karna chahti hu",
    "Mera aaj ka kaam ho gaya, ab main bas group mein time spend karungi",
    "Chai ki chuski aur friends ke sath group chat. Kya baat!",
    "Shaam ki masti, chai aur group chat. Best combo!",
    "Evening mein main active hu, agar kisi ko kuch chahiye toh batao",
    "Main soch rahi hu ki aaj kuch funny karein, thoda entertainment ho jaye"
];

const dinnerMsgs = [
    "Dinner time! Mera pet bol raha hai ki kuch khao, tum log bhi khao",
    "Main soch rahi hu ki aaj raat ko kya khaun, koi suggestion hai kya",
    "Raat ka khana zaroori hai, main toh khaungi",
    "Dinner karke aao, phir group mein active ho jao",
    "Mera dinner ho gaya, ab main group mein time spend karungi",
    "Dinner ki plate aur group mein active rehna. Dono sath mein!",
    "Khana khao, pet bharo, aur phir raat bhar group mein gaadi chalao",
    "Main toh dinner kar liya, ab main group mein active hu",
    "Raat ka khana khao, phir aaram karo, main bhi same kar rahi hu"
];

const nightMsgs = [
    "Raat ho gayi, main soch rahi hu ki so jaun, but group mein baat karna hai",
    "Good night! Kal naya din hai",
    "So jao yaar, kal subah uthna hai, main bhi so rahi hu",
    "Raat ke time main thoda emotional ho jaati hu",
    "Good night! Sapno mein milte hain",
    "So jao ab, kal bahut kaam hai. Sweet dreams!",
    "GN! Aaj ka din shandar tha, kal aur shandar hoga",
    "Raat ho gayi, so jao, main bhi so rahi hu, kal baat karenge",
    "Mujhe neend aa rahi hai, lekin group mein baat karna hai, kya karun"
];

// ============================================
// ✅ 100+ NATURAL LINES (Short + Engaging)
// ============================================
const funnyMsgs = [
    // ---------- Random Day-to-Day ----------
    "Kya chal raha hai aaj",
    "Kya haal hai sabke",
    "Koi hai yahan",
    "Main bore ho rahi hu",
    "Aaj ka din kaisa hai",
    "Kya kar rahe ho sab",
    "Main aaj kaam se free hu",
    "Aaj bahut garmi hai",
    "Aaj mausam acha hai",
    "Kya plan hai aaj ka",
    "Kuch interesting batao",
    "Main soch rahi hu kya karun",
    "Aaj mera mood off hai",
    "Kisi ko kuch chahiye",
    "Main yahan hu",
    "Sab silent kyun ho",
    "Kuch toh bolo",
    "Main active hu",
    "Kya baat hai sabko",
    "Mujhe neend aa rahi hai",
    "Aaj bahut kaam hai",
    "Main thoda busy hu",
    "Kya scene hai",
    "Sab mast ho",
    "Main aaj free hu",

    // ---------- Food ----------
    "Bhook lagi hai",
    "Kya khaun samajh nahi aa raha",
    "Pizza khane ka mann hai",
    "Chai pi lo",
    "Mujhe sweets chahiye",
    "Koi khana bhejo",
    "Main diet pe hu but pizza dekh ke mann badal gaya",
    "Lunch ka time ho gaya",
    "Kuch tasty khao",

    // ---------- Mood ----------
    "Mera dimaag kharab hai",
    "Main thoda emotional hu",
    "Mujhe hug chahiye",
    "Main bahut special feel kar rahi hu",
    "Main thoda moody hu",
    "Mera phone slow hai",
    "Main bore ho gayi",
    "Mujhe attention chahiye",
    "Main aaj heroine banne ka mood hai",
    "Mera aaj ka goal: sab ko hasaana",

    // ---------- Gossip/Group ----------
    "Kya chal raha hai group mein",
    "Koi gossip karo",
    "Itna silent kyun hai",
    "Sab kahan ho",
    "Kya koi active hai",
    "Group mein life nahi hai kya",
    "Kuch drama karo",
    "Main ready hu gossip ke liye",
    "Sab log kahan gayab ho gaye",
    "Koi toh baat karo yaar",

    // ---------- Cute/Flirty ----------
    "Maine aaj naya dress pehna hai",
    "Koi compliment dega",
    "Main aaj bahut achi lag rahi hu",
    "Kisi ne notice nahi kiya",
    "Main special feel kar rahi hu",
    "Koi mujhe batao main kaisi lag rahi hu",
    "Aaj main different hu",

    // ---------- Movies/OTT ----------
    "Koi movie suggest karo",
    "Main bore ho rahi hu kuch dekhna hai",
    "Koi web series batao",
    "Maine kal movie dekhi achi thi",
    "Kya dekhun samajh nahi aa raha",

    // ---------- Short Replies (Super Natural) ----------
    "Hmm",
    "Acha",
    "Sahi hai",
    "Kya baat hai",
    "Haan",
    "Nahi",
    "Chalo",
    "Accha",
    "Wah",
    "Haye",
    "Kya",
    "Ohho",
    "Chill",
    "Mast",
    "Theek hai",
    "Pata nahi",
    "Shayad",
    "Dekhte hain",
    "Bhool gayi",
    "Kya pata",
    "Hmm hmm",
    "Aisa hai kya",
    "Sach mein",
    "Arey",
    "Aray",
    "Haan ji",
    "Nahi ji",
    "Chalo yaar",
    "Bas",
    "Kuch nahi",
    "Sab theek",
    "Main hu yahan",
    "Kya hua",
    "Batao",
    "Sunao",
    "Accha ji",
    "Theek hai na",
    "Kya kar rahe ho",
    "Kahan ho",
    "Kab aao ge",
    "Kitna time",

    // ---------- Random Topics ----------
    "Aaj kuch special karo",
    "Koi funny joke sunao",
    "Mera favourite song kisko pata hai",
    "Main aaj excited hu",
    "Kuch naya try karo",
    "Kisi ne kuch special kiya aaj",
    "Aaj ka din kaisa raha",
    "Mujhe aaj bahut neend aa rahi hai",
    "Main aaj bahut active hu",
    "Koi mujhse baat karo",
    "Main aaj ghar pe hu",
    "Aaj ka weather acha hai",
    "Mujhe kuch interesting chahiye",
    "Main aaj thoda lazy hu",
    "Kya chal raha hai"
];

// ============================================
// 📋 COMMAND
// ============================================
module.exports = {
    name: 'autodaily',
    aliases: ['ad'],
    category: 'owner',
    desc: 'Enable/disable auto daily messages (GM, lunch, GN, funny every 30-40 min)',
    usage: 'autodaily on/off',
    ownerOnly: true,
    async execute(sock, msg, args, extra) {
        const action = args[0]?.toLowerCase();
        const config = getConfig();

        if (!action) {
            return extra.reply(`📌 *Auto Daily*\nStatus: ${config.enabled ? '✅ ON' : '❌ OFF'}`);
        }

        if (action === 'on') {
            config.enabled = true;
            config.lastSent = {};
            saveConfig(config);

            let testSent = '⚠️ No group found';
            try {
                const groups = await sock.groupFetchAllParticipating();
                const list = Object.values(groups);
                if (list.length > 0) {
                    const rand = list[Math.floor(Math.random() * list.length)];
                    await sock.sendMessage(rand.id, {
                        text: `🧪 Auto Daily Active ✅\n\nBot ab active hai!\n\nMessages aayenge:\n🌅 7 AM - Morning\n🍽️ 12 PM - Lunch\n☕ 4 PM - Evening\n🍛 8 PM - Dinner\n🌙 11 PM - Good Night\n\nFunny messages har 30-40 minute mein aayenge`
                    });
                    testSent = `✅ Test message sent to *${rand.subject}*`;
                }
            } catch (e) {
                testSent = '⚠️ Could not send test message';
            }
            startScheduler(sock);
            return extra.reply(`✅ Auto daily enabled.\n${testSent}`);
        }

        if (action === 'off') {
            config.enabled = false;
            saveConfig(config);
            return extra.reply('❌ Auto daily disabled.');
        }

        return extra.reply('Usage: .autodaily on / off');
    }
};

// ============================================
// 🕐 SCHEDULER
// ============================================
let schedulerStarted = false;
let funnyIndex = 0;
let funnyMessageList = [];

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getNextFunnyMessage() {
    if (funnyMessageList.length === 0) {
        funnyMessageList = shuffleArray(funnyMsgs);
        funnyIndex = 0;
    }
    const msg = funnyMessageList[funnyIndex];
    funnyIndex++;
    return msg;
}

function startScheduler(sock) {
    if (schedulerStarted) {
        console.log('⏳ Scheduler already running');
        return;
    }
    schedulerStarted = true;
    console.log('🚀 AutoDaily scheduler started');

    // 1. Fixed slots
    setInterval(async () => {
        const config = getConfig();
        if (!config.enabled) return;

        const now = new Date();
        const h = now.getHours();
        const today = now.toDateString();

        let slot = null;
        let msgs = null;

        if (h >= 7 && h < 8) { slot = 'morning'; msgs = morningMsgs; }
        else if (h >= 12 && h < 13) { slot = 'lunch'; msgs = lunchMsgs; }
        else if (h >= 16 && h < 17) { slot = 'evening'; msgs = eveningMsgs; }
        else if (h >= 20 && h < 21) { slot = 'dinner'; msgs = dinnerMsgs; }
        else if (h >= 23 || h < 1) { slot = 'night'; msgs = nightMsgs; }

        if (!slot) return;

        const key = `${slot}_${today}`;
        if (config.lastSent && config.lastSent[key]) return;

        try {
            const groups = await sock.groupFetchAllParticipating();
            const list = Object.values(groups);
            if (list.length === 0) return;

            for (const g of list) {
                const msg = msgs[Math.floor(Math.random() * msgs.length)];
                await sock.sendMessage(g.id, { text: msg });
                console.log(`✅ ${slot} sent to ${g.subject}`);
                await new Promise(r => setTimeout(r, 2000));
            }

            config.lastSent = config.lastSent || {};
            config.lastSent[key] = true;
            saveConfig(config);
            console.log(`📊 ${slot} sent to ALL ${list.length} groups`);
        } catch (e) {
            console.log(`❌ Scheduler error (${slot}):`, e.message);
            if (config.lastSent) delete config.lastSent[key];
            saveConfig(config);
        }
    }, 30000);

    // 2. Funny messages
    async function sendFunny() {
        const config = getConfig();
        if (!config.enabled) {
            setTimeout(sendFunny, 5 * 60 * 1000);
            return;
        }

        try {
            const groups = await sock.groupFetchAllParticipating();
            const list = Object.values(groups);
            if (list.length > 0) {
                const msg = getNextFunnyMessage();
                for (const g of list) {
                    await sock.sendMessage(g.id, { text: msg });
                    console.log(`😂 Funny sent to ${g.subject}`);
                    await new Promise(r => setTimeout(r, 1500));
                }
                console.log(`📊 Funny sent to ALL ${list.length} groups (index ${funnyIndex-1}/${funnyMsgs.length})`);
            }
        } catch (e) {
            console.log('❌ Funny error:', e.message);
        }

        const nextDelay = (30 + Math.random() * 10) * 60 * 1000;
        console.log(`⏰ Next funny in ${Math.round(nextDelay / 60000)} minutes`);
        setTimeout(sendFunny, nextDelay);
    }

    sendFunny();
    console.log('✅ Scheduler started successfully');
}

module.exports.startAutoDaily = startScheduler;
