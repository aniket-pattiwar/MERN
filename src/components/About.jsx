import { useTheme } from '../ThemeContext';

function About() {
  const { theme } = useTheme();

  console.log('About re-rendered');

  const styles = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '80vh',
    padding: '2rem'
  };

  return (
    <div style={styles}>
      <h1>About Page</h1>
      <p>This is the about page. Current theme: {theme}</p>
    </div>
  );
}

export default About;