const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('./models/Blog');

dotenv.config();

const sampleBlogs = [
  {
    title: "Women's Safety & Rights: Beyond Laws into Actionable Community Support",
    slug: "womens-safety-and-rights-community-support",
    category: "Women Safety & Rights",
    description: "Creating safer public spaces requires structural police reforms, self-defense awareness, and zero-tolerance community vigil.",
    content: `Ensuring safety for women isn't just a legal requirement—it is the true metric of a civilized society. We must shift from reactive justice to proactive prevention.

1. Safe Public Infrastructure & Street Lighting
Well-lit streets, active public transport, and working emergency systems are non-negotiable basic amenities for every city and village.

2. Community Awareness & Bystander Action
Society must actively condemn harassment. Educating youth and empowering citizens to step up when seeing injustice creates an organic safety shield.

3. Legal Speed & Accountability
Fast-track courts and transparent reporting protocols ensure that victims feel supported and perpetrators face immediate consequences.`,
    featuredImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    isPublished: true
  },
  {
    title: "Reimagining Education & Youth Welfare for Modern Governance",
    slug: "reimagining-education-youth-welfare-modern-governance",
    category: "Education & Youth",
    description: "How our school systems must evolve to build critical thinking, civic responsibility, and equal opportunities for every child.",
    content: `Education must do more than produce degree holders—it must nurture responsible citizens who understand civic duty, social equity, and human rights.

- Equal Access: Rural schools must receive the same digital infrastructure as urban centers.
- Practical Civic Learning: Teaching children how governance works, how to ask questions, and how to participate in local administration.
- Child Health & Mental Well-being: Nutritional support and counseling should be integrated into standard schooling.`,
    featuredImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    isPublished: true
  },
  {
    title: "Politics, Society & The Common Man: How Civic Participation Shapes Destiny",
    slug: "politics-society-the-common-man",
    category: "Politics & Governance",
    description: "Democracy flourishes when citizens move from passive observers to active participants in policy discussions.",
    content: `Every political decision directly impacts daily lives—from local road maintenance to national healthcare access.

When communities engage constructively with local leaders, demand accountability, and participate in civic dialogues, governance naturally aligns with public welfare.`,
    featuredImage: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
    isPublished: true
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");
    await Blog.deleteMany({});
    await Blog.insertMany(sampleBlogs);
    console.log("New social & political sample blogs seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();