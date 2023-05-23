import React, { useEffect, useState } from 'react';
import Calendar from './Calendar';
import { getDiaryByUsername, username } from '../../api/api';

const Parent = () => {
  const [diaryData, setDiaryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiaryByUsername(username);
        setDiaryData(data.result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(diaryData)

  return (
    <div>
      <h1>다이어리</h1>
      <Calendar diaryData={diaryData} />
    </div>
  );
};

export default Parent;
