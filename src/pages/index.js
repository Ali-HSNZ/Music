import Layout from '@/layout/Layout'

import TopChart_and_promoteArtist from '@/components/home/TopCharts&PromoteArtist'
import NewMusics from '@/components/home/NewMusics'

const Home = () => {
  return (
    <Layout>
      <section className='w-full flex pr-6 flex-col h-auto'>
        <TopChart_and_promoteArtist />
        <NewMusics/>
      </section>
    </Layout>
  )
}
export default Home