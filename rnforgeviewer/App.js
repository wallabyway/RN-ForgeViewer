import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import forge from './screens/forgeviewer';



const DrawMenu = (props) => (
      <View style={styles.container}>
        <Text style={styles.layer}>ID / LAYER</Text>

        <FlatList
          data={[
            {key: '1311', layer:'DIM'}, 
            {key: '1313', layer:'LOGO'}, 
            {key: '1314', layer:'CPG-E-CRITICAL'}, 
          ]}
          renderItem={({item}) => 
          <View style={styles.item}>
          <Switch></Switch>
          <Text style={styles.id}>{item.key}</Text>
          <Text style={styles.layer}>{item.layer}</Text>
          </View>
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex:1,
    flexDirection:'row',
  },
  id: {
    color:'#fff',
    width:40,
    fontSize:16,
  },
  layer: {
    color:'#fff',
    width:170,
    fontSize:16,
  }
});

export default DrawerExample;