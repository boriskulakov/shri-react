export interface movie {
  title: string
  posterUrl: string
  releaseYear: number
  description: string
  genre: string
  id: string
  rating: number
  director: string
  reviewIds: string[]
}

export const defaultMovie = {
  title: 'Название фильма',
  posterUrl: '',
  releaseYear: 0,
  description: 'Несколько слов о фильме...',
  genre: '...',
  id: '',
  rating: 0,
  director: 'Хороший человек',
  reviewIds: [],
}

export const translateGenre = (genre: string): string => {
  if (genre === 'horror') return 'Ужасы'
  if (genre === 'fantasy') return 'Фэнтези'
  if (genre === 'action') return 'Боевиĸ'
  if (genre === 'comedy') return 'Комедия'
  return '...'
}

interface genre {
  id: string
  name: string
}

export const genres: genre[] = [
  {
    id: 'none',
    name: 'Не выбран',
  },
  {
    id: 'action',
    name: 'Боевик',
  },
  {
    id: 'comedy',
    name: 'Комедия',
  },
  {
    id: 'fantasy',
    name: 'Фэнтези',
  },
  {
    id: 'horror',
    name: 'Ужасы',
  },
]
