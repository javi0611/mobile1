import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image, Button,} from 'react-native';

export default function App() {
  
  
  const [name, setName] = useState('Username');
  return (

    


   <View style={styles.container}>
     <View>
     <Text style={{fontWeight: "bold",fontSize: 40}}> Voting Race</Text>


     </View>
      <View style={{width: 220, height:200, borderWidth: 5, borderColor: 'black', }} >
             <Image style= {{flex:1 , width: undefined, height: undefined}}
             source={require('./Assets/betting.jpg')}
            />
           
            </View>

      <Text>Enter your Username:</Text>
      <TextInput 
        placeholder='e.g. John Doe' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

     

      <Text style={styles}>Your Username is {name}</Text>
      
    <View>
      
      <Button
        title="Enter"
        onPress={() => Alert.alert('Your name is ', name)}
        color="#841584"
        //onPress={() =>
          //navigation.navigate('SecondPage', {
           // paramKey: name,
          //})
        
     />
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200,
  }
 
});
