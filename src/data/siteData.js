export const profile = {
  name: "Shelley Margaux A. Reyes",
  title: "Professional Singer",
  tagline: "A voice that shines from sunrise to starlight.",
  photo: "/shelley.jpg",
  bio: [
    "Hi, I’m Shelley Margaux, a professional singer from Alaminos, Laguna. For me, music is more than just a melody; It’s a way to express emotions, tell stories, and connect with people through the power of my voice.",
  
    "Every song is an opportunity to create something special and leave a lasting impression. With a love for performing and a heart full of music, I strive to bring every melody to life, touch hearts, and share my passion with audiences wherever music takes me.",
  ],
};


// Sites that talk about her (interviews, articles, reviews, features)
export const press = [
  { title: "Moonbucks - Calamba", outlet: "Sweet love - Anita Baker", url: "https://web.facebook.com/share/v/16Jqyb9GSm8/" },
  { title: "Khibz - Candelaria", outlet: "If I ain't got you - Alicia Keys", url: "https://web.facebook.com/share/v/1djuEoPXMh/" },
  { title: "Moonbucks - Calamba", outlet: "Bakit nga ba mahal kita - Gigi de Lana", url: "https://web.facebook.com/share/v/19YcSNHPuC/" },
  { title: "Alaminos Idol", outlet: "Traitor - Olivia Rodrigo", url: "https://www.facebook.com/watch/?v=1076548019852664" },
];


export const music = {
  genres: ["Pop", "R&B", "Acoustic", "OPM", "Jazz" ], // TODO: her real genres
  // Spotify playlist ID is the part after /playlist/ in the share link.
  spotifyPlaylistId: "1h1S0D3GIXBCs4Jkl8vptn?utm", // TODO: e.g. "37i9dQZF1DXcBWIGoYBM5M"
  tracks: [
    { title: "Love", artist: "Keyshia Cole", genre: "Contemporary R&B", url: "https://www.youtube.com/watch?v=SQhTkJCCBjM&list=RDSQhTkJCCBjM&start_radio=1" },
    { title: "Bakit nga ba mahal kita", artist: "Gigi de Lana", genre: "OPM/Pop", url: "https://www.youtube.com/watch?v=SQhTkJCCBjM&list=RDSQhTkJCCBjM&start_radio=1" },
    { title: "If I Ain't got you", artist: "Alicia Keys", genre: "R&B/Soul", url: "https://www.youtube.com/watch?v=P1pIzbHC1Z4&list=RDP1pIzbHC1Z4&start_radio=1" },
    { title: "Rise up", artist: "Andra Day", genre: "R&B/Soul", url: "https://www.youtube.com/watch?v=LDffmI0ncfo&list=RDLDffmI0ncfo&start_radio=1" },
    { title: "Hulaan", artist: " Janine Teñoso", genre: "OPM/Pop", url: "https://www.youtube.com/watch?v=uJ1q_Vsv5Zs&list=RDuJ1q_Vsv5Zs&start_radio=1" },
  ]
};


// Oldest to newest reads as a timeline
export const accomplishments = [
  { year: "2025", title: "SLCUAA 25th Season Duet Chanpions", detail: "Achieved Champion in the Vocal Duet Competition at the SLCUAA 25th Season on March 8, 2025, representing Mapúa Malayan Colleges Laguna. This accomplishment highlights my passion for music, teamwork, and artistic excellence." },
  { year: "2024", title: "MITL 12th Battle of the Bands Back-to-Back Champions", detail: "Proudly performed with OPTIMA, securing a back-to-back championship at the MITL Battle of the Bands 2025. This achievement celebrates my passion for music, teamwork, and dedication to delivering memorable performances." },
  { year: "2023", title: "MITL 11th Battle of the Bands Champions", detail: "Won our first championship with OPTIMA at the MITL Battle of the Bands in 2023, marking a memorable milestone in our musical journey. This achievement celebrated our passion for music, teamwork, and dedication to delivering outstanding performances.." },
  { year: "2022", title: "Alaminos Idol Season 1 (Finalist)", detail: "Competed in Alaminos Idol Season 1 in 2022, showcasing vocal talent and earning a place among the competition's finalists." },
];


export const bands = [
  { name: "Moon Serenade", role: "Female Vocalist", years: "2023 – present", about: "Moon Serenade is a dynamic five-man live band performing at Moonbucks Cafe in Calamba City, bringing soulful vocals, captivating melodies, and vibrant rhythms to every performance. Join us every Sunday at 7:00 PM and experience an unforgettable evening filled with music, passion, and moments.", url: "https://www.facebook.com/profile.php?id=61565960122733" },
  { name: "Echo Vibes", role: "Lead Vocalist", years: "2025 – present", about: "Echo Vibes is a dynamic musical trio featuring a pianist, drummer, and saxophonist, creating a captivating blend of melodies, rhythms, and soulful sounds. As the vocalist, Echo Vibes brings each performance to life with their expressive music and passion for the stage.", url: "https://www.facebook.com/share/1Bq63kcADN/" },
];


export const contact = {
  email: "shelleymargauxreye@gmail.com", // TODO
  phone: "+63 994-728-8966",    // TODO
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/shelleymarguuu_/" },
    { label: "Facebook", url: "https://web.facebook.com/profile.php?id=61562971867074" },
    { label: "TikTok", url: "https://www.tiktok.com/@smargaux_" },
    { label: "YouTube", url: "https://www.youtube.com/@shelley_margaux/videos" },
  ],
};


// Optional: images revealed when the mouse hovers over the sun and moon.
// Put the files in /public and use paths like "/sun.jpg". Leave "" to use the built-in vivid artwork.
export const heroImages = {
  sun: "/sun.jpg",
  moon: "/moon.jpg",
};