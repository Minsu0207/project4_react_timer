function MyTime() {
  return (
    <>
      <div>
        { <h2 className='myt'>현재시간  
        {new Date().toLocaleTimeString()}</h2> }
        
      </div>
    </>  
  );
}

export default MyTime;