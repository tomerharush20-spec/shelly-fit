// Builds www/ for the native app: same index.html as the website,
// with the 3D library bundled locally so the app works fully offline.
import { mkdirSync, copyFileSync, readFileSync, writeFileSync, cpSync, rmSync, existsSync } from 'node:fs';
const out = 'www';
if (existsSync(out)) rmSync(out, { recursive: true });
mkdirSync(out, { recursive: true });
let html = readFileSync('index.html', 'utf8');
html = html.replace('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js', 'vendor/three.min.js');
writeFileSync(`${out}/index.html`, html);
mkdirSync(`${out}/vendor`, { recursive: true });
copyFileSync('node_modules/three/build/three.min.js', `${out}/vendor/three.min.js`);
cpSync('icons', `${out}/icons`, { recursive: true });
copyFileSync('manifest.webmanifest', `${out}/manifest.webmanifest`);
console.log('www/ ready');
