# **Game Design Document: Loot Grab** 

## **Overview**

* **Title**: Loot Grab  
* **Genre**: Casual Fake-Multiplayer Action  
* **Platform**: Web Browser   
* **Target Audience**: Casual gamers, ages 13+, who enjoy quick, competitive collection games  
* **Core Concept**: A single player enters a 3D cube-based arena, competing against AI bots posing as real players to collect loot while dodging a menacing Greed Bot. Instant entry, simple mechanics, and fake multiplayer dynamics create a lively, engaging illusion of online play.  
* **Design Goal**: Fast-to-build 3D game with addictive collection, believable fake multiplayer, and a low-effort win potential to hook users for ad revenue.

---

## **Gameplay**

### **Objective**

* Collect as much loot as possible in a 2-minute round while avoiding the Greed Bot. The first player who reaches 30 points within two minutes wins. Otherwise, the player with the highest score when the round ends wins. The player competes against 3-6 AI bots (fake players), aiming for 1st or 2nd place on the leaderboard.

### **Core Mechanics**

* **Movement**: Arrow keys or WASD to move (5m/s), Spacebar to jump (2m height, 1s arc).  
* **Collecting**: Touch loot to pick it up (collision-based).  
* **Greed Bot**: AI roams, steals all loot on contact, triggers **Greed Rush** where players can chase it for half their stolen value.  
* **Scoring**: Points from loot; highest score wins.

### **Game Flow**

1. **Initial menu**: The user selects a username and clicks “Join Game”.  
2. **Spawn**: Player joins mid-round (5-15s in), bots have 1-5 points. New round starts with everything on 0 if the player chose to play a new round after a previous round.  
3. **Action**: Collect Coins, Gems, and Chests across cube blocks while dodging the Greed Bot. Bots enter/exit randomly.  
4. **Endgame**: At 1:50, **Loot Frenzy** (10s) boosts loot spawns, slows the bot. Round ends at 2:00, winner declared.  
5. **Post-Game**: 5s results screen; “Play Again” or wait starts a fresh round with bots at 0 points.

---

## **Game World**

### **Arena**

* **Shape & Size**: 50m x 50m square platform, 10m high, made of 1m³ cube blocks (like Minecraft but flatter).  
* **Structure**:  
  * **Base Layer**: Flat grid of 10x10 cubes (1m high), covers most of the map.  
  * **Elevated Platforms**: 10-15 cubes stacked 2-3 high (2-3m), connected to each other for platforms above ground level, with more higher tier loot.  
  * **Obstacles**: 5-7 cubes with “rock” spikes (1m tall, no loot on top), break up flatness.  
* **Appearance**:  
  * **Cubes**: Gray rock texture with patches of green grass (simple decals, not detailed).  
  * **Edges**: Drop-off into a black void with faint red glow below—no railing, but cubes taper slightly inward.  
  * **Background**: Dark void with distant stars, faint orange nebula swirl.  
* **Lighting**: Single top-down light (soft white), casts short shadows from blocks, players, and bot.  
* **Visibility**: Loot glows brightly, visible from 20m even on higher blocks (e.g., from ground to 3m up).

### **Camera**

* **Perspective**: Third-person, 45° top-down, 10m behind player, rotates with movement.  
* **FOV**: 70°, wide enough to see most of the 50m map and loot on elevated cubes.

---

## **Visual Elements**

### **Player & Bots**

* **Model**: Stickmen (1.8m tall):  
  * **Body**: Thin cylinder (0.2m wide, 1m long), colored per “player” (e.g., blue for user, green/red/yellow/etc. for bots).  
  * **Head**: Small sphere (0.3m), same color, no face.  
  * **Limbs**: Thin cylinders (0.5m arms, 0.7m legs), basic run animation (arms swing, legs stride), jump animation (arms up, legs tuck).  
* **Effect**: Faint glow outline (matching color) for visibility.  
* **Username**: Floating white text (12pt) 0.5m above head, e.g., “Player1” (user), “Grabber” (bots, chosen names from file).

### **Greed Bot**

* **Model**: Bigger, scarier junkyard beast (3m tall):  
  * **Body**: Rough cube (1.5m³), rusted red metal with jagged edges.  
  * **Head**: Rectangular (1m wide, 0.5m tall), with two glowing orange eyes (0.3m spheres) and a maw of sharp teeth (white triangles).  
  * **Arms**: Two claw-like appendages (1m long, 0.3m wide), swinging idly.  
  * **Legs**: Four spider-like legs (1m long, 0.2m wide), scuttling unevenly.  
* **Effects**:  
  * **Normal**: Black smoke trail (sparse, fades fast).  
  * **Proximity**: Orange eye glow pulses within 5m, teeth gleam.  
  * **Greed Rush**: Body flares bright red, smoke doubles, claws flex.  
