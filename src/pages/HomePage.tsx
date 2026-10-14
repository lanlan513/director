import Hero from '../components/home/Hero'
import LearningOverview from '../components/home/LearningOverview'
import CategorySection from '../components/home/CategorySection'
import RecentLearning from '../components/home/RecentLearning'
import Recommended from '../components/home/Recommended'
import PracticeEntry from '../components/home/PracticeEntry'

const HomePage = () => (
  <>
    <Hero />
    <LearningOverview />
    <CategorySection />
    <RecentLearning />
    <Recommended />
    <PracticeEntry />
  </>
)

export default HomePage
