import data from "./data";
<br />;
const Risk = () => {
  return (
    <>
      <div className="indicator">
        <span>רמת סיכון נמוכה</span>
        <span>רמת סיכון בינונית</span>
        <span>רמת סיכון גבוהה</span>
      </div>
      <div className="activities">
        {data.map((column, index) => (
          <div className={`activity-column ${index > 5 ? "white" : ""}`}>
            {column.map((activity) => (
              <span className="activity">{activity}</span>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        .indicator {
          color: var(--primary-text);
          padding: 5px 10px;
          flex: auto;
          flex-direction: column;
          display: flex;
          justify-content: space-around;
          font-size: 28px;
          font-weight: 700;

          flex-basis: 5%;
        }
        .activities {
          font-size: 22px;
          text-align: center;
          flex: auto;
          flex-basis: 95%;
        }
        .activity-column {
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--purple);
          padding: 0px 5px;
        }
        .activity {
          margin-top: 20px;
          display: block;
        }
        @media only screen and (min-width: 1020px) {
          .indicator {
            flex-direction: row;
            border-bottom: 30px;
          }
          .activity-column {
            border: none;
            padding: 0px 20px;
            border-left: 1px solid var(--purple);
            color: var(--purple);
          }
          .activity-column:last-child {
            border: none;
          }
          .activities {
            display: flex;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Risk;
