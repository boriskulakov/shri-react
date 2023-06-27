export const selectCartModule = (state) => state.cart

export const selectFilmTicketsAmount = (state, id: string) =>
  selectCartModule(state)[id] || 0

export const selectAllTicketsAmount = (state): number => {
  if (Object.entries(selectCartModule(state)).length === 0) return 0

  return Object.values(selectCartModule(state))?.reduce(
    (a: number, b: number) => a + b
  )
}

export const selectAllFilmWithTickets = (state): string[] => {
  if (Object.entries(selectCartModule(state)).length === 0) return []

  return Object.keys(selectCartModule(state))
}
