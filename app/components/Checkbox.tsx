import { useCallback, useEffect, useState } from "react";

type CheckboxProps = {
  name?: string;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
  className?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const [checked, setChecked] = useState(props.value ?? props.defaultValue ?? false);

  useEffect(() => {
    if (props.value !== undefined) {
      setChecked(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    props.onChange?.(checked);
  }, [checked]);

  return (
    <div className="relative w-6 h-6">
      <div
        className={`relative flex justify-center items-center w-6 h-6 border border-solid rounded-md ${checked ? 'border-blue-700 bg-blue-700' : 'border-gray-300 bg-white'}`}
      >
        {checked && <div className="bg-white w-3 h-3 rounded-sm" />}
      </div>
      <input
        type="checkbox"
        name={props.name}
        checked={checked}
        onChange={(e) => setChecked(e.currentTarget.checked)}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
  )
};
