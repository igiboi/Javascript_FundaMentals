const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  // Step 1: Access the specific album
  const album = records[id];

  // Step 2: Access the specific property on that album
  console.log(album[prop]);

  if (value === "") {
    delete album[prop];
  }

  if (prop != "tracks" && value != "") {
    album[prop] = value;
  } else if (prop === "tracks" && value != "") {
    // IF the album does NOT have a tracks property
    if (!album.hasOwnProperty("tracks")) {
      album[prop] = [];

      album[prop].push(value);
    } else {
      album[prop].push(value);
    }
  }

  // Step 3: Return records
  return records;
}

// Test it
console.log(updateRecords(recordCollection, 2468, "artist", ""));
