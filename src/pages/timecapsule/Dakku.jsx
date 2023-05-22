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
;
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
;
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
const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 10px;
`;

const Diaryimg2Div = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 30px;
gap: 30px;
width: 500px;
height: 730px;
background-color: ${props => props.bgColor || `${COLORS.Light_Orange}`};
`
const DiaryimgstickerDiv = styled.div`
width: 200px;
height: 400px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background-color: transparent;
`

const Buttonbox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 40px;
width: 566px;
height: 70px;

`

const PinkColorbutton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 50px;
height: 50px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
background: ${COLORS.PINK};
border-radius: 50px;
gap: 30px;

&:active {
  background: ${COLORS.WHITE};
  }
`

const BlueColorbutton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 50px;
height: 50px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
background: ${COLORS.BLUE};
border-radius: 50px;
gap: 30px;

&:active {
  background: ${COLORS.WHITE};
  }
`
const PurpleColorbutton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 50px;
height: 50px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
background: ${COLORS.PURPLE};
border-radius: 50px;
gap: 30px;

&:active {
  background: ${COLORS.WHITE};
  }
`
const GrayColorbutton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 50px;
height: 50px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
background: ${COLORS.GRAY};
border-radius: 50px;
gap: 30px;

&:active {
  background: ${COLORS.WHITE};
  }
`
const YellowColorbutton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 50px;
height: 50px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
background: ${COLORS.Light_Orange};
border-radius: 50px;
gap: 30px;

&:active {
  background: ${COLORS.WHITE};
  }
`


const Buttontxt = styled.div`
width: 58px;
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
color: ${COLORS.BLACK};

&:active {
  color: ${COLORS.Orange};
  }
`
const TextInput = styled.input`
width: 350px;
height: 80px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 40px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: ${COLORS.Black};
background-color: transparent;
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
  const [dheart, setdheart] = useState(false);
  const [dstar, setdstar] = useState(false);
  const [dtv, setdtv] = useState(false);
  const [dcalender, setdcalender] = useState(false);

  const [dtrash, setdtrash] = useState(false);
  const [dlock, setdlock] = useState(false);
  const [dkey, setdkey] = useState(false);
  const [dsearch, setdsearch] = useState(false);
  const [dsetting, setdsetting] = useState(false);

  const [dhat, setdhat] = useState(false);
  const [dlike, setdlike] = useState(false);
  const [ddia, setddia] = useState(false);
  const [dmoney, setdmoney] = useState(false);
  const [dmusic, setdmusic] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState("");
  const [inputText, setInputText] = useState("");
  const maxCharacters = 10;

  const handleButtonClick = (color) => {
    setBackgroundColor(color);
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    if (text.length <= maxCharacters) {
      setInputText(text);
    }
  };

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
            <CheckBox></CheckBox>
          </DiaryBox>
        </DiarybigDiv>

        <DakkubigDiv>
          <DiaryBox2>
            <DakkusetDiv>

              <Buttonbox>
                <PinkColorbutton>
                  <Buttontxt onClick={() => handleButtonClick(`${COLORS.PINK}`)} ></Buttontxt>
                </PinkColorbutton>
                <BlueColorbutton>
                  <Buttontxt onClick={() => handleButtonClick(`${COLORS.BLUE}`)} ></Buttontxt>
                </BlueColorbutton>
                <PurpleColorbutton>
                  <Buttontxt onClick={() => handleButtonClick(`${COLORS.PURPLE}`)} ></Buttontxt>
                </PurpleColorbutton>
                <GrayColorbutton>
                  <Buttontxt onClick={() => handleButtonClick(`${COLORS.GRAY}`)}></Buttontxt>
                </GrayColorbutton>
                <YellowColorbutton>
                  <Buttontxt onClick={() => handleButtonClick(`${COLORS.Light_Orange}`)} > </Buttontxt>
                </YellowColorbutton>
              </Buttonbox>
              <Diaryimg2Div bgColor={backgroundColor}>
                <Diaryname2Div>

                  <TextInput
                    type="text"
                    placeholder="다이어리 제목"
                    value={inputText}
                    onChange={handleInputChange}
                    maxLength={maxCharacters}
                  />
                  
                    {dcloud === true ? <img alt="cloud" src={cloudSrc} /> : <div></div>}
                    {dheart === true ? <img alt="heart" src={heartSrc} /> : <div></div>}
                    {dstar === true ? <img alt="star" src={starSrc} /> : <div></div>}
                    {dtv === true ? <img alt="tv" src={tvSrc} /> : <div></div>}
                    {dcalender === true ? <img alt="calender" src={calenderSrc} /> : <div></div>}

                    {dtrash === true ? <img alt="trash" src={trashSrc} /> : <div></div>}
                    {dlock === true ? <img alt="lock" src={lockSrc} /> : <div></div>}
                    {dkey === true ? <img alt="key" src={keySrc} /> : <div></div>}
                    {dsearch === true ? <img alt="search" src={searchSrc} /> : <div></div>}
                    {dsetting === true ? <img alt="setting" src={settingSrc} /> : <div></div>}

                    {dhat === true ? <img alt="hat" src={hatSrc} /> : <div></div>}
                    {dlike === true ? <img alt="like" src={likeSrc} /> : <div></div>}
                    {ddia === true ? <img alt="dia" src={diaSrc} /> : <div></div>}
                    {dmoney === true ? <img alt="money" src={moneySrc} /> : <div></div>}
                    {dmusic === true ? <img alt="music" src={musicSrc} /> : <div></div>}
                  

                </Diaryname2Div>
              </Diaryimg2Div>
            </DakkusetDiv>
            <Dakkuzonediv>
              <DakkusetbuttonDiv>
                <Dakkusetbutton1>20xx.xx.xx</Dakkusetbutton1>
                <Dakkusetbutton2>Delete</Dakkusetbutton2>
              </DakkusetbuttonDiv>
              <Dakkustickerline>
                <Dakkusticker onClick={() => setdcloud(!dcloud)} src={cloudSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdheart(!dheart)} src={heartSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdstar(!dstar)} src={starSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdtv(!dtv)} src={tvSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdcalender(!dcalender)} src={calenderSrc}></Dakkusticker>
              </Dakkustickerline>
              <Dakkustickerline>
                <Dakkusticker onClick={() => setdtrash(!dtrash)} src={trashSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdlock(!dlock)} src={lockSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdkey(!dkey)} src={keySrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdsearch(!dsearch)} src={searchSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdsetting(!dsetting)} src={settingSrc}></Dakkusticker>
              </Dakkustickerline>
              <Dakkustickerline>
                <Dakkusticker onClick={() => setdhat(!dhat)} src={hatSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdlike(!dlike)} src={likeSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setddia(!ddia)} src={diaSrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdmoney(!dmoney)} src={moneySrc}></Dakkusticker>
                <Dakkusticker onClick={() => setdmusic(!dmusic)} src={musicSrc}></Dakkusticker>
              </Dakkustickerline>
              <Dakkusetbuttondiv2>
                <Dakkusetbutton3>Save</Dakkusetbutton3>
              </Dakkusetbuttondiv2>
            </Dakkuzonediv>
          </DiaryBox2>
        </DakkubigDiv>
      </form>
    </DakkuPage>
  )
}

export default Dakku;