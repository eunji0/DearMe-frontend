import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import leftSrc from "../../assets/svg/mainLeft.svg";
import rightSrc from "../../assets/svg/mainRight.svg";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import DetailPage from "../detail/DetailPage";
import axios from "axios";

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
`

const LinkStyle = styled(Link)`
text-decoration: none;`

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


const MainPage = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [weeklyDates, setWeeklyDates] = useState([]);
  const [scheduleData, setScheduleData] = useState({});
  const containerRef = useRef(null);
  const [detailOn, setDetailOn] = useState(false);
  const startHour = 0;
  const endHour = 24;

  const handleDetailPageClose = () => {
    setDetailOn(false);
  };

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
  };

  // const fetchScheduleData = async () => {
  //   try {
  //     const response = await axios.get('http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/timecapsule/12');
  //     const dummyScheduleData = response.data;
  //     const filteredScheduleData = {};

  //     Object.keys(dummyScheduleData).forEach(date => {
  //       if (weeklyDates.some(weekDate => weekDate.toISOString().slice(0, 10) === date)) {
  //         filteredScheduleData[date] = dummyScheduleData[date];
  //       }
  //     });

  //     setScheduleData(filteredScheduleData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const fetchScheduleData = () => {
    // 더미 일정 데이터
    const dummyScheduleData = {
      '2023-05-21': ['Meeting 1', 'Meeting 2'], // 일요일
      '2023-05-22': ['Task 1', 'Task 2'], // 월요일
      '2023-05-23': ['Appointment'], // 화요일
      '2023-05-24': [], // 수요일
      '2023-05-25': ['Event'], // 목요일
      '2023-05-26': ['Project'], // 금요일
      '2023-05-27': ['Task 3'], // 토요일
      '2023-05-28': ['Task 3'], // 다음주
    };
  
    // 주간 날짜 범위에 해당하는 일정 데이터를 가져옵니다.
    const filteredScheduleData = weeklyDates.reduce((result, date) => {
      const formattedDate = date.toISOString().slice(0, 10);
      result[formattedDate] = dummyScheduleData[formattedDate] || [];
      return result;
    }, {});
  
    setScheduleData(filteredScheduleData);
  };
  


  useEffect(() => {
    fetchScheduleData();
  }, [weeklyDates]);

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
          <img alt="previous" src={leftSrc} onClick={() => goToWeek(-1)} />
          <img alt="next" src={rightSrc} onClick={() => goToWeek(1)} />
        </BtnBox>
      </BtnLayout>
      <div></div>
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
          {[...Array(endHour - startHour + 1)].map((_, hourIndex) => {
            const hour = startHour + hourIndex;
            return (
              <div key={hour} style={{ display: 'flex' }}>
                <HourBox style={{ flex: 1, textAlign: 'center' }}>
                  {hour}:00
                </HourBox>
                {daysOfWeek.map((day, dayIndex) => {
                  const date = weeklyDates[dayIndex+1]?.toISOString().slice(0, 10) || null;
                  const daySchedule = scheduleData[date] || [];
                  return (
                    <ListBox onClick={() => setDetailOn(!detailOn)} key={`${day}-${hour}`}>
                      {daySchedule.map((schedule) => (
                        <List key={schedule}>{schedule}</List>
                      ))}
                    </ListBox>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {detailOn && (
  <SlidePage open={detailOn} className={detailOn ? "slide-in" : "slide-out"}>
    <DetailPage onClose={handleDetailPageClose} />
  </SlidePage>
)}
    </div>
  );
};

export default MainPage;