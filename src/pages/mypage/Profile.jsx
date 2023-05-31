import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import {updateUserProfile} from "../../api/api"
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { usernameState } from "../../atoms/atoms";
import axios from "axios";

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
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const username = "string1";


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await updateUserProfile(email, phone, password, username);
      alert('프로필이 수정되었습니다.');
    } catch (error) {
      console.error(error);
      alert('프로필 수정에 실패했습니다.');
    }
  };

  return (
    <div style={{width: "100%"}}>
      <form style={{width: "100%"}} onSubmit={handleSubmit}>
        <SignBox style={{width: "100%"}}>
          <SignDiv>
            <TxtDiv>프로필 수정</TxtDiv>
          </SignDiv>
        </SignBox>
        <InputBox>
          <InputLayout>
            {/* <InnerBox>
              <TitleBox>아이디 :</TitleBox>
              <InBox
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)} />
            </InnerBox> */}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </InnerBox>
          </InputLayout>
          <SignBtn type="button" onClick={handleSubmit}>저장</SignBtn>

        </InputBox>
      </form>
    </div>
  )
}

export default Profile;