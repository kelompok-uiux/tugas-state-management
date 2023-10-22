const initialColor: any[] = [
  {
    color:  "bg-blue-500"
  }
];

export default function colorReducer(state= initialColor, action:any) {
  switch (action.type) {
    case "color/colorSwitch": {
      
      return  state.map((div) =>{
        if (div.color === "bg-red-500"){
          return {
            ...div,
            color: "bg-blue-500"
          }
        }else {
          return {
            ...div,
            color: "bg-red-500"
          }
        }
      })
    }
    default:
      return state 
  }
}


