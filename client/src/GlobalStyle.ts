import { createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}


html{

    @media(max-width:1440px){
        font-size:93.75%
    }

    @media(max-width:1024px){
        font-size:87.5%
        
    }

    @media(max-width:768px){
        font-size:81.25%
        
    }

    @media(max-width:425px){
        font-size:75%
        
    }

    @media(max-width:375px){
        font-size:68.75%
        
    }



    font-family: 'Roboto', sans-serif;
}





`