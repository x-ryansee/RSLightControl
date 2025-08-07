function Services() {
  return (
    <div className="min-h-screen bg-dark text-white px-8 py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-light mb-4 drop-shadow-md">Lighting Control Solutions</h1>
        <p className="text-gray-400 text-lg mb-20 max-w-2xl mx-auto">
          Designed to integrate seamlessly into the architectural and emotional rhythm of your home.
        </p>

        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Lutron System Programming</h2>
            <p className="text-gray-300">
              Expert configuration for RA2, RA3, and RA4 systems — including scene control, occupancy sensors, and daylight dimming.
            </p>
          </div>
          <div className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Lighting Layout Design</h2>
            <p className="text-gray-300">
              Thoughtful lighting plans for homes and architectural spaces. We focus on ambiance, mood, and intention.
            </p>
          </div>
          <div className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Smart System Integration</h2>
            <p className="text-gray-300">
              Integrations with HomeKit, Alexa, Google Home, and sensor-based automation — tailored to your space.
            </p>
          </div>
        </div>

        <p className="mt-24 text-gray-500 text-sm">
          *All installations are coordinated with licensed electricians to ensure compliance and safety.
        </p>
      </div>
    </div>
  );
}

export default Services;
