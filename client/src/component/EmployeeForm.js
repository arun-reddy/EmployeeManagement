import React from "react";
import { Form, Button, Input } from "semantic-ui-react";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      MobileNumber: "",
      Country: ""
    };
  }
  isValid = () => {
    return Object.keys(this.state).every(key => this.state[key]);
  }
  componentDidMount() {
    const { data = {} } = this.props;
    this.setState({
      ...data
    });
  }
  componentWillReceiveProps(nextProps) {
    const { data = {} } = nextProps;
    this.setState({
      ...data
    });
  }

  onChange = (evt, { name, value }) => {
    this.setState({ [name]: value });
  };

  onSave = () => {
    this.props.onSave({...this.state});
  }

  render() {
    const { Name, Country, MobileNumber } = this.state;
    return (
      <Form>
        <Form.Field>
          <label>Name</label>
          <Input placeholder="Name" name="Name" value={Name} onChange={this.onChange}/>
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <Input placeholder="Country" name="Country" value={Country} onChange={this.onChange}/>
        </Form.Field>
        <Form.Field>
          <label>Mobile Number</label>
          <Input placeholder="Mobile Number" name="MobileNumber" value={MobileNumber} onChange={this.onChange} />
        </Form.Field>
        <Button type="submit" disabled={!this.isValid()} onClick={this.onSave}>Submit</Button>
      </Form>
    );
  }
}
export default EmployeeForm;
