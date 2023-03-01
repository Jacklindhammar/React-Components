const styles = {
  color: {
    alert1: "bg-red-700",
    alert2: "bg-yellow-500",
  },
  size: {
    small: "text-sm px-6 py-3",
    medium: "text-md px-8 py-4",
  },
};

export default function Alert(props) {
  const { color, size, icon, onDismiss } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <div
      className={` ${colorClass} ${sizeClass} flex flex-row items-center`}
    >
      <div className="m-1">{icon}</div>
      <span>
        <span className="font-medium">Info alert!</span>
      </span>
      <button
        className="  border border-black  px-2 m-1"
        onClick={() => onDismiss()}
      >
        X
      </button>
    </div>
  );
}
