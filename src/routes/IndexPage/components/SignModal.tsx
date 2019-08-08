import * as React from 'react';
import * as Form from './form';
import styled from 'styled-components';
import { optional } from './../../../core/hoc/OptionalComponent';
import { SigninPayload } from '../models/SigninPayload';
import { SignupPayload } from '../models/SignupPayload';
import loginBackground from '../assets/bg_login_img.jpg';

const ModalShadow = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
`

const Content = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    z-index: 21;
    background-color: white;
    display: flex;
    & > * {
        flex: 1;
    }
`

const LeftContainer = styled.div`
    background: url(${loginBackground});
    background-position: center;
    background-size: cover;
    position: relative;
    color: white;
    overflow: hidden;
    & > * {
        position: absolute;
    }
    &::before {
        content: ' ';
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: absolute;
    }
`

const Logo = styled.div`
    font-family: 'Sunflower';
    font-weight: 700;
    font-size: 1.5em;
    margin: 20px;
`

const Tags = styled.div`
    font-size: 2em;
    line-height: 1.5em;
    font-weight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

const SigninForm = optional(Form.SigninForm);
const SignupForm = optional(Form.SignupForm);

const SignModal: React.FC = () => {
    const [signup, setSignup] = React.useState(false);
    const handleSignin = React.useCallback((data: SigninPayload) => { }, []);
    const handleSignup = React.useCallback((data: SignupPayload) => { }, []);
    const handleChangeMode = React.useCallback(() => setSignup(!signup), [signup, setSignup]);
    return (
        <ModalShadow>
            <Content>
                <LeftContainer>
                    <Logo>CC SHOW</Logo>
                    <Tags>
                        <div>#쉽게  #편리하게</div>
                        <div>#화려하게  #빠르게</div>
                    </Tags>
                </LeftContainer>
                <SigninForm visible={!signup} onSubmit={handleSignin} onChangeMode={handleChangeMode} />
                <SignupForm visible={signup} onSubmit={handleSignup} onChangeMode={handleChangeMode} />
            </Content>
        </ModalShadow>
    )
}

export default SignModal;