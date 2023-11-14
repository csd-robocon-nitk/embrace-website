import { Navigate, useParams } from "react-router-dom";
import EmpoweringGirlsInStem from './empowering-girls-in-stem/page'

export default function Blog () {
    let { slug } = useParams()

    if (slug == "empowering-girls-in-stem") return <EmpoweringGirlsInStem />
    else return <Navigate to = "/resources#blogs" />
}