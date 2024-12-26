
export const  Categories = [
    "Cardiologist",            // Heart and cardiovascular system
    "Dermatologist",          // Skin, hair, and nails
    "Endocrinologist",        // Hormones and endocrine system
    "Gastroenterologist",     // Digestive system
    "Hematologist",           // Blood and blood disorders
    "Nephrologist",           // Kidneys
    "Neurologist",            // Nervous system and brain
    "Oncologist",             // Cancer treatment
    "Ophthalmologist",        // Eyes
    "Orthopedic Surgeon",     // Bones, joints, and muscles
    "Otolaryngologist",       // Ear, nose, and throat (ENT)
    "Pediatrician",           // Children and adolescents
    "Psychiatrist",           // Mental health
    "Pulmonologist",          // Lungs and respiratory system
    "Rheumatologist",         // Autoimmune and musculoskeletal diseases
    "General Surgeon",        // Surgical procedures
    "Plastic Surgeon",        // Cosmetic and reconstructive surgery
    "Urologist",              // Urinary tract and male reproductive system
    "Gynecologist",           // Female reproductive system
    "Obstetrician",           // Pregnancy and childbirth
    "Anesthesiologist",       // Anesthesia and pain management
    "Radiologist",            // Imaging and diagnosis
    "Pathologist",            // Laboratory analysis of tissues and cells
    "Family Medicine Physician", // General practice for all ages
    "Emergency Medicine Physician", // Acute care in emergencies
    "Infectious Disease Specialist", // Infectious diseases and outbreaks
    "Allergist/Immunologist", // Allergies and immune system
    "Geriatrician",           // Elderly care
    "Sports Medicine Specialist", // Injuries related to sports and exercise
    "Podiatrist",             // Feet and lower limbs
    "Neurosurgeon",           // Brain and nervous system surgery
    "Pain Management Specialist" // Chronic pain
  ];


  export const doctor = [
    { 
      id: 1, 
      name: "Dr. Halar Sheikh", 
      appointmentTime: "10:00  - 4:00", 
      fees: 150, 
      category: "Heart Specialist", 
      hospital: "City Heart Hospital", 
      gender: "Male" 
    },
    { 
      id: 2, 
      name: "Dr. mehak", 
      appointmentTime: "11:00  - 3:00 ", 
      fees: 100, 
      category: "physiotheoraphy", 
      hospital: "Skin & Wellness Clinic", 
      gender: "Female" 
    },
    { 
      id: 3, 
      name: "Dr. Ambreen Aftab", 
      appointmentTime: "9:00  - 12:00 ", 
      fees: 200, 
      category: "Hormonal Specialist", 
      hospital: "Endocrine Care Center", 
      gender: "Male" 
    },
    { 
      id: 4, 
      name: "Dr. Saira", 
      appointmentTime: "2:00  - 6:00 ", 
      fees: 180, 
      category: "Digestive Specialist", 
      hospital: "Gastro Clinic", 
      gender: "Female" 
    },
    { 
      id: 5, 
      name: "Dr. javed sami ", 
      appointmentTime: "10:00  - 1:00 ", 
      fees: 220, 
      category: "Blood Specialist", 
      hospital: "Blood Care Hospital", 
      gender: "Male" 
    },
    { 
      id: 6, 
      name: "Dr. mehtab hussain", 
      appointmentTime: "3:00  - 8:00 ", 
      fees: 250, 
      category: "Kidney Specialist", 
      hospital: "Renal Health Clinic", 
      gender: "Female" 
    },
    { 
      id: 7, 
      name: "Dr. Iqbal", 
      appointmentTime: "9:00  - 5:00 ", 
      fees: 300, 
      category: "Brain Specialist", 
      hospital: "Neuro Health Hospital", 
      gender: "Male" 
    },
    { 
      id: 8, 
      name: "Dr. Sana", 
      appointmentTime: "11:00 AM - 2:00 ", 
      fees: 400, 
      category: "Cancer Specialist", 
      hospital: "Oncology Center", 
      gender: "Female" 
    },
    { 
      id: 9, 
      name: "Dr. Asma", 
      appointmentTime: "9:00  - 2:00 ", 
      fees: 120, 
      category: "Child Specialist", 
      hospital: "Children's Health Clinic", 
      gender: "Female" 
    },
    { 
      id: 10, 
      name: "Dr. Wahaj", 
      appointmentTime: "10:00 - 6:00 ", 
      fees: 300, 
      category: "Bone Specialist", 
      hospital: "OrthoCare Hospital", 
      gender: "Male" 
    },

    { 
      id: 10, 
      name: "Dr. hussain", 
      appointmentTime: "10:00 - 6:00 ", 
      fees: 300, 
      category: "Bone Specialist", 
      hospital: "OrthoCare Hospital", 
      gender: "Male" 
    },
    { 
      id: 10, 
      name: "Dr. Wahaj", 
      appointmentTime: "10:00 - 6:00 ", 
      fees: 300, 
      category: "Bone Specialist", 
      hospital: "OrthoCare Hospital", 
      gender: "Male" 
    },
  ];

  export  const currentUser = {
  name: "bilal",
  role: "doctor",
  email: "bilalahmed@gmail.com"

  }
   export const  appointments = [
    {
      user: {
        name: " bilal",
        email: "johndoe@example.com"
      },
      appointmentTime: "10:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-12-10",
      doctor: {
        name: "Dr. Halar Sheikh",
        hospital: "City Heart Hospital"
      }
    },
    {
      user: {
        name: "John Doe",
        email: "johndoe@example.com"
      },
      appointmentTime: "2:15 PM",
      status: "Pending",
      appointmentDate: "2024-12-12",
      doctor: {
        name: "Dr. Emily Skinner",
        hospital: "Skin & Wellness Clinic"
      }
    },
    {
      user: {
        name: "John Doe",
        email: "johndoe@example.com"
      },
      appointmentTime: "9:00 AM",
      status: "Cancelled",
      appointmentDate: "2024-12-14",
      doctor: {
        name: "Dr. Michael Endo",
        hospital: "Endocrine Care Center"
      }
    },

    {
      user: {
        name: "Bilal",
        email: "Bilal@example.com"
      },
      appointmentTime: "9:00 AM",
      status: "Cancelled",
      appointmentDate: "2024-12-14",
      doctor: {
        name: "Dr. Michael Endo",
        hospital: "Endocrine Care Center"
      }
    },

    {
      user: {
        name: "robert",
        email: "robert@example.com"
      },
      appointmentTime: "9:00 AM",
      status: "Cancelled",
      appointmentDate: "2024-12-14",
      doctor: {
        name: "Dr. Michael",
        hospital: "Endocrine Care Center"
      }
    },
  ];
  
  
  
  
  
  
  