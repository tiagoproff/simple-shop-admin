import {
  Base,
  Control as ControlComponent,
  ErrorText,
  Fieldset,
  Label,
  Legend,
} from './style';

interface InputProps extends React.InputHTMLAttributes<any> {
  label?: string;
  error?: boolean;
}

export default function Control({
  children,
  label,
  error,
  ...props
}: InputProps) {
  return (
    <ControlComponent {...props}>
      {label ? <Label>{label}</Label> : null}
      <Base>
        {children}
        <Fieldset>{label ? <Legend>{label}</Legend> : null}</Fieldset>
      </Base>
      {error ? <ErrorText>Error</ErrorText> : null}
    </ControlComponent>
  );
}
