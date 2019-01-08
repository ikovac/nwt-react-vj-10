import * as React from "react";
import { Component } from "react";
import StudentRow from "../StudentRow";
import students from "../../config/students";
import { Table } from "reactstrap";

export interface StudentListProps {}

export interface StudentListState {
  student: any;
}

class StudentList extends Component<StudentListProps, StudentListState> {
  state = { student: undefined };

  onRowClick = student => {
    this.setState({ student: student });
    console.log(student);
  };

  render() {
    return (
      <>
        <h1>List of Students</h1>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Birthdate</th>
              <th>Faculty</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <StudentRow
                student={student}
                key={index}
                index={index + 1}
                onRowClick={this.onRowClick}
              />
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default StudentList;
