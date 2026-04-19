import { renderFlowerHead } from './FlowerPreview';

const SILHOUETTE_PALETTE = ['#2b2b2b', '#2b2b2b'];
const SILHOUETTE_CENTER = '#ffffff';

export default function FlowerTypeThumb({ flowerType, size = 56 }) {
  return (
    <svg
      viewBox="-120 -120 240 240"
      width={size}
      height={size}
      role="img"
      aria-hidden="true"
    >
      {renderFlowerHead(flowerType, SILHOUETTE_PALETTE, SILHOUETTE_CENTER)}
    </svg>
  );
}
