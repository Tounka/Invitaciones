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

export const SeccionUbicacionGenerico = ({  img, data, titulo="Recepción" }) => {
    return (
        <ContenedorSeccionUbicacionGenerico>
            <ContenedorInternoUbicacion>
                <ContenedorUbicacionGenericoSmall height='350px'>
                    <ContenedorImgParallax height='100%' src={img} />

                    <ContenedorTxtUbicacion>
                        <TxtEspecialUbicacion color='white'>{titulo}</TxtEspecialUbicacion>
                        <TxtUbicacion color='white'>{data.nombreUbicacion}</TxtUbicacion>
                        <TxtUbicacion color='white'>{data.ubicacion}</TxtUbicacion>
                        <TxtUbicacion color='white'>{data.horaEventoUbicacion}</TxtUbicacion>
                        
                       
                        <BotonMaps href={data.ubicacionMaps} target="_blank" rel="noopener noreferrer">
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
