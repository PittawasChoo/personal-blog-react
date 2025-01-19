import styled from "styled-components";

export const ScOverlay = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
`;

export const ScBackground = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(/images/banner/banner_2.png);
    background-size: cover;
    background-position: top;
`;

export const ScBackground2 = styled.div`
    height: 100%;
    width: 50%;
    background-image: url(/images/samples/Circle.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    position: absolute;
    top: 0;
`;
