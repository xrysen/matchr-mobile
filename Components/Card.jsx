import React from 'react';
import { View, Text, Image, ImageSourcePropType, Dimensions, StyleSheet } from 'react-native';
import { shape, string, number } from 'prop-types';


const { height } = Dimensions.get('window');

const Card = (props) => {
  return (
    <View 
      activeOpacity={1}
      style={styles.card}
      >
     <Image
        style={styles.image}
        source={{uri: `${props.photo}`}}
        resizeMode="cover" />
      <View style={styles.photoDescriptionContainer}> 
        <Text style={styles.text}>
          {`${props.name}  ${props.rating}`}
          {`\n`}
          {`${props.phone}`}
          {`\n`}
          {`${props.address}`}
          {`\n`}
          {`${props.price}`}
        </Text>
        
      </View>   
    </View>
  )
}

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    price: string
  }).isRequired,
}

const styles = StyleSheet.create({
  card: {
    height: height - 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 10,
  }
})

export default Card;