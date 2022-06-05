export interface RequestData {
  id: string;
  submission_type?: string;
  is_reviewed: boolean;
  created_at: Date;
  submission_content?: FileSubmission | LinkSubmission;
}

interface FileSubmission {
  title: string;
  description: string;
  created_at: Date;
  link: string;
}

interface LinkSubmission {
  title: string;
  description: string;
  created_at: Date;
  file: string;
}

export async function getSubmissionRequests(): Promise<RequestData[]> {
  // fetch existing submission requests
  const res = await fetch('http://localhost:8000/submissions/');
  const requestData: RequestData[] = await res.json()

  return requestData;
}
