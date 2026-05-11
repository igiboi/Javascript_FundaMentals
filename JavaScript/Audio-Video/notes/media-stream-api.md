# Media Capture and Streams API (MediaStream API)

## What It Does

The MediaStream API lets you capture live audio and video from a user's device (microphone, webcam). Instead of playing back a file, you're working with a live stream from hardware.

> Note: This API does **not** capture the screen. That's a separate API covered in the next lesson.

---

## Getting a Stream: `getUserMedia()`

You don't instantiate `MediaStream` directly — you request it through the browser via:

```js
navigator.mediaDevices.getUserMedia(constraints)
```

This method returns a **Promise** that resolves to a `MediaStream` object. The browser will automatically prompt the user for permission to access their hardware.

---

## The Constraints Object

`getUserMedia()` accepts a single `constraints` object with `audio` and `video` properties.

| Value | Meaning |
|---|---|
| `false` | Don't request this stream |
| `true` | Request this stream with no specific requirements |
| `object` | Request this stream with specific requirements |

```js
// Audio only
navigator.mediaDevices.getUserMedia({ audio: true, video: false });

// Video only, no constraints
navigator.mediaDevices.getUserMedia({ audio: false, video: true });

// Video with resolution constraints
navigator.mediaDevices.getUserMedia({
  audio: true,
  video: {
    width:  { min: 1280, ideal: 1920, max: 3840 },
    height: { min: 720,  ideal: 1080, max: 2160 }
  }
});
```

The `ideal` value is what you'd prefer — the browser provides the closest resolution it can. `min` and `max` define the acceptable range.

---

## Using the Stream

Since `getUserMedia()` returns a Promise, you handle it with `async/await` (or `.then()`).

### Render webcam feed to a `<video>` element

```js
const video = document.querySelector("video");

const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream; // assign the live stream as the video source
await video.play();
```

`srcObject` is used here instead of `src` because you're assigning a live `MediaStream` object, not a file URL.

---

## Error Handling

The Promise rejects if the user denies permission or the hardware is unavailable — always handle it:

```js
try {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  await video.play();
} catch (err) {
  console.error("Could not access camera:", err.message);
}
```

---

## Stopping the Stream

When you're done, release the hardware by stopping each track on the stream:

```js
stream.getTracks().forEach(track => track.stop());
```

This turns off the camera/microphone indicator in the browser. Failing to do this leaves the device active even after you're done with it.

---

## Forward-Looking Note

You'll learn about Promises and `async/await` in a future lesson. For now, understand that `getUserMedia()` is **asynchronous** — it doesn't return the stream immediately. It has to wait for the user to grant permission and the browser to set up the connection.
