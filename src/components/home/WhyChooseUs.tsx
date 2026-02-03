import { UserCheck, MessageCircle, Target, Heart, Star, Quote } from "lucide-react";

const differentiators = [
  {
    icon: UserCheck,
    title: "Direct Access to Your Attorney",
    description: "You work directly with Dmitriy—not passed to juniors or paralegals.",
    stat: "100%",
    statLabel: "of clients work directly with Dmitriy"
  },
  {
    icon: MessageCircle,
    title: "Extremely Responsive Communication",
    description: "Calls and emails returned the same day. You're never left wondering.",
    stat: "<24hr",
    statLabel: "average response time"
  },
  {
    icon: Target,
    title: "Strategic Planning From Day One",
    description: "We build your case strategy upfront, not just react to the other side.",
    stat: "500+",
    statLabel: "cases strategically planned"
  },
  {
    icon: Heart,
    title: "Calm, Human Guidance",
    description: "We understand the emotional weight and help you make clear decisions.",
    stat: "4.8★",
    statLabel: "from 160+ reviews"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-accent" />
            What Sets Us Apart
          </div>
          <h2 className="heading-section text-primary-foreground mb-4">
            Why Clients Choose Borshchak Law Group
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            These aren't marketing claims—they're what our clients consistently say in their reviews.
          </p>
        </div>
        
        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-accent">{item.stat}</span>
                    <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">
            <Quote className="w-10 h-10 text-accent/40 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl font-serif text-primary-foreground leading-relaxed mb-4">
              "Dmitriy was always available when I needed him. He explained everything clearly and made a very stressful process manageable."
            </blockquote>
            <div className="flex items-center justify-center gap-1 text-accent mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent" />
              ))}
            </div>
            <p className="text-primary-foreground/60 text-sm">— Verified Google Review</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;