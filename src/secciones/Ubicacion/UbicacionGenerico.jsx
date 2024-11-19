import styled from "styled-components";
import { ContenedorSeccionUbicacionGenerico, ContenedorTxtUbicacion, ContenedorUbicacionGenericoSmall, ContenedorInternoUbicacion, TxtEspecialUbicacion, TxtUbicacion } from "./Componentes";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorImg, ContenedorImgParallax } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { ImgPicture } from "../../recursos/componentesGenericos/ImgPicture";

// Componente del botón estilizado
const BotonMaps = styled.a`
    display: flex;
    width: auto;
    text-align: center;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: var(--cafePrincipal);;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    transition: opacity .2s ;
    &:hover {
        opacity: .8;
        transition: opacity .2s ;
    }
`;

export const SeccionUbicacionGenerico = ({ iframe, ubicacion, img }) => {
    return (
        <ContenedorSeccionUbicacionGenerico>
            <ContenedorInternoUbicacion>
                <ContenedorUbicacionGenericoSmall height='350px'>
                    <ContenedorImgParallax height='100%' src={img} />

                    <ContenedorTxtUbicacion>
                        <TxtEspecialUbicacion color='white'>Recepción</TxtEspecialUbicacion>
                        <TxtUbicacion color='white'>{ubicacion}</TxtUbicacion>
                        <TxtUbicacion color='white'>Av. Sábalo Cerritos, Cerritos, 82112 Mazatlán, Sin.</TxtUbicacion>
                        <TxtUbicacion color='white'>Hora 17:00</TxtUbicacion>
                        
                       
                        <BotonMaps href="https://www.google.com/maps/place/Trailer+Park+Maravillas/@23.2959442,-106.4815673,15z/data=!4m2!3m1!1s0x0:0x8f0acee5a893b301?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer">
                            Mapa
                        </BotonMaps>
                    </ContenedorTxtUbicacion>
                </ContenedorUbicacionGenericoSmall>
                
                {/* 
                <ContenedorUbicacionGenericoSmall height='250px'>
                    {iframe}
                </ContenedorUbicacionGenericoSmall>
                */}
            </ContenedorInternoUbicacion>
        </ContenedorSeccionUbicacionGenerico>
    );
};
