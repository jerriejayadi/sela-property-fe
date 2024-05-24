"use client";
import { useState } from "react";

interface SortModalProps {
  value?: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (_args: string) => void;
}

export default function SortModal({
  value,
  open,
  onClose,
  onSubmit,
}: SortModalProps) {
  const [selected, setSelected] = useState<string>(value ?? "");
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0  h-screen justify-center z-40  overflow-y-auto ${
        open ? " bg-black bg-opacity-50 visible " : "bg-transparent invisible"
      } transition-all duration-500`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`fixed  w-full bottom-0 bg-white rounded-t-xl text-black p-5 transition-all duration-500 ${
          open ? "-translate-y-0  " : "translate-y-full "
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between`}>
          <div className={`font-lato font-bold text-2xl`}>Sort</div>
          <button
            onClick={() => {
              setSelected("");
            }}
            className={`text-primary active:underline`}
          >
            Reset
          </button>
        </div>
        {/* content */}
        <div className={`divide-y mt-5`}>
          <div className={`flex items-center justify-between py-3`}>
            <div>Ascending</div>
            <div>
              <input
                onChange={() => {
                  setSelected("asc");
                }}
                checked={selected === `asc`}
                className={`w-5 h-5 accent-primary`}
                type={`radio`}
                value={`desc`}
              />
            </div>
          </div>
          <div className={`flex items-center justify-between py-3`}>
            <div>Descending</div>
            <div>
              <input
                onChange={() => {
                  setSelected("desc");
                }}
                checked={selected === "desc"}
                className={`w-5 h-5 accent-primary`}
                type={`radio`}
                value={`desc`}
              />
            </div>
          </div>
          <button
            onClick={() => {
              onSubmit(selected);
            }}
            className={`w-full bg-primary text-white py-2 rounded-3xl mt-3 `}
          >
            Urutkan
          </button>
        </div>
      </div>
    </div>
  );
}
