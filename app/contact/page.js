import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-6">
          We would love to hear from you! Whether you have a question, feedback, or just want to
          say hello, feel free to get in touch with us using the contact form below.
        </p>

        <form >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="text-lg font-bold mb-2 block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-bold mb-2 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="text-lg font-bold mb-2 block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
