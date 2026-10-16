// Sīpa sample collection. Every maker, piece, price, split and note here is INVENTED for the prototype.
// Replace with real data from the CMS / database before launch. Shapes are defined in ./types.ts.
import type { CareKind, CareKit, Maker, Note, Piece } from './types';

export const MAKERS: Record<string, Maker> = {
  'raju-shakya': {
    name: 'Raju Shakya', first: 'Raju', ne: 'राजु शाक्य', initial: 'रा', place: 'patan', area: 'Nagbahal',
    craft: 'lost-wax-casting', craftLabel: 'Lost-wax casting', lineage: 'Fifth generation in wax', years: 26,
    quote: { ne: 'मैनको काम धैर्यको काम हो।', en: 'Wax work is patience work.', context: 'Raju, on the eleven days he spent on one face.' },
    bio: [
      'Raju Shakya learned wax modelling from his father in Nagbahal, the same Patan courtyard where his great-great-grandfather worked. He made his first full figure at nineteen.',
      'Today he models in wax and leads each piece through casting, chasing and gilding, working with his son Suraj and one apprentice. He is known for his faces: he gives each one days of its own before anything else is finished.',
      '“People see the gold first,” he says. “I want them to see the face.”'
    ],
    workshop: 'A ground-floor room on a Patan courtyard. Wax is modelled by the window; casting happens in the courtyard behind.',
    visits: 'Sunday to Thursday, 10:00–16:00', paid: 214600, paidPieces: 4, since: 'March 2026'
  },
  'mira-bajracharya': {
    name: 'Mira Bajracharya', first: 'Mira', ne: 'मीरा वज्राचार्य', initial: 'मी', place: 'patan', area: 'Uku Bahal',
    craft: 'lost-wax-casting', craftLabel: 'Cast and hammered metal', lineage: 'Third generation of metalworkers, trained as a chaser', years: 14,
    quote: { ne: 'हरेक घनले आफ्नै आवाज निकाल्छ।', en: 'Every hammer blow makes its own sound.', context: 'Mira, on raising a bowl from a flat sheet.' },
    bio: [
      'Mira Bajracharya grew up beside her uncle’s workshop in Uku Bahal and began as a chaser, refining the surface of other people’s castings.',
      'She now makes ritual objects of her own: bells, bowls and lamps, cast or raised from a single sheet with a hammer. Her chasing is known for its clean, even lines.',
      '“A bowl is finished when it sounds right,” she says, “not when it looks right.”'
    ],
    workshop: 'A narrow workshop on the edge of Uku Bahal, with an anvil set into the floor.',
    visits: 'By appointment', paid: 61200, paidPieces: 3, since: 'May 2026'
  },
  'sunita-jha': {
    name: 'Sunita Jha', first: 'Sunita', ne: 'सुनिता झा', initial: 'सु', place: 'janakpur', area: 'Kuwa',
    craft: 'mithila-painting', craftLabel: 'Mithila painting', lineage: 'Learned on the walls of her mother’s home', years: 22,
    quote: { ne: 'मैले आमाबाट भित्तामा कोर्न सिकें।', en: 'I learned to draw on the walls, from my mother.', context: 'Sunita, on how she began.' },
    bio: [
      'Sunita Jha painted her first kohbar on the wall of her sister’s wedding room when she was fourteen, guided by her mother.',
      'She now paints on handmade paper at home in Kuwa, on the edge of Janakpur, and teaches young women from her neighbourhood twice a week. She mixes her blacks from lamp soot and her reds from local clay.',
      '“The fish must look at each other,” she says. “Otherwise it is not a pair.”'
    ],
    workshop: 'The veranda of her family home, where the light is best in the morning.',
    visits: 'Saturdays, by appointment', paid: 118400, paidPieces: 6, since: 'February 2026'
  },
  'karma-tamang': {
    name: 'Karma Tamang', first: 'Karma', ne: 'कर्मा तामाङ', initial: 'क', place: 'kathmandu', area: 'Boudha',
    craft: 'thangka-painting', craftLabel: 'Thangka painting', lineage: 'Trained eleven years in a Boudha studio', years: 18,
    quote: { ne: 'आँखा अन्तिममा कोरिन्छ, त्यसपछि मात्र चित्र जीवित हुन्छ।', en: 'The eyes are painted last. Only then does the painting live.', context: 'Karma, on the final day of a thangka.' },
    bio: [
      'Karma Tamang came to Boudha at fifteen to study under a thangka master, grinding colours for two years before he was allowed to paint.',
      'He now runs a small studio of his own near the stupa, with two students. He paints with ground minerals and 24-carat gold, and draws every figure on the proportion grid by hand.',
      '“A thangka is slow on purpose,” he says. “You are meant to look at it for years.”'
    ],
    workshop: 'An upstairs studio a short walk from the stupa, lit by a long north window.',
    visits: 'Monday to Friday, 11:00–15:00', paid: 296000, paidPieces: 3, since: 'January 2026'
  },
  'bishnu-silpakar': {
    name: 'Bishnu Silpakar', first: 'Bishnu', ne: 'विष्णु शिल्पकार', initial: 'वि', place: 'bhaktapur', area: 'Tachupal',
    craft: 'newar-woodcarving', craftLabel: 'Newar woodcarving', lineage: 'Fourth generation of carvers; restores temple struts', years: 30,
    quote: { ne: 'काठले आफ्नो बाटो आफैं देखाउँछ।', en: 'The wood shows you its own way.', context: 'Bishnu, on reading the grain before he cuts.' },
    bio: [
      'Bishnu Silpakar learned to carve from his father and grandfather in Bhaktapur, starting with the small rosettes that fill temple doorways.',
      'For thirty years he has divided his time between restoring the struts and windows of old buildings and carving new figures and panels. He carves in sal and finishes every piece with oil.',
      '“Old carvers left their mistakes in the wood,” he says. “I learn from those most.”'
    ],
    workshop: 'An open-fronted workshop near Dattatreya Square, where passers-by stop to watch.',
    visits: 'Daily, 9:00–17:00', paid: 172400, paidPieces: 4, since: 'April 2026'
  },
  'ram-maharjan': {
    name: 'Ram Krishna Maharjan', first: 'Ram', ne: 'रामकृष्ण महर्जन', initial: 'रा', place: 'patan', area: 'Pulchowk',
    craft: 'stone-carving', craftLabel: 'Stone carving', lineage: 'Apprenticed on the restoration of Patan’s temples', years: 19,
    quote: { ne: 'ढुङ्गामा गल्ती मेटिँदैन, त्यसैले बिस्तारै।', en: 'In stone, a mistake can’t be undone. So, slowly.', context: 'Ram, on cutting a face.' },
    bio: [
      'Ram Krishna Maharjan learned stone carving as a young apprentice on the restoration of Patan’s temples after the 2015 earthquake.',
      'He now carves figures in his own yard in Pulchowk, from blocks he chooses himself. He leaves chisel marks where they catch the light and polishes faces smooth.',
      '“The stone decides how big the figure can be,” he says. “I only find it.”'
    ],
    workshop: 'An open yard behind his house, with blocks waiting along the wall.',
    visits: 'By appointment', paid: 76800, paidPieces: 2, since: 'June 2026'
  }
};

