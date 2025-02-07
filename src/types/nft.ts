
export interface NFTProject {
  id: string;
  projectName: string;
  nftName: string;
  image: string;
  endTime: string;
  xpReward: number;
  neftReward: number;
  description: string;
  tasks: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}
