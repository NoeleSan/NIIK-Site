import s from "./TableSearch.module.css";
import { useState } from "react";
import { set } from "lodash";
export default (props) => {
  const [value, setValue] = useState("");
  return (
    <div className={s.input}>
      <input
        type="text"
        className={s.form}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        onChange={(e) => props.onSearch(e.target.value)}
      />
    </div>
  );
};