// art: kind, gesture/variant, final material, process
export const PIECES: Piece[] = [
  {
    id: 'PTN-MT-26-0142', slug: 'shakyamuni-earth-touching', title: 'Shakyamuni, earth-touching', maker: 'raju-shakya', place: 'patan',
    craft: 'lost-wax-casting', rooms: ['buddha', 'lost-wax'], topics: ['shakyamuni-buddha', 'earth-touching-mudra'], origin: true,
    art: { kind: 'buddha', g: 'earth', mat: 'gilded', proc: 'lostwax' },
    material: 'Copper, lost-wax cast, fire-gilded', size: 'H 34.5 · W 24 · D 18 cm', weight: '2.8 kg', days: 38, price: 96000,
    split: { maker: 38400, materials: 19200, fund: 4800, sipa: 33600 }, care: 'metal', filled: 'Arrives unfilled, ready to be filled and consecrated by your own lama or priest.',
    lead: 'Cast in copper by the lost-wax method in Patan, then fire-gilded over four days. The right hand reaches down to call the earth to witness.',
    meaningHeading: 'The hand that calls the earth to witness',
    meaning: 'This statue shows Shakyamuni Buddha at the moment of his awakening, touching the earth with his right hand to call it as witness. The story goes that Mara, the lord of illusion, challenged his right to awaken, and the Buddha answered by touching the ground. Raju has given the face a lowered, inward gaze, and set the left hand open in the lap around an alms bowl.',
    suits: 'A meditation room, or a quiet corner where you sit each day. A considered gift for someone beginning a practice, or for a teacher. At 34.5 cm it anchors a shelf or a small altar without crowding it.',
    placement: { compass: 'E', facing: 'East, toward the morning light', height: 'At or above eye level, on a shelf or altar', room: 'A clean, quiet room. Not a bathroom or below stairs' },
    hotspots: [
      { x: 50, y: 21, name: 'Ushnisha', line: 'The crown of wisdom, gilded last.' },
      { x: 29, y: 81, name: 'Earth-touching hand', line: 'Carved in wax, days 9–19.' },
      { x: 55, y: 70, name: 'Alms bowl', line: 'Held open in the left hand, a sign of the monk’s life.' },
      { x: 50, y: 87, name: 'Double lotus base', line: 'Cast separately and joined on day 30.' }
    ],
    stages: [
      { name: 'Wax model', from: 1, to: 19, line: 'Every finger and fold carved in beeswax first.', t: '0:00' },
      { name: 'Clay mould', from: 20, to: 24, line: 'Layers of river clay packed around the wax.', t: '0:42' },
      { name: 'Casting', from: 25, to: 25, line: 'The wax melted out and copper poured in.', t: '1:05' },
      { name: 'Chasing', from: 26, to: 33, line: 'The mould broken and the surface chased by hand.', t: '1:21' },
      { name: 'Fire-gilding', from: 34, to: 38, line: 'Gold laid on and fixed over charcoal.', t: '1:48' }
    ], film: { dur: '2:14', shows: 'this' }
  },
  {
    id: 'PTN-MT-26-0139', slug: 'green-tara', title: 'Green Tara', maker: 'raju-shakya', place: 'patan',
    craft: 'lost-wax-casting', rooms: ['lost-wax'], topics: ['green-tara'],
    art: { kind: 'tara', mat: 'gilded', proc: 'lostwax' },
    material: 'Copper, lost-wax cast, fire-gilded, painted stones', size: 'H 26 · W 19 · D 14 cm', weight: '1.9 kg', days: 26, price: 72000,
    split: { maker: 28800, materials: 15800, fund: 3600, sipa: 23800 }, care: 'metal', filled: 'Arrives unfilled.',
    lead: 'Cast in copper and fire-gilded, with her right foot stepping down from the lotus. Raju spent six days on the lotus at her shoulder alone.',
    meaningHeading: 'Ready to rise and help',
    meaning: 'This statue shows Green Tara, the female Buddha who acts at once to protect from fear. Her right foot steps down from the throne, ready to rise; her right hand gives, and her left holds a blue lotus at her heart. Tibetan tradition links her to Bhrikuti, a Nepali princess of the 7th century.',
    suits: 'A home altar, or a desk where you start each day. A gift for someone setting out on something new, or going through a hard time. At 26 cm it sits comfortably on a bookshelf.',
    placement: { compass: null, facing: 'Toward the room, where she is seen as you enter', height: 'At or above eye level, on a shelf or altar', room: 'A clean, quiet room' },
    hotspots: [
      { x: 50, y: 20, name: 'Crown', line: 'Five points, each set with a painted stone.' },
      { x: 67, y: 37, name: 'Blue lotus', line: 'Six days of wax work on its petals.' },
      { x: 37, y: 72, name: 'Giving hand', line: 'Palm out: she grants what is asked.' },
      { x: 30, y: 88, name: 'Stepping foot', line: 'Stepping down, ready to act.' }
    ],
    stages: [
      { name: 'Wax model', from: 1, to: 12, line: 'The figure and her lotus modelled in wax.', t: '0:00' },
      { name: 'Clay mould', from: 13, to: 16, line: 'Clay packed around the wax in layers.', t: '0:38' },
      { name: 'Casting', from: 17, to: 17, line: 'Copper poured into the hollow mould.', t: '0:57' },
      { name: 'Chasing', from: 18, to: 22, line: 'Jewellery and petals sharpened by hand.', t: '1:12' },
      { name: 'Fire-gilding', from: 23, to: 26, line: 'Gilded, then the crown stones set.', t: '1:40' }
    ], film: { dur: '2:02', shows: 'this' }
  },
  {
    id: 'PTN-MT-26-0127', slug: 'vajrasattva-bell', title: 'Vajrasattva bell', maker: 'mira-bajracharya', place: 'patan',
    craft: 'lost-wax-casting', rooms: ['lost-wax'], topics: [],
    art: { kind: 'bell', mat: 'bronze', proc: 'cast' },
    material: 'Bronze, cast and chased', size: 'H 19 · W 9 · D 9 cm', weight: '0.6 kg', days: 9, price: 18500,
    split: { maker: 7400, materials: 3700, fund: 925, sipa: 6475 }, care: 'metal',
    lead: 'Cast in bronze and chased by hand, with a vajra for its handle. Struck, it rings for nearly half a minute.',
    meaningHeading: 'Wisdom and method, held in two hands',
    meaning: 'A bell and a vajra are used together in Vajrayana Buddhist practice. The bell, held in the left hand, stands for wisdom; the vajra in the right, for skilful action. The face at the top of the handle is Prajnaparamita, the perfection of wisdom.',
    suits: 'A practitioner who uses bell and vajra in ritual, or anyone who wants a single, clear sound to begin and end a sitting.',
    placement: { compass: null, facing: 'Beside the altar, on a cloth', height: 'On a table or altar, never on the floor', room: 'Wherever you practise' },
    hotspots: [
      { x: 50, y: 33, name: 'Vajra handle', line: 'Five prongs, cast with the handle.' },
      { x: 50, y: 53, name: 'Face', line: 'Prajnaparamita, the perfection of wisdom.' },
      { x: 50, y: 86, name: 'Rim', line: 'Chased smooth so the note rings clean.' }
    ],
    stages: [
      { name: 'Wax model', from: 1, to: 3, line: 'Bell and vajra handle modelled in wax.', t: '0:00' },
      { name: 'Clay mould', from: 4, to: 5, line: 'A clay mould around each part.', t: '0:31' },
      { name: 'Casting', from: 6, to: 6, line: 'Bronze poured; the bell cast in one piece.', t: '0:49' },
      { name: 'Chasing and tuning', from: 7, to: 9, line: 'Chased by hand and tuned by ear.', t: '1:05' }
    ], film: { dur: '1:34', shows: 'same' }
  },
  {
    id: 'PTN-MT-26-0131', slug: 'offering-bowl-hammered', title: 'Offering bowl, hammered', maker: 'mira-bajracharya', place: 'patan',
    craft: 'lost-wax-casting', rooms: ['lost-wax'], topics: [],
    art: { kind: 'bowl', mat: 'copper', proc: 'hammer' },
    material: 'Copper, raised by hand from one sheet', size: 'H 9 · Ø 16 cm', weight: '0.5 kg', days: 6, price: 9800,
    split: { maker: 3920, materials: 1960, fund: 490, sipa: 3430 }, care: 'metal',
    lead: 'Raised from a single sheet of copper with a hammer, then textured blow by blow. Made for water offerings, or for keeping beside you.',
    meaningHeading: 'Seven bowls of water',
    meaning: 'On Buddhist altars, bowls of clean water are set out each morning as offerings, often seven in a row, and emptied each evening. Water is offered because it costs nothing, so it can be given freely. This bowl is made for that daily practice.',
    suits: 'A home altar, a meditation space, or a table where you set down what matters.',
    placement: { compass: null, facing: 'In front of the figure on the altar', height: 'At altar height', room: 'Wherever you practise' },
    hotspots: [
      { x: 50, y: 65, name: 'Rim', line: 'Folded and burnished so it never cuts.' },
      { x: 36, y: 80, name: 'Hammer marks', line: 'Each mark a single blow.' }
    ],
    stages: [
      { name: 'Cutting the sheet', from: 1, to: 1, line: 'A copper disc cut and annealed.', t: '0:00' },
      { name: 'Raising', from: 2, to: 4, line: 'Hammered over a stake into a bowl.', t: '0:22' },
      { name: 'Texturing', from: 5, to: 5, line: 'The surface marked blow by blow.', t: '0:58' },
      { name: 'Finishing', from: 6, to: 6, line: 'Rim folded, burnished and cleaned.', t: '1:14' }
    ], film: { dur: '1:26', shows: 'same' }
  },
  {
    id: 'JNK-MH-26-0031', slug: 'fish-pair-for-a-new-home', title: 'Fish pair, for a new home', maker: 'sunita-jha', place: 'janakpur',
    craft: 'mithila-painting', rooms: ['mithila'], topics: ['mithila-motifs'],
    art: { kind: 'mithila-fish', proc: 'mithila' },
    material: 'Natural pigments on handmade paper', size: 'H 56 · W 38 cm', weight: 'Framed: 2.1 kg', days: 12, price: 24500,
    split: { maker: 9800, materials: 2450, fund: 1225, sipa: 11025 }, care: 'paper',
    lead: 'Two fish painted in natural colours on handmade paper, circling one another. In Mithila, a pair of fish is a wish for a home full of plenty.',
    meaningHeading: 'A wish for plenty',
    meaning: 'This painting shows a pair of fish, one of the oldest motifs in Mithila painting. Fish stand for fertility, plenty and good fortune, and a pair stands for a couple. Sunita has filled their bodies with fine line work, called kachni, and framed them in a border of lotus buds.',
    suits: 'A new home, a wedding, or a couple’s anniversary. It sits well in a living room or an entrance, where guests see it first.',
    placement: { compass: null, facing: 'Hang on an inside wall, out of direct sun', height: 'At eye level', room: 'A living room or entrance' },
    hotspots: [
      { x: 62, y: 38, name: 'The eye', line: 'Painted last, in lamp-soot black.' },
      { x: 44, y: 63, name: 'Kachni line work', line: 'Scales in fine hatching, days 5–11.' },
      { x: 50, y: 85, name: 'Border', line: 'A double line with lotus buds, day 12.' }
    ],
    stages: [
      { name: 'The ground', from: 1, to: 1, line: 'Handmade paper washed for an even tone.', t: '0:00' },
      { name: 'Outline', from: 2, to: 4, line: 'Drawn freehand in double black lines.', t: '0:24' },
      { name: 'Filling', from: 5, to: 11, line: 'Red from clay, yellow from turmeric.', t: '0:51' },
      { name: 'Border', from: 12, to: 12, line: 'The border closes the painting.', t: '1:32' }
    ], film: { dur: '1:48', shows: 'this' }
  },
  {
    id: 'JNK-MH-26-0034', slug: 'kohbar', title: 'Kohbar', maker: 'sunita-jha', place: 'janakpur',
    craft: 'mithila-painting', rooms: ['mithila'], topics: ['mithila-motifs'],
    art: { kind: 'mithila-kohbar', proc: 'mithila' },
    material: 'Natural pigments on handmade paper', size: 'H 76 · W 56 cm', weight: 'Framed: 3.4 kg', days: 21, price: 38000,
    split: { maker: 15200, materials: 3800, fund: 1900, sipa: 17100 }, care: 'paper',
    lead: 'A kohbar, the painting once made on the wall of a newly married couple’s room, painted here on handmade paper. Twenty-one days of line and colour.',
    meaningHeading: 'Every wish for a marriage, in one design',
    meaning: 'A kohbar gathers the motifs of marriage in one design: a ring of lotus at the centre, bamboo for a family line that keeps growing, fish for plenty, a turtle for a long life, and the sun and moon as witnesses. In Mithila, kohbar paintings on paper are a traditional wedding gift.',
    suits: 'A wedding gift, or a couple’s first home. Large enough to hold a wall of its own.',
    placement: { compass: null, facing: 'Hang on an inside wall, out of direct sun', height: 'At eye level', room: 'A bedroom or living room' },
    hotspots: [
      { x: 50, y: 47, name: 'Lotus ring', line: 'Sixteen petals, alternating red and yellow.' },
      { x: 26, y: 50, name: 'Bamboo', line: 'A family line that keeps growing.' },
      { x: 30, y: 21, name: 'Sun', line: 'A witness to the marriage, with the moon opposite.' },
      { x: 50, y: 78, name: 'Turtle', line: 'Steadiness and a long life.' }
    ],
    stages: [
      { name: 'The ground', from: 1, to: 2, line: 'Paper washed and dried in the sun.', t: '0:00' },
      { name: 'Outline', from: 3, to: 7, line: 'The whole design drawn before any colour.', t: '0:30' },
      { name: 'Filling', from: 8, to: 19, line: 'Colour laid in, then line work.', t: '1:02' },
      { name: 'Border', from: 20, to: 21, line: 'A patterned border closes it.', t: '1:51' }
    ], film: { dur: '2:08', shows: 'this' }
  },
  {
    id: 'JNK-MH-26-0029', slug: 'peacocks-at-dawn', title: 'Peacocks at dawn', maker: 'sunita-jha', place: 'janakpur',
    craft: 'mithila-painting', rooms: ['mithila'], topics: ['mithila-motifs'],
    art: { kind: 'mithila-peacocks', proc: 'mithila' },
    material: 'Natural pigments on handmade paper', size: 'H 38 · W 28 cm', weight: 'Framed: 1.2 kg', days: 9, price: 18000,
    split: { maker: 7200, materials: 1800, fund: 900, sipa: 8100 }, care: 'paper',
    recorded: { to: 'Anna', city: 'Zürich', date: '2026-10-03' },
    lead: 'Two peacocks face each other under the rising sun, painted in bharni: bold areas of flat, bright colour.',
    meaningHeading: 'A pair, under a witness',
    meaning: 'Peacocks in Mithila painting stand for love and courtship, and a facing pair for a couple. The rising sun between them is a witness, as it is at a wedding.',
    suits: 'A couple, or an anniversary. Small enough for a hallway or a bedside wall.',
    placement: { compass: null, facing: 'Hang on an inside wall, out of direct sun', height: 'At eye level', room: 'A hallway or bedroom' },
    hotspots: [
      { x: 50, y: 22, name: 'Rising sun', line: 'A witness between the pair.' },
      { x: 33, y: 55, name: 'Tail feathers', line: 'Each eye painted in three colours.' }
    ],
    stages: [
      { name: 'The ground', from: 1, to: 1, line: 'Paper prepared.', t: '0:00' },
      { name: 'Outline', from: 2, to: 3, line: 'The pair drawn in black.', t: '0:20' },
      { name: 'Filling', from: 4, to: 8, line: 'Flat colour, laid edge to edge.', t: '0:44' },
      { name: 'Border', from: 9, to: 9, line: 'Border painted.', t: '1:20' }
    ], film: { dur: '1:30', shows: 'this' }
  },
  {
    id: 'KTM-TK-26-0012', slug: 'green-tara-thangka', title: 'Green Tara, thangka', maker: 'karma-tamang', place: 'kathmandu',
    craft: 'thangka-painting', rooms: ['thangka'], topics: ['green-tara'],
    art: { kind: 'thangka', figure: 'tara', proc: 'thangka' },
    material: 'Mineral pigments and 24-carat gold on cotton, mounted in silk brocade', size: 'Painting H 60 · W 45 cm; mounted H 120 · W 75 cm', weight: '1.1 kg', days: 94, price: 185000,
    split: { maker: 74000, materials: 27750, fund: 9250, sipa: 74000 }, care: 'cloth',
    lead: 'Painted in ground minerals and 24-carat gold on cotton over 94 days, then mounted in silk brocade. The eyes were painted last, on day 94.',
    meaningHeading: 'Compassion that acts at once',
    meaning: 'This thangka shows Green Tara seated on a lotus in a landscape of hills and clouds. Karma drew her on the traditional proportion grid and built her aureole in layers of gold. A thangka like this is used for meditation, or hung as a daily reminder of compassion in action.',
    suits: 'A meditation room, or a quiet wall where it is seen every day. Mounted, it is 120 cm long, so it needs a wall of its own.',
    placement: { compass: null, facing: 'Hang on an inside wall, away from sun and smoke', height: 'Her face at eye level', room: 'A meditation room or a quiet living space' },
    hotspots: [
      { x: 50, y: 31, name: 'The eyes', line: 'Painted last, on day 94.' },
      { x: 66, y: 40, name: 'Gold aureole', line: '24-carat gold, burnished with a stone.' },
      { x: 50, y: 59, name: 'Lotus throne', line: 'Petals shaded in fourteen layers.' },
      { x: 21, y: 50, name: 'Silk brocade', line: 'Mounted by hand in Boudha.' }
    ],
    stages: [
      { name: 'Preparing the canvas', from: 1, to: 6, line: 'Cotton stretched, primed and polished.', t: '0:00' },
      { name: 'Drawing on the grid', from: 7, to: 20, line: 'Proportion grid, then the figure.', t: '0:26' },
      { name: 'Colour', from: 21, to: 74, line: 'Ground minerals laid, then shaded.', t: '0:58' },
      { name: 'Gold', from: 75, to: 90, line: '24-carat gold painted and burnished.', t: '1:46' },
      { name: 'The eyes', from: 91, to: 94, line: 'Painted last.', t: '2:20' }
    ], film: { dur: '2:41', shows: 'this' }
  },
  {
    id: 'KTM-TK-26-0015', slug: 'medicine-buddha-thangka', title: 'Medicine Buddha, thangka', maker: 'karma-tamang', place: 'kathmandu',
    craft: 'thangka-painting', rooms: ['thangka', 'buddha'], topics: ['mudras'], origin: true,
    art: { kind: 'thangka', figure: 'medicine', proc: 'thangka' },
    material: 'Mineral pigments and 24-carat gold on cotton, mounted in silk brocade', size: 'Painting H 50 · W 38 cm; mounted H 104 · W 64 cm', weight: '0.9 kg', days: 71, price: 140000,
    split: { maker: 56000, materials: 21000, fund: 7000, sipa: 56000 }, care: 'cloth',
    lead: 'The Medicine Buddha in lapis blue, holding a bowl of nectar, painted over 71 days in minerals and gold.',
    meaningHeading: 'The Buddha of healing',
    meaning: 'The Medicine Buddha, Bhaisajyaguru, is the Buddha of healing. His body is the deep blue of lapis lazuli; his left hand holds a bowl of nectar, and his right rests on his knee holding the myrobalan, a medicinal fruit. People turn to him in prayer for health of body and mind.',
    suits: 'A meditation space, or the room of someone who cares for others. A considered gift for a doctor, a nurse or a healer.',
    placement: { compass: null, facing: 'Hang on an inside wall, away from sun and smoke', height: 'His face at eye level', room: 'A quiet room' },
    hotspots: [
      { x: 50, y: 44, name: 'Lapis body', line: 'Ground lapis, layered seven times.' },
      { x: 52, y: 52, name: 'Nectar bowl', line: 'Held in the left hand.' },
      { x: 39, y: 58, name: 'Myrobalan', line: 'The medicinal fruit, in the right hand.' }
    ],
    stages: [
      { name: 'Preparing the canvas', from: 1, to: 5, line: 'Cotton stretched and primed.', t: '0:00' },
      { name: 'Drawing on the grid', from: 6, to: 16, line: 'The figure set on the grid.', t: '0:24' },
      { name: 'Colour', from: 17, to: 55, line: 'Lapis blue built up in layers.', t: '0:52' },
      { name: 'Gold', from: 56, to: 68, line: 'Gold for the aureole and ornament.', t: '1:38' },
      { name: 'The eyes', from: 69, to: 71, line: 'Painted last.', t: '2:05' }
    ], film: { dur: '2:19', shows: 'same' }
  },
  {
    id: 'BKT-WD-26-0018', slug: 'ganesh-seated', title: 'Ganesh, seated', maker: 'bishnu-silpakar', place: 'bhaktapur',
    craft: 'newar-woodcarving', rooms: ['woodcarving'], topics: ['ganesh'],
    art: { kind: 'ganesh', mat: 'woodOiled', proc: 'wood' },
    material: 'Sal wood, carved by hand, oil finish', size: 'H 42 · W 28 · D 20 cm', weight: '4.6 kg', days: 31, price: 58000,
    split: { maker: 23200, materials: 5800, fund: 2900, sipa: 26100 }, care: 'wood',
    lead: 'Carved by hand in sal wood over 31 days, then oiled. He holds an axe, a noose and a sweet, with his mouse at his feet.',
    meaningHeading: 'The one who clears the way',
    meaning: 'This carving shows Ganesh, the god of beginnings who clears obstacles from the way. Bishnu has carved him seated, with his broken tusk, a round belly that holds all things, and his mount, the mouse. In Nepal he is honoured first, before any ceremony or new venture.',
    suits: 'A home’s entrance, a new house, a new business or a study. A gift for someone starting something.',
    placement: { compass: null, facing: 'Toward the main entrance, or just inside it', height: 'At or above waist height, never on the floor', room: 'The entrance, a shrine or a study' },
    hotspots: [
      { x: 51, y: 50, name: 'Trunk', line: 'Undercut deep so it stands free.' },
      { x: 73, y: 31, name: 'Axe', line: 'Raised in an upper hand, to cut through obstacles.' },
      { x: 65, y: 87, name: 'Mouse', line: 'His mount, carved from the same block.' }
    ],
    stages: [
      { name: 'Choosing the wood', from: 1, to: 2, line: 'A seasoned block of sal, free of cracks.', t: '0:00' },
      { name: 'Drawing', from: 3, to: 3, line: 'Proportions marked on the block.', t: '0:19' },
      { name: 'Blocking out', from: 4, to: 12, line: 'The main forms cut with chisel and mallet.', t: '0:31' },
      { name: 'Carving detail', from: 13, to: 28, line: 'Face, trunk and hands with fine chisels.', t: '1:04' },
      { name: 'Oiling', from: 29, to: 31, line: 'Smoothed, then oiled three times.', t: '1:52' }
    ], film: { dur: '2:05', shows: 'this' }
  },
  {
    id: 'BKT-WD-26-0021', slug: 'peacock-window-panel', title: 'Peacock window panel', maker: 'bishnu-silpakar', place: 'bhaktapur',
    craft: 'newar-woodcarving', rooms: ['woodcarving'], topics: [],
    art: { kind: 'window', mat: 'woodOiled', proc: 'wood' },
    material: 'Sal wood, carved by hand from one board, oil finish', size: 'H 60 · W 45 · D 6 cm', weight: '7.2 kg', days: 46, price: 110000,
    split: { maker: 44000, materials: 8800, fund: 5500, sipa: 51700 }, care: 'wood',
    lead: 'A window panel in the Bhaktapur tradition: a peacock spreading its tail inside a carved lattice. Forty-six days, cut from one board of sal.',
    meaningHeading: 'A window that lets the light through',
    meaning: 'Bhaktapur’s best-known window shows a peacock with its tail spread, carved into the lattice of a priest’s house. Bishnu’s panel takes the same idea for a wall. In the Kathmandu Valley the peacock is the mount of Kumar and a sign of beauty; here it is the centre of a pattern that lets light through.',
    suits: 'A wall that gets light, a room divider, or above a doorway.',
    placement: { compass: null, facing: 'Hang on an inside wall, or set into a frame', height: 'At eye level or above a door', room: 'Away from radiators and damp' },
    hotspots: [
      { x: 50, y: 46, name: 'Peacock', line: 'Its tail cut through, so light shows between the feathers.' },
      { x: 30, y: 30, name: 'Lattice', line: '312 openings, each cut by hand.' },
      { x: 78, y: 84, name: 'Pegged joints', line: 'Frame joined with wooden pegs, no nails.' }
    ],
    stages: [
      { name: 'Choosing the wood', from: 1, to: 3, line: 'One wide board of seasoned sal.', t: '0:00' },
      { name: 'Drawing', from: 4, to: 6, line: 'The lattice and peacock laid out.', t: '0:21' },
      { name: 'Blocking out', from: 7, to: 20, line: 'Openings drilled and cleared.', t: '0:40' },
      { name: 'Carving detail', from: 21, to: 42, line: 'Feathers and lattice edges cut crisp.', t: '1:15' },
      { name: 'Oiling', from: 43, to: 46, line: 'Oiled and the frame pegged.', t: '2:08' }
    ], film: { dur: '2:22', shows: 'this' }
  },
  {
    id: 'PTN-ST-26-0007', slug: 'shakyamuni-meditation-stone', title: 'Shakyamuni, meditation', maker: 'ram-maharjan', place: 'patan',
    craft: 'stone-carving', rooms: ['stone', 'buddha'], topics: ['shakyamuni-buddha', 'mudras'], origin: true,
    art: { kind: 'buddha', g: 'medit', mat: 'stone', proc: 'stone' },
    material: 'Dark stone, carved by hand with hammer and chisel', size: 'H 30 · W 22 · D 16 cm', weight: '9.5 kg', days: 22, price: 64000,
    split: { maker: 25600, materials: 6400, fund: 3200, sipa: 28800 }, care: 'stone',
    lead: 'Cut from a single block of dark stone with hammer and chisel over 22 days. His hands rest in his lap in meditation.',
    meaningHeading: 'Stillness, held in the hands',
    meaning: 'This figure shows Shakyamuni Buddha in meditation, both hands resting in his lap, right over left, thumbs touching. It is the gesture of concentration and stillness. Ram has left fine chisel marks on the base and polished the face smooth, so it catches the light.',
    suits: 'A meditation room, a courtyard or a garden. At 9.5 kg it needs a sturdy surface.',
    placement: { compass: 'E', facing: 'East, or toward the room’s entrance', height: 'At or above eye level indoors; raised off the ground outdoors', room: 'A quiet room, courtyard or garden' },
    hotspots: [
      { x: 50, y: 32, name: 'Face', line: 'Polished smooth with abrasive stones.' },
      { x: 50, y: 70, name: 'Meditation hands', line: 'Right over left, thumbs touching.' },
      { x: 50, y: 88, name: 'Chisel marks', line: 'Left on the base to catch the light.' }
    ],
    stages: [
      { name: 'Choosing the stone', from: 1, to: 1, line: 'A block tested for hidden cracks.', t: '0:00' },
      { name: 'Roughing out', from: 2, to: 7, line: 'The outline cut with a pointed chisel.', t: '0:18' },
      { name: 'Shaping', from: 8, to: 14, line: 'Body and robe shaped with flat chisels.', t: '0:47' },
      { name: 'Detail', from: 15, to: 20, line: 'Face and hands cut slowly.', t: '1:16' },
      { name: 'Finishing', from: 21, to: 22, line: 'The face polished; the base left marked.', t: '1:44' }
    ], film: { dur: '1:58', shows: 'this' }
  },
  {
    id: 'PTN-MT-26-0118', slug: 'amitabha-meditation', title: 'Amitabha, meditation', maker: 'raju-shakya', place: 'patan',
    craft: 'lost-wax-casting', rooms: ['buddha', 'lost-wax'], topics: ['mudras'], origin: true,
    art: { kind: 'buddha', g: 'medit', mat: 'gilded', proc: 'lostwax' },
    material: 'Copper, lost-wax cast, fire-gilded', size: 'H 22 · W 16 · D 12 cm', weight: '1.4 kg', days: 24, price: 58000,
    split: { maker: 23200, materials: 12800, fund: 2900, sipa: 19100 }, care: 'metal',
    recorded: { to: 'Kenji', city: 'Kyoto', date: '2026-09-02' },
    lead: 'Amitabha, the Buddha of Infinite Light, cast in copper and fire-gilded, his hands in meditation.',
    meaningHeading: 'The Buddha of Infinite Light',
    meaning: 'Amitabha is one of the five Buddha families: red in colour, facing west, his hands resting in meditation. Many practitioners pray to be reborn in his pure land.',
    suits: 'A meditation room or study, facing west.',
    placement: { compass: 'W', facing: 'West, his direction', height: 'At or above eye level', room: 'A clean, quiet room' },
    hotspots: [
      { x: 50, y: 70, name: 'Meditation hands', line: 'Right over left, thumbs touching.' },
      { x: 50, y: 21, name: 'Ushnisha', line: 'Gilded last.' }
    ],
    stages: [
      { name: 'Wax model', from: 1, to: 11, line: 'Modelled in wax.', t: '0:00' },
      { name: 'Clay mould', from: 12, to: 15, line: 'Clay packed around the wax.', t: '0:35' },
      { name: 'Casting', from: 16, to: 16, line: 'Copper poured.', t: '0:52' },
      { name: 'Chasing', from: 17, to: 20, line: 'Chased by hand.', t: '1:04' },
      { name: 'Fire-gilding', from: 21, to: 24, line: 'Gilded over charcoal.', t: '1:31' }
    ], film: { dur: '1:52', shows: 'this' }
  }
];

