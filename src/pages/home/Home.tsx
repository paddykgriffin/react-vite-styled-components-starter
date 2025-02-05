import Layout from '@/components/layout/Layout';
import Typography from '@/components/typography/Typography';
import Section from '@/components/layout/Section';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Section>
        <Typography variant="h1">Heading h1</Typography>
        <Typography variant="h2">Heading h2</Typography>
        <Typography variant="h3">Heading h3</Typography>
        <Typography variant="h4">Heading h4</Typography>
        <Typography variant="h5">Heading h5</Typography>
        <Typography variant="h6">Heading h6</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus rem eum tenetur modi optio accusantium
          repellat cumque facere omnis laudantium, harum est aut alias iure quas obcaecati architecto atque!
        </Typography>
      </Section>
    </Layout>
  );
};

export default Home;
