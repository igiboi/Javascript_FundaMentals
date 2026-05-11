# Audio Constructor

## What It Is

The `Audio` constructor is a special function called with the `new` keyword that returns an `HTMLAudioElement`. It gives you programmatic control over audio playback without needing to write an `<audio>` tag in your HTML.

```js
const audio = new Audio("sound.mp3");
```

This is equivalent to:

```js
const audio = document.createElement("audio");
audio.src = "sound.mp3";
```

---

## Syntax

```js
const audio = new Audio(url); // url is optional
```

You can also set the source dynamically after creation:

```js
const audio = new Audio();
audio.src = "sound.mp3";
```

---

## Common Methods

### `play()`
Begins audio playback. Returns a Promise.

```js
audio.play();
```

### `pause()`
Pauses playback and preserves the current position in the track. Calling `play()` after this resumes from where it left off.

```js
audio.pause();
```

### `canPlayType(type)`
Checks whether the browser is likely to support a given audio format. Returns `""`, `"maybe"`, or `"probably"` — not a boolean.

```js
audio.canPlayType("audio/mp3"); // "probably", "maybe", or ""
```

An empty string is falsy (won't play). `"maybe"` and `"probably"` are truthy (likely can play).

---

## Key Properties

| Property | Description |
|---|---|
| `src` | The URL of the audio file |
| `currentTime` | Current playback position in seconds — readable and writable |
| `duration` | Total length of the track in seconds (read-only) |
| `volume` | Playback volume from `0.0` to `1.0` |
| `paused` | Boolean — `true` if the audio is currently paused |
| `loop` | Boolean — set to `true` to loop the audio |

---

## The "Stop" Pattern

There is no `.stop()` method. To stop and reset the track to the beginning, combine `pause()` with resetting `currentTime`:

```js
audio.pause();
audio.currentTime = 0;
```

---

## Practical Example

```js
const audio = new Audio("alert.mp3");

function playSound() {
  audio.currentTime = 0; // rewind before each play so it always starts fresh
  audio.play();
}

function stopSound() {
  audio.pause();
  audio.currentTime = 0;
}
```

---

## Forward-Looking Note

In React, you would store the `Audio` instance in a `useRef` so it persists across re-renders without triggering a component update. The same play/pause/reset logic applies — only the storage mechanism changes.

```js
const audioRef = useRef(new Audio("sound.mp3"));

audioRef.current.play();
```
