import { SectionList, FlatList, ScrollView, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const App = () => {

  const [Items, setItems] = useState([
    { name: 'Item 1 '},
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 10' },
    { name: 'Item 11' },
    { name: 'Item 12' },
    { name: 'Item 13' },
    { name: 'Item 14' },
    { name: 'Item 15' },
    { name: 'Item 16' },
    { name: 'Item 17' },
    { name: 'Item 18' },
    { name: 'Item 19' },
    { name: 'Item 20' },
  ]);
  const DATA = [
    {
      title: 'Title 1',
      data: [ 'Item 1-1','Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: [ 'Item 2-1','Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: [ 'Item 3-1','Item 3-2', 'Item 3-3'],
    },
    {
      title: 'Title 4',
      data: [ 'Item 4-1','Item 4-2', 'Item 4-3'],
    },
    {
      title: 'Title 5',
      data: [ 'Item 5-1','Item 5-2', 'Item 5-3'],
    },
    {
      title: 'Title 6',
      data: [ 'Item 6-1','Item 6-2', 'Item 6-3'],
    },
    {
      title: 'Title 7',
      data: [ 'Item 7-1','Item 7-2', 'Item 7-3'],
    },
  ]

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, { key: 69, item: 'Item 69'}]);
    setRefreshing(false);
  }
  
  
  return (
 <SectionList
   keyExtractor={(item, index) => index.toString()}
    sections={DATA}
    renderItem={({item}) => (
     <Text style={styles.text}>{item}
      </Text>
     )}
    renderSectionHeader={({section}) => (
        <View style={styles.item}>
        <Text style={styles.text}>{section.title}
        </Text>
        </View>
    )}
    
    />
    // <View style={styles.body}>
    //   <ScrollView>
    //  {
    //   Items.map((object) => {
    //     return (
    // <View style={styles.item}
    //  key = {object.key}>
    //   <Text style={styles.text}>{object.item}
    //   </Text>
    // </View>
    //     )
    //   })
    //  }
    //  </ScrollView>
    //  </View>
  
);
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
   
  },
  item: {
    margin: 10,
    backgroundColor: '#e557f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    margin: 10,
    fontStyle: 'italic',
  },
});
export default App;

