import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import closeSrc from "../../assets/svg/close.svg";
import axios from "axios";
import { username } from "../../api/api";

const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 15px;
gap: 15px;
position: absolute;
width: 600px;
height: 400px;
left: calc(50% - 600px/2);
top: 149px;
background: ${COLORS.Orange};
border-radius: 10px;
`

const Box = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 10px 5px;`

const Inbox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 10px;
`

const Box2 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px 10px;
gap: 10px;
width: 580px;
`

const ToDate = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};`

const Inputtext = styled.textarea`
border: none;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px 0px 10px 15px;
gap: 10px;
width: 100%;
height: 250px;
background: ${COLORS.Light_Orange};
border-radius: 20px;
resize: none;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: ${COLORS.BLACK};

  &:focus {
    outline: none;
    border: none;
  }

`

const StateBox = styled.button`
cursor: pointer;
display: flex;
flex-direction: row;
align-items: flex-end;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
border-radius: 10px;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: ${COLORS.BLACK};
`

const DateInput = styled.input`
border: none;
width: 100px;
overflow: hidden;
background-color: ${COLORS.Light_Orange};
`

const WriteTime = ({ onClose }) => {
  const [toDay, setToDay] = useState('');
  const [nextDay, setNextDay] = useState('');
  const [content, setContent] = useState('')

  const handleChange = (event) => {
    const inputDate = event.target.value;
    const formattedDate = formatInputDate(inputDate);
    setToDay(formattedDate);
  };

  const handleChange2 = (event) => {
    const inputDate = event.target.value;
    const formattedDate = formatInputDate(inputDate);
    setNextDay(formattedDate);
  };

  const formatInputDate = (inputDate) => {
    // 입력된 값에서 숫자만 추출
    const numbersOnly = inputDate.replace(/[^\d]/g, '');

    // YYYY.MM.DD 형식으로 포맷 적용
    const formatted = numbersOnly.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');

    return formatted;
  };

  const handleSubmit = async () => {
    // toDate, nextDate, content 값이 비어있는지 확인
    if (!toDay || !nextDay || !content) {
      alert('날짜와 내용을 입력해주세요.');
      return;
    }
  
    try {
  
      // POST 요청을 보낼 데이터 객체 생성
      const data = {
        content: content,
        nextDay: nextDay,
        toDay: toDay,
        userName: username
      };
  
      // POST 요청 보내기
      const response = await axios.post('http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/timecapsule', data);
  
      // 응답 처리
      console.log(response.data);
      window.location.reload();
      setToDay('');
      setNextDay('');
      setContent('');
      onClose();
    } catch (error) {
      // 에러 처리
      console.error(error);
      // 필요한 실패 처리 작업 수행
    }
  };
  
  

  return (
    <Layout>
      <Box>
        <Inbox>
          <ToDate>
            <DateInput
              type="text"
              placeholder="ex)YYYYMMDD"
              value={toDay}
              onChange={handleChange} />
            의 내가</ToDate>
          <ToDate>
            <DateInput
              type="text"
              placeholder="ex)YYYYMMDD"
              value={nextDay}
              onChange={handleChange2} />
            의 나에게</ToDate>
        </Inbox>
        <img alt="close" src={closeSrc} onClick={onClose} />
      </Box>
      <Inputtext
        type="text"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="미래의 나에게 전하고 싶은 말을 적어주세요." />
      <Box2>
        <StateBox onClick={handleSubmit}>Save</StateBox>
      </Box2>
    </Layout>
  )
}

export default WriteTime;