import * as React from "react";
import { Component } from "react";
import students from "../../config/students";

export interface StudentDetailsProps {
  match: any;
}

export interface StudentDetailsState {
  student: any;
  loaded: boolean;
}

// interface StudentInterface {
//   id: number;
//   student: string;
//   birthdate: string;
//   faculty: string;
// }
class StudentDetails extends React.Component<
  StudentDetailsProps,
  StudentDetailsState
> {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            student: {}
        }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      loaded: true,
      student: students.find(student => student.id === +id)
    });
  }
  render() {
    const { loaded, student } = this.state;
    return (<>
        {loaded && <div>
            <h2>{student.student}</h2>
            <p>Birthdate: {student.birthdate}</p>
            <p>Faculty: {student.faculty}</p>
        </div>}
    </>);
  }
}

export default StudentDetails;
