

import React from "react";
import { FaGraduationCap, FaUsers, FaHandshake } from "react-icons/fa";
import {
  FaInnosoft,
  FaChartLine,

  FaCog,

  FaNetworkWired,
} from "react-icons/fa";
import { IoPieChart } from "react-icons/io5";

const Dash = () => {
  return (
    <>
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            STEM Power Programs
          </h1>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  STEM Education & Training
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Workshops, coding boot camps, mentorship, and career development
                initiatives. Providing skills in science, technology,
                engineering, and math to youth across Rwanda.
              </p>
              <div className="flex space-x-2">
                <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs">
                  Workshops
                </span>
                <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs">
                  Coding Bootcamps
                </span>
              </div>
              <div className="mt-2 space-x-2">
                <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs">
                  Mentorship
                </span>
                <span className="bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs">
                  Career Development
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Youth Empowerment & Inclusion
                </h2>
              </div>
              <p className="text-gray-600">
                Special focus on underrepresented groups, especially women and
                girls, to encourage participation in STEM fields.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl text-teal-500 mr-4" />
                <FaInnosoft className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Innovation & Problem Solving
                </h2>
              </div>
              <p className="text-gray-600">
                Encouraging students to apply STEM skills to real-world
                problems, fostering innovation.
              </p>
            </div>

          </div>
        
          <div className="flex justify-center items-center mt-16">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center w-96">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-5xl text-teal-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">
                  Collaboration & Partnerships
                </h2>
              </div>
              <p className="text-gray-600">
                Partnering with schools, universities, tech companies, and
                government agencies to build a comprehensive STEM ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-gray-50 ">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center mx-auto ">
              How Data Analysis & Dashboards Helps STEM Power Rwanda
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">
            {/* Track & Monitor Impact */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaChartLine className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Track & Monitor Program Impact
                </h2>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <FaGraduationCap className="mr-2 text-teal-500" />
                  <span className="text-gray-600">
                    Real-Time Data: Track program metrics like participant
                    numbers, demographics, skill development, and outcomes.
                    Visualize Impact: Dashboards provide clear insights into
                    program success, such as: Participation rates Gender and age
                    breakdown Success rates (graduation, employment, etc.)
                    Student feedback
                  </span>
                </div>
              </div>
            </div>

            {/* Resource Allocation & Planning */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaCog className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Resource Allocation & Planning
                </h2>
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-teal-600">
                    Informed Decisions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Use past data to optimize resources (e.g., trainers,
                    materials) for future programs.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-teal-600">
                    Program Insights
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Identify which workshops or courses had the highest
                    engagement to guide curriculum development.
                  </p>
                </div>
              </div>
            </div>

            {/* Personalize Programs */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Personalize Programs
                </h2>
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-teal-600">
                    Track Student Progress
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitor individual progress in real-time and identify areas
                    where students need extra support.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-teal-600">
                    Tailored Learning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Provide personalized feedback to students to enhance their
                    learning experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Fundraising & Reporting */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="text-4xl text-teal-500 mr-4" />
                <IoPieChart className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Fundraising & Reporting
                </h2>
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-teal-600">
                    Transparent Reporting
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Share key data with donors and stakeholders to show program
                    impact.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-teal-600">
                    Demonstrate Value
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Showcase clear data on the return on investment for
                    contributors.
                  </p>
                </div>
              </div>
            </div>

            {/* Networking & Partnerships */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaNetworkWired className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Networking & Partnerships
                </h2>
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-teal-600">
                    Demonstrate Success
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Data on alumni outcomes can be used to attract future
                    partnerships.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-teal-600">
                    Strengthen Collaboration
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Build strategic partnerships with tech companies,
                    universities, and other stakeholders.
                  </p>
                </div>
              </div>
            </div>

            {/* Student & Alumni Tracking */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-4xl text-teal-500 mr-4" />
                <h2 className="text-xl font-semibold text-gray-800">
                  Student & Alumni Tracking
                </h2>
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium text-teal-600">
                    Long-Term Impact
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Track the success of alumni in the workforce or higher
                    education.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-teal-600">
                    Visualize Success
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dashboards can show the career progression of students over
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;