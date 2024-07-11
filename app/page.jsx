
import Education from '@/app/_components/Education'; // Add this import
import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';


/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Kishor Tarafder',
  description: '',
};

export default function Home() {
  return (
    <Transition>
      <Header />
      <main>
        <Description />
        <Education /> {/* Add this line */}
        <Thumbnail />
        <Project />
      </main>
    </Transition>
  );
}
