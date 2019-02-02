import React, { Component } from "react";
import "./Title.css";
import {setData} from "./Auth/Push"
// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// var config = {
//   apiKey: "AIzaSyAjt_ff90T_Ch92pGg6g_sAtJkakCgI5WA",
//   authDomain: "nsuslideshare.firebaseapp.com",
//   projectId: "nsuslideshare"
// };

// firebase.initializeApp(config);
// var db = firebase.firestore();

// db.settings({
//   timestampsInSnapshots: true
// });

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      name: "",
      mail: "",
      phone: "",
      designation: "",
      department: "",
      isInput: false
    };
  }

  postData = {
  title: "haha",
  name: "hehe",
  mail: "hfghfdgh",
  phone: "0011",
  designation: "fghfg",
  department: "fhdfhdfhdfgh",
};

  editHandler() {
    this.setState({
      ...this.state,
      isInput: true
    });
  }

  titleInputChange(event) {
    this.setState({
      ...this.state,
      title: event.target.value
    });
  }
  nameInputChange(event) {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  }
  mailInputChange(event) {
    this.setState({
      ...this.state,
      mail: event.target.value
    });
  }
  phoneInputChange(event) {
    this.setState({
      ...this.state,
      phone: event.target.value
    });
  }
  designationInputChange(event) {
    this.setState({
      ...this.state,
      designation: event.target.value
    });
  }
  departmentInputChange(event) {
    this.setState({
      ...this.state,
      department: event.target.value
    });
  }

  keyPressHandler(event) {
    if (event.key === "Enter") {
      // this.getData();
      // this.setData();

      console.log(this.postData);
      setData(this.postData);
      this.setState({
        ...this.state,
        isInput: false
      });
    }
  }

  //   blurHandler(event) {
  //     this.setState({
  //       ...this.state,
  //       isInput: false
  //     });
  //   }

  render() {
    let output = null;

    if (this.state.isInput) {
      output = (
        <div className="Title">
          <input
            className="form-control"
            onChange={event => this.titleInputChange(event)}
            onKeyPress={event => this.keyPressHandler(event)}
            // onBlur={event => this.blurHandler(event)}
            type="text"
            placeholder="Title"
            value={this.state.title}
          />
          <input
            className="form-control"
            onChange={event => this.nameInputChange(event)}
            onKeyPress={event => this.keyPressHandler(event)}
            // onBlur={event => this.blurHandler(event)}
            type="text"
            placeholder="Name"
            value={this.state.name}
          />
          <input
            className="form-control"
            onChange={event => this.mailInputChange(event)}
            onKeyPress={event => this.keyPressHandler(event)}
            // onBlur={event => this.blurHandler(event)}
            type="text"
            placeholder="Email"
            value={this.state.mail}
          />
          <input
            className="form-control"
            onChange={event => this.phoneInputChange(event)}
            onKeyPress={event => this.keyPressHandler(event)}
            // onBlur={event => this.blurHandler(event)}
            type="text"
            placeholder="Phone"
            value={this.state.phone}
          />
          <input
            className="form-control"
            onChange={event => this.designationInputChange(event)}
            onKeyPress={event => this.keyPressHandler(event)}
            // onBlur={event => this.blurHandler(event)}
            type="text"
            placeholder="Designation"
            value={this.state.designation}
          />
          <input
            className="form-control"
            onChange={event => this.departmentInputChange(event)}
            onKeyPress={event => this.keyPressHandler(event)}
            // onBlur={event => this.blurHandler(event)}
            type="text"
            placeholder="Department"
            value={this.state.department}
          />
          <span
            onClick={() => this.postData()}
            className="ml-auto edit-icon"
          >
            <i className="fas fa-pencil-alt" />
          </span>
        </div>
      );
    } else {
      output = (
        <div className="d-flex Title">
          <p className="display-4"> {this.state.title} </p>
          <p className="display-4"> {this.state.name} </p>
          <p className="display-4"> {this.state.mail} </p>
          <p className="display-4"> {this.state.phone} </p>
          <p className="display-4"> {this.state.designation} </p>
          <p className="display-4"> {this.state.department} </p>
          <span
            onClick={() => this.editHandler()}
            className="ml-auto edit-icon"
          >
            <i className="fas fa-pencil-alt" />
          </span>
        </div>
      );
    }

    return <div>{output}</div>;
  }
}

export default Title;
