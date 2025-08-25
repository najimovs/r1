import { styled } from "styled-components"

const Main = styled.main`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${ props => props.$jcc ? "center": "flex-start" };
`

export function Page( { children, ...props } ) {

	return <Main { ...props }>{ children }</Main>
}
