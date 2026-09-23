import React, { useRef, useState } from 'react'
import { assets } from '../assets/assets'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jyet2py', 'template_angfsto', form.current, {
        publicKey: 'JlDS7YK-gZwoUOeVS',
      })
      .then(
        (result) => {
          console.log(result.text)
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      // Reset form
      setFormData({
        user_name: '',
        user_email: '',
        message: '',
      });

      // Show success message
      setSuccess(true)
      // Optionally hide success message after some time
      setTimeout(() => setSuccess(false), 5000);

  };




  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto py-10 md:py-16">

    {/* Main Contact Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

      {/* ================= CONTACT FORM ================= */}
      <div className="flex flex-col">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-600">
            Get in touch.
          </h1>

          <h2 className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Want to collaborate, talk tech, or just say hello?
            <br className="hidden sm:block" />
            Drop me a message below :)
          </h2>
        </div>

        {/* Contact Form */}
        <div className="w-full bg-white p-5 sm:p-8 rounded-lg shadow-md border border-gray-300">
          <form
            className="space-y-6"
            ref={form}
            onSubmit={sendEmail}
          >

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="appearance-none block w-full mt-1 px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="appearance-none block w-full mt-1 px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-sm border border-gray-300 rounded-md p-3 resize-y"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Send Message
              </button>

              {success && (
                <p className="text-green-600 mt-3 text-sm text-center">
                  Message sent successfully!
                </p>
              )}
            </div>

          </form>
        </div>
      </div>


      {/* ================= DIGITAL FOOTPRINTS ================= */}
      <div className="flex flex-col justify-center">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-600">
            My digital footprints
          </h1>

          <h2 className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Where I share code, thoughts, and creative sparks!
          </h2>
        </div>


        {/* ================= GITHUB ================= */}
        <div className="flex justify-center mt-4 sm:mt-8">
          <a
            href="https://github.com/narasi15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:scale-105 transition-transform duration-200 max-w-full"
          >

            {/* GitHub Icon */}
            <svg
              className="w-8 h-8 flex-shrink-0 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"
              />
            </svg>

            <span className="text-blue-600 underline text-sm sm:text-lg break-all">
              https://github.com/narasi15
            </span>

          </a>
        </div>


        {/* ================= LINKEDIN ================= */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.linkedin.com/in/priyanka-narasi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 hover:scale-105 transition-transform duration-200 max-w-full"
          >

            {/* LinkedIn Icon */}
            <svg
              className="w-8 h-8 flex-shrink-0 text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.09 107 0 82.91 0 53.56 0 24.21 24.09 0 53.84 0s53.84 24.21 53.84 53.56c0 29.35-24.09 53.44-53.84 53.44zM447.9 448h-92.68V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89V184h1.3c12.4-23.5 42.6-48.3 87.7-48.3 93.8 0 111.2 61.8 111.2 142.3V448z" />
            </svg>

            <span className="text-blue-600 underline text-sm sm:text-lg break-all">
              https://www.linkedin.com/in/priyanka-narasi/
            </span>

          </a>
        </div>

      </div>

    </div>
  </div>
</div>
  )
}

export default Contact
