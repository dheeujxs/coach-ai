import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import { MaxWidthWrapper } from "@/components/genral/MaxWidthWrapper";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowRight, BookOpen, Brain, BrainCircuit, Check, FileOutput, FileText, FileTextIcon, Sparkles, Star } from "lucide-react";
import { Accordion, AccordionItem , AccordionTrigger  ,  AccordionContent  } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is this AI Course Generator?",
    answer: "It’s an AI-powered tool that generates structured courses with topics and descriptions."
  },
  {
    question: "Do I need coding experience to use it?",
    answer: "No! It’s designed for both beginners and experts. AI will generate the content for you."
  },
  {
    question: "Which technologies does it support?",
    answer: "It works with Next.js, Prisma, OpenAI, Tailwind, and more for building AI-powered apps."
  },
  {
    question: "Is the course content customizable?",
    answer: "no, you can edit, add, or remove topics to personalize your learning experience."
  },
  {
    question: "How can I get started?",
    answer: "Simply click on 'Get Started' and choose a category to generate your first AI-powered course."
  }
];



const Step = [
  {
    icon: <FileText size={64} strokeWidth={1.5}/>,
  desctiption:'Select the category from prograaming  , health and and creative',
  label: "Select Category"

  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5}/>,
  desctiption:'Write a topic for which you want to generate a course (e.g., Python Course, Yoga, etc.)',
  label: "Generate course"

  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5}/>,
  desctiption:'Select Difficulty level, Course  Duration, Add video,  No of Chatpees',
  label: "Select Options"

  },
]

const features = [
  {
    icon: <Brain className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Powered Course Customization",
    description:
      "Generate courses tailored to your learning style, goals, and interests using AI automation.",
  },
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-primary" />,
    title: "Smart Learning Paths",
    description:
      "Your progress determines your journey! AI dynamically adjusts the course structure for faster learning.",
  },
  {
    icon: <FileText className="w-10 h-10 mb-4 text-primary" />,
    title: "AI-Generated Study Materials",
    description:
      "Receive AI-curated notes, quizzes, and practice materials customized to your needs.",
  },
  {
    icon: <Sparkles className="w-10 h-10 mb-4 text-primary" />,
    title: "Real-Time Skill Analysis",
    description:
      "Track your learning progress with AI-powered insights, performance metrics, and personalized feedback.",
  },
];







