"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Shield, Code } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2015 - 2021",
    title: "VWO (Pre-University Education)",
    organization: "Roer College Schöndeln, Roermond",
    description:
      "Completed six years of pre-university education (VWO) at Roer College Schöndeln in Roermond. This comprehensive academic program provided a strong foundation in mathematics, sciences, and analytical thinking that would prove essential for my future studies in software engineering.",
    icon: <GraduationCap className="h-5 w-5" />,
    tags: [
      "Academic Foundation",
      "Mathematics",
      "Sciences",
      "Critical Thinking",
    ],
  },
  {
    year: "2022",
    title: "Started Software Engineering",
    organization: "Fontys ICT",
    description:
      "Began my Bachelor's degree in Software Engineering at Fontys University of Applied Sciences. Started with programming fundamentals, learning languages like C#, Python, and web technologies. Developed a strong understanding of software development principles, algorithms, and object-oriented programming.",
    icon: <Code className="h-5 w-5" />,
    tags: ["Programming", "C#", "Python", "Web Development", "OOP"],
  },
  {
    year: "2024",
    title: "Software Engineering Internship",
    organization: "Libelnet",
    description:
      "Completed a comprehensive internship at Libelnet, gaining hands-on experience in professional software development. Worked on real-world projects, collaborated with experienced developers, and applied theoretical knowledge in practical scenarios. This experience significantly enhanced my skills in full-stack development and introduced me to industry best practices.",
    icon: <Briefcase className="h-5 w-5" />,
    tags: [
      "Full-Stack Development",
      "Professional Experience",
      "Team Collaboration",
      "Industry Practices",
    ],
  },
  {
    year: "Present",
    title: "Specialization in Cybersecurity",
    organization: "Fontys ICT",
    description:
      "Currently pursuing a specialization in Forensic Cybersecurity as part of my Software Engineering degree. Focusing on digital forensics, threat analysis, incident response, and security auditing. Learning advanced techniques in malware analysis, network security, and ethical hacking to combine my software development skills with cybersecurity expertise.",
    icon: <Shield className="h-5 w-5" />,
    tags: [
      "Digital Forensics",
      "Cybersecurity",
      "Threat Analysis",
      "Incident Response",
      "Network Security",
    ],
  },
];

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const itemTop = item.offsetTop + timelineTop;
        const itemBottom = itemTop + item.offsetHeight;

        if (scrollPosition >= itemTop && scrollPosition <= itemBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="timeline" className="py-24 px-4 relative" ref={timelineRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From starting my software engineering studies to specializing in
            cybersecurity
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px">
            <div
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-300 ease-out"
              style={{
                height: `${(activeIndex / (timelineData.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative transition-all duration-500 ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+3rem)]"
                    : "md:pl-[calc(50%+3rem)] md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 md:-ml-2 ${
                    index <= activeIndex ? "bg-primary scale-125" : "bg-muted"
                  }`}
                />

                {/* Content card */}
                <Card
                  className={`ml-20 md:ml-0 p-6 transition-all duration-500 ${
                    index <= activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-40 translate-y-4"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-mono text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-primary font-medium">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
