import FlowerPreview from './FlowerPreview';

export default function ViewerPage({ flower, onOpenEditor }) {
  return (
    <main className="viewer-shell">
      <section className="viewer-card">
        <p className="eyebrow">Bloom note</p>
        <FlowerPreview flower={flower} />
        <button type="button" className="secondary-action" onClick={onOpenEditor}>
          Edit flower
        </button>
      </section>
    </main>
  );
}
