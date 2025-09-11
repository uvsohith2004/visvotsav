const year = new Date().getFullYear();
export const scheduleData = [
  // Technical Events
  {
    id: 1,
    title: "Paper Presentation - CSE & Allied",
    date: `14th September ${year}`,
    time: "10:00 AM",
    venue: "C-119, Cotton Block",
    category: "technical",
    coordinators: {
      faculty: "Mr. T. Dayakar",
      students: [
        { name: "Syed Aakhil", mobile: "8247084184" },
        { name: "Kalivela Sreenand", mobile: "7075867765" }
      ]
    }
  },
  {
    id: 2,
    title: "Paper Presentation - ECE",
    date: `14th September ${year}`,
    time: "10:00 AM",
    venue: "D-102, 103, 104, Abdul Kalam Block",
    category: "technical",
    coordinators: {
      faculty: ["Dr M Venkatesan", "Dr N Satheesh Kumar", "R Pratap Singh"],
      students: [
        { name: "J. Penugonda Syam", mobile: "9618137255" },
        { name: "R. Vyshnavi", mobile: "7893047932" }
      ]
    }
  },
  {
    id: 3,
    title: "Paper Presentation - EEE",
    date: `14th September ${year}`,
    time: "10:00 AM",
    venue: "B208 - ME Block",
    category: "technical",
    coordinators: {
      faculty: "Mr. T. Hari Babu",
      students: [
        { name: "Peddireddy Kiran Maheswari" },
        { name: "Sayani Venkata Jathin Prasad" },
        { name: "Bandlamudi Sasi Kumar" }
      ]
    }
  },
  {
    id: 4,
    title: "Poster Presentation - CSE & Allied",
    date: `14th September ${year}`,
    time: "11:00 AM",
    venue: "C-103, Cotton Block",
    category: "technical",
    coordinators: {
      faculty: "Mr. T. Ravichand",
      students: [
        { name: "Sk. Vahida Sahira Bi", mobile: "8500522955" },
        { name: "M. Lokesh", mobile: "7386562285" }
      ]
    }
  },
  {
    id: 5,
    title: "Poster Presentation - ECE",
    date: `14th September ${year}`,
    time: "11:00 AM",
    venue: "R-210",
    category: "technical",
    coordinators: {
      faculty: ["Ms.M Pavitra", "Mrs. P Sasitha"],
      students: [
        { name: "B. Sachin", mobile: "9912938784" },
        { name: "K. Sudheshna devi", mobile: "9347040469" }
      ]
    }
  },
  {
    id: 6,
    title: "Poster Presentation - EEE",
    date: `14th September ${year}`,
    time: "11:00 AM",
    venue: "B103, ME Block",
    category: "technical",
    coordinators: {
      faculty: "Mr. S. Muni Raja",
      students: [
        { name: "Marpudi Poojitha" },
        { name: "Ganadi Manoja" },
        { name: "Parri Madhuchandrik" }
      ]
    }
  },
  {
    id: 7,
    title: "Project Expo - CSE & Allied",
    date: `14th September ${year}`,
    time: "12:00 PM",
    venue: "A014 & 015, MRR Block",
    category: "technical",
    coordinators: {
      faculty: "R Bhargav",
      students: [
        { name: "Madhan kumar", mobile: "9059658236" },
        { name: "Harika", mobile: "8019640506" }
      ]
    }
  },
  {
    id: 8,
    title: "Project Expo - ECE",
    date: `14th September ${year}`,
    time: "12:00 PM",
    venue: "Communications lab, Abdul Kalam Block",
    category: "technical",
    coordinators: {
      faculty: ["Dr S Penchala Reddy", "G Manga Rao"],
      students: [
        { name: "B. Sathish", mobile: "7981247965" },
        { name: "M. Sravani", mobile: "6281968646" }
      ]
    }
  },
  {
    id: 9,
    title: "Project Expo - EEE",
    date: `14th September ${year}`,
    time: "12:00 PM",
    venue: "B-103, ME Block",
    category: "technical",
    coordinators: {
      faculty: "Mr G.Suman",
      students: [
        { name: "Akkem Sreelekha" },
        { name: "Jorepalli Prasanth" },
        { name: "Jammula Lakshmi Priya" }
      ]
    }
  },
  {
    id: 10,
    title: "Circuitrix (ECE & EEE)",
    date: `14th September ${year}`,
    time: "2:00 PM",
    venue: "EDC lab, Abdul Kalam Block",
    category: "technical",
    coordinators: {
      faculty: ["Dr Sk Rizwan", "Sk Jagadeesh Babu", "Mr. Y. Ramaiah"],
      students: [
        { name: "B. Sai Praveen", mobile: "9063757378" },
        { name: "A. Prathyusha", mobile: "7569836190" }
      ]
    }
  },
  {
    id: 11,
    title: "Technical Quiz - CSE & Allied",
    date: `14th September ${year}`,
    time: "3:00 PM",
    venue: "A-204",
    category: "technical",
    coordinators: {
      faculty: ["Mr R Prapulla Kumar", "Mr A Venka Reddy"],
      students: [
        { name: "M Penchala Sai", mobile: "9515867037" },
        { name: "M Yamini", mobile: "9030324347" }
      ]
    }
  },
  {
    id: 12,
    title: "Technical Quiz - ECE",
    date: `14th September ${year}`,
    time: "3:00 PM",
    venue: "D-002, Abdul Kalam Block",
    category: "technical",
    coordinators: {
      faculty: ["Dr V Prakasam", "K Penchalaiah"],
      students: [
        { name: "D.V Kedaar Kumar", mobile: "7013264523" },
        { name: "P. Divya", mobile: "9441770920" }
      ]
    }
  },
  {
    id: 13,
    title: "Technical Quiz - EEE",
    date: `14th September ${year}`,
    time: "3:00 PM",
    venue: "B109, ME Block",
    category: "technical",
    coordinators: {
      faculty: "Mr V.Masthanaiah",
      students: [
        { name: "Bheemakonda Thrisha" },
        { name: "Ch Lakshmi Prasanna" },
        { name: "Thatitoti Lakshmi Chandana" }
      ]
    }
  },
  {
    id: 14,
    title: "Coding Contest",
    date: `14th September ${year}`,
    time: "4:00 PM",
    venue: "Lab-10, Abdul Kalam Block",
    category: "technical",
    coordinators: {
      faculty: ["Jeevan", "Shabbir"],
      students: [
        { name: "T.Sreeram", mobile: "9912618285" },
        { name: "D.Ganesh", mobile: " 63009 91984"},
      ]
    }
  },
  {
    id: 15,
    title: "Web Designing",
    date: `14th September ${year}`,
    time: "4:00 PM",
    venue: "Lab-8, Abdul Kalam Block",
    category: "technical",
    coordinators: {
      faculty: ["N V Soundarya", "M Tejaswini"],
      students: [
        { name: "D. Sumanth", mobile: "9676502022" },
        { name: "P. Santhosh", mobile: "8309816696"},
      ]
    }
  },
  // Cultural Events
  {
    id: 16,
    title: "Singing (For in-house Students)",
    date: `15th September ${year}`,
    time: "1:30 PM",
    venue: "A-204",
    category: "cultural",
    coordinators: {
      faculty: [
        { name: "Mr.SK. Abdul Shabbir (S&H)", mobile: "9052792558" },
        { name: "Mr. K. Srinivasulu (S&H)", mobile: "8985834564" }
      ],
      students: []
    }
  },
  {
    id: 17,
    title: "Dance (For in-house Students)",
    date: `15th September ${year}`,
    time: "10:00 AM",
    venue: "A-204",
    category: "cultural",
    coordinators: {
      faculty: [
        { name: "Dr. R. Ranjit Kumar (ECE)", mobile: "8179386373" },
        { name: "Mr. M. Ravikumar (Mech)", mobile: "8143511558" }
      ],
      students: []
    }
  },
  {
    id: 18,
    title: "Antyakshari (For in-house Students)",
    date: `15th September ${year}`,
    time: "10:00 AM",
    venue: "D-003",
    category: "cultural",
    coordinators: {
      faculty: [
        { name: "Mr. N.V. Suryanarayana (Mech)", mobile: "7989858096" },
        { name: "Mrs. M. Mounika (Mech)", mobile: "8500500991" }
      ],
      students: []
    }
  },
  {
    id: 19,
    title: "Dumb Charades (For in-house Students)",
    date: `15th September ${year}`,
    time: "10:30 AM",
    venue: "C-101",
    category: "cultural",
    coordinators: {
      faculty: [
        { name: "Mr. T. Bhanu Prakash (Civil)", mobile: "7702574739" },
        { name: "Mrs. K. Pravallika (Civil)", mobile: "9346457019" }
      ],
      students: []
    }
  },
  {
    id: 20,
    title: "Elocution (For in-house Students)",
    date: `15th September ${year}`,
    time: "2:30 PM",
    venue: "R-307",
    category: "cultural",
    coordinators: {
      faculty: [{ name: "Mr. SK. Rameez (S&H)" }],
      students: []
    }
  },
  {
    id: 21,
    title: "Drawing (For in-house Students)",
    date: `15th September ${year}`,
    time: "11:00 AM",
    venue: "R-108",
    category: "cultural",
    coordinators: {
      faculty: [
        { name: "Mr. A. Ramanjaneyulu (Mech)", mobile: "8885380788" },
        { name: "Mr. D.C. Chennayya (Mech)", mobile: "9989022341" }
      ],
      students: []
    }
  },
  {
    id: 22,
    title: "Picture Connect (For in-house Students)",
    date: `15th September ${year}`,
    time: "2:00 PM",
    venue: "C-202",
    category: "cultural",
    coordinators: {
      faculty: [{ name: "Mr. K. Naresh (Civil)", mobile: "9494811370" }],
      students: []
    }
  },
  {
    id: 23,
    title: "General Quiz (For in-house Students)",
    date: `15th September ${year}`,
    time: "2:00 PM",
    venue: "C-110",
    category: "cultural",
    coordinators: {
      faculty: [{ name: "Dr. O. Sheshaiah", mobile: "9848587232" }],
      students: []
    }
  },
  {
    id: 24,
    title: "Fancy Dress (For in-house Students)",
    date: `15th September ${year}`,
    time: "10:00 AM",
    venue: "PBRVITS",
    category: "cultural",
    coordinators: {
      faculty: [{ name: "Dr. O. Sheshaiah", mobile: "9848587232" }],
      students: []
    }
  }
];
