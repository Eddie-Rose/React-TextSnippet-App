import React, { Component } from 'react';
import "./AppBody.css";
import { connect } from "react-redux";
import { saveText, displayTitle, newText } from '../store/actions/file-actions'
import LatestText from '../components/LatestText';
import { View, Text, TextInput, StyleSheet } from 'react-native';


class AppBody extends Component {
    onTextSubmit = (event) => {
        event.preventDefault();
        let title = event.target.title.value;
        let input = event.target.input.value;

        var time = new Date();
        var date = time.getFullYear() + '-' + (time.getMonth()+1) + '-' + time.getDate() +' '+ time.getHours()+':'+ time.getMinutes()+':'+ time.getSeconds();

        if(this.props.dispR){
            let id = 0;
            this.props.onCreateText(id, input, title, date);
        }
        else{
            this.props.onSaveText(this.props.fileRidCount, input,title, date);
        }
        this.props.changeDisplayTitle(false);
    }

    onNewText = (event) => {
        event.preventDefault();
        document.getElementById("create-text-form").reset();

        this.props.changeDisplayTitle(true);
    }

    render() {
        return(
            <View>
                <View >
                    <View>
                        <Text style={styles.titleText} >Versioning text snippets</Text>
                    </View>
                    <View style={styles.topView}> 
                        <form id="create-text-form" onSubmit={this.onTextSubmit}>
                            <div className = "text-container">
                                <View style={styles.titleInputView}>
                                    <TextInput style={[styles.titleInput, { backgroundColor: this.props.dispR ? '#FFF' : '#C0C0C0' }]} id= "textTitle" name = "title" placeholder="Write a title" disabled={!this.props.dispR}></TextInput >
                                </View>
                                <View style={styles.contentInputView}>
                                    <TextInput style={styles.contentInput} className="input" name ="input" placeholder="Write something then save..." autoComplete="off"></TextInput>
                                </View>
                                <div className="buttonContainer">
                                    <button className="" type="submit">Save Text</button>
                                    <button type="button" onClick={this.onNewText.bind(this)}>Create New</button>
                                </div>
                            </div>
                        </form>
                    </View>

                </View>
                <div className="latest-text-container">
                    <LatestText object={this.props.fileR.history[Object.keys(this.props.fileR.history)[this.props.fileR.history.length - 1]]}></LatestText>
                </div> 
                <View>
                    {/* <Text style={styles.titleText} >History</Text> */}

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
      marginVertical: 20,
    },
    topView: {

      },
    titleText: {
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom:20,
      paddingTop: 5,
    },
    titleInput: {
        height: 40,
        width: 1100,
        paddingTop: 10,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        paddingBottom: 10,
        paddingLeft: 5,
        allowFontScaling: 'true',
    },
    contentInput: {
        height: 200,
        width: 1000,
        autoCompleteType: 'off',
        multiline: 'true',
        numberOfLines: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'gray',
        textAlignVertical: 'top',
        paddingLeft: 5,
    },
    titleInputView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingBottom: '50',

    },
    contentInputView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
    },

  });


const mapDispatchToProps = dispatch => ({
    onSaveText: (id, storedText,title, time) => dispatch(saveText(id, storedText, title, time)),
    onCreateText: (id, storedText, title, time) => dispatch(newText(id, storedText, title, time)),
    changeDisplayTitle: (displayBoolValue) => dispatch(displayTitle(displayBoolValue)),
});
  
const mapStateToProps = state => ({
    fileR: state.fileReducer,
    fileRidCount: state.fileReducer.idCount,
    dispR: state.displayReducer.showTitle
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AppBody)