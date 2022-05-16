import "antd/dist/antd.min.css";
import "./App.css";
import "./App.less";
import { Button, Select, TimePicker, Table } from "antd";
import { get, map } from "lodash";
import React, { Component } from "react";
import moment from "moment";

const { Option } = Select;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "0",
      time: moment(),
      job: 1,
    };
  }

  onChangeType = (value) => {
    this.setState({
      type: value,
    });
  };

  onChangeTime = (time, timeString) => {
    console.log(moment(time).format("HH:mm:ss"));
    this.setState({ time });
  };

  onChangeJob = (value) => {
    this.setState({
      job: value,
    });
  };
  gioXeDon = (type, job) => {
    if (job === 0) {
      switch (type) {
        case "0":
          return parseInt(moment(this.state.time).format("HH")) < 8
            ? moment(this.state.time)
                .subtract(5, "hours")
                .subtract(1, "hours")
                .subtract(55, "minutes")
                .format("HH:mm")
            : moment(this.state.time)
                .subtract(5, "hours")
                .subtract(2, "hours")
                .subtract(10, "minutes")
                .format("HH:mm");
        case "1":
          return moment(this.state.time)
            .subtract(5, "hours")
            .subtract(2, "hours")
            .subtract(20, "minutes")
            .format("HH:mm");
        case "2":
          return moment(this.state.time)
            .subtract(5, "hours")
            .subtract(2, "hours")
            .subtract(20, "minutes")
            .format("HH:mm");
        case "3":
          return parseInt(moment(this.state.time).format("HH")) < 8
            ? moment(this.state.time)
                .subtract(5, "hours")
                .subtract(1, "hours")
                .subtract(55, "minutes")
                .format("HH:mm")
            : moment(this.state.time)
                .subtract(5, "hours")
                .subtract(2, "hours")
                .subtract(5, "minutes")
                .format("HH:mm");
        case "4":
          return moment(this.state.time)
            .subtract(5, "hours")
            .subtract(2, "hours")
            .subtract(20, "minutes")
            .format("HH:mm");
        default:
          break;
      }
    }
    if (job === 1) {
      switch (type) {
        case "0":
          return parseInt(moment(this.state.time).format("HH")) < 8
            ? moment(this.state.time)
                .subtract(5, "hours")
                .subtract(2, "hours")
                .format("HH:mm")
            : moment(this.state.time)
                .subtract(5, "hours")
                .subtract(2, "hours")
                .subtract(15, "minutes")
                .format("HH:mm");
        case "1":
          return moment(this.state.time)
            .subtract(5, "hours")
            .subtract(2, "hours")
            .subtract(25, "minutes")
            .format("HH:mm");
        case "2":
          return moment(this.state.time)
            .subtract(5, "hours")
            .subtract(2, "hours")
            .subtract(25, "minutes")
            .format("HH:mm");
        case "3":
          return parseInt(moment(this.state.time).format("HH")) < 8
            ? moment(this.state.time)
                .subtract(5, "hours")
                .subtract(2, "hours")
                .format("HH:mm")
            : moment(this.state.time)
                .subtract(5, "hours")
                .subtract(2, "hours")
                .subtract(10, "minutes")
                .format("HH:mm");
        case "4":
          return moment(this.state.time)
            .subtract(5, "hours")
            .subtract(2, "hours")
            .subtract(25, "minutes")
            .format("HH:mm");
        default:
          break;
      }
    }
  };

  gioHop = (type) => {
    switch (type) {
      case "0":
        return parseInt(moment(this.state.time).format("HH")) < 8
          ? moment(this.state.time)
              .subtract(5, "hours")
              .subtract(1, "hours")
              .subtract(30, "minutes")
              .format("HH:mm")
          : moment(this.state.time)
              .subtract(5, "hours")
              .subtract(1, "hours")
              .subtract(35, "minutes")
              .format("HH:mm");
      case "1":
        return moment(this.state.time)
          .subtract(5, "hours")
          .subtract(1, "hours")
          .subtract(45, "minutes")
          .format("HH:mm");
      case "2":
        return moment(this.state.time)
          .subtract(5, "hours")
          .subtract(1, "hours")
          .subtract(45, "minutes")
          .format("HH:mm");
      case "3":
        return moment(this.state.time)
          .subtract(5, "hours")
          .subtract(1, "hours")
          .subtract(30, "minutes")
          .format("HH:mm");
      case "4":
        return moment(this.state.time)
          .subtract(5, "hours")
          .subtract(1, "hours")
          .subtract(55, "minutes")
          .format("HH:mm");
      default:
        break;
    }
  };
  render() {
    const { type, job } = this.state;
    let gioXeDon = this.gioXeDon(type, job),
      gioHop = this.gioHop(type);
    const listType = [
      {
        label: "Nội địa, quốc tế ngắn (FT<4h)",
        key: "0",
      },
      {
        label:
          "Quốc tế tầm trung về ngay (Thời gian bay liên tục 4h <= FT <= 7h, không ký gửi hành lý: ICN, HND về ngay",
        key: "1",
      },
      {
        label:
          "Quốc tế tầm trung, dài (Thời gian bay liên tục FT >= 4h, có ký gửi hành lý)",
        key: "2",
      },
      {
        label: "Nội địa, Quốc tế (Ngắn/Trung/Dài)",
        key: "3",
      },
      {
        label: "Chuyên cơ nội địa kết hợp chở khách",
        key: "4",
      },
    ];

    const columns = [
      {
        title: "Loại",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "Briefing (GMT +7)",
        dataIndex: "time",
        key: "time",
      },
    ];
    const dataSource = [
      {
        key: "1",
        type: "Giờ xe đón",
        time: gioXeDon,
      },
      {
        key: "2",
        type: "Giờ họp BRT",
        time: gioHop,
      },
    ];

    return (
      <div style={styles.container}>
        <div style={styles.topBar}>
          <p style={styles.topBarText}>Briefing time calculator</p>
        </div>
        <div style={styles.body}>
          <div style={styles.buttonRow}>
            <div style={styles.jobButton}>
              <Button
                size="large"
                style={
                  this.state.job === 1 ? styles.buttonActive : styles.button
                }
                onClick={() => {
                  this.onChangeJob(1);
                }}
              >
                <p
                  style={
                    this.state.job === 1
                      ? styles.textButtonActive
                      : styles.textButton
                  }
                >
                  TIẾP VIÊN
                </p>
              </Button>
            </div>
            <div>
              <Button
                size="large"
                style={
                  this.state.job === 0 ? styles.buttonActive : styles.button
                }
                type=""
                onClick={() => {
                  this.onChangeJob(0);
                }}
              >
                <p
                  style={
                    this.state.job === 0
                      ? styles.textButtonActive
                      : styles.textButton
                  }
                >
                  PHI CÔNG
                </p>
              </Button>
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.timePicker}>
              <p style={styles.gioBayUTC}>✈️ Chọn loại chuyến bay</p>
              <Select
                style={{ width: "350px" }}
                placeholder={"Chọn loại chuyến bay"}
                value={this.state.type}
                onChange={this.onChangeType}
              >
                {map(listType, (item) => {
                  return (
                    <Option key={item.key} value={item.key}>
                      {get(item, "label")}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div style={styles.timePicker}>
              <p style={styles.gioBayUTC}> ⏰ Chọn giờ bay (UTC)</p>
              <TimePicker
                style={{ width: "120px" }}
                value={this.state.time}
                use12Hours
                format="h:mm a"
                onChange={this.onChangeTime}
              />
            </div>
          </div>
          <div style={styles.gioBayContainer}>
            <p style={styles.gioBay}>
              Giờ bay{" "}
              {moment(this.state.time).subtract(5, "hours").format("HH:mm")}{" "}
              <span style={styles.gmt7}>(GMT +7)</span>
            </p>
          </div>
          <div>
            <p style={styles.titleTable}>
              Lịch chuẩn bị cho{" "}
              {this.state.job === 0 ? "phi công" : "tiếp viên"} bay{" "}
              {
                listType.find((item, index) => {
                  return item.key === this.state.type;
                }).label
              }
            </p>
            <div>
              <Table
                style={{ margin: "20px 0px" }}
                columns={columns}
                rowClassName={(record, index) => {
                  if (index % 2 !== 0) {
                    return "rowBackgroundColor";
                  }
                }}
                dataSource={dataSource}
                pagination={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
    marginRight: "30px",
  },
  topBar: {
    width: "100%",
    paddingTop: "20px",
    backgroundColor: "#663399",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
  },
  topBarText: {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
  },
  button: {
    borderColor: "#E0E0E0",
    backgroundColor: "white",
    borderWidth: "1px",
  },
  activeButton: {
    borderColor: "#663399",
    backgroundColor: "white",
    borderWidth: "1px",
  },
  textButton: {
    color: "#E0E0E0",
    fontFamily: "san-serif",
  },
  textButtonActive: {
    color: "#663399",
    fontFamily: "san-serif",
  },
  row: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  gioBay: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#663399",
  },
  gioBayUTC: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#663399",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
  },
  titleTable: {
    maxWidth: "500px",
  },
  gioBayContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  timePicker: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  gmt7: {
    color: "#A4B0C2",
    fontWeight: "400",
  },
  jobButton: {
    marginRight: "60px",
  },
};

export default App;
