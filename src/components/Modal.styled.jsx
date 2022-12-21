import styled from "styled-components";

export const Backdrop = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
top:0;
left:0;
background-color: #c1c1c1;
`;

export const ModalContainer = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const Button = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
`;