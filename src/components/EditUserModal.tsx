import { countries } from '@/lib/countries';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contextData } from '@/context/AuthContext';
import Alert from './ui/Alert';
import QuickAddModal from './QuickAddModal';
import { Plus } from 'lucide-react';

interface Ranking {
  level: number;
  name: string;
  minimumDeposit: number;
  directReferral: number;
  referralDeposits: number;
  bonus: number;
}

const rankOptions = [
  'welcome',
  'silver',
  'silverPro',
  'gold',
  'goldPro',
  'diamond',
  'ambassador',
];

export default function EditUserModal({ userData: initialUserData, handleUserData }: any) {
  const [userData, setUserData] = useState(initialUserData || {});
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [deposit, setDeposit] = useState(0);
  const [interest, setInterest] = useState(0);
  const [trade, setTrade] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [withdrawalLimit, setWithdrawalLimit] = useState(0);
  const [minWithdrawal, setMinWithdrawal] = useState(1);
  const [withdrawalStatus, setWithdrawalStatus] = useState(false);
  const [rank, setRank] = useState('welcome');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  // Quick add states
  const [showQuickAddModal, setShowQuickAddModal] = useState(false);
  const [activeTab, setActiveTab] = useState('personal');
  const { login } = contextData();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  useEffect(() => {
    if (initialUserData) {
      setUserData(initialUserData);
      setFullName(initialUserData.fullName);
      setEmail(initialUserData.email);
      setSelectedCountry(initialUserData.country);
      setPhoneNumber(initialUserData.phone);
      setAddress(initialUserData.address);
      setCity(initialUserData.city);
      setState(initialUserData.state);
      setZipCode(initialUserData.zipCode);
      setDeposit(initialUserData.deposit);
      setInterest(initialUserData.interest);
      setTrade(initialUserData.trade);
      setBonus(initialUserData.bonus);
      setWithdrawalLimit(initialUserData.withdrawalLimit || 0);
      setMinWithdrawal(initialUserData.minWithdrawal || 1);
      setWithdrawalStatus(initialUserData.withdrawalStatus || false);
      setRank(initialUserData.rank || 'welcome');
    }
  }, [initialUserData]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    const [firstName, ...rest] = fullName.trim().split(' ');
    const lastName = rest.join(' ') || '';

    const profileData = {
      email,
      firstName,
      lastName,
      country: selectedCountry,
      phone: phoneNumber,
      address,
      state,
      city,
      zipCode,
      deposit,
      interest,
      trade,
      bonus,
      withdrawalLimit,
      minWithdrawal,
      withdrawalStatus,
      rank,
      ...(userData.customRankings && userData.customRankings.length > 0 && { customRankings: userData.customRankings }),
    };

    try {
      setLoading(true);
      const res = await fetch(`${url}/users/update-profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      const data = await res.json();

      if (res.ok) setSuccess(data.message || 'User update successful');
      else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const loginAsUser = () => {
    login(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/dashboard/');
  };

  const handleQuickAdd = async (
    amount: number,
    type: 'deposit' | 'interest',
  ): Promise<boolean> => {
    try {
      const currentAmount = type === 'deposit' ? deposit : interest;
      const newAmount = currentAmount + amount;

      const updateData = {
        email,
        [type]: newAmount,
      };

      const res = await fetch(`${url}/users/update-profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });

      const data = await res.json();

      if (res.ok) {
        if (type === 'deposit') {
          setDeposit(newAmount);
          // Only update rank if it's not manually set - server handles this logic
          if (data.user && data.user.rank) {
            setRank(data.user.rank);
          }
        } else {
          setInterest(newAmount);
        }
        setSuccess(`Successfully added $${amount.toLocaleString()} to ${type}`);
        return true;
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      setError(error.message);
      return false;
    }
  };

  // Calculate rank based on deposit level (matches Ranking page)
  const getAutoRank = (depositAmount: number) => {
    if (depositAmount >= 1000000) return 'ambassador';
    if (depositAmount >= 500000) return 'diamond';
    if (depositAmount >= 100000) return 'goldPro';
    if (depositAmount >= 50000) return 'gold';
    if (depositAmount >= 25000) return 'silverPro';
    if (depositAmount >= 5000) return 'silver';
    return 'welcome';
  };

  const tabs = [
    { id: 'personal', name: 'Personal Info' },
    { id: 'financial', name: 'Financial Details' },
    { id: 'trading', name: 'Trading Details' },
    { id: 'experience', name: 'Experience' },
    { id: 'rankings', name: 'Custom Rankings' },
    { id: 'quick-add', name: 'Quick Add Funds' },
  ];

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden"
        >
          {/* Modal header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-700/30">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Edit User Profile
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Manage user account settings and financial details
              </p>
            </div>
            <button
              onClick={() => handleUserData(null)}
              type="button"
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl p-2 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal body */}
          <div className="overflow-y-auto max-h-[calc(90vh-200px)] scrollbar-thin scrollbar-track-gray-100 dark:scrollbar-track-gray-800 scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {/* Tab Navigation */}
            <div className="sticky top-0 z-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200/30 dark:border-gray-700/30 px-6 py-3">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'personal' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="full-name" className="editUserLabel">
                        Full Name
                      </label>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        id="full-name"
                        className="editUserInput"
                        placeholder={userData.fullName}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="editUserLabel">
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className="editUserInput"
                        placeholder={userData.email}
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="editUserLabel">
                        Country
                      </label>
                      <select
                        id="country"
                        value={selectedCountry}
                        onChange={(e) => {
                          setSelectedCountry(e.target.value);
                        }}
                        className="editUserInput"
                      >
                        <option value="none">{userData.country}</option>
                        {countries.map((country, i) => (
                          <option key={i} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="phone-number" className="editUserLabel">
                        Phone Number
                      </label>
                      <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="text"
                        id="phone-number"
                        className="editUserInput"
                        placeholder={userData.phone}
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="editUserLabel">
                        Address
                      </label>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        name="address"
                        id="address"
                        className="editUserInput"
                        placeholder={userData.address}
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="editUserLabel">
                        State
                      </label>
                      <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        type="text"
                        id="state"
                        className="editUserInput"
                        placeholder={userData.state}
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="editUserLabel">
                        City
                      </label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        id="city"
                        className="editUserInput"
                        placeholder={userData.city}
                      />
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="editUserLabel">
                        Zip Code
                      </label>
                      <input
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        type="text"
                        id="zipCode"
                        className="editUserInput"
                        placeholder={userData.zipCode}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Financial Tab */}
              {activeTab === 'financial' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="deposit" className="editUserLabel">
                        Deposit Balance
                      </label>
                      <div className="flex gap-2">
                        <input
                          value={deposit}
                          onChange={(e) => setDeposit(Number(e.target.value))}
                          type="number"
                          id="deposit"
                          className="editUserInput flex-1"
                          placeholder={userData.deposit?.toString() || '0'}
                        />
                        <button
                          type="button"
                          onClick={() => setShowQuickAddModal(true)}
                          className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                          title="Quick Add"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="editUserLabel">
                        Interest Balance
                      </label>
                      <input
                        value={interest}
                        onChange={(e) => setInterest(Number(e.target.value))}
                        type="number"
                        id="interest"
                        className="editUserInput"
                        placeholder={userData.interest?.toString() || '0'}
                      />
                    </div>

                    <div>
                      <label htmlFor="trade" className="editUserLabel">
                        Trade Balance
                      </label>
                      <input
                        value={trade}
                        onChange={(e) => setTrade(Number(e.target.value))}
                        type="number"
                        id="trade"
                        className="editUserInput"
                        placeholder={userData.trade?.toString() || '0'}
                      />
                    </div>

                    <div>
                      <label htmlFor="bonus" className="editUserLabel">
                        Bonus Balance
                      </label>
                      <input
                        value={bonus}
                        onChange={(e) => setBonus(Number(e.target.value))}
                        type="number"
                        id="bonus"
                        className="editUserInput"
                        placeholder={userData.bonus?.toString() || '0'}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Trading Tab */}
              {activeTab === 'trading' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="withdrawal-limit"
                        className="editUserLabel"
                      >
                        Withdrawal Limit
                      </label>
                      <input
                        value={withdrawalLimit}
                        onChange={(e) =>
                          setWithdrawalLimit(Number(e.target.value))
                        }
                        type="number"
                        id="withdrawal-limit"
                        className="editUserInput"
                        placeholder={
                          userData.withdrawalLimit?.toString() || '0'
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="min-withdrawal" className="editUserLabel">
                        Minimum Withdrawal
                      </label>
                      <input
                        value={minWithdrawal}
                        onChange={(e) =>
                          setMinWithdrawal(Number(e.target.value))
                        }
                        type="number"
                        id="min-withdrawal"
                        className="editUserInput"
                        placeholder={userData.minWithdrawal?.toString() || '1'}
                      />
                    </div>


                    <div>
                      <label className="editUserLabel">Withdrawal Status</label>
                      <div className="flex items-center gap-4 mt-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="withdrawal-status"
                            checked={withdrawalStatus === true}
                            onChange={() => setWithdrawalStatus(true)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm text-green-600 dark:text-green-400">
                            Enabled
                          </span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="withdrawal-status"
                            checked={withdrawalStatus === false}
                            onChange={() => setWithdrawalStatus(false)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span className="text-sm text-red-600 dark:text-red-400">
                            Disabled
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && userData.annualIncome && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="editUserLabel">Annual Income</label>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {userData.annualIncome}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="editUserLabel">Income Source</label>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {userData.incomeSource}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="editUserLabel">Trading Knowledge</label>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {userData.knowledgeLevel}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="editUserLabel">Years Trading</label>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {userData.yearsTrading}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Rankings Tab */}
              {activeTab === 'rankings' && (
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200/30 dark:border-blue-800/30">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      Custom Rankings Management
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      Set custom ranking requirements for this user. If no custom rankings are set, default values will be used.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>Currently using:</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                        {userData.customRankings?.length > 0 ? 'Custom Rankings' : 'Default Rankings'}
                      </span>
                    </div>
                    
                    {userData.customRankings?.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => {
                          setUserData({ ...userData, customRankings: [] });
                        }}
                        className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 rounded-lg transition-colors"
                      >
                        Reset to Default
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          const defaultRankings = [
                            { level: 1, name: 'welcome', minimumDeposit: 0, directReferral: 0, referralDeposits: 0, bonus: 0 },
                            { level: 2, name: 'silver', minimumDeposit: 5000, directReferral: 0, referralDeposits: 0, bonus: 200 },
                            { level: 3, name: 'silverPro', minimumDeposit: 25000, directReferral: 0, referralDeposits: 0, bonus: 1000 },
                            { level: 4, name: 'gold', minimumDeposit: 50000, directReferral: 0, referralDeposits: 0, bonus: 2000 },
                            { level: 5, name: 'goldPro', minimumDeposit: 100000, directReferral: 0, referralDeposits: 0, bonus: 3000 },
                            { level: 6, name: 'diamond', minimumDeposit: 500000, directReferral: 12, referralDeposits: 2550000, bonus: 20000 },
                            { level: 7, name: 'ambassador', minimumDeposit: 1000000, directReferral: 12, referralDeposits: 2550000, bonus: 50000 }
                          ];
                          setUserData({ ...userData, customRankings: defaultRankings });
                        }}
                        className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded-lg transition-colors"
                      >
                        Create Custom Rankings
                      </button>
                    )}
                  </div>

                  {/* User Rank Management */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Current User Rank</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="rank" className="block text-sm font-medium text-gray-600 dark:text-gray-400">
                            Rank
                          </label>
                          {userData.manualRank && (
                            <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full">
                              Manual Override
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <select
                            id="rank"
                            value={rank}
                            onChange={(e) => setRank(e.target.value)}
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            {rankOptions.map((option) => (
                              <option key={option} value={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                              </option>
                            ))}
                          </select>
                          {userData.manualRank && (
                            <button
                              type="button"
                              onClick={async () => {
                                try {
                                  const res = await fetch(`${url}/users/reset-rank-to-auto`, {
                                    method: 'PUT',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ email }),
                                  });
                                  const data = await res.json();
                                  if (res.ok && data.user) {
                                    setRank(data.user.rank);
                                    setSuccess('Rank reset to auto-calculation');
                                  } else {
                                    throw new Error(data.message);
                                  }
                                } catch (error: any) {
                                  setError(error.message);
                                }
                              }}
                              className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors"
                              title="Reset to Auto"
                            >
                              Auto
                            </button>
                          )}
                        </div>
                        {!userData.manualRank && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Auto-calculated based on deposit: {getAutoRank(deposit)}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                          Current Deposit
                        </label>
                        <div className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            ${deposit.toLocaleString('en-US')}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          This determines auto-calculated rank
                        </p>
                      </div>
                    </div>
                  </div>

                  {userData.customRankings?.length > 0 && (
                    <div className="space-y-4">
                      {userData.customRankings.map((ranking: Ranking, index: number) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-semibold text-gray-800 dark:text-gray-200 capitalize">
                              Level {ranking.level} - {ranking.name}
                            </h5>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                Minimum Deposit ($)
                              </label>
                              <input
                                type="number"
                                value={ranking.minimumDeposit}
                                onChange={(e) => {
                                  const newRankings = [...userData.customRankings];
                                  newRankings[index] = { ...ranking, minimumDeposit: parseInt(e.target.value) || 0 };
                                  setUserData({ ...userData, customRankings: newRankings });
                                }}
                                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                Direct Referrals
                              </label>
                              <input
                                type="number"
                                value={ranking.directReferral}
                                onChange={(e) => {
                                  const newRankings = [...userData.customRankings];
                                  newRankings[index] = { ...ranking, directReferral: parseInt(e.target.value) || 0 };
                                  setUserData({ ...userData, customRankings: newRankings });
                                }}
                                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                Referral Deposits ($)
                              </label>
                              <input
                                type="number"
                                value={ranking.referralDeposits}
                                onChange={(e) => {
                                  const newRankings = [...userData.customRankings];
                                  newRankings[index] = { ...ranking, referralDeposits: parseInt(e.target.value) || 0 };
                                  setUserData({ ...userData, customRankings: newRankings });
                                }}
                                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                                Bonus ($)
                              </label>
                              <input
                                type="number"
                                value={ranking.bonus}
                                onChange={(e) => {
                                  const newRankings = [...userData.customRankings];
                                  newRankings[index] = { ...ranking, bonus: parseInt(e.target.value) || 0 };
                                  setUserData({ ...userData, customRankings: newRankings });
                                }}
                                className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {(!userData.customRankings || userData.customRankings.length === 0) && (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      <p className="mb-4">This user is using the default ranking system.</p>
                      <p className="text-sm">Click "Create Custom Rankings" above to set user-specific ranking requirements.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Quick Add Tab */}
              {activeTab === 'quick-add' && (
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <button
                      type="button"
                      onClick={() => setShowQuickAddModal(true)}
                      className="px-8 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      <Plus className="w-5 h-5 inline mr-2" />
                      Quick Add Funds
                    </button>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                      Instantly add funds to deposit or interest balance
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal footer */}
          <div className="sticky bottom-0 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-3 bg-gray-50/80 dark:bg-gray-800/70 backdrop-blur-lg border-t border-gray-200/30 dark:border-gray-700/30">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </div>
                ) : (
                  'Save Changes'
                )}
              </button>

              <button
                type="button"
                onClick={loginAsUser}
                className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                Login as User
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              {error && <Alert type="error" message={error} />}
              {success && <Alert type="success" message={success} />}
            </div>
          </div>
        </form>
      </div>

      {/* Quick Add Modal */}
      <QuickAddModal
        isOpen={showQuickAddModal}
        onClose={() => setShowQuickAddModal(false)}
        onAdd={handleQuickAdd}
        currentDeposit={deposit}
        currentInterest={interest}
        userEmail={email}
      />
    </div>
  );
}
