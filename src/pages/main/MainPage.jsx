import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import leftSrc from "../../assets/svg/mainLeft.svg";
import rightSrc from "../../assets/svg/mainRight.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate} from 'react-router-dom';
import { fetchSchedule } from "../../api/api";
import Calendar from "../../component/calendar/Calendar";

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
padding: 10px 30px 30px;
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
border-radius: 5px;
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
  const [weeklyDates, setWeeklyDates] = useState([]);
  const containerRef = useRef(null);
  const [diaryData, setDiaryData] = useState([]);
  const [dates, setDates] = useState([]); // 추가: dates 상태 변수
  const getCurrentUsername = () => {
    const url = new URL(window.location.href);
    const pathname = url.pathname;
    const parts = pathname.split('/');
    const username = parts[2];
    return username;
  };
  
  const username = getCurrentUsername();


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


  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight / 2.78;
    }
  }, []);

  const scrollContainerHeight = Math.floor((window.innerHeight * 3) / 4);

  // const goToWeek = (offset) => {
  //   const newWeekStartDate = new Date(weeklyDates[0]);
  //   newWeekStartDate.setDate(newWeekStartDate.getDate() + offset * 7);

  //   const newWeekDates = [];
  //   let currentDay = new Date(newWeekStartDate);
  //   for (let i = 0; i < 7; i++) {
  //     newWeekDates.push(new Date(currentDay));
  //     currentDay.setDate(currentDay.getDate() + 1);
  //   }

  //   setWeeklyDates(newWeekDates);
  //   setDates(newWeekDates);
  // };
  const goToWeek = (offset) => {
    const newWeekStartDate = new Date(weeklyDates[0]);
    newWeekStartDate.setDate(newWeekStartDate.getDate() + offset * 7);
  
    const newWeekDates = [];
    let currentDay = new Date(newWeekStartDate);
    for (let i = 0; i < 7; i++) {
      newWeekDates.push(new Date(currentDay));
      currentDay.setDate(currentDay.getDate() + 1);
    }
  
    setWeeklyDates(newWeekDates);
    setDates(newWeekDates);
  
    const navigate = useNavigate();
    const url = new URL(window.location.href);
    const parts = url.pathname.split('/');
    const username = parts[2];
    let year = newWeekDates[0].getFullYear();
    let month = newWeekDates[0].getMonth() + 1;
    let day = newWeekDates[0].getDate();
  
    const newUrl = `/timeschedule/${username}/${year}/${month}/${day}`;
    navigate(newUrl);
  };

  useEffect(() => {
    let year, month, day;

    if (weeklyDates.length > 0) {
      const date = weeklyDates[0].toLocaleDateString();
      const [yearStr, monthStr, dayStr] = date.split('.').map(Number);

      year = parseInt(yearStr);
      month = parseInt(monthStr);
      day = parseInt(dayStr);
    } else {
    }

    if (year && month && day) {
      const fetchData = async () => {
        try {
          const schedule = await fetchSchedule(username, year, month, day);
          console.log(username)
          setDiaryData(schedule.result.data);
        } catch (error) {
          // 오류 처리
          console.log(error)
        }
      };

      fetchData();
    }
  }, [weeklyDates]);



  return (
    <div style={{ marginBottom: '50px' }}>
      <TitleBox>Time Schedule</TitleBox>
      <BtnLayout>
        {weeklyDates.length > 0 && (
          <DateBox>
            {weeklyDates[0].toLocaleDateString()} ~ {weeklyDates[6].toLocaleDateString()}
          </DateBox>
        )}
        <BtnBox>
          <img alt="previous" src={leftSrc} onClick={() => goToWeek(-1)} />
          <img alt="next" src={rightSrc} onClick={() => goToWeek(1)} />
        </BtnBox>
      </BtnLayout>

      <WeekLayout>
        <div style={{ flex: 1, textAlign: 'center' }} />
        {daysOfWeek.map((day) => (
          <WeekBox key={day} style={{ flex: 1, textAlign: 'center' }}>
            {day}
          </WeekBox>
        ))}
      </WeekLayout>


      <div style={{ overflowY: 'scroll', height: `${scrollContainerHeight}px` }} ref={containerRef}>
        <div>

          <Calendar username={username} diaryData={diaryData}
            dates={dates}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

