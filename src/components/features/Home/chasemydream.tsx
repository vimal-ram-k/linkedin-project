export const ChaseMyDream = () => {
  return (
    <div className="bl-light-bg py-5">
      <div className=" container">
        <iframe
          className=" rounded-3"
          src={'https://youtu.be/IlYUUN8rL_Y'}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '400px', height: '240px' }}
        ></iframe>

        <h1
          className=" m-0 fw-normal mt-4"
          style={{ fontSize: '1.3rem' }}
        >
          In it to chase my dream
        </h1>
        <p
          className=" fw-normal py-2"
          style={{ fontSize: '0.9rem' }}
        >
          Check out Gayatri’s story of finding a new job on LinkedIn{' '}
        </p>
      </div>
    </div>
  );
};
