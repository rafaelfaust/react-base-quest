import styled from "styled-components"

export const Contanier = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #efefefef;
    margin-top: 25%;
    padding: 20px;
    

    button {
        background: transparent;
        border-radius: 10px;
        width: 100px;
        margin-top: 20px;
        border: 1px solid;

        &:hover{
            color: red;
            border: 1px solid red;
        }

        &:active {
            opacity: 0.5;
        }
    }
`