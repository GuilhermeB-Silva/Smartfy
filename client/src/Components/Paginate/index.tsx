import { Container } from "./style";

import {FaAngleDoubleRight,FaAngleDoubleLeft} from 'react-icons/fa'
import {IconContext} from 'react-icons'



type PaginateProps = {
    pageProps:{
        page:number;
        setPage:(x:number) => void

    }
}


export function Paginate({pageProps:{page,setPage}}:PaginateProps){

    function handleNextPage(){        
        setPage(page + 1)
    }

    function handlePreviousPage(){
        if(page <= 1){
            return
        }
        setPage(page - 1)
    }

    return(
        <Container>
            <IconContext.Provider 
            value=
            {{className:'paginate-icons'}} >
                <FaAngleDoubleLeft onClick={handlePreviousPage}/>   
                <span>{page}</span>
                <FaAngleDoubleRight onClick={handleNextPage}/>
            </IconContext.Provider>
        </Container>
    )


}