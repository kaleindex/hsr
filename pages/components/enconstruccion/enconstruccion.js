import React from 'react';
/* import ss from './enconstruccion.module.scss' */
/* import backgroundvideo from '../../../public/videos/city.mp4' */
const enconstruccion = () => {
   return (
      <>
         <div>
            <video autoPlay loop muted>
               <source src='/videos/city.mp4' type='video/mp4' />
            </video>

         </div>

      </>
   );
}
export default enconstruccion;