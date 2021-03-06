import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export class OptionLabelProp extends Component {
  render() {
    return (
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <span role="img" className="mr-2" aria-label="China">
            π¨π³
          </span>
          China (δΈ­ε½)
        </Option>
        <Option value="usa" label="USA">
          <span role="img" className="mr-2" aria-label="USA">
            πΊπΈ
          </span>
          USA (ηΎε½)
        </Option>
        <Option value="japan" label="Japan">
          <span role="img" className="mr-2" aria-label="Japan">
            π―π΅
          </span>
          Japan (ζ₯ζ¬)
        </Option>
        <Option value="korea" label="Korea">
          <span role="img" className="mr-2" aria-label="Korea">
            π°π·
          </span>
          Korea (ι©ε½)
        </Option>
      </Select>
    );
  }
}

export default OptionLabelProp;
