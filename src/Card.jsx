export default function Card(props) {
  const { href, imgAlt, imgSrc } = props;
  return (
    <div className="max-w-sm">
      <div>
        <a href={href} target="_blank">
          <img src={imgSrc} alt={imgAlt} />
        </a>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-0">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-900">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}
