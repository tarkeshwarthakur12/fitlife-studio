# FitLife Studio — Perspectives, Social Commentary & Public Voice

Official full-stack web platform for **Tarakeshwar Thakur**, dedicated to public dialogue, social development, political governance, education reform, child welfare, and women's safety.

---

## 🌟 Key Features

### Public Platform (`frontend/`)
- **Dynamic Perspectives & Articles**: Filterable commentary across critical societal pillars (*Society & Culture, Politics & Governance, Education & Youth, Women Safety & Rights, Children & Family Welfare, and Editorials*).
- **Community Engagement**: Readers can read full articles, like posts in real time, and leave public comments stored persistently in MongoDB.
- **Live YouTube Integration**: Dynamically fetches and displays the latest videos from the official YouTube channel via the **YouTube Data API v3**.
- **Responsive Design**: Custom-built vanilla HTML5, CSS3, and modular JavaScript architecture tailored for desktop, tablet, and mobile devices.

### Admin Dashboard (`frontend/admin-dashboard.html`)
- **JWT-Protected Authentication**: Secure login portal (`admin-login.html`) for content administration.
- **Real-Time Analytics**: Overview cards tracking total published posts, likes, and community comments.
- **Flexible Publishing Engine**: Create standard articles or short motivational/editorial quotes with optional summaries and body text.
- **Multi-Source Media Uploads**: Upload images directly from a device gallery, capture photos live using a mobile camera, or paste external URLs (integrated with Cloudinary).

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas & Mongoose ODM
- **Media & APIs**: Cloudinary (Image Hosting), YouTube Data API v3, JSON Web Tokens (JWT)
- **Deployment**: Vercel (Frontend) & Render (Backend API)

---

## 📁 Project Structure

```text
fitlife-studio/
├── backend/
│   ├── config/          # Database & Cloudinary configuration
│   ├── controllers/     # Auth, Blog, and YouTube API logic
│   ├── middleware/      # JWT route protection
│   ├── models/          # Mongoose schemas (Admin, Blog)
│   ├── routes/          # Express API endpoints
│   ├── server.js        # Entry point for Node.js server
│   └── package.json
├── frontend/
│   ├── assets/          # Client profile images & static media
│   ├── css/             # Custom modular stylesheets (main, admin, pages)
│   ├── js/              # API client & UI interaction scripts
│   ├── index.html       # Landing & hero page
│   ├── about.html       # Vision & mission overview
│   ├── blog.html        # Filterable public articles feed
│   ├── blog-detail.html # Full article view with likes & comments
│   ├── videos.html      # Live YouTube video gallery
│   ├── contact.html     # Contact & inquiry page
│   ├── admin-login.html # Admin authentication portal
│   └── admin-dashboard.html # Content management dashboard
└── README.md