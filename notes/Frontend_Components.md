# 🎨 Frontend Components and Styling

The frontend React application is structured around a modern, premium design system using Tailwind CSS v4, Shadcn components, and state context wrappers.

---

## 🎨 Theme & Styling System

### ⚡ Tailwind CSS v4
The frontend uses the next-generation **Tailwind CSS v4** engine integrated via `@tailwindcss/vite` in [vite.config.ts](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/vite.config.ts). Customizations are managed directly in [index.css](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/src/index.css) using CSS variables and theme configuration directives.

### 🌓 Dark Mode
Dark mode is activated globally by toggling the `.dark` class on the root `<html>` element. This class-based dark mode configuration ensures Tailwind selectors like `dark:bg-slate-900` apply instantly.

### 🔤 Typography & Fonts
Imported via Fontsource in [package.json](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/package.json):
*   **Sans-serif**: Geist Variable (`@fontsource-variable/geist`)
*   **Monospace**: JetBrains Mono Variable (`@fontsource-variable/jetbrains-mono`)

---

## 🧠 State Context Providers

All global providers wrap the application in [App.tsx](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/src/App.tsx).

### 1. `ThemeContext`
*   **File**: [ThemeContext.tsx](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/src/context/ThemeContext.tsx)
*   **State**: Current theme (`'light'` or `'dark'`).
*   **Method**: `toggleTheme()` to switch modes.
*   **Features**: Persists theme choice to `localStorage` under `weiyana-theme`. Falls back to the browser's system preference `prefers-color-scheme: dark`.

### 2. `AuthContext`
*   **File**: [AuthContext.tsx](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/src/context/AuthContext.tsx)
*   **State**: Authenticated `user` details, authentication status `loading`, request `error`, and Fortify server-side `validationErrors` fields.
*   **Methods**:
    *   `login({ email, password })`
    *   `register({ name, email, password, password_confirmation })`
    *   `logout()`
    *   `clearErrors()`

---

## 🧩 Shadcn UI & Custom Layouts

All atomic components reside in [src/components/ui/](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/src/components/ui).

### 🛠️ Reusable Shadcn UI Widgets
The project contains the following pre-configured Radix-backed UI blocks:
*   `avatar.tsx` — User thumbnail wrapper with fallback text.
*   `badge.tsx` — Status tags and flags.
*   `button.tsx` — Custom button presets (variants: default, destructive, outline, secondary, ghost, link).
*   `card.tsx` — Styled panels with header, title, description, content, and footer parts.
*   `checkbox.tsx` — Custom checked fields.
*   `input.tsx` — Text, password, and email input fields.
*   `label.tsx` — Accessible form label tag.
*   `separator.tsx` — Dividers for clean visual layout.
*   `sheet.tsx` — Slide-out side drawers (crucial for mobile menus).
*   `sidebar.tsx` — The parent sidebar controller housing navigation trees.
*   `skeleton.tsx` — Loading skeleton layouts.
*   `tooltip.tsx` — Hover hints for buttons and text.

### 📐 Sidebar Layout Frame
*   **File**: [SidebarLayout.tsx](file:///c:/Users/PC/Herd/weiyana-decoupled/weiyana-react-frontend/src/components/SidebarLayout.tsx)
*   **Usage**: Wraps all protected routes under the layout router branch.
*   **Features**:
    *   Provides collapsible desktop sidebar navigation.
    *   Responsive hamburger menu on mobile (using custom hooks).
    *   Header bar with current route title, theme toggle, and logged-in user summary.
    *   User profile detail card and Sign Out buttons.

---

⬅️ Back to [Home](00_Home.md)
