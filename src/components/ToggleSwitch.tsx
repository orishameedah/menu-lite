import { useState } from "react";

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`${
        enabled ? "bg-green" : "bg-gray-300"
      } relative inline-flex h-6 w-11 items-center rounded-full  cursor-pointer transition-colors duration-300`}
    >
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
      />
    </div>
  );
};

export default ToggleSwitch;
