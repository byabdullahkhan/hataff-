export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  equipment: string[];
  icon: 'guard' | 'cctv' | 'access' | 'vip' | 'armored' | 'audit';
}

export interface SectorItem {
  id: string;
  title: string;
  desc: string;
  icon: 'commercial' | 'industrial' | 'residential' | 'institutional';
  details: string[];
}

export interface ManagerContact {
  id: string;
  role: string;
  name: string;
  phone: string;
  rawPhone: string;
  whatsappNumber: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'manned-guarding',
    number: '01',
    title: 'Manned Guarding',
    shortDesc:
      'Trained static guards, armed personnel and experienced supervisors. A dependable presence where it matters most.',
    fullDesc:
      'Our armed and unarmed security guards undergo rigorous vetting, psychological evaluations, and background clearance. Trained in tactical response, conflict de-escalation, emergency evacuations, and perimeter defense, they represent a solid physical deterrent at any facility.',
    features: [
      'Ex-military and law enforcement personnel',
      '24/7 roving patrol supervisors and spot checks',
      'Continuous firearms handling & marksmanship training',
      'Real-time digital guard patrol monitoring',
      'Crisis response and perimeter control protocols',
    ],
    equipment: [
      'Licensed weapons (repeater/pistols/rifles)',
      'Digital VHF/UHF wireless communication gear',
      'Tactical uniforms & ballistic body armor',
      'Night-vision & high-intensity searchlights',
    ],
    icon: 'guard',
  },
  {
    id: 'cctv-surveillance',
    number: '02',
    title: 'CCTV & Surveillance',
    shortDesc:
      'Keep a watchful eye on your premises with integrated video surveillance and professionally managed CCTV networks.',
    fullDesc:
      'Advanced optical monitoring paired with AI-driven perimeter breach detection, automatic number plate recognition (ANPR), and high-definition PTZ dome cameras. We design, install, commission, and monitor camera infrastructure for uninterrupted situational awareness.',
    features: [
      'AI smart analytics: motion tracking, intrusion lines, and facial indexing',
      'High-definition IP cameras with night vision & starlight sensors',
      'Remote monitoring command center integration',
      'Encrypted cloud & local multi-redundant NVR storage',
      'Thermal imaging for low-visibility industrial perimeters',
    ],
    equipment: [
      '4K Ultra HD motorized varifocal IP cameras',
      'Enterprise multi-channel Network Video Recorders',
      'Surge-protected uninterrupted power backup (UPS)',
      'Remote mobile & desktop live command feeds',
    ],
    icon: 'cctv',
  },
  {
    id: 'access-control',
    number: '03',
    title: 'Access Control Systems',
    shortDesc:
      'Control who comes in. Biometric identification, card-based access and automated gate barriers for secure entry.',
    fullDesc:
      'Eliminate unauthorized physical entry through multi-factor authentication checkpoints. From touchless biometric facial readers and encrypted RFID smart cards to hydraulic road blockers and motorized boom barriers, we secure every perimeter portal.',
    features: [
      'Biometric fingerprint, retina, and facial recognition scanners',
      'Encrypted RFID/Mifare proximity credentials',
      'Automated barrier gates, turnstiles, and spike road blockers',
      'Real-time employee attendance & visitor logging',
      'Integration with fire alarm automatic emergency unlocks',
    ],
    equipment: [
      'High-speed optical flap turnstiles',
      'Heavy-duty vehicle boom barriers',
      'Under-vehicle surveillance mirrors and cameras',
      'Centralized audit logging access software',
    ],
    icon: 'access',
  },
];

export const SECTORS: SectorItem[] = [
  {
    id: 'commercial',
    title: 'Commercial',
    desc: 'Offices, business premises & commercial properties',
    icon: 'commercial',
    details: [
      'Corporate head offices & multinational compounds',
      'Retail plazas, shopping malls & retail banks',
      'Visitor registration, baggage scanning & lobby control',
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial',
    desc: 'Factories, warehouses & industrial facilities',
    icon: 'industrial',
    details: [
      'Manufacturing plants, textile mills & processing yards',
      'Distribution hubs, inventory logistics & perimeter fences',
      'Heavy vehicle inspection & weighbridge monitoring',
    ],
  },
  {
    id: 'residential',
    title: 'Residential',
    desc: 'Homes, apartment buildings & residential communities',
    icon: 'residential',
    details: [
      'Gated housing societies & private residences',
      'High-rise residential complexes & condominiums',
      'Entry gate barriers, patrol vans & guest validation',
    ],
  },
];

export const MANAGERS: ManagerContact[] = [
  {
    id: 'gm',
    role: 'GENERAL MANAGER',
    name: 'Muhammad Murtaza Manzoor',
    phone: '0300 4342219',
    rawPhone: '+923004342219',
    whatsappNumber: '923004342219',
  },
  {
    id: 'fm',
    role: 'FINANCE MANAGER',
    name: 'Agha Zuhaib Khan',
    phone: '0344 9333332',
    rawPhone: '+923449333332',
    whatsappNumber: '923449333332',
  },
  {
    id: 'admin',
    role: 'ADMINISTRATION MANAGER',
    name: 'Muhammad Azhar Bhatti',
    phone: '0300 4189154',
    rawPhone: '+923004189154',
    whatsappNumber: '923004189154',
  },
];

export const COMPANY_INFO = {
  name: 'Hataff Security Systems (Pvt) Ltd.',
  shortName: 'HATAFF',
  tagline: 'VIGILANT BY DUTY. TRUSTED BY CHOICE.',
  establishedYear: '1995',
  yearsOfExperience: '30+',
  address: '2nd Floor, 13-Commercial Zone, Phase 1 DHA, Lahore, Pakistan',
  emails: ['info@hataff.com', 'hataffhr@gmail.com'],
  motto: 'Discipline. Vigilance. Protection.',
};
