import{ useEffect, useState } from 'react'

import { api } from '../../services/api'

import {Container} from './style'
import { Paginate } from '../Paginate'
import {Cards} from '../Cards/index'


type MoviesList = {
    poster_path:string;
    id:number;
    title:string;
    overview:string;

}

export function MovieCards(){

    const [movies,setMovies] = useState<MoviesList[]>([])
    const [page,setPage] = useState<number>(1)

    
    useEffect( ()=>{
        async function fetchMovies(){
            await api.get(`/filmes?page=${page}`).then(response=>setMovies(response.data.results))
        }
        fetchMovies()
        
    },[page])

    const paginateProps = {
        page,
        setPage
    }

    return(
        <Container>
            <Paginate pageProps={paginateProps}/>   
            <div className="containerCards">
                {movies.map(movie => <Cards cardsProp={movie}/>)}
            </div>
        </Container>
    )
}