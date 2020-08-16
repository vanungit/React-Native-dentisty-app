import React from 'react';
import styled from "styled-components/native/dist/styled-components.native.esm";

const Button = ({children,color}) => {
    return (
        <ButtonWrapper color={color}>
            <ButtonText>{children}</ButtonText>
        </ButtonWrapper>
    )
}
const ButtonText= styled.Text`
color:white
`
Button.defaultProps={
    color:'#2a86ff'
}
const ButtonWrapper = styled.TouchableOpacity`
display:flex
justify-content:center
align-items:center
border-radius:30px;
background:${props=>props.color};
height:45px
`
export default Button