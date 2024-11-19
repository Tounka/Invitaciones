import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { FaRegEnvelope } from "react-icons/fa6";


const BtnConfirmar = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--cafePrincipal);
    color: white;
    text-decoration: none;
    font-size: var(--txtSize3);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s;

    transition: opacity .2s ;
    &:hover {
        opacity: .8;
        transition: opacity .2s ;
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
    border: solid 4px var(--cafePrincipal);
    flex-direction: column;
    gap: 20px;
`;

const TextoFrase = styled(TxtGenerico)`
    font-size: var(--txtSize3);

    @media (max-width: 500px) {
        font-size: var(--txtSize4);
    }
`
export const SeccionFrase = () => {
    return (
        <ContenedorFrase>
            <ContenedorTxt>
               
                <TextoFrase size='var(--txtSize3)'>
                    Hay momentos en la vida que son muy especiales por si solos, pero al compartirlo con personas tan especiales como tú se convierten en momentos imposibles de olvidar. Es por eso que para nosotros es un placer esperarte el día de nuestra boda.
                </TextoFrase>
                <BtnConfirmar href="https://wa.me/523313429755?text=Confirmo%20mi%20asistencia" target="_blank" rel="noopener noreferrer">
                    Confirmar asistencia
                </BtnConfirmar>
            </ContenedorTxt>

       
        </ContenedorFrase>
    );
};
