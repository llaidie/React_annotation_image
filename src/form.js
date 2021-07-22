import React, { useRef } from "react";

const Form = (props) => {
  const { value, onChange } = props;
  console.log("props", props);
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <form>
      {" "}
      <input
        placeholder={"Hello world"}
        name={"input"}
        onChange={(e) => {
          console.log(e);
        }}
      />
      <select
        name="pets"
        //placeholder={"Hello world"}
        onChange={(e) => {
          console.log(e);
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <button type={"button"} onClick={onSubmit}>
        OK
      </button>
    </form>
  );
};
export default Form;
