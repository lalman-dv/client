import { FilePenLineIcon, PlusIcon, UploadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import type { Resume } from "../assets/types";

const Dashboard = () => {
  const [allResuemes, setAllResumes] = useState<Resume[]>([]);
  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };
  useEffect(() => {
    loadAllResumes();
  }, []);
  return (
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient.png')] bg-cover">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Hello ,Alex{" "}
        </p>
        <div className="flex gap-4">
          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-purple-200 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-r from-purple-300 to-purple-500 text-white rounded-full " />
            <p className="text-sm group-hover:text-purple-600 transition-all">
              Create New Resume
            </p>
          </button>
          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-indigo-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-linear-to-r from-indigo-200 to-indigo-500 text-white rounded-full " />
            <p className="text-sm group-hover:text-indigo-600 transition-all">
              Upload Existing Resume
            </p>
          </button>
        </div>
        <hr className="border-slate-300 my-6 sm:w-76" />
        {/* Resume List */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResuemes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                key={index}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}
              >
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm group-hover:scale-105 transition-all px-2 text-center"
                  style={{ color: baseColor }}
                >
                  {resume.title}
                </p>
                <p
                  className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                  style={{ color: baseColor + "90" }}
                >
                  updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
