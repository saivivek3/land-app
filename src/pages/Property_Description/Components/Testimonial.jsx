// import Box from "../../Common/box";
import { testimonials } from '@/data/data';

function Testimonial() {
  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-12 xl:mx-20 2xl:mx-24">
        <div className="text-center mt-12">
          <div className="font-bold text-lg">Our reviews</div>
          <div className="text-gray-500">
            Hear first-hand from our incredible community of customers.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id}>
              <div className="flex flex-col items-center text-center border border-gray-300 p-4 w-full rounded-lg">
                <img
                  src={testimonial.companyLogo}
                  alt="Company Logo"
                  className="mb-4 w-1/2 object-cover rounded-md"
                />
                <div className="max-w-[320px] text-sm text-gray-700">
                  {testimonial.content}
                </div>
                <div className="mt-8 flex gap-3 items-center">
                  <img
                    src={testimonial.avatarImg}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <div className="font-semibold">{testimonial.name}</div>
                      <img
                        src={testimonial.verified}
                        alt="Verified"
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-b border-gray-300 mt-4"></div>
      <div className="border-b border-gray-300 mt-8"></div>
    </>
  );
}

export default Testimonial;
