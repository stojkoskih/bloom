import { FLOWER_TYPE_OPTIONS, STEM_OPTIONS } from '../constants/flower';
import FlowerTypeThumb from './FlowerTypeThumb';
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

      <LabeledControl label="Flower type" hint="Pick a silhouette">
        <div className="flower-type-grid" role="radiogroup" aria-label="Flower type">
          {FLOWER_TYPE_OPTIONS.map((option) => {
            const isSelected = flower.flowerType === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`flower-type-swatch${isSelected ? ' is-selected' : ''}`}
                onClick={() => onUpdateFlower('flowerType', option.value)}
              >
                <FlowerTypeThumb flowerType={option.value} />
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
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

        <LabeledControl label="Background A" hint="Gradient start">
          <input
            type="color"
            value={flower.backgroundColors[0]}
            onChange={(event) =>
              onUpdateFlower('backgroundColors', [
                event.target.value,
                flower.backgroundColors[1],
              ])
            }
          />
        </LabeledControl>

        <LabeledControl label="Background B" hint="Gradient end">
          <input
            type="color"
            value={flower.backgroundColors[1]}
            onChange={(event) =>
              onUpdateFlower('backgroundColors', [
                flower.backgroundColors[0],
                event.target.value,
              ])
            }
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
