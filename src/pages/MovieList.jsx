import { useEffect } from 'react';
import {Card} from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useUpdateTitle } from '../hooks/useUpdateTitle'
export const MovieList = ({apiPath, title}) => {
  
  useUpdateTitle(title)
  // useEffect(()=>{
  //   document.title=title;
  // })

  const { data:movies } = useFetch(apiPath)


  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">

          {movies.map((movie) =>(
             <Card key={movie.id} movie={movie} />
          ))}
          


          </div>
        </section>
    </main>
  )
}
