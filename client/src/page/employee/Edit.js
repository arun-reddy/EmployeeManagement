import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
} from "../../actions/employeeActions";
import EmployeeForm from "../../component/EmployeeForm";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if(this.props.employees.length === 0)
      this.props.getEmployees();
  }
  onSuccess = (data) => {
    this.props.getEmployees();
    this.props.history.push("/");
  }
  onSave = (data) => {
    const id = this.props.match.params.id;
    if(id) {
      this.props.updateEmployee(id,data, this.onSuccess);
    } else {
      this.props.addEmployee(data, this.onSuccess);
    }
  }
  render() {
    const { employees = []} = this.props;
    const id = this.props.match.params.id;
    let data = {};
    if (id) {
      data = employees.find(emp => emp.id === id);
    }
    return (
      <div>
        <h2> {id ? "Update" : "Add"} Employee</h2>
        <EmployeeForm data={data} onSave={this.onSave}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.emp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: () => {
      dispatch(getEmployees());
    },
    addEmployee: (employee, callBack) => {
      dispatch(addEmployee(employee, callBack));
    },
    updateEmployee: (id, employee, callBack) => {
      dispatch(updateEmployee(id, employee, callBack));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
