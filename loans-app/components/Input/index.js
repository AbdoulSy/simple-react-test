export default function MyInput({ type, name, ...props }) {
  return (
    <div>
      <input type={type} name={name} {...props} role="input" />
    </div>
  );
}
