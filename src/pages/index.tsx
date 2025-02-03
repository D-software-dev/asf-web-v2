import Head from "next/head";
import Hero from "@/components/home/Hero";
// import Stats from "@/components/home/Stats";
import WhatWeDo from "@/components/home/WhatWeDo";
import Activities from "@/components/home/Activities";
import CallToAction from "@/components/home/CallToAction";
import FAQ from "@/components/home/FAQ";
import AskQuestion from "@/components/home/AskQuestion";

export default function Home() {
  return (
    <>
      <Head>
        <title>NAAS - Nigerian Adventist Association of Students</title>
        <meta
          name="description"
          content="Making a difference in the lives of students through fellowship, education, and spiritual growth"
        />
      </Head>
      <main className="overflow-hidden">
        <Hero />
        {/* <Stats /> */}
        <WhatWeDo />
        <Activities />
        <CallToAction />
        <FAQ />
        <AskQuestion />
      </main>
    </>
  );
}
