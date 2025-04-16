
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
    description: "Light, uplifting news to start your day"
  },
  {
    id: "mentally-checked-out",
    name: "Mentally Checked Out",
    icon: "🥱",
    description: "Easy-to-digest, fun content"
  },
  {
    id: "spill-the-tea",
    name: "Spill the Tea",
    icon: "🍵",
    description: "The juiciest gossip and drama"
  },
  {
    id: "activist-era",
    name: "In My Activist Era",
    icon: "✊",
    description: "Social justice and global causes"
  },
  {
    id: "doomscrolling",
    name: "Doomscrolling",
    icon: "🌀",
    description: "The tough news you can't look away from"
  }
];

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Climate Activists Launch Massive Social Campaign to Pressure Tech Giants",
    slug: "climate-activists-launch-massive-social-campaign",
    category: "Environment",
    summary: "Gen Z climate activists have launched the biggest social media campaign of the year, targeting tech companies' carbon footprints.",
    content: "In an unprecedented digital movement, thousands of Gen Z climate activists have coordinated a massive social media campaign targeting the world's largest tech companies over their carbon emissions. Using the hashtag #TechCleanup, activists have created viral TikToks, Instagram Reels, and Twitter threads exposing the environmental practices of major corporations.\n\nThe campaign has already prompted responses from several tech giants, with some pledging to accelerate their timeline to carbon neutrality. The organized effort demonstrates how the younger generation is leveraging their digital native skills to force corporate accountability.\n\n\"We're speaking the language these companies understand - virality and public image,\" said Jamie Chen, one of the campaign organizers. \"When their brands are at stake, they suddenly find ways to make changes they claimed were 'impossible' before.\"\n\nAnalysts are calling this one of the most effective digital advocacy campaigns in recent years, with participation numbers crossing into the millions across platforms.",
    author: {
      name: "Deja Washington",
      avatar: "/placeholder.svg"
    },
    publishDate: "2023-04-15T14:30:00Z",
    readTime: 4,
    image: "/placeholder.svg",
    trending: true,
    tldr: {
      bulletPoints: [
        "Gen Z climate activists launched massive #TechCleanup campaign",
        "Campaign targets major tech companies' carbon footprints",
        "Multiple companies already pledged to speed up carbon neutrality",
        "Campaign went viral across TikTok, Instagram, and Twitter"
      ],
      emojis: ["🌍", "👨‍💻", "🔥", "✊"]
    },
    tags: ["climate", "activism", "social media", "tech companies"],
    reactions: {
      fire: 1342,
      mindblown: 892,
      sad: 210,
      cap: 54
    },
    slangTerms: [
      {
        term: "ate",
        definition: "Did an amazing job, killed it (e.g., 'This campaign really ate')"
      },
      {
        term: "main character energy",
        definition: "Acting like you're the protagonist; confidence and self-importance"
      }
    ]
  },
  {
    id: "2",
    title: "New Study Shows TikTok Algorithm Favors Educational Content Over Dance Trends",
    slug: "tiktok-algorithm-favors-educational-content",
    category: "Technology",
    summary: "Surprising new research reveals TikTok's algorithm actually promotes educational content more than dance videos, contrary to popular belief.",
    content: "A groundbreaking study from researchers at Stanford's Digital Media Lab has revealed that, contrary to popular perception, TikTok's recommendation algorithm actually gives preferential treatment to educational content over dance trends and comedy skits.\n\nThe research team analyzed over 10,000 videos across multiple account types, tracking how quickly they gained traction based on content category. Their findings showed that videos containing educational elements - particularly science, history, and practical skills - were 42% more likely to be pushed to wider audiences than pure entertainment content.\n\n\"This challenges the narrative that TikTok is just about dancing teenagers,\" said Dr. Mira Patel, lead researcher. \"The platform appears to be quietly boosting informative content, which explains the recent explosion of 'EduTok' creators reaching massive audiences.\"\n\nThe study also noted that hybrid content - videos that combine entertainment elements with educational takeaways - performed best of all, suggesting that creators who can make learning entertaining hit the algorithm's sweet spot.\n\nTikTok has not officially commented on the findings, though several high-profile educational creators have reported seeing unusual growth in recent months.",
    author: {
      name: "Marcus Lee",
      avatar: "/placeholder.svg"
    },
    publishDate: "2023-04-14T09:15:00Z",
    readTime: 6,
    image: "/placeholder.svg",
    trending: true,
    tldr: {
      bulletPoints: [
        "Stanford study analyzed 10,000+ TikTok videos",
        "Educational content gets 42% more algorithmic promotion",
        "Hybrid entertainment/educational videos perform best",
        "Explains recent surge in 'EduTok' creator popularity"
      ],
      emojis: ["📱", "🧠", "📊", "💃"],
      memeText: "Everyone: TikTok is just dancing teens. The Algorithm: Actually I'm something of a scientist myself"
    },
    tags: ["tiktok", "algorithm", "social media", "education"],
    reactions: {
      fire: 873,
      mindblown: 1462,
      sad: 92,
      cap: 341
    }
  },
  {
    id: "3",
    title: "Virtual Reality Fashion Show Lets Attendees 'Try On' Designs In Real-Time",
    slug: "vr-fashion-show-real-time-try-on",
    category: "Fashion",
    summary: "Revolutionary VR fashion event allows viewers to instantly try on runway looks on their digital avatars.",
    content: "The future of fashion arrived yesterday as luxury brand Lumina hosted the world's first fully interactive virtual reality fashion show where all attendees could immediately \"try on\" runway designs using their digital avatars.\n\nThe groundbreaking event, titled \"Lumina Proxima,\" allowed VR attendees to not only watch models walk the digital runway but also instantly see how each look would appear on their own body type through advanced AR technology. Attendees could then place pre-orders for physical versions of the clothing or purchase digital-only versions for their avatars to wear across compatible metaverse platforms.\n\n\"This solves the biggest problem in fashion - seeing something on a model and having no idea if it would look good on you,\" said Lumina's creative director Zara Chen. \"Now you can know instantly.\"\n\nThe show featured over 40 designs, and Lumina reported that sales conversions were 320% higher than their traditional runway shows, with particularly strong performance among Gen Z consumers who purchased both physical and digital versions of the designs.\n\nFashion technology experts are calling this the first truly practical use case for VR fashion experiences, with several major brands already licensing the technology for upcoming shows.",
    author: {
      name: "Skylar Johnson",
      avatar: "/placeholder.svg"
    },
    publishDate: "2023-04-13T16:45:00Z",
    readTime: 5,
    image: "/placeholder.svg",
    trending: false,
    tldr: {
      bulletPoints: [
        "Luxury brand Lumina hosted first interactive VR fashion show",
        "Attendees could instantly see clothes on their own avatars",
        "Could purchase physical clothes or digital-only versions", 
        "Sales were 320% higher than traditional runway shows"
      ],
      emojis: ["👚", "🥽", "💃", "🛍️"]
    },
    tags: ["fashion", "VR", "technology", "metaverse"],
    reactions: {
      fire: 1104,
      mindblown: 1368,
      sad: 42,
      cap: 156
    },
    slangTerms: [
      {
        term: "served",
        definition: "To present something impressive (e.g., 'That outfit served')"
      },
      {
        term: "ate and left no crumbs",
        definition: "Did something perfectly, leaving nothing for others"
      }
    ]
  },
  {
    id: "4",
    title: "Study Finds Gen Z Prioritizes Mental Health Benefits Over Salary in Job Searches",
    slug: "gen-z-prioritizes-mental-health-benefits",
    category: "Workplace",
    summary: "New research reveals Gen Z job seekers rank mental health support above base salary when evaluating potential employers.",
    content: "A comprehensive new study from the Workforce Institute has found that Generation Z job seekers consistently rank mental health support and work-life balance as more important factors than base salary when evaluating potential employers.\n\nThe study, which surveyed over 5,000 recent graduates and young professionals aged 18-25, found that 74% would choose a job with robust mental health benefits and flexible work arrangements over a position offering 20% higher salary but limited wellness support.\n\n\"We're seeing a fundamental shift in how the newest generation of workers evaluates career opportunities,\" said Dr. Aisha Reynolds, the study's lead researcher. \"While financial compensation remains important, it's no longer the primary motivator it once was.\"\n\nParticularly valued benefits included therapy service subscriptions, mental health days that don't count against sick leave, and manager training in supporting employee mental wellbeing. Companies offering dedicated meditation spaces and regular mental health workshops also scored significantly higher in attractiveness ratings.\n\nThe study has prompted several Fortune 500 companies to announce expanded mental health initiatives specifically targeting their youngest employees, signaling a potential long-term shift in workplace benefits packages.",
    author: {
      name: "Tyler Zhang",
      avatar: "/placeholder.svg"
    },
    publishDate: "2023-04-12T11:20:00Z",
    readTime: 7,
    image: "/placeholder.svg",
    trending: true,
    tldr: {
      bulletPoints: [
        "74% of Gen Z would take lower salary for better mental health benefits",
        "Therapy subscriptions and mental health days highly valued",
        "Fortune 500 companies expanding mental health initiatives in response",
        "Shows fundamental shift in workplace priorities"
      ],
      emojis: ["🧠", "💼", "💰", "🧘‍♀️"],
      memeText: "Boomers: In my day we worked 80 hours and liked it! Gen Z: And I took that personally"
    },
    tags: ["mental health", "workplace", "gen z", "benefits"],
    reactions: {
      fire: 932,
      mindblown: 547,
      sad: 85,
      cap: 421
    }
  },
  {
    id: "5",
    title: "New Music Platform Uses AI to Create Personalized Songs Based on Your Mood",
    slug: "ai-music-platform-personalized-songs",
    category: "Music",
    summary: "Revolutionary music service creates unique songs based on your mood, weather, and even heart rate.",
    content: "Startup company Harmonia has launched a groundbreaking music platform that uses artificial intelligence to generate completely original songs tailored to each user's current mood, location, weather, and even biometric data if they opt to connect a wearable device.\n\nThe platform, which launched yesterday after two years in beta testing, asks users how they're feeling or what vibe they're seeking, then creates a completely unique composition that adapts in real-time. If connected to a smartwatch or fitness tracker, the music will even subtly shift to match the user's heart rate and movement patterns.\n\n\"This is music that literally nobody has ever heard before and nobody will ever hear again in exactly the same way,\" explained Harmonia co-founder Elena Varga. \"It's composed specifically for you, for this moment.\"\n\nEarly users report particularly strong results when the AI is given specific emotional cues like \"confident but slightly melancholic\" or \"energized but focused.\" The platform also offers a social feature where friends can listen to a shared composition that aims to create a vibe matching their collective mood.\n\nHarmonia uses a combination of machine learning trained on thousands of songs across genres and innovative algorithmic composition techniques. The company has emphasized that no copyrighted material is used in the generation process, addressing potential legal concerns in AI-generated music.",
    author: {
      name: "Jordan Rivera",
      avatar: "/placeholder.svg"
    },
    publishDate: "2023-04-11T13:50:00Z",
    readTime: 5,
    image: "/placeholder.svg",
    trending: false,
    tldr: {
      bulletPoints: [
        "Harmonia creates unique AI songs based on your current mood",
        "Can connect to wearable devices to match music to heart rate",
        "Each song is completely original and never heard before",
        "Offers shared listening experience for friends"
      ],
      emojis: ["🎵", "🤖", "❤️", "🧠"]
    },
    tags: ["music", "AI", "technology", "personalization"],
    reactions: {
      fire: 1542,
      mindblown: 1203,
      sad: 37,
      cap: 184
    },
    slangTerms: [
      {
        term: "slaps",
        definition: "Music that's really good (e.g., 'This song slaps')"
      },
      {
        term: "understood the assignment",
        definition: "Did exactly what was needed; met expectations perfectly"
      }
    ]
  },
  {
    id: "6",
    title: "Viral TikTok Chef Lands Major Netflix Deal After Dorm Room Cooking Series",
    slug: "tiktok-chef-netflix-deal-dorm-cooking",
    category: "Entertainment",
    summary: "College student who gained fame cooking gourmet meals with dorm room appliances signs multi-million dollar streaming deal.",
    content: "Miguel Diaz, the 19-year-old college sophomore who shot to TikTok fame by creating gourmet meals using only dorm room appliances, has signed a multi-million dollar deal with Netflix for a cooking series and development deal.\n\nDiaz, who studies computer science at Arizona State University, began posting videos of his ingenious cooking techniques last year when his residence hall prohibited students from having hot plates or traditional cooking equipment. Using only a microwave, electric kettle, mini-fridge, and occasionally a hair straightener, Diaz created elaborate dishes like sous-vide steak, perfect risotto, and even a thanksgiving dinner.\n\nHis account, @DormRoomChef, accumulated over 12 million followers in just 10 months. His signature catchphrase - \"We make do with what we have\" - has become a trending audio clip used in videos beyond cooking.\n\n\"I never expected this to become my career,\" Diaz said in a statement. \"I was just trying to eat better than dining hall food without breaking dorm rules. The fact that this is now my job is completely surreal.\"\n\nThe Netflix deal includes a cooking series titled \"Making Do with Miguel\" and a development deal for additional food-related content. The first season will feature Diaz teaching celebrities how to create impressive meals with minimal equipment and ingredients, premiering this fall.",
    author: {
      name: "Aisha Patel",
      avatar: "/placeholder.svg"
    },
    publishDate: "2023-04-10T15:30:00Z",
    readTime: 4,
    image: "/placeholder.svg",
    trending: true,
    tldr: {
      bulletPoints: [
        "19-year-old Miguel Diaz turned dorm room cooking TikToks into Netflix deal",
        "Created gourmet meals with just microwave, kettle, and mini-fridge",
        "Gained 12 million followers in 10 months with creative cooking hacks",
        "Netflix series 'Making Do with Miguel' premieres this fall"
      ],
      emojis: ["👨‍🍳", "🍽️", "🏢", "📱"],
      memeText: "University: No cooking appliances allowed. Miguel: And I took that personally"
    },
    tags: ["tiktok", "cooking", "netflix", "viral"],
    reactions: {
      fire: 2145,
      mindblown: 876,
      sad: 23,
      cap: 97
    }
  }
];

// Function to simulate getting news based on mood
export const getNewsByMood = (moodId: string): NewsItem[] => {
  // In a real app, this would filter based on mood relationships to content
  // For this demo, we'll just shuffle and return a subset
  return [...newsItems].sort(() => 0.5 - Math.random()).slice(0, 4);
};

// Function to get trending news
export const getTrendingNews = (): NewsItem[] => {
  return newsItems.filter(item => item.trending);
};

// Function to get news by ID
export const getNewsById = (id: string): NewsItem | undefined => {
  return newsItems.find(item => item.id === id);
};
