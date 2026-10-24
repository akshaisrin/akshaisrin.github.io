// 16x16 pixel art for the hero grid.
// Digits are theme colors (1 blue, 2 coral, 3 butter, 4 ink); letters are fixed brand colors; '.' is unlit.
export const BRAND_COLORS = {
  u: '#4b2e83', // UW purple
  g: '#e8d3a2', // UW gold
  h: '#ee4c8e', // DubHacks pink
  w: '#ffffff',
  d: '#d9982b', // duck wing, a shade under butter
  k: '#0a0e1a', // duck eye
  p: '#5cc3e6', // planet
  q: '#3b9ccc', // planet stripe
};

export const PIXEL_ICONS = {
  duck: {
    label: 'a duck',
    caption: ['RL Locomotion for ', 'DuckRL'],
    // Rubber duck facing left: round head, beak, eye, back sweeping up into the tail, darker wing.
    px: [
      '................', '................', '....3333........', '...333333.......',
      '...33k333.......', '222333333.......', '.22333333.....3.', '...33333.....33.',
      '..3333333333333.', '.33333dddd3333..', '.33333ddd3333...', '.333333333333...',
      '..3333333333....', '....333333......', '................', '................',
    ],
  },
  car: {
    label: 'a self-driving car',
    caption: ['Autonomous Vehicles @ ', 'GM Cruise'],
    px: [
      '................', '................', '................', '.......11.......',
      '.....222222.....', '....24424442....', '...2444244442...', '.22222222222222.',
      '.22222222222223.', '.22444222224442.', '..44444...44444.', '...444.....444..',
      '................', '................', '................', '................',
    ],
  },
  pad: {
    label: 'a game controller',
    caption: ['', 'Brown Zelda', ': The Legend of Zelda, Reimagined'],
    px: [
      '................', '................', '................', '...1111111111...',
      '..111111111111..', '.11411111112111.', '.14441111131211.', '.11411111112111.',
      '.11111111111111.', '.11111....11111.', '.1111......1111.', '..11........11..',
      '................', '................', '................', '................',
    ],
  },
  arm: {
    label: 'a robot arm',
    caption: ['Sim2Real RL @ ', 'WEIRD Lab'],
    px: [
      '................', '....444.........', '...44444111111..', '...44444111111..',
      '...44444....44..', '....111.....44..', '....111....2222.', '...111.....2..2.',
      '...111.....2..2.', '..111......2..2.', '..111...........', '.44444..........',
      '.44444..........', '2222222.........', '2222222.........', '................',
    ],
  },
  // A Neptune-blue planet inside a flat ring: back arc on top at the sides, rounded ends, front arc across it.
  neptune: {
    label: 'a ringed planet',
    caption: ['Robotic Endoscopy @ ', 'Neptune Medical'],
    px: [
      '................', '................', '................', '......pppp......',
      '....pppppppp....', '...qqqqqqqqqq...', '...pppppppppp...', '.22pppppppppp22.',
      '2..pppppppppp..2', '.22222222222222.', '...qqqqqqqqqq...', '....pppppppp....',
      '......pppp......', '................', '................', '................',
    ],
  },
  dino: {
    label: 'the DinoDash dino',
    caption: ['', 'DinoDash', ': A Gesture-Controlled Runner Game'],
    px: [
      '................', '.........4444444', '........44.44444', '........44444444',
      '........44444...', '........4444444.', '4......44444....', '44....4444444...',
      '444..444444.4...', '4444444444......', '.44444444.......', '..444444........',
      '...4444.........', '...44.44........', '...4...4........', '...44..44.......',
    ],
  },
  uw: {
    label: 'the UW W',
    caption: ['CE + Applied Math @ ', 'UW'],
    shadow: 'u',
    px: [
      '................', '................', 'gggg..gggg..gggg', '.gg....gg....gg.',
      '.gg....gg....gg.', '.gg...gggg...gg.', '..gg..gggg..gg..', '..gg..g..g..gg..',
      '..gg.gg..gg.gg..', '...ggg....ggg...', '...ggg....ggg...', '...gg......gg...',
      '....g......g....', '................', '................', '................',
    ],
  },
  dh: {
    label: 'the DubHacks logo',
    caption: ['', 'DubHacks', ": Infra for the PNW's Largest Hackathon"],
    px: [
      '................', '..hhhhhhhhhhhh..', '.hhhhhhhhhhhhhh.', '.hhhhhhhhhhhhhh.',
      '.hhhhhhhhhhhhhh.', '.hhwwwwhhwhhhwh.', '.hhwhhhwhwhhhwh.', '.hhwhhhwhwhhhwh.',
      '.hhwhhhwhwwwwwh.', '.hhwhhhwhwhhhwh.', '.hhwhhhwhwhhhwh.', '.hhwwwwhhwhhhwh.',
      '.hhhhhhhhhhhhhh.', '.hhhhhhhhhhhhhh.', '..hhhhhhhhhhhh..', '................',
    ],
  },
};

// Idle rotation; wraps from the end back to the start.
export const PIXEL_ORDER = ['duck', 'car', 'arm', 'neptune', 'dh', 'dino', 'pad', 'uw'];