* **Animation**: Scuttles with a lurch (legs alternate pairs), speeds up in Greed Rush.

### **Loot Variety**

* **Coins**:  
  * **Model**: Gold disc (0.3m wide, 0.05m thick), spins slowly.  
  * **Effect**: Yellow sparkles every 1s.  
* **Gems**:  
  * **Model**: Blue octahedron (0.4m tall), glassy shine.  
  * **Effect**: Pulsing blue glow, bobs 0.1m up/down.  
* **Chests**:  
  * **Model**: Brown cube (0.5m³) with gold trim, lid opens in 2s pickup (white glow inside).  
  * **Effect**: Gold shimmer on pickup.

---

## **Fake Multiplayer**

### **Bot Setup**

* **Number**: 3-6 bots per round, varies dynamically.  
* **Starting State**: On player entry (5-15s in), bots have 1-5 points each (random), e.g., Bot1: 3, Bot2: 1, Bot3: 5\.  
* **Names**: Randomly picked from a file of names provided (bot\_names.txt)

### **Bot Behavior**

* **Intelligence**: Low-tier, predictable:  
  * Move at 5m/s (same as player speed), jump to 2m-high blocks.  
  * Prioritize Coins over Gems/Chests (80% chance to target nearest Coin, 15% Gem, 5% Chest).  
  * Wander randomly if no loot nearby, 50% chance to chase Greed Bot in Greed Rush (but slow to react, often miss Coin).  
* **Progression**: Gain 1-2 points every 10-15s if not stolen from, mimicking casual player pace.  
* **Outcome**: User with effort (targeting Gems/Chests) can hit 20-30 points, bots cap at 10-15 unless lucky.

### **Dynamic Entry/Exit**

* **Simulation**: Mimics real multiplayer flux:  
  * **Entry**: 1 bot spawns every 15-30s (random), max 6 total. Appears at map edge with “LootBot4 joined\!” flash (2s).  
  * **Exit**: 1 bot leaves every 20-40s (random), min 3 remain. Vanishes in white puff with “LootBot2 left\!” flash.  
  * **Timing**: No exits in first 15s or Loot Frenzy (1:50-2:00) to keep action alive.  
* **Illusion**: Leaderboard updates with joins/leaves, bots’ points persist until exit, feels organic.

---

## **3D Gameplay Adjustments**

### **Movement**

* **Speed**: Player and bots at 5m/s, Greed Bot at 4m/s (80%), 6m/s (120% Greed Rush), 2.5m/s (50% Frenzy).  
* **Jump**: 2m high, clears 1-2m blocks.   
* **Collision**: Hitboxes—player/bots (0.5m radius cylinder), Greed Bot (1m radius), loot (0.2m radius).

### **Greed Bot**

* **Theft**: Steals all points, erupts black smoke, grows 10% (0.5s), drops a Coin (0.3m disc, floats 0.5m up).  
* **Greed Rush**: Coin drifts 1m/s away for 5s, pickup restores half stolen value.

### **Loot Spawning**

* **Placement**: 50% on ground, 40% on 2m blocks, 10% on 3m blocks. Min 2m apart.  
* **Height**: Hovers 0.5m above surface, glows for visibility.  
* **Density**: 10-15 Coins, 1-2 Gems, 1 Chest. Frenzy doubles Coins (20-30), adds 1 Gem, 1 Chest.

### **Loot Frenzy**

* **Cue**: Floor cubes pulse purple, loot falls from 2m up.  
* **Bot**: Slows, smoke dims, legs drag.

---

## **Retention Hooks**

1. **Instant Feedback**:  
   * Coins: “ching\!” \+ gold sparks; Gems: “ding\!” \+ blue flare; Chests: “ka-chunk\!” \+ gold burst.  
   * Theft: “clank\!” \+ black smoke puff.  
2. **Score Chase**:  
   * Leaderboard (3D panel, top-right): “LootBot1: 5, You: 3, LootBot2: 2.”  
   * Updates with “ding” and flip.  
3. **Near-Miss Thrill**:  
   * Greed Bot’s eyes glow orange, buzz rises within 5m. Shadow looms larger.  
4. **Loot Frenzy**:  
   * “Siren.wav” \+ “Loot Frenzy\!” text (3D, purple), map shakes 0.1m.

---

## **User Interface**

* **Pre-game Screen**: Just one tab with username entry and button that says “Join Game”.  
* **Game Screen**: Leaderboard (top-right), player score (bottom-center, “You: 8”), Frenzy text (center).  
* **Post-Round**: 3D billboard, “Winner: You (22)” in gold, bots below. “Play Again” cube (green).

---

## **Monetization & Ad Integration**

