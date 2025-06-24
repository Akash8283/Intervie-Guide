"use client";
import HeroSection from "@/components/hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";        // ✅ Required
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
;


export default function Home() {

  return (
    <>
      <div className="grid-background"></div>

      
      <HeroSection />

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

      <section className="w-full py-16 md:py-28 bg-gradient-to-br from-muted/60 via-background to-muted/40 relative overflow-hidden">
  
  
  <div className="absolute -top-16 -left-16 w-60 h-60 bg-primary/20 rounded-full blur-2xl z-0" />
  <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-secondary/20 rounded-full blur-2xl z-0" />

  <div className="relative z-10 container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
      

      <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10">
        <span className="text-primary mb-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto"><circle cx="16" cy="16" r="14" /></svg>
        </span>
        <h3 className="text-5xl font-extrabold text-primary drop-shadow-lg">50+</h3>
        <p className="text-muted-foreground text-lg">Industries Covered</p>
      </div>
      

      <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10">
        <span className="text-primary mb-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto"><rect x="7" y="7" width="18" height="18" rx="4" /></svg>
        </span>
        <h3 className="text-5xl font-extrabold text-primary drop-shadow-lg ">1000+</h3>
        <p className="text-muted-foreground text-lg">Interview Questions</p>
      </div>
      

      <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10">
        <span className="text-green-400 mb-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto"><path d="M4 16l8 8 16-16" /></svg>
        </span>
        <h3 className="text-5xl font-extrabold text-primary drop-shadow-lg">95%</h3>
        <p className="text-muted-foreground text-lg">Success Rate</p>
      </div>
      

      <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-lg border border-white/10">
        <span className="text-blue-300 mb-2">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto"><path d="M16 4v24M4 16h24" /></svg>
        </span>
        <h3 className="text-5xl font-extrabold text-primary drop-shadow-lg">24/7</h3>
        <p className="text-muted-foreground text-lg">AI Support</p>
      </div>
    </div>
  </div>
</section>

 <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
         
<section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
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

          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

<section className="w-full">
  <div className="mx-auto py-24 gradient rounded-lg bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-xl transition-all duration-300 hover:shadow-2xl">
    <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black drop-shadow-md tracking-tight">
        Ready to Accelerate Your Career?
      </h2>
      <p className="font-semibold max-w-[600px] text-lg md:text-xl text-black/90">
        Join thousands of professionals advancing their careers with
        <span className="font-semibold text-black
         "> AI-powered guidance</span>.
      </p>
      <Link href="/onboarding" passHref>
        <Button
          size="lg"
          variant="secondary"
          className="h-11 mt-5 animate-bounce bg-black text-white hover:bg-gray-200 transition-colors duration-550"
        >
          Start Your Journey Today
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
</section>





</>
);
}