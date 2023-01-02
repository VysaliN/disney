const API_KEY = process.env.REACT_APP_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&with_watch_providers=122&watch_region=IN`,
    fetchHotstarOriginals: `/discover/tv?api_key=${API_KEY}&with_watch_providers=122&watch_region=IN`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&with_watch_providers=122&watch_region=IN`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_watch_providers=122&watch_region=IN`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_watch_providers=122&watch_region=IN`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&with_watch_providers=122&watch_region=IN`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&with_watch_providers=122&watch_region=IN`
}

export default requests;