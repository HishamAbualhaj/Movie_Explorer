import Button from "@/components/ui/Button";
import LandingTitle from "@/components/ui/LandingTitle";
import Questions from "./Questions";

const FAQ = () => {
  const questions_1 = [
    {
      id: 1,
      question: "What is StreamVibe?",
      answer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      id: 2,
      question: "How much does StreamVibe cost?",
      answer:
        "StreamVibe offers different subscription plans depending on features and quality options.",
    },
    {
      id: 3,
      question: "What content is available on StreamVibe?",
      answer:
        "StreamVibe includes movies, TV shows, series, and premium on-demand content across multiple genres.",
    },
    {
      id: 4,
      question: "How can I watch StreamVibe?",
      answer:
        "You can watch on supported devices such as phones, tablets, smart TVs, and web browsers.",
      isBorder: false,
    },
  ];

  const questions_2 = [
    {
      id: 5,
      question: "How do I sign up for StreamVibe?",
      answer:
        "You can sign up through the official StreamVibe website or app by creating an account and choosing a plan.",
    },
    {
      id: 6,
      question: "What is the StreamVibe free trial?",
      answer:
        "StreamVibe may offer a limited free trial that lets new users explore features before subscribing.",
    },
    {
      id: 7,
      question: "How do I contact StreamVibe customer support?",
      answer:
        "You can reach customer support through the help center, email support, or the support section inside the app.",
    },
    {
      id: 8,
      question: "What are the StreamVibe payment methods?",
      answer:
        "StreamVibe accepts major payment options such as credit/debit cards, digital wallets, and other region-supported methods.",
      isBorder: false,
    },
  ];

  return (
    <div className="container-wrapper pb-40">
      <div className="flex max-lg:flex-col max-lg:gap-5 justify-between lg:items-end items-start">
        <LandingTitle
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
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
