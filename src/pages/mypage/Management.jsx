import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import infoSrc from "../../assets/svg/angleRight.svg";
import { getFriendAddList, deleteFri, getFriList, getFriSearch, postFriadd, username } from "../../api/api";
import { useEffect } from 'react';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px 10px;
  gap: 10px;
  width: 1022px;
  height: 696px;
`;

const Txtbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 100px;
  gap: 10px;
  width: 922px;
  height: 73px;
`;

const Txt = styled.div`
  width: 99px;
  height: 23px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.Orange};
`;

const Listbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 50px;
  width: 822px;
  height: 563px;
`;

const Requestbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 822px;
  height: 138px;
`;

const Requesttxtbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  width: 822px;
  height: 39px;
`;

const Addtxtbox = styled.div`
border-top: 2px solid ${COLORS.Orange};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  width: 822px;
  height: 39px;
`;

const Requesttxt = styled.div`
margine-top : 30px;
  width: 231px;
  height: 19px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.Orange};
`;

const Requestlistbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  gap: 10px;
  width: 802px;
  height: 69px;
 
`;

const Friendlistbox = styled.div`
border-top: 2px solid ${COLORS.Orange};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 842px;
  height: 375px;
`;

const Friendlisttxtbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  width: 922px;
  height: 59px;
  gap: 10px;
`;

const Friendlisttxt = styled.div`
  width: 83px;
  height: 19px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  gap : 10px;
  color: ${COLORS.Orange};
`;

const Friendlist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  gap: 10px;
  width: 822px;
  height: 69px;
  border-bottom: 2px solid #FFF8D6;
`;

const Namebotton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 108px;
  height: 39px;
  background: ${COLORS.Light_Orange};
  border-radius: 10px;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 10px;
  gap: 10px;
  width: 176px;
  height: 39px;
`;

const Approvebutton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 80px;
  height: 39px;
  background: ${COLORS.Light_Orange};
  border-radius: 10px;
  justify-content: center;
   border: none;

  &:active {
    background: ${COLORS.Orange};
    color: ${COLORS.WHITE};
  }
`;

const Deletebutton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 66px;
  height: 39px;
  background: ${COLORS.Light_Orange};
  border-radius: 10px;
   border: none;

  &:active {
    background: ${COLORS.Orange};
    color: ${COLORS.WHITE};
  }
`;

const Addbutton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 96px;
  height: 39px;
  background: ${COLORS.Light_Orange};
  border-radius: 10px;
  border: none;
  white-space: nowrap;
  justify-content: center;
  

  &:active {
    background: ${COLORS.Orange};
    color: ${COLORS.WHITE};
  }
`;

const Searchbutton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 96px;
  height: 39px;
  background: ${COLORS.Light_Orange};
  border-radius: 10px;
  border: none;
  justify-content: center;
   white-space: nowrap;
  justify-content:

  &:active {
    background: ${COLORS.Orange};
    color: ${COLORS.WHITE};
  }
`;

const Buttontxt = styled.div`
  width: 100px;
  height: 19px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${COLORS.Orange};
`;

const InnerBox = styled.div`
width: 100%;
height: 138px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px;
`
const TitleBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px;
gap: 10px;
background: ${COLORS.Orange};
border-radius: 20px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.WHITE};
`
const InBox = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px;
gap: 10px;
width: 400px;
height: 44px;
background: ${COLORS.Orange};
border-radius: 20px;
border: none;
`

const LogBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Orange};
border-radius: 20px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.Orange};
cursor: pointer;

&:active {
background: ${COLORS.Orange};
color: ${COLORS.WHITE};
}
`

