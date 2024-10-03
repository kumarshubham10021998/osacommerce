import './assets/css/brend.css'; // Import your CSS fileCorrected file name

export const Brand = () => {
  return (
    <section className="max-w-full mx-auto py-8 bg-gray-100 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 w-full flex items-center justify-center p-6">
        <div className="text-center lg:text-left">
          <h1 className="text-black text-3xl font-bold leading-tight pb-6 mx-5">
            One Platform<br />One Source of Truth
          </h1>
          <p className="text-lg font-semibold text-black mx-5">
            Our multi-cloud tech-agnostic platform breaks the data silo across disparate systems and elevates the omnichannel journey like no other.
          </p>
          <p className="text-base text-black mt-4 mx-5">
            AI-powered visibility with a single centralized view allows you to make smarter decisions now—when you need them most.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center p-6 svg-container">
        <object
          data="https://8211470.fs1.hubspotusercontent-na1.net/hubfs/8211470/OSA_one_platform_04-01.svg"
          type="image/svg+xml"
          className="w-full h-auto"
          aria-label="Platform Illustration" // Added accessibility
        />
      </div>
    </section>
  );
};
