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
  const [seg, setSeg] = useState([]);
  const [todos, setTodos] = useState([]);
  const hours = Array.from(Array(24).keys());
  const [inDate, setInDate] = useState([]);

//하루 todo가져오기
  useEffect(() => {
    let year, month, day;

    if (selectedDate.length > 0) {
      const [yearStr, monthStr, dayStr] = selectedDate.split('-').map(Number);

      year = parseInt(yearStr);
      month = parseInt(monthStr);
      day = parseInt(dayStr);


      if (year && month && day) {
        const fetchData = async () => {
          try {
            const schedule = await fetchDaySchedule(username, year, month, day);
            setSeg(schedule.result.data);
            // console.log(schedule.result.data)
            // if (schedule.result.data && schedule.result.data.toDo && schedule.result.data.toDo.length > 0) {
            //   const newTodos = schedule.result.data.toDo.map((todo) => ({
            //     hour: parseInt(todo.startTime.split(':')[0]),
            //     id: todo.todoId,
            //     content: todo.content,
            //     checked: todo.checked,
            //   }));
            //   setTodos((prevTodos) => [...prevTodos, ...newTodos]);
            // }
          } catch (error) {
            // 오류 처리
            console.log(error)
          }
        };

        fetchData();
      }
    }
  }, []);

  //일정추가
  const handleAddTodo = (hour) => {
    const newTodo = {
      hour: hour,
      id: Date.now(), // 기존 todos 배열의 길이에 1을 더해 새로운 id 부여
      content: '',
      checked: false
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    console.log("일정추가", newTodo);
  };

  //내용변경
  const handleContentChange = (id, content, checked) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, content, checked } : todo
    );
    setTodos(updatedTodos);
  };



  //일정삭제
  const handleDeleteTodo = (hour, id) => {
    const updatedTodos = todos.filter((todo) => todo.hour === hour && todo.id !== id);
    setTodos(updatedTodos);
  };



  // 컴포넌트가 마운트되었을 때 스크롤 위치를 조정
  useEffect(() => {
    todayBoxRef.current.scrollTo(0, 9 * 89); // 9:00 위치로 스크롤 (각 ContentBox의 높이가 20px로 가정)
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

  console.log(todos)

  const handleAddTodoList = () => {
    const nonEmptyTodos = todos.filter(todo => todo.content !== '');
  
    const requestData = {
      date: selectedDate,
      toDoScheduleRequestList: nonEmptyTodos.map(todo => ({
        checkTodo: todo.checked,
        content: todo.content,
        endTime: '', // endTime 값을 적절히 설정해야 함
        startTime: `${todo.hour}:00`,
      })),
      userName: username,
    };
  
    addTodoList(requestData);
  };
  


  const handlePrevDay = () => {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const prevDate = new Date(year, month - 1, day - 1);
    const formattedDate = `${prevDate.getFullYear()}-${(prevDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${prevDate.getDate().toString().padStart(2, '0')}`;
    onDateChange(formattedDate);
  };

  const handleNextDay = () => {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const nextDate = new Date(year, month - 1, day + 1);
    const formattedDate = `${nextDate.getFullYear()}-${(nextDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${nextDate.getDate().toString().padStart(2, '0')}`;
    onDateChange(formattedDate);
  };


  // console.log("현재 날짜", selectedDate)

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

          <img alt="left" src={leftSrc} onClick={handlePrevDay} />
          <img alt="right" src={rightSrc} onClick={handleNextDay} />
        </ButtonBox>
      </MidLayout>


      <TodayBox ref={todayBoxRef} style={{ overflowY: 'scroll', height: '400px' }}>
        {hours.map((hour) => (
          <div style={{ marginBottom: "20px", width: "100%" }} key={hour}>
            <Time>{`${hour}:00`}</Time>
            {/* {seg && seg.toDo && seg.toDo.length > 0 && (
              <>
                {seg.toDo.map((todo) => (
                  <ContentBox key={`${todo.todoId}`}>
                    <CheckBox
                      type="checkbox"
                      checked={todo.checked}
                      onChange={(e) => handleContentChange(todo.todoId, todo.content, e.target.checked)}
                    />
                    <div style={{ width: "500px", paddingLeft: "10px" }}>{todo.content}</div>

                    <SaveBtn onClick={() => handleDeleteTodo(parseInt(todo.startTime.split(':')[0]), todo.todoId)}>
                      <img alt="delete" src={minusSrc} />
                    </SaveBtn>
                  </ContentBox>
                ))}
              </>

            )} */}


            {todos
              .filter((todo) => todo.hour === hour)
              .map((todo) => (
                <ContentBox key={`${hour}-${todo.id}`}>
                  <CheckBox
                    type="checkbox"
                    checked={todo.checked}
                    onChange={(e) => handleContentChange(todo.id, todo.content, e.target.checked)}
                  />

                  <Inputs
                    placeholder="일정을 입력해주세요."
                    value={todo.content}
                    onChange={(e) => handleContentChange(todo.id, e.target.value, todo.checked)}
                  />

                  <SaveBtn onClick={() => handleDeleteTodo(hour, todo.id)}>
                    <img alt="delete" src={minusSrc} />
                  </SaveBtn>

                </ContentBox>
              ))}
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