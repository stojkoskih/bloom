export default function LabeledControl({ label, hint, action, children }) {
  return (
    <label className="control">
      <span className="control-copy">
        <span className="control-copy-text">
          <strong>{label}</strong>
          <small>{hint}</small>
        </span>
        {action ? <span className="control-action">{action}</span> : null}
      </span>
      {children}
    </label>
  );
}
