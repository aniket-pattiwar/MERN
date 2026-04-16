import { useTheme } from '../ThemeContext';

function Home() {
  const { theme } = useTheme();

  console.log('Home re-rendered');

  const styles = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '80vh',
    padding: '2rem'
  };

  return (
    <div style={styles}>
      <h1>Home Page</h1>
      <p>Welcome to the home page. Current theme: {theme}</p>
    </div>
  );
}

export default Home;