import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

export default function  Card(props) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        fadeIn()
    }, [])

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000
        }).start();
      };
    
    let cardStyles = styles.card

    if(props.styles){
        cardStyles = props.styles
    }

    return (
            <Animated.View style={[
            cardStyles,
            {
                opacity: fadeAnim 
            }
            ]}>
                <View style={styles.cardContent}>
                    {props.children}
                </View>
        
            </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
      }
})