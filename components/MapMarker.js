import { useState, useEffect } from "react";
const MapItem = ({ item }) => {
  const [checked, setChecked] = useState(item.done);

  useEffect(() => {
    if (localStorage.getItem(item.id) !== null)
      setChecked(JSON.parse(localStorage.getItem(item.id)));
  }, []);

  useEffect(() => {
    localStorage.setItem(item.id, JSON.stringify(checked));
  }, [checked]);

  return (
    <>
      <div className="Map-item">
        <div className="Map-item-lat">{item.lat}</div>
        <div className="Map-item-lng">{item.lng}</div>
      </div>
    </>
  );
};
export default MapItem;
