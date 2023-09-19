import "./styles.css";
import { useState } from "react";

export default function App() {
  const quotesArray = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      text:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    }
  ];

  const [quote, setQuote] = useState(quotesArray[0].text);
  const [author, setAuthor] = useState(quotesArray[0].author);

  const getQuote = () => {
    const quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
    setQuote(quote.text);
    setAuthor(quote.author);
  };

  return (
    <div className="App">
      <h1>{quote}</h1>
      <h3>{author}</h3>
      <button onClick={getQuote}>Generate random quote</button>
    </div>
  );
}
