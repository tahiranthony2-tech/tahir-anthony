/**
 * Tahir Anthony Welfare Organization
 * Central Configuration & Content Data
 * 
 * Notice: Content strictly follows official organization details without invented claims.
 */

export interface ProgramItem {
  id: number;
  title: string;
  objective: string;
  iconName: string;
  category: string;
}

export interface ImpactStatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  iconName: string;
}

export interface GalleryImageItem {
  id: string;
  title: string;
  category: string;
  description: string;
  altText: string;
  imageSrc?: string; // custom upload URL or static image URL
  defaultPath: string; // e.g. /images/gallery/photo-01.jpg
}

export interface OrganizationInfo {
  name: string;
  tagline: string;
  address: {
    shop: string;
    block: string;
    scheme: string;
    road: string;
    city: string;
    country: string;
    fullAddress: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    telLink: string;
    whatsappLink: string;
  };
  mission: string;
  vision: string;
  values: string[];
  leader: {
    name: string;
    title: string;
    description: string;
    organizationIntro: string;
  };
  donation: {
    jazzCash: {
      accountName: string;
      number: string;
      formattedNumber: string;
    };
    easyPaisa: {
      accountName: string;
      number: string;
      formattedNumber: string;
    };
    bank: {
      statusNote: string;
      bankName: string;
      accountTitle: string;
      accountNumber: string;
      iban: string;
    };
    instructions: string[];
  };
}

export const ORGANIZATION_DATA: OrganizationInfo = {
  name: "Tahir Anthony Welfare Organization",
  tagline: "Serving Humanity, Changing Lives",
  address: {
    shop: "Shop No. 35",
    block: "Block-P",
    scheme: "Sabzazar Scheme",
    road: "Multan Road",
    city: "Lahore",
    country: "Pakistan",
    fullAddress: "Shop No. 35, Block-P, Sabzazar Scheme, Multan Road, Lahore, Pakistan",
  },
  contact: {
    phone: "+92 324 4051273",
    phoneFormatted: "+92 324 4051273",
    telLink: "tel:+923244051273",
    whatsappLink: "https://wa.me/923244051273",
  },
  mission:
    "To serve humanity with compassion, dignity and dedication by supporting people in need, providing access to healthcare, education, food, vocational opportunities and social assistance.",
  vision:
    "A society where every person, regardless of financial circumstances, can access basic healthcare, food, education, guidance and opportunities to live a dignified life.",
  values: [
    "Compassion",
    "Dignity",
    "Service",
    "Transparency",
    "Equality",
    "Community Support",
    "Humanity",
  ],
  leader: {
    name: "Tahir Anthony",
    title: "Founder & President",
    description:
      "Tahir Anthony is associated with a humanitarian vision focused on serving people in need and contributing to the welfare and uplift of society. Through Tahir Anthony Welfare Organization, efforts are directed toward healthcare support, assistance for vulnerable families, education, vocational development, social welfare and charitable services.",
    organizationIntro:
      "Tahir Anthony Welfare Organization is dedicated to working for the welfare of the general public and supporting individuals and families facing poverty, illness, disability, unemployment and other social challenges.",
  },
  donation: {
    jazzCash: {
      accountName: "Tahir Anthony",
      number: "+923244051273",
      formattedNumber: "+92 324 4051273",
    },
    easyPaisa: {
      accountName: "Tahir Anthony",
      number: "+923244051273",
      formattedNumber: "+92 324 4051273",
    },
    bank: {
      statusNote: "Bank donation details will be added soon.",
      bankName: "To be announced",
      accountTitle: "Tahir Anthony Welfare Organization",
      accountNumber: "To be updated",
      iban: "PK-- ---- ---- ---- ---- ----",
    },
    instructions: [
      "Send your donation through JazzCash, EasyPaisa or bank transfer.",
      "Keep your transaction receipt / reference.",
      "If required, contact the organization using the contact details provided on this website (+92 324 4051273).",
    ],
  },
};

