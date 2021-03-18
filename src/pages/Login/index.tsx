import React, { memo, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Background } from "../../components/Background";
import { useLogin } from "../../hook/login";
import {
  Container,
  Content,
  Form,
  H1,
  H2,
  Input,
  Label,
  Log,
  Submit,
} from "./styles";
import { signIn as signIn2} from '../../reducers/userReducer'

export const Login: React.FC = memo(() => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const { login, signIn, loading } = useLogin();
  const  redux = useSelector((e: any) => e.login)
  const dispatch = useDispatch();
  return (
    <Container>
      <Background />
      <Content>
        <Log>
          {
            loading && <span>Carregando usando ContextApi</span>
          }

          {
            redux.loading && <span>Carregando usando redux</span>
          }

          {
            login && <span>Logado usando ContextApi</span>
          }

          {
            redux.login && <span>Logado usando redux</span>
          }
        </Log>

        <Form onSubmit={(e) => e.preventDefault()}>
          <H2>Bem vindo</H2>
          <H1>Login to your account</H1>

          <Label>
            <span>CPF</span>
            <Input
              value={cpf}
              maxLength={14}
              onChangeCapture={(e) =>
                setCpf(
                  e.currentTarget.value
                    .replace(/\D/g, "")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1-$2")
                )
              }
            />
          </Label>

          <Label>
            <span>Senha</span>
            <Input value={senha} onChange={(e) => setSenha(e.target.value)} type="password"/>
          </Label>

          <Submit data-testId="btn-context" type="button" onClick={() => signIn({cpf, senha})}>Login com Context</Submit>
          <Submit data-testId="btn-redux" type="button" onClick={() => dispatch(signIn2({cpf, senha}))}>Login com Redux</Submit>
        </Form>
      </Content>
    </Container>
  );
});
