# DoubleTick – Customer Management Frontend (React + Vite)

A **high-performance frontend application** built using **React + Vite** to manage and display **1 million customer records** efficiently.  
Includes smooth infinite scroll, debounced search, sorting, and a clean, responsive UI — all powered by the speed of **Vite**.

 **Live Demo:** [https://doubletick-customers.vercel.app/](https://doubletick-customers.vercel.app/)

---

## Features

- **Powered by Vite** – ultra-fast dev server & lightning build speed  
- **1,000,000+ records** handled smoothly with incremental rendering  
- **Search** by Name / Email / Phone (250ms debounce)  
- **Sorting** (ASC / DESC toggle) for all columns  
- **Infinite Scroll** – loads 30 rows at a time  
- **Filter Dropdown** – static placeholder for future filters  
- **Plain CSS styling** – clean, lightweight, responsive design  
- **Brand Assets** – DoubleTick logo, icons, and default avatar

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| Framework | **React 18** |
| Build Tool | **Vite** |
| Styling | Plain CSS |
| Mock Data | `@faker-js/faker` |
| Deployment | **Vercel** |

---

## Setup & Run Locally

### Clone the repository
```bash
git clone https://github.com/Veerul/vite-customers.git
cd vite-customers
```

### Install dependencies
```bash
npm install
npm install @faker-js/faker
```

### Run the Vite dev server
```bash
npm run dev
```

 The app will start at  
 [http://localhost:5173](http://localhost:5173)

---

##  Vite Commands Reference

| Command | Description |
|----------|--------------|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the project for production (output in `/dist`) |
| `npm run preview` | Locally previews the built production bundle |

---

##  Folder Structure

```
vite-customers/
├── public/
├── src/
│   ├── assets/
│   │   ├── DoubletickLogo.png
│   │   ├── test_Filter.svg
│   │   ├── test_Search-3.svg
│   │   └── test_user-3.svg
│   ├── components/
│   │   ├── FiltersDropdown.jsx
│   │   └── Table.jsx
│   ├── utils/
│   │   └── generateData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

---

##  How Sorting Works

Each column header (Customer, Score, Email, Last Message, Added By) is clickable.  
Click once → Ascending ▲  
Click again → Descending ▼  

The sorting logic updates automatically and visually toggles the arrow next to each header.

---

##  Hosting on Vercel

The project is deployed live on **Vercel**.  
You can deploy your own version in just a few steps:

1. Push your project to GitHub  
2. Go to [https://vercel.com](https://vercel.com) and log in  
3. Click **“Add New Project” → “Import Git Repository”**  
4. Choose your repo (e.g. `Veerul/vite-customers`)  
5. Build command → `npm run build`  
6. Output directory → `dist`  
7. Click **Deploy** 🎉  

Vercel will automatically assign your project a live URL.  
For this project, it’s hosted here:  
🔗 [https://doubletick-customers.vercel.app/](https://doubletick-customers.vercel.app/)

---

##  Future Improvements

- API integration for real-time data  
- Advanced multi-column filters  
- Server-side pagination  
- CSV / Excel export  
- Role-based authentication  

---

##  Author

**Developed by:** *Veerul*  
 22123002267@nitdelhi.ac.in  
 [GitHub Profile](https://github.com/Veerul)

---

