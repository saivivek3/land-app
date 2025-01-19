import CheckIconFull from '@/assets/check-circle-full.svg';
import Button from '@/components/ui/Button.jsx';

function CreatePropertyConfirmation() {
  return (
    <div className="flex justify-center  items-center h-screen ">
      <div className="flex flex-col  gap-2 justify-center items-center max-w-[460px] border border-bPrimary shadow-sm rounded-[16px] p-12">
        <img src={CheckIconFull} alt="checkiconfull" className="h-14 w-14" />
        <p className="text-primary text-[18px] font-semibold flex flex-col gap-1 text-center  ">
          Property posted Successfully, your property is{' '}
          <span className="text-center">on way for approval</span>
        </p>
        <p className="text-tertiary text-base ">
          libero, vitae risus amet, turpis Lorem
        </p>
        <div className="flex justify-center">
          <Button
            type="submit"
            className=" bg-primary rounded-lg text-base font-semibold hover:bg-primary/50 px-5 py-2"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreatePropertyConfirmation;
