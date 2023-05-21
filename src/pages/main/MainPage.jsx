import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import leftSrc from "../../assets/svg/mainLeft.svg";
import rightSrc from "../../assets/svg/mainRight.svg";
import { useState, useEffect, useRef } from "react";

const TitleBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 50px 10px 20px;
gap: 10px;
width: 100%;
background: ${COLORS.WHITE};
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: ${COLORS.BLACK};`

const BtnLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
padding: 10px 30px;
gap: 10px;
width: 100%;`

const BtnBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
`


const WeekLayout = styled.div`
display: flex;
`

const WeekBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
padding: 10px;
gap: 10px;
width: 160px;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;
color:${COLORS.BLACK};`

const HourBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 5px;
gap: 2px;
width: 50px;
height: 117px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};
`

const ListBox = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: flex-start;
padding: 5px 5px 10px;
gap: 2px;
width: 140px;
height: 117px;
border: 2px solid ${COLORS.Light_Orange};
`

const DateBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px;
gap: 10px;
background: ${COLORS.Light_Orange};
border-radius: 20px;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};`

const MainPage = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startHour = 0;
  const endHour = 24;
  const [weeklyDates, setWeeklyDates] = useState([]);

  const containerRef = useRef(null);

  // 주간 날짜 범위 계산
  useEffect(() => {
    const calculateWeeklyDates = () => {
      const currentDate = new Date();
      const startOfWeek = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay())
      );
      const endOfWeek = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6)
      );

      const dates = [];
      let currentDay = startOfWeek;
      while (currentDay <= endOfWeek) {
        dates.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1);
      }

      setWeeklyDates(dates);
    };

    calculateWeeklyDates();
  }, []);

  console.log(weeklyDates);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight / 2.78; // 처음에 스크롤을 9시 위치로 이동
    }
  }, []);

  const scrollContainerHeight = Math.floor((window.innerHeight * 3) / 4);

  const goToPreviousWeek = () => {
    const previousWeekStartDate = new Date(weeklyDates[0]);
    previousWeekStartDate.setDate(previousWeekStartDate.getDate() - 7);

    const previousWeekDates = [];
    let currentDay = new Date(previousWeekStartDate);
    for (let i = 0; i < 7; i++) {
      previousWeekDates.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }

    setWeeklyDates(previousWeekDates);
  };

  const goToNextWeek = () => {
    const nextWeekStartDate = new Date(weeklyDates[0]);
    nextWeekStartDate.setDate(nextWeekStartDate.getDate() + 7);

    const nextWeekDates = [];
    let currentDay = new Date(nextWeekStartDate);
    for (let i = 0; i < 7; i++) {
      nextWeekDates.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }

    setWeeklyDates(nextWeekDates);
  };


  return (
    <div style={{ marginBottom: "50px" }}>
      <TitleBox>
        Time Schedule
      </TitleBox>
      <BtnLayout>
        {weeklyDates.length > 0 && (
          <DateBox>
            {weeklyDates[0].toLocaleDateString()} ~ {weeklyDates[6].toLocaleDateString()}
          </DateBox>
        )}
        <BtnBox>
          <img alt="previous" src={leftSrc} onClick={goToPreviousWeek}/>
          <img alt="next" src={rightSrc} onClick={goToNextWeek}/>
        </BtnBox>
      </BtnLayout>
      <div>
      </div>
      <WeekLayout>
        <div style={{ flex: 1, textAlign: 'center' }} />
        {daysOfWeek.map((day) => (
          <WeekBox key={day} style={{ flex: 1, textAlign: 'center' }}>
            {day}
          </WeekBox>
        ))}
      </WeekLayout>

      <div style={{ overflowY: 'scroll', height: `${scrollContainerHeight}px` }}
        ref={containerRef}>
        <div>
          {/* 9시부터 17시까지 표시 */}
          {[...Array(endHour - startHour + 1)].map((_, index) => {
            const hour = startHour + index;
            return (
              <div key={hour} style={{ display: 'flex' }}>
                <HourBox style={{ flex: 1, textAlign: 'center' }}>
                  {hour}:00
                </HourBox>
                {daysOfWeek.map((day) => (
                  <ListBox key={`${day}-${hour}`}>
                    {/* 일자별로 해당 시간의 일정 등을 표시 */}
                  </ListBox>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;