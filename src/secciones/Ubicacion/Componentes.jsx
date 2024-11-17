import styled from "styled-components";
import { ContenedorGenerico, ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";

export const ContenedorSeccionUbicacionGenerico = styled(ContenedorGenerico)`
    width: 100%;
    gap: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContenedorInternoUbicacion = styled(ContenedorGenerico)`
    width: 100%;
    max-width: 1200px;
    gap: 0;
    background-color: var(--blancoPrincipal);
`
export const ContenedorUbicacionGenericoSmall = styled(ContenedorGenericoSmall)`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    gap: 0;
    @media (min-width: 800px) {
        height: ${props => props.height || '400px'};
    }
    
`



export const ContenedorTxtUbicacion = styled.div`
    display: flex;
    flex-direction: column;
    
    width: auto;
    gap: 10px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 15%;
 
    padding: 10px;

    background-color: #000000ad;
    max-width: 400px;
    @media (max-width: 600px) {
        max-width: 200px;
    }
    
`
export const TxtEspecialUbicacion = styled(TxtGenerico)`
    font-family: var(--fuenteElegante);
    font-size: 48px;
    
    @media (max-width: 600px) {
        font-size: var(--txtSize2);
    }

`
export const TxtUbicacion = styled(TxtGenerico)`

    font-size: var(--txtSize3);
    
    @media (max-width: 600px) {
        font-size: var(--txtSize4);
    }

`