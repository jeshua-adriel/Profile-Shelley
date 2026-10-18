export const profile = {
  name: "Shelley Margaux A. Reyes",
  title: "Professional Singer",
  tagline: "A voice that shines from sunrise to starlight.",
  photo: "/shelley.jpg", // TODO: put a photo in /public and update the path
  bio: [
    "Hi, I’m Shelley Margaux, a professional singer from Alaminos, Laguna. For me, music is more than just a melody; It’s a way to express emotions, tell stories, and connect with people through the power of my voice.",
    "________________________________________________",
    "Every song is an opportunity to create something special and leave a lasting impression. With a love for performing and a heart full of music, I strive to bring every melody to life, touch hearts, and share my passion with audiences wherever music takes me.",
  ],
};


// Sites that talk about her (interviews, articles, reviews, features)
export const press = [
  { title: "TODO: Interview title", outlet: "Outlet name", url: "https://example.com" },
  { title: "TODO: Feature article", outlet: "Outlet name", url: "https://example.com" },
  { title: "TODO: Event review", outlet: "Outlet name", url: "https://example.com" },
  { title: "Alaminos Idol", outlet: "Station or show", url: "https://www.facebook.com/watch/?v=1076548019852664" },
];


export const music = {
  genres: ["Pop", "R&B", "Acoustic", "OPM", "Jazz" ], // TODO: her real genres
  // Spotify playlist ID is the part after /playlist/ in the share link.
  spotifyPlaylistId: "1h1S0D3GIXBCs4Jkl8vptn?utm", // TODO: e.g. "37i9dQZF1DXcBWIGoYBM5M"
  tracks: [
    { title: "Love", artist: "Keyshia Cole", genre: "Pop", url: "https://www.youtube.com/watch?v=YKuHdOxj46I&list=RDYKuHdOxj46I&start_radio=1" },
    { title: "TODO: Song title", artist: "Shelley Margaux Reyes", genre: "R&B", url: "https://example.com" },
    { title: "TODO: Song title", artist: "Shelley Margaux Reyes", genre: "Acoustic", url: "https://example.com" },
    { title: "TODO: Song title", artist: "Shelley Margaux Reyes", genre: "OPM", url: "https://example.com" },
  ],
  platforms: [
    { label: "Spotify", url: "https://open.spotify.com/playlist/1h1S0D3GIXBCs4Jkl8vptn?si=a7513e60738f4bc1" },
    { label: "YouTube", url: "https://youtube.com" },
    { label: "Bandlab", url: "https://music.apple.com" },
  ],
};


// Oldest to newest reads as a timeline
export const accomplishments = [
  { year: "2025", title: "SLCUAA 25th Season Duet Chanpions", detail: "Achieved Champion in the Vocal Duet Competition at the SLCUAA 25th Season on March 8, 2025, representing Mapúa Malayan Colleges Laguna. This accomplishment highlights my passion for music, teamwork, and artistic excellence." },
  { year: "2024", title: "MITL 12th Battle of the Bands Back-to-Back Champions", detail: "Proudly performed with OPTIMA, securing a back-to-back championship at the MITL Battle of the Bands 2025. This achievement celebrates my passion for music, teamwork, and dedication to delivering memorable performances." },
  { year: "2023", title: "MITL 11th Battle of the Bands Champions", detail: "Won our first championship with OPTIMA at the MITL Battle of the Bands in 2023, marking a memorable milestone in our musical journey. This achievement celebrated our passion for music, teamwork, and dedication to delivering outstanding performances.." },
  { year: "20XX", title: "TODO: Latest highlight", detail: "One line about it." },
];


export const bands = [
  { name: "Moon Serenade", role: "Female Vocalist", years: "2023 – present", about: "Moon Serenade is a dynamic five-man live band performing at Moonbucks Cafe in Calamba City, bringing soulful vocals, captivating melodies, and vibrant rhythms to every performance. Join us every Sunday at 7:00 PM and experience an unforgettable evening filled with music, passion, and moments.", url: "https://www.facebook.com/profile.php?id=61565960122733" },
  { name: "Echo Vibes", role: "Lead Vocalist", years: "2025 – present", about: "Echo Vibes is a dynamic musical trio featuring a pianist, drummer, and saxophonist, creating a captivating blend of melodies, rhythms, and soulful sounds. As the vocalist, Echo Vibes brings each performance to life with their expressive music and passion for the stage.", url: "https://www.facebook.com/share/1Bq63kcADN/" },
];


export const contact = {
  email: "booking@example.com", // TODO
  phone: "+63 900 000 0000",    // TODO
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/shelleymarguuu_/" },
    { label: "Facebook", url: "https://web.facebook.com/profile.php?id=61562971867074" },
    { label: "TikTok", url: "https://www.tiktok.com/@smargaux_" },
    { label: "YouTube", url: "https://www.youtube.com/@shelley_margaux" },
  ],
};


// Optional: images revealed when the mouse hovers over the sun and moon.
// Put the files in /public and use paths like "/sun.jpg". Leave "" to use the built-in vivid artwork.
export const heroImages = {
  sun: "/sun.jpg",
  moon: "/moon.jpg",
};