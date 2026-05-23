export const services = [
  { slug: "ophthalmology", name: "Ophthalmology", icon: "Eye", desc: "Comprehensive eye care, vision testing, and surgical solutions." },
  { slug: "dental-care", name: "Dental Care", icon: "Smile", desc: "Complete dental services from cleaning to advanced restorations." },
  { slug: "cardiology", name: "Cardiology", icon: "HeartPulse", desc: "Heart health diagnostics, cardiac care, and prevention." },
  { slug: "neuro-surgery", name: "Neuro Surgery", icon: "Brain", desc: "Advanced neurological procedures by expert surgeons." },
  { slug: "prenatal-care", name: "Prenatal Care", icon: "Baby", desc: "Compassionate maternal care from pregnancy to delivery." },
  { slug: "food-nutrition", name: "Food & Nutrition", icon: "Apple", desc: "Personalized nutrition plans and dietary counseling." },
  { slug: "medicine-nephrology", name: "Medicine & Nephrology", icon: "FlaskConical", desc: "Kidney health and internal medicine specialists." },
  { slug: "acne-treatment", name: "Acne Treatment", icon: "Sparkles", desc: "Dermatology-led acne care for clear, healthy skin." },
  { slug: "neurology", name: "Neurology", icon: "Activity", desc: "Diagnosis and treatment of the nervous system." },
];

export const doctorsByTab: Record<string, { name: string; specialty: string }[]> = {
  Cardiologist: [
    { name: "Dr. Alex Dolmand", specialty: "Cardiologist" },
    { name: "Dr. Emily Ross", specialty: "Cardiologist" },
    { name: "Dr. Guy Hawkins", specialty: "Cardiologist" },
    { name: "Dr. Lily Turner", specialty: "Cardiologist" },
  ],
  Orthopedist: [
    { name: "Dr. Ava Mitchell", specialty: "Orthopedist" },
    { name: "Dr. Richard Kim", specialty: "Orthopedist" },
    { name: "Dr. Kevin Shah", specialty: "Orthopedist" },
    { name: "Dr. Sophia Khan", specialty: "Orthopedist" },
  ],
  Nutritionist: [
    { name: "Dr. Eric Sullivan", specialty: "Nutritionist" },
    { name: "Dr. Chloe Young", specialty: "Nutritionist" },
    { name: "Dr. Guy Hawkins", specialty: "Nutritionist" },
    { name: "Dr. Esther Howard", specialty: "Nutritionist" },
  ],
  Gynecologist: [
    { name: "Dr. Ava Mitchell", specialty: "Gynecologist" },
    { name: "Dr. Emily Ross", specialty: "Gynecologist" },
    { name: "Dr. Chloe Young", specialty: "Gynecologist" },
    { name: "Dr. Sophia Khan", specialty: "Gynecologist" },
  ],
};

export const blogPosts = [
  { slug: "sunscreen-guide", title: "Selecting the Best Sunscreen for Your Skin Type", category: "Skin Care", date: "05 July 2025", excerpt: "A complete guide to choosing the right SPF and ingredients for daily protection." },
  { slug: "teeth-care", title: "Care for Teeth That Make Your Smile Shine", category: "Skin Care", date: "12 July 2025", excerpt: "Daily habits and clinical tips for a confident, healthy smile." },
  { slug: "heart-workouts", title: "Gentle Workouts to Promote Heart Wellness and Longevity", category: "Cancer Care", date: "20 July 2025", excerpt: "Low-impact movement that supports your cardiovascular system." },
  { slug: "mental-wellness", title: "Daily Practices for Better Mental Wellness", category: "Wellness", date: "01 Aug 2025", excerpt: "Mindfulness and routines that help reduce daily stress." },
  { slug: "diabetes-diet", title: "A Smart Diet Plan for People Living With Diabetes", category: "Nutrition", date: "08 Aug 2025", excerpt: "Foods to embrace and foods to avoid for stable blood sugar." },
  { slug: "child-vaccines", title: "Why On-Time Childhood Vaccines Matter", category: "Pediatrics", date: "15 Aug 2025", excerpt: "A pediatrician's overview of the standard vaccine schedule." },
];

export const testimonials = [
  { quote: "The care I received at Mediko was exceptional. Every staff member treated me with kindness and professionalism, and the doctors took the time to explain every step.", name: "Norman Jones", title: "CEO at Mediko" },
  { quote: "I was impressed by the advanced technology and the warmth of the medical team. They truly listen and design treatment around you.", name: "Noah Bennett", title: "Clinical Director" },
  { quote: "From check-in to discharge, the experience felt personal. Mediko sets the bar for modern, compassionate healthcare.", name: "Sarah Liu", title: "Patient" },
];

export const labTests = [
  { name: "Blood Test", discount: "20% Off", price: 10, desc: "Complete blood count and screening." },
  { name: "CT Scan", discount: "18% Off", price: 89, desc: "Detailed imaging for accurate diagnosis." },
  { name: "Kidney Ultrasound", discount: "15% Off", price: 45, desc: "Non-invasive kidney health check." },
  { name: "Spirometry Test", discount: "25% Off", price: 20, desc: "Measure lung function and capacity." },
  { name: "Cardiac Enzyme Test", discount: "25% Off", price: 50, desc: "Detect heart muscle stress markers." },
  { name: "Bone Density Test", discount: "35% Off", price: 15, desc: "Assess bone strength and fracture risk." },
];

export const caseStudies = [
  { slug: "heart-recovery", title: "Full Heart Recovery After Cardiac Event", category: "Cardiology", excerpt: "How a 58-year-old patient returned to active life after a critical episode." },
  { slug: "neuro-surgery-success", title: "Pioneering Neurosurgery Saves Young Patient", category: "Neurology", excerpt: "An advanced minimally-invasive procedure with remarkable outcomes." },
  { slug: "dental-restoration", title: "Smile Transformation in 6 Weeks", category: "Dental", excerpt: "A complex restoration case completed with modern dentistry." },
  { slug: "prenatal-care", title: "High-Risk Pregnancy Managed With Care", category: "Prenatal", excerpt: "Continuous monitoring led to a healthy delivery." },
  { slug: "vision-restored", title: "Vision Restored Through Cataract Surgery", category: "Ophthalmology", excerpt: "A senior patient regained clear sight in both eyes." },
  { slug: "diet-transformation", title: "Sustainable Diet Plan Reverses Pre-Diabetes", category: "Nutrition", excerpt: "Lifestyle changes guided by our nutrition team." },
];
