import "./style.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addState } from "../../actions";
import PropTypes from "prop-types";

class State extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = { 
            state: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick(){
        this.props.addState(this.state.state);
        this.context.router.history.push("/zipcode");
    }

    render() {
        return (
            <div className="fullname-fullname-8">
                <div className="fullname-0" />
                <div className="fullname-1">
                    <div className="fullname-please_confirm_your_first_and_last_name_-5">
                        What state are you <br></br>located in?
              </div>
                </div>
                <div className="fullname-2" />
                <div className="fullname-3">
                    <input type="text" onChange={this.onChange} name="state" placeholder="Your State" className="fullname-fullname-7" />
                </div>
                <div className="fullname-4" />
                <div className="fullname-5">
                
                <div className="button-size">
                    <button className="button-style" onClick={this.handleClick}>Save</button>
                </div>


                </div>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { addState })(State);

//onClick={this.props.signIn}
//onClick={this.handleClick}
//onChange={this.onChange}