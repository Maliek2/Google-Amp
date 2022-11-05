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
        <title>The Mobile News</title>


      </Head>
       <h1>The Mobile News</h1>
       
       <p>
        The login can now switch To <a href={isAmp ? '/login?amp=1' : '/login'}>Mobile Users</a>,
        Sit and stare if it fits, i sits. Mark
        territory damn that dog , but step on your keyboard while you're gaming
        and then turn in a circle put butt in owner's face human give me
        attention meow or eat and than sleep on your face. Friends are not food
        jump around on couch, meow constantly until given food, or walk on car
        leaving trail of paw prints on hood and windshield, and spread kitty
        litter all over house, going to catch the red dot today going to catch
        the red dot today. Jump off balcony, onto stranger's head.
      </p>
      
      
      <p>
        Ignore the squirrels, you'll never catch them anyway missing until
        dinner time, for intrigued by the shower, so i could pee on this if i
        had the energy for purrrrrr for vommit food and eat it again lick butt
        and make a weird face. Rub whiskers on bare skin act innocent eat grass,
        throw it back up or lick yarn hanging out of own butt. I am the best cat
        is love, cat is life, or sleep nap, mew but meoooow!. Meowzer!. Friends
        are not food jump off balcony, onto stranger's head intrigued by the
        shower, and eat a plant, kill a hand, touch water with paw then recoil
        in horror yet flop over.
      </p>
      

      <style jsx>
           {`
        h1 {
          margin-bottom: 5px;
          color : blue
        }
        p {
          font-size: 14px;
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
