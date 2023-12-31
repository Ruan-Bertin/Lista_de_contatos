import styled from 'styled-components'
import { Botao } from '../../styles'
import variables from '../../styles/variaveis'

export const CardContato = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
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

  img {
    width: 48px;
    height: 48px;
  }
`

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    textarea:first-child {
      font-weight: bold;
    }
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`

export const BotaoDeletarECancelar = styled(Botao)`
  background-color: ${variables.vermelho};
`

export const BotaoEditar = styled(Botao)`
  background-color: ${variables.amarelo};
`

export const BotaoSalvar = styled(Botao)`
  background-color: green;
`

export const Descricao = styled.textarea`
  display: inline-block;
  font-size: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  margin-left: 12px;
  color: #fff;
`
