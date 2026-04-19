import { STEM_OPTIONS } from '../constants/flower';
import LabeledControl from './LabeledControl';

export default function FlowerEditor({ flower, onUpdateFlower }) {
  return (
    <form className="editor-card" onSubmit={(event) => event.preventDefault()}>
      <div className="editor-heading">
        <h2>Flower editor</h2>
        <p>Tune the bloom, then send the generated link.</p>
      </div>

      <LabeledControl label="Message" hint="Shown below the flower">
        <textarea
          rows="4"
          maxLength="180"
          value={flower.message}
          onChange={(event) => onUpdateFlower('message', event.target.value)}
        />
      </LabeledControl>

      <LabeledControl label="Petal count" hint={`${flower.petals} petals`}>
        <input
          type="range"
          min="4"
          max="18"
          value={flower.petals}
          onChange={(event) => onUpdateFlower('petals', Number(event.target.value))}
        />
      </LabeledControl>

      <LabeledControl label="Bloom size" hint={`${flower.size}px`}>
        <input
          type="range"
          min="120"
          max="240"
          step="5"
          value={flower.size}
          onChange={(event) => onUpdateFlower('size', Number(event.target.value))}
        />
      </LabeledControl>

      <div className="swatch-grid">
        <LabeledControl label="Petal color A" hint="Primary petals">
          <input
            type="color"
            value={flower.petalPalette[0]}
            onChange={(event) =>
              onUpdateFlower('petalPalette', [event.target.value, flower.petalPalette[1]])
            }
          />
        </LabeledControl>

        <LabeledControl label="Petal color B" hint="Alternating petals">
          <input
            type="color"
            value={flower.petalPalette[1]}
            onChange={(event) =>
              onUpdateFlower('petalPalette', [flower.petalPalette[0], event.target.value])
            }
          />
        </LabeledControl>

        <LabeledControl label="Center" hint="Flower core">
          <input
            type="color"
            value={flower.centerColor}
            onChange={(event) => onUpdateFlower('centerColor', event.target.value)}
          />
        </LabeledControl>

        <LabeledControl label="Stem" hint="Stem color">
          <input
            type="color"
            value={flower.stemColor}
            onChange={(event) => onUpdateFlower('stemColor', event.target.value)}
          />
        </LabeledControl>

        <LabeledControl label="Leaves" hint="Leaf color">
          <input
            type="color"
            value={flower.leafColor}
            onChange={(event) => onUpdateFlower('leafColor', event.target.value)}
          />
        </LabeledControl>
      </div>

      <LabeledControl label="Stem style" hint="Choose the flower silhouette">
        <select
          value={flower.stem}
          onChange={(event) => onUpdateFlower('stem', event.target.value)}
        >
          {STEM_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </LabeledControl>
    </form>
  );
}
