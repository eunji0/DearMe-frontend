import React, { useEffect, useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import pencilSrc from "../../assets/svg/pencil.svg";
import WriteTime from "../../component/modal/WriteTime";
import { getTimecapsules, deleteTimeCapsule } from "../../api/api";
import { useRecoilValue } from "recoil";
import { usernameState } from "../../atoms/atoms";


const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
width: 100%;
background: ${COLORS.WHITE};`

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 840px;
`

const TitleBox = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
padding: 35px 0px 15px;
width: 100%;
`

const InTitleBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 15px 20px;
gap: 10px;
width: 90%;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.BLACK};
`

const WriteBox = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 10px;
gap: 3px;
width: 40px;
height: 40px;
background: ${COLORS.Light_Orange};
border: 1px solid ${COLORS.Orange};
border-radius: 10px;
margin-right: 10px;`

const ListLayout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
gap: 45px;
width: 100%;`

const ListBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 100%;
background: ${COLORS.Orange};
border-radius: 10px;`

const DateLayout = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
/* padding: 0px 10px 5px; */
gap: 10px;
width: 100%;
`

const DateBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color:${COLORS.BLACK};
`

const TextBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 0px 10px 10px;
gap: 10px;
width: 100%;
height: 120px;
background: ${COLORS.Light_Orange};
border-radius: 20px;
`

const Text = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: ${COLORS.BLACK};
`

const BtnLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
/* padding: 0px 10px; */
gap: 10px;
width: 100%;
`

const BtnBox = styled.div`
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
border-radius: 10px;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color:${COLORS.BLACK};
`

const ModalWrapper = styled.div`
  position: fixed;
  top: -10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
	background-color: ${COLORS.WHITE};
`

const TimeCapsules = () => {
  const [showModal, setShowModal] = useState(false);
  const [indata, setInDate] = useState([]);
  const username = "string11";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTimecapsules(username);
        setInDate(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (id) => {
    try {
      await deleteTimeCapsule(id);
      console.log('타임캡슐이 삭제되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const reversedData = indata.slice().reverse();
  // console.log(reversedData)

  return (
    <div>
      <Layout>
        <Box>
          <TitleBox>
            <InTitleBox>Open my time capsules</InTitleBox>
            <WriteBox onClick={() => setShowModal(!showModal)}>
              <img alt="타임캡슐 만들기" src={pencilSrc} />
            </WriteBox>
            {
              showModal &&
              <ModalWrapper>
                <WriteTime onClose={() => setShowModal(false)} />
              </ModalWrapper>

            }
          </TitleBox>
          <ListLayout>
            {
              reversedData.map((item, index) => (
                <ListBox key={index}>
                  <DateLayout>
                    <DateBox>
                    {item.toDay} -&gt; {item.nextDay}
                    </DateBox>
                  </DateLayout>
                  <TextBox>
                    <Text>{item.content}</Text>
                  </TextBox>
                  <BtnLayout>
                    <BtnBox onClick={() => handleDelete(item.timeCapsuleId)}>Delete</BtnBox>
                  </BtnLayout>
                </ListBox>
              ))
            }
          </ListLayout>
        </Box>
      </Layout>
    </div>
  )
}

export default TimeCapsules;
