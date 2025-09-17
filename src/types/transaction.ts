export interface ITransaction {
  _id: string;
  type: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
  status: 'pending' | 'success' | 'failed';
  amount: number;
  date: string;
  walletData?: {
    address: string;
    network: string;
    coinName: string;
    convertedAmount: number;
  };
  wireTransferData?: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    routingNumber: string;
    swiftCode: string;
    instructions: string;
  };
  depositMethod?: 'crypto' | 'wire';
  tradeData?: any;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface WalletData {
  address?: string;
  network?: string;
  coinName?: string;
  convertedAmount?: number;
}

export interface TradeData {
  package?: string;
  interest?: string;
}