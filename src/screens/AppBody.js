import React, { Component } from 'react';
import "./AppBody.css";
import { connect } from "react-redux";
import { saveText, displayTitle, newText } from '../store/actions/file-actions'
import LatestText from '../components/LatestText';


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
            <div className = "container">
                <div className="top">
                    <div className="banner">
                        <h1>Versioning text snippets</h1>
                    </div>
                    <form id="create-text-form" onSubmit={this.onTextSubmit}>
                        <div className = "text-container">
                            <div>
                                <input id= "textTitle" name = "title" placeholder="Write a title" autoComplete="off" disabled={!this.props.dispR}></input>
                            </div>
                            <div>
                                <textarea className="input" name ="input" placeholder="Write something then save..." autoComplete="off"></textarea>
                            </div>
                            <button className="" type="submit">Save Text</button>
                            <button type="button" onClick={this.onNewText.bind(this)}>Create New</button>
                        </div>
                    </form>
                    

                </div>
                <div className="latest-text-container">
                    <LatestText object={this.props.fileR.history[Object.keys(this.props.fileR.history)[this.props.fileR.history.length - 1]]}></LatestText>
                </div> 
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    onSaveText: (id, storedText,title, time) => dispatch(saveText(id, storedText, title, time)),
    onCreateText: (id, storedText, title, time) => dispatch(newText(id, storedText, title, time)),
    changeDisplayTitle: (displayBoolValue) => dispatch(displayTitle(displayBoolValue)),
})
  
const mapStateToProps = state => ({
    fileR: state.fileReducer,
    fileRidCount: state.fileReducer.idCount,
    dispR: state.displayReducer.showTitle
})
  
export default connect(mapStateToProps, mapDispatchToProps)(AppBody)