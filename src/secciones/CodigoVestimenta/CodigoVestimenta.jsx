import { useEffect, useState } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { GiAmpleDress } from "react-icons/gi";

import bgImg from '../../recursos/img/bgImage.jpg'
const ContenedorCodigoVestimenta = styled(ContenedorGenericoSmall)`
    width: 100%;
    height: auto;
    padding: 20px;
   
    `

const ContenedorInterto = styled(ContenedorGenericoSmall)`
    max-width: 1200px;
    height: auto;
    padding: 10px;
    border: solid 4px var(--doradoSuave);
    background-image: url(null);
`;

const ContendorIcono = styled(TxtGenerico)`
color: var(--doradoSuave);
height: 60px;
width: 60px;
font-size: 48px;
display: flex;
justify-content: center;
align-items: center;
`;

const ContenedorHorizontal = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
    gap: 10px;  
`;

export const CodigoVestimenta = ({ codigoVestimenta }) => {
    return (
        <ContenedorCodigoVestimenta>
            <ContenedorInterto>
                <ContenedorHorizontal>
                    <TxtGenerico size={'var(--txtSize1)' } fontFamily='var(--fuenteElegante)' bold>
                        {`Código Vestimenta`}
                    </TxtGenerico>
                    <ContendorIcono>
                        <GiAmpleDress />
                    </ContendorIcono>
                </ContenedorHorizontal>
                <TxtGenerico size={'var(--txtSize2)'} bold>
                    {`Playero Formal`}
                </TxtGenerico>
                <TxtGenerico size={'var(--txtSize4)'} bold>
                    {`Les invitamos a vestir de forma elegante y cómoda, ideal para un entorno de playa. Opten por camisas de lino o algodón, vestidos ligeros y frescos, y pantalones de telas suaves como el lino. Los colores claros, pasteles o estampados tropicales son perfectos. Sandalias elegantes o zapatos sin calcetines son bienvenidos.`}
                </TxtGenerico>
            </ContenedorInterto>
        </ContenedorCodigoVestimenta>
    );
};