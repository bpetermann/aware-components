interface Props
  extends React.DetailedHTMLProps<
    React.OptgroupHTMLAttributes<HTMLOptGroupElement>,
    HTMLOptGroupElement
  > {
  label: string;
}

export const Optgroup = (props: Props) => {
  const { children, label, ...rest } = props;

  return (
    <optgroup {...rest} label={label}>
      {children}
    </optgroup>
  );
};
