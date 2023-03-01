import Button from "./Button";
import Alert from "./Alert";
import { GrAlert } from "react-icons/gr";
import { GrCircleAlert } from "react-icons/gr";
import { BsBadge4KFill } from "react-icons/bs";
import { BsBadge8KFill } from "react-icons/bs";
import Badge from "./Badge"
import Card from "./Card";
import { useState } from "react";
import Modal from "./Modal";

function App() {
  function handleClick(title) {
    console.log("button " + title + " clicked!");
  }

  function onDismiss() {
    return alert("Alert dismissed!");
  }

  const [showModal, setShowModal] = useState(false);
  function onClose() {
    return setShowModal(false);
  }

  return (
    <div className="flex flex-col items-center gap-3 m-3 w-full ">
      <h2 className="text-3xl">Alert</h2>
      <Alert color="alert2" icon={<GrAlert />} onDismiss={onDismiss} />
      <Alert color="alert1" icon={<GrCircleAlert />} onDismiss={onDismiss} />

      <div>
       
      </div>
      <div>
       <h2 className="text-3xl text-center m-3">Buttons</h2>
        <Button
          onClick={handleClick}
          title="Button 1"
          color="primary"
          size="small"
        />
        <Button
          onClick={handleClick}
          title="Button 2"
          color="secondary"
          size="medium"
        />
        <Button
          onClick={handleClick}
          title="Button 3"
          size="medium"
          disabled
        />
      </div>
      <div>
      <h2 className="text-3xl text-center m-3">Badges</h2>
        <Badge
          title="Badge 1"
          color="badge1"
          size="s"
          icon={<BsBadge4KFill />}
        />
        <Badge
          title="Badge 2"
          color="badge2"
          size="m"
          icon={<BsBadge8KFill />}
        />
      </div>
      <div>
      <h2 className="text-3xl text-center m-3">Cards</h2>
        <Card
          href={"https://unsplash.com/photos/IqImPD2lMtk"}
          imgAlt="Purely decorative image of a mountain with a tree in the foreground"
          imgSrc="/Image1.jpg"
        />
      </div>
      <h2 className="text-3xl text-center m-3">Modal</h2>
      <button
          className=" text-white bg-black hover:bg-stone-800 font-medium rounded-xl p-3"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>

        <Modal show={showModal} size="medium" onClose={onClose} />
    </div>
  );
}

export default App;
