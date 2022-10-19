import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterSelector, removeNote } from "../redux/notes/noteSlice";
export default function Items() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <div className="itemCollector">
      {filter.map((item) => (
        <div
          style={{ backgroundColor: item.color }}
          className="itemContainer"
          key={item.id}
        >
          <button
            className="close"
            onClick={() => dispatch(removeNote(item.id))}
          >
            &#10005;
          </button>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
