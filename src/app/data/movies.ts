export interface Movie {
  title: string;
  description: string;
  genre: string;
  session: string;
  poster: string;
}
export const movies: Movie[] = [
  {
    title: 'Інтерстеллар',
    description: 'Космічна епопея про подорож крізь чорну діру.',
    genre: 'Наукова фантастика',
    session: '2025-05-10 19:00',
    poster: 'https://example.com/interstellar.jpg'
  },
  {
    title: 'Темний лицар',
    description: 'Бетмен проти Джокера.',
    genre: 'Екшн',
    session: '2025-05-12 21:00',
    poster: 'https://example.com/darkknight.jpg'
  }
];
