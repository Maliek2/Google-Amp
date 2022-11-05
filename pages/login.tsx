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
       </p>
       <p> 
        Jump off balcony, onto stranger's head.
      </p>
      <p>
        Ice cream lollipop marshmallow tiramisu jujubes croissant. Bear claw
        lemon drops marzipan candy bonbon cupcake powder. Candy canes cheesecake
        bear claw pastry cake donut jujubes. Icing tart jelly-o soufflé bonbon
        apple pie. Cheesecake pie chupa chups toffee powder. Bonbon lemon drops
        carrot cake pudding candy halvah cheesecake lollipop cupcake. Pudding
        marshmallow fruitcake. Gummi bears bonbon chupa chups lemon drops. Wafer
        dessert gummies gummi bears biscuit donut tiramisu gummi bears brownie.
        Tootsie roll liquorice bonbon cookie. Sesame snaps chocolate bar cake
        croissant chupa chups cheesecake gingerbread tiramisu jelly. Cheesecake
        ice cream muffin lollipop gummies. Sesame snaps jelly beans sweet bear
        claw tart.
      </p>
      <p>
        Sweet topping chupa chups chocolate cake jelly-o liquorice danish.
        Pastry jelly beans apple pie dessert pastry lemon drops marzipan
        gummies. Jelly beans macaroon bear claw cotton candy. Toffee sweet
        lollipop toffee oat cake. Jelly-o oat cake fruitcake chocolate bar
        sweet. Lemon drops gummies chocolate cake lollipop bear claw croissant
        danish icing. Chocolate bar donut brownie chocolate cake lemon drops
        chocolate bar. Cake fruitcake pudding chocolate apple pie. Brownie
        tiramisu chocolate macaroon lemon drops wafer soufflé jujubes icing.
        Cheesecake tiramisu cake macaroon tart lollipop donut. Gummi bears
        dragée pudding bear claw. Muffin cake cupcake candy canes. Soufflé candy
        canes biscuit. Macaroon gummies danish.
      </p>
      <p>
        Cupcake cupcake tart. Cotton candy danish candy canes oat cake ice cream
        candy canes powder wafer. Chocolate sesame snaps oat cake dragée
        cheesecake. Sesame snaps marshmallow topping liquorice cookie
        marshmallow. Liquorice pudding chocolate bar. Cake powder brownie
        fruitcake. Carrot cake dessert marzipan sugar plum cupcake cheesecake
        pastry. Apple pie macaroon ice cream fruitcake apple pie cookie. Tootsie
        roll ice cream oat cake cheesecake donut cheesecake bear claw. Sesame
        snaps marzipan jelly beans chocolate tootsie roll. Chocolate bar donut
        dragée ice cream biscuit. Pie candy canes muffin candy canes ice cream
        tiramisu.
      </p>
      
      
      

      <style jsx>
           {`
        h1 {
          margin-bottom: 15px;
          color : red
        }
        p {
          font-size: 20px;
          line-height: 30px;
          margin-top: 30px;
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
