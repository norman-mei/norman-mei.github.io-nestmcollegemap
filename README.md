# NEST+m Senior College Destinations Map 🦅

An interactive web application that visualizes where NEST+m seniors choose to attend college, built with vanilla JavaScript, the **Google Maps JavaScript API**, and **Chart.js**.  It lets you explore individual student choices, discover trends across years, and share your school’s success stories.

---

## ✨ Features

|                              |                                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 🗺️ **Interactive Map**      | Clustered markers for each college; click to reveal student details, logos, and quick‑link directions                        |
| 🎛️ **Powerful Filters**     | Narrow by graduating class, state / country, major area, or geographic focus (NYC · NY State · Out‑of‑State · International) |
| 🔍 **Search + Autocomplete** | Instantly find students, majors, or colleges with type‑ahead suggestions                                                     |
| 🗂️ **List & Gallery Views** | Switch between compact list or photo‑rich gallery; supports keyboard navigation & image zoom                                 |
| 📊 **Trend Dashboards**      | Year‑over‑year charts for major popularity, geographic distribution, and top‑attended colleges                               |
| 🌙 **Light / Dark Mode**     | One‑click theme toggle updates the entire UI & map styling                                                                   |
| 📱 **Responsive Layout**     | Resizable side panel on desktop, hamburger menu on mobile                                                                    |

---

## 📁 Project Structure

```
├─ collegemap25.html          # Main page + UI logic
├─ collegeCoordsAndInfo.js    # Coordinates & metadata for every college
├─ majortoareamapping.js      # Maps raw majors -> major‑area buckets
├─ normalizecollegename.js    # Cleans nicknames to canonical college names
├─ jsonData.json              # Student roster (name, year, college, major, socials …)
└─ photos/                    # (optional) Senior photos & college logos
```

---

## 🚀 Quick Start

1. **Clone the repo**

   ```bash
   git clone https://github.com/<your‑user>/<repo>.git
   cd college-destinations-map
   ```
2. **Add a Google Maps API key**

   * Create a key in the *Google Cloud Console* with the **Maps JavaScript API** enabled.
   * Open `collegemap25.html` and replace the placeholder in the `<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=initializeApp">` tag.
3. **Serve the site**
   Any static HTTP server works; for example with `serve`:

   ```bash
   npm install -g serve
   serve .
   ```

   Then browse to [http://localhost:3000](http://localhost:3000).

> **Tip**  Most browsers block local JSON requests when opening an HTML file directly.  Use a simple server instead.

---

## 🛠️ Customising the Data

| Action               | File                      | How                                                                             |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| Add / edit students  | `jsonData.json`           | Append objects matching the existing schema (name, classYear, college, major …) |
| Add / edit colleges  | `collegeCoordsAndInfo.js` | Provide `lat`, `lng`, `type`, logo URL & homepage URL                           |
| Update major buckets | `majortoareamapping.js`   | Map new major keywords → major areas                                            |
| Normalise nicknames  | `normalizecollegename.js` | Extend the `if` clauses to catch new abbreviations                              |

---

## 🌍 Deployment

Because everything is static, you can host the project on **GitHub Pages**, **Netlify**, **Cloudflare Pages**, or any static file host.

```bash
# Example: deploy to gh‑pages
npm install -g gh-pages
gh-pages -d .
```

---

## 🗺️ Roadmap

* Import data automatically from a Google Sheet
* Export filtered lists as CSV
* Internationalisation (i18n)
* Additional charts (acceptance rates, merit aid, …)

---

## 🤝 Contributing

Pull requests and issues are welcome!  Please open an issue first to discuss major changes.

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

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
