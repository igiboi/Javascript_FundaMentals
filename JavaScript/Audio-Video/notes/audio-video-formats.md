# Audio & Video Formats

## MIME Types

A **MIME type** (Multipurpose Internet Mail Extensions) is a standardized string that tells a browser or application what kind of file it's dealing with and how to handle it.

Format: `type/subtype`

```
text/html
application/json
audio/mpeg
video/mp4
```

For audio and video, the MIME type signals the browser that the file is multimedia and can be embedded in a web page.

---

## Common Audio Formats

| Format | MIME Type | Notes |
|---|---|---|
| MP3 | `audio/mpeg` | Most widely supported, lossy compression |
| MP4 (audio-only) | `audio/mp4` | AAC codec, common on Apple devices |
| WAV | `audio/wav` | Uncompressed, high quality, large file size |
| OGG | `audio/ogg` | Open source, good compression |

---

## Common Video Formats

| Format | MIME Type | Notes |
|---|---|---|
| MP4 | `video/mp4` | Most widely supported across browsers |
| WebM | `video/webm` | Open source, optimized for the web |
| OGG | `video/ogg` | Open source, less common for video |
| MKV | `video/x-matroska` | Open source, flexible container |
| MOV | `video/quicktime` | Apple QuickTime format |
| WMV | `video/x-ms-wmv` | Windows Media Player format |

> Note: MP4 can be either `audio/mp4` or `video/mp4` depending on the content. The MIME type is what tells the browser which to expect.

---

## The `<source>` Element

You can't always know which format a user's browser supports. The `<source>` element solves this by letting you provide multiple formats — the browser picks the first one it can play.

```html
<video controls>
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video element.
</video>
```

```html
<audio controls>
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

The browser reads `<source>` elements top to bottom and uses the **first format it supports**. Order matters — put your preferred format first.

The fallback text between the tags is shown only if the browser supports neither format.

---

## Connecting to `canPlayType()`

From the previous lesson, `canPlayType()` uses MIME types directly:

```js
const audio = new Audio();

audio.canPlayType("audio/mpeg");  // MP3
audio.canPlayType("audio/ogg");   // OGG
audio.canPlayType("audio/mp4");   // MP4 audio
```

Using `<source>` elements is the declarative HTML version of the same problem — both approaches handle the reality that browser support varies.
