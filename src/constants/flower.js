export const DEFAULT_FLOWER = {
  flowerType: 'folded-star',
  petalPalette: ['#ff7a59', '#ffb703'],
  centerColor: '#6d3b1f',
  stem: 'classic',
  stemColor: '#2b9348',
  leafColor: '#4caf50',
  message: '',
  backgroundColors: ['#fff0d8', '#f7fcf4'],
};

export const STEM_OPTIONS = [
  { value: 'classic', label: 'Classic' },
  { value: 'curved', label: 'Curved' },
  { value: 'double', label: 'Double leaf' },
  { value: 'sprout', label: 'Sprout' },
  { value: 'bare', label: 'Bare' },
  { value: 'long-leaf', label: 'Long leaf' },
  { value: 'twin-buds', label: 'Twin buds' },
  { value: 'grass', label: 'Grass' },
];

export const COLOR_PRESETS = [
  {
    id: 'sunset',
    label: 'Sunset',
    colors: {
      petalPalette: ['#ff7a59', '#ffb703'],
      centerColor: '#6d3b1f',
      stemColor: '#2b9348',
      leafColor: '#4caf50',
      backgroundColors: ['#fff0d8', '#f7fcf4'],
    },
  },
  {
    id: 'orchid',
    label: 'Orchid',
    colors: {
      petalPalette: ['#c77dff', '#ff8fab'],
      centerColor: '#5a189a',
      stemColor: '#5a7a52',
      leafColor: '#83a96a',
      backgroundColors: ['#f3e5ff', '#ffeaf3'],
    },
  },
  {
    id: 'forest',
    label: 'Forest',
    colors: {
      petalPalette: ['#d8f3dc', '#95d5b2'],
      centerColor: '#40916c',
      stemColor: '#2d6a4f',
      leafColor: '#52b788',
      backgroundColors: ['#e6f4ea', '#f6fbf7'],
    },
  },
  {
    id: 'sky',
    label: 'Sky',
    colors: {
      petalPalette: ['#90e0ef', '#caf0f8'],
      centerColor: '#0077b6',
      stemColor: '#386641',
      leafColor: '#6a994e',
      backgroundColors: ['#e0f7fb', '#f4fbff'],
    },
  },
  {
    id: 'cherry',
    label: 'Cherry',
    colors: {
      petalPalette: ['#ffb3c1', '#ff758f'],
      centerColor: '#a4133c',
      stemColor: '#6a4c2e',
      leafColor: '#8f9e5a',
      backgroundColors: ['#ffeef3', '#fff6fa'],
    },
  },
  {
    id: 'mono',
    label: 'Ink',
    colors: {
      petalPalette: ['#2b2b2b', '#4a4a4a'],
      centerColor: '#ffffff',
      stemColor: '#2b2b2b',
      leafColor: '#4a4a4a',
      backgroundColors: ['#f2f2f2', '#ffffff'],
    },
  },
];

export const POSITIVE_MESSAGES = [
  'Sending you a little bloom today.',
  'Hope this brightens your day.',
  'You are so appreciated.',
  'Thinking of you.',
  'Gratitude, with petals.',
  'Proud of you.',
  "You're doing great.",
  'A small reminder that you matter.',
  "Take a breath. You've got this.",
  'Wishing you a gentle day.',
  'Flowers, because you deserve them.',
  'Cheering you on from afar.',
  'You make the world kinder.',
  'Just because.',
  'A little joy, delivered by stem.',
  'Warmest thoughts your way.',
  'You bring the sunshine.',
  'Keep blooming.',
  'Sending sunshine.',
  'You are loved.',
];

export const FLOWER_TYPE_OPTIONS = [
  { value: 'folded-star', label: 'Hibiscus' },
  { value: 'ruffled-ring', label: 'Ruffle ring' },
  { value: 'round-lotus', label: 'Lotus star' },
  { value: 'pinwheel', label: 'Five-petal' },
  { value: 'sun-daisy', label: 'Sun daisy' },
  { value: 'soft-petal', label: 'Round bloom' },
  { value: 'star-bloom', label: 'Pointed star' },
  { value: 'ring-clover', label: 'Heart petal' },
  { value: 'lily-star', label: 'Six-point star' },
  { value: 'orchid-loop', label: 'Tulip bell' },
  { value: 'triple-bloom', label: 'Triple petal' },
  { value: 'bubble-flower', label: 'Plumeria' },
];
