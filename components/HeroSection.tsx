import React from "react";
import Image from "next/image";
import Container from "./ui/container";
import Experties from "./Expertise";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className=" py-16 px-4 md:px-16 relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2 mb-4">
            <Image
              src="/dev.jpg"
              alt="Hero Image"
              className="rounded-full"
              priority
              width={500}
              height={300}
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold">
              Full Stack Web Developer / Teacher
            </h1>

            <div className="flex gap-4 my-4 items-center ">
              <p className=" text-lg md:text-xl text-teal-600">
                Nextjs/React Developer
              </p>
              <Button size="sm">
                <a
                  href="https://drive.google.com/file/d/11msJkI8GvcyGrAbC5nkdTmmngxTW4Jcx/view?usp=drive_link"
                  target="_blank"
                >
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="mt-8 space-y-4">
              <p>
                Im a passionate developer with a focus on creating interactive
                and user friendly web applications.
              </p>
            </div>
            <div>
              <Experties />
            </div>
            <div className="mt-8  flex gap-2">
              <a
                href="https://github.com/dev1980"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                View My GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dev1980/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-teal-700"
              >
                View My LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
