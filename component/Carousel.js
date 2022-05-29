const Carousel = () => {
      const [state, setState] = React.useState([]);
      const [src, setSrc] = React.useState("");
      const [counter, setCounter] = React.useState(0);

    const ACCESS_KEY = "Kczxg3Vtdexfq7Bpc73CUakGry3tBGsDGYAAPPES_uA";
    const BASE_URL = 'https://api.unsplash.com';

  const fetchApiCall = async() => {
      try{
          const promise = await fetch(`${BASE_URL}/photos/?client_id=${ACCESS_KEY}`);
          const data =  await promise.json();
          setState(data);
          setSrc(data[0]?.urls?.full);
      }catch{
          console.log("Error in fetch call");
    }
  }

   React.useEffect(() => {
        let refer = true;   //  React.useRef(true)
        if(refer){
            fetchApiCall();
            refer = false;
        }
   },[]);

      const previous = () => {
        if(counter == 0){
            setCounter(9);
            setSrc(state[counter]?.urls?.full);
            
        }else{
            setCounter(counter-1);
            setSrc(state[counter]?.urls?.full);
        }
      }
 
      const next = () => {
         if(counter==9){
             setCounter(0);
             setSrc(state[counter]?.urls?.full);
            }
         else{
             setCounter(counter+1);
             setSrc(state[counter]?.urls?.full);
         }
      }
      
    return(
        <>
        <div className="Carousel">
            <img src = {src} />
           <div className="buttons">
             <button onClick = {previous}>{"<"}</button>      
             <button onClick={next} >{">"}</button>
           </div>
        </div>  
        </>
    );
}