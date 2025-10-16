import { useEffect, useState } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { GiAmpleDress } from "react-icons/gi";

import bgImg from '../../recursos/img/bgImage.jpg'
import { data } from "../../Data";
const ContenedorCodigoVestimenta = styled(ContenedorGenericoSmall)`
    width: 100%;
    height: auto;
    padding: 20px;
   
    `

const ContenedorInterto = styled(ContenedorGenericoSmall)`
    max-width: 1200px;
    height: auto;
    padding: 10px;
    border: solid 4px var(--cafePrincipal);
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
const ContenedorVertical = styled(ContenedorHorizontal)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;  
`;

const ColorReservado = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: ${props => props.color ? props.color : ''};
`


export const CodigoVestimenta = ({ codigoVestimenta }) => {
    return (
        <ContenedorCodigoVestimenta>
            <ContenedorInterto>
                <ContenedorHorizontal>
                    <TxtGenerico size={'var(--txtSize1)'} fontFamily='var(--fuenteElegante)' bold>
                        {`Dress Code`}
                    </TxtGenerico>

                </ContenedorHorizontal>


                {/* <TxtGenerico size={'var(--txtSize4)'} bold>
                    <br />
                    COCKTAIL
                    <br />
                    <br />
                </TxtGenerico> */}

                <TxtGenerico size={'var(--txtSize4)'} bold>
                    {data.msgCodigoVestimenta}
                </TxtGenerico>
                <ContenedorVertical>
                    <TxtGenerico size={'var(--txtSize4)'} bold>Colores reservados</TxtGenerico>
                    <ContenedorHorizontal>
                        {/* <ColorReservado color={'#FDB086'} /> */}
                        {data.coloresReservados.map((color, index) =>{
                            return(

                                <ColorReservado key={index} color={color} />
                            )
                        })}
                    </ContenedorHorizontal>
                </ContenedorVertical>

            </ContenedorInterto>
        </ContenedorCodigoVestimenta>
    );
};