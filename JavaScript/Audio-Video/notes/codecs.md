# Codecs

## What Is a Codec?

A **codec** (encoder/decoder) is an algorithm or software that converts audio and video between analogue and digital formats. When a file is saved, the codec *encodes* it. When it's played back, the codec *decodes* it.

Different codecs have different tradeoffs: compression quality, file size, browser support, licensing, etc.

---

## Codecs in MIME Types

Codecs can be appended to a MIME type using a semicolon and `codecs=`.

```
audio/ogg; codecs=vorbis
```

For multiple codecs, wrap them in quotes and separate with commas:

```
video/webm; codecs="vp8, vorbis"
```

Some codecs have complex identifiers. For example, H.264 in an MP4:

```
video/mp4; codecs="avc1.4d002a"
```

---

## Using Codecs in `<source>` Elements

You can include the codec string in the `type` attribute of a `<source>` element. This gives the browser more precise information to determine which source to use.

```html
<video controls>
  <source src="video.webm" type='video/webm; codecs="vp8, vorbis"' />
  <source src="video.mp4" type='video/mp4; codecs="avc1.4d002a"' />
</video>
```

> Use single quotes on the `type` attribute when the codec value contains double quotes.

---

## `MediaSource.isTypeSupported()`

This static method lets you programmatically check if the current environment supports a specific MIME type and codec, rather than relying on the browser to pick from `<source>` elements.

```js
MediaSource.isTypeSupported("video/webm; codecs=vp8");  // true or false
MediaSource.isTypeSupported("audio/ogg; codecs=vorbis"); // true or false
MediaSource.isTypeSupported("video/mp4; codecs=avc1");   // true or false
```

Returns `true` if the browser is likely to support it, `false` if it can't instantiate a buffer for that type.

### Practical use

```js
const source = MediaSource.isTypeSupported('video/webm; codecs="vp8, vorbis"')
  ? "video.webm"
  : "video.mp4";

const video = document.createElement("video");
video.src = source;
```

---

## Comparison: Three Ways to Handle Format/Codec Support

| Approach | Where | Control Level |
|---|---|---|
| `<source>` elements | HTML | Declarative — browser decides |
| `canPlayType()` | JS on `Audio`/`HTMLMediaElement` | Programmatic — you decide |
| `MediaSource.isTypeSupported()` | JS static method | Programmatic — more precise, checks codec too |

The more granular your codec string, the more accurate the support check — but also the more complex the string.
