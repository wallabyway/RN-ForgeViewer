import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import forge from './screens/forgeviewer';


const DrawItem = function(item) {
  return <Text>{item.key}{item.layer}</Text>
  };

const DrawMenu = (props) => (
      <View style={styles.container}>
        <Text>ID</Text><Text>LAYER</Text>

        <FlatList
          data={[
            {key: 'Issue:#1311', layer:'DIM'}, 
            {key: 'Issue:#1313', layer:'LOGO'}, 
            {key: 'Issue:#1314', layer:'CPG-E-CRITICAL'}, 
          ]}
          renderItem={({item}) =>  DrawItem(item)
        }
        />
      </View>
);

const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: forge,
    },
  },
  {
    contentComponent: DrawMenu,
    initialRouteName: 'Inbox',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);


const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerExample;