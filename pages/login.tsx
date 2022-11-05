import Head from 'next/head'
import { useAmp } from 'next/amp'
import Layout from '../components/Layout'
import Byline from '../components/Byline'

export const config = {
  amp: true,
}

export default function IndexPage() {
  const isAmp = useAmp()

  return (

    <Layout>
      <Head>
        <title>The Mobile Login</title>


      </Head>
       <h1>The Login App</h1>
       
       <p>
        The login can now switch To <a href={isAmp ? '/dog?amp=1' : '/dog'}>My News</a>
        Mark territory damn that dog , but step on your keyboard while you're gaming
        and then turn in a circle put butt in owner's face human give me
        attention meow or eat and than sleep on your face. Friends are not food
        jump around on couch, meow constantly until given food, or walk on car
        leaving trail of paw prints on hood and windshield, and spread kitty
        litter all over house, going to catch the red dot today going to catch
        the red dot today. Jump off balcony, onto stranger's head.
      </p>
      
      
      
      

      <style jsx>
           {`
        h1 {
          margin-bottom: 5px;
          color : red
        }
        p {
          font-size: 24px;
          line-height: 30px;
          margin-top: 30px;
          color: black
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}

       </style>
      </Layout>
  )
}
