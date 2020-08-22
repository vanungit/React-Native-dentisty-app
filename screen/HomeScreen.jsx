import React , {useState,useEffect} from 'react';
import {SectionList} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Appointment} from '../components/Appointment'
import styled from "styled-components/native";
import axios from "axios";
import {SectionTitle} from "../components/SectionTitle";

 const HomeScreen =({navigation})=>{
     const [data,SetData] = useState(null)

     useEffect(() => {
        axios.get("https://trycode.pw/c/KDNLH.json").then(({data})=>{
                SetData(data)

         })
     }, []);
     
     return (

         <Container>
             {data &&(
                 <SectionList  //uxarkumenq Appointment Datan SectionList i ognutyamb
                     sections={data}
                     renderItem={({item}) =>  <Appointment navigate={navigation.navigate} item={item}/>}
                     keyExtractor={(item, index) => index}
                     renderSectionHeader={({ section: { title } }) => (
                         <SectionTitle >{title}</SectionTitle>
                     )}
                 />)}
                 <PlusButton >
                 <AntDesign name="plus" size={25} color="white" />
                 </PlusButton>
         </Container>
     );
 }

HomeScreen.navigationOptions = {
    title: 'Карта пациента!',
    headerTintColor: '#2A86FF'
}
const Container = styled.View`
            flex:1;
            margin-top:50px;
            `;
const PlusButton = styled.TouchableOpacity`
align-items:center;
justify-content:center;
    border-radius:60px;
    width:64px;
    height:64px;
    background:#2a86ff;
    position:absolute;
    right:25px;
    bottom:30px;
    shadow-opacity: 0.48;
    shadow-radius: 11.95;
    shadow-color: #2a86ff;
    elevation:5;
`;
export default HomeScreen;
