import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const Counter = () => {

    const [count, setCount] = useState<number>( () => {
      if (Platform.OS === 'web') {
        const valorAlmacenado = localStorage.getItem('counter');
    
        return valorAlmacenado ? JSON.parse(valorAlmacenado) : 0;
      } else {
        return 0;
      }
    });

    const [name, setName] = useState<string>();
    const [text, setText] = useState<string>();
  
    useEffect(() => {
      if (Platform.OS === 'web'){
        localStorage.setItem('counter', JSON.stringify(count));
      } else if (Platform.OS === 'android'){
        storeData(count!);
      }
    }, [count]);

    useEffect(() => {
      if (Platform.OS === 'web')
        getData();
    }, []);

    const handleNameInput = (text: string) => {
      setText(text);
    }

    const saveNameInput = () => {
      setName(text);
    }

    const storeData = async (value: number) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('counter', jsonValue);
      } catch (e) {
        // saving error
      }
    };

    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('counter');
        setCount(jsonValue != null ? JSON.parse(jsonValue) : 0);
      } catch (e) {
        // error reading value
      }
    };
  
    const addOneBeer = () => {
      setCount(count!+1);
      console.log("hola");
    }
  
    const removeOneBeer = () => {
      setCount(count! > 0 ? count! - 1 : count);
      console.log("adios");
    }

  
    return (
      <>
        <View>
          <TextInput  
            style={styles.input}
            onChangeText={handleNameInput}
            value={text}
          >
          </TextInput>
          <Button label='Editar nombre contador' action={saveNameInput}></Button>
        </View>
        <View style={styles.container}>
          <Text style={styles.container}>{name}</Text>
          <Text style={styles.text}>{count}</Text>
          <Button label={"+"} action={addOneBeer} />
    
          <Button label={"-"} action={removeOneBeer} />
    
          <StatusBar style="auto" />
        </View>
      </> 
    );
  }

  export default Counter;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 300,
    },
    input: {
      height: 70, 
      width: 200,
      marginLeft: 100, 
      borderColor: 'white', 
      borderWidth: 1,
    },
  });
  