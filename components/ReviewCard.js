import {View, Text, StyleSheet,Image} from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating';

import Food from '../food.jpg';

export default function ReviewCard(props) {
  return (
    <View style={styles.container}>
    <View style={styles.headingContainer}>
      <View>
        <Image style={styles.image} source={Food} />
      </View>
      <View style={{marginHorizontal: 10}}>

        <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between'}}>
        <Text style={styles.headingText}>{props.item.title}</Text>
        <View style={{padding:10}}>
        <StarRating
            disabled={true}
            maxStars={5}
            rating={props.item.rate}
            fullStarColor={'gold'}
            emptyStarColor={'gray'}
            starSize={15}
          />
          </View>
        </View>
        <Text style={styles.headingDetail}>
          {props.item.detail}
        </Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        margin:15,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:2,
        shadowOpacity:1
    },
    headingContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        margin:10
    },
    image:{
        height:50,
        width:50,
        borderRadius:50,
        marginHorizontal:10
    },
    headingText:{
        fontSize:25,
        fontWeight:'bold'
    },
    headingDetail:{
        
    },
});

