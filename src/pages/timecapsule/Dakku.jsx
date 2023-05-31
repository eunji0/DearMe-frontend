import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
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
import { getDiary, StoreDiary} from "../../api/api";
import { usernameState } from "../../atoms/atoms";
import { useRecoilValue } from "recoil";


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
height: 1500px;
width: 1700px;
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
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 30px;
gap: 10px;
width: 300px;
height: 430px;
background-color: ${props => props.bgColor || `${COLORS.Light_Orange}`};
`
const Diaryimg2Div = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px 30px;
gap: 10px;
width: 300px;
height: 430px;
background-color: ${props => props.bgColor || `${COLORS.Light_Orange}`};
`
const DiaryimgstickerDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-left: 20px;
width: 310px;
height: 110px;
`

const Diaryimgsticker2Div = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 310px;
height: 110px;
margin-left: -30px;
`

const Imgstickers1 = styled.div`
margin-top : 10px;
width: 300px;
height: 120px;
`


const Buttonbox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 30px;
width: 466px;
height: 60px;

`

const PinkColorbutton = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 30px;
height: 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 18px;
background: ${COLORS.PINK};
border-radius: 50px;

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
width: 30px;
height: 30px;
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
width: 30px;
height: 30px;
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
width: 30px;
height: 30px;
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
width: 30px;
height: 30px;
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
const TextOutput = styled.output`
width: 220px;
height: 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
color: ${COLORS.Black};
background-color: transparent;
justify-content: center;
`

const TextInput = styled.input`
width: 220px;
height: 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
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

const EditText = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  gap: 15px;
  background: ${COLORS.Light_Orange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  border: none;
  outline: none;
  width: 120px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.BLACK};
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
const Dakkusetbutton3 = styled.button`
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
border: none;
color: ${COLORS.BLACK};

&:active {
  background: ${COLORS.WHITE};
  color: ${COLORS.Orange};
  }
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
`

