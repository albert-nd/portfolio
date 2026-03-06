import { useState } from "react";
import { TfiLinkedin } from "react-icons/tfi";
import { SiGithub } from "react-icons/si";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Connect = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Your message has been sent!");
    setShowModal(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-12 my-12">
        {/* Left */}
        <div className="w-full md:w-1/2 text-black dark:text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            LET'S CONNECT
          </h2>

          <p>
            Say hello to{" "}
            <span className="underline decoration-yellow-500">
              albertndukwe36@gmail.com
            </span>
          </p>

          <p className="mt-2">
            For more information, here’s my{" "}
            <span className="underline decoration-yellow-500">resume</span>
          </p>

          <div className="flex gap-3 mt-6">
            {[TfiLinkedin, SiGithub, BsFacebook, BsTwitterX, RiInstagramFill].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="w-8 h-8 p-1 bg-gray-900 text-yellow-400 rounded-full hover:text-yellow-600 transition"
                />
              )
            )}
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white border border-gray-400 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:text-white border border-gray-400 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-600 px-5 py-2 rounded-full font-medium hover:bg-black hover:text-yellow-500 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-green-600 font-medium mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg w-[90%] max-w-sm">
            <h5 className="text-lg font-semibold mb-2">
              Feedback Submitted
            </h5>
            <p className="mb-4">
              Thank you for reaching out. We'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-yellow-600 px-4 py-2 rounded-full hover:bg-black hover:text-yellow-500 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Connect;
