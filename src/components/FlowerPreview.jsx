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
  const { petals, petalPalette, centerColor, stem, stemColor, leafColor, size, message } = flower;
  const petalCount = Array.from({ length: petals });
  const scale = size / 170;

  return (
    <section className="preview-card">
      <div className="preview-stage">
        <svg
          viewBox="0 0 300 380"
          role="img"
          aria-label="Custom flower preview"
          style={{ width: `${size}px`, height: `${size * 1.15}px` }}
        >
          <defs>
            <radialGradient id="petalGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g transform={`translate(0 ${20 - scale * 8}) scale(${scale})`}>
            {buildStem(stem, stemColor, leafColor)}

            <g transform="translate(150 145)">
              {petalCount.map((_, index) => {
                const angle = (360 / petals) * index;
                const fill = petalPalette[index % petalPalette.length];

                return (
                  <g key={angle} transform={`rotate(${angle})`}>
                    <ellipse cx="0" cy="-54" rx="24" ry="52" fill={fill} />
                    <ellipse cx="0" cy="-54" rx="10" ry="26" fill="url(#petalGlow)" />
                  </g>
                );
              })}

              <circle r="34" fill={centerColor} />
              <circle r="16" fill="#f8e16c" opacity="0.7" />
            </g>
          </g>
        </svg>
      </div>

      {message ? <p className="flower-message">{message}</p> : null}
    </section>
  );
}
