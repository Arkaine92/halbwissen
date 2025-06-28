import { registerPreviewTemplate } from "decap-cms-app";
import React from "react";

/**
 * Vorschau-Komponente für Podcast-Folgen
 * Diese zeigt jede Episode als Block mit Titel, Kurz- und Langbeschreibung
 */
const EpisodePreview = ({ entry }) => {
  // Holt das List-Array aus den Daten
  const episodes = entry.getIn(["data", "episodes"]) || [];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Vorschau – Podcast-Folgen</h2>
      {episodes.map((episode, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ddd",
            borderRadius: "6px",
            padding: "1rem",
            marginBottom: "1rem",
            background: "#f9f9f9"
          }}
        >
          <h3 style={{ marginTop: 0 }}>{episode.get("title")}</h3>
          <p><strong>Kurzbeschreibung:</strong> {episode.get("short")}</p>
          <p>{episode.get("long")}</p>
        </div>
      ))}
    </div>
  );
};

// Registriere die Preview für die Collection
registerPreviewTemplate("episodes", EpisodePreview);
