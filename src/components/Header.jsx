import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes, addSearch } from "../redux/notes/noteSlice";
import Items from "./Items";

export default function Header() {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const [sspan, setSspan] = useState();
  const addNote = () => {
    if (color && note) {
      dispatch(addNotes({ note, color }));
      setNote("");
    }
  };
  const colorSetter = (color, id) => {
    setColor(color);
    setSspan(id);
  };
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => dispatch(addSearch(e.currentTarget.value))}
        />
      </div>
      <div className="notes">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your note here..."
          spellCheck={false}
          value={note}
          onChange={(e) => setNote(e.currentTarget.value)}
        ></textarea>
        <div className="colorsandetc">
          <div className="left">
            <button
              className="color"
              style={{ backgroundColor: "#f06292" }}
              onClick={() => colorSetter("#f06292", 1)}
            >
              <span>{sspan == 1 && "✓"}</span>
            </button>
            <button
              className="color"
              style={{ backgroundColor: "#ba68c8" }}
              onClick={() => colorSetter("#ba68c8", 2)}
            >
              <span>{sspan == 2 && "✓"}</span>
            </button>
            <button
              className="color"
              style={{ backgroundColor: "#ffd54f" }}
              onClick={() => colorSetter("#ffd54f", 3)}
            >
              <span>{sspan == 3 && "✓"}</span>
            </button>
            <button
              className="color"
              style={{ backgroundColor: "#4fc3f7" }}
              onClick={() => colorSetter("#4fc3f7", 4)}
            >
              <span>{sspan == 4 && "✓"}</span>
            </button>
            <button
              className="color"
              style={{ backgroundColor: "#aed581" }}
              onClick={() => colorSetter("#aed581", 5)}
            >
              <span>{sspan == 5 && "✓"}</span>
            </button>
          </div>
          <div className="right">
            <button onClick={() => addNote()}>Add</button>
          </div>
        </div>
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
}
