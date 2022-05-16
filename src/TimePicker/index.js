import styled from "styled-components";
import TimePicker from "./TimePicker";

const StyledTimePicker = styled(TimePicker)`
  & .rc-time-picker-panel-select-option-selected {
    background-color: #0f1e7d;
    font-weight: normal;
    color: white;
  }
  & .rc-time-picker-panel-select-option-selected:hover {
    background-color: #0f1e7d;
    font-weight: normal;
    color: white;
  }

  & .rc-time-picker-clear,
  & .rc-time-picker-clear-icon:after {
    font-size: 20px;
  }

  & .rc-time-picker-panel-select,
  & .rc-time-picker-input,
  & .rc-time-picker-panel-input {
    font-family: "Segoe UI", sans-serif;
    font-size: 18px;
    color: black;
    cursor: context-menu;
    border-radius: 0px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #0f1e7d;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  & .rc-time-picker-panel-input-wrap {
    box-sizing: content-box;
  }
`;

export default StyledTimePicker;
