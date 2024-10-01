const initialvalue = 0

const reducer=(state = initialvalue,action)=>{
    switch(action.type){
        case "ADD":
            return state +action.payload

            case "DEC":
                return state -action.payload

                default:
                return state
    }
}
export default reducer