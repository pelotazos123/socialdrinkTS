import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/Button'; 
import { useNavigation } from '@react-navigation/native';

interface HomeProps {
  navigation: any
}

const Home: React.FC<HomeProps> = ({navigation}) =>  {

    return (
        <>
        
            <View style={styles.container}>
              <View style={styles.footerContainer}>
                {/* TODO */}
                  <Button label="Contador" action={() => navigation.navigate("Counter")}></Button>
                  <Button label="Prueba 2" action={() => navigation.navigate("Prueba")}></Button>
                  <Button label="Home" action={() => navigation.navigate("Home")}></Button>
              </View>
              <StatusBar style="auto" />
            </View>
        </>
    );
};

export default Home;

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
  
