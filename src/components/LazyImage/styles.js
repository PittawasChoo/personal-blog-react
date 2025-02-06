import styled from "styled-components";

export const ScRoot = styled.div`
    position: relative;

    @keyframes gradient {
        0% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 0%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
`;

export const ScLoading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, #fcfcfc, #e9e9e9, #dedede, #e9e9e9, #fcfcfc);
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 300% 100%;
    animation: gradient 3s linear infinite;
`;

export const ScImage = styled.img`
    opacity: ${(props) => (props.$loaded ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    bottom: 0;
    object-fit: cover;
`;
