import classes from "./TestiSlider.module.css";
import Image from "next/image";
import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
// import p4 from "../../images/p4.webp";

import coma from "../../images/comas.svg";

const TestimonialsSlider = () => {
  return (
    <div className="my-16 overflow-hidden">
      <div className={classes.imagecontainer}>
        <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 pt-14 pb-6 overflow-hidden">
          <Image
            src={c1}
            alt="Picture of Slack logo"
            className="rounded-full"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “Krigen.ai automated aspects of my business that I never thought could be automated. I've also saved a significant amount of money on outsourced work.”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Emily Johnson</h1>
                <h3 className="text-gray-600">Chief Executive Officer (CEO)</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 pb-6 pt-14">
          <Image
            src={c2}
            alt="Picture of Slack logo"
            className="rounded-full"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “Automating all my business operations with this software has been a game changer. It's user-friendly and incredibly effective.”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Michael Smith</h1>
                <h3 className="text-gray-600">Operations Manager</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 pt-14 pb-6">
          <Image
            src={c3}
            alt="Picture of Slack logo"
            className="rounded-full"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “The team at Krigen.ai has greatly streamlined how we operate. Their communication was top-notch and we're very satisfied!”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">David Thompson</h1>
                <h3 className="text-gray-600">Chief Technology Officer (CTO)</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex gap-14 w-11/12 bg-slate-50 rounded-3xl px-4 py-14">
          <Image
            src={p4}
            alt="Picture of Slack logo"
            width={150}
            height={70}
            quality={100}
            sizes={"100vw"}
          />
          <div className="flex flex-col gap-16">
            <p className="italic font-semibold text-xl">
              “The SproutCloud team has completely streamlined our business
              operations. Communication was excellent and overall we are very
              pleased!”
            </p>
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Zach Lovett</h1>
                <h3 className="text-gray-600">Online Bussiness Owner</h3>
              </div>
              <Image
                src={coma}
                alt="Picture of Slack logo"
                width={30}
                height={50}
                quality={100}
                sizes={"100vw"}
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
