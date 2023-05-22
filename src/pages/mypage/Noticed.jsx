import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";
import { Link } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 10px;
  gap: 10px;
  width: 100%;
`;

const TitleLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 100px;
  gap: 10px;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.Orange};
`;

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
`;

const BoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  border-bottom: 2px solid ${COLORS.GRAY};
`;

const InnerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px 5px 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color || `${COLORS.GRAY}`};
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${COLORS.BLACK};
`;

const Noticed = () => {
  return (
    <Layout>
      <TitleLayout>
        알림
      </TitleLayout>
      <ListLayout>
        {/* 서버와 연결시 map함수로 변경 */}
        <BoxLayout>
          <InnerBox color={COLORS.Orange}>
            oo님에게 친구 신청이 왔어요!
            <DateBox>
              2023.3.23 18:43
            </DateBox>
          </InnerBox>
        </BoxLayout>
        <BoxLayout>
          <InnerBox>
            oo님에게 친구 신청이 왔어요!
            <DateBox>
              2023.3.23 18:43
            </DateBox>
          </InnerBox>
        </BoxLayout>
        <BoxLayout>
          <InnerBox>
            oo님에게 친구 신청이 왔어요!
            <DateBox>
              2023.3.23 18:43
            </DateBox>
          </InnerBox>
        </BoxLayout>
        <BoxLayout>
          <InnerBox>
            oo님에게 친구 신청이 왔어요!
            <DateBox>
              2023.3.23 18:43
            </DateBox>
          </InnerBox>
        </BoxLayout><BoxLayout>
          <InnerBox>
            oo님에게 친구 신청이 왔어요!
            <DateBox>
              2023.3.23 18:43
            </DateBox>
          </InnerBox>
        </BoxLayout>
      </ListLayout>
 
    </Layout>
  )
}

export default Noticed;