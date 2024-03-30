import { useCallback, useEffect, useState } from "react";
import styles from "./checkbox.module.css";
import { ChangeHandler } from "react-hook-form";

type CheckboxProps = {
  name?: string;
  id?: string;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: ChangeHandler;
  className?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const { onChange, name } = props;
  const [checked, setChecked] = useState(props.value ?? props.defaultValue ?? false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
  }, []);

  useEffect(() => {
    if (props.value !== undefined) {
      setChecked(props.value);
    }
  }, [props.value]);

  useEffect(() => {
    onChange?.({ target: { name, checked, value: checked } });
  }, [checked, name, onChange]);

  return (
    <div className="relative w-6 h-6">
      <div
        className={`${styles.checkbox} relative flex justify-center items-center w-6 h-6 border border-solid rounded-md ${checked ? 'border-blue-700 bg-blue-700' : 'border-gray-300 bg-white'}`}
      >
        {checked && <div className="bg-white w-3 h-3 rounded-sm" />}
      </div>
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        checked={checked}
        onChange={handleChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
      />
    </div>
  )
};
