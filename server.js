import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Explicitly register static folder directories for both dev, production, and public backups
app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets'), { maxAge: '1y', immutable: true }));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets'), { maxAge: '1y', immutable: true }));
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Bulletproof image recovery mapping - if any requests fail or contain custom routes, auto-route the image file
const IMAGE_FILES = [
  'advanced_eye_testing_lab_1779176321332.png',
  'bengali_man_glasses_1779362023194.png',
  'bengali_professor_glasses_1779362039790.png',
  'bengali_woman_glasses_1779362005700.png',
  'corporate_optical_hq_office_1779179228213.png',
  'eyeq_corporate_hq_office_1779179444700.png',
  'kobordanga_branch_interior_1779178998161.png',
  'luxury_optical_showroom_hero_1779176289085.png',
  'modern_optical_display_wall_1779177828358.png',
  'premium_designer_frames_1779176306036.png',
  'premium_optical_boutique_view_1779179027784.png'
];

app.get('*', (req, res, next) => {
  const reqLower = req.path.toLowerCase();
  const matchedImage = IMAGE_FILES.find(img => reqLower.includes(img.toLowerCase()));
  
  if (matchedImage) {
    const searchPaths = [
      path.join(__dirname, 'dist', 'assets', 'images', matchedImage),
      path.join(__dirname, 'public', 'assets', 'images', matchedImage),
      path.join(__dirname, 'dist', 'images', matchedImage),
      path.join(__dirname, 'dist', matchedImage),
      path.join(__dirname, 'src', 'assets', 'images', matchedImage),
      path.join(__dirname, 'assets', 'images', matchedImage),
    ];
    
    for (const p of searchPaths) {
      if (fs.existsSync(p)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        res.setHeader('Content-Type', 'image/png');
        return res.sendFile(p);
      }
    }
  }
  next();
});

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
