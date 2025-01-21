function SelectInput({ label, options, id }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        id={id}
        aria-label={label}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        {/* Placeholder text inside the select */}
        <option value="" disabled selected>
          {`Select ${label}`}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function FindYourLand() {
  const Locations = ["Shamshabad", "Secundrabad", "Tolichowki"];
  const Districts = ["Hyderabad", "Karim Nagar", "Medak"];
  const States = ["Telangana", "Karnataka", "Maharashtra"];

  return (
    <div className="flex justify-center mt-10 mx-24">
      <div className="border-2 border-gray-300 shadow-xl rounded-lg p-4 w-full max-w-6xl">
        <div className="flex gap-4">
          {/* Pass label prop along with options and id */}
          <SelectInput label="Location" options={Locations} id="location" />
          <SelectInput label="District" options={Districts} id="district" />
          <SelectInput label="State" options={States} id="state" />

          {/* Search Button with consistent padding */}
          <button className="w-full md:w-auto border border-gray-300 rounded-md bg-black text-white py-2 px-4 mt-6 md:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindYourLand;
