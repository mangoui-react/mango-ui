import Link from 'next/link';

export default function PageNavigation({
  prevArticle,
  nextArticle,
}: {
  prevArticle: [string | undefined, string | undefined];
  nextArticle: [string | undefined, string | undefined];
}) {
  return (
    <div className="items-center justify-between space-y-6 py-8 sm:flex sm:space-x-4 sm:space-y-0">
      {/* Prev link */}
      {prevArticle?.[1] && (
        <div className="flex-col items-start sm:flex sm:w-1/2">
          <div>
            <div className="mb-1 text-xs font-[650] uppercase text-blue-600">Prev</div>
            <div>
              <Link
                className="flex items-center font-[650] text-slate-800 dark:text-slate-200"
                href={prevArticle[1]}
              >
                <svg
                  className="mr-2 shrink-0 rotate-180 fill-slate-400 dark:fill-slate-500"
                  width="8"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                </svg>
                <span>{prevArticle[0]}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Next link */}
      {nextArticle?.[1] && (
        <div className="ml-auto flex-col items-end sm:flex sm:w-1/2">
          <div>
            <div className="mb-1 text-xs font-[650] uppercase text-blue-600">Next</div>
            <div>
              <Link
                className="flex items-center font-[650] text-slate-800 dark:text-slate-200"
                href={nextArticle[1]}
              >
                <span>{nextArticle[0]}</span>
                <svg
                  className="ml-2 shrink-0 fill-slate-400 dark:fill-slate-500"
                  width="8"
                  height="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
