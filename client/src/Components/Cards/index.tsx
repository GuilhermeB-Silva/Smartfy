import { Container} from '../Cards/style'


type MovieProps = {
    cardsProp:{
        poster_path:string;
        id:number;
        title?:string;
        name?:string;
        overview:string;
    }
}

export function Cards({cardsProp:{poster_path,id,overview,name,title}}:MovieProps){

    let description = overview

    if(description.length > 140){
        description = description.substring(0,140) + '...'
    }

    return(
        <Container key={id}>
            <img src={poster_path} alt={name} />
            <div className="movie-info">
                <h6>{name ? name : title}</h6>
                <p>{description}</p>
            </div>
        </Container>
    )
}