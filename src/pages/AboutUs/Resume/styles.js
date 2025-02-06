import styled from "styled-components";
import { Link } from "react-router-dom";

export const ScRoot = styled.div`
    display: flex;
    justify-content: center;
`;

export const ScBody = styled.div`
    width: 1300px;
    padding: 80px 100px;
    font-family: oxanium;
`;

export const ScHeader = styled.div`
    width: 100%;
    margin-top: 80px;
    font-size: 110px;
    font-family: space-explorer;
    color: #000000de;
    font-weight: 800;
    margin-bottom: 80px;
    text-align: center;
`;

export const ScContentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ScLeftSectionContainer = styled.div`
    width: 300px;
    flex-shrink: 0;
    margin-right: 80px;
`;

export const ScTopSectionContainer = styled.div`
    height: 320px;
`;

export const ScProfileImg = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-image: url(/images/banner/profile.jpeg);
    background-size: cover;
    background-position: center;
`;

export const ScContactDetail = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 20px;
`;

export const ScTopic = styled.div`
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 4px;
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const ScListItem = styled.li`
    margin-bottom: 15px;
`;

export const ScName = styled.div`
    font-size: 120px;
    line-height: 120px;
`;

export const ScCareer = styled.div`
    font-size: 26px;
    letter-spacing: 5px;
`;

export const ScDescription = styled.div`
    font-size: 18px;
    text-align: justify;
`;

export const ScJourneyHeaderContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`;

export const ScJourneyHeader = styled.div`
    font-weight: 800;
    font-size: 18px;
`;

export const ScJourneyPlace = styled.div`
    font-weight: 800;
`;

export const ScJourneyPeriod = styled.div`
    width: 180px;
    text-align: end;
    font-weight: 800;
`;

export const ScTextLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
