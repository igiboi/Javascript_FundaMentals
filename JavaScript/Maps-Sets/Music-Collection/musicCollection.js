const goosebumps = {
  artist: "Travis Scott",
  album: "Rodeo",
  genre: "Hip Hop",
};

const loveSick = {
  artist: "Don Toliver",
  album: "Love Sick",
  genre: "Hip Hop",
};

const butterfly = {
  artist: "Kendrick Lamar",
  album: "To Pimp a Butterfly",
  genre: "Hip Hop",
};

const purple = {
  artist: "Prince",
  album: "Purple Rain",
  genre: "RnB",
};

const thriller = {
  artist: "Michael Jackson",
  album: "Thriller",
  genre: "RnB",
};

/*
Create a Map called collection where each album object is the key and 
the value is an object with { plays: number, liked: boolean }.

Then write these three functions:

1. playAlbum(album) — increments the play count for that album by 1. 
Returns "Now playing: <artist> - <album>".

2. likeAlbum(album) — sets liked to true for that album. Returns 
"<artist> - <album> added to liked.".

3. displayGenres() — returns a Set of unique genres in the collection.

*/

const catalog = new Map();
catalog.set(goosebumps, { plays: 42, liked: true });
catalog.set(loveSick, { plays: 18, liked: true });
catalog.set(butterfly, { plays: 30, liked: false });
catalog.set(purple, { plays: 55, liked: true });
catalog.set(thriller, { plays: 27, liked: false });

function playAlbum(album) {
  if (!catalog.has(album)) return;

  const stats = catalog.get(album);
  stats.plays++;

  return `Now playing: ${album.artist} - ${album.album}`;
}

function likeAlbum(album) {
  if (!catalog.has(album)) return;

  const stats = catalog.get(album);

  if (stats.liked) return;

  stats.liked = true;
  return `${album.artist} - ${album.album} added to liked.`;
  
}

function displayGenres() {
  const genreArray = [];

  catalog.forEach((_, key) => {
    genreArray.push(key.genre);
  });

  return new Set(genreArray);
}

const play = playAlbum(goosebumps);

console.log(play);
console.log(likeAlbum(butterfly));

console.log(displayGenres());

console.log(catalog);