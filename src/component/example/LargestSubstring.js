import React, { useState } from "react";

const LargestSubstring = () => {
  const [inputStr, setInputStr] = useState("abcgfdhjbbd");
  const [largestSubstring, setLargestSubstring] = useState("");
  const [alphabetCount, setAlphabetCount] = useState(0);

  // Function to find the largest unique substring
  const findLargestUniqueSubstring = (str) => {
    let maxSubstring = "";
    let currentSubstring = "";
    const seenChars = new Set();

    for (let char of str) {
      if (!seenChars.has(char)) {
        seenChars.add(char);
        currentSubstring += char;
      }
       else {
        if (currentSubstring.length > maxSubstring.length) {
          maxSubstring = currentSubstring;
        }
        // Restart the substring and set from the repeated character
        const startIndex = currentSubstring.indexOf(char) + 1;
        currentSubstring = currentSubstring.slice(startIndex) + char;
        seenChars.clear();
        for (let c of currentSubstring) {
          seenChars.add(c);
        }
      }
    }

    // Final comparison for the last substring
    if (currentSubstring.length > maxSubstring.length) {
      maxSubstring = currentSubstring;
    }

    return maxSubstring;
  };

  const handleProcess = () => {
    const uniqueSubstring = findLargestUniqueSubstring(inputStr);
    setLargestSubstring(uniqueSubstring);
    setAlphabetCount(uniqueSubstring.length);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Find Largest Unique Substring</h2>
      <div>
        <label>
          Input String:{" "}
          <input
            type="text"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleProcess}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Process
      </button>
      <div style={{ marginTop: "20px" }}>
        <h3>Results:</h3>
        <p>
          <strong>Largest Unique Substring:</strong> {largestSubstring}
        </p>
        <p>
          <strong>Number of Alphabets:</strong> {alphabetCount}
        </p>
      </div>
    </div>
  );
};

export default LargestSubstring;
