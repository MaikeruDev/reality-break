'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InstagramIcon, TwitterIcon, MusicIcon, Facebook, Youtube, ChevronLeftIcon, ChevronRightIcon, ChevronDown } from "lucide-react"
import { motion } from 'framer-motion'

export default function RealityBreakWebsite() {
  const membersRef = useRef<HTMLElement>(null)
  const bandMembers = [
    {
      name: "Noa",
      role: "Bass Slapper",
      instrument: "Bass Guitar",
      bio: "Stinkt a bissle, With a voice that can shatter reality, Alex leads the band with raw emotion and unparalleled stage presence. Their lyrics dive deep into the human psyche, exploring the blurred lines between dreams and waking life.",
      quote: "Music is the key that unlocks the doors of perception.",
      socialMedia: { instagram: "@alex_realitybreak", twitter: "@alexsings_rb" },
      src: "/noa.jpg"
    },
    {
      name: "Sam",
      role: "Lead Guitar",
      instrument: "Electric Guitar",
      bio: "Sam's guitar riffs are like lightning strikes, electrifying the audience and bending the fabric of sound. Their innovative use of effects and unconventional techniques creates soundscapes that defy reality.",
      quote: "I don't play the guitar, I channel the universe through six strings.",
      socialMedia: { instagram: "@sam_shreds", twitter: "@samguitar_rb" },
      src: "/placeholder.png"
    },
    {
      name: "Jordan",
      role: "Bass",
      instrument: "Bass Guitar",
      bio: "The backbone of Reality Break, Jordan's bass lines are the gravitational force that holds the band's sound together. Their grooves are so deep, they've been known to alter the Earth's rotation.",
      quote: "Feel the low end? That's the sound of reality shifting.",
      socialMedia: { instagram: "@jordan_lowend", twitter: "@jordanbass_rb" },
      src: "/placeholder.png"
    },
    {
      name: "Taylor",
      role: "Drums",
      instrument: "Drum Set",
      bio: "Taylor's drumming is a force of nature, creating rhythms that transcend time and space. Their polyrhythmic prowess and explosive energy drive the band's most mind-bending performances.",
      quote: "I don't keep time, I bend it to my will.",
      socialMedia: { instagram: "@taylor_beats", twitter: "@taylordrums_rb" },
      src: "/placeholder.png"
    },
    {
      name: "Casey",
      role: "Keyboard",
      instrument: "Synthesizer",
      bio: "Casey is the band's sonic architect, crafting lush soundscapes and ethereal melodies that transport listeners to alternate dimensions. Their mastery of synthesis and sound design pushes the boundaries of what's possible in music.",
      quote: "Every key is a portal to another world.",
      socialMedia: { instagram: "@casey_keys", twitter: "@caseysynth_rb" },
      src: "/placeholder.png"
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
    "/carousel1.jpg",
    "/carousel2.jpg",
    "/carousel3.jpg",
    "/carousel4.jpg",
    "/carousel5.jpg",
    "/carousel6.jpg",
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


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gradient-to-b from-transparent to-white px-6 sm:px-12">
            <Image
              src="/logo_black.png"
              alt="Band Logo"
              className="mx-auto"
              width={1000}
              height={1000}
            />
          </div>
          <Button className="mt-8 bg-transparent rounded-[0.2rem] border-2 border-black hover:bg-black hover:text-white text-black">ABOUT US</Button>
        </div>
        <motion.div
          className="absolute bottom-8 transform -translate-x-1/2 z-10 cursor-pointer"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          onClick={scrollToMembers}
        >
          <ChevronDown className="w-12 h-12 text-black hover:text-black/70 transition-colors" />
          <span className="sr-only">Scroll nach unten</span>
        </motion.div>
      </section>


      {/* Band Members Section */}
      <section ref={membersRef} className="py-20 xl:px-72 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16">Meet the Reality Breakers</h2>
          <div className="space-y-24">
            {bandMembers.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-[1px_5px_10px_rgb(0,0,0,0.4)]">
                  <div className="relative">
                    <img
                      src={member.src}
                      alt={`${member.name} - ${member.role} of Reality Break`}
                      className="w-full h-auto aspect-square object-cover overflow-hidden"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
                      <h3 className="text-3xl font-bold">{member.name}</h3>
                      <p className="text-xl">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <MusicIcon key={index} className="w-8 h-8 text-rb_pink " />
                    <span className="text-xl">{member.instrument}</span>
                  </div>
                  <p className="text-lg leading-relaxed">{member.bio}</p>
                  <blockquote key={index} className="text-2xl font-semibold italic text-gray-700 border-l-4 border-rb_pink pl-4">
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
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Upcoming Shows</h2>
          <div className="space-y-4 max-w-5xl mx-auto">
            {tourDates.map((event, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <span className="font-bold text-lg">{event.date}</span>
                  <a className="text-black/30 text-lg font-bold" href={event.venueURL}>{event.venue}</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 sm:mt-0">
                  <span className="font-bold text-right sm:mr-8">{event.location}</span>
                  <Button className="bg-rb_blue hover:bg-purple-600 text-white min-w-[120px]">
                    TICKETS
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Gallery</h2>
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevImage}
                className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-6 h-6 text-black" />
              </button>
              <div className="w-full overflow-hidden">
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
                        className="w-full h-full object-cover rounded-xl shadow-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={nextImage}
                className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-16">CONTACT</h2>

          <div className="space-y-16 max-w-lg mx-auto">
            <div className="space-y-2">
              <h3 className="text-gray-400 text-lg tracking-wider">MANAGEMENT</h3>
              <p className="text-2xl font-semibold">Wayne Pighini</p>
              <p className="italic">Fly South Music Group</p>
              <a href="mailto:info@flysouthmusic.com" className="text-white hover:text-purple-400 transition-colors">
                info@flysouthmusic.com
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="text-gray-400 text-lg tracking-wider">BOOKING (WORLDWIDE)</h3>
              <p className="text-2xl font-semibold">Nick Storch</p>
              <p className="italic">AGI</p>
              <a href="mailto:nick@artistgrp.com" className="text-white hover:text-purple-400 transition-colors">
                nick@artistgrp.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 transition-colors"
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