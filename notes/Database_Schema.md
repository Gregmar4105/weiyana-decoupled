# 🗄️ Database Schema

The system uses a lightweight local **SQLite** database for persistence. This note provides a complete guide to migrations, table structures, and Eloquent ORM settings.

---

## ⚙️ Configuration

*   **Database Engine**: SQLite
*   **Active Connection**: Configured in `.env` as `DB_CONNECTION=sqlite`
*   **Database File Location**: `database/database.sqlite` (or dynamic local memory if running tests)

---

## 🗂️ Tables and Columns

### 1. `users` Table
Stores user credentials, timestamps, and multi-factor security attributes.

| Column | Type | Nullable | Key | Default / Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `INTEGER` | No | Primary | Auto-increment identifier. |
| `name` | `VARCHAR` | No | | User display name. |
| `email` | `VARCHAR` | No | Unique | User login email address. |
| `email_verified_at`| `DATETIME` | Yes | | Timestamp of email verification. |
| `password` | `VARCHAR` | No | | Hashed password string. |
| `two_factor_secret`| `TEXT` | Yes | | Encrypted secret for TOTP multi-factor (Fortify). |
| `two_factor_recovery_codes` | `TEXT` | Yes | | Backup recovery codes (Fortify). |
| `two_factor_confirmed_at` | `DATETIME` | Yes | | Timestamp of 2FA verification. |
| `remember_token` | `VARCHAR` | Yes | | Token for browser session persistence. |
| `created_at` | `DATETIME` | Yes | | Record creation timestamp. |
| `updated_at` | `DATETIME` | Yes | | Record last modified timestamp. |

#### 🤖 User Model (`app/Models/User.php`)
*   **Fillable Attributes**: `name`, `email`, `password` (configured using PHP Attributes `#[Fillable]`).
*   **Hidden Attributes**: `password`, `remember_token` (configured using PHP Attributes `#[Hidden]`).
*   **Attribute Casts**:
    *   `email_verified_at` ➡️ `datetime`
    *   `password` ➡️ `hashed`

---

### 2. `passkeys` Table
Stores registered FIDO2 WebAuthn/Passkey credentials for biometric and secure logins.

| Column | Type | Nullable | Key | Default / Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `INTEGER` | No | Primary | Auto-increment identifier. |
| `user_id` | `INTEGER` | No | Foreign | References `users.id` (cascades on delete). Index is set on this field. |
| `name` | `VARCHAR` | No | | Friendly name for the credential (e.g., "Chrome on Macbook"). |
| `credential_id` | `VARCHAR` | No | Unique | Passkey raw credential ID. |
| `credential` | `JSON` | No | | Public key details, algorithm, and configuration. |
| `last_used_at` | `DATETIME` | Yes | | Timestamp of last login with this passkey. |
| `created_at` | `DATETIME` | Yes | | Timestamp. |
| `updated_at` | `DATETIME` | Yes | | Timestamp. |

---

### 3. `sessions` Table
Stores session states. The application is configured to use database-driven sessions (`SESSION_DRIVER=database` in `.env`), making this table critical for session tokens.

| Column | Type | Nullable | Key | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `VARCHAR` | No | Primary | Unique session ID. |
| `user_id` | `INTEGER` | Yes | Foreign | References `users.id` (index enabled). |
| `ip_address` | `VARCHAR(45)`| Yes | | Client IP address. |
| `user_agent` | `TEXT` | Yes | | Client browser user agent string. |
| `payload` | `TEXT` | No | | Serialized session variables. |
| `last_activity` | `INTEGER` | No | Index | Unix timestamp of the last request from this session. |

---

### 4. Supporting Infrastructure Tables

*   **`password_reset_tokens`**:
    *   `email` (Primary, `VARCHAR`)
    *   `token` (`VARCHAR`)
    *   `created_at` (`DATETIME`)
*   **`cache` / `cache_locks`**:
    *   Used when caching is configured to the database driver (`CACHE_STORE=database`).
*   **`jobs` / `job_batches` / `failed_jobs`**:
    *   Handles asynchronous background processing (e.g., mail sending, notifications) when `QUEUE_CONNECTION=database` is configured.
*   **`personal_access_tokens`**:
    *   Standard Sanctum token authentication table (default setup, not actively used since we use Sanctum session cookies).

---

⬅️ Back to [Home](00_Home.md)
