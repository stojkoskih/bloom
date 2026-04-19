export default function HeroSection({ shareUrl, onCopyLink }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Static, shareable, frontend-only</p>
        <h1>Compose a flower note and send it as a link.</h1>
        <p className="intro">
          Every petal, stem, and message lives in the address bar, so anyone
          opening the link sees the exact same bloom.
        </p>
      </div>

      <div className="share-panel">
        <span>Shareable link</span>
        <code>{shareUrl}</code>
        <button type="button" onClick={onCopyLink}>
          Copy link
        </button>
      </div>
    </section>
  );
}
