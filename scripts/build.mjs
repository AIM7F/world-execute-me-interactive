// Embeds your own copy of the song (and lyrics, if present) into a single HTML file that runs from a
// double-click (file://) with full audio analysis. The output contains the song: keep it for yourself.
//   node scripts/build.mjs  →  dist/world.execute(me).html
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const song = join(root, 'media', 'song.mp3');
const lyrics = join(root, 'media', 'lyrics.txt');

let audio;
try { audio = await readFile(song); }
catch { console.error(`missing ${song}: put your copy of the song there first (see media/README.md)`); process.exit(1); }
let text = null;
try { text = await readFile(lyrics, 'utf8'); } catch { console.warn('no media/lyrics.txt: building without sung captions'); }

let html = await readFile(join(root, 'index.html'), 'utf8');
html = html.replace('%%AUDIO%%', () => audio.toString('base64'));
if (text !== null) html = html.replace('"%%LYRICS%%"', () => JSON.stringify(text).replace(/</g, '\\u003c'));

await mkdir(join(root, 'dist'), { recursive: true });
const out = join(root, 'dist', 'world.execute(me).html');
await writeFile(out, html);
console.log(`built ${out} (${((await stat(out)).size / 1048576).toFixed(2)} MB)`);
