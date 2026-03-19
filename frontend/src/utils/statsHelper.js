// src/utils/statsHelper.js

export const updateProgress = (languageName) => {
    // 1. Get the raw data string
    const rawData = localStorage.getItem("userStats");
    
    // 2. Parse it, OR if it's null, create a fresh object with all properties
    let stats = rawData ? JSON.parse(rawData) : { 
        progress: 0, 
        completedCount: 0,
        badges: [], // Ensure this is always defined
        streak: 0
    };

    // 3. Safety check: In case 'badges' is missing from an old save file
    if (!stats.badges) {
        stats.badges = [];
    }

    // 4. Now 'includes' will never be called on undefined
    if (!stats.badges.includes(languageName)) {
        stats.badges.push(languageName);
        stats.completedCount += 1;
        
        // Logic: Add 10% progress per language
        stats.progress = Math.min(100, stats.progress + 10);
        
        // 5. Save the updated object
        localStorage.setItem("userStats", JSON.stringify(stats));
    }
};