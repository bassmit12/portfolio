"use client";

import { Code2, Shield, GraduationCap, Briefcase } from "lucide-react";

export function AboutMe() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl blur-2xl opacity-30" />
              <img
                src="/Bas_Smit_Enhanced.png"
                alt="Bas Smit"
                className="relative w-full h-full rounded-2xl object-cover border-2 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a 22-year-old software engineering student passionate about
              cybersecurity and digital forensics. Currently in my third year at
              Fontys Netherlands, I'm specializing in forensic cybersecurity to
              combine my love for coding with protecting digital systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              During my second year, I had the opportunity to intern at
              Libelnet, where I gained hands-on experience in real-world
              software development and security practices. This experience
              solidified my commitment to building secure, reliable
              applications.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Education</div>
                <div className="font-semibold">Fontys Netherlands</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <Shield className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">
                  Specialization
                </div>
                <div className="font-semibold">Forensic Cybersecurity</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <Code2 className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Year</div>
                <div className="font-semibold">Third Year</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg">
                <Briefcase className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm text-muted-foreground">Internship</div>
                <div className="font-semibold">Libelnet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
