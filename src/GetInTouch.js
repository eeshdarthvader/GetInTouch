import React from "react";
import {
  Container,
  Card,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import axios from "axios";

class GetInTouch extends React.Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message"
  };

  formSubmit = e => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("http://localhost:4444/api/v1", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  componentDidMount() {
    // var transporter = require("nodemailer").createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "eesh.tyagi@gmail.com",
    //     pass: "Dypcoe_20122"
    //   }
    // });
  }
  render() {
    return (
      <Container className="mt-20">
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardTitle>Get In Touch</CardTitle>
          <CardText>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="What is your email?"
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  onChange={e => this.setState({ name: e.target.value })}
                  placeholder="Your name please"
                />
              </FormGroup>
              <FormGroup>
                <Label for="emailMessageBody">Message</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="emailMessageBody"
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </FormGroup>
            </Form>
          </CardText>
          <Button onClick={e => this.formSubmit(e)}>
            {this.state.buttonText}
          </Button>
        </Card>
      </Container>
    );
  }
}

export default GetInTouch;
