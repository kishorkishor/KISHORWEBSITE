export default function Education() {
  return (
    <section className='place-items-baseline justify-between space-y-12 px-2 py-20 lg:container lg:flex'>
      <div>
        <h2 className='mb-6 text-4xl font-bold lg:text-7xl'>Education</h2>
        <ul className='ml-8 max-w-lg list-outside list-disc space-y-2'>
          <li>
            <span className='font-bold'>High School:</span> Motijheel Government
            Boys' High School <br />{' '}
            <span className='mt-2 font-semibold'>GPA: 5.0</span>
          </li>
          <li>
            <span className='font-bold'>College:</span> Govt. Science College,
            Tejgaon, Dhaka <br />{' '}
            <span className='mt-2 font-semibold'>GPA: 5.0</span>
          </li>
          <li>
            <span className='font-bold'>University:</span> Bachelor of
            Engineering in Computer Science and Engineering from American
            International University – Bangladesh
            <br />
            <span className='mt-2 font-semibold'>CGPA: 3.92</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='mb-6 text-4xl font-bold lg:text-7xl'>
          Internship Experience
        </h2>
        <ul className='ml-8 max-w-lg list-outside list-disc space-y-2'>
          <li>
            <span className='font-bold'>Position:</span>
            Intern at Geo Teach <br />
            <span className='font-semibold'>Duration: 1 year</span>
          </li>

          <li>
            <span className='font-bold'>Project Research and Planning:</span>{' '}
            Involved in detailed project research and planning phases
          </li>
          <li>
            <span className='font-bold'>Efficiency Improvement:</span>
            Enhanced project timelines and efficiency through innovative
            thinking
          </li>
          <li>
            Developed various web applications using Angular and ASP.NET Core
          </li>
          <li>Designed efficient algorithms for application functionality</li>
        </ul>
      </div>
    </section>
  );
}
