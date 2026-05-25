import { useState } from "react";
import { RegistrationForm, ResultView } from "@components";

export default function FormPage() {
  const [submittedData, setSubmittedData] = useState(null);

  return submittedData ? (
    <ResultView data={submittedData} onReset={() => setSubmittedData(null)} />
  ) : (
    <RegistrationForm onSubmit={setSubmittedData} />
  );
}
