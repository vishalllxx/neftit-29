
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';

interface WalletContextType {
  isConnected: boolean;
  connect: (walletType: string) => Promise<void>;
  disconnect: () => void;
  address: string | null;
  walletType: string | null;
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  connect: async () => {},
  disconnect: () => {},
  address: null,
  walletType: null,
});

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<string | null>(null);

  // Check for existing wallet connection on mount
  useEffect(() => {
    const savedWallet = localStorage.getItem('walletType');
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedWallet && savedAddress) {
      setIsConnected(true);
      setWalletType(savedWallet);
      setAddress(savedAddress);
    }
  }, []);

  const connect = async (type: string) => {
    try {
      // Mock wallet connection - in a real app, you would implement actual wallet connection logic
      console.log(`Connecting to ${type}...`);
      const mockAddress = `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 10)}`;
      
      setIsConnected(true);
      setAddress(mockAddress);
      setWalletType(type);
      
      // Save wallet info
      localStorage.setItem('walletType', type);
      localStorage.setItem('walletAddress', mockAddress);
      
      toast.success('Wallet connected successfully!');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setIsConnected(false);
      setAddress(null);
      setWalletType(null);
      toast.error('Failed to connect wallet');
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setWalletType(null);
    localStorage.removeItem('walletType');
    localStorage.removeItem('walletAddress');
    toast.success('Wallet disconnected');
  };

  return (
    <WalletContext.Provider value={{ isConnected, connect, disconnect, address, walletType }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);
