export const findAnagrams = (wordList) => {
  const anagrams = new Map();

  wordList.forEach((word) => {
    const sortedLetters = word.split("").sort().join("");

    if (!anagrams.has(sortedLetters)) {
      anagrams.set(sortedLetters, []);
    }
    anagrams.get(sortedLetters).push(word);
  });

  const wordsWithAnagrams = {};
  anagrams.forEach((anagramCollection, key) => {
    if (anagramCollection.length > 1) {
      anagramCollection.forEach(
        (word) =>
          (wordsWithAnagrams[word] = anagramCollection.filter(
            (anagram) => anagram !== word
          ))
      );
    }
  });

  return wordsWithAnagrams;
};