export const MAJOR_WORK_AREAS = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Support for standard medical facilities, patient care, and essential health services.",
    icon: "HeartPulse",
  },
  {
    id: "food-support",
    title: "Food & Family Support",
    description: "Providing meals, bereavement ration support, and relief for vulnerable households.",
    icon: "Utensils",
  },
  {
    id: "education",
    title: "Education",
    description: "Promoting learning opportunities, adult literacy, and guidance for all ages.",
    icon: "GraduationCap",
  },
  {
    id: "medical-camps",
    title: "Medical Camps",
    description: "Organizing free medical check-up camps and basic first-aid medicine distribution.",
    icon: "Stethoscope",
  },
  {
    id: "vocational",
    title: "Youth Vocational Training",
    description: "Building practical skills, vocational instruction, and sustainable livelihood avenues.",
    icon: "Wrench",
  },
  {
    id: "needy-support",
    title: "Support for People in Need",
    description: "Charitable assistance for families facing poverty, illness, disability, or bereavement.",
    icon: "Users",
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 1,
    title: "Healthcare & Hospitals",
    objective: "To establish hospitals for the welfare of the general public and provide standard medical facilities.",
    iconName: "Hospital",
    category: "Healthcare",
  },
  {
    id: 2,
    title: "Support for Widows & Families",
    objective: "To provide food support on bereavement and assist widows and vulnerable families.",
    iconName: "Home",
    category: "Family Welfare",
  },
  {
    id: 3,
    title: "Patient Guidance Centers",
    objective: "To establish guidance centers in hospitals to help patients and their families navigate available services and receive appropriate guidance.",
    iconName: "Compass",
    category: "Guidance",
  },
  {
    id: 4,
    title: "Support for Orphan Girls",
    objective: "To support the marriage of orphan girls and contribute toward their wellbeing and future.",
    iconName: "HeartHandshake",
    category: "Social Support",
  },
  {
    id: 5,
    title: "Adult Education",
    objective: "To promote education and learning opportunities for adults.",
    iconName: "BookOpen",
    category: "Education",
  },
  {
    id: 6,
    title: "Free Medical Camps",
    objective: "To establish and organize free medical camps to help people who have limited access to healthcare.",
    iconName: "Activity",
    category: "Healthcare",
  },
  {
    id: 7,
    title: "Medical & First-Aid Centers",
    objective: "To establish medical centers providing first-aid and basic medical support to the general public.",
    iconName: "Cross",
    category: "Healthcare",
  },
  {
    id: 8,
    title: "Medical Support for Poor Families",
    objective: "To provide medical assistance to people who cannot afford necessary healthcare.",
    iconName: "ShieldPlus",
    category: "Healthcare",
  },
  {
    id: 9,
    title: "Social Welfare & Community Support",
    objective: "To help members of the general public address social issues and connect them with appropriate support.",
    iconName: "Users2",
    category: "Community",
  },
  {
    id: 10,
    title: "Youth Vocational Training",
    objective: "To establish vocational centers for young people and help develop practical skills and employment opportunities.",
    iconName: "Briefcase",
    category: "Vocational",
  },
  {
    id: 11,
    title: "Charitable & Humanitarian Services",
    objective: "To establish charitable institutions for the benefit and uplift of humanity and work toward reducing poverty, disease, misery and distress, including the difficulties faced by people with disabilities.",
    iconName: "Sparkles",
    category: "Humanitarian",
  },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Welfare Activities",
  "Medical Camps",
  "Food Distribution",
  "Community Support",
  "Education",
  "Vocational Training",
  "Events",
  "Volunteers",
] as const;

