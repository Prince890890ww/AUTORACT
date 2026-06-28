/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['584263940741'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['AHMED LAMTALSSI', 'Ahmed Lamtalssi'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'SUP BOT',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nFGhFBlKquGkGQ+K2IglvzECFgBCEN4csp//sW9nT3POzO9r6FG+rcc885Nz9BkpIcz3EDlJ+AZqREDLdH1lAMFKAWQYAz0AE+YggowFq8TnmMq7UnakmxHg2udHKsrQvU3Fs4Ecfbm3PWN3yXO0Yv4NEBtDjHxPsDYC1bYqV6c72bGqGNypJfQKLxLLpa+02wgZE/SbhZZaRO+gIeLSIiGUlCnV7wDWconuNmg0j2NfrVOO1yHoegN3fogaazFZQNfuqgkSGE/s61pNjcz84O5N2v0U9X3KI8LDaJbR+o3jtO1JFsnkrN3JibJm/i2vKLbbNvzLp6o5+TMME+9HHCCGu+rjuMpzKTY7VghUpxHC3W8/NWpobL7ktHctbjvnRZle7uKH6NuO6PajTxTsiCq6lxT1kJvUl6NtduvEZpLr0KEN1gcbsm8Hfim+w9K9H/0R2reGkcNLrSNW69cU6HWdeJFgNUd+XZQmgatzn4nKmfhKP9NfrnlcTuvq0Pmms2fh0yrjEiymau7HF+kN8GAlePm3x5rXT9kz5iRfYnllJD9S20RFlUTWoPtHR/uVSjftCH4kqczumwmcQ7wu5nP59ZISdzdSyRo8mvS0PHd2Mq8TAuXNePVmRoRcFysy4mpHp5ThThBvpA6T06IMMhyVmGGEmTtiaIQgcgv7Swl2H2lBd05XnkWtx26yVu0txV+bQeOfV0fogbYTQMJ56G1UIn2IzsF9ABNEs9nOfYN0nO0qxZ4jxHIc6B8tePDkhwzd6Ma9v1ex0QkCxndlLQOEX+u6vvl8jz0iJhVpN4WnvAGVD4zzJmjCRh3upYJCjzLqTE2gWxHCgBinP8MSHOsA8UlhX4Y2u11G+F3/RMR7aEHeiA29MQ4gMFDGRelqX+QOZFRfyef6taUETptwQz0AHx86eeKImyJIm9kSANR31F/N7WHx/0WjQfM0TiHChAW06EiFWmPusPwxGcTsd6ONbCMfgc5z0Xb7qr1lE++EFRJnRGN8nEIEGvH7nkFpfqq2U4gzTiD2Yq3Y305R9AgAL2BvGbUD1s0CU97y9X1cfL6M6NdbOf3yVqZOcVvVBI5N19Dq1paQWWaR37R36nz3R6z+xqPqo121tKdeDv7xlf5lQdv7TdfFwSD//e7Jj2FshkCRabs7e5Xo8Uzqvy6NjMgP19fWJ9LCzmJ9vzsuXi1O3v9pDAoFJxyDlCPnbU7XmluuNMle3b6Xq3d0zekfAtsc+NiX+9VOSZpdao9jMg+Ln4CWrt+y/j3mi36eIfnd8Qfj0k/7KM6taOi57jyJk0sNBeqmo3GfnSFFJ6rlB0OXCvs5WxG6y9GoHH40cH0BixIM1uQAEo8bOU+KADsrRo4wqTIP1DM02FUN2GWjt3jHI2/lyBPbnhnKEbBUpPHgoDURSk4eNvaNwCjDgHAAA=',
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
