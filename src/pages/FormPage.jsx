import { useState } from "react";
import ResultView from "../components/ResultView";
import RegistrationForm from "../components/RegistrationForm";

export default function FormPage() {
  const [submittedData, setSubmittedData] = useState(null);

  return submittedData ? (
    <ResultView data={submittedData} onReset={() => setSubmittedData(null)} />
  ) : (
    <RegistrationForm onSubmit={setSubmittedData} />
  );
}
