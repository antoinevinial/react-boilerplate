// Import modules.
import styled from 'styled-components';
import * as Variables from '../variables';

export const Link = styled.a`
	-webkit-font-smoothing: antialiased;
	display: inline-flex;
	padding: 8px 20px;
	color: white;
	text-decoration: none;
	background-color: ${Variables.colorBrand};

	&:hover {
		background-color: ${Variables.colorBrandHover};
	}
`;