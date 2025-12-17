import Button from "@/components/ui/Button";
import LandingTitle from "@/components/ui/LandingTitle";
import Questions from "./Questions";

const FAQ = () => {
  const questions_1 = [
    {
      id: 1,
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is an informational platform that provides detailed insights, summaries, and metadata about movies and TV shows.",
    },
    {
      id: 2,
      question: "How much does StreamVibe cost?",
      answer:
        "StreamVibe is an informational platform for movies and TV shows that combines detailed content exploration with AI-powered assistance and personalized lists.",
    },
    {
      id: 3,
      question: "What content is available on StreamVibe?",
      answer:
        "StreamVibe covers movies, TV series, and shows across multiple genres, including cast details, summaries, and related content.",
    },
    {
      id: 4,
      question: "How can I browse StreamVibe?",
      answer:
        "You can browse StreamVibe on supported devices such as phones, tablets, smart TVs, and web browsers.",
      isBorder: false,
    },
  ];

  const questions_2 = [
    {
      id: 5,
      question: "How do I sign up for StreamVibe?",
      answer:
        "You can create an account on the StreamVibe website to save titles, manage your library, and personalize your experience.",
    },
    {
      id: 6,
      question: "What is the StreamVibe free trial?",
      answer:
        "StreamVibe provides a free plan that lets users explore the website and use the AI in a limited way without requiring payment.",
    },
    {
      id: 7,
      question: "How do I contact StreamVibe customer support?",
      answer:
        "You can contact support through the help section on the website for assistance or general inquiries.",
    },
    {
      id: 8,
      question: "What are the StreamVibe payment methods?",
      answer:
        "Payments are only required for the paid plan, which unlocks unlimited AI conversations and unrestricted use of lists such as favorites, watched, and watch later.",
      isBorder: false,
    },
  ];

  return (
    <div className="container-wrapper pb-40">
      <div className="flex max-lg:flex-col max-lg:gap-5 justify-between lg:items-end items-start">
        <LandingTitle
          title="Frequently Asked Questions"
          subtitle="Got questions? Explore our FAQ section to find clear answers about StreamVibe, its purpose, and how to use the platform."
        />
        <Button>Ask a Question</Button>
      </div>
      <div className="flex xl:gap-16 lg:gap-10 max-lg:flex-col mt-10">
        <div className="">
          {questions_1.map((q, i) => (
            <Questions key={i} {...q} />
          ))}
        </div>
        <div className="">
          {questions_2.map((q, i) => (
            <Questions key={i} {...q} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
