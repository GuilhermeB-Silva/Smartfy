import styled from 'styled-components'


export const Container = styled.div`

width:100%;
display:flex;
flex-direction:column;
max-width:800px;
margin:0 auto;

.containerCards{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    justify-content:center;
    gap:1rem;
    padding:2rem 0;
}

@media(max-width:1920px){
    max-width:1500px;
    padding:0 2rem;
}

@media(max-width:1440px){
    max-width:900px;
}

@media(max-width:625px){
    .containerCards{
    grid-template-columns:repeat(3,1fr);
    }
}

@media(max-width:525px){
    .containerCards{
    grid-template-columns:repeat(2,1fr);
    
    }
}

@media(max-width:375px){
    .containerCards{
    grid-template-columns:1fr;
    
    }
}


`