export const INITIAL_GALLERY_ITEMS: GalleryImageItem[] = [
  {
    id: "gal-1",
    title: "Free Medical Camp & Patient Consultation",
    category: "Medical Camps",
    description: "Community health camp organizing free medical check-ups and doctor consultations for local families.",
    altText: "Free medical camp organized by Tahir Anthony Welfare Organization in Lahore",
    defaultPath: "/images/gallery/photo-01.jpg",
  },
  {
    id: "gal-2",
    title: "Prescription Medicine Distribution",
    category: "Medical Camps",
    description: "Providing free essential medicines and pediatric supplies to patients in need.",
    altText: "Distribution of free medicine at Tahir Anthony Welfare Organization medical camp",
    defaultPath: "/images/gallery/photo-02.jpg",
  },
  {
    id: "gal-3",
    title: "Community Food & Ration Distribution",
    category: "Food Distribution",
    description: "Nutritious meal preparation and food distribution for underprivileged families and laborers.",
    altText: "Community food distribution by Tahir Anthony Welfare Organization",
    defaultPath: "/images/gallery/photo-03.jpg",
  },
  {
    id: "gal-4",
    title: "Emergency Relief & Flood Assistance",
    category: "Welfare Activities",
    description: "Volunteer rescue and emergency supply distribution during regional humanitarian relief missions.",
    altText: "Emergency flood relief and aid distribution mission",
    defaultPath: "/images/gallery/photo-04.jpg",
  },
  {
    id: "gal-5",
    title: "Mobility Aid & Blanket Distribution",
    category: "Community Support",
    description: "Providing walking aids, crutches, and winter packages to elderly and disabled community members.",
    altText: "Distribution of mobility aids and winter packages to needy individuals",
    defaultPath: "/images/gallery/photo-05.jpg",
  },
  {
    id: "gal-6",
    title: "Medical Mobile Unit & Field Health Camp",
    category: "Medical Camps",
    description: "Field team conducting mobile health services and outreach for remote neighborhoods.",
    altText: "Mobile medical unit team providing health care assistance",
    defaultPath: "/images/gallery/photo-06.jpg",
  },
  {
    id: "gal-7",
    title: "Organization Delegation & Community Reception",
    category: "Events",
    description: "Humanitarian gathering and welcoming dignitaries and community leaders in service of humanity.",
    altText: "Tahir Anthony Welfare Organization community gathering and event",
    defaultPath: "/images/gallery/photo-07.jpg",
  },
  {
    id: "gal-8",
    title: "Volunteer Team & Service Workers",
    category: "Volunteers",
    description: "Dedicated volunteer members coordinating relief activities and humanitarian support.",
    altText: "Volunteers wearing Tahir Anthony Welfare Organization emblem shirts",
    defaultPath: "/images/gallery/photo-08.jpg",
  },
  {
    id: "gal-9",
    title: "Youth Skills & Vocational Session",
    category: "Vocational Training",
    description: "Skills development and vocational learning guidance for young people.",
    altText: "Youth vocational training and guidance session",
    defaultPath: "/images/gallery/photo-09.jpg",
  },
  {
    id: "gal-10",
    title: "Adult Literacy & Learning Circle",
    category: "Education",
    description: "Promoting learning opportunities, adult basic literacy, and community awareness.",
    altText: "Adult education and community literacy outreach program",
    defaultPath: "/images/gallery/photo-10.jpg",
  },
  {
    id: "gal-11",
    title: "Widows & Bereaved Family Assistance",
    category: "Community Support",
    description: "Delivering monthly assistance and essential rations directly to widows and vulnerable homes.",
    altText: "Family assistance and food support delivered to vulnerable households",
    defaultPath: "/images/gallery/photo-11.jpg",
  },
  {
    id: "gal-12",
    title: "Patient Guidance Desk & Assistance",
    category: "Welfare Activities",
    description: "Assisting patients with medical registration, navigation, and hospital guidance.",
    altText: "Volunteer guiding patients and families during hospital visits",
    defaultPath: "/images/gallery/photo-12.jpg",
  },
];

export const DEFAULT_IMPACT_STATS: ImpactStatItem[] = [
  {
    id: "stat-volunteer-hours",
    label: "Volunteer Hours",
    value: 12500,
    suffix: "+",
    description: "Dedicated service hours logged by youth and community volunteers.",
    iconName: "Clock",
  },
  {
    id: "stat-meals-provided",
    label: "Meals Provided",
    value: 45000,
    suffix: "+",
    description: "Cooked meal rations and bereavement food distribution in Lahore.",
    iconName: "Utensils",
  },
  {
    id: "stat-medical-checkups",
    label: "Free Medical Checkups",
    value: 8200,
    suffix: "+",
    description: "Doctor consultations and free essential medicines supplied in camps.",
    iconName: "Stethoscope",
  },
  {
    id: "stat-families-assisted",
    label: "Families Supported",
    value: 3400,
    suffix: "+",
    description: "Vulnerable households, widows, and orphan welfare beneficiaries.",
    iconName: "HeartHandshake",
  },
];

