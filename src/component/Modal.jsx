import React from "react";
import styled from "styled-components";
import COLORS from "../assets/styles/colors";

const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 10px;
gap: 15px;
position: absolute;
width: 600px;
height: 400px;
left: calc(50% - 600px/2);
top: 149px;
background: ${COLORS.Orange};
border-radius: 10px;
`

const TopBox= styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 10px 5px;
gap: 10px;
width: 100%;
`

const BtnBox= styled.div`
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
color: ${COLORS.BLACK};
`

const TxtBox =styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 0px 10px 10px;
gap: 10px;
width: 100%;
height: 250px;
background: ${COLORS.Light_Orange};
border-radius: 20px;
`

const InnerTxt = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
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
padding: 0px 10px;
gap: 10px;
width: 100%;
`

const Btn = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
border-radius: 10px;
`

const Modal = () => {
  return(
    <div>
      <TopBox>
        <BtnBox>20xx. xx. xx의 내가</BtnBox>
        <BtnBox>20xx. xx. xx의 나에게</BtnBox>
        <TxtBox>
          <InnerTxt>
          오늘은 해야할일을 많이 하지는 못했지만, 즐겁게 보냈으니 괜찮아! 
          </InnerTxt>
        </TxtBox>
        <BtnLayout>
          <Btn>Delete</Btn>
          <Btn>Save</Btn>
        </BtnLayout>
      </TopBox>
    </div>
  )
}

export default Modal;