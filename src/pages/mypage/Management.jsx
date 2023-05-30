import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import infoSrc from "../../assets/svg/angleRight.svg";
import { deleteFri, getFriList, getFriadd, postFriadd, username } from "../../api/api";
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
let friendname = "";



const Management = () => {
  const [showRequest, setShowRequest] = useState(true);
  const [showList1, setShowList1] = useState(true);
  const [showList2, setShowList2] = useState(true);
  const [showList3, setShowList3] = useState(true);
  const [showList4, setShowList4] = useState(true);
  const [showList5, setShowList5] = useState(true);

  const [addfriendname, setFriendname] = useState("");
  const [searchfriendname, searchFriendname] = useState("");
  


  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await postFriadd(username, addfriendname);
      console.log(response);
     
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await getFriadd(username, searchfriendname);
      SearchFri = response.result.data.opponent[0]
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

  // 페이지 로드 시 실행되는 쿼리
  useEffect(() => {
    const fetchData = () => {
      try {
        const response = getFriList(username);
        console.log(response)
        if (response && response.data) {
          const dataSize = response.data.length;
          const friendList = [];
  
          for (let i = 0; i < dataSize; i++) {
            const friendName = response.data[i].name;
            friendList.push(friendName);
          }
  
          console.log(friendList);
          setShowList1(friendList); // Set the friendList array as the value for showList1
        } else {
          console.error("뭘까");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [username]);
  

    // json 데이터의 크기를 얻어와 그만큼 for문으로 반복해
    // 친구목록 변수를 리스트로 만들고 해당 리스트에 이름을 각각 넣어주자!



  const handleDeleteRequest = () => {
    setShowRequest(false);
  };
  const handleDeleteList1 = () => {
    setShowList1(false);
  };
  const handleDeleteList2 = () => {
    setShowList2(false);
  };
  const handleDeleteList3 = () => {
    setShowList3(false);
  };
  const handleDeleteList4 = () => {
    setShowList4(false);
  };
  const handleDeleteList5 = () => {
    setShowList5(false);
  };


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
                    <Buttontxt>{}님</Buttontxt>
                  </Namebotton>
                  <Buttons>
                    <Approvebutton>
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
                  <Requesttxt>친구 검색</Requesttxt>
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
                <Deletebutton onClick={handleDeleteList1}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
           

            <Friendlistbox>
              <Friendlisttxtbox>
                <Friendlisttxt>친구 목록</Friendlisttxt>
              
              </Friendlisttxtbox>
              {showList1 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList1}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showList2 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList2}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showList3 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList3}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showList4 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{}님</Buttontxt>
                </Namebotton>
                <Deletebutton onClick={handleDeleteList4}>
                  <Buttontxt>Delete</Buttontxt>
                </Deletebutton>
              </Friendlist>
              )}
               {showList5 && (
              <Friendlist>
                <Namebotton>
                  <Buttontxt>{}님</Buttontxt>
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