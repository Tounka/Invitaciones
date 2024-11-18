import styled from "styled-components"
import bgImg from '../img/bgImage.jpg'
export const ContenedorGenericoSmall = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: var(--blancoPrincipal);
    width: 100%;
    height: 300px;
    position: relative;

    
    background-image: url(${bgImg}) !important;
    background-position: center;
    background-size: cover;

`
export const ContenedorGenerico = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: var(--blancoPrincipal);
    width: 100%;
    height: auto;

  

`;
export const ContenedorImg = styled.div`
    width: 100%;
    height: ${props => props.height ? props.height : '600px'};
    
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const ContenedorImgParallax = styled.div`
    width: 100%;
    height: ${props => props.height || '400px'};
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: top;
    background-attachment: fixed; 
`;