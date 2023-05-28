import React, { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import leftSrc from "../../assets/svg/left.svg";
import rightSrc from "../../assets/svg/right.svg";
import backSrc from "../../assets/svg/back.svg";
import { getTimecapsules, username } from "../../api/api";
import plusSrc from "../../assets/svg/plus.svg";

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

const ContentBox = styled.button`
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
display: flex;
flex-direction: row;
align-items: flex-start;
border: none;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
border-radius: 10px;
`

const SaveFont = styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: ${COLORS.BLACK};
`


const TextIn = styled.textarea`
resize: none;
	width: 100%;
	background-color: ${COLORS.Light_Orange};
	border-radius: 10px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};
padding: 9px 10px;
border: none;
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
border: none;
`



const DetailPage = ({ onClose, selectedDayId, diaryData }) => {
  const [tome, setToMe] = useState([]);
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState('');

  const selectedData = diaryData.find((item) => item?.dayId === selectedDayId) || null;
  console.log(selectedData);

  const handleAddTodo = () => {
    setTodos([...todos, { id: todos.length + 1, content: '' }]);
  };

  const handleContentChange = (id, value) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, content: value } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <All>
      <img alt="back" src={backSrc} onClick={onClose} />
      <InBox style={{ paddingBottom: "50px" }}>
        <TxtBox>
          <TxtDiv>To me today</TxtDiv>
        </TxtBox>
        <TodayBox>
          <InTxt>
            {selectedData ? (
              <div>{selectedData.today}</div>
            ) : (
              <div>오늘의 나에게 온 말이 없습니다!</div>
            )}
          </InTxt>
        </TodayBox>
      </InBox>
      <InBox style={{ height: "70%" }}>
        <MidLayout>
          {selectedData ? (
            <TxtBox>{selectedData.date}</TxtBox>
          ) : (
            <TxtInput
              type="text"
              placeholder="추가할 일정의 날짜를 입력해주세요. ex)2023-05-05"
            />
          )}
          <ButtonBox>
            <img alt="left" src={leftSrc} />
            <img alt="right" src={rightSrc} />
          </ButtonBox>
        </MidLayout>
        <TodayBox>
          {selectedData ? (
            selectedData.toDo.map((todo) => (
              <ContentBox key={todo.todoId}>{todo.content}</ContentBox>
            ))
          ) : (
            <>
              {todos.map((todo) => (
                <ContentBox key={todo.id}>
                  <CheckBox
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() =>
                      handleContentChange(todo.id, !todo.checked)
                    }
                  />
                  <Inputs
                    placeholder="일정을 입력해주세요."
                    value={todo.content}
                    onChange={(e) =>
                      handleContentChange(todo.id, e.target.value)
                    }
                  />
                </ContentBox>
              ))}
              <ContentBox id="plus" onClick={handleAddTodo}>
                <img alt="일정 추가" src={plusSrc} />
                일정 추가하기
              </ContentBox>
            </>
          )}
        </TodayBox>
      </InBox>
      {/* <InBox>
        <TxtBox>
          <TxtDiv>To tomorrow`s me</TxtDiv>
        </TxtBox>
        <TextIn placeholder="내일의 나에게 하고 싶은 말을 적어주세요" />
        <SaveDiv>
          <SaveBtn>
            <SaveFont>Edit</SaveFont>
          </SaveBtn>
          <SaveBtn>
            <SaveFont>Save</SaveFont>
          </SaveBtn>
        </SaveDiv>
      </InBox> */}
			<SaveDiv>
          <SaveBtn>
            <SaveFont>Save</SaveFont>
          </SaveBtn>
        </SaveDiv>
    </All>
  );
};

export default DetailPage;
