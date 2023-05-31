import axios from 'axios';
export const baseURL = 'http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80';
// export const username = "string11";


//로그인 데이터 post
export const postUsername = async (username, password) => {
  const requestData = {
    username: username,
    password: password
  };

  try {
    const response = await axios.post(`${baseURL}/user/login`, requestData);
    // console.log('로그인 성공:', response.data);
    // 로그인 성공 시 필요한 처리를 진행합니다.
  } catch (error) {
    console.error('로그인 실패:', error);
    // 로그인 실패 시 필요한 처리를 진행합니다.
  }
};

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

export const postFriadd = async (username, opponent) => {
  const newComment = {
    me: username,
    opponent: opponent,
  };
  try {
    const response = await api.post(`${baseURL}/friend/${username}/${opponent}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//친구 검색(전체 유저 목록임)
export const getFriSearch = async (opponent) => {
  const newComment = {
    opponent: opponent,
  };
  try {
    const response = await api.get(`${baseURL}/user/search/${opponent}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//친구 삭제 
export const deleteFri = async (username, opponent) => {
  const newComment = {
    me: username,
    opponent: opponent,
  };
  try {
    const response = await api.delete(`${baseURL}/friend/delete/${username}/${opponent}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 시작시 친구목록 불러오기 
export const getFriList = async (username) => {
  const newComment = {
    me: username,
  };
  try {
    const response = await api.get(`${baseURL}/friend/my/${username}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 친구추가 알람 리스트 
export const getFriendAddList = async (username) => {
  const newComment = {
    me: username,
  };
  try {
    const response = await axios.get(`${baseURL}/friend/yet/${username}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//다이어리 등록
export const postDiary = async () => {
  // const newComment = 
  // {
  //   color: backgroundColor,
  //   coordinateX: coordinateX,
  //   coordinateY: coordinateY,
  //   imageType: imageType,
  //   date: date,
  //   title: inputText,
  //   username: username
  // };
  // {
  //   color: backgroundColor,
  //   coordinateX: 0,
  //   coordinateY: 0,
  //   date: "string",
  //   imageType: "string",
  //   title: inputText,
  //   username: "wooyun"
  // }

  // console.log(newComment)
  try {
    const response = await api.post(`${baseURL}/diary`, newComment);
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//다이어리 보기
export const getDiary = async (username) => {
  try {
    const response = await axios.get(
      `${baseURL}/diary/${username}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//다이어리 저장
export const StoreDiary = async (username, JsonData) => {
  const newComment = 
  {
    color: JsonData.color,
    coordinateX: JsonData.coordinateX,
    coordinateY: JsonData.coordinateY,
    date: JsonData.date,
    imageType: JsonData.imageType,
    title: JsonData.title,
    username: JsonData.username
  }
  try {
    const response = await axios.post(`${baseURL}/diary`, newComment);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error)
  }
};



//회원 수정
// export const patchfixUser = async (userData) => {
//   const { email, password, phone, username } = userData;

//   try {
//     const response = await axios.patch(
//       `http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/user/${username}`,
//       { email, password, phone, username } // Include the 'username' in the request body
//     );

//     console.log(response);
//     return response.data; // Return the response data if needed
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
export const updateUserProfile = async (email, phone, password, username) => {
  const requestUrl = `http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80/user/${username}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&phone=${encodeURIComponent(phone)}&username=${encodeURIComponent(username)}`;

  try {
    const response = await axios.patch(requestUrl);
    console.log(response);
    return response.data; // Optional: Return the response data if needed
  } catch (error) {
    console.error('프로필 수정 실패:', error);
    throw error;
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

//하루일정가져오기
export const fetchTodoList = async (username, yearStr, monthStr, dayStr) => {
  try {
    const requestUrl = `${baseURL}/timeschedule/search/${username}/${parseInt(yearStr)}/${parseInt(monthStr)}/${parseInt(dayStr)}`;
    const response = await axios.get(requestUrl);
    return response.data.result.data.toDo;
  } catch (error) {
    console.error('Failed to fetch todo list:', error);
    return [];
  }
};

export const fetchTodoList2 = async (username, yearStr, monthStr, dayStr) => {
  try {
    const requestUrl = `${baseURL}/timeschedule/search/${username}/${parseInt(yearStr)}/${parseInt(monthStr)}/${parseInt(dayStr)}`;
    const response = await axios.get(requestUrl);
    return response.data.result.data;
  } catch (error) {
    console.error('Failed to fetch todo list:', error);
    return [];
  }
};

//스케줄 날짜 등록
export const addSchedule = async (selectedDate) => {
  try {
    const requestData = {
      date: selectedDate,
      today: "string",
      tomorrow: "string",
      userName: username,
    };

    const response = await fetch(`${baseURL}/timeschedule/day`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (response.ok) {
      const responseData = await response.json();
      // console.log(responseData.result.data);
      return responseData;
    } else {
      console.log('스케줄 등록에 실패하였습니다.');
    }
  } catch (error) {
    console.error('API 호출에 실패하였습니다.', error);
  }
};

//삭제하기
export const deleteTodo = async (id) => {
  try {
    const requestUrl = `${baseURL}/timeschedule/todo/${id}`;
    await axios.delete(requestUrl);
    console.log('Todo deleted successfully');
  } catch (error) {
    console.error('Failed to delete todo:', error);
  }
};