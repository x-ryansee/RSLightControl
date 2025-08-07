function Contact() {
  return (
    <div className="min-h-screen bg-dark text-white px-8 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-5xl font-light mb-4 drop-shadow-md">Get in Touch</h1>
        <p className="text-gray-400 text-lg mb-12">
          Begin your smart lighting project today. We respond within 24 hours.
        </p>

        <form
          action="mailto:your@email.com"
          method="POST"
          encType="text/plain"
          className="space-y-6 text-left"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-4 rounded-md bg-accent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-4 rounded-md bg-accent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              className="w-full p-4 rounded-md bg-accent text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-500">
          Or email us directly at <a href="mailto:your@email.com" className="underline">your@email.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