* **Revenue Model**: Ad-based only, leveraging banners and in-game placements for passive income. No interstitial ads (to avoid annoyance) or cosmetics (low retention expected). Optimized for quick setup and maximum impressions during short play sessions.  
* **Ad Network**: Google AdSense or a lightweight alternative (e.g., AdMob for web), using standard banner sizes and static placements.

  ### **Ad Placements**

1. **Gameplay Banners**:  
   * **Location**: Bottom of the screen, outside the 50m x 50m arena view.  
   * **Size**: 728x90px (standard leaderboard banner), fixed position, non-overlapping with gameplay UI (e.g., below player score).  
   * **Appearance**: Simple frame (thin gray border) to blend with the UI, no animation to minimize distraction.  
   * **Frequency**: Always visible during gameplay, refreshes every 20s for new impressions.  
   * **Impact**: Earns per impression, low dev effort, doesn’t disrupt play.  
2. **Menu Banners**:  
   * **Location**: Post-game results screen (5s duration).  
   * **Size & Layout**:  
     * Top: 728x90px banner (above “Winner: You (22)” text).  
     * Bottom: 728x90px banner (below score list).  
     * Sides: Two 160x600px skyscrapers (left and right edges, vertical).  
   * **Appearance**: Same gray border framing, static ads, no pop-ups.  
   * **Frequency**: All four displayed simultaneously for 5s, refresh on each new menu load (e.g., “Play Again” or round wait).  
   * **Impact**: High impression density in short downtime, capitalizes on post-round attention.  
3. **In-Game Arena Ads**:  
   * **Cube Sides**:  
     * **Location**: Outer faces of 5-7 edge cubes (1m high, 5m wide) along the map’s perimeter.  
     * **Size**: 5m x 1m texture (maps to \~300x60px ad image), static.  
     * **Appearance**: Ads plastered like billboards (e.g., “Drink Cola\!” or “Visit SiteX.com”), slightly weathered to match rock/grass aesthetic.  
     * **Frequency**: Fixed for the round, rotate 3-5 unique ads across cubes per session.  
     * **Impact**: Subtle, immersive, earns passive impressions as players move near edges.  
   * **Hot Air Balloons**:  
     * **Location**: 3 balloons floating 20m above the arena, spaced evenly (e.g., at 15m, 25m, 35m along X-axis).  
     * **Model**: Simple sphere (3m diameter) with a basket (1m cube), colored red/white, drifting slowly (0.5m/s in random directions, stays within 60m x 60m bounds).  
     * **Ad Placement**: Banner texture on balloon sides (2m x 1m, \~120x60px), static ads (e.g., “Buy Now\!” or “GameX Out Now\!”).  
     * **Appearance**: Faint glow to catch the eye, no interaction (purely visual).  
     * **Frequency**: Always present, ads rotate every 30s for variety.  
     * **Impact**: Eye-catching in the sky, adds realism, boosts impressions without gameplay interference.

---

## **Sample Round**

* **5s Spawn**: You join, bots at 2-4 points. Grab 3 Coins (3 points) on ground.  
* **30s**: Bot steals 3, drops Coin—you chase, recover 1 (1 point). Jump to 2m block, snag Gem (6 points).  
* **1:00**: Chest on 3m block (16 points). Bots lag at 5-8, chasing Coins.  
* **1:50**: Frenzy—grab 8 Coins, 1 Gem (16 \+ 8 \+ 5 \= 29). Win over bots (10-15).

---

## **Technical Requirements**

### **Overview**

* **Platform**: Web-based game, playable in modern web browsers on desktop and mobile devices (via URL, not a native app).  
* **Deployment**: Hosted on a website under a custom domain (e.g., via Netlify, Vercel, or similar free/low-cost hosting).  
* **Goal**: Lightweight, fast-loading 3D game with broad compatibility, optimized for quick development and instant play.

### **General Requirements**

* **Engine**: Any 3D-capable web engine (e.g., Three.js, Babylon.js, PlayCanvas) that supports WebGL for rendering. Chosen for simplicity, small footprint, and cross-platform support. Must use State of the art tech.  
* **Language**: JavaScript (or TypeScript) as the primary scripting language, leveraging browser-native capabilities.  
* **File Size**: Target \<10MB total (including assets) for fast loading on mobile networks (e.g., 4G).  
* **Performance**: Minimum 30 FPS on mid-range devices (e.g., 2020-era laptops/phones), cap at 60 FPS to avoid battery drain on high-end hardware.

### **Browser Compatibility**

* **Desktop**:  
  * Supported Browsers: Chrome (latest), Firefox (latest), Edge (latest), Safari (latest).  
  * Resolution: Scalable from 800x600px to 1920x1080px, responsive design to fit window size.  
