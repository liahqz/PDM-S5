import Cat from "@/components/cats";
import Dog from "@/components/dogs"
import React from 'react';
import { ScrollView, Text } from 'react-native';

const App = () =>{

    return(
        <ScrollView style={{flex:1, backgroundColor: "#c9c3c3", alignContent: "center"}}>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Café dos gatos</Text>
            <Cat name = "Pitoco" idade = {2}></Cat>
            <Cat name = "Kiara" idade = {3}></Cat>
            <Cat name = "Sararuba" idade = {7}></Cat>
            <Cat name = "Laranjinho" idade = {1}></Cat>

            <Text style={{fontSize: 24, fontWeight: "bold"}}>Parque dos dogs</Text>
            <Dog name = "Bailey" idade = {4}></Dog>
            <Dog name = "Nalu" idade = {10}></Dog>
        </ScrollView>
    );
}
export default App