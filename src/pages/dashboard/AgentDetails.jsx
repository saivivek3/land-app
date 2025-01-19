import { MoreVerticalIcon, Calendar, ChevronRight } from 'lucide-react';

function AgentDetails() {
  return (
    <>
      <div className="flex justify-between items-center p-4 relative">
        <h2 className="text-primary font-semibold text-base">
          Lead Management
        </h2>
        <MoreVerticalIcon size="16px" className="text-tertiary" />
      </div>
      <div className="h-[1px] w-full bg-bSecondary"></div>
      {/* appointment */}
      <div className="grid grid-cols-2 gap-2 m-4 relative">
        <div className="flex shadow-sm border border-bPrimary bg-brandPrimary p-4 rounded-lg gap-4 ">
          <div className="bg-white p-4 flex items-center justify-center rounded-lg shadow-sm ">
            <Calendar className="h-4 w-4" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-secondary">
              Appointment with Ravi Kumar
            </p>
            <p className="text-tertiary  text-xs"> 6th Dec 4:00 PM</p>
          </div>
        </div>
        <div className="flex shadow-sm border border-bPrimary bg-brandPrimary p-4 gap-4 rounded-lg">
          <div className="bg-white p-4 flex items-center justify-center rounded-lg shadow-sm ">
            <Calendar className="h-4 w-4" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-secondary">
              Appointment with Ravi Kumar
            </p>
            <p className="text-tertiary  text-xs"> 6th Dec 4:00 PM</p>
          </div>
        </div>
        <div className="max-w-6 absolute -right-7 bottom-6 cursor-pointer  ">
          <ChevronRight />
        </div>
      </div>
    </>
  );
}

export default AgentDetails;
