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
  const stemStroke = {
    fill: 'none',
    stroke: stemColor,
    strokeWidth: 10,
    strokeLinecap: 'round',
  };
  const leafStroke = {
    fill: 'none',
    stroke: leafColor,
    strokeWidth: 7,
    strokeLinecap: 'round',
  };

  switch (stem) {
    case 'curved':
      return (
        <>
          <path d="M150 190C130 232 174 282 148 350" {...stemStroke} />
          <path d="M146 250C122 238 110 216 124 198C140 208 150 228 146 250Z" fill={leafColor} />
          <path d="M156 306C184 294 196 272 182 254C166 262 156 284 156 306Z" fill={leafColor} />
        </>
      );
    case 'double':
      return (
        <>
          <path d="M150 190L150 350" {...stemStroke} />
          <path d="M150 256C118 248 102 224 112 204C140 210 154 232 150 256Z" fill={leafColor} />
          <path d="M150 302C182 294 198 270 188 250C160 256 146 278 150 302Z" fill={leafColor} />
        </>
      );
    case 'sprout':
      return (
        <>
          <path d="M150 210C152 252 150 300 150 350" {...stemStroke} />
          <path d="M150 236C120 224 108 200 126 188C142 196 152 216 150 236Z" fill={leafColor} />
          <path d="M150 236C180 224 192 200 174 188C158 196 148 216 150 236Z" fill={leafColor} />
        </>
      );
    case 'bare':
      return <path d="M150 190L150 350" {...stemStroke} />;
    case 'long-leaf':
      return (
        <>
          <path d="M150 190L150 350" {...stemStroke} />
          <path
            d="M150 204C208 218 224 292 152 338C144 302 148 244 150 204Z"
            fill={leafColor}
          />
          <path
            d="M152 216C180 240 188 290 154 326"
            fill="none"
            stroke={stemColor}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.45"
          />
        </>
      );
    case 'twin-buds':
      return (
        <>
          <path d="M150 190L150 350" {...stemStroke} />
          <path d="M150 238C132 228 118 232 110 244" {...leafStroke} />
          <circle cx="106" cy="246" r="9" fill={leafColor} />
          <path d="M150 284C168 274 182 278 190 290" {...leafStroke} />
          <circle cx="194" cy="292" r="9" fill={leafColor} />
        </>
      );
    case 'grass':
      return (
        <>
          <path d="M150 204L150 350" {...stemStroke} />
          <path d="M150 350C110 322 104 274 114 242" {...leafStroke} />
          <path d="M150 350C132 320 128 274 134 244" {...leafStroke} />
          <path d="M150 350C168 320 172 274 166 244" {...leafStroke} />
          <path d="M150 350C190 322 196 274 186 242" {...leafStroke} />
        </>
      );
    case 'classic':
    default:
      return (
        <>
          <path d="M150 190L150 350" {...stemStroke} />
          <path d="M150 272C118 262 104 238 118 218C140 226 152 248 150 272Z" fill={leafColor} />
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

export { buildStem, renderFlowerHead };
