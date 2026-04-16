import { useTheme } from '../ThemeContext';

function Login() {
  const { theme } = useTheme();

  console.log('Login re-rendered');

  const styles = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '80vh',
    padding: '2rem'
  };

  return (
    <div style={styles}>
      <h1>Login Page</h1>
      <p>Please log in. Current theme: {theme}</p>
    </div>
  );
}

export default Login;