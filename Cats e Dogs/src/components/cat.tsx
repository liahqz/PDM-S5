import React from "react";
import {Text, View} from "react-native";

const getfullname = (primeironome: String,
                    segundonome: String,
                    terceironome: String) => {
return primeironome + " " + segundonome + " " + terceironome
}

const Cat = (props: { name:string }) => {
    return(
        <View>
        {/* <Text> Olá, eu sou{getfullname ("gato", "laranjinho", "laranja")}</Text> */}

        <Text> Olá, eu sou {props.name}!</Text>
        </View>
    );
}

export default Cat;