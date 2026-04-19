function rotated(count, render, keyPrefix) {
  return Array.from({ length: count }).map((_, index) => {
    const angle = (360 / count) * index;
    return (
      <g key={`${keyPrefix}-${index}`} transform={`rotate(${angle})`}>
        {render(index)}
      </g>
    );
  });
}

function paletteAt(palette, index) {
  return palette[index % palette.length];
}

function renderFlowerHead(flowerType, petalPalette, centerColor) {
  const primary = paletteAt(petalPalette, 0);
  const secondary = paletteAt(petalPalette, 1) || primary;

  switch (flowerType) {
    case 'folded-star':
      return (
        <>
          {rotated(
            5,
            (index) => (
              <path
                d="M0 -96C34 -96 44 -66 30 -36C20 -14 8 -6 0 -18C-8 -6 -20 -14 -30 -36C-44 -66 -34 -96 0 -96Z"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'folded',
          )}
          <circle r="10" fill={centerColor} />
        </>
      );

    case 'ruffled-ring':
      return (
        <>
          {rotated(
            14,
            (index) => (
              <circle cx="0" cy="-68" r="22" fill={paletteAt(petalPalette, index)} />
            ),
            'ruffled-outer',
          )}
          <circle r="44" fill={primary} />
          <circle r="18" fill={centerColor} />
        </>
      );

    case 'round-lotus':
      return (
        <>
          {rotated(
            8,
            (index) => (
              <path
                d="M0 -100L18 -46L0 -24L-18 -46Z"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'lotus',
          )}
          <circle r="22" fill={centerColor} />
          <circle r="10" fill="#fff7ed" opacity="0.85" />
        </>
      );

    case 'pinwheel':
      return (
        <>
          {rotated(
            5,
            (index) => (
              <ellipse
                cx="0"
                cy="-62"
                rx="30"
                ry="40"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'pinwheel',
          )}
          <circle r="22" fill={centerColor} />
          <circle r="10" fill="#fff7ed" />
        </>
      );

    case 'sun-daisy':
      return (
        <>
          {rotated(
            18,
            (index) => (
              <ellipse
                cx="0"
                cy="-74"
                rx="9"
                ry="34"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'daisy',
          )}
          <circle r="26" fill={centerColor} />
          <circle r="14" fill="#fff7ed" opacity="0.65" />
        </>
      );

    case 'soft-petal':
      return (
        <>
          {rotated(
            8,
            (index) => (
              <ellipse
                cx="0"
                cy="-58"
                rx="26"
                ry="36"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'soft',
          )}
          <circle r="18" fill={centerColor} />
          <circle r="8" fill="#fff7ed" opacity="0.85" />
        </>
      );

    case 'star-bloom':
      return (
        <>
          {rotated(
            5,
            (index) => (
              <>
                <path
                  d="M0 -100L28 -44L0 -18L-28 -44Z"
                  fill={paletteAt(petalPalette, index)}
                />
                <path
                  d="M0 -90L0 -22"
                  stroke="#fff7ed"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </>
            ),
            'star',
          )}
          <circle r="10" fill={centerColor} />
        </>
      );

    case 'ring-clover':
      return (
        <>
          {rotated(
            5,
            (index) => (
              <path
                d="M0 -14C-22 -46 -46 -54 -46 -78C-46 -96 -24 -104 -8 -88C-4 -84 0 -80 0 -78C0 -80 4 -84 8 -88C24 -104 46 -96 46 -78C46 -54 22 -46 0 -14Z"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'clover',
          )}
          <circle r="14" fill={centerColor} />
        </>
      );

    case 'lily-star':
      return (
        <>
          {rotated(
            6,
            (index) => (
              <path
                d="M0 -100L22 -44L0 -22L-22 -44Z"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'lily',
          )}
          <circle r="12" fill={centerColor} />
        </>
      );

    case 'orchid-loop':
      return (
        <>
          <path
            d="M-44 -84C-44 -30 -52 8 0 30C52 8 44 -30 44 -84C26 -66 -26 -66 -44 -84Z"
            fill={primary}
          />
          <ellipse cx="-54" cy="-52" rx="18" ry="30" fill={secondary} />
          <ellipse cx="54" cy="-52" rx="18" ry="30" fill={secondary} />
          <circle cx="0" cy="-6" r="10" fill={centerColor} />
        </>
      );

    case 'triple-bloom':
      return (
        <>
          {rotated(
            3,
            (index) => (
              <ellipse
                cx="0"
                cy="-50"
                rx="38"
                ry="50"
                fill={paletteAt(petalPalette, index)}
              />
            ),
            'triple',
          )}
        </>
      );

    case 'bubble-flower':
    default:
      return (
        <>
          {rotated(
            5,
            (index) => (
              <circle cx="0" cy="-60" r="30" fill={paletteAt(petalPalette, index)} />
            ),
            'bubble',
          )}
          <circle r="16" fill={centerColor} />
          <circle r="6" fill="#fff7ed" opacity="0.75" />
        </>
      );
  }
}

function buildStem(stem, stemColor, leafColor) {
  const shared = {
    fill: 'none',
    stroke: stemColor,
    strokeWidth: 10,
    strokeLinecap: 'round',
  };

  switch (stem) {
    case 'curved':
      return (
        <>
          <path d="M150 190C140 250 165 290 148 350" {...shared} />
          <path d="M145 260C118 245 112 228 130 210" fill="none" stroke={leafColor} strokeWidth="8" strokeLinecap="round" />
          <path d="M152 300C176 290 188 270 180 245" fill="none" stroke={leafColor} strokeWidth="8" strokeLinecap="round" />
        </>
      );
    case 'double':
      return (
        <>
          <path d="M150 190L150 350" {...shared} />
          <ellipse cx="122" cy="260" rx="18" ry="34" transform="rotate(-38 122 260)" fill={leafColor} />
          <ellipse cx="178" cy="296" rx="18" ry="34" transform="rotate(38 178 296)" fill={leafColor} />
        </>
      );
    case 'sprout':
      return (
        <>
          <path d="M150 190C154 235 152 280 150 350" {...shared} />
          <path d="M148 265C120 258 114 235 132 224C144 231 149 246 148 265Z" fill={leafColor} />
          <path d="M152 250C176 242 188 220 172 205C160 212 152 228 152 250Z" fill={leafColor} />
        </>
      );
    default:
      return (
        <>
          <path d="M150 190L150 350" {...shared} />
          <path d="M150 280C124 272 112 250 120 232C140 238 150 255 150 280Z" fill={leafColor} />
        </>
      );
  }
}

export default function FlowerPreview({ flower }) {
  const {
    flowerType,
    petalPalette,
    centerColor,
    stem,
    stemColor,
    leafColor,
    message,
    backgroundColors,
  } = flower;

  return (
    <section className="preview-card">
      <div
        className="preview-stage"
        style={{
          background: `linear-gradient(180deg, ${backgroundColors[0]}, ${backgroundColors[1]})`,
        }}
      >
        <svg
          viewBox="0 0 300 380"
          role="img"
          aria-label="Custom flower preview"
          style={{ width: '170px', height: '196px' }}
        >
          <g transform="translate(0 12) scale(1)">
            {buildStem(stem, stemColor, leafColor)}

            <g transform="translate(150 145)">
              {renderFlowerHead(flowerType, petalPalette, centerColor)}
            </g>
          </g>
        </svg>
      </div>

      {message ? <p className="flower-message">{message}</p> : null}
    </section>
  );
}

export { renderFlowerHead };
