import styled from "styled-components";

export const Background = styled.div`
    background-color: rgba(2, 16, 36);
    width: 100%;
    height: 100vh;

    box-shadow: 1px 1px 10px rgba(0, 0, 0);

    position: relative;
    z-index: 4;

`
export const MainContainer = styled.div`
    display: flex;
        flex-direction: column;
        justify-content: center;
` 
export const ContTitulo = styled.div`
    display: flex;
        justify-content: center;

    margin-bottom: 50px;

`

export const Title = styled.h2`
    color: white;
    font-family: "Bree Serif";
    font-size: 40px;
    font-weight: 400;
    border-bottom: 1px solid white;
    
    margin-bottom: 0px;

`

export const Nome = styled.p`
    color: white;
`
export const ContPersonagens = styled.div`
    display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

    padding: 10px;

`
export const PersonagemBoxStyle = styled.div`
        background-color: #071c3c;
        opacity: 1;
        display: flex;
            align-items: center;
            justify-content: center;
        width: 100px;
        height: 420px;
        border-radius: 60px;
        overflow: hidden;
        transform: scaleY(1);
        transition: transform .2s, width .2s;
        
            &:hover{ 
                transform: scaleY(1.1);
                border-radius: 70px;
                width: 110px;
            }

        position: relative;
        z-index: 7;

    
`

export const Personagem = styled.img`
    /* transform: scale(.4, .5) */
    width: 350px;

    position: absolute;
    right: -160px;
    z-index: 10;
`

export const Indicador = styled.div`
`

