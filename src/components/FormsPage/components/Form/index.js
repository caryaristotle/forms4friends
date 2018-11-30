import questions from "./questions";
import React, { Component } from "react";
import { Div, Button, Fadio } from "./styles";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: {}
    };
  }

  render() {
    const params = new URLSearchParams(document.location.search);

    const val = params.get('name');

    const show = this.state.show;

    show[questions[val].questions[0].key] = true;
    
    // if (Object.values(questions) == val){
    //   show questions.questions[0]

    // }
    const form_items = questions[val].questions.map((question, i) => {
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
                    show: {
                      ...this.state.show,
                      [questions[val].questions[
                        Math.min(i + 1, questions[val].questions.length - 1)
                      ].key]: true
                    }
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
                    show: {
                      ...this.state.show,
                      [questions[val].questions[
                        Math.min(i + 1, questions[val].questions.length - 1)
                      ].key]: true
                    }
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
