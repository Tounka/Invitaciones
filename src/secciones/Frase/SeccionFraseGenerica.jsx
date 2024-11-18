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

export const SeccionFraseGenerica = ({frase}) => {
    return (
        <ContenedorFrase>
            
                <TxtGenerico size='var(--txtSize2)' fontFamily='var(--fuenteElegante)'>
                    {frase}
                </TxtGenerico>
                
        </ContenedorFrase>
    );
};
