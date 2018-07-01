// Import modules.
import styled, { css } from 'styled-components';

// Export container.
export const Container = styled.button`
	position: relative;
	width: 70px;
	height: 36px;
	margin-right: 40px;
	background-color: #c3c3fb;
	border: none;
	border-radius: 18px;
	outline: none;
	cursor: pointer;
	overflow: hidden;
`;

// Export round.
export const Round = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 40px;
	height: 100%;
	background-color: #2b2b9c;
	border-radius: 50%;
	transition: all 0.15s ease;

	${props => props.active && css`
		left: calc(100% - 40px);
	`}
`;
