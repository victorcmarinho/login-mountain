import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    width: 100%;
    max-width: 50%;
`;

export const H2 = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #2D3748;
`;

export const H1 = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: #1A202C;
`;


export const Submit = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;

    background: #04C45C;
    border-radius: 5px;
    border: none;

    height: 50px;
    width: 100%;

    display: flex;
    place-content: center;
    place-items: center;
`


export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 11px;

    span {

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #4A5568;

        margin-bottom: 11px;
    }

`

export const Input = styled.input`

    padding: 17px 20px;

    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 5px;

    height: 50px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #2D3748;

`;

export const Form = styled.form`
    ${H1} {
        margin-bottom: 24px;
    }

    ${Submit} {
        margin-top: 24px;
    }
`

export const Log = styled.div`
    padding: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 0.25rem;
    background-color: rgba(206, 17, 38, 0.0);

    margin-bottom: 25px;

    display: flex;
    flex-direction: column;

    span {
        color: green;
        margin-bottom: 15px;
    }

`