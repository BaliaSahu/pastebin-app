import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPaste } from "../utils/api";

function ViewPaste() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPaste() {
      try {
        const res = await getPaste(id);
        setContent(res.data.content);
      } catch (err) {
        setError("Paste not found or expired");
      }
    }

    fetchPaste();
  }, [id]);

  if (error)
    return (
      <h2 >
        404 - Paste unavailable
      </h2>
    );

  if (!content)
    return (
      <h3 >
        Loading...
      </h3>
    );

  return (
    <div

    >
      <div

      >
        <h2

        >
          Paste Content
        </h2>

        <pre

        >
          {content.content}
        </pre>

        <p >
          <strong>Remaining Views:</strong> {content.remainingViews}
        </p>

        <p >
          <strong>Expires At:</strong> {content.expiresAt}
        </p>
      </div>
    </div>
  );
}

export default ViewPaste;
