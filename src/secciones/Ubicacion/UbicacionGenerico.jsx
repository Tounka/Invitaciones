import styled from "styled-components";
import { ContenedorSeccionUbicacionGenerico, ContenedorTxtUbicacion, ContenedorUbicacionGenericoSmall,ContenedorInternoUbicacion,TxtEspecialUbicacion, TxtUbicacion } from "./Componentes";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorImg, ContenedorImgParallax } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { ImgPicture } from "../../recursos/componentesGenericos/ImgPicture";



export const SeccionUbicacionGenerico = ({iframe, ubicacion, img}) =>{
    return(
        <ContenedorSeccionUbicacionGenerico>
            <ContenedorInternoUbicacion>
            
   
                <ContenedorUbicacionGenericoSmall height='350px'>
                    <ContenedorImgParallax height='100%' src={img}/>

                    <ContenedorTxtUbicacion>
                        <TxtEspecialUbicacion  color='white' >  Recepción    </TxtEspecialUbicacion>
                        <TxtUbicacion  color='white' > {ubicacion} </TxtUbicacion>
                        <TxtUbicacion  color='white' >  Av. Sábalo Cerritos, Cerritos, 82112 Mazatlán, Sin. </TxtUbicacion>
                        <TxtUbicacion  color='white' >  Hora 17:00 </TxtUbicacion>
                    </ContenedorTxtUbicacion>

                </ContenedorUbicacionGenericoSmall>

                <ContenedorUbicacionGenericoSmall  height='250px'>
                    {iframe}
                </ContenedorUbicacionGenericoSmall>


              
                 
            </ContenedorInternoUbicacion>
        </ContenedorSeccionUbicacionGenerico>
    )
}