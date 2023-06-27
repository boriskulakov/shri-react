import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getCinemas: builder.query({ query: () => 'cinemas' }),
    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
    getMovies: builder.query({ query: () => 'movies' }),
    getMoviesByCinema: builder.query({
      query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
    }),
    getReviews: builder.query({ query: () => 'reviews' }),
    getReview: builder.query({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
})

export const {
  useGetCinemasQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetMoviesByCinemaQuery,
  useGetReviewQuery,
  useGetReviewsQuery,
} = movieApi
