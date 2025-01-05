
const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-base-100 text-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-Montserrat font-bold text-primary text-center">
            Contact Information
          </h2>
  
          {/* Contact Details */}
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-envelope text-xl text-primary"></i>
                <a href="mailto:brightphero009@gmail.com" className="text-lg text-neutral">
                  brightphero009@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-phone-alt text-xl text-primary"></i>
                <span className="text-lg text-neutral">+8801791098041</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i className="fab fa-whatsapp text-xl text-green-500"></i>
                <a
                  href="https://wa.me/+8801791098041"
                  className="text-lg text-neutral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="mt-8">
            <h3 className="text-2xl font-Montserrat font-semibold text-primary text-center">
              Send Me a Message
            </h3>
            <form
              action="https://formspree.io/f/maykqjwb"
              method="POST"
              className="w-full max-w-lg mx-auto mt-6 bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 mt-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 mt-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-3 mt-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-primary text-white font-semibold rounded-md hover:bg-green-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Contact;