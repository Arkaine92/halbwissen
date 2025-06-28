// Einfache HTML-Vorschau für jede Episode
CMS.registerPreviewTemplate("episodes", ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  // Falls die Felder leer sind, verhindern wir Fehler
  const title = data.title || "(kein Titel)";
  const short = data.short || "";
  const long = data.long || "";

  return `
    <div style="font-family: sans-serif; padding: 1rem;">
      <h1 style="font-size: 1.5rem; color: #333;">${title}</h1>
      <p style="font-weight: bold; color: #666;">${short}</p>
      <div style="margin-top: 1rem;">${long.replace(/\n/g, "<br>")}</div>
    </div>
  `;
});
