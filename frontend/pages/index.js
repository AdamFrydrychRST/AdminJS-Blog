import Head from 'next/head';
import PostList from './components/Cards.component'
import MenuApp from './components/Menu.components';
import Logo from './components/AnimatedText.component';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/styles.mui';

export default function Home() {
  return (
    <>
    <Head>
      <title>Welcome to my blog!</title>
    </Head>
    <Logo />
    <ThemeProvider theme={theme}>{MenuApp(<PostList />)}</ThemeProvider>
    </>
  );
}