import { useRouter } from 'next/router'

export default function post1(){
    const router = useRouter();
    return(
        <div>
            <h2>Post Detail:</h2>
            <p>Post Id: {router.query.post}</p>
        </div>
    )
}