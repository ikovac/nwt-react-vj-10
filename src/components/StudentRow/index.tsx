import * as React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const StudentRow = ({
  student,
  index,
  onRowClick
}: {
  student: any;
  index: Number;
  onRowClick: any;
}) => {
  return (
    
      <tr className={styles.TableRow} onClick={() => onRowClick(student)}>
        <th scope="row">{index}</th>
        <td>{student.student}</td>
        <td>{student.birthdate}</td>
        <td>{student.faculty}</td>
        <td><Link to={"/student/" + index}>View</Link></td>
      </tr>
    
  );
};

export default StudentRow;
