# 🏡 Weiyana Decoupled - Knowledge Vault

Welcome to the **Weiyana Decoupled** repository knowledge vault. This collection of notes serves as a comprehensive system index, enabling developers and AI agents to instantly locate files, routing logic, database tables, and frontend states without consuming excessive tokens traversing directories.

---

## 🗺️ Navigation Map

Click on any of the notes below to explore different layers of the system:

*   ### 🏗️ [Project Overview](Project_Overview.md)
    An architectural guide to the decoupled Laravel backend and React frontend, detailing how Sanctum stateful cookie authentication works.
*   ### 📁 [Directory Structure](Directory_Structure.md)
    A high-level map of crucial folders and files in the repository. Reference this first to locate files instead of scanning directories.
*   ### 🔀 [Routing and Endpoints](Routing_And_Endpoints.md)
    Detailed listings of backend API routes (including Fortify's authentication endpoints) and React Router frontend pages.
*   ### 🗄️ [Database Schema](Database_Schema.md)
    Overview of database migrations, Eloquent models, and active tables (such as users, passkeys, cache, and jobs).
*   ### 🎨 [Frontend Components](Frontend_Components.md)
    Guide to the UI system: Shadcn components, custom hooks, Auth/Theme context providers, and styling rules.
*   ### 🛠️ [Development Workflows](Development_Workflows.md)
    Quick-reference cheatsheet for common npm scripts, php artisan commands, migration runners, and local development configurations.

---

## ⚙️ Vault Features
*   **Unsupported Files Hidden**: All raw code files (`.php`, `.tsx`, `.ts`, etc.) are hidden from the file explorer in Obsidian (via `.obsidian/app.json`) to keep your sidebar clean and focused only on documentation notes.
*   **Dependency Files Ignored**: Folders like `node_modules/`, `vendor/`, and `storage/` are ignored to ensure Obsidian remains responsive.
*   **Linked Network**: Use Obsidian's **Graph View** (Ctrl + G) to visually inspect how these architectural layers connect!
