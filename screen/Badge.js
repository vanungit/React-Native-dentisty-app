import React from 'react'
import styled from "styled-components/native";

const GetColor =({active,color})=>{
    const colors = {
        green:{
            background:'rgba(132,210,135,0.25)',
            color:'#61bb42'
        },
        active:{
            background:'#2A86FF',
            color:'white'
        },
        default:{
            background:'#E9F5FF',
            color:'#4294FF'
        }
    }
    let result;
    if (active){
        result = colors.active
    }else if(color){
        result = colors[color]
    }else{
        result = colors.default
    }
    return result
}
export default styled.Text`
            background:${props => GetColor(props).background}
            color:${props => GetColor(props).color}
            font-weight:600;
            border-radius:18px;
            font-size:14px;
            width:${props => (props.short? "60px": "130px")};
            height:32px;
            text-align:center;
            line-height:30px;
            margin:5px;

            `;