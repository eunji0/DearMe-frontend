import axios from 'axios';

export const baseURL = 'http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80';
export const username = "str";


//다이어리 데이터 가져오기
export const fetchTimeSchedule = async (day, month, year, username) => {
  try {
    const response = await axios.get(`${baseURL}/timeschedule/str/${year}/${month}/${day}`, {
      params: {
        username: username
      }
    });

    // API 응답 데이터 처리
    const data = response.data;
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
  }
};

//회원가입
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${baseURL}/user`,
      userData
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//타임캡슐 리스트
export const getTimecapsules = async (username) => {
  try {
    const response = await axios.get(`${baseURL}/timecapsule/${username}`);
    // 응답 데이터 처리
    const data = response.data.result.data;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//타임캡슐 삭제
export const deleteTimeCapsule = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/timecapsule/${id}`);
    // 성공적으로 삭제되었을 때의 처리
    console.log('타임캡슐이 삭제되었습니다.');
  } catch (error) {
    // 삭제 실패 시의 처리
    console.error(error);
  }
};

//일정가져오기
export const fetchSchedule = async (username, year, month, day) => {
  try {
    const response = await axios.get(`${baseURL}/timeschedule/${username}/${year}/${month}/${day}`);

    const schedule = response.data;
    return schedule;

  } catch (error) {
    console.error(error);
  }
};
