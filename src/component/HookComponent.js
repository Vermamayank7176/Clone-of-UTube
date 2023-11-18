const HookComponent=()=>{
    const [click,setclicks]=useState(0);

    const onmyclickfunction=()=>{
        setclicks(click+1);
    };
    return( <div>
           <div>0</div>
          <button onClick={onmyclickfunction}>Click Me</button>
    </div>
    )
  }
  
  export default HookComponent;