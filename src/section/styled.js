import { styled } from "styled-components";

export const StyledSection = styled.section`
    box-shadow: 0 0 5px #ddd;
    display: grid;
	grid-template-rows: auto auto;
    grid-gap: 2px;
`

export const Header = styled.header`
    background-color: white;
	padding: 15px;
	margin: 0;

    display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: auto;
	align-items: baseline;

    @media (max-width: 767px) {
		grid-template-columns: 100%;
		grid-template-rows: auto;
}
`