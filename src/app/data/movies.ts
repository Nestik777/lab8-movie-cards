
export interface Movie {
  title: string;
  description: string;
  genre: string;
  session: string;
  poster: string;
}

export const movies: Movie[] = [
  {
    title: 'Паперовий будинок',
    description: 'Група вмілих злодіїв з піщаної маски планує і проводить найбільше пограбування в історії Іспанії — захоплення Монетного двору в Мадриді.',
    genre: 'Кримінальна драма',
    session: '2025-06-05 20:00',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWm-m1UN-ReQCYHojvotOmOHfASNE9jZPjlwdi8MD744199le_g-ZSp43uKZQmtLj29aZ4mx2nknpWsEMsnhBXyiFf4cmm_YNp05Y_lLlFPj5tS3i8xeDGhxUcTTKp4bxdXE.jpg?r=6ad'
  },
  {
    title: 'Devil May Cry',
    description: 'Мисливець на демонів Данте бореться із силами темряви, рятуючи людство від загрози з паралельного пекельного світу.',
    genre: 'Екшн/Фентезі',
    session: '2025-06-07 18:30',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRnhaYulB8EnghG7tlYocX6-ohln-tvSK27DL6FD0I9rurRyvujW2wTch0Kh63w14ad0ocOOLtvm9za7EFOys1Xbr1UXfu4iz0thF-auXrJa-ghLMmC3L-lWYdSLH7I3rt_8.jpg?r=11e'
  },
  {
    title: 'Аркейн',
    description: 'Історія розколу між містом ПИЛТОВЕР та біднішою підземною Зоною Поради через винахід потужної зброї, яка загрожує обом світам.',
    genre: 'Анімація/Фентезі',
    session: '2025-06-10 19:45',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa6qtjIfryGqtnGt21ptJv46vNiSZX-XOkMMSpLczzIa58izBPMbj5KYj2nrPR4oduIuYEbV3ycHwTYllSaQjTELhvJ7z0mTBlxZ7IjPeSizbD6KqLM0TNBpRAmWQjUVCpGS.jpg?r=9a8'
  },
  {
    title: 'Glory',
    description: 'Американські солдати-афроамериканці вперше формують окремий полк під час Громадянської війни в США та ведуть героїчну боротьбу за свободу.',
    genre: 'Військова драма',
    session: '2025-06-12 21:00',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRQPcvmdSGelJxCsDTpuf-OVr7ZdJJS_ZJP0YKYIi205RlGK81pDF3YMXNS-OYLeoPrpuyScUwjwSJJ_uI94S9_oGDhbgwTjBFp2ipDJKap_JvJekPYNuLBORNFkLPGy3W0Y.jpg?r=f28'
  },
  {
    title: 'Людина-павук',
    description: 'Пітера Паркера кусає радіаційний павук, даруючи йому надлюдські сили й почуття відповідальності за захист Нью-Йорка.',
    genre: 'Супергеройський екшн',
    session: '2025-06-15 17:30',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf2Ld7VNBFZ2nKXi3j6QqysZY7ozBw-SqE-bSUCMUEib8XtWQLcGRTb4jY1YAVTrmQzMv3D4O0Bju4BdYBxSEF2iNZEHx_IHEFM.webp?r=40f'
  },
  {
    title: 'Оппенгеймер',
    description: 'Біографічна драма про життя та моральні дилеми Дж. Роберта Оппенгеймера — “батька атомної бомби”.',
    genre: 'Біографічна драма',
    session: '2025-06-18 20:15',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdmHjKUTpKeeVN4pADoZSnqshT4tc3QWjTBykbmNOzXFAlXvDqAZx3zSBQLYqa0x4FfoyWPNayGpEfVj9C0HIeKqujKHSsSg83MACAgY_nDkbw43qmijHjovwCiGE86jJRTAVDGGErZ50dTK6uNQMXuh4SlGW4WabGYwzgsh8OGuC8QfPbyMXbQhKPv29w.webp?r=ab7'
  },
  {
    title: 'Сонік',
    description: 'Швидкісний їжачок Сонік утікає на Землю, де знаходить нового друга й спільно рятує планету від лиходія — доцента Роботніка.',
    genre: 'Сімейний/Пригодницький',
    session: '2025-06-20 16:00',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUSfW8keQcOWBZ6kw16j1d399rsBhRx3rZ_j42SgggGKBu4L8XIP8EG7ceEEUb9a-5YLU49KO1ndjGFPxGziGbMx8Pf2hZzephw.webp?r=0c4'
  },
  {
    title: 'Форсаж',
    description: 'Неперевершені гонщики під керівництвом Домініка Торетто змагаються з кримінальними синдикатами на високошвидкісних переговорах.',
    genre: 'Екшн/Гонки',
    session: '2025-06-22 22:00',
    poster: 'https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTP14vnNXwMUfb5MywP5xaEP_qa_NXh5xEVvgnEFfSKzxIMNCmagEM4iQFRLJpr7eFfYkjam7Pm3IMwwI4nqWqY9WF-Avv3Qexg.webp?r=ab9'
  }
];
