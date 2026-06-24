import {defineConfig} from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'serve-apk-middleware',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // Check if the request is for an APK file
            if (req.url && req.url.includes('.apk')) {
              // Strip any query parameters
              const cleanUrl = req.url.split('?')[0];
              const apkPath = path.join(process.cwd(), 'public', cleanUrl);
              
              if (fs.existsSync(apkPath)) {
                res.setHeader('Content-Type', 'application/vnd.android.package-archive');
                res.setHeader('Content-Disposition', 'attachment; filename="secure-vault.apk"');
                const stat = fs.statSync(apkPath);
                res.setHeader('Content-Length', stat.size);
                
                const stream = fs.createReadStream(apkPath);
                stream.pipe(res);
                return;
              }
            }
            next();
          });
        }
      }
    ],
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
