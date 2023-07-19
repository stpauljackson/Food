import { View, Text, TouchableNativeFeedback,StyleSheet,FlatList } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MenuCard from './MenuCard';

export default function Accordian(props) {
    const [expanded, setExpanded] = useState(true);
  return (
    <View>
      <TouchableNativeFeedback  onPress={()=>setExpanded(!expanded) }>
        <View style={styles.accordian}>
        <Text style={{marginHorizontal:7,color:'white',fontWeight:'bold'}}>{props.item.title}</Text>
        <Icon name={ expanded ? 'chevron-up' : 'chevron-down' }
              size={20} color="black" />
        </View>
        
      </TouchableNativeFeedback>
      { expanded && 
      <View style={{padding:15}}>
      <FlatList
        data={props.item.food}
        renderItem={MenuCard}
        keyExtractor={(item) => item.id}
        /> 
      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    accordian:{
      margin:3,
      flexDirection:'row',
      padding:7,
      backgroundColor:'royalblue',
      justifyContent:'space-between'
    }
  });
  