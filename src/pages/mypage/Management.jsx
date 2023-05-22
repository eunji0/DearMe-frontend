import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import infoSrc from "../../assets/svg/angleRight.svg";

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

const Requesttxt = styled.div`
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
  height: 39px;
  gap: 50px;
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
  gap : 20px;
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
  width: 78px;
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

const Approvebutton = styled.div`
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

  &:active {
    background: ${COLORS.Orange};
    color: ${COLORS.WHITE};
  }
`;

const Deletebutton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 66px;
  height: 39px;
  background: ${COLORS.Light_Orange};
  border-radius: 10px;

  &:active {
    background: ${COLORS.Orange};
    color: ${COLORS.WHITE};
  }
`;

const Buttontxt = styled.div`
  width: 60px;
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

const Management = () => {
  const [showRequest, setShowRequest] = useState(true);
  const [showList1, setShowList1] = useState(true);
  const [showList2, setShowList2] = useState(true);
  const [showList3, setShowList3] = useState(true);
  const [showList4, setShowList4] = useState(true);
  const [showList5, setShowList5] = useState(true);


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
