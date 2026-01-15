let genres = ["hip-hop", "trap", "lo-fi", "drill"];

// Check if "trap" is in the array
const result = genres.includes("trap");
console.log(result); // true

// Check if "techno" is in the array
const isItTechno = genres.includes("techno");
console.log(isItTechno); // false


let effects = ["reverb", "delay", "chorus"];

// If "distortion" is NOT in the effects array, add it

if (!effects.includes("distortion")) {
  effects.splice(0, 0, "distortion");
}
console.log(effects);

let exportFormats = ["mp3", "wav", "flac"];
let userRequest = "aiff";

// Check if userRequest is supported, 
// console.log either "Format supported!" or "Format not available"
if (!exportFormats.includes(userRequest)) {
  console.log("Format not available");
} else {
  console.log("Format supported!");
}

let plugins = ["Auto-Tune", "Melodyne", "Serum", "Omnisphere"];

const hasBothSytnhs = plugins.includes("Serum") && plugins.includes("Massive")

console.log(hasBothSytnhs);
// Check if the array has BOTH "Serum" AND "Massive"
// Store the result in a variable called hasBothSynths