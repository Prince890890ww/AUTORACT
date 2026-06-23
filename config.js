/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['584169507030'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['AHMED LAMTALSSI', 'Ahmed Lamtalssi'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'SUP BOT',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGEBRgYiOGEBERMQbIm7MQwEFFmBBFxfFCf99A3u6ex52Z3vfiioiT57MPOcnIDkukYlaIP0EBcUNrFB3rNoCAQkodRQhCvoghBUEEhDURNWTtHawt9Ox5fUwVGBL9sOlWrcF4+98e1eH0WF25F/Aow+K2s9w8AfApZtMAkV3dtkwOxh6uu7NLRvioQwbfaLPl9PteXEvcvt07wA7RIgpJrFWnNEFUZiZqF1DTL9G/2LuRbGQTWMqqI5+baqrUMzaqaEYowTWI7RpuOU+uW55zvoafdde8akZsY6I2vbVzk9LJoZzuw4Or/RgFANSH8vx3g/xLX2jX+KYoNAIEalw1X5Zd808REnQoJs2ILq8XtyFHt45BX8XbyGZyWSTNa6hTCbKwfsacTUo5bGLTL49aK8LPxXjaGaNWJu/hY2C4IbAeamW2+WdBL8TX9P3rKT/R/eeZTdkddd7m4Nnp4txbM6N+rjSdU1xuKSZs56z8MMkcDjta/SLC5W1G9R2MzbwhMOCMvdXWtixb8GJwCvr46TljHVqk438SR9WNf0Ty8hskkueTb3V1W59Rjt77VwIlebC7rJ24ginV25uOTW397arRlxa4xsTRtHIHhNsr1coPzvaiEn92+osouOd7PcrCJPry7OjFLVGCCTu0QcUxbisKKxwTp534rAPYNjsUEBR9ZQXHAdpEHOqP9Y9NzMPqrqlLlczPTcO2CPNObMwR0U4JTPVeAF9UNA8QGWJwjkuq5y2FipLGKMSSH/96AOCbtWbcV25IdcHEaZl5ZC6yHIYvrv6/giDIK9JtWtJoHYHRIHEfl6jqsIkLjsdawJpcMYNUs+wKoEUwaxEHx0iikIgVbRGH1Or5mEnvOoK+nBgcaAPLk9DcAgkMBJ4biyO2Ak7ZCXue/nt2qHCovhGUAX6IHv+NREFkedYkR+Iwkjivne3jw92HViIKoizsquzJu5kJaja4siOV5quy1osq7EMPrt5j8Wb7FajMRy5D5nbPprE+vhiHa5EULzFKPXWcYZ4g17t3X0wUa2XfwABEtjd8W1db3U/a3qMK4poNbg2PUO57EyC2FUbnNSW29u1N3XXOCJevJwJaZrWzrYnQNnFJdf6hlzOnG1oyRR6rDOTp5uXrlqIGhyg34uN1a1zOHN4Xd43KXTul9TVlaxd3HhNDdPmph8dflUejdzetjYLnSQ5aOM2dkt7AnMmERYXf5kyvEEuND/5rwx7f4XnzVtgnwOT/VpU+BmlzqfuM8LoOfcEdu79p29vvLt0sY/+bxC/Fsm/DKOyX97W4kkQGcEZ9nilLpJZsGBkV0UnfcovjrVqCtO0FOtrAh6PH31QZLCKcnoBEoAkpDkOQR/QvO7iapAo/9M2lGND2cS7rvEMlpX8OQJ7fEFlBS8FkLiJMBiwrDASH38DJipWkTgHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '_W3LLC0M3 H0 GY4 APK4 J4NU KHUSHBU L4G4 KE 🥹💋_ @user',   // ✅ Sirf ye line change ki hai
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Morroco/Rabat',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/hassanalami',
      instagram: 'https://www.instagram.com/fifa/',
      youtube: 'https://www.youtube.com/@fifa/videos'
    }
};
