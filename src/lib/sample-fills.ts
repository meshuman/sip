// Sample answers for the content files' open {{TODO}} items, used by the investor prototype.
// Applied only when SAMPLE_CONTENT is not "false" (see .env.example). Replace each with the real
// answer in the content file itself, then delete it here.
export const SAMPLE_FILLS: Record<string, [string, string][]> = {
  'help-shipping': [
    ['{{TODO: dispatch city}}', 'Lalitpur'],
    ['{{TODO: countries or \\"most countries\\"}}', 'most countries'],
    ['{{TODO: countries or "most countries"}}', 'most countries'],
    ['{{TODO: typical range}}', 'in 10 to 16 working days'],
    [
      "{{TODO: list of countries or regions, and any we can't ship to}}",
      'We ship to most of Europe, North America, East and Southeast Asia, Australia, New Zealand and India. We can’t ship to countries under trade restrictions, or to PO boxes. If your country isn’t offered at checkout, write to us and we’ll look into it.',
    ],
    ['about {{TODO}} working days', 'about 5 working days'],
    ['{{TODO: e.g. 4 to 8 working days}} by {{TODO: carrier}}', '4 to 7 working days by insured express courier'],
    [
      `{{TODO: shipping price rule, e.g. "Shipping is shown at checkout before you pay, based on the piece's size, weight and your country."}}`,
      'Shipping is shown at checkout before you pay, based on the piece’s size, weight and your country. A statue of about 35 cm costs around Rs 6,800 to ship to Europe, insured.',
    ],
    [
      '{{TODO: materials, e.g. recycled paper fill, wooden crate for stone over 10 kg}}',
      'We use recycled paper fill and moulded pulp corners, and stone over 10 kg travels in a wooden crate',
    ],
  ],
  'help-returns': [
    ['{{TODO: return window, e.g. 14 days}}', '14 days'],
    ['{{TODO: change-of-mind policy. A suggested default follows; confirm or replace:}}\n', ''],
  ],
  'help-payments': [
    ['{{TODO: methods, e.g. card, eSewa, Khalti, bank transfer}}', 'card, eSewa, Khalti or bank transfer'],
    ['{{TODO: final list, e.g.}}\n', ''],
    ['over {{TODO}}', 'over Rs 1,00,000'],
    ['{{TODO: payment provider}}', 'a licensed, card-industry certified payment provider'],
  ],
  'help-export': [
    [
      '{{TODO: who pays duties: collected by the carrier on delivery, or included at checkout}}',
      'Checkout shows an estimate before you pay, and the courier collects any duty on delivery.',
    ],
    ['{{TODO: fee and timing}}', 'We quote the fee and timing within a day of your message.'],
  ],
  visit: [['{{TODO: whether visits are free, or a fee paid to the workshop}}', 'Visits are free for you. Sīpa pays the workshop for the maker’s time.']],
  trade: [
    [
      '{{TODO: trade terms, e.g. trade discount, lead times for commissions, deposit}}',
      'Trade clients receive 10% off listed pieces. Commissions take 6 to 14 weeks, depending on the craft and size, with a 40% deposit once the design is agreed.',
    ],
  ],
  contact: [
    ['{{TODO: email}}', 'hello@sipa.example'],
    ['{{TODO: number}}', '+977 980 000 0000'],
    ['{{TODO: street address}}, Lalitpur, Nepal', 'Patan, Lalitpur, Nepal (by appointment)'],
    ['{{TODO: hours}}, Nepal time (UTC+5:45)', 'Sunday to Friday, 10:00 to 17:00, Nepal time (UTC+5:45)'],
  ],
  'care-refills': [
    ['price: "{{TODO}}", line: "Enough for about {{TODO}} oilings', 'price: "Rs 650", line: "Enough for about 20 oilings'],
    ['price: "{{TODO}}", line: Replaces', 'price: "Rs 450", line: Replaces'],
  ],
};

/** Sample publish dates for journal posts whose front matter still says TODO. */
export const SAMPLE_JOURNAL_DATES: Record<string, string> = {
  'why-we-film-the-whole-making': '2026-09-18',
  'what-arrives-in-the-box': '2026-09-04',
  'taking-art-home-from-nepal': '2026-08-21',
};
