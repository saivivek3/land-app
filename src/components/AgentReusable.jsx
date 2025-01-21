// import Button from "../common/Button";
// import AgentOne from "./images/agentOne.svg";
// import WhatsApp from "./images/WhatsApp.svg";
// import AgentTwo from "./images/AgentTwo.svg";
// import AgentThree from "./images/AgentThree.svg";

function AgentReusable({ agents }) {
  return (
    <div className="mx-4 md:mx-20">
      <div className="mt-6 text-lg md:text-xl font-semibold text-center md:text-left">
        Top Agents in Shamshabad, Telengana
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-300 rounded-md p-4 mt-6">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start"
          >
            <div className="flex gap-3 items-center w-full justify-between">
              <div className="flex gap-3 items-center">
                <img src={agent.image} alt={agent.name} className="w-10 h-10" />
                <div className="flex flex-col">
                  <span className="font-bold">{agent.name}</span>
                  <span className="text-sm">{`${agent.location} ${agent.listings} Listings`}</span>
                </div>
              </div>
              <img
                src={agent.contactImage}
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </div>
            <div className="mt-4 w-full">
              <button className="w-full rounded-md py-2 text-gray-300 text-sm bg-black">
                Contact Partner
              </button>
            </div>
          </div>
        ))}

        {/* <div className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center w-full justify-between">
            <div className="flex gap-3 items-center">
              <img src={AgentTwo} alt={AgentTwo} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold">Manikanta</span>
                <span className="text-sm">Vikarabad 140 Listings</span>
              </div>
            </div>
            <img src={WhatsApp} alt={WhatsApp} className="w-6 h-6" />
          </div>
          <div className="mt-4 w-full">
            <Button
              bg="bg-black"
              textSize="sm"
              text="text-gray-300"
              className="w-full rounded-md py-2"
            >
              Contact Partner
            </Button>
          </div>
        </div>
        <div className="border border-gray-500 p-4 rounded-md flex flex-col items-center md:items-start">
          <div className="flex gap-3 items-center w-full justify-between">
            <div className="flex gap-3 items-center">
              <img src={AgentThree} alt={AgentThree} className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold">Manikanta</span>
                <span className="text-sm">Vikarabad 140 Listings</span>
              </div>
            </div>
            <img src={WhatsApp} alt={WhatsApp} className="w-6 h-6" />
          </div>
          <div className="mt-4 w-full">
            <Button
              bg="bg-black"
              textSize="sm"
              text="text-gray-300"
              className="w-full rounded-md py-2"
            >
              Contact Partner
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AgentReusable;
