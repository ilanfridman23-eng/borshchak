import { Phone, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    title: "Enforcing Ohio Child Custody Orders Across State Lines: UCCJEA Explained",
    excerpt: "Navigating the complexities of child custody can be daunting for any parent—especially when life's circumstances take you across state lines.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/enforcing-ohio-child-custody-orders-across-state-lines-uccjea-explained/",
    category: "Child Custody",
  },
  {
    title: "Essential Questions to Ask Before Filing for Divorce in Ohio",
    excerpt: "Divorce is never an easy decision, and for small business owners, developers, and general readers in Ohio, the process can feel especially overwhelming.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/essential-questions-to-ask-before-filing-for-divorce-in-ohio/",
    category: "Divorce",
  },
  {
    title: "Unveiling Ohio Judges' Approach: Key Factors in Fair Divorce Settlements",
    excerpt: "Navigating a divorce can be one of the most challenging journeys in life, especially when it comes to achieving a fair settlement.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/unveiling-ohio-judges-approach-key-factors-in-fair-divorce-settlements/",
    category: "Divorce",
  },
  {
    title: "What Are the Legal Risks of Moving Out During an Ohio Divorce?",
    excerpt: "Divorce is never easy, and the choices you make early in the process can have lasting legal consequences.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/what-are-the-legal-risks-of-moving-out-during-an-ohio-divorce/",
    category: "Divorce",
  },
  {
    title: "Can You File for Divorce in Ohio While Living Out of State? Residency Rules Explained",
    excerpt: "Facing divorce is never easy, and the process can become even more complex if you no longer live in the state where you were married.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/can-you-file-for-divorce-in-ohio-while-living-out-of-state-residency-rules-explained/",
    category: "Divorce",
  },
  {
    title: "How Divorce Impacts College Expenses for Children in Ohio: Legal Obligations and Agreements",
    excerpt: "Navigating the financial landscape of divorce is never easy, especially when children's futures are at stake.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/how-divorce-impacts-college-expenses-for-children-in-ohio-legal-obligations-and-agreements/",
    category: "Financial Matters",
  },
  {
    title: "What Happens to Inheritance Money in an Ohio Divorce? Separate Property or Marital Asset?",
    excerpt: "If you're going through a divorce in Ohio, understanding how inheritance is treated can protect your financial interests.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/what-happens-to-inheritance-money-in-an-ohio-divorce-separate-property-or-marital-asset/",
    category: "Financial Matters",
  },
  {
    title: "Ohio Courts and Alimony Disputes: Modification, Enforcement, and Key Legal Standards",
    excerpt: "Alimony, also known as spousal support, is often one of the most contentious aspects of a divorce.",
    date: "February 10, 2026",
    href: "https://dlbcounsel.com/ohio-courts-and-alimony-disputes-modification-enforcement-and-key-legal-standards/",
    category: "Spousal Support",
  },
  {
    title: "Fast-Tracking Divorce in Ohio: Dissolution's 30-90 Day Path Under Key Conditions",
    excerpt: "Navigating the end of a marriage can be daunting, especially when you want to resolve things quickly and amicably.",
    date: "February 9, 2026",
    href: "https://dlbcounsel.com/fast-tracking-divorce-in-ohio-dissolutions-30-90-day-path-under-key-conditions/",
    category: "Dissolution",
  },
  {
    title: "Key Evidence Essentials for Winning Your Ohio Divorce Case",
    excerpt: "Divorce is never easy, especially when the stakes are high. Understanding the key evidence you need can make all the difference.",
    date: "February 9, 2026",
    href: "https://dlbcounsel.com/key-evidence-essentials-for-winning-your-ohio-divorce-case/",
    category: "Divorce",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="section-padding bg-secondary/50">
          <div className="container max-w-4xl">
            <p className="text-base font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Blog
            </p>
            <h1 className="heading-hero mb-6">
              Ohio Family Law Insights
            </h1>
            <p className="text-body text-xl">
              Stay informed with our latest articles on divorce, custody, and family law in Ohio. Knowledge is your best ally during difficult times.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elevated group hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-primary font-medium text-sm mt-4">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container max-w-3xl text-center">
            <p className="text-base text-muted-foreground">
              The information on this page is for educational purposes only and does not constitute legal advice. 
              Every case is different. For guidance specific to your situation, schedule a consultation.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/50">
          <div className="container max-w-2xl text-center">
            <h2 className="heading-section mb-4">Have Specific Questions?</h2>
            <p className="text-body mb-8">
              Schedule a free consultation to get answers tailored to your situation.
            </p>
            <a href="tel:+13803240878" className="btn-cta">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now: 380-324-0878
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
