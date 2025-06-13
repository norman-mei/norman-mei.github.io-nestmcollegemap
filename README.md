# NEST+m Senior College Destinations Map 🦅

An interactive web app that visualizes where NEST+m seniors attend college. Built with vanilla JavaScript, the Google Maps JavaScript API, and Chart.js, it lets you explore individual student choices, uncover year‑over‑year trends, and showcase your school’s outcomes.

## ✨ Features

| Feature                      | Description                                                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 🗺️ **Interactive Map**      | Clustered markers for each college; click to view student details, logos, and quick‑link directions. Toggle satellite/transit layers. |
| 🎛️ **Advanced Filters**     | Filter by graduating class, region (NYC, New York State, Out‑of‑State, International), state/country, or major area.                  |
| 🔍 **Search & Autocomplete** | Live type‑ahead search for students, majors, or colleges.                                                                             |
| 🖼️ **List & Gallery Views** | Switch between a compact list or photo gallery. Keyboard navigation, multi‑select zoom, and full‑screen image view supported.         |
| 📊 **Trend Dashboards**      | Pannable/zoomable charts showing year‑over‑year major popularity, geographic distribution, and top colleges by cohort.                |
| 💡 **Interactive Tutorial**  | Guided step‑by‑step tour highlighting key features.                                                                                   |
| ⌨️ **Keyboard Navigation**   | Navigate the list with ↑/↓, cycle photos with ←/→, and close popups with Esc.                                                         |
| 🌙 **Light/Dark Mode**       | One‑click theme toggle (including map styling) for comfortable viewing in any environment.                                            |
| 📱 **Responsive Layout**     | Fluid interface: resizable side panel on desktop, collapsible menu on mobile.                                                         |
| 🔗 **Social & Web Links**    | Direct links to student LinkedIn/Instagram profiles and official college homepages.                                                   |

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Mapping:** Google Maps JavaScript API (marker, places, geometry)
* **Clustering:** @googlemaps/markerclusterer
* **Charting:** Chart.js + chartjs-plugin-zoom
* **Gestures:** Hammer.js (touch interactions)

## 📁 Project Structure

```
├─ index.html                 # Main UI & app logic
├─ collegeCoordsAndInfo.js    # College metadata: lat, lng, type, imageUrl, homepageUrl, region
├─ majortoareamapping.js      # Maps specific majors to broader categories
├─ normalizecollegename.js    # Cleans nickname aliases to canonical college names
├─ jsonData.json              # Student roster: name, classYear, college, major, socials, captions
└─ photos/                    # Optional: senior photos & college logos
```

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/<repo>.git
   cd <repo>
   ```

2. **Add your Google Maps API key**

   * Create a key in the Google Cloud Console and enable **Maps JavaScript API**.
   * In `index.html`, locate the `<script>` tag at the bottom and replace `YOUR_KEY`:

     ```html
     <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=initializeApp…"></script>
     ```

3. **Serve the site**
   *(Due to CORS, a local server is required.)*

   * **VS Code:** Install and enable the Live Server extension, then click "Go Live".
   * **Python:**

     ```bash
     python -m http.server
     ```
   * **Node.js (serve):**

     ```bash
     npm install -g serve
     serve .
     ```

   Open your browser at the provided local address (e.g., `http://localhost:8000`).

## ✍️ Customizing Data

| Task                   | File                      | Instructions                                                                                                     |
| ---------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Add/Edit Students**  | `jsonData.json`           | Append new objects. Fields: `name`, `classYear`, `college`, `major`, `linkedin`, `instagram`, `congratsCaption`. |
| **Add/Edit Colleges**  | `collegeCoordsAndInfo.js` | Add an entry with `lat`, `lng`, `type`, `imageUrl`, `homepageUrl`, `region` (state or country).                  |
| **Update Major Areas** | `majortoareamapping.js`   | Map new lowercase majors to existing areas (e.g., `STEM`, `Arts/Design`, `Humanities`).                          |
| **Add Nicknames**      | `normalizecollegename.js` | Add `if (originalNameLower === "alias")` → map to canonical name in `collegeCoordsAndInfo.js`.                   |

## 🌍 Deployment

Host the static site on any platform:

* **GitHub Pages**
* **Netlify**
* **Vercel**
* **Cloudflare Pages**

Connect your repo; builds and deploys automatically.

## 🤝 Contributing

Pull requests and issues are welcome! For major changes, please open an issue first to discuss.

## 📝 License

MIT License © 2025 Norman Mei

Permission is granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies.
