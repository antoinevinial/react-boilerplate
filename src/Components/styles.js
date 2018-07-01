// Import modules.
import styled from 'styled-components';
import * as Variables from './variables';

export const Application = styled.main`
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: 400;
`;

export const Section = styled.section`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	padding: 40px 80px;
	border-bottom: 1px solid ${Variables.colorBorder};
`;

export const Heading2 = styled.h2`
	width: 100%;
	margin-bottom: 40px;
	font-size: 22px;
	text-transform: uppercase;
`;

export const Heading3 = styled.h3`
	width: 100%;
	margin 0 0 20px;
	font-size: 17px;
	text-transform: uppercase;
`;