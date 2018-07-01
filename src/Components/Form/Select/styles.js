// Import modules.
import styled from 'styled-components';
import * as Variables from '../../variables';

// Export container.
export const Container = styled.div`
	position: relative;
	margin-right: 40px;

	&:after {
		content: "";
		position: absolute
		top: 50%;
		right: 15px;
		display: block;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 5px 4px 0 4px;
		border-color: black transparent transparent transparent;
		pointer-events: none;
		transform: translateY(-50%);
	}
`;

// Export round.
export const Select = styled.select`
	display: block;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	min-width: 130px;
	padding: 10px 20px;
	font-family: inherit;
	font-size: inherit;
	outline: none;
	resize: none;
	background-color: white;
	border: 1px solid ${Variables.colorBorder};
	border-radius: 0;

	&:focus,
	&:hover {
		border-color: #7d7d7d;
	}
`;