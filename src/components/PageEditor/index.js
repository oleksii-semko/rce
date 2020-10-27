import React, { useContext, useState } from "react";
import { JsonEditor as Editor } from 'jsoneditor-react';
import Ajv from 'ajv';

import { AppContext } from "../context";

import 'jsoneditor-react/es/editor.min.css';

const testJson = [
  {
    "type": "hero"
  }
];
const innerSchema = {
  "type" : "object",
  "properties" : {
    "type" :  {
        "type" : "string"
    },
    "url" : {
      "type" : "string"
    },
    "imageURI" : {
        "type" : "string"
    },
    "text" : {
      "type" : "string"
    },
    "title" : {
      "type" : "string"
    },
    "leftToRight" : {
      "type" : "string"
    }
  },
  "required" : ["type"]
}
const mainSchema = {
  "type": "array",
  "items" : innerSchema
}
const ajv = new Ajv({ allErrors: true, verbose: true });


/**
 * Editor component
 */
const PageEditor = () => {
  const { setAppState } = useContext(AppContext);
  const [ pageConfig, setPageConfig ] = useState(testJson);

  const handleChange = (data, err) => {
    setPageConfig(data);
  }

  const handleSubmit = () => {
    console.log('submit', pageConfig);
    setAppState(pageConfig);
  }

  return (
    <React.Fragment>
      <Editor
          value={pageConfig}
          onChange={(data) => handleChange(data)}
          ajv={ajv}
          schema={mainSchema}
          mode='text'
          navigationBar={false}
      />
      <button onClick={handleSubmit} > Generate </button>
    </React.Fragment>
  );
}

export default PageEditor;
