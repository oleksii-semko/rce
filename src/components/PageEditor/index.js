import React, { useContext, useState } from 'react';
import { JsonEditor as Editor } from 'jsoneditor-react';
import Ajv from 'ajv';

import { AppContext } from '../context';
import { mainSchema } from './constants';

import './index.css';
import 'jsoneditor-react/es/editor.min.css';

const ajv = new Ajv({ allErrors: true, verbose: true });

/**
 * Editor component
 */
const PageEditor = () => {
  const { state, setAppState } = useContext(AppContext);
  const [ pageConfig, setPageConfig ] = useState(state);

  const handleChange = (data, err) => {
    setPageConfig(data);
  }

  const handleSubmit = () => {
    setAppState(pageConfig);
  }

  return (
    <div className="page-editor">
      <Editor
          value={pageConfig}
          onChange={(data) => handleChange(data)}
          ajv={ajv}
          schema={mainSchema}
          mode='text'
          navigationBar={false}
      />
      <button onClick={handleSubmit} className="submit-btn"> Generate </button>
    </div>
  );
}

export default PageEditor;
