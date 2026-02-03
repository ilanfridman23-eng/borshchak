import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import justiceStatue from "@/assets/law-hero-image.png";

const services = [
  {
    title: "Divorce & Legal Separation",
    href: "/divorce"
  },
  {
    title: "Child Custody & Parenting Plans",
    href: "/custody"
  },
  {
    title: "Property & Asset Division",
    href: "/assets"
  },
  {
    title: "Mediation & Alternative Resolution",
    href: "/mediation"
  }
];

const ServicesOverview = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image on left */}
          <div className="lg:w-1/3 w-full">
            <img 
              src={justiceStatue} 
              alt="Lady Justice statue with scales" 
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
          
          {/* Services on right with header */}
          <div className="lg:w-2/3 w-full flex flex-col justify-center">
            <h2 className="heading-section text-center lg:text-left mb-8">Family Law Services</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.href}
                  className="card-bordered group hover:bg-card hover:shadow-sm transition-all duration-200 text-center py-8"
                >
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
