import Head from 'next/head'
import { useAmp } from 'next/amp'
import Byline from '../components/Byline'

export const config = {
  amp: 'hybrid',
}

export default function BlogPage() {
  const isAmp = useAmp()

  return (
    <div>
      <Head>
        <title>The Blog</title>
      </Head>
      <h1>The Mobile Blog</h1>
      <Byline author="Daily News" />
      <p>
        <a href={isAmp ? '/dog' : '/dog?amp=1'}>
          {isAmp ? 'View Non-AMP' : 'View AMP'} Version
        </a>
      </p>
      <p className="caption">Maliek News</p>
      <p>
       Maliek News{' '}
        <a href={isAmp ? '/?amp=1' : '/'}>Mobile App</a> 
        Marzipan gummi
        bears pie danish lollipop pudding powder gummi bears sweet. Pie sweet
        roll sweet roll topping chocolate bar dragée pudding chocolate cake.
        Croissant sweet chocolate bar cheesecake candy canes. Tootsie roll icing
        macaroon bonbon cupcake apple pie candy canes biscuit candy canes.
        Jujubes jelly liquorice toffee gingerbread. Candy tootsie roll macaroon
        chocolate bar icing sugar plum pie. Icing gummies chocolate bar
        chocolate marzipan bonbon cookie chocolate tart. Caramels danish halvah
        croissant. Cheesecake cookie tootsie roll ice cream. Powder dessert
        carrot cake muffin tiramisu lemon drops liquorice topping brownie.
        Soufflé chocolate cake croissant cupcake jelly.
      </p>
