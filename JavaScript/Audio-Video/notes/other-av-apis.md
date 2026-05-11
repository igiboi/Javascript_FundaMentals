# Other Audio & Video APIs

## Screen Capture API

Allows you to record a user's screen (not their camera — that's `getUserMedia()`).

```js
const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
video.srcObject = stream;
```

`getDisplayMedia()` works the same way as `getUserMedia()` — returns a Promise that resolves to a `MediaStream`. The browser prompts the user to choose what to share (a tab, a window, or the full screen).

---

## MediaStream Recording API

Works alongside the MediaStream API to let you **record** a stream and save it. Rather than just displaying a live feed, you capture it as a file.

Key class: `MediaRecorder`

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
const recorder = new MediaRecorder(stream);
const chunks = [];

recorder.addEventListener("dataavailable", (e) => {
  chunks.push(e.data); // e.data is a Blob
});

recorder.addEventListener("stop", () => {
  const blob = new Blob(chunks, { type: "video/webm" });
  const url = URL.createObjectURL(blob);
  // url can now be used as a download link or assigned to video.src
});

recorder.start();
// later...
recorder.stop();
```

The `dataavailable` event fires with a `Blob` payload — a chunk of binary data representing that portion of the recording. You collect the chunks and combine them into a final file when recording stops.

---

## Media Source Extensions API (MSE)

The lower-level API that powers the `srcObject` property and enables things like adaptive streaming (e.g. YouTube adjusting quality based on your connection). You rarely interact with it directly, but it's what makes passing a live `MediaStream` to a `<video>` element possible under the hood.

Key class: `MediaSource` — which you've already seen in the `isTypeSupported()` static method from the codecs lesson.

---

## Web Audio API

The foundational API for all audio processing on the web. Goes well beyond just playing files — it lets you generate, manipulate, and analyze sound programmatically.

Key objects:

| Object | Purpose |
|---|---|
| `AudioContext` | The central hub — all audio processing runs through this |
| `AudioBuffer` | Holds raw decoded audio data in memory |
| `AudioNode` | Building block for audio graphs (sources, effects, destinations) |

```js
const context = new AudioContext();
const source = context.createBufferSource();
// load, decode, connect, and play audio through the context
```

The Web Audio API is a deep topic on its own — most developers interact with it through higher-level libraries rather than directly.

---

## Summary: The Full Picture

| API | What It Does |
|---|---|
| `HTMLMediaElement` | Play/pause/seek audio and video from files |
| `MediaStream API` | Capture live audio/video from a device (`getUserMedia`) |
| `Screen Capture API` | Capture the user's screen (`getDisplayMedia`) |
| `MediaStream Recording API` | Record a `MediaStream` to a file (`MediaRecorder`) |
| `Media Source Extensions` | Low-level plumbing enabling `srcObject` and adaptive streaming |
| `Web Audio API` | Full programmatic audio processing and generation |
