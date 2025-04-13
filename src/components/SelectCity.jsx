import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

const states = ["Нью-Йорк"]; //, "Калифорния", "Флорида", "Техас", "Вашингтон"

export default function CustomSelect() {
  const [selectedState, setSelectedState] = useState(states[0]);

  return (
    <div className="w-[220px]">
      <Listbox value={selectedState} onChange={setSelectedState}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-full bg-[#11455e] py-2 pl-4 pr-10 text-left text-white text-lg focus:outline-none">
            <span className="block truncate">{selectedState}</span>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-[#11455e] py-1 text-base shadow-lg ring-1 ring-black/20 focus:outline-none z-50">
            {states.map((state) => (
              <Listbox.Option
                key={state}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-[#0d3d6d]" : "text-white"
                  }`
                }
                value={state}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {state}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-3 flex items-center text-white">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
