export default function OptionGroup({
  title,
  required,
  options,
  Onselect,
  extras = [],
}) {
  return (
    <div className="mb-6 border-b pb-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold">{title}</h4>
        {required && (
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            Required
          </span>
        )}
      </div>

      <div className="space-y-3">
        {options.map((opt, i) => {
          const active = extras.some(
            (extra) => extra.label.toLowerCase() === opt.label.toLowerCase(),
          );
          return (
            <div
              key={i}
              className="flex justify-start items-center cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 border ${
                    opt.checkbox ? "rounded" : "rounded-full"
                  } flex items-center justify-center ${
                    active ? "border-orange-500" : ""
                  }`}
                  onClick={() => Onselect({ label: opt.label })}
                />
                <span className="text-sm">{opt.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
