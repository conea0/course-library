import { ProblemBox } from "@/components/problemBox/problemBox";
import { problemProps } from "@/types";

export default function Problems({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const example: problemProps = {
    part: Number(params.part),
    unit: Number(params.part),
    id: Number(searchParams.id),
  };

  return (
    <div>
      <ProblemBox problemProps={example} />
    </div>
  );
}
