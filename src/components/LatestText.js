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
            <div className="">
                <div className="">
                    <h1>Lastest text snippet info</h1>
                    <p>
                        Title: {title}
                    </p>
                    <p>
                        Version Number: {id}
                    </p>
                    <p>
                        Time Created: {time}
                    </p>
                    <p>
                        Text Link: <a href={link}>{link}</a>
                    </p>
                </div>
            </div>
        )
    }


}

export default LastestText