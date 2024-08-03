import React, { useState } from "react";

export default function QuoteGenerator() {
  const [choice, setChoice] = useState("");
  const [quoteData, setQuoteData] = useState({});

  // Allow to Handle Choice
  const handleChoice = (e) => {
    setChoice(e.target.value);
  };

  // When a request is for a single Quote
  const handleGetQuote = () => {
    if (!choice.trim()) {
      alert("Please enter a Quote Category");
    } else {
      const url = `https://api.api-ninjas.com/v1/quotes?category=${choice}`;
      fetch(url, {
        headers: { "X-Api-key": "wA8YR4uFnn6OznQcv/7t6A==Sk7YoAYBu4AvGN2O" },
      })
        .then((res) => res.json())
        .then((data) => setQuoteData(data[0] || {}));
    }
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#ecf0f1" // Optional: background color for the whole page
    }}>
      <div style={{
        backgroundColor: "#d7dbdd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "90%",
        maxWidth: "600px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h1 style={{
          marginBottom: "20px",
          fontSize: "2rem",
          textAlign: "center"
        }}>
          Get Quote
        </h1>
        <div className="text-center">
          <p style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
            marginBottom: "20px",
            textAlign: "center",
            overflowWrap: "break-word", // Handle long text within the box
            margin: "0 auto"
          }}>
            {quoteData.quote && (
              <span style={{ fontWeight: "bold", fontSize: "2rem" }}>" </span>
            )}
            {quoteData.quote}
            {quoteData.quote && (
              <span style={{ fontWeight: "bold", fontSize: "2rem" }}> "</span>
            )}
          </p>
          <p style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
            fontWeight: "bold",
            textAlign: "right",
            marginRight: "10px"
          }}>
            {quoteData.author && <span>-- </span>}
            {quoteData.author}
          </p>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px"
        }}>
          <input
            type="text"
            placeholder="Enter quote"
            value={choice}
            onChange={handleChoice}
            style={{
              borderRadius: "15px",
              backgroundColor: "olivedrab",
              color: "black",
              padding: "10px",
              border: "none",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "300px",
              marginBottom: "10px"
            }}
          />
          <button
            style={{
              borderRadius: '15px',
              color: "black",
              backgroundColor: "olivedrab",
              padding: "10px 20px",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer"
            }}
            onClick={handleGetQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
