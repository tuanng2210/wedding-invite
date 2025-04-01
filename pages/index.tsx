import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Tuan & An Wedding</title>
        <meta name="description" content="You're invited to our special day!" />
      </Head>
      <div className="bg-[#f7f7ef] text-gray-900 font-sans scroll-smooth">
        {/* Header */}
        <header className="text-center py-8 border-b">
          <h1 className="text-4xl font-script">Tuan & An</h1>
          <p className="uppercase tracking-widest mt-2">Wedding Invitation</p>
          <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm uppercase">
            <a href="#home">Home</a>
            <a href="#invitation">Invitation</a>
            <a href="#schedule">Schedule</a>
            <a href="#venue">Venue</a>
            <a
              href="https://rsvp-frontend-dq1dsra7l-tuanng2210s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP
            </a>
          </nav>
        </header>

        <section
          id="home"
          className="relative w-full h-[500px] bg-[#f7f7ef] overflow-hidden"
        >
          <img
            src="/kiss.jpg"
            alt="Save the Date"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
            <h2 className="text-lg tracking-[0.3em] font-light uppercase mb-4">
              Save the Date
            </h2>
            <div className="bg-white text-gray-800 px-6 py-2 rounded-sm text-sm tracking-widest shadow">
              07th February 2026
            </div>
          </div>
        </section>

        {/* Invitation */}
        <section
          id="invitation"
          className="text-center py-12 px-6"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-script mb-4">
            Welcome to our wedding invitation!
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed">
            We're so excited to share this special moment with you. Please
            explore our site to find all the details and RSVP. Let’s celebrate
            love, laughter, and happily ever after!
          </p>
          <p className="mt-6 italic">With love,</p>
          <p className="font-script text-lg">Tuan & An</p>
        </section>

        {/* Invitation Image Trio */}
        <section className="py-8 px-6 bg-[#f7f7ef]" data-aos="fade-up">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
            <img
              src="/gallery1.avif"
              alt="Gallery 1"
              className="rounded shadow object-cover w-full"
            />
            <img
              src="/gallery2.avif"
              alt="Gallery 2"
              className="rounded shadow object-cover w-full"
            />
            <img
              src="/gallery3.avif"
              alt="Gallery 3"
              className="rounded shadow object-cover w-full"
            />
          </div>
        </section>

        {/* Venue */}
        {/* Ceremony Section */}
        <section id="venue" className="bg-[#f7f7ef] py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl tracking-[0.2em] font-serif uppercase mb-10">
              Ceremony
            </h2>

            <div className="flex justify-center">
              <img
                src="/nikko.jpg"
                alt="Origami Ballroom"
                className="w-full max-w-md sm:max-w-lg rounded shadow-lg object-cover"
              />
            </div>

            <div className="mt-8 text-center text-gray-700 space-y-4 max-w-xl mx-auto">
              <h3 className="text-lg font-semibold">Origami Ballroom</h3>
              <p className="italic">
                3rd Floor, Hotel Nikko Saigon
                <br />
                235 Đ. Nguyễn Văn Cừ, Phường Nguyễn Cư Trinh,
                <br />
                Quận 1, Hồ Chí Minh, Vietnam
              </p>
              <p>
                Our journey begins in this stunning setting, where we will
                exchange vows surrounded by love and happiness. Please arrive a
                little early to find your seat and soak in the moment with us!
              </p>
              <p className="font-semibold mt-2">Start time – 7:00 PM</p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section
          id="schedule"
          className="bg-[#e6e6d9] py-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-script mb-2">Wedding Day Timeline</h2>
          <p className="uppercase tracking-widest text-sm">
            07th February 2026 / update later
          </p>
        </section>

        {/* RSVP */}
        <section
          id="rsvp"
          className="text-center py-12 px-6"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-serif uppercase mb-4">RSVP</h2>
          <p className="max-w-xl mx-auto mb-6">
            Please confirm your attendance using the form below.
          </p>
          <a
            href="https://rsvp-frontend-dq1dsra7l-tuanng2210s-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-gray-800 transition"
          >
            RSVP Now
          </a>
        </section>
      </div>
    </>
  );
}
