import React from "react";
import {Card, CardImg, CardText, CardTitle, CardBody} from 'reactstrap';
import { Loading } from "./LoadingComponent";

function RenderCard({item, isLoading, errMess}) {
if(isLoading) {
    return <Loading/>

}
if(errMess) {
    return <h4>{errMess}</h4>;
  
}


    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}




function Home(props){
    return(
        <div className="container">
        <div className="row"></div>
        <div className ="col-md m-1">
<RenderCard item={props.campsite} isLoading={props.campsitesLoading}
errMess={props.campsites.ErrMess} />
        </div>
         <div className ="col-md m-1">
<RenderCard item={props.promotion} />
        </div>
         <div className ="col-md m-1">
<RenderCard item={props.partner} />
        </div>
        <h4>Home</h4>
        </div>
    );
}

export default Home;