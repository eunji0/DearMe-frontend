import React, { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import leftSrc from "../../assets/svg/left.svg";
import rightSrc from "../../assets/svg/right.svg";
import backSrc from "../../assets/svg/back.svg";
import { fetchTodoList2 } from "../../api/api";
import plusSrc from "../../assets/svg/plus.svg";
import minusSrc from "../../assets/svg/minus.svg";
import Todo from "../../component/detail/Todo";
import { useRecoilValue } from "recoil";
import { usernameState } from "../../atoms/atoms";

const InBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 15px;
width: 100%;
border-left: 1px solid ${COLORS.Orange};
`

const All = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 20px;
position: relative;
background-color: ${COLORS.Orange};
width: 705px;
height: 100%;`


const TxtBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};`

const TxtDiv = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};`

const TodayBox = styled.div`
resize: none;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 10px;
width: 100%;
background: ${COLORS.Light_Orange};
border-radius: 10px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};`

const InTxt = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};`

const MidLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
width: 100%;`

const ButtonBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px;
gap: 10px;
`

const ContentBox = styled.div`
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 10px;
border: none;
background-color: none;
gap: 10px;
background: none;
width: 100%;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};
height: 35px;`

const SaveDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-start;
padding: 0px;
gap: 10px;
width: 100%;
`

const SaveBtn = styled.button`
background-color: none;
border: none;
background: none;
`

const SaveFont = styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: ${COLORS.BLACK};
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


const TxtInput = styled.input`
width: 350px;
background-color: ${COLORS.Light_Orange};
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};
padding: 9px 10px;
border: none;
border-radius: 10px;
`

const Inputs = styled.input`
background: none;
width: 500px;
border: none;
outline: none;
`

const Time = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 10px;
gap: 10px;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 14px;
color: ${COLORS.GRAY};`

const SBtn = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
border: none;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
border-radius: 10px;
`


const DetailPage = ({ username, onClose, selectedDayId, diaryData, selectedDate, onDateChange }) => {
  const selectedData = diaryData.find((item) => item?.dayId === selectedDayId) || null;
  // const username = useRecoilValue(usernameState);
  const [dd, setDD] = useState('');

  const [yearStr, monthStr, dayStr] = selectedDate.split('-').map(Number);
  //목록가져오기
    const fetchData = async () => {
      const todos = await fetchTodoList2(username, yearStr, monthStr, dayStr);
     
      if(todos !==null){
      setDD(todos.today)
      }
    };

    fetchData();
  
	return (
		<All>
			<img style={{width:"25px", height:"25px"}} alt="back" src={backSrc} onClick={onClose} />
			<InBox style={{ paddingBottom: "30px" }}>
				<TxtBox>
					<TxtDiv>To me today</TxtDiv>
				</TxtBox>
				<TodayBox>
					<InTxt>
						{dd ? (
							<div>{dd}</div>
						) : (
							<div>오늘의 나에게 온 말이 없습니다</div>
						)}
					</InTxt>
				</TodayBox>
			</InBox>

			<Todo onDateChange={onDateChange} selectedData={selectedData} selectedDate={selectedDate} selectedDayId={selectedDayId} diaryData={diaryData}/>
			
			{/* <SaveDiv>
				<SBtn>
					<SaveFont>Save</SaveFont>
				</SBtn>
			</SaveDiv> */}
		</All>
	);
};

export default DetailPage;
