import React from 'react';
import { TextInput } from 'react-native-paper';

export default function AddPeople() {
    return(<>
        <TextInput
            mode="outlined"
            label="Outlined input"
            placeholder="Type something"
            right={<TextInput.Affix text="/100" />}
        />
    </>)
}