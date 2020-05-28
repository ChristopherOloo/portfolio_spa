import React, { Component } from "react";

import Widecard from '../components/Widecard';

class Education extends Component {

render() {
    return (

        <div className="condiv">

        <h1 className="subtoic">My Education</h1>

        <Widecard title ="Bsc. Computer Science" where="Egerton University" from="September 2017" to="Present" />

        <Widecard title="Secondary School Education" where="Kenyatta High School" from="2013" to="2016"/>

        </div>

    )
}

}

export default Education;