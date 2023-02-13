import Control from '../control';
import { Input as InputComponent } from './style';

interface InputProps extends React.InputHTMLAttributes<any> {
  label?: string;
  error?: boolean;
}

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <Control label={label} error={error}>
      <InputComponent type="text" {...props} />
    </Control>
  );
}
