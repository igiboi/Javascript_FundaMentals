# HTMLMediaElement API

## What It Is

`HTMLMediaElement` is the interface that both `<audio>` and `<video>` elements implement. It extends `HTMLElement`, so you get all the standard DOM properties plus media-specific methods and events.

When you use `new Audio()` or grab a `<video>` from the DOM, you're working with an `HTMLMediaElement`.

---

## Methods

### Playback (covered in Audio Constructor lesson)

```js
media.play();   // begins playback, returns a Promise
media.pause();  // pauses and preserves current position
```

### `fastSeek(time)`
Moves the playback position to a specific time in seconds. Less precise than setting `currentTime` directly, but faster — useful for scrubbing.

```js
media.fastSeek(30); // jump to 30 seconds
```

### `addTextTrack(kind, label, language)`
Attaches a text track to the media element — most commonly used for subtitles or captions.

```js
const track = video.addTextTrack("subtitles", "English", "en");
```

| `kind` values | Purpose |
|---|---|
| `"subtitles"` | Translated dialogue |
| `"captions"` | Dialogue + sound descriptions |
| `"descriptions"` | Audio descriptions for visually impaired |
| `"chapters"` | Navigation markers |
| `"metadata"` | Not displayed, used by scripts |

---

## Events

These events are specific to media elements — standard DOM elements don't have them.

| Event | Fires when... |
|---|---|
| `play` | Playback starts |
| `pause` | Playback is paused |
| `ended` | The media reaches the end |
| `waiting` | Playback pauses automatically due to buffering |
| `canplay` | Enough data is loaded to start playing (may pause to buffer) |
| `canplaythrough` | Enough data is loaded to play the whole track without buffering |

```js
const video = document.querySelector("video");

video.addEventListener("ended", () => {
  console.log("Video finished");
});

video.addEventListener("waiting", () => {
  console.log("Buffering...");
});

video.addEventListener("canplaythrough", () => {
  video.play();
});
```

---

## Key Properties (Quick Reference)

| Property | Type | Description |
|---|---|---|
| `currentTime` | number | Current position in seconds — readable and writable |
| `duration` | number | Total length in seconds (read-only) |
| `paused` | boolean | `true` if currently paused |
| `ended` | boolean | `true` if playback has finished |
| `volume` | number | `0.0` to `1.0` |
| `muted` | boolean | Whether audio is muted |
| `playbackRate` | number | Speed multiplier — `1` is normal, `2` is 2x speed |
| `readyState` | number | How much data is loaded (0–4) |

---

## Inheritance Chain

```
HTMLElement
  └── HTMLMediaElement
        ├── HTMLAudioElement  (<audio>, new Audio())
        └── HTMLVideoElement  (<video>)
```

Methods like `play()`, `pause()`, and the events above are defined on `HTMLMediaElement` and inherited by both audio and video — which is why the same API works on both.
