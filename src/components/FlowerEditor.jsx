import {
  FLOWER_TYPE_OPTIONS,
  POSITIVE_MESSAGES,
  STEM_OPTIONS,
} from "../constants/flower";
import ColorSection from "./ColorSection";
import DiceButton from "./DiceButton";
import FlowerTypeThumb from "./FlowerTypeThumb";
import LabeledControl from "./LabeledControl";
import StemThumb from "./StemThumb";

function pickRandomMessage(current) {
  if (POSITIVE_MESSAGES.length <= 1) {
    return POSITIVE_MESSAGES[0] ?? "";
  }

  let next = current;
  while (next === current) {
    next =
      POSITIVE_MESSAGES[Math.floor(Math.random() * POSITIVE_MESSAGES.length)];
  }
  return next;
}

export default function FlowerEditor({
  flower,
  onUpdateFlower,
  onApplyPreset,
}) {
  function rollMessage() {
    onUpdateFlower("message", pickRandomMessage(flower.message));
  }

  return (
    <form className="editor-card" onSubmit={(event) => event.preventDefault()}>
      <div className="editor-heading">
        <h2>Flower editor</h2>
        <p>Tune the flower, then send the generated link.</p>
      </div>

      <LabeledControl
        label="Message"
        hint="Shown below the flower"
        action={
          <DiceButton onRoll={rollMessage} title="Roll a random message" />
        }
      >
        <textarea
          rows="4"
          maxLength="180"
          value={flower.message}
          onChange={(event) => onUpdateFlower("message", event.target.value)}
        />
      </LabeledControl>

      <LabeledControl label="Flower type" hint="Pick a silhouette">
        <div
          className="flower-type-grid"
          role="radiogroup"
          aria-label="Flower type"
        >
          {FLOWER_TYPE_OPTIONS.map((option) => {
            const isSelected = flower.flowerType === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`flower-type-swatch${isSelected ? " is-selected" : ""}`}
                onClick={() => onUpdateFlower("flowerType", option.value)}
              >
                <FlowerTypeThumb flowerType={option.value} />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </LabeledControl>

      <ColorSection
        flower={flower}
        onUpdateFlower={onUpdateFlower}
        onApplyPreset={onApplyPreset}
      />

      <LabeledControl label="Stem style" hint="Pick a silhouette">
        <div className="stem-grid" role="radiogroup" aria-label="Stem style">
          {STEM_OPTIONS.map((option) => {
            const isSelected = flower.stem === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`stem-swatch${isSelected ? " is-selected" : ""}`}
                onClick={() => onUpdateFlower("stem", option.value)}
              >
                <StemThumb stem={option.value} />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      </LabeledControl>
    </form>
  );
}
