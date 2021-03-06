import Head from 'next/head';
import GlslCanvas from '../components/GlslCanvas';
import fragment from '../shaders/fragment.glsl';
import vertex from '../shaders/vertex.glsl';

const Home = () => (
  <>
    <Head>
      <title>GLSL testing</title>
    </Head>
    <GlslCanvas fragment={fragment} vertex={vertex} className="canvas" />
  </>
);

export default Home;