export default function Home() {
  return (
      <>
      <Header />
      <section className="relative py-24 sm:py-32 bg-brand-25 ">
        <MaxWidthWrapper>
          <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p>
            Start Generating your courses!
          </p>

          </div>
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div >
              <h1 className="text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800">
                You can Generate Course
              
              <br />
              <span className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-transparent bg-clip-text" >
                With Help of CoachAI in Seconds
              </span>
              </h1>

            </div>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
            Want to learn some thing new but looking for course . No worries in our platform you can generate{' '}
              <span className="">
            coruses With CoachAi with in seconds.
              </span>
              and we also provide youtube lecture according to provided lecture.
            </p>

            <div className="w-full max-w-80">
            <Link href={'/dashboard'}>
           
            <Button  className="relative z-10 h-14 w-full bg-blue-800 text-base bg-gradient-to-r  shadow-lg transtion-shadow duration hover:shadow-xl">Start For Free Today
            </Button>
             </Link>
            </div>
           
          </div>
        </MaxWidthWrapper>
      

      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gray-50 ">
        <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h2 className="font-bold text-xl uppercase mb-4 text-blue-700">Hpow it works</h2>
            <h3 className="font-bold texxt-3xl  max-w-2xl mx-auto">
              Generate your course with ease in seconds with the help of Coach ai
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                {Step.map((step , idx) =>   (
                  <div key={idx} className='relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border-white/20 hover:border-blue-500/50 transition-colors group w-full '>
                   <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-gradient-to-br  from-blue-500/10 to-transparent group-hover:from-blue-500/20">

                    <div className="text-blue-500">
                      {step.icon}


                    </div>

                    </div>
                     <div className='flex flex-col flex-1 gap-1 justify-betweeen'></div>
                    <h4 className="text-center font-bold text-xl">{step.label}</h4>
                    <p className="text-center text-gray-600 text-sm">{step.desctiption}</p>
                   </div>
                  

                  </div>

                ))}
          </div>
        </div>

      </section>
      <div className="text-center mb-8 mt-32">
            <h2 className="font-bold text-xl uppercase mb-4 text-blue-700">Working of Application</h2>
            <h3 className="font-bold texxt-3xl  max-w-2xl mx-auto">
             Explore The Dashboard Page 
            </h3>
            </div>

      <div className="max-w-6xl mx-auto p-6 mt-48">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/course-image.png"
            alt="Course Preview"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Dashboard page</h2>
          <p className="text-gray-600"> 
            Track your courses limit , upgrade , explore and create new courses using CoachAi with in seconds .
          </p>
          <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Create new Courses with ai ",
                "Explore Your all coruses ",
                "Upgrade coruses to create unlimited coruses",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
             
                  {item}
                </li>
              ))}
            </ul>

          <Link href={'/dahboard'}>
          <button className="bg-blue-700 mt-4 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
      <div className="text-center mb-8 mt-32">
            <h2 className="font-bold text-xl uppercase mb-4 text-blue-700">Create Course</h2>
            <h3 className="font-bold texxt-3xl  max-w-2xl mx-auto">
            Generate Your Course
            </h3>
            </div>

      <div className="max-w-6xl mx-auto p-6 mt-48">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
     

        {/* Right: Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold"></h2>
          <p className="text-gray-600"> 
           Want to learn some thing like programming , yoga or anything creative just create the course with CoachAi with in secons
          </p>
          <ul className="space-y-2 text-base/7 text-gray-600 text-left flex flex-col items-start">
              {[
                "Select Your Category",
                "Select the topic and discprtion",
                "Genenrate the course choose dificulty, no of chaptes, time and video include",
              ].map((item, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
             
                  {item}
                </li>
              ))}
            </ul>

          <Link href={'/dahboard'}>
          <button className="bg-blue-700 mt-4 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src="/create-course.png"
            alt="Course Preview"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>

    <section className="relative py-24 sm:py-32 bg-white">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Real-World Experiences
            </h2>
            <h1 className="text-center text-4xl lg:text-5xl tracking-tight ">What our customers say</h1>
          </div>

          <div className="mx-auto   grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* first customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                PingPanda has been a game-changer for me. I've been using it for
                two months now and seeing sales pop up in real-time is super
                satisfying.
              </p>

              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/user-2.png"
                  className="rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Freya Larsson
                   
                  </p>
                  <p className="text-sm text-gray-600">@itsfreya</p>
                </div>
              </div>
            </div>

            {/* second customer review */}
            <div className="flex flex-auto flex-col gap-4 bg-brand-25 p-6 sm:p-8 lg:p-16 rounded-b-[2rem] lg:rounded-bl-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
            
      
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
                <Star className="size-5 text-blue-700 fill-blue-700" />
              </div>

              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                PingPanda's been paying off for our SaaS. Nice to have simple
                way to see how we're doing day-to-day. Definitely makes our
                lives easier.
              </p>

              <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center sm:items-start gap-4 mt-2">
                <Image
                  src="/user-1.png"
                  className="rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="font-semibold flex items-center">
                    Kai Durant
                   
                  </p>
                  <p className="text-sm text-gray-600">@kdurant_</p>
                </div>
              </div>
            </div>
          </div>

         
        </MaxWidthWrapper>
        </section>

        <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto py-24 bg-gray-500 rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Create your frst AI Generated coruse?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
             Just SElect Category , type your course like yoga , python , choose no of chapters, hours , diffcult level ans start
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce"
              >
                Start Your Journey Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </>
  );
}
