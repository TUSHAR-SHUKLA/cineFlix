import { useEffect } from 'react';
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
import {useUpdateTitle} from '../hooks/useUpdateTitle'

export const Search = ({apiPath}) => {
  const [SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  
  const {data: movies} = useFetch(apiPath, queryTerm)

  useUpdateTitle(`Search results: ${queryTerm}`);

  // useEffect(() => {
  //  document.title =`Search results: ${queryTerm}`;
  // })

  return (
    <main >
    <section className=' py-4 px-4'>
        <p className='text-2xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for ${queryTerm}` : `Results for '${queryTerm}'`}</p>
    </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
