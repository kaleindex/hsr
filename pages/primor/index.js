import Head from 'next/head'
import ss from "./index.module.scss"
import Link from 'next/link'


 const Primor = () => {



   return (<>
      <Head>
         <title>KALE</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <meta name="description" content="agencia creativa digital" />
         <meta property="og:title" content="KALEINDEX" />
         <meta property="og:description" content="Agencia creativa digital" />
         <meta property="og:image" content="/kaleillustration.jpg" />
      </Head>
      
      <div className={ss.container}>
         <div classname={ss.card}>
            <Link href="https://www.wlrk.com/"> 
            Watchell
            </Link>
         </div>
         <div classname={ss.card}>
         <Link href="https://www.skadden.com/"> 
            skaden
            </Link>
         </div>
         <div classname={ss.card}>
         <Link href="https://www.davispolk.com/"> 
            davidspolk
            </Link>
         </div>
         <div classname={ss.card}>
         <Link href="http://www.quinnemanuel.com/"> 
            quinnmanuel
            </Link>
         </div>

         <div classname={ss.card}>
         <Link href="https://www.ceroliniferrari.com.ar/"> 
            Cerolini Ferrari
            </Link>
         </div>
         <div classname={ss.card}>
         <Link href="https://www.estudio-ofarrell.com/en/"> 
            OFarrel
            </Link>
         </div>
         <div classname={ss.card}>
         <Link href="https://mhrlegal.com/"> 
            rMhr legal
            </Link>
         </div>
      </div>


      </>
   )
}

export default Primor