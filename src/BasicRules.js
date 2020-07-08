import { basicRules } from "./data";

const BasicRules = () => {
  return (
    <>
      <div className="basic-rules-floater">
        <p>רמת הסיכון תלויה במידת ההקפדה על הכללים</p>
        <ol>
          {basicRules.map((rule, index) => (
            <li>
              <span>{index + 1}.</span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </div>
      <style jsx>{`
        .basic-rules-floater {
          padding: 60px;
          position: absoulte;
          bottom: 0px;
          left: 0px;
          background-color: rgba.(244,98,93,0.5);
          display: flex;
          flex-direction:column;˝
        }
      `}</style>
    </>
  );
};

export default BasicRules;
