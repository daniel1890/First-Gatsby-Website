// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='Cute Kitties Sitting in a Row'
        src='https://images2.fanpop.com/image/photos/10500000/Pretty-Kitty-Wallpaper-cats-10547167-1600-1200.jpg'
      />
    </Layout>
  );
};

// Step 3: Export your component
export default IndexPage;
