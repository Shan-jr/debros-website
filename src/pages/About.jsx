import React from 'react';

const About = () => {
  return (
    <div className="text-white bg-gray-950">
      {/* Hero */}
      <section className="px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl text-red-600 md:text-6xl font-playwrite">
          About DeBROS
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 md:text-xl font-outfit">
          Passionate innovators in exhibition and event experiences across the UAE.
        </p>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-12 bg-gray-900 md:px-20 md:py-20">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">Who We Are</h2>
        <p className="max-w-4xl mx-auto text-base text-center text-gray-300 md:text-lg">
          DeBROS is a creative exhibition and event company based in Dubai, UAE. With years of industry experience, we specialize in designing and building stunning exhibition stands, planning corporate events, and developing powerful visual branding experiences. Our team is fueled by innovation, detail, and commitment to making your brand stand out.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-12 md:px-20 md:py-20">
        <h2 className="mb-8 text-3xl font-semibold text-center text-red-500 md:text-4xl">Why Choose DeBROS?</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="p-6 text-center bg-gray-800 rounded-xl">
            <h3 className="mb-2 text-xl font-semibold">Tailored Solutions</h3>
            <p className="text-sm text-gray-300">Every client gets a unique approach crafted to their brand’s goals.</p>
          </div>
          <div className="p-6 text-center bg-gray-800 rounded-xl">
            <h3 className="mb-2 text-xl font-semibold">Creative Excellence</h3>
            <p className="text-sm text-gray-300">We push boundaries to bring your brand to life through design and experience.</p>
          </div>
          <div className="p-6 text-center bg-gray-800 rounded-xl">
            <h3 className="mb-2 text-xl font-semibold">End-to-End Service</h3>
            <p className="text-sm text-gray-300">From ideation to execution, we handle everything in-house.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
