import { ProblemBox } from "@/components/problemBox/problemBox";
import getTextContent from "@/feature/content/getTextcontent";
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

  const text = getTextContent(1, 2);
  console.log(text);

  return (
    <div>
      <ProblemBox problemProps={example} />
    </div>
  );
}
