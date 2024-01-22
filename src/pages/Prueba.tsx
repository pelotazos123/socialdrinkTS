import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const Prueba = () =>  {

    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <>
            <View style={styles.container}>
              <Button label={"Atras"} action={handleGoBack}/>
              <View style={styles.footerContainer}>
                <Text style={styles.text}>Hola</Text>
              </View>
              <StatusBar style="auto" />
            </View>
        </>
    );
};

export default Prueba;

const styles = StyleSheet.create({
    text: {
      color: '#fff',
    },
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
  });
  
