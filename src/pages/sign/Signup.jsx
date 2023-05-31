import React, { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import infoSrc from "../../assets/svg/angleRight.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/api";

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
background: ${COLORS.Light_Orange};`

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

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [allAgreed, setAllAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    if (!emailIsValid(email)) {
      alert("올바른 이메일 형식이 아닙니다");
      return;
    }

    if (password.length < 8) {
      alert("비밀번호는 최소 8자 이상이어야 합니다");
      return;
    }

    if (!phoneIsValid(phone)) {
      alert("올바른 전화번호 형식이 아닙니다");
      return;
    }

    if (username.length < 4) {
      alert("아이디는 최소 4자 이상이어야 합니다");
      return;
    }

    if (phone.length < 7) {
      alert("올바른 전화번호 형식이 아닙니다.");
      return;
    }

    if (!allAgreed) {
      alert("이용약관을 동의해주세요.");
      return;
    }

    try {
      const response = await registerUser({
        email: email,
        password: password,
        phone: phone,
        username: username,
      });
  
      console.log(response);
  
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const emailIsValid = (email) => {
    // Simple email validation using regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const phoneIsValid = (phone) => {
    // Phone validation: allows only digits and optional + at the start
    return /^\+?\d*$/.test(phone);
  };

  //동의
  const handleAllAgreedChange = (e) => {
    const isChecked = e.target.checked;
    setAllAgreed(isChecked);
    setTermsAgreed(isChecked);
    setPrivacyAgreed(isChecked);
  };

  const handleTermsAgreedChange = (e) => {
    setTermsAgreed(e.target.checked);
  };

  const handlePrivacyAgreedChange = (e) => {
    setPrivacyAgreed(e.target.checked);
  };

  useEffect(() => {
    if (termsAgreed && privacyAgreed) {
      setAllAgreed(true);
    } else {
      setAllAgreed(false);
    }
  }, [termsAgreed, privacyAgreed]);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SignBox>
          <SignDiv>
            <TxtDiv>회원가입</TxtDiv>
          </SignDiv>
        </SignBox>
        <InputBox>
          <InputLayout>
            <InnerBox>
              <TitleBox>아이디 :</TitleBox>
              <InBox
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InnerBox>
            <InnerBox>
              <TitleBox>비밀번호 :</TitleBox>
              <InBox
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InnerBox>
            <InnerBox>
              <TitleBox>비밀번호 확인:</TitleBox>
              <InBox
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </InnerBox>
          
            <InnerBox>
              <TitleBox>이메일 :</TitleBox>
              <InBox
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InnerBox>
            <InnerBox>
              <TitleBox>전화번호 :</TitleBox>
              <InBox
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InnerBox>
          </InputLayout>
        </InputBox>
        <AgreeLayout>
          <AgreeBox>
            <AgreeTxt fontSize="20px">
              <CheckBox
                type="checkbox"
                checked={allAgreed}
                onChange={handleAllAgreedChange}
              />
              모두 동의합니다.
            </AgreeTxt>
            <AgreeTxt fontSize="20px">
              <CheckBox
                type="checkbox"
                checked={termsAgreed}
                onChange={handleTermsAgreedChange}
              />
              이용약관 동의
<<<<<<< HEAD
              <img alt="이용약관 동의" 
               />
=======
              <img alt="이용약관 동의" src={infoSrc} />
>>>>>>> af1386d14d8699e63f94feee82d7fc69b9cece99
            </AgreeTxt>
            <AgreeTxt fontSize="20px">
              <CheckBox
                type="checkbox"
                checked={privacyAgreed}
                onChange={handlePrivacyAgreedChange}
              />
              개인정보 취급방침 동의
              <img alt="개인정보 취급방침 동의" src={infoSrc} />
            </AgreeTxt>
          </AgreeBox>
          <SignBtn type="submit" onSubmit={handleSubmit}>
            회원가입
          </SignBtn>
        </AgreeLayout>
      </form>
    </div>
  );
};

export default Signup;