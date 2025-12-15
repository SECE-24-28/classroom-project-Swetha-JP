import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../schemas/validationSchemas';
import { useApp } from '../context/AppContext';
import { useNotification } from '../hooks/useNotification';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

function Login() {
  const { dispatch } = useApp();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      dispatch({ 
        type: 'LOGIN', 
        payload: { 
          name: 'John Doe', 
          email: data.email,
          id: '1'
        }
      });
      
      showNotification('Login successful! Welcome back.', 'success');
      reset();
      navigate('/');
    } catch (error) {
      showNotification('Login failed. Please try again.', 'error');
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center">
          <div className="text-6xl mb-4">📱</div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <Card>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              register={register('email')}
              error={errors.email?.message}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={register('password')}
              error={errors.password?.message}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="text-primary-500 hover:text-primary-600">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button
              type="submit"
              loading={isSubmitting}
              className="w-full"
              size="lg"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary-500 hover:text-primary-600 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;