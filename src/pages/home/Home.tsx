function Home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Fique à vontade!</h2>
            <p>Só não repara na bagunça</p>
          </div>

          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.imgur.com/VpwApCU.png"
              alt="Imagem da Página Home"
              width="400px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;