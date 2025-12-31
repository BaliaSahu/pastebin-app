import { useState } from "react";
import { createPaste, healthCheck } from "../utils/api";

function CreatePaste() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [id, setId] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    const body = { content };
    if (ttl) body.ttlSeconds = Number(ttl);
    if (views) body.maxViews = Number(views);

    try {
      const res = await createPaste(body);
      setResultUrl(res.data.url);
      setId(res.data.id);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create paste");
    }
  }

  return (
    <div
      style={{
        minHeight: "90vh",
        backgroundColor: "#f5f6f8",
        display: "flex",
        height:"100%",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "500px",
          backgroundColor: "#fff",
          padding: "25px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#333" }}>
          Create Paste
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter your content here..."
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              resize: "vertical",
              fontSize: "14px",
            }}
          />

          <input
            type="number"
            placeholder="TTL (seconds)"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />

          <input
            type="number"
            placeholder="Max Views"
            value={views}
            onChange={(e) => setViews(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Create Paste
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}

        {resultUrl && (
          <p style={{ marginTop: "15px", wordBreak: "break-all" }}>
            <strong>Share link:</strong>{" "}
            <a href={resultUrl} target="_blank" rel="noreferrer">
              {resultUrl}
            </a>
          </p>
        )}

        {id && (
          <p style={{ marginTop: "5px" }}>
            <strong>Paste ID:</strong> {id}
          </p>
        )}
      </div>
    </div>
  );
}

export default CreatePaste;
