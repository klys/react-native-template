import { Button } from 'react-native-paper';


export default function Test() {
    return <>
         
        <Button 
            mode='contained-tonal'
            icon="account-hard-hat"
            onPress={() => alert("test")}
            >
                Test
        </Button>
    </>
}