import { MinusCirlce, AddCircle } from "iconsax-react";

interface IncrementProps {
  value: string | number;
  onSubtract: () => void;
  onAdd: () => void;
}

export default function Increment({
  value,
  onSubtract,
  onAdd,
}: IncrementProps) {
  return (
    <div className={`flex items-center gap-3`}>
      <button
        onClick={onSubtract}
        className={`disabled:text-gray-300 hover:text-primary active:text-primary`}
        disabled={value === 0}
      >
        <MinusCirlce className={`w-5 h-5  `} />
      </button>
      {value}
      <button
        onClick={onAdd}
        className={`hover:text-primary active:text-primary`}
      >
        <AddCircle className={`w-5 h-5`} />
      </button>
    </div>
  );
}
