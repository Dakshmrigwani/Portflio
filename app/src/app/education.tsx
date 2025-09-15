import { BoxReveal } from "@/components/magicui/box-reveal";

export default function Education() {
  return (
    <>
      <h1 className="text-xl lg:text-3xl font-bold text-light pt-20 pl-5 pb-20" id="education">
        <BoxReveal>Education</BoxReveal>
      </h1>
      <div className="flex flex-col gap-8 pl-15 pr-15 w-full pb-30">
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <h5 className="text-md lg:text-2xl font-bold text-light ">
              <BoxReveal>
                Global Institute of Technology and Management - (MCA)
              </BoxReveal>
            </h5>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              {" "}
              <BoxReveal>Gurgaon </BoxReveal>
            </h5>
          </div>
          <div>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              <BoxReveal>2025 - 2027</BoxReveal>
            </h5>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <h5 className="text-md lg:text-2xl font-bold text-light ">
              <BoxReveal>University of Lucknow - (BBA)</BoxReveal>
            </h5>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              <BoxReveal>Lucknow</BoxReveal>
            </h5>
          </div>
          <div>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              <BoxReveal>2022 - 2025</BoxReveal>
            </h5>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <h5 className="text-md lg:text-2xl font-bold text-light ">
              <BoxReveal>Vishwanath Academy - (12th)</BoxReveal>
            </h5>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              <BoxReveal>Lucknow</BoxReveal>
            </h5>
          </div>
          <div>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              <BoxReveal>2022</BoxReveal>
            </h5>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <h5 className="text-md lg:text-2xl font-bold text-light ">
              <BoxReveal>Vishwanath Academy - (10th)</BoxReveal>
            </h5>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              <BoxReveal> Lucknow</BoxReveal>
            </h5>
          </div>
          <div>
            <h5 className="text-md lg:text-xl font-bold text-light ">
              <BoxReveal>2020</BoxReveal>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
