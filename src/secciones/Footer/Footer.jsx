import styled from "styled-components";

const FooterStyled = styled.div`
    width: 100%;
    height: 100px;

    background-color: var(--blancoPrincipal);
    font-size: 22px;
    color: black;

    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;




`
const Separador = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Footer = () => {
    return(
        <FooterStyled>
            <Separador>
                Desarrollado por Ramon Castillo
            </Separador>
             luisarraca@hotmail.com / 669 138 2961
        </FooterStyled>
    )
}