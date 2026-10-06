# media/

This folder is intentionally empty in the repository. The song and its lyrics belong to
[Mili](https://projectmili.com/) and are **not** distributed here. Put your own legally
obtained copies in this folder:

| File | Required | What it is |
| --- | --- | --- |
| `song.mp3` | yes | *world.execute(me);* by Mili, the full-length album version (≈ 3:32). Any format your browser can decode works, but the file must be named `song.mp3`. |
| `lyrics.txt` | no | The English lyrics, one sung line per row (85 rows). Without it the film still runs; only the sung captions are missing. |

Everything in this folder except this README is ignored by git.

## About `lyrics.txt`

The film shows each sung line together with the line of code the program "hears".
It needs the sung lines as **85 rows, in order**, with each lyric line on its own row
the way the official lyrics are usually laid out. For example, *If I can* and the line
that follows it are two separate rows, and *You have left* repeated five times is five rows.

You can also use an `.lrc` file: rename it to `lyrics.txt`, or drop it on the page.
Timestamps, `[ti:]`-style tags, Chinese/Korean translation lines and
"Lyrics by / Composed by" credits are skipped automatically.

If the row count is off, the browser console prints
`lyrics: N lines, expected 85`.

## No server? Drag and drop

Browsers block `fetch()` on `file://` pages. If you open `index.html` directly, the start
screen asks for the song. Drag `song.mp3` onto the window, and `lyrics.txt` too if you
have it.
