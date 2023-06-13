import { useEffect } from "react";

const Help = () => {


  useEffect(() => {
    document.title = "Help | Airbnb clone";
  }, []);

  return (
    <>
      <div>Help</div>
    </>
  );
};

export default Help;
