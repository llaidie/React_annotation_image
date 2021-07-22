import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection
} from "react-picture-annotation";

import "./styles.css";
import Form from "./form";
const App = () => {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = (selectedId) => console.log(selectedId);
  const onChange = (data) => console.log(data);

  return (
    <div className="App">
      <ReactPictureAnnotation
        image={"./pdf.jpg"}
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
        annotationStyle={{
          ...defaultShapeStyle,
          shapeStrokeStyle: "#2193ff",
          transformerBackground: "black"
        }}
        inputElement={(value, onChange, onDelete) =>
          Form(value, onChange, onDelete)
        }
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
