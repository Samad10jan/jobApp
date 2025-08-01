import prismaClient from "@/services/prisma";
import JobCard from "../../components/job-card";
import data from "../../data"

export default async function Search({ searchParams }) {

    const query = searchParams.q
    const jt = searchParams.jt || "remote"
    const et = searchParams.et || "fulltime"
    console.log(jt);
    

    // const jobData = await prismaClient.job.findMany({
    //     where: {
    //         title: {
    //             contains: query,
    //             mode: "insensitive"
    //         }
    //         ,
    //         job_type: jt,
    //         employment_type:et

    //     }
    // })


    const res = await fetch(`http://localhost:3000/api/search?q=${query}&jt=${jt}&et=${et}`);
    console.log(res);
    
    const data = await res.json();
    const jobData = data?.data;
    console.log(jobData);


    
    

    

    

    return (
        <div>
            <div>

            </div>

            <div className="flex flex-wrap justify-center ">

                {
                    jobData.map((job, index) => {
                        return (
                            <div key={index} className="flex felx-col">
                                <div>
                                    <JobCard item={job} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}