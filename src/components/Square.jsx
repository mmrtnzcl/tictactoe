export const Square = ({ children, isSelected, updateBoard, index }) => {

    const style = isSelected ? 'text-white bg-blue-500' : '';
    
    const handleclick = () =>{
      updateBoard(index)
    }
      return (
        <div onClick={handleclick} className={`w-20 h-20 border-2 border-solid border-gray-300 rounded-md grid place-items-center cursor-pointer text-5xl ${style}`}>
          {children}
        </div>
      )
    }