export const metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

export default function Contact() {
  return (
      <div className="mt-16 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-4 border-indigo-500 inline-block">
              Contact
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              I’d love to hear from you! Whether you have a question about projects, collaborations, or just want to say hello, feel free to reach out.
          </p>
          <div className="mt-8 space-y-4">
              <p className="text-lg text-gray-800 font-semibold">
                  <span className="text-indigo-500">Email:</span> myemail@example.com
              </p>
              <p className="text-lg text-gray-800 font-semibold">
                  <span className="text-indigo-500">Phone:</span> +1234567890
              </p>
          </div>
          <div className="mt-10">
              <a
                  href="mailto:myemail@example.com"
                  className="inline-block px-8 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
              >
                  Send an Email
              </a>
          </div>
      </div>
  );
}
