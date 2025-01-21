import AgentOne from "./images/agentOne.svg";
import WhatsApp from "./images/WhatsApp.svg";
import AgentTwo from "./images/AgentTwo.svg";
import AgentThree from "./images/AgentThree.svg";
import AgentReusable from "@/components/AgentReusable";

function Agents() {
  const agentList = [
    {
      name: "Manikanta",
      location: "Vikarabad",
      listings: 140,
      image: AgentOne,
      contactImage: WhatsApp,
    },
    {
      name: "Rajesh",
      location: "Hyderabad",
      listings: 120,
      image: AgentTwo,
      contactImage: WhatsApp,
    },
    {
      name: "Sandeep",
      location: "Secundrabad",
      listings: 95,
      image: AgentThree,
      contactImage: WhatsApp,
    },
  ];
  return <AgentReusable agents={agentList} />;
}

export default Agents;
