import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Antonio"
          description="Brecker o goleiro"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={444}
          messages={555}
          shares={656}
          name="Pereira"
          description="Bird olhando para a camera"
          music="Clap your hands"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />

      </div>
    </div>
  );
}

export default App;
