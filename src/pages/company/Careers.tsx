import Footer from '@/components/Footer';
import Hero2 from '@/components/Hero2';
import NavBar from '@/components/Navbar';
import StepsSection from '@/components/StepsSection';

import { ChevronDown, ChevronUp, Mail } from 'lucide-react';
import { useState } from 'react';

const CareersSection = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobListings = [
    {
      id: 1,
      title: 'BDM / Country Manager / Regional Manager - Vietnam',
      type: 'Sales, Full Time',
    },
    {
      id: 2,
      title: 'BDM / Country Manager / Regional Manager - Malaysia',
      type: 'Sales, Full Time',
    },
    {
      id: 3,
      title: 'BDM / Country Manager / Regional Manager - Thailand',
      type: 'Sales, Full Time',
    },
    {
      id: 4,
      title: 'BDM / Country Manager / Regional Manager - Brazil',
      type: 'Sales, Full Time',
    },
    {
      id: 5,
      title: 'BDM / Regional Manager - China',
      type: 'Sales, Full Time',
    },
    {
      id: 6,
      title: 'BDM / Country Manager / Regional Manager - Colombia',
      type: 'Sales, Full Time',
    },
    {
      id: 7,
      title: 'BDM - Turkey',
      type: 'Sales, Full Time',
    },
    {
      id: 8,
      title: 'BDM - South Korea',
      type: 'Sales, Full Time',
    },
    {
      id: 9,
      title: 'Country Manager / Regional Manager - MENA',
      type: 'Sales, Full Time',
    },
    {
      id: 10,
      title: 'BDM / Country Manager / Regional Manager - Colombia',
      type: 'Sales, Full Time',
    },
  ];

  const toggleJob = (jobId: any) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section className="relative min-h-screen bg-slate-900/20 text-white">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          Why join the team at
          <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
            AdvantCrest?
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-slate-400 leading-loose max-w-7xl mx-auto">
          Are you ready to supercharge your career in the world of forex
          trading? We're always seeking top talent to join our global team, and
          we're excited about potentially adding you to our ranks. As a
          worldwide leader with offices dotted across the globe, we're proud to
          be the forex broker that traders trust. By joining AdvantCrest,
          you'll unlock a world of unlimited career potential. Get in touch with
          us today and start your journey with a team that is committed to your
          success.
        </p>
      </div>

      <img
        src="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/careers-row2-img.webp"
        alt="carrer"
        className="w-full opacity-50"
      />

      {/* Job Listings Section */}
      <div className="relative py-20 lg:py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          {/* Currently Hiring Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Currently Hiring
            </h2>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-blue-500/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-colors duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-sm text-blue-400">{job.type}</p>
                  </div>

                  <div className="flex-shrink-0 ml-4">
                    {expandedJob === job.id ? (
                      <ChevronUp className="w-6 h-6 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-slate-700/50">
                    <div className="pt-6 space-y-4">
                      <div>
                        <h4 className="text-md font-semibold text-white mb-2">
                          Job Description
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          We are seeking an experienced Business Development
                          Manager / Country Manager / Regional Manager to join
                          our dynamic team. You will be responsible for
                          developing and executing strategic business plans to
                          drive growth in your assigned region.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-md font-semibold text-white mb-2">
                          Key Responsibilities
                        </h4>
                        <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                          <li>
                            Develop and implement business strategies for
                            regional growth
                          </li>
                          <li>
                            Build and maintain relationships with key
                            stakeholders
                          </li>
                          <li>
                            Identify new business opportunities and partnerships
                          </li>
                          <li>Manage and mentor local sales teams</li>
                          <li>Achieve revenue targets and KPIs</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-md font-semibold text-white mb-2">
                          Requirements
                        </h4>
                        <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                          <li>
                            5+ years experience in financial services or forex
                            industry
                          </li>
                          <li>
                            Proven track record in business development and
                            sales
                          </li>
                          <li>Strong leadership and communication skills</li>
                          <li>Fluency in local language and English</li>
                          <li>
                            Bachelor's degree in Business, Finance, or related
                            field
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4">
                        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                          <Mail className="w-4 h-4 mr-2" />
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-20 bg-gradient-to-br from-slate-950 to-blue-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Want to join the team?
            </h3>

            <p className="text-lg text-slate-300 mb-8">
              Career opportunities are waiting. Build a career and grow with us!
            </p>

            <div className="space-y-4">
              <p className="text-slate-300">You can send all details to</p>
              <a
                href="mailto:support@AdvantCrest.com"
                className="inline-block text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                support@AdvantCrest.com
              </a>
              <p className="text-slate-300">
                and also ask for more information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Careers() {
  return (
    <main className="min-h-screen bg-[#070c1b]">
      <NavBar />
      <Hero2
        title="Boost your Career with AdvantCrest"
        subtitle="We are always on the hunt for top-talent, so get in touch!"
        backgroundUrl="https://protradercopy.com/wp-content/themes/ProTrader-Copy/images/careers-banner-bg.webp"
      />
      <CareersSection />
      <StepsSection />
      <Footer />
    </main>
  );
}
