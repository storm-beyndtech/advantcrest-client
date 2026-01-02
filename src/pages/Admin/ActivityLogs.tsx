import { useEffect, useState } from 'react';
import PageLoader from '@/components/PageLoader';
import Alert from '@/components/ui/Alert';

type ActivityLog = {
  _id: string;
  actorEmail?: string;
  actorRole?: string;
  action: string;
  targetCollection?: string;
  targetId?: string;
  ipAddress?: string;
  userAgent?: string;
  location?: {
    city?: string;
    region?: string;
    country?: string;
  };
  createdAt: string;
  metadata?: Record<string, any>;
};

const ACTION_LABELS: Record<string, string> = {
  admin_login: 'Admin Login',
  admin_create_trader: 'Trader Created',
  admin_update_trader: 'Trader Updated',
  admin_delete_trader: 'Trader Deleted',
  admin_update_profile: 'User Profile Edited',
  admin_update_user_trader: 'User Trader Mapping Edited',
  admin_bulk_delete_users: 'Bulk User Delete',
  admin_approve_kyc: 'KYC Approved',
  admin_create_trade: 'Trade Created',
  admin_update_trade: 'Trade Updated',
  admin_delete_trade: 'Trade Deleted',
  admin_update_util: 'Settings Updated',
  admin_update_maintenance_mode: 'Maintenance Updated',
  admin_send_mail: 'Bulk Mail Sent',
  update_deposit_status: 'Deposit Status Updated',
  update_withdrawal_status: 'Withdrawal Status Updated',
  update_transaction: 'Transaction Updated',
  delete_transaction: 'Transaction Deleted',
};

export default function ActivityLogs() {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [filtered, setFiltered] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState<string>('all');
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const fetchLogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ limit: '200' });
      const res = await fetch(`${url}/activity-logs?${params.toString()}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to load activity logs');
      }
      const items = data.logs || [];
      setLogs(items);
      setFiltered(items);
    } catch (err: any) {
      setError(err.message || 'Failed to load activity logs');
    } finally {
      setLoading(false);
    }
  };

  const uniqueActions = Array.from(
    new Set(
      logs
        .map((log) => log.action)
        .filter(Boolean)
        .sort(),
    ),
  );

  useEffect(() => {
    const searchValue = search.toLowerCase();
    const next = logs.filter((log) => {
      const matchesAction = actionFilter === 'all' || log.action === actionFilter;
      const haystack = [
        log.actorEmail,
        log.targetCollection,
        log.targetId,
        log.ipAddress,
        log.location?.city,
        log.location?.country,
        ACTION_LABELS[log.action] || log.action,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      const matchesSearch = haystack.includes(searchValue);
      return matchesAction && matchesSearch;
    });
    setFiltered(next);
  }, [logs, search, actionFilter]);

  useEffect(() => {
    fetchLogs();
  }, []);

  if (loading) return <PageLoader />;

  if (error) return <Alert type="error" message={error} />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-100">Admin Activity</h2>
          <p className="text-sm text-gray-400">
            Every admin-surface action with IP, location, and metadata.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap md:justify-end">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search email, target, IP..."
            className="w-full sm:w-64 rounded-lg border border-gray-700 bg-[#0f1624] px-3 py-2 text-sm text-gray-100 placeholder:text-gray-500 focus:border-sky-500 focus:outline-none"
          />
          <select
            value={actionFilter}
            onChange={(e) => setActionFilter(e.target.value)}
            className="w-full sm:w-48 rounded-lg border border-gray-700 bg-[#0f1624] px-3 py-2 text-sm text-gray-100 focus:border-sky-500 focus:outline-none"
          >
            <option value="all">All actions</option>
            {uniqueActions.map((action) => (
              <option key={action} value={action}>
                {ACTION_LABELS[action] || action}
              </option>
            ))}
          </select>
          <button
            onClick={fetchLogs}
            className="w-full sm:w-auto rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-500"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filtered.length === 0 && (
          <div className="col-span-full">
            <Alert type="error" message="No activity found with current filters." />
          </div>
        )}
        {filtered.map((log) => (
          <div
            key={log._id}
            className="min-w-0 rounded-xl border border-gray-800 bg-gradient-to-br from-[#0f1624] to-[#0b1220] p-4 shadow-lg"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wide text-sky-400">
                  {ACTION_LABELS[log.action] || log.action}
                </div>
                <div className="text-sm text-gray-100">{log.actorEmail || 'Unknown'}</div>
                <div className="text-2xs text-gray-500">{log.actorRole || 'user'}</div>
              </div>
              <div className="text-right text-2xs text-gray-400">
                {new Date(log.createdAt).toLocaleString()}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-2xs text-gray-400">
              <div>
              <div className="text-gray-500">Target</div>
                <div className="text-gray-200 break-words">
                  <div className="truncate" title={`${log.targetCollection || '-'} ${log.targetId || ''}`}>
                    {log.targetCollection || '-'}
                  </div>
                  <div className="text-2xs text-gray-500 break-words">
                    {log.targetId || ''}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-gray-500">IP / Location</div>
                <div className="text-gray-200">
                  {log.ipAddress || 'n/a'}
                  <br />
                  {[log.location?.city, log.location?.region, log.location?.country]
                    .filter(Boolean)
                    .join(', ')}
                </div>
              </div>
            </div>

            {log.metadata && (
              <div className="mt-3 rounded-lg bg-[#111a2a] p-3 text-2xs text-gray-300">
                <div className="text-gray-500 mb-1">Metadata</div>
                <pre className="max-h-32 overflow-auto whitespace-pre-wrap break-words text-gray-200">
                  {JSON.stringify(log.metadata, null, 2)}
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
