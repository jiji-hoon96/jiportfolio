import React from "react";
import { useState } from "react";
import styled,{keyframes} from "styled-components";
import { useSetRecoilState} from 'recoil';
import {isDarkAtom} from '../../atom';

const IconButton = styled.button`
	height: 48px;
	width: 48px;
	position: relative;
	padding: 0px;
	overflow: hidden;
	cursor: pointer;
	outline: none;
	border-radius: 4px;
	background-color: transparent;
	color: ${(props)=>props.theme.fontColor};
	border: none;
	&:hover {
		background: rgba(144, 144, 144, 0.1);
	}
`

const Icon = styled.div`
	position: absolute;
	top: 0px;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	animation-fill-mode: forwards;
	animation-duration: ${(props) => (props.isInitial ? 0 : 400)}ms;
	animation-name: ${(props) => (props.isCurrent ? riseIn : riseOut)};
`

const riseIn = keyframes`
    from {
    transform: translateY(100%);
  }
    to {
        transform: translateY(0%);
    }
`

const riseOut = keyframes`
    from {
        transform: translateY(0%);
    }
    to {
        transform: translateY(-100%);
    }
`

function NavToggle({children}){
	const modechange = useSetRecoilState(isDarkAtom);
    const icons = React.Children.toArray(children);
	const [current, setCurrent] = useState(0);

	function cycleState() {
		setCurrent(current === icons.length - 1 ? 0 : current + 1)
	}

	return (
		<IconButton onClick={cycleState}>
			{icons.map((icon, i) => {
				const isCurrent = i === current
				return (
					<Icon key={i}  isCurrent={isCurrent} onClick={()=>{modechange((prev)=>!prev)}}>
						{icon}
					</Icon>
				)
			})}
		</IconButton>
	)
}

export default NavToggle