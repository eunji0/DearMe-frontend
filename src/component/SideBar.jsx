import React from "react";
import styled from "styled-components";
import COLORS from "../assets/styles/colors";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 30px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
width: 200px;
`

const Box = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
align-items: center;
text-align: center;
color: ${COLORS.GRAY};
`

const MenuBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 10px;
gap: 10px;
font-style: normal;
font-weight: ${(props) => props.fontWeight || 400};
font-size: 16px;
line-height: 19px;
color: ${(props) => props.color || `${COLORS.BLACK}`};
`

const LinkStyle = styled(Link)`
text-decoration: none;
`

const SideBar = () => {
  const categoryTxt = [
    {
      id: 1,
      txt: "알림",
      to: 'notice'
    },
    {
      id: 2,
      txt: "프로필 수정하기",
      to: 'profile'
    },
    {
      id: 3,
      txt: "친구 관리",
      to: 'management'
    }
  ];

  const [selectedButton, setSelectedButton] = useState(
    parseInt(localStorage.getItem('selectedButton')) || null
  );
  const navigate = useNavigate();

  const clickBtn = (buttonId) => {
    setSelectedButton(buttonId);

    localStorage.setItem('selectedButton', buttonId);

  }

  useEffect(() => {
    const buttonId = categoryTxt.findIndex((item) => item.to === location.pathname.substring(1));
    setSelectedButton(buttonId + 1);
  }, [location.pathname, categoryTxt]);


  return (
    <div>
      <Layout>
        <Box>
          notice
        </Box>
        <LinkStyle className="btn" to={categoryTxt[0].to}>
          <MenuBox
           key={categoryTxt[0].id}
           onClick={() => clickBtn(categoryTxt[0].id)}
           className={selectedButton === categoryTxt[0].id ? 'active' : ''}
           color={selectedButton === categoryTxt[0].id ? `${COLORS.Orange}` : `${COLORS.BLACK}`}
           fontWeight={selectedButton === categoryTxt[0].id ? 600 : 400}
          >
            {categoryTxt[0].txt}
          </MenuBox>
        </LinkStyle>

        <Box>
          my
        </Box>
        
        <LinkStyle className="btn" to={categoryTxt[1].to}>
          <MenuBox
           key={categoryTxt[1].id}
           onClick={() => clickBtn(categoryTxt[1].id)}
           className={selectedButton === categoryTxt[1].id ? 'active' : ''}
           color={selectedButton === categoryTxt[1].id ? `${COLORS.Orange}` : `${COLORS.BLACK}`}
           fontWeight={selectedButton === categoryTxt[1].id ? 600 : 400}
          >
            {categoryTxt[1].txt}
          </MenuBox>
        </LinkStyle>

        <LinkStyle className="btn" to={categoryTxt[2].to}>
          <MenuBox
           key={categoryTxt[2].id}
           onClick={() => clickBtn(categoryTxt[2].id)}
           className={selectedButton === categoryTxt[2].id ? 'active' : ''}
           color={selectedButton === categoryTxt[2].id ? `${COLORS.Orange}` : `${COLORS.BLACK}`}
           fontWeight={selectedButton === categoryTxt[2].id ? 600 : 400}
          >
            {categoryTxt[2].txt}
          </MenuBox>
        </LinkStyle>
        
        <Box>
          settings
        </Box>
        <MenuBox>
          공지사항
        </MenuBox>
        <MenuBox>
          이용약관
        </MenuBox>
        <MenuBox>
          이용가이드
        </MenuBox>
      </Layout>
    </div>
  )
}

export default SideBar;
