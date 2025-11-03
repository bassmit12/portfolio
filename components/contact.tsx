"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or
            collaborations in software engineering and cybersecurity.
          </p>
        </div>

        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you have a question, want to collaborate on a project,
                or just want to say hi, feel free to reach out. I'll do my best
                to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Netherlands</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:bas.smit@live.nl"
                    className="hover:text-primary transition-colors"
                  >
                    bas.smit@live.nl
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Find Me Online</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 bg-transparent"
                  asChild
                >
                  <a
                    href="https://github.com/bassmit12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/bas-smit-914145340/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 bg-transparent"
                  asChild
                >
                  <a href="mailto:bas.smit@live.nl">
                    <Mail className="h-5 w-5" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>© 2025 Bas Smit. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
