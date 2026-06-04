# QEC Food and Fun Day 2026 Website

Website for Queen Elizabeth College's Food and Fun Day 2026 event. Re-designed from the ground up for a premium, highly engaging experience.

## ✨ Features
- **Visual Design**: Sleek glassmorphism style using a dark forest green and gold theme. Built with custom CSS variables and utility classes.
- **3D Coverflow Slide**: Parallax-scrolling attraction slides.
- **Live Interactive Poll**: Real-time voting widget with an automated Local Storage cache fallback if Firebase is offline.
- **Dynamic Food & Activities Filtering**: Real-time text search and category chips (Meals, Snacks, Drinks, Desserts) for instant filtering of event vendors.
- **Ticket Booking Simulator**: Select pass tiers (Standard, Premium, VIP), adjust quantities, calculate total costs, and generate customized mock passes with a pseudo-random HTML5 canvas QR Code.
- **Theme Sub-pages**:
  - **Discotheque**: Club neon theme with rotating schedule lists and song requests.
  - **Gaming Arena**: Cyberpunk terminal layout, schedule guides, and competitor registration.
  - **Football Cup**: Tournament scoreboard loader and prefilled team registrations.

---

## 📂 Project Structure
```text
├── css/
│   └── global.css            # Central styling system (tokens, themes, animations)
├── htmlfiles/
│   ├── index.html            # Landing / Hero page
│   ├── foodstalls.html       # Food menu lists with search & category filters
│   ├── tickets.html          # Interactive Ticket booking simulator
│   ├── discotheque.html      # Discotheque info and song requests widget
│   ├── gaming.html           # Esports tournament schedule and pre-registration
│   ├── football.html         # Tournament scoreboard and form pre-fill redirector
│   ├── activities.html       # Rides, amusement parks, and attractions lists
│   ├── stall_info.json       # JSON database for foods and activities
│   └── football_schedule.json# JSON database for tournament matches
├── javascript/
│   └── navbar.js             # Global responsive navbar injector
├── images/                   # Asset photos
├── icons and logos/          # Graphics and logs
├── server.py                 # Lightweight development server
└── README.md                 # Project guide
```

---

## 🚀 Local Development
To run the website locally on your computer:
1. Make sure you have Git and Python installed.
2. Open your terminal in this repository directory and run:
   ```bash
   python server.py
   ```
3. Open your browser and go to:
   ```text
   http://localhost:8000/htmlfiles/index.html
   ```

---

## 🌐 Deploying to GitHub Pages
To host the site live and allow your club members to collaborate:
1. Ensure you have created a public repository named **`FoodAndFunDayQEC-2026`** on the **`code-for-qec`** GitHub organization.
2. Link your local files to the new GitHub repo:
   ```bash
   git remote add origin https://github.com/code-for-qec/FoodAndFunDayQEC-2026.git
   ```
3. Commit and push the code:
   ```bash
   git add .
   git commit -m "Design Overhaul: Premium 2026 Release"
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings** -> **Pages**:
   - Set **Source** to "Deploy from a branch".
   - Select **Branch** as `main` and Folder as `/ (root)`.
   - Click **Save**.
5. Go to **Settings** -> **Collaborators** -> **Add people** to invite other club members. When they push to the `main` branch, the live website will update automatically!
