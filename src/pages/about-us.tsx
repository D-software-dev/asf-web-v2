import { montserrat, rozhaOne } from '@/constants/Fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function About() {
    const aboutInfo = [
        {
            title: "Our Story",
            content: "Founded in 2005, the Adventist Students Fellowship (ASF) at the University of Port Harcourt began as a small gathering of students seeking spiritual guidance and community on campus. Over the years, we've grown into a vibrant organization dedicated to fostering faith, service, and academic excellence among students from all backgrounds. Our mission is to provide a welcoming space where students can explore our beliefs, connect with others, and make a positive impact on the world.",
        },
        {
            title: "Leadership",
            content: [ {
                name: "Sarah Chen",
                position: "Vice President",
                image: "/images/vp.jpg"
            },
            {
                name: "David Lee",
                position: "President",
                image: "/images/presido.jpg",
            },
            {
                name: "Emily Johnson",
                position: "Public Relations Officer",
                image: "/images/pro.jpg",
            },
            {
                name: "Michael Smith",
                position: "Treasurer",
                image: "/images/tr.jpg",
            }],
        },
        {
            title: "Our Beliefs",
            content: "At ASF UniPort, we are committed to the teachings of the Seventh-day Adventist Church. We believe in the Bible as the inspired word of God, the importance of a personal relationship with Jesus Christ, and the call to live out our faith through service and community engagement. Our fellowship is built on principles of love, respect, and inclusivity, welcoming all who seek to learn and grow in their spiritual journey, as well as empower them to live meaningful lives. We also share the same ",
        },
    ]


  return (
    <section className='dark:bg-[#121212] pt-32 px-4 pb-10 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
        {/* About heading section */}
            <div className='py-15'>
                <h2 className={`${rozhaOne.className} text-5xl font-bold text-primary mb-6 text-center`}>About Us</h2>
                <p className={`${montserrat.className} text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg`}>Learn more about our community, values, and the people who lead us</p>
            </div>
            {/* About content section */}
            <div className='mt-20 space-y-16 w-[90%] md:w-[100%] mx-auto'>
                {aboutInfo.map((info, index) => (
                    <div key={index} className='space-y-4'>
                        <div>
                            <h3 className={`${montserrat.className} text-3xl font-semibold text-primary`}>{info.title}</h3>
                            <hr className='border-t-2 border-primary w-full mb-4 mt-2 opacity-50' />
                        </div>
                        {Array.isArray(info.content) ? (
                            <div className='flex flex-wrap gap-6'>
                                {info.content.map((member, idx) => (
                                    <div key={idx} className='flex-1 w-full min-w-60 max-w-72 h-72 bg-white dark:bg-[#121212] rounded-lg shadow-lg relative overflow-hidden'>
                                        <div className='w-[100%] h-[100%] mb-4 rounded-lg absolute'>
                                            <Image fill src={member.image} alt={member.name} className='object-top object-cover' />
                                        </div>
                                        <div className='absolute w-[100%] bottom-0 p-4 bg-[rgba(255,255,255,.4)] dark:bg-[rgba(18,18,18,.6)] backdrop-blur-lg dark:backdrop-blur-sm'>
                                            <h4 className={`${montserrat.className} dark:text-gray-300 text-xl font-bold`}>{member.name}</h4>
                                            <p className={`${montserrat.className} text-gray-900 dark:text-gray-400`}>{member.position}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className={`${montserrat.className} text-gray-600 dark:text-gray-400`}>{ info.content } { info.title == "Our Beliefs" ? < ><Link target='_blank' href="https://www.adventist.org/beliefs" className='text-blue-400'>fundamental beliefs</Link> <span> as the seventh day adventist church.</span></ > : '' }</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default About
