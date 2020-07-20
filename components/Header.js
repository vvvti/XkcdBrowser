import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = ({navigation}) => {
  const openMenuHandler = () => {
    navigation.openDrawer()
  }
  return (
    <View style={styles.header}>
      <Icon name='menu' size={28} style={styles.icon} color='white' onPress={openMenuHandler} />
      <View>
        <Text style={styles.headerText}>XKCD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B313B',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    letterSpacing: 1,
  },
  icon: {
    left: 1,
  },
});

export default Header;
