import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function TryPear() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Content area */}
        <div className="relative pb-2 pt-32 md:pb-4 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="mb-4 text-4xl font-semibold" data-aos="fade-up">
              Interested in contributing to Mivro?
            </h1>
            <p
              className="mb-4 text-sm text-gray-500 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Mivro is built by a large community of developers. If you have
              questions, or would like to discuss, you can join our Discord and
              talk to us directly! 💬 
            </p>
            <p
              className="mb-8 text-sm text-gray-500 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Support our project by giving the repo a
               star! 🤩
            </p>

            <div className="mx-auto max-w-xs items-center justify-center sm:flex sm:max-w-none sm:space-x-2.5">
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="w-full sm:w-auto"
              >
                <Button asChild size="lg" className="w-full sm:w-[180px]">
                  <Link
                    href="https://github.com/SpaceTesla/Mivro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 inline ml-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"
      />
    </svg>
                  </Link>
                </Button>
              </div>
              <div
                className="mt-2.5 w-full sm:mt-0 sm:w-auto"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-[180px]"
                >
                  <Link
                    href="https://docs.google.com/presentation/d/1mxhh5Z6-F71714eD62kbfIa_T-FQAd3bwUTcZmL84Do/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project PPT
                    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 inline ml-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"
        />
      </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