/** Order the rooms are hung in */
export const ROOM_ORDER = ['buddha', 'lost-wax', 'mithila', 'thangka', 'woodcarving', 'stone'];
/** The piece each room opens on, hung large */
export const ROOM_LEAD: Record<string, string> = { buddha: 'PTN-MT-26-0142', 'lost-wax': 'PTN-MT-26-0139', mithila: 'JNK-MH-26-0034', thangka: 'KTM-TK-26-0012', woodcarving: 'BKT-WD-26-0021', stone: 'PTN-ST-26-0007' };

export const SAMPLE_NOTES: Note[] = [
  { piece: 'JNK-MH-26-0029', maker: 'sunita-jha', from: 'Anna', city: 'Zürich', date: '2026-10-09', public: true,
    text: 'The peacocks hang in our hallway in Zürich, and they are the first thing everyone asks about. Thank you, Sunita, for the colours.',
    reply: { ne: 'मेरो मयूर यति टाढा पुगेकोमा खुसी छु। तपाईंको घरमा माया रहोस्।', en: 'I’m happy my peacocks travelled so far. May there be love in your home.' } },
  { piece: 'PTN-MT-26-0118', maker: 'raju-shakya', from: 'Kenji', city: 'Kyoto', date: '2026-09-21', public: true,
    text: 'Amitabha sits facing west in my study, as the card suggested. I watched the film of the gilding three times. Thank you for your patience.',
    reply: { ne: 'मैनको काम धैर्यको काम हो। हेर्नुभएकोमा धन्यवाद।', en: 'Wax work is patience work. Thank you for watching.' } }
];

