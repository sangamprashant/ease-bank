
# 💳 EaseBank – Simplified Mobile Banking

EaseBank is a modern mobile banking application developed as a college project using **React Native**, **MERN stack**, and **PHP** for secure KYC image uploads. It simulates core banking functionalities like user authentication, balance checking, fund transfers, and transaction tracking — all optimized for mobile devices.

---

## 🧾 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Features

| Feature             | Status    | Description                                      |
| -------------------| --------- | ------------------------------------------------ |
| ✅ User Registration| Complete  | Sign up with email and password                  |
| ✅ JWT Login System | Complete  | Secure login and session handling                |
| ✅ View Balance     | Ready     | Display current account balance                  |
| 🔜 Transfer Funds   | Planned   | Send money to other users                        |
| ✅ KYC Upload       | Complete  | Upload ID images via PHP backend                 |
| 🔜 Transaction Log  | Planned   | View a full list of transactions                 |

---

## 🧰 Tech Stack

### Frontend (Mobile App)
- **React Native** (Expo)
- **TypeScript**
- **React Navigation**
- **Axios / Fetch API**

### Backend (API)
- **Node.js**
- **Express**
- **MongoDB (Mongoose)**
- **JWT Authentication**

### KYC Upload Server
- **PHP**
- **File Upload Handling**

---

## 📁 Folder Structure

```

easebank/
├── mobile-app/         → React Native app (Expo)
├── backend-api/        → Node.js + Express + MongoDB
├── php-upload-server/  → PHP-based image upload service
└── README.md

````

---

## 📦 Installation

### Prerequisites

- Node.js & npm
- MongoDB
- PHP (with local server like XAMPP or MAMP)
- Expo CLI

### Setup Steps

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/easebank.git
cd easebank
````

2. **Start Backend API**

```bash
cd backend-api
npm install
npm start
```

3. **Start PHP Upload Server**

* Move `php-upload-server/` to your local PHP server's root (e.g., `htdocs/`)
* Access via `http://localhost/php-upload-server/upload.php`

4. **Run Mobile App**

```bash
cd mobile-app
npm install
npx expo start
```

---

## 📱 Usage

* Register or log in using the mobile app.
* View your account balance.
* Upload your ID for KYC verification.
* Transfer funds and view transaction logs (coming soon).

---

## 📸 Screenshots

> *Add screenshots of your login screen, home page, upload page, etc.*

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE) file for details.

---

## 🧠 Credits

Developed by Prashant Srivastav as part of a college project.

---

## 💡 Tagline

> “**EaseBank – Banking made simple.**”
