import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Alert from '@/components/ui/Alert';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeSwitcher from '@/components/Layouts/DarkModeSwitcher';
import { contextData } from '@/context/AuthContext';
import { apiPost } from '@/utils/api';

// Placeholder types for form state and errors
interface RegistrationFormState {
  username: string;
  email: string;
  password: string;
  referredBy: string;
  termsAccepted: boolean;
}

interface RegistrationErrors {
  username?: string;
  email?: string;
  password?: string;
  termsAccepted?: string;
}

const Register: React.FC = () => {
  const {} = contextData();
  const [formData, setFormData] = useState<RegistrationFormState>({
    username: '',
    email: '',
    password: '',
    referredBy: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [showPassword, setShowPassword] = useState(false);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  // Validation function placeholder
  const validateForm = (): boolean => {
    const newErrors: RegistrationErrors = {};

    // Add validation logic here
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the Terms & Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    const bodyData = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      referredBy: formData.referredBy,
    };
    try {
      // Placeholder for actual API call
      const response = await apiPost(`${url}/users/signup`, bodyData, false);

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message);
      }

      // Handle successful registration
      setSubmitStatus('success');
      // Redirect or handle successful registration
      setTimeout(() => {
        navigate('/verify-otp', {
          state: {
            email: formData.email,
            username: formData.username,
            password: formData.password,
            referredBy: formData.referredBy,
            pageType: 'register-verification'
          }
        });
      }, 2000);
    } catch (error: any) {
      // Handle registration error
      setError(error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);

      // Reset error status after 5 seconds
      if (submitStatus === 'error') {
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    // Special handling for checkbox
    const finalValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    // Clear corresponding error when user starts typing/selecting
    if (errors[name as keyof RegistrationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-950">
      {/* Left Side - Marketing Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-50 dark:bg-emerald-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-green-600/10"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 py-16">
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <img src={logo} alt="logo" className="h-12 w-auto filter brightness-0 dark:filter-none dark:brightness-100" />
            </Link>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Join the Future of
              <span className="block text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                Copy Trading
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Start your investment journey with AdvantCrest and access the world's most successful traders.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Join 500K+ active traders worldwide</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Bank-level security & encryption</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Start with as little as $50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-between items-center">
            <div className="lg:hidden">
              <Link to="/" className="inline-block">
                <img src={logo} alt="logo" className="h-8 w-auto filter brightness-0 dark:filter-none dark:brightness-100" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Sign in
              </Link>
              <DarkModeSwitcher />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Join thousands of successful copy traders
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Choose a username"
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-sm transition-colors duration-200 ${
                      errors.username
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-sm transition-colors duration-200 ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-sm transition-colors duration-200 ${
                      errors.password
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                    } text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50 pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="referredBy" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Referral Code <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="referredBy"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleChange}
                  placeholder="Enter referral code"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm transition-colors duration-200 focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="termsAccepted"
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  I agree to the{' '}
                  <Link to="/terms-and-conditions" className="text-blue-600 hover:text-blue-500 transition-colors">
                    Terms & Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-blue-600 hover:text-blue-500 transition-colors">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
              )}

              {/* Alert Messages */}
              {submitStatus === 'success' && (
                <Alert
                  type="success"
                  message="Registration Successful! Welcome to AdvantCrest Markets."
                />
              )}
              {submitStatus === 'error' && (
                <Alert
                  type="error"
                  message={error || 'Registration failed. Please try again.'}
                />
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
