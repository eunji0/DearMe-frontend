import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import COLORS from '../../assets/styles/colors';
import leftSrc from "../../assets/svg/left.svg";
import rightSrc from "../../assets/svg/right.svg";
import { getTimecapsules, username, addSchedule, fetchDaySchedule } from "../../api/api";
import plusSrc from "../../assets/svg/plus.svg";
import minusSrc from "../../assets/svg/minus.svg";
import axios from 'axios';

const Todo = ({ selectedDate, onDateChange }) => {
  const todayBoxRef = useRef(null);
  const [todos, setTodos] = useState([]);
  const [yearStr, monthStr, dayStr] = selectedDate.split('-').map(Number);
  const hours = Array.from(Array(24).keys());
  const [tto, setTto] = useState([]);

  //목록가져오기
  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const requestUrl = `http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/timeschedule/search/${username}/${parseInt(yearStr)}/${parseInt(monthStr)}/${parseInt(dayStr)}`;
        const response = await axios.get(requestUrl);
        // console.log('Fetched todo list:', response.data.result.data);
        setTodos(response.data.result.data);
        setTto(todos.toDo)
      } catch (error) {
        console.error('Failed to fetch todo list:', error);
      }
    };
  
    fetchTodoList();
  }, []);
  


  const addTodoList = async (data) => {
    try {
      const response = await axios.post(`http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/timeschedule/todos`, data);
      console.log('할일 리스트 등록 성공:', response.data.result.data);
      setTodos(response.data.result.data)
      // 요청 성공 후 처리할 코드 작성
      // window.location.reload()
      // window.location.href = window.location.href;
    } catch (error) {
      console.error('할일 리스트 등록 실패:', error);
      // 요청 실패 시 처리할 코드 작성
    }
  };

  console.log(tto)

  const handleAddTodoList = () => {
    const nonEmptyTodos = tto?.filter(todo => todo.content !== '');

    const requestData = {
      date: selectedDate,
      toDoScheduleRequestList: nonEmptyTodos.map(todo => ({
        checkTodo: todo.checked,
        content: todo.content,
        endTime: `${todo.hour+1}:00`, // endTime 값을 적절히 설정해야 함
        startTime: `${todo.hour}:00`,
      })),
      userName: username,
    };

    addTodoList(requestData);
  };

  //일정추가

  // //내용변경
  // const handleContentChange = (id, content, checked) => {
  //   const updatedTodos = todos.map((todo) =>
  //     todo.id === id ? { ...todo, content, checked } : todo
  //   );
  //   setTodos(updatedTodos);
  // };

  // //일정삭제
  // const handleDeleteTodo = (hour, id) => {
  //   const updatedTodos = todos.filter((todo) => todo.hour === hour && todo.id !== id);
  //   setTodos(updatedTodos);
  // };
  
  return (
    <InBox>
      <MidLayout>
        {selectedDate ? (
          <TxtBox>{selectedDate}</TxtBox>
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


      <TodayBox ref={todayBoxRef} style={{ overflowY: 'scroll', height: '400px' }}>
        {hours.map((hour) => (
          <div style={{ marginBottom: "20px", width: "100%" }} key={hour}>
            <Time>{`${hour}:00`}</Time>

            {
              todos?.toDo?.filter((todo) => todo.startTime === `${hour}:00`).map((todo) => (
              
                <ContentBox key={`${hour}-${todo.todoId}`}>
                  <CheckBox
                    type="checkbox"
                    checked={todo.checkTodo}
                    onChange={(e) => handleContentChange(todo.todoId, todo.content, e.target.checked)}
                  />

                  <Inputs
                    placeholder="일정을 입력해주세요."
                    value={todo.content}
                    onChange={(e) => handleContentChange(todo.todoId, e.target.value, todo.checked)}
                  />

                  <SaveBtn onClick={() => handleDeleteTodo(hour, todo.todoId)}>
                    <img alt="delete" src={minusSrc} />
                  </SaveBtn>

                </ContentBox>
              ))
            }
            <ContentBox id="plus" onClick={() => handleAddTodo(hour)}>
              <img alt="일정 추가" src={plusSrc} />
              일정 추가하기
            </ContentBox>
          </div>
        ))}

      </TodayBox>
      <SaveDiv>
        <SBtn type='submit'
          onClick={handleAddTodoList}
        >
          <SaveFont>Save</SaveFont>
        </SBtn>
      </SaveDiv>

    </InBox>
  );
};

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
width: 100%;
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
width: 100%;
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 10px;
border: none;
background-color: none;
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
display: flex;
justify-content: flex-end;
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

export default Todo;