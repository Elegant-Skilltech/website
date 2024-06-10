const Loading = () => {
  return (
    <div className="w-full h-screen bg-white absolute top-0 left-0 flex items-center justify-center opacity-100 z-[100] black-gradient ">
      <div className="loader w-36 md:w-52">
        <p className="text-center font-[500] text-xl mt-3">LOADING...</p>
      </div>
    </div>
  );
};

export default Loading;
