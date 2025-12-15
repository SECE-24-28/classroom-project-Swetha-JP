import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../schemas/validationSchemas';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

function Signup() {
  const { dispatch } = useApp();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(signupSchema)
  });

  const onSubmit = async (data) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      dispatch({ 
        type: 'LOGIN', 
        payload: { 
          name: data.name, 
          email: data.email,
          phone: data.phone,
          id: Date.now().toString()
        }
      });
      
      showNotification('Account created successfully! Welcome to RechargeApp.', 'success');
      reset();
      navigate('/');
    } catch (error) {
      showNotification('Signup failed. Please try again.', 'error');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-600">
            Join thousands of satisfied users
          </p>
        </div>

        <Card>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              register={register('name')}
              error={errors.name?.message}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              register={register('email')}
              error={errors.email?.message}
            />

            <Input
              label="Phone Number (Optional)"
              type="tel"
              placeholder="Enter your phone number"
              register={register('phone')}
              error={errors.phone?.message}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a strong password"
              register={register('password')}
              error={errors.password?.message}
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              register={register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <a href="#" className="text-primary-500 hover:text-primary-600">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-500 hover:text-primary-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button
              type="submit"
              loading={isSubmitting}
              className="w-full"
              size="lg"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-500 hover:text-primary-600 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signup;