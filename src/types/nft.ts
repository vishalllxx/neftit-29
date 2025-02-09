
export interface NFTProject {
  id: string;
  projectName: string;
  nftName: string;
  image: string;
  endTime: string;
  xpReward: number;
  neftReward: number;
  description: string;
  owner: string;
  totalSupply: number;
  levelRequirement: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  category: string;
  subcategory: string;
  taskStatus?: 'Not Started' | 'In Progress' | 'Completed';
  usdValue?: number;
  network: string;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}
