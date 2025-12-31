import React, { useState } from "react";
import { healthCheck } from "../utils/api";

const HealthCheck = () => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const checkHealth = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await healthCheck(); 
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            setStatus(data.ok);
        } catch (err) {
            setError(err.message);
            setStatus(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f7f7f7",
            }}
        >
            <h1 style={{ marginBottom: "20px", color: "#333" }}>Health Check</h1>
            <button
                onClick={checkHealth}
                style={{
                    padding: "5px 5px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "5px",
                }}
            >
                Check Server Status
            </button>

            {loading && <p style={{ color: "#555" }}>Checking...</p>}

            {status !== null && (
                <p
                    style={{
                        color: status ? "green" : "red",
                        fontWeight: "bold",
                        fontSize: "18px",
                    }}
                >
                    {status ? "Server is healthy ✅" : "Server is unhealthy ❌"}
                </p>

            )}
            {status !== null && (
                <p
                style={{
                        color: status ? "green" : "red",
                        fontWeight: "bold",
                        fontSize: "18px",
                    }}
                >
                    ok : {status ? "true" : "false"}
                </p>
            )}
            {error && (
                <p style={{ color: "red", fontSize: "16px" }}>
                    Error: {error}
                </p>
            )}
        </div>
    );
};

export default HealthCheck;
