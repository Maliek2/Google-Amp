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
        <title>The Cat</title>
      </Head>
      <h1>The Mobile News</h1>
      <Byline author="Login Users" />
      <p className="caption">Maliek Galant</p>

      <amp-img
        alt="Mountains"
        width="550"
        height="368"
        layout="responsive"
        src="https://amp.dev/static/inline-examples/images/mountains.webp"
      >
        <amp-img
          alt="Mountains"
          fallback=""
          width="550"
          height="368"
          layout="responsive"
          src="https://amp.dev/static/inline-examples/images/mountains.jpg"
        ></amp-img>
      </amp-img>
      <p>
        Cat ipsum dolor <a href={isAmp ? '/dog?amp=1' : '/dog'}>Login Users</a>,
        eat grass, throw it back up but refuse to leave cardboard box or groom
        yourself 4 hours - checked, have your beauty sleep 18 hours - checked,
        be fabulous for the rest of the day - checked!. Hide from vacuum
        cleaner. Chirp at birds chew foot chase the pig around the house and
        meoooow!. Chase ball of string climb a tree, wait for a fireman jump to
        fireman then scratch his face claw drapes, for meow to be let in yet
        attack dog, run away and pretend to be victim meow loudly just to annoy
        owners. Touch water with paw then recoil in horror hide when guests come
        over, and tuxedo cats always looking dapper so has closed eyes but still
        sees you or a nice warm laptop for me to sit on pee in human's bed until
        he cleans the litter box. Steal the warm chair right after you get up
        cat not kitten around yet claws in your leg eat all the power cords.
        Lick sellotape curl into a furry donut immediately regret falling into
        bathtub or you call this cat food? and fall asleep on the washing
        machine. Purr for no reason hack up furballs and pelt around the house
        and up and down stairs chasing phantoms. If it smells like fish eat as
        much as you wish. Unwrap toilet paper chew iPad power cord white cat
        sleeps on a black shirt lick the other cats. Lounge in doorway mew. Has
        closed eyes but still sees you sleep on keyboard, so hunt anything that
        moves lick sellotape but slap owner's face at 5am until human fills food
        dish if it smells like fish eat as much as you wish. Meow to be let in
        find empty spot in cupboard and sleep all day and thug cat sit by the
        fire burrow under covers always hungry. Swat at dog hide when guests
        come over purrrrrr chew on cable so mark territory, yet howl on top of
        tall thing or find something else more interesting. Chase mice kitten is
        playing with dead mouse. Sit and stare if it fits, i sits. Mark
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
      
      <style jsx>{`
        h1 {
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          line-height: 30px;
          margin-top: 30px;
        }
        .caption {
          color: #ccc;
          margin-top: 0;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}
