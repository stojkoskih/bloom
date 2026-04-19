import { buildStem } from './FlowerPreview';

const SILHOUETTE_STEM = '#2b2b2b';
const SILHOUETTE_LEAF = '#4a4a4a';

export default function StemThumb({ stem, size = 52 }) {
  return (
    <svg
      viewBox="90 180 120 180"
      width={size}
      height={size * 1.4}
      role="img"
      aria-hidden="true"
    >
      {buildStem(stem, SILHOUETTE_STEM, SILHOUETTE_LEAF)}
    </svg>
  );
}
