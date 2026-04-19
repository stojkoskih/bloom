export default function LabeledControl({ label, hint, children }) {
  return (
    <label className="control">
      <span className="control-copy">
        <strong>{label}</strong>
        <small>{hint}</small>
      </span>
      {children}
    </label>
  );
}
