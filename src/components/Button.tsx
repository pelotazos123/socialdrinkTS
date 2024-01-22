import { StyleSheet, View, Pressable, Text } from 'react-native';


interface ButtonProps {
  label: string;
  action: () => void; 
}
const Button: React.FC<ButtonProps> = ({ label, action }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={action}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}
export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      backgroundColor: '#000',
      borderColor: '#26d66b',
      borderRadius: 200,
      borderStyle: 'solid',
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });
  