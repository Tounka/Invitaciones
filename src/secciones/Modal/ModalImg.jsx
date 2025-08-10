import styled from "styled-components";
import { ImgPicture } from "../../recursos/componentesGenericos/ImgPicture";


const ContenedorImg = styled.div`
    width: auto;
    max-height: 90dvh;
    max-width: 90dvw;
    height: 90%;
    max-height: auto;
    padding: 10px;
    background-color: white;

    overflow: hidden;
    @media (max-width: 600px) {
         height: auto;
         width: 90%;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain; 
      
    }
`

export const ContenidoModalImg = ({src, alt}) =>{

    return(
        <ContenedorImg>
            <ImgPicture src={src} alt={alt} />
        </ContenedorImg>
    )
}
