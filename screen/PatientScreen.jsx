import React from 'react';
import styled from "styled-components/native";
import GrayText from "../components/GreyTxt"
import Button from "../components/Bootton";
import { Foundation } from '@expo/vector-icons';
import {View} from "react-native";


const PatientScreen =({navigation})=> <View style={{flex:1}}>
    <PatientDetails>
    <PatientFullName>{navigation.getParam('user').fullName}</PatientFullName>
    <GrayText>{navigation.getParam('user').phone}</GrayText>
    <PatientButton>
        <FormulaButtonView>
            <Button>Форма зубов</Button>
        </FormulaButtonView>
        <PhoneButtonView>
            <Button color="#84D269"><Foundation name="telephone" size={22} color="white" /></Button>
        </PhoneButtonView>
    </PatientButton>
    </PatientDetails>
    <PatientApointment></PatientApointment>
</View>
const Container = styled.View`
padding:25px
flex:1
`
const PatientDetails = styled(Container)`
flex:0.3
`
const PatientApointment = styled.View`
flex:1
background:#f8fAfd
`
const PatientButton = styled.View`
margin-top:20px
display:flex
flex-direction:row
margin-top:20px
`
const FormulaButtonView= styled.View`
flex:1
`
const PhoneButtonView= styled.View`
flex:0.2
margin-left:15px
width:45px
`
PatientScreen.navigationOptions = {
        title: 'Карта пациента!',
        headerTintColor: '#2A86FF'
    }
const PatientFullName = styled.Text`
font-weight:800
font-size:24px
line-height:30px
margin-bottom:10px

`



export default PatientScreen;
