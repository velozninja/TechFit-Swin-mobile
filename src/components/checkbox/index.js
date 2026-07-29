import Checkbox from "expo-checkbox";
import { useState } from "react";
import Styles from "./styles";

export default function CheckBox(props) {
    return(
        <Checkbox
            style={Styles.box}
            value={props.isinfo}
            onValueChange={props.Setinfo}
            color={props.isinfo ? '#4630EB' : undefined}
        />
    )
}