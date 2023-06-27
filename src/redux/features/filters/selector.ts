export const selectFilterModule = (state) => state.filters

export const selectFilters = (state) => selectFilterModule(state)
export const selectFilterName = (state) => selectFilterModule(state).name
export const selectFilterGenre = (state) => selectFilterModule(state).genre
export const selectFilterCinema = (state) => selectFilterModule(state).cinema
