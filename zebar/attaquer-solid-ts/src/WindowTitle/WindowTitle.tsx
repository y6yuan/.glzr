import "./style.css";
import { Component } from "solid-js";
import { GlazeWmOutput } from "zebar";

interface WindowTitleProps {
  glazewm: GlazeWmOutput;
}

const WindowTitle: Component<WindowTitleProps> = (props) => {
  return (
    <>
      {props.glazewm?.focusedWorkspace.children.map(
        (item) =>
          "title" in item &&
          item.hasFocus && (
            <div class="current-window">
              {item.title &&
                (item.title.length > 50
                  ? item.title.slice(0, 50) + "..."
                  : item.title)}
            </div>
          ),
      )}
    </>
  );
};

export default WindowTitle;
