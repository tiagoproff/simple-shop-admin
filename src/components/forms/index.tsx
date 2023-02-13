import { Form as FormComponent, Title } from './style';

export default function Form({
  children,
  title,
  ...props
}: React.FormHTMLAttributes<any>) {
  return (
    <FormComponent {...props}>
      <>
        {title ? <Title>{title}</Title> : null}
        {children}
      </>
    </FormComponent>
  );
}
