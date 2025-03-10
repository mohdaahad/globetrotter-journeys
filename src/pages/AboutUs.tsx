
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Users, Globe, Heart, Clock } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
            alt="Map background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">Our Journey</h1>
            <p className="text-xl text-muted-foreground">
              Helping travelers create unforgettable experiences since 2010
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Globetrotter was born out of a passion for exploration and a desire to make travel more accessible, 
                meaningful, and sustainable. What started as a small blog sharing travel tips has grown into a 
                comprehensive platform connecting travelers with extraordinary destinations worldwide.
              </p>
              <p className="text-muted-foreground">
                Our team of avid travelers and local experts work tirelessly to curate authentic experiences that 
                go beyond typical tourist attractions. We believe travel has the power to transform lives, broaden 
                perspectives, and create lasting memories.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Team meeting" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <p className="font-medium">Founded in 2010</p>
                <p className="text-sm opacity-80">13+ years of travel excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Our Mission & Values</h2>
            <p className="text-muted-foreground">
              We're committed to transforming how people experience the world through 
              authentic connections and responsible travel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-4">Sustainable Travel</h3>
              <p className="text-muted-foreground">
                We promote responsible tourism practices that respect local cultures 
                and minimize environmental impact.
              </p>
            </div>
            
            <div className="glass p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-4">Community Connection</h3>
              <p className="text-muted-foreground">
                We believe in creating meaningful interactions between travelers and local 
                communities for mutual benefit.
              </p>
            </div>
            
            <div className="glass p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-medium mb-4">Authentic Experiences</h3>
              <p className="text-muted-foreground">
                We curate genuine travel experiences that go beyond tourist attractions to 
                reveal the heart of each destination.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Our diverse team of travel enthusiasts, local guides, and industry experts are 
              united by a common passion for exploration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sophia Chen",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Marcus Johnson",
                role: "Head of Experiences",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Amara Diallo",
                role: "Destination Specialist",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              },
              {
                name: "Carlos Mendez",
                role: "Chief Travel Officer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-6 mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Join Us on the Journey
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to explore the world with Globetrotter? Create an account today 
                and start planning your next unforgettable adventure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn-primary">Sign Up Today</button>
                <button className="btn-outline">Contact Our Team</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
