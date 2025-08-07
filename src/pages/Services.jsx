function Services() {
  return (
    <div className="min-h-screen bg-dark text-white px-8 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-light mb-4">What I Offer</h1>
        <p className="text-gray-400 text-lg mb-12">
          Precision programming and lighting design for modern, elevated living.  
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-accent p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Lutron Programming</h2>
            <p className="text-gray-300">
              Full scene setup, keypads, occupancy sensors, and time-based lighting controls using RA2, RA3, and RA4 systems.
            </p>
          </div>
          <div className="bg-accent p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Lighting Design</h2>
            <p className="text-gray-300">
              Layout planning, mood lighting concepts, and zone separation with an emphasis on minimalism and usability.
            </p>
          </div>
          <div className="bg-accent p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Smart Integration</h2>
            <p className="text-gray-300">
              Support for integrating with smart home systems like HomeKit, Alexa, or custom triggers based on your lifestyle.
            </p>
          </div>
        </div>

        <p className="mt-16 text-gray-500 text-sm">
          *Note: I do not handle electrical installations. I coordinate directly with licensed electricians to implement your design.
        </p>
      </div>
    </div>
  );
}

export default Services;
