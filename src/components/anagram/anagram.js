import React from "react";
import "./anagram.scss";

const Anagram = ({ anagrams }) => (
  <span className="anagram">{anagrams.join(", ")}</span>
);

export default Anagram;
