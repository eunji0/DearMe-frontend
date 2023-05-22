import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import leftSrc from "../../assets/svg/left.svg";
import rightSrc from "../../assets/svg/right.svg";
import backSrc from "../../assets/svg/back.svg";

const InBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 15px;
width: 100%;
border-left: 1px solid ${COLORS.Orange};
`

const All = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 20px;
position: relative;
background-color: ${COLORS.Orange};
width: 705px;
height: 100%;`


const TxtBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;`

const TxtDiv = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: ${COLORS.BLACK};`

const TodayBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 10px;
width: 100%;
background: ${COLORS.Light_Orange};
border-radius: 10px;`

const InTxt = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};`

const MidLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
width: 100%;`

const ButtonBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px;
gap: 10px;
`

const ContentBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 5px 10px;
gap: 10px;
width: 100%;
height: 35px;`

const SaveDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 0px;
gap: 10px;
width: 100%;
`

const SaveBtn = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background: ${COLORS.Light_Orange};
border-radius: 10px;
`

const SaveFont = styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
color: ${COLORS.BLACK};
`

const BackLayout = styled.div`
width:100%;
`


const DetailPage = ({ onClose }) => {
	return (
			<All>
				<img alt="back" src={backSrc} onClick={onClose}/>
				<InBox style={{paddingBottom: "50px"}}>
					<TxtBox>
						<TxtDiv>To me today</TxtDiv>
					</TxtBox>
					<TodayBox>
						<InTxt>
							오늘 해야 할 일은 일기쓰기랑 운동하기니까 꼭 하도록 하렴
						</InTxt>
					</TodayBox>
				</InBox>
				<InBox style={{height: "70%"}}>
					<MidLayout>
						<TxtBox>
							<TxtDiv>2023/04/24</TxtDiv>
						</TxtBox>
						<ButtonBox>
							<img alt="left" src={leftSrc} />
							<img alt="right" src={rightSrc} />
						</ButtonBox>
					</MidLayout>
					<TodayBox style={{minHeight: "70%"}}>
						<ContentBox></ContentBox>
						<ContentBox></ContentBox>
						<ContentBox></ContentBox>
					</TodayBox>
				</InBox>
				<InBox>
					<TxtBox>
						<TxtDiv>To tomorrow`s me</TxtDiv>
					</TxtBox>
					<TodayBox>
						<InTxt>
							오늘 해야 할 일은 일기쓰기랑 운동하기니까 꼭 하도록 하렴
						</InTxt>
					</TodayBox>
					<SaveDiv>
						<SaveBtn>
							<SaveFont>
								Save
							</SaveFont>
						</SaveBtn>
					</SaveDiv>
				</InBox>
			</All>
	);
}

export default DetailPage;
