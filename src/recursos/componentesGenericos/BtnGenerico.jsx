import styled from "styled-components";

export const BtnConfirmar = styled.a`
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
