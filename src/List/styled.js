import { styled, css } from "styled-components";

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-bottom: 1px #ddd solid;
  margin-bottom: 10px;
  padding: 5px;
  word-break: break-word;
  align-items: center;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Button = styled.button`
    border: none;
	cursor: pointer;
	color: white;
	margin-right: 5px;
	width: 30px;
	height: 30px;
	padding: 1px;
	transition: 0.4s;

    ${({toggleDone}) => toggleDone && css`
        background-color: hsl(120, 100%, 25%);

        &:hover{
            background-color: hsl(120, 100%, 35%);
        }

        &:active{
            background-color: hsl(120, 100%, 40%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: hsl(0, 100%, 50%);

        &:hover{
            background-color: hsl(0, 100%, 60%);
        }

        &:active{
            background-color: hsl(0, 100%, 65%);
        }
    `}
`

export const Content = styled.span`

    ${({done}) => done && css`
    text-decoration: line-through;
	text-align: justify;
    `}
`
