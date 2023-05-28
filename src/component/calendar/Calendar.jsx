import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import COLORS from '../../assets/styles/colors';
import DetailPage from '../../pages/detail/DetailPage';
import { fetchSchedule } from '../../api/api';


const HourBox = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  gap: 2px;
  width: 150px;
  height: 117px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.BLACK};
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 5px 10px;
  gap: 2px;
  width: 140px;
  height: 117px;
  border-radius: 5px;
  border: 2px solid ${COLORS.Light_Orange};
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  overflow: hidden;
  height: 24px;
  background: ${COLORS.Orange};
  border-radius: 5px;
`;

const All = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0px;
  width: 100%;
`

const SlidePage = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-100%')};
  bottom: 0;
  width: 705px;
  height: 100vh;
  z-index: 100;
  background-color: ${COLORS.Orange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: right 0.3s ease-in-out;
`;

const Calendar = ({ diaryData }) => {
  const [detailOn, setDetailOn] = useState(false);
  const [selectedDayId, setSelectedDayId] = useState(null);

  const handleDetailPageClose = (dayId) => {
    setDetailOn(!detailOn);
    setSelectedDayId(dayId);
  };

  const handle = () => {
    setDetailOn(!detailOn);
    setSelectedDayId(null);
  }

  console.log(selectedDayId)


  return (
    <All>
      <table>
        <tbody>
          {Array.from({ length: 24 }).map((_, hour) => (
            <tr key={hour} style={{ display: 'flex' }}>
              <HourBox style={{ flex: 1, textAlign: 'center' }}>
                {hour}:00
              </HourBox>
              {diaryData.map((item, index) => {
                const todos = item && item.toDo.filter((todo) => {
                  const startHour = parseInt(todo.startTime.slice(0, 2));
                  const endHour = parseInt(todo.endTime.slice(0, 2));
                  return startHour <= hour && hour < endHour;
                });
                const limitedTodos = todos && todos.slice(0, 4); // Add null check here

                
                return (
                  <td key={index}>
                    {limitedTodos && limitedTodos.length > 0 ? (
                      <ListBox onClick={() => handleDetailPageClose(item?.dayId)}>
                        {limitedTodos.map((todo) => (
                          <List key={todo.todoId}>{todo.content}</List>
                        ))}
                      </ListBox>
                    ) : (
                      <ListBox onClick={handle}></ListBox>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {detailOn && (
        <SlidePage open={detailOn} className={detailOn ? 'slide-in' : 'slide-out'}>
          <DetailPage diaryData={diaryData} selectedDayId={selectedDayId || null} onClose={handleDetailPageClose} />
        </SlidePage>
      )}
    </All>
  );
};

export default Calendar;