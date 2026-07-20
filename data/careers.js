// Single source of content for the Careers page (components/Careers/Careers.jsx).
// Swap image paths / job listings below to update the page — nothing else
// needs to change. Follows the same shape as data/whoWeAre.js.

export const HERO = {
  image: "/assets/images/lg-img.webp",
  alt: "Ayushman Solution team collaborating in the office",
  eyebrow: "Careers",
  heading: "Build What's Next With Us",
  subheading:
    "Join the team helping enterprises across 21+ industries run smarter on SAP. We're looking for people who like solving hard problems.",
};

export const INTRO = {
  heading: "Why Ayushman Solution",
  paragraphs: [
    "We're an SAP Platinum Partner, but the work is never just about the software - it's about the businesses we help transform and the team that makes it happen. You'll work directly with clients across manufacturing, retail, and logistics, on problems that actually matter to how they operate.",
    "We keep teams small and give people real ownership early - not years of ramp-up before you get to make decisions that count.",
  ],
};

// TODO: replace with real employee-culture photography once available -
// this is a generic office/collaboration stock photo, chosen deliberately
// over unrelated client-project imagery elsewhere in the project's asset
// folders so this section doesn't misrepresent whose photo it is.
export const CULTURE = {
  image: "/assets/images/about-2.webp",
  alt: "Colleagues collaborating in an open office space",
  heading: "Life at Ayushman Solution",
  points: [
    "Small, senior-led teams - you're never more than one conversation away from the people making decisions.",
    "Certified SAP training and real project exposure from day one, not a year of shadowing.",
    "Hybrid-friendly working and a culture that measures output, not hours logged.",
  ],
};

// icon is a key into the ICONS map in Careers.jsx (keeps this file framework-free).
export const BENEFITS = [
  {
    icon: "growth",
    title: "Learning & Growth",
    description: "SAP certification sponsorship and a real budget for courses and conferences.",
  },
  {
    icon: "health",
    title: "Health & Wellness",
    description: "Comprehensive medical coverage for you and your family.",
  },
  {
    icon: "team",
    title: "Collaborative Culture",
    description: "Small project pods, not silos - you'll know everyone you work with.",
  },
  {
    icon: "tech",
    title: "Modern Tooling",
    description: "Current SAP stack and the hardware to run it properly, no legacy workarounds.",
  },
  {
    icon: "global",
    title: "Global Exposure",
    description: "Work with clients across India, APJ, and beyond as a United VARs SAP partner.",
  },
  {
    icon: "balance",
    title: "Work-Life Balance",
    description: "Flexible hours and a genuinely enforced no-weekend-emails norm.",
  },
];

// TODO: this is a representative set of roles, not a live feed - replace
// with real current openings (or wire up an ATS/careers-API integration)
// before launch. `id` is used as the value in the application form's
// position <select>, so keep it stable once real applicants start using it.
export const JOBS = [
  {
    id: "sap-b1-functional-consultant",
    title: "SAP Business One Functional Consultant",
    department: "Implementation",
    location: "Gurgaon, India",
    type: "Full-time",
    description:
      "Lead requirement-gathering and configuration for SAP Business One implementations across manufacturing and retail clients.",
  },
  {
    id: "sap-abap-developer",
    title: "SAP ABAP Developer",
    department: "Engineering",
    location: "Gurgaon, India",
    type: "Full-time",
    description: "Build and maintain custom SAP add-ons, reports, and integrations for our S/4HANA and B1 client base.",
  },
  {
    id: "sap-support-engineer",
    title: "SAP Managed Services Engineer",
    department: "Support",
    location: "Remote (India)",
    type: "Full-time",
    description: "Own day-to-day support and monitoring for our managed-services client accounts.",
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    department: "Sales",
    location: "Gurgaon, India",
    type: "Full-time",
    description: "Identify and develop new SAP consulting opportunities across our target industries.",
  },
];
