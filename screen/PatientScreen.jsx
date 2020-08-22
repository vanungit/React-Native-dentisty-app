import React from 'react';
import styled from "styled-components/native";
import GrayText from "../components/GreyTxt"
import Button from "../components/Bootton";
import {Foundation, MaterialCommunityIcons,Feather} from '@expo/vector-icons';
import {View,Text} from "react-native";
import Badge from "./Badge"


const PatientScreen = ({navigation}) => <View style={{flex: 1}}>

    <PatientDetails>
      <PatientFullName>{navigation.getParam('user').fullName}</PatientFullName>
        <GrayText>{navigation.getParam('user').phone}</GrayText>
        <PatientButton>
            <FormulaButtonView>
                <Button>Форма зубов</Button>
            </FormulaButtonView>
            <PhoneButtonView>
                <Button color="#84D269"><Foundation name="telephone" size={22} color="white"/></Button>
            </PhoneButtonView>
        </PatientButton>
    </PatientDetails>

    <PatientAppointment>
        <Container>
            <AppointmentCard>
                <MoreButton>
                    <Feather name="more-vertical" size={24} color="#A3A3A3" />
                </MoreButton>
                <AppointmentCardRow>
                    <MaterialCommunityIcons name="medical-bag" size={24} color="#A3A3A3"/>
                    <AppointmentCardLabel>
                        Зуб <Text style={{fontWeight:'600'}}>12</Text>
                    </AppointmentCardLabel>
                </AppointmentCardRow>
                <AppointmentCardRow>
                    <Feather name="clipboard" size={24} color="black" />
                    <AppointmentCardLabel>
                        Диагноз : <Text style={{fontWeight:'600'}}>Полип</Text>
                    </AppointmentCardLabel>
                </AppointmentCardRow>
                <AppointmentCardRow >
                    <Badge short={false} active>10.12.2020 - 15:40</Badge>
                    <Badge short={true} color="green">25 $</Badge>
                </AppointmentCardRow>
            </AppointmentCard>
        </Container>

    </PatientAppointment>

</View>

const AppointmentCardRow = styled.View`
flex-direction:row;
align-items:center;
 margin-top:6px;
    margin-bottom:6px;
`
const AppointmentCardLabel = styled.Text`
font-size:16px;
margin-left:7px;
`
const MoreButton = styled.TouchableOpacity`
position:absolute;
right:25px;
top:18px;
width:32px;
justify-content:center;
align-items:center;
display:flex;
`
const AppointmentCard = styled.View`
 shadow-opacity: 0.4;
    shadow-radius: 3.5;
    shadow-color: gray;
    elevation:4
    padding:-25px
    border-radius:10px
   
`
const Container = styled.View`
padding:25px
flex:1
`
const PatientDetails = styled(Container)`
flex:0.3
`
const PatientAppointment = styled.View`
flex:1
background:#f8fAfd
`
const PatientButton = styled.View`
margin-top:20px
display:flex
flex-direction:row
margin-top:20px
`
const FormulaButtonView = styled.View`
flex:1
`
const PhoneButtonView = styled.View`
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
