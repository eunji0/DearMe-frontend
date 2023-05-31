import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import {patchfixUser} from "../../api/api"
import { useNavigate } from "react-router-dom";

const SignBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 60px 10px 30px;
gap: 10px;`

const SignDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 10px 30px;
gap: 10px;
width: 700px;
border-bottom: 2px solid ${COLORS.Orange};
`

const TxtDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px;
gap: 10px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.Orange};
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

const AgreeLayout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 10px 30px;
gap: 20px;`

const AgreeBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 20px 30px;
gap: 10px;
width: 660px;
background: ${COLORS.Orange};`

const AgreeTxt = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 10px;
gap: 10px;
font-style: normal;
font-weight: 400;
font-size: ${(props)=>props.fontSize};
line-height: 23px;
color:${COLORS.BLACK};
`

const CheckBox = styled.input`
  position: relative;
  width: 25px;
  height: 25px;
  appearance: none;
  border: 2px solid ${COLORS.Orange};
  background-color: ${COLORS.WHITE};
  border-radius: 5px;
  cursor: pointer;

  &:checked {
    background-color: ${COLORS.Orange};
    color: ${COLORS.Orange};
  }

  &:after {
    content: "";
    position: absolute;
    top: 3px;
    left: 7px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
    display: none;
  }

  &:checked:after {
    display: block;
  }
`;

const SignBtn = styled.button`
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

const Profile = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Username: ${userId}, Password: ${password}`);

    try {
      // fixUser 함수의 정의와 import 구문이 필요합니다.
      const response = await patchfixUser({
        email: email,
        password: password,
        phone: number,
        username: userId,
      });
      navigate("/");
      console.log(response);
      alert('프로필 수정에 성공하였습니다.')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <SignBox>
          <SignDiv>
            <TxtDiv>프로필 수정</TxtDiv>
          </SignDiv>
        </SignBox>
        <InputBox>
          <InputLayout>
            <InnerBox>
              <TitleBox>아이디 :</TitleBox>
              <InBox
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)} />
            </InnerBox>
            <InnerBox>
              <TitleBox>비밀번호 :</TitleBox>
              <InBox
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </InnerBox>
            <InnerBox>
              <TitleBox>이메일 :</TitleBox>
              <InBox
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </InnerBox>
            <InnerBox>
              <TitleBox>전화번호 :</TitleBox>
              <InBox
                type="text"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)} />
            </InnerBox>
          </InputLayout>
          <SignBtn type="submit"  onSubmit={handleSubmit}>저장</SignBtn>
        </InputBox>
      </form>
    </div>
  )
}

export default Profile;