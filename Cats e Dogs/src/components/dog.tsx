import React from "react";
import {Text, View} from "react-native";

const getfullname = (primeironome: String,
                    segundonome: String,
                    terceironome: String) => {
return primeironome + " " + segundonome + " " + terceironome
}

const Dog = (props: { name:string }) => {
    return(
        <View>
        {/* <Text> Olá, eu sou{getfullname ("cachorro", "laranjinho", "laranja")}</Text> */}

        <Text> Olá, eu sou {props.name}!</Text>
        </View>
    );
}

export default Dog;