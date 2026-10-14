import Hero from '../components/home/Hero'
import LearningOverview from '../components/home/LearningOverview'
import DomainSection from '../components/home/DomainSection'
import RecentLearning from '../components/home/RecentLearning'
import Recommended from '../components/home/Recommended'
import PracticeEntry from '../components/home/PracticeEntry'

const HomePage = () => (
  <>
    <Hero />
    <LearningOverview />
    <DomainSection />
    <RecentLearning />
    <Recommended />
    <PracticeEntry />
  </>
)

export default HomePage
