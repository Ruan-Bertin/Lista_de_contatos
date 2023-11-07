import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: Roboto, sans-serif;

  body{
    background: rgb(10,1,17);
    background: linear-gradient(171deg, rgba(10,1,17,1) 0%, rgba(107,103,103,1) 50%, rgba(20,13,3,1) 100%);
  }
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`
export const Campo = styled.input`
  padding: 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #666666;
  border-radius: 8px;
  color: #666666;
`

export const Botao = styled.button`
  text-transform: capitalize;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;

  background-color: ${variaveis.azul};
  color: #fff;

  border: none;
  border-radius: 4px;
`

export default EstiloGlobal
