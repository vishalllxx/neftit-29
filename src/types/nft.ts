export interface NFTProject {
  id: string;
  projectName: string;
  nftName: string;
  image: string;
  endTime: string;
  startTime?: string;
  xpReward: number;
  neftReward: number;
  description: string;
  owner: string;
  totalSupply: number;
  levelRequirement: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  category: string;
  subcategory: string;
  taskStatus?: 'Not Started' | 'In Progress' | 'Completed';
  usdValue?: number;
  network: string;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
    type?: 'twitter' | 'discord' | 'other';
  }[];
  rarityDistribution?: {
    legendary: number;
    rare: number;
    common: number;
  };
}

export type NFTRarity = 'Common' | 'Platinum' | 'Silver' | 'Gold';

export interface BurnRule {
  from: {
    rarity: NFTRarity;
    count: number;
  };
  to: {
    rarity: NFTRarity;
    count: number;
  };
}

export interface BurnHistory {
  id: string;
  timestamp: string;
  burnedNFTs: {
    id: string;
    rarity: NFTRarity;
  }[];
  receivedNFT: {
    id: string;
    rarity: NFTRarity;
  };
}

export interface Statistic {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  number: string;
}
