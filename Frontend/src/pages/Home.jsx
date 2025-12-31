import CreatePaste from "../components/CreatePaste";
import HealthCheck from "../components/HealthCheck";


const Home =()=>{
    return(
        <div style={{display:"flex", justifyContent:"center", width:"100vw"}}>
            <HealthCheck></HealthCheck>
            <CreatePaste></CreatePaste>
        </div>
    )
}
export default Home;