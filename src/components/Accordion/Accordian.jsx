// we need single selection and multiple selection

import { useState } from "react";
import data from "./data";
import styles from "./Accordion.module.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndex0fCurrentId = copyMultiple.indexOf(getCurrentId);
    console.log(findIndex0fCurrentId);
    if (findIndex0fCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndex0fCurrentId, 1);

    setMultiple(copyMultiple);
  }

  console.log(selected);

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordian}>
        <h2 className={styles.heading}>Accordian</h2>
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {enableMultiSelection ? "Disable MultiSelection" : "Enable MultiSelction"}
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className={styles.item}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className={styles.title}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className={styles.content}>{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className={styles.content}>{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className={styles.content}>{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}
