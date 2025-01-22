import WhatsAppImg from "../Property_Listing/Components/images/WhatsApp.svg";
function ContactUs() {
  return (
    <div className="flex justify-center items-center bg-black p-12 gap-3  ">
      <div className="text-white text-2xl font-semibold">
        Need help? Contact us
      </div>
      <img src={WhatsAppImg} alt={WhatsAppImg} className="w-6 h-6" />
    </div>
  );
}

export default ContactUs;
