import React, { useState, useRef, useEffect } from 'react';
import Alert from '@/components/ui/Alert';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeSwitcher from '@/components/Layouts/DarkModeSwitcher';
import { contextData } from '@/context/AuthContext';

// OTP Page Types
export type OTPPageType =
  | 'register-verification'
  | 'reset-password'
  | 'login-verification'
  | 'withdraw-verification';

// User data interface
interface UserData {
  email?: string;
  username?: string;
  password?: string;
  referredBy?: string;
  phoneNumber?: string;
  withdrawalAmount?: number;
  withdrawalAddress?: string;
}

interface OTPVerificationProps {
  pageType: OTPPageType;
  otpLength?: number;
  resendDelay?: number;
  userData: UserData;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  pageType = 'register-verification',
  otpLength = 6,
  resendDelay = 60,
  userData,
}) => {
  // Create an array of refs for the OTP input fields
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(''));
  const [activeInput, setActiveInput] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [countdown, setCountdown] = useState<number>(resendDelay);
  const [canResend, setCanResend] = useState<boolean>(false);
  const navigate = useNavigate();
  const { login } = contextData();
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  // Initialize the input refs array
  useEffect(() => {
    inputRefs.current = Array(otpLength)
      .fill(null)
      .map((_, i) => inputRefs.current[i] || null);
  }, [otpLength]);

  // Start countdown timer for resend button
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  // Determine which contact method was used for sending OTP
  const getContactMethod = () => {
    if (userData.email) return userData.email;
    if (userData.phoneNumber) return userData.phoneNumber;
    return 'your contact information';
  };

  // Mask the contact information for display
  const maskContactInfo = (info: string) => {
    if (!info) return '';

    // Handle email
    if (info.includes('@')) {
      const [username, domain] = info.split('@');
      return `${username.substring(0, 2)}${'*'.repeat(
        Math.max(2, username.length - 4),
      )}${username.slice(-2)}@${domain}`;
    }

    // Handle phone number
    else if (/^\d+$/.test(info.replace(/\D/g, ''))) {
      const digits = info.replace(/\D/g, '');
      return `${'*'.repeat(Math.max(0, digits.length - 4))}${digits.slice(-4)}`;
    }

    return info;
  };

  // Determine page title and descriptions based on pageType
  const getPageContent = () => {
    const maskedContact = maskContactInfo(getContactMethod());

    switch (pageType) {
      case 'register-verification':
        return {
          title: 'Verify Your Account',
          description: `Enter the verification code we sent to ${maskedContact}`,
          successMessage: 'Account verified successfully!',
          errorMessage: 'Invalid verification code. Please try again.',
          redirectUrl: '/login',
          redirectText: 'Proceed to Login',
        };
      case 'reset-password':
        return {
          title: 'Reset Password',
          description: `Enter the verification code we sent to ${maskedContact} to recover your password`,
          successMessage:
            'Verification successful. Redirecting to reset your password...',
          errorMessage: 'Invalid verification code. Please try again.',
          redirectUrl: '/reset-password',
          redirectText: 'Reset Password',
        };
      case 'login-verification':
        return {
          title: '2-Step Verification',
          description: `Enter the security code we sent to ${maskedContact}`,
          successMessage:
            'Verification successful! Redirecting to dashboard...',
          errorMessage: 'Invalid verification code. Please try again.',
          redirectUrl: '/dashboard',
          redirectText: 'Continue to Dashboard',
        };
      case 'withdraw-verification':
        return {
          title: 'Verify Withdrawal',
          description: `Enter the security code sent to ${maskedContact} to confirm your withdrawal request`,
          successMessage: 'Withdrawal verification successful!',
          errorMessage: 'Invalid verification code. Please try again.',
          redirectUrl: '/transactions',
          redirectText: 'View Transaction Status',
        };
      default:
        return {
          title: 'Verification Required',
          description: `Enter the verification code we sent to ${maskedContact}`,
          successMessage: 'Verification successful!',
          errorMessage: 'Invalid verification code. Please try again.',
          redirectUrl: '/dashboard',
          redirectText: 'Continue',
        };
    }
  };

  const pageContent = getPageContent();

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    // Update OTP array
    const newOtp = [...otp];
    // Only take the last character if multiple characters are pasted
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }
  };

  // Handle key press events
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveInput(index - 1);
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveInput(index - 1);
    } else if (e.key === 'ArrowRight' && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();

    // Check if pasted data contains only numbers
    if (!/^\d+$/.test(pastedData)) return;

    // Fill OTP fields with pasted data
    const newOtp = [...otp];
    for (let i = 0; i < Math.min(pastedData.length, otpLength); i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus on the next empty field or the last field
    const focusIndex = Math.min(pastedData.length, otpLength - 1);
    inputRefs.current[focusIndex]?.focus();
    setActiveInput(focusIndex);
  };

  // Get the appropriate request payload based on page type
  const getRequestPayload = () => {
    const basePayload = {
      otp: otp.join(''),
      type: pageType,
    };

    switch (pageType) {
      case 'register-verification':
        return {
          ...basePayload,
          username: userData.username,
          email: userData.email,
          password: userData.password,
        };
      case 'reset-password':
        return {
          ...basePayload,
          email: userData.email || '',
          username: userData.username || '',
          password: userData.password,
        };
      case 'login-verification':
        return {
          ...basePayload,
          email: userData.email || '',
          username: userData.username || '',
          password: userData.password || '',
        };
      case 'withdraw-verification':
        return {
          ...basePayload,
          email: userData.email || '',
          username: userData.username || '',
          amount: userData.withdrawalAmount,
          address: userData.withdrawalAddress,
        };
      default:
        return basePayload;
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if OTP is complete
    if (otp.some((digit) => digit === '')) {
      setSubmitStatus('error');
      setErrorMessage('Please enter all digits of the verification code.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the request payload based on the page type
      const payload = getRequestPayload();

      console.log('Submitting OTP:', payload);
      // Placeholder for actual API call
      const response = await fetch(`${url}/users/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to verify OTP');
      }

      // Handle successful verification
      setSubmitStatus('success');
      login(data.user);

      // Redirect to appropriate page
      setTimeout(() => {
        if (pageType === 'register-verification') {
          navigate('/dashboard');
        }
        if (pageType === 'login-verification') {
          navigate('/dashboard');
        }
        if (pageType === 'reset-password') {
          navigate('/dashboard');
        }
      }, 2000);
    } catch (error: any) {
      // Handle error
      setSubmitStatus('error');
      setErrorMessage(error.message || pageContent.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle resend OTP
  const handleResendOTP = async () => {
    if (!canResend) return;

    setCanResend(false);

    try {
      // Prepare the resend request data
      const resendData = {
        type: pageType,
        email: userData.email || '',
        username: userData.username || '',
        phoneNumber: userData.phoneNumber || '',
      };

      // Placeholder for actual API call
      const response = await fetch(`${url}/users/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resendData),
      });

      if (!response.ok) {
        throw new Error('Failed to resend verification code.');
      }

      // Reset countdown
      setCountdown(resendDelay);

      // Show success message
      setSubmitStatus('success');
      setErrorMessage(
        'A new verification code has been sent to your contact information.',
      );

      // Clear any existing error
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to resend code. Please try again later.');
    }
  };

  // Determine back link based on page type
  const getBackLink = () => {
    switch (pageType) {
      case 'register-verification':
        return '/register';
      case 'reset-password':
        return '/forgot-password';
      case 'withdraw-verification':
        return '/withdraw';
      default:
        return '/login';
    }
  };

  const backLink = getBackLink();

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
              Secure Your Account
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Verification
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Protecting your account with extra security verification. Your funds and data remain safe with us.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Two-factor authentication</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Instant code delivery</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300">Secure verification process</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - OTP Verification Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-between items-center">
            <div className="lg:hidden">
              <Link to="/" className="inline-block">
                <img src={logo} alt="logo" className="h-8 w-auto filter brightness-0 dark:filter-none dark:brightness-100" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to={backLink} className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                Back to {pageType === 'register-verification' ? 'Registration' : pageType === 'reset-password' ? 'Reset Password' : 'Login'}
              </Link>
              <DarkModeSwitcher />
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {pageContent.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {pageContent.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Input Fields */}
              <div className="flex justify-center gap-3">
                {Array(otpLength)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      type="text"
                      maxLength={1}
                      value={otp[index]}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className={`w-12 h-12 md:w-14 md:h-14 border text-center text-xl rounded-lg transition-colors duration-200
                      ${
                        index === activeInput
                          ? 'border-blue-500 ring-2 ring-blue-500/20'
                          : 'border-gray-300 dark:border-gray-600'
                      }
                      focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                      bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    />
                  ))}
              </div>

              {/* Resend Code */}
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Didn't receive a code?{' '}
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      className="text-blue-600 hover:text-blue-500 transition-colors font-medium"
                    >
                      Resend Code
                    </button>
                  ) : (
                    <span className="text-gray-500">
                      Resend in <span className="font-medium">{countdown}s</span>
                    </span>
                  )}
                </p>
              </div>

              {/* Alert Messages */}
              {submitStatus === 'success' && (
                <Alert type="success" message={pageContent.successMessage} />
              )}
              {submitStatus === 'error' && (
                <Alert
                  type="error"
                  message={errorMessage || pageContent.errorMessage}
                />
              )}

              {/* Submit Button */}
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
                    <span>Verifying...</span>
                  </div>
                ) : (
                  'Verify Code'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
