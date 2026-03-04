let playlist = ["Intro", "Verse 1", "Chorus", "Verse 2", "Bridge", "Outro"];

// Remove "Bridge" (it's at index 4)
 playlist.splice(4, 1);

console.log(playlist);

let drums = ["kick", "snare", "hi-hat"];

// Add "clap" and "rim" after "snare" (without removing anything)
 drums.splice(2, 0, "clap", "rim");

console.log(drums);

let samples = ["808-bass.wav", "old-snare.wav", "cymbal.wav"];

// Replace "old-snare.wav" with "new-snare.wav"
samples.splice(1, 1, "new-snare.wav");

console.log(samples);

let trackOrder = ["intro", "drop", "outro"];

// The track needs a buildup before the drop!
// Add "buildup" between "intro" and "drop"
trackOrder.splice(1, 0, "buildup");

console.log(trackOrder);


let arrangement = ["intro", "verse", "chorus", "verse", "chorus", "outro"];

// Remove the second "verse" and second "chorus", 
// and replace them with "bridge" and "final-chorus"
// Do it in ONE splice call
arrangement.splice(3, 2, "bridge", "final-chorus");

console.log(arrangement);