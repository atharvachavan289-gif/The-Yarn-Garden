Here is the perfect, professional README based on the exact structure you liked. You can copy everything inside the dark box below and paste it directly into your `README.md` file.

```markdown
# 🧶 The Yarn Garden | Handcrafted Crochet Boutique

A premium, fully responsive e-commerce web application designed for an artisanal crochet boutique. This project was built to demonstrate complex state management, custom authentication flows, and high-end frontend architecture.

## 🚀 Live Demo
**[View Live Storefront](https://the-yarn-garden.vercel.app/)** *(Deployed via Vercel)*

## ✨ Key Features
* **🛍️ Persistent Shopping Cart:** Managed via the React Context API with `localStorage` syncing to ensure cart data (items, quantities, totals) remains consistent across all page reloads and routes.
* **🔐 Real-Time Authentication:** A custom-built Login/Register system using `AuthContext` that triggers immediate UI updates in the navigation header without requiring a page refresh.
* **🛤️ Multi-Page Routing:** A seamless Single Page Application (SPA) experience powered by React Router v6, featuring nested layouts and optimized navigation.
* **🎨 Boutique Aesthetic:** Designed from scratch with a focus on "Slow Fashion" storytelling. Utilizes Tailwind CSS for responsive layouts, custom grid systems, and smooth micro-interactions.
* **📦 Dynamic E-Commerce Logic:** Includes real-time subtotal calculations, conditional free-shipping logic, and accurate cart quantity management.

## 🛠️ Tech Stack
* **Core:** React 18, JavaScript (ES6+)
* **State Management:** React Context API
* **Routing:** React Router v6
* **Styling:** Tailwind CSS
* **Build Tool:** Vite
* **Deployment:** Vercel

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header/       # Responsive Nav with Auth UI Logic
│   ├── Home/         # Boutique Landing Page & Storytelling
│   ├── Shopping/     # Product Grid & "Add to Cart" Actions
│   └── Cart/         # Quantity Management, Math Logic & Checkout
├── Context/
│   ├── CartContext.jsx # Global Shopping Logic & LocalStorage Sync
│   └── AuthContext.jsx # User Authentication State
├── Layout.jsx        # Shared UI Wrapper (Header/Footer)
└── main.jsx          # Router Configuration & App Entry
```

## 🏃‍♂️ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/atharvachavan289-gif/the-yarn-garden.git](https://github.com/atharvachavan289-gif/the-yarn-garden.git)
    cd the-yarn-garden
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Launch the development server**
    ```bash
    npm run dev
    ```
    The project will open automatically at `http://localhost:5173`.

---

## 👨‍💻 Developer
**Atharva Chavan**
*3rd-Year Information Technology Engineering Student*
*Navi Mumbai, India*
```
