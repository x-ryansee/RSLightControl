function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-white px-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
          Smart Lighting. <br className="hidden md:block" />
          Beautifully Programmed.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Lighting control and scene programming for modern Los Angeles homes.
          Certified in Lutron systems. Designed for elegance.
        </p>
        <a
          href="/services"
          className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-full"
        >
          Explore Services
        </a>
      </div>
    </div>
  );
}

export default Home;
