import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Form } from "react-router-dom";

export const ContactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(data);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4
      ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
    >
      <div
        className={`w-full max-w-lg rounded-2xl shadow-lg p-8
        ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">📩 Contact Us</h1>

        <Form className="space-y-5" method="POST" action="/contact">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className={`w-full rounded-lg px-4 py-2 outline-none border
              ${
                isDark
                  ? "bg-gray-700 border-gray-600 focus:border-red-500"
                  : "bg-gray-50 border-gray-300 focus:border-red-500"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`w-full rounded-lg px-4 py-2 outline-none border
              ${
                isDark
                  ? "bg-gray-700 border-gray-600 focus:border-red-500"
                  : "bg-gray-50 border-gray-300 focus:border-red-500"
              }`}
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              className={`w-full rounded-lg px-4 py-2 outline-none border resize-none
  ${
    isDark
      ? "bg-gray-700 border-gray-600 focus:border-red-500"
      : "bg-gray-50 border-gray-300 focus:border-red-500"
  }`}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            Send Message
          </button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
