import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  onChange = (e) => {
    // [e.target.name] handles all input fields w/o having to
    // call a seperate one each time
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuidv4(),
      name: this.state.name,
    };

    // add item via addItem action
    this.props.addItem(newItem);

    //close modal
    this.toggle();
  };

  render() {
    return (
      <Container>
        <div>
          <Button
            color="dark"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            Add Item
          </Button>

          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="item">Item</Label>
                  <Input
                    type="text"
                    name="name"
                    id="item"
                    placeholder="Add Shopping Item"
                    onChange={this.onChange}
                  />
                  <Button color="dark" style={{ marginTop: "2rem" }} block>
                    Add Item
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  // item from rootReducer
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
// export default ItemModal;
