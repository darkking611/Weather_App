import React from "react";
import './style.scss';

export default class BottomComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return <div className="bottom-container"></div>;
    }
}