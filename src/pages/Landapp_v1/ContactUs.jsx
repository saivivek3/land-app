import WhatsAppImg from '../Property_Listing/Components/images/WhatsApp.svg';

function ContactUs() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center bg-black p-6 sm:p-12 gap-3">
      <div className="text-white text-xl sm:text-2xl font-semibold text-center sm:text-left">
        Need help? Contact us
      </div>
      <img
        src={WhatsAppImg}
        alt={WhatsAppImg}
        className="w-8 h-8 sm:w-6 sm:h-6 cursor-pointer"
      />
    </div>
  );
}

export default ContactUs;
