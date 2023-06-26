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
