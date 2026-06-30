# Privacy Policy for Offline Vault

**Last Updated:** June 30, 2026

Offline Vault ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we handle information in the Offline Vault mobile application (the "App").

---

### 1. Zero-Knowledge & 100% Offline Architecture
Offline Vault is designed from the ground up to be a **strictly local, 100% offline database utility**.
* **No Internet Access Required:** The App does not declare the `android.permission.INTERNET` permission in its Android Manifest. It is mathematically and programmatically impossible for the App to transmit any of your data over the web.
* **Local Cryptographic Storage:** All passwords, usernames, secret keys, and notes are saved locally on your physical device.
* **Military-Grade Encryption:** Your local database is secured using standard **AES-256 GCM** encryption. The key is derived locally from your Master Password using PBKDF2 with SHA-256.

### 2. Information Collection, Transmission, and Storage
Because Offline Vault is strictly offline, we do not collect, monitor, or transmit any data:
* **No Master Password Recovery:** We do not store, see, or have access to your Master Password. This is a zero-knowledge system. If you lose or forget your Master Password, your vault cannot be decrypted by anyone, including us.
* **No Personal Information:** We do not collect names, email addresses, IP addresses, or device identifiers.
* **No Analytics or Telemetry:** There are no trackers, third-party analytics (like Firebase Analytics or Mixpanel), or advertisement SDKs embedded within the App.

### 3. Device Permissions Explained
To provide secure and convenient features, the App requests a single system permission:
* **Biometric Authentication (`android.permission.USE_BIOMETRIC`):** Used exclusively to enable secure, convenient unlocking of your local vault using Android's Keystore system (fingerprint or face unlock). Your actual biometric templates remain inside your device's hardware secure element and are never accessed by the App or sent to any server.

### 4. Backups and Data Portability
* The App provides a **Secure Export** feature that outputs a base64-encrypted text envelope.
* This backup is fully encrypted with your Master Password key.
* You are solely responsible for copy-pasting, preserving, and transferring this envelope to a secure location (e.g., writing it down or saving it in a local file). We do not host or transfer backups.

### 5. Third-Party Links
The App operates independently and does not include links to external websites, servers, or third-party privacy policies.

### 6. Children's Privacy
The App does not collect or process any data, making it inherently compliant with COPPA, GDPR, and other children's privacy protective regulations.

### 7. Changes to this Privacy Policy
We may update our Privacy Policy to reflect app enhancements. Any updates will be embedded directly in the App for your review.

### 8. Contact Information
For any security-related inquiries, please contact:
* **Developer Email:** deepakkumar1115@gmail.com
