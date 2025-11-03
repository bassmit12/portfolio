"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Code2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my work in software engineering and cybersecurity
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className={`transform transition-all duration-500 max-w-md w-full ${
              inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Card className="overflow-hidden group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 h-full text-center">
              <div className="relative h-48 overflow-hidden bg-muted flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-muted-foreground">
                  <Code2 className="h-16 w-16 mb-4 opacity-50" />
                  <div className="text-sm font-medium">Project Showcase</div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center justify-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Coming Soon
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  I'm currently working on some exciting projects in
                  cybersecurity and software development. Check back soon to see
                  my latest work in digital forensics, secure applications, and
                  more!
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Stay tuned for updates on my portfolio projects
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
