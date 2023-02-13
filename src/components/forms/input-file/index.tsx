import { useState } from 'react';

import Button from 'components/button';
import Control from '../control';

import { Base, Legend, Input } from './style';

interface InputProps extends React.InputHTMLAttributes<any> {
  label?: string;
  error?: boolean;
}

export default function InputFile({ label, error, ...props }: InputProps) {
  const [legend, setLegend] = useState('');
  const { multiple } = props;

  function handleChange({ target }: React.ChangeEvent<any>) {
    const files = target.files;
    const fileLength = files.length;
    console.log(files);

    if (multiple && fileLength > 1) {
      const legend = `${fileLength} arquivo(s)`;

      setLegend(legend);
    } else {
      const legend = files[0].name;

      setLegend(legend);
    }
  }

  return (
    <Control label={label} error={error}>
      <Button style={{ backgroundColor: 'white', color: 'black' }}>
        Procurar
      </Button>
      <Base className="file-upload mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
        <Input
          type="file"
          name="FileAttachment"
          className="upload"
          onChange={handleChange}
          {...props}
        />
        <Legend>{legend}</Legend>
      </Base>
    </Control>
  );
}
