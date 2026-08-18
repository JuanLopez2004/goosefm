export type SceneShow = {
  id: string;
  date: string;
  title: string;
  venue: string;
  time: string;
  artists: string[];
  notes: string;
  ticketUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
};

export const upcomingShows: SceneShow[] = [

    {
    id: "fv1",
    date: "08-22-2026",
    title: "Veracity Plant Album Release Show",
    venue: "Fargo Venue",
    time: "6:30PM Doors, 7PM Sounds",
    artists: ["Veracity Plant", "The 1-800s", "My Empire"],
    notes: "Album Release • August 22nd at Fargo! Doors @ 6:30 • Noise @ 7 • $10 • All Ages • 641 E Lincoln Hwy in DeKalb • going to be a blast 💥 🪴 🪖",
    imageUrl: "https://github.com/user-attachments/assets/a1591462-0fd3-4abd-a98a-1fb6de6c22b2",
    imageAlt: "VC flyer"
  },
   {
    id: "fv2",
    date: "08-28-2026",
    title: "Corn Art Show!",
    venue: "Fargo Venue",
    time: "6-9PM",
    artists: ["Various Artists"],
    notes: "Come celebrate 10 years of Fargo Skateboarding at our first ever corn themed art show!",
    imageUrl: "https://github.com/user-attachments/assets/a152352f-2b84-49bc-bd8d-5dec2e4ffdf4",
    imageAlt: "Corn Flyer"
  },
    {
    id: "hoof1",
    date: "10-10-2026",
    title: "Hands Off Our Fest",
    venue: "Egyptian Theatre",
    time: "2PM Doors, 3PM Sounds",
    artists: ["Sweetie", "The Ex-Bombers", "Bussy Kween Power Trip", "Hip Martyr", "Steeplechase", "Early Girl", "Sweet Thorns", "Granny Square"],
    notes: "💖Official Hands Off Our Fest lineup! This year's gonna be fabulous!🐴Get your tickets for HOOF at www.handsoffourfest.com and save the date! 💖Oct. 10 at the Egyptian Theatre in Dekalb, IL! 💖",
    imageUrl: "https://github.com/user-attachments/assets/7e1cbff4-d639-4917-806d-dd47e6df653a",
    imageAlt: "Hands Off Our Fest flyer"
  },
    {
    id: "ff1",
    date: "11-15-2026",
    title: "FARGO FEST",
    venue: "Fargo Venue",
    time: "2:30PM Doors, 3:30PM Sounds",
    artists: ["Mictlan", "ILL Omen", "Frontal Assault", "Through N Through", "Mortal Draw", "12gaugeautopsyia", "8up"],
    notes: "All Ages. 8 killer Midwest bands spanning all genres of heavy music for $15.",
    imageUrl: "https://github.com/user-attachments/assets/ed0d9748-ede0-4f72-8e7e-ff61f8282dd0",
    imageAlt: "Crowd and lights during a DeKalb show"
  },

];
