export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: number;
  image: string;
  trending: boolean;
  tldr: {
    bulletPoints: string[];
    emojis: string[];
    memeText?: string;
  };
  tags: string[];
  reactions: {
    fire: number;
    mindblown: number;
    sad: number;
    cap: number;
  };
  slangTerms?: {
    term: string;
    definition: string;
  }[];
}

export interface MoodType {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const moods: MoodType[] = [
  {
    id: "just-woke-up",
    name: "Just Woke Up",
    icon: "☕",
    description: "Light, uplifting news to start your day",
  },
  {
    id: "mentally-checked-out",
    name: "Mentally Checked Out",
    icon: "🥱",
    description: "Easy-to-digest, fun content",
  },
  {
    id: "spill-the-tea",
    name: "Spill the Tea",
    icon: "🍵",
    description: "The juiciest gossip and drama",
  },
  {
    id: "activist-era",
    name: "In My Activist Era",
    icon: "✊",
    description: "Social justice and global causes",
  },
  {
    id: "doomscrolling",
    name: "Doomscrolling",
    icon: "🌀",
    description: "The tough news you can't look away from",
  },
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title:
      "Youth Climate Movement in India Sparks Major Change in Corporate Sustainability",
    slug: "youth-climate-movement-india",
    category: "Environment",
    summary:
      "Indian Gen Z activists have launched a viral social media campaign demanding eco-responsibility from top Indian corporations.",
    content:
      'In a powerful online movement, thousands of young Indian climate activists have organized a nationwide campaign targeting India’s largest corporations over environmental negligence. The campaign, which uses the hashtag #GreenIndiaNow, has taken over Instagram, X (formerly Twitter), and YouTube Shorts.\n\nMajor Indian companies such as Reliance and Adani Group have already issued statements addressing their carbon footprint goals. Many have pledged to accelerate their sustainability efforts.\n\n"We’re digital natives — we know how to hold brands accountable in their own language," said campaign leader Ananya Singh. "If your company can trend, it can also be held responsible."\n\nThe campaign has gone viral, drawing international attention and pushing India\'s corporate sector into the spotlight on sustainability efforts.',
    author: {
      name: "Rohit Menon",
      avatar:
        "https://i.pinimg.com/236x/78/20/50/782050d0c43cdd24fa19a8f5440c8bf9.jpg",
    },
    publishDate: "2023-04-15T14:30:00Z",
    readTime: 4,
    image:
      "https://www.sciencespo.fr/psia/chair-sustainable-development/wp-content/uploads/2021/06/Aishwaryaphoto_shutterstock_1577959384-900x600.jpg",
    trending: true,
    tldr: {
      bulletPoints: [
        "Indian Gen Z launches #GreenIndiaNow campaign",
        "Targets top Indian companies’ environmental records",
        "Corporates begin announcing updated green goals",
        "Massive reach across Instagram, X, and YouTube Shorts",
      ],
      emojis: ["🌱", "📱", "🔥", "🇮🇳"],
    },
    tags: ["climate", "activism", "india", "social media"],
    reactions: {
      fire: 1342,
      mindblown: 892,
      sad: 210,
      cap: 54,
    },
    slangTerms: [
      {
        term: "ate",
        definition:
          "Did an amazing job, killed it (e.g., 'This campaign really ate')",
      },
      {
        term: "main character energy",
        definition:
          "Acting like you're the protagonist; confidence and self-importance",
      },
    ],
  },
  {
    id: "2",
    title:
      "IIT Delhi Study Reveals Indian Users Prefer Educational Reels Over Entertainment",
    slug: "iit-delhi-study-educational-content",
    category: "Technology",
    summary:
      "A study from IIT Delhi shows Indian Instagram and YouTube users engage more with educational content than viral entertainment.",
    content:
      'A research team at IIT Delhi has found that Indian users on platforms like Instagram and YouTube are increasingly consuming educational content, overturning the belief that entertainment dominates.\n\nThe study examined over 8,000 viral videos across platforms and discovered that reels with informative content about careers, science, and finance gained significantly more engagement than dance or prank videos.\n\nLead researcher Dr. Meena Rao shared, "Indians are using short-form content not just to unwind but to upskill. This explains the boom in creators who blend information with entertainment."\n\nContent combining humor and education — such as comedy skits about UPSC prep or financial literacy tips — had the highest growth.',
    author: {
      name: "Devika Sharma",
      avatar:
        "https://i.pinimg.com/474x/ca/6d/44/ca6d44cd4116857707c205a120c5d21e.jpg",
    },
    publishDate: "2023-04-14T09:15:00Z",
    readTime: 6,
    image: "https://images.indianexpress.com/2024/06/IIT-Delhi.jpg?w=640",
    trending: true,
    tldr: {
      bulletPoints: [
        "IIT Delhi analyzed 8,000+ viral Indian videos",
        "Educational content saw more user engagement",
        "Best-performing content blends education with fun",
        "Rise in creators focusing on career and finance tips",
      ],
      emojis: ["📚", "📊", "📱", "🎓"],
      memeText:
        "Everyone: Reels are just dancing. India: Here's how to ace your IAS interview",
    },
    tags: ["education", "social media", "reels", "technology"],
    reactions: {
      fire: 873,
      mindblown: 1462,
      sad: 92,
      cap: 341,
    },
  },
  {
    id: "3",
    title:
      "India’s First VR Saree Show Lets Shoppers Virtually Drape Designs in Real Time",
    slug: "vr-saree-show-india",
    category: "Fashion",
    summary:
      "Pioneering virtual saree showcase by Indian designer Meera Bansal lets users see styles on themselves before buying.",
    content:
      'In a first-of-its-kind event, celebrated Indian fashion designer Meera Bansal hosted a virtual reality saree fashion show, enabling users to try on sarees using digital avatars.\n\nDubbed “Drape Digital,” the immersive event let viewers see how each saree would fall and flow on their specific body type using AR-powered smartphones. Users could buy physical sarees or digital fashion items for avatars in Indian metaverse platforms.\n\n"This changes everything for online saree shopping," Bansal said. "It eliminates guesswork, especially for brides."\n\nThe show featured 50+ looks and drew over 2 lakh virtual attendees. Saree preorders surged 400% over traditional trunk shows. Several major Indian brands are now adopting the same tech for 2024 weddings.',
    author: {
      name: "Kavya Nair",
      avatar:
        "https://i.pinimg.com/1200x/84/7a/a4/847aa4ea94e646a239324307bc3b4236.jpg",
    },
    publishDate: "2023-04-13T16:45:00Z",
    readTime: 5,
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQEX9yaspR9K4w/article-cover_image-shrink_720_1280/B56ZWT.dM8HQAM-/0/1741944381528?e=1750291200&v=beta&t=aRirKH_PwTOnE34GaOK-6Dn-U8pdG2e3eeKcfoZgIw0",
    trending: false,
    tldr: {
      bulletPoints: [
        "Designer Meera Bansal hosted India’s first VR saree show",
        "Users could digitally drape sarees on their avatars",
        "Physical and digital saree versions available",
        "400% boost in saree sales after event",
      ],
      emojis: ["👗", "💻", "🇮🇳", "🛍️"],
    },
    tags: ["fashion", "VR", "technology", "india"],
    reactions: {
      fire: 1104,
      mindblown: 1368,
      sad: 42,
      cap: 156,
    },
    slangTerms: [
      {
        term: "served",
        definition:
          "To present something impressive (e.g., 'That outfit served')",
      },
      {
        term: "ate and left no crumbs",
        definition: "Did something perfectly, leaving nothing for others",
      },
    ],
  },
  {
    id: "4",
    title:
      "Study: Indian Gen Z Chooses Mental Wellness Over High Salary in Job Hunts",
    slug: "indian-gen-z-job-priorities",
    category: "Workplace",
    summary:
      "New survey shows Indian youth value mental health perks more than salary packages when evaluating job offers.",
    content:
      'A report from the Indian Institute for Work Culture reveals that 71% of Indian Gen Z job seekers would prefer mental health support and flexible work culture over high salaries.\n\nSurveying over 4,500 college graduates and early professionals, the study noted strong preferences for workplace therapy access, mental wellness days, and less toxic work environments.\n\n"It’s clear that India\'s youth want to feel safe and supported, not just paid," said lead analyst Ruchi Deshmukh.\n\nStartups and MNCs in India are responding by integrating mindfulness sessions, subsidized therapy, and hybrid work flexibility into their HR policies. Experts believe this will be the norm by 2030.',
    author: {
      name: "Samar Khan",
      avatar:
        "https://i.pinimg.com/236x/a9/9c/28/a99c28832c86daed67260e5c0f2832d7.jpg",
    },
    publishDate: "2023-04-12T11:20:00Z",
    readTime: 7,
    image:
      "https://images.storyboard18.com/storyboard18/2025/04/THEN-70-2025-04-feb82403bf88fed5c6cdc09befb4fcfd-1019x573.jpg?impolicy=website&width=738&height=440",
    trending: true,
    tldr: {
      bulletPoints: [
        "71% of Indian Gen Z prefers wellness over high salary",
        "Therapy, hybrid work, and mental health leave are top perks",
        "Indian companies updating HR strategies accordingly",
        "Mental wellness now central to job decisions",
      ],
      emojis: ["🧠", "🇮🇳", "🏢", "🧘‍♂️"],
      memeText: "Uncles: Job is job, adjust. Gen Z: Self-care is not selfish.",
    },
    tags: ["mental health", "jobs", "gen z", "india"],
    reactions: {
      fire: 932,
      mindblown: 547,
      sad: 85,
      cap: 421,
    },
  },
  {
    id: "5",
    title:
      "Indian Startup Uses AI to Create Mood-Based Music with Regional Flavors",
    slug: "indian-ai-music-mood-based",
    category: "Music",
    summary:
      "Delhi-based startup SwaraAI composes personalized songs in multiple Indian languages using AI and user emotions.",
    content:
      "SwaraAI, an Indian music tech startup, has launched a platform that generates personalized songs based on user mood, weather, and even heart rate. It supports Hindi, Tamil, Bengali, and more.\n\nThe app asks users how they're feeling — 'joyful', 'nostalgic', or 'heartbroken' — then generates original compositions in real time. With fitness device integration, music also responds to heartbeat and movement.\n\n\"Every user gets a song made just for them, and often, in their own language,\" said founder Rajeev Sharma. \"It’s like your emotions talking through music.\"\n\nSocial features allow friend groups to listen together, creating shared moods. No copyrighted content is used — a relief for creators and listeners alike.",
    author: {
      name: "Priya Reddy",
      avatar:
        "https://i.pinimg.com/564x/5a/7b/c9/5a7bc9ee8614eef19ae0caf54f24af30.jpg",
    },
    publishDate: "2023-04-11T13:50:00Z",
    readTime: 5,
    image:
      "https://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/entertainment/2025/02/18/ai-music-pic.jpg",
    trending: false,
    tldr: {
      bulletPoints: [
        "SwaraAI creates mood-based music in Indian languages",
        "Adapts songs using emotion and wearable data",
        "Every song is uniquely generated for the user",
        "App includes group listening and vibe matching",
      ],
      emojis: ["🎶", "🧠", "🕉️", "📱"],
    },
    tags: ["music", "AI", "personalization", "india"],
    reactions: {
      fire: 1542,
      mindblown: 1203,
      sad: 37,
      cap: 184,
    },
    slangTerms: [
      {
        term: "slaps",
        definition: "Music that's really good (e.g., 'This song slaps')",
      },
      {
        term: "understood the assignment",
        definition: "Did exactly what was needed; met expectations perfectly",
      },
    ],
  },
  {
    id: "6",
    title:
      "Indian Student Chef Goes Viral, Inks Deal with SonyLIV for Desi Cooking Show",
    slug: "student-chef-sonyliv-deal",
    category: "Entertainment",
    summary:
      "Engineering student who cooked Indian meals in hostel room signs series deal with SonyLIV after TikTok fame.",
    content:
      "Rishabh Mehta, a 20-year-old student from IIT Bombay, has signed a show deal with SonyLIV after gaining millions of followers for his inventive hostel cooking videos.\n\nUsing nothing more than an induction plate, a rice cooker, and a kettle, Mehta made full Indian meals — from rajma chawal to butter chicken — without ever leaving his hostel.\n\nHis signature phrase “Hostel hai, par hunger elite hai” has gone viral. His TikTok and Instagram accounts now boast over 10 million followers.\n\nThe new show, *Hostel Chef Rishabh*, premieres this summer and features celebrities trying to recreate classic Indian dishes using hostel-approved tools.",
    author: {
      name: "Neha Pillai",
      avatar:
        "https://i.pinimg.com/236x/45/94/9b/45949bc3b2c8aaca94e64406bc956b05.jpg",
    },
    publishDate: "2023-04-10T15:30:00Z",
    readTime: 4,
    image: "https://i.ytimg.com/vi/Ty22u-NNyt0/maxresdefault.jpg",
    trending: true,
    tldr: {
      bulletPoints: [
        "IIT Bombay student Rishabh Mehta signs SonyLIV cooking show deal",
        "Cooked Indian dishes using hostel gadgets",
        "10M+ social followers and viral catchphrases",
        "Show *Hostel Chef Rishabh* debuts this summer",
      ],
      emojis: ["🍛", "🎬", "🏠", "📲"],
      memeText:
        "Hostel rules: No stove allowed. Rishabh: Butter chicken with a kettle, it is.",
    },
    tags: ["tiktok", "food", "india", "viral"],
    reactions: {
      fire: 2145,
      mindblown: 876,
      sad: 23,
      cap: 97,
    },
  },
];

export const getNewsByMood = (moodId: string): NewsItem[] => {
  return [...newsItems].sort(() => 0.5 - Math.random()).slice(0, 4);
};

export const getTrendingNews = (): NewsItem[] => {
  return newsItems.filter((item) => item.trending);
};

export const getNewsById = (id: string): NewsItem | undefined => {
  return newsItems.find((item) => item.id === id);
};
