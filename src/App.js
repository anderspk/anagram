import React, { useState, useEffect } from "react";
import { findAnagrams } from "./utils/anagramUtils";
import ErrorMessage from "./components/errorMessage/errorMessage";
import "./App.scss";
import Anagram from "./components/anagram/anagram";

function App() {
  const [wordList, setWordList] = useState([]);
  const [anagrams, setAnagrams] = useState({});
  const [displayAnagrams, setDisplayAnagrams] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrdbokData = async () => {
      try {
        const response = await fetch("./data/ordbok-utf8.txt");
        const rawData = await response.text();
        const wordList = rawData
          .replace(/(\r\n|\n|\r)/gm, " ")
          .split(" ")
          .filter((word) => !!word);

        setWordList(wordList);
        const wordsWithAnagrams = findAnagrams(wordList);
        setAnagrams(wordsWithAnagrams);
      } catch (error) {
        setError("Det skjedde en feil under henting av ordbok");
      }
    };

    fetchOrdbokData();
  }, []);

  return (
    <div className="app">
      <ErrorMessage>{error}</ErrorMessage>
      <button
        className={displayAnagrams ? "display-anagrams" : ""}
        onClick={() => setDisplayAnagrams(!displayAnagrams)}
      >
        {displayAnagrams ? "Vis Ordbok" : "Vis Anagrammer"}
      </button>
      <ul>
        {displayAnagrams
          ? wordList.map((word) =>
              anagrams[word] ? (
                <li key={word}>
                  {word}
                  <Anagram anagrams={anagrams[word]} />
                </li>
              ) : null
            )
          : wordList.map((word) => <li key={word}>{word}</li>)}
      </ul>
    </div>
  );
}

export default App;
