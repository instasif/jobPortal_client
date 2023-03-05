import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  const datas = [
    {
      id: 1,
      qa: "What are Sponsored Jobs?",
      ans: "Sponsored Jobs are the first jobs people see in here search results. When someone searches for a job on here, Sponsored Jobs are highlighted in search results and receive greater visibility than free job listings. Sponsored Jobs also receive up to 4.5X more clicks than free listings.",
    },
    {
      id: 2,
      qa: "What are Sponsored Jobs?",
      ans: "Sponsored Jobs are the first jobs people see in here search results. When someone searches for a job on here, Sponsored Jobs are highlighted in search results and receive greater visibility than free job listings. Sponsored Jobs also receive up to 4.5X more clicks than free listings.",
    },
    {
      id: 3,
      qa: "What are Sponsored Jobs?",
      ans: "Sponsored Jobs are the first jobs people see in here search results. When someone searches for a job on here, Sponsored Jobs are highlighted in search results and receive greater visibility than free job listings. Sponsored Jobs also receive up to 4.5X more clicks than free listings.",
    },
    {
      id: 4,
      qa: "What are Sponsored Jobs?",
      ans: "Sponsored Jobs are the first jobs people see in here search results. When someone searches for a job on here, Sponsored Jobs are highlighted in search results and receive greater visibility than free job listings. Sponsored Jobs also receive up to 4.5X more clicks than free listings.",
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
      </div>

      <div className="space-y-4">
        {datas.map((data) => (
          <FaqCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