const Addbox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 10px;
width: 802px;
height: 49px;
`

//친구 찾기 변수
let SearchFri = "";
//친구 목록 배열
const myFriendListArr = ["","","","",""];
//친구 추가 들어온것에 대한 배열 
let myFriendFollowerList = [];
let myFriendFollower = "";


const Management = () => {
  const [showRequest, setShowRequest] = useState(true); // 친구 요청 목록을 보여주는거 
  const [showList1, setShowList1] = useState(true); // 친구 찾기 목록을 보여주는거 
  
  const [showMyFriend1, setShowMyFriendList1] = useState(true);
  const [showMyFriend2, setShowMyFriendList2] = useState(true);
  const [showMyFriend3, setShowMyFriendList3] = useState(true);
  const [showMyFriend4, setShowMyFriendList4] = useState(true);
  const [showMyFriend5, setShowMyFriendList5] = useState(true);

  const [addfriendname, setFriendname] = useState("");
  const [searchfriendname, searchFriendname] = useState("");
  

  // 페이지 로드 시 실행되는 쿼리
  useEffect(() => {
    //친구 목록 업데이트에 대한 함수 
    updateFriendListUI();
    //친구 추가 요청에 대한 함수 
    updateFriendAddListUI();
  }, [username]);

  // 친구 추가에 대한 Add
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await postFriadd(username, addfriendname);
      console.log(response);
      updateFriendListUI();
    } catch (error) {
      console.error(error);
    }
  };

  //친구 검색의 Add
  const handleAddSearchList = async () => {
    console.log("call handleAddSearchList");
    const response = await postFriadd(username, SearchFri);
    SearchFri = "";
    updateFriendListUI();
  };

  //친구 요청의 Add
  const handleAddRequest = async () => {
    console.log("call handleAddRequest");
    const response = await postFriadd(username, myFriendFollower);
    myFriendFollower = "";
    updateFriendListUI();
  };

  // 친구 찾기에 대한 함수
  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await getFriSearch(searchfriendname);
      SearchFri = response.result.data[0].username;
      console.log(response);
      console.log(SearchFri);
      
      if(SearchFri.length == 0)
      {
        setShowList1(false);
      }
      else
      {
        setShowList1(SearchFri);
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  
  /**************************************************
  Delete 공통사항 
  1. Delete 시 Query 전달후 목록에서 삭제하고 
  2. 리스트를 업데이트시킴 
  ***************************************************/
  //친구 요청의 delete
  //의문 -> 친구 요청이 들어옴 
  //     -> 친구 승인을 하면 더이상 getFriendAddList 에서 해당 친구추가 요청이 들어오지 않음
  //     -> 하지만 친구 거절을 하면 계속 getFriendAddList에서 해당 친구추가가 들어옴
  //     -> 승인은 되는거 같은데 거절을 어케함...? 석범님에게 문의 
  const handleDeleteRequest = () => {
    console.log("call handleDeleteRequest");
    UpdateDeleteButtonUI();
  };

  //친구 목록의 delete
  const handleDeleteList1 = () => {
    console.log("call handleDeleteList1");
    deleteFri(username,myFriendListArr[0]);
    UpdateDeleteButtonUI();
  };
  const handleDeleteList2 = () => {
    console.log("call handleDeleteList2");
    deleteFri(username,myFriendListArr[1]);
    UpdateDeleteButtonUI();
  };
  const handleDeleteList3 = () => {
    console.log("call handleDeleteList3");
    deleteFri(username,myFriendListArr[2]);
    UpdateDeleteButtonUI();
  };
  const handleDeleteList4 = () => {
    console.log("call handleDeleteList4");
    deleteFri(username,myFriendListArr[3]);
    UpdateDeleteButtonUI();
  };
  const handleDeleteList5 = () => {
    console.log("call handleDeleteList5");
    deleteFri(username,myFriendListArr[4]);
    UpdateDeleteButtonUI();
  };

  // Delete 버튼 누를때 업데이트되는 항목들 
  const UpdateDeleteButtonUI = () => {
    setShowRequest(false);
    setShowRequest(true);
    setShowMyFriendList1(false);
    setShowMyFriendList1(true);
    setShowMyFriendList2(false);
    setShowMyFriendList2(true);
    setShowMyFriendList3(false);
    setShowMyFriendList3(true);
    setShowMyFriendList4(false);
    setShowMyFriendList4(true);
    setShowMyFriendList5(false);
    setShowMyFriendList5(true);
  }

  // 친구추가 알람용 API
  const updateFriendAddListUI = async () => {
    try {
      const response = await getFriendAddList(username);
      const dataArray = response.result.data.opponent;
      console.log(response);
      console.log(dataArray.length);

      for(let i=0; i<dataArray.length; i++)
      {
        myFriendFollowerList[i] = dataArray[i];
      }
      myFriendFollower = myFriendFollowerList[0];
      setShowRequest(myFriendFollower);
    } catch (error) {
      console.error(error);
    }
  }

  // 친구 목록 UI 를 새로고침할때 호출 
  const updateFriendListUI = async () => {
    try {
      const response = await getFriList(username);
      // 친구가 몇명이있는지 알아오는 코드 
      const dataArray = response.result.data.opponent;
      // 해당 친구에 대한 리스트를 변수에 담는 과정 (최대5명까지)
      for(let i =0; i<dataArray.length; i++)
      {
          myFriendListArr[i] = dataArray[i];
          if(i===0)
          {
            setShowMyFriendList1(myFriendListArr[i]);
          }
          else if(i===1)
          {
            setShowMyFriendList2(myFriendListArr[i]);
          }
          else if(i===2)
          {
            setShowMyFriendList3(myFriendListArr[i]);
          }
          else if(i===3)
          {
            setShowMyFriendList4(myFriendListArr[i]);
          }
          else if(i===4)
          {
            setShowMyFriendList5(myFriendListArr[i]);
          }

          if(i==4)
          {
            break;
          }
      }
      console.log(myFriendListArr);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form>
        <Box>
          <Txtbox>
            <Txt>친구 목록</Txt>
          </Txtbox>

          <Listbox>
              <Requestbox>
                <Requesttxtbox>
                  <Requesttxt>친구 요청이 왔어요!</Requesttxt>
                </Requesttxtbox>
                {showRequest && (
                <Requestlistbox>
                  <Namebotton>
                    <Buttontxt>{myFriendFollower}님</Buttontxt>
                  </Namebotton>
                  <Buttons>
                    <Approvebutton onClick={handleAddRequest}>
                      <Buttontxt>Approve</Buttontxt>
                    </Approvebutton>
                    <Deletebutton onClick={handleDeleteRequest}>
                      <Buttontxt>Delete</Buttontxt>
                    </Deletebutton>
                  </Buttons>
                </Requestlistbox>
                )}
              </Requestbox>

              <Addtxtbox>
                  <Requesttxt>친구 추가</Requesttxt>
                </Addtxtbox>
                <Addbox>
                <InnerBox>
              <TitleBox>친구 이름 :</TitleBox>
              <InBox
                type="text"
                id="addfriendname"
                value={addfriendname}
                onChange={(e) => setFriendname(e.target.value)} />
                <Addbutton onClick={handleSubmitAdd}><Buttontxt>친구 추가</Buttontxt></Addbutton>
            </InnerBox>
            </Addbox>

             <Addtxtbox>
                  <Requesttxt>친구 찾기</Requesttxt>
                </Addtxtbox>
                <Addbox>
                <InnerBox>
              <TitleBox>친구 이름 :</TitleBox>
              <InBox
                type="text"
                id="searchfriendname"
                value={searchfriendname}
                onChange={(e) => searchFriendname(e.target.value)} />
                <Searchbutton onClick={handleSubmitSearch}><Buttontxt>친구 검색</Buttontxt></Searchbutton>
            </InnerBox>
            
            </Addbox>
            {showList1 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{SearchFri}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleAddSearchList}>
                  <Buttontxt>Add</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
           

            <Friendlistbox>
              <Friendlisttxtbox>
                <Friendlisttxt>친구 목록</Friendlisttxt>
              
              </Friendlisttxtbox>
              {showMyFriend1 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{myFriendListArr[0]}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList1}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showMyFriend2 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{myFriendListArr[1]}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList2}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showMyFriend3 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{myFriendListArr[2]}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList3}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showMyFriend4 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{myFriendListArr[3]}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList4}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showMyFriend5 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{myFriendListArr[4]}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList5}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
            </Friendlistbox>
          </Listbox>
        </Box>
      </form>
    </div>
  );
};

export default Management;