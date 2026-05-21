import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the build output directory with explicit caching options
const oneYear = 31536000000; // 1 year in milliseconds
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: oneYear,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Guard: Avoid routing request for typical static assets to the fallback index.html route if they don't exist
app.get('*', (req, res, next) => {
  const ext = path.extname(req.path).toLowerCase();
  const staticExtensions = [
    '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp',
    '.css', '.js', '.woff', '.woff2', '.ttf', '.otf', '.eot', '.json'
  ];
  if (staticExtensions.includes(ext)) {
    return res.status(404).send(`Asset not found: ${req.path}`);
  }
  next();
});

// Serve the main index.html for all SPA routes (fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Hostinger Express deployment server running on port ${PORT}`);
});
