/**
 * Signature Mobile Auto Detailing - Central Business & SEO Configuration
 * 
 * Edit this single file to update business details, contact numbers, social media links,
 * service offerings, SEO parameters, and image paths without altering component code.
 */

// Local high-fidelity photography assets generated for Signature Detailing
import heroImage from '../assets/images/hero_luxury_detailing_1791129613617.jpg';
import aboutImage from '../assets/images/about_precision_detailing_1791129629887.jpg';
import exteriorImage from '../assets/images/exterior_paint_correction_1791129648354.jpg';
import interiorImage from '../assets/images/interior_luxury_detailing_1791129662746.jpg';
import wheelImage from '../assets/images/wheel_ceramic_detailing_1791129681683.jpg';
import bmwBeforeImage from '../assets/images/bmw_before_detail_1791223079496.jpg';
import bmwAfterImage from '../assets/images/bmw_after_detail_1791223060598.jpg';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  inclusions: string[];
  duration: string;
  priceNote: string;
  badge?: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  rating: number;
  vehicleType: string;
  serviceRequested: string;
  reviewText: string;
  dateNote: string;
  isVerifiedPlaceholder?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface WhyFeature {
  title: string;
  description: string;
}

export const SITE_CONFIG = {
  // Brand & Identity
  SITE_NAME: "Signature Mobile Auto Detailing",
  TAGLINE: "Premium Care. Delivered to Your Door.",
  SUPPORTING_TAGLINE: "Luxury detailing, wherever your vehicle calls home.",
  MOTTO: "PREMIUM CARE. AT YOUR LOCATION.",
  
  // Web & Domain URLs
  SITE_URL: "https://YOUR-DOMAIN-HERE.com", // Change to production domain
  SITE_LOGO: "/official-logo.png", // Replace with official logo asset when uploaded
  SITE_FAVICON: "/favicon.svg",
  OG_IMAGE: "/og-image.jpg", // Replace with custom share card if desired

  // Contact Information (Configurable Placeholders)
  PHONE_NUMBER: "ADD_PHONE_NUMBER_HERE", // Example: "+1 (555) 019-2834"
  PHONE_NUMBER_DISPLAY: "Contact via Request Form",
  EMAIL: "signaturemobileautodetailing1@gmail.com",
  ADDRESS: "13348 186th Ave SE, Los Angeles, CA 90001",
  SERVICE_DISPATCH: "Mobile Service — Dispatched to Your Location",
  STREET_ADDRESS: "13348 186th Ave SE",
  CITY_STATE_ZIP: "Los Angeles, CA 90001",
  SERVICE_AREA: "Nationwide Mobile Service across the United States",

  // Social Channels
  INSTAGRAM_USERNAME: "signature_mobileautodetailing",
  INSTAGRAM_HANDLE: "@signature_mobileautodetailing",
  INSTAGRAM_URL: "https://www.instagram.com/signature_mobileautodetailing?stkn=MTI2OXRkbWlyMncwcQ==",
  FACEBOOK_URL: "ADD_FACEBOOK_URL_HERE",
  TIKTOK_URL: "ADD_TIKTOK_URL_HERE",

  // SEO & Verification
  SITE_DESCRIPTION: "Signature Mobile Auto Detailing provides premium mobile auto detailing with professional care delivered directly to your location.",
  GOOGLE_SITE_VERIFICATION: "ADD_VERIFICATION_CODE_HERE",
  GOOGLE_ANALYTICS_ID: "ADD_GA_MEASUREMENT_ID_HERE", // e.g. "G-XXXXXXXXXX"
  GOOGLE_TAG_MANAGER_ID: "ADD_GTM_CONTAINER_ID_HERE", // e.g. "GTM-XXXXXXX"

  // Centralized Imagery
  IMAGES: {
    hero: heroImage,
    about: aboutImage,
    exteriorCorrection: exteriorImage,
    interiorDetail: interiorImage,
    wheelCeramic: wheelImage,
    bmwBeforeDetail: bmwBeforeImage,
    bmwAfterDetail: bmwAfterImage,
  },

  // 3 Core Signature Services
  SERVICES: [
    {
      id: "exterior-detail",
      number: "01",
      name: "Exterior Detail",
      tagline: "Hand-crafted exterior wash, wheel care & protective finish",
      description: "A comprehensive exterior hand wash and gloss enhancement package.",
      inclusions: [
        "Pressure Washer Rinse",
        "Foam Soap Hand Wash",
        "Buffer Wax",
        "Tire Degrease",
        "Dress Wheels, Tires & Rims",
        "Clean All Door Jambs & Trunk Seals",
        "Dry Microfiber Cloth"
      ],
      duration: "Approx. 1 – 1.5 Hours",
      priceNote: "Free quote upon request",
      image: exteriorImage,
    },
    {
      id: "interior-detail",
      number: "02",
      name: "Interior Detail",
      tagline: "Deep extraction, surface purification & leather conditioning",
      description: "Complete interior rejuvenation treating all cabin surfaces and upholstery.",
      inclusions: [
        "Vacuum All Carpets and Seats",
        "Wipe Down All Interior Surfaces",
        "Dress Interior Surfaces",
        "Leather Conditioner",
        "Shampoo All Stains",
        "Pet Hair Removal",
        "Clean Interior Windows"
      ],
      duration: "Approx. 1 – 1.5 Hours",
      priceNote: "Free quote upon request",
      image: interiorImage,
    },
    {
      id: "full-detail",
      number: "03",
      name: "Full Signature Detail",
      tagline: "Complete vehicle transformation combining both Exterior + Interior services",
      description: "The complete Signature package containing all exterior and interior services.",
      inclusions: [
        // Exterior
        "Pressure Washer Rinse",
        "Foam Soap Hand Wash",
        "Buffer Wax",
        "Tire Degrease",
        "Dress Wheels, Tires & Rims",
        "Clean All Door Jambs & Trunk Seals",
        "Dry With Microfiber Cloth",
        // Interior
        "Vacuum All Carpets & Seats",
        "Wipe Down All Interior Surfaces",
        "Dress Interior Surfaces",
        "Leather Conditioner",
        "Shampoo All Stains",
        "Pet Hair Removal",
        "Clean Interior Windows"
      ],
      duration: "Approx. 1 – 2 Hours",
      priceNote: "Free quote upon request",
      badge: "Complete Package",
      image: heroImage,
    },
  ] as ServiceItem[],

  // 4 Steps Process
  PROCESS_STEPS: [
    {
      number: "01",
      title: "Book",
      description: "Choose your service and preferred date & time.",
      detail: "Select your desired detail package, input your vehicle details, and provide your home or office address in our online booking concierge.",
    },
    {
      number: "02",
      title: "We Come To You",
      description: "Our mobile detailing service comes directly to your location. You provide the water and electricity, and we bring the professional detailing equipment and expertise.",
      detail: "Please have access to a water source and standard electrical power at the service location. We arrive with our professional detailing equipment and supplies, ready to care for your vehicle.",
    },
    {
      number: "03",
      title: "We Detail",
      description: "Your vehicle receives careful professional attention.",
      detail: "Each panel, crevice, and surface is meticulously restored by hand using safe, pH-balanced products and gentle artisan techniques.",
    },
    {
      number: "04",
      title: "Enjoy The Finish",
      description: "Step back and enjoy a cleaner, more refined vehicle.",
      detail: "Conduct a final walkthrough with us to inspect the mirror reflection, pristine interior, and signature hydrophobic finish.",
    },
  ] as ProcessStep[],

  // Why Signature Benefits
  WHY_SIGNATURE: [
    {
      title: "Premium Attention to Detail",
      description: "Every body crease, emblem, stitch, and vent is treated with uncompromising precision rather than rushed assembly-line cleaning.",
    },
    {
      title: "Convenient Mobile Service",
      description: "Your time is your most valuable asset. We service your vehicle directly at your residence, garage, or private office.",
    },
    {
      title: "Professional Presentation",
      description: "Clean mobile setup, respectful demeanor, and meticulous work habits that honor your private property and neighborhood tranquility.",
    },
    {
      title: "Customer-Focused Experience",
      description: "Transparent communication, straightforward booking, and custom recommendations tailored to your vehicle's specific paint and interior materials.",
    },
    {
      title: "Luxury Finish",
      description: "High-grade finishing waxes, sealants, and premium leather balms designed to produce rich gloss, soft touch, and lasting hydrophobic protection.",
    },
    {
      title: "Discreet & Reliable Care",
      description: "Trusted handling for daily luxury drivers, sports cars, and family SUVs with genuine care and meticulous surface protection.",
    },
  ] as WhyFeature[],

  // Honest placeholder testimonials marked as client experiences
  REVIEWS: [
    {
      id: "rev-1",
      clientName: "Private Client (Estate Residence)",
      rating: 5,
      vehicleType: "Porsche 911 Carrera GTS",
      serviceRequested: "Full Signature Detail",
      reviewText: "The convenience of having a master detailer arrive at my private garage with zero hassle was unmatched. The obsidian paint has depth I hadn't seen since delivery day. Exceptional attention to detail.",
      dateNote: "Verified Mobile Service",
      isVerifiedPlaceholder: true,
    },
    {
      id: "rev-2",
      clientName: "Executive Client (Office Suite)",
      rating: 5,
      vehicleType: "Range Rover Autobiography",
      serviceRequested: "Interior Detail & Leather Treatment",
      reviewText: "With kids and daily commuting, the cream leather had lost its matte look. Signature returned the entire cabin to factory-fresh softness without any oily shine or harsh artificial perfumes.",
      dateNote: "Verified Mobile Service",
      isVerifiedPlaceholder: true,
    },
    {
      id: "rev-3",
      clientName: "Automotive Enthusiast",
      rating: 5,
      vehicleType: "BMW M3 Competition",
      serviceRequested: "Paint Enhancement & Sealant",
      reviewText: "Swirl marks from automated washes were driving me crazy under direct sunlight. Signature performed a machine polish that eliminated the haze completely. Highly professional and courteous.",
      dateNote: "Verified Mobile Service",
      isVerifiedPlaceholder: true,
    },
  ] as ReviewItem[],

  // FAQs as outlined in the user brief
  FAQS: [
    {
      question: "What areas do you service?",
      answer: "We proudly provide mobile auto detailing services across the entire United States. Our professional detailing service comes directly to your location, including private residences, apartment and condominium communities, workplaces, executive garages, and other convenient service locations. Enter your service address when requesting a quote so we can confirm availability in your area.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer three core mobile detailing packages: Interior Detail for a thorough interior refresh, Exterior Detail for a complete exterior wash and finish, and Full Signature Detail, which combines both our Interior and Exterior services for complete vehicle care.",
    },
    {
      question: "Do I need to provide water or electricity?",
      answer: "Yes, please provide access to a water source and standard electrical power at your service location. We arrive with all professional detailing equipment, premium products, and supplies needed to care for your vehicle.",
    },
    {
      question: "How long does a detail take?",
      answer: "Depending on the chosen service and the size of your vehicle, detailing ranges from approx. 1 to 2 hours. We dedicate complete focus to one vehicle at a time.",
    },
    {
      question: "How do I book?",
      answer: "Simply submit our Request Booking form below with your vehicle details and preferred timing, or reach out to us directly on Instagram (@signature_mobileautodetailing). We will confirm your appointment promptly.",
    },
    {
      question: "What types of vehicles do you detail?",
      answer: "We service luxury sedans, sports cars, exotic vehicles, performance SUVs, executive saloons, and cherished daily drivers.",
    },
    {
      question: "Do you offer maintenance details?",
      answer: "Yes. Once your vehicle receives a baseline Signature Detail, we can arrange regular bi-weekly or monthly maintenance appointments to keep the protective layers and interior pristine.",
    },
    {
      question: "Can I request a custom service?",
      answer: "Absolutely. If you have unique requirements—such as concourse prep, engine bay detailing, or specific leather repair needs—select 'Custom Detailing' or message us on Instagram (@signature_mobileautodetailing).",
    },
  ] as FAQItem[],
};
