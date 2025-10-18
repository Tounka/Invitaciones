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
export const SeccionFrase = ({ telefono, frase}) => {
    return (
        <ContenedorFrase>
            <ContenedorTxt>

                <TextoFrase size='var(--txtSize3)'>
                    {frase}
                </TextoFrase>
                <BtnConfirmar href={`https://wa.me/${telefono}?text=Confirmo%20mi%20asistencia`} target="_blank" rel="noopener noreferrer">

                Confirmar asistencia
            </BtnConfirmar>
        </ContenedorTxt>

       
        </ContenedorFrase >
    );
};
