// Real photographs, all from Wikimedia Commons under open licences. Credits are shown on /about#photo-credits.
// Piece photos show works of the same kind, not the pieces themselves, until Sīpa photographs its own.
// Maker photos show the craft or people at work, not the makers named here. Replace them with portraits of the real makers.
export interface PhotoCredit {
  /** Registry id or maker slug */
  for: string;
  title: string;
  artist: string;
  licence: string;
  url: string;
}

export const PIECE_PHOTOS: Record<string, string> = {
  'PTN-MT-26-0142': '/photos/pieces/ptn-mt-26-0142.jpg',
  'PTN-MT-26-0139': '/photos/pieces/ptn-mt-26-0139.jpg',
  'PTN-MT-26-0127': '/photos/pieces/ptn-mt-26-0127.jpg',
  'PTN-MT-26-0131': '/photos/pieces/ptn-mt-26-0131.jpg',
  'JNK-MH-26-0031': '/photos/pieces/jnk-mh-26-0031.jpg',
  'JNK-MH-26-0034': '/photos/pieces/jnk-mh-26-0034.jpg',
  'JNK-MH-26-0029': '/photos/pieces/jnk-mh-26-0029.jpg',
  'KTM-TK-26-0012': '/photos/pieces/ktm-tk-26-0012.jpg',
  'KTM-TK-26-0015': '/photos/pieces/ktm-tk-26-0015.jpg',
  'BKT-WD-26-0018': '/photos/pieces/bkt-wd-26-0018.jpg',
  'BKT-WD-26-0021': '/photos/pieces/bkt-wd-26-0021.jpg',
  'PTN-ST-26-0007': '/photos/pieces/ptn-st-26-0007.jpg',
  'PTN-MT-26-0118': '/photos/pieces/ptn-mt-26-0118.jpg',
};

export const MAKER_PHOTOS: Record<string, string> = {
  'raju-shakya': '/photos/makers/raju-shakya.jpg',
  'mira-bajracharya': '/photos/makers/mira-bajracharya.jpg',
  'sunita-jha': '/photos/makers/sunita-jha.jpg',
  'karma-tamang': '/photos/makers/karma-tamang.jpg',
  'bishnu-silpakar': '/photos/makers/bishnu-silpakar.jpg',
  'ram-maharjan': '/photos/makers/ram-maharjan.jpg',
};

