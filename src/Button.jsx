const styles = {
  color: {
    primary: "bg-green-600 hover:bg-green-700",
    secondary: "bg-blue-500 hover:bg-blue-600",
  },
  size: {
    small: "text-sm px-6 py-3",
    medium: "text-md px-8 py-4",
  },
  disabled: "bg-gray-300 hover:bg-gray-300 text-slate-500",
};

export default function Button(props) {
  const { title, color, size, onClick, disabled } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = disabled ? styles.disabled : "";
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(title)}
      className={`rounded-lg m-2 ${colorClass} ${sizeClass} ${disabledClass}`}
    >
      {title}
    </button>
  );
}
