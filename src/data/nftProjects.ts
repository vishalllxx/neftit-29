import { NFTProject } from "@/types/nft";

export const featuredProjects: NFTProject[] = [
  {
    id: "1",
    projectName: "Genesis Collection",
    nftName: "Ethereal Guardian",
    image: "/images/nft1.jpg",
    endTime: "2024-04-01T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 25,
    neftReward: 15,
    description: "A mystical guardian NFT that protects the digital realm. This rare collectible showcases the fusion of ethereal energy and digital artistry.",
    owner: "0x1234...5678",
    totalSupply: 1000,
    levelRequirement: 5,
    rarity: "Legendary",
    category: "Gaming",
    subcategory: "RPG",
    taskStatus: "Not Started",
    usdValue: 150,
    network: "Ethereum",
    rarityDistribution: {
      legendary: 5,
      rare: 15,
      common: 80
    },
    tasks: [
      { id: "1", title: "Follow @EtherealNFT on Twitter", completed: false, type: "twitter" },
      { id: "2", title: "Join Discord Community", completed: false, type: "discord" },
      { id: "3", title: "Share announcement post", completed: false, type: "twitter" },
      { id: "4", title: "Follow @NFTWorld on Twitter", completed: false, type: "twitter" }
    ]
  },
  {
    id: "2",
    projectName: "Cyber Warriors",
    nftName: "Neon Samurai",
    image: "https://cdn.midjourney.com/b6605ce7-0416-4c63-89eb-4b5f5c5e0dd8/0_0.webp",
    endTime: "2024-03-28T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 30,
    neftReward: 20,
    description: "A futuristic warrior wielding digital katanas, the Neon Samurai represents the perfect blend of traditional warrior spirit and cyberpunk aesthetics.",
    owner: "0x1234...5678",
    totalSupply: 1000,
    levelRequirement: 5,
    rarity: "Legendary",
    category: "Gaming",
    subcategory: "RPG",
    taskStatus: "Not Started",
    usdValue: 150,
    network: "Ethereum",
    rarityDistribution: {
      legendary: 5,
      rare: 15,
      common: 80
    },
    tasks: [
      { id: "1", title: "Follow on Twitter", completed: false, type: "twitter" },
      { id: "2", title: "Join Discord Server", completed: false, type: "discord" }
    ]
  },
  {
    id: "3",
    projectName: "Space Explorers",
    nftName: "Astral Voyager",
    image: "https://cdn.midjourney.com/91cd0db7-7550-4a71-9b78-e88af54c4c45/0_0.webp",
    endTime: "2024-03-25T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 35,
    neftReward: 25,
    description: "Navigate through the cosmic web as an Astral Voyager. This space explorer represents humanity's eternal quest to explore the unknown reaches of the universe.",
    owner: "0x1234...5678",
    totalSupply: 1000,
    levelRequirement: 5,
    rarity: "Legendary",
    category: "Gaming",
    subcategory: "RPG",
    taskStatus: "Not Started",
    usdValue: 150,
    network: "Ethereum",
    rarityDistribution: {
      legendary: 5,
      rare: 15,
      common: 80
    },
    tasks: [
      { id: "1", title: "Follow on Twitter", completed: false, type: "twitter" },
      { id: "2", title: "Join Discord", completed: false, type: "discord" }
    ]
  },
  {
    id: "4",
    projectName: "Digital Beasts",
    nftName: "Cyberpunk Panther",
    image: "https://cdn.midjourney.com/7c0f7326-e9a5-4e27-a39c-8118703e9778/0_0.webp",
    endTime: "2024-03-30T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 40,
    neftReward: 30,
    description: "A fierce digital beast enhanced with cybernetic augmentations. The Cyberpunk Panther represents the perfect fusion of nature's grace and technological advancement.",
    owner: "0x1234...5678",
    totalSupply: 1000,
    levelRequirement: 5,
    rarity: "Legendary",
    category: "Gaming",
    subcategory: "RPG",
    taskStatus: "Not Started",
    usdValue: 150,
    network: "Ethereum",
    rarityDistribution: {
      legendary: 5,
      rare: 15,
      common: 80
    },
    tasks: [
      { id: "1", title: "Follow on Twitter", completed: false, type: "twitter" },
      { id: "2", title: "Join Discord", completed: false, type: "discord" }
    ]
  },
  {
    id: "5",
    projectName: "Pixel Masters",
    nftName: "Retro Wizard",
    image: "https://cdn.midjourney.com/e7b74c46-5d03-4425-a094-724f2492e270/0_0.webp",
    endTime: "2024-04-05T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 28,
    neftReward: 2.8,
    description: "A pixelated wizard mastering the ancient arts of digital magic.",
    owner: "0x7890...1234",
    totalSupply: 600,
    levelRequirement: 7,
    rarity: "Rare",
    category: "Gaming",
    subcategory: "Pixel Art",
    taskStatus: "Not Started",
    usdValue: 180,
    network: "Ethereum",
    tasks: [
      { id: "1", title: "Cast first spell", completed: false }
    ]
  },
  {
    id: "6",
    projectName: "Meta Racers",
    nftName: "Quantum Speedster",
    image: "https://cdn.midjourney.com/c2f66d3d-348d-4c74-8318-5df2067f8366/0_0.webp",
    endTime: "2024-04-10T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 45,
    neftReward: 5.0,
    description: "A high-speed quantum vehicle breaking the barriers of virtual reality.",
    owner: "0x2468...1357",
    totalSupply: 300,
    levelRequirement: 12,
    rarity: "Legendary",
    category: "Racing",
    subcategory: "Speed",
    taskStatus: "Not Started",
    usdValue: 400,
    network: "Polygon",
    tasks: [
      { id: "1", title: "Complete first race", completed: false }
    ]
  },
  {
    id: "7",
    projectName: "Mystic Realms",
    nftName: "Ancient Dragon",
    image: "https://cdn.midjourney.com/e54fe011-f588-4e9f-a5e4-2a29bd1c74bb/0_0.webp",
    endTime: "2024-04-15T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 50,
    neftReward: 6.5,
    description: "A legendary dragon from the mystic realms.",
    owner: "0x1357...2468",
    totalSupply: 150,
    levelRequirement: 20,
    rarity: "Legendary",
    category: "Fantasy",
    subcategory: "Dragons",
    taskStatus: "Not Started",
    usdValue: 550,
    network: "Ethereum",
    tasks: [
      { id: "1", title: "Tame the dragon", completed: false }
    ]
  },
  {
    id: "8",
    projectName: "Neo Genesis",
    nftName: "Digital Phoenix",
    image: "https://cdn.midjourney.com/cf8c7ca4-18ee-46d4-a15a-88bd8e773308/0_0.webp",
    endTime: "2024-04-15T00:00:00Z",
    startTime: "2024-03-01T00:00:00Z",
    xpReward: 55,
    neftReward: 7.0,
    description: "A digital phoenix rising from the virtual ashes.",
    owner: "0x9999...8888",
    totalSupply: 200,
    levelRequirement: 18,
    rarity: "Epic",
    category: "Fantasy",
    subcategory: "Mythical",
    taskStatus: "Not Started",
    usdValue: 600,
    network: "Ethereum",
    tasks: [
      { id: "1", title: "Complete rebirth ritual", completed: false }
    ]
  }
];
