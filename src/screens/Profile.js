import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => onPress()} style={styles.button}>
          <Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007aff',
    width: '100%',
    padding: 10,
    marginVertical: 20,
    borderRadius: 5,
  },
});
