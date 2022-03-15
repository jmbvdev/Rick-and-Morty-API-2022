
const ToggleDarkMode = ({setIsDark, isDark}) => {


    return (
        <div className='toggle' onClick={()=>setIsDark(!isDark)}>
            <div className='toggle-circle'></div>
        </div>
    );
};

export default ToggleDarkMode;