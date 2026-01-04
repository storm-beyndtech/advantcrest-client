import Alert from '@/components/ui/Alert';
import { useEffect, useState } from 'react';
import { Power, PowerOff, Settings, CreditCard, Coins } from 'lucide-react';
import { apiGet, apiPut } from '@/utils/api';

interface WireTransferData {
  bankName: string;
  accountName: string;
  accountNumber: string;
  routingNumber: string;
  swiftCode: string;
  instructions: string;
  isActive: boolean;
}

export default function AdminSettings() {
  const [coins, setCoins] = useState([
    { name: '', address: '', network: '', price: 0 },
  ]);
  const [utilId, setUtilId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [maintenanceMessage, setMaintenanceMessage] = useState('');
  const [maintenanceLoading, setMaintenanceLoading] = useState(false);
  const [wireTransfer, setWireTransfer] = useState<WireTransferData>({
    bankName: '',
    accountName: '',
    accountNumber: '',
    routingNumber: '',
    swiftCode: '',
    instructions: '',
    isActive: true,
  });
  const [activeTab, setActiveTab] = useState('coins');
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const fetchUtils = async () => {
    try {
      const res = await apiGet(`${url}/utils`, false);
      const data = await res.json();

      if (res.ok) {
        setCoins(data.coins || []);
        setUtilId(data._id);
        setWireTransfer(
          data.wireTransfer || {
            bankName: '',
            accountName: '',
            accountNumber: '',
            routingNumber: '',
            swiftCode: '',
            instructions: '',
            isActive: true,
          },
        );
        setMaintenanceMode(data.maintenanceMode?.enabled || false);
        setMaintenanceMessage(
          data.maintenanceMode?.message ||
            "We're currently performing maintenance. Please check back soon.",
        );
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUtils();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);
      const updateData = activeTab === 'coins' ? { coins } : { wireTransfer };
      const res = await apiPut(`${url}/utils/update/${utilId}`, updateData);
      const data = await res.json();

      if (res.ok) setSuccess(true);
      else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMaintenanceMode = async () => {
    setMaintenanceLoading(true);
    try {
      const res = await apiPut(`${url}/utils/maintenance-mode`, {
        enabled: !maintenanceMode,
        message: maintenanceMessage,
      });

      if (res.ok) {
        const data = await res.json();
        setMaintenanceMode(data.maintenanceMode.enabled);
        setSuccess(
          `Maintenance mode ${
            data.maintenanceMode.enabled ? 'enabled' : 'disabled'
          }` as any,
        );
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setMaintenanceLoading(false);
    }
  };

  const handleCoinChange = (
    index: number,
    field: string,
    value: string | number,
  ) => {
    const newCoins = [...coins];
    newCoins[index] = { ...newCoins[index], [field]: value };
    setCoins(newCoins);
  };

  const addCoin = () => {
    setCoins([...coins, { name: '', address: '', network: '', price: 0 }]);
  };

  const removeCoin = (index: number) => {
    const newCoins = coins.filter((_, i) => i !== index);
    setCoins(newCoins);
  };

  const handleWireTransferChange = (
    field: keyof WireTransferData,
    value: string | boolean,
  ) => {
    setWireTransfer((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const tabs = [
    { id: 'coins', name: 'Crypto Wallets', icon: Coins },
    { id: 'wire', name: 'Wire Transfer', icon: CreditCard },
    { id: 'maintenance', name: 'Maintenance', icon: Settings },
  ];

  return (
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-900/50 customBlur border dark:border-gray-800">
      <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-900">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          System Settings
        </h3>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8 px-6" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-6 space-y-6">
        {/* Crypto Wallets Tab */}
        {activeTab === 'coins' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {coins.map((coin, index) => (
              <div key={index} className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor={`coin-name-${index}`}
                    className="editUserLabel"
                  >
                    Coin Name
                  </label>
                  <input
                    value={coin.name}
                    onChange={(e) =>
                      handleCoinChange(index, 'name', e.target.value)
                    }
                    type="text"
                    id={`coin-name-${index}`}
                    className="editUserInput"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor={`coin-address-${index}`}
                    className="editUserLabel"
                  >
                    Address
                  </label>
                  <input
                    value={coin.address}
                    onChange={(e) =>
                      handleCoinChange(index, 'address', e.target.value)
                    }
                    type="text"
                    id={`coin-address-${index}`}
                    className="editUserInput"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor={`coin-network-${index}`}
                    className="editUserLabel"
                  >
                    Network
                  </label>
                  <input
                    value={coin.network}
                    onChange={(e) =>
                      handleCoinChange(index, 'network', e.target.value)
                    }
                    type="text"
                    id={`coin-network-${index}`}
                    className="editUserInput"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor={`coin-price-${index}`}
                    className="editUserLabel"
                  >
                    Price
                  </label>
                  <input
                    value={coin.price}
                    onChange={(e) =>
                      handleCoinChange(
                        index,
                        'price',
                        parseFloat(e.target.value),
                      )
                    }
                    type="number"
                    id={`coin-price-${index}`}
                    className="editUserInput"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <button
                    type="button"
                    onClick={() => removeCoin(index)}
                    className="text-red-500 text-xs font-medium border-[1.2px] border-red-500 rounded-lg p-3"
                  >
                    Remove Coin
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center space-x-3 pt-4">
              <button
                type="button"
                onClick={addCoin}
                className="text-lime-600 text-xs font-medium border-[1.2px] border-lime-500 rounded-lg p-3"
              >
                Add New Coin
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? 'Saving...' : 'Save Crypto Wallets'}
              </button>
            </div>
          </form>
        )}

        {/* Wire Transfer Tab */}
        {activeTab === 'wire' && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="bankName" className="editUserLabel">
                  Bank Name
                </label>
                <input
                  value={wireTransfer.bankName}
                  onChange={(e) =>
                    handleWireTransferChange('bankName', e.target.value)
                  }
                  type="text"
                  id="bankName"
                  className="editUserInput"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="accountName" className="editUserLabel">
                  Account Name
                </label>
                <input
                  value={wireTransfer.accountName}
                  onChange={(e) =>
                    handleWireTransferChange('accountName', e.target.value)
                  }
                  type="text"
                  id="accountName"
                  className="editUserInput"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="accountNumber" className="editUserLabel">
                  Account Number
                </label>
                <input
                  value={wireTransfer.accountNumber}
                  onChange={(e) =>
                    handleWireTransferChange('accountNumber', e.target.value)
                  }
                  type="text"
                  id="accountNumber"
                  className="editUserInput"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="routingNumber" className="editUserLabel">
                  Routing Number
                </label>
                <input
                  value={wireTransfer.routingNumber}
                  onChange={(e) =>
                    handleWireTransferChange('routingNumber', e.target.value)
                  }
                  type="text"
                  id="routingNumber"
                  className="editUserInput"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="swiftCode" className="editUserLabel">
                  SWIFT Code
                </label>
                <input
                  value={wireTransfer.swiftCode}
                  onChange={(e) =>
                    handleWireTransferChange('swiftCode', e.target.value)
                  }
                  type="text"
                  id="swiftCode"
                  className="editUserInput"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <div className="flex items-center">
                  <input
                    id="wireActive"
                    type="checkbox"
                    checked={wireTransfer.isActive}
                    onChange={(e) =>
                      handleWireTransferChange('isActive', e.target.checked)
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="wireActive"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Enable Wire Transfer
                  </label>
                </div>
              </div>
              <div className="col-span-6">
                <label htmlFor="instructions" className="editUserLabel">
                  Instructions for Users
                </label>
                <textarea
                  value={wireTransfer.instructions}
                  onChange={(e) =>
                    handleWireTransferChange('instructions', e.target.value)
                  }
                  id="instructions"
                  rows={4}
                  className="editUserInput"
                  placeholder="Additional instructions for wire transfer deposits..."
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-4">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {loading ? 'Saving...' : 'Save Wire Transfer Details'}
              </button>
            </div>
          </form>
        )}

        {/* Maintenance Mode Tab */}
        {activeTab === 'maintenance' && (
          <div className="space-y-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Settings className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    Maintenance Mode Control
                  </h3>
                  <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                    When enabled, all users except admins will see a maintenance
                    page. Login and admin dashboard remain accessible.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Maintenance Mode
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Status:{' '}
                  <span
                    className={`font-medium ${
                      maintenanceMode ? 'text-red-600' : 'text-green-600'
                    }`}
                  >
                    {maintenanceMode ? 'Enabled' : 'Disabled'}
                  </span>
                </p>
              </div>
              <button
                onClick={toggleMaintenanceMode}
                disabled={maintenanceLoading}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  maintenanceMode
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {maintenanceLoading ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                ) : maintenanceMode ? (
                  <Power className="w-4 h-4" />
                ) : (
                  <PowerOff className="w-4 h-4" />
                )}
                <span>
                  {maintenanceLoading
                    ? 'Processing...'
                    : maintenanceMode
                      ? 'Disable Maintenance'
                      : 'Enable Maintenance'}
                </span>
              </button>
            </div>

            <div>
              <label htmlFor="maintenanceMessage" className="editUserLabel">
                Maintenance Message
              </label>
              <textarea
                value={maintenanceMessage}
                onChange={(e) => setMaintenanceMessage(e.target.value)}
                id="maintenanceMessage"
                rows={4}
                className="editUserInput"
                placeholder="Message to display to users during maintenance..."
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                This message will be shown to users when maintenance mode is
                enabled.
              </p>
            </div>
          </div>
        )}

        {error && <Alert type="error" message={error} />}
        {success && <Alert type="success" message={'Updated Successfully'} />}
      </div>
    </div>
  );
}
