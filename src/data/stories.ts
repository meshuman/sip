// The story of each piece: why it was made, how, and what to know. Sample copy for the prototype, like the rest of src/data/catalog.ts.
// Keyed by registry id. Three short paragraphs each: the piece, the making, the detail.
export interface Story {
  heading: string;
  paragraphs: [string, string, string];
}

export const STORIES: Record<string, Story> = {
  'PTN-MT-26-0142': {
    heading: 'Nineteen days on one hand',
    paragraphs: [
      'Raju started this statue with the right hand. In his family’s workshop in Nagbahal, the hand that touches the earth is the part an apprentice is never given, so he modelled it first, in warm beeswax, and spent nineteen of the thirty-eight days on the wax alone.',
      'The wax was covered in layers of river clay and heated until it ran out, leaving a hollow in the exact shape of the figure. Molten copper filled that hollow in one pour. The mould has to be broken to free the statue, so it can only ever make this one.',
      'After casting, Raju chased every line by hand with small chisels. The fire-gilding took four days: a paste of gold and mercury is brushed on and the mercury burned off over charcoal, leaving a skin of gold. The face is painted last, with cold gold, and the hair with blue.',
    ],
  },
  'PTN-MT-26-0139': {
    heading: 'A lotus that took six days',
    paragraphs: [
      'Green Tara is the Buddha of quick action, and Raju shows her with one foot stepping down, ready to rise. The pose is hard to cast. The leg hangs free of the base, so the wax needs a thin support that is cut away later.',
      'He spent six days on the blue lotus at her shoulder alone, shaping each petal separately in wax and joining them with a warm blade. Small things like this are why the piece took twenty-six days and not twenty.',
      'The crown carries five painted stones, set after the gilding. Painting the stones is the traditional way, so the colour belongs to the piece and does not depend on a gem.',
    ],
  },
  'PTN-MT-26-0127': {
    heading: 'The sound is in the shape',
    paragraphs: [
      'A ritual bell is judged by its sound before its looks. Mira trained as a chaser, and she casts the bell body first, then tunes it by thinning the rim a little at a time until the note is clear and long.',
      'The handle is a separate Vajrasattva figure, cast on its own and joined at the top. The pattern around the shoulder is chased by hand with punches she made herself.',
      'In practice the bell is rung with a vajra held in the other hand. The bell stands for wisdom and the vajra for method, and the two are used together.',
    ],
  },
  'PTN-MT-26-0131': {
    heading: 'One sheet, no seam',
    paragraphs: [
      'Mira raised this bowl from a single sheet of copper, with no join anywhere. She hammers the sheet into shape from the outside in, turning it all the time, and heats it in a fire every few minutes so the metal stays soft.',
      'A hammered bowl carries the marks of its making: small flat facets that catch the light. Mira leaves them in place and does not polish them away.',
      'On a shrine, bowls like this are filled with fresh water each morning as an offering. At home, one bowl on a shelf serves the same purpose.',
    ],
  },
  'JNK-MH-26-0031': {
    heading: 'A pair, for a new home',
    paragraphs: [
      'In Mithila a pair of fish stands for luck and fertility, and it is painted for weddings and for a new home. Sunita painted this pair in Kuwa, on handmade paper, the way she learned on the walls of her mother’s house.',
      'Her colours come from plants, soot and clay, ground and mixed with a natural gum. They are laid flat, one colour at a time, and dry to a soft matt finish.',
      'The border is drawn first, in double lines, and the figures follow. Nothing is left empty. Mithila painters fill every space with pattern.',
    ],
  },
  'JNK-MH-26-0034': {
    heading: 'The painting for the wedding room',
    paragraphs: [
      'A kohbar is the painting on the wall of the room where a newly married couple spend their first days. It is drawn with lotus, bamboo, fish and birds, signs of fertility and of a long marriage.',
      'Sunita worked on this one for twenty-one days, one section at a time, from the centre outwards. Each section is finished before the next is begun, so the colours stay clean.',
      'Traditionally a kohbar was painted on a mud wall and lasted a season. This one is on handmade paper, so it can be framed and kept.',
    ],
  },
  'JNK-MH-26-0029': {
    heading: 'The bird that calls the rain',
    paragraphs: [
      'In Mithila the peacock is painted for its beauty and for the rains. Its call is heard before the monsoon, and a peacock on the wall is a wish for the season to come on time.',
      'Sunita painted this small piece in nine days. She outlines in black first, then fills each feather with bands of colour, so that no two eyes in the tail are the same.',
      'Natural colours are best kept out of strong sun. Hang it where it gets the light of morning and not of noon.',
    ],
  },
  'KTM-TK-26-0012': {
    heading: 'Ninety-four days on a grid',
    paragraphs: [
      'Karma began this thangka as every painter does, by ruling a grid of proportion lines over the cotton. The grid fixes the size of every part of the goddess, from the width of her eyes to the length of her hand.',
      'He ground malachite for her skin and azurite for the blue of the sky, and mixed each with glue. Gold goes on last, as a paint, and is polished with a smooth stone until it gleams.',
      'The eyes are painted last, and until then the painting is not thought finished. Mounted in silk brocade, it is ready to hang.',
    ],
  },
  'KTM-TK-26-0015': {
    heading: 'The healer, in lapis blue',
    paragraphs: [
      'The Medicine Buddha is shown with deep blue skin, holding a bowl of medicine in his lap. Karma painted him over seventy-one days, on cotton prepared with chalk and glue and polished smooth.',
      'Blue is the hardest colour to make. Lapis or azurite is ground for hours into a fine powder, and the finer the powder the paler it becomes, so a painter grinds only as far as the colour allows.',
      'He sits on a lotus throne beneath a halo of gold. Thangkas like this are used for meditation, and are hung at the height of the eyes.',
    ],
  },
  'BKT-WD-26-0018': {
    heading: 'Sal wood, from one block',
    paragraphs: [
      'Bishnu carved this Ganesh from a single block of sal wood in his family’s workshop in Tachupal, Bhaktapur, where carvers have worked on temple struts for generations.',
      'He roughs out the form with an adze, then moves through chisels of a dozen widths. The trunk is the risky part. The grain runs straight, so a curve cut too thin can snap.',
      'The finish is oil, rubbed in over several days, and not varnish, so the wood can be oiled again as it ages.',
    ],
  },
  'BKT-WD-26-0021': {
    heading: 'A window from the town of the peacock',
    paragraphs: [
      'Bhaktapur’s Peacock Window is the best known carved window in the Kathmandu Valley, and this panel follows its idea: a peacock with its tail spread as a fan of fine lines.',
      'Bishnu carved the panel from one board of sal over forty-six days. The tail alone is hundreds of cuts, each made with a chisel no wider than a finger.',
      'A panel like this was made to let air and light into a room and keep the room private. It still works that way as a screen, or hung on a wall.',
    ],
  },
  'PTN-ST-26-0007': {
    heading: 'Twenty-two days with hammer and chisel',
    paragraphs: [
      'Ram trained on the restoration of Patan’s temples, and he carves stone the way it was carved there, with a hammer and a set of steel chisels he forges himself.',
      'The stone is dark and dense, so the figure appears slowly. He roughs it out first, refines the face and hands with finer tools, and finishes with sand and water.',
      'The hands rest in the lap in the meditation pose. At 9.5 kg, the piece needs a firm shelf or a low table.',
    ],
  },
  'PTN-MT-26-0118': {
    heading: 'The Buddha of boundless light',
    paragraphs: [
      'Amitabha is the Buddha of boundless light, shown with his hands resting in his lap in meditation. Raju made this statue in twenty-four days, a little faster than his earth-touching Shakyamuni, because the pose is simpler.',
      'With the hands at rest, the wax work goes into the robe and the lotus base. Raju spends the most time on the folds, which have to look soft in hard metal.',
      'Fire-gilding takes the last days, and is done in an open-air space because of the fumes.',
    ],
  },
};
