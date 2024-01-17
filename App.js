import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import analytics from '@react-native-firebase/analytics';

export default function App() {

  const logTestEvent=async () =>{
    await analytics().logEvent("test_dummy",{"action":true}).then((data)=>console.log(data))
    console.log("logged")
    console.log(analytics())
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title="Add To Basket"
        onPress={logTestEvent
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
