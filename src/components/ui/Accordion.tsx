import { useState, useRef } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  additionalDesc?: string;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
};

const Accordion: React.FC<Props> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const {
    children,
    title,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
  } = props;
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="accordion">
      <div className="title" onClick={handleClick}>
        <div className={`title__content`}>
          <span>{title}</span>
          <i className={`fa-regular fa-angle-down ${open ? "rotate" : ""}`} />
        </div>
      </div>
      <div
        ref={contentRef}
        className={`accordion__content ${open ? "open" : ""}`}
        style={{
          height: open ? contentRef.current?.scrollHeight : 0,
          padding: open
            ? `${paddingTop + ""}px ${paddingRight + ""}px ${
                paddingBottom + ""
              }px ${paddingLeft + ""}px`
            : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