* **Mobile Web**:  
  * Supported Browsers: Chrome (Android), Safari (iOS), Samsung Internet (latest versions).  
  * Resolution: Scalable from 360x640px (small phones) to 768x1024px (tablets), portrait orientation preferred.  
  * Touch Controls: Map WASD to on-screen joystick (left thumb), Spacebar to jump button (right thumb), auto-detect device type for input switch.

### **Rendering & Graphics**

* **Graphics API**: WebGL 1.0 (minimum) for broad compatibility, WebGL 2.0 optional for enhanced effects if supported.  
* **3D Assets**: Low-poly models (under 1000 triangles total):  
  * Stickmen (player/bots): \~50 tris each.  
  * Greed Bot: \~200 tris.  
  * Loot (Coins, Gems, Chests): \~20-50 tris each.  
  * Arena cubes: \~10 tris each, \~150-200 tris total.  
  * Balloons: \~100 tris each.  
* **Textures**: Small, power-of-2 sizes (e.g., 64x64px or 128x128px) for cubes, loot, and balloons. Simple materials (color \+ basic normal maps) to keep file size low.  
* **Effects**: Lightweight particles (e.g., Three.js BufferGeometry or equivalent) for sparks, smoke, and glows—limit to 100 particles max on-screen.

### **Input**

* **Desktop**:  
  * Keyboard: WASD (movement), Spacebar (jump).  
  * Mouse: Optional camera rotation (if implemented, lock to 45° top-down default).  
* **Mobile**:  
  * Touch: Virtual joystick (left screen, 100x100px) for movement, tap button (right screen, 80x80px) for jump.  
* **Responsiveness**: Inputs auto-adjust based on device—keyboard for desktop, touch for mobile, no manual toggle required.

### **Audio**

* **Format**: MP3 or OGG, \<100KB per file for fast loading.  
* **Sounds**:  
  * “ching.mp3” (Coins), “ding.mp3” (Gems), “ka-chunk.mp3” (Chests), “clank.mp3” (theft), “plink.mp3” (Greed Rush Coin), “siren.mp3” (Frenzy), “buzz.mp3” (bot proximity).  
  * Looping buzz with volume/pitch tied to bot distance (via Web Audio API or engine equivalent).  
* **Compatibility**: Mute option (toggle in UI), fallback to silent if audio fails on mobile.

### **Networking**

* **Single-Player**: No server required—fake multiplayer handled client-side with AI bots.  
* **Hosting**: Static site hosting (e.g., Netlify, GitHub Pages, Vercel) for game files. Domain to be added post-build (e.g., “lootgrabgame.com”).  
* **Ads**: AdSense JavaScript SDK integrated for banners and in-game placements, loaded asynchronously to avoid delaying game start.

### **UI & Layout**

* **Canvas**: Full-screen WebGL canvas, scaled to device resolution with letterboxing if needed (black bars).  
* **HUD**: 2D overlay (HTML/CSS or engine UI):  
  * Leaderboard (top-right, 300x100px on desktop, 150x50px mobile).  
  * Player Score (bottom-center, 200x50px desktop, 100x25px mobile).  
  * Frenzy Text (center, 400x100px desktop, 200x50px mobile, fades after 2s).  
* **Menu**: Post-game results as 3D billboard (5m wide in-game), overlaid with 2D ad banners (responsive sizes).  
* **Ads**:  
  * Gameplay Banner: 728x90px bottom (desktop), 320x50px (mobile).  
  * Menu Banners: Top/bottom 728x90px \+ side 160x600px (desktop), 320x50px top/bottom \+ 120x600px sides (mobile).  
  * In-game: Cube textures (300x60px), balloon banners (120x60px), static mapping.

### **Build & Deployment**

* **Build**: Single HTML file with bundled JS/CSS/assets (e.g., via Webpack or Parcel) for easy upload.  
* **Domain**: Placeholder index.html (e.g., “Coming Soon”) until domain secured, then swap with game build.  
* **Load Time**: Target \<5s on 4G (compress assets, minimize HTTP requests).  
* **Storage**: LocalStorage for mute setting and ad refresh state, no persistent scores.

### **Minimum Hardware**

* **Desktop**: 2GB RAM, dual-core CPU, WebGL-capable GPU (e.g., Intel HD Graphics 4000).  
* **Mobile**: 2GB RAM, mid-range 2020 phone (e.g., iPhone SE 2020, Samsung Galaxy A51), 4G connection.

### **Development Notes**

* **Engine Choice**: Three.js recommended for simplicity—small size, active community, mobile support. Babylon.js as alternative for built-in features.  
* **Testing**: Test on Chrome (desktop/mobile), Safari (iOS), Firefox (desktop) with dev tools throttling to 4G speeds.  
* **Fallbacks**: If WebGL fails, display “Your browser doesn’t support 3D graphics” message (HTML overlay).

