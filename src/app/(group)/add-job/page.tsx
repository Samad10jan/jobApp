"use client"
import { useState } from "react"
import { Job} from "../../../../generated/prisma";
export default function AddJob(){
    const [jobTitle,setJobTitle]=useState("");
    const [jobDescription,setDescription]=useState("");
    const [jobLocation,setJobLocation]=useState("");
    const [jobSalary,setJobSalary]=useState("");
    const [jobType,setJobType]=useState("");
     const [jobCategory,setCategory]=useState("");
    const [loading,setLoading]= useState(false);

   async function handleSubmit(){
    setLoading(true);
    const salaryNum = Number.parseInt(jobSalary)
    //@ts-ignore
    const data :Job={
        title:jobTitle,
        description:jobDescription,
        location:jobLocation,
        salary: salaryNum,
        job_type:jobCategory,
        employment_type:jobType,
        
    }
    const res =await fetch("/api/job",{
       method:"POST",
       body:JSON.stringify(data)
    })
    if(res.success){
        
    }

   }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Job Title" type="text"/>
                
            </form>
        </div>
    )
}