const DakkuPage = styled.div`
display:flex;
flex-direction: column;`




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

    const imageList = [dcloud,dheart,dstar,dtv,dcalender,dtrash,dlock,dkey,dsearch,dsetting,dhat,dlike,ddia,dmoney,dmusic];

    // 현재 날짜를 기본값으로 
    const [TextDate, setTextDate] = useState('');
    // 이미지 백그라운드 색상 
    const [backgroundColor, setBackgroundColor] = useState(COLORS.Light_Orange);
    // 타이틀 입력값 
    const [inputText, setInputText] = useState("");

    //상단 3개 다이어리 타이틀 이름 배열
    const [showTitleNameArr, setshowTitleNameArr] = useState(["","",""]);
    //상단 3개 다이어리 백그라운드 컬러 배열 
    const [showTitleBackGroundcolorArr, setshowTitleBackGroundcolorArr] = useState([COLORS.Light_Orange,COLORS.Light_Orange,COLORS.Light_Orange]);
    //상단 3개 다이어리 날짜 배열 
    const [showTitleDateArr, setshowTitleDateArr] = useState(["","",""]);
    //상단 3개 다이어리 이미지 배열
    const [showTitleImageArr, setshowTitleImageArr] = useState(["","",""]);
    const username = useRecoilValue(usernameState);
    // 타이틀 다이어리 UI 갱신 
    const [showDiary1, setshowDiary1] = useState(true);
    const [showDiary2, setshowDiary2] = useState(true);
    const [showDiary3, setshowDiary3] = useState(true);
    
    // 타이틀 다이어리 이미지 로드를 위해 필요한 배열
    const [TitleimageList1, setTitleimageList1] = useState(Array.from({ length: 15 }, () => ""));
    const [TitleimageList2, setTitleimageList2] = useState(Array.from({ length: 15 }, () => ""));
    const [TitleimageList3, setTitleimageList3] = useState(Array.from({ length: 15 }, () => ""));
  
    useEffect(()=>{
      getLoadMyDiaryList();
      getCurrentDate();
    }, [])

    const getLoadMyDiaryList = async () => {
      console.log("call getLoadMyDiaryList");
      const response = await getDiary(username);
      const dataArray = response.result.data;
      //console.log(dataArray);

      for(let i=0; i<dataArray.length; i++)
      {
        showTitleNameArr[i] = dataArray[i].title;
        showTitleBackGroundcolorArr[i] = dataArray[i].color;
        showTitleDateArr[i] = dataArray[i].date;
        showTitleImageArr[i] = dataArray[i].imageType;
      }
      updateTitleDiary(dataArray);
    };

    const updateTitleDiary = (dataArray) =>
    {
      //UI Update시 전체 초기화 
      for(let i=0; i<15; i++)
      {
        TitleimageList1[i] = "";
        TitleimageList2[i] = "";
        TitleimageList3[i] = "";
      }

      //전체 다이어리 3개 있는거 반복 
      console.log(dataArray);
      for(let i=0; i<dataArray.length; i++)
      {
        for(let j=0; j<3; j++)
        {
          if(i===0)
          {
            if(showTitleImageArr[i][j] === "")
            {
              break;
            }
            else
            {
              TitleimageList1[showTitleImageArr[i][j]] = true;
            }
          }
          else if(i===1)
          {
            if(showTitleImageArr[i][j] === "")
            {
              break;
            }
            else
            {
              TitleimageList2[showTitleImageArr[i][j]] = true;
            }
          }
          else if(i===2)
          {
            if(showTitleImageArr[i][j] === "")
            {
              break;
            }
            else
            {
              TitleimageList3[showTitleImageArr[i][j]] = true;
            }
          }
        }
      }

      setshowDiary1(showTitleNameArr,showTitleBackGroundcolorArr,showTitleDateArr,TitleimageList1);
      setshowDiary2(showTitleNameArr,showTitleBackGroundcolorArr,showTitleDateArr,TitleimageList2);
      setshowDiary3(showTitleNameArr,showTitleBackGroundcolorArr,showTitleDateArr,TitleimageList3);
    }

    //현재날짜 얻어오는 함수 
    const getCurrentDate = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const currentDate = `${year}-${month}-${day}`;
      setTextDate(currentDate);
    };

    // 색 변경 클릭했을때 호출되는 함수
    const handleButtonClick = (color) => {
      setBackgroundColor(color);
    };
  
     //타이틀 입력 함수 
    const handleInputChange = (event) => {
      const text = event.target.value;
      if (text.length <= 12) {
        setInputText(text);
      }
    };

     //날짜 입력 함수 
    const handleChangeDate = (event) => {
      // 숫자와 하이푼만 입력이 가능하도록 만들어놓음
      const text = event.target.value.replace(/[^0-9-]/g, '');
      if(text.length <= 10)
      {
        setTextDate(text);
      }
    };

    // 생성한 다이어리 저장 
    const BtnStoreDiary = async () => {
      console.log("call BtnStoreDiary");
      
      let strImageType = "";
      for(let i=0; i<imageList.length; i++)
      {
        if(imageList[i] === true)
        {
          strImageType += String(i);
        }
      }
      
      // 색을 선택하지 않았을때 기본값 설정
      if(backgroundColor === "")
      {
        backgroundColor = "rgba(255, 248, 214, 1)";
      }
      
      const JsonData = 
      {
        "color": backgroundColor,
        "coordinateX": 0,
        "coordinateY": 0,
        "date": TextDate,
        "imageType": strImageType,
        "title": inputText,
        "username": username
      } 

      const response = await StoreDiary(username,JsonData);
      console.log(response);
    };

  
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

  };


  const handleResetButtonClick = () => {
    window.location.reload();
  };

    return (
      <DakkuPage>
        <form>
          <DiarybigDiv>
            <DiaryBox>
            {showDiary1 && (
              <DiaryDiv>
                <DiaryimgDiv bgColor={showTitleBackGroundcolorArr[0]}>
                  <DiarynameDiv>
                  <TextOutput>{showTitleNameArr[0]}</TextOutput>

                  <Diaryimgsticker2Div>
                      <Imgstickers1>
                      {TitleimageList1[0] === true ? <img alt="cloud" src={cloudSrc} /> : <div></div>}
                      {TitleimageList1[1] === true ? <img alt="heart" src={heartSrc} /> : <div></div>}
                      {TitleimageList1[2] === true ? <img alt="star" src={starSrc} /> : <div></div>}
                      {TitleimageList1[3] === true ? <img alt="tv" src={tvSrc} /> : <div></div>}
                      {TitleimageList1[4] === true ? <img alt="calender" src={calenderSrc} /> : <div></div>}
                      {TitleimageList1[5] === true ? <img alt="trash" src={trashSrc} /> : <div></div>}
                      {TitleimageList1[6] === true ? <img alt="lock" src={lockSrc} /> : <div></div>}
                      {TitleimageList1[7] === true ? <img alt="key" src={keySrc} /> : <div></div>}
                      {TitleimageList1[8] === true ? <img alt="search" src={searchSrc} /> : <div></div>}
                      {TitleimageList1[9] === true ? <img alt="setting" src={settingSrc} /> : <div></div>}
                      {TitleimageList1[10] === true ? <img alt="hat" src={hatSrc} /> : <div></div>}
                      {TitleimageList1[11] === true ? <img alt="like" src={likeSrc} /> : <div></div>}
                      {TitleimageList1[12] === true ? <img alt="dia" src={diaSrc} /> : <div></div>}
                      {TitleimageList1[13] === true ? <img alt="money" src={moneySrc} /> : <div></div>}
                      {TitleimageList1[14] === true ? <img alt="music" src={musicSrc} /> : <div></div>}
                      </Imgstickers1>
                   </Diaryimgsticker2Div>
                  
                  </DiarynameDiv>
                  </DiaryimgDiv>
              </DiaryDiv>
                )}
            {showDiary2 && (
              <DiaryDiv>
              <DiaryimgDiv bgColor={showTitleBackGroundcolorArr[1]}>
                  <DiarynameDiv>
                  <TextOutput>{showTitleNameArr[1]}</TextOutput>
                    <Diaryimgsticker2Div>
                      <Imgstickers1>
                      {TitleimageList2[0] === true ? <img alt="cloud" src={cloudSrc} /> : <div></div>}
                      {TitleimageList2[1] === true ? <img alt="heart" src={heartSrc} /> : <div></div>}
                      {TitleimageList2[2] === true ? <img alt="star" src={starSrc} /> : <div></div>}
                      {TitleimageList2[3] === true ? <img alt="tv" src={tvSrc} /> : <div></div>}
                      {TitleimageList2[4] === true ? <img alt="calender" src={calenderSrc} /> : <div></div>}
                      {TitleimageList2[5] === true ? <img alt="trash" src={trashSrc} /> : <div></div>}
                      {TitleimageList2[6] === true ? <img alt="lock" src={lockSrc} /> : <div></div>}
                      {TitleimageList2[7] === true ? <img alt="key" src={keySrc} /> : <div></div>}
                      {TitleimageList2[8] === true ? <img alt="search" src={searchSrc} /> : <div></div>}
                      {TitleimageList2[9] === true ? <img alt="setting" src={settingSrc} /> : <div></div>}
                      {TitleimageList2[10] === true ? <img alt="hat" src={hatSrc} /> : <div></div>}
                      {TitleimageList2[11] === true ? <img alt="like" src={likeSrc} /> : <div></div>}
                      {TitleimageList2[12] === true ? <img alt="dia" src={diaSrc} /> : <div></div>}
                      {TitleimageList2[13] === true ? <img alt="money" src={moneySrc} /> : <div></div>}
                      {TitleimageList2[14] === true ? <img alt="music" src={musicSrc} /> : <div></div>}
                      </Imgstickers1>
                    </Diaryimgsticker2Div>
                  </DiarynameDiv>
                </DiaryimgDiv>
              </DiaryDiv>
              )}
            {showDiary3 && (
              <DiaryDiv>
              <DiaryimgDiv bgColor={showTitleBackGroundcolorArr[2]}>
                  <DiarynameDiv>
                  <TextOutput>{showTitleNameArr[2]}</TextOutput>
                    <Diaryimgsticker2Div>
                      <Imgstickers1>
                      {TitleimageList3[0] === true ? <img alt="cloud" src={cloudSrc} /> : <div></div>}
                      {TitleimageList3[1] === true ? <img alt="heart" src={heartSrc} /> : <div></div>}
                      {TitleimageList3[2] === true ? <img alt="star" src={starSrc} /> : <div></div>}
                      {TitleimageList3[3] === true ? <img alt="tv" src={tvSrc} /> : <div></div>}
                      {TitleimageList3[4] === true ? <img alt="calender" src={calenderSrc} /> : <div></div>}
                      {TitleimageList3[5] === true ? <img alt="trash" src={trashSrc} /> : <div></div>}
                      {TitleimageList3[6] === true ? <img alt="lock" src={lockSrc} /> : <div></div>}
                      {TitleimageList3[7] === true ? <img alt="key" src={keySrc} /> : <div></div>}
                      {TitleimageList3[8] === true ? <img alt="search" src={searchSrc} /> : <div></div>}
                      {TitleimageList3[9] === true ? <img alt="setting" src={settingSrc} /> : <div></div>}
                      {TitleimageList3[10] === true ? <img alt="hat" src={hatSrc} /> : <div></div>}
                      {TitleimageList3[11] === true ? <img alt="like" src={likeSrc} /> : <div></div>}
                      {TitleimageList3[12] === true ? <img alt="dia" src={diaSrc} /> : <div></div>}
                      {TitleimageList3[13] === true ? <img alt="money" src={moneySrc} /> : <div></div>}
                      {TitleimageList3[14] === true ? <img alt="music" src={musicSrc} /> : <div></div>}
                      </Imgstickers1>
                    </Diaryimgsticker2Div>
                  </DiarynameDiv>
                </DiaryimgDiv>
              </DiaryDiv>
              )}
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
                  <DiarynameDiv>
                    <TextInput
                      type="text"
                      placeholder="다이어리 제목"
                      value={inputText}
                      onChange={handleInputChange}
                      maxLength={12}
                    />
                    </DiarynameDiv>
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
                  <EditText type="text" value={TextDate} onChange={handleChangeDate}></EditText>
                  <Dakkusetbutton2 onClick={()=>handleResetButtonClick() }>Reset</Dakkusetbutton2>
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
                  <Dakkusetbutton3 onClick={()=> BtnStoreDiary()} >Save</Dakkusetbutton3>
                </Dakkusetbuttondiv2>
              </Dakkuzonediv>
            </DiaryBox2>
          </DakkubigDiv>
        </form>
      </DakkuPage>
    )
  }
  
  export default Dakku;