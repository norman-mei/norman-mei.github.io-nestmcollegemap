# NEST+m Senior College Destinations Map 🦅

An interactive web application that visualizes where NEST+m seniors choose to attend college, built with vanilla JavaScript, the **Google Maps JavaScript API**, and **Chart.js**. It lets you explore individual student choices, discover trends across years, and share your school’s success stories.

---

## ✨ Features

| Feature                      | Description                                                                                                                                  |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 🗺️ **Interactive Map**      | Clustered markers for each college; click to reveal student details, logos, and quick-link directions. Supports satellite and transit layers. |
| 🎛️ **Powerful Filters**     | Narrow by graduating class, state/country, major area, or geographic focus (NYC, NY State, Out-of-State, International).                       |
| 🔍 **Search & Autocomplete** | Instantly find students, majors, or colleges with type-ahead suggestions.                                                                    |
| 🖼️ **List & Gallery Views**  | Switch between a compact list or a photo-rich gallery. Supports keyboard navigation, multi-select for group zoom, and full-screen image zoom. |
| 📊 **Trend Dashboards**      | Year-over-year charts for major popularity, geographic distribution, and top-attended colleges. The main chart is pannable and zoomable.        |
| 💡 **Interactive Tutorial**  | An optional, step-by-step guided tour that highlights key features for new users.                                                            |
| ⌨️ **Keyboard Navigation**   | Navigate the student list with arrow keys (`↑`/`↓`), cycle through zoomed photos (`←`/`→`), and close any popup with `Esc`.                    |
| 🌙 **Light/Dark Mode**       | One-click theme toggle updates the entire UI, including the map styling, for comfortable viewing.                                              |
| 📱 **Responsive Layout**     | A fluid interface with a resizable side panel on desktop and a collapsible hamburger menu on mobile.                                         |
| 🔗 **Social & Web Links**    | Easy access to student LinkedIn/Instagram profiles and official college homepages.                                                           |

---

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Mapping:** Google Maps JavaScript API (with `marker`, `places`, and `geometry` libraries)
*   **Clustering:** \@googlemaps/markerclusterer
*   **Charting:** Chart.js (with `chartjs-plugin-zoom`)
*   **Interactivity:** Hammer.js (for chart touch gestures)

---

## 📁 Project Structure

```
├─ index.html                 # Main page, UI layout, and all application logic
├─ collegeCoordsAndInfo.js    # Coordinates & metadata for every college
├─ majortoareamapping.js      # Maps raw majors to broader major-area buckets
├─ normalizecollegename.js    # Cleans nicknames (e.g., "bing") to canonical college names
├─ jsonData.json              # The core student roster (name, year, college, major, socials…)
└─ photos/                    # (Optional) Directory for senior photos & college logos
```

---

## 🚀 Quick Start

1.  **Clone the repo**
    ```bash
    git clone https://github.com/<your-user>/<repo>.git
    cd <repo>
    ```2.  **Add a Google Maps API key**
    *   Create a key in the [Google Cloud Console](https://console.cloud.google.com/).
    *   Enable the **Maps JavaScript API**.
    *   Open `index.html` and find the `<script>` tag at the very bottom.
    *   Replace `YOUR_KEY` with your actual API key in the `src` attribute:
        ```html
        <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=initializeApp..."></script>
        ```
3.  **Serve the site**
    Because of browser security policies (CORS), you cannot open `index.html` directly from the filesystem. You must use a local web server.
    *   **Using VS Code:** Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension and click "Go Live".
    *   **Using Python:**
        ```bash
        # Python 3
        python -m http.server
        ```
    *   **Using Node.js:**
        ```bash
        # Install serve globally
        npm install -g serve
        # Run the server
        serve .
        ```
    Then, open your browser to the local address provided (e.g., `http://localhost:8000`).

---

## ✍️ Customizing the Data

| Action                      | File to Edit              | Instructions                                                                                                                            |
| --------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Add/Edit Students**       | `jsonData.json`           | Append new objects to the array. Follow the existing schema: `name`, `classYear`, `college`, `major`, `linkedin`, `instagram`, `congratsCaption`. |
| **Add/Edit Colleges**       | `collegeCoordsAndInfo.js` | Add a new entry to the `collegeCoordsAndInfo` object. Provide `lat`, `lng`, `type`, `imageUrl`, `homepageUrl`, and `stateOrCountry`.         |
| **Update Major Categories** | `majortoareamapping.js`   | Add new specific majors (lowercase) as keys and map them to one of the existing major areas (e.g., "STEM", "Arts/Design").                |
| **Add College Nicknames**   | `normalizecollegename.js` | Add a new `if (originalNameLower === "nickname")` condition to map an alias to its canonical name from `collegeCoordsAndInfo.js`.           |

---

## 🌍 Deployment

Because this is a fully static project, you can host it for free on services like:

*   [GitHub Pages](https://pages.github.com/)
*   [Netlify](https://www.netlify.com/)
*   [Vercel](https://vercel.com/)
*   [Cloudflare Pages](https://pages.cloudflare.com/)

Simply connect your repository to one of these services, and they will handle the build and deployment process automatically.

---

## 🤝 Contributing

Pull requests and issues are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📝 License

MIT License

Copyright (c) 2025 Norman Mei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
