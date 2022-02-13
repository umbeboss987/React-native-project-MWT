export const sProva = (state) => state.appReducer;

export const sCategories = (state) => state.appReducer.categories;
export const sLoadingCategories = (state) => state.appReducer.loadingCategories;

export const sLoadingSingleCategory =(state) => state.appReducer.loadingSingleCategory;
export const sSingleCategory =(state) => state.appReducer.singleCategory;

export const sLoadingNewRelease = (state) => state.appReducer.loadingNewReleases;
export const sNewReleases = (state) => state.appReducer.newReleases;

export const sLoadingNewPlaylist = (state) => state.appReducer.loadingNewPlaylist;
export const sNewPlaylist = (state) => state.appReducer.newPlaylist;

export const sUserPlaylist = (state) => state.userReducer.playlists;