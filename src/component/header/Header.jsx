import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import logoSrc from "../../assets/svg/logo.svg";
import alarmSrc from "../../assets/svg/alarm.svg";
import myProfileSrc from "../../assets/svg/myProfile.svg";
import { Link } from "react-router-dom";
import { usernameState } from "../../atoms/atoms";
import { useRecoilValue } from "recoil";


const All = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
height: 80px;
background: ${COLORS.WHITE};
border-bottom: 1px solid ${COLORS.Orange};
`

const MiddleBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px 100px;
gap: 10px;
height: 43px;
background: ${COLORS.Light_Orange};
`

const MiddleTxt = styled.div`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: ${COLORS.Orange};`

const MyPageBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;
gap: 10px;
height: 50px;
`

const Header = () => {
	let year, month, day;
	const username = useRecoilValue(usernameState);
	console.log(username)
	return (
			<All>
				<Link to={`/timeschedule/${username}/${year}/${month}/${day}`}>
					<img alt="logo" src={logoSrc}/>
				</Link>
				<div>
					<MiddleBox>
						<MiddleTxt>은지's DearMe</MiddleTxt>
					</MiddleBox>
				</div>
				<div>
					<MyPageBox>
						<Link to="/notice">
							<img alt="alarm" src={alarmSrc}/>
						</Link>
						<Link to="/timecapsules/:id">
							<img alt="myProfile" src={myProfileSrc}/>
						</Link>
					</MyPageBox>
				</div>
			</All>
	)
} 

export default Header;