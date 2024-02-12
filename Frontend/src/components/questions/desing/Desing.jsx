import React, { useState } from 'react';
import styles from "./Desing.module.css";
import { ImSad } from "react-icons/im";
import { FaRegSmileWink } from "react-icons/fa";

export const Desing = ({ quote, setQuote, question, setQuestion }) => {

  const [projects, setProjects] = useState([
    {
      url: 'https://img.freepik.com/free-vector/watercolor-abstract-shapes-template-design_23-2149324861.jpg?w=1380&t=st=1707430805~exp=1707431405~hmac=dad2e714b36b0106825827f38d0d0cb50bac17a1f17af9e28fcc1528012c1f32',
      title: 'Bussines'
    },

    {
      url: 'https://img.freepik.com/free-vector/travel-sale-home-page_52683-44156.jpg?w=1380&t=st=1707430512~exp=1707431112~hmac=1bebf41cc6feda8016199151fe09ec299c4da67fe6068fb332e5c330439471be',
      title: 'Travel'
    },

    {
      url: 'https://img.freepik.com/free-vector/fashion-sale-landing-page-concept_23-2148584182.jpg?w=1380&t=st=1707430067~exp=1707430667~hmac=0dbcf184dd3befe0dcac6eb1d32958ca846f9dfdcf97471d925ebf5c9fac3a17',
      title: 'Esthetic'
    },
    {
      url: 'https://img.freepik.com/free-vector/landing-page-travel-with-photo_23-2148378328.jpg?w=1380&t=st=1707430145~exp=1707430745~hmac=7f82bd87e3e891ddbdeef813784e936aeba5354942856cf7e1604f7f48b7cfb7',
      title: 'Explore'
    },
    {
      url: 'https://img.freepik.com/free-vector/landing-page-template-innovative-companies_23-2148691552.jpg?w=1380&t=st=1707430340~exp=1707430940~hmac=edebb677c9cf77b882dc45ee0f3ca8ff916e212f288219d8650661297247c056',
      title: 'Company'
    },
    {
      url: 'https://img.freepik.com/free-vector/shopping-online-landing-page-concept_23-2148529366.jpg?w=1380&t=st=1707430394~exp=1707430994~hmac=1bb1323fce90c0475ee2e6b7cc508ea930535431ea2506eca60a9545ed767f91',
      title: 'Ecommerce'
    },
    {
      url: 'https://img.freepik.com/free-vector/travel-sale-landing-page_23-2148636423.jpg?w=1380&t=st=1707430471~exp=1707431071~hmac=3ea6b0bbc56916778e2566489163c7631fde79f58ebc4e3954bb74aa0938d9f6',
      title: 'Travel'
    },
    {
      url: 'https://img.freepik.com/free-vector/flat-design-white-party-landing-page_23-2149325233.jpg?w=1380&t=st=1707430609~exp=1707431209~hmac=e7ebf737b2fa14117624a5648af3860e824be6e775bad86264b7e178592aaf15',
      title: 'Ecommerce'
    },
    {
      url: 'https://img.freepik.com/free-vector/marketing-strategy-isometric-landing-page_107791-6914.jpg?w=1380&t=st=1707504494~exp=1707505094~hmac=7130080ccf1d93b9e326623f1f525dac00f16a8d3147145ae1ba53a56003a80c',
      title: 'Marketing'
    },
    {
      url: 'https://img.freepik.com/free-vector/travel-sale-home-page_52683-44156.jpg?w=1380&t=st=1707430512~exp=1707431112~hmac=1bebf41cc6feda8016199151fe09ec299c4da67fe6068fb332e5c330439471be',
      title: 'Travel'
    },
    {
      url: 'https://img.freepik.com/free-vector/hiking-landing-page_23-2148820869.jpg?w=1380&t=st=1707504587~exp=1707505187~hmac=8e57b09774f21f5cfd05a1352e3d9df1b7249f8ee463994489f68e64871b9fa9',
      title: 'Travel'
    },
    {
      url: 'https://img.freepik.com/free-vector/businesswoman-landing-page-template_23-2148786092.jpg?w=1380&t=st=1707504664~exp=1707505264~hmac=9928cc8fe36626d3009bc1983447de70c832a840ab993c141a3109fbad8a327e',
      title: 'Blog'
    }
  ])

  const handleClick = (title) => {
    setQuote({
      ...quote,
      'desing': title
    })
    setQuestion(question + 1)
  }

  // Captura el valor del textArea

  const [valorTextarea, setValorTextarea] = useState('');

  const capturarValor = () => {
    setQuote({
      ...quote,
      'desing': valorTextarea
    })
    setQuestion(question + 1)
  }

  return (
    <div className={styles.containerDesing}>
      <div className={styles.titleCuestion}>
        <h3>Templates</h3>
      </div>
      <div className={styles.imageContainer}>
        {
          projects.map((project, index) => (
            <div key={index} className={styles.model} onClick={() => handleClick(project.title)}>
              <img src={project.url} alt="" />
              <div className={styles.titleContainer}>
                <h4>{project.title} </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, nihil veritatis dolorum illum blanditiis dolores.</p>
                <div className={styles.qualification}>
                  <span>★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <h4>¿No te gusta ninguna plantilla? <ImSad /></h4>
      <textarea
        onChange={(e) => setValorTextarea(e.target.value)}
        name={valorTextarea}
        id=""
        cols="30"
        rows="10"
        placeholder='Escribe tus ideas aqui'
      ></textarea>
      <button onClick={capturarValor}>Enviar</button>
    </div>
  )
}