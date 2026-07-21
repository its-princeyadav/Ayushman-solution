// Content for /erp/sap-near-you ("SAP Near You"). Reuses the exact same
// section components as the data/sap/*.js pages — only the shape differs
// slightly since this page is a directory of city links rather than a
// single service page. Button variant "migrationPrimary" (already used on
// the Migration/License/Consulting/Add-Ons pages) is reused as-is, per this
// page's own brief: no new colors, only what's already used across the site.

export const sapNearYou = {
  // TODO: no dedicated "team on a rooftop terrace" photo exists in the
  // project yet — reusing the same office/meeting photography already
  // established across this design system (proven safe for full-bleed hero).
  hero: {
    backgroundImage: "/assets/image2/city-05.webp",
    align: "right",
    textTheme: "light",
    title: "Simplify Your Business With Our ERP Services Nearby",
    description: "Find a local Ayushman Solution SAP Business One team in your city, backed by an SAP Platinum Partner.",
    button: { label: "Get Started", href: "#", variant: "migrationPrimary" },
  },

  cityListing: {
    title: "Find SAP Business One Experts in Your City",
    description: "Ayushman Solution's on-ground SAP teams bring local implementation, support, and consulting expertise to every major city we serve.",
  },

  // TODO: no dedicated city-landmark photography exists in the project yet —
  // reusing the same small pool of generic photography already established
  // across this design system until real city-specific images are supplied.
  cities: [
    {
      title: "ERP Software Ahmedabad",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Ahmedabad.",
      image: "/assets/image2/sap-migration-01.webp",
      route: "/erp/erp-software-ahmedabad",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Bangalore",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Bangalore.",
      image: "/assets/image2/sap-migration-02.webp",
      route: "/erp/erp-software-bangalore",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Chennai",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Chennai.",
      image: "/assets/image2/sap-migration-03.webp",
      route: "/erp/erp-software-chennai",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Delhi NCR",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Delhi NCR.",
      image: "/assets/image2/banner-sap-migration.webp",
      route: "/erp/erp-software-delhi-ncr",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Hyderabad",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Hyderabad.",
      image: "/assets/image2/modern-sap-migration.webp",
      route: "/erp/erp-software-hyderabad",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Kerala",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Kerala.",
      image: "/assets/image2/SAP-Services-3.png",
      route: "/erp/erp-software-kerala",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Mumbai",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Mumbai.",
      image: "/assets/image2/drone-img.webp",
      route: "/erp/erp-software-mumbai",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Nepal",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Nepal.",
      image: "/assets/image2/solution-products-img-1.webp",
      route: "/erp/erp-software-nepal",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Pune",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Pune.",
      image: "/assets/image2/solution-products-img-2.webp",
      route: "/erp/erp-software-pune",
      buttonText: "Read More",
    },
    {
      title: "ERP Software Rajasthan",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Rajasthan.",
      image: "/assets/image2/SAP-Services-1.png",
      route: "/erp/erp-software-rajasthan",
      buttonText: "Read More",
    },
    {
      title: "Leading SAP Business One Partner in Coimbatore",
      description: "Deploy and scale SAP Business One with local, on-ground SAP experts in Coimbatore.",
      image: "/assets/image2/SAP-Services-2.png",
      route: "/erp/erp-software-coimbatore",
      buttonText: "Read More",
    },
  ],

  // TODO: reusing the same underwater CTA photo already established across
  // the design system for this closing CTA banner pattern.
  ctaBanner: {
    title: "Don't See Your City Listed?",
    description: "Our SAP Business One teams support businesses across India and beyond — reach out and we'll connect you with the nearest available team.",
    button: { label: "Contact Us", href: "#", variant: "migrationPrimary" },
    backgroundImage: "/assets/image2/service-water.webp",
    textTheme: "light",
  },

  contactTeaser: {
    title: "Let's Start a Conversation",
    theme: "light",
    compact: true,
    background: "linear-gradient(120deg, #0d2c7d 0%, #178ae8 100%)",
    buttons: [{ label: "Connect With Us", href: "#", variant: "outlineLight" }],
  },
};
