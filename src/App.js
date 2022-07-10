import React from 'react';
import './App.css';

function App() {

  const [infoMails, setInfoMails] = React.useState({})
  const [prediction, setPrediction] = React.useState({})

  React.useEffect(() => {
    const getData = async () => {
      const responseMails = await fetch("https://api-flask-alejandro-t.herokuapp.com")
      const dataMails = await responseMails.json()
      setInfoMails(dataMails)
      const responsePred = await fetch("https://api-flask-alejandro-t.herokuapp.com/prediccion")
      const dataPred = await responsePred.json()
      setPrediction(dataPred)
    }
    getData()
  }, [])
  return (
    <div className="App">
      <section className='container'>
        <div className='img-container'>
          <img src='https://api-flask-alejandro-t.herokuapp.com/send-file' alt='' />
        </div>

        <div className='container-info'>
          <h2 className='container-info__title'>Detección de SPAM</h2>
          <div className='container-info__text'>
            <p>Total de correos HAM en la prediccion: <span className='ham'>{infoMails.ham}</span></p>
            <p>Total de correos SPAM en la prediccion: <span className='spam'>{infoMails.spam}</span></p>
            <p>Precision: {100 * (prediction.prediction)}%</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
