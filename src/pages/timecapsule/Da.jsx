import React from "react";
import styled from "styled-components";
import COLORS from "../../assets/styles/colors";

const All = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 70px 10px;
gap: 10px;

width: 1200px;
height: 667.74px;

background: ${COLORS.WHITE};`

const Layout = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 10px;
gap: 40px;

width: 1180px;
height: 527.74px;

background: #FFC876;
`


const Da = () => {
    return(
        <div>
            <All>
                <Layout>
                    
                </Layout>
            </All>
        </div>
    )
}

export default Da;