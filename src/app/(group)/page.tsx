import Image from "next/image";
import data from "../data"
import JobCard from "../components/job-card";
import Header from "../components/header";
import prismaClient from "@/services/prisma";
export default async function Home() {

  const job =await prismaClient.job.findMany()
  
  return (

    <main>
      
     
    <div className="flex flex-wrap justify-center" >
      {
        job.map((job,index)=>{
          return(
            <div key={index}>
              <JobCard  item={job}/>
            </div>
          )
        })
      }
    </div>
    </main>
  );
}
