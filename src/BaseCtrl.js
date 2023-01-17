import { Component } from "react";
import axios from "axios";

export default class BaseCtrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      txtClr: "",
      list: [],
      searchList: [],
      inputError: {
        message: "",
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
      this.setState({ searchList: res.data.result.data });
    });
  }

  save(item) {
    let url = `http://api.sunilos.com:9080/ORSP10/${item}/save`;
    axios
      .post(url, this.state)
      .then((res) => {
        this.setState({ list: res.data.result.data });
        if (res.data.success) {
          if (localStorage.token) {
            this.delete(item, this.props.match.params.pid);
            this.setState({
              message: `${item} ${
                this.props.match.params.pid ? "Updated" : "Added"
              } Successfully`,
              txtClr: "success",
              inputError: "",
            });
          } else {
            window.location.href = "/login";
          }
        } else {
          if (res.data.result.message === undefined) {
            this.setState({
              inputError: res.data.result.inputerror,
              message: "",
              txtClr: "danger",
            });
          } else {
            this.setState({
              message: res.data.result.message,
              inputError: "",
              txtClr: "danger",
            });
          }
        }
      })
      .catch((err) => {
        console.log("hello");
      });
  }

  edit(item) {
    let id = this.props.match.params.pid;
    let url = `http://api.sunilos.com:9080/ORSP10/${item}/get/` + id;
    axios.get(url).then((res) => {
      let data = res.data.result.data;
      this.setState({
        studentId: data.studentId,
        name: data.name,
        physics: data.physics,
        chemistry: data.chemistry,
        maths: data.maths,
        rollNo: data.rollNo,
        phoneNo: data.phoneNo,
        address: data.address,
        loginId: data.loginId,
        password: data.password,
        city: data.city,
        state: data.state,
        discription: data.discription,
        lastName: data.lastName,
        firstName: data.firstName,
        collegeId: data.collegeId,
        mobileNo: data.mobileNo,
        email: data.email,
        collegeName: data.collegeName,
        roleId: data.roleId,
      });
    });
  }

  delete(item, id) {
    let url = `http://api.sunilos.com:9080/ORSP10/${item}/delete/` + id;
    axios.get(url).then((res) => {
      if (!this.props.match.params.pid) {
        if (res.data.success) {
          this.setState({
            message: `${item} Deleted`,
            txtClr: "success",
          });
          this.search(item);
        } else {
          this.setState({
            message: `${item} Id No. ${id} didn't Deleted`,
            txtClr: "danger",
          });
        }
      }
    });
  }

  reset(item) {
    if (this.props.match.params.pid) {
      this.edit(item);
      this.setState({ message: `Input Feilds Reset`, txtClr: "success" });
    }
    if (!this.props.match.params.pid) {
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
    this.setState({
      inputError: "",
    });
  }
}
