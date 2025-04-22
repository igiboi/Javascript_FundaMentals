// Objective:
// Create a Map to count the frequency of words in a given sentence. This is a common real-world scenario for data analysis.

// Instructions:

// Write a function that takes a sentence (a string) as input.
// Split the sentence into words.
// Use a Map to count how many times each word appears.
// Iterate over the Map to print out each word with its count.

function countWords(sentence) {
    // Split the sentence by spaces
    const words = sentence.split(' ');
    const wordCountMap = new Map();

    for (const word of words) {
        // Normalize word to lower-case
        const normalizedWord = word.toLowerCase();
        // Update the count in the map 
        wordCountMap.set(normalizedWord, (wordCountMap.get(normalizedWord) || 0) + 1);
    }

    // Output each word and its frequency 
    for (const [word, count] of wordCountMap) {
        console.log(`${word}: ${count}`);
    }
}

const sampleSentence = 'JavaScript is fun and JavaScript is powerful and fun';
countWords(sampleSentence);
