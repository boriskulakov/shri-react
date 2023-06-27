'use client'

import TicketCard from '../components/ticketCard/ticketCard'
import { useSelector } from 'react-redux'
import {
  useGetMoviesByCinemaQuery,
  useGetMoviesQuery,
} from '@/redux/services/movieApi'
import { movie } from '@/app/utils/movie'
import FilmLoad from './filmLoad'
import { selectFilterName } from '@/redux/features/filters/selector'
import {
  selectFilterGenre,
  selectFilterCinema,
} from '@/redux/features/filters/selector'

function Films() {
  const filterName = useSelector((state) => selectFilterName(state))
  const filterGenre = useSelector((state) => selectFilterGenre(state))
  const filterCinema = useSelector((state) => selectFilterCinema(state))

  let { data: movies, isLoading: movieLoading } = useGetMoviesQuery(null)
  let { data: cinemas, isLoading: cinemaLoading } = useGetMoviesByCinemaQuery(
    filterCinema.id
  )

  if (filterName.length > 0) {
    movies = movies.filter((el: movie) =>
      el.title.toLowerCase().startsWith(filterName.toLowerCase())
    )
  }

  if (filterGenre?.length > 0) {
    movies = movies.filter((el: movie) => el.genre === filterGenre)
  }

  if (filterCinema.movieIds?.length > 1) {
    movies = cinemas.filter((cinema: movie) =>
      movies.find((el) => el.id == cinema.id)
    )
  }

  return (
    <>
      {movieLoading || cinemaLoading ? (
        <>
          <FilmLoad />
          <FilmLoad />
        </>
      ) : (
        movies.map((el: movie) => <TicketCard id={el.id} key={el.id} />)
      )}
    </>
  )
}

export default Films
