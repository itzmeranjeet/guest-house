import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex flex-col md:flex-row w-full lg:h-auto py-16 px-4 sm:px-8 bg-[#f5ebe0]"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-full md:w-1/2 p-6 flex flex-col bg-[#ecebf3]"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl text-[#B86B4B] font-bold">CONTACT US</h1>
        </div>
        <form className="space-y-4">
          <Input
            className="bg-white p-6"
            type="text"
            placeholder="Enter your first name"
          />
          <Input
            className="bg-white p-6"
            type="text"
            placeholder="Enter your last name"
          />
          <Input
            className="bg-white p-6"
            type="text"
            placeholder="Enter your email"
          />
          <Input
            className="bg-white p-6"
            type="text"
            placeholder="Enter your mobile number"
          />
          <Textarea
            className="bg-white"
            placeholder="Enter your message"
          ></Textarea>
          <Button>
            Send
          </Button>
        </form>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 h-[300px] md:h-auto"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1738737477029!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
