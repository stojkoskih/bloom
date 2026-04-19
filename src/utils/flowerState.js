import { DEFAULT_FLOWER, STEM_OPTIONS } from '../constants/flower';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function normalizeFlower(candidate) {
  if (!candidate || typeof candidate !== 'object') {
    return DEFAULT_FLOWER;
  }

  const petals = clamp(Number(candidate.petals) || DEFAULT_FLOWER.petals, 4, 18);
  const size = clamp(Number(candidate.size) || DEFAULT_FLOWER.size, 120, 240);
  const stem = STEM_OPTIONS.some((option) => option.value === candidate.stem)
    ? candidate.stem
    : DEFAULT_FLOWER.stem;
  const message =
    typeof candidate.message === 'string'
      ? candidate.message.slice(0, 180)
      : DEFAULT_FLOWER.message;
  const petalPalette = Array.isArray(candidate.petalPalette)
    ? candidate.petalPalette.slice(0, 3).filter(Boolean)
    : DEFAULT_FLOWER.petalPalette;

  return {
    petals,
    petalPalette: petalPalette.length ? petalPalette : DEFAULT_FLOWER.petalPalette,
    centerColor: candidate.centerColor || DEFAULT_FLOWER.centerColor,
    stem,
    stemColor: candidate.stemColor || DEFAULT_FLOWER.stemColor,
    leafColor: candidate.leafColor || DEFAULT_FLOWER.leafColor,
    size,
    message,
  };
}

export function encodeFlowerState(flower) {
  const json = JSON.stringify(flower);
  const bytes = new TextEncoder().encode(json);
  let binary = '';

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

export function decodeFlowerState(serialized) {
  if (!serialized) {
    return DEFAULT_FLOWER;
  }

  try {
    const padded = serialized.replace(/-/g, '+').replace(/_/g, '/');
    const remainder = padded.length % 4;
    const normalized = remainder ? padded + '='.repeat(4 - remainder) : padded;
    const binary = atob(normalized);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    return normalizeFlower(parsed);
  } catch {
    return DEFAULT_FLOWER;
  }
}
