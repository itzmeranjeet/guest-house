import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col md:flex-row w-full xl:min-h-screen h-full"
      >
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-[#fff9e6]">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
              Contact Us
            </h2>
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Enter your first name" />
            <Input type="text" placeholder="Enter your last name" />
            <Input type="text" placeholder="Enter your email" />
            <Input type="text" placeholder="Enter your mobile number" />
            <Textarea placeholder="Enter your message"></Textarea>
            <Button className="bg-[#a67c52] hover:bg-[#012047] transition duration-300">Send</Button>
          </form>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1738737477029!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
