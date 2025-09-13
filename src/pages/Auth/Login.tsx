import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Alert from '@/components/ui/Alert';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeSwitcher from '@/components/Layouts/DarkModeSwitcher';
import { contextData } from '@/context/AuthContext';

// Placeholder types for form state and errors
interface LoginFormState {
  emailOrUsername: string;
  password: string;
  rememberMe: boolean;
}

interface LoginErrors {
  emailOrUsername?: string;
  password?: string;
}

const Login: React.FC = () => {
  const { login } = contextData();
  const [formData, setFormData] = useState<LoginFormState>({
    emailOrUsername: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState<LoginErrors>({});
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [showPassword, setShowPassword] = useState(false);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  function isEmail(input: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};

    if (!formData.emailOrUsername.trim()) {
      newErrors.emailOrUsername = 'Email or username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    const payload = {
      password: formData.password,
      email: isEmail(formData.emailOrUsername) ? formData.emailOrUsername : '',
      username: isEmail(formData.emailOrUsername)
        ? ''
        : formData.emailOrUsername,
    };
    try {
      // Placeholder for actual API call
      const response = await fetch(`${url}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.message);
      }

      // Handle successful login
      setSubmitStatus('success');
      login(resData.user);
      // Redirect or handle successful login
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error: any) {
      // Handle login error
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    // Clear corresponding error when user starts typing
    if (errors[name as keyof LoginErrors]) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 py-16">
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <img src={logo} alt="logo" className="h-12 w-auto filter brightness-0 dark:filter-none dark:brightness-100" />
            </Link>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome back to
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                AdvantCrest
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Access your trading dashboard and continue your investment journey with our advanced copy trading platform.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Copy professional traders automatically</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Regulated and secure platform</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Real-time market execution</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-between items-center">
            <div className="lg:hidden">
              <Link to="/" className="inline-block">
                <img src={logo} alt="logo" className="h-8 w-auto filter brightness-0 dark:filter-none dark:brightness-100" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/register" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Create account
              </Link>
              <DarkModeSwitcher />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Enter your credentials to access your dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="emailOrUsername" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email or Username
                </label>
                <input
                  type="text"
                  id="emailOrUsername"
                  name="emailOrUsername"
                  value={formData.emailOrUsername}
                  onChange={handleChange}
                  placeholder="Enter your email or username"
                  className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border rounded-lg text-sm transition-colors duration-200 ${
                    errors.emailOrUsername
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500'
                  } text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
                {errors.emailOrUsername && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.emailOrUsername}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
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

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                >
                  Remember me for 30 days
                </label>
              </div>

              {/* Alert Messages */}
              {submitStatus === 'success' && (
                <Alert type="success" message="Redirecting to dashboard..." />
              )}
              {submitStatus === 'error' && <Alert type="error" message={error} />}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Create one now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;