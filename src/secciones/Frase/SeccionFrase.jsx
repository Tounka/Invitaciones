import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { FaRegEnvelope } from "react-icons/fa6";


const BtnConfirmar = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--doradoSuave);
    color: white;
    text-decoration: none;
    font-size: var(--txtSize3);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: darkgoldenrod;
    }
`;

const ContenedorFrase = styled(ContenedorGenericoSmall)`
    width: 100%;
    height: auto;
    gap: 10px;
    padding: 20px;
`;

const ContenedorTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 400px;
    max-width: 80%;
    height: auto;
    border-radius: 20px;
    border: solid 4px var(--doradoSuave);
    flex-direction: column;
    gap: 20px;
`;

export const SeccionFrase = () => {
    return (
        <ContenedorFrase>
            <ContenedorTxt>
                <TxtGenerico size='var(--txtSize1)' fontFamily='var(--fuenteElegante)'>
                    Te esperamos
                </TxtGenerico>
                <TxtGenerico size='var(--txtSize3)'>
                    Hay momentos en la vida que son muy especiales por si solos, pero al compartirlo con personas tan especiales como tú se convierten en momentos imposibles de olvidar.
                </TxtGenerico>
                <BtnConfirmar href="https://wa.me/523313429755?text=Confirmo%20mi%20asistencia" target="_blank" rel="noopener noreferrer">
                    Confirmar asistencia
                </BtnConfirmar>
            </ContenedorTxt>

       
        </ContenedorFrase>
    );
};
