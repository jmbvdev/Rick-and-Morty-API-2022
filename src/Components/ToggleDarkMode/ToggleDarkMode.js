
const ToggleDarkMode = ({setIsDark, isDark}) => {


    return (
        <div className='toggle'>
            <div className='toggle-circle' onClick={()=>setIsDark(!isDark)}></div>
        </div>
    );
};

export default ToggleDarkMode;