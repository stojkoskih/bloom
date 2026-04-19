import { COLOR_PRESETS } from '../constants/flower';

function isPaletteActive(flower, preset) {
  return (
    flower.petalPalette[0] === preset.colors.petalPalette[0] &&
    flower.petalPalette[1] === preset.colors.petalPalette[1] &&
    flower.centerColor === preset.colors.centerColor &&
    flower.stemColor === preset.colors.stemColor &&
    flower.leafColor === preset.colors.leafColor &&
    flower.backgroundColors[0] === preset.colors.backgroundColors[0] &&
    flower.backgroundColors[1] === preset.colors.backgroundColors[1]
  );
}

export default function PalettePresets({ flower, onApplyPreset }) {
  return (
    <div className="palette-presets" role="radiogroup" aria-label="Color palette presets">
      {COLOR_PRESETS.map((preset) => {
        const isActive = isPaletteActive(flower, preset);
        const swatches = [
          preset.colors.petalPalette[0],
          preset.colors.petalPalette[1],
          preset.colors.centerColor,
          preset.colors.leafColor,
          preset.colors.backgroundColors[0],
        ];

        return (
          <button
            key={preset.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            className={`palette-preset${isActive ? ' is-selected' : ''}`}
            onClick={() => onApplyPreset(preset.colors)}
          >
            <span className="palette-preset-swatches" aria-hidden="true">
              {swatches.map((color, index) => (
                <span
                  key={`${preset.id}-${index}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </span>
            <span className="palette-preset-label">{preset.label}</span>
          </button>
        );
      })}
    </div>
  );
}
