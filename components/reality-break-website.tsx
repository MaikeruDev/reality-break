'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InstagramIcon, TwitterIcon, MusicIcon, Facebook, Youtube, ChevronLeftIcon, ChevronRightIcon, ChevronDown, MicVocalIcon, GuitarIcon, DrumIcon, PianoIcon, Building2Icon, Calendar1Icon, PinIcon, Guitar, Mic, KeyboardMusic, Drumstick, Drum, LucideGuitar } from "lucide-react"
import { motion } from 'framer-motion'

export default function RealityBreakWebsite() {
  const membersRef = useRef<HTMLElement>(null)
  const showsRef = useRef<HTMLElement>(null)
  const bandMembers = [
    {
      name: "Fiona Splinter",
      role: "Vocals & Guitar",
      instrument: "Vocals & Guitar",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur .",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..",
      socialMedia: { instagram: "", twitter: "" },
      src: "/members/fiona.webp",
      icon: MicVocalIcon,
    },
    {
      name: "Simon Paulitsch",
      role: "Guitar",
      instrument: "Guitar",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur .",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..",
      socialMedia: { instagram: "", twitter: "" },
      src: "/members/simon.webp",
      icon: Guitar,
    },
    {
      name: "Noa Waibel",
      role: "Guitar",
      instrument: "Guitar",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur .",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..",
      socialMedia: { instagram: "", twitter: "" },
      src: "/members/noa.webp",
      icon: GuitarIcon,
    },
    {
      name: "Maya Merten",
      role: "Keyboard",
      instrument: "Keyboard",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur .",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..",
      socialMedia: { instagram: "", twitter: "" },
      src: "/members/maya.webp",
      icon: KeyboardMusic,
    },
    {
      name: "Naima Waibel",
      role: "Bass",
      instrument: "Bass",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur .",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..",
      socialMedia: { instagram: "", twitter: "" },
      src: "/members/naima.webp",
      icon: Guitar,
    },
    {
      name: "Luis Bösch",
      role: "Drums",
      instrument: "Drums",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur .",
      quote: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..",
      socialMedia: { instagram: "", twitter: "" },
      src: "/members/luis.webp",
      icon: Drum,
    },
  ]

  const tourDates = [
    {
      date: "THU, FEB 13, 2025",
      venue: "ALEXANDRA PALACE",
      location: "LONDON, UNITED KINGDOM",
      venueURL: "#",
      ticketsURL: "#"
    },
    {
      date: "SAT, FEB 15, 2025",
      venue: "COLUMBIAHALLE",
      location: "BERLIN, GERMANY",
      venueURL: "#",
      ticketsURL: "#"
    },
    {
      date: "SAT, FEB 22, 2025",
      venue: "TONHALLE",
      location: "MUNICH, GERMANY",
      venueURL: "#",
      ticketsURL: "#"
    },
    {
      date: "SUN, FEB 23, 2025",
      venue: "GROSSE FREIHEIT 36",
      location: "HAMBURG, GERMANY",
      venueURL: "#",
      ticketsURL: "#"
    }
  ]

  const carouselImages = [
    "/carousel/1.webp",
    "/carousel/2.webp",
    "/carousel/3.webp",
    "/carousel/4.webp",
    "/carousel/5.webp",
    "/carousel/6.webp",
    "/carousel/7.webp",
    "/carousel/8.webp",
    "/carousel/9.webp",
    "/carousel/10.webp",
    "/carousel/11.webp",
    "/carousel/12.webp",
    "/carousel/13.webp",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  const scrollToMembers = () => {
    membersRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToShows = () => {
    showsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Noise filter overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none filter-noise z-30" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        <div className="text-center relative z-10">
          <div className="bg-gradient-to-b from-transparent to-white px-6 sm:px-12">
            <Image
              src="/logo_black.png"
              alt="Band Logo"
              className="mx-auto"
              width={1000}
              height={1000}
              draggable={false}
            />
          </div>
          <Button onClick={scrollToShows} className="mt-8 rounded-[0.2rem] border-2 border-black/80 bg-black text-white hover:bg-white hover:text-black ">
            UPCOMING SHOWS
          </Button>
        </div>

        <motion.div
          className="absolute bottom-8 transform -translate-x-1/2 z-10 cursor-pointer"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          onClick={scrollToMembers}
        >
          <ChevronDown className="w-12 h-12 text- hover:text-black/70 transition-colors" />
          <span className="sr-only">Scroll down</span>
        </motion.div>
      </section>



      {/* Band Members Section */}
      <section ref={membersRef} className="relative py-10 sm:py-20 lg:px-40 bg-gradient-to-b from-gray-100 to-white">
        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none filter-noise2 z-20" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise2">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">Meet the Reality Breakers</h2>
          <div className="space-y-24">
            {bandMembers.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-8 sm:gap-16`}>
                <div className="w-full sm:w-1/2 lg:w-1/3 overflow-hidden shadow-[1px_5px_10px_rgb(0,0,0,0.4)] z-30">
                  <div className="relative">
                    <img
                      src={member.src}
                      alt={`${member.name} - ${member.role} of Reality Break`}
                      className="w-full h-auto aspect-square object-cover overflow-hidden grayscale"
                      draggable={false}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                      <h3 className="text-3xl font-bold">{member.name}</h3>
                      <p className="text-xl">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-2/3 space-y-6">
                  <div className="flex items-center space-x-4">
                    <member.icon key={index} className="w-8 h-8 text-black/80 " />
                    <span className="text-xl">{member.name}</span>
                  </div>
                  <p className="text-lg leading-relaxed">{member.bio}</p>
                  <blockquote key={index} className="text-2xl font-semibold italic text-gray-700 border-l-4 border-black/80 pl-4">
                    "{member.quote}"
                  </blockquote>
                  <div className="flex space-x-4">
                    <a href={`https://instagram.com/${member.socialMedia.instagram}`} className="text-gray-600 hover:text-red-600">
                      <InstagramIcon className="w-6 h-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href={`https://twitter.com/${member.socialMedia.twitter}`} className="text-gray-600 hover:text-red-600">
                      <TwitterIcon className="w-6 h-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Dates Section */}
      <section ref={showsRef} className="py-10 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 text-black/80">Upcoming Shows</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {tourDates.map((event, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between sm:gap-8 py-6 border-b border-gray-200"
              >
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 sm:gap-8 text-center sm:text-left">
                  {/* Date Section */}
                  <div className="flex items-center gap-2">
                    <Calendar1Icon className="w-6 h-6 sm:hidden" />
                    <p className="font-bold text-lg">{event.date}</p>
                  </div>
                  {/* Venue Section */}
                  <a
                    className="flex items-center gap-2 text-black/30 hover:text-black/80 transition-colors duration-150 ease-in-out text-lg font-bold"
                    href={event.venueURL}
                  >
                    <Building2Icon className="w-6 h-6 sm:hidden" />
                    {event.venue}
                  </a>
                </div>
                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 mt-4 sm:mt-0">
                  {/* Location Section */}
                  <span className="flex items-center gap-2 font-bold text-center sm:text-right sm:mr-8">
                    <PinIcon className="w-6 h-6 sm:hidden" />
                    {event.location}
                  </span>
                  {/* Tickets Button */}
                  <Button
                    className="border-2 border-black/80 bg-black/80 text-white hover:bg-white hover:text-black/80 min-w-[120px] w-full sm:w-auto"
                  >
                    TICKETS
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Image Carousel Section */}
      <section className="relative py-10 sm:py-20 bg-white">
        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none filter-noise2 z-20" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise2">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-black/80">Gallery</h2>
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center gap-1 sm:gap-4">
              <button
                onClick={prevImage}
                className="bg-black/80 bg-opacity-50 p-1 sm:p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </button>
              <div className="w-full overflow-hidden z-30">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {carouselImages.map((src, index) => (
                    <div
                      key={index}
                      className={`w-full flex-shrink-0 px-4 transition-all duration-500 ease-in-out ${index === currentImageIndex
                        ? 'scale-100 opacity-100'
                        : 'scale-75 opacity-50'
                        }`}
                      style={{ aspectRatio: '16 / 9' }}
                    >
                      <img
                        src={src}
                        alt={`Reality Break band image ${index + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={nextImage}
                className="bg-black/80 bg-opacity-50 p-1 sm:p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-20 bg-black text-white">

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-16">CONTACT</h2>

          <div className="space-y-16 max-w-lg mx-auto">
            <div className="space-y-2">
              <p className="text-2xl font-semibold">Max Mustermann</p>
              <p className="italic">Amogus Music Group</p>
              <a href="mailto:test@test.com" className="text-white hover:text-black/80 transition-colors">
                test@test.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="bg-white p-3 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full hover:bg-white transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full hover:bg-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-white p-3 rounded-full hover:bg-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © Copyright Reality Break. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}