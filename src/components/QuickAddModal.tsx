import React, { useState } from 'react';
import { Plus, DollarSign, X } from 'lucide-react';
import Alert from './ui/Alert';

interface QuickAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (amount: number, type: 'deposit' | 'interest') => Promise<boolean>;
  currentDeposit: number;
  currentInterest: number;
  userEmail: string;
}

const QuickAddModal: React.FC<QuickAddModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  currentDeposit,
  currentInterest,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState<'deposit' | 'interest'>('deposit');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (amount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const success = await onAdd(amount, type);
      if (success) {
        setSuccess(`Successfully added $${amount.toLocaleString()} to ${type}`);
        setAmount(0);
        setTimeout(() => {
          onClose();
          setSuccess(null);
        }, 2000);
      }
    } catch (error: any) {
      setError(error.message || 'Failed to add funds');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setAmount(0);
    setError(null);
    setSuccess(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 overflow-hidden">
        <div className="flex items-center justify-between p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-700/30">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Quick Add Funds
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Instantly update user balances
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl p-2 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Balances */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200/30 dark:border-blue-800/30">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-3">
                Current Balances
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Deposit
                  </p>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                    ${currentDeposit.toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Interest
                  </p>
                  <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                    ${currentInterest.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Add funds to:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setType('deposit')}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                    type === 'deposit'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25'
                      : 'bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-600/80'
                  }`}
                >
                  <DollarSign className="inline mr-2" size={14} />
                  Deposit
                </button>
                <button
                  type="button"
                  onClick={() => setType('interest')}
                  className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 transform hover:scale-[1.02] ${
                    type === 'interest'
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-100/80 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-600/80'
                  }`}
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Interest
                </button>
              </div>
            </div>

            {/* Amount Input */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3"
              >
                Amount to Add ($)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-lg font-semibold">$</span>
                </div>
                <input
                  type="number"
                  id="amount"
                  value={amount || ''}
                  onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                  min="0"
                  step="0.01"
                  className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white placeholder-gray-400 text-lg font-semibold"
                  placeholder="0.00"
                  required
                />
              </div>
            </div>

            {/* Preview */}
            {amount > 0 && (
              <div
                className={`p-4 rounded-xl border-2 ${
                  type === 'deposit'
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/30'
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p
                    className={`text-sm font-medium ${
                      type === 'deposit'
                        ? 'text-green-800 dark:text-green-300'
                        : 'text-blue-800 dark:text-blue-300'
                    }`}
                  >
                    New {type} balance:
                  </p>
                  <p
                    className={`text-xl font-bold ${
                      type === 'deposit'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    $
                    {(
                      (type === 'deposit' ? currentDeposit : currentInterest) +
                      amount
                    ).toLocaleString()}
                  </p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  +${amount.toLocaleString()} increase
                </p>
              </div>
            )}

            {/* Alerts */}
            {error && <Alert type="error" message={error} />}
            {success && <Alert type="success" message={success} />}

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || amount <= 0}
                className="flex-1 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 rounded-xl shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
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
                    Adding...
                  </div>
                ) : (
                  `Add $${amount.toLocaleString()}`
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickAddModal;
