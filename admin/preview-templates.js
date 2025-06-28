import React from "react";
import CMS from "decap-cms-app";

// Einfache Preview-Komponente
const EpisodePreview = ({ entry }) => {
  const data = entry.getIn(["data", "episodes"]) || [];
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Vorschau der Podcast-Folgen</h2>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "2rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
          <h3>{item.get("title")}</h3>
          <p><strong>Kurzbeschreibung:</strong> {item.get("short")}</p>
          <p><strong>Langbeschreibung:</strong> {item.get("long")}</p>
        </div>
      ))}
    </div>
  );
};

// Registrierung der Preview
CMS.registerPreviewTemplate("episodes", EpisodePreview);
