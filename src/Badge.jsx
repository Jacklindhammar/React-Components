const styles = {
  color: {
    badge1: "bg-purple-500 hover:bg-purple-600",
    badge2: "bg-orange-500 hover:bg-orange-600",
  },
  size: {
    s: "text-sm px-4 py-2",
    m: "text-md px-8 py-4",
  },
};

export default function Badge(props) {
  const { title, color, size, icon } = props;

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <div
      className={` ${colorClass} ${sizeClass} flex justify-center items-center m-2`}
    >
      <div className="m-1">{icon}</div>
      {title}
    </div>
  );
}
