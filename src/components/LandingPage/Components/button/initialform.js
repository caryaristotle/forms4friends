import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        alert('The value is: ' + this.input.value);
        e.preventDefault();
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <p1>
            How can we help you?
            </p1>
            <fieldset>
                <div>
                {/* go to a database with all the forms  */}
                    <input type="submit" value="I know what form to fill" formaction="/elsewhere"></input>
                </div>
                <div>
                {/* // go to an html form where you can figure out how to help them */}
                    <input type="submit" value="I have no idea what form to fill" formaction="/elsewhere" /> 
                </div>
                <div>
                    {/* // form creation and database adding  */}
                    <input type="submit" value="Create a new form" formaction="/elsewhere"></input> 
                </div>
            </fieldset>
          </form>
        );
      }
}

export default Button;

