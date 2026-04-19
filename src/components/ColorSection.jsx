import ColorSwatch from './ColorSwatch';
import PalettePresets from './PalettePresets';

export default function ColorSection({ flower, onUpdateFlower, onApplyPreset }) {
  const [petalA, petalB] = flower.petalPalette;
  const isTwoTone = petalA !== petalB;

  function updatePalette(index, value) {
    const next = [...flower.petalPalette];
    next[index] = value;
    if (!isTwoTone && index === 0) {
      next[1] = value;
    }
    onUpdateFlower('petalPalette', next);
  }

  function toggleTwoTone(event) {
    const enabled = event.target.checked;
    if (enabled) {
      onUpdateFlower('petalPalette', [petalA, petalB === petalA ? '#ffb703' : petalB]);
    } else {
      onUpdateFlower('petalPalette', [petalA, petalA]);
    }
  }

  return (
    <div className="color-section">
      <div className="color-section-heading">
        <strong>Colors</strong>
        <small>Pick a palette or tweak each part</small>
      </div>

      <PalettePresets flower={flower} onApplyPreset={onApplyPreset} />

      <fieldset className="color-group">
        <legend>
          Flower
          <label className="color-group-toggle">
            <input type="checkbox" checked={isTwoTone} onChange={toggleTwoTone} />
            Two-tone petals
          </label>
        </legend>
        <div className="color-group-swatches">
          <ColorSwatch
            label={isTwoTone ? 'Petal A' : 'Petals'}
            value={petalA}
            onChange={(value) => updatePalette(0, value)}
          />
          {isTwoTone ? (
            <ColorSwatch
              label="Petal B"
              value={petalB}
              onChange={(value) => updatePalette(1, value)}
            />
          ) : null}
          <ColorSwatch
            label="Center"
            value={flower.centerColor}
            onChange={(value) => onUpdateFlower('centerColor', value)}
          />
        </div>
      </fieldset>

      <fieldset className="color-group">
        <legend>Stem &amp; leaves</legend>
        <div className="color-group-swatches">
          <ColorSwatch
            label="Stem"
            value={flower.stemColor}
            onChange={(value) => onUpdateFlower('stemColor', value)}
          />
          <ColorSwatch
            label="Leaves"
            value={flower.leafColor}
            onChange={(value) => onUpdateFlower('leafColor', value)}
          />
        </div>
      </fieldset>

      <fieldset className="color-group">
        <legend>Backdrop</legend>
        <div className="color-group-swatches backdrop-swatches">
          <ColorSwatch
            label="Top"
            value={flower.backgroundColors[0]}
            onChange={(value) =>
              onUpdateFlower('backgroundColors', [value, flower.backgroundColors[1]])
            }
          />
          <ColorSwatch
            label="Bottom"
            value={flower.backgroundColors[1]}
            onChange={(value) =>
              onUpdateFlower('backgroundColors', [flower.backgroundColors[0], value])
            }
          />
          <span
            className="backdrop-preview"
            aria-hidden="true"
            style={{
              background: `linear-gradient(180deg, ${flower.backgroundColors[0]}, ${flower.backgroundColors[1]})`,
            }}
          />
        </div>
      </fieldset>
    </div>
  );
}
