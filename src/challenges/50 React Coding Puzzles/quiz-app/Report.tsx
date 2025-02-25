interface ReportProps {
  subject: string;
  passingMarks: number;
  totalQuestions: number;
  score: number;
}

const Report = ({
  subject,
  passingMarks,
  totalQuestions,
  score,
}: ReportProps) => {
  return (
    <div className="bg-zinc-800 mx-auto text-zinc-200 text-center py-7 px-5 min-w-sm max-w-lg rounded-md space-y-8">
      <h2 className="text-xl font-bold ">{subject} Quiz Result</h2>
      <div>
        <div className="">
          <h4 className="text-lg">Total Questions: {totalQuestions}</h4>
          <p>Passing Marks: {passingMarks}</p>
          <h3 className="text-xl my-3 font-semibold">
            Your Score: {score || 0}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Report;
