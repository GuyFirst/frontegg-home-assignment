# Frontegg Home Assignment

This project was created as part of the application process for the Tier-1 Technical Support Engineer role at Frontegg.

## 📦 Tech Stack

- React + Vite
- TypeScript
- Frontegg SDK

## ✅ Features

- User authentication via Frontegg Hosted Login
- Profile picture and name display after login
- Admin Portal integration (`AdminPortal.show()`)
- Access token popup
- Logout button
- Metadata display per user
- TEST USER badge based on metadata
- Role display based on metadata
- Switch Tenant dropdown (multi-tenant support)
- Custom user metadata for bonus
- vikram.moule@frontegg.com invited with limited role
- Magic Link login enabled only

## 🚀 Getting Started Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root with the following (replace with your Frontegg credentials):

```env
VITE_BASE_URL=https://your-env.frontegg.com
VITE_CLIENT_ID=your-client-id
VITE_APP_ID=your-app-id
```

4. Run the app:

```bash
npm run dev
```

---

## 📄 Notes

- All functionality is implemented using Frontegg SDK only.
- This project is not deployed, it runs locally on `http://localhost:5173`.
- Please ensure `localhost:5173` is whitelisted in your Frontegg environment settings (CORS + Redirect).

---

Made with ❤️ by Guy First
