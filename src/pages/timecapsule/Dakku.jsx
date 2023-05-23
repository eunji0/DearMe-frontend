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
gap: 10px;
width: 400px;
height: 600px;
background-color: ${props => props.bgColor || `${COLORS.Light_Orange}`};
`
const DiaryimgstickerDiv = styled.div`
display: flex;

flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 310px;
height: 110px;
img {
  float: left;
}
overflow: hidden;
}`

const Imgstickers1 = styled.div`
width: 400px;
height: 120px;
`
 
const Imgstickers2 = styled.div`
width: 90px;
height: 90px;
`

const Imgstickers3 = styled.div`
width: 90px;
height: 90px;
`


const Buttonbox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 40px;
width: 466px;
height: 60px;

`

const PinkColorbutton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 40px;
height: 40px;
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
width: 40px;
height: 40px;
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
width: 40px;
height: 40px;
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
width: 40px;
height: 40px;
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
width: 40px;
height: 40px;
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
width: 300px;
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
justify-content: center;
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
padding: 30px;
background: ${COLORS.WHITE};
`

const Diaryname2Div = styled.div`
width: 300px;
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
justify-content: center;
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
  
    const images = document.querySelectorAll('img');
  let clickCount = 0;
  
  images.forEach((image) => {
    image.addEventListener('click', () => {
      clickCount++;
      if (clickCount >= 2) {
        images.forEach((img) => {
          img.style.display = 'inital';
        });
      }
    });
  });
  
  const imageList = [
    dcloud,
    dheart,
    dstar,
    dtv,
    dcalender,
    dtrash,
    dlock,
    dkey,
    dsearch,
    dsetting,
    dhat,
    dlike,
    ddia,
    dmoney,
    dmusic
    ];
  
  //const [selectedImage1, setSelectedImage1] = useState(null);
  //const [selectedImage2, setSelectedImage2] = useState(null);
  //const [selectedImage3, setSelectedImage3] = useState(null);

  const [selectedImages, setSelectedImages] = useState([]);

  // 이미지 클릭 이벤트 핸들러
  const handleImageClick = (index) => {
    
    // 이전에 삽입된 이미지의 플래그를 나타내는 변수 
    let preInsertImage = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    // 전체 이미지 삽입된 수를 확인하는 for문
    let lCount = 0;
    for(let i=0; i<15; i++)
    {
      preInsertImage[i] = false;
      //이미지가 삽입되어 있는 index 
      if(imageList[i] === true)
      {
        lCount++;
        preInsertImage[i] = true;
      }
    }

    // 이미지 삽입수가 3개 이상인 경우 리턴하기 
    if(lCount >= 3 && preInsertImage[index] == false)
    {
      console.log(lCount);
      return;
    }

    // 이미지 삽입 or 삭제 케이스 
    imageList[index] = !imageList[index];
    if (index === 0)
      setdcloud(!dcloud);
    else if (index === 1)
      setdheart(!dheart);
    else if (index === 2)
      setdstar(!dstar);
    else if (index === 3)
      setdtv(!dtv);
    else if (index === 4)
      setdcalender(!dcalender);
    else if (index === 5)
      setdtrash(!dtrash);
    else if (index === 6)
      setdlock(!dlock);
    else if (index === 7)
      setdkey(!dkey);
    else if (index === 8)
      setdsearch(!dsearch);
    else if (index === 9)
      setdsetting(!dsetting);
    else if (index === 10)
      setdhat(!dhat);
    else if (index === 11)
      setdlike(!dlike);
    else if (index === 12)
      setddia(!ddia);
    else if (index === 13)
      setdmoney(!dmoney);
    else if (index === 14)
      setdmusic(!dmusic);

    //setSelectedImages((prevSelectedImages) => [...prevSelectedImages, imageList]);
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
                    </Diaryname2Div>
                    <DiaryimgstickerDiv>
                      <Imgstickers1>
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
                      </Imgstickers1>
                      </DiaryimgstickerDiv>
                </Diaryimg2Div>
              </DakkusetDiv>
              <Dakkuzonediv>
                <DakkusetbuttonDiv>
                  <Dakkusetbutton1>20xx.xx.xx</Dakkusetbutton1>
                  <Dakkusetbutton2>Delete</Dakkusetbutton2>
                </DakkusetbuttonDiv>
                <Dakkustickerline>
                  <Dakkusticker onClick={() => handleImageClick(0)} src={cloudSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(1)} src={heartSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(2)} src={starSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(3)} src={tvSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(4)} src={calenderSrc}></Dakkusticker>
                </Dakkustickerline>
                <Dakkustickerline>
                  <Dakkusticker onClick={() => handleImageClick(5)} src={trashSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(6)} src={lockSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(7)} src={keySrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(8)} src={searchSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(9)} src={settingSrc}></Dakkusticker>
                </Dakkustickerline>
                <Dakkustickerline>
                  <Dakkusticker onClick={() => handleImageClick(10)} src={hatSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(11)} src={likeSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(12)} src={diaSrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(13)} src={moneySrc}></Dakkusticker>
                  <Dakkusticker onClick={() => handleImageClick(14)} src={musicSrc}></Dakkusticker>
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