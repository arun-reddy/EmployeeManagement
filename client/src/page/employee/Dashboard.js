import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployees, deleteEmployee } from "../../actions/employeeActions";
import { Card, Button, Icon, Dimmer, Loader } from "semantic-ui-react";
export class Dashboard extends Component {
  componentDidMount() {
  }
  onEdit = employee => {
    this.props.history.push('/employee/' + employee.id);
  };
  onNewEmployee = () => {
    this.props.history.push('/employee');
  }
  onDelete = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      this.props.deleteEmployee(id, () => {
        this.props.getEmployees();
      });
    }
  }
  render() {
    const { employees = [], isLoading = false } = this.props;
    return (
      <div>
        {isLoading ? (
          <Dimmer active>
            <Loader>Loading users</Loader>
          </Dimmer>
        ) : null}
        <h1>
          Hello,
          <br />
          Welcome to Employee Management.
        </h1>
        <p>We found {employees.length} employee(s) <Button  onClick={this.onNewEmployee}><Icon name="plus"/> Add New Employee</Button> </p>
        <Card.Group>
          {employees.map(employee => {
            return (
              <Card key={employee.id}>
                <Card.Content>
                  <Card.Header>{employee.Name}</Card.Header>
                  <Card.Meta>{employee.Country}</Card.Meta>
                  <Card.Description>
                    You can reach him on{" "}
                    <a href={"tel:" + employee.MobileNumber}>
                      {employee.MobileNumber}
                    </a>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button
                      basic
                      color="green"
                      onClick={() => this.onEdit(employee)}
                    >
                      <Icon name="pencil" />
                      Edit
                    </Button>
                    <Button basic color="red" onClick={() => this.onDelete(employee.id)}>
                      <Icon name="trash" />
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.emp.employees,
    isLoading: state.emp.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => {
      dispatch(getEmployees());
    },
    deleteEmployee: (id, callBack) => {
      dispatch(deleteEmployee(id, callBack));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
