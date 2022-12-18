import { Component } from "react";
import axios from "axios";

export default class BaseCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNo: "",
      address: "",
      loginId: "",
      password: "",
      city: "",
      state: "",
      studentId: "",
      chemistry: "",
      maths: "",
      physics: "",
      discription: "",
      lastName: "",
      firstName: "",
      collegeId: "",
      mobileNo: "",
      email: "",
      collegeName: "",
      rollNo: "",
      roleId: "",
      message: "",
      txtClr: "",
      list: [],
    };
  }

  changeState(ev) {
    let name = ev.target.name;
    let value = ev.target.value;
    this.setState({ [name]: value });
  }

  search(item) {
    let url = `http://api.sunilos.com:9080/ORSP10/${item}/search`;
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data });
    });
  }

  save(item, ev) {
    ev.preventDefault();
    let url = `http://api.sunilos.com:9080/ORSP10/${item}/save`;
    axios.post(url, this.state).then((res) => {
      this.setState({ list: res.data.result.data });
      if (res.data.success) {
        this.setState({
          message: `${item} ${
            this.props.match.params.pid ? "Updated" : "Added"
          } Successfully`,
          txtClr: "success",
        });
      } else {
        this.setState({
          message: `${item} didn't ${
            this.props.match.params.pid ? "Updated" : "Added"
          }`,
          txtClr: "danger",
        });
      }
    });
  }

  edit(item) {
    let id = this.props.match.params.pid;
    let url = `http://api.sunilos.com:9080/ORSP10/${item}/get/` + id;
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        studentId: res.data.result.data.studentId,
        name: res.data.result.data.name,
        physics: res.data.result.data.physics,
        chemistry: res.data.result.data.chemistry,
        maths: res.data.result.data.maths,
        rollNo: res.data.result.data.rollNo,
        phoneNo: res.data.result.data.phoneNo,
        address: res.data.result.data.address,
        loginId: res.data.result.data.loginId,
        password: res.data.result.data.password,
        city: res.data.result.data.city,
        state: res.data.result.data.state,
        discription: res.data.result.data.discription,
        lastName: res.data.result.data.lastName,
        firstName: res.data.result.data.firstName,
        collegeId: res.data.result.data.collegeId,
        mobileNo: res.data.result.data.mobileNo,
        email: res.data.result.data.email,
        collegeName: res.data.result.data.collegeName,
        roleId: res.data.result.data.roleId,
      });
    });
  }

  delete(item, id) {
    let url = `http://api.sunilos.com:9080/ORSP10/${item}/delete/` + id;
    axios.get(url).then((res) => {
      console.log(res);
      if (res.data.success) {
        this.setState({
          message: `${item} Id No. ${id} Deleted`,
          txtClr: "success",
        });
      } else {
        this.setState({
          message: `${item} Id No. ${id} didn't Deleted`,
          txtClr: "danger",
        });
      }
    });
  }

  reset() {
    this.setState({
      name: "",
      phoneNo: "",
      address: "",
      loginId: "",
      password: "",
      city: "",
      state: "",
      studentId: "",
      chemistry: "",
      maths: "",
      physics: "",
      discription: "",
      lastName: "",
      firstName: "",
      collegeId: "",
      mobileNo: "",
      email: "",
      collegeName: "",
      rollNo: "",
      roleId: "",
    });
  }
}
