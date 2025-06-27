import React from 'react';
import { Button, TextInput } from 'react-native-paper';

export default function AddPeople() {
    return(<>
        <TextInput
            mode="outlined"
            label="Security Code"
            placeholder="Type something"
         
        />
        <TextInput
            mode="outlined"
            label="Employee ID"
            placeholder="Type something"
         
        />
        <TextInput
            mode="outlined"
            label="Name"
            placeholder="Type something"
         
        />
        <TextInput
            mode="outlined"
            label="Last Name"
            placeholder="Type something"
         
        />
        <TextInput
            mode="outlined"
            label="Email"
            placeholder="Type something"
         
        />
        <TextInput
            mode="outlined"
            label="Phone Number"
            placeholder="Type something"
         
        />
        <TextInput
            mode="outlined"
            label="Department"
            placeholder="Type something"
         
        />

        <Button 
            icon="check-bold" 
            mode="contained-tonal" 
            onPress={() => console.log('Pressed')}
            buttonColor=""
        >
            Save
        </Button>
        <Button 
            icon="close-thick" 
            mode="contained-tonal" 
            onPress={() => console.log('Pressed')}
            buttonColor=""
        >
            Cancel
        </Button>
    </>)
}