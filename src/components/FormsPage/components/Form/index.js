import React, { Component } from "react";
import { Div, Button, Fadio } from "./styles";
import questions from "./questions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  render() {
    const params = new URLSearchParams(document.location.search);

    const val = params.get("name");

    const show = {};

    for (
      var i = 0;
      i < this.state.index && i < questions[val].questions.length;
      i++
    ) {
      show[questions[val].questions[i].key] = true;
    }

    const form_items = questions[val].questions.map(question => {
      if (question.type === "bool") {
        return show[question.key] ? (
          <Div flexDirection="column" key={question.key}>
            <p>{question.text}</p>
            <Div flexDirection="row">
              <Fadio
                type="radio"
                name={question.key}
                value={true}
                onClick={() =>
                  this.setState({
                    index: this.state.index + 1
                  })
                }
              />{" "}
              Yes <br />
              <Fadio
                type="radio"
                name={question.key}
                value={false}
                onClick={() =>
                  this.setState({
                    index: this.state.index + 1
                  })
                }
              />{" "}
              No <br />
            </Div>
          </Div>
        ) : (
          <Div key={question.key} />
        );
      } else if (question.type === "text") {
        return <h2>in progress </h2>;
      } else {
        return (
          <Div>
            <h2>in progress</h2>
          </Div>
        );
      }
    });

    const verify = questions[val].submit;

    return (
      <Div flexDirection="column">
        <h1>{`This the ${questions[val].name} form!`}</h1>
        {form_items}
        <Button onClick={verify}> Submit </Button>
      </Div>
    );
  }
}

export default Form;
