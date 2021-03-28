import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { Paginate } from '../Paginate'
import {Cards} from '../Cards/index'


import {Container} from './style'

type SeriesList = {
    poster_path:string;
    id:number;
    name:string;
    overview:string;
}

export function SeriesCards(){

    const [series,setSeries] = useState<SeriesList[]>([])
    const [page,setPage] = useState<number>(1)

    useEffect( () =>{

        async function fetchSeries(){
            await api.get(`/series?page=${page}`).then(response=>setSeries(response.data.results))
        }
        fetchSeries()
        
    },[page])

    const paginateProps = {
        page,
        setPage
    }

    return(
        <Container>
            <Paginate pageProps={paginateProps}/>   
            <div className="containerCards">
                {series.map(series => (<Cards cardsProp={series}/>))}
            </div>
        </Container>
    )


}