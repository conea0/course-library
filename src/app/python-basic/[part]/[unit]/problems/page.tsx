import { ProblemBox } from "@/components/problemBox/problemBox";
import { ProblemProps } from "@/types";

interface PageProps {
  params: ProblemProps;
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Problems({params, searchParams}: PageProps) {
  const example: ProblemProps = {
    partNumber: Number(params.partNumber),
    unitNumber: Number(params.unitNumber),
    id: Number(searchParams.id),
  };
  return (
    <div>
      <ProblemBox problemProps={example} />
    </div>
  );
}
