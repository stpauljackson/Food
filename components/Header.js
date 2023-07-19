import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating';
import Food from '../food.jpg';

export default function Header() {
  const [follow, setfollow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <View>
            <Image style={styles.image} source={Food} />
        </View>
        <View style={{marginHorizontal:10}}>
        <Text style={styles.headingText} >Nice Restaurant</Text>
        <Text style={styles.headingDetail} >A very nice Restaurant for fine dinning.</Text>
        </View>
      </View>

      <View style={styles.ratingContainer}>
        <View style={styles.ratingSubContainer}>
          <Text style={{marginHorizontal:10,fontSize:17}}>Rating</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={4.5}
            fullStarColor={'gold'}
            emptyStarColor={'gray'}
            starSize={25}
          />
        </View>
        <TouchableOpacity onPress={()=>setfollow(!follow)}>
          <View style={styles.button}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{follow?'Following':'Follow'}</Text>
          </View>
        </TouchableOpacity>
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
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:10,
    padding:10
  },
  ratingSubContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignContent:'center'
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
