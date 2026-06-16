/**
 * Image compression script — converts oversized PNGs/JPGs to WebP
 * Run: node scripts/compress-images.mjs
 */
import { readdirSync, statSync, mkdirSync, existsSync } from "fs";
import { join, relative, parse } from "path";
import sharp from "sharp";

const ROOT = "public/images";
const SIZES = {
  large: { width: 1920, quality: 80 },
  medium: { width: 1200, quality: 82 },
  small: { width: 800, quality: 85 },
};

const EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

let totalSaved = 0;
let totalOriginal = 0;
let compressed = 0;
let skipped = 0;

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== "node_modules") walk(fullPath);
    } else {
      const ext = parse(entry.name).ext.toLowerCase();
      if (EXTENSIONS.has(ext)) {
        const stat = statSync(fullPath);
        const sizeMB = (stat.size / 1024 / 1024).toFixed(2);
        const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

        // Determine resize based on file size
        let targetSize = SIZES.large;
        if (stat.size < 500 * 1024) targetSize = SIZES.small;
        else if (stat.size < 1.5 * 1024 * 1024) targetSize = SIZES.medium;

        compressed++;
        totalOriginal += stat.size;

        sharp(fullPath)
          .resize({ width: targetSize.width, withoutEnlargement: true })
          .webp({ quality: targetSize.quality, effort: 6 })
          .toFile(webpPath)
          .then((info) => {
            const saved = stat.size - info.size;
            totalSaved += saved;
            const pct = ((saved / stat.size) * 100).toFixed(1);
            console.log(
              `✓ ${relative(ROOT, fullPath)} (${sizeMB}MB → ${(info.size / 1024 / 1024).toFixed(2)}MB, -${pct}%)`
            );
          })
          .catch((err) => {
            console.error(`✗ ${relative(ROOT, fullPath)}: ${err.message}`);
          });
      } else {
        skipped++;
      }
    }
  }
}

console.log("🔍 Scanning images...\n");
walk(ROOT);

// Wait for all operations to finish
setTimeout(() => {
  const savedMB = (totalSaved / 1024 / 1024).toFixed(1);
  const originalMB = (totalOriginal / 1024 / 1024).toFixed(1);
  console.log(`\n📊 Summary:`);
  console.log(`   Files compressed: ${compressed}`);
  console.log(`   Files skipped (already WebP): ${skipped}`);
  console.log(`   Original size: ${originalMB} MB`);
  console.log(`   Estimated savings: ${savedMB} MB`);
  console.log(`   ✅ WebP images generated alongside originals.`);
  console.log(`   ℹ️  Update Image components to use .webp extensions where needed.`);
}, 10000);
