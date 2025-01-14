import partyFetch from '../axios/config'

import { useState,useEffect } from 'react'

import { useParams, Link, useNavigate } from 'react-router-dom'

const Party = () => {

  const {id} = useParams()

  const [party, setParty] = useState(null)

  // Load party

  useEffect(() => {
    const loadParty = async () => {
      const res = await partyFetch.get(`/parties/${id}`)

      console.log(res.data)

      setParty(res.data)
    }

    loadParty()
  }, [])

  if(!party) return <div>Carregando...</div>

  return (
    <div className='party'>
      <h1>{party.title}</h1>
      <div className="actions-container">
        <Link className='btn'>Editar</Link>
        <button className='btn-secondary'>Excluir</button>
        <p>Orçamento: R${party.budget}</p>
        <h3>Serviços contratados:</h3>
        <div className="services-container">
          {party.services.map((service) => (
            <div className='service' key={service._id}>
              <img src={service.img} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Party
