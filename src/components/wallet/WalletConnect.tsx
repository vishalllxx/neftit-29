
import { useWallet } from "./WalletProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wallet, WalletCards } from "lucide-react";
import { useState } from "react";

export function WalletConnect() {
  const { isConnected, connect, disconnect, address, walletType } = useWallet();
  const [open, setOpen] = useState(false);

  const mockWallets = [
    { id: 'metamask', name: 'MetaMask', icon: '🦊' },
    { id: 'phantom', name: 'Phantom', icon: '👻' },
    { id: 'walletconnect', name: 'WalletConnect', icon: '🔗' },
  ];

  const handleConnect = async (walletId: string) => {
    try {
      await connect(walletId);
      setOpen(false);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isConnected ? (
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={handleDisconnect}
          >
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          </Button>
        ) : (
          <Button 
            variant="outline" 
            className="gap-2"
          >
            <WalletCards className="h-4 w-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to connect with our platform
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {mockWallets.map((wallet) => (
            <Button
              key={wallet.id}
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => handleConnect(wallet.id)}
            >
              <span>{wallet.icon}</span>
              <span>{wallet.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
