import { useRouter } from 'next/router'

export default function Post(){
    const router = useRouter();
    return(
        <div>
            <h2>Post Detail:</h2>
            <p>Post Id: {router.query.id}</p>
        </div>
    )
}