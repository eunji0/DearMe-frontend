import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import infoSrc from "../../assets/svg/angleRight.svg";
import { postUsername } from "../../api/api";
import { useNavigate } from "react-router-dom";

const LogBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 60px 10px 30px;
gap: 10px;`

const LogDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 10px 30px;
gap: 10px;
width: 700px;
border-bottom: 2px solid ${COLORS.Orange};
`

const TxtDiv = styled.div`
width:100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 15px;
gap: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.BLACK};
`

const InputBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
gap: 10px;
`

const InputLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 30px;
width: 660px;
gap: 10px;
background: ${COLORS.Light_Orange};
`

const InnerBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
`

const TitleBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px;
gap: 10px;
background: ${COLORS.Orange};
border-radius: 20px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.WHITE};
`

const InBox = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px;
gap: 10px;
width: 400px;
height: 44px;
background: ${COLORS.Orange};
border-radius: 20px;
border: none;
`

const LogBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Orange};
border-radius: 20px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.Orange};
cursor: pointer;

&:active {
background: ${COLORS.Orange};
color: ${COLORS.WHITE};
}
`


export const Login = () => {
  const [username, getUsername] = useState("");
  const [password, getPassword] = useState("");
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postUsername(username, password);
  
      navigate("/")

    } catch (error) {
      alert('아이디 혹은 비밀번호가 틀리셨습니다.')
      console.error(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LogBox>
          <LogDiv>
            <TxtDiv>로그인</TxtDiv>
          </LogDiv>
        </LogBox>
        <InputBox>
          <InputLayout>
            <InnerBox>
              <TitleBox>아이디 :</TitleBox>
              <InBox
                type="text"
                id="username"
                value={username}
                onChange={(e) => getUsername(e.target.value)} />
            </InnerBox>
            <InnerBox>
              <TitleBox>비밀번호 :</TitleBox>
              <InBox
                type="password"
                id="password"
                value={password}
                onChange={(e) => getPassword(e.target.value)} />
            </InnerBox>
            
          </InputLayout>
          
          <LogBtn onClick={handleSubmit}>로그인</LogBtn>
        </InputBox>

      </form>
    </div>
  )
}