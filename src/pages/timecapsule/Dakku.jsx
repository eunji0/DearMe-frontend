import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import infoSrc from "../../assets/svg/angleRight.svg";
import diaryScr from "../../assets/svg/diary.svg";
import cloudSrc from "../../assets/svg/cloud.svg";
import calenderSrc from "../../assets/svg/calender.svg";
import diaSrc from "../../assets/svg/dia.svg";
import heartSrc from "../../assets/svg/heart.svg";
import hatSrc from "../../assets/svg/hat.svg";
import keySrc from "../../assets/svg/key.svg";
import likeSrc from "../../assets/svg/like.svg";
import lockSrc from "../../assets/svg/lock.svg";
import moneySrc from "../../assets/svg/money.svg";
import musicSrc from "../../assets/svg/music.svg";
import searchSrc from "../../assets/svg/search.svg";
import settingSrc from "../../assets/svg/setting.svg";
import starSrc from "../../assets/svg/star.svg";
import trashSrc from "../../assets/svg/trash.svg";
import tvSrc from "../../assets/svg/tv.svg";

const DiarybigDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 70px 10px;
gap: 10px;
width: 1200px;
height: 667.74px;
background: ${COLORS.WHITE};
`
const DakkubigDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 70px 10px;
gap: 10px;
height: 1500px
width: 1700px;
background: ${COLORS.Orange};
`
const DiaryBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 10px;
gap: 40px;
width: 1200px;
height: 527.74px;
background: ${COLORS.Orange};
`
const DiaryBox2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 10px;
gap: 40px;
width: 1680px;
height: 750.74px;
background: ${COLORS.Orange};
`
const DiaryimgDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 30px;
gap: 10px;
width: 300px;
height: 430px;
background: ${COLORS.Light_Orange};
`
const Diaryimg2Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 30px;
gap: 30px;
width: 500px;
height: 730px;
background: ${COLORS.Light_Orange};
`
const DiaryDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 30px;
gap: 10px;
width: 300px;
height: 430px;
background: #${COLORS.Light_Orange};
`
const DakkusetbuttonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
padding: 20px;
gap: 20px;
width: 546px;
height: 79px;
`
const DiarynameDiv = styled.div`
width: 220px;
height: 50px;
padding: 10px;
background: ${COLORS.WHITE};
`

const Diaryname2Div = styled.div`
width: 350px;
height: 80px;
padding: 10px;
background: ${COLORS.WHITE};
`
const Dakkusetbuttondiv2 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-start;
padding: 10px;
gap: 15px;
width: 546px;
height: 69px;
`
const Dakkusetbutton1 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 15px;
gap: 10px;
background: #FFF8D6;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};

&:active {
  background: ${COLORS.WHITE};
  color: ${COLORS.Orange};
  }
`
const Dakkusetbutton2 = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 15px;
gap: 10px;
background: ${COLORS.Light_Orange};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};

&:active {
  background: ${COLORS.WHITE};
  color: ${COLORS.Orange};
  }
`
const DakkusetDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 586px;
height: 1000px;
`
const Dakkusetbutton3 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 15px;
gap: 10px;
background: ${COLORS.Light_Orange};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};

&:active {
  background: ${COLORS.WHITE};
  color: ${COLORS.Orange};
  }
`
const DakkusetImg = styled.img`
width: 546px;
height: 633px;
`
const Dakkuzonediv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 530px;
height: 370px;
`
const DakkutimecapsuleBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 100px;
gap: 10px;
width: 535px;
height: 43px;
background: #FFC876;
border-radius: 20px;
color: white;
font-size: 20px;
font-weight: 700;
justify-content: center;
`
const Dakkustickerline = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 510px;
height: 110px;
`
const Dakkusticker = styled.img`
width: 90px;
height: 90px;
background: url(Lovepik_com-828892411-Common Simple Wind Linear App Small Icon icon.png);
`
const DakkuPage = styled.div`
display:flex;
flex-direction: column;`

const CheckBox = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${COLORS.Light_Orange};
  
  &:active {
background: ${COLORS.WHITE};
}
  `


const Dakku = () => {
  const [dcloud, setdcloud] = useState(false);

  const handleDragStart = (event, source) => {
    event.dataTransfer.setData("source", source);
  };

  return (
    <DakkuPage>
      <form>
        <DiarybigDiv>
          <DiaryBox>
            <DiaryDiv>
              <DiaryimgDiv>
                <DiarynameDiv>
                </DiarynameDiv>
              </DiaryimgDiv>
            </DiaryDiv>
            <DiaryDiv>
              <DiaryimgDiv>
                <DiarynameDiv>
                </DiarynameDiv>
              </DiaryimgDiv>
            </DiaryDiv>
            <DiaryDiv>
              <DiaryimgDiv>
                <DiarynameDiv>
                </DiarynameDiv>
              </DiaryimgDiv>
            </DiaryDiv>
            <CheckBox><img alt="이용약관 동의" src={infoSrc}/></CheckBox>
          </DiaryBox>
        </DiarybigDiv>

        <DakkubigDiv>
          <DiaryBox2>
          <DakkusetDiv>
            <DakkusetbuttonDiv>
              <Dakkusetbutton1>20xx.xx.xx</Dakkusetbutton1>
              <Dakkusetbutton2>Delete</Dakkusetbutton2>
            </DakkusetbuttonDiv>
            <Diaryimg2Div>
              <Diaryname2Div>
              {
                dcloud===true ? <img alt="cloud" src={cloudSrc}/> : <div></div>
              }
                
              </Diaryname2Div>
            </Diaryimg2Div>
            <Dakkusetbuttondiv2>
              <Dakkusetbutton3>Save</Dakkusetbutton3>
            </Dakkusetbuttondiv2>
          </DakkusetDiv>
          <Dakkuzonediv>
            <Dakkustickerline>
              <Dakkusticker 
              onClick={()=>setdcloud(!dcloud)} src={cloudSrc}>
                
              </Dakkusticker>
              <Dakkusticker src={heartSrc}></Dakkusticker>
              <Dakkusticker src={starSrc}></Dakkusticker>
              <Dakkusticker src={tvSrc}></Dakkusticker>
              <Dakkusticker src={calenderSrc}></Dakkusticker>
            </Dakkustickerline>
            <Dakkustickerline>
              <Dakkusticker src={trashSrc}></Dakkusticker>
              <Dakkusticker src={lockSrc}></Dakkusticker>
              <Dakkusticker src={keySrc}></Dakkusticker>
              <Dakkusticker src={searchSrc}></Dakkusticker>
              <Dakkusticker src={settingSrc}></Dakkusticker>
            </Dakkustickerline>
            <Dakkustickerline>
              <Dakkusticker src={hatSrc}></Dakkusticker>
              <Dakkusticker src={likeSrc}></Dakkusticker>
              <Dakkusticker src={diaSrc}></Dakkusticker>
              <Dakkusticker src={moneySrc}></Dakkusticker>
              <Dakkusticker src={musicSrc}></Dakkusticker>
            </Dakkustickerline>
          </Dakkuzonediv>
          </DiaryBox2>
        </DakkubigDiv>
      </form>
    </DakkuPage>
  )
}

export default Dakku;