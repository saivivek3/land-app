import cn from "@/lib/cn";
import { Pencil } from "lucide-react";
import Input from "@/components/ui/Input";
import { useState } from "react";
import useFormHook from "@/hooks/useFormHook";
import Button from "@/components/ui/Button";

// const header = (
//   <div className="flex items-center justify-between mb-6">
//     <h1 className="text-xl font-semibold">LandApp</h1>
//     <div className="w-8 h-8 bg-gray-200 rounded-full" />
//   </div>
// );

const CreatePropertyForm = () => {
  const [property, setProperty] = useState({
    propertyType: "",
    propertyCategory: "",
    role: "",
  });
  // const { register, handleSubmit } = useFormHook();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-8">
          <h2 className="text-3xl font-[700]">
            Sell your <span className="text-brandTertiary">Property</span>
          </h2>
          <p className=" mt-2 text-xl text-black ">
            Get your property listed in minutes with an easy-to-use
            <br />
            for <span className="text-primary font-[700] text-xl">free</span>
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">
              ✓
            </div>
            <span className="text-primary text-base">List Your Property</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">
              ✓
            </div>
            <span className="text-primary text-base">Get Noticed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs">
              ✓
            </div>
            <span className="text-primary text-base">Seal the Deal</span>
          </div>
        </div>
      </div>
      <div className="space-y-6 border  shadow-sm  rounded-lg p-4">
        <div>
          <label className="block  text-xl font-[600] mb-2">You are</label>
          <div className="flex gap-2 text-primary text-sm">
            {["User", "Owner", "Agent", "Other"].map((option) => (
              <button
                key={option}
                onClick={() => setProperty({ ...property, role: option })}
                className={cn(
                  "px-4 py-2 rounded-full border border-bQuinary",
                  property.role === option ? "bg-blightMode " : ""
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block  text-xl font-[600] mb-2 ">
            You are looking to
          </label>
          <div className="flex gap-2">
            {["Agriculture", "Commercial"].map((option) => (
              <button
                key={option}
                onClick={() =>
                  setProperty({ ...property, propertyType: option })
                }
                className={cn(
                  "px-4 py-2 rounded-full border border-bQuinary",
                  property.propertyType === option ? "bg-blightMode " : ""
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block  text-xl font-[600] mb-2">
            You are looking to
          </label>
          <div className="flex gap-2">
            {["Land", "Industry", "Plot", "Other"].map((option) => (
              <button
                key={option}
                onClick={() =>
                  setProperty({ ...property, propertyCategory: option })
                }
                className={cn(
                  "px-4 py-2 rounded-full border border-bQuinary",
                  property.propertyCategory === option ? "bg-blightMode " : ""
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <label className="block text-xl font-semibold mb-2">
          Your Contact number for buyer to reach
        </label>

        <div className="flex items-center gap-2 justify-between    border border-[#E2E4E5]  rounded-lg px-4">
          <div className="px-1 py-2">
            <p className="text-base font-semibold text-[#242426]">
              +91 9966132599
            </p>
            <p className="text-sm text-[#575F6E] ">Registered number</p>
          </div>
          <Pencil className=" w-4 h-4 text-blue-500" />
        </div>

        <div className="mt-3 flex items-center  gap-1">
          <p className="text-base text-[#242426]">
            Are you a registered user? <a href="#">Login</a>
          </p>
        </div>

        <Button className="bg-primary text-white text-base font-semibold hover:bg-primary/55">
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default CreatePropertyForm;
