// GoogleAuth.js
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import axios from 'axios';
import Button from '@/components/ui/Button';
import GoogleIcon from '@/assets/google-icon.svg';
import { useAuth } from '@/context/authentication/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { usePost } from '@/apis';

const GoogleAuth = ({ mode }) => {
  const postAuthData = usePost('auth', '/Auth/AuthenticateUser', {
    onSuccess: data => {
      console.log(data, 'data');
    },
  });
  const [loading, setLoading] = useState(false);
  const { setUser, user } = useAuth();
  const navigate = useNavigate();

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async tokenResponse => {
      setLoading(true);
      try {
        // Get user info from Google
        const userInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          },
        );

        // Here you would typically make different API calls based on mode
        if (mode === 'signup') {
          await postAuthData.mutateAsync({
            provider: 'Google',
            accessToken: tokenResponse.access_token,
          });
        } else {
          navigate('/create-property');
          console.log('Signing in with Google');
        }
        setUser(userInfo.data);
      } catch (error) {
        console.error(`Google ${mode} failed:`, error);
        // Handle specific error cases
        if (error.response?.status === 404 && mode === 'signin') {
          alert('No account found. Please sign up first.');
        } else if (error.response?.status === 409 && mode === 'signup') {
          alert('Account already exists. Please sign in instead.');
        }
      } finally {
        setLoading(false);
      }
    },
    onError: error => console.error(`Google ${mode} failed:`, error),
  });

  return (
    <Button
      iconUrl={GoogleIcon}
      onClick={handleGoogleAuth}
      className="bg-white text-secondary hover:bg-white/50"
    >
      {loading ? (
        'Loading...'
      ) : (
        <>{mode === 'signup' ? 'Sign up with Google' : 'Sign in with Google'}</>
      )}
    </Button>
  );
};

export default GoogleAuth;
