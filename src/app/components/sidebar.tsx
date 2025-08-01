"use client";
import { Button, Card, RadioGroup } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  // we have taken out to give same value even after refresh
  const query = searchParams.get("q") || "";
  const jt = searchParams.get("jt") || "";
  const et = searchParams.get("et") || "";

  const [jobType, setJobType] = useState(jt);
  const [employmentType, setEmploymentType] = useState(et);

  function handleSubmit() {
    const url = `/search?q=${query}&jt=${jobType}&et=${employmentType}`
    router.push(url);
    // router.refresh();
    
  }

  return (
   <aside>
      <Card className="w-60 h-100 m-2">
        <Card className="m-2">Job Type</Card>
        <RadioGroup.Root
          value={employmentType}
          onValueChange={setEmploymentType}
          name="employment-type"
        >
          
          <RadioGroup.Item value="fulltime">FULL TIME</RadioGroup.Item>
          <RadioGroup.Item value="parttime">PART TIME</RadioGroup.Item>
        </RadioGroup.Root>

        <Card className="m-2">Remote Job</Card>
        <RadioGroup.Root
          value={jobType}
          onValueChange={setJobType}
          name="job-type"
        >
          <RadioGroup.Item value="remote">Remote Jobs</RadioGroup.Item>
          <RadioGroup.Item value="on-site">On-Site</RadioGroup.Item>
        </RadioGroup.Root>
      </Card>
      <Button onClick={handleSubmit}>Filter</Button>
    </aside>
  );
}
