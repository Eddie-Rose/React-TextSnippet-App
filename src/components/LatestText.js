import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { Component } from 'react'

class LastestText extends Component {

    render() {
        let lastObject = this.props.object;
        let title = (lastObject == null)? '' : lastObject.titleName;
        let id = lastObject == null ? '' : lastObject.id;
        let time = lastObject == null ? '' : lastObject.time;
        let link = lastObject == null ? '' : lastObject.filename;
        console.log(lastObject);    

        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Lastest text snippet info</Text>
                <Text style={styles.bodyText}> Title: {title} </Text>
                <Text style={styles.bodyText}> Version Number: {id} </Text>
                <Text style={styles.bodyText}> Time Created: {time} </Text>
                <Text style={styles.bodyText}> Text Link: <a href={link}>{link}</a> </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',   
      },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom:20,
        paddingTop: 5,
      },
    bodyText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: 5,
        paddingLeft: 400,
      },
    
});

export default LastestText