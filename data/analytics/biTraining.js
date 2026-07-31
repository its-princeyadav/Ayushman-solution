// Content for /analytics/bi-training. Follows the exact same architecture as
// data/analytics/dataVisualization.js, biDashboard.js and
// biManagedServices.js: a single flat exported object, one key per section,
// consumed by components/Analytics-pages/BiTraining.jsx. Every section
// reuses an existing Sap/* component — no new components were introduced for
// this page. Testimonials, the client wall, blogs and case studies are
// reused verbatim from their existing sources, same convention already
// established across the sibling Analytics pages and the sap/*.js data
// files.

import { dataVisualization } from "./dataVisualization";
import { sapManagedServices } from "../sap/sapManagedServices";

export const biTraining = {
  // TODO: no dedicated BI Training photography exists in the project yet —
  // reusing the same established "BI" hero banner asset already introduced
  // for the sibling BI Dashboard page instead of sourcing a new hero image.
  hero: {
    backgroundImage: "/assets/image2/banner-bi-dashboard.webp",
    align: "right",
    title: "Accelerate Speed-to-Value with BI Training",
    button: { label: "Find Out More", href: "#contact" },
  },

  intro: {
    title: "Create your Team of Tableau Experts",
    description:
      "Ayushman Solutions BI Training is for anyone who works with data regardless of technical or analytical background. Our Tableau experts help you and your team uncover hidden insights such as customer purchase behavior, sales trends, product trends, supply chain trends, inventory, etc with high precision. As a leading BI training partner, we will help your team to explore self-service capabilities in Tableau to experiment, prepare, and present data easily, quickly, and aesthetically. Our Tableau experts will give you hands-on training to create various charts, maps, scatterplots, and immersive dashboards for your department and business. We also help you create table calculations, treemap charts, storylines and make you confident and expert to analyze and visualize complex questions with ease.",
  },

  // Content left / image right — reuses "drone-flyer-actual.png" the same
  // recurring way dataVisualization.js's `overview` and
  // biManagedServices.js's `enterpriseFit` sections already do.
  businessAnalytics: {
    imagePosition: "right",
    title: "Business analytics made easy with Ayushman Solutions BI Training",
    description: [
      "Learning paths eliminate probabilities of guesswork and provide a clear path to proficiency and next-level performance. As your Tableau training partner, we instill confidence in using Tableau software and enable you and your team to derive valuable insights faster.",
      "We offer a full stack of product training, so you can gain maximum business value from your investment. Whether you want to hone your expertise in building great visualizations or ad-hoc reporting, or advanced geographic mapping techniques or just about anything, we got you covered.",
    ],
    button: { label: "Explore Analytic Services", href: "#contact" },
    image: "/assets/image2/drone-flyer-actual.png",
    imageAlt: "Specialist scaling a rock face, representing BI training growth",
  },

  personalized: {
    title: "Personalized BI Training",
    description:
      "No team and organization can be alike, so why should their training be the same? We provide customized training to fit your needs best. Our BI training experts cover everything from getting started on Tableau software to learning ways to filter, choosing dynamic parameters, some basic tooltips for forecasting, clustering and analysis with dashboards and stories. Whether you want short or long term training, we work with you to deliver results. Our learning atmosphere allows you to take an active role in discussions in training classes and gain practical knowledge to use Tableau software without any bottlenecks.",
    buttons: [{ label: "Talk to Experts", href: "#contact" }],
  },

  // Enterprise Statistics — reuses the exact same Statistics component
  // (ClientsSection) and content already established for the Data
  // Visualization / BI Managed Services pages.
  clients: dataVisualization.clients,

  // Business Benefits — reuses the exact same FunctionalityGrid +
  // ImageOverlayCard "Card Grid" combo already established for the Key
  // Service Offerings grid on the BI Managed Services page: label always
  // visible, description + button reveal on hover (the component's existing
  // default) — no permanently-expanded card this time.
  // TODO: no dedicated photography exists for these six tiles yet — reusing
  // already-established generic corporate/tech imagery from across the
  // project instead (same convention as sapHub.js / erpSoftwareHyderabad.js
  // and the sibling BI Managed Services grid).
  benefits: {
    title: "Business Benefits of our BI Training",
    items: [
      {
        label: "Optimize your current talent",
        description:
          "Help train and hone the skills your team needs to expand their proficiency at using Tableau software. Enable the team to perform ad-hoc analysis on the go while improving business decision-making.",
        image: "/assets/image2/sap-migration-01.webp",
        href: "#",
        button: { label: "Learn More", href: "#contact" },
      },
      {
        label: "No need to hire additional resources",
        description:
          "Avoid the need and hassle of hiring, interviewing and onboarding new hires to manage Tableau software. Empower your current workforce through practical Tableau training.",
        image: "/assets/image2/sap-migration-03.webp",
        href: "#",
        button: { label: "Learn More", href: "#contact" },
      },
      {
        label: "Advance your team skills",
        description:
          "Have your team contributing more as they become confident using Tableau software through customized, dynamic and hands-on training. Increase productivity through practical learning.",
        image: "/assets/image2/city-06.webp",
        href: "#",
        button: { label: "Learn More", href: "#contact" },
      },
      {
        label: "Train anytime and anywhere",
        description:
          "Whether you want Tableau training at your office or any preferred location, we provide training at your pace and convenience. Flexible learning designed around your business.",
        image: "/assets/image2/fujikura-thumb-1.jpg",
        href: "#",
        button: { label: "Learn More", href: "#contact" },
      },
      {
        label: "100% end-user satisfaction",
        description:
          "Outcome-based learning through extensive hands-on exercises and real-world use cases ensuring maximum Tableau adoption and end-user satisfaction.",
        image: "/assets/image2/city-05.webp",
        href: "#",
        button: { label: "Learn More", href: "#contact" },
      },
      {
        label: "High ROI",
        description:
          "Our BI experts help maximize the value of your Tableau implementation by providing practical learning from beginner to advanced concepts. Achieve better reporting, faster adoption and measurable ROI.",
        image: "/assets/image2/clearpack-thumb-1.jpg",
        href: "#",
        button: { label: "Learn More", href: "#contact" },
      },
    ],
  },

  // Three full-bleed banners reusing the same HeroBanner component already
  // used for every page's own hero — HeroBanner is generic full-bleed
  // image + heading + copy, so no new component is needed to repeat it
  // further down a page. `overlayHeading` carries the shared tagline that
  // repeats across all three in the reference layout.
  // TODO: no dedicated photography exists for these three banners yet —
  // reusing the same outdoor/adventure imagery already established
  // throughout the Analytics practice (dataVisualization.js, sibling BI
  // pages) instead of sourcing new photography.
  skillsBanner: {
    backgroundImage: "/assets/image2/green-mountains.png",
    imagePosition: "bottom",
    align: "left",
    title: "Expand your BI skills",
    description:
      "Our data analytics experts use practical casework and level up your BI skills so that you can use Tableau software confidently and lay informed business decisions.",
    overlayHeading: "Speed user adoption & maximize ROI with BI Training",
  },

  inHouseBanner: {
    backgroundImage: "/assets/image2/man-drone-fly.png",
    align: "left",
    title: "Bring expertise in-house",
    description: "No matter where you are located, we can bring expertise in-house. We ensure a rich learning environment and bring you the best every day.",
    overlayHeading: "Speed user adoption & maximize ROI with BI Training",
  },

  expertsBanner: {
    backgroundImage: "/assets/image2/banner-sap-migration.webp",
    align: "left",
    title: "Top Training Experts",
    description:
      "Learn from and be coached by the best Tableau experts — supportive leaders and professionals who share their industry, technical and functional expertise.",
    overlayHeading: "Speed user adoption & maximize ROI with BI Training",
  },

  // Testimonials — reuses the exact same TestimonialsSection component and
  // real, already-approved customer stories already established for the BI
  // Managed Services page (sapManagedServices.js), only the heading/action
  // copy changes to match this page's own reference layout.
  testimonials: {
    ...sapManagedServices.testimonials,
    title: "Testimonials",
    description: undefined,
    action: { label: "View More", href: "#" },
  },

  // Blogs — reuses the exact same BlogSection component AND blog data
  // source already established for Data Visualization / BI Dashboard / BI
  // Managed Services.
  blogs: {
    ...dataVisualization.blogs,
    title: "Blogs",
  },

  // Case Studies — reused verbatim from dataVisualization.js's own
  // caseStudies content, same component (StoriesSection).
  caseStudies: dataVisualization.caseStudies,

  // Final CTA — same background image, layout and component already used
  // across every Analytics page's own CTASection.
  cta: {
    ...dataVisualization.cta,
    title: "Not sure where to begin?",
    description: "Inquire about our suite of BI training solutions personalized for your enterprise.",
    button: { label: "Talk to Experts", href: "#contact", variant: "primary" },
  },

  // Reused verbatim — identical closing "Let's Start a Conversation" bar
  // used at the end of every Analytics page.
  contactTeaser: dataVisualization.contactTeaser,
};
