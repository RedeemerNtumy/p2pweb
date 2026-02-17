// CONFIG.js - Configuration file
// Place this in same directory as p2p-video-chat.html

const APP_CONFIG = {
    // Set to true to use production matching server
    // Set to false to use simulated matching (demo mode)
    USE_MATCHING_SERVER: true,
    
    // Your matching server URL (if USE_MATCHING_SERVER is true)
    MATCHING_SERVER_URL: 'https://p2pback-hauj.onrender.com/',
    
    // PeerJS configuration
    PEER_CONFIG: {
        host: 'peerjs-server.herokuapp.com', // Free PeerJS cloud
        port: 443,
        secure: true,
        config: {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                // Optional TURN server for better connectivity
                // Uncomment and add your TURN server credentials
                // {
                //     urls: 'turn:your-turn-server.com:3478',
                //     username: 'username',
                //     credential: 'password'
                // }
            ]
        }
    },
    
    // Random matching settings
    MATCHING: {
        SEARCH_TIMEOUT: 30000, // 30 seconds
        RETRY_DELAY: 2000, // 2 seconds between retries
        MAX_RETRIES: 5
    },
    
    // Video quality settings
    VIDEO: {
        width: { ideal: 1280, max: 1920 },
        height: { ideal: 720, max: 1080 },
        frameRate: { ideal: 30, max: 60 }
    },
    
    // Audio quality settings
    AUDIO: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
        sampleRate: 48000
    }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
