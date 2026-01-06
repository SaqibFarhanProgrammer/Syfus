import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

const Contact: React.FC = () => {
  const successRef = useRef<HTMLDivElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // sd

    emailjs
      .send(
        "service_1mnyoch",
        "template_607b17j",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
        },
        "ur9Vf2uAoau4vvNRr"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setFormData({ user_name: "", user_email: "", message: "" });

        gsap.fromTo(
          successRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        );
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="relative overflow-hidden bg-neutral-900/30 border border-neutral-800 p-12 md:p-24 rounded-3xl">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-bold mb-12 tracking-tighter">
              PUSH THE BOUNDARIES OF YOUR DIGITAL IDEAS.
            </h2>

            <form
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
            >
              <div className="border-b border-neutral-800 pb-2">
                <input
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder="NAME"
                  className="bg-transparent w-full outline-none uppercase text-xs tracking-widest font-bold placeholder:text-neutral-700"
                />
              </div>

              <div className="border-b border-neutral-800 pb-2">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="EMAIL"
                  className="bg-transparent w-full outline-none uppercase text-xs tracking-widest font-bold placeholder:text-neutral-700"
                />
              </div>

              <div className="md:col-span-2 border-b border-neutral-800 pb-2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="PROJECT BRIEF"
                  className="bg-transparent w-full outline-none uppercase text-xs tracking-widest font-bold placeholder:text-neutral-700 resize-none"
                />
              </div>

              <button
                disabled={loading}
                className="text-xs font-bold tracking-[0.3em] uppercase border border-neutral-800 px-8 py-4 hover:bg-white hover:text-black transition-all disabled:opacity-50"
              >
                {loading ? "SENDING..." : "SEND INQUIRY"}
              </button>
            </form>

            {sent && (
              <div
                ref={successRef}
                className="mt-12 text-green-400 text-sm tracking-widest uppercase"
              >
                Message sent successfully. We’ll get back to you shortly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
