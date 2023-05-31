import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import COLORS from '../../assets/styles/colors';
import leftSrc from "../../assets/svg/left.svg";
import rightSrc from "../../assets/svg/right.svg";
import { username, fetchTodoList, deleteTodo} from "../../api/api";
import plusSrc from "../../assets/svg/plus.svg";
import minusSrc from "../../assets/svg/minus.svg";
import axios from 'axios';

const Todo = ({ selectedDate, selectedData, onDateChange }) => {
  // console.log(selectedData)
  const todayBoxRef = useRef(null);
  const [todos, setTodos] = useState([
    {todoId: 0, content: '', checkTodo: false, startTime: 9, endTime: 10 }
  ]);
  // const [yearStr, monthStr, dayStr] = selectedData.date.split('-').map(Number);
  const [yearStr, monthStr, dayStr] = selectedDate.split('-').map(Number);
  const hours = Array.from(Array(24).keys());
  const [dd, setDD] = useState('');
  //목록가져오기
  useEffect(() => {
    const fetchData = async () => {
      const todos = await fetchTodoList(username, yearStr, monthStr, dayStr);
      setTodos([])
      setTodos(todos);
    };
  
    fetchData();
  }, []);
  

    // 컴포넌트가 마운트되었을 때 스크롤 위치를 조정
    useEffect(() => {
      todayBoxRef.current.scrollTo(0, 9 * 89); // 9:00 위치로 스크롤 (각 ContentBox의 높이가 20px로 가정)
    }, []);

  //내용변경
  const handleContentChange = (todoId, content, checked) => {
    const updatedTodos = todos.map((todo) =>
      todo.todoId === todoId ? { ...todo, content, checkTodo: checked } : todo
    );
    setTodos(updatedTodos);
  };

  
  //삭제
  // const handleDeleteTodo = (hour, id) => {
  //   const updatedTodos = todos.filter((todo) => todo.startTime === `${hour}:00` && todo.todoId !== id);
  //   setTodos(updatedTodos);
  // };
  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    // 삭제 요청이 성공한 경우에만 해당 일정을 todos에서 제거하도록 처리할 수 있습니다.
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoId !== id));
  };
  

  //todo 추가
  const handleAddTodo = (hour) => {
    const newTodo = {
      todoId: Date.now(),
      content: '',
      checkTodo: false,
      startTime: `${hour}:00`,
      endTime: `${hour + 1}:00`,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    console.log('일정 추가', newTodo);
  };
  
  
  // const handleAddTodoList = async () => {
  //   const nonEmptyTodos = todos?.filter(todo => todo.content !== '');
  
  //   const requestData = {
  //     date: selectedDate,
  //     toDoScheduleRequestList: nonEmptyTodos.map(todo => ({
  //       checkTodo: todo.checkTodo,
  //       content: todo.content,
  //       endTime: todo.endTime,
  //       startTime: todo.startTime,
  //     })),
  //     userName: username,
  //   };
  
  //   try {
  //     const response = await axios.post(
  //       'http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/timeschedule/todos',
  //       requestData
  //     );
  //     console.log('할일 리스트 등록 성공:', response.data.result.data);
  //     console.log('할일 번호', response.data.result)
  //     setTodos([]);
  //     // if (todos.length === 0) {
  //     //   setTodos([]);
  //     //   setTodos(response.data.result.data);
  //     // }
  //     window.location.reload();
  //     setTodos(response.data.result.data);
  //   } catch (error) {
  //     console.error('할일 리스트 등록 실패:', error);
  //     // 요청 실패 시 처리할 코드 작성
  //   }
  // };

  const handleAddTodoList = async () => {
    const newTodos = todos.filter(todo => todo.content !== ''); // 빈 내용이 아닌 새로운 할일 목록 추출
  
    if (newTodos.length === 0) {
      // 새로운 할일 목록이 없으면 반환하거나 예외 처리를 진행할 수 있습니다.
      console.log('새로운 할일 목록이 없습니다.');
      return;
    }
    const requestData = {
      date: selectedDate,
      toDoScheduleRequestList: newTodos.map(todo => ({
        checkTodo: todo.checkTodo,
        content: todo.content,
        endTime: todo.endTime,
        startTime: todo.startTime,
      })),
      userName: username,
    };
  
  
    try {
      const response = await axios.post(
        'http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/timeschedule/todos',
        requestData
      );
      console.log('할일 리스트 등록 성공:', response.data.result.data);
    window.location.reload();
    } catch (error) {
      console.error('할일 리스트 등록 실패:', error);
      // 요청 실패 시 처리할 코드 작성
    }
  };
  
  
  const handlePrevDay = () => {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const prevDate = new Date(year, month - 1, day - 1);
    const formattedDate = `${prevDate.getFullYear()}-${(prevDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${prevDate.getDate().toString().padStart(2, '0')}`;
    onDateChange(formattedDate);
    setTodos([])
  };

  const handleNextDay = () => {
    const [year, month, day] = selectedDate.split('-').map(Number);
    const nextDate = new Date(year, month - 1, day + 1);
    const formattedDate = `${nextDate.getFullYear()}-${(nextDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${nextDate.getDate().toString().padStart(2, '0')}`;
      onDateChange(formattedDate);
      setTodos([])
  };

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

          <img alt="left" src={leftSrc} onClick={handlePrevDay}/>
          <img alt="right" src={rightSrc} onClick={handleNextDay}/>
        </ButtonBox>
      </MidLayout>


      <TodayBox ref={todayBoxRef} style={{ overflowY: 'scroll', height: '400px' }}>
        {hours.map((hour) => (
          <div style={{ marginBottom: "20px", width: "100%" }} key={hour}>
            <Time>{`${hour}:00`}</Time>

            {
              todos?.filter((todo) => todo.startTime === `${hour}:00`).map((todo) => (
              
                <ContentBox key={`${hour}-${todo.todoId}`}>
                  <CheckBox
                    type="checkbox"
                    checked={todo.checkTodo}
                    onChange={(e) => handleContentChange(todo.todoId, todo.content, e.target.checked)}
                  />

                  <Inputs
                    placeholder="일정을 입력해주세요."
                    value={todo.content}
                    onChange={(e) => handleContentChange(todo.todoId, e.target.value, todo.checkTodo)}
                  />

                  <SaveBtn onClick={() => handleDeleteTodo(todo.todoId)}>
                    <img alt="delete" src={minusSrc} />
                  </SaveBtn>

                </ContentBox>
              ))
            }
            <ContentBox id="plus" 
            onClick={() => handleAddTodo(hour)}
            >
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