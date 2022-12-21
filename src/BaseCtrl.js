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
      inputError: {
        rollNo: "",
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
        roleId: "",
      },
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
          inputError: {
            studentId: res.data.result.inputerror.studentId,
            chemistry: res.data.result.inputerror.chemistry,
            maths: res.data.result.inputerror.maths,
            physics: res.data.result.inputerror.physics,
            rollNo: res.data.result.inputerror.rollNo,
            name: res.data.result.inputerror.name,
            phoneNo: res.data.result.inputerror.phoneNo,
            address: res.data.result.inputerror.address,
            loginId: res.data.result.inputerror.loginId,
            password: res.data.result.inputerror.password,
            city: res.data.result.inputerror.city,
            state: res.data.result.inputerror.state,
            discription: res.data.result.inputerror.discription,
            lastName: res.data.result.inputerror.lastName,
            firstName: res.data.result.inputerror.firstName,
            collegeId: res.data.result.inputerror.collegeId,
            mobileNo: res.data.result.inputerror.mobileNo,
            email: res.data.result.inputerror.email,
            collegeName: res.data.result.inputerror.collegeId,
            roleId: res.data.result.inputerror.roleId,
          },
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

  reset(item) {
    if (this.props.match.params.pid) {
      this.edit(item);
      this.setState({ message: `Input Feilds Reset`, txtClr: "success" });
    } else {
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
        message: `Input Feilds Reset`,
        txtClr: "success",
      });
    }
  }
}
