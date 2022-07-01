import "antd/dist/antd.min.css";
import "./App.css";
import "./App.less";
import { Button, Select, Table } from "antd";
import { get, map } from "lodash";
import React, { Component, Fragment } from "react";
import moment from "moment";
// import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import TimePicker from "./TimePicker";

const { Option } = Select;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "0",
      time: moment(),
      job: 1,
      base: "HAN",
    };
  }

  componentDidMount() {
    document
      .getElementsByClassName("ant-select-selection-search-input")[0]
      .setAttribute("readonly", true);
  }

  onChangeType = (value) => {
    this.setState({
      type: value,
    });
  };

  onChangeTime = (time, timeString) => {
    // console.log(moment(time).format("HH:MM"));
    this.setState({ time });
  };

  onChangeJob = (value) => {
    this.setState({
      job: value,
    });
  };

  onChangeBase = (value) => {
    this.setState({
      base: value,
      type: "0",
    });
  };
  gioXeDon = (type, job, base) => {
    if (base === "HAN") {
      if (job === 0) {
        switch (type) {
          case "0":
            return parseInt(moment(this.state.time).format("HH")) < 8
              ? moment(this.state.time)
                  .subtract(1, "hours")
                  .subtract(55, "minutes")
                  .format("HH:mm")
              : moment(this.state.time)
                  .subtract(2, "hours")
                  .subtract(10, "minutes")
                  .format("HH:mm");
          case "1":
            return moment(this.state.time)
              .subtract(2, "hours")
              .subtract(20, "minutes")
              .format("HH:mm");
          case "2":
            return moment(this.state.time)
              .subtract(2, "hours")
              .subtract(20, "minutes")
              .format("HH:mm");
          case "3":
            return parseInt(moment(this.state.time).format("HH")) < 8
              ? moment(this.state.time)
                  .subtract(1, "hours")
                  .subtract(55, "minutes")
                  .format("HH:mm")
              : moment(this.state.time)
                  .subtract(2, "hours")
                  .subtract(5, "minutes")
                  .format("HH:mm");
          case "4":
            return moment(this.state.time)
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
              ? moment(this.state.time).subtract(2, "hours").format("HH:mm")
              : moment(this.state.time)
                  .subtract(2, "hours")
                  .subtract(15, "minutes")
                  .format("HH:mm");
          case "1":
            return moment(this.state.time)
              .subtract(2, "hours")
              .subtract(25, "minutes")
              .format("HH:mm");
          case "2":
            return moment(this.state.time)
              .subtract(2, "hours")
              .subtract(25, "minutes")
              .format("HH:mm");
          case "3":
            return parseInt(moment(this.state.time).format("HH")) < 8
              ? moment(this.state.time).subtract(2, "hours").format("HH:mm")
              : moment(this.state.time)
                  .subtract(2, "hours")
                  .subtract(10, "minutes")
                  .format("HH:mm");
          case "4":
            return moment(this.state.time)
              .subtract(2, "hours")
              .subtract(25, "minutes")
              .format("HH:mm");
          default:
            break;
        }
      }
    } else if (base === "SGN") {
      switch (type) {
        case "0":
          return moment(this.state.time).subtract(1, "hours").format("HH:mm");
        case "1":
          return moment(this.state.time).subtract(1, "hours").format("HH:mm");
        case "2":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(10, "minutes")
            .format("HH:mm");
        case "3":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(20, "minutes")
            .format("HH:mm");
        case "4":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(20, "minutes")
            .format("HH:mm");
        case "5":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(20, "minutes")
            .format("HH:mm");
        case "6":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(30, "minutes")
            .format("HH:mm");
        case "7":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(40, "minutes")
            .format("HH:mm");
        case "8":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(45, "minutes")
            .format("HH:mm");
        case "9":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(10, "minutes")
            .format("HH:mm");
        case "10":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(45, "minutes")
            .format("HH:mm");
        default:
          break;
      }
    }
  };

  gioHop = (type, base) => {
    if (base === "HAN") {
      switch (type) {
        case "0":
          return parseInt(moment(this.state.time).format("HH")) < 8
            ? moment(this.state.time)
                .subtract(1, "hours")
                .subtract(30, "minutes")
                .format("HH:mm")
            : moment(this.state.time)
                .subtract(1, "hours")
                .subtract(35, "minutes")
                .format("HH:mm");
        case "1":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(45, "minutes")
            .format("HH:mm");
        case "2":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(45, "minutes")
            .format("HH:mm");
        case "3":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(30, "minutes")
            .format("HH:mm");
        case "4":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(55, "minutes")
            .format("HH:mm");
        default:
          break;
      }
    } else if (base === "SGN") {
      switch (type) {
        case "0":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(15, "minutes")
            .format("HH:mm");
        case "1":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(25, "minutes")
            .format("HH:mm");
        case "2":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(30, "minutes")
            .format("HH:mm");
        case "3":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(40, "minutes")
            .format("HH:mm");
        case "4":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(40, "minutes")
            .format("HH:mm");
        case "5":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(45, "minutes")
            .format("HH:mm");
        case "6":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(55, "minutes")
            .format("HH:mm");
        case "7":
          return moment(this.state.time)
            .subtract(2, "hours")
            .subtract(5, "minutes")
            .format("HH:mm");
        case "8":
          return moment(this.state.time)
            .subtract(2, "hours")
            .subtract(10, "minutes")
            .format("HH:mm");
        case "9":
          return moment(this.state.time)
            .subtract(1, "hours")
            .subtract(25, "minutes")
            .format("HH:mm");
        case "10":
          return moment(this.state.time)
            .subtract(2, "hours")
            .subtract(5, "minutes")
            .format("HH:mm");
        default:
          break;
      }
    }
  };

  onDropDownChange = (isDropdown) => {
    if (isDropdown) {
      document.body.style.overflow = "hidden";
      document.getElementsByClassName("container")[0].style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  render() {
    const { type, job, base } = this.state;
    let gioXeDon = this.gioXeDon(type, job, base),
      gioHop = this.gioHop(type, base);
    const listType =
      this.state.base === "HAN"
        ? [
            {
              label: "Nội địa, quốc tế ngắn (FT < 4h)",
              key: "0",
            },
            {
              label: `Quốc tế tầm trung về ngay \n(4h ≤ FT ≤ 7h, không ký gửi)`,
              key: "1",
            },
            {
              label: "Quốc tế tầm trung, dài \n(FT ≥ 4h, có ký gửi)",
              key: "2",
            },
            {
              label: "Cabin Cargo/ Belly Cargo",
              key: "3",
            },
            {
              label: "Chuyên cơ",
              key: "4",
            },
          ]
        : [
            {
              label: "Nội địa (ATR72)",
              key: "0",
            },
            {
              label: `Quốc tế (ATR72)`,
              key: "1",
            },
            {
              label: "Nội địa (B787, A350, A321)",
              key: "2",
            },
            {
              label: "Nội địa nối tiếp quốc tế tầm trung, dài có ký gửi",
              key: "3",
            },
            {
              label: "Quốc tế ngắn (B787, A350, A321), FT<4h",
              key: "4",
            },
            {
              label: "Quốc tế tầm trung về ngay \n(4h ≤ FT ≤ 7h, không ký gửi)",
              key: "5",
            },
            {
              label: "Quốc tế tầm trung (4h ≤ FT ≤ 7h)",
              key: "6",
            },
            {
              label: "Quốc tế dài (FT ≥ 7h, Âu, Úc)",
              key: "7",
            },
            {
              label: "Quốc tế dài (FT ≥ 7h, Mỹ)",
              key: "8",
            },
            {
              label: "Cabin, Cargo, Belly Cargo",
              key: "9",
            },
            {
              label: "Chuyên cơ",
              key: "10",
            },
          ];

    const columns = [
      {
        title: "Loại",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "Giờ (Local Time)",
        dataIndex: "time",
        key: "time",
      },
    ];
    const dataSource =
      this.state.base === "HAN"
        ? [
            {
              key: "1",
              type: "Giờ xe đón",
              time: gioXeDon,
            },
            {
              key: "2",
              type: "Giờ họp BRF",
              time: gioHop,
            },
          ]
        : [
            {
              key: "1",
              type: "Giờ họp BRF",
              time: gioHop,
            },
            {
              key: "2",
              type: "Giờ xe đón",
              time: gioXeDon,
            },
          ];

    return (
      <div className="container" style={styles.container}>
        <div style={styles.topBar}>
          <p style={styles.topBarText}>TIME CALCULATOR</p>
        </div>
        <div style={styles.body}>
          <p style={styles.gioBayUTC}>🤵 Bạn là</p>
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
          <p style={styles.gioBayUTC}>
            <img
              src={require("./Images/location.png")}
              style={styles.locationImage}
            ></img>{" "}
            Chọn base
          </p>
          <div style={styles.buttonRow}>
            <div style={styles.jobButton}>
              <Button
                size="large"
                style={
                  this.state.base === "HAN"
                    ? styles.buttonActive
                    : styles.button
                }
                onClick={() => {
                  this.onChangeBase("HAN");
                }}
              >
                <p
                  style={
                    this.state.base === "HAN"
                      ? styles.textButtonActive
                      : styles.textButton
                  }
                >
                  HAN
                </p>
              </Button>
            </div>
            <div>
              <Button
                size="large"
                style={
                  this.state.base === "SGN"
                    ? styles.buttonActive
                    : styles.button
                }
                type=""
                onClick={() => {
                  this.onChangeBase("SGN");
                }}
              >
                <p
                  style={
                    this.state.base === "SGN"
                      ? styles.textButtonActive
                      : styles.textButton
                  }
                >
                  SGN
                </p>
              </Button>
            </div>
          </div>
          <div style={styles.row}>
            <div style={styles.timePicker}>
              <p style={styles.gioBayUTC}>✈️ Chọn loại chuyến bay</p>
              <Select
                showSearch
                style={{
                  // inlineSize: "200",
                  height: "auto",
                  width: 340,
                  padding: "0px",
                  margin: "0px",
                }}
                placeholder={"Chọn loại chuyến bay"}
                value={this.state.type}
                onDropdownVisibleChange={this.onDropDownChange}
                onChange={this.onChangeType}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {map(listType, (item) => {
                  return (
                    <Option className="type" key={item.key} value={item.key}>
                      {get(item, "label") ===
                      "Quốc tế tầm trung về ngay \n(4h ≤ FT ≤ 7h, không ký gửi)" ? (
                        <p
                          style={{
                            padding: "0px",
                            margin: "0px",
                            lineHeight: "auto",
                          }}
                        >
                          Quốc tế tầm trung về ngay <br></br>(4h ≤ FT ≤ 7h,
                          không ký gửi)
                        </p>
                      ) : (
                        get(item, "label")
                      )}
                    </Option>
                  );
                })}
              </Select>
            </div>
            <div style={styles.timePicker}>
              <p style={styles.gioBayUTC}> ⏰ Chọn giờ bay (Local Time)</p>
              {/* <TimePicker
                style={{ width: "120px" }}
                value={this.state.time}
                use12Hours
                format="HH:mm"
                onSelect={this.onChangeTime}
                showNow={false}
                suffixIcon={false}
              /> */}
              <TimePicker
                style={{ width: "120px" }}
                className="timePicker"
                placeholder="Select Time"
                use24Hours
                value={this.state.time}
                showSecond={false}
                focusOnOpen={true}
                format="HH:mm"
                onChange={this.onChangeTime}
              />
            </div>
          </div>
          {/* <div style={styles.gioBayContainer}>
            <p className="gioBay" style={styles.gioBay}>
              Giờ bay {moment(this.state.time).format("HH:mm")}{" "}
              <span style={styles.gmt7}>(GMT +7)</span>
            </p>
          </div> */}
          <div>
            <p style={styles.titleTable}>
              Lịch chuẩn bị cho{" "}
              {this.state.job === 0 ? "phi công" : "tiếp viên"} bay{" "}
              {
                listType.find((item, index) => {
                  return item.key === this.state.type;
                }).label
              }
              {" tại Base "}
              {this.state.base}
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
        <p className="footer">Nice flight ✈️ via Ha120</p>
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
    backgroundColor: "#0f1e7d",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
  },
  topBarText: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  },
  button: {
    borderColor: "#E0E0E0",
    backgroundColor: "white",
    borderWidth: "1px",
    width: "120px",
  },
  buttonActive: {
    borderColor: "#0f1e7d",
    backgroundColor: "white",
    borderWidth: "1px",
    width: "120px",
  },
  textButton: {
    color: "#E0E0E0",
    // fontFamily: "san-serif",
  },
  textButtonActive: {
    color: "#0f1e7d",
    // fontFamily: "san-serif",
  },
  row: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  // gioBay: {
  //   fontSize: "26px",
  //   fontWeight: "bold",
  //   color: "#0f1e7d",
  // },
  gioBayUTC: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0f1e7d",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  },
  titleTable: {
    maxWidth: "300px",
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
  locationImage: {
    width: "24px",
    height: "24px",
  },
};

export default App;