export const CARE_KITS: Record<CareKind, CareKit> = {
  metal: { label: 'cast metal', guide: 'metal', items: [
    { icon: 'brush', name: 'Soft brush', size: 'Goat hair · 20 mm', line: 'Lifts dust from fine detail without scratching.' },
    { icon: 'card', name: 'Care card', size: 'Lokta · 125 × 175 mm', line: 'These steps in English and Nepali, with a code to the care film.' } ],
    steps: [ ['Weekly', 'Dust with the soft brush. Work into the folds of the robe and the ornament.'], ['Yearly', 'Wipe ungilded areas with a dry cotton cloth. Check the base plate is secure.'], ['Moving', 'Lift from the base with both hands, never by the head or hands.'], ['Never', 'Water, metal polish or cleaning sprays. They strip the gilding.'] ] },
  wood: { label: 'carved sal wood', guide: 'wood', items: [
    { icon: 'flask', name: 'Wood oil', size: 'Glass flask · 30 ml', line: 'The oil Bishnu uses. Feeds the wood and keeps carved edges from drying out.' },
    { icon: 'brush', name: 'Soft brush', size: 'Goat hair · 20 mm', line: 'Reaches into the carving where a cloth cannot.' },
    { icon: 'card', name: 'Care card', size: 'Lokta · 125 × 175 mm', line: 'These steps in English and Nepali, with a code to the care film.' } ],
    steps: [ ['Weekly', 'Brush the dust out of the carving with the soft brush. Work with the grain.'], ['Every 3 months', 'Brush clean first. Put a few drops of oil on the brush and work a thin coat into the wood. After 15 minutes, wipe off what hasn’t soaked in.'], ['Moving', 'Lift from the base with both hands, never by a raised arm, head or trunk.'], ['Never', 'Water, furniture polish or sprays.'] ] },
  stone: { label: 'carved stone', guide: 'stone', items: [
    { icon: 'brush', name: 'Soft brush', size: 'Goat hair · 20 mm', line: 'Lifts dust from carved detail.' },
    { icon: 'card', name: 'Care card', size: 'Lokta · 125 × 175 mm', line: 'These steps in English and Nepali, with a code to the care film.' } ],
    steps: [ ['Weekly', 'Dust with the soft brush.'], ['Moving', 'Lift from the base, with two people over 15 kg.'], ['Never', 'Oil, soap, polish or wet cloths. Stone soaks them up and stains.'] ] },
  cloth: { label: 'a thangka', guide: 'painted-cloth', items: [
    { icon: 'cover', name: 'Silk cover', size: 'Sewn to the mount', line: 'Keep it down; lift it when you look or practise.' },
    { icon: 'card', name: 'Care card', size: 'Lokta · 125 × 175 mm', line: 'Hanging, rolling and storing, in English and Nepali.' } ],
    steps: [ ['Always', 'Hang on an inside wall, out of direct sun and away from kitchens, heaters and smoke.'], ['Monthly', 'Check the back and edges for damp or insects.'], ['Storing', 'Roll loosely from the bottom around the lower rod, cover in place. Wrap in clean cotton.'], ['Never', 'Fold it, press the painted surface, or clean it with water.'] ] },
  paper: { label: 'a painting on paper', guide: 'paper', items: [
    { icon: 'folder', name: 'Acid-free folder', size: 'For storing it flat', line: 'Use it if the painting comes off the wall.' },
    { icon: 'card', name: 'Care card', size: 'Lokta · 125 × 175 mm', line: 'Framing and hanging, in English and Nepali.' } ],
    steps: [ ['First', 'Frame it behind glass, with a mount so the paper doesn’t touch the glass.'], ['Always', 'Hang out of direct sun, away from damp walls, bathrooms and kitchens.'], ['Never', 'Touch the painted surface, roll it tightly, or tape it to a wall.'] ] }
};
