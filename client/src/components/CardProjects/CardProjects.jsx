import React from 'react'
import { Button } from 'react-bootstrap'

export const CardProjects = ({project}) => {
  return (
    <article className='p-3 rounded-4 border border-3 h-100'>
        <div>
            <div>
                <img width={400} src={project.image} alt="" className='rounded-4'  />
            </div>
            <h3 className='mt-3'>{project.title}</h3>
            <p>{project.description}</p>
            <Button>Entrar</Button>
        </div>
    </article>
  )
}
