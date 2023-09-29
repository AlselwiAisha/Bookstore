import { useState, useEffect } from 'react';
import './Styles/zeplin.css';

const Zeplin = () => {
  const [rendom, setRundem] = useState();
  const getNumber = () => Math.floor(Math.random() * 100);

  useEffect(() => {
    setRundem(getNumber);
  }, []);

  return (
    <div className="zeplin">
      <div className="oval1">
        <div className="Oval-2" />
        <div className="comlt">
          <span className="-Percent-Complete">
            {rendom}
            %
          </span>
          <span className="Completed ">
            Completed
          </span>
        </div>
      </div>
      <div className="Line-2" />
      <div className="ovel2">
        <span className="Current-Chapter upper">
          Current Chapter
        </span>
        <span className="Current-Lesson ">
          Chapter 17
        </span>
        <div className="Rectangle-2">
          <span className="Update-progress upper">
            Update progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default Zeplin;
