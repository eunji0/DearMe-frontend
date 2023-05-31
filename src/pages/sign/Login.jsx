import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import infoSrc from "../../assets/svg/angleRight.svg";
import { postUsername, baseURL } from "../../api/api";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { usernameState, yearState, monthState, dayState } from "../../atoms/atoms";

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
text-align: center;
padding: 30px;
padding-left: 300px !important;
gap: 10px;
width: 700px;
border-bottom: 2px solid ${COLORS.Orange};
`

const TxtDiv = styled.div`
width:100%;
display: flex;
flex-direction: row;
align-items: center;
text-align: center;
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

const LogBtn = styled.div`
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
  const [weeklyDates, setWeeklyDates] = useState([]);
  const [username, getUsername] = useState("");
  const [password, getPassword] = useState("");
  const [uname, setUName] = useRecoilState(usernameState); 
   const navigate = useNavigate();
   let [year, setYear] = useRecoilState(yearState);
   let [month, setMonth] = useRecoilState(monthState);
   let [day, setDay] = useRecoilState(dayState);
   const [dates, setDates] = useState([]);

   const handleSubmit = async (e) => {
    e.preventDefault();
    const postUsername = async (username, password) => {
      const requestData = {
        username: username,
        password: password
      };
    
      try {
        const response = await axios.post(`${baseURL}/user/login`, requestData);
        console.log('로그인 성공:', response.data.result.data);
        // 로그인 성공 시 필요한 처리를 진행합니다.
        setUName(response.data.result.data.username)
        navigate(`/timeschedule/${username}/${year}/${month}/${day}`)
      } catch (error) {
        console.error('로그인 실패:', error);
        // 로그인 실패 시 필요한 처리를 진행합니다.
      }
    };
    postUsername(username, password)
  };


  //현재 날짜 가져오기(일)
  useEffect(() => {
    const calculateWeeklyDates = () => {
      const currentDate = new Date();
      const startOfWeek = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - currentDate.getDay()
      );

      const endOfWeek = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6));
      const dates = [];
      setDates(dates);

      let currentDay = new Date(startOfWeek);
      while (currentDay <= endOfWeek) {
        dates.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1);
      }

      setWeeklyDates(dates);
    };

    calculateWeeklyDates();
  }, []);

  if (weeklyDates.length > 0) {
    const date = weeklyDates[0].toLocaleDateString();
    const [yearStr, monthStr, dayStr] = date.split('.').map(Number);

    year = parseInt(yearStr);
    month = parseInt(monthStr);
    day = parseInt(dayStr);
  } else {
  }

  console.log(year, month, day)


  return (
    <div>
      <form onSubmit={handleSubmit} style={{width: "100%"}}>
        <LogBox style={{width: "100%"}}>
          <LogDiv >
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
          <Link to="/signup" style={{paddingTop: "30px", textDecoration: "underline", fontSize: "16px", color: `${COLORS.GRAY}`}}>회원가입 하러가기</Link>
        </InputBox>

      </form>
    </div>
  )
}

export default Login;
