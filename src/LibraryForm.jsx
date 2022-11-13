import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

export default ({ onSubmit }) => {
  const { resetValue, ...task } = useInput("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(task.value);
        resetValue();
      }}
    >
      <div className="inputBox">
        <input {...task} />
        <span>please enter a task above and press enter</span>
        <i></i>
      </div>
    </form>
  );
};
