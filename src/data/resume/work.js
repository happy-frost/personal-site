/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Food Panda',
    position: 'Software Engineer Trainee',
    url: 'https://www.foodpanda.com/',
    startDate: '2024-10-01',
    endDate: '2025-03-31',
    summary: '',
    highlights: [
      'Developed and optimized high-performance backend applications in a fast-paced Agile environment, driving feature releases and bug resolutions',
      'Implemented automated unit, integration and end-to-end tests using Golang resulting in a significant reduction in uncaught bugs and enhanced system reliability',
      'Orchestrated a seamless service launch in a new country, leveraging AWS SQS, SQL, and Kubernetes, achieving 99% uptime and 100% successful traffic migration, demonstrating reliable deployment',
      'Conducted in-depth analysis of load test, CPU and memory utilization making data-driven decisions to optimize resource allocation for cost-efficiency while maintaining strict adherence to Service Level Agreements (SLAs)',
      'Designed and developed a comprehensive dashboard to enhance system observability, providing real-time insights into key business metrics, enabling faster issue detection and proactive decision-making',
    ],
  },
  {
    name: 'Dyson',
    position: 'Graduate Electronics Engineer',
    url: 'https://www.dyson.com.sg/',
    startDate: '2023-07-24',
    endDate: '2025-09-21',
    summary: 'Promptfoo builds open-source tools to evaluate, find, and fix vulnerabilities in large language models (LLMs). Our open-source tools are used by over 35,000 developers and researchers worldwide.',
    highlights: [
      'Collaborated with cross-functional teams to conduct tests on sensors and optimise algorithms, resulting in a 50% performance improvement',
      'Analyzed sensor performance across various use cases, resulting in algorithm improvements that increased accuracy by 30%',
      'Utilised Git for source control and troubleshooting prototypes to enhance product reliability',
      'Analyzed failure data from tested prototypes to identify root causes, proposing actionable improvements that enhanced future design iterations',
      'Improved current LabView Code that interface with sensors hardware to simplify process of collecting data, reducing time required to setup test by 100%',
    ],
  },
];

export default work;
