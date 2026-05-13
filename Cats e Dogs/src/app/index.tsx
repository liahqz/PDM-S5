import Cat from "@/components/cat";
import Dog from "@/components/dog"
import React from 'react';
import { ScrollView, Text } from 'react-native';
const App = () =>{

    return(
        <ScrollView style={{flex:1,
                            backgroundColor: "#c9c3c3",
                            alignContent: "center"}}>
            <Text style={{fontSize: 24, fontWeight: "bold"}}>Café dos gatos</Text>
            <Cat name = "Pitoco"></Cat>
            <Cat name = "Kiara"></Cat>
            <Cat name = "Sararuba"></Cat>
            <Cat name = "Laranjinho"></Cat>

            <Text style={{fontSize: 24, fontWeight: "bold"}}>Parque dos dogs</Text>
            <Dog name = "Bailey"></Dog>
            <Dog name = "Nalu"></Dog>
        </ScrollView>
    );
}
export default App