import React, { useState } from "react";
import {Text, View, TextInput, Button} from "react-native";

// const getfullname = (primeironome: String,
//                     segundonome: String,
//                     terceironome: String) => {
// return primeironome + " " + segundonome + " " + terceironome
// }

const Cat = (propsCats: { name:string, idade: number }) => {
    const [isHungry, setisHungry] = useState(true)
    return(
        <View>
            <View>
            {/* <Text> Olá, eu sou{getfullname ("gato", "laranjinho", "laranja")}</Text> */}
                <Text> 
                    Olá, eu sou {propsCats.name}! Eu tenho {propsCats.idade} anos!
                </Text>
            </View>

            <Button onPress={() => {setisHungry(false);}}
            disabled={isHungry} title = {isHungry ? "Quero comer papito" : "Gradicida"}></Button>
            </View>
    );
}

export default Cat;