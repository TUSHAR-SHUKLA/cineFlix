import { useEffect, useState } from "react"

//importing dot env file
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const useFetch = (apiPath, queryTerm="") => {

    const [data, setData] = useState([]);

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`
    // console.log(apiKey);
    // console.log(url);

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url)
            const json = await response.json();
            // console.log(data);

            setData(json.results)
        }
        fetchMovies();
    }, [url])

  return {data}
}
