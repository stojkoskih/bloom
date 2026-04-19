export default function ColorSwatch({ label, value, onChange, id }) {
  const inputId = id || `color-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <label className="color-swatch" htmlFor={inputId} title={label}>
      <span className="color-swatch-chip" style={{ backgroundColor: value }} aria-hidden="true" />
      <span className="color-swatch-label">{label}</span>
      <input
        id={inputId}
        type="color"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
