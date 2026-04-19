import { useEffect, useMemo, useState } from "react";
import FlowerEditor from "./components/FlowerEditor";
import FlowerPreview from "./components/FlowerPreview";
import ViewerPage from "./components/ViewerPage";
import {
  decodeFlowerState,
  encodeFlowerState,
  normalizeFlower,
} from "./utils/flowerState";

export default function App() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const initialFlower = useMemo(() => {
    return decodeFlowerState(params.get("d"));
  }, [params]);
  const initialEditorOpen = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return !params.has("d") || params.get("edit") === "1";
  }, []);
  const [flower, setFlower] = useState(initialFlower);
  const [isEditorOpen, setIsEditorOpen] = useState(initialEditorOpen);
  const shareUrl = useMemo(() => {
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("d", encodeFlowerState(flower));
    return url.toString();
  }, [flower]);

  useEffect(() => {
    const url = new URL(shareUrl);

    if (isEditorOpen) {
      url.searchParams.set("edit", "1");
    }

    window.history.replaceState({}, "", url.toString());
  }, [isEditorOpen, shareUrl]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      window.prompt("Copy your share link:", shareUrl);
    }
  }

  function updateFlower(key, value) {
    setFlower((current) => normalizeFlower({ ...current, [key]: value }));
  }

  function applyPreset(colors) {
    setFlower((current) => normalizeFlower({ ...current, ...colors }));
  }

  return (
    <>
      <ViewerPage flower={flower} onOpenEditor={() => setIsEditorOpen(true)} />

      {isEditorOpen ? (
        <div
          className="editor-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Flower editor"
        >
          <div
            className="editor-overlay"
            onClick={() => setIsEditorOpen(false)}
          />
          <section className="editor-drawer">
            <div className="editor-toolbar">
              <div>
                <p className="eyebrow">Flower editor</p>
                <h2>Adjust the flowers and copy the link.</h2>
              </div>

              <button
                type="button"
                className="ghost-button"
                onClick={() => setIsEditorOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="editor-layout">
              <FlowerPreview flower={flower} />
              <FlowerEditor
                flower={flower}
                onUpdateFlower={updateFlower}
                onApplyPreset={applyPreset}
              />
            </div>

            <div className="share-panel modal-share-panel">
              <span>Shareable link</span>
              <code>{shareUrl}</code>
              <button type="button" onClick={copyLink}>
                Copy link
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