export const PHOTO_CREDITS: PhotoCredit[] = [
  {
    for: 'PTN-MT-26-0142',
    title: 'Shakyamuni Buddha Statue, Patan Museum 01.jpg',
    artist: 'Belbasesuraj',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Shakyamuni_Buddha_Statue,_Patan_Museum_01.jpg',
  },
  {
    for: 'PTN-MT-26-0139',
    title: "'Green Tara' from Nepal, 15th century, Norton Simon Museum.JPG",
    artist: 'Wmpearl',
    licence: 'CC0',
    url: 'https://commons.wikimedia.org/wiki/File:%27Green_Tara%27_from_Nepal,_15th_century,_Norton_Simon_Museum.JPG',
  },
  {
    for: 'PTN-MT-26-0127',
    title: 'Vajra Bell (Ghanta) LACMA M.2001.158.2.jpg',
    artist: '',
    licence: 'Public domain',
    url: 'https://commons.wikimedia.org/wiki/File:Vajra_Bell_(Ghanta)_LACMA_M.2001.158.2.jpg',
  },
  {
    for: 'PTN-MT-26-0131',
    title: 'Nepal singing bowl.jpg',
    artist: 'PLBechly',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Nepal_singing_bowl.jpg',
  },
  {
    for: 'JNK-MH-26-0031',
    title: 'Madhubani painting by Bhuvana Meenakshi.jpg',
    artist: 'Bhuvana Meenakshi',
    licence: 'CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:Madhubani_painting_by_Bhuvana_Meenakshi.jpg',
  },
  {
    for: 'JNK-MH-26-0034',
    title: 'Mithila Painting at Patna Junction.jpg',
    artist: 'Sntshkumar750',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Mithila_Painting_at_Patna_Junction.jpg',
  },
  {
    for: 'JNK-MH-26-0029',
    title: 'Madhubani Painting 2.jpg',
    artist: 'Sarcastic_Speedster',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Madhubani_Painting_2.jpg',
  },
  {
    for: 'KTM-TK-26-0012',
    title: 'Old Green Tara.JPG',
    artist: 'Araniko, 13th century',
    licence: 'Public domain',
    url: 'https://commons.wikimedia.org/wiki/File:Old_Green_Tara.JPG',
  },
  {
    for: 'KTM-TK-26-0015',
    title: 'Medicine Buddha, 1644-1911 AD, thangka - Sichuan University Museum - Chengdu, China - DSC06197.jpg',
    artist: 'Daderot',
    licence: 'Public domain',
    url: 'https://commons.wikimedia.org/wiki/File:Medicine_Buddha,_1644-1911_AD,_thangka_-_Sichuan_University_Museum_-_Chengdu,_China_-_DSC06197.jpg',
  },
  {
    for: 'BKT-WD-26-0018',
    title: 'Lord Ganesh wood carving.jpg',
    artist: 'Roman Raghu Shrestha',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Lord_Ganesh_wood_carving.jpg',
  },
  {
    for: 'BKT-WD-26-0021',
    title: 'Peacock Window Dattatraya Temple Bhaktapur Nepal Rajesh Dhungana (1).jpg',
    artist: 'Rajesh Dhungana',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Peacock_Window_Dattatraya_Temple_Bhaktapur_Nepal_Rajesh_Dhungana_(1).jpg',
  },
  {
    for: 'PTN-ST-26-0007',
    title: 'Buddha stone sculpture at National Museum of Nepal.jpg',
    artist: 'Anup Sadi',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Buddha_stone_sculpture_at_National_Museum_of_Nepal.jpg',
  },
  {
    for: 'PTN-MT-26-0118',
    title: 'Amitabha Buddha 1 at National Museum of Nepal (2).jpg',
    artist: 'Anup Sadi',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Amitabha_Buddha_1_at_National_Museum_of_Nepal_(2).jpg',
  },
  {
    for: 'raju-shakya',
    title: 'A master craftsman specializing in statue embossing.jpg',
    artist: 'Volo817',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:A_master_craftsman_specializing_in_statue_embossing.jpg',
  },
  {
    for: 'mira-bajracharya',
    title: 'Indra, a Vedic God in Hinduism.jpg',
    artist: 'Unknown authorUnknown author',
    licence: 'Public domain',
    url: 'https://commons.wikimedia.org/wiki/File:Indra,_a_Vedic_God_in_Hinduism.jpg',
  },
  {
    for: 'sunita-jha',
    title: 'Mithila Painting artist - Flickr - askmeaks.jpg',
    artist: 'Abhishek Singh from Kathmandu, Nepal',
    licence: 'CC BY-SA 2.0',
    url: 'https://commons.wikimedia.org/wiki/File:Mithila_Painting_artist_-_Flickr_-_askmeaks.jpg',
  },
  {
    for: 'karma-tamang',
    title: 'Nepalese Thangka Painter - Thangka Art.jpg',
    artist: 'AjarnRichard',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Nepalese_Thangka_Painter_-_Thangka_Art.jpg',
  },
  {
    for: 'bishnu-silpakar',
    title: 'Patan Kathmandu (5084980515).jpg',
    artist: 'S Pakhrin from DC, USA',
    licence: 'CC BY 2.0',
    url: 'https://commons.wikimedia.org/wiki/File:Patan_Kathmandu_(5084980515).jpg',
  },
  {
    for: 'ram-maharjan',
    title: 'Patan 009.jpg',
    artist: 'Babin Dulal',
    licence: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Patan_009.jpg',
  },
];
