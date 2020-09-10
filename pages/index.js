import Head from 'next/head'
import PrimarySearchAppBar from "./bar"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import MediaCard from './box';
import MediaCard1 from './box1';
import MediaCard2 from './box2'
export default function Home() {
  return (<>
  <PrimarySearchAppBar/>
      <Head>
      <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=0.85"></meta>
        <title>Trafalgar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <br></br>
      <Grid container spacing={4}>
      <Grid item xs={12} sm={6} style={{padding:"3rem 3rem 3rem 3rem"}}>
        <b><Typography variant="h3">Virtual healthcare</Typography>
        <Typography variant="h3">for you</Typography></b>
        <p style={{color:"grey",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies dapibus nulla, ac fringilla nulla mattis luctus. Mauris fringilla blandit lacus, sed scelerisque erat maximus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut sagittis dui. </p>
        <br></br>
        <Button style={{backgroundColor:"#2196f3", color:"white",marginLeft:"19px"}}>Contact us</Button>
        </Grid> 
        <Grid item xs={12} sm={6}>
          <img src="https://t4.ftcdn.net/jpg/02/03/68/47/240_F_203684720_712oao1DpaAmXQjqrZm6rVqvC1zVrFko.jpg" width="100%" height="100%"></img>
        </Grid> 
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <center><b><Typography variant="h4">Our Services</Typography></b></center>
        <center><Typography variant="h4">___</Typography></center>
        <center><p style={{color:"grey",fontSize:"12px",padding:"0rem 5rem 3rem 5rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies dapibus nulla, ac fringilla nulla mattis luctus. Mauris fringilla blandit lacus, sed scelerisque erat maximus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut sagittis dui. </p></center>
        <div id="p"><Grid container spacing={4}><Grid item xs={12} sm={4} ><MediaCard/></Grid><br></br>
        <Grid item xs={12} sm={4} ><MediaCard1/></Grid><br></br><Grid item xs={12} sm={4} ><MediaCard2/></Grid></Grid></div>
      </main>
      <style jsx>{`
      #p{
        background-image:
            url(https://t3.ftcdn.net/jpg/03/57/02/98/240_F_357029835_KQGVJ8vg6wOCFzfTXooTRFRckwOrwHW6.jpg);
      }
      
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
        }

        main {
          padding: 5rem 5rem 5rem 5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size:20px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
